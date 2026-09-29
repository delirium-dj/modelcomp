# Claude Sonnet 4.6 — findings by Kimi K3

- Source: Anthropic / Claude Sonnet 4.6 (`claude-sonnet-4-6`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's Sonnet of the Claude 4.6 line (released 2026-02-17) — a near-Opus mid-tier coding/agent model (SWE-bench Verified ~79.6–80.2%) with a **1M-token context window**, now the legacy default behind Sonnet 5/5.5.
- **Provider / access:** Claude API (`claude-sonnet-4-6`), Amazon Bedrock (InvokeModel), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS; default model on claude.ai Free/Pro at launch.
- **Release / knowledge:** released February 17, 2026 (Anthropic announcement); reliable knowledge cutoff Aug 2025, training data cutoff Jan 2026 (platform.claude.com model page).
- **IDs:** `claude-sonnet-4-6` (Claude API, pinned dateless snapshot; Bedrock `anthropic.claude-sonnet-4-6`; Vertex/Foundry `claude-sonnet-4-6`). Status: Active (legacy); retirement not sooner than February 17, 2027.
- **Context window:** 1M tokens (beta at launch) — **correction from an earlier 200K reading**; max output 128K (300K via Batch API beta header `output-300k-2026-03-24`) (platform.claude.com).
- **Modalities:** text/image in (CharXiv, MMMU-Pro measured); text out; adaptive thinking (extended thinking deprecated), default effort `high`; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $3 / MTok input, $15 / MTok output — same as Sonnet 4.5 (Anthropic announcement + platform.claude.com pricing); batch 50% off.
- **Architecture:** proprietary (Anthropic); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **67.8%**; CyberGym: **65.2%** (benchlm.ai)
- τ²-bench (Tau2-Bench): **79.5%** (benchlm.ai)
- Terminal-Bench 2.0: **59.1%** (benchlm.ai; Anthropic reports its score with thinking off); TB 2.1 (Vals): **57.3%**
- OSWorld-Verified: **72.1%** (note OSWorld 2.0: **8.3%**); Gert Labs: **62.9%**; JobBench: **36.9%**; ApprenticeBench: **2%** (benchlm.ai)
- Vending-Bench Arena: finished well ahead of Sonnet 4.5 (invest-early/pivot-late strategy) (Anthropic launch; absolute $ not stated)
- GDPval-AA: "approaches Opus 4.5-level on economically valuable office tasks" (Anthropic launch); no verified numeric score found; Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (GPQA); 79.9% (AA); 85.6% (Vals); SuperGPQA: **95%** (benchlm.ai)
- ARC-AGI-2: **60.4%** at high effort (Anthropic launch footnote); max-effort score shown in launch table image but not stated in text
- HLE: **49.0%**; AA-HLE: **13.3%** — large harness divergence (benchlm.ai)
- AA-LCR: **68.3%**; CritPt: **0.9%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **24.7**; BenchLM overall **56.35/100, #49 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **38.6% / 68.5%** (benchlm.ai)
- MMLU-Pro (Vals): **87.3%**; FrontierMath v2: **32.4%** T1–3 / **8.3%** T4; AA-IFBench: **41.2%** (benchlm.ai)

Coding:

- SWE-bench Verified: **79.6%** (benchlm.ai); **80.2%** with prompt modification, 10-trial average (Anthropic launch footnote); SWE-bench (Vals): **77.4%**; SWE-Rebench: **60.7%**
- LiveCodeBench (Vals): **82.1%** (benchlm.ai)
- React Native Evals: **80.6%**; Vibe Code Bench: **51.5%**; cursorBench31: **48.8%**; FrontierCode 1.1 Main: **24.3%** (benchlm.ai)
- Claude Code user preference: chosen over Sonnet 4.5 ~70% of the time; over Opus 4.5 ~59% of the time (Anthropic early testing)

Long context:

- 1M window "reasons effectively" across full context (Anthropic launch); AA-LCR 68.3% (benchlm.ai); no MRCR/RULER public score found.

Multimodal:

- CharXiv: **77.4%**; AA-MMMU-Pro: **70.6%**; OfficeQA: matches Opus 4.6 (Databricks, per Anthropic launch); Design Arena Website: **1295 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 76/100.** Claw-Eval 67.8%, τ² 79.5%, OSWorld-Verified 72.1%; capped by OSWorld 2.0 8.3%, ApprenticeBench 2% and no verified GDPval number.
- **Reasoning: 88/100.** GPQA up to 89.9% and ARC-AGI-2 60.4% (high effort) put it in the 88–93 band; band-floor score reflects AA-HLE 13.3%, CritPt 0.9%, AA Index 24.7.
- **Context window: 95/100.** True 1M window (band floor 95) with effective long-context reasoning per launch evals; capped by middling LCR 68.3%.
- **Multimodal: 74/100.** CharXiv 77.4%, MMMU-Pro 70.6%, Opus-4.6-parity OfficeQA; image-in/text-out caps the band at ~75.
- **Coding: 87/100.** SWE-bench Verified ~80% (top of the 70–80% → 85–93 band), LiveCodeBench 82.1%, preferred to Opus 4.5 in Claude Code trials; capped by FrontierCode 24.3%.
- **Cost efficiency: 60/100.** Verified $3/$15 per MTok → $3/$15 ≈ 60 band anchor; Sonnet-tier value at near-Opus capability.
- **Overall Score: 84/100.** Mean of the five quality dims (76+88+95+74+87)/5 = 84.0. Best fit: high-volume agentic coding needing 1M context at Sonnet pricing — though Sonnet 5.5 is now the current default.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (Anthropic announcement + platform.claude.com specs + benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: major corrections — context window is 1M (not 200K), release 2026-02-17, pricing $3/$15 verified, status active-legacy; added ARC-AGI-2 60.4% (high effort), SWE-bench 80.2% (prompt-modified), Claude Code preference stats; scores renormalized to band rules (Reasoning 66→88, Context 62→95, Coding 78→87, Cost 74→60, Overall 71→84).
- Future sources: add a new file next to this one using the same headings.
