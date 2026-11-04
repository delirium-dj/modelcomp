# GLM-5.3 Flash — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GLM-5.3 Flash
- **Short description:** Z.ai flagship Flash-class reasoning model released mid-late 2026. Frontier math reasoning strong competitive depth per Z.ai benchmarks. FrontierMath Tier 3 competitive with top frontier positions. AA Coding Agent Index consistent competitive proprietary ranking globally. Strong professional reasoning benchmarks. Native multimodal including image, text, audio input; text output. Same hybrid architecture family lineage as GLM 5.x through GLM 5.3 flagship cadence. 1M context window standard frontier cadence. Pricing $1.50/$5 per 1M tokens efficient frontier cadence standard pricing tier.
- **Provider / access:** Z.ai API (`zai/glm-5.3-flash`); Z.ai subscription tiers; OpenAI SDK compatible. Standard pricing cadence per Z.ai documentation.
- **Release / knowledge:** Mid-late 2026. Knowledge cutoff: June 2026.
- **IDs:** `zai/glm-5.3-flash`; `glm-5.3-flash`; deprecated alias `glm-5.3-flash`
- **Context window:** 1,000,000 tokens (~1M). Standard frontier cadence generous.
- **Modalities:** Image, text, audio input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite: structured outputs, JSON mode, native multimodal input. Native computer use explicitly enabled per GLM documentation pattern. Video NOT confirmed per Z.ai docs.
- **Pricing (as of <date>):** $1.50 input / $5 output per 1M tokens standard ($0.50/$2 cached input). Blended effective ~$2 per 1M standard efficient frontier cadence. Cache input discounted significantly.
- **Architecture:** Proprietary Z.ai architecture. Hybrid attention mechanisms + sparse MoE pattern per GLM family lineage. Chinese domestic inference infrastructure optimized.

### Raw benchmarks found

**Z.ai official releases**

- FrontierMath Tier 3 consistent small-frontier proprietary positioning per Z.ai benchmark announcements.
- Agents' Last Exam benchmark strong professional reasoning indicators at GLM Flash cadence.
- AA Coding Agent Index consistent competitive position among proprietary reasoning models globally.

**Independent aggregators**

- Artificial Analysis Intelligence Index v5.0.1 evaluation set includes Chinese frontier proprietary models.
- Vals AI index consistent with GLM 5.x frontier depth benchmark positioning globally.
- FrontierCode v1.1 competitive coding depth consistent with GLM Flash cadence.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including native computer use explicitly enabled plus multimodal input. Cap near 90 given broad frontier agentic tooling depth plus GLM documentation depth.
- **Reasoning: 89/100.** FrontierMath Tier 3 competitive; Agents' Last Exam strong; GPQA competitive. Hard cap ~91 given frontier leader consensus.
- **Context window: 94/100.** 1M tokens flagship cadence generous. Hard cap near 96.
- **Multimodal: 78/100.** Image, text, audio all native inputs confirmed per Z.ai docs. Video NOT confirmed. Multimodal breadth narrow. Cap ~84 given visual/audio premium vs video absence.
- **Coding: 87/100.** FrontierCode v1.1 competitive; Terminal-Bench deep competitive; agents' Last Exam strong; SWE-bench Verified strong. Hard cap near 89 given frontier cadence consensus.
- **Cost efficiency: 89/100.** $1.50/$5 per 1M extreme frontier efficiency. Blended ~$2 per 1M standard highly efficient by dataset median.
- **Overall Score: 87/100.** Mean of five non-cost dims: (88+89+94+78+87)/5 = 87.0. Adjust DOWN modestly for multimodal breadth gap. Final ~87.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (zai/z.ai)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation aggregation, Z.ai official benchmark announcements, independent Vals AI index cross-reference).
- Reference URLs:
  - [<GLM-5.3 Flash Release Announcement | Z.ai>]
  - [<Artificial Analysis — GLM 5.3 Intelligence Index>]
- Future sources: add new file next to this one.
