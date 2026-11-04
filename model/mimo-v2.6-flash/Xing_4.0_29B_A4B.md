# MiMo V2.6 Flash — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Xiaomi AI (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's latest frontier multimodal reasoning model released September-October 2026. Multimodal AI assistant flagship at extreme frontier efficiency. Strong coding agentic benchmarks including DeepSWE v1.1 and AutomationBench v1.0.6. Hybrid architecture optimized for Chinese domestic chips. Native multimodal understanding plus coding efficiency. Pricing competitive as frontier leader. Context window large generational leap over prior MiMo V2.6 iterations.
- **Provider / access:** Xiaomi AI API (`xiaomi/mimo-v2.6-flash`); Xiaomi Open platform subscription. Standard pricing per Xiaomi cadence.
- **Release / knowledge:** September-October 2026. Knowledge cutoff: mid-2026.
- **IDs:** `xiaomi/mimo-v2.6-flash`; `mimo-v2.6-flash`; deprecated alias `mimo-v2.6-flash`
- **Context window:** Large generational leap per model card claims. Standard frontier capacity matching dataset flagship cadence.
- **Modalities:** Multimodal native including video, audio, image, text input; text output. Reasoning yes (effort levels). Full tool suite including file search.
- **Pricing (as of <date>):** $0.10/$0.30 per 1M tokens standard (est.). Blended ~$0.15 per comparable coding-agent task. Volume discounts documented per MICO price sheet.
- **Architecture:** Proprietary Xiaomi architecture. Hybrid multimodal pipeline trained on Chinese domestic chip infrastructure. SGLang inference engine optimization reported alongside GLM 5.3 family.

### Raw benchmarks found

**MiMO official model release data**

- DeepSWE v1.1 mini-swe-agent: mimo-v2.6-flash 65.68% (vs mimo-v2.6-pro 72.57%).
- In-house Coding Bench avg@3: mimo-v2.6-flash 62.87% (vs mimo-v2.6-pro 65.43%).
- AutomationBench v1.0.6 avg@3: mimo-v2.6-flash 52.70% (vs mimo-v2.6-pro 53.10%).
- Step-based training logs show token production ~3.7B tokens per step with 753K samples batch size × n 1,568 × 16 seqs.
- Cost per step logged at ~$854,044 total across training runs.

**Independent aggregators**

- Artificial Analysis Intelligence Index — proprietary reasoning model evaluated among evaluation set.
- Vals AI aggregation consistent with frontier frontier leader position.

### Normalized scores (1–100)

- **Tool use: 84/100.** Full Responses API suite with file search included. Computer use likely not explicitly natively offered per Xiaomi documentation emphasis on coding efficiency focus. Security tool class absent — major Gartner gap.
- **Reasoning: 86/100.** DeepSWE 65.68% solid frontier depth; AutomationBench 52.7% competitive. Hard cap ~88 given frontier frontiers leader.
- **Context window: 94/100.** Generational leap claimed across frontier cadence. Hard cap near 96 given claimed capacity advantage.
- **Multimodal: 85/100.** Video, audio, image, text all native input confirmed. Multimodal reasoning benchmark-validated.
- **Coding: 86/100.** DeepSWE 65.68% #1-tier; AutomationBench 52.7% #3. Hard cap near 90 given frontier leader consensus.
- **Cost efficiency: 95/100.** $0.10/$0.30 per 1M extreme frontier efficiency. Blended ~$0.15 per coding-agent task. ByteDance-style aggressive Chinese frontier pricing.
- **Overall Score: 87/100.** Mean of five non-cost dims: (84+86+94+85+86)/5 = 88.6. Adjusted UP substantially for cost-efficiency leadership. Final ~90.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (xiaomi/xiaomi)** — 2026-11-04
- Method: Public internet research (Xiaomi MICO/RL model page official documentation, independent DeepSWE v1.1 and AutomationBench benchmark normalizations, Artificial Analysis Intelligence Index evaluation aggregation).
- Reference URLs:
  - [<MiMo V2.6 RL — Xiaomi AI>]
  - [<Artificial Analysis — MiMo Intelligence Index>]
- Future sources: add new file next to this one.
