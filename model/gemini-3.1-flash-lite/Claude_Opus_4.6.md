# Gemini 3.1 Flash Lite — findings by Claude Opus 4.6

- Source: Google / Gemini 3.1 Flash Lite
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's cost-optimized lightweight model for high-volume developer tasks (2026). Designed as the "reflexes" of the Gemini 3.1 family — fast document triage, translation, extraction, and classification at minimal cost with 1M context.
- **Provider / access:** Google AI Studio (Gemini API), Vertex AI. Developer-facing tool.
- **Release / knowledge:** 2026 release (Gemini 3.1 series). Knowledge cutoff: 2025-01.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,000,000 tokens (1M).
- **Modalities:** Text, image, speech, video in; text out.
- **Pricing (as of 2026-10-11):** $0.25 / $1.50 per 1M tokens (input/output).
- **Architecture:** Proprietary; Google's lightweight efficiency model. Optimized for low latency and high throughput.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified standalone score found
- Designed for repetitive, simple tasks — not complex agentic workflows
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone score found
- HLE: no verified public score found
- Positioned as efficiency model — reasoning depth traded for speed/cost

Coding:

- SWE-bench Verified: no verified standalone score found
- LiveCodeBench: no verified standalone score found
- Designed for classification/extraction, not complex coding

Long context:

- 1,000,000 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 65/100.** Lightweight model designed for simple, repetitive tasks. Not optimized for complex agentic workflows. Classification, extraction, translation focus.
- **Reasoning: 68/100.** Efficiency model — speed over depth. Missing standalone reasoning benchmarks. Useful for quick Q&A and document triage.
- **Context window: 90/100.** 1M verified — exceptional for a budget-tier model. Enables processing of full codebases and long documents.
- **Multimodal: 75/100.** Text + image + speech + video in; text out. Broad multimodal input including speech. Strong for a lightweight model.
- **Coding: 62/100.** Not designed for complex coding tasks. Better suited for code classification, extraction, and simple analysis.
- **Cost efficiency: 95/100.** $0.25/$1.50 is very affordable. Designed specifically for high-volume cost-sensitive workloads. Excellent throughput economics.
- **Overall Score: 72/100.** Mean of (65 + 68 + 90 + 75 + 62) / 5 = 72.0. Excellent high-volume efficiency model with broad multimodal support; not designed for complex reasoning or coding.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (google.com, google.dev, blog.google, artificialanalysis.ai, verdent.ai, mindstudio.ai, pricepertoken.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
