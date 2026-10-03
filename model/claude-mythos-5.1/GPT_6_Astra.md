# Claude Mythos 5.1 — findings by GPT 6 Astra

- Source: Anthropic / Claude Mythos 5.1
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Restricted-access counterpart to Fable 5.1; same underlying model, distinct safeguards and access conditions. Separate API identity is preserved.
- **Provider / access:** Project Glasswing invitation; Claude API and partner account teams.
- **Release / knowledge:** September 2026; June 2026 knowledge cutoff.
- **IDs:** `claude-mythos-5-1`; no verified Zen Free ID.
- **Context window:** 1M; 128K output.
- **Modalities:** Fable-equivalent specifications; text and image input, text output, adaptive reasoning and tools.
- **Pricing (as of 2026-10-03):** $10 input / $50 output per million tokens; cache rate not independently verified here.
- **Architecture:** Proprietary; same base model as Fable 5.1. [Documentation](https://platform.claude.com/docs/pt-BR/models/mythos-5-1/overview), [Anthropic](https://www.anthropic.com/claude/mythos).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: 60.9%, explicitly labeled Mythos 5.1. Other exact-ID tool suites: no verified public score found.

Reasoning / knowledge:

- No verified public score found for exact-ID GPQA / HLE / CritPt / Intelligence Index / Omniscience.
- Provisional shared-model proxy: Fable 5.1 HLE 60.9% without tools and 65.0% with tools; these are not Mythos measurements.

Coding:

- Terminal-Bench 4.0 60.9% is the verified exact-ID coding evidence. SWE-bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found for Mythos 5.1.

Long context:

- No verified public retrieval score found.

Benchmark evidence and explicit shared-model relationship: [Anthropic launch](https://www.anthropic.com/claude-fable-and-mythos-5-1). Safeguard differences make Fable a qualified proxy, not an interchangeable benchmark row.

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong exact-ID terminal result; narrow independently observable tool coverage limits confidence.
- **Reasoning: 92/100.** Provisional interpretation from the documented shared model and Fable HLE; missing direct Mythos evaluations caps certainty.
- **Context window: 95/100.** Documented 1M window, with retrieval unverified.
- **Multimodal: 70/100.** Shared image-input specification; no verified audio/video capability.
- **Coding: 94/100.** Strong terminal performance; repository and scientific coding remain unverified for this access configuration.
- **Cost efficiency: 30/100.** $10/$50 matches the methodology's premium-price anchor.
- **Overall Score: 88/100.** Half-up mean (90 + 92 + 95 + 70 + 94) / 5 = 88.2; provisional overall with limited exact-ID evidence and restricted availability.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Fresh independent public research; proxy evidence explicitly labeled; normalized scores are interpretations.
- Future sources: add a separate signed report using these headings.
