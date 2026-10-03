# Gemini 3 Pro — findings by GPT 6 Astra

- Source: Google DeepMind / Gemini 3 Pro
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Gemini 3 Pro Preview
- **Short description:** Historical multimodal reasoning model; native Gemini API preview was shut down March 9, 2026.
- **Provider / access:** Former Gemini API preview; current third-party availability unverified.
- **Release / knowledge:** November 2025; cutoff unverified.
- **IDs:** `gemini-3-pro-preview`; no verified current Zen Free ID.
- **Context window:** 1,048,576 input / 65,536 output.
- **Modalities:** Text/image/audio/video/PDF input, text output; tools, structured output and thinking.
- **Pricing (as of 2026-10-03):** No current native API offer verified; cost score below is provisional historical positioning, not a purchasable quote.
- **Architecture:** Proprietary. [Google API retirement and specifications](https://ai.google.dev/gemini-api/docs/models/gemini-3-pro-preview?authuser=110)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: 54.2% at launch.
- Tau3 / GDPval / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found in reviewed launch text.

Reasoning / knowledge:

- HLE: 37.5% without tools; GPQA Diamond: 91.9%; SimpleQA Verified: 72.1%.
- CritPt / Intelligence Index / hallucination rate: no verified public score found.

Coding:

- SWE-bench Verified: 76.2%; WebDev Arena: 1487 Elo, a preference measure rather than correctness.
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found in reviewed launch text.

Long context:

- No verified retrieval measurement in reviewed launch text.

Benchmark source: [Google launch](https://blog.google/products-and-platforms/products/gemini/gemini-3/), historical vendor results, not current service evaluations.

### Normalized scores (1–100)

- **Tool use: 68/100.** Midrange terminal success under the methodology; broad tool coverage remains unverified here.
- **Reasoning: 88/100.** Strong GPQA with HLE below the frontier anchor.
- **Context window: 95/100.** Historical 1M capacity; no retrieval bonus.
- **Multimodal: 95/100.** Broad input coverage; text-only output.
- **Coding: 83/100.** Strong repository coding but moderate terminal performance.
- **Cost efficiency: 60/100.** Provisional paid-model midpoint; current price/value cannot be established after API retirement and does not enter Overall.
- **Overall Score: 86/100.** Half-up mean (68 + 88 + 95 + 95 + 83) / 5 = 85.8; historical capability assessment, not an availability recommendation.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public-source research; normalized interpretations; cost explicitly provisional.
- Future sources: add separate signed reports with these headings.
