# Ling 2.6 Flash — findings by Claude Opus 4.6

- Source: InclusionAI (Ant Group) / Ling 2.6 Flash (`opencode/ling-2.6-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's 107B/7.4B-active MIT open-weights non-reasoning MoE with 262K context for tool-calling agents. Deprecated — succeeded by Ling 3.0 Flash. The Flash MoE that made cheap open-weights agent loops routine.
- **Provider / access:** Self-hosted via Hugging Face `opencode/ling-2.6-flash`. MIT open weights.
- **Release / knowledge:** Early-mid 2026 release; deprecated, succeeded by Ling 3.0 Flash.
- **IDs:** `opencode/ling-2.6-flash`
- **Context window:** 262,144 total (per Artificial Analysis). Verified via meta.json.
- **Modalities:** Text input/output only. No image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-21):** Open weights (MIT) — free self-host. Various hosted providers.
- **Architecture:** 107B total parameters, 7.4B active (MoE). Non-reasoning variant (no chain-of-thought). MIT open-weights. Deprecated.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for the 2.6 Flash specifically
- Note: Designed as a tool-calling specialist — Ling 3.0 Flash is the direct successor with published benchmarks

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- Note: Non-reasoning model — does not perform chain-of-thought

Coding:

- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 262K native context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 45/100.** Designed as a tool-calling specialist. No published benchmarks, but successor Ling 3.0 Flash suggests this was a capable tool-use model. Capped by non-reasoning and deprecated status.
- **Reasoning: 30/100.** Explicitly a non-reasoning model — no chain-of-thought capability. Capped by architectural decision to omit reasoning.
- **Context window: 78/100.** 262K context per tier mapping (~256K = 78).
- **Multimodal: 15/100.** Text-only model. Fixed at 15.
- **Coding: 38/100.** No published coding benchmarks. Non-reasoning limits complex code generation depth. Capped by deprecated status and zero data.
- **Cost efficiency: 100/100.** MIT open weights — free self-host. Maximum efficiency.
- **Overall Score: 41/100.** Mean of (45 + 30 + 78 + 15 + 38) / 5 = 41.2 → 41. A deprecated non-reasoning tool-calling model. Users should upgrade to Ling 3.0 Flash which adds reasoning and has published benchmarks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-21
- Method: Meta.json analysis and InclusionAI documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
