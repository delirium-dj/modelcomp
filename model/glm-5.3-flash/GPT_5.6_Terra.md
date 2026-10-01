# GLM 5.3 Flash — findings by GPT 5.6 Terra

- Source: Z.AI / GLM-5.3-Flash
- Date: 2026-10-01 (UTC; refreshed against current primary model cards)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's low-latency, open-weight MoE for agentic coding and frequent tool calls.
- **Provider / access:** Z.AI-compatible and hosted OpenAI-compatible APIs; `zai-org/GLM-5.3-Flash` weights.
- **Release / knowledge:** 2026-08-25 model-card release; cutoff not specified.
- **IDs:** `opencode/glm-5.3-flash`.
- **Context window:** up to 1,048,576 tokens.
- **Modalities:** Text and image input; text output; reasoning and tool-oriented use.
- **Pricing (as of 2026-09-21):** approximately $0.15 input / $0.50 output per 1M on reported hosted pricing; promotional free access may vary.
- **Architecture:** MIT-licensed 320B-total / 18B-active MoE with hybrid sparse-plus-linear attention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.AI model-card figure, cross-reported by CanItRun).
- AutomationBench: **48.8%** (Z.AI model-card figure, reported by Lambda).

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Artificial Analysis measurement, reported by CanItRun).
- HLE: no verified public score found.

Coding:

- DeepSWE v1.1: **63.4%** (Z.AI model-card figure, reported by Lambda).
- SWE-bench Verified / SWE-Pro: no verified public score found.

Long context:

- 204K advertised context; no public MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 91/100.** 84.3% Terminal-Bench 2.1 and 48.8% AutomationBench show strong agent execution; third-party harness coverage is limited.
- **Reasoning: 90/100.** The 91.2% GPQA Diamond measurement is excellent; no broad reasoning index was found.
- **Context window: 95/100.** The corrected 1M context is frontier-scale, capped by no published retrieval-at-length measurement.
- **Multimodal: 80/100.** Native image input is documented; no verified audio output coverage was found.
- **Coding: 90/100.** 63.4% DeepSWE v1.1 is strong, capped by missing SWE-bench/LiveCodeBench results.
- **Cost efficiency: 94/100.** Reported $0.15/$0.50 hosted pricing and open weights are exceptional value.
- **Overall Score: 89/100.** Half-up mean of Tool, Reasoning, Context, Multimodal and Coding = 89.2; recommended for low-cost multimodal coding agents.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-01
- Method: Public internet research using the Z.AI model-card reporting and independent hosting/benchmark reports; scores are normalized interpretations, not official vendor scores.
