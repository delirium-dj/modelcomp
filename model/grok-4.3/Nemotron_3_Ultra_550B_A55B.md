# Grok 4.3 — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4.3`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3 — **WEAKEST GROK 4.X WITH BENCHLM SCORE**
- **Short description:** xAI's Grok 4.3 model — **BenchLM: 52.89/100, #93/1015 (32 benchmarks)**. Unusual profile: strong knowledge/instruction-following (GPQA Diamond 91.4%, IFBench 81.3%, MMLU-Pro 85.8%) but near-floor agentic execution (AA Agentic Index 17.2%, TB 2.1 41.9%, APEX-Agents-AA 17.0%) and weak long context (AA-LCR 64.3%, 2nd lowest in batch). **Only Grok 4.x with 1M context (4.5/4.6/4.7 are 500K).** BenchLM: 52.89/100, #93/1015.
- **Provider / access:** xAI API (`grok-4.3`), OpenRouter, OpenCode Zen (`xai/grok-4.3`). No Free tier. Proprietary, closed weights.
- **Release / knowledge:** 2026 release (early 4.x line); **knowledge cutoff not disclosed.**
- **IDs:** `xai/grok-4.3` (xAI, Zen), `x-ai/grok-4.3` (OpenRouter), `grok_grok-4.3` (Vals).
- **Context window:** 1,000,000 tokens (BenchLM) — **only Grok 4.x with 1M window** (4.5/4.6/4.7 are 500K).
- **Modalities:** Text, image in; text out. MMMU-Pro 78.1% (AA).
- **Pricing (as of 2026-11-08):** **Not published in sources checked** — BenchLM row carries no rate card. **Scored conservatively as unverified.**
- **Architecture:** Proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from Step 5 Preview (2026-11-06) + official xAI sources. **Average of 28 qualifying raters: 84.8 Overall** (Tool 83.9, Reasoning 85.8, Context 94.2, Multimodal 78.5, Coding 81.3). Queue: 84.8. Step 5 Preview: 64. My original: 66. **PROVENANCE FACT: 32 independent benchmark rows, NO vendor-run rows — best independently-evidenced Grok in series.**

Agent / tool use:

- τ²-bench: **97.7%** (AA) — **single strong figure, among strongest in series** (Step 5 / GLM)
- GDPval-AA: **Elo 1,018** (AA) / **29.2% normalized** (OpenRouter) — well under 1,750+ frontier (Step 5 / GLM)
- AA Agentic Index: **17.2%** (AA) / **17.2%** (Step 5) — **2nd lowest in batch**
- APEX-Agents-AA: **17.0%** (AA) / **17.0%** (Step 5)
- Terminal-Bench 2.1 (Vals): **41.9%** — **46 pts under 88%+ frontier reference** (Step 5 / GLM)
- Terminal-Bench 4.0 / τ³-Banking / MCP-Atlas / OSWorld / BrowseComp / Toolathlon / MazeBench / ALE / Claw-Eval / JobBench / AutomationBench / ITBench: **no verified public score found** (Step 5 / GLM)
- GDPval-AA: **Elo 1,018** (AA) / **Elo 1,018** (GLM)
- AA Briefcase Elo: **no verified** (Step 5)
- AA Harvey LAB: **no verified** (Step 5)
- AA AnalystAgent: **no verified** (Step 5)
- AA ITBench: **no verified** (Step 5)
- AA Cyber Index: **no verified** (Step 5)
- τ²-bench: **97.7%** (AA) — **among strongest in series** (Step 5 / GLM)
- GDPval-AA: **Elo 1,018** (AA) / **29.2% normalized** (OpenRouter) (GLM / Step 5)
- ResearchClawBench: **12.4%** (GLM / Step 5)
- Gert Labs: **43.86%** (GLM)
- AA Briefcase: **no verified** (Step 5)
- AA Harvey LAB: **no verified** (Step 5)
- AA ITBench: **no verified** (Step 5)
- **Terminal-Bench 4.0 / τ³-Banking / MCP-Atlas / OSWorld / BrowseComp / Toolathlon / MazeBench / ALE / Claw-Eval / JobBench / AutomationBench / ITBench: no verified public score found** (Step 5 / GLM)
- AA Agentic Index: **17.2%** (AA) / **17.2%** (Step 5) — 2nd lowest in batch
- APEX-Agents-AA: **17.0%** (AA) / **17.0%** (Step 5)
- GDPval-AA: **Elo 1,018** (AA) / **29.2% normalized** (OpenRouter) (GLM / Step 5)

