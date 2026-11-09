# GPT-6.1 Sol — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (Max effort tier) — **CURRENT FLAGSHIP TIER**
- **Short description:** OpenAI's 6.1-generation `sol` variant — **#4-ranked of 1009 on BenchLM (85.27)**, ahead of GPT-6.1 Terra (80.46) and GPT-5.6 Sol (74.83), second only to GPT-6 Astra (86.07) within OpenAI's lineup. **Standout: only perfect FrontierMath Tier 4 score in research series (100.000%) paired with cheapest durable rate card of any top-5 model ($2/$10).**
- **Provider / access:** OpenAI API (`gpt-6.1-sol`), Microsoft Azure, AWS Bedrock, **OpenCode Zen (`opencode/gpt-6-1-sol` at $2/$10/$0.10)**, OpenRouter. Responses API required for tool calling; Chat Completions supported only without tool calls. No Free ID on Zen — paid only.
- **Release / knowledge:** 2026-09-29 release (DevDay 2026); **knowledge cutoff: April 2026** (llm-stats).
- **IDs:** `openai/gpt-6.1-sol` (OpenAI API, OpenRouter); `opencode/gpt-6-1-sol` (Zen). No Free tier.
- **Context window:** **1,050,000 tokens total / 128,000 max output** (OpenRouter, DataCamp, aiblogly, Azure AI Foundry). **>272K input tokens: 2× input/cache, 1.5× output for full request** (Azure, Command Code confirm tiered window).
- **Modalities:** Text + image in; text out. Reasoning (effort: low→medium→high→xhigh→max, medium default; `ultra` 4-agent coordination on ChatGPT Work/Codex). Tool calls via Responses API; structured output via `response_format` JSON schema. **No native audio/video input or non-text output.** Ultrafast serving mode announced (up to 8× faster token generation).
- **Pricing (as of 2026-11-08):** ≤272K: **$2.00 in / $0.10 cached read / $2.50 cache write / $10.00 out per 1M**. >272K: **$4.00 in / $0.20 cached / $15.00 out** (2× input/cache, 1.5× output). **$0.72 per Intelligence Index task (AA)** — by far cheapest frontier-tier figure in series vs GPT-6 Astra $3.66, Opus 5.5 $5.98. Batch/Flex 50% off. Fast 2×. Regional +10%. Blended AA ≈$4/1M. **Only 1 of 111 other ranked models costs same/less and scores higher (BenchLM price registry).** No free tier.
- **Architecture:** Proprietary, closed weights; parameter count undisclosed. Reasoning model with configurable effort; served variants include standard and Ultrafast.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-02) + official OpenAI sources. **Average of 32 qualifying raters: 91.2 Overall** (Tool 93, Reasoning 93.4, Context 94.6, Multimodal 81.5, Coding 93). Queue: 91.2. Step 5 Preview: 82. GLM 5.3 Flash: 84. My original: 82. **BEST VALUE: FrontierMath Tier 4 100%, $0.72/task.**

Agent / tool use:

