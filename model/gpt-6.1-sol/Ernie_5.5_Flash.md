# GPT-6.1 Sol — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-6.1 Sol (`gpt-6.1-sol`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** Near-Astra performance for complex coding, computer use and professional work at a much lower cost (released 2026-09-29) — the value tier of the GPT-6 line.
- **Provider / access:** OpenAI API/Responses (`gpt-6.1-sol`), Azure OpenAI, SAP AI Core, plus ~30 gateway routes (OpenRouter, AI/ML API, LLM Gateway, Prime, LowRouter).
- **Release / knowledge:** 2026-09-29; knowledge cutoff 2026-04-30 (models.dev).
- **IDs:** `gpt-6.1-sol`, `openai/gpt-6.1-sol`, `azure/gpt-6.1-sol`, `opencode/gpt-6.1-sol`.
- **Context window:** 1,050,000 total (922,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $2.00 / $10.00 per 1M input/output; cache read $0.10 — one fifth of GPT-6 Astra.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.1: **60.90%** (close to Opus 5.5's 65.8% at one fifth the price)
- Terminal-Bench-Science 0.1: **57.0%**; Hermes Index: **57.1**; Hermes Bench: **73.9%**
- AutomationBench: **36.1%**; ExploitGym: **35.1%**; MazeBench: **17%**
- Toolathlon / OSWorld: no verified public rows published

Reasoning / knowledge:

- ARC-AGI-1 (semi-private): **96.50%**; ARC-AGI-2: **94.2%**; ARC-AGI-3: **52.7%** (provider-adapter 96.18%)
- STEMBench120: **2.76**; BioBasicsBench: **62.6%**
- HealthBench: **56.7%** raw / **58.5%** length-adjusted; HealthBench Professional **64.2%** (raw 67.2%)
- HLE / GPQA Diamond / FrontierMath: no verified public rows published for 6.1 Sol

Coding:

- DeepSWE: **71.9%**; ScarfBench (Java migration): **68.4%**
- FrontierCode 2.0: **39.0%**; Bug Hunt Bench: **44.3 fixes**
- ExtractBench (LlamaIndex): **95.31%**; ExtractBench Pro: **12%**; ParseBench: **69.63%**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 1.05M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 4.1 60.9% is within 5 points of Opus 5.5 at 20% of the price, and Hermes 57.1 is solid; AutomationBench 36.1% and the missing OSWorld/Toolathlon rows cap it.
- **Reasoning: 90/100.** ARC-AGI-2 94.2%, ARC-AGI-1 96.5% and ARC-AGI-3 52.7% are the strongest verified abstraction cluster outside Gemini 4; no HLE/GPQA publication leaves a gap.
- **Context window: 100/100.** 1,050,000 tokens total with 128,000 max output.
- **Multimodal: 70/100.** Text, image and PDF input only; no public multimodal rows beyond document extraction (ExtractBench 95.31%).
- **Coding: 85/100.** DeepSWE 71.9% and ScarfBench 68.4% are good, ExtractBench 95.31% excellent, but FrontierCode 2.0 39.0% and no SWE-bench row keep it out of the top tier.
- **Cost efficiency: 85/100.** $2/$10 per 1M with $0.10 cache reads — the best price/performance point in the OpenAI GPT-6 line.
- **Overall Score: 86.0/100.** Best fit as the default OpenAI workhorse: near-Astra agentic and reasoning quality at a fifth of Astra's cost.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6.1 Sol — OpenAI](https://openai.com/index/gpt-6-1-sol/)
  - [GPT-6.1 Sol benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-6-1-sol)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_6.1_Sol_v2.md`, using the same headings.