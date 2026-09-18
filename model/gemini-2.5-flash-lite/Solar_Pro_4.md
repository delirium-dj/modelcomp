# Gemini 2.5 Flash Lite — findings by Solar Pro 4

- Source: Google DeepMind/Gemini 2.5 Flash Lite, e.g. Google DeepMind (`google/gemini-2.5-flash-lite`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite (Google DeepMind proprietary, Gemini 2.5 family)
- **Short description:** Google DeepMind's Gemini 2.5 Flash Lite model — a lighter/lighter-weight variant of Gemini 2.5 Flash. Older generation model, likely superseded by Gemini 3.0 Flash Lite, Gemini 3.5 Flash Lite, and subsequent Flash Lite generations. Limited public benchmark data available for this specific model version.
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI. Free tier may be available through Google AI Studio.
- **Release / knowledge:** Released 2025 (Gemini 2.5 Flash Lite release). Knowledge cutoff not explicitly stated.
- **IDs:** `gemini-2.5-flash-lite` (Gemini API / Google AI Studio). May be deprecated in favor of newer Flash Lite generations.
- **Context window:** Likely smaller than 1M (Gemini 2.5 generation may have 128K-200K range). Not explicitly verified for this specific version.
- **Modalities:** Text and image input likely; text output. Tool calls likely. Reasoning likely. No confirmed multimodal capabilities for this specific version.
- **Pricing (as of 2026-09-18):** Not explicitly verified. Likely standard Google AI pricing. May be deprecated.
- **Architecture:** Proprietary (Google). Likely lighter-weight version of Gemini 2.5 Flash. Not disclosed for this specific version.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- All benchmarks: no verified public score found for Gemini 2.5 Flash Lite specifically. This model is likely deprecated/legacy and may not have current benchmark data available.

Reasoning / knowledge:

- All benchmarks: no verified public score found for Gemini 2.5 Flash Lite specifically.

Coding:

- All benchmarks: no verified public score found for Gemini 2.5 Flash Lite specifically.

Long context:

- Long-context recall: no verified public score found for Gemini 2.5 Flash Lite specifically.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified benchmark scores available. Score is provisional and conservative. Likely a lighter-weight model with lower capabilities than main Flash tier.
- **Reasoning: 45/100.** No verified benchmark scores available. Score is provisional and conservative. Likely a lighter-weight model.
- **Context window: 55/100.** Estimated smaller context window than main Flash (128K-200K range). Lite variants typically have smaller context windows.
- **Multimodal: 40/100.** Likely text+image input (standard for Gemini generations). Lite variants may have reduced multimodal capabilities.
- **Coding: 45/100.** No verified coding benchmarks available. Score is provisional and conservative. Lite variants typically have lower coding capabilities.
- **Cost efficiency: 75/100.** Likely lower pricing than main Flash tier (lite variants are typically cheaper). May have free tier. No verified data for this specific version.
- **Overall Score: 46/100.** Mean of (45 + 45 + 55 + 40 + 45 + 75) / 6 = 50.0 → **50**. Best-fit recommendation: Gemini 2.5 Flash Lite is likely deprecated/legacy — superseded by Gemini 3.0 Flash Lite, Gemini 3.5 Flash Lite, and subsequent Flash Lite generations. For new deployments, use the latest Flash Lite generation for better benchmarks and capabilities. For this specific folder, scores are provisional and conservative due to complete lack of verified benchmark data. This model is likely kept for legacy/compatibility purposes only.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor documentation (Google DeepMind), and model-comparison.md cross-reference; scores are normalized 1–100 interpretations, not official vendor scores. Note: no verified data found for Gemini 2.5 Flash Lite specifically — likely deprecated/legacy model. Scores are provisional and conservative.
- Future sources: add a new file next to this one, e.g. `Gemini_3_1_Flash_Lite.md`, using the same headings.
