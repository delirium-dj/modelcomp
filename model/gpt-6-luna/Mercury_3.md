# GPT-6 Luna — findings by Mercury 3

- Source: OpenAI/GPT-6 Luna
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's most efficient GPT-6 variant (released 2026-09-22) for focused, high-volume tasks: 1.05M context, above-average intelligence (AA II 28), solid coding/agentic (DeepSWE 66.6%, FrontierCode 2.0 21.9%, CyberGym-E2E 77.9%), at an ultra-low $0.10/$0.50 — the cheapest frontier-scale model yet.
- **Provider / access:** OpenAI API (`gpt-6-luna`), ChatGPT; 42 providers per models.dev (incl. Azure, Bedrock, OpenRouter); Fast mode 2×, Batch/Flex −50%.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff May 2026.
- **IDs:** `gpt-6-luna` (OpenAI API; max reasoning; siblings Astra/Sol/Terra; low/medium variants exist).
- **Context window:** 1,050,000 tokens total; max output 128,000 (2× input rate above 272K prompts).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $0.10 input / $0.50 output per 1M tokens, $0.01 cached input (90% discount).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1445 Elo** (46.6% normalized); AA Briefcase: 1336; AA AutomationBench: 53.2%; CyberGym-E2E-AA: **77.9%**; AA Cyber Index: 52.7%; CWE-Bench-AA: 56.7%; AnalystAgent: 43.8%; Hermes Bench: 70.5%
- TB4.0 (AA): 12.6%; OSWorld 2.1 Offline: 48.9%; GDP.pdf: 22.8%; DeepsecBench: 23.5%; ExploitGym: 11.6%; MazeBench ASCII: 0%

Reasoning / knowledge:

- AA II: **28** (#9/26; above median 22); HLE: **38.5%**; LCR: **83.3%**; CritPt: **19.4%**; MLCR-AA: 26.1%
- ARC-AGI-1: **86.67%**; ARC-AGI-2: **59.3%**; ARC-AGI-3: 0.1% (0.59% w/ adapter)
- FrontierMath v2 Tiers 1–3 78.95%, Tier 4 56.10% (Epoch AI); HealthBench Professional 60.8% / Hard 31.4%
- AA-Omniscience: accuracy 39.6%, hallucination rate 79.3%

Coding:

- DeepSWE: **66.6%**; FrontierCode 2.0: **21.9%**; AA-SciCode: 54.6%; Bug Hunt Bench: 18.3 fixes; TB4.0-AA 12.6%

Long context:

- 1.05M window; AA-LCR 83.3%; no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; MMMU-Pro 79.7% (AA); ExtractBench 91.01%; ParseBench 64.26%; ExtractBench Pro 0%.

### Normalized scores (1–100)

- **Tool use: 78/100.** GDPval 1445, CyberGym-E2E 77.9%, AutomationBench 53.2% — decent; capped by TB4.0 12.6%, MazeBench 0%, and GDP.pdf 22.8%.
- **Reasoning: 83/100.** II 28, LCR 83.3%, ARC-AGI-2 59.3%, FrontierMath 78.9%; capped by HLE 38.5%, CritPt 19.4%, and hallucination rate 79.3%.
- **Context window: 92/100.** 1.05M with strong LCR 83.3%; no deep-retrieval figure verified.
- **Multimodal: 84/100.** image input with solid MMMU-Pro 79.7%; text-only output.
- **Coding: 79/100.** DeepSWE 66.6% and FrontierCode 21.9% solid; capped by TB4.0 12.6% and no SWE Verified row verified.
- **Cost efficiency: 98/100.** $0.10/$0.50 with $0.01 cached — exceptional value; 113.8 t/s, high TTFT (121.7s on max).
- **Overall Score: 83/100.** Mean of (78+83+92+84+79)/5 = 83.2 → 83. A remarkable ultra-cheap workhorse; weak frontier-agentic rows and high hallucination cap it.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (OpenAI GPT-6 Sol/Luna announcement + system card via BenchLM, Artificial Analysis model page/leaderboards, ARC Prize, Epoch AI, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-6 Sol and Luna (OpenAI, 2026-09-22)](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [GPT-6 Luna — Artificial Analysis model page ($0.10/$0.50, 1M, II 28)](https://artificialanalysis.ai/models/gpt-6-luna)
  - [GPT-6 Luna — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-6-luna)
  - [GPT-6 Luna — models.dev registry (42 providers)](https://models.dev/models/openai/gpt-6-luna)
  - [ARC Prize results — GPT-6 Luna](https://arcprize.org/results/openai-gpt-6-luna)
