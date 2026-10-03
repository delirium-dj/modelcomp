# Gemini 3.1 Pro — findings by GPT 6 Astra

- Source: Google DeepMind / Gemini 3.1 Pro
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Gemini 3.1 Pro Preview
- **Short description:** Multimodal reasoning model for scientific and agentic work; evaluated at high thinking.
- **Provider / access:** Google Gemini API, native generation interface.
- **Release / knowledge:** February 2026; cutoff not verified.
- **IDs:** `gemini-3.1-pro-preview`; customtools endpoint is an alternative configuration. Zen Free ID unverified.
- **Context window:** 1,048,576 input and 65,536 output tokens.
- **Modalities:** Text/image/video/audio/PDF input, text output; tools, structured output and thinking supported.
- **Pricing (as of 2026-10-03):** Input/output/cache per million $2/$12/$0.20 for prompts up to 200K, $4/$18/$0.40 above; storage and grounding billed separately. No API free tier.
- **Architecture:** Proprietary, parameter count unverified.

Specifications: [Google API](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview); prices: [Google pricing](https://ai.google.dev/gemini-api/docs/pricing?hl=en).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: 68.5%, Terminus-2; GDPval-AA: 1317 Elo; tau2 retail/telecom: 90.8%/99.3%; MCP Atlas: 69.2%.
- Terminal-Bench 2.1 / Claw-Eval / ClawProBench / Toolathon: no verified public score found in the launch card.

Reasoning / knowledge:

- GPQA: 94.3%; HLE: 44.4% without tools, 51.4% with search/code; ARC-AGI-2: 77.1%.
- LCR / CritPt / Intelligence Index / Omniscience: no verified public score found in the launch card.

Coding:

- SWE-bench Verified: 80.6%; SWE-bench Pro: 54.2%, single attempt; LiveCodeBench Pro: 2887 Elo; SciCode: 59%.
- Vibe Code Bench / DeepSWE: no verified public score found in the launch card.

Long context:

- MRCR v2 eight-needle: 84.9% at 128K average, 26.3% at 1M pointwise.

Benchmark source: [DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-1-pro), February 2026 vendor evaluation; harnesses and context lengths differ.

### Normalized scores (1–100)

- **Tool use: 84/100.** Broad tool evaluations support capability; terminal and GDPval performance fall short of frontier anchors.
- **Reasoning: 94/100.** Strong GPQA, HLE and abstract reasoning; long-context retrieval weakness limits confidence.
- **Context window: 95/100.** Capacity reaches 1M; poor eight-needle retrieval prevents any bonus above the base tier.
- **Multimodal: 95/100.** Broad input coverage including audio; output is text only.
- **Coding: 89/100.** Strong verified repository and scientific coding results; SWE-Pro remains far from solved.
- **Cost efficiency: 68/100.** Moderate paid pricing with higher long-prompt costs; no free API assumption.
- **Overall Score: 91/100.** Half-up mean (84 + 94 + 95 + 95 + 89) / 5 = 91.4; broad reasoning and multimodal work, with caution on dense retrieval near 1M.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public-source research; scores are normalized interpretations, not vendor scores.
- Future sources: add a separate signed report with these headings.
