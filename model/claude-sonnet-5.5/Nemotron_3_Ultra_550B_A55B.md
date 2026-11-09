# Claude Sonnet 5.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5 (Max effort tier with fallback)
- **Short description:** Anthropic's high-throughput Sonnet 5.5 family model delivering near-Opus 5.5 performance on coding and knowledge work at $2/$10 pricing, with 30%+ speed improvement over Sonnet 5, cyber safeguards, and **the best value-per-quality in the Claude lineup** (BenchLM 81.84, #6/1009, 4.45 pts behind Opus 5.5 at 1/5th price).
- **Provider / access:** Anthropic API (`claude-sonnet-5-5`), OpenCode Zen (`opencode/claude-sonnet-5-5`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Azure. Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-09-28 release; **knowledge cutoff: June 2026** (reliable); cache-read price cut 50% on Oct 7, 2026 (from $0.20 to $0.10).
- **IDs:** `anthropic/claude-sonnet-5-5` (Anthropic API), `opencode/claude-sonnet-5-5` (OpenCode Zen). No Free tier.
- **Context window:** 1,000,000 tokens total (1M); max output 128K synchronous, **300K on Message Batches API** with `output-300k-2026-03-24` beta header. **1M window at standard pricing, no long-context surcharge** (unlike GPT-6 Astra).
- **Modalities:** Text, image in; text out. Adaptive thinking always on (cannot be disabled); default effort `high`. Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-11-08):** $2.00/M in, **$0.10/M cache read** (50% cut from $0.20 on Oct 7), $2.50/M cache write (5m), $4/M (1h), $10.00/M out. Blended 7:2:1 ≈ $1.47/M (AA). Batch $1/$5 (50% off). Cost/task: $5.46 (AA). **Best quality-per-dollar in Claude lineup.**
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-02) + official Anthropic sources. **Average of 32 qualifying raters: 92.5 Overall** (Tool 93.6, Reasoning 93.7, Context 96.8, Multimodal 84.2, Coding 94.3). Queue: 92.5. Step 5 Preview: 88. GLM 5.3 Flash: 90. My original: 85.

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic blog) / **63.6%** (AA) — **highest TB 4.0 in research series** (Step 5 / GLM)
- GDPval-AA v2.1: **1,844 Elo** (Anthropic blog) / **66.9%** normalized (AA) / **1,844 Elo** (Step 5) — clears 1,750+ frontier reference
- AA Briefcase Elo: **1,811** (System Card) / **1,811** (Step 5)
- AA Harvey LAB v1.0: **93.1%** (AA) / **93.1%** (Step 5)
- DRACO: **87.0%** (System Card) / **87.0%** (Step 5)
- OSWorld 2.1: **80.1%** partial (Anthropic blog) / **80.1%** (Step 5) / **83.9%** Offline (Step 5)
- Toolathlon Verified: **77.8%** (System Card) / **77.8%** (Step 5) — Pass@3 85.2%, Pass³ 68.5%, mean 31.6 turns
- AA AutomationBench: **71.8%** (AA) / **71.8%** (Step 5)
- AA Agentic Index: **56.0%** (AA) / **56.0%** (Step 5)
- AA AnalystAgent: **57.5%** (AA) / **57.5%** (Step 5)
- LAB criterion-pass (Harvey held-out): **93.1%** (System Card) / **93.1%** (Step 5) — all-pass only 10.0%
- Hermes Index: **53.1%** / Hermes Bench: **73.5%** (Nous Research)
- AutomationBench (Zapier 1.0.6): **44.7%** (System Card) / **44.7%** (Step 5)
- AA Terminal-Bench 4.0: **63.6%** (AA) / **63.6%** (Step 5)
- GDP.pdf: **25.8%** (AA) / **25.8%** (Step 5)
- MazeBench: **8%** (ASCII mode, tools) / **8%** (Step 5)
- **τ³-Banking / Terminal-Bench 2.1 / Claw-Eval: no verified public score found** (Step 5 / GLM)
- AA AutomationBench: **44.7%** (System Card) / **44.7%** (GLM)
- OSWorld 2.1 Offline: **83.9%** (Step 5)
- Terminal-Bench-Science 0.1: **59.9%** (System Card) / **59.9%** (Step 5)

Reasoning / knowledge:

