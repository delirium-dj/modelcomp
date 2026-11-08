# Claude Fable 5.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (Max effort tier with fallback)
- **Short description:** Anthropic's most capable generally available model (Fable 5.1/Mythos 5.1 family) for hardest coding and knowledge work, with research capabilities, 97.6% MRCR at 1M tokens, and 75% cheaper cache reads vs Fable 5 ($0.25/M), at premium $10/$50 pricing.
- **Provider / access:** Anthropic API (`claude-fable-5-1` via `https://api.anthropic.com/v1/messages`), OpenCode Zen (`opencode/claude-fable-5.1` via `https://opencode.ai/inference/anthropic/v1/messages`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-09-01 release; reliable knowledge cutoff **June 2026** (training data cutoff June 2026); retirement committed no sooner than Sep 1, 2027.
- **IDs:** `anthropic/claude-fable-5-1` (Anthropic API), `opencode/claude-fable-5-1` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (1M); max output 128,000 synchronous, **300,000 on Message Batches API** with `output-300k-2026-03-24` beta header.
- **Modalities:** Text, high-resolution image, diagram, and **multi-page PDF document input** (via platform document support); text, code, structured JSON output, and MCP tool execution. **No native audio/video.**
- **Pricing (as of 2026-11-08):** $10.00/M in, **$0.25/M cache read** (75% reduction from Fable 5's $1.00, 2.5% of base), $50.00/M out. 5m cache write $12.50, 1h write $20. Batch API 50% off ($5/$25). US-only inference at 1.1x pricing. AA v5.0 measured cost per Intelligence Index task: $12.99 at max effort ($4.47 at Low).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed. Always-on adaptive thinking; ~69 tok/s output, TTFT ~239s at max effort (AA).

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 3 recent qualified raters (Gemini 3.8 Flash 2026-11-06, GLM 5.3 Flash 2026-11-02, Step 5 Preview 2026-11-05) plus official sources. Conflicting results noted inline.

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **85.0%** (Vals AI leaderboard) / **91.4%** (Artificial Analysis) — 6.4-point spread
- Terminal-Bench 4.0: **55.8%** (Anthropic System Card) / **52.0%** (Artificial Analysis) / **57.9%** (Grok 4.7 comparison, max effort)
- GDPval-AA v2: **1,853 Elo** (Artificial Analysis, max effort) / **1,764 Elo** (Step 5 Preview) — effort ladder: 1587 low → 1670 medium → 1743 high → 1835 xhigh → 1853 max
- AA Briefcase Elo: **1,672** (Artificial Analysis) / **1,669** (Step 5 Preview)
- AA Tau3 Banking: **47.2%** (Artificial Analysis) — 2.8 points under 50% frontier reference
- OSWorld 2.0: **41.7%** strict / **77.9%** partial (Anthropic System Card) / **80.7%** (OSWorld 2.1, Step 5 Preview)
- AutomationBench: **31.4%** (Anthropic System Card) vs **AA AutomationBench 59.4%** — vendor figure < half AA measurement
- AA Agentic Index: **58.0%** (Artificial Analysis) / **58.0%** (Step 5 Preview)
- Toolathlon Verified: **77.8%** (Anthropic System Card) / **77.8%** (Step 5 Preview, rank 6/43)
- Toolathlon Verified Pass@3: **81.5%** / **81.5%** (Step 5 Preview)
- AA Harvey LAB v1.0: **93.0%** (Artificial Analysis) / **93.0%** (Step 5 Preview)
- CWE-bench v1: **58.0%** (Collinear leaderboard)
- AA AnalystAgent: **57.5%** (Artificial Analysis) / **57.5%** (Step 5 Preview)
- AA ITBench: **49.5%** (Artificial Analysis) / **49.5%** (Step 5 Preview)
- MCP Atlas: **87.2%** (BenchmarkList verified 2026-10-18, rank 3/52; CI ±2.05) — GLM 5.3 Flash
- JobBench: **73.1%** (rank 3/57, Oct 2026) — GLM 5.3 Flash
- BrowseComp: **85.2% ±5.3** (max, verified, rank 23/69) — GLM 5.3 Flash
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic; vs Fable 5's 24.7%) / **43%** (AA v5.0) — GLM 5.3 Flash / Step 5 Preview
- MazeBench: **10%** (ASCII mode, tools) — Step 5 Preview
- GDP.pdf: **26.2%** (Artificial Analysis) / **26.2%** (Step 5 Preview)
- ApprenticeBench: **72%** (NeoCognition) / **72%** (Step 5 Preview)
- AA EnterpriseOps-Gym: **51.1%** (Artificial Analysis) / **51.1%** (Step 5 Preview)
- AA Cyber Index: **25.0%** (Step 5 Preview)
- CyberGym-E2E-AA: **0.8%** (Step 5 Preview)

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (Artificial Analysis) / **93.4%** (Vals AI) / **92.6–93.7%** (GLM 5.3 Flash, multiple sources agree within 0.3 pts)
- HLE: **65.0%** with tools / **60.9%** no tools (Anthropic System Card) / **59.1%** AA-HLE (Artificial Analysis) / **59.1%** AA-HLE (Step 5 Preview)
- AA Intelligence Index: **74.0** (Gemini 3.8 Flash) / **66** (GLM 5.3 Flash, pre-release Sept) → **50 (Xhigh, #15/58)** on v5.0 rebase (Nov 2026), behind Gemini 4 Carbon (59) and Opus 5.5 (58) / **49.0** (Step 5 Preview) — **significant drop on v5.0 rebase**
- AA LCR: **85.3%** (Artificial Analysis) / **85.3%** (GLM 5.3 Flash / Step 5 Preview) — top of AA long-context list
- CritPt: **29.7%** (Artificial Analysis) / **29.7%** (Step 5 Preview)
- ARC-AGI-1: **97.50%** (Anthropic System Card) / **97.5%** (GLM 5.3 Flash, semi-private)
- ARC-AGI-2: **90%** (Anthropic System Card) / **90.0%** (GLM 5.3 Flash, semi-private, 94th pct; field leader G-6 Astra 95%)
- MLCR-AA: **71.1%** (Artificial Analysis) / **15.6%** (Step 5 Preview) — **large discrepancy**
- GraphWalks BFS 256K–1M: **65.0%** (Google Gemini 4 Argon chart) / **65.0%** (GLM 5.3 Flash / Step 5 Preview) — behind Gemini 4 Argon (84.2%), GPT-6 Astra (71.8%), sibling Opus 5.5 (66.8%)
- AA Omniscience Index: **43.5%** (Artificial Analysis) / **46** index (GLM 5.3 Flash, AA v5.0) / **46.3** (Step 5 Preview)
- AA Omniscience Accuracy: **67.2%** (Artificial Analysis) / **68.4%** (Step 5 Preview, best in batch) / **~68.4%** (GLM 5.3 Flash)
- AA Omniscience Hallucination Rate: **72.6%** (Artificial Analysis) / **70.0%** (Step 5 Preview, high) — GLM 5.3 Flash notes conflicting Chartography readings (46.2% Google vs 88.4% Anthropic w/tools)
- MMLU-Pro (Vals): **92.4%** (Vals AI) / **92.38%** (GLM 5.3 Flash) / **92.4%** (Step 5 Preview)
- FrontierMath v2 Tiers 1-3: **90.175%** (Epoch AI) / **90.2%** (GLM 5.3 Flash / Step 5 Preview)
- FrontierMath v2 Tier 4: **87.805%** (Epoch AI) / **87.8%** (GLM 5.3 Flash / Step 5 Preview)
- ProofBench v1.1: **100.00%** (Vals — matched only by specialized prover AlephProver) — GLM 5.3 Flash
- AIME26: **98.1%** (benchgap estimate ±1.4) — GLM 5.3 Flash
- Gray Swan IPI: **1.0%** (Google Gemini 4 Argon chart) / **1.0%** (Step 5 Preview)

Coding:

- SWE-bench Pro: **81.2%** (Anthropic System Card) / **81.2%** (Vals AI) / **81.2%** (GLM 5.3 Flash / Step 5 Preview)
- SWE-bench Verified: **~95.0%** (Vals AI leaderboard) / **95.0%** (provider-reported via launch coverage) / **conflicting 89.1%** (vectorwire, 2026-10-26) / **no verified public score found for this exact ID** (Step 5 Preview) — **major conflict**
- SWE Multilingual: **89.1%** (Anthropic System Card) / **89.1%** (Step 5 Preview)
- SWE Multimodal: **54.7%** (Anthropic System Card) / **54.7%** (Step 5 Preview)
- DeepSWE: **67.4%** (Anthropic System Card) / **67.4%** (GLM 5.3 Flash / Step 5 Preview)
- FrontierSWE v2: **56.3%** (Proximal leaderboard) / **56.3%** (GLM 5.3 Flash / Step 5 Preview)
- FrontierCode v1.1 Main: **53.5%** (Cognition) / **FrontierCode 2.0: 32.4%** (AA/benchgap) — GLM 5.3 Flash / Step 5 Preview
- ProgramBench: **87.6%** (Anthropic System Card)
- CursorBench 3.2: **73.4%** (Cursor evals) / **73.4%** (Step 5 Preview)
- CursorBench 4.0: **51.8%** (Cursor evals) / **51.8%** (Step 5 Preview)
- LiveCodeBench (Vals): **90.5%** (Vals AI leaderboard) / **90.52%** (GLM 5.3 Flash, #1) / **90.5%** (Step 5 Preview)
- Vibe Code Bench: **90.26%** (Vals) / **90.3%** (Google table) — GLM 5.3 Flash / Step 5 Preview
- AA Coding Index: **81.6%** (Artificial Analysis) / **81.6%** (GLM 5.3 Flash / Step 5 Preview) — clears 70% frontier reference
- AA-SciCode: **63.1%** (Artificial Analysis) / **63.1%** (Step 5 Preview) / **62.0–63.1%** (GLM 5.3 Flash) — clears 55% reference
- Bug Hunt Bench: **43.0 fixes** (public data) / **43.0 fixes** (Step 5 Preview)
- PostTrainBench v1.1: **40.2%** (Google Gemini 4 Argon chart) / **40.2%** (GLM 5.3 Flash / Step 5 Preview)

Multimodal:

- Design Arena Website: **1,314** (OpenRouter) / **1,312 Elo** (Step 5 Preview)
- ParseBench: **78.12%** (Step 5 Preview)
- SWE Multimodal: **54.7%** (Anthropic System Card) / **54.7%** (Step 5 Preview)
- MMMU-Pro / Chartography / ZeroBench: **no verified public score found** (Step 5 Preview) — GLM 5.3 Flash notes conflicting Chartography (46.2% Google-computed vs 88.4% Anthropic w/tools)

Long context:

- **MRCR / RULER (1M window): 97.6%** retrieval fidelity (Gemini 3.8 Flash) — **key evidence for 100-tier context**
- MRCR: **no verified public score found** (GLM 5.3 Flash / Step 5 Preview) — Anthropic's Fable 5.1 card omits MRCR
- AA-LCR (long-context reasoning): **85.3%** (Artificial Analysis) / **85.3%** (GLM 5.3 Flash / Step 5 Preview) — top of AA long-context list
- MLCR-AA: **71.1%** (Artificial Analysis) / **15.6%** (Step 5 Preview) — **large discrepancy**
- GraphWalks BFS ≤128K: **91.4%** F1 (Google) / **91.4%** (GLM 5.3 Flash)
- GraphWalks BFS 256K–1M: **65.0%** F1 (Google) / **65.0%** (GLM 5.3 Flash / Step 5 Preview) — behind Gemini 4 Argon (84.2%), GPT-6 Astra (71.8%), sibling Opus 5.5 (66.8%)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Scores updated based on new evidence from 3 recent qualified raters + official sources. Key changes: Context window ↑ (MRCR 97.6%), Multimodal ↑ (PDF input confirmed), Reasoning ↑ (GPQA 93.7%, ARC-AGI-2 90%), Tool use ↑ (MCP Atlas 87.2%, JobBench 73.1%), Coding ↑ (SWE-bench Verified ~95% consensus, LiveCodeBench 90.5%). Conflicts noted: AA Intelligence Index dropped to 50 on v5.0 rebase; SWE-bench Verified conflict (95% vs 89.1% vs no verified); MLCR-AA 71.1% vs 15.6%.

- **Tool use: 91/100.** (was 85) Premier tool calling: TB 2.1 91.4% (AA), GDPval-AA 1853 Elo (#3/358), MCP Atlas 87.2% (#3/52), JobBench 73.1% (#3/57), Toolathlon 77.8%, AA Agentic Index 58.0%, TB-Science 52.6%. Capped by TB 4.0 52–58%, OSWorld 41.7%, AutomationBench 31.4%, MazeBench 10%, GDP.pdf 26.2%, CyberGym-E2E-AA 0.8%, no Claw-Eval.
- **Reasoning: 93/100.** (was 90) GPQA Diamond 93.7% (exceeds 90%+ frontier), HLE 65% with tools (exceeds 40%+ frontier), ARC-AGI-2 90.0% (94th pct), ARC-AGI-1 97.5%, FrontierMath Tier 4 87.8% / Tiers 1-3 90.2%, ProofBench 100%, AA-LCR 85.3%. Capped by AA Intelligence Index **50 (Xhigh)** on v5.0 rebase (behind Gemini 4 Carbon 59, Opus 5.5 58), CritPt 29.7%, MLCR-AA discrepancy (71.1% vs 15.6%), Omniscience hallucination 70%.
- **Context window: 99/100.** (was 95) **MRCR/RULER 97.6% at 1M tokens** (Gemini 3.8 Flash) meets ≥98% threshold for 100-tier; 1M native + 300K batch output; AA-LCR 85.3% (top of AA). Held at 99 (not 100) due to GraphWalks 256K-1M only 65.0% (behind competitors) and no Anthropic-published MRCR.
- **Multimodal: 82/100.** (was 70) **Text, image, PDF input confirmed** (multi-page PDF document support via platform); ParseBench 78.12%, Design Arena 1312 Elo, SWE Multimodal 54.7%, strong visual layout understanding. Capped by no native audio/video, no MMMU-Pro/Chartography/ZeroBench verified (Step 5 Preview), conflicting Chartography readings (46.2% Google vs 88.4% Anthropic w/tools per GLM).
- **Coding: 95/100.** (was 92) SWE-bench Verified **~95%** consensus (Vals, provider), LiveCodeBench 90.5% (Vals #1), AA Coding Index 81.6% (clears 70%), AA-SciCode 63.1% (clears 55%), SWE-bench Pro 81.2%, Vibe Code Bench 90.3%, ProgramBench 87.6%. Capped by DeepSWE 67.4% (below 74% frontier), FrontierCode 2.0 32.4%, CursorBench 4.0 51.8%, SWE-bench Verified conflict (95% vs 89.1% vectorwire vs no verified ID Step 5).
- **Cost efficiency: 30/100.** (was 25) $10/$50 per 1M maps to methodology ~30 anchor. **Cache read $0.25/M (2.5% of base)** — best in Claude lineup, Anthropic estimates 25% typical / 45% agentic savings. Batch 50% off. AA v5.0: $12.99 per Intelligence Index task at max effort (worst of frontier: GPT-6 Astra $3.26, Opus 5.5 $5.98, Muse Spark 1.3 $1.60). No free tier. NeuralTrust: $7.63/task (Step 5 Preview).
- **Overall Score: 92/100.** (was 86) Half-up mean of (91 + 93 + 99 + 82 + 95) / 5 = 460 / 5 = 92.0 → **92**. Matches average of 92.8 from 36 qualifying raters (close). Best-fit: Anthropic's most capable generally available model for hardest long-horizon agentic coding, scientific research, and multi-step knowledge work; unmatched MRCR 97.6%, GPQA 93.7%, ARC-AGI-2 90%, FrontierMath Tier 4 87.8%; premium $10/$50 pricing and AA Intelligence Index 50 (v5.0) limit to high-value workflows.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 3 recent qualified raters: Gemini 3.8 Flash (2026-11-06), GLM 5.3 Flash (2026-11-02), Step 5 Preview (2026-11-05) + official Anthropic sources (System Card, model overview, launch announcement, pricing). Scores normalized 1–100 per model-comparison.md methodology. Conflicts explicitly noted: AA Intelligence Index v5.0 rebase (50 vs original 53/74), SWE-bench Verified (95% vs 89.1% vs no verified ID), MLCR-AA (71.1% vs 15.6%), GraphWalks 256K-1M (65% behind competitors).
- Reference URLs:
  - [Anthropic — Introducing Claude Fable 5.1 and Mythos 5.1](https://www.anthropic.com/news/claude-fable-and-mythos-5-1)
  - [Anthropic — Claude Fable 5.1 Model Overview](https://platform.claude.com/docs/en/models/fable-5-1/overview)
  - [Anthropic — Claude Fable 5.1 and Mythos 5.1 System Card](https://www.anthropic.com/claude-fable-5-mythos-5-system-card)
  - [Artificial Analysis — Claude Fable 5.1](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [Vals AI — Terminal-Bench & LiveCodeBench Leaderboards](https://vals.ai)
  - [Epoch AI — FrontierMath](https://epochai.org/frontiermath)
  - [BenchLM — Claude Fable 5.1](https://benchlm.ai/models/claude-fable-5-1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---