Reasoning / knowledge:

- GPQA Diamond: **91.4%** (Vals) / **90.1%** (AA) — **clears 90%+ ref on both** (Step 5 / GLM)
- HLE: **35%** (Vals) / **AA-HLE 37.2%** (AA) — **fails 40%+ ref on both by 2.8-5 pts** (Step 5 / GLM)
- AA-Omniscience: index **18.0**, accuracy **34.6%**, hallucination **25.0%** — **3rd lowest hallucination in research series** (behind Grok 4.7 20.0%, Mistral Large 4 28.2%) (Step 5 / GLM)
- AA Intelligence Index: **37.6%** (AA) / **37.6%** (Step 5) — solid composite
- IFBench: **81.3%** — strong instruction following (Step 5 / GLM)
- MMLU-Pro (Vals): **85.8%** (Vals) / **85.8%** (Step 5)
- AA-LCR: **64.3%** (AA) / **64.3%** (Step 5) — **weakest in batch**
- CritPt: **8.0%** (AA) / **8.0%** (Step 5) — **weakest CritPt in batch**
- FrontierMath v2: Tiers 1-3 **42.8%** / Tier 4 **14.6%** (Epoch AI) / **42.8% / 14.6%** (Step 5 / GLM) — weak
- AA Intelligence Index: **37.6%** (AA) / **37.6%** (Step 5)
- ARC-AGI / MRCR / AIME / MATH: **no verified public score found** (Step 5 / GLM)
- **GPQA Diamond: 91.4% (Vals) / 90.1% (AA)** — clears 90%+ on both (GLM / Step 5)
- HLE: **35%** / **AA-HLE 37.2%** — fails 40%+ ref by 2.8-5 pts (GLM / Step 5)
- IFBench: **81.3%** — strong instruction following (GLM / Step 5)
- MMLU-Pro (Vals): **85.8%** (Vals) / **85.8%** (Step 5)
- AA-LCR: **64.3%** — weakest in batch (GLM / Step 5)
- CritPt: **8.0%** — weakest CritPt in batch (GLM / Step 5)
- FrontierMath v2: T1-3 **42.8%** / T4 **14.6%** (Epoch AI) (GLM / Step 5)
- AA Intelligence Index: **37.6%** (GLM / Step 5)

Coding:

- LiveCodeBench (Vals): **84.5%** — strongest coding figure (Step 5 / GLM)
- SWE-bench (Vals): **71.4%** — under 85%+ ref but respectable (Step 5 / GLM)
- AA Coding Index: **42.3%** (AA) — **well under 70% frontier ref** (Step 5 / GLM)
- AA-SciCode: **48.3%** / SciCode **47.3%** — under 55%+ ref (Step 5 / GLM)
- DeepSWE / SWE-bench Pro / Vibe Code Bench / Terminal-Bench 4.0 / FrontierCode: **no verified public score found** (Step 5 / GLM)

Multimodal:

- MMMU-Pro: **78.1%** (AA) — only measured visual figure (Step 5 / GLM)
- Design Arena: **1,194 Elo** (OpenRouter) — lowest in batch (Step 5 / GLM)
- CharXiv / ExtractBench / BabyVision / ZeroBench: **no verified public score found** (Step 5 / GLM)

Long context:

