# GPT-6 Sol — findings by Mercury 3

- Source: OpenAI/GPT-6 Sol
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (OpenAI hyphenated style: GPT-6 Sol)
- **Short description:** OpenAI's 2026-09-22 frontier reasoning model (superseded by GPT-6.1 Sol), the Sol-line flagship alongside GPT-6 Luna. Strong math/reasoning with FrontierMath Tier-4 ~90%, 153.7 t/s, 1.05M context, at the competitive $2/$10 price.
- **Provider / access:** OpenAI API (`gpt-6-sol`), ChatGPT; 7 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff not published.
- **IDs:** `gpt-6-sol` (OpenAI API; max/high reasoning tiers).
- **Context window:** 1,050,000 tokens (1.05M) total; max output not disclosed.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $2.00 input / $10.00 output per 1M tokens, 90% cache discount (blended ~$1.54).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **56.4%**; OSWorld 2.0: **60.5%**; AutomationBench: **33.2%**; ExploitGym: **22.1%** (OpenAI)
- GDPval-AA normalized: **50.4%** (AA); AA ITBench: 49.4%; CWE-bench v1: 52.0%; AA Cyber Index: 36.8%; Gray Swan IPI (15 attempts): **10.1%**

Reasoning / knowledge:

- ARC-AGI-1: **95.5%**; ARC-AGI-2: **89.6%**; ARC-AGI-3: **4.6%** (23.03% provider adapter) (ARC Prize)
- FrontierMath v2: Tiers 1–3 **89.83%**, Tier 4 **90.0%** (Epoch AI — top-tier math)
- AA-LCR: **83.7%**; CritPt: **30.9%**
- Artificial Analysis Intelligence Index: **47.6%**; AA-HLE: **47.9%**; HealthBench Hard: 30.1%
- AA-Omniscience: accuracy **54.5%**, hallucination rate **60.1%**

Coding:

- DeepSWE: **68.8%** (OpenAI); AA-SciCode: **57.6%**; FrontierCode 2.0: **34.3%** (Cognition)

Long context:

- 1.05M window; AA-LCR 83.7%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- text/image in, text out; MMMU-Pro 82.9% (AA); ExtractBench 94.57%; ParseBench 68.89%.

### Normalized scores (1–100)

- **Tool use: 82/100.** Agents' Last Exam 56.4% and OSWorld 60.5% are respectable; capped by AutomationBench 33.2%, ExploitGym 22.1%, and no TB/GDPval Elo figure published.
- **Reasoning: 91/100.** ARC-AGI-2 89.6%, FrontierMath T4 90% — elite math; capped by HLE 47.9%, CritPt 30.9%, and II 47.6.
- **Context window: 92/100.** 1.05M with strong LCR 83.7%; no ≥98%-retrieval figure at depth holds it below the top band.
- **Multimodal: 82/100.** image input with strong document extraction (ExtractBench 94.57%); no video/audio input.
- **Coding: 87/100.** DeepSWE 68.8%, FrontierMath-adjacent coding strength; capped by FrontierCode 2.0 34.3% and SciCode 57.6%.
- **Cost efficiency: 82/100.** $2/$10 with 90% cache discount — competitive pricing for a flagship-tier model.
- **Overall Score: 87/100.** Mean of (82+91+92+82+87)/5 = 86.8 → 87. A capable math-leaning flagship at a fair price; GPT-6.1 Sol/Astra offer more agentic ceiling.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (OpenAI GPT-6 Sol/Luna announcement via BenchLM, Artificial Analysis model page/leaderboards, ARC Prize, Epoch AI, Cognition); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-6 Sol and Luna (OpenAI)](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [GPT-6 Sol model documentation (OpenAI)](https://developers.openai.com/api/docs/models/gpt-6-sol)
  - [GPT-6 Sol — Artificial Analysis model page ($2/$10, 1.05M, 153.7 t/s)](https://artificialanalysis.ai/models/gpt-6-sol)
  - [GPT-6 Sol — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-6-sol)
  - [ARC Prize results — GPT-6 Sol](https://arcprize.org/results/openai-gpt-6-sol)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
