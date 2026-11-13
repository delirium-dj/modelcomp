# Egg Alpha — findings by Claude Sonnet 4.6

- Source: Anonymous / Unverified (`unverified/egg-alpha`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Egg Alpha
- **Short description:** Anonymous stealth coding and reasoning model evaluated on ModelDial's private benchmark suite; notable frontend interaction and knowledge reasoning performance without any public architectural disclosure.
- **Provider / access:** Unverified anonymous provider — accessible via ModelDial (`modeldial.com/en/models/egg-alpha`)
- **Release / knowledge:** Stealth / alpha; evaluation recorded November 2026
- **IDs:** `unverified/egg-alpha`
- **Context window:** 128,000 tokens (estimated; pending official vendor disclosure)
- **Modalities:** Text in; text out
- **Pricing (as of 2026-11-13):** Unpriced / stealth slot — no public pricing table
- **Architecture:** Unknown; no published specification, parameter count, or training details

### Raw benchmarks found

Agent / tool use:

- ModelDial Backend Engineering: **65** (ModelDial private suite, November 2026)
- Terminal-Bench / Tau3-bench: no verified public score found

Reasoning / knowledge:

- ModelDial Knowledge & Reasoning: **85** (ModelDial private suite, November 2026)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- MMLU / MMLU-Pro: no verified public score found

Coding:

- ModelDial Frontend Interaction: **78** (ModelDial private suite, November 2026)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- HumanEval: no verified public score found

Long context:

- No long-context retrieval benchmark reported; context window estimated at 128 K

Visual / aesthetic:

- ModelDial Visual Aesthetics: **61** (ModelDial private suite, November 2026)
- ModelDial Maintainability: **51** (ModelDial private suite, November 2026)
- ModelDial Overall Score: **73.45** (rank 19 / 49, November 2026)

### Normalized scores (1–100)

- **Tool use: 54/100.** ModelDial Backend Engineering at 65 is the only tool/agent proxy available. No public harness results for Terminal-Bench, function calling, or standard agentic benchmarks. Anonymous provider limits independent validation.
- **Reasoning: 60/100.** ModelDial Knowledge & Reasoning at 85 is a strong domain-specific signal, but no public GPQA, HLE, or MMLU-Pro scores exist for independent corroboration. Score capped due to single-source, proprietary-only evidence.
- **Context window: 65/100.** Estimated 128 K context maps to the 128 K tier (score = 65). Unconfirmed — pending vendor disclosure.
- **Multimodal: 15/100.** Text-only modality declared in meta.json; no image, audio, or video capability reported.
- **Coding: 55/100.** ModelDial Frontend Interaction at 78 and Backend Engineering at 65 suggest solid coding competence; no public SWE-bench, LiveCodeBench, or HumanEval results available to benchmark independently.
- **Cost efficiency: 100/100.** Unpriced stealth slot — \$0 cost during evaluation period.
- **Overall Score: 50/100.** Mean of Tool use (54) + Reasoning (60) + Context window (65) + Multimodal (15) + Coding (55) = 249 / 5 = 49.8 ≈ 50. Interesting stealth model with solid ModelDial private scores but no independent benchmark verification; text-only modality significantly constrains multimodal utility.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ModelDial — Egg Alpha evaluation](https://modeldial.com/en/models/egg-alpha)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
