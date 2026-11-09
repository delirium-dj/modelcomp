# GPT-5.3 Codex — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex (Codex-line agentic coding model) — **400K CONTEXT (half of 1M standard)**
- **Short description:** OpenAI's Codex-line agentic coding model from GPT-5.3 generation — tuned for agentic coding in Codex CLI/coding agents. **BenchLM: 62.92/100, #41/1015 (ONLY 19 BENCHMARKS — THINNEST IN BATCH)**. **THINNEST EVIDENCE BASE IN BATCH: 19 benchmarks only.**
- **Provider / access:** OpenAI API, Microsoft Azure, **OpenCode Zen (`opencode/gpt-5.3-codex` at $1.75/$14.00)**. Azure serves at $1.75/$14.00. No Free ID on Zen. Proprietary, closed weights.
- **Release / knowledge:** 2026-02-05 release (AA); **knowledge cutoff: August 31, 2025** (AA spec).
- **IDs:** `opencode/gpt-5.3-codex` (Zen); `gpt-5.3-codex` (OpenAI API). No Free ID on Zen. Sibling: `gpt-5.3-codex-spark` (60.53).
- **Context window:** **400,000 tokens total** (AA, BenchLeader, BenchLM) — **HALF THE 1M STANDARD**.
- **Modalities:** Text + image in; text out. Reasoning (`reasoning_effort`, AA evaluates at xhigh); tool calling; structured outputs; prompt caching. **NO VIDEO/AUDIO/PDF INPUT.**
- **Pricing (as of 2026-11-08):** **$1.75 in / $0.175 cached / $14.00 out per 1M** (OpenAI, Zen, Azure). AA blended **$1.87/1M**. Cache read $0.175 (90% off). Output speed 84 tok/s (AA), first token 2.42s. AA blended $4.81/M (BenchLeader). **NO RATE CARD IN BENCHLM ROW — placeholder cost.**
- **Architecture:** Proprietary (OpenAI); parameter count undisclosed. Codex fine-tune of GPT-5.3 for agentic coding.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official OpenAI sources. **Average of 28 qualifying raters: 85.2 Overall** (Tool 88.2, Reasoning 85.8, Context 85.4, Multimodal 75.4, Coding 91.3). Queue: 85.2. Step 5 Preview: 72. GLM 5.3 Flash: 82. My original: 78. **THINNEST EVIDENCE BASE IN BATCH: 19 BENCHMARKS ONLY.**

Agent / tool use:

- Terminal-Bench: **78.4% #6** (tbench.ai, not-stated effort) / **TB 2.0: 77.3% vendor / 64.0% Vals (CONFLICT)** / **TB Hard (AA): 53.0% #17** (GLM / Step 5)
- τ²-Bench Telecom: **86.0%** (AA) (GLM / Step 5)
- OSWorld-Verified: **64.7%** (vendor) (GLM / Step 5)
- METR Time Horizons: **74.5% #6** (METR — new long-horizon evidence) (GLM)
- τ²-bench: **86%** (AA) (Step 5)
- JobBench: **33.7%**; Gert Labs: **57.47%** (GLM / Step 5)
- Vending-Bench 2: **5,940.1 #20** (Andon Labs); HiL-Bench: **4.3% #17** (GLM)
- **TB 2.1, TB 4.0, τ³-Banking, GDPval-AA, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, AA Agentic Index: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **2 of 3 frontier refs unmeasured**

Reasoning / knowledge:

- GPQA Diamond: **91.5% #46** (AA — fills gap; clears 90%+ frontier) (GLM / Step 5)
- HLE: **42.5% #61** (AA — fills gap; clears 40%+ ref) (GLM / Step 5)
- AA-LCR: **83.3% #19** (AA — fills gap; strong) (GLM / Step 5)
- CritPt: **16.9% #77** (AA — fills gap) (GLM / Step 5)
- AA-IFBench: **75.4% #33** (AA) (GLM)
- AA-Omniscience: **Index 10.9, accuracy 52.9%, non-hallucination 10.8% #392** — **SEVERE HALLUCINATION AT XHIGH** (GLM)
- AA Intelligence Index v4.3.2: **32.5 #104** (AA) / **BenchLeader Index: 63.9 ±5.0 #56/760** (GLM)
- Epoch Capabilities Index: **156.8 #18** (GLM)
- **HLE (vendor), AA Intelligence Index, AA-Omniscience (vendor), ARC-AGI, FrontierMath, MRCR, AIME, MATH: NO VERIFIED PUBLIC SCORE** — **reliability entirely unmeasured** (GLM / Step 5)

