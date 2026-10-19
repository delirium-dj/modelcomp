# GPT-5.1-Codex — findings by GPT 6 Astra

- Source: OpenAI / `gpt-5.1-codex`
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** GPT-5.1-Codex
- **Short description:** Proprietary agentic coding specialization, distinct from GPT-5.1, Codex-Max and Codex-Mini. This is a historical capability assessment: OpenAI's lifecycle notice says its API was shut down July 23, 2026 [S1, S6].
- **Provider / access:** Historically OpenAI Responses API, `v1/responses`, not Chat Completions. Surviving catalog/API-reference entries do not prove current availability after shutdown [S1, S6].
- **Release / knowledge:** November 13, 2025, corroborated by Vals and AA; documented knowledge cutoff September 30, 2024 [S1, S3, S4].
- **IDs:** `gpt-5.1-codex`; OpenCode documented `opencode/gpt-5.1-codex`, also listed as deprecated July 23, 2026. No Zen Free ID verified [S7]. The original model reference says its underlying snapshot could be updated, so historical measurements need their evaluation settings retained [S1].
- **Context window:** 400,000 tokens; maximum output 128,000 [S1]. Compaction over many turns is not a larger single-request window.
- **Modalities:** Text/image input, text output; reasoning tokens, function calling, structured outputs, streaming, web search and caching documented. No audio/video generation credited [S1].
- **Pricing (checked 2026-10-19):** Historical reference rates $1.25 input / $10 output / $0.125 cache read per million tokens [S1]. OpenCode's retained catalog lists $1.07/$8.50/$0.107 while also listing deprecation [S7]. Cost scoring uses the first-party reference rate; neither price establishes an operational endpoint today.
- **Architecture:** Proprietary; parameter count and dense/MoE details undisclosed [S3].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench **2.0: 52.8%**, OpenAI's explicitly labelled **GPT-5.1-Codex (high)** comparison column in the Codex-Max release appendix [S2]. The article identifies Codex CLI/Harbor for its terminal evaluation; the comparator must not inherit Max's xhigh label or result.
- SWE-Lancer IC SWE **66.3%**, same vendor comparator [S2].
- Tau2-Bench **83%**, AA result reproduced by BenchLM, secondary-transcription evidence: the directly retrieved AA page does not expose that per-test figure in prose [S5].
- Tau3, GDPval-AA, Claw-Eval/ClawProBench, MCP-Atlas and Toolathon: no verified public score found in the reviewed pages.

Reasoning / knowledge:

- GPQA Diamond **86.0%**, HLE **25.7%**, CritPt **5.7%**, IFBench **70.0%**: BenchLM attributes these to AA; retained as secondary-reported measurements, not independently reverified from AA's interactive charts [S5].
- Omniscience accuracy **39.9%**, hallucination rate **77.2%**, index **-6.5**: secondary AA attribution [S5]. The negative index is not negative accuracy, and the hallucination metric is not the complement of accuracy.
- Current AA Intelligence Index **24 estimated**, v4.3.2, high reasoning [S3]. BenchLM displays **23.7%** for that index [S5]; use index points, not percent accuracy, and preserve AA's estimate qualification. Neither is a verified current rerun of the full newer suite.

Coding:

- SWE-bench Verified **73.7%**, **500 tasks**, high effort, explicitly the non-Max comparator [S2]. Max's 77.9% is not this model's score.
- **Independent Vals LiveCodeBench: 85.55% ±1.00**, rank **31/143** at retrieval; default provider OpenAI, reasoning high, maximum output 128,000 [S4]. Benchmark-specific settings can differ from page defaults.
- **Independent Vals Vibe Code Bench v1.1: 13.12% ±3.16**, rank **93/114** at retrieval [S4]. This is materially weaker than competitive-programming performance; the benchmark populations are different and should not be averaged as interchangeable accuracies.
- SWE-bench Pro, DeepSWE and SciCode: no verified public score found in the reviewed sources.

Long context / vision:

- AA-LCR **69.3%**, MMMU-Pro **72.5%**, secondary AA attribution in BenchLM [S5]. No precise retrieval-at-window-length result recovered; 400K capacity alone does not establish reliable retrieval at its limit.

### Source comparison and conflicting findings

