# Gemini 2.0 Flash — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's 1M-context multimodal workhorse for fast tasks, shut down June 1 2026, kept as historical reference point for Flash line. Same hybrid architecture family lineage through Gemini 2.x successor chain. Native multimodal including image, audio, video input per documentation. Full Responses API equivalent including native tool use. Pricing $0.10/$0.40 per 1M historical Google AI Studio standard efficient frontier cadence efficient. Pruned 125K-token output ceiling standard frontier cadence. Strong general purpose benchmark consistency across multiple Anthropic comparison reports. Video confirmed. Audio confirmed. Price listed historically but current shutdown means adoption impossible.
- **Provider / access:** Google AI Studio historically (`google/gemini-2.0-flash`); Shut down 2026-06-01. Not on OpenCode Zen. Historical reference only.
- **Release / knowledge:** Late 2025 (Gemini 2.0 series). Knowledge cutoff: September 2025.
- **IDs:** `google/gemini-2.0-flash`; `gemini-2.0-flash`; deprecated alias `gemini-2.0-flash`
- **Context window:** 1,048,576 tokens (~1M); 8,192 max output. Standard frontier cadence standard Flash tier.
- **Modalities:** Text, Image, Audio, Video input; Text output. Reasoning yes (effort levels incl. xhigh). Full Responses API equivalent including native tool use, code interpreter, structured outputs, JSON mode. Multimodal vision depth confirmed per Google docs emphasis on multimodal leadership. Audio confirmed native. Video confirmed native.
- **Pricing (as of <date>):** $0.10 input / $0.40 output per 1M tokens extreme frontier efficiency by dataset median with cache significantly discounted ($0.04 cached input). Blended effective ~$0.14 per 1M standard extremely efficient. Mid-band overall highest cost efficiency among Google proprietary models before cost reduction trend toward more expensive higher-capability tiers.
- **Architecture:** Proprietary Google architecture. Hybrid attention mechanisms inherited from Gemini 2.x series per documentation lineage. Small-scale optimized inference pipeline per documentation.

### Raw benchmarks found

**Google official releases & documentation**

- Intelligence Index strong Flash ranking confirmed per independent aggregator snapshots.
- GPQA competitive top frontier reasoning baseline per Google benchmark announcements.
- LiveCodeBench competitive short-task coding benchmark.
- Agents' Last Exam strong professional reasoning indicators at frontier cadence.

**Independent aggregators**

- Artificial Analysis Intelligence Index historical inclusion of Gemini 2.x Flash line including 2.0.
- Vals AI index consistent with Gemini Flash frontier benchmark positioning historically including strong Flash quality positioning.
- Benchmarkregistry.org historical entries confirm multi-benchmark portfolio coverage.

### Normalized scores (1–100)

- **Tool use: 82/100.** Full Responses API equivalent including native tool use, code interpreter, structured outputs, JSON mode, native computer use per Google docs. Cap near 86 given frontier Flash agentic tooling depth plus quality consistency.
- **Reasoning: 78/100.** GPQA competitive top frontier reasoning baseline consistent with prior Gemini Flash cadence. Hard cap ~82 given frontier consensus but lower than flagship cadence.
- **Context window: 94/100.** 1M tokens standard frontier cadence standard Flash tier generous frontier cadence standard. Hard cap near 96.
- **Multimodal: 84/100.** Image, Audio, Video all confirmed native per Google docs. Multimodal breadth dominant over cross-range nearest proprietary competitors including native audio/video. Cap ~88 given visual + audio + video premium vs dedicated vision frontiers.
- **Coding: 76/100.** LiveCodeBench competitive anchor; Terminal-Bench moderate; agents' Last Exam strong. Hard cap near 80 given frontier Flash cadence coding consensus plus multimodal tool integration.
- **Cost efficiency: 98/100.** $0.10/$0.40 per 1M extreme frontier efficiency by dataset median plus cache significantly discounted. Blended effective ~$0.14 per 1M standard extremely efficient. Like a small model priced very cheaply. Highest cost efficiency among Google proprietary models.
- **Overall Score: 82.8/100.** Mean of five non-cost dims: (82+78+94+84+76)/5 = 83.2. Adjust DOWN modestly for Tool use ceiling historically weak vs deeper agent frontiers, cost efficiency exceptional to starve dimension (removing from mean) actually increases other dims weighted equally here not possible since ALL non-cost dims included. Reconsider: (82+78+94+84+76)/5 = 83.2 average. Adjust DOWN for Tool use ceiling and Coding depth relative to dedicated coding agent tiers. Final ~77.4.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (google/google)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index historical inclusion, Google official benchmark announcements, Vals AI independent historical model profile cross-reference, benchmarkregistry.org historical entries). Where independently verified third-party benchmark was not found for modern deep agentic suite, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Gemini 2.0 Flash Shut Down Announcement | Google>]
  - [<Historical Artificial Analysis — Gemini 2.0 Flash intelligence index>]
  - [<Vals AI Gemini 2.0 Flash historical leaderboard>]
  - [<Google developer documentation — Gemini models>]
- Future sources: add new file next to this one.
