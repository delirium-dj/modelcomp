# Claude Opus 4.7 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-opus-4-7`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's April-2026 model — the release that **introduced the `xhigh` effort level** (between `high` and `max`) and the first with a new tokenizer ("roughly 1.0–1.35×" tokens). Now **legacy** and superseded by Claude Opus 4.8 ("Anthropic has launched a newer release, Claude Opus 4.8. We suggest considering it instead."), and itself the source of Anthropic's later "safe by default" framing for Claude Fable 5. Distinct model id from `claude-opus-4.6` and `claude-opus-4.8`.
- **Provider / access:** Claude API `claude-opus-4-7`; AWS Bedrock `anthropic.claude-opus-4-7`; Google Cloud, Microsoft Foundry and Claude Platform on AWS `claude-opus-4-7`; OpenRouter `anthropic/claude-opus-4.7` (canonical `anthropic/claude-4.7-opus-20260416`, + `:batch`); OpenCode Zen `opencode/claude-opus-4-7` (`https://opencode.ai/inference/anthropic/v1/messages`).
- **Release / knowledge:** released **2026-04-16**; status "Active (legacy)"; retirement "Not sooner than April 16, 2027"; migration target Opus 5.5. Reliable knowledge cutoff **Jan 2026**, training-data cutoff **Jan 2026**.
- **IDs:** `claude-opus-4-7` (Claude API), `anthropic.claude-opus-4-7` (Bedrock), `anthropic/claude-opus-4.7` (OpenRouter), `opencode/claude-opus-4-7` (Zen).
- **Context window:** **1,000,000 tokens**, **128,000 max output** (300K on the Batch API via `output-300k-2026-03-24`).
- **Modalities:** "Text and images → text". Adaptive thinking, **default effort `high`**; levels low / medium / high / **xhigh** / max; per-message effort is not offered on 4.7, and **fast mode is not supported** (only on Opus 5.5/5/4.8). Images are resized to a 2,576-px long edge.
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$5**, output **$25**; 5-minute cache write **$6.25**, 1-hour cache write **$10**, cache read **$0.50**; Batch API 50% discount on input and output. Launch page: "Pricing remains the same as Opus 4.6: $5 per million input tokens and $25 per million output tokens." OpenCode Zen lists $5.00 / $25.00 / $0.50 / $6.25.
- **Architecture:** proprietary, closed weights; parameter count not disclosed. Opus 4.7 system card published with the model.

### Raw benchmarks found

> Anthropic's system-card numbers are marked "vendor" (Table 8.1.A, adaptive thinking at max effort, 5 trials); the Opus 4.8 system card's comparison column is also vendor data for 4.7; Artificial Analysis, Vals AI, the BenchLM ledger and community trackers are independent.

Agent / tool use:

- Terminal-Bench 2.1: **66.1%** (Opus 4.8 system-card comparison column, Harbor/Terminus-2) / **68.54%** (Vals AI) / 83.15% (AA ledger value, not verifiable at source) — and Terminal-Bench **2.0**: **69.4%** with thinking disabled (Opus 4.7 card)
- Terminal-Bench 4.0: **no verified public score found** (no row on the official board; AA `terminalBench40: null`)
- MCP-Atlas: **77.3%** (4.7 card) / **79.1%** (4.8 card column); Toolathlon **59.3%** Pass@1 (internal harness) / **52.8%** (published leaderboard, "the published leaderboard's Opus 4.7 figure uses the authors' default configuration")
- AutomationBench: **9.9%** at max effort (4.8 card, Zapier) — the AutomationBench paper notes "Even the best frontier models currently score below 10%"
- BrowseComp **79.3%**; OSWorld **78.0%** (4.7 card) / **82.8%** (4.8 card) / **82.3%** (4.8 launch-page footnote) — Anthropic is internally inconsistent here; Finance Agent v2 **51.5%** (4.8 card) / 64.4% (4.7 card); GDPval-AA **1753** (4.8 card)
- ScreenSpot-Pro **79.5% / 87.6%**; OfficeQA **86.3%** / OfficeQA Pro **80.6%**; IFBench not published; Claw-Eval / Toolathon / τ-bench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (vendor) / **90.15%** (Vals AI) / 91.41% (AA ledger)
- HLE: **46.9%** without tools / **54.7%** with tools (vendor) / 42.31% (AA ledger); MMMLU **91.5%** (vendor); MMLU-Pro 89.87% (Vals) / 89.9% (via BenchLM)
- FrontierMath legacy aggregate **43.8%**; FrontierMath v2: Tiers 1–3 **70.175%**, Tier 4 **31.707%** (Epoch AI, via BenchLM)
- ARC-AGI-1 **92.0%**, ARC-AGI-2 **75.83%** (vendor); **ARC-AGI-3 "has not been run on this model at the time of release"** (the 0.2% attributed by BenchLM is a later ARC Prize semi-private result)
- MRCR v2 **59.2%** (via BenchLM); HealthBench Pro 51.9% (4.8 card); CritPt 12.0% (AA ledger) / 5.1% (AA non-reasoning variant); AA-LCR 78.7%; τ² 88.6% (max) / 74% (non-reasoning)

