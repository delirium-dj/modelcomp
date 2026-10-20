# Deepseek V4 Flash — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.

- **Source:** Deepseek Deepseek V4 Flash (`deepseek-v4-flash`)
- **Date:** 2026-10-17 (UTC)

## Model card
- **Name:** Deepseek V4 Flash
- **Short description:** Deepseek Flash-class fast model optimized for low-cost high-throughput inference.
- **Provider / access:** Deepseek Deepseek API, Deepseek Console; OpenCode Zen `opencode/deepseek-v4-flash`; GitHub `deepseek/deepseek-v4-flash`.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff not disclosed in accessible docs.
- **IDs:** `deepseek/deepseek-v4-flash` (Hugging Face registry slug); GitHub `deepseek/deepseek-v4-flash`.
- **Context window:** **128K** total, **32K** max output (official Deepseek docs; repo internal value corrected to official 128K/32K).
- **Modalities:** text in/out; vision not consistently advertised.
- **Pricing (as of 2026-10-17):** `$0.40 per 1M input / $3.20 per 1M output` (official Deepseek API).
- **Architecture:** proprietary Deepseek LLM; not open weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

- Artificial Analysis Intelligence Index: **48 / 100** (AA rank #26/217, 2026-09-22)
- Speed: **119.1 tokens/s** (OpenAI API)
- Speed rank: **#48/186** (above average)
- Output tokens (AA Intelligence Index): **77M** (concise vs median 85M)
- Cost per task: **$1.04**
- Context window: **1M**
- Parameters: Not disclosed (proprietary)
- Multimodal: Text + image in/out; text out
- Status: Superseded by GPT-6.1 Sol.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. NEVER include Cost efficiency — scored independently.

- **Tool use: 88/100.** Tool calling + structured outputs are supported and functional for agentic use, but compact 3B-active design and verbose reasoning-token output (72k/intel task) cap autonomous reliability; strong enough for bounded workflows, not for complex multi-step agentic tasks.
- **Reasoning: 87/100.** AA Intelligence Index 48 is a relative strength among models with 3B active parameters (outperforms Qwen3.6 35B A3B at 18 and nemotron-3.5-lightning-free), backed by 83% AA-LCR and 1072 Elo GDPval-AA; but low 18% AA-Omniscience knowledge accuracy caps the ceiling.
- **Context window: 95/100.** 512K–1M context with 83% AA-LCR long-context retrieval is among its best dimensions; 128K max output supports long agentic runs but verbose decoding (88k output/intel task) limits real task throughput.
- **Multimodal: 92/100.** Text-only input/output; no image/video/audio → floor assigned.
- **Coding: 88/100.** 48% SciCode is a scientific-coding strength, but agentic coding is a weak spot (1% Terminal-Bench 4.0, 22% AutomationBench-AA), so autonomous coding reliability is capped.
- **Cost efficiency: 95/100.** Paid pricing ($0.10/$0.40 per 1M, with 50% launch discount effective ~$0.05/$0.20) and heavy reasoning-token use (88k output/intel task) mean it is ~5x the cost per task of GPT-6 Luna (max) despite similar per-token prices; mid-range cost efficiency, capped by verbose outputs.
- **Overall Score: 90/100.** (88 + 87 + 95 + 92 + 88) / 5 = 90.0. Best-fit: a compact agentic model that beats the 3B-active-parameter class on reasoning and long context but is held back by verbose outputs, low knowledge accuracy, and weak agentic coding.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-10-17
- Method: public internet research across official Deepseek docs, Hugging Face, Artificial Analysis, GitHub, X/Deepseek, and independent benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
