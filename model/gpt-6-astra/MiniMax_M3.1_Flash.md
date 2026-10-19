# GPT-6 Astra — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship GPT-6 reasoning model, published 2026-09-03 — a "frontier reasoning" model that saturates the hardest math and agentic-adapter evals (FrontierMath Tier 4 ~98%, ARC-AGI-3 99.9% on the provider adapter) while remaining the most expensive flagship in this batch at $10/$50 per 1M. It is a distinct model, not a tier of `gpt-6-sol` / `gpt-6-luna` / `gpt-6.1-sol`.
- **Provider / access:** OpenAI API `gpt-6-astra` (Chat Completions, Responses, Batch; no Realtime, no Assistants, no fine-tuning), Build-tier rate limits 5,000 RPM / 1,000,000 TPM; OpenRouter `openai/gpt-6-astra` (+ `:batch`, plus a `gpt-6-astra-pro` route that has no OpenAI docs page — 404 — and is therefore unverified from OpenAI); OpenCode Zen `opencode/gpt-6-astra` (`https://opencode.ai/inference/openai/v1/responses`, Responses API). EU in-region routing is "not currently available" on OpenRouter.
- **Release / knowledge:** system card "Published September 3, 2026"; AA: "GPT-6 Astra (Max) was released on September 3, 2026"; ARC Prize lists "OpenAI · Sep 2, 2026" — a one-day discrepancy between sources. Knowledge cutoff **April 30, 2026**.
- **IDs:** `gpt-6-astra` (OpenAI API), `openai/gpt-6-astra` / `openai/gpt-6-astra-pro` (+ `:batch`) (OpenRouter), `opencode/gpt-6-astra` (OpenCode Zen). Reasoning effort supports `low`, `medium`, `high`, `xhigh` and `max`; OpenAI notes "Evaluation scores are the maximum at any effort".
- **Context window:** **1,050,000 tokens**, with **922,000 max input tokens** and **128,000 max output tokens**. OpenRouter agrees: context_length 1,050,000, `max_completion_tokens` 128,000.
- **Modalities:** text and image in, text out. Tools: web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp and tool_search.
- **Pricing (as of 2026-10-19, per 1M tokens):** Standard ≤272K input — **$10 in / $1 cached in / $12.50 cache write / $50 out**; >272K input — **$20 / $2 / $25 / $75** ("Prompts with more than 272K input tokens are priced at 2x input and cache rates and 1.5x output for the full request"); Batch and Flex 50% of Standard ($5 / $25); Fast mode $20 / $100; Ultrafast $60 / $300. OpenCode Zen lists the same two tiers: "GPT 6 Astra (≤ 272K tokens) $10.00 / $50.00 / $1.00 / $12.50" and "GPT 6 Astra (> 272K tokens) $20.00 / $75.00 / $2.00 / $25.00".
- **Architecture:** proprietary, closed weights; parameter count not disclosed. A system card exists (`deploymentsafety.openai.com/gpt-6-astra`).

### Raw benchmarks found

> OpenAI's launch-table numbers are marked "vendor"; Artificial Analysis (AA), Vals AI, ARC Prize and Epoch AI are independent. Note that OpenAI quotes "the maximum at any effort", while AA tracks the "max" variant and Vals ran at max effort as well.

Agent / tool use:

