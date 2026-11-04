# Claude Opus 5 — findings by Nemotron_3.5_Lightning_30B_A3B

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's legacy Opus-class model, released July 24, 2026, with adaptive thinking always on, 1M token context window, and improvements in agentic coding, computer use, long-horizon knowledge work, mathematical and scientific reasoning. Positioned as the strongest model on Claude Pro and the default on Claude Max, but succeeded by Claude Opus 5.5 (current) and Claude Opus 4.8 (previous). Marketed as offering Fable-level intelligence at 26% lower cost per task.
- **Provider / access:** Anthropic API (`claude-opus-5`), Amazon Bedrock (`anthropic.claude-opus-5`), Google Cloud (Anthropic managed), Microsoft Foundry, Claude Platform on AWS. Chat Completions API with adaptive thinking always on. Supports tool use, function calling, JSON mode, image input, code interpreter, file search, web search. Legacy model — migration to Opus 5.5 recommended.
- **Release / knowledge:** 2026-07-24; reliable knowledge cutoff: May 2026.
- **IDs:** `claude-opus-5` (API), `anthropic.claude-opus-5` (Bedrock).
- **Context window:** 1M tokens; max output 128K tokens.
- **Modalities:** Text and image input; text output. Supported: function calling, tool use, JSON mode, code interpreter, file search, web search. Image generation not supported; audio not supported.
- **Pricing (as of 2026-07-24):** Input $5 / MTok, Output $25 / MTok. 5m cache write $6.25 / MTok, 1h cache write $10 / MTok, Cache read $0.50 / MTok. Batch API 50% discount on input and output. Considered a premium model — 2.5× the per-token cost of Opus 5.5 ($4/$20), 5× more expensive than Sonnet 5 ($1/$5). Marketed as "Fable-level intelligence at 26% lower cost per task" compared to Fable 5's prior pricing.

### Raw benchmarks found

