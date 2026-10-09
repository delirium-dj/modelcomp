# Solar Mini 4 — findings by LongCat 2.5 Preview

- Source: Upstage AI/Solar Mini 4
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's cost-efficient compact MoE model (35B total / 3B active) built for high-volume agentic workloads where response speed and cost matter. Fluent Korean with strong English and Japanese. New Pareto optimal point for Intelligence Index vs active parameters.
- **Provider / access:** Upstage Console (`solar-mini-4`, `solar-mini4-260922`), OpenRouter, AWS Marketplace, Azure Marketplace, Snowflake Marketplace. On-premises available.
- **Release / knowledge:** 2026-09-22/23; training data cutoff February 2026.
- **IDs:** `upstage/solar-mini-4` (also `solar-mini4-260922`)
- **Context window:** 512K–524K tokens (verified via Upstage, OpenRouter, LLMBase); up to 128K output tokens.
- **Modalities:** Text input; Text output. Reasoning: yes. Tool calling: yes (tool calling, structured outputs).
- **Pricing (as of 2026-10-09):** $0.05/1M input, $0.20/1M output, $0.005/1M cache read (50% off promo through Oct 22). Regular: $0.10/$0.40. Proprietary license.
- **Architecture:** 35B total / 3B active MoE. Knowledge cutoff February 2026. Languages: English, Korean, Japanese.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **1%** (Artificial Analysis — weakness)
- AutomationBench-AA: **22%** (Artificial Analysis — weakness)
- Tool calling: supported (Upstage, Zeplik)
- Structured outputs: supported (Upstage, Zeplik)

Reasoning / knowledge:

- Intelligence Index: **24** (Artificial Analysis)
- AA-LCR v1.1: **83%** (Artificial Analysis — matching MiniMax-M3, GPT-6 Luna max)
- AA-Omniscience: **-11** (18% accuracy, 64% non-hallucination rate)
- GDPval-AA: **1072 Elo** (Artificial Analysis)
- AA-Briefcase: **872 Elo** (Artificial Analysis)

Coding:

- SciCode: **48%** (Artificial Analysis — ahead of MiniMax-M3 and Inkling at 47%)
- Terminal-Bench 4.0: **1%** (weakness)

Long context:

- Context window: **512K–524K tokens** (verified via Upstage, OpenRouter, LLMBase)
- AA-LCR v1.1: **83%** (strong long-context reasoning)

Multimodal:

- Text input only (Upstage, Zeplik, ModelBeat)
- No image, audio, or video input

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool calling + structured outputs. Terminal-Bench 4.0 1%, AutomationBench 22%. Weak agentic capability, below average on complex agent tasks.
- **Reasoning: 65/100.** Intelligence Index 24, AA-LCR 83%. Moderate reasoning with strong long-context capability, but below average general intelligence.
- **Context window: 88/100.** 512K-524K token context. Very good long-context capability for a compact model.
- **Multimodal: 15/100.** Text-only input/output. No image, audio, or video support.
- **Coding: 58/100.** SciCode 48%, Terminal-Bench 4.0 1%. Weak agentic coding, moderate scientific coding.
- **Cost efficiency: 92/100.** $0.05/$0.20 per 1M tokens (promo) — extremely affordable. 204-208 tok/s output speed. Exceptional value for high-volume workloads.
- **Overall Score: 56/100.** Mean of Tool (55), Reasoning (65), Context (88), Multimodal (15), Coding (58) = 281/5 = 56.2 → 56. Excellent cost-efficient compact model for high-volume agentic workloads, but weak on agentic coding and text-only.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
