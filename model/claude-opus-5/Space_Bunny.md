# Claude Opus 5 — findings by Space Bunny

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Two corrections from the first pass.** (1) Lifecycle: Anthropic's deprecation page lists
> `claude-opus-5` as **Active**, retirement "not sooner than July 24, 2027" — it is superseded,
> not deprecated. (2) Evidence: the first pass found almost no benchmark values; Anthropic's
> system card and three independent labs have since published a full picture, now recorded below.

## Model card

- **Name:** Claude Opus 5 (adaptive reasoning; this report evaluates max effort unless noted)
- **Short description:** Anthropic's July 2026 flagship for demanding software engineering, long-horizon agent work, computer use and professional knowledge tasks — the model Opus 5.5 replaced on 2026-09-22, though it remains fully supported.
- **Provider / access:** Claude API (`claude-opus-5`); Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude apps (Pro/Max/Team/Enterprise). Five effort levels: low, medium, high (default), xhigh, max.
- **Release / knowledge:** Announced 2026-07-24; **Active** with retirement not sooner than 2027-07-24 and no date announced (Anthropic model deprecations page, checked 2026-10-10). Knowledge cutoff **May 2026**; the web search tool is required for current information.
- **IDs:** `claude-opus-5` (max is an effort configuration, not a separate model ID).
- **Context window:** 1,000,000 tokens; 128K max synchronous output (300K via Batch API with a beta header); 1M billed at standard rates.
- **Modalities:** Text and image input; text output; multilingual, vision, tool use, parallel tool calls, structured output and cache-preserving tool changes supported. No audio or video.
- **Pricing (as of 2026-10-10):** $5 input / $25 output per 1M; cache read $0.50, cache write $6.25 (5m) / $10 (1h); Batch $2.50/$12.50; fast mode $10/$50; US-only inference 1.1x. Rate limits start at 1,000 RPM / 2M input TPM / 400K output TPM.
- **Architecture:** Proprietary; Anthropic discloses no parameter count or architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 — **three independent measurements**: **53.53%** (Vals AI, mini-SWE-agent, rank 7 of 42; 53.03% counting one fallback-served attempt as a failure); **48.99%** (Artificial Analysis, mini-SWE-agent, max effort, rank 7); vendor figures **52.3%** (Anthropic), 52.6% (OpenAI), 51.8% (DeepSeek) — all within one standard error
- Terminal-Bench 2.1 (Terminus 2): **84.64%** (Vals AI, rank 5 of 76, 2026-10-06); a 2026-10 reading on the same suite shows **87.64%**
- Terminal-Bench-Science 0.1: **28.57%** (independent)
- BrowseComp: **90.8%** (vendor); MCP Atlas: **85.8%** (Opus 4.8: 82.2%); Toolathlon Verified: **80.6%**; OSWorld 2.0: **70.6%** at launch / **75.4% partial, 39.6% strict** on the August task release; AutomationBench: **26.0%** at launch, **26.9%** in the September re-run
- GDPval-AA v2: **1,861 Elo** at launch, **1,824** on the September re-run (highest recorded for the model); AA-Briefcase: **1,720 Elo**
- FrontierBench v0.1: **43.3%** (Fable 5: 33.8%)
- Vals Index composite (GDP-weighted professional tasks, independent): **63.67% — rank 3 of 33**; cost per test $1.95–$2.18 on the Vals suite
- AA Intelligence Index: **51** at max effort on v4.3.2 (rank 11 of 211); the widely quoted **61** was on the pre-rebasing scale

Reasoning / knowledge:

- GPQA Diamond: **93.43%** (Vals AI independent)
- Humanity's Last Exam: **56.3% no tools / 64.7% with tools** at launch; September re-runs 56.6% / 63.6%; Artificial Analysis measures **52.6%** no tools (max) / 52.5% (xhigh)
- ARC-AGI-2: **90.4%**; ARC-AGI-3: **30.2%** (ARC Prize Foundation verified); Anthropic states its ARC-AGI-3 score is 3x the next-best model
- MMLU-Pro: **91.59%** (Vals AI independent); IMO 2026: **42/42 gold-level** (model panel + human graders); ArxivMath 90.8%; MathArena independent aggregate **74.1** (max)
- Organic chemistry **+10.2 pts** and protein-variant prediction **+7.7 pts** vs Opus 4.8 (internal relative benchmarks, no absolute values)
- CritPt / LCR-MLCR / Omniscience / hallucination rate: no verified public value; Anthropic notes slightly higher factual hallucination than Opus 4.8

Coding:

- SWE-bench Verified: **96.0%** (vendor, five trials) vs **97.0%** (Vals AI independent, August cut)
- SWE-bench Pro: **79.2%** (Fable 5 leads at 80.0%); SWE-bench Multilingual: **89.5%**; SWE-bench Multimodal: **59.4%**
- DeepSWE v1.1: **68.8%**; FrontierCode v1.1: **53.4%** (medium effort); CursorBench 3.2 within 0.5% of Fable 5's peak at max effort
- Vibe Code Bench v1.1: **88.40%** (Vals AI independent)
- LMArena coding Elo **1,533**, text Elo **1,493**, WebDev Arena **1,687** (max effort, third overall)
- ProgramBench: **3.00%** on the project's independent tracking — a clear weakness on long multi-episode programs

Long context:

