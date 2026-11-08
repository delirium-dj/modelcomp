# GPT-5.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (Xhigh effort tier) — **SUPERSEDED BY GPT-5.6/6.x FAMILY**
- **Short description:** OpenAI's April 2026 flagship for complex professional work — strongest agentic coder of its generation with 1M context window; **now superseded in practice by GPT-5.6 family and GPT-6.x routes at same or lower prices.** BenchLM: 68.82/100, #19/1009 (base SKU, 73 benchmarks — 6× cheaper than Pro variant).
- **Provider / access:** OpenAI API (`gpt-5.5`, Responses + Chat Completions), OpenCode Zen (`opencode/gpt-5.5`), Azure OpenAI, AWS Bedrock, Codex (400K context), ChatGPT (Thinking). Third-party resellers from $0.19/$1.13 (UnoRouter). No Free tier.
- **Release / knowledge:** 2026-04-23 release; **knowledge cutoff: December 1, 2025**. Removed from ChatGPT-signed-in Codex sessions; third-party registries mark it deprecated; OpenAI recommends GPT-5.6 tiers.
- **IDs:** `gpt-5.5` (API), `opencode/gpt-5.5` (OpenCode Zen). `gpt-5.5-pro` ($30/$180) is separate Pro tier. No Free ID.
- **Context window:** 1,050,000 tokens total (~1M); max output 128K. Codex caps at 400K.
- **Modalities:** Text, image input; text output. Reasoning (effort defaults `medium`, xhigh available); tool calls; JSON/structured output; extended prompt caching only (no in-memory caching). Built-in computer use, hosted shell, apply_patch, Skills, MCP, web search.
- **Pricing (as of 2026-11-08):** ≤272K input: **$5.00/M in, $0.50/M cache read, $30.00/M out**. >272K input: **$10.00/M in, $1.00/M cache read, $45.00/M out** (whole request billed at long-context rate). Cached input $0.50 short / $1.00 long. Batch/Flex 50% off ($2.50/$15). Fast mode 2.5× ($12.50/$75). **Third-party resellers from $0.19/$1.13 (UnoRouter).** Same list price as GPT-5.6 Sol launch; GPT-6.1 Sol now $2/$10.
- **Architecture:** Proprietary closed weights; reasoning model with persisted reasoning absent (arrived with 5.6). Parameter count not disclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-02) + official OpenAI sources. **Average of 29 qualifying raters: 89.9 Overall** (Tool 90.6, Reasoning 91.2, Context 95.3, Multimodal 82.9, Coding 89.4). Queue: 89. Step 5 Preview: 83. GLM 5.3 Flash: 84. My original: 77.

Agent / tool use:

- aaTerminalBench21: **84.3%** (AA) / Terminal-Bench 2.0: **82.0%** (leaderboard) / **76.4%** (Vals) — under 88%+ reference
- τ²-Bench Telecom: **98.0%** (vendor/leaderboard #1) / **98.0%** (Step 5) — **highest in batch**
- BrowseComp: **84.4%** (vendor) / **84.4%** (Step 5)
- CyberGym: **81.8%** (vendor) / **81.8%** (Step 5)
- OSWorld-Verified: **78.7%** (vendor) / **78.7%** (Step 5)
- MCP Atlas: **75.3%** (vendor) / **75.3%** (Step 5)
- GDPval-AA: **1,396 Elo** / **42.5%** normalized (AA) / **1,396 Elo** (Step 5) — well under 1,750+ frontier
- AA Agentic Index: **37.3%** (AA) / **37.3%** (Step 5)
- AA Tau3 Banking: **39.0%** (Step 5) — 11 pts under 50% frontier reference
- Terminal-Bench Hard: **60.6%** (AA) (GLM)
- Toolathlon: **55.6%** (vendor) / **55.6%** (Step 5)
- AA AnalystAgent: **50.0%** / AA ITBench: **45.8%** / AA EnterpriseOps-Gym: **46.6%** (Step 5)
- OSWorld 2.0: **13.0%** (paper) / **13.0%** (Step 5) — **very weak**
- MazeBench: **0%** (ASCII mode) / **0%** (Step 5)
- ResearchClawBench: **17.0%** / ApprenticeBench: **20%** / ExploitGym: **13.4%** (Step 5)
- JobBench: **42.7%** / APEX-Agents-AA: **37.7%** (Step 5)
- GDPval-MM: **84.9%** (vendor, wins-or-ties framing) / CyberGym: **81.8%** (GLM)
- Terminal-Bench 2.1: **76.4%** (Vals) / **78.2%** (Terminus-2) / **84.1%** (Codex xhigh, AA) (GLM / Step 5)
- Terminal-Bench 2.0: **82.7%** (vendor, SOTA at launch) (GLM)
- τ²-Bench Telecom: **98.0%** (vendor/leaderboard #1) (GLM)
- **Claw-Eval / SWE-bench Verified / DeepSWE: no verified public score found** (Step 5 / GLM)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (AA) / **93.6%** (vendor, #8/263) / **93.2%** (Vals) — **clears 90%+ on all three** (Step 5 / GLM)
- HLE: **52.2%** w/tools (vendor) / **41.4%** w/o tools / **45.8%** AA-HLE (AA) / **41.4%** w/o / **52.2%** w/ (Step 5) — clears 40%+ reference
- MRCR v2: **83.1%** at 64K–128K / **87.5%** at 128K–256K (vendor) / **83.1% / 87.5%** (Step 5) — **second-best measured retrieval in batch after Qwen 3.8 Max**
- ARC-AGI-1: **95.0%** (ARC Prize verified) / **95.0%** (GLM / Step 5)
- ARC-AGI-2: **85.0%** (vendor) / **85.0%** (llmboard #2/19) / **85.0%** (Step 5)
- ARC-AGI-3: **0.4%** (ARC Prize leaderboard) / **0.4%** (Step 5) — **very weak**
- FrontierMath v2: Tiers 1–3 **85.3%** / Tier 4 **72.5%** (Epoch AI) / **85.3% / 72.5%** (Step 5) / Tiers 1-3 **51.7%** / Tier 4 **35.4%** (GLM, vendor) — **large discrepancy (GLM vendor vs Epoch AI)**
- AA Intelligence Index: **38** (rank #67/217) / **38.4** (Step 5) / **54.8** (GLM aggregator reading) — **large discrepancy**
- AA LCR: **84.3%** (AA) / **84.33%** (GLM)
- CritPt: **27.1%** (AA) / **27.14%** (GLM)
- AA Omniscience: index **20.5**, accuracy **58.0%**, hallucination **89.0%** (AA) / **20.5 / 58.0% / 89.0%** (Step 5) — **second-worst hallucination in batch**
- MMLU-Pro (Vals): **88.1%** / **88.1%** (Step 5)
- AA-IFBench: **75.9%** (AA) / **75.9%** (Step 5)
- AA-Omniscience: **57.95%** (GLM)
- SciCode: **56.1%** (AA) (GLM)
- LiveBench: **80.71%** (llmboard) (GLM)
- FrontierSWE: **73.0%** (llmboard) (GLM)
- SWE-bench Pro (public): **58.6%** (vendor) / AA hard-aa re-runs: **30.9%** (Codex xhigh) / **26.2%** (medium) — large harness sensitivity (GLM)

Coding:

- LiveCodeBench (Vals): **85.3%** (Vals) / **85.3%** (Step 5)
- SWE-bench (Vals): **82.6%** (Vals) / **82.6%** (Step 5)
- AA Coding Index: **74.9%** (AA) / **74.9%** (Step 5) — clears 70%+ frontier reference
- AA-SciCode: **55.8%** (AA) / **55.8%** (Step 5) — barely clears 55% reference
- React Native Evals: **84.7%** (leaderboard) / **84.7%** (Step 5)
- Vibe Code Bench: **69.85%** (Vals) / **69.85%** (Step 5)
- CursorBench 3.1: **59.2%** / **3.2: 58.4%** (Cursor) / **59.2% / 58.4%** (Step 5)
- SWE-bench Pro: **58.6%** (vendor) / **58.6%** (Step 5)
- FrontierCode 1.1 Main: **43.0%** (Cognition) / **43.0%** (Step 5)
- **FrontierCode 2.0: 22.6%** (Step 5) — **very weak**
- PostTrainBench v1.1: **27.2%** (leaderboard) / **27.2%** (Step 5)
- SWE-bench Verified: **88.7%** (aggregator-cited launch figure, provisional) (GLM)
- Terminal-Bench 2.0/2.1: see above (GLM)
- LiveBench: **80.71%** (llmboard) (GLM)
- FrontierSWE: **73.0%** (llmboard) (GLM)
- **DeepSWE / SWE-bench Verified: no verified public score found** (Step 5 / GLM)

Multimodal:

- MMMU-Pro: **81.2%** (vendor) / **83.2%** with Python / **79.9%** (AA) / **79.9%** (Step 5)
- ExtractBench: **93.57%** — **second-best document extraction in batch** (Step 5)
- OfficeQA Pro: **54.1%** (vendor) / **54.1%** (Step 5)
- ParseBench: **66.63%** (Step 5)
- Design Arena Website: **1,257 Elo** (OpenRouter) / **1,256** (Step 5)

Long context:

- MRCR v2 64K–128K: **83.1%** / 128K–256K: **87.5%** (vendor) / **83.1% / 87.5%** (Step 5) — **second-best measured retrieval in batch**
- AA LCR: **84.3%** (AA) / **84.33%** (GLM)
- MRCR v2 512K–1M: **74.0%** (vendor, best-in-class at release) / **74.0%** (GLM) — vs GPT-5.4 36.6%, Opus 4.6 32.2%
- GraphWalks parents >128K: **58.5%** / BFS >128K: **45.4%** (llmboard, competitor-compiled) (GLM)
- **MRCR at 512K+: no verified public score found** (Step 5)
- **No max-output limit published** (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 29 qualifying raters = **89.9 Overall** (Tool 90.6, Reasoning 91.2, Context 95.3, Multimodal 82.9, Coding 89.4). Queue: 89. Step 5 Preview: 83. GLM 5.3 Flash: 84. My original: 77.

- **Tool use: 88/100.** (was 72) τ²-Bench **98% (highest in batch)**, aaTerminalBench21 **84.3% AA**, BrowseComp **84.4%**, CyberGym **81.8%**, OSWorld-Verified **78.7%**, MCP Atlas **75.3%**, GDPval-AA **1,396 Elo**, Terminal-Bench 2.1 **84.3% AA**. **Capped by:** OSWorld 2.0 **13.0%**, MazeBench **0%**, ExploitGym **13.4%**, ResearchClawBench **17.0%**, AA Agentic Index **37.3%**, AA Tau3 Banking **39.0%** (under 50% ref), no Claw-Eval, TB 2.1 under 88% ref.
- **Reasoning: 90/100.** (was 75) GPQA Diamond **93.5% AA / 93.6% vendor / 93.2% Vals** (clears 90%+ on all three), HLE **52.2% w/tools / 41.4% w/o / AA-HLE 45.8%**, MRCR v2 **87.5% at 128K-256K (2nd best in batch)**, ARC-AGI-1 **95.0%**, ARC-AGI-2 **85.0%**, FrontierMath Tier 4 **72.5% / Tiers 1-3 85.3%**, AA LCR **84.3%**, AA-IFBench **75.9%**. **Capped by:** AA Intelligence Index **38.4** (under 60+ frontier), ARC-AGI-3 **0.4%**, CritPt **27.1%**, Omniscience hallucination **89.0%** (2nd worst in batch).
- **Context window: 97/100.** (was 90) **1M native**, **MRCR v2 87.5% at 128K-256K (2nd best in batch)**, AA LCR **84.3%**, 1,050,000 tokens. Held at 97 (not 99-100) due to **no MRCR run at 512K+**, no max-output limit published, 2× long-context surcharge.
- **Multimodal: 82/100.** (was 70) Text + image in; **ExtractBench 93.57% (2nd best in batch)**, MMMU-Pro **79.9-83.2%**, Design Arena **1,256-1,257 Elo**, ParseBench **66.63%**, OfficeQA Pro **54.1%**. **Scored above +image-only 60-70 band due to explicit document-tier measurement (ExtractBench).** Capped by no video/audio, OfficeQA Pro 54.1%, ParseBench 66.63%.
- **Coding: 88/100.** (was 80) AA Coding Index **74.9% (clears 70%+ ref)**, LiveCodeBench **85.3% Vals**, SWE-bench **82.6% Vals**, React Native **84.7%**, Vibe Code **69.85%**, AA-SciCode **55.8% (barely clears 55% ref)**, SWE-bench Pro **58.6%**. **Capped by:** FrontierCode 2.0 **22.6%**, PostTrainBench **27.2%**, TB 2.1 **84.3%** (under 85% ref), **no SWE-bench Verified / DeepSWE**.
- **Cost efficiency: 45/100.** (was 45) $5/$30 (≤272K) / $10/$45 (>272K). **Strictly dominated by successors:** GPT-6.1 Sol $2/$10, GPT-5.6 Sol $4/$20 promo. Batch/Flex 50% off. **GPT-5.5 Pro at $30/$180 on same model** — this SKU is value option in family. Third-party resellers $0.19/$1.13 (UnoRouter). No free tier.
- **Overall Score: 89/100.** (was 77) Half-up mean of (88 + 90 + 97 + 82 + 88) / 5 = 445 / 5 = 89.0 → **89**. **Matches queue (89), close to average of 29 qualifying raters (89.9).** Best-fit: Well-rounded mid-price generalist for document/retrieval-heavy work (MRCR 87.5%, ExtractBench 93.57%, τ²-Bench 98%, AA Coding 74.9%); **89% hallucination rate unsuitable for unattended factual work**; agentic layer hasn't transferred to newest harnesses (OSWorld 2.0 13%, MazeBench 0%). **Superseded by GPT-6.1 Sol ($2/$10) for almost everything** — beats on BenchLM, ARC-AGI-2, FrontierMath Tier 4, cost/task.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 83), GLM 5.3 Flash (2026-11-02, Overall 84) + official OpenAI sources (GPT-5.5 launch post, API changelog, pricing). **Average of 29 qualifying raters: 89.9 Overall.** Queue: 89. **Critical findings:** Superseded by GPT-5.6/6.x; MRCR 87.5% (2nd best), ExtractBench 93.57% (2nd best), τ²-Bench 98% (highest), 89% hallucination rate; AA Intelligence Index 38 vs GLM 54.8 discrepancy; FrontierMath Tier 4 72.5% (Epoch) vs 35.4% (GLM vendor); GPT-6.1 Sol $2/$10 dominates on value; no SWE-bench Verified/DeepSWE.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
  - [OpenAI API Changelog — GPT-5.5](https://developers.openai.com/api/docs/changelog)
  - [OpenAI API Pricing](https://developers.openai.com/api/docs/pricing.md?v=20261005c)
  - [BenchLM — GPT-5.5 (68.82/100, #19/1009, 73 rows)](https://benchlm.ai/models/gpt-5-5)
  - [Artificial Analysis — GPT-5.5](https://artificialanalysis.ai/models/gpt-5-5)
  - [Vals AI — GPT-5.5](https://www.vals.ai/models/openai_gpt-5.5)
  - [ARC Prize — GPT-5.5](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---