- HLE with tools: **64.5%** (Anthropic blog) / **64.5%** (Step 5) / **56.9%** no tools (GLM) — **56.9% / 64.5%** (Step 5 / GLM)
- AA Intelligence Index: **56** (rank #2/217) (AA) / **54.2** (Step 5) — **#2 of 217** (GLM) / **54.2 #8/58** (GLM)
- AA HLE: **55.0%** (AA) / **55.0%** (Step 5)
- AA LCR: **82.7%** (AA) / **82.7%** (Step 5) / **82.7%** (GLM)
- CritPt: **31.4%** (AA) / **31.4%** (Step 5) / **31.4%** (GLM)
- MLCR-AA: **75.0%** (AA) / **75.0%** (Step 5) — **by far best long-context medical reasoning in batch** (GLM: Opus 5.5 27.8%, Fable 5.1 15.6%)
- AA Omniscience Index: **32.3%** (AA) / **32.3%** (Step 5)
- AA Omniscience Accuracy: **54.0%** (AA) / **51.5%** (Step 5) — **best Anthropic hallucination figure** (Step 5: hallucination 43.3%, best in Anthropic lineup)
- AA Omniscience Hallucination Rate: **47.0%** (AA) / **43.3%** (Step 5)
- FrontierMath v2 Tiers 1-3: **88.772%** (Epoch AI) / **88.8%** (Step 5 / GLM)
- FrontierMath v2 Tier 4: **80.488%** (Epoch AI) / **80.5%** (Step 5 / GLM)
- ArXivMath Aug 2026: **86.8%** no tools / **95.2%** with tools (System Card) / **86.8% / 95.2%** (Step 5)
- HealthBench: raw **69.4%** / length-adj **65.4%** / Professional raw **77.1%** / Professional **69.2%** (System Card) / **Professional raw 77.1%** (Step 5)
- BioMysteryBench solvable: **89.2%** / difficult **44.7%** (System Card) / **89.2% / 44.7%** (Step 5)
- SpatialBench Verified: **72.5%** (System Card) / **72.5%** (Step 5)
- GMMLU: **92.1%** / MILU: **91.6%** (System Card) / **92.1% / 91.6%** (Step 5)
- Chartography: **61.6%** no tools / **90.2%** with tools (Anthropic blog) / **61.6% / 90.2%** (Step 5)
- **GPQA Diamond / ARC-AGI / MRCR: no verified public score found** (Step 5 / GLM)

Coding:

- SWE-bench Pro: **81.3%** (System Card) / **81.3%** (Step 5 / GLM)
- SWE Multilingual: **90.3%** (System Card) / **90.3%** (Step 5 / GLM)
- SWE Multimodal: **54.3%** (System Card) / **54.3%** (Step 5 / GLM)
- DeepSWE: **71.0%** (System Card) / **71.0%** (Step 5) / **71.0%** (GLM) — 3 pts under 74%+ frontier
- FrontierCode v1.1 Main: **46.2%** (System Card) / **46.2%** (Step 5) / **46.2% Max / 52.1% Xhigh** (GLM)
- FrontierCode v1.1 Extended: **59.1%** (System Card) / **59.1%** (Step 5) / **59.1%** (GLM)
- FrontierSWE v2: **61.9%** (System Card) / **61.9%** (Step 5) / **61.9%** (GLM)
- ProgramBench: **79.7%** (System Card) / **79.7%** (Step 5)
- CursorBench 4.0: **55.5%** (Cursor evals) / **55.5%** (Step 5) / **55.5%** (GLM)
- AA-SciCode: **61.0%** (AA) / **61.0%** (Step 5) — clears 55%+ ref
- Bug Hunt Bench: **51.3 fixes** (public data) / **51.3 fixes** (Step 5)
- AA Coding Index: not directly reported (AA) / **no AA Coding Index figure recorded** (Step 5)
- **SWE-bench Verified: no verified public score found** (Step 5 / GLM)
- **LiveCodeBench: no verified public score found** (Step 5 / GLM)
- FrontierCode 2.0: **41.0%** (Step 5) / **41.0%** (GLM)
- FrontierCode 1.1 Extended: **59.1%** (System Card) / **59.1%** (Step 5 / GLM)
- ProgramBench: **79.7%** (System Card) / **79.7%** (Step 5) / **79.7%** (GLM)
- SWE-bench Verified: **no verified public score found** (Step 5 / GLM)

Multimodal:

- ExtractBench: **94.68%** (the highest document-extraction figure in batch) (Step 5)
- Chartography: **61.6%** no tools / **90.2%** with tools (System Card) / **61.6% / 90.2%** (Step 5)
- BenchCAD Vision2Code: **0.747** no tools / **0.963** with tools (System Card) / **0.747 / 0.963** (Step 5)
- Biomedical image analysis: **72.2%** (System Card) / **72.2%** (Step 5)
- OfficeQA: **76.9%** / Pro: **65.6%** (System Card) / **76.9% / 65.6%** (Step 5)
- Design Arena Website: **1324** (OpenRouter) / **1,323 Elo** (Step 5)
- SWE Multimodal: **54.3%** (System Card) / **54.3%** (Step 5)
- ExtractBench Pro: **32%** (Step 5)
- ParseBench: **69.26%** (Step 5)
- **MMMU-Pro: no verified public score found** (Step 5 / GLM)

Life sciences / professional:

- HealthBench Professional raw **77.1%**, BioMysteryBench **89.2%** (human-solvable), de novo protein-binder design **82.3%**, Medicinal chemistry **65.3%**, Protocols **67.3%/66.6%**, SingleCellBench **59.1%** (Step 5)

Long context:

- AA LCR: **82.7%** (AA) / **82.7%** (Step 5 / GLM)
- MLCR-AA: **75.0%** (AA) / **75.0%** (Step 5) — **by far best long-context medical reasoning in batch** (GLM: Opus 5.5 27.8%, Fable 5.1 15.6%)
- **MRCR: no verified public score found** (Step 5 / GLM) — 1M window at standard pricing, no surcharge

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 32 qualifying raters = **92.5 Overall** (Tool 93.6, Reasoning 93.7, Context 96.8, Multimodal 84.2, Coding 94.3). Queue: 92.5. Step 5 Preview: 88. GLM 5.3 Flash: 90. My original: 85.

- **Tool use: 93/100.** (was 85) TB 4.0 **70.6%** (highest in research series), GDPval-AA **1,844 Elo** (clears 1,750+ frontier), AA Harvey LAB **93.1%**, AA Briefcase **1,811 Elo**, Toolathlon Verified **77.8%**, OSWorld 2.1 **80.1%** / Offline **83.9%**, AA AutomationBench **71.8%**, AA Agentic Index **56.0%**, DRACO **87.0%**. **Capped by:** no τ³-Banking / TB 2.1 / Claw-Eval, MazeBench **8%**, GDP.pdf **25.8%**, LAB all-pass **10.0%** (vs criterion-pass 93.1%).
- **Reasoning: 92/100.** (was 87) HLE **64.5%** w/tools (near Opus 5.5 67.7%), AA Intelligence Index **56** (#2/217) / **54.2 #8/58** (Step 5), MLCR-AA **75.0%** (by far best in batch), FrontierMath Tier 4 **80.5%** / Tiers 1-3 **88.8%**, AA LCR **82.7%**, ArXivMath **95.2%** w/tools, Hallucination **43.3%** (best in Anthropic lineup). **Capped by:** no GPQA Diamond / ARC-AGI / MRCR, CritPt **31.4%**, AA Omniscience Index **32.3%**.
- **Context window: 97/100.** (was 95) 1M native, **300K Batch output**, **1M at standard pricing (no long-context surcharge)** — decisive advantage vs GPT-6 Astra (2x/1.5x >272K). AA LCR **82.7%**, MLCR **75.0%** (by far best). Held at 97 (not 100) due to **no MRCR retrieval run**.
- **Multimodal: 70/100.** (was 70) Text + image in; ExtractBench **94.68%** (highest doc extraction in batch), Chartography **90.2%** w/tools, BenchCAD **0.963** w/tools, Design Arena **1,323 Elo**. **Capped by:** no video/audio/PDF input, **no MMMU-Pro figure**, text-only output. Methodology: +image in = 60-70.
- **Coding: 90/100.** (was 90) SWE-bench Pro **81.3%**, DeepSWE **71.0%** (3 pts under 74%+ ref), FrontierSWE v2 **61.9%**, AA-SciCode **61.0%** (clears 55%+ ref), ProgramBench **79.7%**, FrontierCode Ext **59.1%**. **Capped by:** no SWE-bench Verified / LiveCodeBench / AA Coding Index, DeepSWE **71.0%** (3 pts under 74% ref), FrontierCode 2.0 **41.0%**, CursorBench 4.0 **55.5%**.
- **Cost efficiency: 86/100.** (was 70) $2/$10 with **$0.10/M cache read** (50% cut Oct 7), **1M context unpriced** (no >200K surcharge), Batch $1/$5. **Best quality-per-dollar in Claude lineup**; 3 of 111 other ranked models cost same/less and score higher. AA cost/task $5.46. Muse Spark 1.3 cheaper at $1.60/task.
- **Overall Score: 88/100.** (was 85) Half-up mean of (93 + 92 + 97 + 70 + 90) / 5 = 442 / 5 = 88.4 → **88**. **Below average of 32 qualifying raters (92.5).** Best-fit: **Default pick for most work** — 4.45 BenchLM pts behind Opus 5.5 at 1/5th price, higher TB 4.0 (70.6% vs 66.4%), better MLCR-AA, lower hallucination. Reach for Opus 5.5/Fable 5.1 only when extra effort headroom, 300K Batch output, or ARC-AGI-2/GPQA-grade reasoning genuinely required.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 88), GLM 5.3 Flash (2026-11-02, Overall 90) + official Anthropic sources (Sonnet 5.5 System Card, model overview, launch post, pricing). **Average of 32 qualifying raters: 92.5 Overall.** Queue: 92.5. **Critical findings:** Best value-per-quality in Claude lineup; TB 4.0 70.6% (highest in series); GDPval 1,844 Elo; MLCR-AA 75% (by far best); 1M context unpriced; cache read $0.10; no GPQA/ARC-AGI/MRCR/SWE-bench Verified; hallucination 43.3% (best Anthropic).
- Reference URLs:
  - [Anthropic — Claude Sonnet 5.5 Model Documentation](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)
  - [Anthropic — Sonnet 5.5 System Card](https://www.anthropic.com/claude-sonnet-5-5-system-card)
  - [Anthropic — Sonnet 5.5 Launch Post](https://www.anthropic.com/news/claude-sonnet-5-5)
  - [Artificial Analysis — Claude Sonnet 5.5](https://artificialanalysis.ai/models/claude-sonnet-5-5)
  - [BenchLM — Sonnet 5.5 (81.84/100, #6/1009, 77 rows)](https://benchlm.ai/models/claude-sonnet-5-5)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---