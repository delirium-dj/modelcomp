# Gemini 2.5 Flash — findings by GPT 6 Astra

- Source: Google / Gemini 2.5 Flash
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Gemini 2.5 Flash, stable GA.
- **Short description:** Proprietary hybrid reasoning model for high-volume multimodal processing.
- **Provider / IDs:** Gemini GenerateContent API `gemini-2.5-flash`; no verified Zen Free ID.
- **Release / knowledge:** June 2025 stable update; January 2025 cutoff.
- **Context window:** 1,048,576 input / 65,536 output.
- **Modalities:** Text/image/video/audio input; text output; thinking, tools, schema outputs, code execution and search.
- **Availability:** Current documentation restricts access to prior active users, explicitly says not deprecated. This supersedes older retirement claims. September preview is shut down.
- **Architecture:** Proprietary; parameter count undisclosed. [Official model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash)
- **Pricing (2026-10-05):** Paid $0.30 text/image/video input, $1 audio input, $2.50 output per million; cache $0.03/$0.10 plus storage. Free tier uses data to improve products; paid tier does not. Score uses paid text tariff. [Official pricing](https://ai.google.dev/gemini-api/docs/pricing.md)

### Raw benchmarks found

Google's GA Thinking column: GPQA 82.8%; HLE no tools 11.0%; AIME 2025 72.0%; LiveCodeBench v5 63.9%; SWE-bench Verified 60.4%; Aider whole/diff 61.9%/56.7%; MMMU 79.7%; MRCR v2 74% at 128K average and 32% at 1M pointwise. Pass@1 unless specified; do not mix September preview or harder eight-needle results into GA. [Publisher evaluation card, pp. 4–6](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Flash-Model-Card.pdf)

Tau, Terminal-Bench 2.1, GDPval, Claw-Eval, MCP-Atlas, CritPt, Omniscience, SciCode and Vibe Code Bench: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 58/100.** SWE repair provides a provisional agent proxy; no direct broad tool suite verified.
- **Reasoning: 69/100.** Good GPQA, modest HLE.
- **Context window: 95/100.** 1M capacity tier; weak full-window retrieval prevents maximum.
- **Multimodal: 95/100.** Audio/image/video understanding; text generation only.
- **Coding: 66/100.** Mid-tier repair and code-generation results.
- **Cost efficiency: 92/100.** Low paid input/output pricing; tools and cache storage add cost.
- **Overall Score: 77/100.** Half-up mean: (58 + 69 + 95 + 95 + 66) / 5 = 76.6. Broad multimodal capacity for existing eligible users.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh primary-source research; normalized scores are interpretations, not official scores.

