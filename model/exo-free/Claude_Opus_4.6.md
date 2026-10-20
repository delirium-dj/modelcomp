# Exo Free — findings by Claude Opus 4.6

- Source: Unknown lab / Exo Free (`opencode/exo-free`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo Free
- **Short description:** OpenCode Zen's anonymous free route with 1M context / 131K output for feedback-period experimentation. Lab unknown, no benchmarks published. Inputs may be used for training.
- **Provider / access:** OpenCode Zen `opencode/exo-free` (free limited-time route).
- **Release / knowledge:** 2026; feedback period.
- **IDs:** `opencode/exo-free`
- **Context window:** 1M total (1,048,576 input / 131,072 output). Verified via meta.json.
- **Modalities:** Text + image input; text output. No audio or video.
- **Pricing (as of 2026-10-20):** Free Zen tier (limited-time $0 in/out/cached). Inputs may train the model. Expect 429s and "endpoint unavailable" under load.
- **Architecture:** Unknown. Anonymous model — vendor, parameters, and architecture undisclosed.

### Raw benchmarks found

Agent / tool use:

- No verified public benchmarks found — anonymous model

Reasoning / knowledge:

- No verified public benchmarks found

Coding:

- No verified public benchmarks found

Long context:

- 1M context claimed. No retrieval benchmarks reported.

### Normalized scores (1–100)

- **Tool use: 32/100.** No benchmarks. Anonymous model. Scored conservatively.
- **Reasoning: 32/100.** No benchmarks. Scored conservatively.
- **Context window: 92/100.** 1M context per tier mapping (1M = 90-95). Scored at 92.
- **Multimodal: 55/100.** Text + image input. No audio/video. Scored at 55 for text+image.
- **Coding: 30/100.** No benchmarks. Experimental/feedback model. Scored conservatively.
- **Cost efficiency: 100/100.** Free — $0. Data privacy caveat (inputs may train the model).
- **Overall Score: 48/100.** Mean of (32 + 32 + 92 + 55 + 30) / 5 = 48.2 → 48. An anonymous free model with 1M context and image support. Completely unverified capabilities. Data privacy concerns. Use for experimentation only.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis only; scores are conservative estimates.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
