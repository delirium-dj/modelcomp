# Claude Mythos 5 — findings by Beam

- Source: Anthropic (`claude-mythos-5`)
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-11-04)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5 (Anthropic) — restricted "Mythos-class" cyber-defense flagship; safeguard-free twin of Claude Fable 5 (same weights, security refusals lifted for vetted defenders). Project Glasswing / Cyber Verification Program (CVP).
- **Short description:** Anthropic's June-2026 restricted-access flagship: Claude Fable 5 weights with cybersecurity/biology refusals lifted for verified defenders. Frontier-class across the board (SWE-bench Verified 95.5%, GPQA Diamond 94.1%, USAMO 2026 ~99.8%, Terminal-Bench 2.1 88.0%) at 1M/128K context — but access is gated to the CVP and pricing is premium $10/$50.
- **Provider / access:** Anthropic Messages API `claude-mythos-5` (and Bedrock `anthropic.claude-mythos-5`, Google Cloud, Microsoft Foundry) — restricted to the Cyber Verification Program / Project Glasswing; approved organizations only. Not on OpenCode Zen; no free tier. Proprietary/closed weights.
- **Release / knowledge:** Released 2026-06-09 (alongside the generally-available Claude Fable 5). Reliable/training knowledge cutoff **Jan 2026** (per platform docs). Retirement not sooner than 2027-06-09.
- **IDs:** `claude-mythos-5` (Anthropic), `anthropic.claude-mythos-5` (Bedrock). Artificial Analysis does not track this restricted model (no public API → 404); BenchLM/Benchgap relay Anthropic's system-card figures.
- **Context window:** 1,000,000 tokens input, 128,000 max output. No long-context surcharge.
- **Modalities:** Text + image input → text output. Reasoning (adaptive thinking, always on, default effort high). Tool/function calling, JSON mode, prompt caching, batch API. No audio/video input or media output.
- **Pricing (as of 2026-11-08):** $10.00 / $50.00 per 1M input/output tokens; cached read $1.00/M (~90% discount); 5-min cache write $12.50/M, 1-hour $20.00/M; batch $5.00/$25.00. CVP-vetted access only. Blended (3:1) ~$20.00 per 1M.
- **Architecture:** Proprietary; parameter count undisclosed. Claude Fable 5-class weights (Mythos = the refusal-lifted cyber variant). Adaptive reasoning + tool use.

### Raw benchmarks found

> All absolute figures below are **Anthropic-published** (system card "Claude Fable 5 and Claude Mythos 5", 2026-06-09), relayed by BenchLM/BenchmarkList/Sugra/FrontierLog; **no independent third-party harness exists for this restricted model** (AA does not track it). Benchgap numbers are model-based estimates and treated as low confidence.

Agent / tool use (Anthropic system card):

- Terminal-Bench 2.1: **88.0%** (Terminus 2 harness, high effort, avg of 5 attempts) (system card, FrontierLog checked)
- OSWorld-Verified: **85.0%** (first-attempt, avg of 5 runs, zoom tool) (system card, FrontierLog)
- BrowseComp: **88.0%** (single agent, adaptive thinking max effort, 10M-token limit, compaction at 200K) (system card, FrontierLog)
- CyberGym: **83.8%** (system card, BenchmarkList)
- Toolathlon: **79.3%** Pass@1 / 86.1% Pass@3 / 73.1% Pass^3, 19.8 turns (BenchmarkList)
- ScreenSpot-Pro: **90.7%** (BenchmarkList)
- DRACO: **86.4%** (BenchmarkList)
- AutomationBench: **17.4%** (system card, Sugra, ViralChart)
- GDPval-AA Elo: **1932** (system card, Sugra)
- Harvey's Legal Agent Benchmark: **13.3%** (system card, Sugra, ViralChart)
- OfficeQA: **79%**; OfficeQA Pro: **67.1%** (Sugra)
- ProgramBench (Anthropic harness, 166-task golden subset): **93.0%** best hidden test pass (BenchmarkList)
- BenchLM aggregator (2026-11-07): only Terminal-Bench 4.0 **60.90%** published; still unranked (no new verified rows beyond system card).

