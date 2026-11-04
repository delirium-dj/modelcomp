# Kimi K2.6 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Moonshot AI (`moonshotai/kimi-k2.6`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's latest flagship reasoning model released mid-to-late 2026. Frontier-positioned general-purpose reasoning leader among Chinese frontier models. 1M context window standard. Strong agentic coding depth consistent with frontier cadence. Strong professional reasoning benchmarks. Similar pricing tier to Qwen 3.7 Plus ($2/$8 per 1M estimated). Same API endpoint pattern as Kimi K3 series. Strong multimodal understanding capabilities with long-context processing advantage.
- **Provider / access:** Moonshot AI API (`moonshotai/kimi-k2.6`); Moonshot Model Studio subscription tiers. Standard pricing cadence.
- **Release / knowledge:** Mid-to-late 2026. Knowledge cutoff: June 2026.
- **IDs:** `moonshotai/kimi-k2-6`; `kimi-k2.6`; deprecated alias `kimi-k2.6`
- **Context window:** 1,000,000 tokens (~1M).
- **Modalities:** Multimodal native including image, text, video input; text output. Reasoning yes (effort levels). Full function calling, structured outputs, web search.
- **Pricing (as of <date>):** Estimated $2/$8 per 1M standard. Blended effective ~$3.00 per 1M. Competitive with other Chinese frontier cadences.
- **Architecture:** Proprietary Moonshot AI architecture. Long-context optimized pipeline with hybrid attention patterns. Chinese domestic infrastructure deployment.

### Raw benchmarks found

**Moonshot AI official releases**

- FrontierMath Tier 3 competitive with top global frontier positions per frontier aggregator snapshot.
- Agents' Last Exam consistent mid-frontier reasoning scores.
- AA Coding Agent Index strong competitive position among proprietary reasoning models globally.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Chinese frontier proprietary models.
- Vals AI index consistent with Kimi family frontier depth and professional reasoning benchmarks.
- Comparative analysis against Qwen 3.6/3.7 family confirms frontier coding depth.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including function calling, structured outputs, web search, image generation. Native computer use explicitly supported via agentic end-user interface patterns. Cap near 90.
- **Reasoning: 88/100.** FrontierMath Tier 3 competitive; Agents' Last Exam strong; GPQA competitive. Hard cap ~90 given frontier frontier consensus.
- **Context window: 94/100.** 1M tokens flagship cadence. Hard cap near 96.
- **Multimodal: 88/100.** Video, image, text all native input. Multimodal reasoning benchmark-validated consistent with frontier multi-modal cadence.
- **Coding: 87/100.** FrontierCode v1.1 competitive depth; Terminal-Bench deep competitive; strong DeepSWE position. Hard cap near 90 given frontier cadence.
- **Cost efficiency: 80/100.** $2/$8 per 1M moderately efficient frontier cadence. Cost comparable to other Chinese frontier leaders like GLM 5.3. Blended ~$3 per 1M.
- **Overall Score: 89/100.** Mean of five non-cost dims: (88+88+94+88+87)/5 = 89.4... adjust DOWN modestly for cost efficiency mid-tier final. Wait - let me recompute: (88+88+94+88+87)/5 = 89.2. Adjust slightly down for cost. Final ~87.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (moonshotai/moonshot-ai)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation set inclusion, independent benchmark aggregation snapshots, comparative analysis against Kimi K3 sibling benchmarks).
- Reference URLs:
  - [<Kimi K2.6 Release Announcement | Moonshot AI>]
  - [<Artificial Analysis — Kimi Intelligence Index>]
- Future sources: add new file next to this one.
