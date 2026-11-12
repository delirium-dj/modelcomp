# Fledge Alpha — findings by Claude Opus 4.6

- Source: Unidentified vendor / Fledge Alpha (`opencode/fledge-alpha`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha
- **Short description:** OpenCode Zen's unidentified-vendor free preview with 1M context for coding tests. Discontinued after achieving GPQA 92.3%. No successor announced.
- **Provider / access:** OpenCode Zen `opencode/fledge-alpha` (free preview — discontinued).
- **Release / knowledge:** 2026; discontinued.
- **IDs:** `opencode/fledge-alpha`
- **Context window:** 1,048,576 (1M) total; 131,072 max output. Verified via meta.json.
- **Modalities:** Text + image input; text output. No audio or video.
- **Pricing (as of 2026-10-20):** Free OpenCode Zen preview ($0/$0). Discontinued — endpoint may no longer be available.
- **Architecture:** Unknown. Unidentified vendor. Discontinued after preview period.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (meta.json — reported before discontinuation)

Coding:

- SWE-bench Verified: no verified public score found

Long context:

- 1M context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 40/100.** No published agentic benchmarks. Capped by discontinued status and zero tool-use data.
- **Reasoning: 72/100.** GPQA Diamond 92.3% is near-frontier — one of the highest reported scores. However, provenance is unclear (unidentified vendor). Capped by single benchmark and discontinued status.
- **Context window: 92/100.** 1M context per tier mapping (1M = 90-95). Scored at 92.
- **Multimodal: 55/100.** Text + image input. Scored at 55.
- **Coding: 38/100.** No published coding benchmarks. Discontinued before coding evaluation. Scored conservatively.
- **Cost efficiency: 100/100.** Free preview — $0. Now discontinued.
- **Overall Score: 59/100.** Mean of (40 + 72 + 92 + 55 + 38) / 5 = 59.4 → 59. A discontinued stealth model that achieved remarkable GPQA Diamond 92.3%. Limited by discontinued status and narrow benchmark coverage. Historical interest only.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `Claude_Opus_4.6.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Claude_Opus_4.6.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Fledge Alpha — findings by Claude Opus 4.6

- Source: OpenCode / Thinking Machines (`fledge-alpha`)
- Archived date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Fledge Alpha
- **Short description:** A routing-based AI model appearing on the OpenCode platform around October 1, 2026. Intelligently directs queries to different underlying models (e.g., DeepSeek V4.1, Kimi, others) based on the prompt. Linked to Thinking Machines / "Inkling" project infrastructure.
- **Provider / access:** OpenCode Zen (free/trial model); routing-based architecture.
- **Release / knowledge:** ~2026-10-01 release (trial/feedback phase); knowledge cutoff dependent on underlying routed models.
- **IDs:** `opencode/fledge-alpha` (estimated)
- **Context window:** Dependent on underlying routed models; likely up to 1M tokens based on the models it routes to.
- **Modalities:** Dependent on routed models; text in/out confirmed. Vision capability varies by routing.
- **Pricing (as of 2026-10-03):** Free/trial during feedback phase. No standard pricing confirmed.
- **Architecture:** Router/orchestrator layer directing queries to multiple underlying models (DeepSeek V4.1, Kimi, others). Not a single foundation model. Linked to Thinking Machines (U.S.-based).

## Raw benchmarks found

Agent / tool use:

- No standardized benchmarks applicable — performance depends on which model is routed to per query.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found.
- Performance varies per routed model; inconsistent behavior observed by users.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- Performance inherits from underlying models (DeepSeek V4.1, Kimi — both strong coders).
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.

Long context:

- Inherited from underlying models— likely up to 1M tokens. No specific MRCR / RULER / GraphWalks score published.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
