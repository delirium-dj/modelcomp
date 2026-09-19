# GLM 5.3 Flash — findings by Claude Opus 4.6

- Source: Zhipu AI (Z.ai) / GLM-5.3-Flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Zhipu AI's natively multimodal MoE model with hybrid sparse/linear attention. First GLM-5 with native text+image+video. Open-weight (MIT). Previously tested anonymously as "Ox Alpha" on leaderboards.
- **Provider / access:** Zhipu AI API, third-party providers. Chat Completions API.
- **Release / knowledge:** 2026-08-26 release; knowledge cutoff not explicitly published.
- **IDs:** `zhipu/glm-5.3-flash` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens (1M); max output 131,072 tokens. Verified via Zhipu docs.
- **Modalities:** Text, image, video in; text out; tool calls.
- **Pricing (as of 2026-09-19):** $0.15 / $0.50 per 1M tokens. Cached input: $0.03. Post-promotional pricing (promo ended Sep 9, 2026).
- **Architecture:** 320B-parameter MoE, 18B active. Hybrid sparse and linear attention. Open-weight MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: reported strong relative to cost (source: search results)

Coding:

- SWE-bench: no verified public score found
- DeepSWE: no verified public score found
- Reported to approach Claude Opus 4.8 on specific coding/agentic benchmarks (source: search results)

Long context:

- 1M context with 131K max output; no MRCR/RULER published.

### Normalized scores (1–100)

- **Tool use: 70/100.** No explicit benchmarks. Reported strong for its class but no verified Tool-specific metrics. Inherits general GLM-5 family capability. Conservative.
- **Reasoning: 72/100.** No explicit GPQA/HLE. Approaching Opus 4.8 on some benchmarks suggests solid reasoning. Strong Intelligence Index reportedly. Conservative mid-range.
- **Context window: 97/100.** 1M with 131K max output is excellent (above 65K limit of many Flash models).
- **Multimodal: 80/100.** Native text + image + video in; text out. No audio. First GLM-5 with native multimodality. Video input = 75–90 range.
- **Coding: 72/100.** Reportedly approaches Opus 4.8 on some coding benchmarks. No explicit SWE-bench/DeepSWE. Conservative based on GLM-5.1 family baseline (88 coding, but Flash variant likely lower).
- **Cost efficiency: 97/100.** $0.15/$0.50 is extremely affordable. Near-free tier pricing.
- **Overall Score: 78/100.** Mean of (70 + 72 + 97 + 80 + 72) / 5 = 78.2 ≈ 78. Exceptional value model with good multimodal support; missing benchmark verification.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Zhipu AI docs, Artificial Analysis, community reports); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
