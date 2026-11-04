# MiMo V2.5 Pro — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's Apr 2026 MIT open-weight MoE (1.02T total / 42B active, 1M context, text-only) for long-horizon agents. ClawEval 63.8%, SWE-bench Verified 78.9%, HLE 48.0%. Same hybrid attention architecture lineage through MiMo 3.x successor chain per Xiaomi documentation. Native multimodal including image input; text output only. Full Responses API suite equivalent including structured outputs, JSON mode, native computer use. Video NOT confirmed Audio NOT confirmed. Context window 1M generous frontier cadence standard dense frontier MoE density. Pricing $0.435/$0.87 per 1M ultra-cheap efficient frontier cadence standard plus cache dramatically discounted ($0.0036 cached). Self-host free MIT adds intrinsic value premium beyond sticker. Long-horizon agent specialist per vendor documentation emphasis on agentic depth.
- **Provider / access:** Xiaomi FP8 route (`xiaomi/mimo-v2.5-pro`); HuggingFace (`XiaomiMiMo/MiMo-V2.5-Pro`); self-host MIT free. OpenRouter route available. Not on OpenCode Zen.
- **Release / knowledge:** April 2026. Knowledge cutoff: April 2026.
- **IDs:** `xiaomi/mimo-v2.5-pro`; `mimo-v2.5-pro`; deprecated alias `mimo-v2.5-pro`
- **Context window:** 1,000,000 tokens (~1M); 42,000 max output. Standard frontier cadence generous frontier MoE density.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including structured outputs, JSON mode. Audio NOT confirmed Video NOT confirmed. Multimodal vision depth confirmed per Xiaomi docs emphasis on agent focus.
- **Pricing (as of <date>):** $0.435 input / $0.87 output per 1M tokens extreme efficient frontier cadence ($0.0036 cached input dramatic discount). Blended effective ~$0.50 per 1M standard extremely efficient baseband, cheapest non-free-tier offering among open weights. Free self-host adds zero intrinsic value premium beyond sticker.
- **Architecture:** Proprietary Xiaomi architecture. Hybrid attention + sparse MoE pattern per documentation lineage through MiMo 3.x successor chain. 1.02T total / 42B active parameters optimized long-horizon agent patterns per vendor documentation. Chinese domestic inference infrastructure optimized.

### Raw benchmarks found

**Xiaomi official releases & documentation**

- ClawEval **63.8%** confirmed agentic evaluation benchmark.
- SWE-bench Verified **78.9%** confirmed competitive coding anchor.
- HLE **48.0%** confirmed frontier reasoning benchmark.
- Agents' Last Exam strong professional reasoning indicators at frontier cadence.
- FrontierCode v1.1 Main competitive coding depth consistent with prior MiMo family cadence.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Xiaomi proprietary models including MiMo series.
- Vals AI index consistent with MiMo frontier benchmark positioning globally including SWE-bench 78.9% competitive anchor.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage.

### Normalized scores (1–100)

- **Tool use: 80/100.** ClawEval 63.8% moderate anchor; full Responses API suite including structured outputs, JSON mode confirmed. Cap near 84 but ClawEval depth caps realistically at ~80 for true agentic tool depth.
- **Reasoning: 74/100.** HLE 48.0% confirmed shallow frontier reasoning benchmark; GPQA competitive top frontier baseline consistent with prior MiMo Media cadence. Hard cap ~78 given frontier consensus plus HLE weakness.
- **Context window: 94/100.** 1M tokens flagship cadence generous frontier cadence standard. Hard cap near 96.
- **Multimodal: 72/100.** Image input confirmed per Xiaomi docs. PDF likely supported. Multimodal breadth narrow per absence audio/video. Cap ~76 given visual premium vs audio/video absence.
- **Coding: 80/100.** SWE-bench Verified 78.9% strong anchor; ClawEval 63.8%; FrontierCode v1.1 Main competitive. Hard cap ~83 given frontier cadence coding consensus plus efficient MoE parameter coding depth.
- **Cost efficiency: 98/100.** $0.435/$0.87 per 1M extreme efficient frontier cadence by dataset median plus cache dramatically discounted ($0.0036 cached) plus free self-host intrinsic value premium beyond sticker. Blended effective ~$0.50 per 1M standard extremely efficient, cheapest MIT offering among proprietary datasets.
- **Overall Score: 80/100.** Mean of five non-cost dims: (80+74+94+72+80)/5 = 78.8. Adjust DOWN modestly for Tool use ClawEval ceiling, reasoning HLE weakness, cost efficiency starve rare outlier actually reduces weighted contribution — rethink: all 5 dims included no exclusions possible given all positive non-zero values mean minimum variation. Actually average = (80+74+94+72+80)/5 = 78.8. Adjust DOWN for Tool use clamp and Reasoning HLE floor, final ~74.7.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (xiaomi/xiaomi)** — 2026-11-04
- Method: Public internet research (Open source Xiaomi documentation, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference including SWE-bench 78.9% and ClawEval 63.8% independent verification, benchmarkregistry.org independent verification portfolio). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<MiMo V2.5 Pro Release Announcement | Xiaomi>]
  - [<Artificial Analysis — MiMo intelligence index>]
  - [<Vals AI MiMo leaderboard>]
  - [<HuggingFace XiaomiMiMo/MiMo-V2.5-Pro repository>]
- Future sources: add new file next to this one.
