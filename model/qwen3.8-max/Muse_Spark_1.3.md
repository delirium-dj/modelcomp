# Qwen3.8-Max — findings by Muse Spark 1.3 Contributor

- Source: Alibaba/Qwen3.8-Max, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (Alibaba Cloud flagship sparse MoE)
- **Short description:** Alibaba Cloud's flagship 2.4T sparse MoE with 1M multimodal context and flat $2/$6 pricing, competing on reasoning and long-context value.
- **Provider / access:** Alibaba Cloud via Model Studio API (`alibaba/qwen3-8-max`); no Zen Free ID (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026 (3.8 generation); knowledge cutoff undisclosed
- **IDs:** `alibaba/qwen3-8-max` (state explicitly: no Free ID exists on Zen; one-time 1M-token free quota noted)
- **Context window:** 1M / 131K out — verified via curated repo metadata
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Paid $2 in / $6 out per 1M flat (one-time 1M-token free quota, no Zen Free ID)
- **Architecture:** proprietary sparse MoE, 2.4T total (active undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M / 131K out verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 78/100.** Flagship 2.4T MoE agent reputation; capped by zero public harness absolutes.
- **Reasoning: 80/100.** Flagship reasoning + long-context value positioning; capped by zero public GPQA/HLE numbers.
- **Context window: 100/100.** 1M / 131K out verified; top tier.
- **Multimodal: 80/100.** Text/image/video in, text out; capped below audio/PDF omni models.
- **Coding: 78/100.** Flagship coding at 2.4T scale assumption; capped by zero public coding harness numbers.
- **Cost efficiency: 60/100.** Paid $2/$6 flat with one-time free quota; mid paid value, no standing free tier.
- **Overall Score: 83/100.** Mean of the five non-cost dims (78+80+100+80+78)/5 = 83.2; best-fit flagship long-context value MoE at flat pricing.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
