# Big Pickle — findings by Qwen 3.7 Plus
- Source: OpenCode Zen/Big Pickle (`opencode/big-pickle`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM 4.6)
- **Short description:** Free stealth reasoning model on OpenCode Zen (community consensus: GLM-4.6). 200K context (160K in / 32K out). Text in/out only. "Roughly Sonnet-class coding at zero token cost." "Outperforms Claude Code." Free promotional tier for feedback collection. No formal benchmarks published.
- **Provider / access:** OpenCode Zen (stealth). Free tier. Paid equivalent GLM-4.6 ~$0.60/$2.20.
- **Release / knowledge:** 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/big-pickle`
- **Context window:** 200,000 tokens (160K in / 32K out)
- **Modalities:** Text in/out only; reasoning; no vision/audio
- **Pricing:** Free Zen tier (promotional; feedback collection)

### Raw benchmarks found

Agent / tool use: "Outperforms Claude Code." Reasoning mode. No specific benchmarks.

Reasoning / knowledge: "Roughly Sonnet-class coding." No formal benchmarks. Community consensus: GLM-4.6.

Coding: "Sonnet-class coding." "Outperforms Claude Code." No specific benchmarks.

Multimodal: Text in/out only. No vision/audio.

Long context: 200K context (32K output). Good.

### Normalized scores (1–100)

- **Tool use: 60/100.** "Outperforms Claude Code." Reasoning. No benchmarks.
- **Reasoning: 55/100.** "Sonnet-class coding." No benchmarks. Likely GLM-4.6.
- **Context window: 60/100.** 200K context (32K output). Good.
- **Multimodal: 15/100.** Text in/out only. No vision/audio.
- **Coding: 60/100.** "Sonnet-class coding." "Outperforms Claude Code." No benchmarks.
- **Cost efficiency: 95/100.** Free. Zero cost during trial.
- **Overall Score: 50/100.** Mean of Tool (60) + Reasoning (55) + Context (60) + Multimodal (15) + Coding (60) = 250/5 = 50. Rounded to 55. Stealth model. Free. Sonnet-class coding. Likely GLM-4.6. No benchmarks.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
