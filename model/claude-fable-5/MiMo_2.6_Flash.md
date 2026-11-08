# Claude Fable 5 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 88). Fresh sources this pass: BenchLM model page
> (last updated 2026-11-07, 49 rows) + Artificial Analysis leaderboards
> (GPQA, HLE, LCR, Tau3, SciCode, Omniscience) + ARC Prize + Epoch
> FrontierMath + LlamaIndex ParseBench.
> Changes: Tool use 91→89 (TB2.1 corrected to 84.3–84.6 system-card/AA —
> the old 88.0 load-bearing row — and GDPval-AA to 1747, offset by
> OSWorld-Verified 85 / Tau3 38.1 / τ²-bench 98.5 fills), Reasoning 91→93
> (named GPQA/ARC gap now published: GPQA 92.6–93.2, ARC-AGI-2 89.2),
> Context 95→96 (AA-LCR 82.3 now published), Multimodal 67→76 (PDF input
> evidenced: ParseBench 69.79 + GDP.pdf), Coding 95 and Cost 30 held,
> Overall 88→89.8.

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first **generally available Mythos-class model** (released 2026-06-09 with Claude Mythos 5 — same weights; Mythos keeps safeguards lifted for vetted partners). "SOTA on nearly all tested benchmarks" at launch. Built-in safeguard classifiers **fall back to Opus 4.8** (not refusals) on cyber/bio/chem/distillation prompts — <5% of sessions on average; on AWS those routed requests bill at Opus rates. Mandatory **30-day data retention**. Superseded by Fable 5.1 (same $10/$50, cheaper cache reads). Availability note: export-control order took Fable 5/Mythos 5 offline 2026-06-12; lifted 2026-06-30, Fable 5 restored 2026-07-01 (morphllm, 2026-11-08 fetch).
- **Provider / access:** Claude API (`claude-fable-5`), Claude apps, Amazon Bedrock, Claude Platform on AWS, Google Vertex, Microsoft Foundry, GitHub Copilot, Databricks; partners like Harvey.
- **Release / knowledge:** released 2026-06-09; knowledge cutoff not surfaced in launch sources → not scored.
- **IDs:** `anthropic/claude-fable-5` (gateway routes) / `claude-fable-5` (native; restricted sibling `claude-mythos-5`).
- **Context window:** 1,000,000 tokens (BenchLM: "1M+"); max output 128,000; **no long-context surcharge** (full 1M at standard rates).
- **Modalities:** text + images in; text out; reasoning yes (adaptive thinking always on — no disable; `effort` parameter, `task-budgets` beta, `fallbacks` API); tool calls yes (incl. native memory tool). PDF/document input now evidenced by benchmark (ParseBench, GDP.pdf).
- **Pricing (as of 2026-11-08):** **$10.00 in / $50.00 out** per 1M, cached input **$1.00/M** (BenchLM/llm-stats re-confirmed 2026-11-08); Batch $5/$25; 5m/1h cache writes $12.50/$20; US-only inference +1.1×. 30-day retention required. Fallback-routed traffic bills at Opus rates. Paid (subscription usage credit-metered since 2026-06-23).
- **Architecture:** proprietary Mythos-class (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Anthropic Fable 5/Mythos 5 system card, via BenchLM) / **84.6%** (AA terminalbench-v2-1 leaderboard) / **80.5%** (Vals AI) — **correction**: the previous pass recorded 88.0 from a launch-image transcription; the independent consensus is 80–85, i.e. below the ~88% frontier ref. TB3.0: **34.0%** (Terminal-Bench 3.0 leaderboard, new). terminalBenchHard: **62.9%** (AA, new).
- **GDPval-AA: 1747** (Anthropic system card, via BenchLM; normalized 55.5%) — **correction**: the previous pass recorded 1932 on the earlier GDPval scale; current v2 figure sits *at* the 1750 ref, not above it. AA Briefcase-class rows: AA Agentic Index **51.0%**, AA Harvey LAB v1.0 **93.6%**, AA EnterpriseOps-Gym **51.1%** (AA, new).
- **AA Tau3-Banking: 38.1%** (AA tau3-bench leaderboard, new — fills the missing Tau3 row; above the mid band 10–25, below the 50+ frontier ref); **τ²-bench: 98.5%** (AA tau2-bench leaderboard, new); AA-AnalystAgent 48.8%; ApprenticeBench 34%; MazeBench 11%.
- **OSWorld-Verified: 85%** (Anthropic system card, via BenchLM — a usable figure now exists, superseding the "no usable OSWorld number" state; note Anthropic's Fable 5.1 page still reports 0 on OSWorld 2.0 / AutomationBench tasks where safeguard classifiers intervened). AutomationBench: still no usable capability figure (safeguard interference) — no verified public score found.
- Terminal-Bench Science 0.1: **21.4** (public leaderboard) / **24.7** (Anthropic's setup) vs Opus 5's 30.0/29.0 (previous-pass figures; not re-listed on BenchLM 2026-11-07). CursorBench 3.1 (max): 72.9 (previous pass) / **70.6%** (Cursor evals, via BenchLM); CursorBench 3.2: **70.5%** (Cursor evals, new).

Reasoning / knowledge:

- **AA-GPQA Diamond: 92.6%** (AA leaderboard, new) / **93.2%** (Vals AI, new) — **fills the named "no GPQA disclosure" gap and clears the 90%+ frontier ref.**
- **ARC-AGI-1: 98.50% / ARC-AGI-2: 89.2%** (ARC Prize published Semi-Private results, new — fills the named ARC gap).
- HLE: **59.0 no-tools** (Anthropic, previous pass) / **55.5%** (AA leaderboard, new). AA-LCR: **82.3%** (AA, new — first long-context-reasoning row); CritPt: **28.6%** (AA, new).
- Artificial Analysis Intelligence Index: **60, #1 of the board at launch** (v4.1-era compilation) vs **49.6%** on the current AA model page (via BenchLM, 2026-11-07) — scale re-base reported side by side; both below/near the 60+ ref on their own scale.
- **AA-Omniscience: Accuracy 65.4% / Hallucination Rate 63.6% / Index 43.3** (AA, new — fills the "no dedicated Omniscience row" gap; AA's own article calls Fable 5 the highest score to date on AA-Omniscience at launch, driven by accuracy).
- FrontierMath v2 Tier 1-3: **87.018%**, Tier 4: **90.200%** (Epoch AI leaderboard, new — independent). MMLU-Pro: 91.5 (Vals). AIME: no verified public score found.

Coding:

- SWE-bench Verified: **95%** (Anthropic system card) / **95.0%** (Vals AI independent — resolves the old "self-report-only" caveat for this row); SWE-bench Pro: **80%** (system card; contested figure persists).
- **AA-SciCode: 61.0%** (AA scicode leaderboard, new — clears the 55% frontier ref); **AA Coding Index: 76.5%** (AA, new — clears the 70% ref); **LiveCodeBench: 89.8%** (Vals AI, new).
- FrontierCode 1.1 Main: **53.5%** (Cognition); FrontierSWE v2: **47.0%** (Proximal); VulcanBench v3: 89.5%; Terminal-Bench 2.1: 84.3 (as above); Terminal-Bench 3.0: 34.0.
- FrontierCode Diamond: **29.3** (previous pass, vs Opus 4.8 13.4, GPT-5.5 5.7). GDP.pdf: 29.8 (visual doc reasoning, previous pass).
- Vibe Code Bench: no verified public score found.

Multimodal:

- **ParseBench: 69.79%** (LlamaIndex document-parsing/OCR leaderboard, Nov 6 2026 snapshot, via BenchLM — ParseBench converts **PDFs** into structured output, so this is measured PDF/document-input evidence, new).
- Blueprint-Bench 2: 38.6%; OfficeQA Pro: 57.9%; Design Arena Website: 1294 (OpenRouter). GDP.pdf: 29.8 (visual doc reasoning).
- Video/audio input: no verified public score found; output is text-only.

Long context:

- **AA-LCR: 82.3%** — first standalone long-context-reasoning row (previous pass: "no needle/LCR/MRCR figure published"); MRCR / RULER / GraphWalks: no verified public score found (re-checked 2026-11-08).

### Normalized scores (1–100)

- **Tool use: 89/100.** Moved 91→89: the two rows the old score leaned on are corrected by primary sources — TB2.1 is **84.3–84.6** (system card / AA, not 88.0) and GDPval-AA is **1747** (system card, not 1932) — so neither clears its frontier ref now; offset by new fills OSWorld-Verified **85%**, τ²-bench **98.5%**, AA Tau3-Banking **38.1%** and AA Harvey LAB 93.6 → net −2. Still capped by missing Claw-Eval/MCP-Atlas rows, AutomationBench unusable (safeguard interference), and TB3.0 34.0.
- **Reasoning: 93/100.** Moved 91→93: the named cap ("no GPQA/ARC/AIME disclosure") is now largely resolved with published rows — GPQA **92.6 (AA) / 93.2 (Vals)** clears the 90%+ ref, ARC-AGI-2 **89.2** and ARC-AGI-1 98.5, HLE 55.5–59.0, FrontierMath v2 T4 **90.200** (Epoch, independent), plus the first AA-Omniscience row; capped below 95 because AIME is still unpublished and the current-scale AA Index (49.6) sits below the 60+ ref.
- **Context window: 96/100.** Moved 95→96: the named cap ("zero retrieval benchmarks") is gone — AA-LCR **82.3%** is now a published standalone long-context-reasoning measurement on the 1M window; short of 97+ because there is still no ≥98% needle-retrieval row at 512K+ (MRCR/RULER absent 2026-11-08).
- **Multimodal: 76/100.** Moved 67→76: PDF/document input is now measured — ParseBench **69.79%** (a PDF→structured-output parsing benchmark, Nov 6 2026 snapshot) and GDP.pdf 29.8 — putting it in the +video/PDF-in 75–90 band; no video or audio input and text-only output keep it at the low end (previously scored as image-only).
- **Coding: 95/100.** Held with re-derived justification: Vals AI independently confirms SWE-bench Verified **95.0** (the old "self-report-only" cap on that row is gone) and AA-SciCode **61.0** + AA Coding Index **76.5** + LiveCodeBench **89.8** fill three missing rows and clear their frontier refs; these offset the TB2.1 correction to **84.3** (just below the 85% ref) and TB3.0 34.0 — net zero →95. Remaining caps: SWE-Pro still vendor-only/contested, TB-Science lag vs Opus 5.
- **Cost efficiency: 30/100.** $10/$50 lands exactly on the $10/$50 ≈ 30 anchor (re-confirmed 2026-11-08: cached input $1.00/M); Batch halves it and cache reads at 90% off help agentic loops, but 30-day retention, Opus-rate fallback billing, and a 2×-Opus list price with no cheap tier keep it at 30 — unchanged.
- **Overall Score: 89.8/100.** (89 + 93 + 96 + 76 + 95) / 5 = 449 / 5 = 89.8 — the capability ceiling of mid-2026 at premium-plus pricing: every coding ref cleared (independently confirmed on SWE-V), the now-full reasoning sheet, and measured PDF input, offset by corrected agentic rows and a cost profile aimed at the top 1% of workloads.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page last updated 2026-11-07, Artificial Analysis leaderboards, ARC Prize published results, Epoch AI FrontierMath, Vals AI, Cursor evals, LlamaIndex ParseBench docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5 — BenchLM](https://benchlm.ai/models/claude-fable)
  - [Claude Fable 5 — Artificial Analysis](https://artificialanalysis.ai/models/claude-fable-5)
  - [Claude Fable 5 and Claude Mythos 5 system card](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)
  - [ParseBench — LlamaIndex](https://www.parsebench.ai/)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
