# Gemini 3.8 Live — findings by Big Pickle

- Source: Google (`gemini-3.8-live`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google's low-latency real-time voice agent model, built for conversational dialogue, proactive audio announcements, and interleaved reasoning in live agent deployments; successor to the `gemini-3.1-flash-live-preview`.
- **Provider / access:** Google Gemini API (Gemini Developer API / Vertex AI), `gemini-3.8-live`. Available via the Generative Language SDK live API channel.
- **Release / knowledge:** September 2026 stable release (ai.google.dev model catalog, 2026-09), replacing the `gemini-3.1-flash-live-preview` tier as the stable low-latency voice model.
- **IDs:** `gemini-3.8-live` (proprietary; no open weights, `open_weights = false`)
- **Context window:** 131,072 input tokens (128K); max output 65,536 tokens.
- **Modalities:** text, image, audio, video input; text and audio output. Audio generation supported; image generation not supported.
- **Pricing (as of 2026-09-20):** no verified public list price found in research; treat as unconfirmed pending Google's official card.
- **Architecture:** Proprietary, undisclosed (enabled reasoning model with interleaved reasoning traces).

### Raw benchmarks found

Agent / tool use:

- Function calling: **Supported** (including async function calling for low-latency agent loops).
- Search grounding: **Supported**.
- Agentic / tool benchmarks (Terminal-Bench, Finance Agent, etc.): **no verified public score found**.

Reasoning / knowledge:

- Thinking mode: **Supported** (interleaved reasoning between audio turns).
- Caching: Not supported. Code execution: Not supported. File search: Not supported. Structured outputs: Not supported.
- Knowledge benchmarks (GPQA, MMLU-Pro, etc.): **no verified public score found**.

Coding:

- Coding-oriented tooling (code execution, structured outputs): **Not supported** on this model.
- Coding benchmarks (SWE-bench, LiveCodeBench, etc.): **no verified public score found**.

Long context:

- Input window 131,072 with 65,536 output; MRCR-style retrieval: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 76/100.** Function calling, search grounding, and async function calling are confirmed live-agent capabilities, but no agentic benchmark results (Terminal-Bench, Finance Agent) are published for this model, so the score rests on capability support rather than measured performance.
- **Reasoning: 76/100.** Interleaved thinking in live dialogue is a confirmed strength for real-time reasoning, yet no GPQA/MMLU-Pro numbers are published; score is a capability-based estimate.
- **Context window: 82/100.** A solid 128K window with 64K output is well above the low end but below the 1M top tier of the Flash lineage.
- **Multimodal: 72/100.** Native text/image/audio/video input with audio output and proactive announcements makes it genuinely omni-modal; no image generation keeps it short of a top score.
- **Coding: 52/100.** Coding is the clear weak spot: no code execution, no structured outputs, and no published coding benchmarks — this is a conversational live agent, not a coding workhorse.
- **Cost efficiency: 72/100.** No verified list price; positioned as the low-latency stable voice tier. Score is provisional pending Google's official pricing.
- **Overall Score: 72/100.** Mean of the five quality dims (76+76+82+72+52)/5 = 71.6. A specialized real-time voice agent with strong live-tool support; budget-scored because almost no public benchmark data exists yet.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (ai.google.dev Gemini API model docs, deepmind model cards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.