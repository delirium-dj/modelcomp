# Claude Sonnet 5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (Max reasoning tier) — **LEGACY / SUPERSEDED**
- **Short description:** Anthropic's June 2026 agentic Sonnet, **replaced by Sonnet 5.5 (Sep 2026) at the identical $2/$10 price**. Listed under "Legacy models (still available)" on Anthropic's models overview. Retirement scheduled 2027-06-30. Strong coding (SWE-bench Verified 85.2%), lowest hallucination rate in research series (39.4%), but weak on newest agentic harnesses (TB 4.0 10.6%, TB-Science 5.7%). BenchLM: 64.25/100, #36/1010.
- **Provider / access:** Anthropic Messages API (`claude-sonnet-5`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry, AWS. OpenCode Zen carries Sonnet 5.5, **not Sonnet 5** (legacy status). Messages API (not Chat Completions).
- **Release / knowledge:** 2026-06-30 release; **knowledge cutoff: January 2026** (5 months stale vs current Jun 2026 lineup).
- **IDs:** `claude-sonnet-5` (all platforms). No Free tier.
- **Context window:** 1,000,000 tokens total (1M); max output 128K synchronous, **300K on Message Batches API** with `output-300k-2026-03-24` beta header (in Anthropic's beta list, unlike Fable 5.1).
- **Modalities:** Text and image input; text output. Adaptive thinking always on; default effort `high`.
- **Pricing (as of 2026-11-08):** $2.00/M in, **$0.10/M cache read** (5% of base — improved from original $0.20/M), $10.00/M out. Batch 50% off ($1/$5). **Discounted $1/$5 route visible on one gateway** (~50% below list). Blended ~$1.54/M. Cost/task: TB4.0 $26.05/test (Vals), Vibe-1-100 $71.15/test (Vals).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed. Adaptive-thinking transformer.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 3 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05, Gemini 3.8 Flash 2026-10-20) + official Anthropic sources. **Legacy status confirmed: superseded by Sonnet 5.5 at same price.**

Agent / tool use:

- BrowseComp: **84.7%** (Anthropic System Card) — best browsing figure in batch
- OSWorld-Verified: **81.2%** (Anthropic System Card) / OSWorld 2.1: **57.0%** (Step 5 Preview)
- Terminal-Bench 2.1: **80.4%** (System Card) / **80.5%** (AA) / **74.5%** (Vals) — 6.0-point spread, all under 88%+ frontier reference
- Terminal-Bench 3.0: **14.6%** (FrontierBench) / **14.6%** (Step 5 Preview) — severe weakness
- **Terminal-Bench 4.0: 10.61% ±1.51** (Vals, #43-44/59 — **NEW, very weak**) / **12.4% ±3.1** (official tbench.ai board, max, Claude Code, #21 — both weak; **successor Sonnet 5.5 scores 70.6/64.1%**) — **major generational split**
- Terminal-Bench-Science: **5.71%** (Vals, **NEW, weak**) — Step 5 Preview
- SRE Bench: **0.38%** (Vals, **NEW, weak**) — Step 5 Preview
- GDPval-AA: **1,603 Elo** (System Card) / **48.3%** normalized (AA) / near Opus 4.8's 1600 — under 1,750+ frontier reference
- AA Agentic Index: **44.3%** (Artificial Analysis) / **44.3%** (Step 5 Preview)
- AA Tau3 Banking: **37.3%** (Step 5 Preview) — 12.7 pts under 50% frontier reference
- AA AnalystAgent: **46.3%** / AA EnterpriseOps-Gym: **44.7%** (Step 5 Preview)
- Vals Index at launch: **#3 (68.61%)** behind Fable 5 and Opus 4.8 (GLM 5.3 Flash)
- ApprenticeBench: **16%** / MazeBench: **0%** (ASCII mode, no tools) / **0%** (Step 5 Preview)
- Vibe Code Bench v1.1: **81.33% ±3.05, #28/123** (Vals, **NEW, strong**) — GLM 5.3 Flash
- ProofBench v1.1: **77.00% ±4.23, #16/52** (Vals, **NEW, strong**) — GLM 5.3 Flash
- TaxEval v2: **75.63% #15/145** / MortgageTax: **70.03% #4/98** / LegalBench: **83.92%** / Public Benefits: **66.03%** / Tax Agent: **29.37%** / SkillsBench: **46.48%** / IOI: **45.00%** (Vals, **NEW**) — GLM 5.3 Flash
- MCP-Atlas / Toolathlon / Claw-Eval / ALE: **no verified public score found** (Step 5 Preview / GLM 5.3 Flash)

Reasoning / knowledge:

- HLE: **57.4%** with tools (System Card) / **43.2%** no tools / **41.3%** AA-HLE (AA) / **41.3%** (Step 5 Preview) — clears 40%+ frontier reference on all three
- HLE-Verified: **31.0%** (Google DeepMind, Step 5 Preview)
- GPQA Diamond: **91.1%** (AA) / **88.89% ±2.22** (Vals) — **clears 90%+ reference on AA run only**
- AA Intelligence Index: **38.2** (rank #68/217) / **38.2** (Step 5 Preview) — well below 60+ frontier
- AA-LCR: **82.0%** (AA) / **82.0%** (Step 5 Preview / GLM 5.3 Flash)
- CritPt: **16.9%** (AA) / **16.9%** (Step 5 Preview / GLM 5.3 Flash) — **very weak, caps deep physics reasoning**
- FrontierMath v2: Tiers 1–3 **65.6%** / Tier 4 **29.3%** (Epoch AI) / **29.3%** (Step 5 Preview / GLM 5.3 Flash) — **Tier 4 very weak**
- LABBench2: **80.1%** (Google DeepMind, Step 5 Preview)
- MMLU-Pro: **87.5%** (Vals) / **87.5%** (Step 5 Preview / GLM 5.3 Flash)
- MMMU-Pro: **77.3%** (AA) / **83.01%** (Vals, **NEW**) — Step 5 Preview / GLM 5.3 Flash
- AA-Omniscience: index **16.5**, accuracy **40.1%**, hallucination **39.4%** (AA) / **39.4%** (Step 5 Preview / GLM 5.3 Flash) — **among lowest hallucination rates in research series**
- MRCR / ARC-AGI: **no verified public score found** (Step 5 Preview / GLM 5.3 Flash)
- LMArena: no verified score for this SKU

Coding:

- SWE-bench Verified: **85.2%** (System Card) / **79.60% ±1.80 #27/88** (Vals independent) — **5.6-point vendor-Vals gap**
- SWE-bench Pro: **63.2%** (System Card) / **63.2%** (Step 5 Preview / GLM 5.3 Flash)
- SWE Multilingual: **78.3%** / SWE Multimodal: **28.1%** (System Card)
- LiveCodeBench: **82.43%** (Vals) / **82.4%** (Step 5 Preview)
- Vibe Code Bench v1.1: **81.33% #28/123** (Vals, **NEW, strong**) — GLM 5.3 Flash
- AA Coding Index: **71.5%** (AA) / **71.5%** (Step 5 Preview) — clears 70%+ frontier reference
- AA-SciCode: **54.3%** (AA) / **54.3%** (Step 5 Preview) — **0.7 pts under 55% reference**
- VulcanBench CII v1: **89.2%** (VulcanBench) / **89.2%** (Step 5 Preview)
- CursorBench 3.2: **61.5%** / **CursorBench 4.0: 34.1%** (Cursor evals) / **34.1%** (Step 5 Preview / GLM 5.3 Flash) — **weak on 4.0**
- FrontierCode 1.1 Main: **42.7%** (Cognition) / **42.7%** (Step 5 Preview)
- DeepSWE: **no verified public score found** (Step 5 Preview / GLM 5.3 Flash)
- Terminal-Bench 4.0 weakness (10.6-12.4% vs successor's 70.6%) is **new coding debit** — GLM 5.3 Flash

Multimodal:

- CharXiv: **88.3%** with tools / **77%** without (System Card) / **88.3% / 77%** (Step 5 Preview / GLM 5.3 Flash)
- AA MMMU-Pro: **77.3%** (AA) / **83.01%** (Vals, **NEW**) — Step 5 Preview / GLM 5.3 Flash
- ParseBench: **61.16%** (Step 5 Preview)
- Design Arena Website: **1,274 Elo** (OpenRouter) / **1,281** (Step 5 Preview) / **1,273** (GLM 5.3 Flash)

Long context:

- AA-LCR: **82.0%** (AA) / **82.0%** (Step 5 Preview / GLM 5.3 Flash)
- **MRCR / RULER: no verified public score found** (Step 5 Preview / GLM 5.3 Flash)
- **300K Batch extended output available** (in Anthropic's beta list, unlike Fable 5.1) — Step 5 Preview

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Scores updated based on 3 recent qualified raters + official sources. **Legacy status confirmed.** Key changes: Tool use ↓ (TB 4.0 10.6% Vals, TB-Science 5.7%, SRE 0.38% — severe TB4.0-era weakness), Reasoning ↓ (AA Index 38.2, CritPt 16.9%, FrontierMath Tier 4 29.3%), Coding ↓ (TB 4.0 10.6% vs Sonnet 5.5 70.6%, CursorBench 4.0 34.1%), Multimodal ↑ (MMMU-Pro 83.01% Vals, CharXiv 88.3%), Context ↑ (300K Batch output available). Conflicts: SWE-bench Verified vendor 85.2% vs Vals 79.6% (5.6-pt gap), GPQA Diamond 91.1% AA vs 88.9% Vals (clears 90% only on AA), MMMU-Pro 77.3% AA vs 83.01% Vals, Hallucination 39.4% (best in series).

- **Tool use: 78/100.** (was 75) BrowseComp 84.7%, OSWorld-Verified 81.2%, TB 2.1 80.4-80.5% (under 88% frontier), GDPval 1603 Elo (under 1750 frontier), AA Tau3 Banking 37.3% (under 50% frontier). **Capped by TB 4.0 10.61% Vals / 12.4% official (vs Sonnet 5.5 70.6%), TB-Science 5.71%, SRE 0.38%, TB 3.0 14.6%, MazeBench 0%, no MCP-Atlas/Toolathlon/Claw-Eval.**
- **Reasoning: 82/100.** (was 72) GPQA Diamond 91.1% (AA, clears 90%+), HLE 57.4% w/tools / 43.2% w/o (clears 40%+), MMLU-Pro 87.5%, AA-LCR 82.0%, **best hallucination rate in series (39.4%)**, ProofBench 77.0% #16/52 (Vals). **Capped by AA Intelligence Index 38.2 (well below 60+ frontier), CritPt 16.9% (very weak), FrontierMath Tier 4 29.3%, HLE-Verified 31.0%, no MRCR/ARC-AGI.**
- **Context window: 98/100.** (was 90) 1M native, **300K Batch output available** (in beta list, unlike Fable 5.1), AA-LCR 82.0%. Held at 98 (not 100) due to **no MRCR retrieval run**.
- **Multimodal: 82/100.** (was 70) **Text + image in; MMMU-Pro 83.01% (Vals, NEW) / 77.3% (AA), CharXiv 88.3%, Design Arena 1274-1281 Elo, ParseBench 61.16%.** Scored above +image-only 60-70 band due to explicit document-tier measurement (CharXiv). Capped by no video/audio, text-only output, ParseBench only 61.16%.
- **Coding: 82/100.** (was 80) SWE-bench Verified 85.2% (vendor) / 79.6% Vals (5.6-pt gap), AA Coding Index 71.5% (clears 70%+), LiveCodeBench 82.4% (Vals), Vibe Code Bench 81.33% #28/123 (Vals), VulcanBench CII 89.2%, SWE Multilingual 78.3%. **Capped by TB 4.0 10.6-12.4% (vs Sonnet 5.5 70.6%), CursorBench 4.0 34.1%, FrontierCode 1.1 42.7%, SWE Multimodal 28.1%, AA-SciCode 54.3% (0.7 under 55% ref), no DeepSWE.**
- **Cost efficiency: 84/100.** (was 70) $2/$10 with **$0.10/M cache read (5% — improved)**, 300K Batch output, no long-context surcharge. **Held at 84 (not 88) because Sonnet 5.5 sits on identical rate card and scores 17.6 BenchLM points higher** — strictly inferior buy at equal price. Discounted $1/$5 route visible (~50% off). No free tier. Measured agentic runs expensive (TB4.0 $26/test, Vibe $71/test).
- **Overall Score: 84/100.** (was 77) Half-up mean of (78 + 82 + 98 + 82 + 82) / 5 = 422 / 5 = 84.4 → **84**. **Below average of 88.8 from 31 qualifying raters.** Best-fit: Competent legacy workhorse with **series-best reliability (39.4% hallucination)**, full 1M window with 300K Batch output at $2/$10. **Dominated by own successor: Sonnet 5.5 scores 17.6 BenchLM points higher at same price, clears AA-GPQA/AA-SciCode/TB4.0 comfortably. Migrate unless pinned to `claude-sonnet-5`.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 3 recent qualified raters: Step 5 Preview (2026-11-05), GLM 5.3 Flash (2026-11-05), Gemini 3.8 Flash (2026-10-20) + official Anthropic sources (Sonnet 5 system card, models overview page for legacy status and Batch eligibility). Scores normalized 1–100 per model-comparison.md methodology. **Critical findings:** Legacy/superseded by Sonnet 5.5 at identical $2/$10 price; TB 4.0 generation weakness (10.61% Vals vs Sonnet 5.5 70.6%); Hallucination rate 39.4% (series best); 300K Batch output available; Jan 2026 knowledge cutoff (stale).
- Reference URLs:
  - [Anthropic — Claude Sonnet 5 System Card](https://www.anthropic.com/claude-sonnet-5-system-card)
  - [Anthropic — Models Overview (legacy status, 300K Batch, modality)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [BenchLM — Claude Sonnet 5 (64.25/100, #36/1010)](https://benchlm.ai/models/claude-sonnet-5)
  - [Artificial Analysis — Claude Sonnet 5](https://artificialanalysis.ai/models/claude-sonnet-5)
  - [Vals AI — Claude Sonnet 5](https://www.vals.ai/models/anthropic_claude-sonnet-5)
  - [VulcanBench CII v1](https://github.com/morganlinton/VulcanBench/blob/main/docs/results/cii-v1-2026-08/README.md)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---