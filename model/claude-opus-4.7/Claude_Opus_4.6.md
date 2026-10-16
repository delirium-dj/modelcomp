# Claude Opus 4.7 — findings by Claude Opus 4.6

- Source: Anthropic / Claude Opus 4.7
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's current flagship (Apr 2026). Hybrid reasoning with new `xhigh` effort tier. 1M context flat-rate. 3.75 megapixel vision (3x prior). SWE-bench Verified 87.6%, SWE-bench Pro 64.3%, CursorBench 70.0%. Self-verification behavior. Adaptive compute allocation.
- **Provider / access:** Anthropic API, Claude.ai, AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. iOS/Android/desktop.
- **Release / knowledge:** 2026-04-16 release.
- **IDs:** `anthropic/claude-opus-4-7`
- **Context window:** 1,000,000 tokens (1M); 128,000 max output. Flat-rate pricing (no long-context penalty).
- **Modalities:** Text, image (3.75MP) in; text out; tool calling; structured JSON. `xhigh` effort tier. Adaptive reasoning. Self-verification.
- **Pricing (as of 2026-10-16):** $5.00 / $25.00 per 1M tokens (input/output). Flat 1M context.
- **Architecture:** Proprietary; Anthropic flagship. Revised tokenizer (~30% higher token density). Adaptive compute allocation. `xhigh` reasoning effort.

### Raw benchmarks found

- SWE-bench Pro: **64.3%** (beats GPT-5.4 57.7%, Gemini 3.1 Pro 54.2%) (source: thenextweb.com)
- SWE-bench Verified: **87.6%** (up from Opus 4.6's 80.8%) (source: thenextweb.com)
- CursorBench: **70.0%** (+12 points over Opus 4.6) (source: labellerr.com)
- MathVista: **+9.5 point jump** over 4.6 (source: mindstudio.ai)
- FinanceBench: **82.7%** (source: anthropic.com)

### Normalized scores (1–100)

- **Tool use: 90/100.** Self-verification + adaptive reasoning. `xhigh` effort tier. CursorBench 70.0%. Autonomous code validation. Leading agentic model.
- **Reasoning: 90/100.** SWE-bench Pro 64.3% #1 among flagships. FinanceBench 82.7%. Adaptive compute allocation. MathVista +9.5 point leap.
- **Context window: 92/100.** 1M flat-rate (ref: 1M = 90-95). 128K output. No long-context penalty.
- **Multimodal: 68/100.** Text + image (3.75MP) in; text out. High-res vision (3x upgrade). No audio/video input. Image-only = 60-70.
- **Coding: 92/100.** SWE-bench Verified 87.6%, Pro 64.3% both SOTA. CursorBench 70.0%. Self-verification. Leading coding model.
- **Cost efficiency: 68/100.** $5/$25 is premium pricing. Justified by SOTA performance. Not for budget workloads.
- **Overall Score: 86/100.** Mean of (90 + 90 + 92 + 68 + 92) / 5 = 86.4, rounded to 86. SOTA flagship with leading coding benchmarks, self-verification, and 1M flat-rate context; limited only by image-only multimodal.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-16
- Method: Public internet research (anthropic.com, thenextweb.com, labellerr.com, caylent.com, mindstudio.ai, aimlapi.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
