# GPT-5.6 Luna — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.6 Luna (`gpt-5.6-luna`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-efficient GPT-5.6 model (released 2026-07-09) for fast, high-volume workloads — the budget lane of the GPT-5.6 family.
- **Provider / access:** OpenAI API/Responses (`gpt-5.6-luna`), Azure OpenAI, OpenCode Go, plus ~45 gateway routes (AI/ML API, LLM Gateway, Vercel, Prime, LowRouter).
- **Release / knowledge:** 2026-07-09; knowledge cutoff 2026-02-16 (models.dev).
- **IDs:** `gpt-5.6-luna`, `openai/gpt-5.6-luna`, `azure/gpt-5.6-luna`, `opencode-go/gpt-5.6-luna`.
- **Context window:** 1,050,000 total (922,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.20 / $1.20 per 1M input/output; cache read $0.02 — one tenth of GPT-5.6 Sol.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (Vals AI run **79.0%**); Terminal-Bench 3.0: **14.3%**; Terminal-Bench 4.1: **17.60%**
- Toolathlon: **53.4%**; OSWorld 2.0: **45.6%**; CyberGym: **77.9%**
- BrowseComp: **83.3%**; ExploitGym: **12.4%**

Reasoning / knowledge:

- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for Luna
- BenchLM ranks Coding as its strongest category (#17)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench (Vals AI): **93.0%**; VulcanBench v3: **85.5%**; LiveCodeBench: no verified row
- DeepSWE: **67.2%**; SWE-bench Pro: **62.7%**; CursorBench 3.2: **61.1%**; CursorBench 4.0: **35.9%**
- FrontierCode 1.1 Extended: **55.1%**

Long context:

- 1.05M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 70/100.** TB2.1 84.7% looks strong until the newer harnesses (TB3.0 14.3%, TB4.1 17.6%) and OSWorld 2.0 45.6%; BrowseComp 83.3% and CyberGym 77.9% are the bright spots.
- **Reasoning: 65/100.** No public reasoning benchmark was published for Luna; the score is a conservative inference — low confidence.
- **Context window: 100/100.** 1,050,000 tokens with 128,000 max output.
- **Multimodal: 75/100.** Text, image and PDF in; no multimodal benchmark rows published for this tier.
- **Coding: 80/100.** SWE-bench (Vals) 93.0% and VulcanBench 85.5% are excellent for the price, DeepSWE 67.2% good; CursorBench 4.0 35.9% and no LiveCodeBench row are the gaps.
- **Cost efficiency: 98/100.** $0.20/$1.20 per 1M with $0.02 cache reads — the cheapest frontier-adjacent route in this dataset.
- **Overall Score: 78.0/100.** Best fit for high-volume batch coding and classification work where per-token cost dominates; not a modern-harness agent.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.6 Luna — OpenAI](https://openai.com/index/gpt-5-6-luna/)
  - [GPT-5.6 Luna benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-6-luna)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Luna_v2.md`, using the same headings.