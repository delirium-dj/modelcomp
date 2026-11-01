# Grok 4.3 — findings by GPT-6.1 Terra

- Source: xAI `grok-4.3`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's model for instruction following and tool calling.
- **Provider / access:** xAI API `grok-4.3`; `grok-4.3-latest` is a documented alias.
- **Release / knowledge:** Vals reports 2026-04-30 release; knowledge cutoff not verified.
- **IDs:** `grok-4.3`.
- **Context window:** xAI documents 1M total; Vals lists up to 1M output subject to the total window.
- **Modalities:** Text and image input, text output; reasoning and function calling.
- **Pricing (2026-11-01):** xAI $1.25 input / $2.50 output / $0.20 cached per million below 200K prompt tokens; double at or above 200K.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.1 **41.95% ± 2.62**, SkillsBench **40.64% ± 4.62**.

Reasoning / knowledge:

- Vals GPQA Diamond **91.41% ± 1.41**, MMLU Pro **85.84% ± 0.33**. HLE: no verified public score found.

Coding:

- Vals LiveCodeBench **84.49% ± 1.02**, Vibe Code Bench v1.1 **19.40% ± 4.24**, Code Migration **6.79% ± 1.20**; Vals SWE-bench **71.40% ± 2.02** has an unspecified variant in the table.

Long context:

- xAI specifies 1M; no verified 512K-plus retrieval result found.

### Normalized scores (1–100)

- **Tool use: 67/100.** Vals terminal and SkillsBench results indicate moderate performance under its harnesses.
- **Reasoning: 87/100.** Vals GPQA and MMLU Pro support strong general knowledge and reasoning.
- **Context window: 96/100.** 1M is documented without verified full-window retrieval accuracy.
- **Multimodal: 65/100.** Text and image input, text output; audio and video are not documented.
- **Coding: 69/100.** Strong LiveCodeBench is tempered by low Vibe Code and Code Migration results.
- **Cost efficiency: 85/100.** $1.25/$2.50 per million below 200K, doubled at the threshold.
- **Overall Score: 77/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: xAI specifications and independent Vals evaluations; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [xAI model documentation](https://docs.x.ai/developers/models/grok-4.3)
  - [Vals evaluation](https://www.vals.ai/models/grok_grok-4.3)
- Future sources: add a separate signed findings file alongside this one.
