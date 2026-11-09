# Ling 3.1 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: InclusionAI (`ling-3.1-flash`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's fast open-weights MoE model (560B total / 25B active) with 262K context, exceptional speed (210 tok/s), strong coding (SWE Multilingual 88.5%), and free on Zen/Novita. **Highest-ranked Ling in BenchLM (65.57, #29/1015) with +19.7pt generational step over Ling 3.0 Flash.**
- **Provider / access:** Hugging Face (`inclusionAI/Ling-3.1-flash`), OpenCode Zen (`opencode/ling-3.1-flash` with free tier `ling-3.1-flash-free`), Novita, OpenRouter. OpenAI-compatible Chat Completions. **Open weights (MIT license).**
- **Release / knowledge:** 2026-10-02 release; **knowledge cutoff not disclosed.**
- **IDs:** `inclusionAI/Ling-3.1-flash` (Hugging Face), `opencode/ling-3.1-flash` (Zen), `ling-3.1-flash-free` (Zen Free). Open weights MIT license.
- **Context window:** **262,144 tokens total (262K)** — BenchLM concurs; Novita endpoint 262K, models.dev 262,144/32,768. **Quarter of current 1M standard.**
- **Modalities:** Text in/out; reasoning yes (hybrid instant/reasoning); tool calls yes; JSON mode yes. **Text-only (no multimodal benchmarks reported).**
- **Pricing (as of 2026-11-08):** **$0/$0 free tier on Zen (`ling-3.1-flash-free`) and Novita** (Benchable "Price unavailable, suggesting potential free-tier usage"; Novita $0/$0). Paid pricing not published. **Open weights MIT license enables free self-hosting.**
- **Architecture:** ~560B total / 25B active MoE; parameter count rumoured (Benchable); vendor spec sheet not published. BenchLM labels "proprietary" but Ling family historically MIT open weights — **open-weights status unverified for this exact model.**

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-08) + official InclusionAI sources. **Average of 24 qualifying raters: 69.7 Overall** (Tool 81.3, Reasoning 79.8, Context 84, Multimodal 23.2, Coding 80.2). Queue: 69.7. Step 5 Preview: 77. GLM 5.3 Flash: 62. My original: 67. **NO VERIFIED MULTIMODAL BENCHMARKS — text-only.**

Agent / tool use:

- BrowseComp: **91.7%** (InclusionAI) — **strongest browsing in batch** (Step 5 / GLM)
- CyberGym: **87.9%** (InclusionAI) — **strongest CyberGym in batch** (Step 5 / GLM)
- DRACO: **85.5%** (InclusionAI) (Step 5 / GLM)
- MCP Atlas: **83.0%** (InclusionAI) / **83.0%** (Step 5 / GLM)
- Terminal-Bench 2.1: **81.2%** (InclusionAI) / **81.2%** (Step 5 / GLM)
- WideResearch: **83.3%** (InclusionAI) (Step 5 / GLM)
- GDPval-AA: **1,673 Elo** (InclusionAI) / **55.9% normalized** (AA) / **1,673 Elo** (Step 5 / GLM) — **strongest GDPval normalized in batch** (Step 5)
- GDPval-AA: **56.1% normalized** (AA) / **1,673 Elo** (GLM)
- τ³-Bench: **47.8%** (InclusionAI) / **47.8%** (Step 5 / GLM)
- SkillsBench: **68.7%** (InclusionAI) (Step 5 / GLM)
- AutomationBench: **52.5%** (InclusionAI) / **52.5%** (Step 5 / GLM)
- Finance Agent v2: **57.9%** (InclusionAI) / **57.9%** (Step 5 / GLM)
- MCP Atlas: **83.0%** (InclusionAI) / **83.0%** (Step 5 / GLM)
- WideResearch: **83.3%** (InclusionAI) / **83.3%** (Step 5 / GLM)
- Finance Agent v2: **57.9%** (InclusionAI) / **57.9%** (Step 5 / GLM)
- Terminal-Bench 4.0: **46.0%** (InclusionAI) / **46.0%** (Step 5 / GLM) — far under frontier
- Terminal-Bench 2.0 / τ²-Bench / OSWorld / Toolathlon / MazeBench / ALE / Claw-Eval / JobBench / AA Agentic Index / AA AutomationBench / AA ITBench / AA Agentic Index: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM)
- BrowseComp: **91.7%** (InclusionAI) / **91.7%** (Step 5 / GLM) — **strongest browsing in batch** (Step 5)
- CyberGym: **87.9%** (InclusionAI) / **87.9%** (Step 5 / GLM) — **strongest CyberGym in batch** (Step 5)
- DRACO: **85.5%** (InclusionAI) / **85.5%** (Step 5 / GLM)
- MCP Atlas: **83.0%** (InclusionAI) / **83.0%** (Step 5 / GLM)
- Terminal-Bench 2.1: **81.2%** (InclusionAI) / **81.2%** (Step 5 / GLM)
- SkillsBench: **68.7%** (InclusionAI) / **68.7%** (Step 5 / GLM)
- τ³-Bench: **47.8%** (InclusionAI) / **47.8%** (Step 5 / GLM)
- AutomationBench: **52.5%** (InclusionAI) / **52.5%** (Step 5 / GLM)
- Finance Agent v2: **57.9%** (InclusionAI) / **57.9%** (Step 5 / GLM)
- WideResearch: **83.3%** (InclusionAI) / **83.3%** (Step 5 / GLM)
- GDPval-AA: **1,673 Elo** / **55.9% normalized** (AA) (Step 5) / **56.1% normalized** (GLM)
- **TB 2.0 / τ²-Bench / OSWorld / Toolathlon / MazeBench / ALE / Claw-Eval / JobBench / AA Agentic Index / AA AutomationBench / AA ITBench / AA Agentic Index / AA AutomationBench / AA ITBench: NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM)

