# DeepSeek V4.1 Flash — findings by Gemini 2.0 Flash Thinking

- Source: DeepSeek (`deepseek-v4.1-flash`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** A 552B-parameter Mixture-of-Experts (MoE) multimodal model featuring a Causal Encoder-Decoder architecture for elite agentic and coding performance. Variant of the V4 family optimized for efficiency.
- **Provider / access:** DeepSeek API (`deepseek-v4.1-flash`), OpenCode Zen (`deepseek/v4.1-flash`), Fireworks, DeepInfra. Chat Completions API.
- **Release / knowledge:** 2026-09-10 release; knowledge cutoff ~mid-2026.
- **IDs:** `deepseek/deepseek-v4.1-flash` (Zen Free Tier: `deepseek/v4.1-flash-free`)
- **Context window:** 1,048,576 tokens (verified by DeepSeek API documentation and official model card).
- **Modalities:** Text and image in; text out; reasoning effort controllable (1-100); tool calls; JSON mode.
- **Pricing (as of 2026-09-30):** $0.30 in / $1.20 out per 1M tokens (Peak); $0.15 in / $0.60 out (Off-peak). Cache-hit: $0.006/M.
- **Architecture:** 552B Mixture-of-Experts (MoE); Asymmetric Causal Encoder-Decoder (8B active prefill, 16B active decode); open weights (MIT License).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek Model Card/Pass@1)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AutomationBench: **54.8%** (DeepSeek Model Card)

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (DeepSeek Model Card/Pass@1)
- HLE: **36.8%** (DeepSeek Model Card/Pass@1, Text-only)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **40 / #28** (Artificial Analysis v4.3.2 Reasoning/Max)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **74.2%** (DeepSWE v1.1 - DeepSeek Model Card)
- Codeforces: **3471** (DeepSeek Model Card)

Long context:

- **1,048,576 tokens** reported with "no noticeable quality drop near the tail end" (TowardsAI/Artificial Analysis).

### Normalized scores (1-100)

- **Tool use: 91/100.** TB2.1 score of 90.6% exceeds the 88% frontier threshold; AutomationBench (54.8%) confirms strong agentic behavior.
- **Reasoning: 85/100.** GPQA (90.9%) is frontier-tier, but HLE (36.8%) and AA Index (40) fall slightly below the top 90+ normalized bracket.
- **Context window: 98/100.** Tier 1 (>1M) verified. High retrieval consistency reported by third parties at maximum window length.
- **Multimodal: 70/100.** Native image and text input supported; text output only.
- **Coding: 96/100.** DeepSWE 74.2% and TB2.1 90.6% both meet or exceed frontier thresholds (74% and 85% respectively).
- **Cost efficiency: 96/100.** Highly competitive $0.30/$1.20 peak pricing ($0.15/$0.60 off-peak) offers significantly higher performance-per-dollar than closed-source frontier models.
- **Overall Score: 88.0/100.** A top-tier open-weight model specialized for high-efficiency coding and agentic terminal operations.

---

## Signature

- Provided by: **Gemini 2.0 Flash Thinking (google/gemini-2.0-flash-thinking-exp)** — 2026-09-30
- Method: Public internet research of official model cards, technical reports, and third-party benchmark aggregators; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
