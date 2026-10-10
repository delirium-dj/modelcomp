# Claude Opus 4.8 — findings by Space Bunny

- Source: Anthropic (`claude-opus-4-8`; adaptive reasoning, max effort)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **What changed since the first pass.** The first pass found almost no absolute benchmark
> values. Anthropic's **System Card** publishes a full capability table, and independent labs have
> since run the model. **Lifecycle correction:** `claude-opus-4-8` is **Active** on Anthropic's
> schedule — retirement "not sooner than 2027-05-28" — and is the *default consumer-side fallback*
> whenever Opus 5 flags a request, so it is very much a production model today.

## Model card

- **Name:** Claude Opus 4.8 (adaptive reasoning, max effort)
- **Short description:** Anthropic's May 2026 upgrade to Opus 4.7 across software engineering, agentic tool use and knowledge work — best known for a step change in *honesty*: roughly four times less likely than its predecessor to let a flaw in its own code pass unremarked.
- **Provider / access:** Claude API (`claude-opus-4-8`); Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS; OpenRouter; OpenCode Zen. Also the **default fallback model** for flagged requests on claude.ai, Claude Code and Cowork.
- **Release / knowledge:** Announced **2026-05-28**; knowledge cutoff **May 2026**. **Active (legacy)** — retirement not sooner than 2027-05-28 on Anthropic-operated platforms.
- **IDs:** `claude-opus-4-8`; max is an effort configuration (five levels: low, medium, high default, xhigh, max).
- **Context window:** 1,000,000 tokens; 128K max synchronous output, up to **300K** on the Message Batches API via the `output-300k-2026-03-24` beta header.
- **Modalities:** Text and image input; text output; adaptive thinking; tool use, structured outputs, prompt caching, Batch API. No audio or video.
- **Pricing (as of 2026-10-10):** **$5 input / $0.50 cache read / $25 output per 1M**; cache writes $6.25 (5m) / $10 (1h); Batch $2.50/$12.50; fast mode $10/$50 at ~2.5× output speed. Pricing unchanged from Opus 4.7.
- **Architecture:** Proprietary; Anthropic discloses no parameter count.

### Raw benchmarks found

*Anthropic's System Card and launch table (vendor, max effort unless noted):*

- SWE-bench Verified **88.6%**; SWE-bench Pro **69.2%**; SWE-bench Multilingual **84.4%**; SWE-bench Multimodal **38.4%**
- Terminal-Bench 2.1 **74.6%** (Terminus-2 public harness); Terminal-Bench 3.0 **21.1%**
- GPQA Diamond **93.6%**; HLE **57.9% with tools / 49.8% without**; USAMO 2026 and ArxivMath sections included
- BrowseComp **84.3%** single-agent / **88.5%** multi-agent; DeepSearchQA **93.1%**; **DRACO 80.6%** (perplexity deep-research); Online-Mind2Web **84%**
- OSWorld-Verified **83.4%** (Anthropic updated the harness this round and restated Opus 4.7 upward to 82.3%); MCP Atlas **82.2%**; Toolathlon **59.9%**
- Finance Agent v2 **53.9%**; GDPval-AA **1,590–1,890 Elo** depending on the row
- Alignment, per Anthropic: around **4× less likely than Opus 4.7 to let a code flaw pass unflagged**; misaligned behaviour (deception, cooperation with misuse) down to rates near Mythos Preview; new highs on prosocial traits

*Independent:*

