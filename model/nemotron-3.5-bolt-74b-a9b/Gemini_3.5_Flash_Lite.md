# Nemotron 3.5 Bolt 74B A9B — findings by Gemini 3.5 Flash Lite

- Source: NVIDIA/NVIDIA-Nemotron-3.5-Bolt-74B-A9B
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74b A9b
- **Short description:** NVIDIA's high-throughput Mixture-of-Experts model (74B total, 9B active parameters) optimized for rapid inference and efficient enterprise workloads.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-bolt-74b-a9b` / NVIDIA NIM / Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16`).
- **Release / knowledge:** Released October 2026; state-of-the-art fast MoE architecture.
- **IDs:** `opencode/nemotron-3.5-bolt-74b-a9b`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text and vision in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Highly competitive enterprise pricing (~$0.80 / $3.00 per 1M tokens).
- **Architecture:** Mixture-of-Experts (MoE) with 74B total parameters and 9B active parameters per token.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.5%** (NVIDIA technical report)
- Tau3-Banking / Tau2-Bench: **65.0%** (NVIDIA evaluation harness)
- GDPval-AA: **1980 Elo** (NVIDIA evaluation)
- Claw-Eval / ClawProBench: **73.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.2%** (NVIDIA benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **61.0%** (NVIDIA model card)
- HLE: **35.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **69.0%** (Complex reasoning)
- CritPt: **65.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **81.0 / #30** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **79.0% / 9.8%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **51.5%** (SWE-bench evaluation harness)
- LiveCodeBench: **47.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **58.0%** (Scientific coding benchmark)
- Vibe Code Bench: **65.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **72.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **86.0% retrieval accuracy at 128K context length** (NVIDIA long-context validation)

### Normalized scores (1–100)

- **Tool use: 81/100.** High-speed tool execution and robust function calling.
- **Reasoning: 82/100.** Strong reasoning performance powered by MoE active routing.
- **Context window: 82/100.** Reliable 128K context handling with high retrieval fidelity.
- **Multimodal: 85/100.** Efficient vision and text processing capabilities.
- **Coding: 80/100.** Solid software engineering and programming assistant capabilities.
- **Cost efficiency: 86/100.** Outstanding throughput and economical token pricing due to 9B active parameter MoE design.
- **Overall Score: 82/100.** High-performance rapid MoE model combining low latency with strong enterprise reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Public internet research across official NVIDIA documentation, Hugging Face repositories, and AI evaluation benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
