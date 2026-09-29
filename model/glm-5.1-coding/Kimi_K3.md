# GLM 5.1 Coding — findings by Kimi K3

- Source: Z.AI / GLM 5.1 (`opencode/glm-5.1` coding deployment; base `zai-org/GLM-5.1` family, MIT)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 (Coding deployment)
- **Short description:** Z.AI's earlier GLM-5 snapshot marketed for agentic coding — a post-training upgrade to GLM-5 (same 744B-class MoE, 40B active, 200K context) that took #1 on SWE-bench Pro (58.4) at launch, ahead of GPT-5.4 (57.7), Claude Opus 4.6 (57.3) and Gemini 3.1 Pro (54.2); sustained 8+ hours of autonomous execution; trained on Huawei Ascend chips. Now superseded by GLM-5.2 (TB 2.1 81.0 vs 62.0) and 5.3.
- **Provider / access:** Z.AI API (coding plan endpoints); OpenCode Zen `opencode/glm-5.1` (paid, no Free ID per catalog); MIT open weights on Hugging Face.
- **Release / knowledge:** 2026-04-07 (officechai, stackfutures, aihola, winbuzzer); ~70 days before GLM-5.2. Cutoff not verified.
- **IDs:** `opencode/glm-5.1` (Zen); `glm-5.1` class on Z.AI API; HF `zai-org/GLM-5.1` weights.
- **Context window:** 200K native (officechai: "same 200K context window" as GLM-5; benchlm lists 203K; catalog 200K–205K), 128K max output per catalog.
- **Modalities:** text in/out (no vision rows); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** paid $1.40 in / $4.40 out per 1M on Zen (repo catalog; no free ID); MIT open weights → self-host.
- **Architecture:** open-weight MoE, ~744B total (some trackers list 754B) / 40B active; MIT; post-training retargeted at coding distributions.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.0** (vendor comparison in docs.z.ai GLM-5.2 page) — prior TB 2.0 63.5 / TB 2.1-"Vals" 56.9 rows not reverified
- Long-horizon: vendor-reported **8+ hours** of sustained autonomous coding across hundreds of iterations (rits.shanghai.nyu.edu, winbuzzer) — metric name not standardized
- τ²/τ³-Bench, MCP Atlas, CyberGym, BrowseComp, Claw-Eval (prior benchlm rows): not reverified in this 2026-09-29 pass
- GDPval-AA: no freshly verified public score found

Reasoning / knowledge:

- BenchLM overall: **57.11/100, #49 of 201** (benchlm.ai)
- AA Intelligence Index ~26 (prior aggregation) — below the 32 anchor
- GPQA / AIME / HMMT / FrontierMath (prior benchlm rows): not reverified this pass
- HLE: no freshly verified public score found

Coding:

- SWE-bench Pro: **58.4** — #1 on the leaderboard at launch (officechai, stackfutures, aihola)
- Terminal-Bench 2.1: **62.0** (vendor) (docs.z.ai)
- SWE-bench (Vals) / LiveCodeBench / AA-SciCode (prior benchlm rows): not reverified this pass

Long context:

- 200K-class window with 128K output; no MRCR/RULER/AA-LCR row freshly verified.

Multimodal:

- Text-only (no vision rows in any retrieved source).

### Normalized scores (1–100)

- **Tool use: 74/100.** TB 2.1 62.0 vendor-confirmed plus vendor's 8-hour autonomous-run claim; capped by the drop of all non-reverified τ²/MCP/Claw rows.
- **Reasoning: 68/100.** AA Index ~26 sits below the 32→70 anchor; launch-era math headlines not reverified this pass.
- **Context window: 70/100.** 200K-ish native window with 128K output — band score; no long-context retrieval measurements.
- **Multimodal: 15/100.** Text-only deployment — floor.
- **Coding: 74/100.** SWE-bench Pro 58.4 (#1 at launch, above GPT-5.4/Opus 4.6) and TB 2.1 62.0; capped by missing fresher evals and clear supersession (5.2: TB 2.1 81.0).
- **Cost efficiency: 86/100.** $1.40/$4.40 Zen paid tier with MIT self-host fallback — the family-standard value, but dated vs 5.3-Flash pricing.
- **Overall Score: 60/100.** Mean of the five quality dims (74+68+70+15+74)/5 = 60.2 → 60. Best fit: legacy coding-plan standby; GLM-5.2/5.3 strictly better where available.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (officechai, stackfutures, aihola, winbuzzer, docs.z.ai GLM-5.2 comparison, benchlm.ai, repo catalog); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: release date pinned to 2026-04-07; vendor-confirmed TB 2.1 62.0 and SWE-bench Pro 58.4 #1-at-launch; added verified $1.40/$4.40 Zen pricing (was "not verified") and MIT license; dropped non-reverified benchlm-only rows (τ² 97.7, AIME 95.3, HMMT 94.0, Claw-Eval 62.3); Context 66 → 70 (band), Cost 80 → 86, Coding 72 → 74, Tool 78 → 74, Reasoning 76 → 68; Overall 61 → 60.
- Future sources: add a new file next to this one using the same headings.