- 1M-token window at standard pricing; on **ProgramBench**, whose episodes run up to the full window, hidden-test pass rate rises from **83% after one episode to 93% after five** — real evidence of retention at length, albeit on Anthropic's own suite
- AA-LCR, MRCR and RULER: no verified public value for this model

Multimodal:

- SWE-bench Multimodal **59.4%**; Chartography and GDP.pdf improvements over Mythos 5 when the model can crop and inspect images with tools; LMArena vision Elo **1,289** (tenth overall)

### Normalized scores (1–100)

- **Tool use: 96/100.** GDPval-AA v2 at 1,861 Elo and AA-Briefcase at 1,720 were both records when measured, BrowseComp 90.8%, MCP Atlas 85.8%, Toolathlon Verified 80.6% and OSWorld 2.0 at 70.6% describe a first-tier agent. Held below the very top by three independent Terminal-Bench 4.0 readings landing at 48.99–53.53% and by AutomationBench at only ~26%.
- **Reasoning: 95/100.** GPQA Diamond 93.43%, ARC-AGI-2 90.4%, MMLU-Pro 91.59%, IMO 2026 at 42/42 and MathArena 74.1 are frontier results. Capped by HLE at 56.3% without tools and an Intelligence Index of 51 — seven points behind its own successor.
- **Context window: 98/100.** 1M tokens with 128K output (300K on Batch), and ProgramBench retention improving from 83% to 93% across five full-window episodes. This is now the one area where it remains competitive with Opus 5.5, which shares the same window.
- **Multimodal: 78/100.** Text/image in, text out with real chart and document work — SWE-bench Multimodal 59.4%, Chartography and GDP.pdf gains, LMArena vision 1,289. Well short of the natively multimodal frontier because audio and video are absent entirely.
- **Coding: 96/100.** SWE-bench Verified at 96.0% vendor / 97.0% independent is the strongest verified figure in this report, with SWE-bench Pro 79.2%, Multilingual 89.5%, Multimodal 59.4%, DeepSWE 68.8%, Vibe Code Bench 88.40% and LMArena coding Elo 1,533 behind it. Docked by ProgramBench at 3.00% and by the independent Terminal-Bench 4.0 readings below 54%.
- **Cost efficiency: 52/100.** $5/$25 with a 90% cache discount and $2.50/$12.50 on Batch, and Artificial Analysis measured $2.03 per Index task at launch — but the current max-effort Index task cost is **$5.86** and Vals charges **$18.60 per Terminal-Bench 4.0 test**, the second-highest in the field. Opus 5.5 delivers equal or better scores at materially lower cost.
- **Overall Score: 93/100.** Still a top-tier choice for SWE-bench Verified, GDPval-AA knowledge work and 1M-context agent sessions on an existing Claude deployment — but new builds should start from Opus 5.5, which is faster, cheaper and stronger on every shared measure.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: second-pass public internet research across Anthropic's Opus 5 announcement, system-card figures and model deprecations page, Artificial Analysis model and index pages (including the July launch article on the pre-rebasing index scale), Vals AI's Vals Index and Terminal-Bench 4.0 leaderboards and per-model pages, AIEvals' independent-vs-publisher gap table, BenchLeader and Ridge aggregator rows, and TopReviewed/LMArena-style catalog records; the three independent Terminal-Bench 4.0 measurements and the two Intelligence Index versions are reported side by side; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- Anthropic — Introducing Claude Opus 5 (2026-07-24): https://www.anthropic.com/news/claude-opus-5
- Anthropic — Claude Opus overview and benchmarks: https://www.anthropic.com/claude/opus
- Anthropic — Model deprecations (`claude-opus-5`: Active, not sooner than 2027-07-24): https://platform.claude.com/docs/en/about-claude/model-deprecations
- Artificial Analysis — Opus 5: Fable 5-level intelligence at a lower cost per task (July snapshot, index 61 / $2.03): https://artificialanalysis.ai/articles/opus-5
- Artificial Analysis — Claude Opus 5 (index 51 on v4.3.2, $5.86/task): https://artificialanalysis.ai/models/claude-opus-5
- Vals AI — Terminal-Bench 4.0 leaderboard and methodology (Opus 5 53.53%, $18.60/test, fallback accounting): https://vals-ai.com/benchmarks/terminal-bench-4
- Vals AI — Vals Index leaderboard (Opus 5 63.67%, updated 2026-10-07): https://vals-ai.com/benchmarks/vals_index
- AIEvals — Terminal-Bench 4.0 (independent AA 48.99% vs Vals 53.53% vs vendor 52.3%, read 2026-10-08): https://aievals.app/benchmarks/terminal-bench-4
- RidgeBench — Claude Opus 5 scorecard (SWE-bench Verified 97% Vals, Arena Elo 1,511): https://www.ridgebench.com/models/claude-opus-5
- AI Model Timeline — Opus 5 benchmark table with vendor/independent split (GPQA 93.43%, TB 2.1 84.64%): https://ai-model-timeline.org/models/anthropic-claude-opus-5
- Choosemodel — Opus 5 vendor launch scores (FrontierBench 43.3, DeepSWE 68.8, Toolathlon 80.6, GDPval-AA 1861): https://choosemodel.guide/models/claude-opus-5
- TopReviewed — Opus 5 surface-by-surface benchmark breakdown and rate limits: https://topreviewed.ai/models/claude-opus-5