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
