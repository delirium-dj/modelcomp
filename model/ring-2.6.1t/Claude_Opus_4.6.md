# Ring-2.6-1T — findings by Claude Opus 4.6

- Source: InclusionAI / Ring-2.6-1T (`opencode/ring-2.6.1t`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** InclusionAI's open-weights trillion-parameter reasoning MoE with 1T total / 63B active parameters. Features adjustable Reasoning Effort (high/xhigh) for dynamically scaling computational depth. Built for agent workflows, complex coding, and long-horizon execution.
- **Provider / access:** Free OpenRouter endpoint at $0.00/1M. AA ~$0.30/$2.50 per 1M. MIT open weights (self-hosting needs ~32 GPUs). No Zen Free ID.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `opencode/ring-2.6.1t` (no Free ID on Zen)
- **Context window:** 128K native (256K with YaRN); 262,144 served (per Artificial Analysis). Verified via meta.json and model documentation.
- **Modalities:** Text input/output only. No image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-19):** Free OpenRouter endpoint $0.00/1M. AA ~$0.30/$2.50 per 1M. MIT open weights (self-hosting requires ~32 GPUs — vendor SGLang example: 4 nodes × 8 GPUs).
- **Architecture:** ~1T total parameters, 63B active (MoE). Adjustable Reasoning Effort mechanism (high/xhigh). MIT open-weights license. Requires significant compute for self-hosting.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Telecom): **92.4%** (LLMWaves evaluation)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.27%** (xhigh setting; ModelScope) / **85.7%** (independent aggregate; LLMWaves)
- ARC-AGI-V2: **66.18** (xhigh setting; ModelScope)
- AIME 2026: **95.83** (ModelScope)
- AA-LCR: **67.3%** (LLMWaves)

Coding:

- SWE-bench Verified: no verified public score found
- SciCode: mentioned as strong but no exact number found
- LiveCodeBench: no verified public score found

Long context:

- 128K native / 256K with YaRN. AA-LCR at 67.3% suggests decent but not frontier long-context retrieval.

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-bench Telecom 92.4% is excellent on that specific domain. No broader agentic benchmarks (Terminal-Bench, BFCL). Adjustable reasoning effort is useful for complex tool chains. Capped by narrow agentic benchmark coverage.
- **Reasoning: 72/100.** GPQA Diamond 88.27% (xhigh) is near-frontier. AIME 95.83 shows excellent math. ARC-AGI-V2 66.18 is competitive. Capped by the high compute requirement and trailing top models on HLE.
- **Context window: 78/100.** 262K served context per tier mapping (~256K = 78). Native is 128K but extends to 256K with YaRN.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video. Fixed at 15.
- **Coding: 48/100.** No SWE-bench or LiveCodeBench scores published. SciCode mentioned but unverified. As a reasoning model with 63B active, coding is likely decent but unquantified. Capped by zero published coding benchmarks.
- **Cost efficiency: 88/100.** Free OpenRouter endpoint. MIT open weights. Paid endpoints at $0.30/$2.50 are moderate. Self-hosting requires 32 GPUs which limits accessibility.
- **Overall Score: 54/100.** Mean of (55 + 72 + 78 + 15 + 48) / 5 = 53.6 → 54. A powerful reasoning model with excellent GPQA and math scores, limited by text-only modality and lack of coding benchmarks. Best for reasoning-heavy tasks where adjustable compute depth is valuable.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing Kilo.ai, ZenMux, ModelScope, and LLMWaves evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
