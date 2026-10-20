# Xing 4.0 29B-A4B — findings by Claude Opus 4.6

- Source: China Telecom / Xing 4.0 29B-A4B (`opencode/xing_4.0_29b_a4b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B-A4B
- **Short description:** China Telecom's open-weight 29B/4B-active text-only MoE with 256K context, trained on Ascend hardware. Achieves SWE-bench Verified 75%. Apache 2.0 licensed with free Zen promotional tier.
- **Provider / access:** OpenCode Zen `opencode/xing_4.0_29b_a4b` (free promotional tier). Apache 2.0 self-host.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `opencode/xing_4.0_29b_a4b`
- **Context window:** 256,000 native (extensible to 512,000 via YaRN). Verified via meta.json.
- **Modalities:** Text input/output only. No image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-20):** Free promotional OpenCode Zen tier. Apache 2.0 weights self-host free.
- **Architecture:** 29B total parameters, ~4B active (MoE). Trained on Huawei Ascend hardware. Apache 2.0 open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found

Coding:

- SWE-bench Verified: **75%** (meta.json / China Telecom report)
- LiveCodeBench: no verified public score found

Long context:

- 256K native (512K via YaRN). No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 42/100.** No published agentic benchmarks. At 4B active, agentic depth is limited. Capped by scale and zero data.
- **Reasoning: 42/100.** No published reasoning benchmarks. At 4B active, reasoning is constrained. Capped by active parameter count.
- **Context window: 78/100.** 256K context per tier mapping (256K = 78). YaRN to 512K available.
- **Multimodal: 15/100.** Text-only model. Fixed at 15.
- **Coding: 58/100.** SWE-bench Verified 75% is impressive for 4B active parameters — significantly above expectations for the scale. Capped by absolute capability trailing frontier by ~10%.
- **Cost efficiency: 100/100.** Free promotional tier + Apache 2.0 open weights. Maximum efficiency.
- **Overall Score: 47/100.** Mean of (42 + 42 + 78 + 15 + 58) / 5 = 47.0 → 47. A remarkably efficient tiny MoE that achieves SWE-bench 75% with just 4B active parameters. Text-only and limited reasoning depth. Best for free, self-hostable coding assistance.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
