# GPT-6 Luna — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-6 Luna (`gpt-6-luna`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's most efficient model (released 2026-09-22) for focused, high-volume tasks — the budget lane of the GPT-6 family at one twentieth of GPT-6 Astra's price.
- **Provider / access:** OpenAI API/Responses (`gpt-6-luna`), Azure OpenAI, OpenCode Go, plus ~30 gateway routes (AI/ML API, LLM Gateway, Vercel, Prime, LowRouter).
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-05-18 (models.dev).
- **IDs:** `gpt-6-luna`, `openai/gpt-6-luna`, `azure/gpt-6-luna`, `opencode-go/gpt-6-luna`.
- **Context window:** 1,050,000 total (922,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.10 / $0.50 per 1M input/output; cache read $0.01.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam (Linux subset): **57.1%**; Hermes Bench: **70.5%**; Hermes Index: **33.9**
- OSWorld 2.1 offline subset (82 tasks): **48.9%**; Terminal-Bench 4.1: **15.20%**
- ExploitGym: **11.6%**; Bug Hunt Bench: **18.3 fixes**; MazeBench: **0%**

Reasoning / knowledge:

- ARC-AGI-2: **59.3%**; ARC-AGI-3: **0.1%** (near-floor)
- HLE / GPQA Diamond / FrontierMath: no verified public rows published for Luna
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- DeepSWE: **66.6%**; FrontierCode 2.0: **21.9%**; Bug Hunt Bench: **18.3 fixes**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 1.05M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 62/100.** Agents' Last Exam (Linux) 57.1 and Hermes Bench 70.5 are mid, OSWorld 2.1 offline 48.9% below the agent baseline; TB4.1 15.2% and ExploitGym 11.6% are near-floor.
- **Reasoning: 60/100.** ARC-AGI-2 59.3% is mid and ARC-AGI-3 0.1% is a floor; no HLE/GPQA/FrontierMath row was published.
- **Context window: 100/100.** 1,050,000 tokens with 128,000 max output.
- **Multimodal: 72/100.** Text, image and PDF in; BenchLM ranks Multimodal & Grounded as its strongest category (#29) but publishes no multimodal benchmark row.
- **Coding: 70/100.** DeepSWE 66.6% is the only solid coding row, FrontierCode 2.0 21.9% is weak, and no SWE-bench row exists.
- **Cost efficiency: 100/100.** $0.10/$0.50 per 1M with $0.01 cache reads — tied for the cheapest capable route in this dataset.
- **Overall Score: 72.8/100.** Best fit for very-high-volume classification, extraction and triage; a poor choice for agentic coding or hard reasoning.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6 Luna — OpenAI](https://openai.com/index/gpt-6-luna/)
  - [GPT-6 Luna benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-6-luna)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_6_Luna_v2.md`, using the same headings.