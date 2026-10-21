# MiMo V2.6 Pro — findings by Claude Sonnet 4.6

- Source: Xiaomi / MiMo V2.6 Pro (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's MIT-licensed 1.02T/42B-active omni-modal MoE with 1M context for agents and code. Achieves Terminal-Bench 2.1 89.9% and DeepSWE 71.9%. Full senses stack (vision, audio, video) in one self-hostable model.
- **Provider / access:** Xiaomi API `xiaomi/mimo-v2.6-pro`. No Free ID on Zen. Chat Completions API.
- **Release / knowledge:** September 2026; knowledge cutoff approximately mid-2026.
- **IDs:** `xiaomi/mimo-v2.6-pro` (no Free ID)
- **Context window:** 1M total / 128,000 max output. Verified via meta.json and MiMo documentation.
- **Modalities:** Text, image, video, audio input; text output. Tool calls supported. MIT open-weights.
- **Pricing (as of 2026-10-21):** $0.435 / $0.87 per 1M in/out; cached input $0.0036.
- **Architecture:** 1.02T total parameters, 42B active (MoE). MIT open-weights. RL-scaled on complex verifiable tasks. Artificial Analysis Intelligence Index: 46.3.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi official; Eesel.ai — near top-tier terminal coding)
- Terminal-Bench 4.0: **34.9%** (AIIQ.org / Artificial Analysis — harder version)

Reasoning / knowledge:

- GPQA Diamond: **83.7%** (Mi.com official model card)
- Artificial Analysis Intelligence Index: **46.3** (meta.json)

Coding:

- DeepSWE v1.1: **71.9%** (Xiaomi.com official — just below Claude Opus 5 at 74.0%)
- ProgramBench: **26.5%** (Xiaomi official)

Long context:

- No RULER/MRCR retrieval scores published. 1M context supported with 128K max output.

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal-Bench 2.1 at 89.9% is near-frontier for agentic terminal tasks. Terminal-Bench 4.0 at 34.9% shows the gap on harder evaluations. Averaging the two reflects genuine mid-upper agentic capability. Capped by TB4 drop.
- **Reasoning: 72/100.** GPQA Diamond 83.7% is competitive but below the 88%+ frontier. AA Intelligence Index 46.3 is solid. Capped by trailing top proprietary reasoning models by ~7–8%.
- **Context window: 92/100.** 1M tokens per tier mapping (1M = 90–95). Large 128K output window is a practical advantage. Scored at 92.
- **Multimodal: 88/100.** Full omni-modal: text, image, video, audio input with text output. One of the most complete input stacks available in open-weights. Scored at 88.
- **Coding: 75/100.** DeepSWE 71.9% is strong for an open-weight model — just below frontier closed models. ProgramBench 26.5% indicates some gap on harder programming tasks. Capped by proprietary models' lead on DeepSWE.
- **Cost efficiency: 88/100.** $0.435/$0.87 per 1M is very affordable for a 1T-class omni-modal model. Cached input at $0.0036 is excellent. MIT open-weights for self-hosting.
- **Overall Score: 80/100.** (75 + 72 + 92 + 88 + 75) / 5 = 80.4 → 80. An exceptional open-weight omni-modal model combining full senses stack with frontier-competitive coding and strong 1M context at surprisingly low cost. Best for teams needing self-hostable omni-modal agent capability.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: Public internet research cross-referencing MindStudio, Eesel.ai, Xiaomi.com, Mi.com, AIIQ.org, Artificial Analysis, and BenchmarkList; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
