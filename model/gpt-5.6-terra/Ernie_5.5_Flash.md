# GPT-5.6 Terra — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.6 Terra (`gpt-5.6-terra`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced GPT-5.6 model (released 2026-07-09) for capable, cost-efficient everyday work — the mid-tier sibling of GPT-5.6 Sol.
- **Provider / access:** OpenAI API/Responses (`gpt-5.6-terra`), Azure OpenAI, plus ~40 gateway routes (AI/ML API, LLM Gateway, Vercel, Prime, LowRouter, Kenari).
- **Release / knowledge:** 2026-07-09; knowledge cutoff 2026-02-16 (models.dev).
- **IDs:** `gpt-5.6-terra`, `openai/gpt-5.6-terra`, `azure/gpt-5.6-terra`, `opencode/gpt-5.6-terra`.
- **Context window:** 1,050,000 total (922,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $2.00 / $12.00 per 1M input/output; cache read $0.20.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (Vals AI run **77.5%**); Terminal-Bench 3.0: **20.8%**; Terminal-Bench 4.1: **21.50%**
- BrowseComp: **87.5%**; Toolathlon: **53.1%**; OSWorld 2.0: **50.2%**; CyberGym: **81.8%**
- ApprenticeBench: **16%**; ExploitGym: **23.2%**; MazeBench: **6%**

Reasoning / knowledge:

- ARC-AGI-1 (semi-private): **96.50%**; ARC-AGI-2: **83.9%**; ARC-AGI-3: **0.8%** (near-total failure)
- MMMU-Pro: **80.7%**; ParseBench: **67.06%**
- HLE / GPQA Diamond / FrontierMath: no verified public rows published for Terra

Coding:

- SWE-bench (Vals AI): **95.4%**; LiveCodeBench (Vals AI): **85.9%**; VulcanBench v3: **87.0%**
- DeepSWE: **69.6%**; SWE-bench Pro: **63.4%**; CursorBench 3.2: **64.9%**; CursorBench 4.0: **41.3%**
- FrontierCode 1.1 Extended: **55.8%**; FrontierCode 2.0: no verified row published

Long context:

- 1.05M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 75/100.** TB2.1 87.4% and BrowseComp 87.5% are good, but the modern harnesses collapse (TB3.0 20.8%, TB4.1 21.5%), OSWorld 2.0 50.2% and ApprenticeBench 16% are mid/low.
- **Reasoning: 78/100.** ARC-AGI-1 96.5% and ARC-AGI-2 83.9% are strong, ARC-AGI-3 0.8% is a floor; no HLE/GPQA publication for this tier.
- **Context window: 100/100.** 1,050,000 tokens with 128,000 max output.
- **Multimodal: 78/100.** Text, image and PDF in with MMMU-Pro 80.7% proving solid document/chart understanding; no audio/video.
- **Coding: 85/100.** SWE-bench (Vals) 95.4% and LiveCodeBench 85.9% are the best rows here, but SWE-bench Pro 63.4% and CursorBench 4.0 41.3% show it is a tier below Sol/Astra on agentic coding.
- **Cost efficiency: 88/100.** $2/$12 per 1M — Sol's price halved with roughly 85% of its measured capability.
- **Overall Score: 83.2/100.** Best fit as the volume workhorse for OpenAI shops: good everyday coding, research and document work at a low price; not a modern-harness agent.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.6 Terra — OpenAI](https://openai.com/index/gpt-5-6-terra/)
  - [GPT-5.6 Terra benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-6-terra)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra_v2.md`, using the same headings.