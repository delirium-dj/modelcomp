# Ling-3.0-tiny — findings by Ling 3.1 Flash

- Source: inclusionAI (`Ling-3.0-tiny`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-tiny
- **Short description:** inclusionAI's lightweight hybrid reasoning MoE — 7.9B total / 1.3B active parameters, designed for strong reasoning and agentic capability at a small inference footprint, validated for local/edge deployment (NVIDIA DGX Spark, Apple Silicon MacBook, Mac mini) with BF16, FP8 and INT4 weights.
- **Provider / access:** Hugging Face (`inclusionAI/Ling-3.0-tiny`, open weights); tracked by Artificial Analysis at $0.00/1M (free) input and output.
- **Release / knowledge:** Medium launch post 2026-08-13; knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ling-3.0-tiny` (HF).
- **Context window:** 262,000 tokens — verified on the Artificial Analysis model page (TB 2.1 eval also used a 256K window); ~8.34 GiB peak memory at 8K context (FP8).
- **Modalities:** text in; text out; thinking mode enabled by default (recommended sampling: temperature=1.0, top_p=0.95, top_k=20).
- **Pricing (as of 2026-10-10):** $0.00 / 1M input, $0.00 / 1M output (AA-tracked provider; open weights).
- **Architecture:** hybrid reasoning MoE, 7.9B total / 1.3B active per token; >160 tok/s and ~18s end-to-end latency for a 500-token response in AA testing; FP8: ~100–105 tok/s on DGX Spark, 86–90 tok/s on M4 Pro MacBook.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Agentic Index: **16** (inclusionAI Medium post)
- τ³-Banking-AA: **20.80** (inclusionAI Medium post)
- BFCL v4: **62.72** (inclusionAI Medium post)
- GDPval-AA v2: **772 ELO** (inclusionAI Medium post)
- Terminal-Bench 2.1: **27.70** (inclusionAI Medium post; AA protocol, Terminus 2 harness, 2h timeout, 3 runs per task, mean)
- AutomationBench / MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **73.40** (inclusionAI Medium post)
- IMO-AnswerBench: **71.03** (inclusionAI Medium post)
- Artificial Analysis Intelligence Index: **25** on v4.1.1 (inclusionAI Medium post) vs **11** on the current AA model page (AA measurement; above the comparable-model median of 8) — the two sources disagree; both reported
- HLE / CritPt / MLCR / AIME: no verified public score found

Coding:

- Terminal-Bench 2.1: **27.70** (see tool use)
- ArtifactsBench: **47.93** (inclusionAI Medium post)
- SWE-bench Verified / DeepSWE / LiveCodeBench / SciCode: no verified public score found

Long context:

- AA-LCR: **58.70** (inclusionAI Medium post)
- MRCR / RULER / GraphWalks: no verified public score found

Instruction following:

- IFBench: **63.61**; Multi-IF: **83.15** (inclusionAI Medium post)

Efficiency note (AA): 230M output tokens per Intelligence Index task vs a median of 82M — very verbose and slower than average, which matters for effective cost despite the $0.00 list price.

### Normalized scores (1–100)

- **Tool use: 45/100.** BFCL v4 62.72 is mid and Terminal-Bench 2.1 27.70 is weak-mid, but τ³-Banking-AA 20.80, GDPval-AA 772 Elo and the AA Agentic Index of 16 are weak; no AutomationBench or MCP-Atlas number exists.
- **Reasoning: 62/100.** GPQA Diamond 73.40 and IMO-AnswerBench 71.03 are strong for a 1.3B-active model; the AA Intelligence Index disagrees across sources (25 vendor-reported vs 11 on AA's current page), so reasoning credit is capped mid-band; no HLE or AIME number exists.
- **Context window: 68/100.** 262K tokens — the 200K–500K band — with AA-LCR 58.70 as mid-band measured long-context retrieval.
- **Multimodal: 15/100.** Text-only model (text in, text out) — the text-only floor band.
- **Coding: 48/100.** Terminal-Bench 2.1 27.70 is weak-mid and ArtifactsBench 47.93 is mid; no SWE-bench, DeepSWE, or LiveCodeBench number exists.
- **Cost efficiency: 100/100.** $0.00/$0.00 per 1M with open weights and validated edge deployment — the top of the cost scale; verbosity (230M tokens per Index task) is an effective-cost caveat.
- **Overall Score: 48/100.** Mean of Tool 45, Reasoning 62, Context 68, Multimodal 15, Coding 48 = 47.6 → 48. Best-fit: free local/edge reasoning and function-calling at 262K context on a 1.3B-active footprint; agentic execution (τ³ 20.80, TB 2.1 27.70) is the weak edge.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (inclusionAI Hugging Face model card, inclusionAI Medium launch post 2026-08-13, Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-reported Index (25) and AA's current measurement (11) are both disclosed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
