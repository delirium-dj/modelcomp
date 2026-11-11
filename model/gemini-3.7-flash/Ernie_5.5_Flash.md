# Gemini 3.7 Flash — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 3.7 Flash (`gemini-3.7-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** High-efficiency Gemini model (released 2026-08-13) for agentic workflows, coding and multimodal reasoning — the Flash tier that sits between 3.6 Flash and 3.8 Flash.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-3.7-flash`), Vertex AI (`google-vertex/gemini-3.7-flash`), OpenRouter, LLM Gateway, Kenari, Prime, plus ~30 routes.
- **Release / knowledge:** 2026-08-13; knowledge cutoff 2026-03 (models.dev).
- **IDs:** `gemini-3.7-flash`, `google/gemini-3.7-flash`, `google-vertex/gemini-3.7-flash`, `opencode/gemini-3.7-flash`.
- **Context window:** 1,048,576 tokens (1M); max output 65,536.
- **Modalities:** text, image, video, audio and PDF in; text out; thinking and tool calls.
- **Pricing (as of 2026-11-11):** $0.75 / $3.75 per 1M input/output; cache read $0.075.
- **Architecture:** proprietary sparse MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Vals AI run **77.5%**); Terminal-Bench 3.0: **14.9%**; Terminal-Bench 4.1: **12.40%**
- AutomationBench: **30.4%**; OSWorld 2.0: **47.9%**; ApprenticeBench: **16%**; Agents' Last Exam: **26.3%**
- MazeBench: **1%**; Hermes/Toolathlon: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **93.9%**; MMLU-Pro (Vals AI): **90.1%**
- HLE-Verified: **53.6%**; ARC-AGI-1 (semi-private): **95.50%**; ARC-AGI-2: **84.6%**
- CharXiv Reasoning: **88.7%** without tools **84.5%**; ParseBench: **70.37%**

Coding:

- LiveCodeBench (Vals AI): **88.7%**; SWE-bench (Vals AI): **80.8%**
- DeepSWE: **65.3%**; FrontierCode 1.1 Main: **43.6%**; FrontierSWE v2: **20.3%**
- SWE-bench Pro / VulcanBench: no verified public rows published

Long context:

- MRCR v2 8-needle 64K–128K: **97%** (OpenAI MRCR harness)
- No 256K–1M MRCR row published; RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 62/100.** TB2.1 85.8% looks strong until the harness changes: TB3.0 14.9% and TB4.1 12.4% are near-floor, OSWorld 47.9% and ApprenticeBench 16% confirm it is not an autonomous agent.
- **Reasoning: 85/100.** GPQA Diamond 93.9%, MMLU-Pro 90.1% and ARC-AGI-1 95.5% are excellent; HLE-Verified 53.6% and ARC-AGI-2 84.6% keep it below the Pro models.
- **Context window: 100/100.** 1,048,576 tokens with 65,536 max output; MRCR 97% at 64K–128K confirms usable retrieval in that band.
- **Multimodal: 88/100.** Text, image, video, audio and PDF in; CharXiv 88.7% and LVBench 85.4% prove real document and long-video understanding.
- **Coding: 78/100.** LiveCodeBench 88.7% and SWE-bench 80.8% (Vals) are good for the price, but DeepSWE 65.3% and FrontierSWE v2 20.3% cap agentic coding.
- **Cost efficiency: 92/100.** $0.75/$3.75 per 1M with $0.075 cache reads — a quarter of GPT-5.6 Sol's price.
- **Overall Score: 82.6/100.** Best fit for high-volume multimodal understanding and knowledge work; unsuitable for unattended terminal-style agentic coding.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Google DeepMind model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.7 Flash — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3.7-flash/)
  - [Gemini 3.7 Flash benchmarks & sources — BenchLM](https://benchlm.ai/models/gemini-3-7-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Gemini_3.7_Flash_v2.md`, using the same headings.