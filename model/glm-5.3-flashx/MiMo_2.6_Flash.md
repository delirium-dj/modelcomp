# GLM-5.3-FlashX — findings by MiMo 2.6 Flash

- Source: Zhipu AI / Z.ai (`glm-5.3-flashx`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** **Not a new model** — the high-throughput serving tier of GLM-5.3-Flash (launched 2026-09-18, three weeks after the base model's 2026-08-26 reveal). Same checkpoint (320B total / 18B active MoE, 45 layers, hybrid sparse+linear attention with IndexPool, mHC, native multimodal), same 1M/128K limits, same benchmarks — served through an inference configuration Zhipu rates at up to **200 tok/s** (≈5× the Flash tier's decode speed) at ≈2.5× the token price. Zhipu attributes the speed to infrastructure work (100K+ domestic-chip cluster, GLM-5.3-built inference stack), not a different checkpoint; built on the same SGLang-derived engine as Flash.
- **Provider / access:** Z.ai API (model ID `glm-5.3-flashx`, API + experience center open at launch); third-party routes (APIMaster from $0.32/$1.12, ≈13% under list). **Not** included in the GLM Coding Plan at launch (Flash remains the plan tier with 3× GLM-5.3 quota). Open weights (MIT) exist only for the base `GLM-5.3-Flash` — FlashX itself is a hosted endpoint.
- **Release / knowledge:** serving tier released 2026-09-18; underlying model released 2026-08-26; knowledge cutoff not disclosed.
- **IDs:** `z-ai/glm-5.3-flashx` (gateway routes) / `glm-5.3-flashx` (native; sibling `glm-5.3-flash`).
- **Context window:** 1,048,576 tokens; max output 131,072 (128K).
- **Modalities:** text, images, video, files in; text out; reasoning **always on** (`thinking.type: enabled` only — cannot be disabled; `reasoning_effort` low/high/max, default max); tool calls yes (function calling, context caching, structured output, streaming).
- **Pricing (as of 2026-10-07):** Zhipu list **$0.37 in / $1.25 out** per 1M, cached input **$0.075** (≈2.5× the Flash tier's $0.15/$0.50/$0.03); APIMaster routes from $0.32/$1.12. OpenRouter third-party routes for the base Flash go as low as $0.02/$0.50 (provider-dependent). Paid; no free tier for FlashX.
- **Architecture:** identical to GLM-5.3-Flash (MoE 320B-A18B, hybrid attention, native vision encoder); serving differs only in inference configuration. Self-host of the base weights: FP8 ≈306 GiB (≈386 GiB VRAM recommended, practical floor 8× Hopper), BF16 ≈772 GiB.

### Raw benchmarks found

All capability numbers below are **identical to GLM-5.3-Flash** because the checkpoint is the same (Zhipu-run unless noted):

Agent / tool use:

- GDPval-AA v2: **1773** Elo (Zhipu table — clears the 1750+ frontier ref; in-context Opus 4.8 rows list 1582, GPT-5.6 Terra 1571).
- Toolathlon Verified: **78.4** (vs Opus 4.8 76.2). AutomationBench v1.0.6: **48.8** (vs Opus 4.8 41.0). Agents' Last Exam: 26.3.
- Terminal-Bench 2.1: **84.3** (Zhipu) / **84.3** (AA independent) / 62.9 (Vals) — below the 88 ref on Zhipu/AA scales. Terminal-Bench 4.0 (AA): **32.8** (mid).
- τ-Bench Banking (AA): 47.2. Finance Agent v2 (Vals): 57.9. ExploitBench (Generality Labs): 13/41 full exploits, 64.8% ladder mean — above Claude Mythos Preview's 62.2% mean (different counting rule than Anthropic's own run; priced on expired promo tokens).

Reasoning / knowledge:

- GPQA Diamond: **91.2** (AA) — clears the 90%+ ref (Vals: 86.4). HLE with tools: **55.3** (Zhipu); HLE (AA, no tools): **39.9** — a hair under the 40% ref.
- AA Intelligence Index: **41.8** (AA's own measurement on current methodology) vs Zhipu's launch-cited **57** (v4.1.1) — the independent figure is what's published now; both under the 60+ ref. MMLU-Pro (Vals) 86.1; CritPt 15.4; AA-Omniscience 27.5 accuracy / 72.4 non-hallucination.

Coding:

- DeepSWE v1.1: **63.4** (Zhipu; official DeepSWE leaderboard entry ~63 confirms) — under the 74% ref, but beats Opus 4.8's 58.0 and DeepSeek-V4-Vision-Exp's 59.3. NL2Repo: 56.3 (Opus 4.8: 69.7).
- SciCode (AA): **51.6** (under the 55 ref). LiveCodeBench (Vals): 80.5. SWE-bench (Vals): 92.0 (their harness). Vals Code Migration 20.5, Vibe Code Bench 30.8/16.
- AA Coding Index: **71.5** (clears the 70+ ref). Z.ai Code Bench v1.0 (max): 29.0 vs Opus 4.8's 29.5.

Long context:

- No MRCR/needle row found; hybrid linear+sparse attention targets 1M serving at ~1/3 of GLM-5.3's cost (Zhipu); AA-LCR: **80.0** (good retrieval evidence at AA's context depth). Model-card evals ran at 300K per LumaDock's reading.

Multimodal (Zhipu):

- MMVU **80.5**, MVBench **77.8** (both #1 on llmboard's launch boards), CharXiv Reasoning w/tools 89.4, Chartography w/tools 78.0, OfficeQA Pro 62.4, OSWorld 2.0 59.1, Vision2Web 77.8; BabyVision 53.4 (weak vs Gemini-class 70.9).

### Normalized scores (1–100)

- **Tool use: 88/100.** Identical evidence to GLM-5.3-Flash: GDPval-AA v2 1773 clears the frontier ref, Toolathlon/AutomationBench beat Opus 4.8 rows, ExploitBench Mythos-level; TB2.1 84.3 (AA/Zhipu) under the 88 ref and mid ALE/TB4 hold it at 88.
- **Reasoning: 84/100.** GPQA 91.2 (AA) clears the 90+ ref and HLE-tools 55.3 is strong; no-tools HLE 39.9 just misses 40, AA Index 41.8 (vs vendor's 57) sits well under 60+, CritPt soft.
- **Context window: 95/100.** 1,048,576 tokens = ≥1M tier floor with a purpose-built cheap-serving architecture; AA-LCR 80 helps but no ≥98%-at-512K+ needle → floor.
- **Multimodal: 84/100.** Text + image + video + file in (video band 75–90); MMVU/MVBench board-topping, Chartography/CharXiv strong; BabyVision weakness and text-only out keep it mid-band.
- **Coding: 82/100.** DeepSWE 63.4 beats Opus 4.8 (58.0), AA Coding Index 71.5 clears its ref, Vals SWE/LiveCodeBench strong; DeepSWE/SciCode under their frontier refs (74/55) and Vals TB2.1 62.9 drags.
- **Cost efficiency: 93/100.** $0.37/$1.25 is still below the $0.60/$2.20 ≈ 92 anchor (≈93–94), with $0.075 cache reads and third-party routes at $0.32/$1.12; held just under Flash's 96 by the 2.5× tier premium, no Coding-Plan inclusion, no promo pricing, and always-on max-default thinking inflating output bills.
- **Overall Score: 87/100.** (88+84+95+84+82)/5 = 86.6 → 87 — capability-identical to GLM-5.3-Flash: the same frontier-adjacent agent/price story, now with 200 tok/s serving and an independent AA Index correction (42) as the offsets.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (APIMaster FlashX card, LLM Market Cap, AI Tools Directory, plus the shared GLM-5.3-Flash evidence base: z.ai launch blog, OpenRouter/AA rows, Benchgen, LumaDock, Orcarouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
