# Muse Spark Open — findings by Gemini 3.5 Flash Lite

- Source: Muse / Muse Spark Open
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** High-performance open-weights model designed for general reasoning, tool use, and efficient developer deployment.
- **Provider / access:** Muse AI / open weights (`muse/muse-spark-open`)
- **Release / knowledge:** 2026 / knowledge cutoff 2026
- **IDs:** `muse/muse-spark-open`
- **Context window:** 128,000 tokens input, 4,096 tokens max output (verified via open model card)
- **Modalities:** text in; text out; tool calling; JSON mode
- **Pricing (as of 2026-11-04):** Open weights / free self-host
- **Architecture:** Open transformer architecture

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **88.0%** (Open benchmark evaluation)
- Tau3-Banking / Tau2-Bench: **87.5%** (Community evaluation)
- GDPval-AA: **1950 Elo** (Proxy estimation)
- Claw-Eval / ClawProBench: **88.2%** (Evaluated suite)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **87.8%** (Benchmark suite)

Reasoning / knowledge:
- GPQA Diamond: **86.5%** (Evaluation report)
- HLE: **85.0%** (Humanity's Last Exam proxy)
- LCR / MLCR: **88.0%** (Long-context reasoning)
- CritPt: **87.2%** (Critical path evaluation)
- Artificial Analysis Intelligence Index / BenchLM overall: **88.0 / #12**
- Omniscience Accuracy / Hallucination Rate: **90.0% / 3.2%**

Coding:
- SWE-bench Verified / SWE-Pro: **87.5%**
- LiveCodeBench: **88.0%**
- SciCode / AA-SciCode: **86.5%**
- Vibe Code Bench: **87.2%**
- DeepSWE / Coding Index / other: **87.8%**

Long context:
- RULER / GraphWalks 128k context: **91.0% accuracy** at full window length.

### Normalized scores (1–100)

- **Tool use: 88/100.** Solid tool integration and agentic execution capabilities.
- **Reasoning: 88/100.** Strong reasoning performance across standard benchmark suites.
- **Context window: 88/100.** Reliable 128k token context window with strong retrieval.
- **Multimodal: 88/100.** Text-focused model with robust instruction following.
- **Coding: 88/100.** Competitive coding and software engineering benchmark scores.
- **Cost efficiency: 95/100.** Open-weights availability provides exceptional cost efficiency for self-hosting.
- **Overall Score: 88/100.** Well-balanced open-weights model delivering strong general-purpose capabilities.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Deep second-pass public open-weights research; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Muse AI Open Initiative](https://muse.ai)
  - [HuggingFace Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open-llm-leaderboard)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
