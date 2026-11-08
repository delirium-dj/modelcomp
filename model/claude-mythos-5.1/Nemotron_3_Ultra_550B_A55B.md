# Claude Mythos 5.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (restricted access) — **SAME WEIGHTS AS FABLE 5.1**
- **Short description:** Anthropic's gated twin of Fable 5.1 — identical Mythos-class flagship weights with cybersecurity and life-sciences safeguards lifted, reserved for vetted defensive-security and life-sciences organizations (powers Anthropic's Claude Security product). **Not a separate model — same weights, different safeguards.** BenchLM: 68.82/100 (shared with Fable 5.1).
- **Provider / access:** Anthropic API (`claude-mythos-5-1`), Amazon Bedrock, Google Cloud, Microsoft Foundry. **Verification-gated** — Cyber Verification Program (opened 2026-10-06) + Life Sciences Verification Program (US gov). **No OpenCode Zen route.** US organizations only at launch.
- **Release / knowledge:** 2026-09-01 release; **knowledge cutoff: June 2026** (shared with Fable 5.1). Retirement no sooner than 2027-09-01.
- **IDs:** `anthropic/claude-mythos-5-1` (Bedrock: `anthropic.claude-mythos-5-1`). **No Free tier anywhere.**
- **Context window:** 1,048,576 tokens total; 128K max output. **Not listed for 300K Batch extended-output beta** (unlike Opus 5.5, Fable 5.1).
- **Modalities:** Text, images (incl. dense charts/PDFs with crop-and-zoom) in; text output. Adaptive thinking always on; effort low/medium/high/xhigh/max. Tool calls: yes. No audio/video.
- **Pricing (as of 2026-11-08):** $10.00/M in, **$0.25/M cache read** (2.5% of base — cheapest in lineup), $50.00/M out. Batch 50% off. 30-day data retention mandatory. No free tier.
- **Architecture:** Proprietary; **same weights as Fable 5.1** ("same model, different safeguards" — joint system card). Mythos-class = tier above Opus.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-02) + official Anthropic sources. **Average of 35 qualifying raters: 92.6 Overall** (Tool 93.8, Reasoning 94.5, Context 97.1, Multimodal 82.8, Coding 94.7). Queue: 92.6. Step 5 Preview: 88 (shared weights). GLM 5.3 Flash: 89. My original: 88. **SAME WEIGHTS AS FABLE 5.1 — SCORES REFLECT SHARED CAPABILITY.**

Agent / tool use:

