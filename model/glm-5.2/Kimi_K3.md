# GLM 5.2 — findings by Kimi K3

- Source: Z.AI (Zhipu) / GLM-5.2 (`glm-5.2`; open weights `zai-org/GLM-5.2`, MIT)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.AI's prior-generation flagship open-weight MoE (744B-class / 40B active, MIT) — "truly usable" 1M context tuned for long-horizon coding agents; at launch the strongest open-source coding model (TB 2.1 81.0, SWE-bench Pro 62.1) and highest-ranked open model on FrontierSWE/PostTrainBench/SWE-Marathon. Now superseded by GLM-5.3 (same base + post-training).
- **Provider / access:** Z.AI API (`glm-5.2`); OpenCode Zen (free tier available per repo catalog); ~30 OpenRouter providers (Baseten, Fireworks, DeepInfra, Novita…); open weights `zai-org/GLM-5.2` (MIT).
- **Release / knowledge:** 2026-06-16 (aireleasetracker; llm-stats; ~70 days after GLM-5.1). Knowledge cutoff not verified.
- **IDs:** `glm-5.2` (Z.AI API); HF `zai-org/GLM-5.2`; Zen listing per repo catalog.
- **Context window:** **1M tokens**, 128K max output (docs.z.ai model card). ~262K on some low-cost third-party hosts.
- **Modalities:** text in/out (docs.z.ai); reasoning yes (`reasoning_effort` low/high/max); function calling; JSON; context caching; MCP.
- **Pricing (as of 2026-09-29):** Zen/Z.ai-hosted ~$1.40 in / $4.40 out per 1M; third-party floor from ~$0.75/$2.40 (llm-stats); free Zen tier per catalog; MIT open weights.
- **Architecture:** open-weight MoE (glm_moe_dsa), ~744B total / 40B active (community metadata; some trackers list 753B); MIT license.

### Raw benchmarks found (vendor-official via docs.z.ai and the GLM-5.3 HF comparison table)

Agent / tool use:

- Terminal-Bench 2.1: **81.0** (vendor; within a few points of Opus 4.8 85.0, ahead of Gemini 3.1 Pro at launch) (docs.z.ai / HF table)
- Terminal-Bench 3.0: **4.6** (HF comparison table)
- CyberGym: **77.2**; ExploitGym (2h/6h): **29 / 39**; ExploitBench: **24.4** (HF table)
- Toolathlon Verified: **59.9**; AutomationBench v1.0.6: **26.2**; ALE-CLI: **23.8** (HF table)
- GDPval-AA v2: **1508 Elo** (Artificial Analysis via HF table)
- τ²-Bench Telecom/Banking (prior benchleader rows): not reverified in this 2026-09-29 pass

Reasoning / knowledge:

- HLE w/ tools: **54.7** (vendor) (HF table)
- BenchLM overall: **62.62/100, #40 of 209** (benchlm.ai, September 2026)
- AA Intelligence Index ~33–34 (prior aggregation); GPQA / AIME / HMMT rows not reverified this pass

Coding:

- SWE-bench Pro: **62.1** (vendor; edged past GPT-5.5 at launch per apidog) (docs.z.ai / apidog)
- FrontierSWE: **67.5** (≈1pp behind Opus 4.8); PostTrainBench: **31.7**; SWE-Marathon v1.1: **19.4** — highest-ranked open-source on all three at launch (docs.z.ai / HF table)
- DeepSWE v1.1: **46.2**; NL2Repo: **48.9**; ProgramBench (Almost Solved): **9.5** (HF table)
- SWE-bench Verified (prior 78.7 Epoch row): not reverified this pass

Long context:

- Vendor: "Solid 1M lossless context" trained for long-horizon coding agents (docs.z.ai); AA-LCR/MRCR/RULER: no freshly verified public score found.

Multimodal:

- Text-only (docs.z.ai: input text / output text). Vision/audio rows: none.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.1 81.0 with Toolathlon 59.9 and CyberGym 77.2; capped by TB 3.0 4.6 and AutomationBench 26.2; prior τ² claims not reverified.
- **Reasoning: 72/100.** AA Index ~33–34 anchors near the 32-band; HLE w/ tools 54.7 solid; math/GPQA rows not freshly verified.
- **Context window: 95/100.** Vendor-certified 1M with 128K output; held at band floor by absent third-party long-context retrieval numbers this pass.
- **Multimodal: 15/100.** Text-only — floor.
- **Coding: 82/100.** SWE-bench Pro 62.1 (#1 open at launch), TB 2.1 81.0, FrontierSWE 67.5; capped by DeepSWE 46.2 and ProgramBench 9.5.
- **Cost efficiency: 88/100.** MIT weights, free Zen tier, and third-party floor ~$0.75/$2.40 under the $1.40/$4.40 reference price — excellent 1M-class value.
- **Overall Score: 69/100.** Mean of the five quality dims (80+72+95+15+82)/5 = 68.8 → 69. Best fit: MIT-licensed 1M-context workhorse where licensing freedom matters more than GLM-5.3's extra agentic punch.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (docs.z.ai/guides/llm/glm-5.2, HF zai-org/GLM-5.3 comparison table, aireleasetracker, llm-stats, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: release date corrected 2026-06-13 → 2026-06-16; TB 2.1 corrected to vendor 81.0; SWE-bench Pro 62.1 and FrontierSWE 67.5 confirmed vendor-side; dropped non-reverified benchleader rows (τ²-Telecom 99.1, SWE-bench Verified 78.7, GPQA 91.9, AIME/HMMT, MCP Atlas); context spec confirmed 1M/128K (score 88 → 95 band); Cost 82 → 88 (MIT + $0.75/$2.40 floor + free Zen tier); Overall 70 → 69.
- Future sources: add a new file next to this one using the same headings.
