# Beam — findings by Claude Opus 4.6

- Source: Reflection AI / Beam (`beam-501b-a23b`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam (Beam-501B-A23B)
- **Short description:** Reflection AI's open-weight sparse MoE frontier model with 501B total / 23.4B active parameters, purpose-built for coding and long-horizon agentic workflows. Released under Apache 2.0 with BF16, FP8, and NVFP4 checkpoints.
- **Provider / access:** OpenCode Zen `opencode/beam` (free tier), self-hosted via Hugging Face. Chat Completions API.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early 2026.
- **IDs:** `opencode/beam` (free Zen tier); self-host Apache 2.0
- **Context window:** 1M native (256K served on beta; 128K max output). Verified via Reflection AI documentation and Hugging Face model card.
- **Modalities:** Text input/output only. No native image, audio, or video. Tool calls supported. JSON mode supported.
- **Pricing (as of 2026-10-19):** Free OpenCode Zen tier; Apache 2.0 open weights (self-host free); AA provider median ~$0.70/$2.10 per 1M.
- **Architecture:** 501.3B total parameters, 23.4B active (sparse MoE). Apache 2.0 open-weights. Checkpoints available in BF16, FP8, NVFP4 quantization formats.

### Raw benchmarks found

Agent / tool use:

- SWE Atlas Codebase QnA: **31.8%** (BF16, Hugging Face model card)
- Terminal-Bench 2.1: **80.1%** (BF16; FP8: 78.9%; NVFP4: 78.2%) (Reflection AI / Hugging Face)
- Tau3-Banking / Tau2-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (Hugging Face model card)
- HLE (No Tools): **36.0%** (Reflection AI report)
- AIME 2026: **97.7%** (BF16; FP8: 98.0%; NVFP4: 97.5%) (Reflection AI)
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **81.6%** (BF16; FP8: 80.2%; NVFP4: 80.7%) (Reflection AI / Hugging Face)
- SWE-bench Pro v1: **66.1%** (BF16) (Reflection AI)
- SWE-bench Pro v2-Hard: **76.5%** (BF16; FP8: 78.4%) (Reflection AI)
- SWE-bench Multilingual: **78.3%** (BF16) (Reflection AI)
- DeepSWE v1.1: **43.3%** (BF16) (Reflection AI)
- LiveCodeBench: no verified public score found

Long context:

- No long-context retrieval benchmarks (RULER/MRCR) reported. 1M native context claimed but served at 256K during beta.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 80.1% is strong for agentic terminal tasks. SWE Atlas QnA 31.8% is modest. No BFCL or Tau-bench scores. Capped by limited tool-use benchmark coverage beyond terminal-focused tasks.
- **Reasoning: 72/100.** GPQA Diamond 90.6% is near-frontier. HLE 36.0% is competitive. AIME 97.7% shows exceptional math reasoning. Capped by lack of broader reasoning suite and trailing top proprietary models on HLE.
- **Context window: 78/100.** 256K served context per tier mapping (256K = 78). Native 1M is claimed but not yet served at full length during beta. Scored at served capacity.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video input. Fixed at 15 per scoring methodology.
- **Coding: 78/100.** SWE-bench Verified 81.6% is near-frontier among open-weight models. SWE-bench Pro v1 66.1% and Multilingual 78.3% are very strong. DeepSWE 43.3% is moderate. Capped slightly by trailing top scaffolded systems on SWE-bench Pro v2.
- **Cost efficiency: 95/100.** Free Zen tier; Apache 2.0 open weights for self-hosting. Extremely cost-effective for a frontier-class coding model.
- **Overall Score: 61/100.** Mean of (62 + 72 + 78 + 15 + 78) / 5 = 61.0 → 61. An exceptional open-weight coding model capped by text-only modality. Best for developers needing frontier-class SWE performance at zero or near-zero cost.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing Reflection AI official reports, Hugging Face model card, DataCamp analysis, and MarktechPost coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
