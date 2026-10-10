# Claude Opus 5.5 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-opus-5-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's first Claude 5.5-family model and enterprise Opus workhorse — adaptive thinking, 1M context, built for long-running agentic coding, computer use, and knowledge work; performs at Fable 5.1 level on most work at 40% less cost than Opus 5.
- **Provider / access:** Anthropic Claude API (`claude-opus-5-5`, Messages API), Claude Platform, AWS, Google Cloud, Microsoft Foundry. No Free ID on OpenCode Zen (`noFreeId`) — scored on paid pricing.
- **Release / knowledge:** 2026-09-22; knowledge cutoff not published in the system card.
- **IDs:** `anthropic/claude-opus-5-5` (Claude API); `opencode/claude-opus-5.5` tracking slug on this site.
- **Context window:** 1,000,000 tokens total (default and ceiling); 128,000 max output synchronous, extendable to 300,000 via Message Batches API (`output-300k-2026-03-24` beta header).
- **Modalities:** text and image in; text out (no audio/video input — not a fit for audio/video agents); adaptive thinking with effort levels (default/medium, high, xhigh, max); tool calls, JSON mode, prompt caching, Files API, PDF input.
- **Pricing (as of 2026-10-02):** $4.00/$20.00 per 1M input/output (20% below Opus 5); cache reads $0.20/M (5% of input), cache writes $5/M (5-min TTL) / $8/M (1-hr TTL); Batch API 50% off ($2/$10); research-preview Fast Mode $8/$40 (up to 2.5x speed).
- **Architecture:** proprietary (Anthropic); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (xhigh effort, Anthropic system card, ±2.6; public Claude Code leaderboard reproduces Opus 5 at 51.8% vs 52.3%)
- FrontierCode v1.1 (Main): **54.4%** (max effort, vendor)
- CursorBench 4.0: **57.8%** (max effort; 52.5% at default medium)
- GDPval-AA v2.1: **1846** (vendor, run by Artificial Analysis)
- AutomationBench: **40.0%** (Zapier, early access; without fallback models, so safeguard interventions counted as failures — understates real performance)
- Terminal-Bench-Science 0.1: **58.7%** (max effort, ±3.5–5)
- VulcanBench Frontier v4 (independent, Claude Code 2.1.280, 2026-09-22/24): **91.11** combined at high effort (medium 90.86, $2.84/task; max 90.22, $8.75/task) — second only to Fable 5.1 (91.84)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **67.7%** (vendor; vs Opus 5 63.6%, Fable 5.1 65.6%, GPT-6 Astra 57.2%)
- Artificial Analysis Intelligence Index: **58** (composite of 10 AA evaluations)
- GPQA Diamond: no verified public score found (not published in the 5.5 system card; Opus 5 published it, 5.5 did not)
- AIME 2025 / MMLU-Pro / ARC-AGI-2: no verified public score found (not published for 5.5)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Pro: **89.9%** (vendor system card; vs Opus 5 79.2%, Fable 5.1 81.2%)
- SWE-bench Multilingual: **93.9%** (vendor; vs Opus 5 89.5%)
- SWE-bench Multimodal: **61.4%** (vendor; vs Opus 5 59.4%)
- SWE-bench Verified: no verified public score found for 5.5 (not published in the system card)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- ProgramBench (Anthropic long-context eval): run across the full 1M-token window; no numeric retrieval score published
- MRCR / RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval-AA 1846 leads the professional-work frontier, TB 4.0 66.4% tops the new agentic-CLI scale, and VulcanBench 91.11 is second only to Fable 5.1; AutomationBench 40.0% (Zapier, no-fallback methodology) and the absent Claw-Eval/MCP-Atlas rows cap it below 96.
- **Reasoning: 92/100.** HLE 67.7% with tools is far above the frontier reference (40%+) and the best published HLE-with-tools figure in this comparison set; the AA Intelligence Index of 58 (just under the 60+ frontier bar) and the unpublished GPQA Diamond cap the score.
- **Context window: 97/100.** Full 1M default-and-ceiling window with ProgramBench exercised across it, but no independent ≥98% retrieval-at-512K+ figure is published, so 100 is not justified.
- **Multimodal: 65/100.** text + image in, text out — the +image-in band; no video/audio/PDF-native input beyond PDF via Files API.
- **Coding: 94/100.** SWE-bench Pro 89.9% and Multilingual 93.9% (vendor) plus VulcanBench 91.11 independent are top-of-set; capped below 96 because SWE-bench Verified, LiveCodeBench, and SciCode are unpublished for this release and the headline coding numbers are vendor self-reports.
- **Cost efficiency: 56/100.** Paid-only pricing $4/$20 per 1M (cache reads $0.20) — roughly 40% cheaper than Opus 5 per task, but well above the ~$1.25/$4.25 (~88) reference tier; Batch 50% off helps agentic workloads.
- **Overall Score: 88/100.** (94+92+97+65+94)/5 = 88.4 → 88 — the value pick at the Opus tier: Fable-class agentic coding and knowledge work at 20% lower per-token price, with text+image-only input as the main limitation.

---

