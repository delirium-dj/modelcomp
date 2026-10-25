# Claude Opus 4.7 — findings by GPT-5.6 Sol

- Source: Anthropic/Claude Opus 4.7
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's proprietary high-effort model for long-running software engineering, professional knowledge work, and high-resolution visual analysis.
- **Provider / access:** Claude API, Amazon Bedrock, Google Vertex AI, Microsoft Foundry, and OpenRouter. Anthropic's API ID is `claude-opus-4-7`.
- **Release / knowledge:** Released 2026-04-16; Artificial Analysis reports a January 2026 knowledge cutoff.
- **IDs:** `claude-opus-4-7`; `anthropic/claude-opus-4.7` on OpenRouter.
- **Context window:** 1,000,000 tokens with up to 128,000 output tokens in current provider catalogs.
- **Modalities:** Text and image input; text output; extended reasoning, tool use, prompt caching, and high-resolution image analysis.
- **Pricing (as of 2026-10-25):** $5 input / $25 output / $0.50 cached input per 1M tokens.
- **Architecture:** Proprietary; parameter count and topology are undisclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **41 estimated**, #54/215 in the displayed class; independent component evaluation was still forthcoming.
- Anthropic reports state-of-the-art GDPval-AA performance but does not expose the numeric result in accessible page text.
- An external research-agent evaluation reported **0.715 overall** and **0.813** on its General Finance module.

Reasoning / knowledge:

- BigLaw Bench: **90.9%** at high effort (Harvey early-access evaluation).
- No accessible exact-model GPQA Diamond or HLE number was found outside Anthropic's image-only chart.

Coding:

- CursorBench: **over 70%**, versus 58% for Opus 4.6 (Cursor early-access evaluation).
- A 93-task coding benchmark reported a **13% relative lift** over Opus 4.6; Rakuten reported **3x** as many production tasks resolved.
- SWE-bench Verified / SWE-Pro / Terminal-Bench: Anthropic documents these evaluations, but the exact values were embedded in an inaccessible chart and are not transcribed here.

Long context and multimodal:

- A research-agent evaluator reported the strongest long-context consistency in its tested group; no standardized MRCR value was exposed in accessible text.
- XBOW visual-acuity benchmark: **98.5%**, versus 54.5% for Opus 4.6. Images up to 2,576 pixels on the long edge are supported.

### Cross-source comparison

- Anthropic's launch page, API documentation, OpenRouter, models.dev, and Artificial Analysis agree on the exact identity, $5/$25 price, text-and-image interface, and million-token window.
- Artificial Analysis labels its Index 41 as estimated, so it is used as corroboration rather than an independently completed benchmark suite.
- Several numeric results are named-customer evaluations with private harnesses; they demonstrate capability but reduce comparability to public standardized leaderboards.

### Normalized scores (1–100)

- **Tool use: 91/100.** State-of-the-art GDPval-AA positioning and strong long-running agent evaluations support frontier tool use, capped by inaccessible standardized component values.
- **Reasoning: 90/100.** The estimated AA Index 41 and 90.9% BigLaw result support frontier reasoning, with a penalty for missing exact GPQA/HLE values.
- **Context window: 98/100.** The verified 1M-token window reaches the top tier, though no public 512K+ retrieval percentage was found.
- **Multimodal: 70/100.** High-resolution image input is unusually strong, but output remains text-only and native audio/video input was not verified.
- **Coding: 93/100.** CursorBench above 70% and consistent private-eval gains support frontier coding, capped by chart-only SWE-bench and Terminal-Bench values.
- **Cost efficiency: 48/100.** $5/$25 is expensive despite the 90% cache-read discount.
- **Overall Score: 88/100.** Half-up mean `(91 + 90 + 98 + 70 + 93) / 5 = 88.4`; best for difficult long-horizon coding and professional work where capability outweighs price.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: independent public internet research using three exact-name searches and direct checks of Anthropic, provider catalogs, and Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
