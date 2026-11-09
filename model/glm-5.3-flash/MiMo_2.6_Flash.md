# GLM-5.3-Flash — findings by MiMo 2.6 Flash

- Source: Zhipu AI / Z.ai (`glm-5.3-flash`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 87). Fresh sources this pass: Vals AI model page
> (independent harness), BenchLM snapshot 2026-11-07, Artificial Analysis model
> page. Changes: Tool use 88→89 (AA Tau3-Banking 47.2% now published);
> Reasoning 84→87 (Vals GPQA Diamond 86.36%, previously "no verified public
> score found"); Multimodal 84→86 (Vals MMMU-Pro 86.01%, ExtractBench 80.75%);
> Coding 82→87 (Vals SWE-bench 92.0%, LiveCodeBench 80.51%); Overall 87→88.8.
> Context window 95 and Cost efficiency 96 held.

## Model card

- **Name:** GLM-5.3-Flash (released anonymously as "Ox Alpha" for ~a day before the 2026-08-26 reveal)
- **Short description:** Zhipu's first natively multimodal GLM-5 model and its efficiency flagship — **320B total / 18B active** MoE (45 layers, 288 routed + 1 shared experts top-8), hybrid sparse+linear attention (34 KDA linear layers + 11 DSA sparse, 3:1, IndexPool), Manifold-Constrained Hyper-Connections, 30T-token multimodal corpus. Beats the larger GLM-5.2 across the board at ~1/10 the price; approaches Claude Opus 4.8 on coding/agentic suites. Serves 100% on 100K+ domestic Chinese accelerators (Zhipu claim, 2026-09-17). MIT license.
- **Provider / access:** Z.ai API / GLM Coding Plan (3× quota vs GLM-5.3), OpenRouter (Relace, Pareto, Cloudflare Workers AI, etc.), Lambda (B200 serving), self-host via SGLang/vLLM/TokenSpeed/Transformers/KTransformers/Unsloth (native FP8 + BF16 on Hugging Face). AA lists 26 API providers.
- **Release / knowledge:** released 2026-08-26 (weights 2026-08-25); knowledge cutoff not disclosed → not scored.
- **IDs:** `z-ai/glm-5.3-flash` (gateway routes) / `glm-5.3-flash` (native; HF `zai-org/GLM-5.3-Flash`).
- **Context window:** 1,048,576 tokens — **1M confirmed 2026-11-08 by Artificial Analysis, Vals AI and BenchLM model pages** (briefly listed at 1,310,720, reverted 2026-09-30); max output up to 128K (Vals: 128k).
- **Modalities:** text, images, video, files in (AA lists text + image input); text out; reasoning yes (always on — cannot be disabled on the direct API; `reasoning_effort` low/high/**max default**; ~90% of output tokens measured as reasoning); tool calls yes (function calling, tool-call parser, structured outputs).
- **Pricing (as of 2026-11-08):** **$0.15 in / $0.50 out** per 1M, cached input **$0.03** (AA: 80% cache discount; blended ≈ $0.10/M on 7:2:1; $0.58 per AA Intelligence-Index task); unchanged since the 2026-10-07 report — the 50% launch promo ($0.075/$0.25) expired 2026-09-09. Third-party routes: Pareto $0.03/$0.10, Relace $0.09/$0.50. Free quota via coding plan. Open weights MIT (self-host = hardware cost only).
- **Architecture:** MoE 320B/18B, hybrid attention, vision encoder native (no adapter).

### Raw benchmarks found

Agent / tool use (vendor-run unless noted):

- GDPval-AA v2: **1773** Elo (AA-run board cited by Zhipu — clears the 1750+ frontier ref; above Opus 4.8's 1582, Kimi K3's 1686).
- **AA Tau3-Banking: 47.2%** (Artificial Analysis leaderboard, via BenchLM 2026-11-07 — NEW this pass; just under the 50%+ frontier ref, far above the 10–25% mid band).
- Toolathlon Verified: **78.4** (llmboard rank 1/42). AutomationBench v1.0.6: **48.8** (beats Opus 4.8's 41.0 and near Gemini 3.7 Flash's 52.3).
- Terminal-Bench 2.1: **84.3** (vendor + AA independent agree — below the 88% ref; Vals AI's own run: **62.9%**, harness gap noted). Terminal-Bench 4.0 (Vals): **37.37%** (#19/61).
- OSWorld 2.0: **59.1** (beats Opus 4.8 54.8). AA ITBench 51.2%, AA Cyber Index 49.9%, CWE-Bench-AA 55.8% (AA via BenchLM). Agents' Last Exam: **26.3** (Opus 4.8 27.0, Sol 28.0 — mid).
- ExploitBench (Generality Labs, 41 bugs, $1B-token budget): **full ACE on 13/41, 64.8% ladder mean** — level with Claude Mythos Preview's 62.2% (cyber-security strength).
- Claw-Eval / MCP Atlas / GDPval percent-row: no verified public score found.

Reasoning / knowledge:

- **GPQA Diamond: 86.36% ±2.13** (Vals AI, #43/138 — NEW this pass; was "no verified public score found"; just under the 90%+ frontier ref). MMLU-Pro: 86.06% (Vals #49/138).
- HLE with tools: **55.3** (vendor; Opus 4.8 57.9). HLE no tools: **39.9** (Epoch/Model Beat independent — just under the 40%+ ref).
- AA Intelligence Index: **28 on current v5.0.1** (AA model page, 2026-11-08; #9/26 in its comparison class) — AA rescaled the index since the previous report (v4.3 showed 42 for this model), so old/new index values are not comparable across versions; on either reading it sits under the 60+ frontier ref.
- FrontierMath v2 (Tiers 1–3): 55.79% / Tier 4: 17.07% (Epoch AI leaderboard via BenchLM). APEX: 52.8 (Model Beat/Epoch). Vals Index composite: 50.86% (#28/34). AA-Omniscience: no verified public score found.

Coding (vendor-run unless noted):

- **SWE-bench (Vals AI): 92.00% ±1.21, #10/88** — NEW this pass; was "no verified public score found".
- **LiveCodeBench (Vals AI): 80.51% ±1.05, #69/143** — NEW this pass.
- DeepSWE v1.1: **63.4** (vs GLM-5.2 46.2, Opus 4.8 58.0 — strong, but under the 74% frontier ref).
- NL2Repo: 56.3 (Opus 4.8 69.7). SciCode: **51.6** (Model Beat — under the 55%+ ref). Vibe Code Bench v1.1: 30.76% (#83/125, Vals — weak). FrontierSWE v2: 18.1% (Proximal).
- Zhipu Code Bench v1.0: 29.0 vs Opus 4.8's 29.5 (vendor). AA Coding Index / SWE-Pro: no verified public score found.

Long context:

- No MRCR/RULER/LCR row found (re-verified 2026-11-08 on AA/Vals/BenchLM — all three list the 1M window, none publishes a retrieval score). Architectural story: hybrid linear+sparse attention cuts attention compute 3.0× and KV cache 4.4× vs GLM-5.3 specifically to make 1M serving cheap. → capacity yes, retrieval unproven.

Vision / multimodal:

- **MMMU-Pro: 86.01% ±0.83 (#23/93, Vals AI)** — NEW this pass.
- **ExtractBench 80.75% / ParseBench 70.55%** (LlamaIndex leaderboards, 2026-11-06 snapshot via BenchLM) — NEW this pass.
- MMVU **80.5** (llmboard rank 1/7), MVBench **77.8** (rank 1/18), Chartography w/tools 78.0, CharXiv Reasoning w/tools 89.4, OfficeQA Pro 62.4, Vision2Web 77.8; weak on natural-image BabyVision (53.4 vs Gemini 3.7 Flash 70.9).

### Normalized scores (1–100)

- **Tool use: 89/100.** GDPval-AA 1773 clears the frontier ref, Toolathlon #1 (78.4), AutomationBench 48.8 and OSWorld 59.1 beat Opus 4.8 rows, and the newly published AA Tau3-Banking 47.2% sits just under the 50% frontier ref (moved 88→89 on that row); capped by TB2.1 84.3 (under the 88 ref; Vals' independent run only 62.9), ALE 26.3 mid, and no Claw/MCP rows.
- **Reasoning: 87/100.** The previously missing GPQA Diamond now verifies at 86.36% (Vals, independent, #43/138) with MMLU-Pro 86.06% — moved 84→87 for that evidence; capped by no-tools HLE 39.9 (just under the 40% ref), the AA Intelligence Index reading (28 on v5.0.1, 42 on legacy v4.3 — under the 60+ ref on both scales), and FrontierMath Tier 4 at 17%.
- **Context window: 95/100.** 1,048,576 tokens = ≥1M tier floor (1M re-confirmed 2026-11-08 by AA, Vals and BenchLM), backed by a purpose-built hybrid-attention serving story; no needle/LCR retrieval number published → floor (held).
- **Multimodal: 86/100.** Text + image + video + file in (video band 75–90); moved 84→86 on new independent rows — Vals MMMU-Pro 86.01% (#23/93) plus ExtractBench 80.75/ParseBench 70.55 — alongside the existing MMVU/MVBench #1 boards and CharXiv 89.4; BabyVision 53.4 weakness and no audio keep it mid-band.
- **Coding: 87/100.** Moved 82→87 on the two new verified rows: Vals SWE-bench 92.00% (#10/88) and LiveCodeBench 80.51%, with TB2.1 84.3 and DeepSWE 63.4 (>Opus 4.8's 58.0) supporting; capped by DeepSWE under the 74 frontier ref, TB2.1 under 88 (Vals run 62.9), weak Vibe Code Bench 30.76%, FrontierSWE v2 18.1%, and no SWE-Pro/AA Coding Index row.
- **Cost efficiency: 96/100.** $0.15/$0.50 with $0.03 cache reads (AA-confirmed 2026-11-08, 80% cache discount, $0.58 per Index task) is ~4× cheaper than the $0.60/$2.20 ≈ 92 anchor, MIT self-hosting available, 18B active — held at 96 because list pricing is unchanged and always-on thinking means ~90% of output tokens bill as reasoning.
- **Overall Score: 88.8/100.** (89+87+95+86+87)/5 = 88.8 → the price-performance disruptor of the batch: frontier-adjacent GPQA (86.4) and GDPval Elo, SWE-bench 92 / LiveCodeBench 80.5 at dime-store token rates; sub-ref hard-coding rows, the AA Index rescale, and BabyVision weakness are the honest offsets.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: Vals AI model page, BenchLM 2026-11-07 snapshot, Artificial Analysis model page, Epoch AI FrontierMath leaderboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Vals AI — GLM 5.3 Flash](https://www.vals.ai/models/zai_glm-5.3-flash)
  - [BenchLM — GLM-5.3-Flash (updated 2026-11-07)](https://benchlm.ai/models/glm-5-3-flash)
  - [Artificial Analysis — GLM-5.3-Flash](https://artificialanalysis.ai/models/glm-5-3-flash)
  - [Z.ai — GLM-5.3-Flash launch post](https://z.ai/blog/glm-5.3-flash)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block). Preserved verbatim during the 2026-11-08 second-pass enrichment (archive not re-scored).

# GLM-5.3-Flash — findings by Mimo v2.6 Flash

- Source: Zhipu AI (Z.ai)/`glm-5.3-flash`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** First natively multimodal GLM-5-series model (revealed 2026-08-26 after a week of anonymous "Ox Alpha" stealth testing): **320B total / 18B active MoE**, hybrid sparse+linear attention, **MIT open weights**, 1M checkpoint context. Beats larger GLM-5.2 across the board at ~1/10 the cost; approaches Opus 4.8 on coding/agentic (TB2.1 84.3 vs 85.0 vendor tables); AA Intelligence Index 42 (v4.3.2) at $0.25/task.
- **Provider / access:** Z.ai API `glm-5.3-flash` / `z-ai/glm-5.3-flash`; OpenRouter, Fireworks, Together, Qubrid, etc.; Hugging Face `zai-org/GLM-5.3-Flash` (MIT); SGLang/vLLM/TokenSpeed. GLM Coding Plan includes Flash (3× usable quota vs GLM-5.3). Free stealth period as Ox Alpha; paid API + open self-host now.
- **Release / knowledge:** stealth as Ox Alpha 2026-08-20; identified/released **2026-08-26** (HF date refs 2026-08-25); knowledge cutoff not isolated.
- **IDs:** `glm-5.3-flash` / `zai-org/GLM-5.3-Flash` / `z-ai/glm-5.3-flash`.
- **Context window:** checkpoint **1,048,576** (OpenRouter later lists **1.31M**); **AA lists 400K based on served deployments**; Z.ai footnotes DeepSWE @400K, NL2Repo @1M — treat 1M as checkpoint claim, 400K as practical served floor to verify.
- **Max output:** up to 128K.
- **Modalities:** **text + image + video + file in**; text out; thinking always on (cannot disable on direct API); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** Z.ai list **$0.15 in / $0.50 out per 1M**, cached $0.03; 50% launch promo ($0.075/$0.25) ran through 2026-09-09 (may still appear on some routes); OpenRouter observed $0.075–0.15 / $0.25–0.50 (volatile); Qubrid $0.0863/$0.29; AA blended ~$0.10/1M, **$0.09 per Intelligence-Index task**. MIT weights = free self-host (hardware only).
- **Architecture:** 320B MoE, 45 layers, 288 routed + 1 shared experts (top-8); 34 KDA linear + 11 DSA sparse layers (3:1); mHC; IndexPool; FP8 native; 30T multimodal pretrain; ~3× less attention compute / 4.4× smaller KV vs GLM-5.3.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found. Z.ai rows are vendor-run (Claude Code / mini-swe-agent where noted); AA/LiveBench rows independent.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai/HF; near Opus 4.8 85.0, behind Terra 87.4 / GLM-5.3 88.2; AA independent also **84.27%**)
- Terminal-Bench 4.0: **32.8%** (AA independent)
- Toolathlon Verified: **78.4%** (Z.ai; > Opus 4.8 76.2, Terra 74.9)
- AutomationBench v1.0.6: **48.8%** (Z.ai; > Opus 4.8 41.0, margin over any rival in set)
- GDPval-AA v2: **1773 Elo** (Z.ai; leads their table > Opus 4.8 1582, Terra 1571, Gemini 3.7 Flash 1527)
- Agents' Last Exam: **26.3%** (Z.ai; trails Opus 4.8 27.3, Terra 27.0, Gemini 3.7 Flash 28.0)
- OSWorld 2.0: **59.1%** (Z.ai; > Opus 4.8 54.8 — vision-agent row)
- Vision2Web: **77.8%** (Z.ai)
- MCP Atlas / Tau3 / Claw-Eval / Finance Agent: no verified public score found

Reasoning / knowledge:

- HLE with tools: **55.3%** (Z.ai; vs Opus 4.8 57.9, GLM-5.2 54.7)
- GPQA Diamond: **91.2%** (AA independent)
- Humanity's Last Exam (AA independent): **39.9%** no-tools / **39.85%** (AI Atlas AA row)
- Artificial Analysis Intelligence Index: **42** (AA v4.3.2 model page, 2026-09-28 — #4/116 open weights; cost $0.25/task; AI Atlas 41.9 corroborates — version skew resolved, see Fresh-source note)
- LiveBench Reasoning: **77.6%**; Mathematics **81.2%**; Global **71.6%** (LiveBench 2026-06-25 via AI Atlas)
- ARC-AGI / FrontierMath / CritPt: no verified public score found

Coding:

- DeepSWE v1.1: **63.4%** (Z.ai, mini-swe-agent @400K; vs GLM-5.2 46.2, Opus 4.8 58.0, Terra 69.6)
- Terminal-Bench 2.1: **84.3%** (see agent row)
- NL2Repo: **56.3%** (Z.ai; trails Opus 4.8 69.7)
- LiveBench Coding: **79.0%**; Agentic Coding **56.8%** (LiveBench)
- SciCode: **51.6%** (AA independent)
- Code Bench v1.0 (Z.ai internal): **29.0 vs Opus 4.8 29.5** max effort (vendor — hold loosely)
- SWE-bench Verified / LiveCodeBench post-train / SWE-Pro: no verified public score found for Flash

Long context:

- Checkpoint 1M (OpenRouter 1.31M); hybrid linear+sparse + IndexPool designed for cheap 1M serving; DeepSWE eval @400K, NL2Repo @1M (Z.ai footnotes)
- MRCR / GraphWalks / ∞Bench: no verified public score found

Multimodal:

- **Native text/image/video/file in** (first multimodal GLM-5)
- CharXiv Reasoning w/ Tools: **89.4%** (Z.ai; ~Opus 4.8 89.9)
- Chartography w/ Tools: **78.0%** (Z.ai; > Opus 4.8 75.0)
- BabyVision: **53.4%** (Z.ai; trails Gemini 3.7 Flash 70.9, Terra 61.6 — natural-image gap)
- MVbench: **77.8%**; MMVU: **80.5%** (Z.ai; video — note non-native-video models use 1fps frame extraction)
- OfficeQA Pro: **62.4%** (Z.ai; > Opus 4.8 48.9)

- Fresh-source note (2026-09-28 re-audit, user-signed-off exception to RULES.md permanence): AA-native **Intelligence Index 42** (#4/116 open weights, v4.3.2) replaces the Qubrid/CheapestInference 57 and matches the AI Atlas 41.9 v4.3 row previously flagged; current cost per Index task $0.25 — scores unchanged pending re-derivation.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 84.3 (independent AA agrees), Toolathlon 78.4, GDPval-AA 1773 (table-leading in Z.ai set), AutomationBench 48.8; capped by OSWorld 59.1 mid, ALE 26.3 slightly behind closed frontier, missing MCP/Tau3/Claw.
- **Reasoning: 86/100.** HLE-tools 55.3, GPQA 91.2, AA Index 42 (v4.3.2 refresh — near GLM-5.3 45, behind MiMo-V2.6-Pro 46 among open weights); capped by HLE no-tools ~39.9.
- **Context window: 82/100.** Checkpoint claims 1M/1.31M but **served deployments list 400K (AA)** and no MRCR row — score for practical usable context with serving caveat → 82 (not 90+).
- **Multimodal: 92/100.** Native text+image+video+file in; CharXiv 89.4 ≈ Opus, Chartography 78 leads set, OfficeQA 62.4, MMVU 80.5; capped by BabyVision 53.4 natural-image gap and no audio/non-text out → 92 (video lifts above pure vision 65–90 band).
- **Coding: 88/100.** TB2.1 84.3 near-Opus, DeepSWE 63.4 > Opus, LiveBench Coding 79; capped by NL2Repo 56.3 behind Opus 69.7, TB4.0 32.8, missing SWE-V/Pro rows.
- **Cost efficiency: 99/100.** $0.15/$0.50 list (promo/hosting to ~$0.075–0.10 in), AA $0.09/task, MIT self-host free, 18B active — essentially best-in-class $/intelligence on the AA Pareto frontier.
- **Overall Score: 87/100.** Mean of five quality dims (88+86+82+92+88)/5 = 87.2 → 87. Best-fit: MIT multimodal agent fleets and vision-heavy workloads at near-zero cost; verify served context length (400K vs 1M) before long-doc pipelines; hardest single-pass science still → Fable/Opus/Sol.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Z.ai GLM-5.3-Flash blog, Benchgen, Qubrid, CheapestInference, AI Atlas, Lambda model card, AA via OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores; Z.ai benchmark rows vendor-run unless marked AA/LiveBench.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
