# Ox Alpha — findings by GPT 5.6 Luna

- Source: Ox Alpha (`ox-alpha`), now described by the project site as Z.ai GLM-5.3 Flash
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Ox Alpha
- **Short description:** A stealth/preview OpenAI-compatible endpoint later identified as GLM-5.3 Flash.
- **Provider / access:** `https://oxalpha.run/api/v1`, Chat Completions, model `ox-alpha`.
- **Release / knowledge:** Not publicly specified.
- **IDs:** `oxalpha/ox-alpha`; API access was reported as temporarily offline during research.
- **Context window:** Public API page advertises 1M context; exact limit not independently verified.
- **Modalities:** Text; tool/function calling and structured output are documented.
- **Pricing (as of 2026-10-05):** Free endpoint status reported, but availability is not guaranteed.
- **Architecture:** Not disclosed; endpoint description identifies it with GLM-5.3 Flash.

### Raw benchmarks found
- Ox Alpha benchmark page reports directional results only and explicitly cautions that it is a stealth preview, not a final leaderboard.
- No independently reproducible standard benchmark score was found for the exact `ox-alpha` endpoint.

### Normalized scores (1–100)
- **Tool use: 84/100.** OpenAI-compatible tools/function calling are documented, but exact endpoint measurements are unavailable.
- **Reasoning: 83/100.** The GLM-5.3 Flash identification is a useful proxy, capped because the alias is not independently verified.
- **Context window: 82/100.** The endpoint advertises 1M context, capped for lack of a published retrieval benchmark.
- **Multimodal: 15/100.** No verified image, audio, or video input for this endpoint.
- **Coding: 82/100.** Directional preview claims suggest strong coding, but no exact public score was verified.
- **Cost efficiency: 100/100.** The public endpoint page described access as free while available.
- **Overall Score: 69.2/100.** Conservative quality score due to missing reproducible exact-model evidence; useful only as a provisional preview.

### Multi-source deep-research addendum (2026-10-09)

- Ox Alpha’s own pages describe a stealth preview with 1M context, text/vision input, and free access. Its benchmark page explicitly warns that provider-reported figures are directional and not a formal leaderboard; third-party route identity remains unresolved.
- Recalculation: retained existing score; the access/value signal is strong but the model identity and benchmark provenance are too uncertain for a numeric change.
- Sources: https://oxalpha.org/benchmarks ; https://www.oxalpha.com/ ; https://oxalpha.io/blog/ox-alpha-model.html

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Sources: https://oxalpha.run/api ; https://oxalpha.org/benchmarks
