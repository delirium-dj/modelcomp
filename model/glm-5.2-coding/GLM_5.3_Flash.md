# GLM 5.2 Coding — findings by GLM 5.3 Flash

- Source: Z.ai / Zhipu AI (`opencode/glm-5.2-coding`; upstream `zai-org/GLM-5.2`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2-Coding (GLM Coding Plan serving of GLM-5.2)
- **Short description:** Z.ai's coding-first serving of GLM-5.2 — the June 2026 flagship open-weights MoE that led all open-weight coding models at release. Variant/alias note: GLM-5.2-Coding shares the GLM-5.2 weights (the "Coding" ID is the plan/agent-serving lane, not a separate checkpoint); benchmarks below are the shared GLM-5.2 record. BenchLM ranks the shared weights #47 of 889 (61.55).
- **Provider / access:** OpenCode Zen `opencode/glm-5.2-coding` (no Free ID on Zen); Z.ai API `https://api.z.ai/api/paas/v4/chat/completions` (OpenAI-compatible Chat Completions), plus OpenRouter, Fireworks, AWS Bedrock, Google Vertex AI, DeepInfra. Tool calls, structured JSON output, streaming; thinking effort High/Max.
- **Release / knowledge:** Released 2026-06-13 via the GLM Coding Plan; MIT-licensed weights on Hugging Face 2026-06-16. Knowledge cutoff: not published in the sources reviewed.
- **IDs:** `opencode/glm-5.2-coding` (Zen), `zai-org/GLM-5.2` (Hugging Face). No Zen Free ID — scored on paid pricing.
- **Context window:** 1,000,000 tokens input (BenchLM concurs); 131,072 max output (Hugging Face card / HokAI; DeepSeek Sparse Attention in layers 4–78). Zen-serving cap not separately verified; long-context recall past ~500K unverified by any published needle test.
- **Modalities:** text in / text out only (function calling + JSON mode yes; vision is the separate GLM-5V-Turbo model — no image/audio/video input).
- **Pricing (as of 2026-10-11):** $1.40 in / $4.40 out per 1M tokens (confirmed via OpenRouter listing, apidog 2026-08-30); cached input ~$0.26/1M (81% discount); third-party from ~$0.95/1M (DeepInfra); GLM Coding Plan subscription tiers exist but secondary sources conflict on tier prices — no free API tier.
- **Architecture:** MoE Transformer, ~753B total / ~40B active (HokAI reports 744B/40B), trained on 28.5T tokens, DSA attention, MIT license (commercial use, modification, redistribution).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **99.1%** (AA, independent — elite; fills the Tau2 gap)
- MCP Atlas: **76.8%** (Z.AI model card via benchlm.ai, updated 2026-10-10 — fills the gap the 2026-10-05 pass marked missing)
- GDPval-AA: **1418** (AA — fills the gap; normalized **43.7%**)
- Terminal-Bench 2.1: **81.0%** (model card — corroborated); Vals independent: **67.8%**
- Toolathlon: **48.2%** (model card — weak); AA Agentic Index: **39.4%**; AA ITBench: **42.7%**; APEX-Agents-AA: **33.7%**; ResearchClawBench: **20.7%** (weak rows)
- Terminal-Bench 3.0: **4.6%** (frontierbench.ai — very weak on the 2026 harness)
- Tool-Decathlon: well behind Claude Opus 4.8 and GPT-5.5 (no exact value published — prior pass)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Z.AI model card via benchlm.ai — **well above the 80.3% HokAI reading the prior pass scored on**); AA independent: **89.5%**; Vals: **85.6%** — three-source elite-class agreement
- HLE: **40.5%** (model card — fills the gap); AA-HLE: **41.1%** (AA — above the 40% bar)
- Artificial Analysis Intelligence Index: **33.7** (AA — fills the index gap; BenchLM overall 61.55, #47 of 889, recomposed from the prior 63.16 #44/212)
- AA-LCR v1.1: **78.3%** (AA — fills the long-context gap, solid); CritPt: **20.9%** (model card — fills the gap)
- AIME26: **99.2%**; HMMT Nov 2025: **94.4%**; HMMT Feb 2026: **92.5%** (model card — elite math)
- MMLU: **91.72%**; MMLU-Pro: **80.63%** (HokAI, prior pass) / **86.7%** (Vals) — conflict noted
- AA-Omniscience: **24.3% accuracy / 26.3% non-hallucination row / 4.4 index** (AA — weak)
- AA-IFBench: **73.3%** (AA)
- HLE w/ tools: **54.7%** (model card)

Coding:

- SWE-bench (Vals): **82.8%** (Vals, independent — fills the SWE-bench Verified gap)
- LiveCodeBench (Vals): **69.5%** (Vals — fills the gap, below the vendor-era expectations)
- AA Coding Index: **68.8%** (AA — new); AA-SciCode: **51.2%** (AA — fills the SciCode gap)
- SWE-bench Pro: **62.1%** (model card — corroborated); FrontierSWE: **74.4%** (prior pass); NL2Repo: **48.9%**; ProgramBench: **63.7%**; CursorBench 3.2: **55.0%** (new); PostTrainBench: **31.7%** (weak)
- Design Arena human-preference coding leaderboard: **#1** (prior pass); OpenHarmony: **58.4%**

Long context:

- AA-LCR 78.3% is the first measured long-context number (solid); 1M window card-claimed, accuracy past ~500K unverified per HokAI

Multimodal:

- Design Arena Website: **1292** (OpenRouter); text in/out only — vision requires the separate GLM-5V-Turbo model

### Normalized scores (1–100)

- **Tool use: 84/100.** (Was 78 on the prior pass.) τ²-bench 99.1% (AA) and MCP Atlas 76.8% fill the two biggest gaps, with GDPval 1418 corroborating; the weak Toolathlon 48.2%, TB3.0 4.6% and Vals TB2.1 gap (67.8 vs 81.0) keep it under 88.
- **Reasoning: 86/100.** CHANGED from 85 — GPQA resolves up to 91.2%/89.5%/85.6% (three sources, elite), HLE 40.5%/41.1% clears the 40% bar, AIME26 99.2% is near-perfect, CritPt 20.9%/AA-LCR 78.3% fill the rest, and the newly measured FrontierMath v2 59.2%/29.3% (Epoch, shared-weights row) adds a solid math pillar — the prior score leaned on the low HokAI GPQA read.
- **Context window: 95/100.** 1M tokens puts it in the ≥1M = 95–100 tier (BenchLM concurs); AA-LCR 78.3% is the first measured evidence; missing recall verification past ~500K holds it at the tier floor.
- **Multimodal: 15/100.** Text in/out only — vision requires the separate GLM-5V-Turbo model.
- **Coding: 86/100.** Vals SWE-bench 82.8% and LiveCodeBench 69.5% add independent corroboration to the open-weight leadership story (SWE-Pro 62.1%, FrontierSWE 74.4%, TB2.1 81.0%, Design Arena #1); AA Coding Index 68.8% and PostTrainBench 31.7% keep it out of the 90+ band.
- **Cost efficiency: 87/100.** $1.40/$4.40 per 1M maps to the ~88 band ($1.25/$4.25) with the ~$0.26 cached rate and MIT self-hosting as bonuses; no free tier on Zen.
- **Overall Score: 73/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (84 + 86 + 95 + 15 + 86) / 5 = 366/5 = 73.2 → 73 — the 2026-10-16 FrontierMath rows keep Reasoning at its raised level (85→86). Best fit: cost-efficient open-weights coding workhorse for agent harnesses and monorepos — pair with a vision model and verify long-context jobs >500K before committing.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai GLM-5.2 page updated 2026-10-10 citing the Z.AI HF model card, Artificial Analysis independent boards (τ²/LCR/SciCode/Omniscience/GDPval) via benchlm.ai, Vals AI leaderboards, plus the prior 2026-09-21/10-05 passes; 2026-10-16 re-check: BenchLM GLM-5.2 46-row refresh (shared weights) corroborates all rows — FrontierMath v2 59.2/29.3 and MazeBench 0% added — Reasoning 85→86, Overall 73 holds (73.2)); scores are normalized 1–100 interpretations, not official vendor scores. GLM-5.2 numbers transfer to the Coding serving lane via the same-weights statement.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
