# DeepSeek V4.1 Flash — findings by Ling 3.1 Flash

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`, MIT open weights; DeepSeek API as `deepseek-flash`, OpenRouter, Databricks, Fireworks, LithosAI)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's September-2026 MIT-open-weight efficiency MoE — the first Causal Encoder-Decoder frontier model (552B total; 8B active in prefill, 16B in decode) with a 1M context: Terminal-Bench 2.1 90.6% and DeepSWE 74.2% at max effort (DeepSeek's scorecard, outscoring Opus 5 and GPT-5.6 Sol), HLE 63.9% with tools (#5 of 128), CodeForces 3471 (#1 of 16), at $0.15–0.30/$0.60–1.20 per 1M with 98%-off cache hits.
- **Provider / access:** DeepSeek API (peak/off-peak pricing; peak hours 01:00–04:00 and 06:00–10:00 UTC Mon–Fri, all other hours at 50% rates), OpenRouter, Databricks, Fireworks, LithosAI, Inco (FAST); MIT weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`); day-one vLLM support (NVIDIA + AMD). 211–546 tok/s (provider-dependent; AA 236 t/s), TTFT ~0.9–1.2s first-party; very verbose (250M tokens in AA's Index eval vs the 140M median). V4-Flash and V4-Flash-Vision-Exp are retired (they route here); V4-Pro is being phased out to this model at these rates until V4.1-Pro launches.
- **Release / knowledge:** 2026-09-10; knowledge cutoff not stated.
- **IDs:** `deepseek/deepseek-v4.1-flash` / `deepseek-flash`.
- **Context window:** 1,048,576 (1M) tokens in; ~384K max output. ARMES cautions that RULER/MRCR-style recall typically degrades well before the 1M ceiling.
- **Modalities:** text, image in (DeepSeek-ViT, jointly trained); text out.
- **Pricing (as of 2026-10-02):** peak $0.30/$1.20 per 1M input/output; off-peak $0.15/$0.60; cache hits $0.006/$0.003 (a 98% discount); blended (7:2:1) $0.18/M; third-party blended from $0.08/M (Databricks); AA cost per Intelligence-Index task $0.27.
- **Architecture:** 552B-parameter CED MoE (20-layer causal encoder + 20-layer decoder; 1 shared + 384 routed experts, top-6 gate; ~196B Engram parameters per ARMES); FP4 main KV + Compressed Sparse Attention 2 + SWA Bounded Replay (~890 bytes/token global KV; ~4× KV-cache reduction vs the previous Flash; 1/4 the HBM, 1/8 the SSD).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (max effort, DeepSeek scorecard): **90.6%** — clears the 88% frontier bar; ARMES reports it outscoring Claude Opus 5 and GPT-5.6 Sol (vendor-reported; base/legacy configs are far lower — legacy Terminal-Bench 31.3%)
- AutomationBench (AA, with tools): **54.8%** — #1 of 24 (AutomationBench-AA reported best: 68.9%)
- CyberGym (max, with tools): **88.1%** — #3 of 11; ExploitGym: 15.3%
- Agents' Last Exam (max, with tools): **31.8%** — #7 of 22
- AA Intelligence Index: **39** (AA) / **40** (DeepInfra) — #17 of 115 (median 18), dragged by TB-Science 15.7%, CritPt 14.3% and ALE 31.8%
- MCP Atlas / BrowseComp / OSWorld / τ-Bench / Toolathlon: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (max, with tools): **63.9%** — #5 of 128 (frontier-level); HLE (no tools, DeepInfra/AA): **36.8%**
- GPQA Diamond (max, no tools): **90.9%** — clears the 90%+ frontier band (#32 of 187)
- AIME 2025: **87.5%**; MathArena Apex (no tools): **65.6%** — #4 of 15; MATH-500: **97.3%** pass@1
- MMLU: **91%**; MMLU-Pro: **81.2%**; SimpleQA: **49%**; IFEval: **89.5%**; SuperCLUE: **71.8%** (#2 of 13)
- CritPt: **14.3%**; MysteryMechanism (thinking high, with tools): **21.2%**; ProofBench v1.1 (Lean 4): **54.0%**; SimpleBench: **66.7%**

Coding:

- DeepSWE v1.1 (max effort, DeepSeek scorecard): **74.2%** — clears the 74% frontier bar (vendor-reported)
- Terminal-Bench 2.1 (max): **90.6%** — see above
- SWE-bench Verified (base config, API changelog): **66.0%** — mid-tier; SWE-bench Multilingual: **54.5%**
- CodeForces (no tools): **3471** — #1 of 16
- Code Migration (thinking high, with tools): **45.6%** (#14 of 46)
- SciCode (max, no tools): **51.9%** (#32 of 87) — under the 55% reference
- Terminal-Bench Science 0.1 (max, with tools): **15.7%** (#8 of 18)
- AA Coding Index / LiveCodeBench / Vibe Code Bench: no verified public score found

Long context / multimodal:

- 1M window (CED + FP4 compressed KV); AA-LCR (max, no tools): **84.0%** — #6 of 16; no MRCR/RULER/GraphWalks score published (ARMES warns of recall decay near the 1M boundary)
- BabyVision (max, with tools): **89.6%** — #3 of 8; Chartography (max, with tools): **78.9%** — #5 of 10
- No MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 at 90.6% (max effort, DeepSeek's scorecard) clears the 88% frontier bar and AutomationBench 54.8% ranks #1 of 24, with CyberGym 88.1% (#3) supporting; the AA Intelligence Index of 39–40 (dragged by TB-Science 15.7%, CritPt 14.3%, ALE 31.8%), Agents' Last Exam 31.8% and the far-lower base-config figures (legacy TB 31.3%) are the caveats — all headline figures are vendor-reported at max effort.
- **Reasoning: 87/100.** HLE 63.9% with tools (#5 of 128) and GPQA Diamond 90.9% clear the frontier's 40%+/90%+ bars, with AIME 87.5%, MATH-500 97.3% and MathArena Apex 65.6% (#4) supporting; HLE 36.8% without tools, CritPt 14.3% and the AA Intelligence Index of 39–40 cap the score.
- **Context window: 94/100.** 1M-token window (CED, FP4 compressed KV at ~890 bytes/token) with AA-LCR 84.0% (#6 of 16); no ≥98%-at-512K+ retrieval figure, and ARMES warns of recall decay near the ceiling, so 100 is not justified.
- **Multimodal: 72/100.** text/image in with text out — the +image-in band (60–70) pushed to 72 by a strong vision suite (BabyVision 89.6% #3, Chartography 78.9% #5); no MMMU or video-suite figure captured.
- **Coding: 84/100.** Terminal-Bench 2.1 90.6% and DeepSWE 74.2% (both max effort, DeepSeek's scorecard) clear their 85%/74% frontier bars and CodeForces 3471 ranks #1 of 16, but SWE-bench Verified 66.0% (base) is mid-tier, SciCode 51.9% is under the 55% reference, SWE-bench Multilingual 54.5% and Code Migration 45.6% are weak, and the AA Coding Index is unpublished.
- **Cost efficiency: 95/100.** Off-peak $0.15/$0.60 per 1M and peak $0.30/$1.20 (blended $0.18/M; cache hits 98% off at $0.003–0.006/M; third-party blended from $0.08/M) sit at or beyond the ~95 ($0.15/$0.60) anchor; verbosity (250M Index-eval tokens) is the usage caveat.
- **Overall Score: 84/100.** (84+87+94+72+84)/5 = 84.2 → 84 — the best-value frontier-agentic open-weight model: TB2.1 90.6% and DeepSWE 74.2% at max effort, HLE 63.9% with tools (#5), GPQA 90.9%, CodeForces #1, 1M context, MIT weights, at $0.15–0.30/$0.60–1.20 with 98%-off caching; the effort-tier gap (base configs far lower), AA Index 39–40 and long-context decay near 1M are the caveats.

---

## Update 2026-10-08 (6-day re-research)

Independent and board data found (fills the LiveBench, MMMU-Pro and harness-sensitivity gaps):

- **LiveBench (official board, via AI-Atlas): current group leader in all eight tracked groups** — Agentic Coding 77.3%, Coding 80.0% (−6.34 vs Claude Fable 5.1), Reasoning 86.7% (−5.96 vs gpt-6-astra), Mathematics 93.3%, Language 81.2%, Data Analysis 79.3% (−3.72 vs gpt-6-astra), Instruction Following 70.0%, global average 81.1%
- Artificial Analysis re-runs (obs. 2026-09-16): Intelligence Index **39.5** (−13.8 vs Claude Fable 5.1), HLE **39.3%** (no tools), SciCode **51.9%**, MMMU-Pro **77.0%** (fills the multimodal gap; −9.89 vs gpt-6-astra), Terminal-Bench 4.0 **26.8%** (independent, vs 31.2% on DeepSeek's card)
- Harness sensitivity (DeepSeek's own scaffold study, N=8 on DeepSWE / N=3 on TB 2.1, 1M context, max_steps=500, TB 2.1 without network): DeepSWE v1.1 spans 65.5% (OpenCode) – 74.2% (mini-SWE) — Claude Code 69.8%, Codex 65.6%, Pi 66.2%, DSH Minimal 72.6%, DSH Standard 70.5%, DSH PTC 67.6%; Terminal-Bench 2.1 spans 84.1% (Codex) – 90.6% (DSH Minimal) — Claude Code 88.0%, OpenCode 85.0%, Pi 86.1%, mini-SWE 90.3%, DSH Standard/PTC 85.8%. The 90.6%/74.2% headlines are best-config figures, not the median
- BenchLM cross-model rows: DeepSWE 74.2% (ahead of Claude Opus 5's 68.8% on that board), ProgramBench 20.3% (far behind Opus 5's 93.0%), NL2Repo 65.4%, OpenHarmony Bench 60.3%, Terminal-Bench 3.0 30%
- MCP Atlas / BrowseComp / OSWorld / τ-Bench / Toolathlon: still no verified public score (BenchLM lists all as "Coming soon" as of 2026-10-08)
- No score change: LiveBench's eight group-leadership rows and MMMU-Pro 77.0% corroborate the 84/87/94/72/84 profile; the AA TB 4.0 run (26.8%) and the harness spread are noted as caveats

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 84 / Reasoning 87 / Context 94 / Multimodal 72 / Coding 84 / Cost 95 / Overall 84.** New rows this pass (note: most fresh coverage is of the retired V4-Flash/0731 lineage that now routes to V4.1-Flash — labeled as such):

- **AA provider page (current Index v4.3.2):** DeepSeek V4.1 Flash (max) = **39** — still the most intelligent model on DeepSeek's provider page (V4 Pro 0813 max 36, V4 Flash Vision max 35, then the V4 Flash 0731 / V4 Pro / V4 Pro 0813 variants); **$0.27 cost per task**, **217 t/s**, TTFT **1.16s** (the file's "AA 236 t/s" was an earlier read). The 0731's headline "50" was on the July index version — not comparable to today's 39 (same recalibration that moved Gemini 3 Flash from 71 to 46).
- **Retired V4-Flash 0731 lineage (re-post-trained 284B/13B, routes here):** AA Intelligence Index **50** (article) / **52** (max-effort comparison, v4.1.1) — a 10-point jump over the April Flash (40), 6 ahead of V4 Pro, 1 behind GPT-5.6 Luna (51), level with GLM-5.2 (51) and Gemini 3.6 Flash (50), 7 behind Kimi K3 (57); **GDPval-AA v2 Elo 1559** — open-weights #2 behind Kimi K3 (1687), ahead of GLM-5.2 (1510); AA's own Terminal-Bench 2.1 run **79%** vs DeepSeek's 82.7% (a ~4-point vendor-to-third-party gap, echoing the V4.1 Flash harness caveat); Toolathlon verified **70.3%**, CyberGym **76.7%**, NL2Repo **54.2%**, Agents' Last Exam **25.2%** (0.5 behind Opus 4.8's 25.7), AutomationBench **25.1%**, DSBench-FullStack **68.7%**, DSBench-Hard **59.6%**; AA-Omniscience **−16** (hallucination 84%, accuracy 37%); CritPt 17%, SciCode 50%, HLE 37%, AA-LCR 66%, GPQA 91%; ~206M output tokens on the Index (−12% vs predecessor).
- **Cost corroboration (Quartz/Reuters):** V4-Flash was found to be the **cheapest major AI model to run** — ~$0.03 per benchmark test vs $0.86 (Kimi K3), $1.86 (GPT-5.6 Sol) and $3.15 (Claude Fable 5); AA measured ~60% lower cost per task than GPT-5.6 Luna (max) even after OpenAI's 80% price cut, driven by DeepSeek's ~98% cache-hit discount (vs the industry-standard 90%).
- **V4 paper long-context data (supports the recall-decay caution):** MRCR 8-needle accuracy stays above 0.82 through 256K tokens but falls to **0.59 at 1M** (V4-Pro-Max); at 1M, V4-Flash needs 10% of V3.2's single-token inference FLOPs and 7% of its KV cache; 32T-token pretraining, Muon optimizer, mHC, CSA+HCA hybrid attention.
- **API detail:** V4-Flash natively supports the **Responses API format** and is adapted for **Codex**; legacy `deepseek-chat`/`deepseek-reasoner` aliases retired 2026-07-24 (they pointed to the non-thinking/thinking modes of `deepseek-v4-flash`). Third-party price reads: Vercel $0.06/$0.18, DataLLM $0.09/$0.18 (cache $0.02), ZenMux/UserRightAI $0.14/$0.28 — all at or under the first-party off-peak $0.15/$0.60.
- **Score impact:** none — the current AA read (39 on v4.3.2, $0.27/task) matches the file's AA row, the 0731 lineage rows are predecessor data consistent with the effort-tier caveats, and the cheapest-major-model cost finding corroborates Cost 95.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (DeepSeek V4.1-Flash launch, DeepSeek API changelog, Artificial Analysis, DeepInfra, LLMLearner, ARMES Docs, Quartz/Reuters, Hugging Face model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_1_Flash.md`, using the same headings.
