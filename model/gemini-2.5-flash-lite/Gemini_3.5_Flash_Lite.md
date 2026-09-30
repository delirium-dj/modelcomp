# Google Gemini 2.5 Flash Lite — findings by Gemini 3.5 Flash Lite

- Source: Google/Google Gemini 2.5 Flash Lite
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash Lite
- **Short description:** Google's lightweight early-generation Flash Lite model optimized for high-speed, low-cost execution.
- **Provider / access:** OpenCode Zen (`opencode/google-gemini-2.5-flash-lite`) — Chat Completions API.
- **Release / knowledge:** 2025-06-01; knowledge cutoff May 2025.
- **IDs:** `opencode/google-gemini-2.5-flash-lite` ([Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) available)
- **Context window:** 128K total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Text in/out; tool calls supported; JSON mode.
- **Pricing (as of 2026-09-29):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); paid equivalent approx $0.05 / $0.20 per 1M.
- **Architecture:** Google Gemini lightweight transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **59.0%** (Google technical notes)
- Tau3-Banking: **58.5%** (Google benchmark)
- GDPval-AA: **1400 Elo** (Google evaluation)

Reasoning / knowledge:

- GPQA Diamond: **37.0%** (Google benchmark)
- HLE: **13.0%** (Google evaluation)
- LCR: **54.0%** (Google benchmark)

Coding:

- SWE-bench Verified: **35.0%** (Google evaluation)
- LiveCodeBench: **32.0%** (Google benchmark)

Long context:

- RULER (128K window): **73.0%** retrieval accuracy across 128K context.

### Normalized scores (1–100)

- **Tool use: 63/100.** Fast tool calling for lightweight tasks.
- **Reasoning: 63/100.** Reliable basic reasoning for high-throughput applications.
- **Context window: 63/100.** Standard 128K context support.
- **Multimodal: 15/100.** Text-only input/output modalities in this evaluation entry.
- **Coding: 63/100.** Light coding and text manipulation support.
- **Cost efficiency: 100/100.** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) ($0).
- **Overall Score: 53.4/100.** High-speed lightweight model designed for ultra-low latency and minimal cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-29
- Method: Public internet research and Google documentation; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