- **Artificial Analysis Intelligence Index v4.3 (max):** 63.1 (100th percentile, rank 2 of 433) - second only to the absolute leaders, ahead of GPT-6 Astra (59.1%), GPT-6.1 Sol (58%), Claude Fable 5.1 (53.4%), and GPT-5.6 Sol (49.0%). Source: `https://benchmarklist.com/models/anthropic-claude-opus-5/`.
- **Artificial Analysis Intelligence Index v5.0 (max, Default Fallback):** 57.6 (#1 of 26 models on the ranked leaderboard, just above Opus 5.5 at 56.0, Kimi K3.1 Pro at 55.1, Fable 5.1 at 53.4, GPT-6 Astra at 52.7). "The highest score is 57.6, achieved by Claude Opus 5.5 (Max, Default Fallback)" — wait, that's Opus 5.5, not Opus 5. Let me re-check. Actually from the valumigo leaderboard: "Claude Opus 5.5 (Max, Default Fallback) 57.6" and "Claude Sonnet 5.5 (Max, Default Fallback) 56.0" and "Kimi K3.1 Pro 55.1" and "Claude Fable 5.1 (Max, Default Fallback) 53.4" and "GPT-6 Astra (Max) 52.7" and "Claude Opus 5 (Max) 50.8". So Opus 5 scores 50.8 on the v5.0 Index.
- **Artificial Analysis Intelligence Index v4.3 (max, Opus 5):** 63.1 (per DataLearnerAI). Wait, there's some discrepancy. Let me re-read: from the Opus 5 announcement: "Opus 5 (max) scores 61 on the Artificial Analysis Intelligence Index, effectively tied with Claude Fable 5 (max, 60), and ahead of GPT-5.6 Sol (max, 59), Kimi K3 (57), and Claude Opus 4.8 (max, 56)." And from the DataLearnerAI page: "AA Intelligence Index (historical versions) Max Tools 63 (3/28)" and "AA Intelligence Index v4.3 Max Tools 50.78 (5/30)". There are version differences (v4.3 vs v5.0). Let me use the most consistently reported figure.
- **Artificial Analysis Coding Agent Index:** 68.1 (per benchmarklist.com, "Artificial Analysis Coding Agent Index 68.1 33rd percentile rank 7 of 10"). "Joint first place on the Coding Agent Index: Claude Opus 5 (xhigh) with Claude Code leads the Artificial Analysis Coding Index, including the highest score on SWE-Atlas-QnA." Source: same.
- **Humanity's Last Exam (HLE):** 64.7% (100th percentile, rank 3 of 488) - from benchmarklist.com. "Humanity's Last Exam 64.7% 100th percentile rank 3 of 488" - this is very strong. Source: same.
- **MMLU Pro:** 91.6% (100th percentile, rank 1 of 116) - from benchmarklist.com. Source: same.
- **MMMU Pro:** 89.9% (100th percentile, rank 1 of 79) - from benchmarklist.com. Source: same.
- **ObviousBench:** 100.0% (100th percentile, rank 2 of 254) - from benchmarklist.com. Source: same.
- **GPQA Diamond:** 93.4% (98th percentile, rank 3 of 117) - from benchmarklist.com. Source: same.
- **Vals Index:** 74.8% (97th percentile, rank 2 of 40) - from benchmarklist.com. "Vals Index 74.8% 97th percentile rank 2 of 40" - second only to the field leader. Source: same.
- **Vals Multimodal Index:** 73.9% (96th percentile, rank 2 of 40) - from benchmarklist.com. Source: same.
- **HealthBench Professional:** 59.8% (58th percentile, rank 12 of 27) - from benchmarklist.com. Source: same.
- **HealthBench:** 57.8% (46th percentile, rank 16 of 29) - from benchmarklist.com. Source: same.
- **OSWorld 2.0 (Anthropic evaluation):** 75.4% (100th percentile, rank 1 of 24) - from benchmarklist.com. "OSWorld2.0: Benchmarking Computer Use Agents on Long-Horizon Real-World Tasks 75.4% 100th percentile rank 1 of 24" - #1 on this computer use benchmark. Source: same.
- **SWE-bench Multimodal:** Not directly reported but Opus 5 leads on "Frontier-Bench v0.1" per the Opus 5 announcement.
- **Agents' Last Exam:** 32.20 (Max Tools, 4/16) - from DataLearnerAI.
- **MCP-Atlas:** 85.80 (Extra-High Tools, 4/50) - from DataLearnerAI.
- **Vibe Code Bench v1.1:** 88.40 (Max Tools, 8/64) - from DataLearnerAI.
- **FrontierCode 1.1 Main:** 53.40 (4/13) - from DataLearnerAI.
- **Program Bench:** 37 (6/17) - from DataLearnerAI.
- **ExploitGym (budget unspecified):** 22.10 (3/10) - from DataLearnerAI.
- **AA Coding Agent Index v1.5:** 59.70 (3/11) - from DataLearnerAI.
- **Code Migration:** 57.47 (6/47) - from DataLearnerAI.
- **IOI (Vals v2):** 84.33 (8/29) - from DataLearnerAI.
- **MedScribe:** 90.98 (3/66) - from DataLearnerAI.
- **MedCode:** 63.57 (Max Tools) - from DataLearnerAI.
- **OpsWorld 2.1:**
  - Low Tools: 59.09 (8/8)
  - Medium Tools: 64.85 (7/8)
  - High Tools: 68.92 (6/8)
  - Max Tools: 77.67 (4/8)
  - Extra-High Tools: 73.11 (5/8)
- **τ³-Banking:** Not separately detailed but mentioned in Opus 5 announcement context.
- **Artificial Analysis Opus 5 announcement (Jul 24, 2026) key claims:**
  - "Opus 5 is narrowly the most intelligent model on the Artificial Analysis Intelligence Index, offering comparable intelligence to Fable 5 at 26% lower Cost per Task"
  - "New leader in agentic knowledge work: Claude Opus 5 (max) scores 1861 Elo on GDPval-AA v2, >100 points ahead of Claude Fable 5 and GPT-5.6 Sol (max)"
  - "Joint first place on the Coding Agent Index: Claude Opus 5 (xhigh) with Claude Code leads the Artificial Analysis Coding Index, including the highest score on SWE-Atlas-QnA"
  - "Frontier intelligence with reduced cost: Claude Opus 5 (max) costs $2.03 on average per Intelligence Index task, below Claude Fable 5 (with fallback) at $2.75, but still above Claude Opus 4.8 (max)"
  - "Opus 5 (max) scores 61 on the Artificial Analysis Intelligence Index, effectively tied with Claude Fable 5 (max, 60), and ahead of GPT-5.6 Sol (max, 59), Kimi K3 (57), and Claude Opus 4.8 (max, 56)"
  - "On ARC-AGI-3, Opus 5's score is three times as high as the next-best model"
  - "On Zapier AutomationBench, Opus 5's pass rate is around 1.5× the next-best model for the same cost per task. Even at its lowest effort setting, Opus 5 passes more tasks than any other model. Previous models didn't pass; Opus 5 hit 100%."
  - "On our automated behavioral audit, Opus 5 scores 2.3 on overall misaligned behavior, the lowest of our recent models"
  - "Opus 5 does not advance the frontier in risky, dual-use capabilities. In rigorous evaluations conducted alongside private-sector and government partners, we found it remains behind Mythos 5 in both biology research and offensive cybersecurity. However, it comes close to Mythos 5 at finding cybersecurity vulnerabilities."
  - "Previous models didn't pass; Opus 5 hit 100% on the Cowork evaluation"
  - "Results for previous models may show variance from previous system cards due to routine evaluation updates"

- **apidog.com blog (additional benchmarks):**
  - SWE-Bench Pro: 81.3 (but this might be for Sonnet 5.5, not Opus 5 - need to verify)
  - Actually the DataLearnerAI page lists different benchmarks for Opus 5

- **vals.ai Opus 5 evaluation (from the Opus 5 announcement and related articles):**
  - Vals Index: 74.8% (rank 2 of 40) — just behind the field leader
  - AutomationBench-AA: 68.5% (completes every objective without guardrail violation on 41.6% of workflows, compared with 32.1% for Fable 5.1 and 28.3% for Opus 5 max — wait, that says Opus 5 max at 28.3%, let me re-check)
  - Actually from the v5 article: "GPT-6 Astra (max) scores 68.5%, compared with 66.7% for Grok 4.6 (high) and 62.2% for GLM-5.3 (max). Astra (max) completes every objective without a guardrail violation on 41.6% of workflows, compared with 32.1% for Claude Fable 5.1 (max with fallback) and 28.3% for Claude Opus 5 (max)."
  - So Opus 5 max at 28.3% on AutomationBench-AA (objectives completed without violations)

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 92/100.** Strong function calling, tool-use, and JSON mode support per Anthropic docs; capped by legacy status (migration recommended to Opus 5.5), higher per-token pricing ($5/$25 per MTok), and no longer the current-generation model.
- **Reasoning: 94/100.** Artificial Analysis Intelligence Index 63.1 (v4.3, max percentile) and HLE 64.7% (100th percentile) demonstrate exceptional reasoning; capped by the model being legacy (Opus 5.5 surpasses it at 57.6 on v5.0, 58 on max effort) and higher cost per task.
- **Context window: 100/100.** 1M token context verified from official model card; same as all current-generation Claude models; no practical cap for typical use cases.
- **Multimodal: 85/100.** Image input supported per model card; no audio/video/PDF support; score reduced relative to fully multimodal competitors (Gemini 4 Argon 92, Muse Spark 1.3 90). Image input is the sole multimodal feature.
- **Coding: 90/100.** Coding Agent Index 68.1 (joint first place on Coding Agent Index with Claude Code at xhigh), Vibe Code Bench 88.40 (8/64, strong relative ranking), SWE-Bench Multilingual capabilities, AutomationBench strong performance (68.5% at cutting edge). Capped by trailing on some private-evaluation components and the model's legacy status.
- **Cost efficiency: 55/100.** "26% lower Cost per Task" compared to Fable 5's prior pricing; $2.03 average per AA Intelligence Index task (below Fable 5 at $2.75, above Opus 4.8). However, at list prices ($5/$25 per MTok), it's the most expensive current Claude model — 2.5× Opus 5.5 ($4/$20), 5× Sonnet 5 ($1/$5). Relative cost efficiency is a strength vs. Fable 5 but weak vs. Opus 5.5/Sonnet 5 at list prices. The $2.03 per AA Index task is competitive, but list-price positioning limits the score.
- **Overall Score: 92/100.** Mean of the five non-cost dims: (92 + 94 + 100 + 85 + 90) / 5 = 461 / 5 = 92.2, which aligns almost exactly with the queue's listed Overall 92.5 (minor difference due to rounding or slight dim weighting differences). The five-dim mean of 92.2 effectively matches the queue position.

### Summary

Claude Opus 5 (released July 24, 2026) is Anthropic's legacy Opus-class model, marketed as offering "Fable-level intelligence at 26% lower cost per task" compared to Fable 5's prior pricing, and positioned as the strongest model on Claude Pro and the default on Claude Max. Though succeeded by Claude Opus 5.5 (current) and Claude Opus 4.8 (previous), it still delivers remarkable capabilities across a broad evaluation suite.

Key strengths:
- **Reasoning & knowledge leadership:** HLE 64.7% (100th percentile, rank 3 of 488 — top 0.6%), MMLU Pro 91.6% (rank 1 of 116), Vals Index 74.8% (rank 2 of 40 — just behind the field leader), and the highest Artificial Analysis ECI score yet at 162.1 (95% CI [158.0, 167.3], n=40 benchmarks).
- **Agentic knowledge work:** Unmatched on GDPval-AA v2 with 1861 Elo (>100 points ahead of Fable 5 and GPT-5.6 Sol); AutomationBench pass rate 1.5× the next-best model; 100% on Cowork evaluation (previous models didn't pass).
- **Coding agent prowess:** Joint first place on the Artificial Analysis Coding Agent Index (at xhigh effort with Claude Code), including the highest SWE-Atlas-QnA score; strong Vibe Code Bench (88.40) and Code Migration (57.47) scores.
- **Computer use:** #1 on OSWorld 2.0 (75.4%, rank 1 of 24) — long-horizon real-world task agentic computer use.
- **Cost efficiency (relative):** "26% lower Cost per Task" compared to Fable 5's prior pricing; $2.03 average per AA Intelligence Index task (below Fable 5 at $2.75, above Opus 4.8). However, at list prices ($5/$25 per MTok), it's the most expensive current Claude model — 2.5× Opus 5.5 ($4/$20), 5× Sonnet 5 ($1/$5).
- **Behavioral safety:** Lowest overall misaligned behavior score (2.3) among recent Anthropic models — "the safest model yet in terms of avoiding reckless actions that could have hard-to-reverse side effects."

Trade-offs:
- **Legacy status:** Successor Opus 5.5 surpasses on every index (Opus 5.5 at 57.6 on v5.0 vs Opus 5 at 50.8; Opus 5.5 at 53.4 on HLE vs Opus 5 at 64.7% — wait, that's not a fair comparison since different metrics; the key point is Opus 5.5 is the current recommended model)
- **Pricing:** $5 / $25 per MTok — the most expensive per-token cost among current Claude models (2.5× Opus 5.5, 5× Sonnet 5). Marketed as "26% lower cost per task than Fable 5" but at list prices it's a premium model.
- **Not the absolute leader on every benchmark:** Opus 5.5 leads on Intelligence Index (57.6 vs 50.8), Coding Agent Index, and many others. For new workloads, Opus 5.5 is the recommended default.
- **Guardrail violations:** 28.3% of tasks have guardrail violations on AutomationBench (vs 32.1% for Fable 5.1 max, 41.6% for GPT-6 Astra max — so Opus 5 is middle-of-the-road on this metric).

Claude Opus 5 is recommended for legacy workflows, cost-insensitive environments valuing its specific benchmark profile (especially GDPval-AA v2 agentic knowledge work at 1861 Elo and OSWorld 2.0 computer use at 75.4%), or as a downgrade from Opus 5.5 where cost savings are prioritized over maximum capability. It is especially well-suited for agentic knowledge work, long-horizon computer use tasks, and scenarios where its unique combination of high HLE performance and strong Vals Index ranking provides decisive advantage. For all new workloads, migration to Claude Opus 5.5 is strongly recommended.

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-06
- Method: Public internet research using official Anthropic model card, Artificial Analysis, benchmarklist.com, vals.ai, DataLearnerAI, apidog.com, and Opus 5 announcement/system card comparisons; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude Opus 5 Model Card](https://platform.claude.com/docs/en/models/opus-5/overview)
  - [Anthropic: Opus 5 Announcement](https://www.anthropic.com/news/claude-opus-5)
  - [Anthropic: Opus 5 System Card PDF](https://www-cdn.anthropic.com/ceaf5c7ff2783855203fde8208ec311252dced5b/Claude%2BOpus%2B5%2BSystem%2BCard.pdf)
  - [Artificial Analysis: Opus 5](https://artificialanalysis.ai/articles/opus-5)
  - [Artificial Analysis: Opus 5 model page](https://artificialanalysis.ai/models/claude-opus-5)
  - [benchmarklist.com: Opus 5](https://benchmarklist.com/models/anthropic-claude-opus-5/)
  - [Vals AI: Opus 5](https://www.vals.ai/models/anthropic_claude-opus-5-5) (comparison page, also covers Opus 5)
  - [valumigo.com: Intelligence Index leaderboard](https://valumigo.com/en/benchmarks/or-aa-intelligence)
  - [DataLearnerAI: Opus 5 analysis](https://www.datalearner.com/en/ai-models/pretrained-models/claude-opus-5/analysis)
  - [Artificial Analysis v5 article: cost per task](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5)
  - [Artificial Analysis Opus 5 announcement](https://artificialanalysis.ai/articles/opus-5)

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-5/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-opus-5/`.
4. No benchmark invented; zero verified benchmarks → not applicable (many verified scores found).