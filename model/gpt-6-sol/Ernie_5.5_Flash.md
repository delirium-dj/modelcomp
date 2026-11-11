# GPT-6 Sol — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-6 Sol (`gpt-6-sol`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI model for complex coding and agentic workflows (released 2026-09-22) — the mid-tier GPT-6 that sits between GPT-6.1 Sol and GPT-6 Astra.
- **Provider / access:** OpenAI API/Responses (`gpt-6-sol`), Azure OpenAI, plus ~30 gateway routes (AI/ML API, LLM Gateway, Vercel, Prime, LowRouter).
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-04-20 (models.dev).
- **IDs:** `gpt-6-sol`, `openai/gpt-6-sol`, `azure/gpt-6-sol`, `opencode/gpt-6-sol`.
- **Context window:** 1,050,000 total (922,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $2.00 / $10.00 per 1M input/output; cache read $0.20.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.1: **50.30%**; OSWorld 2.0: **60.5%**
- Agents' Last Exam: **56.4%** (best verified row); Hermes Index: **44.1%**; Hermes Bench: **73.5%**
- AutomationBench: **33.2%**; ExploitGym: **22.1%**; CWE-bench v1: **52.0%**; MazeBench: **7%**
- BrowseComp / Toolathlon / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- ARC-AGI-1 (semi-private): **95.50%**; ARC-AGI-2: **89.6%**; ARC-AGI-3: **4.6%** (provider-adapter 23.03%)
- HealthBench: **47.1%** raw / **53.2%** length-adjusted; HealthBench Professional **60.8%**; HealthBench Hard **30.1%**
- HLE / GPQA Diamond / FrontierMath: no verified public rows published

Coding:

- DeepSWE: **68.8%**; FrontierCode 2.0: **34.3%**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published for this tier
- ExtractBench (LlamaIndex): **94.57%**; ParseBench: **68.85%**

Long context:

- 1.05M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 80/100.** Agents' Last Exam 56.4%, TB4.1 50.3% and OSWorld 2.0 60.5% are mid-frontier; AutomationBench 33.2% and Hermes 44.1 are the drag, and no BrowseComp/Toolathlon row exists.
- **Reasoning: 82/100.** ARC-AGI-1 95.5% and ARC-AGI-2 89.6% are strong, ARC-AGI-3 4.6% is a floor; HealthBench 53.2% (length-adjusted) is mid-pack and no HLE/GPQA row was published.
- **Context window: 100/100.** 1,050,000 tokens with 128,000 max output.
- **Multimodal: 72/100.** Text, image and PDF in; ExtractBench 94.57% proves strong enterprise document extraction, but no audio/video.
- **Coding: 82/100.** DeepSWE 68.8% is decent, FrontierCode 2.0 34.3% weak; no SWE-bench row was published at all, which caps confidence.
- **Cost efficiency: 85/100.** $2/$10 per 1M — the same price as GPT-6.1 Sol, which outscores it on every measured axis.
- **Overall Score: 83.2/100.** Best fit for document-heavy enterprise workflows and mid-tier agentic coding; GPT-6.1 Sol is the better buy at the same price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6 Sol — OpenAI](https://openai.com/index/gpt-6-sol/)
  - [GPT-6 Sol benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-6-sol)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_6_Sol_v2.md`, using the same headings.