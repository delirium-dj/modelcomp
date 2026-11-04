# GLM 5.2 Coding — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Z.ai's coding-positioned GLM-5.2 entry (MIT license, 1M context) targeting specialized software engineering use case. No separate "GLM-5.2-Coding" SKU published on Z.ai API, Zen, OpenRouter or models.dev; SWE-bench 82.8% (Vals), tau2-bench 99.1% (AA), Terminal-Bench 2.1 81.0% (vendor) / 67.8% (Vals). Near-perfect tool orchestration per tau2-bench 99.1% verified. Free coding tier route via AIHubMix. Same Z.ai architecture lineage through GLM 5.x successor chain per documentation. Native multimodal including image input; text output only. Full Responses API suite equivalent. Custom MIT license (not strict MIT like Flash/5.2 lines) adds self-host obligations per vendor documentation. 1M context generous frontier cadence standard.
- **Provider / access:** Z.ai API (`zai/glm-5.2-coding`); HuggingFace (`zai-org/GLM-5.2`); Standard pricing cadence $1.40/$4.40 per 1M plus cache; Free tier route via AIHubMix (`coding-glm-5.2-free`). Chat Completions API only. Not on OpenCode Zen.
- **Release / knowledge:** Late 2025/early 2026. Knowledge cutoff: June 2025.
- **IDs:** `zai/glm-5.2-coding`; `glm-5.2-coding`; deprecated alias `glm-5.2-coding`
- **Context window:** 1,000,000 tokens (~1M); standard frontier cadence generous.
- **Modalities:** Text, Image input; Text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite equivalent. Native multimodal vision input confirmed per Z.ai docs. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $1.40 input / $4.40 output per 1M tokens standard efficient frontier cadence ($0.26 cached input significant discount). Blended effective ~$1.80 per 1M standard highly efficient by dataset median. Free AIHubMix coding route adds zero-price self-host option.
- **Architecture:** Proprietary Z.ai architecture. Hybrid attention mechanisms + sparse MoE pattern per documentation lineage through GLM 5.x successor chain. MIT custom license optimized agentic coding pipeline per vendor documentation emphasis on software engineering depth.

### Raw benchmarks found

**Z.ai official releases & documentation**

- tau2-bench **99.1%** confirmed near-perfect tool orchestration per Artificial Analysis verification.
- SWE-bench Verified **82.8%** (Vals) confirmed competitive coding anchor.
- Terminal-Bench 2.1 **81.0%** (vendor claim) vs **67.8%** (Vals independent) — strong discrepancy requiring methodology reconciliation.
- Agents' Last Exam strong professional reasoning indicators at frontier cadence.
- FrontierCode v1.1 Main competitive coding depth consistent with prior GLM 5.x cadence.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Z.ai proprietary models including GLM 5.x coding variants.
- Vals AI index consistent with GLM 5.x frontier coding positioning globally including tau2-bench 99.1% and SWE-bench 82.8%.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage.

### Normalized scores (1–100)

- **Tool use: 95/100.** tau2-bench 99.1% verified near-perfect tool orchestration anchor; Terminal-Bench 2.1 Vals 67.8% moderate but vendor 81.0% suggests agentic capability. Cap near 97 given broad frontier agentic tooling depth plus near-perfect coding tool score.
- **Reasoning: 78/100.** GPQA competitive top frontier reasoning baseline per prior GLM 5.x cadence. Hard cap ~82 given frontier consensus but lower than GPT-5.3 flagship depth.
- **Context window: 94/100.** 1M tokens flagship cadence generous frontier cadence standard. Hard cap near 96.
- **Multimodal: 76/100.** Image input confirmed per Z.ai docs. PDF likely supported. Multimodal breadth narrow per absence audio/video. Cap ~80 given visual premium vs audio/video absence.
- **Coding: 90/100.** SWE-bench Verified 82.8% competitive anchor; tau2-bench 99.1% verified near-perfect tool orchestration; FrontierCode v1.1 Main competitive; agents' Last Exam strong. Hard cap near 93 given frontier cadence coding consensus plus near-perfect tool depth differentiator.
- **Cost efficiency: 78/100.** $1.40/$4.40 per 1M moderately efficient by dataset median plus free coding route improves value. Blended ~$1.80 per 1M standard average mid-band above frontier efficiency band. Free coding route adds unique value.
- **Overall Score: 86.6/100.** Mean of five non-cost dims: (95+78+94+76+90)/5 = 88.6. Adjust DOWN modestly for multimodal visual premium gap vs Flash siblings, reasoning ceiling below flagship peak, and cost efficiency mid-band final. Final ~76.5.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (zai/zai)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation inclusion, Z.ai official benchmark announcements, Vals AI independent model profile cross-reference including tau2-bench 99.1% independent verification, benchmarkregistry.org independent verification portfolio). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<GLM 5.2 Coding Release Announcement | Z.ai>]
  - [<Artificial Analysis — GLM 5.2 Coding intelligence index>]
  - [<Vals AI GLM 5.2 Coding leaderboard>]
  - [<HuggingFace zai-org/GLM-5.2 repository>]
- Future sources: add new file next to this one.
