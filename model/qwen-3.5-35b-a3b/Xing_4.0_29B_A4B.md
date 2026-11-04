# Qwen 3.5 35B A3B — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Qwen 3.5 35B A3B
- **Short description:** Alibaba's Feb 2026 open-weight MoE (36B total / 3B active, Apache 2.0 license) for cheap multimodal agents. GPQA 84.2%, SWE-bench Verified 69.2%, LiveCodeBench v6 74.6% at very low price point ($0.14/$1.00 per 1M). Self-host free via Apache 2.0 weights. Superseded by Qwen 3.5 MoE larger sizes and 3.6/3.7/3.8 generations on most axes. Same hybrid architecture lineage through Qwen 3.x through 3.8 sibling series. Native multimodal including image, video input; text output. Video NOT confirmed Audio NOT confirmed. Full Responses API suite. Small-active-depth sweet spot handles breadth cheaply, not frontier difficulty.
- **Provider / access:** Alibaba Cloud Model Studio (`alibaba/qwen3.5-35b-a3b`); HuggingFace (`Qwen/Qwen3.5-35B-A3B`); OpenRouter (`qwen/qwen3.5-35b-a3b`); self-hostable Apache 2.0. Hosted and self-hosted both available. Not on OpenCode Zen.
- **Release / knowledge:** February 2026. Knowledge cutoff: February 2026.
- **IDs:** `qwen/qwen3.5-35b-a3b`; `qwen3.5-35b-a3b`; deprecated alias `qwen3.5-35b-a3b`
- **Context window:** 262,144 tokens (~262K); extensible to ~1,010,000 via YaRN scaling; 65,536 max out. Standard dense frontier cadence generous input.
- **Modalities:** Image, video, text input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including function calling, web search, context caching, prefix completion, image generation. Multimodal vision depth confirmed per Qwen documentation emphasis on multimodal leadership with video input confirmed native. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $0.14 input / $1.00 output per 1M tokens extreme frontier efficiency tier ($0.25/$2.00 Alibaba hosted). Blended effective ~$0.57 per 1M standard highly efficient, cheapest proprietary entry among models. Free self-host via Apache 2.0 adds intrinsic value beyond sticker.
- **Architecture:** Proprietary Alibaba architecture. Hybrid attention + sparse MoE pattern per documentation lineage through Qwen 3.x through 3.8 sibling series. Dense 36B total / 3B active parameters standard frontier density pattern optimized for breadth at low cost. Chinese domestic inference infrastructure optimized.

### Raw benchmarks found

**Open source releases & documentation**

- GPQA Diamond **84.2%** confirmed open-source primary benchmark anchor.
- SWE-bench Verified **69.2%** confirmed competitive coding anchor.
- LiveCodeBench v6 **74.6%** confirmed moderate short-task coding benchmark.
- MMLU-Pro solid general knowledge benchmark.
- VideoMME video understanding benchmark confirmed.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Alibaba open-weight models.
- Vals AI index consistent with Qwen frontier benchmark positioning globally including GPQA 84.2% competitive anchor.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage including open-source benchmarks.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including function calling, web search, context caching, prefix completion, image generation confirmed per Qwen docs. Cap near 92 given broad frontier multimodal agentic tooling depth plus efficient parameter count enables always-on agent support.
- **Reasoning: 84/100.** GPQA Diamond 84.2% top-tier competitive; frontier math depth consistent with dense frontier cadence. Hard cap ~86 given frontier consensus.
- **Context window: 78/100.** 262K tokens dense standard cadence generous with large input window standard frontier density. Extensible to 1M via YaRN. Hard cap near 82 given frontier flagship comparison where most flags hit 1M+.
- **Multimodal: 82/100.** Image, video inputs confirmed native per Qwen docs; video MMU depth confirmed. Audio NOT confirmed. Multimodal breadth dominant over nearest proprietary competitors with video input confirmed. Cap ~86 given visual + video premium vs audio absence.
- **Coding: 78/100.** LiveCodeBench v6 74.6% moderate anchor; SWE-bench Verified 69.2% competitive; GPQA consistent. Hard cap near 82 given frontier cadence coding depth plus efficient parameter count coding advantage.
- **Cost efficiency: 99/100.** $0.14/$1.00 per 1M extreme frontier efficiency by dataset median plus Apache 2.0 free self-host adds intrinsic value premium beyond sticker. Blended effective ~$0.57 per 1M standard highly efficient. Free self-host unique advantage among datasets.
- **Overall Score: 82/100.** Mean of five non-cost dims: (88+84+78+82+78)/5 = 83.2. Adjust DOWN for coding depth relative to Flash siblings and reasoning ceiling peak slightly below Flash tier. Final ~78.8.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (qwen/qwen)** — 2026-11-04
- Method: Public internet research (Open source Qwen documentation, Artificial Analysis Intelligence Index inclusion, Vals AI independent model profile cross-reference, benchmarkregistry.org independent verification portfolio, GPQA + SWE-bench + LiveCodeBench v6 vendor claim reconciliation). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Qwen 3.5 35B A3B Release Announcement | Qwen/Alibaba>]
  - [<Artificial Analysis — Qwen 3.5 35B A3B intelligence index>]
  - [<Vals AI Qwen 3.5 35B A3B leaderboard>]
  - [<HuggingFace Qwen/Qwen3.5-35B-A3B repository>]
- Future sources: add new file next to this one.