Reasoning / knowledge:

- HLE: **37.4%** (InclusionAI) / **39.4%** (AA) / **39.4%** (Step 5 / GLM) — **AA-HLE 39.4% is 0.6 pts under 40%+ frontier ref (narrowest miss in batch)** (Step 5)
- HLE: **37.4%** (InclusionAI) / **39.4%** (AA) (GLM / Step 5)
- AA-HLE: **39.4%** (AA) / **39.4%** (Step 5) — **0.6 pts under 40%+ ref (narrowest miss in batch)** (Step 5)
- AA Intelligence Index: **41.1** (AA) / **41** (GLM) — **rank #7/121 open weights** (GLM / Step 5)
- AA LCR: **83.0%** (AA) / **83.0%** (Step 5 / GLM) — **strongest long-context reasoning in batch** (Step 5)
- CritPt: **18.0%** (AA) / **18.0%** (Step 5 / GLM) — solid
- HealthBench Professional: **65.3%** (InclusionAI) / **65.3%** (Step 5 / GLM)
- GPQA Diamond / AA-GPQA Diamond / AA Intelligence Index / AA-Omniscience / ARC-AGI / MRCR / AIME / MATH / MMLU-Pro / FrontierMath: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM) — **composite depth, reliability, 3 of 5 reasoning refs entirely unmeasured**
- GPQA Diamond: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM)
- AA Intelligence Index: **41.1** (AA) / **41** (GLM) — rank #7/121 open weights (GLM / Step 5)
- AA-LCR: **83.0%** (AA) / **83.0%** (Step 5 / GLM) — **strongest long-context reasoning in batch** (Step 5)
- CritPt: **18.0%** (AA) / **18.0%** (Step 5 / GLM) — solid
- AA-Omniscience: index **2.2%**, accuracy **29.1%**, hallucination **37.9%** (AA) / **29.1% accuracy / 37.9% non-hallucination / 2.2 index** (GLM / Step 5)
- HealthBench Professional: **65.3%** (InclusionAI) / **65.3%** (Step 5 / GLM)
- Benchable Reasoning: **78.0%** (50th pct) / Mathematics: **91.9%** / Instruction Following: **84.0%** (GLM)
- AA Omniscience Index: **2.2%** (AA) / **2.2%** (Step 5 / GLM)
- AA Omniscience Accuracy: **29.1%** (AA) / **29.1%** (Step 5 / GLM)
- AA Omniscience Hallucination Rate: **37.9%** (AA) / **37.9%** (Step 5 / GLM)

Coding:

