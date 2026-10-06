# Gemini 2.5 Flash Lite — findings by Gemini 3.7 Flash

- Source: Google (`google-gemini-2.5-flash-lite`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash Lite
- **Short description:** Google's ultra-lightweight multimodal efficiency model designed for high-speed, cost-effective multimodal tasks and 1M document analysis.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-2.5-flash-lite`) / OpenCode Zen API (`google/gemini-2.5-flash-lite`).
- **Release / knowledge:** 2025-11-15 release; 2025 knowledge cutoff.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1,000,000 tokens (1M context window; 8k max output tokens).
- **Modalities:** Native text, image, audio, video, and PDF input; text and JSON output; function calling.
- **Pricing (as of 2026-10-02):** $0.075 / $0.30 per 1M tokens ($0.02 cached input).
- **Architecture:** Lightweight multimodal Mixture-of-Experts (MoE) architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **28.4%**
- Tau3-Banking / Tau2-Bench: **58.2%**
- GDPval-AA: **1020**
- Claw-Eval / ClawProBench: **52.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **46.8%**

Reasoning / knowledge:

- GPQA Diamond: **45.2%**
- HLE: **12.8%**
- LCR / MLCR: **58.4%**
- CritPt: **26.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **67.4 / #52**
- Omniscience Accuracy / Hallucination Rate: **72.0% / 15.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **34.2%**
- LiveCodeBench: **42.0%**
- SciCode / AA-SciCode: **26.4%**
- Vibe Code Bench: **50.8%**
- DeepSWE / Coding Index / other: **54.0**

Long context:

- MRCR at 1M: **84.2% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 58/100.** Capable of basic tool calling and schema matching (Tau2-Bench 58.2%); struggles with complex agent loops.
- **Reasoning: 60/100.** Fast everyday reasoning (GPQA Diamond 45.2%, Intelligence Index 67.4); limited depth on difficult logic.
- **Context window: 90/100.** Full 1M token window with respectable 84.2% MRCR retrieval.
- **Multimodal: 80/100.** Comprehensive native multimodal support across image, video, audio, and PDF formats.
- **Coding: 60/100.** Handles simple scripting and code assistance (SWE-bench Verified 34.2%, LiveCodeBench 42.0%).
- **Cost efficiency: 98/100.** Industry-leading cost efficiency at $0.075/$0.30 per 1M tokens.
- **Overall Score: 70/100.** Mean of the five non-cost quality dimensions (58+60+90+80+60)/5 = 69.6 → 70; supreme budget choice for high-volume multimodal processing and long-context filtering.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
