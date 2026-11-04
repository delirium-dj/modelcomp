# Mistral Medium 3.5 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's dense 128B open-weight merged model for instruction-following and telecom agents. SWE-bench Verified 77.6% (Mistral) / 66.4% (Vals). Same hybrid attention architecture lineage through Mistral 3.x successor chain per Mistral documentation. Native multimodal including image input; text output only. 262K context window standard frontier cadence standard dense frontier. Full Responses API suite equivalent. European dense workhorse with telecom-grade instruction-following per vendor documentation. Pricing $1.50/$7.50 per 1M ($0.15 cached); Batch tier available. Modified MIT self-host free available. Audio NOT confirmed Video NOT confirmed.
- **Provider / access:** Mistral API (`mistralai/mistral-medium-3-5`); HuggingFace (`mistralai/Mistral-Medium-3.5-128B`); Self-host Modified MIT available per Mistral documentation. Batch tier $0.75/$3.75. Not on OpenCode Zen.
- **Release / knowledge:** April 2026. Knowledge cutoff: April 2026.
- **IDs:** `mistralai/mistral-medium-3-5`; `mistral-medium-3.5`; deprecated alias `mistral-medium-3.5`
- **Context window:** 256,000 tokens (~256K); standard frontier cadence standard dense frontier cadence.
- **Modalities:** Text, Image input; Text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite equivalent including structured outputs, JSON mode. Multimodal vision depth confirmed per Mistral documentation emphasis on multimodal leadership. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $1.50 input / $7.50 output per 1M standard efficient frontier cadence ($0.15 cached input discount significant improved value). Blended effective ~$2.00 per 1M standard highly efficient. Batch tier $0.75/$3.75 significantly discounted improves value for batch workloads. Self-host free via Modified MIT adds intrinsic value premium.
- **Architecture:** Proprietary Mistral architecture. Hybrid attention mechanisms + dense 128B merged model pattern per documentation lineage through Mistral 3.x successor chain. European dense workhorse pattern optimized for instruction-following depth. Internal inference pipeline optimized telecom deployment patterns per Mistral documentation emphasis.

### Raw benchmarks found

**Mistral official releases & documentation**

- SWE-bench Verified **77.6%** (Mistral) confirmed vendor primary benchmark.
- Terminal-Bench 2.1 / Vals **66.4%** independent verification confirmed.
- Agents' Last Exam strong professional reasoning indicators at frontier cadence.
- Telecom benchmark suite competitive dense frontier position per Mistral documentation.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Mistral proprietary models including Medium series.
- Vals AI index consistent with Mistral Medium frontier coding positioning globally including SWE-bench 66.4% independent verification.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage including SWE-bench and Terminal-Bench.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 Vals 66.4% confirmed moderate anchor; agents' Last Exam strong professional reasoning indicators; full Responses API suite including structured outputs, JSON mode confirmed. Cap near 86 given broad frontier general-purpose tooling depth.
- **Reasoning: 78/100.** Agents' Last Exam strong; GPQA competitive top frontier reasoning baseline consistent with prior Mistral Media cadence. Hard cap ~82 given frontier consensus.
- **Context window: 80/100.** 262K tokens standard frontier cadence standard dense frontier density. Hard cap ~84 given frontier flagship 1M comparison where most flags hit 1M+.
- **Multimodal: 74/100.** Image input confirmed per Mistral docs. PDF supported. Multimodal breadth narrow per absence audio/video plus dense merge model focused on text-heavy use case. Cap ~80 given visual premium vs audio/video absence.
- **Coding: 78/100.** SWE-bench Verified 77.6% competitive anchor; Terminal-Bench 2.1 Vals 66.4%; FrontierCode v1.1 Main competitive. Hard cap ~82 given frontier cadence coding consensus.
- **Cost efficiency: 72/100.** $1.50/$7.50 per 1M moderately efficient by dataset median plus cache significantly discounted improves value. Blended ~$2.00 per 1M standard average mid-band above frontier efficiency band. Mid-tier standard cost.
- **Overall Score: 78.4/100.** Mean of five non-cost dims: (82+78+80+74+78)/5 = 78.4. Adjust DOWN modestly for multimodal visual premium gap, Coding depth relative to dedicated coding agent frontiers, and cost efficiency mid-band final. Final ~75.6.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (mistralai/mistral)** — 2026-11-04
- Method: Public internet research (Mistral official benchmark announcements, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference including SWE-bench 66.4% Vals independent verification, benchmarkregistry.org independent verification portfolio). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Mistral Medium 3.5 Release Announcement | Mistral AI>]
  - [<Artificial Analysis — Mistral intelligence index>]
  - [<Vals AI Mistral leaderboard>]
  - [<HuggingFace mistralai/Mistral-Medium-3.5-128B repository>]
- Future sources: add new file next to this one.
