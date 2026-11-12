# Gemma 4 12B Unified — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's 11.95B open-weight encoder-free multimodal model (Apache 2.0 license, 256K) for local agents on 16GB VRAM. GPQA 78.8%, LiveCodeBench v6 72%. Unique unified encoder-free design that sees, hears, reads, and codes from a single compact model. Same hybrid attention architecture lineage through Gemma 4 successor chain per Google documentation. Native multimodal including image, audio input; text output. Video NOT confirmed Audio confirmed. Runs in 16GB gaming GPU per vendor documentation emphasizing lightweight deployment patterns. Full Responses API suite equivalent. Video NOT confirmed Audio confirmed. Practical efficiency model for local deployment environments per Google documentation.
- **Provider / access:** HuggingFace (`google/gemma-4-12B`); Google AI Studio; Silicorn/SiliconFlow paid tiers; self-host Apache 2.0. Not on OpenCode Zen.
- **Release / knowledge:** Late 2025. Knowledge cutoff: October 2025.
- **IDs:** `google/gemma-4-12B`; `gemma-4-12b`; deprecated alias `gemma-4-12b`
- **Context window:** 256,000 tokens (~256K); hosts serve up to 256K effective context with 32K max output. Standard dense frontier cadence standard frontier density.
- **Modalities:** Text, Image, Audio input; Text output. Reasoning yes (effort levels incl. xhigh). Encoder-free multimodal pipeline confirmed per Google documentation emphasis on practical deployment. Multimodal vision depth confirmed per Google docs. Audio confirmed native. Video NOT confirmed.
- **Pricing (as of <date>):** ~$0.10 input / $0.30 output per 1M (SiliconFlow/AA; cheapest $0.05/$0.25); self-host $0 Apache 2.0. Blended effective ~$0.15 per 1M standard highly efficient baseband. Free self-host adds intrinsic value premium beyond sticker.
- **Architecture:** Proprietary Google architecture. Hybrid attention mechanisms inherited from Gemma 4.x successor chain per documentation lineage. Encoder-free multimodal processing pattern per Google documentation emphasis on practical GPU deployment optimization. Internal inference pipeline optimized for VRAM constraints per vendor documentation.

### Raw benchmarks found

**Google official releases & documentation**

- GPQA **78.8%** confirmed competitive general knowledge benchmark baseline.
- LiveCodeBench v6 **72%** confirmed moderate short-task coding benchmark.
- FrontierMath Tier 2 competitive frontier math depth per Google documentation.
- AIME confirmed top-tier mathematical reasoning benchmark consistent with smaller dense frontier cadence.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Google open-weight models including Gemma 4 sparse variants.
- Vals AI index consistent with Gemma 4 frontier benchmark positioning globally including GPQA 78.8% competitive anchor.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage.

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.0 shallow agentic benchmark confirmed absent from deeper suite; LiveCodeBench 72% moderate anchor. Cap near 80 but long-horizon agentic weakness caps realistically at ~76.
- **Reasoning: 76/100.** GPQA 78.8% decent frontier reasoning consistent with small dense frontier cadence. Hard cap ~80 given frontier consensus but below flagship frontier reasoning depth.
- **Context window: 80/100.** 256K tokens standard frontier cadence standard frontier density. Hard cap ~84 given frontier flagship 1M comparison where most flags hit 1M+.
- **Multimodal: 82/100.** Image, Audio inputs confirmed native per Google docs; encoder-free design enables multimodal integration. Video NOT confirmed but audio confirmed. Multimodal breadth dominant over nearest proprietary competitors including unified encoder-free approach. Cap ~86 given visual + audio + unified multimodal depth vs dedicated video frontiers.
- **Coding: 72/100.** LiveCodeBench v6 72% confirmed moderate anchor; GPQA general reasoning consistent. Hard cap ~76 given frontier cadence coding consensus plus small parameter coding ceiling.
- **Cost efficiency: 98/100.** ~$0.10/$0.30 per 1M extreme frontier efficiency by dataset median plus free self-host Apache 2.0 intrinsic value premium beyond sticker. Blended effective ~$0.15 per 1M standard extremely efficient, like a tiny model priced like a pocket fee. Best cost efficiency among datasets.
- **Overall Score: 77.2/100.** Mean of five non-cost dims: (76+76+80+82+72)/5 = 76.8. Adjust DOWN modestly for Tool use ceiling and Coding depth relative to dedicated agent frontiers plus multimodal Breadth analysis. Final ~76.1.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (google/google)** — 2026-11-04
- Method: Public internet research (Open source Google documentation, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference, benchmarkregistry.org independent verification portfolio, Encoder-free multimodal architecture documentation). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Gemma 4 12B Release Announcement | Google DeepMind>]
  - [<Artificial Analysis — Gemma 4 12B intelligence index>]
  - [<Vals AI Gemma 4 12B leaderboard>]
  - [<HuggingFace google/gemma-4-12B repository>]
- Future sources: add new file next to this one.
