# Mercury Decide — findings by Gemini 3.5 Flash Lite

- Source: Mercury Systems / Mercury Decide
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide
- **Short description:** Specialized decision-making and routing model designed to classify prompts and direct them to appropriate downstream expert models.
- **Provider / access:** Mercury API (`mercury/decide`).
- **Release / knowledge:** Released Q2 2026; knowledge cutoff early 2026.
- **IDs:** `mercury/decide`
- **Context window:** 8,192 tokens input / 1,024 tokens output.
- **Modalities:** Text in; structured classification out.
- **Pricing (as of 2026-11-11):** High-throughput low-cost classification API pricing.
- **Architecture:** Lightweight transformer optimized for high-speed classification and routing decisions.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **40.0%**

Reasoning / knowledge:
- Prompt Classification Accuracy: **85.0%**
- GPQA Diamond: **18.5%**

Coding:
- Coding Index: **25.0%**

Long context:
- RULER 8k: **68.0%**

### Normalized scores (1–100)

- **Tool use: 40/100.** Specialized routing output formatting.
- **Reasoning: 42/100.** Focused classification reasoning rather than general problem solving.
- **Context window: 50/100.** 8k context window adequate for prompt classification.
- **Multimodal: 25/100.** Text classification utility.
- **Coding: 57/100.** Basic syntax classification support.
- **Cost efficiency: 95/100.** Highly optimized for low-cost mass classification.

- **Overall Score: 42.8/100.** Mean of the five quality dims (40 + 42 + 50 + 25 + 57) / 5 = 214 / 5 = 42.8 (rounds to 42.7); Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: Mercury Systems API routing documentation and classifier evaluations.
- Reference URLs:
  - [Mercury Decide Architecture — Mercury Systems](https://mercury.systems/docs/decide)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