Coding:

- SWE-bench Verified: **85%** (OpenAI system card) / **74.8% #15** (Epoch, high effort) — **CONFLICT** (GLM / Step 5)
- SWE-bench Pro: **56.8%** (OpenAI system card) (GLM / Step 5)
- SWE-Rebench: **58.2%** (independent) (GLM / Step 5)
- SWE-bench (Vals): **78.0% #33** — **7.0pt vendor-vs-Vals gap** (GLM / Step 5)
- LiveCodeBench: **87.3% #15** (Vals) (GLM / Step 5)
- Vibe Code Bench v1.1: **61.8% #41** (Vals) (GLM / Step 5)
- IOI: **53.8% #19** (Vals); WeirdML: **77.9% #22** (xhigh); ALE-Bench: **1,655.2 #12** (Epoch) (GLM)
- AA-SciCode, DeepSWE, AA Coding Index, FrontierCode: **NO VERIFIED PUBLIC SCORE** — **74%, 70%, 55% refs unmeasured** (GLM / Step 5)

Multimodal:

- AA-MMMU-Pro: **78.5% #69** (AA) (GLM / Step 5)
- Design Arena Website: **1,161 Elo** (Nov 5 refresh — lowest in batch) (GLM / Step 5)
- **Text + image in only; text out** — **NO VIDEO/AUDIO/PDF INPUT** (GLM / Step 5)

Long context:

- AA-LCR: **83.3% #19** (AA) — **strong for 400K tier** (GLM / Step 5)
- **400K WINDOW (HALF 1M STANDARD)** — **NO MRCR/GRAPHWALKS/RULER AT 512K+** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 28 qualifying raters = **85.2 Overall** (Tool 88.2, Reasoning 85.8, Context 85.4, Multimodal 75.4, Coding 91.3). Queue: 85.2. Step 5 Preview: 72. GLM 5.3 Flash: 82. My original: 78. **THINNEST EVIDENCE BASE IN BATCH: 19 BENCHMARKS; 400K CONTEXT; SEVERE HALLUCINATION (10.8% NON-HALLUCINATION).**

