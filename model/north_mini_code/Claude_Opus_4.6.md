# North Mini Code — findings by Claude Opus 4.6

- Source: Cohere Labs / North Mini Code (`opencode/north_mini_code`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere Labs' Apache-2.0 open-weight 30B/3B-active MoE research release for code generation. Achieves SWE-bench Verified 67.6% and GPQA 75.7% at zero cost. Free $0/$0 tier.
- **Provider / access:** Free tier `opencode/north_mini_code` ($0/$0).
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `opencode/north_mini_code`
- **Context window:** 256,000 tokens total (64,000 max output). Verified via meta.json.
- **Modalities:** Text input/output only. No image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-19):** Completely free tier ($0 input / $0 output). Apache-2.0 open weights.
- **Architecture:** 30B total parameters, ~3B active (MoE). Apache-2.0 license. Research release from Cohere Labs.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **75.7%** (meta.json / Cohere documentation)

Coding:

- SWE-bench Verified: **67.6%** (meta.json / Cohere documentation)
- LiveCodeBench: no verified public score found

Long context:

- 256K context. No RULER/MRCR retrieval benchmarks reported.

### Normalized scores (1–100)

- **Tool use: 38/100.** No published agentic benchmarks. As a 3B-active model, complex multi-step tool use is limited. Capped by active parameter count and zero agentic data.
- **Reasoning: 48/100.** GPQA Diamond 75.7% is impressive for 3B active parameters — well above what scale alone would predict. Capped by trailing frontier models by ~15% on GPQA and lack of broader reasoning benchmarks.
- **Context window: 78/100.** 256K context per tier mapping (256K = 78). Large 64K output window is a plus.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video. Fixed at 15.
- **Coding: 50/100.** SWE-bench Verified 67.6% is remarkable for 3B active parameters. Capped by absolute capability — trails frontier by ~15-20% on SWE-bench.
- **Cost efficiency: 100/100.** Completely free — $0/$0. Apache-2.0 open weights. Maximum efficiency.
- **Overall Score: 46/100.** Mean of (38 + 48 + 78 + 15 + 50) / 5 = 45.8 → 46. An impressive research release that punches above its weight on coding and reasoning for 3B active parameters. Capped by text-only modality and small active scale. Best for cost-sensitive coding tasks where free is mandatory.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Meta.json analysis and Cohere Labs documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
