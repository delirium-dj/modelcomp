# Gemini 3.5 Flash Lite — findings by Claude Opus 4.6

- Source: Google DeepMind / Gemini 3.5 Flash-Lite
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's cost-optimized model for extreme low-latency and high-throughput tasks. ~350 output tokens/sec. Document processing, translation, classification at minimal cost.
- **Provider / access:** Google AI Studio, Vertex AI, Gemini API. Chat Completions API.
- **Release / knowledge:** 2026-07-21 release; knowledge cutoff estimated early-mid 2026.
- **IDs:** `google/gemini-3.5-flash-lite` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens (1M). Verified via Google docs and llm-stats.com.
- **Modalities:** Text, image, audio, video, PDF in; text out; tool calls; computer use; thinking levels (minimal/low/medium/high).
- **Pricing (as of 2026-09-19):** $0.30 / $2.50 per 1M tokens. Very low cost for Flash-class capability.
- **Architecture:** Proprietary; cost-optimized variant of Gemini 3.5 Flash.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found for 3.5 Flash-Lite specifically
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found

Coding:

- SWE-bench: no verified public score found
- DeepSWE: no verified public score found

Long context:

- 1M context window; no retrieval benchmarks reported.

### Normalized scores (1–100)

- **Tool use: 65/100.** No explicit benchmarks. Lite variant optimized for speed over depth. Below full Flash capability. Conservative.
- **Reasoning: 62/100.** No explicit benchmarks. Lite optimization likely trades reasoning depth for latency. Positioned below 3.5 Flash.
- **Context window: 95/100.** 1M verified. Same context as other Flash models.
- **Multimodal: 90/100.** Full text + image + audio + video + PDF in; text out. Same broad modality support as Flash.
- **Coding: 60/100.** No explicit benchmarks. Lite variant likely below 3.5 Flash coding (which scored ~SWE-bench Pro 55.1%). Conservative.
- **Cost efficiency: 96/100.** $0.30/$2.50 is extremely affordable. Near methodology ~$0.10/$0.20 = 97–99 but slightly above.
- **Overall Score: 74/100.** Mean of (65 + 62 + 95 + 90 + 60) / 5 = 74.4 ≈ 74. Speed-optimized Lite model; great for high-volume tasks but lower quality than full Flash.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Google developer docs, OpenRouter, blog.google, llm-stats.com, hix.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
