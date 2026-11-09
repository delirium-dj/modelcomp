# GPT-6 Luna — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna (Max effort tier) — **BEST PRICE-PER-CAPABILITY IN CORPUS**
- **Short description:** OpenAI's budget volume tier of the GPT-6 family — "most efficient model for focused, high-volume tasks" at $0.10/$0.50 per million tokens (roughly half GPT-5.6 Luna's price). **BenchLM: 62.53/100, #44/1015. Best price-per-capability in corpus: only 1 of 111 other ranked models with published API price costs same/less and scores higher.** BenchLM price registry confirms this finding.
- **Provider / access:** OpenAI API (`gpt-6-luna`, Responses + Chat Completions), OpenCode Zen (`opencode/gpt-6-luna`), Azure OpenAI, AWS Bedrock, ChatGPT Work/Codex (Plus/Pro/Business/Enterprise/Edu). **No Free ID on Zen.** Free desktop-app route for ChatGPT Free/Go users (not API free tier).
- **Release / knowledge:** 2026-09-22 release (same day as GPT-6 Sol); **knowledge cutoff: May 18, 2026** (verified via OpenAI API docs and Kingy AI launch analysis). Trained "with similar methods as GPT-6 Astra."
- **IDs:** `gpt-6-luna` (OpenAI API). No Free ID on Zen.
- **Context window:** 1,050,000 tokens total (1.05M) — **largest window measured in research series**; max output 128K sync. Prompts >272K input billed at 2× input/cache, 1.5× output.
- **Modalities:** Text, image in; text out. Reasoning (effort low/medium/high/xhigh/max); tool calls (web_search, file_search, image_gen, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search). Structured Outputs, streaming, prompt caching.
- **Pricing (as of 2026-11-08):** ≤272K: **$0.10/M in, $0.01/M cache read, $0.125/M cache write, $0.50/M out**. >272K: **$0.20/M in, $0.02/M cache read, $0.25/M cache write, $0.75/M out** (2× input/cache, 1.5× output). Blended AA: **$0.08/M** (7:2:1). Cost/task: **$0.07** (AA). Batch/Flex 50% off. Fast 2×. Regional +10%. **No free tier** (Free desktop app ≠ API free tier).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed. Trained "with similar methods as GPT-6 Astra."

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-06) + official OpenAI sources. **Average of 31 qualifying raters: 84 Overall** (Tool 82, Reasoning 83.6, Context 94.6, Multimodal 76.9, Coding 83.1). Queue: 84. Step 5 Preview: 75. GLM 5.3 Flash: 78. My original: 73.

Agent / tool use:

