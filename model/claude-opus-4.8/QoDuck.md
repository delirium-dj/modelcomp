# Claude Opus 4.8 — findings by QoDuck

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (Anthropic Opus-tier flagship at release; now deprecated, superseded by Claude Opus 5 / 5.5)
- **Short description:** Anthropic's most capable general-access model at its May 2026 launch, focused on coding, long-running agentic work, computer use and honesty/alignment (≈4× less likely than 4.7 to let its own code flaws pass unremarked). Topped the Artificial Analysis Intelligence Index at launch (61.4, #1); now deprecated and no longer headline-ranked by AA.
- **Provider / access:** Claude API `claude-opus-4-8` (pinned snapshot); claude.ai; Claude Code; AWS Bedrock `anthropic.claude-opus-4-8`; Google Cloud `claude-opus-4-8`. Messages API (system entries now allowed inside the messages array); Batches API. 7 API providers per AA.
- **Release / knowledge:** Released 2026-05-28. Knowledge/training cutoff January 2026 (morphllm). Status: deprecated (AA: "Anthropic has launched a newer release, Claude Opus 5").
- **IDs:** `claude-opus-4-8` (Anthropic), `anthropic.claude-opus-4-8` (Bedrock). No Free ID; proprietary, closed weights.
- **Context window:** 1,048,576 tokens (1M); max output 128K (synchronous Messages API) / 300K (Batches API with `output-300k-2026-03-24` beta). Verified via AA + morphllm + llm-stats.
- **Modalities:** Input text + image (vision) + PDF/documents; output text only. Reasoning: yes (adaptive; default high, plus xhigh/"extra" and max). Tool calls: yes (parallel tools, hundreds of parallel subagents via Claude Code dynamic workflows, research preview). Computer use / browser agents: yes (strongest tested at launch). No audio/video input.
- **Pricing (as of 2026-11-10):** Standard $5 in / $25 out per 1M (unchanged Opus 4.5–4.8); cache hit $0.50 (90% discount), cache write $6.25 (25% premium, 5-min TTL); blended ~$3.85 (7:2:1). Fast mode $10 in / $50 out (~2.5× speed; research-preview/account-manager access, "3× cheaper than previous fast mode"). Prompt-cache minimum dropped 4,096→1,024 tokens. New tokenizer yields ~30% more tokens per prompt than pre-4.7 models (raises real cost). Speed 82 tok/s; TTFT 35.39s (AA).
- **Architecture:** Proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

> Current Artificial Analysis components (v5.0.1 page, max effort) preferred where
> available; Anthropic self-reported launch values (via llm-stats) and independent
> Vals/Cursor runs cited otherwise. Vintage conflicts reconciled below. "no verified
> public score found" = not published for this exact ID.

Agent / tool use:

- tau2-Bench (**Telecom**): **94.44%** (current AA); tau-Banking **34.23%** (current AA) — Telecom very strong, Banking moderate.
- Terminal-Bench 2.1: **84.64%** (current AA) / 74.6% (Anthropic system card) / 71.9% (Vals) — source variance; near the ~88% anchor.
- Terminal-Bench 4.0: **21.72%** (current AA); Terminal-Bench Hard 58.33%; TB 3.0 21.1% / 4.1 23.60% (benchlm) — weak on the hardest current terminal evals.
- GDPval-AA (**Elo**): current **1461.75** (AA, CI 1446–1477); launch **1890** (#1, +121 ahead of next-best, ~67% win vs GPT-5.5 xhigh); benchmarklist 1600.12 — see conflict note (pool-relative decline).
- OSWorld-Verified: **83.4%** (Anthropic self-reported; harness updated, Opus 4.7 revised 82.3% — not clean like-for-like).
- BrowseComp: **84.3%** single-agent / **88.5%** multi-agent (Anthropic). MCP-Atlas: **82.2%** (Anthropic). Toolathlon: **59.9%** (Anthropic).
- Online-Mind2Web: **84%** (browser agent; beats Opus 4.7 + GPT-5.5). ScreenSpot-Pro: **87.9%** (GUI grounding).
- AutomationBench-AA: **45.59%** (current AA, partial). AA-Briefcase Elo: **1319.66** (current AA).
- Super-Agent benchmark: **only model to complete every case end-to-end** at launch (Kay Zhu; beats prior Opus, matches GPT-5.5 at equal cost). Legal Agent Benchmark: **first model to break 10% overall on the all-pass standard** (highest recorded).
- Claw-Eval / ClawProBench / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **92.02%** (current AA) / **93.6%** (Anthropic system card) / 92.4% (Vals) — clears the 90% anchor.
- HLE (Humanity's Last Exam): **48.66%** (current AA standard) / **57.9%** with tools, **49.8%** without tools (Anthropic launch) — clears the 40% anchor; led the field at launch.
- Artificial Analysis Intelligence Index: launch **61.4 (#1**, max effort, v4.x; +4.1 over Opus 4.7, +1.2 over GPT-5.5 xhigh); current AA page **N/A/null** (deprecated); secondary estimates benchmarklist 55.69, benchlm 41.8 — see conflict note.
- SciCode: **54.40%** (current AA). AA-LCR (long-context reasoning): **77.67%** (current AA). CritPt v1: **20.86%** (current AA; ahead of Gemini 3.1 Pro, behind GPT-5.4/5.5).
- USAMO 2026: **96.7%** (Anthropic). MMLU-Pro: **89.6%** (Vals). DeepSearchQA: **93.1%** (Anthropic). IFBench: 62.24% (current AA).
- AA-Omniscience: launch **27.4 (#2**, accuracy 46.6%, hallucination **35.9%**); current null. Willison: lowest incorrect-rate of six models, mainly by abstaining on uncertain questions.
- ARC-AGI-3: **1.5%** (launch-SOTA per mindstudio, June 2026; later superseded by Opus 5 at 30.2%, arcprize July 2026) — extremely hard interactive benchmark, tiny absolute score.
- AIME 2025 / ARC-AGI-2 / LCR / MLCR: no verified public score found (USAMO 96.7% is the math-olympiad proxy; ARC-AGI-3 1.5% noted).

Coding:

- SWE-bench Verified: **88.6%** (Anthropic system card; Vals current **88.60%** Mini-SWE-agent, $1.92/task, rank 12; **85.80%** Claude Code, $0.67/task, rank 16) — top-tier, well-corroborated.
- SWE-bench Pro: **69.2%** (Anthropic). SWE-bench Multilingual: **84.4%** (Anthropic).
- LiveCodeBench: **87.8%** (Vals). Terminal-Bench 2.1: 84.64% (current AA). SciCode: 54.40% (current AA, just under the 55% anchor).
- CursorBench 3.1: **58.4%** / 3.2: **62.3%** (Cursor evals via benchlm). AA Coding Agent Index: launch **77 (#1)** (reddit/AA), current **74.3%** (benchlm).
- DeepSWE / Vibe Code Bench / ProgramBench: no verified public score found for this ID.
- Honesty: ≈4× less likely than Opus 4.7 to let code flaws pass unremarked; 17× fewer dishonest agentic-coding summaries than Sonnet 4.6. Cursor: more efficient tool calling (fewer steps); Devin: clean tool use, fixes 4.7's comment-verbosity/tool-calling issues.

Long context:

- 1,048,576-token (1M) window. GraphWalks: BFS **68.1% @1M** / 85.9% @256K; Parents **83.3% @1M** / 99.3% @256K (Anthropic). AA-LCR 77.67% (current AA). No verified ≥98% needle-retrieval at 512K+ (GraphWalks @1M is 68–83%).

Multimodal:

- Text + image (vision) + PDF/documents in → text out (AA + llm-stats + Anthropic Genie). CharXiv-R (with tools): **89.9%** (chart reasoning); ScreenSpot-Pro: **87.9%** (GUI grounding). Databricks: multimodal reasoning at 61% lower token cost than Opus 4.7. MMMU / MMMU-Pro / Video-MME / audio benchmarks: no verified public score found; no audio/video input.

### Normalized scores (1–100)

> Derived from the raw numbers above per `model-comparison.md`. Overall = half-up
> mean of the five quality dims; Cost efficiency scored independently and excluded.

- **Tool use: 89/100.** tau2-Bench Telecom 94.44% and Terminal-Bench 2.1 84.64% (current AA) are strong, with OSWorld-Verified 83.4%, BrowseComp 84.3%, MCP-Atlas 82.2%, Online-Mind2Web 84% and the Super-Agent benchmark (only model to complete every case end-to-end at launch) confirming top-tier agency; capped below 90 by the current pool-relative GDPval-AA Elo 1461.75 (down from launch 1890/#1 as stronger models joined), weak Terminal-Bench 4.0 21.72%, and deprecated status.
- **Reasoning: 90/100.** GPQA Diamond 92.02% (current AA; 93.6% system card) clears the 90% anchor and HLE 48.66% (current AA; 57.9% with tools at launch) clears the 40% anchor, with USAMO 2026 96.7%, MMLU-Pro 89.6% and AA-LCR 77.67% corroborating; capped at 90 by weak CritPt 20.86%, moderate hallucination 35.9%, and the deprecated/null current AA headline Index (launch 61.4/#1 no longer displayed).
- **Context window: 95/100.** 1,048,576-token window (128K sync / 300K batch output) meets the ≥1M tier; GraphWalks at 1M (BFS 68.1%, Parents 83.3%) and AA-LCR 77.67% show solid but not ≥98% retrieval at 512K+, so 95 rather than 100.
- **Multimodal: 73/100.** Text + image (vision) + PDF/document input → text output, with strong measured vision (CharXiv-R 89.9% with tools, ScreenSpot-Pro 87.9% GUI grounding) lifting it above the text+image-only band (~68); capped at 73 by no audio/video input, text-only output, and no published MMMU-Pro.
- **Coding: 90/100.** SWE-bench Verified 88.6% (system card + Vals current 88.60%) is top-tier, with SWE-bench Pro 69.2%, LiveCodeBench 87.8%, Terminal-Bench 2.1 84.64% and AA Coding Agent Index 74.3% (launch #1 at 77); capped at 90 by SciCode 54.40% just under the 55% anchor, unpublished DeepSWE, and weak Terminal-Bench 4.0 21.72%.
- **Cost efficiency: 50/100.** $5 in / $25 out per 1M sits between the $3/$15≈60 and $10/$50≈30 anchors (~51 interpolated); a 90% cache-hit discount ($0.50) helps repeated context, but the new tokenizer (~30% more tokens per prompt) raises real cost and fast mode is $10/$50, capping at 50.
- **Overall Score: 87.4/100.** Half-up mean of (89 + 90 + 95 + 73 + 90) / 5 = 437 / 5 = 87.4 (Cost excluded). Best fit: long-running agentic coding, repository refactoring and computer-use workflows where SWE-bench Verified 88.6%, honesty and parallel-subagent autonomy matter; a strong but now-deprecated frontier model superseded by Opus 5/5.5, with limited (text+image+PDF) modalities.

### Conflicting-results notes

- **Intelligence Index 61.4 (launch) vs N/A (current) vs 55.69/41.8 (secondary):** AA's official launch article + LinkedIn give **61.4 (#1**, max effort, v4.x). The current AA model page shows the headline Index **null/N/A** because the model is **deprecated** (superseded by Opus 5; current AA leader is Claude Fable 5.2 at 65). Secondary aggregators disagree on a current-derived value: benchmarklist **55.69**, benchlm **41.8**. Resolved: no authoritative current AA headline Index exists; scoring relies on robust current AA components (GPQA 92.02, HLE 48.66, SciCode 54.40, AA-LCR 77.67) and launch self-reported values, with 61.4/#1 documented as the historical launch headline.
- **GDPval-AA 1890 (launch) vs 1461.75 (current) vs 1600.12 (benchmarklist):** launch AA article/llm-stats/Anthropic report **1890 Elo (#1**, +121 ahead of next-best). The current AA model page reports **1461.75** (CI 1446–1477) — a pool-relative decline as much stronger models (Opus 5.5, GPT-6.1, Fable 5.2) joined the Elo pool. Resolved in favor of the current AA value (1461.75) for current tool-use scoring; launch 1890/#1 documented as historical.
- **Terminal-Bench 2.1 84.64 vs 74.6 vs 71.9:** current AA 84.64%, Anthropic system card 74.6%, Vals 71.9% — harness/effort variance. The current AA value (84.64%) is used as authoritative-independent; all cited.
- **GPQA 92.02 vs 93.6 vs 92.4 / HLE 48.66 vs 57.9:** current AA GPQA 92.02% / HLE 48.66% (standard) vs Anthropic system card GPQA 93.6% / HLE 57.9% (with tools). Both vintages cited; current AA used for the anchor check, launch-with-tools noted as the higher self-reported figure.
- **ARC-AGI-3 1.5% "SOTA" vs Opus 5 30.2%:** mindstudio (June 2026) called Opus 4.8's 1.5% the highest recorded on ARC-AGI-3; arcprize (July 2026) shows Opus 5 at 30.2%. Resolved: 1.5% was launch-SOTA on an extremely hard benchmark, since superseded; tiny absolute score, not weighted as a strong reasoning signal.
- **Deprecated status:** AA flags Opus 4.8 deprecated (Opus 5 launched). Absolute benchmarks remain strong (SWE-bench Verified 88.6%, GPQA 92%), but pool-relative measures (Index, GDPval-AA) and hardest current evals (TB4.0 21.72%) reflect its superseded standing; scored on current evidence with launch figures documented.
- **OSWorld 83.4% harness caveat:** Anthropic's OSWorld-Verified gain (+5.4 over 4.7) is partly due to an updated test harness (4.7 revised to 82.3%), so not a clean like-for-like; cited with that caveat.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research — 5+ independent web searches plus direct fetches of the official Anthropic announcement, Artificial Analysis (launch article + current deprecated model page), morphllm, llm-stats, benchlm, Vals AI and mindstudio; official + independent sources cross-compared, launch-vs-current vintage conflicts (Index 61.4→N/A, GDPval-AA 1890→1461.75) reconciled in favor of current AA components, deprecated status documented. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)
  - [Artificial Analysis — Claude Opus 4.8 current model page (deprecated)](https://artificialanalysis.ai/models/claude-opus-4-8)
  - [Artificial Analysis — Claude Opus 4.8 launch analysis (#1, Index 61.4)](https://artificialanalysis.ai/articles/claude-opus-4-8-analysis-and-benchmarks)
  - [Artificial Analysis on LinkedIn — Opus 4.8 takes the lead (61.4)](https://www.linkedin.com/posts/artificial-analysis_claude-opus-48-takes-the-lead-on-the-artificial-activity-7465886211073601536-xmGw)
  - [morphllm — Claude Opus 4.8 pricing, context, benchmarks, API](https://www.morphllm.com/opus-4-8)
  - [LLM Stats — Claude Opus 4.8 launch benchmark table](https://llm-stats.com/blog/research/claude-opus-4-8-launch)
  - [BenchLM — Claude Opus 4.8 (November 2026 current)](https://benchlm.ai/models/claude-opus-4-8)
  - [Vals AI — SWE-bench Verified leaderboard (Opus 4.8 88.60%)](https://www.vals.ai/benchmarks/swebench)
  - [mindstudio — ARC-AGI-3 and Claude Opus 4.8 fluid intelligence](https://www.mindstudio.ai/blog/what-is-arc-agi-3-claude-opus-4-8-fluid-intelligence)
  - [ARC Prize — Claude Opus 5 ARC-AGI-3 results (30.2%, supersedes 4.8)](https://arcprize.org/results/anthropic-claude-opus-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.