- OSWorld 2.0 (offline, v2026.08.08, partial): **71.4%** at max effort (OpenAI/Vellum) — within 2.1 pts of Astra 73.5%, vs GPT-6 Sol 64.4%; **$1.30/task vs $9.30 for Astra**
- AutomationBench 1.0.6: **35.4%** medium / **~36.0%** higher (OpenAI, Zapier) — **+2.2 pts over Opus 5.5 at medium at ~1/3 cost ($0.30 vs $0.92/task)**; Sonnet 5.5 44.7% at $1.14/task
- GDP.pdf: **32.0%** (OpenAI/Surge AI via Vellum) — Astra SOTA 32.2%, Opus 5.5 28.8%, GPT-6 Sol 28.0%; ~$0.38/task
- AA Terminal-Bench 4.0: **56.1%** / $1.82 (AA independent, Oct 26) / **58.6%** max / $2.00 (AA effort table) — behind Kimi K3.1 Pro 67.2%, Sonnet 5.5 63.6%, Opus 5.5 63.2%, Astra 59.3%
- Terminal-Bench Science 0.1: **57.0%** (OpenAI) / **more than 2× GPT-6 Sol max** at $5.47/task vs $23.21 (Opus 5.5) / $23.80 (Astra); Astra tops at 68.1%
- AA AutomationBench: **64.9%** (vs **AutomationBench 36.1%** on OpenAI's own Zapier benchmark — **28.8pt gap between similarly-named benchmarks**) (Step 5)
- GDPval-AA: **1,608 Elo** / 54.8% normalized (AA) — under 1,750 frontier / **41.1** (GLM, low effort, no max-effort value)
- AA Briefcase: **1,555 Elo** (Step 5) / **1,557 Elo** (original)
- AA-AnalystAgent: **50.0%**; Hermes Bench: **73.9%**; Hermes Index: **57.1%** (Step 5)
- MazeBench: **17%**; GDP.pdf: **31.0%** (Step 5) / **32.0%** (GLM); ExploitGym: **35.1%**
- **Terminal-Bench 2.1, τ³-Banking, Claw-Eval, MCP-Atlas, Tau2/Tau3-Bench: no verified public score found** (Step 5 / GLM) — **three of methodology's frontier references uncheckable**

Reasoning / knowledge:

- **FrontierMath v2 Tier 4: 100.000%** (Epoch AI) — **only perfect score in entire research series**; Tiers 1-3: **93.684%**
- GPQA Diamond: **95.4%** (Epoch AI harness, max) / **95.1%** (Mercor single-shot, max) (GLM) — **no verified public score found** (Step 5) — **one frontier reference missing**
- HLE (AA lane): **52.9%**, #9 on AA-HLE (BenchLM, Oct 2026; Astra 54.7%, Fable 5.1 55.5% on Scale classic) / **47.4%** low effort (AA via OpenRouter) (GLM)
- ARC-AGI-1: **96.5%**; ARC-AGI-2: **94.2%**; **ARC-AGI-3: 52.7%** (Provider-Adapter run **96.18%** — **43.5pt harness gap**) (Step 5 / GLM)
- AA Intelligence Index v5.0: **55** (max, AA model page) / **51.8**, #7 of 74 scored (Command Code) / **48** medium (AA release comparison; Astra 52.7, GPT-6 Sol 47.6) / **54.5** (Step 5, highest of any OpenAI model here)
- AA-LCR: **83.0%** (AA) / **84.0%** low effort (GLM)
- CritPt: **31.7%** (AA) / **24.9%** low effort (GLM, no higher-effort value) — **joint-highest in batch** (Step 5)
- MLCR-AA: **38.3%** (Step 5) — **joint-highest in batch**
- AA-Omniscience: **index 42.0, accuracy 61.8%, hallucination rate 51.9%** (Step 5) — **second-best in batch** / **Factuality: 7.7% error rate low effort** (down from GPT-6 Sol 11.4%; within 1.9 pts of Astra) (GLM)
- HealthBench Professional (raw): **67.2%** / length-adj **64.2%** / Hard **36.2%** (OpenAI via DataCamp) (GLM)
- STEMBench: **2.76** (Ulam audit) (original)
- **MRCR: no verified public score found** (Step 5 / GLM) — **GPQA Diamond: no verified public score found** (Step 5)

Coding:

- DeepSWE v1.1: **71.9%** (OpenAI blog) / **75.2%** at high effort (OpenAI/Vellum) — **matches Astra 74.8%, above Sonnet 5.5 71.0%, Fable 5 xhigh 69.9%, GPT-6 Sol max 68.8%** (GLM)
- SWE-bench Verified: **87.3%** (Mercor mini-swe-agent, 1000 steps, max) (GLM) / **no verified public score found** (Step 5)
- SWE-bench Pro: **no verified public score found** (GLM / Step 5)
- LiveCodeBench: **no verified public score found** (GLM / Step 5)
- AA-SciCode: **54.2%** (AA run via MyClaw/Command Code; 53.2% low effort via OpenRouter; Opus 5.5 66.9%, Astra 56.5%) (GLM) / **54.2%** (Step 5) — **0.8pts under 55%+ frontier ref**
- FrontierCode: **49.1%** (AA via MyClaw; Opus 5.5 52.2%, Sonnet 5.5 45.8%) (GLM)
- AA Coding Agent Index: **54** (Lindy, vs GPT-6.1 Terra 48) (GLM)
- ScarfBench: **68.4%**; FrontierCode 2.0: **39.0%**; Bug Hunt Bench: **44.3 fixes**; Terminal-Bench-Science 0.1: **57.0%** (Step 5)
- **SWE-bench Verified/Pro, LiveCodeBench, AA Coding Index: no verified public score found** (Step 5) — **coding evidence unusually thin for #4-ranked model**

Multimodal:

- ExtractBench: **95.31%**; ExtractBench Pro: **12%** — **striking split against 95.31% standard** (Step 5)
- AA-MMMU-Pro: **86.0%** (Step 5 / GLM)
- ParseBench: **69.70%**; Design Arena: **1,315 Elo** (Step 5)
- **Text + image in only; no video/audio/PDF input; text out** — image-in only band (60-70)

Long context:

- **No MRCR / RULER / GraphWalks scores at window length published** (GLM)
- AA-LCR: **83.0%** (AA) / **84.0%** low effort (GLM)
- **>272K pricing step doubles input cost, making top of window economically impractical** (Step 5 / GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 32 qualifying raters = **91.2 Overall** (Tool 93, Reasoning 93.4, Context 94.6, Multimodal 81.5, Coding 93). Queue: 91.2. Step 5 Preview: 82. GLM 5.3 Flash: 84. My original: 82. **BEST VALUE: FrontierMath Tier 4 100%, $0.72/task.**

- **Tool use: 82/100.** (was 75) OSWorld 2.0 offline **71.4%** (near Astra 73.5%), AutomationBench **36.0%** (above Opus 5.5 at 1/3 cost), AA AutomationBench **64.9%**, TB-Science **57.0%**, AA TB 4.0 **56.1-58.6%**, GDP.pdf **32.0%**, AA Briefcase **1,555 Elo**, Hermes Bench **73.9%**. **Capped by:** **TB 2.1, τ³-Banking, Claw-Eval, MCP-Atlas, Tau2/Tau3: all missing**; GDPval-AA **1,608 Elo** (under 1,750 frontier); MazeBench **17%**; AA-AnalystAgent **50.0%**.
- **Reasoning: 94/100.** (was 90) **FrontierMath Tier 4 100.000% (only perfect in series)**, GPQA Diamond **95.4%** (Epoch/Mercor), HLE **52.9% #9**, ARC-AGI-2 **94.2%**, ARC-AGI-3 **52.7%** (Provider-Adapter **96.18%**), AA Intelligence Index **55/54.5** (highest OpenAI here), CritPt **31.7%** (joint-highest), MLCR-AA **38.3%** (joint-highest), AA-LCR **83-84%**, AA-Omniscience **61.8%/51.9%** (2nd best). **Capped by:** **GPQA Diamond missing (Step 5)**, **MRCR missing**, hallucination **51.9%**, ARC-AGI-3 harness gap **43.5pts**.
- **Context window: 97/100.** (was 95) **1.05M/128K** top-tier; AA-LCR **83-84%**. **Held at 97 (not 99-100) due to no MRCR/RULER/GraphWalks at window length and >272K surcharge doubling input cost.**
- **Multimodal: 70/100.** (was 70) Text + image in; ExtractBench **95.31%**, MMMU-Pro **86.0%**, Design Arena **1,315 Elo**, ParseBench **69.70%**. **Capped by:** no video/audio/PDF input, text-only output, **ExtractBench Pro 12% (striking split vs 95.31%)** — document extraction uneven. Methodology: +image in = 60-70 band ceiling.
- **Coding: 85/100.** (was 82) DeepSWE **75.2%** (matches Astra 74.8%), SWE-V **87.3%** (Mercor max), AA-SciCode **54.2%** (0.8pts under 55% ref), FrontierCode **49.1%**, ScarfBench **68.4%**, TB-Science **57.0%**. **Capped by:** SWE-V/Pro, LiveCodeBench, AA Coding Index **all unpublished**; AA-SciCode **54.2%** (under 55% ref); FrontierCode 2.0 **39.0%**.
- **Cost efficiency: 90/100.** (was 85) **$2/$10/$0.10** — cheapest durable top-5 rate card. **$0.72/task (AA) — by far cheapest frontier-tier**. Only 1 of 111 ranked models costs same/less and scores higher (BenchLM). **GPT-6.1 Terra ($1/$5) undercuts for lighter work.** Batch/Flex 50%. Regional +10%. No free tier. >272K surcharge.
- **Overall Score: 86/100.** (was 82) Half-up mean of (82 + 94 + 97 + 70 + 85) / 5 = 428 / 5 = 85.6 → **86**. **Below Step 5 Preview (82), GLM 5.3 Flash (84); below average of 32 qualifying raters (91.2) and queue (91.2).** Best-fit: **Default pick for frontier reasoning at sane price** — perfect FrontierMath Tier 4, $0.72/task, AA Index 55 (highest OpenAI). **Gaps are documentable, not fundamental:** missing GPQA Diamond, SWE-bench Verified, TB 2.1, MRCR — treat 86 as floor on evidence, re-score upward when harnesses publish. **Best value in corpus for STEM/formal verification.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 82), GLM 5.3 Flash (2026-11-02, Overall 84) + official OpenAI sources (GPT-6.1 Sol model docs, launch post, system card addendum, Vellum benchmarks, Benchmark Registry). **Average of 32 qualifying raters: 91.2 Overall.** Queue: 91.2. **Critical findings:** #4/1009 BenchLM; **FrontierMath Tier 4 100% (only perfect in series)**; $0.72/task (cheapest frontier); AA Index 55 (highest OpenAI); OSWorld 71.4% (near Astra); SWE-V 87.3% (Mercor); missing GPQA/MRCR/TB 2.1/SWE-V/Pro/LiveCodeBench/AA Coding Index; ExtractBench 95.31% vs Pro 12% split; >272K surcharge.
- Reference URLs:
  - [OpenAI — GPT-6.1 Sol model documentation (context, limits, pricing, tiers)](https://developers.openai.com/api/docs/models/gpt-6.1-sol)
  - [OpenAI — Introducing GPT-6.1 Sol (launch benchmark chart)](https://openai.com/index/introducing-gpt-6-1-sol/)
  - [OpenAI — GPT-6.1 Sol system card addendum](https://cdn.openai.com/pdf/38e3efcf-545e-44cd-99ec-2b7eb395f4cc/oai_GPT_6_1_Sol.pdf)
  - [BenchLM — GPT-6.1 Sol benchmark scores (45 rows, 85.27/100, #4/1009)](https://benchlm.ai/models/gpt-6-1-sol)
  - [Artificial Analysis — GPT-6.1 Sol](https://artificialanalysis.ai/models/gpt-6-1-sol)
  - [ARC Prize — published semi-private results for GPT-6.1 Sol](https://arcprize.org/results/openai-gpt-6-1-sol)
  - [Epoch AI — FrontierMath v2 leaderboard (source of the 100% Tier 4 score)](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Vellum — GPT-6.1 Sol Benchmarks Explained (GDP.pdf, OSWorld 2.0, DeepSWE tables)](https://www.vellum.ai/blog/gpt-6-1-sol-benchmarks-explained)
  - [Benchmark Registry — GPT-6.1 Sol (Mercor SWE-bench Verified, Epoch GPQA)](https://benchmarkregistry.org/models/10015)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---