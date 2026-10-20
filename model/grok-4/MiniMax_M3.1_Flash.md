# Grok 4 — findings by MiniMax M3.1 Flash

- Source: xAI / SpaceXAI (`grok-4-0709`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI 的 2025 年 7 月旗舰 —— 以 **ARC-AGI-2 15.9%（当时闭源模型 SOTA，"with 15.9%"）** 与 **Grok 4 Heavy 的 USAMO'25 61.9% / HLE 50.7%（"first model to score 50% on Humanity's Last Exam"）** 登场，并在 Vending-Bench 商务模拟中以 **$4,694.15 净身家、售出 4,569 件** 碾压 Opus 4（$2,077.41 / 1,412）与人类（$844.05 / 344）。它同时是 **RL 算力效率**叙事的起点（"increased … by 6x"）。现已 deprecated，被 Grok 4.20 0309 取代。
- **Provider / access:** xAI API `grok-4-0709`（文档页现 404）；OpenRouter 已不再列出 `x-ai/grok-4`；xAI 侧还提供 `grok-4-fast-reasoning` / `grok-4-fast-non-reasoning`（另计）。
- **Release / knowledge:** released **2025-07-09**（xAI 博客、xAI 博客日期）/ **July 10, 2025**（AA "Grok 4 was released on July 10, 2025"）。Knowledge cutoff: **未公布**。
- **IDs:** `grok-4-0709`（x.ai API）。
- **Context window:** "a 256,000 context window"（xAI）；AA spec 与 Vals 亦记 256K（AA FAQ 写 "260k tokens"）；max output 128K（Vals；xAI 未公布）。
- **Modalities:** 文本+图像 → 文本（应用内另有带摄像头视觉的 voice mode）。
- **Reasoning:** **always-on reasoning**；xAI 文档只为 grok-4.5/4.6/4.7 与 4.20-multi-agent 列出 `reasoning_effort` —— **grok-4 本身没有可核实的 effort 档位**。
- **Tools:** 原生 tool use、code interpreter、web search、X search、live search API。
- **Pricing (as of 2026-10-19, per 1M tokens):** **$3.00 in / $15.00 out**（AA 与 Vals 一致）。**未找到缓存价、batch 价或 fast 加价**；xAI 的 per-model RPS/TPM 表**没有 grok-4-0709 行**（仅按消费额分 Tier 0–4）。
- **Architecture:** proprietary，闭源；参数量未披露。
- **Retired alias:** `grok-code-fast-1` / `grok-code-fast` / `grok-code-fast-1-0825` 现由 xAI 文档指向 **`grok-build-0.1`**（256K，$1/$2，cache read $0.20）—— 与 Grok 4 Fast 是**不同模型**（另计）。

### Raw benchmarks found

> xAI launch blog 数字标为 "vendor"；Vals AI、Artificial Analysis、LMArena 为独立来源。

Agent / tool use (xAI):

- ARC-AGI-2 **15.9%**（"setting a new state-of-the-art for closed models on ARC-AGI V2 with 15.9%"；Opus ~8.6%，+8pp）
- HLE **50.7%**（Grok 4 Heavy，text-only 子集，"first model to score 50% on Humanity's Last Exam"）；USAMO'25 **61.9%**（Heavy）
- Vending-Bench：**$4,694.15** 净身家、**4,569** 件售出（5 次平均）vs Opus 4 $2,077.41 / 1,412，人类 $844.05 / 344
- Search 侧：BrowseComp 43.0%、X Bench Deepsearch(zh) 66.0%、X Browse 53.2%、SimpleQA 94.0%、Reka Research Eval 58.0%、BrowseComp(zh) 45.0%（经 BenchLM 引用）
- Vals: Terminal-Bench 2.0 **28.09% ± 4.79** (#49/67)；**SWE-bench 57.80% ± 2.21**；GPQA Diamond 88.13% ± 1.63；LiveCodeBench 83.25%；MMLU-Pro 85.30%；MMMU-Pro 76.27%；LegalBench 83.19%（"#57 of 151"）；Vals Index **62.74%**（3m40s）；Finance Agent v1.1 **53.51%** (#19, $1.07/test, 5m21s)；TaxEval v2 65.09%；MedCode 38.08%；MedScribe 78.15%；MortgageTax 44.48%
- 2025-07-17 更新（Vals）：CorpFin SOTA 第一、Finance Agent 进前十、LegalBench 第二、SWE-bench Verified 第二（较前代 +15%）；07-11：Case Law 80.6%、Contract Law 66.0%、MedQA 92.5%（前十）、MGSM 90.9%、AIME/Math 500/GPQA Diamond SOTA
- Artificial Analysis：Intelligence Index **22\***（估计，#145/217），**82.6 t/s** (#99/186)，TTFT 9.53s，$3/$15，256K ctx，"This model is deprecated"（继任者 Grok 4.20 0309）；per-eval：τ² 74.85%、TB-Hard 37.88%、LCR 68.0%、IFBench 53.67%、HLE 26.69%、GPQA 87.68%、CritPt **2.0%**、MMMU-Pro 68.84%、LiveCodeBench 81.90%、AIME25 92.67%、Omniscience 2.1 / acc 40.48% / halluc 64.49%
- **LMArena (2026-10-15, text/overall):** `grok-4-0709` **rank 138**，rating **1411.3**，39,693 votes
- 无官方 tbench.ai / ARC Prize / Epoch AI / swebench.com 行

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 62/100.** Terminal-Bench 2.0 **28.09%** (Vals), SWE-bench 57.80%, BrowseComp 43.0%, X Bench Deepsearch 66.0%, Finance Agent v1.1 53.51% (#19), Vals Index 62.74%, Vending-Bench 经济模拟（$4,694 / 4,569 件，vendor）。Capped by Terminal-Bench 2.0 at 28%, by BrowseComp in the low 40s, and by the absence of any Toolathlon, MCP-Atlas, Claw-Eval, τ-bench or APEX row.
- **Reasoning: 78/100.** HLE **50.7%** (Grok 4 Heavy, vendor) and the ARC-AGI-2 **15.9%** closed-model SOTA claim, AIME25 92.67% (AA), GPQA 87.68–88.13%, MMMLU 89.6% (vendor), MMLU-Pro 85.30%, plus an LMArena 1411.3 (#138). Capped by the AA Intelligence Index of **22\*** (an estimate), by CritPt **2.0%** and HLE 26.69% on AA's own reading, by the fact that the HLE 50.7% belongs to the **Heavy** configuration rather than the base model, and by the 64.49% hallucination rate.
- **Context window: 88/100.** 256,000 tokens with a 128,000 max output (Vals) — the rubric's 200K–500K band (65–84), raised by the 256K figure itself and the published BrowseComp-LC retention at 128k. One point below because **no MRCR / RULER / GraphWalks row exists** for this model and because the 256K window is small by 2026 standards.
- **Multimodal: 70/100.** Text + image in, text out, with MMMU-Pro 68.84% (AA) / 76.27% (Vals) and the app's camera-vision voice mode. The rubric's "+image in = 60–70" band is met at its top; no video or audio *input* is documented (Voice is a separate product).
- **Coding: 70/100.** SWE-bench **57.80%** (Vals, and the "SWE-bench Verified #2" claim of July 2025), LiveCodeBench 83.25%, Terminal-Bench 2.0 28.09%. Capped by the absence of any SWE-bench Pro, DeepSWE, Terminal-Bench 4.0, FrontierCode or FrontierSWE row, and by the 28% terminal-agent score.
- **Cost efficiency: 70/100.** The evaluated route is xAI's API / aggregators at **$3.00 in / $15.00 out** per 1M — the rubric's "~$3/$15 = ~60" anchor on output and inside the "~$1.25/$4.25 ≈ 88" band on input, so roughly 70. The deductions are that **no cached-input, batch or fast price is published** (no cache discount to bank against the $15 output rate) and that **no rate-limit row exists** for this model.
- **Overall Score: 73.6/100.** (62 + 78 + 88 + 70 + 70) / 5 = 73.6 — best-fit: 2025 年 7 月的**"会推理也会做买卖"**旗舰（ARC-AGI-2 闭源 SOTA 15.9%、HLE 50.7% Heavy、Vending-Bench 碾压全场、RL 算力效率 6×）—— 但它的 agent 与编程成绩（TB 2.0 28%、SWE-bench 57.8%）在 2026 年已被同门 4.3/4.5/4.6/4.7 全面碾压，且 $3/$15 无缓存折扣。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Release date — July 9, 2025 (xAI blog, Vals) vs "July 10, 2025" (Artificial Analysis).**
2. **Context — 256K (xAI, AA spec, Vals) vs "260k tokens" (AA FAQ).**
3. **Max output — 128K (Vals) vs nothing published by xAI.**
4. **HLE 50.7% belongs to Grok 4 Heavy**, not to the base model this folder tracks; AA's base-model reading is 26.69%. Both are listed, and the base-model number is used for scoring.
5. **ARC-AGI-2 15.9% is xAI self-reported**; ARC Prize's own table is client-rendered and no Grok 4 row was retrievable, so the number stands as vendor-only.
6. **No effort levels are published for `grok-4`** — xAI documents `reasoning_effort` only for the later 4.x releases — so an "unlabelled Grok 4 number" is inherently ambiguous.
7. **AA's index of 22\* is an estimate**, and its per-evaluation values for this model are the only measured numbers in the entry.
8. **The retired-alias question is explicit:** xAI's docs list `grok-code-fast-1`, `grok-code-fast` and `grok-code-fast-1-0825` as **aliases of `grok-build-0.1`**, a *different* model (256K, $1/$2) that has no published benchmark scores at all — so those figures must never be attributed to Grok 4 or to Grok 4 Fast.
9. **No verified launch-era LMArena rank** (arena.ai 403; available snapshots end 2025-08-29); the current published position is #138 (1411.3).

### Notes on identity

- `grok-4` is a distinct model from `grok-4-fast` (a separate 2025-09 release, tracked separately), `grok-4.1-fast`, `grok-4.20` / `grok-4.20-0309`, `grok-4.3`, `grok-4.5`, `grok-4.6`, `grok-4.7` and `grok-build-0.1`.
- Its live docs page is gone (404), so the surviving specification is the launch blog, the archived xAI docs, Vals AI and AA.
- The `grok-4-0709` id carries a date, unlike the 4.5/4.6/4.7 ids.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — xAI's Grok 4 launch blog and model documentation, Artificial Analysis (model page with its per-evaluation payload and deprecation notice), Vals AI (model page and the July 2025 update notes), the LMArena leaderboard dataset (published 2026-10-15), and negative verification at ARC Prize, Epoch AI, swebench.com, tbench.ai and the live arena leaderboard. The Heavy-vs-base HLE distinction, the release-date conflict and the retired-alias mapping are called out explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.
