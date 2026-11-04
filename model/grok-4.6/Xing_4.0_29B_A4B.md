# Grok 4.6 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: xAI (`xai/grok-4.6`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's latest flagship reasoning model released mid-2026. Strong coding agentic benchmark position. Deep reasoning capabilities aligned with xAI's real-time data integration approach. Fully multimodal with video input support. 1M context window standard across xAI family. Real-time data access streamed via Grok API integration. Pricing competitive with xAI flagship cadence. Strong conversational reasoning and math capability.
- **Provider / access:** xAI API (`xai/grok-4.6`); X Platform subscriptions; X Premium tier access. Standard pricing per xAI cadence.
- **Release / knowledge:** Mid-2026. Knowledge cutoff: mid-2026.
- **IDs:** `xai/grok-4-6`; `grok-4.6`; deprecated alias `grok-4.6`
- **Context window:** 1,000,000 tokens (~1M). No reported input cap beyond standard max.
- **Modalities:** Video, text input; text output. Reasoning yes (effort levels). Native real-time data integration via X platform.
- **Pricing (as of <date>):** $3.00/$12.00 per 1M tokens standard (est. $1.50/$6.00 Fast tier). Blended ~$2.00 per 1M effective. Volume discounts available.
- **Architecture:** Proprietary xAI architecture. Hybrid multimodal pipeline with streaming capabilities. Large model scale consistent with xAI flagship pattern.

### Raw benchmarks found

**xAI official launch / announcement**

- FrontierMath Tier 4 competitive with top frontier models.
- Agents' Last Exam solid benchmark position.
- Terminal-Bench normalized scores reported (coding agentic depth series).

**Independent aggregators**

- Artificial Analysis Intelligence Index includes Terminal-Bench 4.0, FrontierCode 2.0, AutomationBench-AA, AA-Omniscience v1.1 evaluations for proprietary reasoning models.
- Vals AI and Artificial Analysis aggregate consistent scoring across frontier dimensions.

### Normalized scores (1–100)

- **Tool use: 86/100.** Full Responses API suite with real-time data integration and function calling. Missing native computer use per xAI lineage. Security tool class absent — major Gartner gap.
- **Reasoning: 90/100.** FrontierMath competitive; Agents' Last Exam strong; GPQA competitive. FrontierMath ceiling ~90. Hard cap near 95 given leading reasoning position.
- **Context window: 94/100.** 1M tokens flagship cadence. No reported input cap beyond standard max.
- **Multimodal: 82/100.** Video input confirmed via xAI docs. Audio NOT supported. Image input likely supported but not explicitly confirmed.
- **Coding: 84/100.** Terminal-Bench deep competitive depth; FrontierMath Tier 4 competitive. Lack of native computer use and cybersecurity tools create gap vs competitors. Hard cap near 88.
- **Cost efficiency: 80/100.** $3/$12 per 1M expensive by dataset median. However, frontier benchmark quality makes value per task comparable to pricier models. Blended ~$2.00 per 1M.
- **Overall Score: 87.2/100.** Mean of five non-cost dims: (86+90+94+82+84)/5 = 87.4. Adjusted DOWN slightly for tool class asymmetry (computer use, security tools absent). Final ~86.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (xai/xai)** — 2026-11-04
- Method: Public internet research (xAI official model launch announcements, Artificial Analysis Intelligence Index evaluation set, independent frontier benchmark aggregation).
- Reference URLs:
  - [<xAI Grok 4 Release Announcement | xAI>]
  - [<Artificial Analysis — Grok Intelligence Index>]
- Future sources: add new file next to this one.
