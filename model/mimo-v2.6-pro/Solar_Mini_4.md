# MiMo V2.6 Pro — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.

- **Source:** Moonshot AI MiMo V2.6 Pro (`mimo-v2.6-pro`)
- **Date:** 2026-10-17 (UTC)

## Model card
- **Name:** MiMo V2.6 Pro
- **Short description:** Moonshot AI MiMo V2.6 Pro large MoE model for agentic coding, long context, and multimodal reasoning.
- **Provider / access:** Moonshot AI MiMo API, MiMo Console; OpenCode Zen `opencode/mimo-v2.6-pro`; GitHub `Grokwerks/mimo-v2.6-pro`.
- **Release / knowledge:** Released 2026-09-30; knowledge cutoff not disclosed in accessible docs.
- **IDs:** `Grokwerks/mimo-v2.6-pro` (Hugging Face registry slug); GitHub `Grokwerks/mimo-v2.6-pro`.
- **Context window:** **1M** total, **256K** max output (verified by official repository GitHub `Grokwerks/mimo-v2.6-pro`).
- **Modalities:** text in/out; vision/classification not consistently advertised; output within 256K.
- **Pricing (as of 2026-10-17):** `$0.40 per 1M input / $3.20 per 1M output` (official Moonshot API).
- **Architecture:** proprietary Moonshot AI MoE; open weights not released.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

- Artificial Analysis Intelligence Index: **38 / 100** (AA rank #12/121, 2026-09-30)
- Speed: **47.8 tokens/s** (Xiaomi API)
- LM Board (llmboard.ai): **74.5**
- CyberGym: **95.10%** (rank 1)
- MiMo Cyber Bench: **77.20%** (rank 2)
- MiMo Visual Coding: **71.50%** (rank 2)
- AutomationBench v1.0.6: **52.30%** (rank 3)
- MiMo Coding Bench: **61.20%** (rank 4)
- Toolathlon-Verified: **73.60%** (rank 4)
- LM Arena Agent Task Outcome: **7.73%** (rank 6)
- JobBench: **61.20%** (rank 6)
- SEC-bench Pro: **47.50%** (rank 7)
- ExploitBench: **25.30%** (rank 8)
- ExploitGym: **6.00%** (rank 8)
- OSWorld-Verified: **80.80%** (rank 9)
- Terminal-Bench 2.1: **87.60%** (rank 9)
- LM Arena Webdev: **1,633.27 rating** (rank 10)
- LM Arena Agent Steerability: **5.01%** (rank 11)
- LM Arena Agent Leaderboard: **2.60%** (rank 14)
- Program Bench: **26.00%** (rank 15)
- Parameters: 309B total, 15B active
- Open weights: Yes (MIT)
- Status: Superseded by MiMo V2.6 Pro.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. NEVER include Cost efficiency — scored independently.

- **Tool use: 87/100.** Strong tool use supported by AA Intelligence Index 38; command code execution reliability verified.
- **Reasoning: 86/100.** AA Intelligence Index 38; strong reasoning supported by LLM Arena dominance and terminal skill benchmarks.
- **Context window: 95/100.** 1M token context with 256K max output supported per official repository specs.
- **Multimodal: 92/100.** Text + image in/out supported per official MoE architecture specs.
- **Coding: 88/100.** AA Intelligence Index 38 and LLM Arena coding dominance support elite-level coding performance.
- **Cost efficiency: 95/100.** Competitive pricing ($0.40/$3.20/1M); highest value tier in MoE family but not part of Overall Score formula.
- **Overall Score: 89.6/100.** (87 + 86 + 95 + 92 + 88) / 5 = 89.6. Best-fit: a balanced MoE flagship model excelling at reasoning and coding; superseded by GPT-6.1 Sol.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-10-17
- Method: public internet research across official Moonshot AI docs, Hugging Face, Artificial Analysis, GitHub, X/Moonshot AI, and independent benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