- **Long context is the big addition:** **AA-LCR v1.1 77.7%** (rank 67 of 408); **GraphWalks Parents F1 83.3% at 1M and 99.3% at 256k**; **GraphWalks BFS F1 68.1% at 1M and 85.9% at 256k**; **MRCR v2 8-needle 83.2% at 256K**
- **Agentic:** Agentic Skills Evaluation Framework **92.7%** (#1 of 19); CEO-Bench **213.41** (#1 of 10); CHI-Bench 33.3% (#1 of 15); EdgeBench 51.3 (#1 of 5); **APEX-Agents 59.4%** (#2 of 44); Toolathlon **79.9% Pass@1** (#2 of 41); WildClawBench 64.7% (#2 of 36); Ko-WideSearch 52.9% (#2 of 21); Workspace-Bench 66.8%; Composite-Bench 73.0%; WebArena-Verified 71.2% (#2 of 14); Long-Horizon Terminal-Bench 0.49 (#3 of 21); WANDR 24.9%; Agents' Last Exam 45.2%; AutomationBench 69.4%
- **Coding:** LiveCodeBench **87.8%** (#6 of 123, Vals); SWE-bench Verified 88.60% (Vals, rank 11 of 23); CursorBench 3.1 **58.4%** and 3.2 **62.3%**; FrontierCode 1.1 Main **46.5%**; Frontier-Bench 21.1% ±1.6; PostTrainBench 34.1%; NL2Repo 69.0%; Terminal-Bench Hard 58.3% (#3 of 326)
- **Reasoning:** GPQA Diamond **92.42%** (Vals, rank 14 of 23) and **92.02%** (Artificial Analysis) — both below Anthropic's 93.6%; MMLU-Pro 89.59%; MMMU-Pro 86.59%; ARC-AGI-2 72.1%; ARC-AGI-1 92.5%; **ARC-AGI-3 1.5%**; SimpleQA Verified 53.0%
- **AA-Omniscience: Index 28.8, accuracy 48.8%, hallucination rate 39.3%** — and **non-hallucination 60.7%**, 21.5 points above Opus 5 and the single clearest 4.8 advantage over its successor
- **Terminal-Bench 4.0: 21.72%** (Artificial Analysis) / **23.23%** (Vals); Terminal-Bench 2.1 Vals 71.9%; ProgramBench **1.00%**; Vals CyberBench 50.8%; Terminal-Bench-Science 10.5%
- **Vals Index 55.10% ±1.12** (rank 13 of 33); AA Intelligence Index 41.8 (v4.3.2), Coding Index 74.3, Agentic Index 42.6, τ²-Bench 94.4%, SciCode 54.4%; $4.08 per Index task, ~56.3 tok/s, 170M output tokens

### Normalized scores (1–100)

- **Tool use: 93/100.** The broadest agentic profile measured on this model: APEX-Agents 59.4% at rank 2, Toolathlon 79.9% Pass@1, WildClawBench 64.7%, DeepSearchQA 93.1%, BrowseComp 84.3/88.5%, DRACO 80.6%, AutomationBench 69.4%, Agents' Last Exam 45.2%, MCP Atlas 83.6% on the independent track, plus Dynamic Workflows (hundreds of parallel subagents). Held back only by the frontier-terminal result — Terminal-Bench 4.0 at 21.72/23.23% and Frontier-Bench at 21.1%.
- **Reasoning: 90/100.** GPQA Diamond 93.6% (Anthropic) / 92.42% (Vals) / 92.02% (AA) — all frontier-adjacent — plus HLE 57.9%, ARC-AGI-2 72.1%, τ²-Bench 94.4% and SciCode 54.4%. Capped by ARC-AGI-3 at 1.5%, Frontier-Bench at 21.1% and Omniscience accuracy of 48.8%, where Opus 5 and 5.5 are clearly ahead.
- **Context window: 98/100.** The first pass treated the 1M window as an unverified capacity claim. It is now backed by measured retrieval at length: **GraphWalks Parents F1 83.3% at the full 1M**, BFS 68.1% at 1M, **AA-LCR 77.7%** and MRCR v2 83.2% at 256K, on top of a 1M window with 300K batch output. ProgramBench at 1.00% is an agentic weakness, not a retrieval one.
- **Multimodal: 80/100.** Text and image in with text out and a full multimodal programme in the System Card — ChartQAPro, ChartMuseum, LAB-Bench FigQA, CharXiv Reasoning, ScreenSpot-Pro (**89.5% with tools, 82.4% without**), OSWorld-Verified 83.4%, plus SWE-bench Multimodal 38.4% and MMMU-Pro 86.59%. Strong and genuinely visual; capped by the absence of audio/video and by SWE-bench Multimodal sitting at 38.4%.
- **Coding: 92/100.** SWE-bench Verified 88.6% (Anthropic and Vals agree), Multilingual 84.4%, LiveCodeBench 87.8% at rank 6 of 123, CursorBench 3.2 at 62.3%, FrontierCode 1.1 Main 46.5%, Terminal-Bench Hard 58.3% at rank 3 of 326. Deducted for SWE-bench Pro at only 69.2%, Terminal-Bench 2.1 at 74.6% (Vals 71.9%), Terminal-Bench 4.0 near 22% and ProgramBench at 1.00% — every one of which Opus 5 beats by a wide margin.
- **Cost efficiency: 55/100.** $5/$25 with a 90% cache discount and $2.50/$12.50 Batch, plus a fast mode at $10/$50 that is three times cheaper than the previous generation's. Against it: $4.08 per Intelligence Index task on 170M output tokens, and **Opus 5 launched at the identical $5/$25 while beating it on essentially every benchmark, and Opus 5.5 at $4/$20 is both cheaper and stronger.** The only defensible reason to stay on 4.8 is that a pinned integration keeps working unchanged.
- **Overall Score: 91/100.** (93 + 90 + 98 + 80 + 92) / 5 = 453 / 5 = 90.6. Best fit for production pipelines pinned to a stable Opus ID, and for the honesty properties specifically — 4.8 is materially less likely to fabricate support for a claim than anything newer in the family.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: second-pass public internet research across Anthropic's Opus 4.8 announcement and full System Card, the Claude Platform model-overview and deprecation pages, Artificial Analysis model data, Vals AI benchmark rows, BenchmarkList's system-card transcription with ranks, AIEvals' independent-vs-publisher comparison against Opus 5, Vector Wire's head-to-head across 58 shared tests, and BenchLM's paired comparison; the three GPQA readings, the two Terminal-Bench 2.1 readings and the two Terminal-Bench 4.0 readings are reported side by side; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- Anthropic — Introducing Claude Opus 4.8 (2026-05-28): https://www.anthropic.com/news/claude-opus-4-8
- Anthropic — Claude Opus 4.8 System Card (full capability table, alignment assessment): https://www.anthropic.com/claude-opus-4-8-system-card
- Claude Platform — model deprecations (Opus 4.8 active, not sooner than 2027-05-28) and Opus 5 lineup: https://platform.claude.com/docs/en/models/opus-5/overview
- BenchmarkList — Opus 4.8 leaderboard rows incl. AA-LCR, GraphWalks, MRCR, Toolathlon, APEX-Agents, Terminal-Bench Hard: https://benchmarklist.com/models/anthropic-claude-opus-4.8/
- AIEvals — Claude Opus 4.8 aggregated results (Vals Index 55.10%, Terminal-Bench 4.0, cost/speed): https://aievals.app/models/claude-opus-4-8
- LLM Reference — Opus 4.8 provider routes, pricing and benchmark table: https://www.llmreference.com/model/claude-opus-4-8
- BenchLM — Claude Opus 4.8 benchmark record (40 sourced scores): https://benchlm.ai/models/claude-opus-4-8
- Vector Wire — Opus 4.8 vs Opus 5 across 58 shared tests (incl. the non-hallucination gap): https://vectorwire.ai/compare/claude-opus-4-8-vs-opus-5
- benchr — Opus 4.8 review with launch-table caveats: https://benchr.org/articles/claude-opus-4-8-review
- StationX — Opus 5 review, including the 4.8 lifecycle and fallback role: https://app.stationx.net/articles/claude-opus-5-review