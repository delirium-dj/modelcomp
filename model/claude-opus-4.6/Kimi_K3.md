# Claude Opus 4.6 — findings by Kimi K3

- Source: Anthropic / Claude Opus 4.6 (`claude-opus-4-6`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's mid-2026 Opus flagship (sibling: Opus 4.6 Adaptive thinking variant). Strong tool-use/coding generation that led its cohort on Claw-Eval and τ²-bench; superseded by 4.7/4.8/5.
- **Provider / access:** Claude API (`claude-opus-4-6`), Amazon Bedrock, Vertex AI.
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `anthropic/claude-opus-4-6` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (MMMU-Pro, ScreenSpot Pro measured); text out; reasoning via separate Adaptive variant (benchlm classifies base as Non-Reasoning); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; Opus-tier — provisional.
- **Architecture:** proprietary (Anthropic); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **70.4%** (benchlm.ai); ResearchClawBench: **19.9%**
- τ²-bench (Tau2-Bench): **84.8%** (benchlm.ai)
- Terminal-Bench 2.0: **65.4%** (benchlm.ai); TB 2.1: no verified public score found
- BrowseComp: **83.7%**; OSWorld-Verified: **72.7%**; DeepSearchQA: **73.7%**; CyberGym: **66.6%** (benchlm.ai)
- ApprenticeBench: **5%**; JobBench: **36.7%** (benchlm.ai)
- GDPval-AA / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (GPQA-D); 91.3% (GPQA); 84.0% (AA); SuperGPQA: **95%** (benchlm.ai)
- HLE: **53.0%** (w/ tools); 40.0% (no tools); AA-HLE: **19.1%** — large harness variance (benchlm.ai)
- AA-LCR: **67.0%**; CritPt: **2.8%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **26.4**; BenchLM overall **63.64/100, #31 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **45.8% / 80.1%** (benchlm.ai)
- AIME25 (Arcee): **99.8%**; FrontierMath v2: **40.7%** T1–3 / **22.9%** T4; MMLU-Pro (Arcee): **89.1%** (benchlm.ai)

Coding:

- SWE-bench Verified: **80.8%** (75.6% in Arcee harness); SWE-bench Pro: **53.4%**; SWE-Rebench: **65.3%** (benchlm.ai)
- LiveCodeBench Pro: **70.7%** (benchlm.ai); LiveCodeBench (Vals): no verified public score found
- Vibe Code Bench: **57.6%**; React Native Evals: **84.1%**; FrontierCode 1.1 Main: **26.9%** (benchlm.ai)
- AA Coding Index / SciCode: no verified public score found

Long context:

- AA-LCR 67.0% at the 1M window (benchlm.ai); no MRCR/RULER public score found.

Multimodal:

- MMMU-Pro: **77.3%** (AA 72.5%); ScreenSpot Pro: **83.1%**; MedXpertQA-MM: **64.8%**; Design Arena Website: **1302 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 82/100.** Claw-Eval 70.4%, τ²-bench 84.8%, OSWorld-Verified 72.7%, CyberGym 66.6%; capped by ApprenticeBench 5% and JobBench 36.7%.
- **Reasoning: 76/100.** GPQA ~89–91%, HLE 53% w/ tools, AIME 99.8%; capped hard by AA-HLE 19.1%, CritPt 2.8%, AA Index 26.4 and 80.1% hallucination.
- **Context window: 80/100.** 1M window; capped by weak LCR (67.0%).
- **Multimodal: 80/100.** MMMU-Pro 77.3%, ScreenSpot Pro 83.1%; text-only output caps it.
- **Coding: 81/100.** SWE-bench Verified 80.8%, LiveCodeBench Pro 70.7%, React Native Evals 84.1%; capped by SWE-bench Pro 53.4% and FrontierCode 26.9%.
- **Cost efficiency: 60/100.** Price unverified; scored provisional on then-flagship Opus pricing.
- **Overall Score: 80/100.** Mean of the five quality dims (82+76+80+80+81)/5 = 79.8 → 80. Best fit: established Claude 4-generation coding/agentic pipelines before Opus 5 migration.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