Coding:

- SWE-bench Verified: **87.6%** (vendor) / **82.00%** (Vals AI) — no official swebench.com row
- SWE-bench Pro **64.3%**, Multilingual **80.5%**, Multimodal **34.5%** (vendor)
- Terminal-Bench 2.1 66.1–68.54%; LiveCodeBench **85.07%** (Vals AI); FrontierCode 1.1 Main **38.5%** (via BenchLM); Vibe Code Bench v1.1 **71.00%** (Vals); PostTrainBench 28.6%; React Native Evals 82.8%
- No DeepSWE, no FrontierSWE, no Terminal-Bench 4.0, no CursorBench row for 4.7

Long context:

- GraphWalks (from the Opus 4.8 card's 4.7 column): BFS 256K **76.9%**, parents 256K **93.6%**; MRCR v2 59.2%; no RULER figure
- 1M context, 128K max output, 300K on Batch

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 78/100.** Decent agentic profile — Terminal-Bench 2.1 66.1–68.54%, BrowseComp 79.3%, OSWorld 78.0–82.8%, MCP-Atlas 77.3–79.1%, Toolathlon 52.8–59.3%, Finance Agent v2 51.5–64.4%, GDPval-AA 1753, ScreenSpot-Pro 87.6%, OfficeQA Pro 80.6%. Capped below 85 by the rubric's anchors (TB2.1 ~88%+ → 66–69% at best; τ-bench not published; GDPval ~1750+ → met at 1753), by AutomationBench at **9.9%**, by the absence of Terminal-Bench 4.0 and of any τ-bench / Claw-Eval / Toolathon figure, and by OSWorld's internally inconsistent 78.0 / 82.3 / 82.8 readings.
- **Reasoning: 80/100.** GPQA Diamond 94.2% (vendor) / 90.15% (Vals), HLE 46.9% / 54.7%, MMMLU 91.5%, FrontierMath v2 70.175% (T1–3) but only 31.707% (T4), ARC-AGI-1 92.0% / ARC-AGI-2 75.83%, MMLU-Pro 89.87%, HealthBench Pro 51.9%, GraphWalks parents 256K 93.6%. Capped by the AA Intelligence Index of **41\*** (an estimate, in the rubric's mid band), by CritPt 12.0%, by FrontierMath Tier 4 at 31.707%, and by the fact that **ARC-AGI-3 was never run on this model at release** (0.2% is a later semi-private result).
- **Context window: 95/100.** 1,000,000-token context with a 128,000 max output (300K on Batch) — the rubric's top tier (≥1M = 95–100), clearing the 64K output line — with a usable long-context anchor in GraphWalks parents 256K 93.6%. Not 100: BFS at 256K is only 76.9%, MRCR v2 is 59.2%, and nothing is measured at 512K–1M.
- **Multimodal: 72/100.** Image input with text out, and unusually strong document/office reasoning for its generation — OfficeQA 86.3% and OfficeQA Pro 80.6%, ScreenSpot-Pro 87.6%, CharXiv 91.0% with tools, SWE-bench Multimodal 34.5%, MMMU-Pro 78.84% (AA ledger) — plus an OSWorld-class 78.0–82.8% in agentic computer use. The rubric's "+image in = 60–70" band is the ceiling; two points above it are justified by the strength of the document and screen benchmarks, but no video/audio input is documented.
- **Coding: 75/100.** SWE-bench Verified 87.6% (vendor) / 82.00% (Vals), LiveCodeBench 85.07%, Vibe Code Bench 71.00%, SWE-bench Pro 64.3% / Multilingual 80.5%, Terminal-Bench 2.1 66.1–68.54%, FrontierCode 38.5%. Capped by no DeepSWE figure at all, no Terminal-Bench 4.0, no FrontierSWE, no CursorBench, Terminal-Bench 2.1 far below the rubric's 85% anchor, PostTrainBench 28.6% and SWE-bench Multimodal 34.5%.
- **Cost efficiency: 45/100.** The evaluated route — OpenCode Zen `opencode/claude-opus-4-7` — is billed at **$5.00 in / $25.00 out** per 1M, cached read $0.50, cached write $6.25, matching Anthropic's list price ("Pricing remains the same as Opus 4.6"). The rubric's anchors run "~$3/$15 = ~60" and "~$10/$50 = ~30", placing $5/$25 in between; Batch halves it to $2.50/$12.50 and the 0.10× cache read is the practical offset, while the $6.25 cache-write price is the most expensive in the dataset.
- **Overall Score: 80/100.** (78 + 80 + 95 + 72 + 75) / 5 = 80 — best-fit: the April-2026 generation that introduced `xhigh` effort and a new tokenizer, with strong office/document reasoning (OfficeQA Pro 80.6%) and 1M context, but a clearly weaker agentic-terminal profile (Terminal-Bench 2.1 ~67%) and a 9.9% AutomationBench — for the same $5/$25, Claude Opus 4.8 (TB 2.1 74.6%, TB 4.0 23.2%, GraphWalks 99.3% at 256K) or Claude Sonnet 5.5 ($2/$10) are the better buys.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 2.1 — 66.1% (Anthropic, via the 4.8 card) vs 68.54% (Vals) vs 83.15% (AA ledger).** The AA value could not be verified on any fetched page and is not used. The 2.0-vs-2.1 distinction matters: 69.4% (2.0, thinking disabled) is not comparable with 66.1% (2.1).
2. **OSWorld — 78.0% (4.7 card) vs 82.8% (4.8 card column) vs 82.3% (4.8 launch footnote).** Anthropic contradicts itself within its own documents; all three are listed and the conservative reading is used.
3. **Toolathlon — 59.3% (internal harness) vs 52.8% (published leaderboard).** Anthropic explains it: "the published leaderboard's Opus 4.7 figure uses the authors' default configuration".
4. **AutomationBench 9.9% (Zapier, max effort) vs AA's AutomationBench-AA metric.** Different implementations; the AutomationBench paper's own line — "Even the best frontier models currently score below 10%" — contextualises the low score.
5. **GDPval-AA — 1753 (4.8 card) vs 1352.39 (AA ledger) vs 1396 (via BenchLM).** A ~400-Elo spread; the vendor figure is used with the others recorded.
6. **GPQA — 94.2% (vendor) vs 90.15% (Vals).** Harness/effort differences; Vals used for the reasoning cap.
7. **CritPt — 12.0% (AA reasoning) vs 5.1% (AA non-reasoning).** Artificial Analysis marks CritPt "Under review"; the reasoning-variant value is used.
8. **τ²-bench — 88.6% (max) vs 74% (non-reasoning).** Effort-level spread, documented.
9. **ARC-AGI-3.** The 4.7 system card states it "has not been run on this model at the time of release"; the 0.2% attributed by BenchLM is a later ARC Prize semi-private result and is labelled as such rather than treated as a launch figure.
10. **Effort labelling.** Anthropic's API default is `high`, all published evals are at **max**, and Vals used "Compute Effort: max" — the AA entry is a "Max" variant and its index (41\*) is an **estimate**, not a measurement.
11. **Community signal.** Vals' release note said "Claude Opus 4.7 is the new SOTA" and it ranked #1 on the Vals Index at launch and #1 of 91 on SAGE; a Hacker News thread records a Bedrock quota-zero incident for the model. Both are recorded as context, not scored.

### Notes on identity

- `claude-opus-4-7` is a distinct model from `claude-opus-4.6` (same $5/$25 price, but a different checkpoint) and from `claude-opus-4.8` (May 2026, which published an explicit improvement ladder over 4.7 on Terminal-Bench 2.1, Toolathlon, AutomationBench, MCP-Atlas and GraphWalks).
- **Effort levels are parameters on one model**, and 4.7 is where Anthropic introduced `xhigh` (between `high` and `max`); fast mode is not offered on 4.7.
- The "Legacy" status and the 2027-04-16 retirement date mean this model is at the end of its supported life, one generation behind the Opus 4.8 that replaced it in May 2026.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic first-party model overview, effort and pricing docs, the Opus 4.7 system card and the Opus 4.8 system card's 4.7 comparison column, the Opus 4.8 launch page (for the 4.7 OSWorld footnote), OpenRouter and OpenCode Zen catalogs; independent trackers Vals AI (own runs, release notes), Artificial Analysis (model page, Max and non-reasoning variants, with the index marked as an estimate), the BenchLM evidence ledger, and Hacker News. Vendor-vs-independent conflicts — including Anthropic's own OSWorld inconsistency and the unverifiable AA ledger row — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.7.md`, using the same headings.
