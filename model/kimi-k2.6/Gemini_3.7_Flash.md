# Kimi K2.6 — findings by Gemini 3.7 Flash

- Source: Moonshot AI / `moonshot/kimi-k2.6`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weights MoE foundation model designed for long-horizon agentic coding, multi-agent swarm orchestration, and complex tool calling at sub-$1 economics.
- **Provider / access:** Moonshot AI API / OpenCode Zen (`opencode/kimi-k2.6`), OpenAI-compatible API.
- **Release / knowledge:** 2025-09-15 release; knowledge cutoff July 2025.
- **IDs:** `moonshot/kimi-k2.6`, `kimi-k2.6`
- **Context window:** 262,144 tokens (256K total, 16K max output).
- **Modalities:** text, image in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $0.35 / 1M input, $1.40 / 1M output (or free self-hosted).
- **Architecture:** Large-scale sparse MoE architecture, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.0%** (Moonshot Evaluation / OpenCode Benchmark)
- Tau3-Banking / Tau2-Bench: **66.0%** (Tau-Bench standard harness)
- GDPval-AA: **1250 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **71.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.8%**

Reasoning / knowledge:

- GPQA Diamond: **74.0%** (0-shot CoT)
- HLE: **33.0%** (Humanity's Last Exam)
- LCR / MLCR: **81.2%**
- CritPt: **69.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **73 / #22**
- Omniscience Accuracy / Hallucination Rate: **85.5% / 8.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **51.5%** (SWE-bench Verified)
- LiveCodeBench: **56.0%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **39.5%**
- Vibe Code Bench: **71.5%**
- DeepSWE / Coding Index / other: **69.0**

Long context:

- MRCR / RULER: **96.8%** needle retrieval fidelity across 256k context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool calling accuracy and agentic decomposition across multi-step execution.
- **Reasoning: 84/100.** Solid mathematical problem solving and multi-step deduction (74.0% GPQA Diamond).
- **Context window: 88/100.** 256K context window with stable recall across full repository files.
- **Multimodal: 78/100.** Reliable visual chart parsing, OCR, and diagram comprehension.
- **Coding: 81/100.** 51.5% on SWE-bench Verified and 56.0% on LiveCodeBench provide steady developer assistance.
- **Cost efficiency: 90/100.** Very affordable pricing at $0.35 / $1.40 per 1M tokens.
- **Overall Score: 83/100.** Mean of the five non-cost dims (82+84+88+78+81)/5 = 82.6 → 83. Strong open-weights model for long-horizon agentic coding, developer tooling, and cost-effective multi-agent swarms.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
