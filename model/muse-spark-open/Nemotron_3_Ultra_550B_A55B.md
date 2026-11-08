# Muse Spark Open — findings by Nemotron 3 Ultra 550B A55B

- Source: Meta Superintelligence Labs (`opencode/muse-spark-open`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight MoE foundation model (816B total / ~42B active, released Oct 2026) for agentic coding, developer workflows, and long-horizon repository tasks with full 1M context.
- **Provider / access:** Hugging Face (`meta-models/Muse-Spark-Open-816B-A42B`), OpenCode Zen (`opencode/muse-spark-open`), self-hosted; free open-weight checkpoint (BF16/NVFP4).
- **Release / knowledge:** 2026-10 release; open-weight license (Meta Open Model License); knowledge cutoff 2026.
- **IDs:** `opencode/muse-spark-open`, `meta-models/Muse-Spark-Open-816B-A42B` (Hugging Face).
- **Context window:** 1,048,576 tokens (1M); up to 131,072 max output.
- **Modalities:** Text, code, image, video, audio input; text and JSON output.
- **Pricing (as of 2026-11-08):** Free open-weight weights (self-host at $0 license cost); hosted serving via OpenCode Zen or self-hosted compute.
- **Architecture:** 816B total / ~42B active Mixture-of-Experts (MoE) transformer with 1M context window and multimodal input support.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **58.7%** (autonomous terminal agent tasks)
- SWE-bench Verified: **49.3%** (repository-scale software engineering)
- AgentBench: **65.4%** (long-horizon agentic workflows)

Reasoning / knowledge:

- GPQA Diamond: **62.1%**
- MMLU-Pro: **78.9%**
- Artificial Analysis Intelligence Index: **48** (#12 global rank)
- LongBench v2: **85.6%** (long-context reasoning)

Coding:

- SWE-bench Verified: **49.3%**
- LiveCodeBench v5: **54.8%**
- HumanEval+: **84.2%**
- FrontierSWE 2: **42.1%**

Long context / vision:

- 1,048,576 token context with 85.6% on LongBench v2 long-context reasoning.
- Multimodal input: text, code, image, video, audio with native processing.

### Normalized scores (1–100)

- **Tool use: 81/100.** Competent agent performance with 58.7% on Terminal-Bench 4.0 and 65.4% on AgentBench; SWE-bench at 49.3% caps the score.
- **Reasoning: 76/100.** Moderate reasoning with 62.1% on GPQA Diamond and #12 AA Intelligence Index rank (score 48); MMLU-Pro at 78.9%.
- **Context window: 94/100.** Full 1M token context with 85.6% on LongBench v2 at scale.
- **Multimodal: 88/100.** Broad multimodal input (text, code, image, video, audio) with strong cross-modal capabilities.
- **Coding: 78/100.** Decent coding with 49.3% on SWE-bench Verified and 54.8% on LiveCodeBench v5; HumanEval+ at 84.2%.
- **Cost efficiency: 88/100.** Free open-weight model with self-hosting at $0 license cost; only compute costs apply.
- **Overall Score: 83.4/100.** Arithmetic mean of five quality dimensions: (81 + 76 + 94 + 88 + 78) / 5 = 417 / 5 = 83.4 → 83. Meta's premier open-weight MoE with 1M context and multimodal input, strong for self-hosting autonomy but trails closed frontiers on agentic/coding leaderboards.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Public internet research across Meta Superintelligence Labs releases, Hugging Face model cards, SWE-bench/LiveCodeBench leaderboards, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Muse Spark Open 816B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Meta Superintelligence Labs — Model Releases](https://ai.meta.com)
  - [SWE-bench Verified Leaderboard](https://swebench.com)
  - [Artificial Analysis — Model Rankings](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---