Reasoning / knowledge (Anthropic system card):

- GPQA Diamond: **94.1%** (avg of 5 trials) (system card, FrontierLog)
- Humanity's Last Exam (no tools): **59.0%**; (with tools): **64.5%** (system card, FrontierLog)
- USAMO 2026: **99.8%** (BenchmarkList, system card) — *conflict:* Qwen report cites 97.6%; both attributed to Anthropic system card; unresolved
- AA-Omniscience Net Score: **0.58** net (0.76 correct / 0.18 incorrect / 0.07 abstained) (BenchmarkList)
- SimpleQA Net Score: **0.49**; 100Q-Hard Net Score: **0.42** (BenchmarkList)
- DeepSearchQA: **94.2%** (BenchmarkList)
- CritPt: **28.6%** (BenchmarkList)
- ArxivMath: **89.3%** with tools / **87.8%** without (BenchmarkList)
- RiemannBench: **55.0%** (BenchmarkList)
- AA Intelligence Index: **not tracked** (AA 404 — restricted model)

Coding (Anthropic system card):

- SWE-bench Verified: **95.5%** (system card, FrontierLog checked)
- SWE-bench Pro: **80.3%** (adaptive thinking, max effort, avg of 5 trials) (system card, FrontierLog)
- SWE Multilingual: **92.2%** (system card, BenchmarkList)
- SWE-bench Multimodal: **54.9%** (system card, BenchmarkList)
- Terminal-Bench 2.1: **88.0%** (also agentic-coding) (system card)
- FrontierCode (Diamond): **29.3%** (Sugra)
- BenchCAD: **38.4%** no tools / **65.0%** with Python tool (BenchmarkList)

Long context:

- GraphWalks Parents 1M F1: **97.5%**; Parents 256k F1: **100.0%** (BenchmarkList, OpenAI GPT-5.6 source)
- GraphWalks BFS 1M F1: **79.4%**; BFS 256k F1: **91.1%** (BenchmarkList, OpenAI GPT-5.6 source)
- MRCR v2 / RULER: not reported by vendor.

Multimodal:

- CharXiv: **93.5%** (88.9% no tools) (BenchmarkList, system card)
- ChartMuseum: **93.2%** (BenchmarkList)
- ChartQAPro: **72.9%** with tools / **71.6%** no tools (BenchmarkList)
- Chartography (no tools): **36.0%**; (with tools): **85.2%** (BenchmarkList, FrontierLog)
- BenchCAD Vision2Code: IoU **0.650** with Python / **0.379** no tools (BenchmarkList)
- SWE-bench Multimodal: **54.9%** (see Coding)
- CharXiv-R: **93.5%** (BenchmarkList)