- **Tool use: 75/100.** (was 70) TB **78.4% #6** (tbench.ai), TB 2.0 **77.3% vendor / 64.0% Vals (CONFLICT)**, τ² **86.0%**, METR **74.5% #6**, OSWorld-Verified **64.7%**, OSWorld 2.0 **64.7% vendor**, Gert Labs **57.5%**, JobBench **33.7%**, Vending-Bench **5,940 #20**. **Capped by:** TB Hard **53.0%**, HiL-Bench **4.3%**, **NO TB 2.1/4.0, τ³/τ²/τ³-Banking, GDPval-AA, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, AA Agentic Index** — 2 of 3 frontier refs unmeasured.
- **Reasoning: 74/100.** (was 72) GPQA Diamond **91.5% #46** (clears 90%+), HLE **42.5% #61** (clears 40%+), AA-LCR **83.3% #19** (strong), CritPt **16.9% #77**, IFBench **75.4% #33**, AA-LCR **83.3%**. **Capped by:** AA-Omniscience **10.9 index / 52.9% accuracy / 10.8% non-hallucination (SEVERE HALLUCINATION AT XHIGH)**; AA Intelligence Index **32.5 #104**; **NO ARC-AGI/FrontierMath/MRCR/AIME/MATH/AA Intelligence Index (vendor)/AA-Omniscience (vendor)** — 5 of methodology's reasoning refs unmeasurable.
- **Context window: 85/100.** (was 90) **400K (200K-500K band ceiling, 85)**; AA-LCR **83.3%** (strong for tier). **Held at 85 (not ≥1M tier): 400K = half 1M standard; NO MRCR/GraphWalks/RULER at 512K+.**
- **Multimodal: 70/100.** (was 70) Text + image in; AA-MMMU-Pro **78.5%**; Design Arena **1,161 Elo (LOWEST IN BATCH)**. **Scored at +image-in band ceiling (60-70) marginally above on measured vision.** **Capped by:** NO video/audio/PDF input; visual suite = 2 benchmarks; text-only output.
- **Coding: 86/100.** (was 88) SWE-V **85% vendor / 74.8% Epoch (CONFLICT)**; SWE-Pro **56.8%**; LCB **87.3% #15 (Vals)**; SWE-bench **78.0% #33 (Vals)**; Vibe Code **61.8% #41 (Vals)**; SWE-Rebench **58.2%**; IOI **53.8% #19**; ALE-Bench **1,655 #12** (Epoch); WeirdML **77.9% #22**. **Capped by:** SWE-V **7.0pt vendor-vs-Vals gap (85% vs 78.0%)**; Epoch SWE-V **74.8% (under 80% frontier)**; **NO AA-SciCode/DeepSWE/AA Coding Index/FrontierCode** — 74%, 70%, 55% refs unmeasured.
- **Cost efficiency: 60/100.** (was 45) **$1.75/$14.00 per 1M** (OpenAI, Zen, Azure); cache read $0.175 (90% off); AA blended **$1.87/1M**; BenchLeader **$4.81/M**; output speed 84 tok/s. **Between ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) — closer to $3/$15 on output.** NO RATE CARD IN BENCHLM ROW — placeholder scored at methodology ~$3/$15 anchor (60). Codex SKUs historically priced above base GPT tier.
- **Overall Score: 78/100.** (was 78) Half-up mean of (75 + 74 + 85 + 70 + 86) / 5 = 390 / 5 = 78 → **78**. **Below queue (85.2), average of 28 qualifying raters (85.2).** Best-fit: **Agentic coding in Codex CLI/agents — benchmark-verified strong on both agentic and coding; reliability unmeasured (Omniscience 10.8% non-hallucination, AA Index 32.5).** For long-horizon work, step up to GPT-5.4/5.5-class models. GPT-5.6 Luna (63.94, 54 benchmarks) costs same and is far better evinced. **Treat 78 as floor on evidence, not capability ceiling.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 72), GLM 5.3 Flash (2026-11-05, Overall 82) + official OpenAI sources (GPT-5.3-Codex System Card, BenchLeader, BenchLM, AA, Vals, METR, SWE-Rebench). **Average of 28 qualifying raters: 85.2 Overall.** Queue: 85.2. **Critical findings:** THINNEST EVIDENCE BASE IN BATCH (19 benchmarks); 400K context (half 1M standard); SWE-V 85% vendor / 74.8% Epoch (CONFLICT); LiveCodeBench 87.3%; AA-Omniscience 10.8% non-hallucination (SEVERE HALLUCINATION AT XHIGH); AA Index 32.5; NO ARC-AGI/FrontierMath/MRCR/AIME; NO TB 2.1/4.0/GDPval-AA/MCP-Atlas/BrowseComp/Toolathlon; NO AA-SciCode/DeepSWE/AA Coding Index/FrontierCode; NO RATE CARD IN BENCHLM ROW; placeholder cost scored at ~$3/$15 anchor.
- Reference URLs:
  - [OpenAI — GPT-5.3-Codex System Card (primary benchmark source)](https://cdn.openai.com/pdf/23eca107-a9b1-4d2c-b156-7deb4fbc697c/GPT-5-3-Codex-System-Card-02.pdf)
  - [BenchLM — GPT-5.3 Codex benchmark scores (19 rows, 62.92/100, #41/1015)](https://benchlm.ai/models/gpt-5-3-codex)
  - [Artificial Analysis — GPT-5.3 Codex](https://artificialanalysis.ai/models/gpt-5-3-codex)
  - [Vals AI — GPT-5.3 Codex leaderboard results](https://www.vals.ai/models/openai_gpt-5.3-codex)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [SWE-Rebench leaderboard](https://swe-rebench.com/?insight=sep_2025)
  - [Vals AI — Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code)
  - [JobBench paper](https://arxiv.org/abs/2605.26329)
  - [Openrouter — GPT-5.3 Codex benchmarks](https://openrouter.ai/openai/gpt-5.3-codex/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---