## Update 2026-10-08 (6-day re-research)

- **DeepSWE v1.1: 74.2%** (system card) — fills the gap; **AA-SciCode: 66.9%** (Artificial Analysis SciCode leaderboard, max effort with default fallback — **#1**; xhigh 65.0%; Fable 5.1 max 63.1%) — fills the SciCode gap
- FrontierCode 1.1 Extended **63.6%**; ProgramBench **91.2%**; FrontierSWE v2 **62.3%** (Proximal); PostTrainBench v1.1 **49.3%** (Google's Gemini 4 Argon launch chart)
- Artificial Analysis' own runs (graysoft capture): **AA-LCR 84.7%** (fills the long-context gap), HLE 57.5% (xhigh, default fallback), Terminal-Bench 4.0 **59.6%** (AA's own run vs 66.4% system card), AA Intelligence Index 56.00
- BenchLM: overall **86.37/100, rank #1 of 887**; LMSpeed: Coding V3.0 estimated 69, coding score 86.6 (#4/94)
- Vals AI TB 2.1 mirror: **87.6%** (Sep 27 snapshot — separately tagged Vals run, not a tbench.ai public-board submission)
- Still unpublished for 5.5: GPQA Diamond, AIME, MMLU-Pro, ARC-AGI-2, LiveCodeBench, Vibe Code Bench, SWE-bench Verified, MRCR/RULER/GraphWalks, Omniscience
- Lineup context (2026-10-07): Haiku 5.5 launched; Sonnet 5.5 cache reads halved to $0.10/M; Opus 5.5 pricing unchanged ($4/$20, cache reads $0.20/M)

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Score revisions: Tool use 94→95, Coding 94→95, Overall 88→89.** Reasoning 92 / Context 97 / Multimodal 65 / Cost 56 unchanged.

- **AutomationBench conflict resolved upward:** Anthropic's 40.0% (Zapier, early access, no-fallback — safeguard interventions counted as failures) was methodology-suppressed. Artificial Analysis' own AutomationBench-AA run reads **70%** at max effort (63% at high; #3 of 26), and BenchmarkList independently carries 69.5% (#3). This lifts the Tool-use cap that the 2026-10-08 file cited.
- **AA Intelligence Index v4.3.2 full component table (AA's own runs):** 58 (Max) / 56 (Xhigh) / 54 (High) — #1 "by several points" per AA. Max-effort components: AA-Briefcase v1.1 **1807**, GDPval-AA v2.1 **1866**, AutomationBench-AA **70%**, Terminal-Bench 4.0 **60%** (AA's run vs 66.4% system card — vendor/independent spread stands), SciCode **67%** (#1), HLE **61.4%** (AA, no-tools protocol; vendor HLE-with-tools is 67.7% — different setups, both reported), GDP.pdf **26%**, CritPt **32%**, AA-Omniscience **46**, AA-LCR v1.1 **85%**. AA: leading on six of ten evaluations; behind on CritPt, AA-LCR, GDP.pdf.
- **New BenchmarkList rows (2026-10-03 era):** Vibe Code Bench v1.1 **90.3%** (#4 — fills the previous gap), FrontierCode **65.3%** (#1), KernelBench Mega **35.46** (#1), SWE-Marathon **74/160 passing trials** (#5; avg uncalibrated partial 46.3%, 198.65M tokens/trial, $163.9/trial), Toolathlon **77.8 Pass@1 / 82.4 Pass@3 / 72.2 Pass^3** (#7), BrowseComp **88.5%** (#13), Agents' Last Exam **38.2%** (#10), DRACO **87.4%** at max, Vending-Bench 2 **9235.25** (#8), PostTrainBench **49.3%** (#1), RuneBench **6.7** (#3).
- **Terminal-Bench 4.0 conflict:** vendor 66.4% (xhigh, ±2.6, safeguards enabled with fallbacks) vs AA 59.6–60% vs public Claude Code leaderboard protocol (reproduces Opus 5 at 51.8% vs 52.3% — within noise). TB-Science 0.1: 63.3% (#2; field leader GPT-6 Astra 68.1%).
- **System card re-read (2026-09-22):** "matches or exceeds Claude Fable 5.1 and Claude Mythos 5.1 on many evaluations"; SOTA on TB 4.0, CursorBench, GDPval-AA, AA-Briefcase; CB-1 (not CB-2) bio classification; platform docs confirm text+image in → text out, 1M context, 128K max output (300K Batch), knowledge cutoff Jun 2026.
- **Score impact:** Tool 94→95 (AA AutomationBench-AA 70% independent + Toolathlon/BrowseComp breadth; TB-4.0 vendor/AA spread and unpublished Claw-Eval/MCP-Atlas still cap below 96); Coding 94→95 (Vibe Code Bench 90.3% and SciCode 66.9% fills; SWE-bench Verified and LiveCodeBench still unpublished keep it below 96); Overall (95+92+97+65+95)/5 = 88.8 → **89**.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (Anthropic system card and platform docs, Artificial Analysis, Zapier AutomationBench leaderboard, BenchmarkList, VulcanBench, BenchmarkRegistry); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
