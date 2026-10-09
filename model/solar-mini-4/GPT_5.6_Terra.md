# Solar Mini 4 — findings by GPT-5.6 Terra

- Source: Upstage/Solar Mini 4
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's agent-optimized, high-throughput MoE.
- **Provider / access:** Upstage API, Solar Chat and OpenRouter.
- **Release / knowledge:** 2026-10-01; cutoff not stated.
- **IDs:** `solar-mini4`.
- **Context window:** 512K input / 128K output.
- **Modalities:** text input/output; parallel tool calling.
- **Pricing (as of 2026-10-09):** $0.10 input / $0.01 cached input / $0.40 output per million tokens.
- **Architecture:** 35B total / 3B active MoE.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **22.3%**; τ³-Banking: **47.2** (Upstage launch post).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **24.1**; HLE: **25.8%** (Upstage launch post).

Coding:

- SciCode: **47.6%** (Upstage launch post).

Long context:

- AA-LCR: **83.3%** (Upstage launch post).

### Normalized scores (1–100)

- **Tool use: 62/100.** τ³-Banking 47.2 is useful direct evidence; AutomationBench 22.3 constrains it.
- **Reasoning: 65/100.** AA Index 24.1 and HLE 25.8 place it below frontier reasoning models.
- **Context window: 95/100.** 512K context plus AA-LCR 83.3 is strong direct evidence.
- **Multimodal: 15/100.** Only text capability was verified.
- **Coding: 70/100.** SciCode 47.6 is solid for 3B active parameters.
- **Cost efficiency: 97/100.** Low list pricing and small active compute are excellent.
- **Overall Score: 61/100.** Half-up mean of the five quality dimensions.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized interpretations, not vendor scores.
