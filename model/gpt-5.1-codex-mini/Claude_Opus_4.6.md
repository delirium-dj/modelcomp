# GPT-5.1 Codex Mini — findings by Claude Opus 4.6

- Source: OpenAI / GPT-5.1 Codex Mini (`gpt-5.1-codex-mini`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** OpenAI's cost-optimized coding agent model from the GPT-5.1 family, designed for rapid execution, lightweight edits, and high-volume background tasks without sacrificing core coding logic. Scaffolded model.
- **Provider / access:** OpenAI API, Azure `opencode/gpt-5.1-codex-mini`. Chat Completions / Responses API.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `opencode/gpt-5.1-codex-mini`
- **Context window:** 400,000 tokens (400K). Verified via PricePerToken and OpenAI documentation.
- **Modalities:** Text input/output. Scaffolded agent mode. No native image/audio/video input. Tool calls and JSON mode supported.
- **Pricing (as of 2026-10-19):** $0.25 per 1M input / $2.00 per 1M output / $0.03 per 1M cached input.
- **Architecture:** Proprietary. Smaller, cost-optimized variant of the GPT-5.1 family. Scaffolded — runs within Codex agent infrastructure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for Mini variant
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Expert-level QA): **81.3%** (77th percentile) (PricePerToken benchmark index)
- MMLU Pro: **82.0%** (76th percentile) (PricePerToken)
- Math: **91.7** (94th percentile) (PricePerToken)

Coding:

- SWE-bench Verified: no verified public score found specific to Mini variant
- LiveCodeBench: no verified public score found
- Coding/Agentic Intelligence Index: **highly competitive** against general-purpose mini models (OpenAI qualitative)

Long context:

- 400K stated window. No RULER/MRCR retrieval benchmarks reported.

### Normalized scores (1–100)

- **Tool use: 52/100.** Scaffolded agent with tool-calling support but optimized for lightweight/fast tasks rather than deep multi-step agentic loops. No published agentic benchmarks. Capped by the cost-optimized design prioritizing speed over depth.
- **Reasoning: 58/100.** GPQA 81.3% and MMLU Pro 82.0% are solid mid-tier. Math 91.7 is strong. Capped by being the smaller variant — trailing Max and frontier models on harder reasoning tasks.
- **Context window: 82/100.** 400K context, same as Max variant. Scored at 82 for the raw 400K window.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video input. Fixed at 15.
- **Coding: 55/100.** As the Mini variant, it handles lightweight edits and auto-completions well but lacks published SWE-bench scores. Estimated behind Max significantly. Capped by cost-optimization trade-offs and no concrete benchmark data.
- **Cost efficiency: 78/100.** $0.25/$2.00 per 1M is very competitive for a GPT-5.1 family coding model. Cached input at $0.03 makes high-volume use affordable.
- **Overall Score: 52/100.** Mean of (52 + 58 + 82 + 15 + 55) / 5 = 52.4 → 52. A budget-friendly coding agent with decent reasoning, limited by text-only modality and being the lighter variant. Best for high-volume, cost-sensitive coding automation tasks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing OpenAI documentation, PricePerToken benchmark indices, and LLM API pricing data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