1. **Lifecycle overrides catalog availability:** the API model card still documents support and pricing; AA's FAQ still says available through a provider; OpenAI's explicit shutdown table states July 23, 2026. This report treats standard first-party API access as retired rather than claiming it is live [S1, S3, S6]. OpenCode also retains both an endpoint row and a deprecation row [S7].
2. **Base versus Max:** the vendor appendix is useful because it labels the 73.7/66.3/52.8 comparator explicitly. Claims about Max's multi-context compaction, xhigh performance and token savings cannot all be assigned to ordinary Codex [S2].
3. **Programming puzzles versus full apps:** Vals measures 85.55% on LiveCodeBench but only 13.12% on Vibe Code. That limits a broad “excellent at every coding task” conclusion despite solid repository repair [S2, S4].
4. **Aggregator versus evaluator:** BenchLM's overall 50.42/100 is its own composite, not this repository's Overall. Its 23.7 index entry lacks the estimate caveat visible on AA; the directly opened AA evidence has precedence for status and interpretation [S3, S5].
5. **Precision:** BenchLM rounds Vals LCB to 85.6%; Vals gives 85.55%. This is rounding, not disagreement. Retain original values and uncertainty [S4, S5].
6. **Evidence confidence:** strongest support comes from the primary vendor comparator and independently opened Vals results. Per-test AA values available only through BenchLM are supporting, lower-confidence evidence. No benchmarks were executed locally.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal 52.8% and SWE-Lancer 66.3% show useful agent execution; secondary Tau2 evidence helps, while missing newer broad tool evaluations caps the score [S2, S5].
- **Reasoning: 76/100.** Secondary GPQA 86% and HLE 25.7% suggest solid reasoning, tempered by weak CritPt, hallucination results and an estimated current index [S3, S5].
- **Context window: 82/100.** Official 400K fits the 200K–500K tier; secondary LCR 69.3% does not establish lossless long-context retrieval [S1, S5].
- **Multimodal: 70/100.** Documented image input and supporting MMMU-Pro evidence reach the image tier ceiling; no broader native audio/video coverage credited [S1, S5].
- **Coding: 77/100.** Primary SWE Verified 73.7% and independent LCB 85.55% are strong, but low Vibe Code and middling terminal performance constrain general coding quality [S2, S4].
- **Cost efficiency: 70/100.** Historical $1.25/$10 reference pricing is moderate with useful cache discounts, but output-heavy reasoning costs substantially more than cheap open models; this is not a current availability claim [S1].
- **Overall Score: 75/100.** Half-up mean (68 + 76 + 82 + 70 + 77) / 5 = 74.6 → 75. Historical fit: repository repair and coding agents with image input; Cost excluded.

### Research trail and sources

Distinct search requests: `GPT 5.1 Codex official SWE bench benchmark`; `GPT 5.1 Codex independent review Artificial Analysis`; `GPT 5.1 Codex context pricing model card`; and Bing `"GPT-5.1-Codex" benchmark review`. DuckDuckGo returned anti-bot challenges and Bing generic results. These are attempted searches, not successful discovery; direct official/evaluator pages supplied the evidence. Seven sources were compared, with the shutdown notice resolving a consequential contradiction.

- [S1 — OpenAI exact model reference](https://developers.openai.com/api/docs/models/gpt-5.1-codex)
- [S2 — OpenAI Codex-Max launch, explicit non-Max evaluation column](https://openai.com/index/gpt-5-1-codex-max/)
- [S3 — Artificial Analysis exact model](https://artificialanalysis.ai/models/gpt-5-1-codex)
- [S4 — Vals independent exact-model results](https://www.vals.ai/models/openai_gpt-5.1-codex)
- [S5 — BenchLM evidence inventory](https://benchlm.ai/models/gpt-5-1-codex)
- [S6 — OpenAI authoritative deprecation/shutdown notice](https://developers.openai.com/api/docs/deprecations)
- [S7 — OpenCode catalog and deprecation table](https://opencode.ai/docs/zen/)

---

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra)** — 2026-10-19
- Method: Fresh public-web search attempts, primary documentation and independent evaluator cross-checks; no peer findings consulted. Scores are normalized interpretations, not official benchmark scores.
