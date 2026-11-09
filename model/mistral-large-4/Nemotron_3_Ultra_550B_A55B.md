# Mistral Large 4 — findings by Nemotron 3 Ultra 550B A55B

- Source: Mistral AI (`mistral-large-4`, `mistralai/mistral-large-4`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (Preview, "le Chonk") — **OPEN-WEIGHT (weights dropped 2026-10-29, open-weight announcement)**; BenchLM 52.54/100, #95/1015 (24 benchmarks — 2nd-thinnest in batch); **highest-scored Mistral in corpus by wide margin** (Large 3: 34.08, Medium 3.5 128B: 29.56).
- **Short description:** Mistral's largest open-weight model — 1.05T-parameter (52B active) natively multimodal MoE targeting coding, agentic workflows, cybersecurity, finance, visual grounding. **AA-Omniscience hallucination 28.2% — 2ND-LOWEST IN SERIES (behind only Grok 4.7's 20.0%)** — most factually trustworthy open-weight model here. **24 benchmarks only (2nd-thinnest in batch).** **PRICING ANOMALY: Oct 6 preview $0.68/$2.09; Oct 29 open-weight $0.70/$2.10; but at 14:20 UTC Oct 29 Mistral's own pages/OpenRouter still showed old $1.36/$4.18 list.**
- **Provider / access:** Mistral Studio preview API (`mistral-large-4` / `mistral-large-4+1`), Chat Completions + Conversations/Agents APIs, structured outputs, function calling, document QnA, batching, built-in tools. **Weights open (license per announcement repo).** Served on 3,800 NVIDIA Grace Blackwell GPUs (European datacenters). OpenRouter, OpenCode Zen. **No Free ID on Zen.**
- **Release / knowledge:** 2026-10-06 release (public preview); **weights dropped 2026-10-29 (open-weight announcement)**; **knowledge cutoff: not disclosed.**
- **IDs:** `mistral/mistral-large-4` (Mistral first-party); `mistralai/mistral-large-4` (HF); `mistralai/mistral-large-4-0` (OpenRouter); `mistralai_large-4` (Vals). No Free ID on Zen.
- **Context window:** **1M tokens total** (official Mistral docs model card — **BenchLM now concurs 1M at 2026-10-10**, outweighing AA's earlier 524K hosted-preview listing). AA-LCR 81.3% = first measured long-context evidence.
- **Modalities:** Text + image in (1.6B vision encoder; PDF document QnA supported); text out. Reasoning (hybrid instruct-and-reasoning MoE); tool calls; JSON/structured outputs.
- **Pricing (as of 2026-11-08):** **$0.70 in / $2.10 out / $0.07 cached per 1M** (2026-10-29 open-weight announcement repriced from $1.36/$4.18 list — **BenchLM price registry Nov 5 notes model/API/OpenRouter pages still showed old list at 14:20 UTC Oct 29**). Weights open (license per announcement repo).
- **Architecture:** 1.05T total / 52B active MoE; 1.6B vision encoder. **Open-weights license announced but not yet published (weights end of Oct 2026).** 1.05T total / 52B active, granular MoE.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-05) + official Mistral sources. **Average of 24 qualifying raters: 85.2 Overall** (Tool 82.8, Reasoning 82.8, Context 92.9, Multimodal 83.4, Coding 83.8). Queue: 85.2. Step 5 Preview: 67. GLM 5.3 Flash: 75. My original: 64. **OPEN-WEIGHT (weights dropped Oct 29); 24 BENCHMARKS ONLY (2ND-THINNEST); HALLUCINATION 28.2% (2ND-LOWEST IN SERIES); PRICING ANOMALY ON ANNOUNCEMENT DAY.**

Agent / tool use:

- Cybench: **93.0%** (vendor); b3 Agent Security: **97.1%** (vendor); Cyber Misuse Refusal: **96.6%** (vendor) — **three strong security-agentic figures, all vendor-run** (GLM / Step 5)
- CyberGym-E2E-AA: **79.4%** (AA); CWE-Bench-AA: **58.3%**; AA Cyber Index: **50.9%**; DeepsecBench-AA: **15.0%** (GLM / Step 5)
- BrowseComp: **84.5%** (vendor) — strongest non-security figure (GLM / Step 5)
- AA AutomationBench: **59.9%** (AA) / **57.8%** (Nov 5 re-read) (GLM / Step 5)
- Finance Agent v2: **54.7%** (Vals) (GLM / Step 5)
- Finch: **73.3%** (vendor) (GLM / Step 5)
- GDPval-AA: **1,424 Elo** (AA) / **46.1-46.2% normalized** (GLM / Step 5)
- AA Briefcase: **1,393 Elo** (AA) / **1,348 Elo** (Nov 5 re-read — drift) (GLM)
- AA TB 4.0: **26.8%** (AA) / **24.7%** (Nov 5 re-read) (GLM)
- AA GDP.pdf: **18.6%** (AA) / **17.6%** (Nov 5 re-read) (GLM)
- AA Cyber Index: **50.9%**; CWE-Bench-AA: **58.3%**; DeepsecBench-AA: **15.0%**; CyberGym-E2E-AA: **79.4%** (AA corroboration of vendor 82%) (GLM)
- SWE-Atlas QnA: **59.4%** (Mistral blog); Combined Coding Agent Index: **49.8%** (Mistral blog); FrontierCode 2.0: **19.7%** (Cognition — weak) (GLM / Step 5)
- Cybench: **93.0%** (vendor — among highest open-weight scores) (GLM / Step 5)
- **TB 2.0/2.1, τ²/τ³-Banking, vendor GDPval, MCP-Atlas, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **2 of 3 frontier refs unmeasured; AA Agentic Index absent**

Reasoning / knowledge:

- AA-HLE: **35.0%** (AA independent — fills HLE gap; **under 40% bar**) (GLM / Step 5)
- AA-LCR v1.1: **81.3%** (AA — fills long-context gap; strong) (GLM / Step 5)
- AA Intelligence Index: **38.4** (AA current board) / **26.1%** (Nov 5 — **AA Index v4.3.2→v5.0-class rebase**, documented, never averaged) (GLM)
- CritPt: **10.6%** (AA) / **10.0%** (Nov 5 re-read) (GLM)
- AA-Omniscience: **25.8% accuracy / 41.9% non-hallucination / −5.3 index** (AA) / **26.0% accuracy / 28.2% hallucination / +5.1 index** (Nov 5 re-read — **index flipped sign on re-measurement; 41.9% row gone, both cited**) (GLM) / **index 5.1, accuracy 26.0%, hallucination 28.2% (2ND-LOWEST HALLUCINATION IN SERIES, behind Grok 4.7's 20.0%)** (Step 5)
- GPQA Diamond: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **primary frontier reference missing**
- STEMBench: **2.50** (Ulam audit) (GLM / Step 5)
- Design Arena Website: **1,259 Elo** (GLM / Step 5)
- Surge AI blind human coding eval: **3.74/5, 2nd of 5** (Mistral blog; behind Opus 5 at 4.22) (GLM)
- **GPQA, HLE (vendor), AA-LCR (vendor), MRCR, ARC-AGI, AIME, FrontierMath, MMLU-Pro: NO VERIFIED PUBLIC SCORE** — **ALL 5 REASONING REFERENCES UNMEASURED** (GLM / Step 5)

Coding:

- Vibe Code Bench v1.1: **78.40%** (Vals independent — fills gap; strong) (GLM / Step 5)
- AA-SciCode: **54.2%** (AA) (GLM / Step 5)
- DeepSWE v1.1: **61.7%** (Mistral blog / AA) (GLM)
- SWE-Atlas QnA: **59.4%** (Mistral blog) (GLM)
- FrontierCode 2.0: **19.7%** (Cognition — weak) (GLM / Step 5)
- Combined Coding Agent Index: **49.8%** (Mistral blog) (GLM)
- **SWE-bench Verified/Pro, LiveCodeBench, AA-SciCode (Step 5), DeepSWE (Step 5), AA Coding Index, SWE-bench Pro: NO VERIFIED PUBLIC SCORE** — **85%, 74%, 70%, 55% refs all unmeasured** (GLM / Step 5)

Cybersecurity / safety:

- AA Cyber Index: **top-5 global rank, leads open-weight non-China models** (Mistral blog) (GLM)
- CyberGym-E2E: **82%** (Mistral blog — highest of any model); B3 AI Security Benchmark (Lakera): **93.3% attack resistance**; KORA: **1.691/2** (GLM / Step 5)
- Cyber Misuse Refusal: **96.6%** (vendor); b3 Agent Security: **97.1%** (GLM / Step 5)

Multimodal:

- AA-MMMU-Pro: **76.4%** (AA independent — first measured vision evidence, solid) (GLM)
- Dense 200 (visual grounding): **42%** vs GPT-6 Astra 41% (Mistral blog) (GLM)
- MMMU-Pro: **78.1%** (AA) (Step 5)
- Design Arena Website: **1,256 Elo** (Step 5) / **1,259 Elo** (GLM)
- **Text + image in (PDF document QnA supported); text out; NO VIDEO/AUDIO INPUT CONFIRMED** (GLM / Step 5)
- **CharXiv, ExtractBench, BabyVision, ZeroBench: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)

