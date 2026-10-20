# Claude Sonnet 4.6 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-sonnet-4-6`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's February-2026 Sonnet — the release that made **1M context generally available** (it was beta at launch, GA 2026-03-13) and that users preferred over Sonnet 4.5 "roughly 70% of the time" and over Opus 4.5 59% of the time. It is now **legacy**, superseded by Sonnet 5 and then Sonnet 5.5, and it is the cheapest way to get a Claude-grade long-context model at $3/$15.
- **Provider / access:** Claude API `claude-sonnet-4-6`; AWS Bedrock `anthropic.claude-sonnet-4-6`; Google Vertex, Microsoft Foundry and Claude Platform on AWS `claude-sonnet-4-6`; OpenRouter `anthropic/claude-sonnet-4.6` (canonical `anthropic/claude-4.6-sonnet-20260217`, + `:batch`); OpenCode Zen `opencode/claude-sonnet-4-6` (`https://opencode.ai/inference/anthropic/v1/messages`).
- **Release / knowledge:** released **2026-02-17**; status "Legacy" / "Active (legacy)"; retirement "Not sooner than February 17, 2027". Reliable knowledge cutoff **Aug 2025**; training-data cutoff **Jan 2026**.
- **IDs:** `claude-sonnet-4-6` (Claude API), `anthropic.claude-sonnet-4-6` (Bedrock), `anthropic/claude-sonnet-4.6` (OpenRouter), `opencode/claude-sonnet-4-6` (Zen).
- **Context window:** **1,000,000 tokens**, **128,000 max output** (300K output on the Batch API via `output-300k-2026-03-24`).
- **Modalities:** "Text and images → text" (OpenRouter: `text+image+file->text`).
- **Reasoning controls:** "Adaptive (extended deprecated)", **default effort `high`**; levels low / medium / high / **max** — 4.6 has **no `xhigh`** (that arrived with 4.7). Anthropic's effort doc nevertheless recommends "**Medium effort** (recommended default): Best balance of speed, cost, and performance" for this model, and OpenRouter's `default_effort` is `medium`.
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$3**, output **$15**; 5-minute cache write **$3.75**, 1-hour cache write **$6**, cache read **$0.30**; Batch **$1.50 / $7.50**; `inference_geo:"us"` ×1.1. **No fast mode** (that is Opus 5.5/5/4.8 only). Launch note: "Pricing remains the same as Sonnet 4.5, starting at $3/$15 per million tokens."
- **Tools:** web search ($10/1,000 searches), web fetch (free), code execution, memory, programmatic tool calling, tool search, computer use, bash, text editor, compaction (beta).
- **Architecture:** proprietary, closed weights; parameter count not disclosed. System card published with the model (PDF, `www-cdn.anthropic.com/78073f73…`).

### Raw benchmarks found

> Anthropic's system-card numbers are marked "vendor" — "All Claude Sonnet 4.6 evaluation results are an average over 10 trials unless otherwise noted. Each run uses adaptive thinking, max effort"; Artificial Analysis, Vals AI, the official swebench.com leaderboard and the BenchLM ledger are independent.

Agent / tool use:

