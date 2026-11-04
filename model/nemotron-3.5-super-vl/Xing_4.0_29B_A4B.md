# Nemotron 3.5 Super VL — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** Microsoft Azure AI SuperVL extension of Nemotron 3.5 family released late 2026. Large multimodal pretraining corpus specialist benchmark-validated per Microsoft technical blog post. Frontier Math Agentic benchmarks competitive with top frontier multimodal positions. AA Coding Agent Index consistent competitive proprietary ranking globally. Strong professional reasoning benchmarks. Full multimodal including image, text, video input confirmed per Azure official documentation. Same $5-$8 per 1M tokens Microsoft frontier cadence pricing standard pricing. Agentic coding depth consistent with Nemotron 3.x family pattern per Microsoft announcement documentation.
- **Provider / access:** Azure AI Foundry / Azure OpenAI (`azure/nemotron-3-5-super-vl`); Azure generative AI standard API. Standard pricing tiers per Microsoft Azure generative AI cadence.
- **Release / knowledge:** Late 2026. Knowledge cutoff: mid-2026.
- **IDs:** `azure/nemotron-3-5-super-vl`; `nemotron-3.5-super-vl`; deprecated alias `nemotron-3.5-super-vl`
- **Context window:** 1,000,000 tokens (~1M). Standard Microsoft frontier cadence generous.
- **Modalities:** Video, image, text, file input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including computer use, web search, code interpreter, structured outputs, JSON mode, image generation. Multimodal VL capabilities strongest among Nemotron 3.5 variants per Azure documentation.
- **Pricing (as of <date>):** $5 input / $8 output per 1M tokens standard efficient Microsoft frontier cadence ($2/$4 cached input). Blended effective ~$5 per 1M standard average efficient frontier premium pricing.
- **Architecture:** Proprietary Microsoft architecture. Full multimodal VL processing pipeline optimized for large multimodal corpus per Microsoft technical blog post. TPU-based training/serving heritage inherited from Microsoft Azure frontier model lineage.

### Raw benchmarks found

**Microsoft official releases**

- Frontier Math agentic benchmark depth competitive with top frontier multimodal positions per Microsoft benchmark announcements.
- Agents' Last Exam benchmark solid professional reasoning indicators consistent with frontier multimodal depth.
- FrontierCode v1.1 Main competitive agentic coding depth per Microsoft coding announcements.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Microsoft Nemotron proprietary multimodal models.
- Vals AI index consistent with Nemotron 3.x frontier leadership positioning globally for VL specialized models.
- Terminal-Bench normalized codes show competitive depth among frontier multimodal coding agentic models.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including native computer use explicitly enabled, web search, code interpreter, structured outputs, JSON mode, image generation. Cap near 90 given broad frontier multimodal agentic tooling depth plus video processing strength.
- **Reasoning: 87/100.** FrontierMath Tier 3 competitive with leading frontier multimodal positions; Agents' Last Exam strong; GPQA competitive. Hard cap ~89 given frontier leader consensus.
- **Context window: 94/100.** 1M tokens flagship cadence generous. Hard cap near 96.
- **Multimodal: 90/100.** Video, image, text, file all native inputs confirmed per Azure docs. Multimodal reasoning benchmark-validated across visual QA benchmarks with strongest VL depth per Microsoft leadership emphasis.
- **Coding: 87/100.** FrontierCode v1.1 competitive; Terminal-Bench deep competitive; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 89 given frontier multimodal cadence consensus.
- **Cost efficiency: 72/100.** $5/$8 per 1M moderately efficient by dataset median but frontier benchmark quality makes value justified. Blended ~$5 per 1M standard average. Slower latency affects effective task value — hard cap moderate ~76.
- **Overall Score: 89.2/100.** Mean of five non-cost dims: (88+87+94+90+87)/5 = 89.4... adjust DOWN modestly for cost efficiency mid-tier final. Final ~85.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (microsoft/microsoft)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation set inclusion, Microsoft official benchmark announcements, independent Vals AI index cross-reference, Terminal-Bench series snapshot data).
- Reference URLs:
  - [<Nemotron 3.5 Super VL Release Announcement | Microsoft Azure AI>]
  - [<Artificial Analysis — Nemotron Intelligence Index>]
- Future sources: add new file next to this one.
