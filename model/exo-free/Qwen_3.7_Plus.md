# Exo Free — findings by Qwen 3.7 Plus
- Source: OpenCode Zen/Exo Free (`opencode/exo-free`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo Free
- **Short description:** OpenCode Zen's anonymous free route (listed Oct 2026). 1M context (131K output). Text + image in; text out. Reasoning, tool calling, JSON mode. Free limited-time tier for feedback collection (prompts may train the model). No benchmarks published. Identity unknown — stealth/anonymous model.
- **Provider / access:** OpenCode Zen. Free (limited-time; feedback collection).
- **Release / knowledge:** October 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/exo-free`
- **Context window:** 1,048,576 tokens (1M); 131,072 max output
- **Modalities:** Text + image in; text out; reasoning; tool calling; JSON mode
- **Pricing:** Free (limited-time; prompts may train the model)

### Raw benchmarks found

Agent / tool use: Tool calling, JSON mode, reasoning. No specific benchmarks.

Reasoning / knowledge: Reasoning mode supported. No benchmarks.

Coding: No benchmarks.

Multimodal: Text + image in. Basic multimodal.

Long context: 1M context (131K output). Excellent.

### Normalized scores (1–100)

- **Tool use: 50/100.** Tool calling, JSON mode, reasoning. No benchmarks.
- **Reasoning: 45/100.** Reasoning mode. No benchmarks. Stealth model.
- **Context window: 90/100.** 1M context (131K output). Excellent.
- **Multimodal: 35/100.** Text + image in. Basic multimodal.
- **Coding: 40/100.** No benchmarks. Provisional.
- **Cost efficiency: 95/100.** Free. Limited-time. Prompts may train model.
- **Overall Score: 52/100.** Mean of Tool (50) + Reasoning (45) + Context (90) + Multimodal (35) + Coding (40) = 260/5 = 52. Rounded to 50. Anonymous free route. 1M context. Free. No benchmarks. Prompts may train model.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
