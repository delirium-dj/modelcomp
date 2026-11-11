# GPT-6 Astra — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-6 Astra (`gpt-6-astra`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's most capable model for complex reasoning, coding, computer use, research and document creation (released 2026-09-04). Top of the GPT-6 line and OpenAI's frontier answer to Claude Opus 5.5 and Gemini 4.
- **Provider / access:** OpenAI API/Responses (`gpt-6-astra`), Azure OpenAI, plus ~30 gateway routes (OpenRouter `openai/gpt-6-astra`, Amazon Bedrock, SAP AI Core, Vercel AI Gateway, LLM Gateway, Prime, AI/ML API).
- **Release / knowledge:** 2026-09-04; knowledge cutoff 2026-04-30 (models.dev).
- **IDs:** `gpt-6-astra`, `openai/gpt-6-astra`, `azure/gpt-6-astra`, `opencode/gpt-6-astra`.
- **Context window:** 1,050,000 total (922,000 input / 128,000 max output per models.dev; llmgateway lists a 1.05M output outlier).
- **Modalities:** text, image and PDF in; text out; reasoning with effort control, tool calls and structured output.
- **Pricing (as of 2026-11-11):** $10.00 / $50.00 per 1M input/output; cache read $1.00. The most expensive frontier route in this dataset.
- **Architecture:** proprietary (OpenAI does not publish sizes); OpenAI positions it as its deepest reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.1: **60.30%** (OpenAI-reported, high effort)
- Terminal-Bench 4.0: **57.90%** (OpenAI-reported, high effort)
- Terminal-Bench 2.1 (Vals AI): **87.3%** — best verified TB2.1 row
- BrowseComp: **91.5%** (best-in-class web research)
- OSWorld 2.0: **72.6%**; OSWorld 2.1 (108 tasks): **75.8%**
- Agents' Last Exam: **59.3%** (best verified row)
- ApprenticeBench: **68%**; LifeVal: **80.6%**; AutomationBench: **41.4%**
- ExploitGym: **42.4%**; RoboDojo Sim: **29.8%**; MazeBench: **23%**
- Hermes Index: **56.3**; Hermes Bench: **73.7%**

Reasoning / knowledge:

- Humanity's Last Exam with tools: **57.2%** (OpenAI-reported)
- Terminal-Bench-Science 0.1: **64.6%** (best verified science-agent row)
- ARC-AGI-2 / FrontierMath / GPQA Diamond: no verified public rows published for Astra
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- DeepSWE: **74.1%**; FrontierSWE v2: **65.5%** (best verified row)
- FrontierCode 1.1 Main: **53.3%** / Extended: **64.5%**; FrontierCode 2.0: **42.8%**
- ScarfBench (Java migration): **65.4%**; PostTrainBench v1.1: **44.3%**; Bug Hunt Bench: **45.0 fixes**
- SWE-bench Verified / SWE-bench Pro: no verified public row published for Astra
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- Long-context retrieval (MRCR / RULER): no verified public score found
- BrowseComp 91.5% is the closest proxy for very-long-horizon information gathering

### Normalized scores (1–100)

- **Tool use: 90/100.** BrowseComp 91.5%, Agents' Last Exam 59.3%, OSWorld 2.1 75.8% and TB2.1 (Vals) 87.3% form the strongest verified agentic cluster in the dataset; AutomationBench 41.4% and RoboDojo 29.8% are the drag.
- **Reasoning: 88/100.** HLE 57.2% with tools is frontier but below Opus 5.5 (67.7%); no ARC-AGI or FrontierMath rows were published, so the score rests on a thin public record.
- **Context window: 100/100.** 1,050,000 tokens total with 128,000 max output.
- **Multimodal: 70/100.** Text, image and PDF input only — no audio or video; output is text-only.
- **Coding: 90/100.** FrontierSWE v2 65.5% and DeepSWE 74.1% are the best verified coding-agent rows here, but the absence of any SWE-bench Verified/Pro publication is a real evidence gap.
- **Cost efficiency: 30/100.** $10/$50 per 1M is the highest frontier price in this comparison (2.5× Opus 5.5), only justified for the hardest reasoning work.
- **Overall Score: 87.6/100.** Best fit for deep research, web-scale browsing and hard science/agentic problems where the answer quality justifies the price; a poor default for high-volume coding.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model page and system card, BenchLM model profile, Artificial Analysis, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6 Astra — OpenAI](https://openai.com/index/gpt-6-astra/)
  - [GPT-6 Astra benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-6-astra)
  - [GPT-6 Astra intelligence & price analysis — Artificial Analysis](https://artificialanalysis.ai/models/gpt-6-astra)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_6_Astra_v2.md`, using the same headings.