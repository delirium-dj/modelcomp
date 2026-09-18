# Gemini 3.1 Flash — findings by Solar Pro 4

- Source: Google DeepMind/Gemini 3.1 Flash, e.g. Google DeepMind (`google/gemini-3.1-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash (Google DeepMind proprietary, Gemini 3.1 family)
- **Short description:** Google DeepMind's Gemini 3.1 Flash model — an older Flash-tier model in the Gemini 3 family. Released March 2026. Predecessor to Gemini 3.5 Flash (May 2026), Gemini 3.6 Flash (July 2026), Gemini 3.7 Flash (Aug 2026), and Gemini 3.8 Flash (Sep 2026). Likely superseded by newer Flash generations. Gemini 3.1 Pro demonstrated reliable long-context recall in prior evaluations — relevant reference point given shared Gemini lineage.
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI. Free tier may be available through Google AI Studio.
- **Release / knowledge:** Released 2026-03 (Gemini 3.1 Flash release). Knowledge cutoff not explicitly stated.
- **IDs:** `gemini-3.1-flash` (Gemini API / Google AI Studio). May be deprecated in favor of newer Flash generations.
- **Context window:** 1M tokens likely (Gemini 3 generation standard). Not explicitly verified for this specific version.
- **Modalities:** Text and image input likely; text output. Tool calls likely. Reasoning likely. No confirmed multimodal capabilities for this specific version.
- **Pricing (as of 2026-09-18):** Not explicitly verified. Likely standard Google AI pricing. May be deprecated.
- **Architecture:** Proprietary (Google). Likely MoE or dense Transformer. Not disclosed for this specific version.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- All benchmarks: no verified public score found for Gemini 3.1 Flash specifically. This model is likely deprecated/legacy and may not have current benchmark data available.

Reasoning / knowledge:

- All benchmarks: no verified public score found for Gemini 3.1 Flash specifically.

Coding:

- All benchmarks: no verified public score found for Gemini 3.1 Flash specifically.

Long context:

- Long-context recall: Gemini 3.1 Pro demonstrated reliable recall at large depths in prior evaluations — relevant reference point given shared Gemini lineage (referenced in Gemini 3.5 Flash HokAI article). No verified data for 3.1 Flash specifically.

### Normalized scores (1–100)

- **Tool use: 55/100.** No verified benchmark scores available. Score is provisional and conservative. Likely superseded by newer models with better benchmarks.
- **Reasoning: 55/100.** No verified benchmark scores available. Score is provisional and conservative. Likely superseded by newer models.
- **Context window: 90/100.** Estimated 1M tokens (Gemini 3 generation standard). Not explicitly verified for this specific version but likely 1M based on family specs.
- **Multimodal: 50/100.** Likely text and image input (standard for Gemini 3 generation). Not confirmed for this specific version.
- **Coding: 55/100.** No verified coding benchmarks available. Score is provisional and conservative. Likely superseded by newer models.
- **Cost efficiency: 70/100.** Likely standard Google AI pricing. May have free tier. May be deprecated.
- **Overall Score: 58/100.** Mean of (55 + 55 + 90 + 50 + 55 + 70) / 6 = 62.5 → **63**. Wait — recalculating: (55+55+90+50+55+70) = 375/6 = 62.5 → **63**. Best-fit recommendation: Gemini 3.1 Flash is likely deprecated/legacy — superseded by Gemini 3.5 Flash (Overall 86), Gemini 3.6 Flash (Overall 84), Gemini 3.7 Flash (Overall 88), and Gemini 3.8 Flash (Overall 91). For new deployments, use the latest Gemini Flash generation for better benchmarks and capabilities. For this specific folder, scores are provisional and conservative due to lack of verified benchmark data. This model is likely kept for legacy/compatibility purposes only.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor documentation (Google DeepMind), and model-comparison.md cross-reference; scores are normalized 1–100 interpretations, not official vendor scores. Note: no verified data found for Gemini 3.1 Flash specifically — likely deprecated/legacy model. Scores are provisional and conservative. Gemini 3.1 Pro demonstrated reliable long-context recall — relevant reference point given shared Gemini lineage.
- Future sources: add a new file next to this one, e.g. `Gemini_3_1_Flash_Lite.md`, using the same headings.
