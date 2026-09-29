# Gemini 3.1 Pro — findings by Kimi K3

- Source: Google / Gemini 3.1 Pro (`gemini-3.1-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's Pro-tier flagship reasoning model in the Gemini 3 line (preview released February 19, 2026), aimed at complex multimodal reasoning, agentic coding, and long-context work. Still current on deepmind.google as of 2026-09-29, with "Gemini 3.5 Pro coming soon" announced.
- **Provider / access:** Google Gemini API (`gemini-3.1-pro-preview` in AI Studio per DeepMind model page), Vertex AI, Gemini Enterprise Agent Platform, AI Mode, Google Antigravity; confirmed live on OpenCode Zen as `opencode/gemini-3.1-pro`.
- **Release / knowledge:** Preview released 2026-02-19 (llm-stats.com, theairankings.com); knowledge cutoff not officially stated — no verified public value found.
- **IDs:** `google/gemini-3.1-pro` (Gemini API); live on OpenCode Zen (`gemini-3.1-pro`, endpoint `zen/v1/models/gemini-3.1-pro`) — verified 2026-09-29.
- **Context window:** 1M tokens input, 64K output (DeepMind model info panel, verified 2026-09-29).
- **Modalities:** text/image/audio/video/PDF in; text out; reasoning yes (Thinking modes); function calling, structured output, Search-as-tool, code execution (DeepMind model page).
- **Pricing (as of 2026-09-29):** $2.00/M input, $12.00/M output ≤200K prompt; $4.00/$18.00 above 200K; cached read $0.20/M (OpenCode Zen pricing table, updated 2026-09-28; matches benchquill.com / llm-stats.com).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ2-bench (vendor, Thinking High): Retail **90.8%**, Telecom **99.3%** (deepmind.google/models/gemini/pro)
- MCP Atlas (multi-step MCP workflows): **69.2%** — top of vendor's comparison table (DeepMind)
- BrowseComp (agentic search): **85.9%** (DeepMind)
- τ²-bench (Tau2-Bench): **95.6%** (benchlm.ai)
- GDPval-AA: **1317 Elo** (DeepMind; vs Opus 4.6 1633); Claw-Eval: **57.8%**; ResearchClawBench: **13.3%** (benchlm.ai)
- APEX-Agents: **33.5%** (DeepMind); AA Agentic Index: **10.3%** (benchlm.ai)
- Terminal-Bench 2.0 (Terminus-2): **68.5%** (DeepMind); Terminal-Bench 2.1 (Vals): **70.8%** (benchlm.ai)

Reasoning / knowledge:

- Humanity's Last Exam: **44.4%** no tools; **51.4%** w/ search+code (DeepMind) — into the HLE 40%+ frontier band
- GPQA Diamond: **94.3%** (DeepMind); 94.1% (AA); 95.5% (Vals) (benchlm.ai)
- ARC-AGI-2: **77.1%** (DeepMind, ARC Prize verified); ARC-AGI-3: **0.4%** (benchlm.ai)
- MMMLU (multilingual): **92.6%** (DeepMind)
- AA-LCR: **82.0%** (benchlm.ai); CritPt: **17.7%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **29.7** (benchlm.ai); BenchLM overall **64.45/100, #30 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **54.9% / 50.9%** (benchlm.ai)
- MMLU-Pro (Vals): **91.0%**; FrontierMath v2 T1–3: **36.9%**, Tier 4: **16.7%** (benchlm.ai)

Coding:

- SWE-bench Verified (single attempt): **80.6%** (DeepMind); SWE-bench (Vals): 78.8% (benchlm.ai)
- SWE-Bench Pro (Public): **54.2%**; SciCode: **59%** (DeepMind)
- LiveCodeBench Pro: **2887 Elo** (DeepMind); LiveCodeBench (Vals): **88.5%**; LiveCodeBench Pro: 82.9% (benchlm.ai)
- Vibe Code Bench: **32.0%** (benchlm.ai); AA Coding Index: **68.8**; React Native Evals: **78.9%** (benchlm.ai)

Long context:

- MRCR v2 (8-needle): **84.9%** at 128K (ties Opus 4.6); **26.3%** at 1M pointwise (DeepMind) — strong mid-window, weak full-window retrieval
- AA-LCR 82.0% at the 1M window (benchlm.ai); no separate RULER/GraphWalks public score found.

Multimodal:

- MMMU-Pro: **80.5%** (DeepMind); 83.9% (benchlm.ai; AA-MMMU-Pro 82.4%)
- CharXiv: **80.2%**; ScreenSpot Pro: **84.4%**; ZeroBench: **29.0%**; MedXpertQA-MM: **81.3%**; SimpleVQA: **72.4%**; ERQA: **69.4%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 86/100.** Elite τ2-bench (99.3% telecom / 90.8% retail), MCP Atlas 69.2% and BrowseComp 85.9% are best-in-table or near; capped by middling GDPval-AA Elo (1317 vs Anthropic 1600+) and low AA Agentic Index (10.3%).
- **Reasoning: 90/100.** HLE 44.4% no-tools / 51.4% tool-assisted, GPQA 94.3%, ARC-AGI-2 77.1% hit the frontier band; capped by CritPt 17.7% and ARC-AGI-3 0.4%.
- **Context window: 90/100.** 1M window verified with 64K output; MRCR 84.9% at 128K but only 26.3% pointwise at 1M keeps it below the 95 clean-retrieval floor.
- **Multimodal: 90/100.** Full text/image/audio/video/PDF intake with MMMU-Pro ~80–84%, CharXiv 80.2%, ScreenSpot Pro 84.4%; capped by ZeroBench 29% and text-only output.
- **Coding: 86/100.** SWE-bench Verified 80.6%, Terminal-Bench 2.0 68.5%, LiveCodeBench Pro 2887 Elo are flagship-class; capped by weak Vibe Code Bench (32.0%).
- **Cost efficiency: 78/100.** $2/$12 per 1M (≤200K; $4/$18 beyond) sits squarely in the pro-tier 75–80 band; $0.20 cached read softens repeat-prompt workloads.
- **Overall Score: 88/100.** Mean of the five quality dims (86+90+90+90+86)/5 = 88.4 → 88. Best fit: multimodal-heavy enterprise reasoning, agentic coding, and search-augmented pipelines at 1M context.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (deepmind.google official Gemini 3.1 Pro benchmark table + model info, OpenCode Zen pricing/deprecation docs updated 2026-09-28, benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: added DeepMind vendor benchmarks (HLE 44.4/51.4%, SWE-bench Verified 80.6%, MCP Atlas, BrowseComp, MRCR), confirmed Zen availability + pricing, raised Reasoning 86→90, Context 88→90, Coding 83→86, Cost 62→78, Overall 86→88.
- Future sources: add a new file next to this one using the same headings.
