# Claude Opus 5.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship reasoning model (Claude 5.5 family), delivering frontier agentic coding, knowledge work, and computer-use performance at 40% lower cost than Opus 5, with improved communication style and strongest-to-date alignment scores. **The current Anthropic flagship** ("Status: Active (latest)"), retirement not sooner than Sep 2027. BenchLM: 86.29/100, #2/1009.
- **Provider / access:** Anthropic API (`claude-opus-5-5` via `https://api.anthropic.com/v1/messages`), OpenCode Zen (`opencode/claude-opus-5-5`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Azure/Foundry, Cloudflare AI. Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-09-22 release; **reliable knowledge cutoff and training data cutoff: June 2026** (stated explicitly by Anthropic).
- **IDs:** `anthropic/claude-opus-5-5` (Anthropic API), `opencode/claude-opus-5-5` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (1M); max output 128,000 synchronous, **300,000 on Message Batches API** with `output-300k-2026-03-24` beta header — largest output allowance in Claude lineup.
- **Modalities:** Text, image, **PDF input** (up to 600 images/PDF pages per request); text output. **No native audio/video.** Adaptive thinking always on; effort levels low/medium (default)/high/xhigh/max. Tool calls: yes (incl. `computer_toolset_20260801` computer-use toolset). JSON mode/structured outputs: yes.
- **Pricing (as of 2026-11-08):** $4.00/M in, **$0.20/M cache read** (5% of base — 5.5-family improvement vs standard 10%), $5/M cache write (5m), $8/M (1h), $20.00/M out. Batch API 50% off ($2/$10). Fast mode (up to 2.5x faster): $8/$40. US-only inference 1.1x ($4.40/$22). Blended 7:2:1 ≈ $2.94/M. Cost per Intelligence Index task: $5.98 (AA) / $10.04 at max effort (GLM).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed. Hybrid reasoning with always-on adaptive thinking; "smaller/cheaper than Fable 5.1" Opus-tier design.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 4 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-01, Gemini 3.8 Flash 2026-11-06, plus my original 2026-10-19) + official Anthropic sources. Conflicting results noted inline.

Agent / tool use:

- Vals Index (composite, enterprise knowledge work): **69.69%, #1 of 63** at $32.77/test (Vals AI independent) — ahead of Fable 5.1 (68.83%), Opus 5 (67.21%), GPT-6 Astra (66.61%)
- Terminal-Bench 2.1: **87.64%, #1 of 63** (Vals AI independent, high effort; 79.8% when 26/267 fallback tasks count as failures) / **87.27%** (GPT-6 Astra)
- Terminal-Bench 4.0: **66.4%** (Anthropic launch, xhigh effort, safeguards on) / **59.6%** (AA independent) / **61.62% #1** (Vals AI independent) / **64.8% ± 3.1** (tbench.ai public board, native agent harness) / **59.6%** (Gemini 3.8 Flash, mini-SWE-agent) — **6.8-point vendor-vs-independent gap**
- GDPval-AA v2.1: **1,846 Elo** (Anthropic launch, max effort; top of launch table vs Fable 5.1 1735, Opus 5 1708, GPT-6 Astra 1542) / **68.3%** normalized (AA)
- AA Briefcase: **1,800 Elo** (Step 5 Preview) / **1,803** (original)
- AA Harvey LAB v1.0: **91.2%** (Step 5 Preview)
- OSWorld 2.1: **81.8%** partial / **48.7%** strict (Anthropic system card) / **87.2%** Offline (Step 5 Preview)
- OSWorld 2.0: **48.7%** (system card, harder harness)
- Toolathlon Verified: **77.8%** (Anthropic System Card) / **77.8%** (Pass@3 82.4%, Pass³ 72.2%, mean 26.9 turns) — Step 5 Preview
- AA AutomationBench: **69.5%** (Artificial Analysis) / **69.5%** (Step 5 Preview) — note: Anthropic's separate "AutomationBench" figure is **40.0%** (Zapier-run, no fallback models, safeguard interventions = failures)
- AA ITBench (K8s incident RCA): **38.2%** (AA) — weak spot
- AA AnalystAgent: **56.3%** (Step 5 Preview)
- CWE-bench v1: **67.0%** (Collinear leaderboard)
- Hermes Index: **63.3%** / Hermes Bench: **76.7%** (Nous Research)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic) / **48.57% #2** (Vals AI, GPT-6 Astra leads at 64.6% vendor)
- τ²-Bench Airline: **75.3% ±1.7pp**, ~#30/119 (OpenRouter) — mid-pack behind Pareto (80.0%), Fable 5 (79.5%), Opus 5 (78.8%)
- τ³-Banking: **no verified public score found** (Step 5 Preview)
- MazeBench: **13%** (ASCII mode, tools) / **13%** (Step 5 Preview)
- GDP.pdf: **26.2%** (Artificial Analysis) / **26.2%** (Step 5 Preview)
- OfficeQA Pro: **67.7%** (Step 5 Preview)
- AA Cyber Index: **28.7%** / CyberGym-E2E-AA: **0.8%** (Step 5 Preview)
- Harvey Legal Agent Benchmark: **3.75%, #31/64** (Vals AI — clear weak spot)
- MCP-Atlas / Claw-Eval / ClawProBench: **no verified public score found** (GLM 5.3 Flash / Step 5 Preview)

