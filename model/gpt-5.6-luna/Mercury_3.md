# GPT-5.6 Luna — findings by Mercury 3

- Source: OpenAI/GPT-5.6 Luna
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-efficient GPT-5.6 variant (released 2026-07-09) for fast, high-volume workloads: 1.05M context, strong agentic coding (TB2.1 84.7%, SWE Pro 62.7%), FrontierMath v2 78.6%, at a very low $0.20/$1.20 — the best value in the GPT-5.6 family.
- **Provider / access:** OpenAI API (`gpt-5.6-luna`), ChatGPT; 64 providers per models.dev (incl. Azure, Bedrock, OpenRouter).
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff Feb 2026.
- **IDs:** `gpt-5.6-luna` (OpenAI API; xhigh reasoning; siblings Sol/Terra/Cyber; fast variant at 2× price).
- **Context window:** 1,050,000 tokens total; max output 128,000.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $0.20 input / $1.20 output per 1M tokens, 90% cache discount.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI) / 80.9% (AA) / 79.0% (Vals); BrowseComp: **83.3%**; CyberGym: **77.9%**; ExploitGym: 12.4%; GDPval-AA: **1582 Elo** (48.0% normalized); Toolathlon: 53.4%
- OSWorld 2.0: 45.6%; APEX-Agents-AA: 35.8%; AA Agentic Index: 42.7%; ApprenticeBench: 7%; MazeBench ASCII: 0%; EnterpriseOps-Gym: 40.8%; ITBench: 40.3%; TB3.0: 14.3%

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI) / 91.1% (AA) / 91.7% (Vals); HLE: **39.5%** (AA); MMLU-Pro: 86.0% (Vals)
- ARC-AGI-1: **88.00%**; ARC-AGI-2: **59.5%**; ARC-AGI-3: 0.2%
- AA-LCR: **83.7%**; CritPt: **20.6%**; AA II: 51.2; FrontierMath v2 Tiers 1–3 **78.6%**, Tier 4 58.5% (Epoch AI/OpenAI)
- AA-Omniscience: accuracy 42.7%, hallucination rate **92.6%** (very high); HealthBench Professional 55.7% / Hard 32.0%

Coding:

- SWE-bench Pro: **62.7%**; DeepSWE: **67.2%**; Terminal-Bench 2.1 84.7%; FrontierCode 1.1 Extended: **55.1%**; CursorBench 3.2: 61.1% / 4.0: 35.9%; VulcanBench v3: **85.5%**; AA-SciCode: 53.6%; AA Coding Index: 71.5%; SWE-bench (Vals): 93.0%

Long context:

- 1.05M window; AA-LCR 83.7%; no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; MMMU-Pro 78.4% (78.6% AA; 79.5% w/ Python); ExtractBench 91.16%; ParseBench 66.89%.

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 84.7%, BrowseComp 83.3%, CyberGym 77.9%, GDPval 1582 — strong; capped by OSWorld 2.0 45.6%, ApprenticeBench 7%, TB3.0 14.3%, and MazeBench 0%.
- **Reasoning: 87/100.** GPQA 92.3%, FrontierMath 78.6%, ARC-AGI-2 59.5%, LCR 83.7%; capped by HLE 39.5%, CritPt 20.6%, and hallucination rate 92.6%.
- **Context window: 92/100.** 1.05M with strong LCR 83.7%; no deep-retrieval figure verified.
- **Multimodal: 83/100.** image input with solid MMMU-Pro 78.4%; text-only output.
- **Coding: 85/100.** SWE Pro 62.7%, DeepSWE 67.2%, VulcanBench 85.5%, TB2.1 84.7%; capped by CursorBench 4.0 35.9% and FrontierCode 55.1%.
- **Cost efficiency: 97/100.** $0.20/$1.20 with 90% cache discount — exceptional value; 107.1 t/s, very high TTFT (139.4s on max).
- **Overall Score: 86/100.** Mean of (84+87+92+83+85)/5 = 86.2 → 86. A top-value cost-efficient flagship; high hallucination rate and long TTFT are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (OpenAI GPT-5.6 launch/system card via BenchLM, Artificial Analysis model page/leaderboards, Vals AI, ARC Prize, Epoch AI, models.dev); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1) listed side by side.
- Reference URLs:
  - [GPT-5.6 (OpenAI, 2026-07-09)](https://openai.com/index/gpt-5-6/)
  - [GPT-5.6 Luna — Artificial Analysis model page ($0.20/$1.20, 1.05M)](https://artificialanalysis.ai/models/gpt-5-6-luna)
  - [GPT-5.6 Luna — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-5-6-luna)
  - [GPT-5.6 Luna — models.dev registry (64 providers)](https://models.dev/models/openai/gpt-5.6-luna)
  - [GPT-5.6 Luna — Vals AI model page](https://www.vals.ai/models/openai_gpt-5.6-luna)
  - [ARC Prize results — GPT-5.6 Luna](https://arcprize.org/results/openai-gpt-5-6-luna)
