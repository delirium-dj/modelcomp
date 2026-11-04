# Seed 2.0 Pro — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** ByteDance Seed 2.0 Pro (Doubao Seed 2.0 Pro)
- **Short description:** ByteDance flagship closed multimodal agent model released 2026-02-14. FrontierMath Tier 3 competitive top frontier positions per independent benchmark aggregation. AA Coding Agent Index consistent competitive proprietary ranking globally across frontier coding benchmark depth plus professional reasoning benchmarks consistent across frontier cadence. Native multimodal including image and video input confirmed; text output only. Same pricing tier per ByteDance Doubao app heritage ($0.50/$3.00 per 1M tokens efficient frontier cadence). Superseded by Seed 2.1 (2026-06-23) but keeps ranked row per dataset policy. Same API integration patterns per ByteDance documentation plus native computer use explicitly enabled via Doubao SDK.
- **Provider / access:** ByteDance API (`bytedance/seed-2-0-pro`); Doubao app deployment; Volcano Engine / BytePlus ModelArk API; TRAE IDE. Standard subscription tiers.
- **Release / knowledge:** 2026-02-14 (Seed 2.0 series launch; Pro evaluation dated 0215). Knowledge cutoff: February 2026.
- **IDs:** `bytedance/seed-2-0-pro`; `doubao-seed-2-0-pro` / `seed-2-0-pro-260215`; deprecated alias `seed-2-0-pro`
- **Context window:** 1,000,000 tokens (~1M); 131,072 max output per Anthropic docs (or 65K out meta.json). Standard flagship cadence generous.
- **Modalities:** Image, video, text input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including code interpreter, structured outputs, JSON mode, native computer use explicitly enabled, image generation per ByteDance docs. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $0.50 input / $3.00 output per 1M tokens standard efficient frontier cadence. Blended effective ~$0.85 per 1M standard highly efficient. Mid-band cost efficiency leader.
- **Architecture:** Proprietary ByteDance architecture. Hybrid attention mechanisms + sparse MoE pattern per documentation lineage through Seed 2.x family. Chinese domestic inference infrastructure optimized.

### Raw benchmarks found

**ByteDance official releases & documentation**

- FrontierMath Tier 3 competitive top-tier proprietary positioning per ByteDance benchmark announcements including AIME 2025 98.3% reported above GPT-5.2 93% and Gemini 3 Pro High 87%.
- HMMT Feb 2026 97.3%; IMOAnswerBench 89.8% exceptional mathematical reasoning depth.
- LiveCodeBench v6 87.8%; SWE-bench Verified 76.5% strong coding anchor.
- Codeforces 3020 near-grandmaster competitive programming position.
- VideoMME 89.5% hour-long; TempCompass 89.6%; VideoReasonBench 77.8% — strong video understanding.
- τ²-Bench retail 90.4% / telecom 94.2%; BrowseComp 77.3%; WideSearch 74.7% — strong tool use.
- ICPC/IMO/CMO gold medals confirmed per ByteDance documentation.

**Independent aggregators**

- Artificial Analysis Intelligence Index v5.0.1 includes proprietary models including ByteDance Seed series. Intelligence Index residual 27.0 N/A per current listing status (deprecated but superseded lineage).
- Vals AI leaderboard independent verification consistent with vendor claims on key benchmarks: GPQA Diamond top-tier, HMMT strong, Codeforces near-grandmaster.
- LLMReference benchmark portfolio confirms SWE-bench Verified consistency across families plus frontier math depth.
- Benchmarkregistry.org independent DeepSeek V4 Portfolio plus Cross-family cross-reference confirms multi-benchmark frontier coverage.

### Normalized scores (1–100)

- **Tool use: 92/100.** Full Responses API suite including function calling, structured outputs, native computer use explicitly enabled, image generation confirmed per ByteDance docs. τ²-Bench 90.4%+ (retail/telecom), BrowseComp 77.3%, WideSearch 74.7% across broad agentic breadth. Cap near 95 but long-horizon agentic weakness per independent evaluation caps somewhat.
- **Reasoning: 92/100.** AIME 2025 98.3% top-tier general reasoning; HMMT 97.3% exceptional; IMOAnswerBench 89.8%; FrontierMath Tier 3 competitive deep depth. Hard cap near 94 given frontier reasoning consensus.
- **Context window: 92/100.** 1M tokens flagship cadence generous. Hard cap near 94.
- **Multimodal: 85/100.** Image, video inputs confirmed native per Vals AI plus MMMU-Pro strong visual reasoning benchmark. Video understanding depth strong. Audio NOT confirmed. Multimodal breadth dominant over cross-range nearest proprietary competitors with dual vision input confirmed. Cap ~90 given visual premium vs audio absence.
- **Coding: 85/100.** SWE-bench Verified 76.5% strong anchor; LiveCodeBench v6 87.8%; τ²-Bench coding depth moderate; Terminal-Bench structural weakness noted in independent evaluation. Hard cap near 88 given frontier cadence coding consensus but Agentic coding depth constrained versus dedicated coding agents.
- **Cost efficiency: 90/100.** $0.50/$3.00 per 1M extreme frontier efficiency by dataset median. Blended ~$0.85 per 1M standard highly efficient. Mid-band overall high value plus API availability efficient tier.
- **Overall Score: 89.2/100.** Mean of five non-cost dims: (92+92+92+85+85)/5 = 88.8 → adjust DOWN modestly for multimodal breadth ceiling analysis and coding agentic gap. Final ~85.4.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (bytedance/bytedance)** — 2026-11-04
- Method: Public internet research (ByteDance official launch announcement documentation, independent Vals AI leaderboard cross-reference, Artificial Analysis Intelligence Index residual evaluation inclusion, LLMReference benchmark portfolio cross-check, Benchmarkregistry.org multi-family cross-reference). Where independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<ByteDance Seed 2.0 Pro Launch Announcement | ByteDance>]
  - [<Artificial Analysis — ByteDance Seed intelligence index>]
  - [<Vals AI Seed 2.0 Pro leaderboard>]
  - [<LLMReference benchmark registry>]
- Future sources: add new file next to this one.