Long context:

- 1M window (official Mistral docs — **BenchLM now concurs 1M at 2026-10-10**, outweighing AA's 524K); AA-LCR: **81.3%** (AA — first measured long-context evidence, strong) (GLM / Step 5)
- **NO MRCR / RULER / GRAPHWALKS VERIFIED** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 24 qualifying raters = **85.2 Overall** (Tool 82.8, Reasoning 82.8, Context 92.9, Multimodal 83.4, Coding 83.8). Queue: 85.2. Step 5 Preview: 67. GLM 5.3 Flash: 75. My original: 64. **OPEN-WEIGHT (Oct 29); 24 BENCHMARKS (2ND-THINNEST); HALLUCINATION 28.2% (2ND-LOWEST IN SERIES); PRICING ANOMALY ON ANNOUNCEMENT DAY; ALL REASONING REFS UNMEASURED.**

- **Tool use: 65/100.** (was 60) Cybench **93.0%**, b3 Agent Security **97.1%**, Cyber Misuse Refusal **96.6%**, CyberGym-E2E-AA **79.4%**, BrowseComp **84.5%**, Finance Agent **54.7%**, GDPval-AA **1,424 Elo (46.2%)**, AA AutomationBench **59.9%**, AA Cyber Index **50.9%**, CWE-Bench-AA **58.3%**, Finch **73.3%**. **Capped by:** AA TB 4.0 **24.7-26.8%**; GDP.pdf **17.6-18.6%**; DeepsecBench **15.0%**; **NO TB 2.0/2.1, τ²/τ³-Banking, MCP-Atlas, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index** — 2 of 3 frontier refs unmeasured; AA Agentic Index absent; vendor-run security figures.
- **Reasoning: 58/100.** (was 55) AA-HLE **35.0% (FAILS 40%+ BAR)**; AA-LCR **81.3% (strong)**; AA Index **38.4 / 26.1% (v5.0 rebase)**; CritPt **10.0-10.6%**; AA-Omniscience **index +5.1 / −5.3 (FLIP ON RE-MEASUREMENT), accuracy 26.0%, hallucination 28.2% (2ND-LOWEST IN SERIES)**; STEMBench **2.50**. **Capped by: GPQA, HLE (vendor), MRCR, ARC-AGI, AIME, FrontierMath, MMLU-Pro — ALL 5 REASONING REFS UNMEASURED**; AA-Omniscience flip on re-measurement (index sign change, 41.9% row gone).
- **Context window: 95/100.** (was 75) **1M WINDOW (official Mistral docs — BenchLM concurs 2026-10-10, outweighs AA 524K)**; AA-LCR **81.3% (strong, first measured evidence)**. **Held at tier floor (not 97+): NO MRCR/GraphWalks/RULER ≥98% retrieval verification.**
- **Multimodal: 72/100.** (was 60) Text + image in (PDF QnA); AA-MMMU-Pro **76.4%** (AA independent); Dense 200 visual grounding **42%** (vs Astra 41%); MMMU-Pro **78.1%** (AA). **Capped by:** NO video/audio input; visual suite = 2 benchmarks; text-only output; Design Arena **1,259 Elo**.
- **Coding: 72/100.** (was 72) Vibe Code **78.40% (Vals, strong)**; AA-SciCode **54.2%**; DeepSWE **61.7%**; SWE-Atlas **59.4%**; Combined Coding Agent Index **49.8%**; FrontierCode 2.0 **19.7% (weak)**; Surge AI blind coding **3.74/5, 2nd/5** (behind Opus 5 4.22). **Capped by:** NO SWE-V/Pro/LiveCodeBench/AA-SciCode (Step 5)/DeepSWE (Step 5)/AA Coding Index/SWE-Pro — **85%, 74%, 70%, 55% refs all unmeasured**.
- **Cost efficiency: 92/100.** (was 85) **$0.70/$2.10 per 1M** (post-announcement rate); **90% cache discount ($0.07)**; **open weights = self-hosting escape**. **Held at 92 (not higher): BenchLM price registry notes 7 of 111 ranked models cost same/less AND score higher — rate card NOT competitive on price-per-capability**; pricing history unstable on announcement day (old $1.36/$4.18 still on Mistral pages/OpenRouter at 14:20 UTC Oct 29).
- **Overall Score: 72/100.** (was 64) Half-up mean of (65 + 58 + 95 + 72 + 72) / 5 = 362 / 5 = 72.4 → **72**. **Below queue (85.2), average of 24 qualifying raters (85.2).** Best-fit: **Most factually reliable open-weight model in series after Grok 4.7** — **hallucination 28.2% (2ND-LOWEST IN SERIES)** at $0.70/$2.10 with 1M window + newly open weights. **Three cautions:** (1) **WEAK ON EVERY CAPABILITY BENCHMARK** (AA Index 26.1%, CritPt 10.0%, FrontierCode 19.7%); (2) **24 benchmarks, NO GPQA/HLE/SWE-V/AGENTIC INDEX — most dimensions rest on 1-2 rows, 67 is floor on evidence**; (3) **BenchLM notes 7 cheaper-or-equal models score higher — rate card only attractive because weights now open.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 67), GLM 5.3 Flash (2026-11-05, Overall 75) + official Mistral sources (Mistral Large 4 launch posts, open-weight announcement, API pricing, BenchLM price registry). **Average of 24 qualifying raters: 85.2 Overall.** Queue: 85.2. **Critical findings:** Open-weight (weights dropped Oct 29); **hallucination 28.2% (2ND-LOWEST IN SERIES, behind Grok 4.7 20.0%)**; Cybench 93.0%, CyberGym-E2E 82%, B3 Security 93.3%; **PRICING ANOMALY: Oct 6 $0.68/$2.09; Oct 29 $0.70/$2.10; but at 14:20 UTC Oct 29 Mistral pages/OpenRouter still showed $1.36/$4.18**; **ALL 5 REASONING REFS UNMEASURED (GPQA, HLE, MRCR, ARC-AGI, FrontierMath)**; AA Intelligence Index 26.1% (v5.0); CritPt 10.0%; AA-Omniscience flip on re-measurement (index sign change, 41.9% row gone); 24 benchmarks only (2nd-thinest); BenchLM: 7 cheaper-or-equal models score higher.
- Reference URLs:
  - [Mistral AI — Mistral Large 4 is now open weight (primary source; pricing and rate history)](https://mistral.ai/news/mistral-large-4-oss/)
  - [Mistral AI — Introducing Mistral Large 4 (Cybench row)](https://mistral.ai/news/mistral-large-4/)
  - [BenchLM — Mistral Large 4 benchmark scores (24 rows, 52.54/100, #95/1015)](https://benchlm.ai/models/mistral-large-4)
  - [Artificial Analysis — Mistral Large 4](https://artificialanalysis.ai/models/mistral-large-4)
  - [Vals AI — Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code)
  - [Vals AI — Finance Agent v2](https://www.vals.ai/benchmarks/fabv2)
  - [Cognition — FrontierCode 2.0](https://cognition.com/blog/frontier-code-2.0)
  - [OpenRouter — Mistral Large 4 benchmarks](https://openrouter.ai/mistralai/mistral-large-4-0/benchmarks)
  - [STEMBench120 snapshot audit (Ulam)](https://www.ulam.ai/stembench#full-run-results)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---