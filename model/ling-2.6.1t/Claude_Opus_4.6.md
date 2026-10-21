# Ling 2.6 1T — findings by Claude Opus 4.6

- Source: InclusionAI (Ant Group) / Ling 2.6 1T (`opencode/ling-2.6.1t`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 1T
- **Short description:** InclusionAI's 1T/63B-active MIT open-weights instruct MoE with 262K context for fast agents at scale. Achieves Tau2-Telecom 89.8% with 109.6 tok/s decode. The scale demonstrator that the 3.x generation refined.
- **Provider / access:** Free OpenRouter endpoint `inclusionai/ling-2.6-1t:free`. MIT open weights for self-host. Various paid providers.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `opencode/ling-2.6.1t` (free OpenRouter endpoint available)
- **Context window:** 262,144 total. Verified via meta.json.
- **Modalities:** Text input/output only. No image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-21):** Route-dependent: $0.075/$0.625 (BenchmarkList) or ~$0.30/$2.50 (AA) per 1M. Free OpenRouter endpoint. MIT weights for self-host.
- **Architecture:** ~1T total parameters, 63B active (MoE). Instruct-only tuning. MIT open-weights. Same scale as Ring-2.6-1T (InclusionAI family).

### Raw benchmarks found

Agent / tool use:

- Tau2-Telecom: **89.8%** (meta.json / InclusionAI report)
- Terminal-Bench 2.1: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- Note: Instruct-only tuning — not a reasoning model (no chain-of-thought)

Coding:

- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 262K context. No RULER/MRCR reported.

Throughput:

- Decode speed: **109.6 tok/s** (InclusionAI benchmark)

### Normalized scores (1–100)

- **Tool use: 55/100.** Tau2-Telecom 89.8% is strong domain-specific tool use. High throughput (109.6 tok/s) benefits iterative agent loops. Capped by narrow benchmark coverage and instruct-only (non-reasoning) design.
- **Reasoning: 40/100.** Instruct-only tuning — no chain-of-thought reasoning. At 63B active, factual knowledge is likely strong but deep reasoning is limited. Capped by lack of reasoning mode.
- **Context window: 78/100.** 262K context per tier mapping (~256K = 78).
- **Multimodal: 15/100.** Text-only model. Fixed at 15.
- **Coding: 42/100.** No published coding benchmarks. Instruct-only limits complex coding depth. At 63B active, basic code generation should be decent. Capped by zero coding data.
- **Cost efficiency: 92/100.** Free OpenRouter endpoint. MIT open weights. Paid routes at $0.075/$0.625 are very affordable for a 1T model.
- **Overall Score: 46/100.** Mean of (55 + 40 + 78 + 15 + 42) / 5 = 46.0 → 46. A massive-scale instruct model with excellent throughput for fast agent loops. Limited by instruct-only design (no reasoning) and text-only modality. Best for high-speed agentic workflows where throughput matters more than deep reasoning.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-21
- Method: Meta.json analysis, InclusionAI documentation, and Artificial Analysis data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