- Terminal-Bench 4.0: **57.9%** (vendor) / **59.1%** (AA) / **59.60% ± 4.40** (Vals AI, 3/50) / 58.18% (Codex, max reasoning) / 59% (AA article, standalone)
- Terminal-Bench 2.1: **88.39%** (AA) / **87.3%** (Vals AI)
- Tau3-Banking: **41.44%** (AA) / 41.44% (AA mirror); Tau2-Bench: **not measured** (AA `tau2: null`)
- GDPval-AA: **1572.84 Elo** (AA) / 1573 (BenchLM) / 53.6% normalized
- AutomationBench: **41.4%** (vendor) / **68.49%** (AA AutomationBench-AA) / 68.5% (AA, per BenchLM)
- Agents' Last Exam: **59.3%** (vendor) — best-verified in the catalog
- OSWorld 2.0 (offline, partial): **72.6%** (vendor) — best-verified in the catalog
- ScreenSpot-Pro: **92.7%** (vendor) vs 76.9% for GPT-5.6 Sol
- BrowseComp: **91.5%** (vendor) vs 90.4% for GPT-5.6 Sol
- SRE-Bench: **88.0%** (vendor) / **56.87%** (Vals AI, 1/35) — large gap between vendor and independent harness
- CUA-bench: **19.17%** (Vals AI, 1/9); Gray Swan IPI (15 attempts): **8.5%**; AA-Briefcase Elo **1569**; GDP.pdf all-pass **31.0%**; AA ITBench **48.59%**; AA-Analyst **51.25%**; AA-Omniscience index **43.4**, accuracy **62.6%**, hallucination rate **51.34%**
- Claw-Eval / ClawProBench: **no verified public score found**; Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **96.06%** (AA) / **96.0%** (vendor) / 96.1% (AA mirror)
- HLE: **54.68%** (AA) / **57.2% with tools** (vendor) / 54.7% (AA mirror)
- LCR / MLCR: AA-LCR v1.1 **80.67%** (AA); MLCR-AA **35.0%** (AA)
- CritPt: **31.71%** (AA)
- Artificial Analysis Intelligence Index: **53** (AA, max, rank **#7 / 217**) / 52.7 (BenchLM, citing AA) / **61.2** on OpenAI's own quoting of AA index v4.1.1 — an index-version difference, not a measurement change
- ARC-AGI-1 **97.50%** (max) / 98.50% (xhigh) (ARC Prize; vendor 98.5%); ARC-AGI-2 **95.0%** (max); ARC-AGI-3 **62.7%** on the standard harness at max ("was 62.7% at max reasoning for $26,098") vs **99.9%** on the provider adapter at high ("99.9% at high reasoning for $18,817")
- FrontierMath v2: Tier 4 **97.600%** (vendor table) / 78.049% for Gemini 4 Argon; Tiers 1–3 **93.684%** (Epoch AI, best-verified) vs 85.965% for Gemini 4 Argon; STEMBench **2.81** (best-verified)
- HealthBench **58.3** (raw 56.9), length-adjusted HealthBench Professional **64.7** (unadjusted 68.2), HealthBench Hard **36.6** (34.2), Consensus **95.5** (OpenAI system card, revised 2026-09-22)

Coding:

- DeepSWE v1.1: **74.1%** (vendor) / 68% (AA article) — a 6-point gap
- FrontierSWE v2: **65.5%** (BenchLM) — best-verified in the catalog
- Terminal-Bench 4.0: 57.9–59.6% (see above); Terminal-Bench-Science 0.1: **64.6%** (vendor) / **62.86% ± 5.82** (Vals AI) / 68.1% (Codex max)
- SciCode: **56.48%** (AA); FrontierCode 1.1 **46.98%** (AA) / Main **53.3%**, Ext **64.5%** (vendor, best-verified on Ext)
- SWE-bench Multimodal: **43.33%** (Vals AI, 11/20); SWE-bench Verified and LiveCodeBench: **no verified public score found**
- AA Coding Index **76.9%** (BenchLM) / 67.0 (OpenAI, "AA Coding Agent Index v1.4") / 62 (AA article, in Codex) — three different index versions
- ExploitGym 42.4%; GeneBench-Pro 37.1% (vendor) / 37.8% (BenchLM)

Long context:

- MRCR v2 256K–512K: **100.0%** (vendor) — best-verified in the catalog
- MRCR v2 512K–1M: **96.3%** (vendor) — best-verified in the catalog
- AA-LCR v1.1 **80.67%** (AA); no RULER / GraphWalks result published for Astra
- 1,050,000-token context, 922,000 max input, 128,000 max output

Performance profile (AA, max): output **66.5 t/s** (#120/185 — slowest of the flagships here), TTFT **265.10s**, cost per Intelligence Index task **$3.26** (#98/114), 60M output tokens (#45/116 — the most concise of this batch), ~27k output tokens per Index task at max effort, blended 7:2:1 price $7.70/M, cache-hit discount 90%. AA: hallucination rate "from 92% to 51% at max effort".

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 86/100.** Terminal-Bench 2.1 88.39% (AA) / 87.3% (Vals) clears the rubric's ~88% anchor, GDPval-AA 1573 Elo, τ³-Banking 41.44%, OSWorld 2.0 72.6% (best-verified), Agents' Last Exam 59.3% (best-verified), ScreenSpot-Pro 92.7%, BrowseComp 91.5%, SRE-Bench 88.0% (vendor), Terminal-Bench 4.0 57.9–59.6%. Capped below 90 because the rubric's frontier anchors need τ3 ≈ 50%+ and GDPval ≈ 1750+ (measured 41.44 and 1573), because Terminal-Bench 4.0 — the current agentic-terminal benchmark — sits near 58–60% rather than 85%+, and because AutomationBench drops to 41.4% in OpenAI's own run, CUA-bench is 19.17% and the IPI attack-success rate is 8.5% (the weakest in this batch).
- **Reasoning: 91/100.** GPQA Diamond 96.06%, HLE 54.68% (AA) / 57.2% with tools, AA-LCR 80.67%, CritPt 31.71%, FrontierMath v2 93.684% (T1–3) and 97.600% (T4) on the independent Epoch AI board, ARC-AGI-1 97.5–98.5%, ARC-AGI-2 95.0%, STEMBench 2.81, HealthBench Pro 64.7% length-adjusted. Held below 93 because the current Artificial Analysis Intelligence Index is **53** (the rubric's frontier anchor is 60+; OpenAI's 61.2 is the older v4.1.1 index) and ARC-AGI-3 is 62.7% on the standard harness — the 99.9% figure comes from the provider-adapter harness, a different measurement path.
- **Context window: 98/100.** 1,050,000-token context (922,000 max input) with a 128,000 max output — the rubric's top tier (≥1M = 95–100) and above the 64K output line. MRCR v2 is **100.0% at 256K–512K** and **96.3% at 512K–1M**, the best-verified long-context result in the catalog. One point short of 100 because the rubric's extra condition is "≥98% retrieval at 512K+", and the 512K–1M figure is 96.3%.
- **Multimodal: 72/100.** Image input with text output and a strong computer-use/image signal (ScreenSpot-Pro 92.7%, MMMU-Pro 86.88% on AA, SWE-bench Multimodal 43.33% on Vals). The rubric's "+image in = 60–70" band is the ceiling and the vision evidence justifies the top of it, but **no video, audio or PDF input** is documented for `gpt-6-astra`, and there is no non-text output, so the 90–100 band does not apply.
- **Coding: 91/100.** DeepSWE 74.1% (rubric anchor 74%+), Terminal-Bench 2.1 88.39% (AA) / 87.3% (Vals) (anchor 85%+), SciCode 56.48% (anchor 55%+), FrontierSWE v2 65.5% (best-verified), FrontierCode 1.1 Ext 64.5% (best-verified) / Main 53.3%, Terminal-Bench-Science 0.1 64.6%, ExploitGym 42.4%. Capped by no published SWE-bench Verified and no LiveCodeBench, by Terminal-Bench 4.0 at only 57.9–59.6%, and by the 68% AA DeepSWE reading versus OpenAI's 74.1%.
- **Cost efficiency: 30/100.** The evaluated route — OpenCode Zen `opencode/gpt-6-astra` — is billed at **$10.00 in / $50.00 out** per 1M for requests up to 272K input tokens (cache read $1.00, cache write $12.50) and **$20 / $75** above 272K; Artificial Analysis prices the model #98 of 114 for cost ($3.26 per Index task). The rubric's anchor for this price point is "~$10/$50 = ~30", and the >272K tier doubles it. Batch/Flex at $5/$25 and the 90% cache-read discount are the only meaningful offsets.
- **Overall Score: 87.6/100.** (86 + 91 + 98 + 72 + 91) / 5 = 87.6 — best-fit: the strongest raw reasoning and long-context model here (FrontierMath 93.7/97.6, MRCR 100%/96.3%, GPQA 96%) and a top-tier coding score, but priced at $10/$50 — use it for the hardest reasoning and long-horizon agent work, and route everything else to Gemini 3.8 Flash or Claude Opus 5.5.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 4.0 — 57.9 / 58.18 / 59.1 / 59.6 / 59.** OpenAI's table 57.9%, Codex max 58.18%, AA 59.1%, Vals 59.60% ±4.40, AA article 59%. All within CI; the AA/Vals figures are used, and OpenAI's lower number is kept in the table.
2. **AA Intelligence Index — 53 vs 52.7 vs 61.2.** AA page and BenchLM agree at ~53; OpenAI quotes 61.2 from the older AA v4.1.1 index. The current AA value is scored; the vendor-quoted number is recorded with its index version.
3. **AA Coding Agent Index — 62 (AA article, in Codex) / 67.0 (OpenAI, v1.4) / 76.9 (BenchLM, "AA Coding Index").** Three index versions of the same family; the lowest is used and all three are listed.
4. **DeepSWE — 74.1 (OpenAI) vs 68 (AA article).** A 6-point vendor-vs-tracker gap; the AA figure is used for scoring.
5. **SRE-Bench — 88.0 (OpenAI) vs 56.87 (Vals AI, 1/35).** A very large gap; both listed, the independent run preferred.
6. **AutomationBench — 41.4 (OpenAI) vs 68.49 (AA).** Another vendor-vs-tracker harness gap; both listed.
7. **ARC-AGI-3 — 99.9 (OpenAI, provider adapter) vs 62.7 (ARC Prize standard harness at max) vs 98.55 (BenchLM provider-adapter row).** The two harnesses are fundamentally different; both are reported and the standard-harness number is the one that informs the Reasoning score.
8. **ARC-AGI-1 — 98.5 (OpenAI) vs 97.5 at max / 98.5 at xhigh-high (ARC Prize) vs 97.50 (BenchLM).** Effort labelling explains it.
9. **FrontierMath Tier 4 — "saturates FrontierMath Tier 4 with a 98% score" (prose) vs 97.6% (table) vs 97.600% (BenchLM).** The table value is used.
10. **HealthBench Professional — 63.4% length-adjusted (launch blog) vs 64.7 (system card revised 2026-09-22, raw 68.2).** The revised system-card value is used.
11. **Terminal-Bench-Science 0.1 — 64.6 (OpenAI) / 62.86% ±5.82 (Vals) / 68.1 (Codex max).** Three harness readings; all listed.
12. **Release date — Sep 3 (OpenAI system card, AA, Vals, BenchLM) vs "Sep 2, 2026" (ARC Prize).** The system-card date is used; the discrepancy is noted.
13. **GeneBench Pro — 37.1% (OpenAI) vs 37.8% (BenchLM).** Minor transcription difference; the lower value is kept.
14. **Public reception.** The launch thread on Hacker News ("GPT-6 Astra", 2026-09-03, 2,279 points, 2,081 comments) is large and mixed; no anecdotal claim is scored, but it is recorded that the price and the max-effort latency (265s TTFT on AA) are the recurring complaints, consistent with the cost and speed profile scored above.

### Notes on identity

- `gpt-6-astra` is a distinct model from `gpt-6-sol`, `gpt-6-luna`, `gpt-6.1-sol` and `gpt-5.6-sol`; the Zen catalog lists "GPT 6 Astra" as its own row with its own two price tiers. The display name keeps OpenAI's hyphenated vendor style ("GPT-6 Astra").
- `openai/gpt-6-astra-pro` exists on OpenRouter but has **no OpenAI docs page (404)** — its pricing, effort and spec are unverified from OpenAI, and it is not scored here.
- Effort levels (low / medium / high / xhigh / max) are parameters on one model, not separate SKUs; OpenAI's published table reports "the maximum at any effort".

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model docs, pricing page, launch blog and system-card relays; independent trackers Artificial Analysis (model page + launch article), Vals AI, ARC Prize, Epoch AI FrontierMath, Codex and BenchLM leaderboards, and the BenchLM evidence ledger; OpenRouter and OpenCode Zen model/pricing catalogs; Hacker News commentary. Vendor-vs-independent conflicts are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Astra.md`, using the same headings.
