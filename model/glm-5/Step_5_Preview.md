# GLM-5 — findings by Step 5 Preview

- Source: Z.AI/GLM-5 (`zai-org/GLM-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Z.AI's Feb 2026 flagship open-weight MoE (744B total / 40B active, MIT) — a text-only reasoning/coding model at 200K context, since superseded by GLM-5.1/5.2/5.3.
- **Provider / access:** Self-host weights — Hugging Face `zai-org/GLM-5` (MIT); Z.AI API (docs.z.ai); 6 API providers per Artificial Analysis. No OpenCode Zen route found (verified 2026-10-19).
- **Release / knowledge:** Released 2026-02-11 (Artificial Analysis); deprecated by Z.AI's newer releases (AA marks it superseded by GLM-5.1); knowledge cutoff not disclosed.
- **IDs:** `zai-org/GLM-5` (HF) · `glm-5` (Z.AI API); siblings GLM-5-Turbo / GLM-5V-Turbo are separate SKUs.
- **Context window:** 200,000 tokens (Artificial Analysis and BenchLM agree).
- **Modalities:** Text in → text out (Artificial Analysis confirms no image input); reasoning model (a non-reasoning variant also exists); tool calling.
- **Pricing (as of 2026-10-19):** $1.00 / 1M input, $3.20 / 1M output via providers (Artificial Analysis median; blended $0.66, ~80% cache discount).
- **Architecture:** Open weights, MIT license; MoE — 744B total / 40B active parameters.

### Raw benchmarks found

> Sources disagree by harness: Z.AI's own docs/card numbers are vendor-run (Claude-Code-style scaffolds), Artificial Analysis runs its own protocol, and several rows come from third-party comparison tables (Qwen, Arcee) or public leaderboards. All kept with their source.

Agent / tool use:

- τ²-bench: **98.2%** (Artificial Analysis) — exceptional on this dual-control conversational benchmark
- Tau3-Bench: **65.6%** (third-party comparison table, via BenchLM) — above the ~50% frontier reference
- Terminal-Bench 2.0: **56.2%** (Z.AI docs) — mid band top
- Claw-Eval: **57.7%**; QwenClawBench: **54.1%**; WideResearch: **69.8%**; MCP-Tasks: **60.8%** (third-party table, via BenchLM)
- BrowseComp: **62%** (GLM-5 model card)
- HLE with tools: **50.4%** (model card)
- MCP Atlas: **31.1%**; Toolathlon: **38%**; Gert Labs: **50.99%**; CyberGym: **43.2%** (via BenchLM)
- APEX-Agents-AA: **14.5%** (Artificial Analysis) — near-floor on long-horizon professional tasks
- DeepPlanning: **14.6%** (third-party table) — weak
- IFEval: **92.6%**; AA-IFBench: **72.3%** — instruction following
- GDPval-AA / OSWorld / AutomationBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (model card) / AA-GPQA: **82.0%** (Artificial Analysis)
- HLE: **30.5%** (model card) / AA-HLE: **29.3%** (Artificial Analysis)
- AIME 2026: **95.8%**; HMMT Feb 2025: **97.5%**, Nov 2025: **96.9%** (third-party table) — frontier-level competition math
- MMLU-Pro: **85.7%** (third-party table); SuperGPQA: **66.8%**; MMLU-ProX: **83.1%**
- AA-LCR: **75.7%** (Artificial Analysis); LongBench v2: **60.8%**; AI-Needle: **63.3%**
- CritPt: **2.0%** (Artificial Analysis) — near-floor
- Artificial Analysis Intelligence Index: **28** (estimated; #25/121 in its open-weight class, class median 19)
- AA-Omniscience: Index **0.3**, Accuracy **26.3%**, Hallucination Rate **35.3%** — weak knowledge reliability

Coding:

- SWE-bench Verified: **77.8%** (Z.AI docs, vendor harness) / **72.8%** (Arcee third-party harness, via BenchLM) — harness-dependent
- SWE-bench Pro: **55.1%**; SWE-bench Multilingual: **73.3%**; SWE-Rebench: **62.8%**; React Native Evals: **74.8%**; NL2Repo: **35.9%** (via BenchLM)
- Terminal-Bench 2.0: **56.2%** (Z.AI docs; see agentic section)
- Design Arena Website: **1247** (OpenRouter) — frontend-design-via-code score for this text model
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- 200K window verified (AA + BenchLM); AA-LCR 75.7% and LongBench v2 60.8% are the closest reasoning-at-length figures; no MRCR/RULER/GraphWalks retrieval pass rate published.

Speed / cost (Artificial Analysis, median across 6 providers): 78.7 output tokens/s, TTFT 1.55 s.

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench 98.2% and Tau3 65.6% are genuinely strong and BrowseComp 62% / WideResearch 69.8% are solid, but Terminal-Bench 2.0 56.2%, MCP Atlas 31.1%, CyberGym 43.2% and near-floor APEX 14.5% / DeepPlanning 14.6% hold it in the upper-mid band.
- **Reasoning: 74/100.** GPQA Diamond 82–86%, AIME 2026 95.8% and HMMT ~97% are near-frontier on knowledge and competition math, but HLE ~30% misses the 40% frontier bar, the composite Intelligence Index of 28 is mid-pack, and CritPt 2.0% plus a 35.3% hallucination rate cap it.
- **Context window: 70/100.** 200K-token window verified — exactly the methodology's 200K anchor in the 65–84 band; AA-LCR 75.7% is decent but no retrieval-at-length figure pushes it higher.
- **Multimodal: 15/100.** Text-only input and output (Artificial Analysis; no image input) — the methodology's text-only 10–20 band.
- **Coding: 76/100.** SWE-bench Verified 77.8% (vendor harness; 72.8% third-party) with SWE-Multilingual 73.3% and SWE-Rebench 62.8% is a strong profile, but SWE-bench Pro 55.1%, Terminal-Bench 2.0 56.2%, NL2Repo 35.9% and missing LiveCodeBench/SciCode/DeepSWE figures keep it below the 90+ frontier tier.
- **Cost efficiency: 85/100.** $1.00/$3.20 per MTok (blended $0.66, ~80% cache discount) with MIT self-hostable weights — between the methodology's $0.60/$2.20 (~92) and $3/$15 (~60) anchors, closer to the former.
- **Overall Score: 61/100.** Mean of 72/74/70/15/76 = 61.4 → 61. Best fit: a strong MIT-licensed open-weight coding/reasoning model at 200K context — SWE-bench ~78% and frontier competition math at $1/$3.20 — best for self-hosters and API buyers wanting open weights, while accepting text-only I/O, mid-pack agentic harness results and weak long-horizon professional-task (APEX/DeepPlanning) performance.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research — Artificial Analysis model page (deprecated listing, specs, pricing, speed) cross-checked against BenchLM's 50-benchmark aggregate (Z.AI docs/card, AA protocol, Qwen/Arcee third-party tables, CyberGym/SWE-Rebench/ReactNative leaderboards, OpenRouter Design Arena) and the Hugging Face model card; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_v2.md`, using the same headings.
