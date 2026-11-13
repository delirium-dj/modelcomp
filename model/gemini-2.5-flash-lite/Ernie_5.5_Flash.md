# Gemini 2.5 Flash-Lite — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's cheapest/fastest Gemini 2.5 thinking model (preview 2025-06-17, tied to the 2.5 family GA update), built for high-throughput classification, summarization and latency-sensitive agents. Thinking is off by default on this tier.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-2.5-flash-lite`), Vertex AI / Gemini Enterprise Agent Platform, OpenRouter (`google/gemini-2.5-flash-lite`), plus ~20 gateway routes. Being retired on Vertex (announced retirement 2026-10-20); still served on the Gemini API.
- **Release / knowledge:** 2025-06-17 (preview); knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-flash-lite`, `gemini-2.5-flash-lite-preview-09-2025` (deprecated), `google/gemini-2.5-flash-lite`.
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, audio, video and PDF in; text out; thinking with budget control; function calling, grounding with Google Search, code execution, URL context (no computer use, no Live API).
- **Pricing (as of 2026-11-13):** $0.10 in / $0.40 out per 1M; cached input ~$0.01 (OpenRouter).
- **Architecture:** proprietary sparse MoE (undisclosed).

### Raw benchmarks found

> Third-party tracker rows (RankedAGI, Serenities AI) plus Google's own launch chart. Google's own per-benchmark numbers for Flash-Lite are published only as an image in the launch post; the numbers below are the tracker-measured rows for this exact ID.

Agent / tool use:

- Tau2-Bench Airline: **47.3%** (Serenities AI / OpenRouter-measured)
- GDPval-AA Elo: **322** (RankedAGI, Artificial Analysis office-tasks eval)
- Terminal-Bench / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **66.7%** (RankedAGI) — note Serenities AI lists 55.0%; the two trackers disagree, so both are recorded
- HLE: **6.9%** (no tools, RankedAGI)
- MMLU: **84.5%** (RankedAGI); MMLU-Pro **63.0%** (Serenities/HF leaderboard)
- AIME 2025: **63.1%**; MATH **62.0%**; GSM8K **83.0%**; ARC-AGI **14.0%**
- Chatbot Arena ELO: **1230** (Serenities/LMArena)

Coding:

- SWE-bench Verified: **44.9%** (RankedAGI) — Serenities lists 22.0%, a large tracker discrepancy
- LiveCodeBench v6: **34.3%** (RankedAGI) — Serenities lists 28.0%
- Aider Polyglot: **27.1%**; HumanEval+: **70.0%**

Long context:

- 1M-token window declared; no MRCR / RULER / GraphWalks figure published for this exact ID.

### Normalized scores (1–100)

- **Tool use: 62/100.** Tau2-Airline 47.3% and GDPval-AA 322 are mid-tier; native function calling + grounding + code execution are present, but no agentic coding rows exist. Capped by the missing TB/Claw evidence.
- **Reasoning: 60/100.** GPQA Diamond is the swing row: 66.7% (RankedAGI) vs 55.0% (Serenities) — even the generous figure is a generation behind the frontier, and HLE 6.9% is very low. Mid-band.
- **Context window: 88/100.** 1M input with 65K output — tier 500K–1M high band; no retrieval-quality figure at 1M to push it higher.
- **Multimodal: 80/100.** text/image/audio/video/PDF in with MMMU 72.9% (RankedAGI); Google's own launch chart claims broad multimodal gains over 2.0 Flash-Lite. Strong for the price tier; MMMU trails current VL leaders.
- **Coding: 45/100.** SWE-bench Verified is reported as either 44.9% or 22.0% depending on tracker, LCB v6 28–34%; both readings are well behind even 2025 mid-tier coding models. The tracker disagreement itself signals a weak, unstable coding row — that is the cap.
- **Cost efficiency: 98/100.** $0.10/$0.40 per 1M with 1M context is among the cheapest per token in the dataset.
- **Overall Score: 66.6/100.** Best fit for high-volume classification, summarization, translation and cheap multimodal extraction at 1M context; the coding and reasoning rows keep it firmly out of the agentic tier.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (RankedAGI model record, Serenities AI benchmark record, Google for Developers 2.5-family launch post, Vertex AI model docs, LLM Stats pricing/context); scores are normalized 1–100 interpretations, not official vendor scores. Where two trackers disagree both figures are shown.
- Reference URLs:
  - [Gemini 2.5: Updates to our family of thinking models — Google for Developers, June 17 2025](https://developers.googleblog.com/en/gemini-2-5-thinking-model-updates/)
  - [Gemini 2.5 Flash-Lite — Vertex AI model documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-flash-lite)
  - [Gemini 2.5 Flash Lite benchmarks — RankedAGI](https://rankedagi.com/models/gemini-2.5-flash-lite)
  - [Gemini 2.5 Flash Lite — Serenities AI benchmark record](https://serenitiesai.com/benchmark/models/gemini-2-5-flash-lite)
  - [Gemini 2.5 Flash-Lite: Benchmarks, Pricing & Context Window — LLM Stats](https://llm-stats.com/models/gemini-2.5-flash-lite)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.