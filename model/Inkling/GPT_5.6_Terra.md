# Inkling — findings by GPT 5.6 Terra

- Source: Thinking Machines Lab/Inkling
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weights, general-purpose multimodal MoE model for agents, coding and RAG.
- **Provider / access:** Downloadable as `thinkingmachines/Inkling` from [Hugging Face](https://huggingface.co/thinkingmachines/Inkling); usable locally and via third-party providers.
- **Release / knowledge:** Evaluation comparison dated 2026-07-14; training cutoff is not stated.
- **IDs:** `thinkingmachines/Inkling`.
- **Context window:** no verified maximum context length found in the reviewed official card.
- **Modalities:** text, image and audio input; text output; the card describes video encoding and support for agent/tool-use systems.
- **Pricing (as of 2026-09-29):** Apache-2.0 open weights; self-hosting costs vary and third-party pricing was not used.
- **Architecture:** 66-layer decoder-only sparse MoE, 975B total / 41B active parameters; six of 256 routed experts plus two shared experts.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **74.1%** (Thinking Machines [official model card](https://huggingface.co/thinkingmachines/Inkling), effort 0.99).
- Terminal-Bench 2.1: **63.8** (official card, best harness).
- GDPVal-AA v2: **1233** (official card).

Reasoning / knowledge:

- HLE (text only): **29.7%**; HLE with tools: **46.0%** (official card).
- AIME 2026: **97.1%** (official card).
- GPQA Diamond: **87.2%** (official card).

Coding:

- SWE-bench Verified: **77.6%** (official card; bash-only harness noted by the publisher).
- SWE-bench Pro (public): **54.3%** (official card).

Long context:

- No verified public long-context retrieval score or maximum window found in the reviewed official card.

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas 74.1%, Terminal-Bench 63.8 and GDPVal-AA 1233 show capable agents, but not frontier-leading tool reliability.
- **Reasoning: 88/100.** AIME 2026 97.1% and GPQA 87.2% are strong; HLE 29.7% text-only is a material cap.
- **Context window: 55/100.** The official card did not disclose a verified maximum or retrieval-at-length measurement.
- **Multimodal: 87/100.** Native text/image/audio inputs, video encoding, and MMMU-Pro 73.5% give broad verified coverage; output is text-only.
- **Coding: 87/100.** SWE-bench Verified 77.6% is strong, while public SWE-bench Pro 54.3% limits the score.
- **Cost efficiency: 80/100.** Apache-2.0 weights are valuable, but the 975B-total model has a substantial serving footprint.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions; a strong open multimodal option when its unknown context limit is acceptable.

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
