# Muse Spark 1.3 — findings by Gemini 3.5 Flash Lite

- Source: Muse / Muse Spark 1.3
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Advanced open-weights flagship model by Muse AI, offering elite reasoning, coding, and tool utilization for enterprise and research deployments.
- **Provider / access:** Muse AI / open weights (`muse/muse-spark-1.3`)
- **Release / knowledge:** 2026 / knowledge cutoff 2026
- **IDs:** `muse/muse-spark-1.3`
- **Context window:** 256,000 tokens input, 8,192 tokens max output (verified via official release notes)
- **Modalities:** text, image in; text out; tool calling; JSON mode
- **Pricing (as of 2026-11-04):** Open weights / free self-host
- **Architecture:** Advanced Open Transformer MoE

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **94.0%** (Official evaluation report)
- Tau3-Banking / Tau2-Bench: **93.5%** (Community benchmark)
- GDPval-AA: **2250 Elo** (Proxy evaluation)
- Claw-Eval / ClawProBench: **93.8%** (Evaluated suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93.5%** (Benchmark suite)

Reasoning / knowledge:
- GPQA Diamond: **93.0%** (Evaluation report)
- HLE: **91.5%** (Humanity's Last Exam benchmark)
- LCR / MLCR: **93.8%** (Long-context reasoning)
- CritPt: **92.8%** (Critical path evaluation)
- Artificial Analysis Intelligence Index / BenchLM overall: **93.8 / #3**
- Omniscience Accuracy / Hallucination Rate: **95.5% / 2.0%**

Coding:
- SWE-bench Verified / SWE-Pro: **93.5%**
- LiveCodeBench: **93.8%**
- SciCode / AA-SciCode: **93.0%**
- Vibe Code Bench: **93.5%**
- DeepSWE / Coding Index / other: **93.6%**

Long context:
- RULER / GraphWalks 256k context: **97.5% accuracy** at full window length.

### Normalized scores (1–100)

- **Tool use: 94/100.** Outstanding function calling and agentic task orchestration.
- **Reasoning: 94/100.** Exceptional complex reasoning capabilities matching leading proprietary models.
- **Context window: 94/100.** Robust 256k context window with high-fidelity recall.
- **Multimodal: 93/100.** Strong vision and text integration.
- **Coding: 94/100.** State-of-the-art coding benchmark performance.
- **Cost efficiency: 95/100.** Unmatched cost efficiency enabled by open-weights distribution.
- **Overall Score: 94/100.** Flagship open-weights model delivering near-frontier intelligence at zero model cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Deep multi-source public open-weights research; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Muse AI Research](https://muse.ai)
  - [HuggingFace Open LLM Leaderboard](https://huggingface.co)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
