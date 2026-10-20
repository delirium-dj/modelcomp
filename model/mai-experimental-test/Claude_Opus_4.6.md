# Mai Experimental Test — findings by Claude Opus 4.6

- Source: OpenCode Zen / Mai Experimental Test (`opencode/mai-experimental-test`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mai Experimental Test
- **Short description:** OpenCode Zen's experimental sandbox model with 128K context for testing pipelines. Exploratory status with no verified benchmarks. Identity and architecture undisclosed.
- **Provider / access:** OpenCode Zen `opencode/mai-experimental-test`. Experimental tier.
- **Release / knowledge:** 2026; exploratory/experimental status.
- **IDs:** `opencode/mai-experimental-test`
- **Context window:** 128,000 tokens total. Verified via meta.json.
- **Modalities:** Text input/output only. No image, audio, or video.
- **Pricing (as of 2026-10-20):** Experimental tier pricing (details not published).
- **Architecture:** Unknown. Experimental sandbox model — architecture, parameters, and provenance not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- No verified public benchmarks found — experimental sandbox model

Reasoning / knowledge:

- No verified public benchmarks found

Coding:

- No verified public benchmarks found

Long context:

- 128K stated window. No retrieval benchmarks reported.

### Normalized scores (1–100)

- **Tool use: 25/100.** No benchmarks. Experimental status suggests untested or early-stage capabilities. Scored conservatively.
- **Reasoning: 25/100.** No benchmarks. Unknown architecture makes capability estimation impossible. Scored conservatively.
- **Context window: 65/100.** 128K context per tier mapping (128K = 65).
- **Multimodal: 15/100.** Text-only model. Fixed at 15.
- **Coding: 25/100.** No benchmarks. Experimental sandbox — not positioned for production coding tasks. Scored conservatively.
- **Cost efficiency: 50/100.** Experimental tier pricing unknown. Scored at midpoint.
- **Overall Score: 31/100.** Mean of (25 + 25 + 65 + 15 + 25) / 5 = 31.0 → 31. An experimental sandbox model with no verified capabilities. Not recommended for production use. Exists for pipeline testing and exploration.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis only — no public benchmarks or documentation found; scores are conservative estimates, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
