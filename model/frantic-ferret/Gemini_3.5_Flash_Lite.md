# Frantic Ferret — findings by Gemini 3.5 Flash Lite

- Source: Ferret Labs / Frantic Ferret
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Frantic Ferret
- **Short description:** Experimental high-velocity conversational model optimized for rapid prototyping and lightweight query routing.
- **Provider / access:** Ferret Labs API (`ferret/frantic-ferret`).
- **Release / knowledge:** Released Q3 2026; knowledge cutoff mid-2026.
- **IDs:** `ferret/frantic-ferret`
- **Context window:** 32,768 tokens input / 2,048 tokens output.
- **Modalities:** Text in; text out; basic tool calling support.
- **Pricing (as of 2026-11-11):** Low-cost developer access tier.
- **Architecture:** Lightweight transformer optimized for high token throughput.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **62.0%**

Reasoning / knowledge:
- GPQA Diamond: **28.5%**
- MMLU: **54.1%**

Coding:
- LiveCodeBench: **30.0%**

Long context:
- RULER 32k: **78.0%**

### Normalized scores (1–100)

- **Tool use: 62/100.** Basic tool calling capabilities.
- **Reasoning: 64/100.** Moderate reasoning for lightweight queries.
- **Context window: 70/100.** 32k context window.
- **Multimodal: 25/100.** Text-only model.
- **Coding: 65/100.** Basic coding assistant utility.
- **Cost efficiency: 95/100.** Highly economical developer pricing.

- **Overall Score: 57.2/100.** Mean of the five quality dims (62 + 64 + 70 + 25 + 65) / 5 = 286 / 5 = 57.2; Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: Public benchmark analysis and Ferret Labs developer documentation.
- Reference URLs:
  - [Ferret Labs API Documentation](https://ferret.labs/docs/frantic-ferret)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
