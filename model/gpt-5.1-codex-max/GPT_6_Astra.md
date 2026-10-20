# GPT-5.1-Codex-Max — findings by GPT 6 Astra

- Source: OpenAI / `gpt-5.1-codex-max`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** Proprietary coding model trained for long-running agent tasks and compaction across successive context windows. It is a distinct model from GPT-5.1-Codex, not merely the latter's maximum-effort setting [S1, S2].
- **Provider / access:** Historically OpenAI Responses API only. OpenAI's explicit lifecycle notice records standard API shutdown on July 23, 2026; the still-published model page is a reference, not proof of live access [S1, S5]. This report evaluates historical capability.
- **Release / knowledge:** Codex product launch November 19, 2025 [S2]; Vals dates its API evaluation/model entry December 4, 2025 [S3]. Documented knowledge cutoff September 30, 2024 [S1].
- **IDs:** `gpt-5.1-codex-max`; OpenCode documents `opencode/gpt-5.1-codex-max` and the July 23 deprecation. No Zen Free ID verified [S6].
- **Context window:** 400,000 tokens, maximum output 128,000 [S1]. “Millions of tokens” in the announcement refers to a task spanning multiple compacted windows, not native simultaneous context [S2].
- **Modalities:** Text/image input, text output. Reasoning, streaming, structured output, function calling, web search and prompt caching documented; no native audio/video generation [S1].
- **Pricing (reference checked 2026-10-20):** $1.25 input / $10 output / $0.125 cached input per million tokens [S1], also listed by Vals and OpenCode [S3, S6]. Historical price anchor, not a guarantee of presently purchasable inference after shutdown.
- **Architecture:** Proprietary reasoning model; total/active parameters and dense/MoE architecture not disclosed in the reviewed primary references. Compaction training is documented [S2].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench **2.0: 58.1%**, vendor measurement at **xhigh**, with compaction enabled, Codex CLI in Harbor [S2]. Not a Terminal-Bench 2.1 measurement.
- SWE-Lancer IC SWE **79.9%**, vendor xhigh result [S2].
- **METR 50% task horizon: 2 hours 42 minutes**, **95% CI 75–350 minutes**; **80% horizon approximately 30 minutes**, **95% CI 9–80 minutes** [S4]. Human expert completion time calibrates task difficulty; this does not measure how long the AI can keep running.
- METR evaluated **170 tasks**, including an HCAST subset, RE-Bench and SWAA. It allowed **32M tokens per task attempt**, with modest marginal benefit beyond approximately **5M tokens** [S4]. These generous resource settings must accompany the result.
- Tau2/Tau3, GDPval-AA, Claw-Eval/ClawProBench, MCP-Atlas and Toolathon: no verified public score found in the reviewed material.

Reasoning / knowledge:

- METR's mixed software/research task suite provides direct evidence of sustained problem-solving, but is not a substitute for GPQA/HLE general-knowledge accuracy [S4].
- GPQA Diamond, HLE, CritPt, AA Intelligence Index, Omniscience and LCR/MLCR: no verified exact-model score found in the opened primary/evaluator pages. Ordinary Codex's scores are not transferred.
- On two manually graded projects estimated to take a skilled human over **20 hours** each, METR reports **zero successful attempts out of five per project**. Each set combines **two final-model attempts with three early-checkpoint attempts**; it is not ten failures of one final release. One stargazing attempt achieved partial progress [S4].

Coding:

- SWE-bench Verified **77.9%**, **500 tasks**, vendor xhigh/compaction result. The same appendix gives ordinary Codex high **73.7%**; both model and effort differ [S2].
- **Independent Vals LiveCodeBench: 83.56% ±1.05**, rank **48/143** at retrieval [S3].
- **Independent Vals Vibe Code Bench v1.1: 22.17% ±3.84**, rank **80/115** [S3]. Default evaluation provider OpenAI, reasoning **high**, maximum output **128,000**; benchmark-specific settings can differ.
- Vals' December 4 evaluation note reports approximately **3×** slower SWE-bench and **10×** slower Vibe Code runs relative to its comparison, despite coding gains, and a slight Terminal-Bench regression [S3]. These are historical workload-level observations, not universal latency multipliers.
- SWE-bench Pro, SciCode and DeepSWE: no verified public score found in the reviewed primary/evaluator pages.

Long context:

