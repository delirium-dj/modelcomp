# Gemini 4 Argon — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 4 Argon (`gemini-4-argon`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's flagship reasoning model (released 2026-10-13) for complex software engineering, deep math/science and long-horizon autonomous agents; the top of the Gemini 4 line and Google's answer to GPT-6 Astra / Claude Opus 5.5.
- **Provider / access:** Google Gemini API (`gemini-4-argon`), Vertex AI (`google-vertex/gemini-4-argon`), AI Studio, plus gateway routes (OpenRouter `google/gemini-4-argon`, OpenCode Go `opencode-go/gemini-4-argon`, Vercel AI Gateway, LLM Gateway, Prime).
- **Release / knowledge:** 2026-10-13; knowledge cutoff 2026-03 (models.dev).
- **IDs:** `gemini-4-argon`, `google-vertex/gemini-4-argon`, `google/gemini-4-argon`, `opencode-go/gemini-4-argon`.
- **Context window:** 1,048,576 tokens total (1M); max output 65,536 on the Google/Vertex routes (llmgateway lists a 1M output cap, an outlier).
- **Modalities:** text, image, video, audio and PDF in; text out. Native tool calls, structured output and thinking/reasoning with an effort control.
- **Pricing (as of 2026-11-11):** $2.00 / $10.00 per 1M input/output; cache read $0.10.
- **Architecture:** proprietary (sparse mixture-of-experts, undisclosed sizes); Google positions it as its most capable model for agentic and STEM work.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.40%** (Google-reported; trails Opus 5.5's 66.4%)
- Terminal-Bench-Science 0.1: **57.6%** (with sixfold verifier timeout)
- AutomationBench: **51.3%** (best in the compared set per BenchLM)
- OSWorld 2.0: **69.2%**; OSWorld 2.1 offline subset (82 tasks): **74.7%**
- DeepSearchQA: **89.4%** (via Muse Spark comparison table)
- Agents' Last Exam: **39.5%**; Finance Agent v2: **65.4%**
- ExploitGym: **39.5%**; RoboDojo Sim: **34.2%**; MazeBench: **12%**
- Artificial Analysis Intelligence Index: high-80s band (BenchLM composite 81.4/100; AA lists it as a top-6 model)

Reasoning / knowledge:

- FrontierMath v2 (Tiers 1–3): **85.965%** (Google-reported, tier-filtered)
- ARC-AGI-1 (semi-private): **98.50%**; ARC-AGI-2: **91.3%**; ARC-AGI-3: **46.3%** (semi-private provider-adapter harness 97.30%)
- LVBench (long video): **91.7%**; Blueprint-Bench 2: **54.4%**
- LABBench2 (biology research): **88.8%**; Morphology-to-molecule matching: **25.2%**
- Gray Swan indirect prompt injection (15 attempts): **0.7%** attack success (best-in-class resistance)
- GPQA Diamond / HLE / CritPt: no verified public score found for this model

Coding:

- DeepSWE: **77.9%**
- Vibe Code Bench v1.1: **91.90%**
- FrontierSWE v2: **55.0%**; ScarfBench (Java migration): **75.2%**
- FrontierCode 2.0: **26.3%**; CursorBench 4.0: **52.9%**; PostTrainBench v1.1: **45.3%**; Bug Hunt Bench: **40.7 fixes**
- SWE-bench Verified: no verified public score found (Google did not publish a Verified row for Argon)

Long context:

- GraphWalks BFS 0K–128K: **99.7%**; GraphWalks BFS 256K–1M: **84.2%**
- ExtractBench Pro (LlamaIndex): **30%** (long-tail extraction is the weak spot)

### Normalized scores (1–100)

- **Tool use: 88/100.** AutomationBench 51.3% leads the direct comparison set and OSWorld 2.0 69.2% is strong, but Terminal-Bench 4.0 (57.4%) sits well behind Opus 5.5 and ExploitGym/RoboDojo are mid-pack.
- **Reasoning: 92/100.** FrontierMath v2 Tiers 1–3 at 85.97% and ARC-AGI-2 91.3% are frontier; ARC-AGI-3 46.3% shows the abstraction ceiling, and no HLE/GPQA figure is published.
- **Context window: 100/100.** 1,048,576-token window (top tier of the dataset), with 64K–1M output depending on route.
- **Multimodal: 95/100.** Text, image, video, audio and PDF input with text output — the broadest input coverage in this comparison; LVBench 91.7% confirms real video understanding.
- **Coding: 92/100.** Vibe Code Bench 91.9% and DeepSWE 77.9% are excellent; FrontierCode 2.0 (26.3%) and CursorBench 52.9% trail the coding specialists, and no SWE-bench Verified row was published.
- **Cost efficiency: 82/100.** $2/$10 per 1M with $0.10 cache reads is roughly half the Opus 5.5 price for near-frontier quality.
- **Overall Score: 93.4/100.** Best fit for long-horizon agentic research, multimodal document/video work and math-heavy engineering at a mid-frontier price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Google DeepMind model card, BenchLM model profile, Artificial Analysis model page, DataCamp/toolscout launch coverage, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 4 Argon — Model Card, Google DeepMind](https://deepmind.google/models/model-cards/gemini-4-argon/)
  - [Gemini 4 Argon benchmarks & sources — BenchLM](https://benchlm.ai/models/gemini-4-argon)
  - [Gemini 4 Argon intelligence & price analysis — Artificial Analysis](https://artificialanalysis.ai/models/gemini-4-argon)
  - [Gemini 4 Argon: benchmarks, pricing and access — DataCamp](https://www.datacamp.com/blog/gemini-4-argon)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon_v2.md`, using the same headings.