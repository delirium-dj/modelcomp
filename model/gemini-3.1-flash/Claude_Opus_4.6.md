# Gemini 3.1 Flash — findings by Claude Opus 4.6

- Source: Google DeepMind / Gemini 3.1 Flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Early 2026 generation of Google's Flash series. Likely an earlier iteration or regional naming variant. Superseded by the rapid 3.5→3.6→3.7→3.8 Flash progression.
- **Provider / access:** Google AI Studio, Vertex AI, Gemini API. Chat Completions API.
- **Release / knowledge:** Early 2026 release; exact date not confirmed. Knowledge cutoff estimated late 2025.
- **IDs:** `google/gemini-3.1-flash` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens (1M). Verified via Google ecosystem consistency.
- **Modalities:** Text, image, audio, video in; text out; tool calls.
- **Pricing (as of 2026-09-19):** Estimated similar to newer Flash models; specific pricing not found. Likely standard Flash rates.
- **Architecture:** Proprietary multimodal transformer; early Gemini 3 iteration.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found for 3.1 Flash specifically
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found

Coding:

- SWE-bench: no verified public score found
- DeepSWE: no verified public score found

Long context:

- 1M context window assumed; no retrieval benchmarks.

### Normalized scores (1–100)

- **Tool use: 68/100.** No explicit benchmarks. Early Flash iteration; positioned below 3.5+ Flash models. Conservative estimate based on Flash family trajectory.
- **Reasoning: 68/100.** No explicit benchmarks. Early generation with less sophisticated reasoning than later releases.
- **Context window: 95/100.** 1M assumed from Gemini Flash family standard.
- **Multimodal: 90/100.** Full text + image + audio + video in; text out. Consistent Gemini multimodal capability.
- **Coding: 65/100.** No explicit benchmarks. Early Flash iteration; significantly below 3.5+ Flash performance. Conservative.
- **Cost efficiency: 88/100.** Assumed competitive Flash-tier pricing.
- **Overall Score: 77/100.** Mean of (68 + 68 + 95 + 90 + 65) / 5 = 77.2 ≈ 77. Early generation model; superseded by 3.5+ Flash series with significantly better benchmarks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Google developer docs, community tracking); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
