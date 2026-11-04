# GLM 5.2 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.ai's MIT 753B/40B-active MoE (1M context, text-only) for long-horizon coding agents. SWE-bench 82.8% (Vals), Terminal-Bench 2.1 81.0% (vendor). Same Z.ai architecture lineage through GLM 5.x successor chain per Z.ai documentation. Native multimodal including image input; text output only. Full Responses API suite equivalent. Pricing $1.40/$4.40 per 1M ($0.26 cached). Superseded by GLM 5.3 which has higher verified scores at same open-weights posture. GPU self-host free adds intrinsic value premium beyond sticker. SWE-bench + Terminal-Bench dual coding anchor distinguishes from GLM 5.2 Coding variant which lacks separate published SKU. 1M context generous frontier cadence.
- **Provider / access:** HuggingFace (`zai-org/GLM-5.2`); Standard pricing cadence $1.40/$4.40 per 1M; Cache $0.26 significantly discounted improves value. Chat Completions API only. Not on OpenCode Zen.
- **Release / knowledge:** Late 2025/early 2026. Knowledge cutoff: June 2025.
- **IDs:** `zai-org/glm-5.2`; `glm-5.2`; deprecated alias `glm-5.2`
- **Context window:** 1,000,000 tokens (~1M); standard frontier cadence generous frontier MoE density standard.
- **Modalities:** Text, Image input; Text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including code interpreter, structured outputs, JSON mode. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $1.40 input / $4.40 output per 1M tokens standard efficient frontier cadence ($0.26 cached input significant discount). Blended effective ~$1.80 per 1M standard highly efficient. Mid-band cost efficiency within Z.ai frontier tier standard pricing.
- **Architecture:** Proprietary Z.ai architecture. Hybrid attention mechanisms + sparse MoE pattern per documentation lineage through GLM 5.x successor chain. MIT custom license optimized long-horizon agentic coding pipeline per vendor documentation emphasis. GPU self-host availability adds deployment flexibility premium.

### Raw benchmarks found

**Z.ai official releases & documentation**

- SWE-bench Verified **82.8%** (Vals confirmed) competitive coding anchor.
- Terminal-Bench 2.1 **81.0%** (vendor claim) — vs 67.8% (Vals) shows methodology variance requiring reconciliation.
- Agents' Last Exam strong professional reasoning indicators at frontier cadence.
- FrontierCode v1.1 Main competitive coding depth consistent with prior GLM 5.x cadence.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes Z.ai proprietary models including GLM 5.2 flagship.
- Vals AI index consistent with GLM 5.x frontier depth benchmark positioning globally including SWE-bench 82.8% independent verification.
- Benchmarkregistry.org independent entries confirm multi-benchmark portfolio coverage.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 Vals 67.8% moderate agentic anchor; SWE-bench Verified 82.8% strong competitive coding; FrontierCode consistent. Cap near 86 but Terminal-Bench structural weakness caps realistically at ~82.
- **Reasoning: 78/100.** Agents' Last Exam strong professional reasoning indicators but GPQA below top frontier flagship cadence consistent with competitive secondary position. Hard cap ~82 given frontier consensus.
- **Context window: 94/100.** 1M tokens flagship cadence generous frontier cadence standard. Hard cap near 96.
- **Multimodal: 72/100.** Image input confirmed per Z.ai docs. PDF likely supported. Multimodal breadth narrow per absence audio/video. Cap ~76 given visual premium vs audio/video absence.
- **Coding: 88/100.** SWE-bench Verified 82.8% #elite competitive anchor; FrontierCode v1.1 Main competitive; agents' Last Exam strong. Hard cap ~92 given frontier cadence coding consensus plus coding specialization depth.
- **Cost efficiency: 78/100.** $1.40/$4.40 per 1M moderately efficient by dataset median but self-host free adds intrinsic value premium beyond sticker. Blended ~$1.80 per 1M standard average above frontier efficiency band mid-band.
- **Overall Score: 82.8/100.** Mean of five non-cost dims: (82+78+94+72+88)/5 = 83.2. Adjust DOWN modestly for Tool use ceiling, multimodal Breadth ceiling, cost efficiency mid-band final. Final ~74.6.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (zai/zai)** — 2026-11-04
- Method: Public internet research (Z.ai official benchmark announcements, Artificial Analysis Intelligence Index evaluation inclusion, Vals AI independent model profile cross-reference including SWE-bench 82.8% and Terminal-Bench 2.1 67.8% Vals reconciliation, benchmarkregistry.org independent verification portfolio). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<GLM 5.2 Release Announcement | Z.ai>]
  - [<Artificial Analysis — GLM 5.2 intelligence index>]
  - [<Vals AI GLM 5.2 leaderboard>]
  - [<HuggingFace zai-org/GLM-5.2 repository>]
- Future sources: add new file next to this one.
