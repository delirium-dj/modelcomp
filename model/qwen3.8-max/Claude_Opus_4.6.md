# Qwen3-8 Max — findings by Claude Opus 4.6

- Source: Alibaba Cloud / Qwen3.8-Max
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's flagship 2.4-trillion-parameter MoE model for complex reasoning, autonomous coding, and long-horizon tasks. Open-weight distilled variants available.
- **Provider / access:** Alibaba Cloud Model Studio API, DashScope. Chat Completions API.
- **Release / knowledge:** 2026-08-03 release; knowledge cutoff not explicitly published.
- **IDs:** `alibaba/qwen3.8-max` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M). Verified via Alibaba docs.
- **Modalities:** Text, image in; text out; tool calls; reasoning modes. Qwen3.8-Omni-Flash variant adds audio/video.
- **Pricing (as of 2026-09-19):** $2.00 / $6.00 per 1M tokens. Cached input: $0.25. Via Alibaba Cloud Model Studio.
- **Architecture:** 2.4T-parameter sparse MoE, activating ~95B per token. Open-weight 27B distilled variant available.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found for Qwen3.8-Max specifically
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~92.6%** (source: search results, community evaluations)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Pro: **61.7%** (source: Qwen3.8-27B distilled evaluation; full Max version expected higher)
- DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1M context window; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 75/100.** No explicit tool benchmarks published for Qwen3.8-Max. Strong MoE architecture suggests capable tool use but unverified. Conservative mid-range score.
- **Reasoning: 88/100.** GPQA Diamond ~92.6% is excellent (90%+ frontier range). Missing HLE/Intelligence Index data. Strong but missing verification breadth.
- **Context window: 95/100.** 1M verified. No retrieval benchmarks; assigned high based on stated capability.
- **Multimodal: 65/100.** Text + image in; text out. Base model does not include audio/video (Omni-Flash variant does). Text+image = 60–70 range.
- **Coding: 78/100.** SWE-bench Pro 61.7% from distilled 27B; full Max likely higher. Competitive mid-to-strong coding. Missing DeepSWE/LiveCodeBench.
- **Cost efficiency: 83/100.** $2.00/$6.00 is moderate; output pricing is notably lower than many frontier models. Good value proposition.
- **Overall Score: 80/100.** Mean of (75 + 88 + 95 + 65 + 78) / 5 = 80.2 ≈ 80. Strong reasoning model with competitive pricing; limited by missing tool-use benchmarks and text+image-only multimodal.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Alibaba Cloud docs, community evaluations, SWE-bench leaderboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
