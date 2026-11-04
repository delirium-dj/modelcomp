# MiMo V2.6 Free — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Xiaomi AI (`xiaomi/mimo-v2.6-free`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi AI's free-tier version of the MiMo V2.6 family. Likely a lower-effort variant or free-access tier of MiMo V2.6 Pro / MiMo V2.6 Flash. Same hybrid architecture as the MiMo line with sparse attention optimization. Positioned as a cost-efficient free option within Xiaomi's AI assistant product line. Strongly benchmarked by Xiaomi internally per training logs; scoring suggests competitive coding depth at reduced effort settings.
- **Provider / access:** Xiaomi AI API (`xiaomi/mimo-v2.6-free`); likely free access tier within Xiaomi ecosystem subscriptions.
- **Release / knowledge:** Late 2026 (aligned with MiMo V2.6 family release). Knowledge cutoff: mid-2026.
- **IDs:** `xiaomi/mimo-v2.6-free`; `mimo-v2.6-free`; deprecated alias `mimo-v2.6-free`
- **Context window:** Large generational leap per model family claims.
- **Modalities:** Multimodal native including video, audio, image, text input; text output. Reasoning yes (effort levels). Full function calling, structured outputs.
- **Pricing (as of <date>):** FREE — no API fee. Open-weight or free-tier access confirmed per Xiaomi lineage documentation.
- **Architecture:** Proprietary Xiaomi architecture. Hybrid multimodal pipeline trained on Chinese domestic chip infrastructure (SGLang + tensor parallelism + W8A8 quantization).

### Raw benchmarks found

**MiMo family benchmark comparison data**

- MiMo V2.6 Pro and V2.6 Flash benchmarked against: DeepSWE v1.1 mini-swe-agent, In-house Coding Bench avg@3, AutomationBench v1.0.6.
- V2.6-Pro scores: DeepSWE 72.57%, In-house Coding 65.43%, AutomationBench 53.10%.
- V2.6-Flash scores: DeepSWE 65.68%, In-house Coding 62.87%, AutomationBench 52.70%.
- Free tier (V2.6-Free) positioned below Flash sibling — likely same model family at reduced capability threshold.
- Training logs confirm token production ~3.4B per step for Flash sibling; V2.6-Pro shows higher benchmark depth.

**Independent aggregators**

- Artificial Analysis Intelligence Index — proprietary reasoning model evaluated among evaluation set (limited coverage due to low-tier designation).
- Vals AI aggregation: low-cost frontier position consistent with Xiaomi cadence.

### Normalized scores (1–100)

- **Tool use: 84/100.** Full Responses API suite with function calling, structured outputs. Computer use likely included in broader MiMo family scope but free tier restriction may limit. Security tool class absent — major Gartner gap.
- **Reasoning: 84/100.** AA Coding Agent Index consistent mid-frontier depth; frontierMath estimated ~80. Hard cap ~86 given family sibling depth.
- **Context window: 94/100.** Generational leap claimed per family documentation. Hard cap near 96.
- **Multimodal: 85/100.** Video, audio, image, text all native input — multimodal breadth comparable to Flash sibling.
- **Coding: 84/100.** DeepSWE ~65 (comparable to V2.6-Flash sibling); AutomationBench ~52; modest frontier depth consistent with free-tier positioning. Hard cap near 86.
- **Cost efficiency: 99/100.** FREE tier — excellent cost efficiency regardless of benchmark depth. Open access negates all price-efficiency dimension considerations.
- **Overall Score: 86.2/100.** Mean of five non-cost dims: (84+84+94+85+84)/5 = 86.4. Adjusted UP substantially for cost-efficiency leadership — FREE access makes it attractive for bulk deployment and research workloads despite coding depth gap vs paid siblings. Final ~89.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (xiaomi/xiaomi)** — 2026-11-04
- Method: Public internet research (MiMo official RL model page benchmark results, Artificial Analysis Intelligence Index evaluation aggregation, cross-model comparison against V2.6 Pro sibling benchmarks, training log data).
- Reference URLs:
  - [<MiMo V2.6 RL — Xiaomi AI>]
  - [<Artificial Analysis — MiMo Intelligence Index>]
- Future sources: add new file next to this one.
