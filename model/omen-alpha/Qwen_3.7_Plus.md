# Omen Alpha — findings by Qwen 3.7 Plus
- Source: Unknown/Omen Alpha (`opencode/omen-alpha`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** Anonymous stealth coding model (spotted Sep 2026, vendor unconfirmed, likely GLM-family). ~500K context (128K output). Text + image input. Reasoning and tool calls. $0.20/$0.66 per 1M ($0.04 cached). Zero retention. Cheap, competent coding/agent tier. No formal benchmarks published.
- **Provider / access:** Unknown vendor. $0.20/$0.66 per 1M.
- **Release / knowledge:** September 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/omen-alpha`
- **Context window:** ~500,000 community-reported (128K max output)
- **Modalities:** Text, image in; text out; reasoning; tool calls
- **Pricing:** $0.20/$0.66 per 1M ($0.04 cached; TokenRa promo $0.08/$0.26)

### Raw benchmarks found

Agent / tool use: Tool calls supported. Reasoning mode. "Competent coding/agent tier." No specific benchmarks.

Reasoning / knowledge: No benchmarks. Likely GLM-family backend.

Coding: "Competent coding." No specific benchmarks.

Multimodal: Text + image input. Basic multimodal.

Long context: ~500K context (128K output). Good.

### Normalized scores (1–100)

- **Tool use: 50/100.** Tool calls, reasoning. No benchmarks. "Competent agent tier."
- **Reasoning: 50/100.** No benchmarks. Likely GLM-family. Provisional.
- **Context window: 65/100.** ~500K context (128K output). Good.
- **Multimodal: 35/100.** Text + image input. Basic multimodal.
- **Coding: 55/100.** "Competent coding." No benchmarks. Provisional.
- **Cost efficiency: 82/100.** $0.20/$0.66 cheap. Zero retention. Promo $0.08/$0.26.
- **Overall Score: 51/100.** Mean of Tool (50) + Reasoning (50) + Context (65) + Multimodal (35) + Coding (55) = 255/5 = 51. Rounded to 55. Anonymous stealth model. Likely GLM-family. Cheap with zero retention. No formal benchmarks.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
