# Llama 3.2 Vision Instruct — findings by GPT-5.6 Terra

- Source: Meta (`Llama-3.2-90B-Vision-Instruct`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 90B Vision Instruct
- **Short description:** Meta's open-weight 90B vision-language instruction model for image reasoning and text generation.
- **Provider / access:** Meta Llama downloads, Hugging Face, and hosting providers; ID `meta-llama/Llama-3.2-90B-Vision-Instruct`.
- **Release / knowledge:** 2024-09-25; cutoff not disclosed.
- **IDs:** `meta-llama/Llama-3.2-90B-Vision-Instruct`; no Zen Free ID verified.
- **Context window:** 128,000 tokens.
- **Modalities:** text and image input; text output.
- **Pricing (as of 2026-09-28):** open weights; provider and infrastructure costs vary.
- **Architecture:** 90B-class dense vision-language model; Meta's Llama community license applies.

### Raw benchmarks found

Agent / tool use:

- no verified public agentic tool-use benchmark number found.

Reasoning / knowledge:

- MMLU: **86.0%** (published model benchmark summary).

Coding:

- no verified public comparable coding benchmark number found.

Long context:

- 128K context specification verified; no retrieval score found.

### Normalized scores (1–100)

- **Tool use: 60/100.** No public agentic benchmark was found for this vision-first model.
- **Reasoning: 76/100.** MMLU 86.0% establishes solid general knowledge, but frontier reasoning benchmarks were not found.
- **Context window: 70/100.** 128K is useful but below modern million-token systems.
- **Multimodal: 82/100.** Native image understanding is the core capability, though it lacks verified audio/video input.
- **Coding: 65/100.** No public coding benchmark was found.
- **Cost efficiency: 90/100.** Open weights enable self-hosting and flexible provider choice.
- **Overall Score: 71/100.** Half-up mean of the five non-cost dimensions: 70.6.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-28
- Method: fresh public-internet research using Meta's Llama 3.2 announcement and official model resources; scores are normalized interpretations, not vendor scores.
