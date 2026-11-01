# Grok 4.5 — findings by GPT-6 Luna

- Source: xAI Grok 4.5
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Provider:** xAI (SpaceXSI branding in xAI's model documentation)
- **Model ID:** `grok-4.5`; aliases `grok-4.5-latest` and `grok-build-latest`
- **Availability / release:** The API and Cursor release was announced July 8, 2026; xAI's separate launch-news page is dated July 16, 2026. Available from the xAI API and Grok Build; Cursor also offers it through its model pool.
- **Context:** 500,000 tokens, per xAI. Vals AI and the OpenCode catalog list a 500,000-token maximum output, but xAI's model page does not specify a maximum output limit. The tracked `meta.json` says 450K output; I could not verify that figure in xAI's documentation, so it is not treated as a confirmed vendor limit here.
- **Modalities:** Text and image input; text output.
- **Capabilities:** Reasoning, function calling, and structured outputs. API reasoning effort options are `low`, `medium`, `high`, and `xhigh` (default `high`); batch requests are supported.
- **Architecture / weights:** Proprietary hosted model. Cursor describes it as a mixture-of-experts model jointly trained with xAI; parameter count is not published in the cited technical docs.
- **xAI API pricing (checked 2026-11-01):** For prompts below 200K tokens: $2.00 input / $6.00 output per million tokens and $0.30 per million cached input tokens. At or above 200K prompt tokens, rates double to $4.00 / $12.00 and $0.60 cached input; the higher rates apply to all tokens in the request. Batch API receives a 20% discount. Cursor separately lists the base model at $2/$6 and a faster variant at $4/$18; that fast variant is not treated as the same price tier as xAI's long-prompt surcharge.

## Raw benchmarks found

Every score below names its publisher and setting. xAI's launch chart combines provider-reported results and results from external harnesses; those numbers are not silently treated as independent third-party runs.

| Area | Benchmark / setting | Result | Source / notes |
| --- | --- | ---: | --- |
| Coding agents | DeepSWE 1.0 | 62.0% | xAI launch chart; Datacurve-created evaluation, run with provider harnesses by Artificial Analysis; xAI says competitor results come from their developers' cards or leaderboards |
| Coding agents | DeepSWE 1.1 | 53% | xAI launch chart; mini-SWE-agent harness run by Datacurve, a distinct version and harness from DeepSWE 1.0 |
| Long-horizon coding | SWE-Marathon, pass@1 | 29.0% | xAI launch chart; xAI-reported comparison |
| Terminal agents | Terminal-Bench 2.1 | 83.3% | xAI launch chart; provider-reported result; distinct from Vals' Terminus 2 evaluation below |
| Software engineering | SWE-Bench Pro resolve rate | 64.7% | xAI launch chart; provider-reported result; xAI reports 15,954 average output tokens per task, versus 67,020 for Opus 4.8 (max) in its comparison |
| Reasoning | GPQA Diamond | 92.93% ± 1.29 | Vals AI current model page; high reasoning, temperature 0.7, top-p 0.95, max output 500K |
| Reasoning | GPQA Diamond | 93.1% | Artificial Analysis benchmark page; independently reported evaluation, separate from Vals' run |
| Reasoning / knowledge | Artificial Analysis Intelligence Index | 54 | Artificial Analysis release-day article, July 8, 2026 snapshot; the article ranked it fourth at launch |
| Reasoning / knowledge | Artificial Analysis Intelligence Index v4.3.2 | 39 | Artificial Analysis current model page, retrieved 2026-11-01; current/deprecated-page snapshot, not directly comparable to the release-day 54 score without accounting for the index revision |
| Coding | SWE-bench Verified | 86.60% ± 1.52 | Vals AI; its July 8 release note calls this #4 on the benchmark. This is Vals' SWE-bench Verified result, not xAI's SWE-Bench Pro figure |
| Coding | LiveCodeBench | 87.35% ± 0.96 | Vals AI current model page |
| Coding agents | Terminal-Bench 2.1 | 67.79% | Vals AI Terminus 2 harness leaderboard; pass@1. This differs from xAI's 83.3% provider-reported result and should not be blended with it |
| Coding agents | Terminal-Bench 4.0 | 8.59% ± 1.34 | Vals AI current model page; version 4.0, distinct from Terminal-Bench 2.1 |
| Multimodal | MMMU-Pro | 61.79% ± 1.17 | Vals AI current model page; image-capability evaluation |
| General coding | Vibe Code Bench v1.1 | 69.00% ± 4.48 | Vals AI; the evaluation is version-specific |
| Agent skills | SkillsBench | 66.03% ± 4.60 | Vals AI; #2 of 35 in its July 8 release note |
| Legal knowledge | LegalBench | 85.97% ± 0.41 | Vals AI current model page |
| Agentic coding | Artificial Analysis Coding Agent Index | 76 | Artificial Analysis, release-day Grok Build harness result; model-plus-agent-system result, not a base-model-only score |
| Efficiency | Artificial Analysis Intelligence Index task cost | $0.31 | Artificial Analysis July 8 release article; index-suite average in its evaluated setup, not a universal request cost |
| Efficiency | Artificial Analysis Coding Agent Index task cost | $2.59 | Artificial Analysis July 8 release article; Grok Build agent-harness evaluation |

Additional evaluation context:

- Artificial Analysis currently marks Grok 4.5 deprecated and says it continues performance benchmarking only for the default 10K-input-token workload. Its July launch-day index result and its current v4.3.2 result are distinct snapshots; the model should not be presented as having fallen by 15 points on an unchanged test.
- Cursor disclosed that an earlier Cursor codebase snapshot was accidentally included in Grok 4.5 training and that its exact effect is unknown. Cursor therefore excluded its CursorBench result from its launch comparison. This report does not use CursorBench as clean independent evidence.
- xAI's reported 4.2× output-token efficiency is specific to its SWE-Bench Pro comparison against Opus 4.8 (max); it is not a general claim that Grok uses one-quarter the tokens on all work.

## Normalized scores

- **Tool use: 92/100.** Strong task-agent evidence from xAI's coding evaluations, SkillsBench and the release-era Artificial Analysis Coding Agent Index; provider/harness variation is substantial, and AA's current Agentic Index is more modest.
- **Reasoning: 88/100.** GPQA Diamond is about 93% in both Vals and Artificial Analysis, but the current AA Intelligence Index is 39 and the HLE result is 42.7%; the release-era index snapshot is recorded separately.
- **Context window: 92/100.** The documented 500K context is unusually large. Public evidence does not establish reliable retrieval throughout that full window, and the output-token cap is not stated on xAI's model page.
- **Multimodal: 75/100.** Image input is supported and Vals reports 61.79% on MMMU-Pro, but the interface is text/image-in and text-out rather than broad audio/video generation or perception.
- **Coding: 94/100.** Strong Vals SWE-bench Verified and LiveCodeBench scores complement xAI's high SWE-Bench Pro, DeepSWE and Terminal-Bench 2.1 claims; attribution and harness differences limit a higher score.
- **Cost efficiency: 92/100.** Direct API prices and the reported low task costs are attractive for frontier coding, especially with caching; long prompts double the rates, and agent-suite costs depend on harness and token use.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions, excluding cost: (92 + 88 + 92 + 75 + 94) / 5 = 88.2, rounded to 88.

## Agreement notes

- xAI documents the API ID, context, modalities, capabilities, reasoning levels, and tiered pricing. Cursor independently confirms joint training and the MoE description, and also discloses a CursorBench contamination caveat.
- xAI's 83.3% Terminal-Bench 2.1 and Vals AI's 67.79% are retained as separate results because their harnesses and evaluation setups differ. Terminal-Bench 4.0 is a different benchmark version and is not used to overwrite either figure.
- Vals' GPQA Diamond (92.93% ± 1.29) and Artificial Analysis' 93.1% are separate evaluator results. Likewise, Vals SWE-bench Verified (86.60%) is not the same benchmark as xAI's SWE-Bench Pro (64.7%).
- The API's published $2/$6 price applies only below 200K prompt tokens. Requests at or above that threshold are charged at $4/$12 for all tokens; cached input is $0.30/$0.60 respectively. OpenCode's Console route is documented, but no result here is attributed to a benchmark run through that route.

## Signature

Provided by: **GPT 6 Luna (openai/gpt-6-luna)** — 2026-11-01 UTC

Method: Independent public-source research across xAI, Cursor, Vals AI, Artificial Analysis, and OpenCode documentation. Exact API identity and documented route were checked; benchmark versions, agent harnesses, historical snapshots, and provider-reported scores are kept distinct. Normalized scores are evidence-weighted judgments, not raw benchmark percentages.

- Reference URLs: [xAI Grok 4.5 model documentation](https://docs.x.ai/developers/models/grok-4.5); [xAI launch announcement](https://x.ai/news/grok-4-5); [Cursor Grok 4.5 announcement and evaluation caveats](https://cursor.com/blog/grok-4-5); [Vals AI Grok 4.5 evaluation](https://www.vals.ai/models/grok_grok-4.5); [Vals AI Terminal-Bench 2.1 leaderboard and methodology](https://www.vals.ai/benchmarks/terminal-bench-2-1); [Artificial Analysis launch evaluation](https://artificialanalysis.ai/articles/grok-4-5-brings-spacexai-to-the-the-intelligence-frontier); [Artificial Analysis current model evaluation](https://artificialanalysis.ai/models/grok-4-5); [OpenCode Zen model endpoints and pricing](https://opencode.ai/docs/zen); [OpenCode Grok 4.5 catalog record](https://opencode.ai/data/xai/grok-4-5).
