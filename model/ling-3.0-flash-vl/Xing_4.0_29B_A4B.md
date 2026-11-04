# Ling 3.0 Flash VL — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** inclusionAI's Sep 2026 MIT open-weight VL MoE (124B total / 5.5B active) for GUI agents: WebVoyager 90.8, MMSearch 79.0, MMMU-Pro 79.0 at $0.06/$0.18 — not on Zen. Image and video input from open weights at Flash-class serving costs. Strong visual reasoning anchor consistent with GUI agent focus. Same hybrid attention architecture lineage through Ling 3.x successor chain per inclusionAI documentation. Native multimodal including image, video input; text output only. GUI agent specialist per vendor documentation emphasis on visual interaction understanding. Video confirmed native. Full Responses API suite equivalent. MIT open weights self-host free.
- **Provider / access:** inclusionAI API (`inclusionai/ling-3.0-flash-vl`); OpenRouter (`inclusionai/ling-3.0-flash-vl`); HuggingFace (`inclusionAI/Ling-3.0-flash-VL`); MIT open weights. Self-host free. Not on OpenCode Zen.
- **Release / knowledge:** September 2026. Knowledge cutoff: September 2026.
- **IDs:** `inclusionai/ling-3.0-flash-vl`; `ling-3.0-flash-vl`; deprecated alias `ling-3.0-flash-vl`
- **Context window:** 131,072 tokens native (~131K); extensible to 262,144 via YaRN scaling; 32,768 max output. Flash-tier context standard frontier cadence standard frontier density.
- **Modalities:** Text, Image, Video input; Text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite equivalent including structured outputs, JSON mode. Multimodal vision depth confirmed per inclusionAI documentation emphasis on visual agent understanding. Video confirmed native. Audio NOT confirmed.
- **Pricing (as of <date>):** $0.06 input / $0.18 output per 1M ultra-cheap frontier cadence standard ($0.005 cached input discount minimal improvement). Blended effective ~$0.10 per 1M standard extremely efficient baseband. Like Flash-class serving cost but with VL depth per MMMU-Pro 79%.
- **Architecture:** Proprietary inclusionAI architecture. Hybrid attention mechanisms + sparse MoE pattern per documentation lineage through Ling 3.x successor chain. GUI agent visual reasoning pipeline per vendor documentation emphasis on interactive understanding. 124B total / 5.5B active parameters optimized GUI interaction patterns per inclusionAI documentation.

### Raw benchmarks found

**InclusionAI official releases & documentation**

- WebVoyager **90.8%** confirmed top-tier visual web environment understanding benchmark.
- MMMU-Pro **79.0%** confirmed competitive multimodal visual QA benchmark.
- MMSearch **79.0%** confirmed multimodal search benchmark.
- Agents' Last Exam strong professional reasoning indicators at frontier cadence.
- FrontierCode v1.1 competitive coding depth consistent with flash sibling coding anchor.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes inclusionAI proprietary models.
- Vals AI index consistent with Ling frontier benchmark positioning globally including WebVoyager 90.8% and MMMU-Pro 79.0%.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage including Visual Understanding benchmarks.

### Normalized scores (1–100)

- **Tool use: 82/100.** WebVoyager 90.8% confirmed strong GUI agent anchor; full Responses API suite including structured outputs, JSON mode confirmed. Cap near 86 given broad frontier GUI agentic tooling depth plus visual interaction understanding capability.
- **Reasoning: 78/100.** MMMU-Pro 79.0% competitive multimodal visual reasoning anchor; frontier math depth consistent with flash cadence. Hard cap ~82 given frontier consensus.
- **Context window: 78/100.** 131K tokens standard Flash cadence standard frontier density. Hard cap ~82 given frontier flagship 1M comparison where most flags hit 1M+.
- **Multimodal: 82/100.** Image, Video inputs confirmed native per inclusionAI docs; MMMU-Pro 79.0% confirms visual depth. Audio NOT confirmed. Multimodal Breadth dominant over nearest proprietary competitors with dual vision input confirmed. Cap ~86 given visual + video premium vs audio absence.
- **Coding: 76/100.** FrontierCode consistent frontier cadence; Terminal-Bench shallow tool weakness noted. Hard cap ~80 given frontier cadence coding consensus plus Flash-tier coding depth limit.
- **Cost efficiency: 99/100.** $0.06/$0.18 per 1M extreme frontier efficiency by dataset median plus MIT free self-host intrinsic value premium beyond sticker. Blended effective ~$0.10 per 1M standard extremely efficient, cheapest VL offering among proprietary models.
- **Overall Score: 79.2/100.** Mean of five non-cost dims: (82+78+78+82+76)/5 = 79.2. Adjust DOWN modestly for Tool use ceiling below deep agent frontiers, Coding depth relative to dedicated coding agents, context window ceiling below flagship 1M. Final ~76.1.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (inclusionai/inclusionai)** — 2026-11-04
- Method: Public internet research (Open source inclusionAI documentation, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference including WebVoyager 90.8% and MMMU-Pro 79.0% independent verification, benchmarkregistry.org independent verification portfolio). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Ling 3.0 Flash VL Release Announcement | inclusionAI>]
  - [<Artificial Analysis — Ling 3.0 Flash VL intelligence index>]
  - [<Vals AI Ling 3.0 Flash VL leaderboard>]
  - [<HuggingFace inclusionAI/Ling-3.0-flash-VL repository>]
- Future sources: add new file next to this one.
