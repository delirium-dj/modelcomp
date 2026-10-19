# Claude Opus 4.8 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's May-2026 frontier model, now **legacy** and superseded by Claude Opus 5 ("Anthropic has launched a newer release, Claude Opus 5"). It was the model's own safety fallback target for later releases (Claude Fable 5 routes cyber/bio/chem requests to Opus 4.8) and it remains the only model in this dataset to publish a **full long-context GraphWalks ladder**. Distinct model id from `claude-opus-4.7` and `claude-opus-5`.
- **Provider / access:** Claude API `claude-opus-4-8`; AWS Bedrock `anthropic.claude-opus-4-8`; Google Vertex, Microsoft Foundry and Claude Platform on AWS `claude-opus-4-8`; OpenRouter `anthropic/claude-opus-4.8` (canonical `anthropic/claude-4.8-opus-20260528`, + `:batch`); OpenCode Zen `opencode/claude-opus-4-8` (`https://opencode.ai/inference/anthropic/v1/messages`).
- **Release / knowledge:** released **2026-05-28**; status "Active (legacy)"; retirement "Not sooner than May 28, 2027". Reliable knowledge **and** training-data cutoff **Jan 2026**.
- **IDs:** `claude-opus-4-8` (Claude API), `anthropic.claude-opus-4-8` (Bedrock), `anthropic/claude-opus-4.8` (OpenRouter), `opencode/claude-opus-4-8` (Zen).
- **Context window:** **1,000,000 tokens**, **128,000 max output** (300K on the Batch API via the `output-300k-2026-03-24` beta header).
- **Modalities:** "Text and images → text" (OpenRouter: `text+image+file->text`). Adaptive thinking, **default effort `high`**; all levels `none, low, medium, high, xhigh, max` supported. Tooling: web search ($10/1,000 searches), bash tool (+325 tokens), tool-use system prompt 290 (auto/none) / 410 (any/tool).
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$5**, output **$25**; 5-minute cache write **$6.25**, 1-hour cache write **$10**, cache read **$0.50**; Batch **$2.50 / $12.50**; **Fast mode $10 / $50** ("Fast mode for Claude Opus 5 and Claude Opus 4.8 is in research preview"). OpenCode Zen lists $5.00 / $25.00 / $0.50 / $6.25. Simon Willison: "Fast mode is twice that price".
- **Architecture:** proprietary, closed weights; parameter count not disclosed. 244-page Opus 4.8 system card.

### Raw benchmarks found

