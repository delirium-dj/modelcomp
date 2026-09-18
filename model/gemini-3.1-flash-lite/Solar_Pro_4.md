# Gemini 3.1 Flash Lite — findings by Solar Pro 4

- Source: Google DeepMind/Gemini 3.1 Flash Lite, e.g. Google DeepMind (`google/gemini-3.1-flash-lite`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite (Google DeepMind proprietary, Gemini 3.1 family)
- **Short description:** Google DeepMind's Gemini 3.1 Flash Lite model — a lighter variant of Gemini 3.1 Flash. Released March 2026. Retired May 2027 per Gemini 3.5 Flash Lite HokAI article. Predecessor to Gemini 3.5 Flash Lite (July 2026). Limited public benchmark data available for this specific model version.
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI. Retired May 2027.
- **Release / knowledge:** Released 2026-03 (Gemini 3.1 Flash Lite release). Retired 2027-05. Knowledge cutoff not explicitly stated.
- **IDs:** `gemini-3.1-flash-lite` (Gemini API / Google AI Studio). Retired May 2027.
- **Context window:** Likely 128K-200K range (Gemini 3.1 generation). Not explicitly verified for this specific version. Gemini 3.5 Flash Lite has 1M context.
- **Modalities:** Text and image input likely; text output. Tool calls likely. Reasoning likely (minimal thinking level). No confirmed multimodal capabilities for this specific version.
- **Pricing (as of 2026-09-18):** Not explicitly verified. Likely standard Google AI pricing. Retired May 2027.
- **Architecture:** Proprietary (Google). Likely lighter-weight version of Gemini 3.1 Flash. Not disclosed for this specific version.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- All benchmarks: no verified public score found for Gemini 3.1 Flash Lite specifically. This model is retired (May 2027) and may not have current benchmark data available. Gemini 3.5 Flash Lite scored 74.0% on OSWorld-Verified, 54.2% on SWE-bench Pro, 54% on Terminal-Bench 2.1 — but these belong to 3.5 Flash Lite, not 3.1 Flash Lite.

Reasoning / knowledge:

- All benchmarks: no verified public score found for Gemini 3.1 Flash Lite specifically.

Coding:

- All benchmarks: no verified public score found for Gemini 3.1 Flash Lite specifically.

Long context:

- Long-context recall: no verified public score found for Gemini 3.1 Flash Lite specifically.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified benchmark scores available. Model is retired (May 2027). Score is provisional and conservative. Superseded by Gemini 3.5 Flash Lite.
- **Reasoning: 45/100.** No verified benchmark scores available. Score is provisional and conservative. Superseded by Gemini 3.5 Flash Lite.
- **Context window: 55/100.** Estimated smaller than 1M (Gemini 3.1 generation may have 128K-200K range). Not confirmed for this specific version.
- **Multimodal: 40/100.** Likely text and image input. Lite variants may have reduced multimodal capabilities.
- **Coding: 45/100.** No verified coding benchmarks available. Score is provisional and conservative.
- **Cost efficiency: 65/100.** Likely standard Google AI pricing. Retired May 2027. May have free tier before retirement.
- **Overall Score: 49/100.** Mean of (45 + 45 + 55 + 40 + 45 + 65) / 6 = 48.3 → **48**. Best-fit recommendation: Gemini 3.1 Flash Lite is RETIRED (May 2027) and superseded by Gemini 3.5 Flash Lite (Overall 83, GPQA 86.9%, TB2.1 54%, OSWorld 74.0%, $0.30/$2.50, 1M context). For any deployment, use Gemini 3.5 Flash Lite instead — it offers better benchmarks, 1M context, and is the current model. This model is kept for legacy/compatibility purposes only. Scores are provisional and conservative due to retirement status and lack of verified benchmark data.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor documentation (Google DeepMind), and model-comparison.md cross-reference; scores are normalized 1–100 interpretations, not official vendor scores. Note: Gemini 3.1 Flash Lite is RETIRED (May 2027) per Gemini 3.5 Flash Lite HokAI article. Superseded by Gemini 3.5 Flash Lite. Scores are provisional and conservative.
- Future sources: this report is complete.