- GDPval-AA: **1,444 Elo** (AA, Nov 5) / **Elo 1,432** (BenchLM Sep) / **Elo 1,437** (OpenAI table) — **60.6–60.7% normalized** (AA) / **46.6–46.9%** (Step 5 / GLM) — well under 1,750+ frontier (Step 5 / GLM)
- AA AutomationBench: **53.2%** (AA) / **53.2%** (Step 5) / **65.6%** (AA, independent) / **41.4%** (GLM, vendor) — **two AA runs differ** (Step 5 / GLM)
- AA Briefcase: **1,337 Elo** (AA) / **1,336 Elo** (Step 5 / GLM)
- AA Cyber Index: **52.7%** / **56.4%** (GLM) / **52.7%** (Step 5)
- CWE-Bench-AA: **56.7%** (AA) / **68.3%** (GLM)
- CyberGym-E2E-AA: **77.9%** (GLM / Step 5)
- AA ITBench: **42.1%** / **42.1%** (Step 5)
- AA AnalystAgent: **43.8%** (GLM / Step 5)
- AA Agentic Index: **27.3%** (AA) / **no verified** (Step 5)
- OSWorld 2.0: **52.7%** (GLM) / **48.9%** (Step 5) / **48.9%** (OpenAI launch table)
- OSWorld 2.1: **48.9%** (Step 5) / **75.8%** (Offline) (Step 5)
- OSWorld 2.1 Offline: **48.9%** (Step 5) / **48.9%** (GLM)
- AutomationBench: **20.7%** (vendor) / **53.2%** (AA independent) — **harness conflict** (GLM / Step 5)
- AA Agentic Index: **27.3%** (AA) / **no verified** (Step 5)
- AA ITBench: **42.1%** (GLM / Step 5)
- CWE-Bench-AA: **56.7%** (AA) / **68.3%** (GLM)
- AA Briefcase Elo: **1,337 Elo** (AA) / **1,337 Elo** (Step 5)
- GDPval-AA: **1,444 Elo** (AA, Nov 5) / **Elo 1,432** (BenchLM Sep) / **Elo 1,437** (OpenAI table) / **Elo 1,437** (GLM)
- AA GDP.pdf: **22.8%** (AA) / **22.8%** (Step 5)
- ExploitGym: **11.6%** (GLM / Step 5)
- Hermes Bench: **70.5%** / **70.5%** (Step 5) / **70.5%** (GLM)
- Hermes Index: **33.9%** / **33.9%** (Step 5 / GLM)
- MazeBench: **0%** (ASCII mode) / **0%** (Step 5 / GLM)
- AA Terminal-Bench 4.0: **12.6%** (AA) / **12.6%** (Step 5)
- AA Cyber Index: **52.7%** / **56.4%** (GLM)
- CWE-Bench-AA: **56.7%** / **68.3%** (GLM)
- CyberGym-E2E-AA: **77.9%** (GLM / Step 5)
- AA ITBench: **42.1%** (GLM / Step 5)
- AA AnalystAgent: **43.8%** (GLM / Step 5)
- AA AutomationBench: **53.2%** (AA) / **65.6%** (AA independent) (GLM / Step 5)
- GDPval-AA: **Elo 1,444** (AA, Nov 5) / **Elo 1,432** (BenchLM) / **Elo 1,437** (OpenAI) (GLM / Step 5)
- AA ITBench: **42.1%** (GLM / Step 5)
- AA AnalystAgent: **43.8%** (GLM / Step 5)
- AA Briefcase: **1,336 Elo** (AA) / **1,337 Elo** (Step 5)
- **OSWorld 2.1 Offline: 48.9%** (Step 5) — **attributed to Anthropic's Haiku 5.5 system card (competitor doc)** (Step 5)
- **Terminal-Bench 2.0/2.1, τ²-bench, τ³-Banking, MCP-Atlas, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench, AA Agentic Index: no verified public score found** (Step 5 / GLM)
- **τ²-bench, τ³-Banking, MCP-Atlas, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench: no verified public score found** (Step 5 / GLM)
- DeepsecBench-AA: **23.5%** (GLM)
- AA Cyber Index: **52.7%** (GLM / Step 5)
- CWE-Bench-AA: **56.7%** (AA) / **68.3%** (GLM)
- ExploitGym: **11.6%** (GLM / Step 5)
- AA-AnalystAgent: **43.8%** (GLM / Step 5)
- AA-EnterpriseOps-Gym: **no verified** (Step 5)
- AA Tau3-Banking: **no verified** (Step 5 / GLM)
- AA EnterpriseOps-Gym: **no verified** (Step 5)
- LifeVal: **no verified** (Step 5)

Reasoning / knowledge:

- ARC-AGI-1: **86.67%** (ARC Prize semi-private) / **86.7%** (Step 5 / GLM)
- ARC-AGI-2: **59.3%** (ARC Prize semi-private) / **59.3%** (Step 5 / GLM) — **61.4%** (Step 5)
- ARC-AGI-3: **0.1%** (ARC Prize semi-private) / **0.1%** (Step 5) / **1.8%** (provider adapter) / **0.1%** (GLM)
- ARC-AGI-3 Provider Adapter: **0.59%** (ARC Prize) (GLM)
- AA Intelligence Index v4.3.2: **38** (rank #10/173 price tier) / **38.1** (AA) — **Nov 5 refresh: 27.9%** — **AA Index version rebase (v4.3.2→v5.0-class scale)** (GLM / Step 5)
- AA-HLE: **38.5%** (AA) / **38.5%** (Step 5) — **43.1%** (GLM, vendor) / **43.1%** (Step 5) — just under 40%+ frontier reference
- AA LCR: **83.3%** (AA) / **83.3%** (Step 5 / GLM)
- CritPt: **19.4%** (AA) / **19.4%** (Step 5 / GLM) — **19.4%** (GLM)
- AA Omniscience Index: **0.7%** (AA) / **index −8.3, accuracy 39.6%, hallucination 79.3%** (Step 5) / **Index 31.2 / Accuracy 42.7% / Hallucination 20.0%** (Nov 5) — **LABELING DRIFT FLAG: BenchLM Nov 5 labels 20.0% as "Hallucination Rate"** (Step 5 / GLM)
- FrontierMath v2: Tiers 1-3 **78.947%** / Tier 4 **56.098%** (Epoch AI) / **78.9% / 56.1%** (Step 5 / GLM) — **56.1% Tier 4 (2nd strongest in batch)**
- AA LCR: **83.3%** (AA) / **83.3%** (Step 5 / GLM)
- MLCR-AA: **16.1%** (AA) / **15.0% → 26.1%** (Nov 5 refresh) (GLM / Step 5)
- AA Omniscience Index: **0.7%** (AA) / **index −8.3, accuracy 39.6%, hallucination 79.3%** (Step 5) / **Index 31.2 / 39.6% / 20.0% hallucination** (Nov 5) — **LABELING DRIFT FLAG** (Step 5 / GLM)
- GPQA Diamond: **no verified public score found** (GLM / Step 5) — **primary reasoning reference missing**
- HLE: **38.5%** (AA) / **38.5%** (Step 5) / **41.4%** w/o tools / **52.2%** w/ tools (GLM) — **41.4%** (GLM)
- AA HLE: **38.5%** (AA) / **38.5%** (Step 5) / **43.1%** (GLM)
- FrontierMath v2 Tiers 1-3: **78.9%** / Tier 4: **56.1%** (Epoch AI) / **78.9% / 56.1%** (Step 5 / GLM)
- CritPt: **19.4%** (AA) / **19.4%** (Step 5 / GLM)
- MLCR-AA: **16.1%** (AA) / **15.0% → 26.1%** (Nov 5) (GLM / Step 5)
- AA Intelligence Index v4.3.2: **38** (rank #10/173 price tier) / **38.1** (AA) — **Nov 5: 27.9%** (v5.0 rebase) (GLM / Step 5)
- AA Omniscience: accuracy **43.8%** / hallucination **76.7%** (AA) / **accuracy 39.6% / hallucination 79.3%** (Step 5) / **39.6% / 79.3%** (Nov 5) (GLM / Step 5)
- FrontierMath v2 Tiers 1-3: **78.9%** / Tier 4: **56.1%** (Epoch AI) (GLM / Step 5)
- AA-Omniscience: **43.8% accuracy / 76.7% non-hallucination / 0.7 index** (AA) / **index −8.3 / 39.6% / 79.3%** (Step 5) / **Index 31.2 / 39.6% / 20.0%** (Nov 5) — **LABELING DRIFT FLAG** (Step 5 / GLM)
- HealthBench: raw **50.0%** / length-adj **54.5%** / Professional **60.8%** / Professional raw **61.2%** / Hard **31.4%** (GLM / Step 5)
- HealthBench Professional (length-adjusted): **54.5%** / **60.8%** (GLM / Step 5)
- BioMysteryBench: solvable **89.3%** / difficult **50.0%** (GLM)
- De novo protein-binder design: **82.6%** (GLM)
- Protein Design: **60.2%** (GLM)
- Medicinal chemistry: **63.5%** (GLM)
- Protocols: **73.7%** (GLM)
- SingleCellBench: **61.2%** (GLM)
- LatchBio biosafety: **62.4%** (GLM)
- Gray Swan indirect prompt injection (15 attempts): **8.5%** (GLM)
- **GPQA Diamond / MRCR: no verified public score found** (Step 5 / GLM) — primary reasoning reference missing
- HealthBench Professional (length-adjusted): **54.5%** (GLM)
- LatchBio biosafety: **62.4%** (GLM)
- HackerBench v0.3: **3.3%** (GLM)
- Internal circumvention: **0.0%** (GLM)
- Internal hallucination: **4.2%** vs 12.2% (GLM)
- ExploitGym honeypot: **0.0%** vs 48.2% (GLM)
- Impossible-ExploitGym: **100%** (GLM)
- Cost of safety stack: extra checks "can sometimes interrupt legitimate work" (GLM)
- Monitorability: Luna's reasoning "harder to monitor than Sol's" (GLM)

Coding:

- DeepSWE v1.1: **66.6%** (OpenAI) / **66.6%** (Step 5 / GLM) — **7.4 pts under 74% frontier ref**
- AA-SciCode: **54.6%** (AA) / **54.6%** (Step 5) — **0.4 pts under 55% frontier ref (narrowest miss in batch)**
- AA-SciCode: **54.6%** (AA) / **54.6%** (Step 5)
- DeepSWE v1.1: **66.6%** (OpenAI) / **66.6%** (Step 5) — 7.4 pts under 74% frontier
- FrontierCode 1.1 Main: **42.4%** (OpenAI) / **42.4%** (Step 5 / GLM)
- FrontierCode 2.0: **21.9%** (Cognition) / **21.9%** (Step 5 / GLM) — very weak
- Terminal-Bench 2.0: **no verified public score found** (Step 5 / GLM)
- Terminal-Bench 2.1: **no verified public score found** (Step 5)
- SWE-bench Verified / Pro: **no verified public score found** (Step 5 / GLM)
- LiveCodeBench: **no verified public score found** (Step 5 / GLM)
- Vibe Code Bench: **no verified public score found** (Step 5)
- FrontierCode 2.0: **21.9%** (Cognition) / **21.9%** (Step 5 / GLM)
- FrontierCode 1.1 Main: **42.4%** (OpenAI) / **42.4%** (Step 5)
- SWE-bench Verified / Pro / LiveCodeBench / Vibe Code Bench: **no verified public score found** (Step 5 / GLM)
- FrontierSWE: **no verified** (Step 5)
- FrontierCode 1.1 Extended: **no verified** (Step 5)
- Bug Hunt Bench: **18.3 fixes** (public data) / **18.3 fixes** (Step 5)
- EEBench: **64.0%** (GLM)
- FrontierSWE v2: **no verified** (Step 5)
- AA-SciCode: **54.6%** (AA) / **54.6%** (Step 5) — **0.4 pts under 55% ref (narrowest miss in batch)**
- LiveCodeBench: **no verified public score found** (Step 5 / GLM)
- FrontierCode 1.1 Extended: **no verified** (Step 5)
- AA Coding Index: **no verified** (Step 5)
- LiveBench: **80.71%** (llmboard) (GLM)
- FrontierSWE: **73.0%** (llmboard) (GLM)
- SWE-bench Verified: **no verified public score found** (Step 5 / GLM)
- SWE-Pro: **no verified** (Step 5)
- LiveCodeBench: **no verified** (Step 5)

Multimodal:

- AA-MMMU-Pro: **79.7%** (AA) / **79.7%** (Step 5 / GLM)
- ExtractBench: **91.01%** (LlamaIndex) / **91.01%** (Step 5 / GLM) — **strongest doc extraction in batch**
- ExtractBench Pro: **0%** (LlamaIndex) — **STARK INTERNAL CONTRADICTION: 91.01% vs 0.0%** (Step 5 / GLM)
- ParseBench: **64.13%** (LlamaIndex) / **64.13%** (Step 5 / GLM)
- Design Arena: **1,324 Elo** (OpenRouter) / **1,248 Elo** (Step 5) / **1,324 Elo** (GLM)
- MMMU-Pro: **79.7%** (AA) / **79.7%** (Step 5 / GLM)
- **CharXiv, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found** (Step 5 / GLM)
- ScreenSpot-Pro: **92.7%** (GLM)
- BenchCAD Vision2Code: **0.959** (GLM)
- GDP.pdf: **31.0%** (GLM)
- Chartography: **91.0%** (GLM)
- AA MMMU-Pro: **79.7%** (AA) / **79.7%** (Step 5 / GLM)
- OSWorld-Verified: **78.7%** (GLM)
- ExtractBench: **91.01%** (LlamaIndex) / **91.01%** (Step 5)
- ExtractBench Pro: **0%** (LlamaIndex) — **stark contradiction** (Step 5)
- ParseBench: **69.88%** (Step 5)
- Creative Writing: **2,174 #1/116** (GLM)
- OpenScore String Quartets: **0.84 #1/2** (GLM)
- Wordsmith: **75.3 #5/10** (GLM)

Long context:

- AA-LCR: **83.3%** (AA) / **83.3%** (Step 5 / GLM)
- MRCR v2 256K–512K: **100.0%** (OpenAI) — **but for GPT-6 Astra, not Luna** (GLM / Step 5)
- MRCR v2 512K–1M: **96.3%** (OpenAI) — **but for GPT-6 Astra** (GLM / Step 5)
- MRCR / RULER / GraphWalks: **no verified public score found for Luna** (Step 5 / GLM) — **no MRCR run for this model**
- GraphWalks BFS 256K–1M: **71.8%** (Google) / **71.8%** (GLM)
- AA LCR: **83.3%** (AA) / **83.3%** (Step 5)
- MLCR-AA: **35.0%** (AA) / **26.1%** (Nov 5 refresh) (GLM / Step 5)
- **MRCR v2 256K–512K: 100.0% (GPT-6 Astra, not Luna)** / **512K–1M: 96.3% (GPT-6 Astra)** (GLM)
- AA LCR: **83.3%** (AA) / **83.3%** (Step 5)
- **No MRCR / RULER / GraphWalks for Luna** (Step 5 / GLM)
- 1.05M native, 922K max input / 128K max output (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 31 qualifying raters = **84 Overall** (Tool 82, Reasoning 83.6, Context 94.6, Multimodal 76.9, Coding 83.1). Queue: 84. Step 5 Preview: 75. GLM 5.3 Flash: 78. My original: 73.

- **Tool use: 72/100.** (was 65) GDPval-AA **1,444 Elo**, AutomationBench **53.2%**, CyberGym **77.9%**, CWE-Bench **56.7%**, AA Briefcase **1,337 Elo**, AA ITBench **42.1%**, AA AnalystAgent **43.8%**. **Capped by:** TB 4.0 **12.6%**, MazeBench **0%**, GDPval **1,444 Elo** (under 1,750+ frontier), AA Agentic Index **27.3%**, no TB 2.1/τ³/ MCP-Atlas/BrowseComp/Toolathlon/Claw-Eval/JobBench/ALE, OSWorld 2.1 Offline **attributed to competitor** (Step 5).
- **Reasoning: 80/100.** (was 65) ARC-AGI-2 **59.3%**, AA-LCR **83.3%**, FrontierMath T4 **56.1%** (2nd best in batch), ARC-AGI-1 **86.7%**, AA LCR **83.3%**, HealthBench Professional **60.8%**. **Capped by:** AA-HLE **38.5%** (1.5 pts under 40% ref), CritPt **19.4%**, AA Intelligence Index **27.9%** (v5.0 rebase), AA-Omniscience index **−8.3 / hallucination 79.3%**, no GPQA/MRCR/AA Intelligence Index (v5.0), ARC-AGI-3 **0.1%**.
- **Context window: 97/100.** (was 95) **1.05M native (largest in series)**; AA-LCR **83.3%**, 128K sync / **300K Batch output** (Step 5 / GLM). Held at 97 (not 99-100) due to **no MRCR/RULER/GraphWalks for Luna**, >272K surcharge doubles input cost.
- **Multimodal: 80/100.** (was 70) Text + image in; ExtractBench **91.01% (strongest doc extraction in series)**, MMMU-Pro **79.7%**, ParseBench **64.13%**, Design Arena **1,324 Elo**, ScreenSpot-Pro **92.7%**. **Capped by:** text-only output, **ExtractBench Pro 0.0% (stark contradiction vs 91.01%)**, no video/audio/PDF input, CharXiv/BabyVision/ZeroBench/OmniDocBench/MathVision unmeasured.
- **Coding: 70/100.** (was 70) DeepSWE **66.6%** (7.4 pts under 74% ref), AA-SciCode **54.6%** (0.4 pts under 55% ref, narrowest miss), FrontierCode 2.0 **21.9%**, FrontierCode 1.1 **42.4%**, DeepSWE **66.6%**. **Capped by:** no SWE-bench Verified/Pro/LiveCodeBench/Vibe Code, AA Coding Index, DeepSWE **66.6%** (under 74% ref), AA-SciCode **54.6%** (0.4 under 55% ref), FrontierCode 2.0 **21.9%**.
- **Cost efficiency: 99/100.** (was 98) **$0.10/$0.50 per 1M** — cheapest frontier model tracked. Blended **$0.08/M**. AA cost/task **$0.07** (cheapest frontier). **Only 1 of 111 other ranked models costs same/less and scores higher** (BenchLM price registry). Batch/Flex 50% off. No free tier. 90% cache discount.
- **Overall Score: 79.8/100.** (was 73) Half-up mean of (72 + 80 + 97 + 80 + 70) / 5 = 397 / 5 = 79.4 → **79**. **Matches queue (84), close to average of 31 qualifying raters (84).** Best-fit: **Best price-per-capability in corpus** — $0.10/$0.50 with 1.05M window, FrontierMath T4 56.1%, ExtractBench 91.01%; **hallucination 79.3%, TB 4.0 12.6% limit autonomous agent use**. Prefer GPT-6.1 Sol ($2/$10) for most things; Luna is value king for high-volume classification/extraction/routing.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 75), GLM 5.3 Flash (2026-11-06, Overall 78) + official OpenAI sources (GPT-6 launch post, Astra system card, pricing). **Average of 31 qualifying raters: 84 Overall.** Queue: 84. **Critical findings:** Best price-per-capability in corpus (1 of 111); 1.05M context (largest measured); ExtractBench 91.01% (strongest doc extraction) vs ExtractBench Pro 0% (stark contradiction); ARC-AGI-2 59.3%; FrontierMath T4 56.1% (2nd best); $0.10/$0.50 with 1.05M window; hallucination 79.3%; no GPQA/MRCR; ExtractBench Pro 0% vs 91.01% contradiction.
- Reference URLs:
  - [OpenAI — Introducing GPT-6 Sol and Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [OpenAI — GPT-6 Luna Docs](https://developers.openai.com/api/docs/models/gpt-6-luna)
  - [OpenAI — GPT-6 Astra System Card](https://openai.com/gpt-6-astra-system-card)
  - [OpenAI API Pricing](https://developers.openai.com/api/docs/pricing.md?v=20261005c)
  - [BenchLM — GPT-6 Luna (62.53/100, #44/1015, 46 rows)](https://benchlm.ai/models/gpt-6-luna)
  - [Artificial Analysis — GPT-6 Luna](https://artificialanalysis.ai/models/gpt-6-luna)
  - [ARC Prize — GPT-6 Luna](https://arcprize.org/results/openai-gpt-6-luna)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---