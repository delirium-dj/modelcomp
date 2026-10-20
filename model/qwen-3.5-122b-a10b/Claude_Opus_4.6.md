# Qwen 3.5 122B-A10B — findings by Claude Opus 4.6

- Source: Alibaba / Qwen 3.5 122B-A10B (`opencode/qwen-3.5-122b-a10b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B-A10B
- **Short description:** Alibaba's 122B total / 10B active open-weights MoE for vision-language reasoning and tool-use agents. Features Gated Delta Networks with sparse MoE and native early-fusion multimodal. The "sweet spot" MoE of the Qwen 3.5 family. Apache 2.0.
- **Provider / access:** OpenRouter, SiliconFlow, self-hosted `opencode/qwen-3.5-122b-a10b`. No Zen Free ID.
- **Release / knowledge:** Early 2026 release; knowledge cutoff approximately late 2025.
- **IDs:** `opencode/qwen-3.5-122b-a10b` (no Free ID on Zen)
- **Context window:** 262,144 total; 65,536 max output. Verified via meta.json and Hugging Face.
- **Modalities:** Text, image, video input; text output. Native early-fusion multimodal. Tool calls supported.
- **Pricing (as of 2026-10-20):** ~$0.26/$2.08 per 1M (OpenRouter/SiliconFlow). Apache 2.0 self-host $0.
- **Architecture:** 122B total parameters, 10B active (MoE). Gated Delta Networks + sparse MoE. Native early-fusion multimodal. Apache 2.0 open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.5–85.7%** (APXML / OpenRouter evaluations)
- MMLU-Pro: competitive with GPT-5-mini variants (community comparisons)

Coding:

- SWE-bench Verified: **72.0–72.4%** (APXML / DeepInfra evaluations)
- LiveCodeBench: no verified public score found

Long context:

- 262K native context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 48/100.** No published agentic benchmarks. The Qwen 3.5 family supports tool-calling but this variant lacks specific evaluation data. Capped by zero agentic benchmarks.
- **Reasoning: 62/100.** GPQA Diamond 85.5–85.7% is competitive mid-upper tier. Strong graduate-level reasoning. Capped by trailing frontier models (~90%+).
- **Context window: 78/100.** 262K context per tier mapping (~256K = 78).
- **Multimodal: 68/100.** Text + image + video input with native early-fusion. No audio input. Scored at 68 for strong multimodal input coverage.
- **Coding: 58/100.** SWE-bench Verified 72.0–72.4% is solid for an open-weight mid-tier MoE. Capped by trailing top models by ~10%.
- **Cost efficiency: 85/100.** ~$0.26/$2.08 per 1M is affordable. Apache 2.0 for self-hosting. Very good value.
- **Overall Score: 63/100.** Mean of (48 + 62 + 78 + 68 + 58) / 5 = 62.8 → 63. The best-balanced Qwen 3.5 MoE variant — combining multimodal vision-language with strong reasoning and coding at reasonable cost. Best for teams needing multimodal agentic capabilities from open weights.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Public internet research cross-referencing Hugging Face, APXML, OpenRouter, DeepInfra, and Qwen documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
