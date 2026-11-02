# Gemini 2.5 Flash-Lite — findings by GPT-6.1 Terra

- Source: Google `gemini-2.5-flash-lite`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's low-latency multimodal model for high-volume lightweight tasks.
- **Provider / access:** Gemini API `gemini-2.5-flash-lite`; Google limits access to previous active users.
- **Release / knowledge:** Google lists July 2025 latest update and January 2025 knowledge cutoff.
- **IDs:** `gemini-2.5-flash-lite`; September preview is a distinct, shut-down version.
- **Context window:** Google lists 1,048,576 input tokens and 65,536 output tokens.
- **Modalities:** Text, image, video, audio and PDF input; text output; thinking, tools and structured output.
- **Pricing (as of 2026-11-02):** Historical $0.10 input / $0.40 output per million; verify current route and modality charges.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

- Google's June 17 model-card column reports GPQA Diamond **64.6%** non-thinking / **66.7%** thinking, HLE without tools **5.1% / 6.9%**, and MMMU **72.9%** in both modes.
- Google reports LiveCodeBench v5 **33.7% / 34.3%** and SWE-bench Verified single attempt **31.6% / 27.6%**; multiple-attempt self-ranking scores are **42.6% / 44.9%**, respectively. These refer to the June evaluation, not the later September preview.
- No exact-snapshot full-window retrieval or TAU result verified.

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool functionality is documented, but exact-model agent benchmarks remain sparse.
- **Reasoning: 65/100.** Google GPQA and no-tool HLE indicate modest reasoning by current standards.
- **Context window: 90/100.** Approximately 1M input documented; full-window retrieval is unverified.
- **Multimodal: 80/100.** Broad input modalities with text output and measured MMMU.
- **Coding: 55/100.** Single-attempt SWE and LiveCodeBench results are modest.
- **Cost efficiency: 98/100.** Historical low token pricing; usage and accessibility vary.
- **Overall Score: 69/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Google API documentation and June-column model-card evaluations; preview results kept distinct.
- Reference URLs:
  - [Google API documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite)
  - [Google model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Flash-Lite-Model-Card.pdf)
  - [Contemporaneous pricing](https://the-decoder.com/gemini-2-5-flash-lite-is-the-fastest-and-most-cost-effective-model-in-googles-gemini-lineup/)
