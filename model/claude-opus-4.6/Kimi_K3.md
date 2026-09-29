# Claude Opus 4.6 — findings by Kimi K3

- Source: Anthropic / Claude Opus 4.6 (`claude-opus-4-6`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's Feb-2026 Opus flagship — first Opus with a 1M-token context and adaptive thinking; strong tool-use/coding generation (SWE-bench Verified 80.8%, ARC-AGI-2 68.8%); superseded by Opus 4.7/4.8 and now Opus 5.x.
- **Provider / access:** Claude API (`claude-opus-4-6`), Amazon Bedrock (InvokeModel), Google Cloud, Microsoft Foundry, Claude Platform on AWS.
- **Release / knowledge:** released February 5, 2026 (Anthropic announcement); reliable knowledge cutoff May 2025, training data cutoff Aug 2025 (platform.claude.com model page).
- **IDs:** `claude-opus-4-6` (Claude API, pinned dateless snapshot; Bedrock `anthropic.claude-opus-4-6-v1`; Vertex/Foundry `claude-opus-4-6`). Status: Active (legacy); retirement not sooner than February 5, 2027.
- **Context window:** 1M tokens; max output 128K (300K via Batch API beta header `output-300k-2026-03-24`) (platform.claude.com).
- **Modalities:** text/image in (MMMU-Pro, ScreenSpot Pro measured); text out; adaptive thinking default effort `high` (extended thinking deprecated); tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $5 / MTok input, $25 / MTok output up to 200K prompt; $10 / $37.50 per MTok for prompts >200K (platform.claude.com pricing, via llm-stats launch analysis).
- **Architecture:** proprietary (Anthropic); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **70.4%** (benchlm.ai); ResearchClawBench: **19.9%**
- τ²-bench (Tau2-Bench): **84.8%** (benchlm.ai)
- Terminal-Bench 2.0: **65.4%** (Anthropic launch, via llm-stats/officechai); TB 2.1: no verified public score found
- BrowseComp: **83.7%**; OSWorld-Verified: **72.7%**; DeepSearchQA: **73.7%**; CyberGym: **66.6%** (benchlm.ai)
- ApprenticeBench: **5%**; JobBench: **36.7%** (benchlm.ai)
- GDPval-AA: **1606 Elo** (~144 above GPT-5.2) (Anthropic launch, via llm-stats); BigLaw Bench: **90.2%** (anthropic.com)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (GPQA-D); 91.3% (GPQA); 84.0% (AA); SuperGPQA: **95%** (benchlm.ai)
- ARC-AGI-2: **68.8%** (Anthropic launch, via llm-stats — +83% vs Opus 4.5's 37.6%)
- HLE: **53.0%** (w/ tools); 40.0% (no tools); AA-HLE: **19.1%** — large harness variance (benchlm.ai)
- AA-LCR: **67.0%**; CritPt: **2.8%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **26.4**; BenchLM overall **63.64/100, #31 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **45.8% / 80.1%** (benchlm.ai)
- AIME25 (Arcee): **99.8%**; FrontierMath v2: **40.7%** T1–3 / **22.9%** T4; MMLU-Pro (Arcee): **89.1%** (benchlm.ai)

Coding:

- SWE-bench Verified: **80.8%** (Anthropic launch, via llm-stats; 75.6% in Arcee harness); SWE-bench Pro: **53.4%**; SWE-Rebench: **65.3%** (benchlm.ai)
- LiveCodeBench Pro: **70.7%** (benchlm.ai); LiveCodeBench (Vals): no verified public score found
- Vibe Code Bench: **57.6%**; React Native Evals: **84.1%**; FrontierCode 1.1 Main: **26.9%** (benchlm.ai)
- AA Coding Index / SciCode: no verified public score found
- Notable applied result: 500+ previously unknown zero-day vulnerabilities found in open-source code (Axios, 2026-02-05)

Long context:

- MRCR v2 8-needle @ 1M: **76%** (vs Sonnet 4.5's 18.5%) (Anthropic launch, via llm-stats); AA-LCR 67.0% at the 1M window (benchlm.ai); no RULER public score found.

Multimodal:

- MMMU-Pro: **77.3%** (AA 72.5%); ScreenSpot Pro: **83.1%**; MedXpertQA-MM: **64.8%**; Design Arena Website: **1302 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 82/100.** Claw-Eval 70.4%, τ²-bench 84.8%, Terminal-Bench 2.0 65.4%, OSWorld-Verified 72.7%; capped by ApprenticeBench 5% and JobBench 36.7%.
- **Reasoning: 89/100.** GPQA ~89–91% and ARC-AGI-2 68.8% put it in the 88–93 band with AIME 99.8%; capped by AA-HLE 19.1%, CritPt 2.8% and 80.1% hallucination.
- **Context window: 95/100.** True 1M window (band floor 95) with best-in-generation retrieval (MRCR 8-needle 76%); capped by modest AA-LCR 67.0%.
- **Multimodal: 75/100.** MMMU-Pro 77.3%, ScreenSpot Pro 83.1%; image-in/text-out caps the band at ~75.
- **Coding: 88/100.** SWE-bench Verified 80.8% (top of the 70–80% → 85–93 band), LiveCodeBench Pro 70.7%; capped by SWE-bench Pro 53.4% and FrontierCode 26.9%.
- **Cost efficiency: 45/100.** Verified $5/$25 per MTok → band ~45; >200K prompts cost $10/$37.50, and batch halves it.
- **Overall Score: 86/100.** Mean of the five quality dims (82+89+95+75+88)/5 = 85.8 → 86. Best fit: established Claude 4-generation coding/agentic pipelines needing 1M context at legacy Opus pricing before Opus 5.x migration.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (Anthropic announcement via llm-stats + platform.claude.com specs + benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: confirmed release 2026-02-05, pricing $5/$25 ($10/$37.50 >200K), 1M ctx/128K out, active-legacy status; added GDPval-AA 1606 Elo, ARC-AGI-2 68.8%, MRCR 8-needle 76%, BigLaw 90.2%; scores renormalized to band rules (Reasoning 76→89, Context 80→95, Multimodal 80→75, Coding 81→88, Cost 60→45).
- Future sources: add a new file next to this one using the same headings.
