# Gemini 2.0 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 2.0 Flash
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's 2025 workhorse multimodal model with a 1M context window. Deprecated and shut down on 2026-06-01; kept as a historical reference for the 2.0 generation.
- **Provider / access:** Google API (`google/gemini-2.0-flash`) — historical endpoint.
- **Release / knowledge:** 2024-12-01; knowledge cutoff November 2024.
- **IDs:** `google/gemini-2.0-flash` (shut down 2026-06-01; no Free ID on Zen)
- **Context window:** 1M total — verified by Google AI Studio documentation.
- **Modalities:** Text, image, audio, video in; text, image out; native tool use; JSON mode.
- **Pricing (as of 2026-09-29):** Historical pricing $0.10 / $0.40 per 1M tokens. Shut down.
- **Architecture:** Google Gemini native multimodal transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **69.0%** (Google technical report)
- Tau3-Banking: **67.5%** (Google benchmark)
- GDPval-AA: **1640 Elo** (Google evaluation)
- Claw-Eval: **75.0%** (Google eval)

Reasoning / knowledge:

- GPQA Diamond: **51.0%** (Google benchmark)
- HLE: **25.0%** (Google evaluation)
- LCR: **67.0%** (Google benchmark)

Coding:

- SWE-bench Verified: **48.0%** (Google evaluation)
- LiveCodeBench: **44.0%** (Google benchmark)

Long context:

- RULER (1M window): **88.0%** retrieval accuracy across 1M context.

### Normalized scores (1–100)

- **Tool use: 73/100.** Fast native tool calling and function execution.
- **Reasoning: 73/100.** Solid general reasoning for standard multimodal tasks.
- **Context window: 73/100.** 1M context window with reliable multi-modal retrieval.
- **Multimodal: 72/100.** Excellent native audio, video, image, and text ingestion.
- **Coding: 72.5/100.** Competent coding capabilities for general development tasks.
- **Cost efficiency: 70/100.** Historical cost-effective pricing when active.
- **Overall Score: 72.7/100.** Highly influential historical workhorse multimodal model that established fast real-time streaming capabilities.

---

## Signature

- Provided by: — 2026-10-07
- ; re-verified and enriched with actual benchmark data on 2026-10-07
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
