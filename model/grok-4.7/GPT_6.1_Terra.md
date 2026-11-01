# Grok 4.7 — findings by GPT-6.1 Terra

- Source: xAI `grok-4.7`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's proprietary model for coding and knowledge work, based on a larger base than Grok 4.6.
- **Provider / access:** xAI API `grok-4.7`; fast serving is a speed profile, not assumed a separate checkpoint.
- **Release / knowledge:** Released 2026-09-21; knowledge cutoff not verified.
- **IDs:** `grok-4.7`.
- **Context window:** xAI lists 500,000 tokens; Vals lists maximum output up to 500K, subject to the total window.
- **Modalities:** Text and image input, text output; function calling, structured outputs and reasoning supported.
- **Pricing (2026-11-01):** xAI $2 input / $6 output / $0.50 cached per million below 200K prompt tokens; $4/$12/$1 at or above 200K.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals reports Terminal-Bench 2.1 **73.41%** at xhigh; TB 4.0 **28.79% ± 2.31** in its current table. xAI reports TB 4.0 **37.6%** at xhigh under its own evaluation.
- Tau3-Banking and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals Index **58.56% ± 1.01**, ProofBench v1.1 **26.00% ± 4.41**. xAI reports GDPval **1695 Elo** at xhigh, not GDPval-AA percentage.
- GPQA Diamond and HLE: no verified public score found in reviewed sources.

Coding:

- xAI reports DeepSWE v1.1 **71.0%** at high effort and CursorBench 4.0 **46.3%** at xhigh; Vals Vibe Code Bench v1.1 **86.17% ± 2.18**, Code Migration v1.1 **53.22% ± 2.56**.

Long context:

- xAI lists 500K context; no verified retrieval score at that length found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Vals TB 2.1 and TB 4.0 support agent capability; vendor and independent harnesses differ.
- **Reasoning: 82/100.** Vals Index and GDPval support broad work, moderated by ProofBench and missing GPQA/HLE.
- **Context window: 85/100.** xAI specifies 500K, without verified full-window retrieval accuracy.
- **Multimodal: 65/100.** Text and image input, text output; no audio or video documented.
- **Coding: 90/100.** Vendor DeepSWE and independent Vibe Code are strong, with effort settings distinguished.
- **Cost efficiency: 75/100.** $2/$6 per million below 200K, doubled at or above the threshold.
- **Overall Score: 81/100.** Half-up mean of five quality dimensions; suited to image-aware coding and knowledge work.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: xAI documentation and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [xAI model documentation](https://docs.x.ai/developers/models/grok-4.7)
  - [xAI launch and benchmarks](https://x.ai/news/grok-4-7)
  - [Vals evaluation](https://www.vals.ai/models/grok_grok-4.7)
- Future sources: add a separate signed findings file alongside this one.
