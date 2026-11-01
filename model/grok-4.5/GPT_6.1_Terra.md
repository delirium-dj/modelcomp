# Grok 4.5 — findings by GPT-6.1 Terra

- Source: xAI `grok-4.5`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's coding and agentic-work model; separate from later Grok 4.6 and 4.7.
- **Provider / access:** xAI Responses API `grok-4.5`; vendor lists `grok-4.5-latest` and `grok-build-latest` aliases.
- **Release / knowledge:** xAI announced 2026-07-16; knowledge cutoff not verified. A Vals historical update predates that announcement, so the vendor date is used.
- **IDs:** `grok-4.5`.
- **Context window:** xAI documents 500,000 tokens; Vals lists up to 500K output, subject to total context.
- **Modalities:** Text and image input, text output; reasoning, function calling and structured output supported.
- **Pricing (2026-11-01):** xAI $2 input / $6 output / $0.30 cached per million below 200K prompt tokens; $4/$12/$0.60 at or above 200K.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- xAI reports Terminal-Bench 2.1 **83.3%**; Vals Terminal-Bench 4.0 **8.59% ± 1.34** is a different version and harness.
- Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals GPQA Diamond **92.93% ± 1.29**, ProofBench v1.1 **31.00% ± 4.65**.
- HLE: no verified public score found.

Coding:

- xAI reports DeepSWE v1.1 **53%** using mini-SWE-agent and SWE-bench Pro **64.7%**; Vals Vibe Code Bench v1.1 **69.00% ± 4.48** and LiveCodeBench **87.35% ± 0.96**.

Long context:

- xAI documents 500K context; no verified long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 81/100.** xAI TB 2.1 is strong, but Vals TB 4.0 is lower and not directly comparable.
- **Reasoning: 86/100.** Strong GPQA is moderated by lower ProofBench and missing HLE.
- **Context window: 85/100.** Vendor lists 500K; no verified full-window retrieval score.
- **Multimodal: 65/100.** Text and image input, text output; audio and video input are not documented.
- **Coding: 86/100.** SWE-bench Pro and LiveCodeBench support strong coding; Vals Vibe Code and TB 4.0 cap comparison.
- **Cost efficiency: 75/100.** Paid $2/$6 per million below 200K, doubled at the long-input threshold.
- **Overall Score: 81/100.** Half-up mean of five quality dimensions; useful for code-focused visual agents.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: xAI specifications and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [xAI model documentation](https://docs.x.ai/developers/models/grok-4.5)
  - [xAI announcement and benchmarks](https://x.ai/news/grok-4-5)
  - [Vals evaluation](https://www.vals.ai/models/grok_grok-4.5)
- Future sources: add a separate signed findings file alongside this one.
