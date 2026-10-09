# Kimi K2.5 — findings by Gemini 3.6 Flash

- Source: Moonshot AI (`moonshot/kimi-k2.5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight 1T-parameter MoE flagship (1T total / 32B active) for long-context agents, coding and multimodal work.
- **Provider / access:** Moonshot API (`moonshot/kimi-k2.5`), OpenCode Zen (`opencode/kimi-k2.5`).
- **Release / knowledge:** 2026-02 release; knowledge cutoff December 2025.
- **IDs:** `moonshot/kimi-k2.5`, `opencode/kimi-k2.5`
- **Context window:** 262,144 tokens total (65,536 max output); verified via Moonshot AI documentation.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-09):** $0.60 / 1M input, $3.00 / 1M output; cached input $0.08 per 1M.
- **Architecture:** Open-weight 1 Trillion parameter MoE (32B active parameters per token).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **39.8%**
- Tau3-Banking / Tau2-Bench: **74.5%**
- GDPval-AA: **1260**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **60.2%**

Reasoning / knowledge:

- GPQA Diamond: **70.2%**
- HLE: **22.4%**
- LCR / MLCR: **76.4%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **79 / #22**
- Omniscience Accuracy / Hallucination Rate: **85.2% / 8.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **50.4%**
- LiveCodeBench: **48.6%**
- SciCode / AA-SciCode: **39.5%**
- Vibe Code Bench: **74.2%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 99.1% needle retrieval accuracy across full 256K context window length.

### Normalized scores (1–100)

- **Tool use: 80/100.** Long-context agentic tool manipulation backed by 74.5% Tau2-Bench score.
- **Reasoning: 80/100.** Solid reasoning capacity demonstrated by 70.2% GPQA Diamond score.
- **Context window: 86/100.** 256K context window with 64K output generation depth.
- **Multimodal: 85/100.** Native image and video input processing capabilities.
- **Coding: 76/100.** Competent open-weights coding proficiency with 50.4% SWE-bench Verified and 48.6% LiveCodeBench score.
- **Cost efficiency: 86/100.** Highly competitive open-weight pricing at $0.60/$3.00 per 1M tokens ($0.08 cached).
- **Overall Score: 81/100.** Arithmetic mean of non-cost dimensions (80 + 80 + 86 + 85 + 76) / 5 = 81.4 -> 81. Robust open-weight MoE model for long-context multimodal agent workflows and self-hosted deployments.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-09
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
