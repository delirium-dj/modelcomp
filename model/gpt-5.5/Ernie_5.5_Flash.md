# GPT-5.5 — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.5 (`gpt-5.5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's default frontier GPT for coding, computer use, research and knowledge work (released 2026-04-23) — the mainstream GPT-5.5 tier that GPT-6 later replaced.
- **Provider / access:** OpenAI API/Responses (`gpt-5.5`), Azure OpenAI, plus ~50 gateway routes (OpenRouter, FastRouter, Unorouter — including a `:free` lane and a grey-market $0.19/$1.13 rate, LLM Gateway, GmiCloud).
- **Release / knowledge:** 2026-04-23; knowledge cutoff 2025-12-01 (models.dev).
- **IDs:** `gpt-5.5`, `openai/gpt-5.5`, `azure/gpt-5.5`, `opencode/gpt-5.5`.
- **Context window:** 1,050,000 total (922,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning (effort none→xhigh) and tool calls.
- **Pricing (as of 2026-11-11):** $5.00 / $30.00 per 1M input/output; cache read $0.50. A 272K+ context tier is priced at $10/$45.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench (Tool-Agent-User): **98%** — best verified tool-agent score in this dataset
- OSWorld-Verified: **78.7%**; MCP Atlas: **75.3%**; Toolathlon: **55.6%**
- Terminal-Bench 2.0: **82.0%**; Terminal-Bench 2.1 (Vals AI): **76.4%**
- BrowseComp: **84.4%**; CyberGym: **81.8%**; LifeVal: **77.4%**; JobBench: **42.7%**
- OSWorld 2.0: **13.0%**; ResearchClawBench: **17.0%**; Gert Labs composite: **72.93**

Reasoning / knowledge:

- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for the standard GPT-5.5 tier
- BenchLM ranks Instruction Following as its strongest category (#9)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench (Vals AI): **82.6%**; LiveCodeBench (Vals AI): **85.3%**; React Native Evals: **84.7%**
- SWE-bench Pro: **58.6%**; CursorBench 3.2: **58.4%** / cursorBench31: **59.2%**; Vibe Code Bench v1.1: **69.85%**
- FrontierCode 1.1 Main: **43.0%**; FrontierCode 2.0: **22.6%**; PostTrainBench v1.1: **27.2%**

Long context:

- 1.05M context documented (with a 272K+ price tier); no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-Bench 98% is the best verified tool-agent-user score here, OSWorld-Verified 78.7% strong, MCP Atlas 75.3% good; OSWorld 2.0 13.0% and ResearchClawBench 17.0% show the newer harnesses fail it.
- **Reasoning: 78/100.** No public HLE/GPQA/ARC/FrontierMath row exists for the standard tier; scored from its #20 BenchLM rank and strong instruction-following placement — low confidence.
- **Context window: 100/100.** 1,050,000 tokens with 128,000 max output (tiered pricing above 272K).
- **Multimodal: 78/100.** Text, image and PDF in with MMMU-class document work supported; no audio/video.
- **Coding: 80/100.** SWE-bench (Vals) 82.6%, LiveCodeBench 85.3% and Vibe Code Bench 69.9% are solid, but SWE-bench Pro 58.6% and FrontierCode 2.0 22.6% trail GPT-6.1 Sol (71.9% DeepSWE, TB4.1 60.9%).
- **Cost efficiency: 70/100.** $5/$30 per 1M is mid-premium; the Unorouter grey-market lane is not a legitimate reference price.
- **Overall Score: 83.6/100.** Best fit for tool-heavy knowledge work and instruction-following pipelines; superseded by GPT-6.1 Sol at 40% of the price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.5 — OpenAI](https://openai.com/index/gpt-5-5/)
  - [GPT-5.5 benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.5_v2.md`, using the same headings.