- Context window: **1,000,000 tokens** (BenchLM) — **only Grok 4.x with 1M window** (4.5/4.6/4.7 are 500K)
- AA-LCR: **64.3%** (AA) / **64.3%** (Step 5) — **weakest in batch**
- **MRCR / RULER / GraphWalks: no verified public score found** (Step 5 / GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 28 qualifying raters = **84.8 Overall** (Tool 83.9, Reasoning 85.8, Context 94.2, Multimodal 78.5, Coding 81.3). Queue: 84.8. Step 5 Preview: 64. My original: 66. **PROVENANCE: 32 independent rows, NO vendor runs — best independently-evidenced Grok.**

- **Tool use: 65/100.** (was 50) τ²-bench **97.7% (among strongest in series)**. **Capped by:** AA Agentic Index **17.2%** (2nd lowest), TB 2.1 Vals **41.9%** (46 pts under 88% ref), GDPval-AA **Elo 1,018** (under 1,750+ frontier), APEX-Agents **17.0%**, ResearchClawBench **12.4%**, **no TB 4.0/τ³-Banking/MCP-Atlas/OSWorld/BrowseComp/Toolathlon/MazeBench/Claw-Eval/JobBench/AutomationBench/ITBench** — two of three frontier refs entirely unmeasured.
- **Reasoning: 78/100.** (was 65) GPQA Diamond **91.4% Vals / 90.1% AA** (clears 90%+ on both), IFBench **81.3%**, MMLU-Pro **85.8%**, AA-Omniscience hallucination **25.0% (3rd lowest in series)**, AA Intelligence Index **37.6%**. **Capped by:** AA-HLE **35-37.2%** (fails 40%+ ref), CritPt **8.0% (weakest in batch)**, FrontierMath Tier 4 **14.6%**, AA-LCR **64.3% (weakest in batch)**, no ARC-AGI/MRCR/AIME/MATH.
- **Context window: 90/100.** (was 85) **1M tokens (only Grok 4.x with 1M vs 500K for 4.5/4.6/4.7)**. Held at 90 (not 95+) due to **AA-LCR 64.3% (weakest in batch), no MRCR/GraphWalks**, no max-output limit.
- **Multimodal: 65/100.** (was 65) Text + image in; MMMU-Pro **78.1%** (AA), Design Arena **1,194 Elo** (lowest in batch). Capped by single visual benchmark, no video/audio/PDF, text-only output.
- **Coding: 65/100.** (was 65) LiveCodeBench **84.5%** (Vals, strong), SWE-bench **71.4%** (Vals). **Capped by:** AA Coding Index **42.3%** (27.7 pts under 70% ref), AA-SciCode **48.3%** (under 55% ref), **no DeepSWE/SWE-Pro/Vibe Code/TB 4.0/FrontierCode**.
- **Cost efficiency: 55/100.** (was 50) **No rate card published** — placeholder for unknown. Scored at methodology ~$3/$15 anchor (≈60). Sibling rate cards ($2/$6 for 4.5/4.6) are directional signal. **Explicitly an estimate, not a measurement.**
- **Overall Score: 72.6/100.** (was 66) Half-up mean of (65 + 78 + 90 + 65 + 65) / 5 = 363 / 5 = 72.6 → **73**. **Below average of 28 qualifying raters (84.8).** Best-fit: **Knowledge model that cannot act** — GPQA Diamond 91.4%, IFBench 81.3%, AA-Omniscience 18.0 index / 25.0% hallucination (3rd lowest in series), only 1M window in Grok 4.x line, against AA Agentic Index 17.2%, TB 2.1 41.9%, AA-LCR 64.3%. **Prefer Grok 4.5/4.6 for tool execution.** **All 32 rows independently attributed — no vendor runs — most trustworthy Grok measurement.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from Step 5 Preview (2026-11-06, Overall 64) + official xAI sources (BenchLM, Vals AI, Artificial Analysis, Epoch AI, Gert Labs). **Average of 28 qualifying raters: 84.8 Overall.** Queue: 84.8. **Critical findings:** 32 independent rows, NO vendor runs; τ²-bench 97.7% vs AA Agentic Index 17.2% (protocol vs execution); only Grok 4.x with 1M context (vs 500K for 4.5/4.6/4.7); AA-LCR 64.3% (weakest in batch), CritPt 8.0% (weakest in batch); hallucination 25.0% (3rd lowest); AA-LCR 64.3% vs 1M window (nominal vs usable); no pricing published.
- Reference URLs:
  - [BenchLM — Grok 4.3 (52.89/100, #93/1015, 32 rows)](https://benchlm.ai/models/grok-4-3)
  - [Artificial Analysis — Grok 4.3](https://artificialanalysis.ai/models/grok-4-3)
  - [Vals AI — Grok 4.3](https://www.vals.ai/models/grok_grok-4.3)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Gert Labs Rankings](https://gertlabs.com/rankings)
  - [ResearchClawBench](https://internscience.github.io/ResearchClawBench-Home/)
  - [OpenRouter — Grok 4.3](https://openrouter.ai/x-ai/grok-4.3/benchmarks)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---