Reasoning / knowledge:

- HLE (with tools): **67.7%** (Anthropic blog) / **64.4%** no tools (Anthropic System Card) / **61.4%** AA independent max effort / **61.4%** (Step 5 Preview)
- AA Intelligence Index v5.0: **58** (rank #1/217 on AA / #2/1009 BenchLM) / **58.4** (Step 5 Preview) / **58** (Gemini 3.8 Flash)
- ARC-AGI-1: **97.50%** (ARC Prize semi-private) / **98.5%** at high effort (GLM 5.3 Flash, ARC Prize verified)
- ARC-AGI-2: **91.7%** (ARC Prize semi-private) / **93.3%** at high effort (GLM 5.3 Flash, best of five variants, ARC Prize verified) / **91.7%** (Step 5 Preview / Gemini 3.8 Flash)
- ARC-AGI-3: **no verified public score found** (GLM 5.3 Flash)
- GPQA Diamond: **90.6–94.0%** across High/Max effort (Gemini 3.8 Flash) / **no verified vendor score** (Anthropic reports none; AA lists null) / **Epoch AI third-party 90.6%** at max effort (provisional, GLM 5.3 Flash) — **major gap: no official Anthropic GPQA**
- FrontierMath v2: Tiers 1–3 **91.2%**, Tier 4 **95.0%** (Epoch AI) / **91.2% / 95.0%** (Step 5 Preview / GLM 5.3 Flash) / **91.2%** (Gemini 3.8 Flash)
- ArXivMath Aug 2026: **91.2%** no tools / **96.9%** with tools (Step 5 Preview)
- ProofBench v1.1: **100.00%, #1** (Vals AI, ties Fable 5.1 and AlephProver) — GLM 5.3 Flash
- CritPt v2 (Hard Subset, physics): **31.7%** (AA measured) / **31.7%** (Step 5 Preview / GLM 5.3 Flash) — **clear weakness, caps pure-physics claims**
- AA-LCR (long-context reasoning): **84.7%** (AA measured) / **84.7%** (Step 5 Preview / GLM 5.3 Flash)
- GraphWalks BFS ≤128K: **90.6%** (Google-computed for Gemini 4 Argon eval) — behind Fable 5.1 (91.4%), GPT-6 Astra (98.7%), Gemini 4 Argon (99.7%)
- GraphWalks BFS 256K–1M: **66.8%** (Google) / **66.8%** (Step 5 Preview / GLM 5.3 Flash) — behind Gemini 4 Argon (84.2%), GPT-6 Astra (71.8%), ahead of Fable 5.1 (65.0%)
- MLCR-AA: **27.8%** (Step 5 Preview) / **no verified** (GLM 5.3 Flash) — **large discrepancy vs original 66.7%**
- AA-Omniscience v1.1: accuracy **65.5%**, hallucination **50.3%**, index **48.1** (Step 5 Preview) / **66.2% / 58.6% / 46.4%** (original)
- GMMLU: **94.3%** / MILU: **93.1%** / STEMBench: **2.62** (Anthropic System Card)
- HealthBench: raw **68.1%** / length-adjusted **60.6%** / Professional **65.6%** / Professional raw **77.1%** (Anthropic System Card)
- BioMysteryBench: human-solvable **89.3%** / human-difficult **50.0%** (Anthropic System Card)
- De novo protein-binder design: **82.6%** / Protein Design: **60.2%** / Medicinal chemistry: **63.5%** / Protocols: **73.7%** / SingleCellBench: **61.2%** (Step 5 Preview)
- LMArena text arena: **1509 Elo ±12**, #1 on debut (GLM 5.3 Flash)
- **MRCR / RULER: no verified public score found** (GLM 5.3 Flash / Step 5 Preview) — Anthropic's Opus 5.5 card uses ProgramBench, publishes no MRCR/RULER
- AA Omniscience: **48.1 index, 65.5% accuracy, 50.3% hallucination** (Step 5 Preview)

Coding:

- SWE-bench Pro: **89.9%** (Anthropic System Card) / **89.9%** (Step 5 Preview / GLM 5.3 Flash) — field-leading vs Fable 5.1 81.2%, Opus 5 79.2%, GPT-5.6 58.6%
- SWE-bench Verified: **no verified public score found for this exact ID** (Step 5 Preview / GLM 5.3 Flash) — Anthropic no longer reports it; Vals archived board 2026-09-01; aggregator "96.5%" estimates discarded
- SWE Multilingual: **93.9%** / SWE Multimodal: **61.4%** (Anthropic System Card) / **93.9% / 61.4%** (Step 5 Preview / GLM 5.3 Flash)
- DeepSWE v1.1: **74.2%** (Anthropic System Card) / **74.2%** (Step 5 Preview / GLM 5.3 Flash) — clears 74%+ frontier reference
- ProgramBench: **91.2%** (Anthropic System Card, partial-credit) / **18.5% fully resolved #1** (Vals AI independent, not comparable) — **scoring methodology conflict**
- Terminal-Bench 4.0: **66.4%** (Anthropic) / **59.6%** (AA) / **61.62% #1** (Vals)
- AA-SciCode: **66.9%** (Artificial Analysis) / **66.9%** (Step 5 Preview / GLM 5.3 Flash) — clears 55%+ reference
- FrontierCode v1.1 Main: **54.4%** (Anthropic) / **54.4%** (Step 5 Preview / GLM 5.3 Flash)
- FrontierCode 2.0: **45.5%** (AA independent) / **45.5%** (Step 5 Preview / GLM 5.3 Flash)
- FrontierSWE v2: **62.3%** (Proximal leaderboard) / **62.3%** (Step 5 Preview / GLM 5.3 Flash)
- CursorBench 4.0: **57.8%** (Anthropic) / **57.8%** (Step 5 Preview / GLM 5.3 Flash)
- Vibe Code Bench: **90.29% #2/63** (Vals AI, OpenHands) / **90.29%** (GLM 5.3 Flash) — within noise of Fable 5's 90.35%
- IOI: **95.06% #2** (Vals AI) / **95.06%** (GLM 5.3 Flash)
- PostTrainBench v1.1: **49.3%** (Google Gemini 4 Argon chart)
- Bug Hunt Bench: **41.7 fixes** (public data)
- ScarfBench: **70.5%** (GLM 5.3 Flash)
- LiveCodeBench: **no verified public score found** (Vals did not publish 5.5 run; aggregator "100%" estimates discarded) — Step 5 Preview / GLM 5.3 Flash

Multimodal:

- AA MMMU-Pro: **87.7%** (Artificial Analysis) / **87.7%** (Step 5 Preview / GLM 5.3 Flash)
- Chartography: **89.0%** with tools / **64.4%** no tools (Anthropic System Card) / **89.0% / 64.4%** (Step 5 Preview / GLM 5.3 Flash)
- BenchCAD Vision2Code: **0.962** with tools / **0.730** no tools (Anthropic System Card) / **0.962 / 0.730** (Step 5 Preview)
- ExtractBench: **86.06%** / ExtractBench Pro: **51%** (Step 5 Preview)
- ParseBench: **78.89%** (Step 5 Preview)
- OfficeQA: **78.9%** (Anthropic System Card) / **78.9%** (Step 5 Preview)
- Design Arena Website: **1,326 Elo** (OpenRouter) / **1,335** (original)
- Biomedical image analysis: **71.4%** (Anthropic System Card) / **71.4%** (Step 5 Preview)
- SpatialBench: **72.0%** (Step 5 Preview)
- OSWorld 2.1: **81.8%** partial computer use (Anthropic) / **81.8%** (Step 5 Preview)
- Vals Multimodal Index: **#1 (74.15%)** (GLM 5.3 Flash)
- Gray Swan indirect prompt injection: **1.0%** (15 attempts) — Step 5 Preview

Long context:

- AA-LCR: **84.7%** (Artificial Analysis) / **84.7%** (Step 5 Preview / GLM 5.3 Flash)
- GraphWalks BFS ≤128K: **90.6%** (Google) / **90.6%** (GLM 5.3 Flash) — behind Fable 5.1 (91.4%), GPT-6 Astra (98.7%), Gemini 4 Argon (99.7%)
- GraphWalks BFS 256K–1M: **66.8%** (Google) / **66.8%** (Step 5 Preview / GLM 5.3 Flash) — behind Gemini 4 Argon (84.2%), GPT-6 Astra (71.8%), ahead of Fable 5.1 (65.0%)
- **MRCR / RULER: no verified public score found** (GLM 5.3 Flash / Step 5 Preview) — Anthropic's Opus 5.5 card uses ProgramBench, no MRCR/RULER
- MLCR-AA: **27.8%** (Step 5 Preview) vs original **66.7%** — **major discrepancy**

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Scores updated based on 4 recent qualified raters + official sources. Key changes: Tool use ↑ (Vals Index #1 69.69%, TB 2.1 87.64% #1), Reasoning ↑ (ARC-AGI-2 93.3%, FrontierMath Tier 4 95.0%, ProofBench 100%), Context ↑ (GraphWalks ≤128K 90.6%, 300K batch output), Multimodal ↑↑ (PDF input confirmed up to 600 pages, MMMU-Pro 87.7%, Chartography 89%, BenchCAD 0.962), Coding ↑ (SWE-bench Pro 89.9% field lead, DeepSWE 74.2% clears 74% ref, Vibe Code 90.29%). Conflicts: TB 4.0 vendor vs independent (66.4% vs 59.6%), SWE-bench Verified missing, MRCR missing, MLCR-AA 27.8% vs 66.7%, GPQA Diamond missing (third-party 90.6% only), ProgramBench scoring conflict (91.2% partial vs 18.5% fully resolved).

- **Tool use: 96/100.** (was 95) Vals Index #1 69.69% ($32.77/test), TB 2.1 87.64% #1 independent, GDPval-AA 1846 Elo (top launch), TB 4.0 66.4% vendor / 61.6% Vals #1, OSWorld 2.1 81.8%, Toolathlon 77.8%, AA Briefcase 1800 Elo, AA Harvey LAB 91.2%. Capped by AutomationBench 40.0% (no fallback), τ²-Bench Airline 75.3% (mid-pack), MazeBench 13%, ITBench 38.2%, Harvey Legal 3.75%, no τ³-Banking/Claw-Eval/MCP-Atlas.
- **Reasoning: 96/100.** (was 96) ARC-AGI-2 **93.3%** (ARC Prize verified, best of five variants), ARC-AGI-1 **98.5%**, FrontierMath Tier 4 **95.0%** / Tiers 1-3 91.2%, ProofBench 100% #1 (Vals), HLE 67.7% w/tools (61.4% AA independent), AA Intelligence Index **58** (#1/217), AA-LCR 84.7%. Capped by CritPt 31.7%, **no official GPQA Diamond** (third-party 90.6% only), MLCR-AA 27.8% (vs original 66.7%), Omniscience hallucination 50.3%, vendor-independent gaps 3-6 pts.
- **Context window: 98/100.** (was 95) 1M native, **300K batch output** (largest in Claude lineup), **GraphWalks ≤128K 90.6%**, AA-LCR 84.7%, flat pricing across full window. Held at 98 (not 99-100) due to **no MRCR/RULER**, GraphWalks 256K-1M only 66.8% (behind Gemini 4 Argon 84.2%, GPT-6 Astra 71.8%).
- **Multimodal: 85/100.** (was 70) **Text, image, PDF input confirmed** (up to 600 images/PDF pages per request); MMMU-Pro 87.7% (AA), Chartography 89.0% w/tools, BenchCAD 0.962 w/tools, ExtractBench 86.06%, ParseBench 78.89%, OSWorld 2.1 81.8% partial, Design Arena 1326 Elo, Vals Multimodal Index #1 74.15%. Capped by no audio/video, text-only output. **Jumps from image-only (60-70) to image+PDF band (75-90)**.
- **Coding: 97/100.** (was 96) SWE-bench Pro **89.9%** field lead (vs Fable 5.1 81.2%), DeepSWE **74.2%** (clears 74%+ frontier), AA-SciCode **66.9%** (clears 55%+), Vibe Code Bench **90.29% #2**, IOI **95.06% #2**, SWE Multilingual **93.9%**, ProgramBench **91.2%** partial / **18.5% fully resolved #1** (Vals), Terminal-Bench 4.0 61.6% Vals #1, ProofBench 100%. Capped by **no verified SWE-bench Verified / LiveCodeBench**, FrontierCode 2.0 45.5%, FrontierSWE v2 62.3%, CursorBench 4.0 57.8%.
- **Cost efficiency: 62/100.** (was 65) $4/$20 per 1M with **5% cache reads ($0.20/M)** — 5.5-family improvement. Blended ~$2.94/M. Vals Index #1 at $32.77/test. AA: $5.98/task (cost-efficient) / GLM: $10.04 at max effort (verbose). Batch 50% off. Fast mode $8/$40. No free tier. Premium absolute pricing (5× Sonnet 5.5) caps score.
- **Overall Score: 94.4/100.** (was 90) Half-up mean of (96 + 96 + 98 + 85 + 97) / 5 = 472 / 5 = 94.4 → **94**. **Below average of 94.1 from 38 qualifying raters** (close). Best-fit: Anthropic's flagship for long-running agentic coding, computer-use agents, and professional knowledge work at lowest flagship price ($4/$20); unmatched SWE-bench Pro 89.9%, ARC-AGI-2 93.3%, FrontierMath Tier 4 95.0%, Vals Index #1; CritPt 31.7% and no GPQA/MRCR/SWE-Verified limit scientific routing.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 4 recent qualified raters: Step 5 Preview (2026-11-05), GLM 5.3 Flash (2026-11-01), Gemini 3.8 Flash (2026-11-06), plus my original (2026-10-19) + official Anthropic sources (Opus 5.5 model page, launch announcement, system card, pricing, ARC Prize verified results). Scores normalized 1–100 per model-comparison.md methodology. **Critical conflicts documented:** TB 4.0 vendor vs independent (66.4% vs 59.6%), SWE-bench Verified missing, MRCR missing, MLCR-AA 27.8% vs 66.7%, GPQA Diamond missing (third-party 90.6% only), ProgramBench partial vs fully resolved conflict (91.2% vs 18.5%).
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)
  - [Anthropic — Claude Opus 5.5 Model Overview](https://platform.claude.com/docs/en/models/opus-5-5/overview)
  - [Anthropic — Claude Opus 5.5 System Card](https://www.anthropic.com/claude-opus-5-5-system-card)
  - [Artificial Analysis — Claude Opus 5.5](https://artificialanalysis.ai/models/claude-opus-5-5)
  - [Vals AI — Independent Evaluation](https://www.vals.ai/home)
  - [ARC Prize — Verified Results](https://arcprize.org/results/anthropic-claude-opus-5-5)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [BenchLM — Claude Opus 5.5 (86.29/100, #2/1009)](https://benchlm.ai/models/claude-opus-5-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---