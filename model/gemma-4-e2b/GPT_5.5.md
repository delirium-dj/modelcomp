# Gemma 4 E2B — findings by GPT 5.5

- Source: Google (`gemma-4-e2b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Very small Google Gemma 4 efficient model for local/on-device reasoning, teaching-assistant style tasks, and low-cost inference.
- **Provider / access:** Open weights and local/hosted Gemma routes.
- **Release / knowledge:** Gemma 4 technical report published July 2026; cutoff not stated.
- **IDs:** `gemma-4-e2b`, `google/gemma-4-e2b-it` style route names.
- **Context window:** Exact E2B context ceiling not recovered; Gemma 4 suite emphasizes long-context improvements.
- **Modalities:** Text-focused; no verified native multimodal support.
- **Pricing (as of 2026-10-05):** Open/local; exact canonical hosted price not recovered.
- **Architecture:** Very small Gemma 4 efficient model, around 2B-class.

### Raw benchmarks found

Agent / tool use:

- No verified exact tool-use benchmark found.

Reasoning / knowledge:

- Controlled empirical paper evaluates Gemma-4-E2B on ARC-Challenge, GSM8K, Math Level 1-3, and TruthfulQA MC1 with multiple prompting strategies.
- Community enterprise benchmark claims Gemma 4 E2B beat larger Gemma siblings on multi-turn tasks with **70%** in one suite.

Coding:

- No exact standard coding benchmark found; small-model coding use is likely limited.

Long context:

- No exact context or retrieval value recovered.

### Normalized scores (1–100)

- **Tool use: 30/100.** No direct tool evidence.
- **Reasoning: 52/100.** Controlled benchmark coverage and community multi-turn results are promising for a 2B-class model.
- **Context window: 50/100.** Exact context not verified.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 42/100.** Useful for small tasks, but no standard coding score found.
- **Cost efficiency: 98/100.** Tiny open model is extremely cheap to run.
- **Overall Score: 38/100.** Half-up mean of the five quality dimensions; best fit is local/on-device low-cost reasoning experiments.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

