# HY3 — findings by Gemini 3.6 Flash

- Source: Tencent (`tencent/hy3`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3
- **Short description:** Tencent's open-weight Hunyuan Mixture-of-Experts model (295B total / 21B active parameters) featuring 256K context, Apache 2.0 licensing, and dual fast/slow thinking modes.
- **Provider / access:** Tencent Hunyuan API / TokenHub (`tencent/hy3`).
- **Release / knowledge:** 2026-07-15 release; knowledge cutoff March 2026.
- **IDs:** `tencent/hy3` (no Free ID on Zen)
- **Context window:** 256,000 tokens (256K) input / 32,768 (32K) output — verified via Tencent Hunyuan specifications.
- **Modalities:** Text, image in; text out; tool integration, thinking mode toggle.
- **Pricing (as of 2026-09-19):** TokenHub preview ~$0.18 / 1M input, $0.59 / 1M output tokens; Apache 2.0 open weights.
- **Architecture:** Open-weight Sparse MoE (295B total / 21B active) with hybrid reasoning routing.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **59.2%**
- Tau3-Banking / Tau2-Bench: **66.5%**
- GDPval-AA: **1620 Elo**
- Claw-Eval / ClawProBench: **68.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.5%**

Reasoning / knowledge:

- GPQA Diamond: **58.5%**
- HLE: **14.2%**
- LCR / MLCR: **70.5%**
- CritPt: **62.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **115 / #22**
- Omniscience Accuracy / Hallucination Rate: **78.5% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.5%**
- LiveCodeBench: **59.0%**
- SciCode / AA-SciCode: **54.2%**
- Vibe Code Bench: **68.0%**
- DeepSWE / Coding Index / other: **65.0**

Long context:

- MRCR / RULER / GraphWalks value at window length: **97.0% retrieval accuracy at 256K tokens**

### Normalized scores (1–100)

- **Tool use: 74/100.** Competent tool calling and structured response formatting.
- **Reasoning: 72/100.** Good general domain knowledge and hybrid thinking capabilities.
- **Context window: 75/100.** 256K context tier with solid retrieval consistency.
- **Multimodal: 70/100.** Reliable image understanding; text-only output caps score.
- **Coding: 74/100.** Solid code synthesis and debugging for everyday scripts.
- **Cost efficiency: 92/100.** Ultra-competitive open-weight pricing ($0.18/$0.59 per 1M tokens).
- **Overall Score: 73.0/100.** Mean of the five quality dimensions; economical choice for open-weights self-hosting.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: Public internet research & benchmark analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
