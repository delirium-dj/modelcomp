# Claude Opus 5 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's July-2026 flagship reasoning model, now **legacy** and superseded by Claude Opus 5.5 (Artificial Analysis: "Anthropic has launched a newer release, Claude Opus 5.5. We suggest considering it instead."). "Claude Opus 5 is a thoughtful and proactive model that comes close to the frontier intelligence of Claude Fable 5 at half the price." It is a distinct model from `claude-opus-4.8`, `claude-opus-5.5` and `claude-fable-5`/`claude-fable-5.1` — not a tier alias of any of them.
- **Provider / access:** Anthropic Claude API `claude-opus-5`; AWS Bedrock `anthropic.claude-opus-5`; Google Vertex, Microsoft Foundry and Claude Platform on AWS `claude-opus-5`; OpenRouter `anthropic/claude-opus-5` (canonical slug `anthropic/claude-opus-5-20260723`); OpenCode Zen `opencode/claude-opus-5` (`https://opencode.ai/inference/anthropic/v1/messages`).
- **Release / knowledge:** released **2026-07-24** ("Legacy. Released July 24, 2026."). Status "Active (legacy)"; retirement "Not sooner than July 24, 2027". Reliable knowledge cutoff **May 2026**, training data cutoff May 2026.
- **IDs:** `claude-opus-5` (Claude API), `anthropic.claude-opus-5` (Bedrock), `anthropic/claude-opus-5` + `:batch` (OpenRouter), `opencode/claude-opus-5` (Zen).
- **Context window:** **1,000,000 tokens**, **128,000 max output** (Anthropic docs; OpenRouter: context 1,000,000, `max_completion_tokens` 128,000). The Batch API allows 300K output with the `output-300k-2026-03-24` beta header.
- **Modalities:** "Text and images → text". Multilingual, vision, tool use, plus web search and code-execution server tools. Adaptive thinking, **default effort `high`**, all five levels (low/medium/high/xhigh/max) supported; thinking cannot be disabled at xhigh/max; per-message effort is beta and not on Bedrock.
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$5**, output **$25**; 5-minute cache write **$6.25**, 1-hour cache write **$10**, cache read **$0.50**; Batch **$2.50 / $12.50**; Fast mode **$10 / $50** (research preview, ~2.5× default speed). OpenCode Zen lists $5.00 / $25.00 / $0.50 cached read / $6.25 cached write. Bedrock EU routing is $5.50 / $27.50.
- **Architecture:** proprietary, closed weights; parameter count not disclosed. System card published with the model (193 pages).

### Raw benchmarks found

> Anthropic's system-card numbers are marked "vendor"; Artificial Analysis, Vals AI, ARC Prize, Epoch AI and the BenchLM ledger are independent. Anthropic publishes results at **max effort with adaptive thinking** unless stated.

Agent / tool use:

- Terminal-Bench 4.0: **48.99%** (AA) / **53.53% ± 1.34** (Vals AI, max effort, #8/50)
- Terminal-Bench 2.1: **89.14%** (AA) / **84.64%** (Vals AI, at `high` effort, #2) — "Counting fallback-assisted results as failures changes Terminal-Bench 2.1 from 84.64% to 81.27%"
- Terminal-Bench 3.0: **42.7%** (frontierbench.ai, via BenchLM — best-verified in the catalog)
- Toolathlon-Verified: **80.6%** Pass@1 / **87.0%** Pass@3 / **73.1%** Pass³, 23.5 average assistant turns (vendor)
- MCP Atlas: **85.8%** (vendor) — "an 85.8% pass rate, up from 82.2% for Opus 4.8"; claim coverage 89.1%
- GDPval-AA v2: **1861 Elo** (vendor) / **1721.15** (AA) / 61.1% normalized (via BenchLM); AA-Briefcase **1720 Elo** at max (1693 xhigh, 1606 high)
- AutomationBench: **26.0%** at max effort (vendor, Zapier run) / **56.57%** (AA AutomationBench-AA) — different metrics (see conflicts)
- OSWorld 2.0: **70.57%** (vendor) / 70.6% (via BenchLM)
- BrowseComp **90.8%**; DeepSearchQA 95.0%; Research-and-Analysis with Complex Operations 88.6%; 10-agent team prerelease configuration 93.6%; IPI attack success **2.0% at k=15** (vendor) vs 4.6% (Google chart via BenchLM); Hermes Index 63.3% (best-verified); Agents' Last Exam 64.7% with tools; Toolathlon-verified average turns 23.5
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.23%** (AA) / **93.43%** (Vals AI) / 93.2 (via BenchLM)
- HLE: **54.87%** (AA) / **56.3%** without tools, **64.7%** with tools (vendor)
- LCR / MLCR: AA-LCR v1.1 **79.33%** (AA); MLCR-AA **55.56%** (AA)
- CritPt: **29.14%** (AA)
- Artificial Analysis Intelligence Index: **51** (rank **#17 / 217**) / 50.8 (OpenRouter AA mirror and BenchLM); effort variants Max 51, Xhigh 50, High 48, Medium 45, Low 39. The AA article slug `/articles/claude-opus-5` **404s**.
- FrontierMath v2: Tiers 1–3 **85.614%**, Tier 4 **73.171%** (Epoch AI, via BenchLM) — 7.7 / 22 points behind GPT-6 Astra / GPT-6.1 Sol
- ARC-AGI-1 **97.5%** (max), ARC-AGI-2 **90.4%** (max) / 88.3% (high); ARC-AGI-3 **30.2%** at high effort — "the highest-performing model on ARC-AGI-3" at the time
- HealthBench raw 67.1% / length-adjusted 57.8%; HealthBench Professional 59.8% (raw 73.4%); BioMysteryBench 90.1% human-solvable / 49.4% human-difficult; SpatialBench Verified 72.5%; SingleCellBench 60.6%; ProteinGym Hard 47.7%; GMMLU 92.5%; MILU 92.1%; ArXivMath 90.8% (no tools) / 91.3% (with tools); RiemannBench 60.0% / 79.0%
- Omniscience index 37.07, accuracy **60.87%**, hallucination rate **60.82%** (AA)

Coding:

- SWE-bench Verified: **96.0%** (vendor) / **97.00%** (Vals AI, #1/88) — Opus 5 is the SWE-bench leader in the catalog
- SWE-bench Pro **79.2%**, Multilingual **89.5%**, Multimodal **59.4%** (vendor)
- DeepSWE v1.1: **68.8%** ("scored an average of 68.8% over five trials")
- FrontierCode 1.1: Main **53.4%**, Extended **63.6%**; FrontierBench v0.1 **43.3%**
- FrontierSWE v2: **52.0%** (via BenchLM)
- Terminal-Bench 2.1 89.14% / 84.64% (above); Terminal-Bench 4.0 48.99% / 53.53%; Terminal-Bench-Science 0.1 **27.14%** (Vals) / 28.57% (AA)
- SciCode **56.37%** (AA); LiveCodeBench **89.03%** (Vals AI, #4/143); CursorBench 3.2 **70.0%** / CursorBench 4.0 **46.6%**; ProgramBench **97.0%**; VulcanBench v3 **87.0%** and VulcanBench Coding Intelligence Index v1 **96.4%**; Bug Hunt Bench **27.0 fixes**
- MMMU-Pro 84.74% (AA) / 89.88% (Vals)
- Vibe Code Bench / LiveCodeBench official leaderboard: **no verified public score found** (LiveCodeBench number is a Vals run)

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published for Claude Opus 5.** AA-LCR v1.1 79.33% covers only the short band. 1M context with a 128K max output is documented, but no long-range retrieval figure exists.
- Batch-only 300K output beta.

Performance profile (AA, Max): output **53.7 t/s** (#153/185 — slow), TTFT **44.14s**, cost per Intelligence Index task **$5.86** (#110/114), 140M output tokens (#90/116), blended $3.85/1M. Deprecated banner: "We only continue performance benchmarking for the default 10k input token workload."

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 91/100.** Frontier-tier agentic profile — Terminal-Bench 2.1 89.14% (AA) / 84.64% (Vals), GDPval-AA 1861 Elo (vendor) / 1721 (AA), Toolathlon-Verified 80.6% with Pass³ 73.1% and 23.5 turns, MCP Atlas 85.8% (best-verified), Hermes Index 63.3% (best-verified), OSWorld 2.0 70.57%, BrowseComp 90.8%, IPI 2.0% attack success at k=15, and a 10-agent prerelease configuration at 93.6%. Capped below 95 by **no τ³/τ2-bench measurement** (rubric anchor τ3 ≈ 50%+; only 42.06% on τ³-Banking), Terminal-Bench 4.0 of only 48.99–53.53%, and AutomationBench at 26.0% in Anthropic's own strict run.
- **Reasoning: 90/100.** GPQA Diamond 93.23%, HLE 54.87–64.7%, AA-LCR 79.33%, MLCR-AA 55.56%, FrontierMath v2 85.614% (T1–3) / 73.171% (T4), ARC-AGI-1 97.5% / ARC-AGI-2 90.4% / ARC-AGI-3 30.2% (then the leader), BioMysteryBench 90.1% / 49.4%, ArXivMath 90.8–91.3%, HealthBench Professional 59.8%. Held below 93 because the Artificial Analysis Intelligence Index is **51**, under the rubric's 60+ anchor for the 90–100 band, and because FrontierMath Tier 4 (73.171%) and TB-Science (27.14%) trail the current leaders by a wide margin.
- **Context window: 95/100.** 1,000,000-token context with a 128,000-token max output — the rubric's top window tier (≥1M = 95–100), clearing the 64K output line, plus a 300K-output Batch beta. Not higher: the rubric reserves 100 for "≥98% retrieval at 512K+", and **no long-context retrieval measurement exists at all** for this model — the only figure, AA-LCR 79.33%, covers the short band.
- **Multimodal: 70/100.** Image input with text output, with strong vision evidence — MMMU-Pro 84.74% (AA) / 89.88% (Vals), OfficeQA 78.1%, OfficeQA Pro 66.9% (weighted benchmark), Chartography 29.6% without tools / 83.0% with tools, BenchCAD Vision2Code voxel IoU 0.366 / 0.821, OSWorld 2.0 70.57% (computer use). The rubric's "+image in = 60–70" band is the ceiling: **no video, audio or PDF input** is documented for Claude Opus 5.
- **Coding: 90/100.** SWE-bench Verified 96.0% (vendor) / 97.00% (Vals, #1 in the catalog) — the strongest SWE-bench result of any model here, SWE-bench Pro 79.2% / Multilingual 89.5% / Multimodal 59.4%, Terminal-Bench 2.1 89.14% (AA), SciCode 56.37% (anchor 55%+), LiveCodeBench 89.03% (Vals), ProgramBench 97.0%, VulcanBench 96.4%, FrontierCode 1.1 53.4% / 63.6%. Capped by DeepSWE 68.8% (under the 74% anchor), Terminal-Bench 4.0 48.99–53.53%, FrontierSWE v2 52.0%, CursorBench 4.0 46.6% and no Vibe Code Bench figure.
- **Cost efficiency: 45/100.** The evaluated route — OpenCode Zen `opencode/claude-opus-5` — is billed at **$5.00 in / $25.00 out** per 1M, cache read $0.50, cache write $6.25, matching Anthropic's list price. The rubric's anchors run "~$3/$15 = ~60" and "~$10/$50 = ~30", placing $5/$25 in between; Artificial Analysis prices it #110 of 114 for cost, and Fast mode doubles it to $10/$50 while Batch halves it to $2.50/$12.50. The 0.10× cache-read rate is what keeps long agentic runs affordable.
- **Overall Score: 87.2/100.** (91 + 90 + 95 + 70 + 90) / 5 = 87.2 — best-fit: an outstanding SWE-bench and tool-use model whose Terminal-Bench 4.0 and FrontierMath numbers now trail the leaders; it is legacy and superseded by Claude Opus 5.5 (cheaper per token, stronger on Terminal-Bench 4.0 and the AA index), so prefer 5.5 unless a 2026-07 snapshot or a specific Bedrock price is required.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 2.1 — 89.14% (AA) vs 84.64% (Vals, high effort).** Different effort levels and harnesses; the AA figure is used, and Vals' own note that fallbacks counted as failures give 81.27% is recorded.
2. **Terminal-Bench 4.0 — 48.99% (AA) vs 53.53% (Vals).** Same order of magnitude; both listed, AA used.
3. **AutomationBench — 26.0% (Anthropic) vs 56.57% (AA).** AA's own documentation explains the gap: "Unlike Zapier's own hosted AutomationBench leaderboard, which reports the percentage of tasks completed fully, AutomationBench-AA uses a headline metric representing the average share of each task's objectives" — i.e. a partial-credit objective-share metric, not the same measurement. The strict figure is used for scoring.
4. **SWE-bench Verified — 96.0% (system card) vs 97.00% (Vals AI).** Different harness; both are far ahead of the field, so the conclusion is unaffected.
5. **IPI attack success — 2.0% at k=15 (system card) vs 4.6% (Google chart via BenchLM).** Different denominators/attack budgets; both listed.
6. **GPQA Diamond — 93.23 (AA) vs 93.43 (Vals).** Harness noise.
7. **AA Intelligence Index — 51 (model page) vs 50.8 (OpenRouter mirror and BenchLM).** Rounding.
8. **Release date — July 24, 2026 (Anthropic) vs "Jul 22, 2026" (Vals) vs canonical slug `anthropic/claude-opus-5-20260723`.** The system-card date is used.
9. **Deprecation.** Artificial Analysis has stopped benchmarking non-default workloads ("We only continue performance benchmarking for the default 10k input token workload"), so several AA per-benchmark numbers (Terminal-Bench 4.0, AutomationBench-AA detail) are frozen history rather than current measurements — flagged in the score justifications.
10. **Terminal-Bench 3.0 42.7%** is the only published number where Opus 5 is the best-verified result in the catalog, and it comes from frontierbench.ai via BenchLM — one of the few independent, non-vendor wins for this model.

### Notes on identity

- `claude-opus-5` is a distinct model from `claude-opus-4.8` (MCP Atlas 82.2% vs 85.8%; more than doubled on Frontier-Bench v0.1) and from `claude-opus-5.5` (separate pricing, separate benchmarks, higher AA index).
- Effort levels are parameters on one model (Max 51 / Xhigh 50 / High 48 / Medium 45 / Low 39 on the AA index), not separate SKUs.
- No OpenRouter "Pro"/"Lite" style variant exists for Opus 5; only the `:batch` route.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic first-party model overview, pricing and effort docs, the Claude Opus 5 launch page and the 193-page system card (PDF text extracted); independent trackers Artificial Analysis (model page, effort variants, deprecation notice), Vals AI's own runs, ARC Prize, Epoch AI FrontierMath, the BenchLM evidence ledger, and OpenRouter / OpenCode Zen catalogs. Vendor-vs-independent conflicts — including the AutomationBench metric mismatch — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.md`, using the same headings.