> Anthropic's system-card numbers are marked "vendor" (run at "adaptive thinking at max effort, default sampling settings, averaged over 5 trials"); Artificial Analysis, Vals AI, the official SWE-bench board, Cursor evals, the BenchLM ledger and press coverage are independent.

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (vendor, Terminus-2 on Harbor, 445 trials — "On Harbor's leaderboard, using the Terminus-2 harness, Opus 4.8 achieved 74.6% mean reward") / **71.9%** (Vals AI) / 84.64% (AA ledger value, not verifiable at source)
- Terminal-Bench 4.0: **23.23%** (Vals AI, #24/50) / 21.72% (AA, unverified at source); Terminal-Bench 3.0 **21.1%** (via BenchLM); Terminal-Bench-Science 0.1 **4.29%** (Vals)
- MCP-Atlas: **82.2%** (vendor) — "up from 79.1% for Opus 4.7"
- Toolathlon: **59.9%** Pass@1 (vendor) — "improving on Claude Opus 4.7's 59.3%"; 59.9% (via BenchLM)
- AutomationBench: **15.5%** at max effort (vendor, Zapier held-out) / 45.59% (AA AutomationBench-AA, unverified at source) — "Even the best frontier models currently score below 10%" (AutomationBench paper)
- BrowseComp: **84.3%** single-agent / **88.5%** multi-agent (vendor, with a 10M-token limit); DeepSearchQA **93.1%** F1; OSWorld-Verified **83.4%** ("first-attempt success rate, averaged over five runs") / OSWorld 2.0 20.6% (via BenchLM); Finance Agent v2 **53.92%**; GDPval-AA **1890 Elo** ("leads GPT-5.5 ('xhigh') by approximately 121 ELO points")
- Toolathlon-verified pass-cubed, MCP claim coverage 89.1%, IPI: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (vendor, averaged over 25 trials) / **92.42%** (Vals AI) / 92.02% (AA ledger)
- HLE: **49.8%** without tools / **57.9%** with tools (vendor)
- FrontierMath v2: Tiers 1–3 **80.000%**, Tier 4 **56.098%** (Epoch AI, via BenchLM) — behind GPT-6 Astra's 93.684% / GPT-6.1 Sol's 100.000%
- ARC-AGI-1 **92.50%**, ARC-AGI-2 **72.1%**, ARC-AGI-3 **1.5%** (via BenchLM); ARC Prize's own leaderboard is JS-rendered and shows no Opus 4.8 row
- USAMO 2026 **96.7%** (averaged over 10 attempts per problem), ArxivMath **71.82%**; INCLUDE **87.6%**, MILU **90.3%**, MMLU-Pro 89.58% (Vals), HealthBench Pro 55.8%, Harvey legal agent 9.62% all-pass / 89.01% criterion-pass
- Omniscience accuracy 48.83% / hallucination 39.25% (AA, via BenchLM); AA-LCR 77.7%; CritPt 20.86%; IFBench 62.24%

Coding:

- SWE-bench Verified: **88.6%** (vendor) / **88.60%** (Vals AI, #12/88) / 88.6% (via BenchLM)
- SWE-bench Pro **69.2%**, Multilingual **84.4%**, Multimodal **38.4%** (vendor)
- FrontierCode 1.1 Main **46.5%** (via BenchLM); FrontierSWE v2 **47.0%** (Proximal) — Anthropic claims "#1 on both mean@5 (avg rank 2.74) and best@5 (2.26)"
- ProgramBench **79–88%** ("compared to 71–84% for Claude Opus 4.7"); LiveCodeBench **87.82%** (Vals AI); CursorBench 3.2 **62.3%** / 3.1 58.4% (Cursor's own site now shows only 4.0, with no 4.8 entries); PostTrainBench 32.9%; Bug Hunt Bench: not published for 4.8
- No DeepSWE figure, no Terminal-Bench 4.0 official-board row, no Vibe Code Bench for 4.8

Long context:

- **GraphWalks (vendor, the most complete long-context disclosure in this batch):** BFS 256K **85.9%**, parents 256K **99.3%**; BFS 1M **68.1%**, parents 1M **83.3%** — "Claude Opus 4.8 scored 85.9% on the BFS 256K subset and 99.3% on the parents 256k subset"
- AA-LCR v1.1 77.7%; no MRCR figure for Opus 4.8
- 1M context, 128K max output, 300K on Batch

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 80/100.** Strong agentic profile — Terminal-Bench 2.1 74.6% (official, Terminus-2) / 71.9% (Vals), BrowseComp 84.3% single / 88.5% multi-agent, OSWorld-Verified 83.4%, MCP-Atlas 82.2%, DeepSearchQA 93.1%, Finance Agent v2 53.92%, GDPval-AA 1890 Elo, Gert Labs 72.97% and ResearchClawBench 21.1% (both best-verified in the catalog), Toolathlon 59.9%. Capped by the rubric's frontier anchors (TB2.1 ~88%+ → 74.6% at best, τ-bench not published, GDPval ~1750+ → 1890 met), by AutomationBench at 15.5% in the strict Zapier run, by Terminal-Bench 4.0 at 23.23%, and by OSWorld 2.0 at 20.6%.
- **Reasoning: 85/100.** GPQA Diamond 93.6% (vendor, 25 trials) / 92.42% (Vals), HLE 49.8%/57.9%, FrontierMath v2 80.000% / 56.098%, USAMO 2026 96.7%, ArxivMath 71.82%, INCLUDE 87.6%, MILU 90.3%, MMLU-Pro 89.58%, ARC-AGI-1 92.50%, Omniscience accuracy 48.83% with a comparatively low 39.25% hallucination rate. Held below 90 because the Artificial Analysis Intelligence Index is **42** (under the rubric's 60+ anchor), because FrontierMath Tier 4 is 56.098% and ARC-AGI-3 is 1.5%, and because Anthropic's evals ran at max effort while the API default is `high` — the published numbers are not the default configuration.
- **Context window: 96/100.** 1,000,000-token context with a 128,000 max output (300K on Batch) — the rubric's top tier (≥1M = 95–100) — and the best long-context disclosure in the dataset: GraphWalks BFS **85.9%** / parents **99.3%** at 256K. Not 100 because the rubric's extra condition is "≥98% retrieval at 512K+", and at 1M the same figures fall to 68.1% / 83.3%.
- **Multimodal: 70/100.** Image input with text output and above-average vision/agentic-vision results — ScreenSpot-Pro **87.9%**, CharXiv Reasoning **89.9%**, OfficeQA 77.6% / OfficeQA Pro 66.2%, MMMU-Pro 86.59% (Vals), OSWorld-Verified 83.4%, SWE-bench Multimodal 38.4%. The rubric's "+image in = 60–70" band is the ceiling and is met at its top: no video, audio or PDF input is documented for Claude Opus 4.8.
- **Coding: 80/100.** SWE-bench Verified 88.6% (vendor and Vals AI) with Pro 69.2% / Multilingual 84.4%, Terminal-Bench 2.1 74.6%, LiveCodeBench 87.82%, FrontierCode 1.1 Main 46.5%, FrontierSWE v2 #1 on mean@5 (2.74) and best@5 (2.26), ProgramBench 79–88%, CursorBench 3.2 62.3%, PostTrainBench 32.9%. Capped by the absence of any DeepSWE figure, Terminal-Bench 4.0 at 23.23% and Terminal-Bench-Science at 4.29%, SWE-bench Multimodal 38.4%, and the fact that on Vals' own board Claude Opus 5 leads SWE-bench Verified with **97.00%** — "no longer run this benchmark on new model releases".
- **Cost efficiency: 45/100.** The evaluated route — OpenCode Zen `opencode/claude-opus-4-8` — is billed at **$5.00 in / $25.00 out** per 1M, cache read $0.50, cache write $6.25, matching Anthropic's list price. The rubric's anchors run "~$3/$15 = ~60" and "~$10/$50 = ~30", placing $5/$25 in between; Artificial Analysis prices it #104 of 114 for cost ($4.08 per Index task). Batch ($2.50/$12.50) and Fast mode ($10/$50) are the only levers, and the 0.10× cache-read rate is what keeps long agentic runs affordable.
- **Overall Score: 82.2/100.** (80 + 85 + 96 + 70 + 80) / 5 = 82.2 — best-fit: a well-rounded frontier model with the best long-context disclosure in the set (GraphWalks 99.3% at 256K) and near-best-verified agentic composites, but priced like Opus 5 and already superseded by it; at $5/$25 the rational 2026 choice is Claude Sonnet 5.5 at $2/$10, which also posts a higher Terminal-Bench 4.0.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 2.1 — 74.6% (Anthropic, Terminus-2) vs 71.9% (Vals) vs 84.64% (AA ledger).** The AA figure could not be verified at source (AA's per-eval tables are JS-rendered) and is not used. Harness and decoration differences explain the first two.
2. **Terminal-Bench 4.0 — 23.23% (Vals) vs 21.72% (AA, unverified);** no official-board row exists for 4.8. Both are weak; Vals is used.
3. **AutomationBench — 15.5% (Anthropic, Zapier held-out) vs 45.59% (AA, unverified).** Different metrics (task pass rate vs objective share); the strict figure is used.
4. **GDPval-AA — 1890 Elo (Anthropic table) vs 1593 (BenchLM, system-card-sourced) vs 1453.47 (AA, unverified).** A ~440-Elo spread; the vendor figure is used, with the others listed.
5. **SWEE-bench Verified 88.6%** vs Claude Opus 5's 97.00% on Vals' Mini-SWE-agent leaderboard — Opus 4.8 is a full generation behind on the benchmark that now separates these models.
6. **HLE 57.9% (Anthropic, with tools) vs 48.66% (AA).** Tool condition explains most of it; both are listed.
7. **GPQA 93.6% (Anthropic, 25 trials) vs 92.42% (Vals) vs 92.02% (AA).** Harness noise.
8. **Effort labelling.** Anthropic's API default is `high`, but every published number is at **max** effort, and the AA entry is "(Max)" — an unlabelled number for this model is therefore not comparable to an API-default run. Vals explicitly used "Compute Effort: max".
9. **Provider count.** AA's model-page FAQ says "available through 7 providers" while its providers page lists 3 (Amazon 65.9 t/s, Google 63.1, Anthropic 59.6) — a tracker inconsistency, noted but not scored.
10. **Community friction.** HN: "Ask HN: Is Claude Opus 4.8 broken?" and "Elevated error rate on Claude Opus 4.8" (a status.claude.com incident), plus a blog post titled "Claude Opus 4.8 Costs 57.1x More, Loses All 5 Benchmarks - Beaten by the Harness". These are operational anecdotes; they reinforce the cost and caution caveats but are not scored.
11. **Honesty claim (vendor, unscored):** "Claude Opus 4.8 is around four times less likely than its predecessor to allow flaws in code it has written to pass unremarked" — noted as a qualitative vendor claim.

### Notes on identity

- `claude-opus-4-8` is a distinct model from `claude-opus-4-7` (April 2026) and `claude-opus-5` (July 2026) — separate ids, separate pricing tiers, separate benchmarks, and each publishes a comparison row against the previous generation.
- Claude Fable 5 (June 2026) and the current Fable 5.1 route their cyber/bio/chem safeguard fallbacks to **Opus 4.8**, so this model is still a live component of the 2026 Claude stack even though it is legacy.
- Effort levels are parameters on one model, and Anthropic's own evaluation config (max) differs from the API default (high) — a systematic caution when reading any Opus 4.8 number without an effort label.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic first-party model overview, pricing and effort docs, the 244-page Opus 4.8 system card (PDF text extracted), the Fable 5 launch page (for the fallback relationship), OpenRouter and OpenCode Zen catalogs, Simon Willison and Hacker News coverage; independent trackers Vals AI (own runs, SWE-bench leaderboard), the official Terminal-Bench board (no 4.8 row), the CursorBench, FrontierSWE, ARC Prize, Epoch AI, Gert Labs and ResearchClawBench public data via the BenchLM ledger. Vendor-vs-independent conflicts — including the unverifiable AA per-eval rows and the AutomationBench metric mismatch — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.8.md`, using the same headings.