- Terminal-Bench 2.1: **91.4%** (AA) / **85.0%** (Vals) — 6.4pt spread (shared weights)
- Terminal-Bench 4.0: **60.9%** (Mythos config, 10 trials, 660 trials — **Mythos exceeds Fable's 55.8%**) / **52.0%** (AA) — gaps attributed to safeguard interventions on Fable (Step 5 / GLM)
- Terminal-Bench-Science 0.1: **52.6%** (shared) / Fable 24.7% (GLM / Step 5)
- GDPval-AA v2: **1,853 Elo** at max effort (Anthropic table + AA; +130 over Fable's 1,723) / **1,764 Elo** (Step 5) / effort ladder: 1,587 low → 1,670 medium → 1,743 high → 1,835 xhigh → 1,853 max (GLM / Step 5)
- AA-Briefcase: **1,694 Elo** (system card; vs Fable 1,572) (GLM)
- OSWorld 2.0: **77.9% partial / 41.7% strict** (Mythos config; vs Fable 72.9/36.1) (GLM / Step 5)
- OSWorld 2.1: **80.7%** (Step 5)
- AutomationBench: **31.4%** (Mythos config) vs **AA AutomationBench 59.4%** — vendor < half AA measurement (Step 5 / GLM)
- AA Agentic Index: **58.0%** (Step 5)
- AA Tau3 Banking: **47.2%** (Step 5)
- Toolathlon Verified: **77.8%** (Step 5)
- AA Cyber Index: **25.0%** / CyberGym-E2E-AA: **0.8%** / CWE-bench v1: **58.0%** (Step 5)
- GDPval-AA v2: **1,764 Elo** / 62.7% normalized (Step 5)
- AA Harvey LAB v1.0: **93.0%** (Step 5)
- AA Briefcase: **1,669 Elo** (Step 5)
- AA Tau3 Banking: **47.2%** (Step 5)
- Toolathlon Verified: **77.8%** (Step 5)
- AA Cyber Index: **25.0%** / CyberGym-E2E-AA: **0.8%** / CWE-bench v1: **58.0%** (Step 5)
- GDP.pdf: **26.2%** / MazeBench: **10%** (Step 5)
- **Claw-Eval / τ³-Banking / Tau2-Bench / MCP-Atlas: no verified public score found** (Step 5 / GLM)
- τ³-Banking: **+9 pts over Fable** (AA, absolute value not published) (GLM)
- CursorBench 3.2.0: **73.4%** (GLM)

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (AA) / **93.4%** (Vals) / **93.7%** (GLM) — shared weights
- HLE: **65.0%** with tools / **60.9%** no tools (System Card) / **59.1%** AA-HLE (AA) / **65.0%** (Step 5) — shared weights
- ARC-AGI-1: **97.5%** (ARC Prize semi-private) / **97.5%** (Step 5 / GLM)
- ARC-AGI-2: **90.0%** (ARC Prize semi-private) / **90.0%** (Step 5 / GLM)
- FrontierMath v2: Tier 4 **87.8%** / Tiers 1-3 **90.2%** (Epoch AI) / **87.8% / 90.2%** (Step 5 / GLM)
- MMLU-Pro (Vals): **92.4%** (Step 5 / GLM)
- AA-LCR: **85.3%** (AA) / **85.3%** (Step 5 / GLM)
- CritPt: **29.7%** (GLM / Step 5)
- MLCR-AA: **71.1%** (AA) / **15.6%** (Step 5) — **large discrepancy**
- GraphWalks BFS 256K–1M: **65.0%** (Google) / **65.0%** (Step 5 / GLM) — behind GPT-6 Astra (71.8%), Gemini 4 Argon (84.2%)
- AA Intelligence Index: **49.0** (Step 5) / launch **66** (AA v4.1.1, #1) → v4.3 **53** (tied #1) → v5 **50** (tied #1 with GPT-6 Astra) (GLM)
- AA-Omniscience: index **46.3**, accuracy **68.4%**, hallucination **70.0%** (Step 5)
- **MRCR: no verified public score found for 5.1 generation** (Step 5 / GLM)
- ArXivMath: **91.33% no tools / 93.88% with tools** (GLM)
- Vals AI Index: **68.83%** (GLM)

Coding:

- SWE-bench Pro: **81.2%** (system card, #1 at release) / **81.2%** (Step 5 / GLM) — #3 on BenchLM Oct 29 (behind Opus 5.5 89.9%, Sonnet 5.5 81.3%)
- SWE-bench Verified: **no verified public score found for 5.1 generation** (Vals archived board 2026-09-01) (Step 5 / GLM)
- SWE-bench Multilingual: **89.1%** (system card) / **89.1%** (Step 5 / GLM)
- SWE-bench Multimodal: **54.7%** (system card; below Opus 5's 59.4%) (GLM / Step 5)
- LiveCodeBench: **no verified public score found for 5.1** (GLM) / **90.5%** (Vals) (Step 5)
- AA Coding Index: **81.6%** (AA) / **81.6%** (Step 5) — clears 70%+ ref
- AA-SciCode: **63.1%** (AA) / **63.1%** (Step 5) / **62.0-63.1%** (GLM) — clears 55%+ ref
- DeepSWE: **67.4%** (System Card) / **67.4%** (Step 5 / GLM)
- FrontierSWE v2: **56.3%** (Proximal) / **56.3%** (Step 5 / GLM)
- FrontierCode 2.0: **32.4%** (AA/benchgap) / **32.4%** (Step 5 / GLM)
- ProgramBench: **87.6%** (System Card) / **87.6%** (Step 5)
- CursorBench 3.2: **73.4%** / **4.0: 51.8%** (Cursor) / **73.4% / 51.8%** (Step 5 / GLM)
- PostTrainBench v1.1: **40.2%** (Google) / **40.2%** (Step 5 / GLM)
- SWE Multimodal: **54.7%** (System Card) / **54.7%** (Step 5 / GLM)
- Terminal-Bench 2.1: **91.4%** (AA) / **85.0%** (Vals) (shared weights)

Multimodal:

- Text, images (incl. dense charts/PDFs with crop-and-zoom) in; text out
- SWE-bench Multimodal: **54.7%** (below Opus 5's 59.4%) (GLM / Step 5)
- ParseBench: **78.12%** (Step 5)
- Design Arena: **1,312 Elo** (OpenRouter) / **1,312 Elo** (Step 5)
- **No MMMU-Pro, Chartography, ZeroBench figure** — thinnest multimodal evidence in Claude lineup (Step 5)

Long context:

- AA-LCR: **85.3%** (AA) / **85.3%** (Step 5 / GLM) — top of AA long-context list
- MLCR-AA: **71.1%** (AA) / **15.6%** (Step 5) — **large discrepancy**
- GraphWalks BFS 256K–1M: **65.0%** (Google) / **65.0%** (Step 5 / GLM) — behind GPT-6 Astra (71.8%), Gemini 4 Argon (84.2%)
- **MRCR: no verified public score found for 5.1 generation** (Step 5 / GLM) — Anthropic published no MRCR rows
- 1M window at standard rate (no surcharge); 128K output; **no 300K Batch beta** on this SKU (unlike Fable 5.1)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 35 qualifying raters = **92.6 Overall** (Tool 93.8, Reasoning 94.5, Context 97.1, Multimodal 82.8, Coding 94.7). Queue: 92.6. Step 5 Preview: 88 (shared weights). GLM 5.3 Flash: 89. My original: 88. **SAME WEIGHTS AS FABLE 5.1 — SCORES REFLECT SHARED CAPABILITY. Mythos advantage only where Fable safeguards intervene (cyber/bio tasks).**

- **Tool use: 94/100.** (was 88) TB 2.1 **91.4% AA**, GDPval-AA **1,853 Elo #2** (behind Opus 5.5 1,866), TB-Science **52.6%**, TB 4.0 **60.9% Mythos** (exceeds Fable 55.8%), OSWorld 2.0 **77.9%**, GDPval **1,764 Elo**, AA Agentic Index **58.0%**, Toolathlon **77.8%**, AA Harvey LAB **93.0%**. **Capped by:** MazeBench **10%**, GDP.pdf **26.2%**, CyberGym-E2E-AA **0.8%**, no Claw-Eval, no TB 4.0 SOTA on AA (52.0%).
- **Reasoning: 94/100.** (was 92) GPQA Diamond **93.7%**, HLE **65.0%** w/tools, ARC-AGI-1 **97.5%**, ARC-AGI-2 **90.0%**, FrontierMath Tier 4 **87.8%**, AA-LCR **85.3%**, AA Intelligence Index **49.0** (v5.0), CritPt **29.7%**, MLCR-AA **71.1% / 15.6%** (discrepancy). **Capped by:** AA Intelligence Index **49.0** (below 60+), CritPt **29.7%**, MLCR discrepancy, Omniscience hallucination **70%**.
- **Context window: 97/100.** (was 95) 1M native; AA-LCR **85.3%** (top of AA), MLCR **71.1%**. **Held at 97 (not 99) due to no MRCR, GraphWalks 256K-1M 65.0% (behind competitors), no 300K Batch beta on this SKU.**
- **Multimodal: 83/100.** (was 70) Text, image, PDF input (crop-and-zoom vision); ParseBench **78.12%**, Design Arena **1,312 Elo**, SWE Multimodal **54.7%**. **No MMMU-Pro/Chartography/ZeroBench** — thinnest multimodal evidence in Claude lineup (Step 5). **Scored above +image-only band (60-70) due to PDF/chart depth.** Capped by no video/audio.
- **Coding: 95/100.** (was 96) SWE-bench Pro **81.2%** (#3), LiveCodeBench **90.5%** (Vals), AA Coding Index **81.6%** (clears 70%+), AA-SciCode **63.1%** (clears 55%+), SWE Multilingual **89.1%**, ProgramBench **87.6%**. **Capped by:** DeepSWE **67.4%** (below 74% ref), FrontierCode 2.0 **32.4%**, no SWE-bench Verified for 5.1.
- **Cost efficiency: 30/100.** (was 25) $10/$50, **$0.25/M cache read** (2.5% — cheapest in lineup). Blended ~$7.17/M. NeuralTrust: **$7.63/task** (worst of frontier). No free tier, verification-gated access.
- **Overall Score: 93/100.** (was 88) Half-up mean of (94 + 94 + 97 + 83 + 95) / 5 = 463 / 5 = 92.6 → **93**. **Matches average of 35 qualifying raters (92.6).** Best-fit: **Unrestricted Fable 5.1 for vetted cyber/bio teams** — same weights, higher ceiling on dual-use tasks (OSWorld 77.9%, TB 4.0 60.9%, GDPval 1,853 Elo); verification-gated access prevents broad deployment.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 88), GLM 5.3 Flash (2026-11-02, Overall 89) + official Anthropic sources (Mythos 5.1 model page, joint Fable/Mythos 5.1 system card, launch announcement). **Average of 35 qualifying raters: 92.6 Overall.** **SAME WEIGHTS AS FABLE 5.1 — scores reflect shared capability; Mythos advantage only where Fable safeguards intervene (cyber/bio tasks).**
- Reference URLs:
  - [Anthropic — Claude Mythos 5.1 Model Documentation](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
  - [Anthropic — Claude Fable 5.1 and Mythos 5.1 Launch](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Anthropic — Fable 5.1 and Mythos 5.1 System Card](https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card)
  - [Artificial Analysis — Claude Mythos 5.1](https://artificialanalysis.ai/models/claude-mythos-5-1)
  - [Vals AI — Terminal-Bench & LiveCodeBench](https://www.vals.ai)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [ARC Prize — Verified Results](https://arcprize.org/results/anthropic-claude-mythos-5-1)
  - [BenchLM — Claude Mythos 5.1](https://benchlm.ai/models/claude-mythos-5-1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---