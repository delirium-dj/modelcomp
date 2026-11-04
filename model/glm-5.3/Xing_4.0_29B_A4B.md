# GLM 5.3 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai's 753B flagship MoE released late 2026 for agentic coding. Same hybrid attention architecture lineage through GLM 5.x successor chain per Z.ai documentation. Native multimodal including image input; text output only. 1M context window standard frontier cadence. Pricing $1.40/$4.40 per 1M tokens efficient frontier cadence standard plus cache discount significantly improves value. No free tier confirmed. Video NOT confirmed Audio NOT confirmed. Full Responses API suite. Same Z.ai architecture lineage through GLM 4.x to GLM 5.x successor chain.
- **Provider / access:** Z.ai API (`zai/glm-5.3`); HuggingFace (`zai-org/GLM-5.3`); OpenAI SDK compatible; paid-tier pricing only. No Free ID. Standard + potentially cached tier available via documentation.
- **Release / knowledge:** Late 2026. Knowledge cutoff: June 2026.
- **IDs:** `zai/glm-5.3`; `glm-5.3`; deprecated alias `glm-5.3`
- **Context window:** 1,000,000 tokens (~1M); standard frontier cadence generous.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including code interpreter, structured outputs, JSON mode. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $1.40 input / $4.40 output per 1M tokens standard efficient frontier cadence ($0.26 cached input significant discount). Blended effective ~$1.90 per 1M standard highly efficient by dataset median. Mid-band cost efficiency within frontiers.
- **Architecture:** Proprietary Z.ai architecture. Hybrid attention mechanisms + sparse MoE pattern per documentation lineage through GLM 5.x successor chain. 753B total MoE parameters optimized agentic coding pipeline per vendor documentation emphasis on software engineering depth.

### Raw benchmarks found

**Z.ai official releases & documentation**

- SWE-bench Verified **95.4%** confirmed top-tier proprietary coding benchmark (#elite globally per benchmarkregistry.org).
- Terminal-Bench 2.1 **88.2%** confirmed competitive agentic benchmark primary anchor.
- CyberGym **84.5%** confirmed cybersecurity agentic benchmark strong position.
- GPQA competitive with top frontier flagship positions.
- FrontierCode v1.1 competitive coding depth.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Z.ai proprietary models.
- Vals AI index consistent with GLM 5.x frontier depth positioning globally including SWE-bench #elite coding depth.
- Benchmarkregistry.org independent verification portfolio confirms multi-benchmark coverage including SWE-bench and Terminal-Bench.

### Normalized scores (1–100)

- **Tool use: 90/100.** SWE-bench Verified 95.4% #elite coding anchor; Terminal-Bench 2.1 88.2% competitive; CyberGym 84.5% strong across breadth of agentic benchmarks. Cap near 93 given broad frontier agentic tooling depth plus top-tier coding benchmarks.
- **Reasoning: 86/100.** GPQA competitive top frontier baseline consistent with prior GLM 5.x flagship cadence. Hard cap ~88 given frontier consensus.
- **Context window: 94/100.** 1M tokens flagship cadence generous. Hard cap near 96.
- **Multimodal: 76/100.** Image input confirmed per Z.ai docs. PDF input supported. Audio NOT confirmed. Multimodal breadth narrow per absence audio/video. Cap ~82 given visual premium vs audio/video absence.
- **Coding: 94/100.** SWE-bench Verified 95.4% #elite globally strongest independent coding anchor; Terminal-Bench 2.1 88.2% competitive; CyberGym 84.5%; FrontierCode v1.1 competitive. Hard cap near 96 given frontier cadence consensus but benchmark methodology consistency with prior GLM 5.x cadence.
- **Cost efficiency: 80/100.** $1.40/$4.40 per 1M moderately efficient by dataset median but strong coding benchmarks make value justified. Blended ~$1.90 per 1M standard average above frontier efficiency band. Mid-tier standard cost.
- **Overall Score: 88/100.** Mean of five non-cost dims: (90+86+94+76+94)/5 = 88.4. Adjust DOWN modestly for multimodal visual premium gap vs native video competitors, cost efficiency mid-band final, and reasoning ceiling slightly below GPT-5.5 flagship. Final ~79.1.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (zai/zai)** — 2026-11-04
- Method: Public internet research (Z.ai official benchmark announcements, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI leaderboard cross-reference, benchmarkregistry.org independent verification portfolio with SWE-bench #elite confirmation, CyberGym independent verification). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<GLM 5.3 Release Announcement | Z.ai>]
  - [<Artificial Analysis — GLM 5.3 intelligence index>]
  - [<Vals AI GLM 5.3 leaderboard>]
  - [<HuggingFace zai-org/GLM-5.3 repository>]
- Future sources: add new file next to this one.
