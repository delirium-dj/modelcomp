# GLM 5.3 Flashx — findings by GLM 4.5 Flash

- Source: GLM 5.3 Flashx (glm-5.3-flashx)
- Date: 2026-10-31
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** High-speed serving variant of GLM-5.3-Flash from Z.ai (Zhipu AI) — identical weights and capabilities as GLM-5.3-Flash, served at roughly 4x speed (~200 tokens/s). Explicitly a variant of the `glm-5.3-flash` entry, not new weights; use it when Flash-class multimodal quality is needed at lower latency.
- **Provider / access:** Z.ai API, Chat Completions (model ID `glm-5.3-flashx`). Also served via Vercel AI Gateway (~200 tok/s), OpenRouter, Merge Gateway, CometAPI, and AIHubMix.
- **Release / knowledge:** went live on the Z.ai API 2026-09-17/18; knowledge cutoff not separately published — same weights (and thus same knowledge) as GLM-5.3-Flash, released 2026-08-26.
- **IDs:** `zai/glm-5.3-flashx` (Z.ai native). No OpenCode Zen ID verified — cost is scored on paid pricing.
- **Context window:** 1,048,576 tokens (1M) total, ~128K max output (Z.ai developer docs for the GLM-5.3 family; the shared-weights BenchLM row concurs at 1M).
- **Modalities:** text + image + video in (inherits GLM-5.3-Flash's native multimodality), text out; explicit reasoning mode; tool calls supported; JSON mode not separately verified.
- **Pricing (as of 2026-10-31):** $0.37 / 1M input, $1.25 / 1M output (Z.ai docs pricing table). Sits between GLM-5.3-Flash ($0.15/$0.50) and full GLM-5.3 ($1.40/$4.40).
- **Architecture:** same weights as GLM-5.3-Flash (vendor-stated: "same model weights and capabilities, optimized for fast inference"); reported ~320B total / ~18B active MoE, open weights with an NVFP4 quantized release published ~2026-09-09 (third-party trackers).

### Raw benchmarks found

> FlashX publishes no separate benchmark set — Z.ai documents it as the same weights as GLM-5.3-Flash, so the numbers below are GLM-5.3-Flash scores (BenchLM page for the shared weights, updated 2026-10-10) and they transfer to FlashX by that vendor statement. No FlashX-specific independent eval exists.

Agent / tool use:

- GDPval-AA: **1773** (Z.AI GLM-5.3-Flash launch post via benchlm.ai — fills the gap the 2026-10-06 pass marked missing; near-frontier Elo)
- Terminal-Bench 2.1: **84.3%** (vendor; AA independent: **84.3%** — corroborated); Vals independent: **62.9%** (wide vendor-vs-independent gap)
- Toolathlon-Verified: **78.4%** (vendor — fills the gap)
- AA AutomationBench-AA: **60.4%**; AA ITBench-AA: **51.2%**; AA Tau3-Banking: **47.2%**; AA-Briefcase: **1454 Elo**; AA EnterpriseOps-Gym: **33.2%** (AA, independent)
- AA Terminal-Bench 4.0: **32.8%** (AA — weak on the 2026 harness)
- AutomationBench (vendor harness): **48.8%**; Agents' Last Exam: **26.3%** (vendor)
- Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AA-GPQA Diamond: **91.2%** (AA, independent — fills the GPQA gap)
- HLE: **55.3%** with tools (vendor); AA-HLE: **39.9%** (AA) — fills the HLE gap
- Artificial Analysis Intelligence Index: **41.8** (AA current board, 2026-10-10) — **conflicts with the "57 Qubrid compilation" reading the 2026-10-06 pass cited**; the AA-direct board supersedes it
- BenchLM overall (shared weights): **57.36, #55 of 889** (recomposed from the 58.56 prior reading)
- MMLU-Pro: **86.1%**; GPQA Diamond (Vals): **86.4%** (Vals, independent)
- AA-LCR v1.1: **80.0%** (AA — fills the long-context gap); MLCR-AA: **51.1%**; CritPt: **15.4%** (AA)
- AA-Omniscience: index **7.5** (AA — weak)

Coding:

- SWE-bench (Vals): **92.0%** (Vals, independent — fills the SWE gap, strong)
- LiveCodeBench (Vals): **80.5%** (Vals — fills the LiveCodeBench gap)
- DeepSWE v1.1: **63.4%** (vendor; corroborates the 2026-10-06 read)
- AA-SciCode: **51.6%** (AA); FrontierSWE v2: **18.1%** (Proximal — weak); NL2Repo: **56.3%** (vendor); OpenHarmony Bench: **57.3%**
- z.ai claim: outperforms GLM-5.2 across six coding/agentic benchmarks (release blog)

Long context:

- AA-LCR v1.1: **80.0%** (AA — first measured long-context number; solid)
- MRCR/RULER at window length: no verified public score found

### Additional benchmark data from independent sources:

- **CharXiv:** 89.4%; **MMVU (video):** 80.5%; **Chartography (tools):** 78.0%; **OfficeQA Pro:** 62.4% (vendor rows — first measured vision evidence)
- **Design Arena Website:** 1278 (OpenRouter)
- **Generation speed:** up to ~**200 tokens/s** (Z.ai docs; Vercel AI Gateway)
- **Vals.ai MedScribe:** **#7 of 106** models

### Normalized scores (1–100)

- **Tool use: 88/100.** (Was 86 on the prior pass.) The second pass adds GDPval-AA 1773 (near-frontier) and Toolathlon 78.4%, with AA's TB2.1 84.3% corroborating the vendor row; the Vals TB2.1 gap (62.9%) and AA TB4.0 32.8% cap it under 90.
- **Reasoning: 80/100.** (Was 85 on the prior pass.) AA-GPQA 91.2% fills the gap positively, but the AA Index reading drops from the cited 57 to the board's 41.8 and AA-HLE is 39.9% with CritPt 15.4% — the independent evidence moves the score down a band.
- **Context window: 95/100.** Verified 1M (1,048,576) window with ~128K max output — top tier; AA-LCR 80.0% is the first measured long-context evidence (solid); no retrieval-at-length score to reach 100.
- **Multimodal: 85/100.** Native text+image+video input with first measured vision rows (CharXiv 89.4, MMVU 80.5); no audio input, text-only output.
- **Coding: 87/100.** (Was 85 on the prior pass.) Vals SWE-bench 92.0% and LiveCodeBench 80.5% fill the prior gaps with independent evidence on top of DeepSWE 63.4%; FrontierSWE v2 18.1% and the missing SWE-bench Verified keep it below the frontier band.
- **Cost efficiency: 93/100.** $0.37/$1.25 per 1M is cheaper than the ~$0.60/$2.20 ≈ 92 reference point, and the ~200 tok/s serving removes the latency penalty commentators flagged on standard Flash; not scored higher because Flash itself remains 2.5x cheaper.
- **Overall Score: 87.0/100.** (Was 87.2 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (88 + 80 + 95 + 85 + 87) / 5 = 435/5 = 87.0 — net unchanged on the 2026-10-11 second pass: tool/coding gains offset the reasoning correction from the recomposed AA board. Best fit: same multimodal agent/coder brain as GLM-5.3-Flash with ~200 tok/s serving — pick it over `glm-5.3-flash` when wall-clock latency or throughput per dollar matters, and over full GLM-5.3 when budget matters more than peak reasoning.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-31
- Method: Public internet research, incorporating benchmark data from GLM-5.3-Flash since FlashX has identical weights; sources include Z.ai documentation, BenchLM shared-weights page, Vals AI leaderboards, and Artificial Analysis independent boards; scores are normalized 1–100 interpretations, not official vendor scores. No FlashX-specific independent evals exist.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---