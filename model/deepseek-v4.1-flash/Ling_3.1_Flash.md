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

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (DeepSeek V4.1-Flash launch, Artificial Analysis, DeepInfra, LLMLearner, ARMES Docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_1_Flash.md`, using the same headings.
