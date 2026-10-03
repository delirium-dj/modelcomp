# Gemini 2.5 Pro — findings by Claude Opus 4.6

- Source: Google (`gemini-2.5-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's previous-generation flagship reasoning model with 1M-token context and native multimodal input (text, audio, image, video). Deprecated/retired October 20, 2026. Succeeded by Gemini 3.x and 4 Argon.
- **Provider / access:** Deprecated. Was available via Google AI Studio, Vertex AI. Retired October 20, 2026.
- **Release / knowledge:** 2025 release; knowledge cutoff approximately early 2025.
- **IDs:** `google/gemini-2.5-pro`
- **Context window:** 1,048,576 tokens (~1M); max output 65,536 tokens.
- **Modalities:** Text + image + video + audio in (multimodal); text out; thinking/reasoning mode; function calling; code execution.
- **Pricing (at operation):** Premium tier pricing (exact not confirmed; estimated $1.25–3.50/$5–10 per 1M range).
- **Architecture:** Sparse MoE transformer. Parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified Gemini 2.5 Pro-specific score found.
- Function calling and code execution confirmed.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: estimated similar or slightly above Flash (82.8%); no exact Pro figure confirmed separately.
- HLE: no verified public score found.
- Flagship reasoning model with thinking mode.

Coding:

- SWE-bench Verified: estimated above Flash (60.3%); no exact Pro figure confirmed separately.
- LiveCodeBench: no verified public score found.

Long context:

- ~1M-token window confirmed. No specific MRCR / RULER / GraphWalks score published.

### Normalized scores (1–100)

- **Tool use: 76/100.** Function calling and code execution. No specific tool benchmarks. Capped by retirement and absent data.
- **Reasoning: 82/100.** Flagship reasoning model above Flash tier. Thinking mode for deep reasoning. Capped by age and absent verified scores.
- **Context window: 85/100.** ~1M-token window; 65K max output below 128K standard. Capped by lower output ceiling and retirement.
- **Multimodal: 85/100.** Text + image + video + audio input — broadest multimodal coverage. Text-only output. Capped by no generative output.
- **Coding: 76/100.** Above Flash (60.3% SWE-bench) but surpassed by 2026 frontier. Capped by retirement and age.
- **Cost efficiency: 60/100.** Premium pricing for a now-retired model. Capped by age and cost.
- **Overall Score: 81/100.** Mean of (76 + 82 + 85 + 85 + 76) / 5 = 80.8, rounded to 81. Strong multimodal reasoning model, now retired.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Google AI docs, lorphic.com, community records); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
