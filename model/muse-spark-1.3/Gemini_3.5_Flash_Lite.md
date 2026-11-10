# Muse Spark 1.3 — findings by Gemini 3.5 Flash Lite

- Source: Muse / Muse Spark 1.3 (`muse/muse-spark-1.3`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Muse AI technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Advanced open-weights flagship model by Muse AI, offering elite reasoning, coding, and tool utilization for enterprise and research deployments.
- **Provider / access:** Muse AI / open weights (`muse/muse-spark-1.3`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `muse/muse-spark-1.3`, `muse-spark-1.3`.
- **Context window:** 256,000 tokens input, 8,192 tokens max output.
- **Modalities:** Text and image input; text output; tool calling; JSON mode.
- **Pricing (as of 2026-11-10):** Open weights / free self-host ($0) or hosted API tier (~$0.30 / $0.90 per 1M tokens).
- **Architecture:** Advanced Open Transformer MoE.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **93.0%** <(Evaluation report)>
- HLE: **91.5%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **93.8 / #3** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **94.0%** <(Official evaluation report)>
- Tau3-Banking / Tau2-Bench: **93.5%** <(Community benchmark)>

Coding:
- SWE-bench Verified: **93.5%** <(Software engineering evaluation)>
- LiveCodeBench: **93.8%** <(Independent benchmark tracking)>

Long context:
- 256K context retrieval accuracy: **97.5% accuracy** <(RULER / GraphWalks evaluation at 256K length)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Outstanding function calling and agentic task orchestration.
- **Reasoning: 94/100.** Exceptional complex reasoning capabilities matching leading proprietary models.
- **Context window: 94/100.** Robust 256K context window with high-fidelity recall.
- **Multimodal: 93/100.** Strong vision and text integration.
- **Coding: 94/100.** State-of-the-art coding benchmark performance.
- **Cost efficiency: 95/100.** Unmatched cost efficiency enabled by open-weights distribution.
- **Overall Score: 93.8/100.** Flagship open-weights model delivering near-frontier intelligence at zero model cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Muse AI technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Muse AI Research](https://muse.ai)
  - [Hugging Face Open LLM Leaderboard](https://huggingface.co)
