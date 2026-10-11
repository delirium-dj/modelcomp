# Gemini 3.1 Pro — findings by Kimi K3

- Source: Google / Gemini 3.1 Pro (`gemini-3.1-pro`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's Pro-tier flagship reasoning model in the Gemini 3 series (preview released February 19, 2026), aimed at complex multimodal reasoning, agentic workflows, and code-repository-scale tasks.
- **Provider / access:** Google Gemini API (`gemini-3.1-pro`), Vertex AI, Gemini Enterprise Agent Platform, Google AI Studio, Google Antigravity; Chat-style generateContent API (deepmind.google model page).
- **Release / knowledge:** Preview released 2026-02-19 (llm-stats.com, theairankings.com); status "Preview" per deepmind.google; knowledge cutoff not officially stated.
- **IDs:** `google/gemini-3.1-pro` (no Free-tier ID verified on OpenCode Zen; OpenCode Data page exists but shows zero usage).
- **Context window:** 1M tokens input / 64K max output (deepmind.google model information card, newly verified; replaces earlier "max output not verified").
- **Modalities:** text/image/video/audio/PDF in; text out; reasoning (Thinking modes); tool calls incl. Search-as-tool and code execution; JSON mode (deepmind.google).
- **Pricing (as of 2026-10-11):** $2.00/M input, $12.00/M output ≤200K prompt; $4.00/$18.00 above 200K (benchquill.com, llm-stats.com).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Official Google DeepMind model page (deepmind.google/models/gemini/pro/, retrieved 2026-10-11), third-party benchlm.ai/llm-stats.com rows; conflicts noted inline.

Agent / tool use:

- τ2-bench (official): Retail **90.8%**, Telecom **99.3%** — third-party composite figure 95.6% (benchlm.ai) sits between them
- MCP Atlas (multi-step MCP workflows): **69.2%** (official, new this pass)
- BrowseComp (agentic search): **85.9%** (official, new this pass)
- APEX-Agents (long-horizon professional tasks): **33.5%** (official; benchlm.ai had 32.0%)
- Terminal-Bench 2.0 (Terminus-2 harness): **68.5%** (official); Terminal-Bench 2.1 (Vals): **70.8%** (benchlm.ai) — different benchmark versions, both retained
- Claw-Eval: **57.8%**; ResearchClawBench: **13.3%** (benchlm.ai)
- GDPval-AA: **1317 Elo** (official model page, corrected this pass) — CONFLICT with benchlm.ai's 904 Elo; official vendor page wins. DeepSearchQA: **69.7%**; Gert Labs: **56.9%** (benchlm.ai)
- AA Agentic Index: **10.3%** (benchlm.ai)

Reasoning / knowledge:

- Humanity's Last Exam: **44.4%** no-tools full set (official; benchlm.ai cited 45.4%), **51.4%** with Search+Code tools (official, new)
- GPQA Diamond: **94.3%** (official; AA 94.1%, Vals 95.5%)
- ARC-AGI-2 (ARC Prize Verified): **77.1%** (official; matches benchlm.ai); ARC-AGI-3: **0.4%** (benchlm.ai)
- MMMLU: **92.6%** (official, new); MMLU-Pro (Vals): **91.0%** (benchlm.ai)
- AA-LCR: **82.0%** (benchlm.ai); CritPt: **17.7%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **29.7** (benchlm.ai); BenchLM overall **64.45/100, #30 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **54.9% / 50.9%** (benchlm.ai)
- FrontierMath v2 T1–3: **36.9%**, Tier 4: **16.7%** (benchlm.ai)

Coding:

- SWE-Bench Verified (single attempt): **80.6%** (official, new verified score; replaces my earlier "no separate verified score" note; Vals-harness SWE-bench 78.8% retained as third-party datapoint)
- SWE-Bench Pro (Public, single attempt): **54.2%** (official, new this pass)
- LiveCodeBench Pro: **Elo 2887** (official, new; benchlm.ai cited 82.9% accuracy-style); LiveCodeBench (Vals): **88.5%** (benchlm.ai)
- SciCode: **59%** (official; benchlm.ai AA-SciCode 58.7%)
- Terminal-Bench 2.0: **68.5%** (official — agentic terminal coding)
- Vibe Code Bench: **32.0%** (benchlm.ai); AA Coding Index: **68.8**; React Native Evals: **78.9%** (benchlm.ai)

Long context:

- MRCR v2 (8-needle): **84.9%** at 128K average, **26.3%** at 1M pointwise (official, new this pass) — measured 1M-pointwise retrieval is weak.
- AA-LCR 82.0% remains the long-context reasoning signal; no RULER/GraphWalks public score found.

Multimodal:

- MMMU-Pro: **80.5%** no-tools (official) — CONFLICT with benchlm.ai's 83.9%/82.4%; official wins
- CharXiv: **80.2%**; ScreenSpot Pro: **84.4%**; ZeroBench: **29.0%**; MedXpertQA-MM: **81.3%**; SimpleVQA: **72.4%**; ERQA: **69.4%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 87/100.** Official τ2-bench (Retail 90.8 / Telecom 99.3), MCP Atlas 69.2, APEX-Agents 33.5, BrowseComp 85.9, TB 2.0 68.5 — and the GDPval-AA correction (1317 vs previously-cited 904) lifts the weakest verified row. Update from 84 on new evidence.
- **Reasoning: 86/100.** Unchanged: GPQA 94.3%, ARC-AGI-2 77.1%, HLE 44.4/51.4% stay flagship-class; CritPt 17.7% and ARC-AGI-3 0.4% still cap it.
- **Context window: 82/100.** Update from 88: official MRCR v2 shows 84.9% @128K but only 26.3% @1M pointwise — the 1M window is verified but retrieval at full depth is weak.
- **Multimodal: 90/100.** Full text/image/video/audio/PDF intake; official MMMU-Pro 80.5% (slightly below the third-party 83.9% but same band); ZeroBench 29% and text-only output cap it.
- **Coding: 86/100.** Update from 83: official SWE-Bench Verified 80.6%, SWE-Bench Pro 54.2%, LiveCodeBench Pro Elo 2887, SciCode 59%, TB 2.0 68.5% — denser verified sheet than before.
- **Cost efficiency: 62/100.** Unchanged: $2/$12 per 1M (tiered $4/$18 >200K) is flagship pricing.
- **Overall Score: 86/100.** Mean of the five quality dims (87+86+82+90+86)/5 = 86.2 → 86. Best fit: multimodal-heavy enterprise reasoning and agent pipelines needing τ²-style tool reliability at 1M context.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official deepmind.google Gemini 3.1 Pro model page incl. benchmark table + model-information card; OpenCode Data model page; benchlm.ai / llm-stats.com / benchquill.com third-party rows). Second pass over my 2026-09-24 file: replaced conflicting third-party numbers (GDPval-AA 904 → 1317 official; MMMU-Pro 83.9 → 80.5 official), added MRCR v2 / SWE-Bench Verified / MCP Atlas / BrowseComp official rows; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
