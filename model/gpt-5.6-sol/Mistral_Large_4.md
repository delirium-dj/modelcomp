# GPT-5.6 Sol — findings by Mistral Large 4

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship tier of the GPT-5.6 family (Sol/Terra/Luna), previewed 2026-06-26 and GA 2026-07-09; built for difficult professional, coding, research, computer-use and tool work. Durable capability tier, not a one-off checkpoint.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`), Amazon Bedrock, Azure (3 OpenRouter providers); ChatGPT/Codex. Responses API. Note: `gpt-daybreak-blue` alias serves the same model with modified cyber safeguards to approved users (serving profile, not a separate model).
- **Release / knowledge:** Limited preview 2026-06-26, GA 2026-07-09; knowledge cutoff February 2026 (llm-stats).
- **IDs:** `gpt-5.6-sol` (OpenAI API); `openai/gpt-5.6-sol` (OpenRouter).
- **Context window:** 1,050,000 tokens; prompts >272K input billed at 2x input / 1.5x output (official model page).
- **Modalities:** Text + image in, text out; explicit reasoning mode (adds latency/tokens); tool/function calling, browsing, computer use.
- **Pricing (as of 2026-11-05):** $4 / $20 per 1M input/output — promotional (20% input / 33% output cut, available through 2026-11-30; a further >20% cut announced 2026-08-21 for 3 months). No free tier.
- **Architecture:** Proprietary, params not disclosed; explicit-reasoning GPT-5.6 architecture.

### Raw benchmarks found

Official OpenAI pages + downstream tables cross-checked against AA, BenchLM, BenchmarkList, Vals, LLM Boss, Agent Report; conflicts listed side by side:

Agent / tool use:

- Artificial Analysis Coding Agent Index: **80 at max (Codex harness) — #1**, leading DeepSWE, Terminal-Bench v2 and SWE-Atlas-QnA (ties Grok 4.5 on SWE-Atlas-QnA) (AA)
- BenchLM composite: **#12 of 216 at 74.83/100** (56 rows)
- BrowseComp SOTA at GA per LLM Boss; exact % not captured
- OSWorld / AutomationBench: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (DataCamp-cited comparison table)
- Artificial Analysis Intelligence Index: **59 at xhigh** (theregister/AA Sept coverage) vs **47 at max (46.97, v4.3.2)** (AA comparison pages; codersera notes Sol is deprecated on AA) — large version/effort drift, both cited
- ARC-AGI-3: **7.8%** (OpenAI Astra comparison table) — far below Astra's 99.9% on the same table
- HLE / LCR / CritPt: no verified public score found

Coding:

- SWE-bench Verified: **96.2%** (Vals leaderboard, Mini-SWE-agent; behind Opus 5 97.0% and DeepSeek V4 Pro 96.4%) (Vals)
- DeepSWE v1.1: **72.7%** (LLM Boss GA suite) vs **73.0%** (BenchmarkList) — conflicting, both cited; #1 of 24 on BenchmarkList
- SWE-bench Pro: **64.6%** (LLM Boss; Terra 63.4, Luna 62.7 behind)
- Terminal-Bench 2.1 best harness: **89.5%** (BenchmarkList)
- MRCR: **91.5%** (Agent Report; Terra 89.6%) — context length not restated, flagged

Long context:

- 1.05M window; MRCR ~91.5% (Agent Report, length not restated); no verified ≥98% at 512K+ for this ID

### Normalized scores (1–100)

- **Tool use: 90/100.** AA Coding Agent Index 80 at max is #1 across all three coding-agent evals; capped by missing OSWorld/AutomationBench rows.
- **Reasoning: 86/100.** GPQA 94.6% is strong, but AA Index readings drift 47 (max, v4.3.2) vs 59 (xhigh) and ARC-AGI-3 7.8% shows weak novel-puzzle generalization.
- **Context window: 96/100.** 1.05M window in the 95–100 tier; MRCR 91.5% below the 98% bar and >272K prompts cost 2x/1.5x.
- **Multimodal: 80/100.** Text/image in, text out; no audio/video or non-text output.
- **Coding: 93/100.** SWE-V 96.2%, DeepSWE 72.7–73.0% (record at GA), TB 2.1 89.5%, SWE-Pro 64.6% — frontier band.
- **Cost efficiency: 60/100.** $4/$20 promo sits at the $3/$15 ≈ 60 band (promo ends 2026-11-30); no free tier.
- **Overall Score: 89/100.** Half-up mean of (90 + 86 + 96 + 80 + 93) / 5 = 89.0 → 89. Best fit: strong coding/agent flagship at promo pricing; GPT-6 Astra (Sept 2026) now outranks it on the AA index, and GPT-6.1 Sol is the cheaper successor path.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official OpenAI model/pricing pages cited, 2026-11-05 UTC); official OpenAI docs prioritized, cross-checked against Artificial Analysis, BenchLM, BenchmarkList, Vals, LLM Boss, The Agent Report, theregister; conflicting figures (DeepSWE 72.7 vs 73.0; AA Index 59 xhigh vs 47 max) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.6: Frontier intelligence that scales with your ambition — OpenAI (official)](https://openai.com/index/gpt-5-6/)
  - [Previewing GPT-5.6 Sol — OpenAI (2026-06-26 preview)](https://openai.com/index/previewing-gpt-5-6-sol/)
  - [GPT-5.6 Sol Model — OpenAI API docs (pricing $4/$20 promo, >272K 2x/1.5x)](https://developers.openai.com/api/docs/models/gpt-5.6-sol)
  - [Artificial Analysis — GPT-5.6 benchmarks (Coding Agent Index 80, #1)](https://artificialanalysis.ai/articles/gpt-5-6-has-landed)
  - [BenchLM — gpt-5.6-sol (#12/216 at 74.83, 1.05M ctx)](https://benchlm.ai/models/gpt-5.6-sol)
  - [BenchmarkList — gpt-5.6-sol (DeepSWE 73.0, TB 2.1 89.5, multiple rank-1 rows)](https://benchmarklist.com/models/openai-gpt-5.6-sol/)
  - [Vals AI — SWE-bench Verified leaderboard (Sol 96.2%)](https://www.vals.ai/benchmarks/swebench)
  - [LLM Boss — TB and BrowseComp SOTA at GA (SWE-Pro 64.6%, DeepSWE 72.7%)](https://llm-boss.com/blog/gpt-5-6-benchmarks)
  - [The Agent Report — Sol vs Terra vs Luna (MRCR 91.5% vs 89.6%)](https://the-agent-report.com/2026/07/gpt-5-6-sol-terra-luna-benchmarks-pricing-analysis/)
  - [llm-stats — gpt-5.6-sol (knowledge cutoff Feb 2026)](https://llm-stats.com/models/gpt-5.6-sol)
  - [OpenRouter — openai/gpt-5.6-sol](https://openrouter.ai/openai/gpt-5.6-sol)
