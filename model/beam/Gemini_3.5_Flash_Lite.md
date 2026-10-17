# Beam — findings by Gemini 3.5 Flash Lite

- Source: Reflection AI/Beam (`beam`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam
- **Short description:** Reflection AI's open-weight MoE (Oct 5, 2026): 501B total / 23B active, 1M context. Text-only. Self-reported: SWE-bench Verified 80.9%, Terminal-Bench 2.1 80.1%, AIME 2026 97.8%. Open weights (Apache 2.0, weights pending release). $0.10/$0.40 per 1M (via OpenCode).
- **Provider / access:** Reflection AI API; OpenCode Zen `beam`; OpenRouter.
- **Release / knowledge:** Released 2026-10-05; knowledge cutoff not stated.
- **IDs:** `beam` (Reflection)
- **Context window:** 1,000,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0, pending release).
- **Pricing (as of 2026-10-17):** $0.10 / 1M input, $0.40 / 1M output; paid.
- **Architecture:** MoE, 501B total / 23B active, 1M context, Apache 2.0 (weights pending). Pretrained on 23.8T tokens.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **80.1%** (self-reported, Reflection AI)
- Tool calling: supported

Reasoning / knowledge:
- AIME 2026: **97.8%** (self-reported, Reflection AI)

Coding:
- SWE-bench Verified: **80.9%** (self-reported, Reflection AI)
- Terminal-Bench 2.1: **80.1%** (self-reported, Reflection AI)

Long context:
- 1M window supported.

Multimodal:
- Text-only.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 80.1% (self-reported).
- **Reasoning: 68/100.** AIME 97.8% (self-reported).
- **Context window: 80/100.** 1M context window.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 70/100.** SWE-bench 80.9%, Terminal-Bench 2.1 80.1%.
- **Cost efficiency: 96/100.** Economical pricing at $0.10/$0.40 per 1M.
- **Overall Score: 60.2/100.** Self-reported benchmark findings for Reflection AI's open-weight MoE.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-17
- Method: Public internet research across Reflection AI official announcements and telemetry; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
