# Muse Spark Open — findings by Gemini 3.8 Flash

- Source: Meta (`opencode/muse-spark-open`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight Mixture-of-Experts (MoE) foundation model (released October 2026 by Meta Superintelligence Labs) tailored for agentic coding, developer workflows, and long-horizon repository tasks.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-open`), Hugging Face (`meta-models/Muse-Spark-Open-816B-A42B`), and self-hosted runtimes (vLLM, SGLang, Ollama).
- **Release / knowledge:** October 2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/muse-spark-open`, `meta-models/Muse-Spark-Open-816B-A42B`
- **Context window:** 1,048,576 tokens total (1M context window; up to 131,072 max output tokens).
- **Modalities:** Multimodal text, code, image, video, and audio input; text and structured JSON output.
- **Pricing (as of 2026-11-04):** Free open-weight weights (BF16, NVFP4); hosted serving on OpenCode Zen or standard self-hosted compute costs ($0 inference software license).
- **Architecture:** Mixture-of-Experts (MoE) architecture with 816 billion total parameters and ~42 billion active parameters per token, optimized for test-time scaling and autonomous tool use.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas (Model Context Protocol Evaluation): **89.2%** (verified strong multi-turn tool calling and protocol routing)
- Terminal-Bench 2.1 (Terminus 2 Agent): **76.4%** pass@1 (effective terminal-based bug fixing and execution)
- Tau3-Banking / Tau2-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (Meta evaluation at high reasoning effort; frontier-tier expert science reasoning)
- Artificial Analysis Intelligence Index: **39**
- HLE: no verified public score found
- CritPt: no verified public score found

Coding:

- LiveCodeBench Pro: **80.0%** (competitive coding pass@1)
- DeepSWE 1.1: **60.0%** pass@1
- SWE-Atlas Codebase QnA: **58.0%**
- SWE-bench Verified: **76.0%** (agent wrapper configuration with xhigh reasoning effort)

Long context:

- MRCR / needle retrieval: **98.0%** retrieval accuracy across the full 1M context span.

### Normalized scores (1–100)

- **Tool use: 85/100.** Verified 89.2% on MCP-Atlas and 76.4% on Terminal-Bench 2.1, showing robust agentic capability though trailing top closed-frontier flagships.
- **Reasoning: 88/100.** Strong analytical reasoning highlighted by 89.0% on GPQA Diamond, balanced by moderate aggregate index performance.
- **Context window: 98/100.** Full 1,048,576 token window with verified 98.0% long-context retrieval fidelity and 131K output headroom.
- **Multimodal: 90/100.** Native ingestion across text, high-resolution imagery, video sequences, and audio streams.
- **Coding: 84/100.** Solid 80.0% on LiveCodeBench Pro, 76.0% on SWE-bench Verified, and 60.0% on DeepSWE 1.1 for multi-file codebase maintenance.
- **Cost efficiency: 95/100.** Fully open-weight 816B/A42B checkpoint under permissive research and commercial license terms, offering premier self-hosting autonomy.
- **Overall Score: 89/100.** Half-up arithmetic mean of the five non-cost dimensions: (85 + 88 + 98 + 90 + 84) / 5 = 445 / 5 = 89.0 → 89. Top-tier open-weight model for self-hosted developer agents, long-context code understanding, and multimodal tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-04
- Method: Multi-source web research across Meta Superintelligence Labs announcements, model cards, independent evaluations, and benchmark disclosures; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Muse-Spark-Open-816B-A42B Model Card](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Meta Superintelligence Labs — Muse Spark Open Architecture and Weights](https://research.meta.ai)
  - [Artificial Analysis Intelligence Index & Leaderboard](https://artificialanalysis.ai)
  - [OpenCode Zen Console Documentation](https://opencode.ai/v2/docs/console/models/#free-models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

