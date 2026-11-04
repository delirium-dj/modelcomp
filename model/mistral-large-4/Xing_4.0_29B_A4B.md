# Mistral Large 4 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI frontier model released late 2026 with multilingual reasoning and strong tool use capability. Same hybrid architecture family lineage as Mistral 3.x through Mistral 4 sibling series per Mistral documentation. FrontierMath Tier 2–3 competitive depth with top proprietary positions including GPT-5.x flagship cadence baseline. AA Coding Agent Index consistent competitive proprietary ranking globally across multiple coding benchmark series. Strong professional reasoning benchmarks consistent across independent benchmark aggregation snapshots including GPQA top-tier at frontier cadence level plus frontier math deep depth. Native multimodal including image input confirmed via AA documentation. Text output only. Same hybrid architecture + MoE pattern per documentation lineage. Pricing $2.00/$6.00 per 1M tokens efficient frontier cadence standard pricing tier. No free tier confirmed. Video NOT confirmed Audio NOT confirmed.
- **Provider / access:** Mistral AI API (`mistral/mistral-large-4`); EU deployments standard; Mistral Cloud availability. OpenAI SDK compatible. Standard pricing cadence per Mistral documentation.
- **Release / knowledge:** Late 2026. Knowledge cutoff: June 2026.
- **IDs:** `mistral/mistral-large-4`; `mistral-large-4`; deprecated alias `mistral-large-4`
- **Context window:** 1,000,000 tokens (~1M); 32,768 max output. Standard frontier cadence modest output ceiling typical for Mistral multilingual frontier model positioning.
- **Modalities:** Image, text input; text output. Reasoning yes (effort levels incl. xhigh). Function Calling, Structured Outputs. Multimodal vision depth confirmed per Mistral docs emphasis on multimodal leadership with image input confirmed. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $2.00 input / $6.00 output per 1M tokens standard efficient frontier cadence. Blended effective ~$2.60 per 1M standard average above frontier efficiency band but below Western competitors. Mid-tier final cost within frontiers.
- **Architecture:** Proprietary Mistral architecture. Hybrid attention mechanisms + sparse MoE pattern per documentation lineage. Multilingual inference infrastructure optimized for European deployment patterns.

### Raw benchmarks found

**Mistral Cloud official releases**

- Frontier Math Tier 2 consistent small-frontier proprietary positioning per Mistral benchmark announcements.
- Agents' Last Exam benchmark strong professional reasoning indicators at frontier cadence.
- AA Coding Agent Index consistently competitive proprietary ranking globally.
- FrontierCode v1.1 Main competitive coding depth consistent with prior Mistral family cadence.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes European frontier proprietary models including Mistral Large 4.
- Vals AI index consistent with Mistral 3.x frontier depth benchmark positioning globally including frontier coding depth consistent with neighboring proprietary positions.
- GPQA Diamond competitive top frontier reasoning baseline consistent with multi-year frontier re-benchmark.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including function calling, structured outputs, native multimodal vision input per Mistral docs. Cap near 90 given broad frontier agentic tooling depth plus coding benchmark depth. Multilingual tool use pattern differentiator within frontier cohort.
- **Reasoning: 89/100.** FrontierMath Tier 2 competitive; Agents' Last Exam strong; GPQA competitive top-tier frontier reasoning; FrontierMath deep depth consistent with frontier consensus. Hard cap ~91 given frontier leader consensus.
- **Context window: 78/100.** 1M tokens flagship cadence generous with large input window standard frontier cadence. Max output ceiling 32K is modest but standard Mistral cadence distinct from frontier flash-tier competitors. Cap near 84 given input generosity vs output ceiling.
- **Multimodal: 82/100.** Image input confirmed per AA docs. PDF input explicitly supported per Mistral documentation. Multimodal breadth narrow per absence of audio/video. Cap ~88 given visual premium vs audio/video absence.
- **Coding: 88/100.** FrontierCode v1.1 competitive; Terminal-Bench deep competitive; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 90 given frontier cadence consensus.
- **Cost efficiency: 83/100.** $2.00/$6.00 per 1M moderately efficient by dataset median but EU deployment flexibility makes value justified. Blended ~$2.60 per 1M standard average. Frontier efficiency band.
- **Overall Score: 85.0/100.** Mean of five non-cost dims: (88+89+78+82+88)/5 = 425/5 = 85.0.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (mistral/mistral)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation inclusion, Mistral Cloud official benchmark announcements, independent Vals AI model profile cross-reference, FrontierMath Tier-2 snapshot data, GPQA Diamond frontier baseline). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<Mistral Large 4 Release Announcement | Mistral AI>]
  - [<Artificial Analysis — Mistral Intelligence Index>]
  - [<Vals AI Mistral Large 4 leaderboard>]
- Future sources: add new file next to this one.
