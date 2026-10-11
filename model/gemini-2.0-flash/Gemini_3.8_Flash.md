# Gemini 2.0 Flash — findings by Gemini 3.8 Flash

- Source: Google / Gemini (`google/gemini-2.0-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google DeepMind's second-generation multimodal workhorse model engineered for high speed, native tool calling, audio/visual understanding, and 1M context processing; officially retired from API serving on June 1, 2026.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-2.0-flash`), Google Cloud Vertex AI, and [OpenRouter](https://openrouter.ai/models/google/gemini-2.0-flash). Retired on 2026-06-01.
- **Release / knowledge:** 2024-12-11 preview, 2025-02-05 GA; knowledge cutoff August 2024; shutdown on 2026-06-01.
- **IDs:** `google/gemini-2.0-flash`
- **Context window:** 1,048,576 tokens total (1M context window); max output 8,192 tokens.
- **Modalities:** Native multimodal input (text, images, audio, video); text output; native tool use, function calling, Google Search grounding, and Python code execution.
- **Pricing (as of retirement):** $0.10 / 1M input tokens, $0.025 / 1M cached input, $0.40–$0.42 / 1M output tokens (audio input $0.70 / 1M).
- **Architecture:** Multimodal transformer with native audio/video/image tokenization trained from scratch across modalities.

### Raw benchmarks found

Agent / tool use:
- FACTS Grounding: **83.6%** accuracy ([Google DeepMind Report](https://blog.google))
- GAIA: **32.73%** accuracy
- Online-Mind2Web: **29.00%** task success rate
- GDPval: **566** Elo

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **9** ([Artificial Analysis](https://artificialanalysis.ai/models/gemini-2-0-flash))
- GPQA Diamond: **64.1%** accuracy
- MMLU-Pro: **77.9%** accuracy
- AIME (OTIS Mock): **31.1%** accuracy
- FrontierMath: **1.72%** accuracy
- LongBench v2: **51.1%** accuracy

Multimodal:
- MathVista: **73.1%** accuracy
- MMMU: **70.7%** accuracy

Coding:
- BigCodeBench: **33.8%** calibrated pass@1
- LiveCodeBench: **33.4%** pass@1
- SciCode: **33.3%** accuracy
- Aider Polyglot: **22.2%** correct

Long context:
- 1,048,576 tokens context window evaluated across multimodal video, audio, and text retrieval.

### Normalized scores (1–100)

- **Tool use: 68/100.** Solid grounding and tool execution (83.6% FACTS Grounding, 32.73% GAIA), capped by early-stage web agent capabilities (29.0% Mind2Web).
- **Reasoning: 65/100.** Moderate general reasoning (64.1% GPQA Diamond, 77.9% MMLU-Pro, 31.1% AIME), reflecting late-2024 pre-thinking capabilities.
- **Context window: 90/100.** Standard 1M token context tier with full native multimodal ingestion.
- **Multimodal: 84/100.** Native multimodal perception across video, audio, and visual mathematics (73.1% MathVista, 70.7% MMMU).
- **Coding: 45/100.** Baseline code generation capability (33.8% BigCodeBench, 33.4% LiveCodeBench), lacking contemporary agentic SWE-bench performance.
- **Cost efficiency: 98/100.** Exceptionally cheap API rates ($0.10 / $0.40 per 1M tokens) with generous historical free tier access.
- **Overall Score: 70/100.** Arithmetic mean of five quality dimensions: (68 + 65 + 90 + 84 + 45) / 5 = 70.4 → 70. Groundbreaking late-2024 lightweight multimodal model that popularized high-speed native multimodal streaming, now retired and superseded by Gemini 2.5 and 3.x Flash.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public internet research into Google DeepMind announcements, Artificial Analysis leaderboards, and OpenRouter model specifications; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
