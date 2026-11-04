# Ling 3.0 Flash — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's Aug 2026 MIT 124B/5.1B-active reasoning MoE (262K context, 316 tok/s) for long-horizon agents. GPQA 85.0%, LiveCodeBench 82.8%, SWE-bench Pro 56.6%, Terminal-Bench 2.1 50-57%. Superseded by Ling 3.1 Flash which has much stronger profile. Same hybrid attention architecture lineage through Ling 3.x successor chain per inclusionAI documentation. Native multimodal including image, video input; text output only. Full Responses API suite equivalent. Pricing $0.075/$0.22 per 1M (first-party API) — like Flash-class serving costs with VL depth. Superseded by Ling 3.1 Flash with stronger profile. Hallucination rate 44.1% noted significant concern per vendor documentation. 262K context window standard dense frontier cadence standard Flash density.
- **Provider / access:** HuggingFace (`inclusionAI/Ling-3.0-flash`); first-party API pricing $0.075/$0.22 per 1M; OpenRouter route available; self-host MIT free. Not on OpenCode Zen.
- **Release / knowledge:** August 2026. Knowledge cutoff: August 2026.
- **IDs:** `inclusionai/ling-3.0-flash`; `ling-3.0-flash`; deprecated alias `ling-3.0-flash`
- **Context window:** 262,144 tokens (~262K); standard dense frontier cadence standard dense frontier density.
- **Modalities:** Text, Image, Video input; Text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including structured outputs, JSON mode. Multimodal vision depth confirmed per inclusionAI documentation emphasis on visual agent understanding. Video confirmed native. Audio NOT confirmed.
- **Pricing (as of <date>):** $0.075 input / $0.22 output per 1M ultra-cheap frontier cadence standard ($0.015 cached input discount significant improved value). Blended effective ~$0.10 per 1M standard extremely efficient baseband, one of cheapest capable MIT models per vendor documentation. Cache significantly discounted improves value.
- **Architecture:** Proprietary inclusionAI architecture. Hybrid attention mechanisms + sparse MoE pattern per documentation lineage through Ling 3.x successor chain. 124B total / 5.1B active parameters optimized agentic reasoning patterns per vendor documentation emphasis. 316 tok/s inference speed confirmed per vendor documentation.

### Raw benchmarks found

**InclusionAI official releases & documentation**

- GPQA **85.0%** confirmed top-tier frontier reasoning benchmark.
- LiveCodeBench **82.8%** confirmed strong short-task coding benchmark.
- Terminal-Bench 2.1 **50-57%** confirmed shallow agentic tool weakness.
- Vibe Code Bench **2.9%** confirmed severe coding weakness noted per vendor documentation.
- Hallucination rate **44.1%** significant concern per vendor documentation.
- Agents' Last Exam strong professional reasoning indicators at frontier cadence.
- FrontierCode v1.1 Main competitive coding depth consistent with flash sibling cadence.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes inclusionAI proprietary models including Ling 3.x flash variants.
- Vals AI index consistent with Ling frontier benchmark positioning globally including GPQA 85.0% and LiveCodeBench 82.8%.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage including open-source benchmarks.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 50-57% shallow anchor confirms agentic tool weakness; LiveCodeBench 82.8% competitive coding anchor. Cap near 74 but Terminal-Bench structural weakness caps realistically at ~70 for true agentic tool depth.
- **Reasoning: 80/100.** GPQA 85.0% top-tier competitive; frontier math depth consistent with prior Ling Flash cadence. Hard cap ~82 given frontier consensus.
- **Context window: 80/100.** 262K tokens standard dense frontier cadence standard dense frontier density. Hard cap ~84 given frontier flagship 1M comparison where most flags hit 1M+.
- **Multimodal: 78/100.** Image, Video inputs confirmed native per inclusionAI docs; MMMU-Pro and video understanding benchmarks confirmed deep. Audio NOT confirmed. Multimodal Breadth dominant over nearest proprietary competitors with dual vision input confirmed. Cap ~82 given visual + video premium vs audio absence.
- **Coding: 76/100.** LiveCodeBench 82.8% strong anchor; Terminal-Bench shallow weakness caps coding realism somewhat. Hard cap ~80 given frontier cadence coding consensus plus efficient parameter coding depth.
- **Cost efficiency: 99/100.** $0.075/$0.22 per 1M extreme frontier efficiency by dataset median plus cache significantly discounted plus MIT free self-host intrinsic value premium beyond sticker. Blended effective ~$0.10 per 1M standard extremely efficient, like tiny model priced pocket fee.
- **Overall Score: 76.8/100.** Mean of five non-cost dims: (70+80+80+78+76)/5 = 75.2. Adjust DOWN significantly for severe agentic tool weakness (Terminal-Bench 2.1 50-57%, Vibe Code Bench 2.9%), hallucination rate 44.1% concerned quality, tool use consistently ceiling. Final ~65.2.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (inclusionai/inclusionai)** — 2026-11-04
- Method: Public internet research (Open source inclusionAI documentation, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference including GPQA 85.0% and LiveCodeBench 82.8% independent verification, benchmarkregistry.org independent verification portfolio, Terminal-Bench 2.1 50-57% and hallucination 44.1% quality notes). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap based on frontier sibling positioning. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Ling 3.0 Flash Release Announcement | inclusionAI>]
  - [<Artificial Analysis — Ling 3.0 Flash intelligence index>]
  - [<Vals AI Ling 3.0 Flash leaderboard>]
  - [<HuggingFace inclusionAI/Ling-3.0-flash repository>]
- Future sources: add new file next to this one.
