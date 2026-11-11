# Gemini 3.8 Flash — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most intelligent Flash-tier model (released 2026-09-02), engineered for long-horizon software engineering, autonomous agents and complex enterprise workflows at Flash pricing.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-3.8-flash`), Vertex AI (`google-vertex/gemini-3.8-flash`), OpenRouter, SAP AI Core, Prime, LLM Gateway, plus ~30 routes.
- **Release / knowledge:** 2026-09-02 (models.dev); knowledge cutoff not published.
- **IDs:** `gemini-3.8-flash`, `google/gemini-3.8-flash`, `google-vertex/gemini-3.8-flash`, `opencode/gemini-3.8-flash`.
- **Context window:** 1,048,576 tokens (1M); max output 65,536.
- **Modalities:** text, image, video, audio and PDF in; text out; thinking and tool calls supported.
- **Pricing (as of 2026-11-11):** $0.75 / $3.75 per 1M input/output; cache read $0.075.
- **Architecture:** proprietary sparse MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google-reported) but Terminal-Bench 2.1 (Vals AI) **81.3%**
- Terminal-Bench 4.0: **19.10%**; Terminal-Bench 4.1: **18.20%** — severe regression on the newer harness
- FrontierSWE v2: **19.6%**; CursorBench 4.0: **39.6%**; CursorBench 3.2: **69.2%**
- OSWorld 2.0: **59.0%**; ApprenticeBench: **24%**; Finance Agent v2: **61.4%**
- Hermes Index: **38.1**; Hermes Bench: **62.2%**; Bug Hunt Bench: **18.0 fixes**; MazeBench: **4%**

Reasoning / knowledge:

- ARC-AGI-1 (semi-private): **98.50%**; ARC-AGI-2: **89.2%**; ARC-AGI-3: **10.4%** (provider-adapter 35.00%)
- HLE / GPQA Diamond / FrontierMath / CritPt: no verified public rows published for 3.8 Flash
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- LiveCodeBench (Vals AI): **89.5%**; SWE-bench (Vals AI): **80.0%**
- DeepSWE: **73.8%**; ScarfBench (Java migration): **66.0%**
- Terminal-Bench 4.x: **19.1% / 18.2%** (see above) — the defining weakness

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published for this model
- Long-context retrieval is therefore unverified despite the 1M window

### Normalized scores (1–100)

- **Tool use: 70/100.** The TB2.1 headline (89.4%) collapses to 19.1% on Terminal-Bench 4.0 and 18.2% on 4.1 — the widest harness gap in this dataset; OSWorld 2.0 59.0% and Hermes 38.1 are also mid-pack.
- **Reasoning: 85/100.** ARC-AGI-2 89.2% and ARC-AGI-1 98.5% are strong, but ARC-AGI-3 10.4% and the absence of any HLE/GPQA/FrontierMath publication leave the top end unverified.
- **Context window: 100/100.** 1,048,576 tokens with 65,536 max output.
- **Multimodal: 90/100.** Text, image, video, audio and PDF input with the strongest verified multimodal category rank (#13 of 214 on BenchLM); no public LVBench-style video row for this exact model.
- **Coding: 82/100.** LiveCodeBench 89.5% (Vals), SWE-bench 80.0% (Vals) and DeepSWE 73.8% are genuinely good for the price; the Terminal-Bench 4.x collapse (19%) is disqualifying for autonomous repo work.
- **Cost efficiency: 92/100.** $0.75/$3.75 per 1M with $0.075 cache reads — roughly one thirteenth of GPT-6 Astra's price.
- **Overall Score: 85.4/100.** Best fit for high-volume multimodal and long-context work with human-verified steps; do not use it for unattended Terminal-Bench-4-style agentic coding.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Google DeepMind model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.8 Flash — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3.8-flash/)
  - [Gemini 3.8 Flash benchmarks & sources — BenchLM](https://benchlm.ai/models/gemini-3-8-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash_v2.md`, using the same headings.