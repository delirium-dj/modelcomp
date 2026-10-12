# MiMo v2.5 Pro — findings by Claude Opus 4.6

- Source: Xiaomi / MiMo-V2.5-Pro
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.5 Pro
- **Short description:** Xiaomi's flagship MoE model (Apr 2026). 1.02T total / 42B active. Designed for long-horizon agentic workflows with thousands of tool calls. Hybrid sliding-window + global attention for 1M context. MIT licensed. Deprecated in favor of V2.6.
- **Provider / access:** Xiaomi API (deprecated), OpenRouter, self-hosted. MIT license open weights.
- **Release / knowledge:** 2026-04-22 release. API deprecated; succeeded by V2.6.
- **IDs:** `xiaomi/mimo-v2.5-pro` (API deprecated)
- **Context window:** 1,000,000 tokens (1M).
- **Modalities:** Text in; text out; tool calls. Multi-token prediction modules.
- **Pricing (as of 2026-10-12):** Self-hosted $0 (MIT). API deprecated.
- **Architecture:** 1.02T total parameters, 42B active per token. Sparse MoE. Hybrid sliding-window + global attention. Multi-token prediction. MIT license.

### Raw benchmarks found

- Strong rankings on AA Intelligence Index, SWE-bench Pro, ClawEval (source: artificialanalysis.ai, mi.com)
- Competed with Claude Opus 4.6 and GPT-5.4 in coding/agentic tasks (source: youtube.com, decrypt.co)
- Specific numeric benchmarks not widely published externally

### Normalized scores (1–100)

- **Tool use: 82/100.** Designed for thousands of tool calls in long-horizon workflows. Strong ClawEval rankings. Full-stack app development capability. Missing Terminal-Bench standalone.
- **Reasoning: 80/100.** Competed with Opus 4.6 and GPT-5.4. 42B active params enables strong reasoning. Missing GPQA/HLE standalone scores.
- **Context window: 90/100.** 1M verified. Hybrid attention manages long-context cache pressure efficiently.
- **Multimodal: 15/100.** Text only in/out. No image, audio, or video. Text-only = 15.
- **Coding: 84/100.** Competed with frontier coding models. Strong SWE-bench Pro rankings. Long-horizon multi-step coding with high logical consistency.
- **Cost efficiency: 92/100.** MIT license. Self-hosted open weights. 42B active is manageable for inference clusters. Excellent value.
- **Overall Score: 70/100.** Mean of (82 + 80 + 90 + 15 + 84) / 5 = 70.2, rounded to 70. Strong text-only coding/agentic model severely constrained by lack of multimodal support. Now deprecated.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-12
- Method: Public internet research (mi.com, artificialanalysis.ai, openrouter.ai, wavespeed.ai, therundown.ai, atomic.chat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
