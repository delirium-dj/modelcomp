# Claude Sonnet 5 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's June-2026 Sonnet — the release that made the **introductory price permanent** ("the $3/$15 rise will not occur") and that introduced a **new tokenizer** producing roughly 30% more tokens (Willison measured 1.27–1.42× on real documents). Anthropic positioned it as "its performance is close to that of Opus 4.8, but at lower prices". It is now **legacy** — "a legacy model; Claude Sonnet 5.5 is the current Sonnet model" — and is the **most verbose model in the Artificial Analysis catalogue** (370M output tokens on the index).
- **Provider / access:** Claude API `claude-sonnet-5`; AWS Bedrock `anthropic.claude-sonnet-5`; Google Vertex, Microsoft Foundry and Claude Platform on AWS `claude-sonnet-5`; OpenRouter `anthropic/claude-sonnet-5` (canonical `anthropic/claude-5-sonnet-20260630`, + `:batch`); OpenCode Zen `opencode/claude-sonnet-5` (`https://opencode.ai/inference/anthropic/v1/messages`).
- **Release / knowledge:** released **2026-06-30**; status "Active (legacy)"; retirement "Not sooner than June 30, 2027". Reliable knowledge cutoff **Jan 2026**; training-data cutoff Jan 2026.
- **IDs:** `claude-sonnet-5` (Claude API), `anthropic.claude-sonnet-5` (Bedrock), `anthropic/claude-sonnet-5` (OpenRouter), `opencode/claude-sonnet-5` (Zen).
- **Context window:** **1,000,000 tokens**, **128,000 max output** (300K on Batch via `output-300k-2026-03-24`).
- **Modalities:** "Text and images → text". Thinking: **Adaptive**, on by default, **default effort `high`**; levels low/medium/high/xhigh/max (OpenRouter also lists `none`). Setting `temperature`/`top_p`/`top_k` "returns a 400 error". Tooling: tool-use system prompt 354 tokens (auto/none) / 474 (any/tool), bash +325, text editor +974.
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$2**, output **$10**; 5-minute cache write **$2.50**, 1-hour cache write **$4**, cache read **$0.20**; Batch **$1 / $5**. **No fast mode** (Opus 5.5/5/4.8 only). Launch pricing was $3/$15 with an intro discount; the Aug 10, 2026 changelog made the discounted rate permanent.
- **Architecture:** proprietary, closed weights; parameter count not disclosed. New tokenizer ≈ 30% more tokens per unit of text — a real cost and context-window penalty.

### Raw benchmarks found

