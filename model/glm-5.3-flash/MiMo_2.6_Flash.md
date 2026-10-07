# GLM-5.3-Flash — findings by MiMo 2.6 Flash

- Source: Zhipu AI / Z.ai (`glm-5.3-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash (released anonymously as "Ox Alpha" for ~a day before the 2026-08-26 reveal)
- **Short description:** Zhipu's first natively multimodal GLM-5 model and its efficiency flagship — **320B total / 18B active** MoE (45 layers, 288 routed + 1 shared experts top-8), hybrid sparse+linear attention (34 KDA linear layers + 11 DSA sparse, 3:1, IndexPool), Manifold-Constrained Hyper-Connections, 30T-token multimodal corpus. Beats the larger GLM-5.2 across the board at ~1/10 the price; approaches Claude Opus 4.8 on coding/agentic suites. Serves 100% on 100K+ domestic Chinese accelerators (Zhipu claim, 2026-09-17). MIT license.
- **Provider / access:** Z.ai API / GLM Coding Plan (3× quota vs GLM-5.3), OpenRouter (Relace, Pareto, Cloudflare Workers AI, etc.), Lambda (B200 serving), self-host via SGLang/vLLM/TokenSpeed/Transformers/KTransformers/Unsloth (native FP8 + BF16 on Hugging Face).
- **Release / knowledge:** released 2026-08-26 (weights 2026-08-25); knowledge cutoff not disclosed → not scored.
- **IDs:** `z-ai/glm-5.3-flash` (gateway routes) / `glm-5.3-flash` (native; HF `zai-org/GLM-5.3-Flash`).
- **Context window:** 1,048,576 tokens (briefly listed at 1,310,720, reverted 2026-09-30); max output up to 128K.
- **Modalities:** text, images, video, files in; text out; reasoning yes (always on — cannot be disabled on the direct API; `reasoning_effort` low/high/**max default**; ~90% of output tokens measured as reasoning); tool calls yes (function calling, tool-call parser, structured outputs).
- **Pricing (as of 2026-10-07):** **$0.15 in / $0.50 out** per 1M, cached input **$0.03** (free cache storage for now); the 50% launch promo ($0.075/$0.25) expired 2026-09-09. Third-party routes: Pareto $0.03/$0.10, Relace $0.09/$0.50. AA blended ≈ $0.10/M on 7:2:1 mix. Free quota via coding plan. Open weights MIT (self-host = hardware cost only).
- **Architecture:** MoE 320B/18B, hybrid attention, vision encoder native (no adapter).

### Raw benchmarks found

Agent / tool use (vendor-run unless noted):

- GDPval-AA v2: **1773** Elo (AA-run board cited by Zhipu — clears the 1750+ frontier ref; above Opus 4.8's 1582, Kimi K3's 1686).
- Toolathlon Verified: **78.4** (llmboard rank 1/42). AutomationBench v1.0.6: **48.8** (beats Opus 4.8's 41.0 and near Gemini 3.7 Flash's 52.3).
- Terminal-Bench 2.1: **84.3** (below the 88% ref; Opus 4.8 85.0, GLM-5.3 88.2). Agents' Last Exam: **26.3** (Opus 4.8 27.0, Sol 28.0 — mid).
- OSWorld 2.0: **59.1** (beats Opus 4.8 54.8). ExploitBench (Generality Labs, 41 bugs, $1B-token budget): **full ACE on 13/41, 64.8% ladder mean** — level with Claude Mythos Preview's 62.2% (cyber-security strength; different counting rule than Anthropic's own run).
- Tau3 / Claw-Eval / MCP Atlas / GDPval percent-row: no verified public score found.

Reasoning / knowledge:

- HLE with tools: **55.3** (vendor; Opus 4.8 57.9). HLE no tools: **39.9** (Epoch/Model Beat independent — just under the 40%+ ref).
- GPQA Diamond: no verified public score found (not in Zhipu's table).
- AA Intelligence Index: **42** on current v4.3 (AA's own measurement, per Orcarouter correction) / **57** on v4.1.1 at launch (vendor-cited figure, level with Opus 4.8 then) — either reading is under the 60+ ref on its scale; GPT-5.6 Sol scores 47 on the same v4.3.
- APEX: 52.8 (Model Beat/Epoch). AA-Omniscience: no verified public score found.

Coding (vendor-run unless noted):

- DeepSWE v1.1: **63.4** (vs GLM-5.2 46.2, Opus 4.8 58.0 — strong, but under the 74% frontier ref).
- NL2Repo: 56.3 (Opus 4.8 69.7). SciCode: **51.6** (Model Beat — under the 55%+ ref). WebDev Arena: 1607 (Model Beat).
- Zhipu Code Bench v1.0: 29.0 vs Opus 4.8's 29.5 (vendor). LiveCodeBench base (pretrain proxy): 37.6. SWE-bench Verified / Vibe Code Bench / AA Coding Index: no verified public score found.

Long context:

- No MRCR/RULER/LCR row found. Architectural story: hybrid linear+sparse attention cuts attention compute 3.0× and KV cache 4.4× vs GLM-5.3 specifically to make 1M serving cheap (3× end-to-end serving gains on domestic chips, Zhipu-claimed). → capacity yes, retrieval unproven.

Vision (vendor):

- MMVU **80.5** (llmboard rank 1/7), MVBench **77.8** (rank 1/18), Chartography w/tools 78.0, CharXiv Reasoning w/tools 89.4, OfficeQA Pro 62.4, Vision2Web 77.8; weak on natural-image BabyVision (53.4 vs Gemini 3.7 Flash 70.9).

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA 1773 clears the frontier ref, Toolathlon #1 (78.4), AutomationBench 48.8 and OSWorld 59.1 beat Opus 4.8 rows, ExploitBench Mythos-level; held at 88 by TB2.1 84.3 (under 88 ref), ALE 26.3 mid, and no Tau3/Claw/MCP rows.
- **Reasoning: 84/100.** HLE 55.3 (tools) is frontier-adjacent, but no-tools HLE 39.9 just misses the 40% ref, GPQA is absent, and the independent AA Index (42 current / 57 legacy vendor-cited) sits well under the 60+ ref.
- **Context window: 95/100.** 1,048,576 tokens = ≥1M tier floor, backed by a purpose-built hybrid-attention serving story; no needle/LCR retrieval number published → floor.
- **Multimodal: 84/100.** Text + image + video + file in (video band 75–90); MMVU and MVBench both #1 on their boards, Chartography/CharXiv strong; BabyVision weakness and no audio keep it mid-band.
- **Coding: 82/100.** DeepSWE 63.4 beats Opus 4.8 (58.0) and TB2.1 84.3 is respectable, but both trail the frontier refs (74/88), SciCode 51.6 misses the 55 ref, and there's no SWE-Verified/LiveCodeBench/AA Coding Index row.
- **Cost efficiency: 96/100.** $0.15/$0.50 with $0.03 cache reads is ~4× cheaper than the $0.60/$2.20 ≈ 92 anchor, AA-measured $0.10 blended and $0.09/index-task, MIT self-hosting available, 117 tok/s first-party serving — held at 96 only because the launch promo expired and always-on thinking means ~90% of output tokens bill as reasoning.
- **Overall Score: 87/100.** (88+84+95+84+82)/5 = 86.6 → 87 — the price-performance disruptor of the batch: GDPval frontier Elo and #1 Toolathlon/MMVU boards at dime-store token rates; GPQA absence, the corrected AA Index (42), and sub-ref hard-coding scores are the honest offsets.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (z.ai launch blog, Benchgen, Lambda, Orcarouter (incl. its 57→42 Index correction), llmboard, Model Beat, Traictory, CheapestInference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
