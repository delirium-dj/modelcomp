# GPT-5.6 Sol — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.6 Sol (`gpt-5.6-sol`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** Frontier GPT-5.6 model (released 2026-07-09) for complex professional work, coding and agentic workflows — the mid-2026 flagship that GPT-6 Astra later replaced at the top.
- **Provider / access:** OpenAI API/Responses (`gpt-5.6-sol`), Azure OpenAI, plus ~45 gateway routes (OpenRouter, AI/ML API, LLM Gateway, Vercel, Prime, AgentRouter, LowRouter).
- **Release / knowledge:** 2026-07-09; knowledge cutoff 2026-02-16 (models.dev).
- **IDs:** `gpt-5.6-sol`, `openai/gpt-5.6-sol`, `azure/gpt-5.6-sol`, `opencode/gpt-5.6-sol`.
- **Context window:** 1,050,000 total (922,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $4.00 / $20.00 per 1M input/output; cache read $0.40 (some gateways list $5/$30).
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (OpenAI-reported); Vals AI run: **85.8%**
- BrowseComp: **92.2%**; CyberGym: **84.5%**
- Terminal-Bench 3.0: **34.6%**; Terminal-Bench 4.1: **38.50%**
- OSWorld 2.0: **62.6%**; Toolathlon: **58%**; LifeVal: **80.0%**
- ExploitGym: **33.7%**; ApprenticeBench: **26%**; Bug Hunt Bench: **42.0 fixes**

Reasoning / knowledge:

- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for Sol
- BenchLM ranks its strongest category as Multimodal & Grounded (#9)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench (Vals AI): **96.2%**; SWE-bench Pro: **64.6%**
- DeepSWE: **72.7%**; LiveCodeBench (Vals AI): **82.6%**; VulcanBench CII v1: **86.5%**; VulcanBench v3: **87.0%**
- CursorBench 3.2: **67.2%**; CursorBench 4.0: **41.7%**; FrontierCode 1.1 Extended: **60.6%**; FrontierCode 2.0: **27.6%**
- PostTrainBench v1.1: **36.2%**

Long context:

- 1.05M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 91.9% (Vals 85.8%), BrowseComp 92.2% and CyberGym 84.5% are frontier; TB3.0/4.1 (34.6/38.5%) and ApprenticeBench 26% show it is built for the older terminal harness.
- **Reasoning: 80/100.** No public HLE/GPQA/ARC/FrontierMath row was published for Sol; the score is inferred from its #14 BenchLM rank and TB2.1 performance — low confidence.
- **Context window: 100/100.** 1,050,000 tokens total with 128,000 max output.
- **Multimodal: 75/100.** Text, image and PDF input; BenchLM's strongest category is Multimodal & Grounded (#9), so image/document work is genuinely supported, but no audio/video.
- **Coding: 85/100.** SWE-bench (Vals) 96.2% is elite and VulcanBench CII 86.5% strong; SWE-bench Pro 64.6% and FrontierCode 2.0 27.6% cap it.
- **Cost efficiency: 78/100.** $4/$20 per 1M with $0.40 cache reads — half of GPT-6 Astra for a model that trails it on every modern harness.
- **Overall Score: 84.4/100.** Best fit for cheap high-volume coding and web research on the TB2.1-style harness; superseded by GPT-6.1 Sol at half the price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.6 Sol — OpenAI](https://openai.com/index/gpt-5-6-sol/)
  - [GPT-5.6 Sol benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-6-sol)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Sol_v2.md`, using the same headings.