- No verified MRCR/RULER/GraphWalks accuracy at a specified window length found. The official 400K limit and support for repeated compaction are separate claims [S1, S2].
- METR found its main scaffold performed better than preliminary Codex/autocompaction variants; it explicitly cautions that the comparisons were not fully apples-to-apples [S4]. Compaction does not by itself establish lossless memory or superior long-context reasoning.

### Source comparison and conflicting findings

1. **24-hour operation versus reliable autonomy:** OpenAI reports internal tasks running over 24 hours; METR estimates approximately 2h42m at 50% success and 30m at 80% success in human-task-time units. These measure different things. The vendor anecdote cannot be restated as reliable autonomous completion of arbitrary day-long projects [S2, S4].
2. **Vendor improvement versus independent terminal regression:** OpenAI's Max-xhigh beats ordinary-Codex-high on its terminal setup. Vals' high-effort evaluation note reports a slight regression. Different effort, harness and task populations prevent treating these as a direct replication failure or averaging them together [S2, S3].
3. **Coding quality versus speed:** Vals' app-building result improves over ordinary Codex while its competitive-programming result does not; its historical slowdown reports also qualify OpenAI's broad faster/more-efficient positioning. Token efficiency on one workload is not equal to end-to-end latency on another [S2, S3].
4. **Release dates:** November 19 is the vendor Codex-product announcement, explicitly before broad API availability. December 4 is Vals' API evaluation entry. Preserve both events rather than choosing a generic release date without context [S2, S3].
5. **Availability:** despite surviving model and pricing pages, the authoritative lifecycle notice states July 23, 2026 shutdown [S5]. Catalog entries and stale “latest model” marketing are not live-service verification.
6. **METR independence and uncertainty:** METR performed external evaluations under NDA, with OpenAI confidentiality/legal review and stated developer assurances. It says conclusions were not changed at OpenAI's request. Task-set uncertainty is wide; excluding seven problematic tasks raises its horizon to **3h28m**, while counting reward hacks also changes results. The main estimate, not the most flattering ablation, is used [S4].

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal 58.1%, SWE-Lancer 79.9% and METR's independent task results support competent agents; limited high-reliability horizon and harness sensitivity cap it [S2, S4].
- **Reasoning: 78/100.** Provisional interpretation of independently evaluated mixed software/research problem-solving; absence of exact general-knowledge benchmarks and failures on difficult long projects prevent a frontier score [S4].
- **Context window: 82/100.** Official 400K falls in the 200K–500K capacity tier; multi-window compaction is not credited as native 1M context or verified retrieval [S1, S2].
- **Multimodal: 70/100.** Official image input reaches the image tier; no measured broader multimodal capability or native audio/video output credited [S1].
- **Coding: 80/100.** SWE Verified 77.9% and independent LCB 83.56% demonstrate strong coding, capped by Vibe Code 22.17%, terminal limits and external long-task failures [S2–S4].
- **Cost efficiency: 72/100.** Historical $1.25/$10 pricing with 90% cache discount is moderate; vendor token savings help, but Vals' long task times and high output budgets qualify value [S1–S4].
- **Overall Score: 77/100.** Half-up mean (75 + 78 + 82 + 70 + 80) / 5 = 77. Historical fit: deliberate repository engineering with compaction, rather than fast or reliably unattended day-long work. Cost excluded.

### Research trail and sources

Three successful distinct DuckDuckGo queries were run for this exact model: `GPT 5.1 Codex Max official benchmarks`; `GPT 5.1 Codex Max independent evaluation review`; `GPT 5.1 Codex Max context pricing API`. Primary specifications and lifecycle documentation were compared with the vendor appendix, Vals and METR. Search snippets from generic review sites were discovery leads, not benchmark evidence.

- [S1 — OpenAI exact-model API reference](https://developers.openai.com/api/docs/models/gpt-5.1-codex-max)
- [S2 — OpenAI launch and evaluation appendix](https://openai.com/index/gpt-5-1-codex-max/)
- [S3 — Vals exact-model independent evaluation](https://www.vals.ai/models/openai_gpt-5.1-codex-max)
- [S4 — METR external evaluation and methodology](https://metr.org/evaluations/gpt-5-1-codex-max-report/)
- [S5 — OpenAI lifecycle notice](https://developers.openai.com/api/docs/deprecations)
- [S6 — OpenCode catalog and deprecation table](https://opencode.ai/docs/zen/)

---

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra)** — 2026-10-20
- Method: Independent public-web research with three searches, official documentation and two external evaluators, explicitly reconciling harness, effort, lifecycle and task-horizon differences. No peer findings consulted. Scores are normalized interpretations; no benchmark was run locally.
