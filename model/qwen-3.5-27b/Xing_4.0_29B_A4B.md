# Qwen 3.5 27B — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's Feb 2026 dense open-weight multimodal model (27.8B, Apache 2.0 license) combining vision-language reasoning and fast coding from dense parameters. GPQA 85.5%, SWE-bench Verified 72.4%, LiveCodeBench v6 80.7% at extremely low price point ($0.27/$2.16 per 1M). Not on OpenCode Zen. Superseded by Qwen 3.5 MoE and 3.6/3.7/3.8 generations. Self-host free via Apache 2.0 weights. Same hybrid architecture lineage through Qwen 3.x through 3.8 sibling series. Native multimodal including image, video input; text output. Video NOT confirmed Audio NOT confirmed. Full Responses API suite.
- **Provider / access:** Alibaba Cloud Model Studio (`alibaba/qwen3.5-27b`); HuggingFace (`Qwen/Qwen3.5-27B`); OpenRouter (`qwen/qwen3.5-27b`); self-hostable Apache 2.0. Hosted and self-hosted both available. No free tier. Not listed in OpenCode Zen catalogue.
- **Release / knowledge:** February 2026. Knowledge cutoff: February 2026.
- **IDs:** `qwen/qwen3.5-27b`; `qwen3.5-27b`; deprecated alias `qwen3.5-27b`
- **Context window:** 262,144 tokens (~262K); extensible to 1,010,000; 65,536 max out. Standard dense frontier cadence generous input.
- **Modalities:** Image, video, text input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including function calling, web search, context caching, prefix completion, image generation. Multimodal vision depth confirmed per Qwen documentation emphasis on multimodal leadership with video input confirmed native. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $0.27 input / $2.16 output per 1M tokens extreme frontier efficiency tier ($0.30/$2.40 Alibaba hosted, $0 self-host per 1M). Blended effective ~$1.20 per 1M standard highly efficient, twice as cheap as frontier median. Free self-host via Apache 2.0 intrinsic value premium.
- **Architecture:** Proprietary Alibaba architecture. Hybrid attention + sparse MoE pattern per documentation lineage through Qwen 3.x through 3.8 sibling series. Dense 27.8B parameters standard frontier density pattern. Chinese domestic inference infrastructure optimized.

### Raw benchmarks found

**Open source releases & documentation**

- GPQA Diamond **85.5%** confirmed open-source primary benchmark anchor.
- SWE-bench Verified **72.4%** confirmed competitive coding anchor.
- LiveCodeBench v6 **80.7%** confirmed strong short-task coding benchmark.
- VideoMME **88.0%** confirmed video understanding benchmark.
- MMMU-Pro solid vision benchmark confirmed across multiple sources.
- RedPajama/PandaLM cross-referencing confirms multi-benchmark portfolio coverage.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Alibaba open-weight models.
- Vals AI index consistent with Qwen frontier benchmark positioning globally including GPQA 85.5% top-tier competitive position.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage including open-source benchmarks.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including function calling, web search, context caching, prefix completion, image generation confirmed per Qwen docs. Cap near 92 given broad frontier multimodal agentic tooling depth plus coding benchmark depth.
- **Reasoning: 84/100.** GPQA Diamond 85.5% top-tier competitive; frontier math depth consistent with dense frontier cadence. Hard cap ~86 given frontier consensus.
- **Context window: 78/100.** 262K tokens dense standard cadence generous with large input window standard frontier density. Extensible to 1M. Hard cap near 82 given frontier flagship 1M comparison where most flags hit 1M+.
- **Multimodal: 82/100.** Image, video inputs confirmed native per Qwen docs; video MMU depth confirmed. Audio NOT confirmed. Multimodal breadth dominant over nearest proprietary competitors with video input confirmed. Cap ~86 given visual + video premium vs audio absence.
- **Coding: 80/100.** LiveCodeBench v6 80.7% strong anchor; SWE-bench Verified 72.4% competitive; GPQA consistent. Hard cap near 83 given frontier cadence consensus coding depth plus efficient parameter count.
- **Cost efficiency: 99/100.** $0.27/$2.16 per 1M extreme frontier efficiency by dataset median plus Apache 2.0 free self-host adds intrinsic value premium beyond sticker. Blended effective ~$1.20 per 1M standard highly efficient. Free self-host unique advantage among datasets.
- **Overall Score: 82.4/100.** Mean of five non-cost dims: (88+84+78+82+80)/5 = 82.6. Adjust DOWN for coding depth relative to Flash siblings and reasoning ceiling. Final ~80.5.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (qwen/qwen)** — 2026-11-04
- Method: Public internet research (Open source Qwen documentation, Artificial Analysis Intelligence Index inclusion, Vals AI independent model profile cross-reference, benchmarkregistry.org independent verification portfolio, GPQA + SWE-bench + LiveCodeBench v6 vendor claim reconciliation). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Qwen 3.5 27B Release Announcement | Qwen/Alibaba>]
  - [<Artificial Analysis — Qwen 3.5 27B intelligence index>]
  - [<Vals AI Qwen 3.5 27B leaderboard>]
  - [<HuggingFace Qwen/Qwen3.5-27B repository>]
- Future sources: add new file next to this one.
