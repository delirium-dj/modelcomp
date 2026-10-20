# Grok 4.5 — findings by MiniMax M3.1 Flash

- Source: xAI / SpaceXAI (`grok-4.5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI 的 2026 年 7 月模型 —— 同价 $2/$6 的一代，但**缓存价更便宜（$0.30，比 4.6/4.7 的 $0.50 低 40%）**，并且是 Grok 家族里少见的"输出省 token"型：厂商称"resolves tasks with 15,954 output tokens on average, about 4.2× fewer than Opus 4.8"、"served at fast-model speeds of 80 TPS"。现已 **deprecated**（被 Grok 4.6 取代）。
- **Provider / access:** xAI API `grok-4.5`（别名 `grok-4.5-latest`、`grok-build-latest`）于 `https://api.x.ai/v1/responses`（Chat Completions 亦支持）；OpenRouter `x-ai/grok-4.5`（创建于 2026-07-08）。**`x-ai/grok-4.5-20260708` 与 `grok-4.5-fast` 均 404** —— 无日期快照路由、无 fast 变体。
- **Release / knowledge:** 2026-07-08（AA / OpenRouter / Vals 更新说明 / Reuters / HN）；x.ai blog 抬头与 Vals 模型页写 **Jul 16, 2026**。Knowledge cutoff: **未公布**（仅 4.7 有 May 2026）。
- **IDs:** `grok-4.5`（x.ai API）、`x-ai/grok-4.5`（OpenRouter）。
- **Context window:** **500,000**（docs `maxPromptLength: 500000`），max output 500k（Vals）。
- **Modalities:** 文本+图像 → 文本。
- **Reasoning controls:** efforts low / medium / high（**默认 high**），不可关闭。文档自相矛盾：模型页列 `low, medium, high, xhigh`，reasoning 页则说 "On models that do not support it, such as grok-4.5, requests with \"xhigh\" are treated as \"high\""。
- **Pricing (as of 2026-10-19, per 1M tokens):** <200k：**$2.00 in / $0.30 cached / $6.00 out**；≥200k：**$4.00 / $0.60 / $12.00**。Priority 层 2×；**不支持 Batch**；web search $5/1k calls。
- **Rate limits:** 150 rps、7,200 rpm、50,000,000 tpm；区域 us-east-1、us-west-2。
- **Architecture:** proprietary；参数量未披露。

### Raw benchmarks found

> xAI launch blog 表格标为 "vendor"；Artificial Analysis、Vals AI、ARC Prize、官方 tbench.ai board、Epoch AI（经 BenchLM 转发）独立。

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (xAI) / **81.65%** (AA) / **67.8%** (Vals，经 BenchLM)
- Terminal-Bench 4.0: **10.61%** (AA) / **12.42% ± 2.6**（官方 tbench.ai payload，agent "Grok Build"，effort high，n=330）/ **8.59% ± 1.34** (Vals)
- Terminal-Bench 3.0: **15.7%**（经 BenchLM 引用 frontierbench.ai，未能复核）
- τ³-banking **42.06%** (AA)；GDPval-AA **1384.26 Elo** / 44.2% normalized (AA)；AutomationBench **57.93%** (AA)；MCP-Atlas / Toolathlon / Claw-Eval: **no verified public score found**
- SWE-bench Verified **86.60%** (Vals, #4/88)；SWE Multilingual **78%**（Cursor blog，经 BenchLM）；CursorBench 3.2 **66.7%**；Vibe Code Bench 69.00%；SkillsBench **66.03%** (#2/35, Vals)；LegalBench 85.97% (Vals)；VulcanBench v3 **89.9%**（best-verified）；PostTrainBench 23.4%；Design Arena website 1281
- No published APEX-Agents, JobBench, BrowseComp, τ² or IPI figure

Reasoning / knowledge:

- GPQA Diamond: **93.13%** (AA) / **92.93%** (Vals, #5/138)
- HLE **42.68%** (AA)；AA-LCR **79.33%** (AA)；SciCode **54.98%** (AA)；CritPt **15.43%** (AA)；MMMU-Pro **80.40%** (AA) / **61.79%** (Vals)
- Artificial Analysis Intelligence Index: **38.81**（#65/217），62.8 t/s (#133/186)，TTFT 12.03s，**$0.88/task** (#46/114)，77M output tokens (#53/116) — AA 页面注 "3 out of 4 units for Intelligence"（估测）
- ARC-AGI（ARC Prize 验证，2026-07-16）：ARC-1/2/3 — High **85.7 / 52.6 / 0.3**，Medium 87.2 / 52.6 / 0.3，Low 79.2 / 33.1 / 0.3；"Raising the reasoning effort from medium to high did not result in increased performance or cost."
- FrontierMath v2 (Epoch AI): T1–3 **57.193%**，T4 **24.390%**；MMLU-Pro 89.2% (Vals)；Omniscience index 25.32 / accuracy 51.55% / hallucination 54.15% (AA)
- AIME: **no verified public score found** (AA `aime25` null)

Coding:

- DeepSWE v1.0 **62.0%** / v1.1 **53%**（xAI，mini-swe-agent）；SWE Marathon **29.0%**（xAI）；SWE-bench Pro **64.7%**（xAI）；TB 2.1 83.3%；LiveCodeBench 87.4% (Vals)；SciCode 54.98% (AA)
- FrontierCode / FrontierSWE v2 / CursorBench 4.0 / Vibe Code Bench (vendor): **no verified public score found**

Long context:

- **无 MRCR / RULER / GraphWalks 公布。** 500K 窗口。

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 76/100.** Terminal-Bench 2.1 83.3% (xAI) / 81.65% (AA) / 67.8% (Vals), Terminal-Bench 4.0 at 8.59–12.42%, VulcanBench v3 89.9%, SkillsBench 66.03% (#2/35), SWE-bench Verified 86.60%, CursorBench 3.2 66.7%, GDPval-AA 1384.26, τ³-banking 42.06%, AutomationBench 57.93%. Capped by the 15.5-point Terminal-Bench 2.1 spread (83.3 vs 67.8), by τ³-banking under 50%, and by the absence of MCP-Atlas, Toolathlon, Claw-Eval, BrowseComp and APEX-Agents rows.
- **Reasoning: 80/100.** GPQA Diamond 92.93–93.13%, FrontierMath v2 57.193% (T1–3) / 24.390% (T4), ARC-AGI-1 85.7% / ARC-AGI-2 52.6% / ARC-AGI-3 0.3%, MMLU-Pro 89.2%, HLE 42.68%, LCR 79.33%, and an AA Intelligence Index of **38.81**. Capped by FrontierMath Tier 4 at 24.39%, by ARC-AGI-2 at 52.6% and ARC-AGI-3 at 0.3%, by CritPt 15.43%, and by the absence of any AIME measurement.
- **Context window: 92/100.** 500,000 tokens (docs `maxPromptLength`) with a 500k output cap — the rubric's 500K–1M band (85–94). Not 95+ because the window is 500K rather than 1M and **no long-context retrieval measurement exists**.
- **Multimodal: 70/100.** Text + image in, text out — the rubric's "+image in = 60–70" band — with MMMU-Pro **80.40%** (AA) / 61.79% (Vals) as the only vision row, plus ScreenSpot-class agentic work. The band is met at its top on the AA figure, and the 19-point AA-vs-Vals vision spread is the reason it is not higher.
- **Coding: 79/100.** SWE-bench Pro **64.7%** (xAI), SWE-bench Verified 86.60% (Vals), DeepSWE 62.0% (v1.0) / 53% (v1.1), Terminal-Bench 2.1 83.3%, LiveCodeBench 87.4%, SciCode 54.98%, SWE Multilingual 78%. Capped by DeepSWE v1.1 at 53% (under the 74% anchor), by Terminal-Bench 4.0 at ~10–12%, by SciCode under 55%, and by the absence of any FrontierCode, FrontierSWE v2 or CursorBench 4.0 row.
- **Cost efficiency: 84/100.** The evaluated route is xAI's API / OpenRouter at **$2.00 in / $6.00 out** per 1M with a **$0.30 cached read** (85% discount) — one notch above the rubric's "~$1.25/$4.25 ≈ 88" on the blended rate, and materially better than Grok 4.6/4.7, which raised the cache price to $0.50. Artificial Analysis measures **$0.88 per Index task** (#46/114) and the model is concise (77M output tokens, #53/116), the vendor's "15,954 output tokens on average" claim. Deductions: **no Batch discount** and no long-context tier.
- **Overall Score: 79.4/100.** (76 + 80 + 92 + 70 + 79) / 5 = 79.4 — best-fit: the **efficient mid-point of the Grok line** — 500K context, 92.9% GPQA, SWE-bench Verified 86.6%, a 62.8 t/s decode and 77M output tokens, all at $2/$6 with the cheapest cache price in the family — but Terminal-Bench 4.0 at ~10% and a Terminal-Bench 2.1 that swings 15 points across harnesses mark it as a generation behind 4.6/4.7 on agentic work.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Release date — 2026-07-08 (AA, OpenRouter, Vals note, HN, Reuters) vs Jul 16, 2026 (x.ai blog header, Vals model page, ARC Prize).** Both dates are recorded; the earlier machine-readable one is used.
2. **Terminal-Bench 4.0 — 10.61% (AA) vs 12.42% ± 2.6 (official tbench.ai) vs 8.59% ± 1.34 (Vals).** Harness-dependent; AA is the anchor.
3. **Terminal-Bench 2.1 — 83.3% (xAI) vs 67.8% (Vals, via BenchLM).** A 15.5-point spread; the vendor figure is quoted, AA used for the score.
4. **MMMU-Pro — 80.40% (AA) vs 61.79% (Vals).** The 19-point spread keeps the multimodal score in the lower half of the image band.
5. **xhigh effort.** The model page lists `low, medium, high, xhigh` while xAI's reasoning page says requests with "xhigh" are "treated as \"high\"" on models that do not support it — the doc contradiction is recorded.
6. **Vendor DeepSWE is two numbers** (v1.0 62.0% and v1.1 53%) — the newer benchmark version is much lower, and the report quotes both.
7. **AA's index for Grok 4.5 is an estimate** ("3 out of 4 units for Intelligence") — the Intelligence Index and the speed index are measured, but the composite is modelled.
8. **No independent Terminal-Bench 3.0 read** (the tbench `/3.0` URL serves the 4.0 payload), so 15.7% is BenchLM-attributed and is not used for scoring.
9. **No ARC-AGI row exists for Grok 4.3** (`arcprize.org/results/xai-grok-4-3` → 404) and no AIME figure for either model — a shared evidence gap in the family.

### Notes on identity

- `grok-4.5` is a distinct model from `grok-4.6` (Aug 2026, index 44), `grok-4.7` (Sep 2026, index 46), `grok-4.3` (Apr 2026, 1M context, batch-eligible), `grok-4.20`, `grok-4.1-fast` and `grok-build-0.1`.
- The `grok-4.5-latest` and `grok-build-latest` aliases are **alias names for the same weights**, not separate models; there is no `grok-4.5-fast` route in xAI's docs or on OpenRouter.
- 4.5 is the only Grok in the family with a **$0.30 cache price** (4.6 and 4.7 raised it to $0.50) — a real cost advantage at the same $2/$6 sticker price, and the main reason its cost score beats its successors'.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — xAI's model, pricing, rate-limit and reasoning documentation (including the embedded catalogue JSON), the Grok 4.5 launch blog, Artificial Analysis (model page with its per-evaluation payload), the official Terminal-Bench 4.0 leaderboard payload, Vals AI, ARC Prize, Epoch AI via the BenchLM ledger, OpenRouter's API, and Hacker News / Reuters coverage. Vendor-vs-independent conflicts — the Terminal-Bench spreads, the MMMU-Pro gap and the two release dates — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.5.md`, using the same headings.
