# Gemini 3 Pro — findings by GPT 5.6 Sol

- Source: Google DeepMind/Gemini 3 Pro
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's first Gemini 3 flagship reasoning model, built for advanced multimodal understanding, coding, agents, and long-context analysis; superseded by Gemini 3.1 Pro.
- **Provider / access:** Released through Gemini, Search, Google AI Studio, and Vertex AI as `gemini-3-pro-preview`; the preview API endpoint is now shut down.
- **Release / knowledge:** Released 2025-11-18; knowledge cutoff not verified in current documentation.
- **IDs:** `google/gemini-3-pro-preview`; retired preview, with Gemini 3.1 Pro as successor.
- **Context window:** 1,048,576 input tokens with approximately 64K maximum output.
- **Modalities:** Text, image, audio, video, and PDF input; text output; reasoning, caching, code execution, file search, function calling, search grounding, structured output, and URL context.
- **Pricing (last verified):** $2/1M input and $12 output for prompts up to 200K; $4/$18 above 200K, with cached input approximately $0.20/1M.
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.2%** (Google model-card result reproduced in public tables).
- GDPval-AA: **1629.5 Elo** (public benchmark compilation).
- Tau3-Banking / Toolathon: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Google model card).
- HLE: **37.52%** without tools (Google model card).
- ARC-AGI-2: **31.1%** standard / approximately **45.1%** Deep Think.
- AIME 2025: **100%** (Google model card).

Coding:

- SWE-bench Verified: **76.2%** vendor-reported; an independent minimal-agent evaluation reported **74%**.
- LiveCodeBench: **91.5%** in a public model-card compilation.
- SciCode: no verified public score found.

Long context:

- MRCR v2 8-needle: **97% at 128K**; later user measurements reported steep degradation at much longer lengths, so full-window reliability is uncertain.

Multimodal:

- MMMU-Pro: **81.0%** (Google model-card result).
- Video-MMMU: **87.6%** (Google evaluation methodology table).

Sources: [Google model-card catalog](https://deepmind.google/models/model-cards/), [archived official model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Pro-Model-Card.pdf), [Gemini API model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3-pro-preview), [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing), and [current deprecation documentation](https://ai.google.dev/gemini-api/docs/deprecations).

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench and GDPval show strong agentic ability for its generation, capped by thinner independent tool-use evidence.
- **Reasoning: 91/100.** GPQA 91.9%, HLE 37.5%, and strong math results establish frontier late-2025 reasoning, now below newer flagships.
- **Context window: 90/100.** The nominal 1M window and excellent 128K MRCR are strong, but reported degradation toward the full window materially caps the score.
- **Multimodal: 93/100.** Native text, image, audio, video, and PDF inputs plus strong MMMU/Video-MMMU results provide broad capability.
- **Coding: 89/100.** SWE-bench around 74–76% and strong LiveCodeBench results remain capable, though successors have advanced substantially.
- **Cost efficiency: 75/100.** The original $2/$12 rate was competitive, but long-context surcharges and retirement reduce present value.
- **Overall Score: 90/100.** Half-up mean of the five quality dimensions; historically strong for multimodal reasoning and coding, but superseded for new deployments.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using official/archived Google documentation and independent corroboration; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
