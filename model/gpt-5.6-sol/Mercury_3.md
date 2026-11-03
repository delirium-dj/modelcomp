# GPT-5.6 Sol — findings by Mercury 3

- Source: OpenAI/GPT-5.6 Sol
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (OpenAI hyphenated style: GPT-5.6 Sol)
- **Short description:** OpenAI's 2026-07-09 flagship reasoning model (superseded by GPT-6 Astra on 2026-09-03). Strong frontier reasoning/coding with 1.05M context, fast (132 t/s); the middle of the GPT-5.6 family (Sol/Terra/Luna), with weaker prompt-injection robustness than the 2026 autumn flagships.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`), ChatGPT; 8 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff not published.
- **IDs:** `gpt-5.6-sol` (OpenAI API; max/high reasoning tiers).
- **Context window:** 1,050,000 tokens (1.05M) total; max output not disclosed.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $4.00 input / $20.00 output per 1M tokens, 90% cache discount (blended ~$3.08).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (OpenAI) vs **85.8%** (Vals — conflicting harnesses); TB Hard: **65.9%** (AA); Terminal-Bench 3.0: **34.6%**
- BrowseComp: **92.2%**; GDPval-AA v2.1: **1735 Elo** (OpenAI; AA normalized 55.4%); CyberGym: **84.5%**; OSWorld 2.0: **62.6%**; ExploitGym: **33.7%**; Toolathlon: **58%**
- AA Tau3-Banking: **44.3%**; AA Agentic Index: **50.5%**; AA ITBench: **56.2%**; AA-AnalystAgent: **47.5%**; AA EnterpriseOps-Gym: **42.9%**; ApprenticeBench GUI: 26%

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (OpenAI) vs **95.2%** (Vals) vs 94.1% (AA)
- HLE: **54.5%** verified (per DeepMind card) vs **49.5%** (AA)
- ARC-AGI-1: **96.5%**; ARC-AGI-2: **92.5%**; ARC-AGI-3: **7.8%** (ARC Prize)
- AA-LCR: **84.0%**; CritPt: **32.3%**
- Artificial Analysis Intelligence Index: **58.9** (OpenAI-cited) — AA current page N/A; treat as vendor-cited
- FrontierMath v2: Tiers 1–3 **89.0%**, Tier 4 **83.0%** (OpenAI/Epoch); HealthBench Hard 33.1% (system card)
- AA-Omniscience: accuracy **59.4%**, hallucination rate **92.2%** (very high — honesty caveat); Gray Swan IPI (15 attempts): **27.0%** (weak prompt-injection robustness)

Coding:

- SWE-bench: **96.2%** (Vals); SWE-bench Pro: **64.6%**; DeepSWE: **72.7%**; FrontierCode v1.1 Extended: **60.6%** (Devin)
- AA Coding Index: **77.4%**; AA-SciCode: **57.1%**; LiveCodeBench: **82.6%** (Vals); VulcanBench v3: 87.0%
- CursorBench 3.2: **67.2%** vs 4.0: **41.7%**; FrontierSWE v2: **32.2%** (Proximal); FrontierCode 2.0: **27.6%** (Cognition)

Long context:

- 1.05M window; AA-LCR 84.0%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- text/image in, text out; MMMU-Pro 83% (84.6% with Python); ExtractBench 93.77%; ParseBench 74.46%.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong agentic (TB2.1 91.9%, GDPval 1735, TB Hard 65.9%, CyberGym 84.5%); capped by Toolathlon 58%, OSWorld 62.6%, and a 26% GUI-apprentice score.
- **Reasoning: 93/100.** GPQA ~95%, ARC-AGI-2 92.5%, FrontierMath T4 83%, LCR 84% — frontier; capped by HLE ~50–54% and a 92.2% hallucination rate.
- **Context window: 93/100.** 1.05M with strong LCR 84%; no ≥98%-retrieval figure at depth holds it below the top band.
- **Multimodal: 82/100.** image input with solid visual reasoning (MMMU-Pro 83%, ExtractBench 93.77%); no video/audio input, text-only output.
- **Coding: 90/100.** SWE-bench 96.2%, DeepSWE 72.7%, coding index 77.4%; capped by FrontierSWE v2 32.2%, FrontierCode 2.0 27.6%, and CursorBench 4.0 41.7%.
- **Cost efficiency: 68/100.** $4/$20 with 90% cache discount — fair for the tier, but pricier than Sonnet 5.5/Muse Spark and $2.5x above GPT-6 Astra; 27% Gray Swan IPI forces extra prompt-injection hygiene.
- **Overall Score: 89/100.** Mean of (88+93+93+82+90)/5 = 89.2 → 89. A strong frontier reasoning/coding model; most new buyers should take GPT-6 Astra for the extra ceiling.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (OpenAI GPT-5.6 page/system card via BenchLM, Artificial Analysis model page/leaderboards, Vals AI, ARC Prize, Epoch AI, Cognition/Proximal/Cursor); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (II, HLE, GPQA, TB2.1) listed side by side.
- Reference URLs:
  - [GPT-5.6 (OpenAI)](https://openai.com/index/gpt-5-6/)
  - [GPT-5.6 system card (OpenAI)](https://deploymentsafety.openai.com/gpt-5-6/gpt-5-6.pdf)
  - [GPT-5.6 Sol — Artificial Analysis model page ($4/$20, 1.05M, 132 t/s)](https://artificialanalysis.ai/models/gpt-5-6-sol)
  - [GPT-5.6 Sol — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-5-6-sol)
  - [GPT-5.6 Sol — Vals AI model page](https://www.vals.ai/models/openai_gpt-5.6-sol)
  - [ARC Prize results — GPT-5.6 Sol](https://arcprize.org/results/openai-gpt-5-6-sol)
  - [GPT-5.6 models in Devin (Cognition)](https://devin.ai/blog/gpt-5-6)
