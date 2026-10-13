# Gemini 2.5 Flash Lite — findings by Claude Opus 4.6

- Source: Google / Gemini 2.5 Flash-Lite
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's budget multimodal MoE model (mid-2025 GA). 1M context, thinking mode toggle, ultra-low pricing ($0.10/$0.40). 240-290+ tok/s output speed. Accepts text/image/audio/video/PDFs. Best-in-class for high-volume classification and extraction.
- **Provider / access:** Google AI Studio, Vertex AI, OpenRouter. Free tier available.
- **Release / knowledge:** Mid-2025 GA. Knowledge cutoff Jan 2025.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1,048,576 tokens (1M); ~64-66K max output.
- **Modalities:** Text, image, audio, video, PDF in; text out. Thinking mode toggle. Tool use, search grounding, code execution. URL context.
- **Pricing (as of 2026-10-13):** $0.10 / $0.40 per 1M tokens. Cached: $0.01 input.
- **Architecture:** Sparse MoE. Native multimodal. Thinking mode toggle.

### Raw benchmarks found

- MMLU-Pro: **~63.0%** (source: serenitiesai.com)
- GPQA Diamond: **~55.0%** (source: serenitiesai.com)
- HumanEval+: **~70.0%** (source: serenitiesai.com)
- LiveCodeBench: **~28.0%** (source: serenitiesai.com)
- SWE-bench Verified: **~22.0%** (source: serenitiesai.com)
- GSM8K: **~83.0%** (source: serenitiesai.com)
- MATH: **~62.0%** (source: serenitiesai.com)
- OCR: **~77.7%** (source: roboflow.com)
- Chatbot Arena ELO: **~1230** (source: serenitiesai.com)
- Output speed: **240-290+ tok/s** (source: artificialanalysis.ai)

### Normalized scores (1–100)

- **Tool use: 68/100.** Tool use, search grounding, code execution supported. Lightweight model limits complex agentic tasks. Thinking mode helps.
- **Reasoning: 62/100.** GPQA Diamond 55%, MMLU-Pro 63%. Budget model tradeoffs. Thinking mode available for deeper reasoning.
- **Context window: 92/100.** 1M verified (ref: 1M = 90-95). ~64K output. Generous for a budget model.
- **Multimodal: 82/100.** Text + image + audio + video + PDF in. Full multimodal including video. OCR 77.7%.
- **Coding: 52/100.** SWE-bench 22%, LiveCodeBench 28%, HumanEval+ 70%. Budget-tier coding. Speed over depth.
- **Cost efficiency: 98/100.** $0.10/$0.40 with $0.01 cached. Among cheapest multimodal models with 1M context.
- **Overall Score: 71/100.** Mean of (68 + 62 + 92 + 82 + 52) / 5 = 71.2, rounded to 71. Outstanding budget multimodal with 1M context; trades reasoning/coding depth for speed and cost.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (serenitiesai.com, google.dev, roboflow.com, openrouter.ai, artificialanalysis.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
