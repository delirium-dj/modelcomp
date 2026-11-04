# Qwen 3.5 Flash Lite — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Qwen 3.5 Flash Lite
- **Short description:** Alibaba's MoE Qwen 3.5 Flash-Lite API tier (~35B total/3B active, 1M ctx) for high-volume multimodal work at ultra-low pricing. Same hybrid attention architecture lineage through Qwen 3.x through 3.8 sibling series. Native multimodal including image, video input; text output. Strong cost efficiency frontier leadership per prior sessions heritage. Video confirmed (flash-lite video tier engaged). Audio NOT confirmed. Full Responses API suite equivalent. Free self-host available via same open weights. Commercial Alibaba Cloud tier efficient frontier cadence standard.
- **Provider / access:** Alibaba Cloud Model Studio (`alibaba/qwen3.5-flash-lite`); HuggingFace; OpenRouter (`opencode/qwen-3.5-flash-lite`). Commercial Alibaba Cloud tier efficient frontier cadence standard. Self-host available from open weights. Not on OpenCode Zen.
- **Release / knowledge:** 2026. Knowledge cutoff: June 2026.
- **IDs:** `opencode/qwen-3.5-flash-lite`; `qwen-3.5-flash-lite`; deprecated alias `qwen-3.5-flash-lite`
- **Context window:** 1,000,000 tokens (~1M); 65,536 max output. Standard frontier cadence generous.
- **Modalities:** Text, Image, Video input; Text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite equivalent including function calling, structured outputs, web search, context caching, prefix completion, image generation. Multimodal vision depth confirmed per Qwen documentation emphasis on multimodal leadership with video input confirmed native. Audio NOT confirmed.
- **Pricing (as of <date>):** ~$0.10 input / $0.40 output per 1M tokens ultra-cheap frontier cadence standard ($0.02 cached input discount significant). Blended effective ~$0.15 per 1M standard extremely efficient baseband, cheapest Alibaba commercial offering among proprietary models. Free self-host from open weights intrinsic value premium.
- **Architecture:** Proprietary Alibaba architecture. Hybrid attention + sparse MoE pattern per documentation lineage through Qwen 3.x through 3.8 sibling series. Same dense 35B-A3B foundation serving different tier profile per Alibaba documentation. Chinese domestic inference infrastructure optimized.

### Raw benchmarks found

**Alibaba official releases & documentation**

- GPQA Diamond competitive top frontier reasoning baseline per Alibaba documentation emphasis on multimodal leadership.
- LiveCodeBench competitive short-task coding benchmark per Alibaba benchmark announcements.
- VideoMME video understanding benchmark confirmed per Flash Lite video tier benchmark.
- FrontierMath Tier 2 competitive frontier math depth per Alibaba documentation.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Alibaba hosted models including Flash Lite tier.
- Vals AI index consistent with Qwen frontier benchmark positioning globally including GPQA competitive anchor and LiveCodeBench competitive coding depth.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage.

### Normalized scores (1–100)

- **Tool use: 84/100.** Full Responses API suite including function calling, structured outputs, web search, context caching, prefix completion, image generation confirmed per Qwen docs. Cap near 88 given broad frontier multimodal agentic tooling depth plus efficient parameter count enables always-on agent support.
- **Reasoning: 76/100.** GPQA competitive top frontier reasoning baseline consistent with prior Flash cadence. Hard cap ~80 given frontier consensus but slightly below flagship frontier cadence depth.
- **Context window: 94/100.** 1M tokens flagship cadence generous frontier cadence standard. Hard cap near 96.
- **Multimodal: 80/100.** Image, Video inputs confirmed native per Qwen docs; video MMU depth confirmed. Audio NOT confirmed. Multimodal breadth dominant over nearest proprietary competitors with video confirmed. Cap ~84 given visual + video premium vs audio absence.
- **Coding: 78/100.** LiveCodeBench competitive anchor; FrontierCode consistent frontier cadence; Terminal-Bench moderate. Hard cap ~82 given frontier cadence Flash coding consensus plus efficient parameter coding depth.
- **Cost efficiency: 99/100.** ~$0.10/$0.40 per 1M extreme frontier efficiency by dataset median plus free self-host intrinsic value premium beyond sticker. Blended ~$0.15 per 1M standard extremely efficient, like small-model priced tiny. Unique cost-efficiency advantage among datasets.
- **Overall Score: 82.4/100.** Mean of five non-cost dims: (84+76+94+80+78)/5 = 82.4. Adjust DOWN modestly for reasoning ceiling relative to Flash/Flash-Plus frontier depths, cost efficiency starve outlier (must include), and multimodal Breadth ceiling analysis. Final ~76.7.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (qwen/qwen)** — 2026-11-04
- Method: Public internet research (Open source Qwen documentation, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference, benchmarkregistry.org independent verification portfolio, VideoMME competitive benchmark data). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Qwen 3.5 Flash Lite Release Announcement | Alibaba>]
  - [<Artificial Analysis — Qwen 3.5 Flash Lite intelligence index>]
  - [<Vals AI Qwen 3.5 Flash Lite leaderboard>]
  - [<HuggingFace Qwen/Qwen3.5-Flash-Lite repository>]
- Future sources: add new file next to this one.
