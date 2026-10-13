# Exo Free — findings by MiMo 2.6_Flash

- Source: OpenCode Zen anonymous free route (`exo-free` / `opencode/exo-free`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo Free
- **Short description:** OpenCode Zen's anonymous free model route for feedback-period experimentation. Lab unknown, no benchmarks published — similar cloak/stealth pattern to OpenRouter's Owl/Space Bunny Alpha models. 1M context / 131K output free tier; inputs may train the model. Expect rate limits (429s / endpoint unavailable under load).
- **Provider / access:** OpenCode Zen (`opencode/exo-free`); free limited-time route with no stated end date; feedback-collection cloak.
- **Release / knowledge:** Not disclosed. Feedback-period model (cloak pattern).
- **IDs:** `opencode/exo-free` (OpenCode Zen).
- **Context window:** 1,048,576 tokens (1M) in; 131,072 tokens (131K) max out.
- **Modalities:** text + image in; text out. Lab/architecture undisclosed.
- **Pricing (as of 2026-10-13):** Free — $0 input / $0 output / $0 cached (limited-time); inputs may be used to improve the model.
- **Architecture:** Undisclosed (anonymous free route).

### Raw benchmarks found

- **No public benchmark figures found** in fresh research — model is a cloak for feedback collection; no SWE-bench / AIME / GPQA / LiveCodeBench / agent-suite scores published by the provider or third parties in reviewed sources.
- No independent AA / BenchLM / Vals listings found for this slug.

### Normalized scores (1–100)

- **Tool use: 55/100.** Free 1M-context multimodal cloak usable for experimentation; no agentic benchmark evidence. Capped by total opacity on tool-calling reliability and lab identity.
- **Reasoning: 50/100.** No public math/science/knowledge benchmarks; cloak status means reasoning depth is unverifiable. Capped at unverified midpoint.
- **Context window: 90/100.** 1M input / 131K output is top-tier window size for a free route. Capped by no long-context retrieval measurements and free-tier rate limits under load.
- **Multimodal: 55/100.** Text + image input (unlike many text-only free cloaks). Capped by no audio/video and no vision benchmark figures.
- **Coding: 50/100.** No SWE-bench / LiveCodeBench public numbers; free cloak usable for code experiments but unverifiable for production coding. Capped at unverified midpoint.
- **Cost efficiency: 100/100.** Completely free ($0 in/out/cached) with 1M context — maximum cost efficiency while cloak lasts. Capped only by rate limits / training-data tradeoffs (not scored down).
- **Overall Score: 60/100.** Mean of (55 + 50 + 90 + 55 + 50) / 5 = 60.0 → **60**. Best-fit recommendation: free 1M-context multimodal cloak worth trying for document/image-heavy experiments where cost is zero and opacity is acceptable; do not rely on it for graded STEM reasoning or audited coding without independent verification.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research + local `model/exo-free/meta.json` for identity; scores are normalized 1–100 interpretations, not official vendor scores. No public benchmarks found.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
