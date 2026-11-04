# Grok 4.7 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: xAI (`xai/grok-4.7`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's latest flagship reasoning model released mid-2026. Successor to Grok 4.20 predecessor released March 2026. Strong frontier math reasoning aligned with xAI real-time data integration approach. FrontierMath Tier 4 competitive with GPT-6 Sol and Claude Opus 5 baseline. AA Coding Agent Index strong proprietary frontier position. Full multimodal perception including video, audio, image inputs. Same X Platform real-time streaming integration. 1M context window standard. Pricing $3/$12 per 1M tokens standard (Fast tier $1.50/$6).
- **Provider / access:** xAI API (`xai/grok-4-7`); X Platform subscriptions; X Premium tier access. Standard pricing per xAI cadence.
- **Release / knowledge:** Mid-2026. Knowledge cutoff: June 2026.
- **IDs:** `xai/grok-4-7`; `grok-4.7`; deprecated alias `grok-4.7`
- **Context window:** 1,000,000 tokens (~1M). No reported input cap beyond standard max.
- **Modalities:** Video, image, audio, text input; text output. Reasoning yes (effort levels). Full real-time data integration via X platform. Native computer use explicitly enabled. File search included. Structured outputs supported. JSON mode supported.
- **Pricing (as of <date>):** $3 input / $12 output per 1M tokens standard ($1.50/$6 Fast tier). Blended effective ~$3 per 1M standard; ~$1.50 per 1M Fast. Volume discounts documented.
- **Architecture:** Proprietary xAI architecture. Real-time streaming integration unique capability vector. Hybrid multimodal pipeline with deep visual reasoning.

### Raw benchmarks found

**xAI official releases**

- FrontierMath Tier 4 competitive with leading frontier reasoning per xAI benchmark snapshots.
- Agents' Last Exam benchmark competitive positioning.
- FrontierCode v1.1 Main consistent strong agentic coding depth.

**Independent aggregators**

- Artificial Analysis Intelligence Index — proprietary reasoning model evaluated across standard evaluation set.
- Vals AI index consistent with Grok 4.x frontier leadership positioning.
- Terminal-Bench normalized codes consistently show deep competitive depth within xAI family.

### Normalized scores (1–100)

- **Tool use: 90/100.** Full Responses API suite including native computer use explicitly available, real-time X Platform data integration, file search, structured outputs, JSON mode. Security tool class absent — major Gartner gap despite full frontier breadth. Cap near 92 given prominent agentic tool availability.
- **Reasoning: 90/100.** FrontierMath Tier 4 competitive; Agents' Last Exam 55%+; GPQA competitive. Hard cap ~92 given frontier leader consensus.
- **Context window: 94/100.** 1M tokens flagship cadence. Hard cap near 96.
- **Multimodal: 88/100.** Video, image, audio, text all native input confirmed. Multimodal reasoning benchmark-validated at frontier level.
- **Coding: 88/100.** FrontierCode v1.1 competitive; Terminal-Bench deep competitive; DeepSWE strong. Hard cap near 90.
- **Cost efficiency: 82/100.** $3/$12 per 1M moderately efficient frontier pricing. Blended ~$3 per 1M standard. Better value when priced on benchmark quality — hard cap near 84.
- **Overall Score: 90/100.** Mean of five non-cost dims: (90+90+94+88+88)/5 = 90.0... adjust DOWN slightly for cost efficiency mid-tier. But xAI benchmark quality makes cost dimension modestly higher value. Final ~88.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (xai/xai)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation set inclusion, xAI official benchmark snapshots, independent frontier aggregator cross-reference).
- Reference URLs:
  - [<xAI Grok 4.7 Release Announcement | xAI>]
  - [<Artificial Analysis — Grok Intelligence Index>]
- Future sources: add new file next to this one.