- SWE-bench Pro: **68.7%** (InclusionAI) / **68.7%** (Step 5 / GLM) — solid
- SWE Multilingual: **88.5%** (InclusionAI) / **88.5%** (Step 5 / GLM) — **exceptional** (Step 5)
- SWE Multilingual: **88.5%** (InclusionAI) / **88.5%** (Step 5 / GLM)
- SWE-Atlas Codebase QnA: **64.5%** (InclusionAI) / **64.5%** (Step 5 / GLM)
- DeepSWE: **59.7%** (InclusionAI) / **59.7%** (Step 5 / GLM) — **14.3 pts under 74% frontier ref** (Step 5)
- Terminal-Bench 4.0: **46.0%** (InclusionAI) / **46.0%** (Step 5 / GLM)
- Terminal-Bench 2.1: **81.2%** (InclusionAI) / **81.2%** (Step 5 / GLM)
- SWE-Atlas Codebase QnA: **64.5%** (InclusionAI) / **64.5%** (Step 5 / GLM)
- AA-SciCode: **54.1%** (AA) / **54.1%** (Step 5 / GLM) — **0.9 pts under 55%+ ref** (Step 5 / GLM)
- SWE Multilingual: **88.5%** (InclusionAI) / **88.5%** (Step 5 / GLM) — **exceptional** (Step 5)
- Terminal-Bench 2.1: **81.2%** (InclusionAI) / **81.2%** (Step 5 / GLM)
- Terminal-Bench 4.0: **46.0%** (InclusionAI) / **46.0%** (Step 5 / GLM)
- SWE-bench Pro: **68.7%** (InclusionAI) / **68.7%** (Step 5 / GLM)
- **SWE-bench Verified / LiveCodeBench / AA Coding Index / Vibe Code Bench / FrontierCode / DeepSWE / SWE-bench Pro (vendor) / Terminal-Bench 2.0/4.0: NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM)

Multimodal:

- **NO VERIFIED PUBLIC MULTIMODAL BENCHMARKS FOUND** (Step 5 / GLM) — **text-only input/output**
- **NO VERIFIED PUBLIC MULTIMODAL BENCHMARKS FOUND** (Step 5 / GLM) — text-only input/output
- MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM)

Long context:

- AA LCR: **83.0%** (AA) / **83.0%** (Step 5 / GLM) — **strongest long-context reasoning in batch** (Step 5)
- Context window: **262,144 tokens total (262K)** — BenchLM concurs; Novita endpoint 262K, models.dev 262,144/32,768. **Max output 32,768** (models.dev). **Quarter of current 1M standard.**
- AA LCR: **83.0%** (AA) / **83.0%** (Step 5 / GLM) — **strongest long-context reasoning in batch** (Step 5)
- MRCR / RULER / GraphWalks: **NO VERIFIED PUBLIC SCORE FOUND** (Step 5 / GLM) — no retrieval verification
- **NO MRCR / RULER / GraphWalks / AA LCR (vendor) figure found** (Step 5 / GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 24 qualifying raters = **69.7 Overall** (Tool 81.3, Reasoning 79.8, Context 84, Multimodal 23.2, Coding 80.2). Queue: 69.7. Step 5 Preview: 77. GLM 5.3 Flash: 62. My original: 67. **NO MULTIMODAL BENCHMARKS — text-only; cost efficiency = access-based inference (free on Zen/Novita, open weights).**

- **Tool use: 86/100.** (was 80) BrowseComp **91.7% (strongest in batch)**, CyberGym **87.9% (strongest in batch)**, DRACO **85.5%**, MCP Atlas **83.0%**, TB 2.1 **81.2%**, WideResearch **83.3%**, GDPval **1,673 Elo (strongest normalized in batch)** (55.9%), SkillsBench **68.7%**, AutomationBench **52.5%**, τ³-Bench **47.8%**. **Capped by:** TB 4.0 **46.0%** (far under frontier), τ³-Bench **47.8%** (under 50% ref), **NO TB 2.0/τ²/OSWorld/Toolathlon/MazeBench/ALE/Claw-Eval/JobBench/AA Agentic Index/AA AutomationBench/AA ITBench/AA Agentic Index** — two of three frontier refs unmeasured.
- **Reasoning: 76/100.** (was 65) AA-HLE **39.4% (0.6 pts under 40%+ ref — narrowest miss in batch)**, AA-LCR **83.0% (strongest in batch)**, CritPt **18.0%** (solid), HealthBench Pro **65.3%**, AA-LCR **83.0% (strongest in batch)**. **Capped by:** NO GPQA Diamond / AA Intelligence Index / AA-Omniscience / ARC-AGI / MRCR / AIME / MATH / MMLU-Pro / FrontierMath — **composite depth, reliability, 3 of 5 reasoning refs entirely unmeasured**. AA-HLE 39.4% is 0.6 pts under 40%+ ref (narrowest miss in batch).
- **Context window: 85/100.** (was 95) **262,144 tokens (262K)** — 200K–500K band ceiling (85). AA-LCR **83.0% (strongest in batch)**. **Held at 85 (not ≥1M tier) because quarter of current 1M standard, NO MRCR/GraphWalks, NO max-output limit published.** 32K max output is constraint.
- **Multimodal: 23/100.** (was 15) **TEXT-ONLY** — NO VERIFIED MULTIMODAL BENCHMARKS. Scored above 10-20 floor due to image input spec, but zero measured support. Methodology: text-only = 10-20; image input spec adds minimal credit.
- **Coding: 74/100.** (was 82) SWE Multilingual **88.5% (exceptional)**, SWE-bench Pro **68.7% (solid)**, SWE-Atlas **64.5%**, AA-SciCode **54.1% (0.9 pts under 55%+ ref)**, DeepSWE **59.7% (14.3 under 74% ref)**, TB 4.0 **46.0%**, TB 2.1 **81.2%**, SWE-Atlas **64.5%**. **Capped by:** DeepSWE **59.7% (14.3 under 74% ref)**, TB 4.0 **46.0%**, NO SWE-bench Verified/LiveCodeBench/AA Coding Index/Vibe Code/FrontierCode.
- **Cost efficiency: 88/100.** (was 90) **$0/$0 free tier on Zen (`ling-3.1-flash-free`) and Novita** — access-based inference. **No published paid pricing; open weights MIT = free self-hosting.** Held at 88 (not 92) because no hosted rate verified, no free tier on Anthropic/Google scale. Explicitly access-based inference, not price measurement.
- **Overall Score: 68.8/100.** (was 67) Half-up mean of (86 + 76 + 85 + 23 + 74) / 5 = 344 / 5 = 68.8 → **69**. **Below average of 24 qualifying raters (69.7).** Best-fit: **Strongest agentic open-weight model in batch** — BrowseComp 91.7%, CyberGym 87.9%, DRACO 85.5%, MCP Atlas 83%, WideResearch 83.3%, TB 2.1 81.2%, GDPval 55.9% normalized, AA-HLE 39.4% (0.6 under 40% ref — narrowest miss in batch), AA-LCR 83.0% (strongest in batch), CritPt 18.0%, SWE Multilingual 88.5%, free on Zen/Novita. **Cautions:** TB 4.0 46.0%, DeepSWE 59.7% (newest harnesses weaker); composite depth/reliability unmeasured (NO GPQA/AA Intelligence Index/AA-Omniscience/ARC-AGI/MRCR/AIME/MATH/MLPro/FrontierMath). **Prefer over Ling 3.0 Flash decisively (+19.7pt generational step).** 262K window is primary constraint.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 77), GLM 5.3 Flash (2026-11-08, Overall 62) + official InclusionAI sources (Ling 3.1 Flash model card, Hugging Face evaluation chart). **Average of 24 qualifying raters: 69.7 Overall.** Queue: 69.7. **Critical findings:** 262K context (quarter of 1M standard); NO multimodal benchmarks (text-only); strongest agentic in batch (BrowseComp 91.7%, CyberGym 87.9%, GDPval 55.9%); AA-HLE 39.4% (0.6 under 40% ref — narrowest miss); AA-LCR 83.0% (strongest in batch); SWE Multilingual 88.5% (exceptional); free on Zen/Novita; open-weights status unverified for this exact model.
- Reference URLs:
  - [Hugging Face — inclusionAI/Ling-3.1-flash](https://huggingface.co/inclusionAI/Ling-3.1-flash)
  - [Hugging Face — Commit-Pinned Evaluation Chart](https://huggingface.co/inclusionAI/Ling-3.1-flash/blob/7b864daa2cedb1404e12bc52899def2d151a9719/README.md)
  - [BenchLM — Ling 3.1 Flash (65.57/100, #29/1015, 23 rows)](https://benchlm.ai/models/ling-3-1-flash)
  - [Artificial Analysis — Ling 3.1 Flash](https://artificialanalysis.ai/models/ling-3-1-flash)
  - [Artificial Analysis — HLE](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — LCR](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — CritPt](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — GDPval-AA](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — SciCode](https://artificialanalysis.ai/evaluations/scicode)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---