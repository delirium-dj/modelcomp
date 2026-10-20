# Big Pickle (GLM 4.6) — findings by Claude Opus 4.6

- Source: Vendor-unknown / Big Pickle (GLM 4.6) (`opencode/big-pickle`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM 4.6)
- **Short description:** Vendor-unknown stealth reasoning model on OpenCode Zen for codebase Q&A. Free tier with 200K context / 32K output. Only verified score is SWE Atlas 50.8%. Text-only.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (free stealth tier).
- **Release / knowledge:** 2026; stealth promotional tier.
- **IDs:** `opencode/big-pickle`
- **Context window:** 200,000 total (32,000 max output). Verified via meta.json.
- **Modalities:** Text input/output only. No image, audio, or video.
- **Pricing (as of 2026-10-20):** Free Zen stealth tier ($0). No rate card. No published end date. Paid equivalent GLM-4.6 ~$0.60/$2.20.
- **Architecture:** Likely related to GLM-4.6 (per naming). Proprietary. Architecture details undisclosed.

### Raw benchmarks found

Agent / tool use:

- SWE Atlas Codebase QnA: **50.8%** (meta.json — only verified score)
- Terminal-Bench 2.1: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- MMLU: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- SWE Atlas QnA: **50.8%** (as above, coding-adjacent)

Long context:

- 200K context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 42/100.** SWE Atlas QnA 50.8% is decent for codebase understanding. No broader agentic benchmarks. Capped by limited benchmark coverage.
- **Reasoning: 40/100.** No published reasoning benchmarks. Stealth model with unknown capabilities. Scored conservatively.
- **Context window: 75/100.** 200K context per tier mapping (200K = 75).
- **Multimodal: 15/100.** Text-only model. Fixed at 15.
- **Coding: 42/100.** SWE Atlas QnA 50.8% shows decent codebase comprehension. No SWE-bench score. Capped by no coding generation benchmarks.
- **Cost efficiency: 100/100.** Free stealth tier — $0 cost.
- **Overall Score: 43/100.** Mean of (42 + 40 + 75 + 15 + 42) / 5 = 42.8 → 43. A free stealth model with decent codebase Q&A capability. Limited by text-only modality and minimal benchmark data. Best for free codebase understanding tasks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