> Anthropic's system-card numbers are marked "vendor" (Table 8.1.A: adaptive thinking, max effort, default sampling, 5 trials); Artificial Analysis, the official Terminal-Bench board, Vals AI, the BenchLM ledger and CodeRabbit are independent.

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (vendor, mini-SWE-agent, xhigh effort, 445 trials over 89 tasks) / **74.53%** (Vals AI, high effort) / 80.4% (via BenchLM)
- Terminal-Bench 4.0: **12.42% ± 3.1** (official tbench.ai board, Claude Code, max effort, rank 33 of 330 trials, $9.6k) / **14.14%** (AA) / **10.61%** (Vals AI, #37/50)
- Terminal-Bench 3.0 **14.6%** (via BenchLM)
- Toolathlon Pass@1 **54.3%** (vendor) / 55.6% (via BenchLM); AutomationBench **13.5%** (vendor, Zapier held-out) / **36.51%** (AA objective-share)
- BrowseComp **84.7%** single agent (86.6% multi-agent); OSWorld-Verified **81.2%**; GDPval-AA v2 **1609 Elo** (vendor) / 1463.81 (AA) / 1603 (via BenchLM)
- AA-Briefcase Elo **1393** (vendor) — "183 turns on average vs 67 for Fable 5" — a striking verbosity datapoint; AA-Briefcase Elo 1358.4 (AA)
- OfficeQA 73.3 / OfficeQA Pro 59.4; BenchCAD IoU 0.266/0.373; GDP.pdf 81.6% with tools / 67.5% without; Toolathlon 54.3%; Legal Agent Bench 8.9% (Harvey held-out 5.8%)
- IPI / Claw-Eval / Toolathon (non-Verified) / MCP-Atlas: **no verified public score found** for Sonnet 5

Reasoning / knowledge:

- HLE: **43.2%** without tools / **57.4%** with tools (vendor) / **41.29%** (AA) / 57.4% and 43.2% (via BenchLM); HLE-Verified **31.0%** (via BenchLM, sourced to a DeepMind model card and not verified from HLE directly)
- GPQA Diamond **88.89%** (Vals) / 91.11% (via BenchLM's AA attribution); MMLU-Pro 87.55% (Vals) / 87.5% (via BenchLM)
- FrontierMath v2: Tiers 1–3 **65.614%**, Tier 4 **29.268%** (Epoch AI, via BenchLM — unverified directly, the Epoch page is client-rendered)
- Omniscience index 16.45, accuracy **40.05%**, hallucination rate **39.37%** (AA) — the **lowest hallucination rate** of any model in this batch; MLCR-AA 55.0%; CritPt 16.86%; LCR 82.0%; HealthBench Pro 57.8% (vendor) / 59.3% (via BenchLM)
- Artificial Analysis Intelligence Index: **38** (#68/217) at max, with xhigh 34 (#75), high 32 (#90), medium 28 (#104), low 24 (#129) — a 14-point spread across effort levels

Coding:

- SWE-bench Verified **85.2%** (vendor) / 85.2% (via BenchLM); SWE-bench Pro **63.2%**, Multilingual **78.3%**, Multimodal **28.1%** (vendor)
- LiveCodeBench **82.43%** (Vals) / 82.4% (via BenchLM); FrontierCode v1 **38.8%** (vendor) / 42.7% (FrontierCode 1.1 Main, via BenchLM); CursorBench **61.2%** (vendor) / 3.2 61.5% and 4.0 34.1% (via BenchLM)
- Terminal-Bench 2.1 80.4% (vendor) / 74.53% (Vals); Terminal-Bench 4.0 12.42% (official board)
- VulcanBench Coding Intelligence Index v1 **89.2%**; Vibe Code Bench v1.1 **81.33%** (Vals); no DeepSWE, FrontierSWE or ProgramBench figure for Sonnet 5

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published** for Sonnet 5. 1M context with a 128,000 max output (300K on Batch).
- Practical caveat from the tokenizer change: ~30% more tokens per unit of text reduces the effective context in documents.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 76/100.** A capable everyday agentic profile — Terminal-Bench 2.1 80.4% (vendor) / 74.53% (Vals), BrowseComp 84.7%, OSWorld-Verified 81.2%, Toolathlon 54.3%, GDPval-AA 1609 Elo (vendor) / 1463.81 (AA), OfficeQA 73.3 / Pro 59.4, AA-Briefcase Elo 1358–1393, Legal Agent Bench 8.9%. Capped by Terminal-Bench 4.0 at **10.61–14.14%** (official board 12.42%), AutomationBench at 13.5% in Anthropic's own strict run, Terminal-Bench 3.0 at 14.6%, the 183-turn average on AA-Briefcase (a cost/latency problem as much as a capability one), and the absence of IPI, Claw-Eval or MCP-Atlas rows.
- **Reasoning: 80/100.** HLE 43.2% / 57.4% with tools, GPQA 88.89–91.11%, MMLU-Pro 87.55%, FrontierMath v2 65.614% (T1–3) / 29.268% (T4), CritPt 16.86%, MLCR-AA 55.0%, LCR 82.0%, and an Omniscience profile with the **lowest hallucination rate in the batch (39.37%)** though at only 40.05% accuracy. Capped by the AA Intelligence Index of **38** (under the rubric's 60+ anchor), by FrontierMath Tier 4 at 29.268%, by HLE-Verified 31.0%, and by the 30%-heavier tokenizer penalising effective context and cost.
- **Context window: 95/100.** 1,000,000-token context with a 128,000 max output (300K on Batch) — the rubric's top tier (≥1M = 95–100), with the output cap above the 64K line. Not 100: **no long-context retrieval measurement exists** for Sonnet 5, and the new tokenizer's ~30% token inflation reduces the effective document capacity of the 1M window by roughly a quarter.
- **Multimodal: 70/100.** Image input with text out, with good vision numbers — MMMU-Pro 83.01% (Vals), CharXiv 88.3% with tools / 77.0% without, OfficeQA 73.3%, ScreenSpot-class work via OSWorld 81.2% — but weak on the document/code rendering axis: BenchCAD IoU 0.266 (0.373 with tools) and SWE-bench Multimodal only 28.1%. The rubric's "+image in = 60–70" band is the ceiling and is met at its top: no video or audio input is documented.
- **Coding: 78/100.** SWE-bench Verified 85.2%, SWE-bench Pro 63.2% / Multilingual 78.3%, LiveCodeBench 82.43%, Terminal-Bench 2.1 80.4% (vendor) / 74.53% (Vals), FrontierCode 38.8–42.7%, CursorBench 61.2%, VulcanBench Coding Intelligence Index 89.2%, Vibe Code Bench 81.33%. Capped by Terminal-Bench 4.0 at 10.61–14.14% (the benchmark that now measures agentic coding), Terminal-Bench 3.0 at 14.6%, SWE-bench Multimodal 28.1%, BenchCAD IoU 0.266, and the absence of any DeepSWE, FrontierSWE or ProgramBench figure.
- **Cost efficiency: 78/100.** The evaluated route — OpenCode Zen `opencode/claude-sonnet-5` — is billed at **$2.00 in / $10.00 out** per 1M with a $0.20 cached read and $2.50 cached write, matching Anthropic's permanent introductory rate; the rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) put $2/$10 at roughly 78. The real deduction is **verbosity**: 370M output tokens on the Intelligence Index (#115/116 — the second most verbose model measured), which drives Artificial Analysis's **$5.09 per Index task** (#107/114 — among the most expensive in the catalogue) despite the mid-range sticker price, and the ~30% token inflation from the new tokenizer multiplies both cost and latency.
- **Overall Score: 79.8/100.** (76 + 80 + 95 + 70 + 78) / 5 = 79.8 — best-fit: the June-2026 Sonnet, a balanced all-rounder with the best hallucination rate in the set and 1M context, but clearly behind on the current agentic-terminal and agentic-coding benchmarks (Terminal-Bench 4.0 ~12%, Terminal-Bench 3.0 14.6%) and the most verbose model in the catalogue — at $2/$10 it is beaten on capability-per-dollar by Claude Sonnet 5.5 ($2/$10, Terminal-Bench 4.0 61.8–70.6%).

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 2.1 — 80.4% (Anthropic, xhigh, mini-SWE-agent) vs 74.53% (Vals, high effort).** Effort and harness differ; the vendor figure is quoted, the AA value (which has no TB 2.1 entry for Sonnet 5) is noted as absent.
2. **Terminal-Bench 4.0 — 12.42% ± 3.1 (official tbench.ai) vs 14.14% (AA) vs 10.61% (Vals).** Three harnesses, one verdict: very weak. The official board is the anchor.
3. **AutomationBench — 13.5% (Zapier private held-out) vs 36.51% (AA objective-share).** Different metrics; the strict figure is used.
4. **GDPval-AA — 1609 (system card) vs 1463.81 (AA) vs 1603 (via BenchLM).** A ~145-Elo spread; the AA figure is used.
5. **GDP.pdf — 81.6% / 67.5% mean criteria pass rate (vendor) vs 13.2% all-pass (AA).** Different metrics on the same benchmark; both are listed.
6. **FrontierCode — 38.8% (Anthropic, v1) vs 42.7% (BenchLM, "1.1 Main", Cognition blog).** Version labelling.
7. **CursorBench — 61.2% (vendor) vs 61.5% (3.2, via BenchLM) and 34.1% (4.0).** Version labelling again — 4.0 is much lower.
8. **HLE-Verified 31.0%** is sourced by BenchLM to a **DeepMind model card**, not to Anthropic or the HLE leaderboard; it is labelled as unverified and is not used as the reasoning anchor.
9. **FrontierMath 65.614% / 29.268%** is BenchLM-attributed to Epoch AI; the Epoch leaderboard is client-rendered and could not be read directly, so these are labelled as relayed.
10. **Vals Index drift — 68.61% (#3) on launch day vs 51.90% (#25/50) now**, the same scoring-pool shift seen for Opus 5, Opus 4.8 and Gemini 3.5 Flash; a model-page effect, not a regression.
11. **Verbosity.** 370M is the only verified verbosity figure; the phrase "most verbose model in the catalogue" is not sourced (AA says "very verbose… median of 85M"), so the report states the number rather than the superlative. Simon Willison's tokenizer measurements (UDHR-en 2,356→3,341 tokens; sqlite_utils 44,014→56,113) are the concrete evidence of the 1.27–1.42× inflation.
12. **Independent quality signal:** CodeRabbit measured Sonnet 5's review precision "climbed from about 29% with Sonnet 4.6 to roughly 38% to 40%" — a real-world quality datapoint from a code-review product, recorded as context rather than a benchmark.

### Notes on identity

- `claude-sonnet-5` is a distinct model from `claude-sonnet-4.6` (which it beats on SWE-bench Pro 63.2 vs 58.1) and from `claude-sonnet-5.5` (its September successor, scored separately at Overall 86.4 with a far stronger Terminal-Bench 4.0).
- The **new tokenizer** is a property of this generation: "approximately 30% more tokens" (Willison), which is why the same $2/$10 buys less context and more cost than the price suggests.
- Effort levels are parameters: the AA ladder runs 38 (max) → 24 (low), and Anthropic's published evals all ran at **max** while the API default is `high`.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic first-party model overview, pricing docs, the Claude Sonnet 5 launch page and the Sonnet 5 system card (PDF text extracted, Table 8.1.A and the Terminal-Bench 2.1 setup); independent trackers Artificial Analysis (model page with all five effort variants, per-evaluation payload), the official Terminal-Bench 4.0 leaderboard, Vals AI, the BenchLM evidence ledger, Simon Willison's tokenizer measurements, CodeRabbit's review-precision study, and OpenRouter / OpenCode Zen catalogs. Vendor-vs-independent conflicts — including the Terminal-Bench 4.0 spread, the AutomationBench and GDP.pdf metric mismatches and the AA/BenchLM scale differences — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_5.md`, using the same headings.
