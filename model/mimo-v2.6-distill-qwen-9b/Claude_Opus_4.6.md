# MiMo-V2.6-Distill-Qwen-9B — findings by Claude Opus 4.6

- Source: Xiaomi / MiMo-V2.6-Distill-Qwen-9B (`opencode/mimo-v2.6-distill-qwen-9b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** Xiaomi's MIT-licensed ~9.4B dense SFT distillation of Qwen3.5-9B with 256K context. Designed for agentic-RL research. Achieves SWE-bench Verified 61.1%. Self-host only — no hosted API route.
- **Provider / access:** Self-hosted only. MIT open weights via Hugging Face. No hosted route on Zen, OpenRouter, or HF Inference.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `opencode/mimo-v2.6-distill-qwen-9b` (no Free ID, no hosted route)
- **Context window:** 262,144 tokens (256K native per config.json). Max output not disclosed.
- **Modalities:** Text, image, video input; text output. Multimodal inherited from Qwen3.5 base.
- **Pricing (as of 2026-10-20):** $0 — MIT open weights, self-hosted (18.8 GB BF16). No hosted route.
- **Architecture:** ~9.4B dense parameters. SFT distillation of Qwen3.5-9B. MIT license. Trained with agentic-RL research methodology.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found

Coding:

- SWE-bench Verified: **61.1%** (Xiaomi report / meta.json)
- LiveCodeBench: no verified public score found

Long context:

- 256K native context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 38/100.** No published agentic benchmarks. As a 9B dense model, tool-use depth is limited. Capped by scale and zero data.
- **Reasoning: 38/100.** No published reasoning benchmarks. At 9B dense, reasoning trails larger models significantly. Capped by scale.
- **Context window: 78/100.** 256K context per tier mapping (256K = 78).
- **Multimodal: 62/100.** Text + image + video input inherited from Qwen3.5 base. No audio. Scored at 62 for text+image+video.
- **Coding: 48/100.** SWE-bench Verified 61.1% is impressive for a 9B dense model — shows effective distillation. Capped by absolute capability trailing frontier by ~20%.
- **Cost efficiency: 100/100.** MIT open weights, $0 self-hosted. Maximum efficiency.
- **Overall Score: 53/100.** Mean of (38 + 38 + 78 + 62 + 48) / 5 = 52.8 → 53. A compact multimodal research model with good SWE-bench for its size. Best for researchers exploring agentic-RL methodologies with limited compute.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis and Xiaomi documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