Cybersecurity (vendor-reported, run with refusals lifted — this is the model's purpose):

- ExploitBench (CapR): **78.0%** capability, 10.80 flags, 132/410 full ACEs (BenchmarkList, Sugra)
- CyberGym: **83.8%** (system card, BenchmarkList)
- SEC-Bench Pro: **76.6%** est. (benchgap, low confidence — not in system card)

Knowledge work / agents (Anthropic system card):

- GDPval-AA Elo: **1932** (Sugra)
- Blueprint-Bench 2: **38.6%** (Sugra, ViralChart)
- GDP.pdf: **29.8%** (Sugra, ViralChart)
- AutomationBench: **17.4%** (above)
- HealthBench: **62.7**; HealthBench Professional: **66.0%**; HealthAdminBench: **51.9%** (BenchmarkList)
- BioMysteryBench Human-Solvable: **90.1%**; Human-Difficult: **44.7%** (BenchmarkList, Sugra)
- ProteinGym Hard: **45.8%**; scBench: **59.3%**; SpatialBench: **69.2%** (BenchmarkList, Sugra)
- LatchBio SingleCellBench: **59.3%**; SpatialBench Verified: **69.2%** (BenchmarkList, Sugra)

Safety/alignment:

- Safeguarded twin Claude Fable 5 falls back to Opus 4.8 on ~9% of HLE tasks and ~8% of AA Intelligence Index tasks (AA article on Fable 5) — Mythos 5 has these guardrails removed, so its HLE/ExploitBench numbers are the "full" capability figures.
- Mythos Preview (Apr 2026, separate earlier model) reported SWE-bench Verified 93.9% / GPQA 94.6% (tensoria.fr) — distinct from this June model.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5. Cost efficiency excluded.

- **Tool use: 93/100.** Terminal-Bench 2.1 88%, OSWorld 85%, BrowseComp 88%, CyberGym 83.8%, Toolathlon 79.3%, ScreenSpot-Pro 90.7%, DRACO 86.4%, ProgramBench 93%. Capped just below 95 by vendor-only provenance (no independent harness). Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) published only Terminal-Bench 4.0 60.90% (still unranked); no new verified rows beyond system card. No change.
- **Reasoning: 93/100.** GPQA Diamond 94.1%, USAMO 2026 ~99.8%, HLE 64.5% (with tools), AA-Omniscience net 0.58, DeepSearchQA 94.2%. Capped by HLE below 65% and unknown knowledge cutoff.
- **Context window: 94/100.** 1M/128K top tier; GraphWalks BFS 79.4% at 1M and 91.1% at 256K; Parents 97.5%/100%. Capped by BFS 1M 79.4% and unverified MRCR/RULER.
- **Multimodal: 80/100.** Text+image in → text out (no video/audio); CharXiv 93.5%, ChartMuseum 93.2%, Chartography 85.2% with tools, but ChartQAPro 72.9% and SWE-multimodal 54.9%. Capped by text-only output and no video.
- **Coding: 96/100.** SWE-bench Verified 95.5% (among highest published), SWE-Pro 80.3%, SWE-Multilingual 92.2%, Terminal-Bench 2.1 88%. Capped at 96 by vendor-only provenance and FrontierCode Diamond 29.3%.
- **Cost efficiency: 36/100.** $10/$50 per 1M, cached $1.00; blended ~$20.00 — among the most expensive in the roster; CVP-restricted. Not counted toward Overall.
- **Overall Score: 91/100.** (93 + 93 + 94 + 80 + 96) / 5 = 91.2 → 91. Best fit: Anthropic's refusal-lifted cyber-defense flagship — frontier-top coding/agentic/reasoning at 1M context for vetted security work, but restricted-access and premium-priced. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) published only Terminal-Bench 4.0 60.90% (still unranked); no new verified rows beyond system card. Overall unchanged at 91.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-11-04 preserved; BenchLM aggregator checked (only Terminal-Bench 4.0 60.90% published, still unranked); no new verified rows; no dimension score changed.
- Reference URLs:
  - [Claude Mythos 5 — Anthropic platform docs](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Claude Fable 5 launch — Artificial Analysis](https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index)
  - [BenchLM — Claude Mythos 5](https://benchlm.ai/models/claude-mythos-5)
  - [BenchmarkList — Claude Mythos 5](https://benchmarklist.com/models/anthropic-claude-mythos-5/)
  - [Sugra — Claude Mythos 5](https://sugra.systems/blog/llm-bench/models/claude-mythos-5)
  - [FrontierLog — Claude Mythos 5](https://frontierlog.ai/model/claude-mythos-5)
  - [benchgap — Claude Mythos 5](https://benchgap.net/model/claude-mythos-5)
  - [ViralChart — Claude Mythos 5 / Fable 5](https://viral-chart.com/data/6963ef7b165c/)
  - [Anthropic — Claude Mythos 5 news](https://www.anthropic.com/news/claude-mythos-5)
  - [Anthropic system card (PDF)](https://www-cdn.anthropic.com/57a52ea7d8f0e54e8a542e908266086df425cdf5/Claude%20Fable%205%20&%20Claude%20Mythos%205%20System%20Card.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.