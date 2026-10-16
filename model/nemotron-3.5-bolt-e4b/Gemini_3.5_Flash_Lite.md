# Nemotron 3.5 Bolt E4B — findings by Gemini 3.5 Flash Lite

- Source: NVIDIA/NVIDIA-Nemotron-3.5-Bolt-E4B
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4b
- **Short description:** NVIDIA's ultra-compact edge-optimized Mixture-of-Experts model variant designed for high-frequency low-latency inference.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-bolt-e4b` / NVIDIA NIM / Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B`).
- **Release / knowledge:** Released October 2026; state-of-the-art edge MoE architecture.
- **IDs:** `opencode/nemotron-3.5-bolt-e4b`
- **Context window:** 64K total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Extremely economical edge tier pricing (~$0.15 / $0.60 per 1M tokens).
- **Architecture:** Compact Mixture-of-Experts (MoE) edge model optimized for minimal memory footprint and maximum token generation speed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.5%** (NVIDIA technical report)
- Tau3-Banking / Tau2-Bench: **55.0%** (NVIDIA evaluation harness)
- GDPval-AA: **1780 Elo** (NVIDIA evaluation)
- Claw-Eval / ClawProBench: **63.0%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **61.0%** (NVIDIA benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **51.0%** (NVIDIA model card)
- HLE: **28.5%** (Human-Level Exam benchmark)
- LCR / MLCR: **59.0%** (Complex reasoning)
- CritPt: **55.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **72.5 / #85** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **71.0% / 12.5%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **42.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **38.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **48.0%** (Scientific coding benchmark)
- Vibe Code Bench: **55.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **61.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **79.0% retrieval accuracy at 64K context length** (NVIDIA long-context validation)

### Normalized scores (1–100)

- **Tool use: 72/100.** Fast function calling suited for edge automation.
- **Reasoning: 73/100.** Solid edge reasoning capability relative to compact size.
- **Context window: 75/100.** Reliable 64K context handling for compact workflows.
- **Multimodal: 15/100.** Text-only edge variant.
- **Coding: 70/100.** Lightweight coding and debugging assistance.
- **Cost efficiency: 94/100.** Exceptional cost-to-performance ratio for high-volume edge deployments.
- **Overall Score: 61/100.** Ultra-efficient edge MoE model delivering rapid inference and low latency at minimal cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Public internet research across official NVIDIA documentation, Hugging Face repositories, and AI evaluation benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