- Terminal-Bench 2.0: **59.1%** (vendor, "with no thinking budget, and without setting effort level (i.e. max effort)", 89 tasks ×5) / **59.55%** (Vals at launch) / Terminal-Bench 2.1 **57.30% ± 0.65** (Vals, #45/75) / 59.1% (via BenchLM)
- Terminal-Bench 4.0: **no verified public score found** (the official board's 35 rows contain no Sonnet 4.6 entry)
- MCP-Atlas: **61.3%** at max effort (vendor); τ²-bench Retail **91.7%** / Telecom **97.9%** (vendor) / 79.53% (AA non-reasoning); Claw-Eval **67.8%** (via BenchLM); CyberGym **65.2%**; BrowseComp **74.72%** single-agent (**64.69%** at 1M, **69.67%** at 3M, **82.62%** multi-agent); DeepSearchQA F1 **89.2%** single / 91.1% multi; GDPval-AA **1633**; WebArena 65.6%; Vending-Bench 2 $7,204.14; OpenRCA 27.9% (high) / 26.4% (max); Toolathlon: not published
- OSWorld-Verified **72.5%** (vendor) / 72.1% (via BenchLM); OSWorld 2.0 **8.3%** (via BenchLM); JobBench 36.9%; ApprenticeBench 2%; MazeBench 0%
- IPI / τ³-banking / APEX-Agents: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (vendor) / **85.61%** (Vals) / **79.90%** (AA non-reasoning)
- HLE: **33.2%** without tools / **49.0%** with tools (vendor) / **13.35%** (AA non-reasoning) / 49% (via BenchLM)
- ARC-AGI-1 **86.50%**, ARC-AGI-2 **58.3%** at max effort — and "with high effort, Claude Sonnet 4.6 achieves a score of 60.42%" (120k thinking, ARC Prize private set)
- AIME 2025 **95.6%** (vendor, with a contamination caveat); MMMLU **89.3%**; MMLU-Pro 87.34% (Vals) / 79.2% (via BenchLM); SuperGPQA 95% (via BenchLM)
- Artificial Analysis Intelligence Index: **25\*** (non-reasoning, high, #5/56) / **30** (Max variant, #97/217) / 24.7 (via BenchLM) / 30.1 (OpenRouter mirror) — TTFT 72.10s at max, $2.49/task, 230M output tokens
- CritPt **0.86%** (AA non-reasoning) / 0.9% (via BenchLM); IFBench **41.16%** (AA); LCR 68.33% (AA); Omniscience index **-3.55**, accuracy 38.55%, hallucination 68.51% (AA)

Coding:

- SWE-bench Verified: **79.6%** (vendor; 25-trial footnote, "80.2% with prompt tweak") / **77.40% ± 1.87** (Vals, #35/88) / 79.6% (via BenchLM); SWE-bench Multilingual **75.9%**
- LiveCodeBench **82.09%** (Vals) / 82.1% (via BenchLM); FrontierCode 1.1 Main **24.3%**; SWE-Rebench **60.7%**; Vibe Code Bench v1.1 **51.48%** (Vals); Terminal-Bench 2.0 59.1%
- ProgramBench 0.50% (Vals); no SWE-bench Pro, no DeepSWE, no Terminal-Bench 4.0, no official LiveCodeBench-board row

Long context:

- **MRCR v2 1M (8-needles): 65.1** at the 64k band (vendor); BrowseComp degrades from 74.72% (standard) to 64.69% at 1M and 69.67% at 3M — the vendor's own measurement of long-context decay
- 1M context, 128K max output (300K on Batch)

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 72/100.** A solid 2026-Q1 agentic profile — Terminal-Bench 2.0 **59.1%** / 2.1 57.30%, MCP-Atlas 61.3%, τ²-bench Retail 91.7% / Telecom 97.9%, Claw-Eval 67.8%, BrowseComp 74.72% (82.62% multi-agent), DeepSearchQA F1 89.2%, OSWorld-Verified 72.5%, GDPval-AA 1633, WebArena 65.6%, CyberGym 65.2%. Capped by the rubric's anchors (TB2.1 ~88%+ → 57.3%; τ3 ~50%+ → not published; GDPval ~1750+ → 1633), by the absence of Terminal-Bench 4.0 and any τ³-bench figure, and by JobBench 36.9%, ApprenticeBench 2% and OSWorld 2.0 at 8.3%.
- **Reasoning: 78/100.** GPQA Diamond 79.90–89.9%, AIME 2025 95.6%, ARC-AGI-1 86.50% / ARC-AGI-2 58.3% (60.42% at high effort), MMMLU 89.3%, MMLU-Pro 87.34%, HLE 33.2%/49.0% with tools, SuperGPQA 95%. Capped by the AA Intelligence Index of **25\*/30** (under the rubric's 60+ anchor), by CritPt **0.86%** — effectively zero on physics reasoning — and by IFBench 41.16%, LCR 68.33% and the low 38.55% Omniscience accuracy.
- **Context window: 93/100.** 1,000,000 tokens with a 128,000 max output (300K on Batch) — the rubric's top tier (≥1M = 95–100), with the output cap above the 64K line. One point below because the long-context behaviour is *measured* to decay: BrowseComp 74.72% standard → 64.69% at 1M → 69.67% at 3M, and MRCR v2 1M at 65.1 — so the 1M window is real but not free of decay, and no independent long-context measurement exists.
- **Multimodal: 70/100.** Image in, text out, with credible vision numbers — MMMU-Pro 74.5% without tools / 75.6% with cropping (vendor) / 70.58% (AA) / 83.58% (Vals), CharXiv 72.4% / 77.4%, WebArena 65.6%, ScreenSpot-Pro-class agentic work. The rubric's "+image in = 60–70" band is the ceiling and is met at its top; no video or audio input is documented.
- **Coding: 72/100.** SWE-bench Verified 77.40–79.6% (and 80.2% with Anthropic's prompt tweak), Multilingual 75.9%, LiveCodeBench 82.09%, Terminal-Bench 2.0 59.1%, SWE-Rebench 60.7%, Vibe Code Bench 51.48%, FrontierCode 24.3%. Capped by the absence of any DeepSWE figure, by Terminal-Bench 2.0/2.1 in the high-50s, by FrontierCode 24.3%, by ProgramBench 0.50%, and by the 2.2-point SWE-bench Verified gap between Anthropic's own run and Vals'.
- **Cost efficiency: 62/100.** The evaluated route — OpenCode Zen `opencode/claude-sonnet-4-6` — is billed at **$3.00 in / $15.00 out** per 1M with a $0.30 cached read and $3.75 cached write, matching Anthropic's list price, which the rubric's anchors place at roughly 62 (between "~$1.25/$4.25 ≈ 88" and "~$3/$15 ≈ 60"). Batch at $1.50/$7.50 and the 0.1× cache read are the only offsets; there is no fast mode.
- **Overall Score: 77.0/100.** (72 + 78 + 93 + 70 + 72) / 5 = 77.0 — best-fit: the **1M-context Claude that made long context generally available**, with solid agentic and document skills (BrowseComp 74.7%, DeepSearchQA 89.2%, MCP-Atlas 61.3%) and the best-known reliability of the era — but a Terminal-Bench 2.1 in the high-50s, a CritPt score near zero, and an $3/$15 price that Sonnet 5.5 ($2/$10) beats on both capability and cost.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **SWE-bench Verified — 79.6% (Anthropic, 25-trial footnote) vs 77.40% (Vals, mini-SWE-agent) vs 80.2% (Anthropic with a prompt tweak).** The independent run is used and the 80.2% variant is recorded.
2. **Terminal-Bench — 59.1% (TB 2.0, no thinking) vs 59.55% (Vals at launch) vs 57.30% (Vals, TB 2.1).** Different benchmark versions; both are listed.
3. **HLE — 49.0% with tools (Anthropic) vs 13.35% (AA non-reasoning).** A tool/format gap of 36 points; the vendor figure is quoted, the AA figure is the cap.
4. **MMMU-Pro — 74.5/75.6 (Anthropic) vs 70.58 (AA) vs 83.58 (Vals).** Anthropic admits changing the prompt and grading model.
5. **GPQA Diamond — 89.9% vs 85.61% (Vals) vs 79.90% (AA).** A 10-point spread; AA is the anchor.
6. **ARC-AGI-2 — 58.3% (max effort) vs 60.42% (high effort, 120k thinking).** Effort labelling, not a contradiction.
7. **AA index — 25 (non-reasoning) vs 30 (Max) vs 24.7 (BenchLM) vs 30.1 (OpenRouter).** Variant mixing plus re-baselining; the current Max figure is the one quoted.
8. **Context — 1M (Anthropic, AA, Vals, OpenRouter) vs 200K (BenchLM's spec sheet).** BenchLM's row is unsourced and wrong.
9. **Default effort — Anthropic `high` vs OpenRouter `medium`** (Anthropic's own effort doc recommends medium for this model).
10. **Lifecycle — Anthropic "Legacy" / "Active (legacy)" and its deprecations page shows it Active with "N/A" deprecated, vs Artificial Analysis "deprecated" and BenchLM listing it as a normal model.**
11. **BenchLM's "capability ~86" premise is wrong** — the page shows 55.91/100 (#65 of 956); the scores here are built from the primary and independent sources instead.

### Notes on identity

- `claude-sonnet-4-6` is a distinct model from `claude-sonnet-4.5` (the pricing predecessor), `claude-sonnet-5` and `claude-sonnet-5.5`; it is the generation that introduced `max` without `xhigh`, and the first Claude with a generally-available 1M context.
- Effort levels are parameters, and this model's own effort ladder (high default, max available) is narrower than 4.7's and 5.5's.
- There is **no** `claude-sonnet-4-6-pro` or other tier SKU, and no fast-mode SKU for 4.6.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic first-party model overview, effort and pricing docs, the Sonnet 4.6 system card (PDF text extracted) and the launch post; independent trackers Artificial Analysis (both variants), Vals AI, the official swebench.com leaderboard, the official Terminal-Bench board (no 4.6 row), the BenchLM evidence ledger, OpenRouter and OpenCode Zen catalogs, plus Hacker News coverage. Vendor-vs-independent conflicts — the SWE-bench, HLE, MMMU-Pro and GPQA spreads and the context-window discrepancy — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.6.md`, using the same headings.
