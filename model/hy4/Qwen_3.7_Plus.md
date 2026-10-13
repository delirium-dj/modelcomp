# Hy4 — findings by Qwen 3.7 Plus
- Source: Tencent/Hy4 (`tencent/hy4`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4
- **Short description:** Tencent's August 2026 Hunyuan Hy4-preview open-weights flagship (770B total / 49B active MoE, Apache 2.0) with 1M context for long-horizon coding and productivity. Scores 77.0% on SWE-bench Verified, 85.4% on Terminal-Bench 2.1, 58.5% on GPQA Diamond, 54.8% on MATH-500, 49.0% on OSWorld, 45.2% on BrowseComp, 74.1 on Toolathlon, and 64.3 on DeepSWE. Overall leaderboard score 55.2. 1M context window (960K in / 64K out). ~60 tps inference speed. Text-only. Apache 2.0 open weights for self-hosting.
- **Provider / access:** Tencent (open weights, Apache 2.0). Self-hosted only (no Zen Free ID).
- **Release / knowledge:** August 28, 2026. Knowledge cutoff not specified.
- **IDs:** `tencent/hy4`
- **Context window:** 1,000,000 tokens (1M); 960K in / 64K out
- **Modalities:** Text in; text out
- **Pricing:** Free / open weights (Apache 2.0); self-hosted

### Raw benchmarks found

Agent / tool use: Toolathlon 74.1. APEX-Agents 37.1. OSWorld 49.0%. BrowseComp 45.2%. Terminal-Bench 2.1 85.4%. Strong agentic and tool-use capabilities.

Reasoning / knowledge: GPQA Diamond 58.5%. MATH-500 54.8%. Moderate reasoning scores.

Coding: SWE-bench Verified 77.0%. DeepSWE 64.3. SWE Atlas Refactoring 53.3. Strong coding performance.

Multimodal: Text-only. No image/audio/video input.

Long context: 1M context window (960K in / 64K out). Excellent long-context support.

### Normalized scores (1–100)

- **Tool use: 65/100.** Toolathlon 74.1, Terminal-Bench 2.1 85.4%, OSWorld 49.0%, BrowseComp 45.2%. Strong agentic capabilities.
- **Reasoning: 45/100.** GPQA Diamond 58.5%, MATH-500 54.8%. Moderate reasoning scores.
- **Context window: 85/100.** 1M context window (960K in / 64K out). Excellent.
- **Multimodal: 15/100.** Text-only. No multimodal input.
- **Coding: 70/100.** SWE-bench Verified 77.0%, DeepSWE 64.3, SWE Atlas Refactoring 53.3. Strong coding performance.
- **Cost efficiency: 85/100.** Free / open weights (Apache 2.0). Self-hosted with no per-token cost. Excellent value.
- **Overall Score: 56/100.** Mean of Tool (65) + Reasoning (45) + Context (85) + Multimodal (15) + Coding (70) = 280/5 = 56. Rounded to 57. Strong coding and agentic capabilities with excellent cost efficiency, but moderate reasoning and text-only limitation hold it back.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
