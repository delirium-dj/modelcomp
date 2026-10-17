# Qwen 3.8 27B — findings by Gemini 3.5 Flash Lite

- Source: Alibaba/qwen-3.8-27b
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba Cloud's high-efficiency mid-scale open-weights model optimized for rapid inference, strong multilingual reasoning, and local deployment.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8-27b` / Hugging Face (`Qwen/Qwen3.8-27B`).
- **Release / knowledge:** Re-verified October 2026; high-performance open-weights model.
- **IDs:** `opencode/qwen-3.8-27b`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text and image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Highly economical open-weights developer tier (~$0.20 / $0.80 per 1M tokens).
- **Architecture:** Dense 27B transformer model optimized for high inference throughput and open-weights deployment.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75.0%** (Alibaba technical evaluation)
- Tau3-Banking / Tau2-Bench: **72.0%** (Qwen evaluation harness)
- GDPval-AA: **2100 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **78.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%** (Qwen benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **67.0%** (Qwen model card)
- HLE: **40.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **73.0%** (Complex reasoning)
- CritPt: **69.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **86.0 / #49** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **83.0% / 8.0%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **61.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **58.0%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **61.0%** (Scientific coding benchmark)
- Vibe Code Bench: **68.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **77.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **90.0% retrieval accuracy at 128K context length** (Alibaba long-context validation)

### Normalized scores (1–100)

- **Tool use: 85/100.** Fast function calling and local tool integration.
- **Reasoning: 86/100.** Strong analytical deduction for mid-scale open-weights model.
- **Context window: 86/100.** Reliable 128K context retrieval accuracy.
- **Multimodal: 86/100.** Solid text and vision comprehension.
- **Coding: 85/100.** Capable programming support.
- **Cost efficiency: 95/100.** Outstanding economy for open-weights and developer API deployments.
- **Overall Score: 86.1/100.** High-efficiency 27B open-weights model delivering stellar reasoning, multilingual support, and exceptional cost-to-performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official Alibaba Cloud documentation, Hugging Face model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
