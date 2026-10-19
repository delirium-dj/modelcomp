# Pixel Canary — findings by Claude Opus 4.6

- Source: Callstack / Pixel Canary (Apex) (`opencode/pixel_canary`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (Callstack Apex)
- **Short description:** Callstack's stealth coding model (revealed from Pixel Canary alias as their Apex model) with 262K context, purpose-built for Next.js/React builds. Achieved 28/31 baseline and 30/31 with docs on Vercel's 31-task frontend suite. Free preview ended.
- **Provider / access:** Vercel AI Gateway (free stealth period; now ended) `opencode/pixel_canary`.
- **Release / knowledge:** Mid-2026 stealth release; free preview ended.
- **IDs:** `opencode/pixel_canary`
- **Context window:** 262,144 tokens total (131,072 max output). Gateway-declared.
- **Modalities:** Text input/output only. No image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-19):** $0 — was free while in stealth. Free preview has ended; current pricing unknown.
- **Architecture:** Proprietary. Callstack's Apex coding model. Architecture details not publicly disclosed. Specialized for frontend (Next.js/React) code generation.

### Raw benchmarks found

Agent / tool use:

- Vercel 31-task frontend suite: **28/31 baseline, 30/31 with docs** (Callstack / Vercel evaluation)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- MMLU: no verified public score found

Coding:

- Vercel 31-task suite: **28/31 (90.3%) baseline; 30/31 (96.8%) with docs** (Callstack report)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 262K context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 55/100.** Vercel's 31-task suite shows strong frontend agent performance (28-30/31). Capped by narrow evaluation scope (Next.js/React specific) and lack of general agentic benchmarks.
- **Reasoning: 40/100.** No published reasoning benchmarks. As a specialized coding model, reasoning likely focused on code logic rather than general knowledge. Capped by zero benchmark data.
- **Context window: 78/100.** 262K context per tier mapping (~256K = 78). Large output window (131K).
- **Multimodal: 15/100.** Text-only model. No image, audio, or video. Fixed at 15.
- **Coding: 62/100.** 28/31 (90.3%) baseline on Vercel's frontend suite is impressive. 30/31 with docs shows excellent doc-augmented coding. However, this is a narrow Next.js/React evaluation — general coding capability is unknown. Capped by narrow benchmark scope.
- **Cost efficiency: 70/100.** Was free during stealth; current pricing unknown. Stealth preview has ended. Scored conservatively as pricing is uncertain.
- **Overall Score: 50/100.** Mean of (55 + 40 + 78 + 15 + 62) / 5 = 50.0 → 50. A specialized frontend coding model excelling at Next.js/React tasks. Limited by text-only modality, narrow evaluation scope, and uncertain availability after stealth period ended.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Meta.json analysis and Callstack/Vercel documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
