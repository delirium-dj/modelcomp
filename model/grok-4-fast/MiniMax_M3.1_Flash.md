# Grok 4 Fast — findings by MiniMax M3.1 Flash

- Source: xAI / SpaceXAI (`grok-4-fast-reasoning` / `grok-4-fast-non-reasoning`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI 于 2025-09-19 推出的 **Grok 4 快速/廉价双模式**版本："We're rolling out Grok 4 Fast as **two models**"（`grok-4-fast-reasoning` 与 `grok-4-fast-non-reasoning`），"a unified architecture where `reasoning` (long chain-of-thought) and `non-reasoning` (quick responses) are handled by the **same model weights**, steered via system prompts"。价格 **$0.20 in / $0.50 out**（<128K prompt；≥128K 翻倍到 $0.40/$1.00），缓存 $0.05。xAI 宣称"comparable performance to Grok 4 on benchmarks while using **40% fewer thinking tokens**"与"a **98% reduction in price** to achieve the same performance"。现已 deprecated，被 Grok 4.1 Fast 取代。
- **Provider / access:** xAI API `grok-4-fast-reasoning` / `grok-4-fast-non-reasoning`（**OpenRouter 上已无 `x-ai/grok-4-fast`**；models.dev 仍列 edenai、helicone、poe、abacus、jiekou、302ai、qiniu-ai）。**它是与 `grok-4` 不同的独立模型**，不是 `grok-4` 的模式开关。
- **Release / knowledge:** released **2025-09-19**（xAI 页面日期；AA "released on September 19, 2025"；Vals 同日）。Knowledge cutoff: **未公布**（模型卡未给）。
- **IDs:** `grok-4-fast-reasoning`、`grok-4-fast-non-reasoning`（xAI）。
- **Context window:** **2M**；max output 2M（Vals）。
- **Modalities:** 文本+图像 → 文本。
- **Reasoning controls:** **无数值 effort 档位**（low/high effort 是后续 grok-4 版本才引入）；仅两种模式：reasoning / non-reasoning，由系统提示切换。
- **Tools:** web/X search、code execution、function calling；以 tool-use RL 端到端训练。
- **Pricing (as of 2026-10-19, per 1M tokens):** <128K：**$0.20 in / $0.50 out / $0.05 cached**；≥128K：$0.40 / $1.00。**未公布 batch 价与 fast 加价。**
- **Architecture:** proprietary，闭源；单一权重双模式。
- **Alias note:** xAI 文档把 `grok-code-fast-1` / `grok-code-fast` / `grok-code-fast-1-0825` 列为 **`grok-build-0.1`** 的别名（256K，$1/$2，cache read $0.20）—— 与 Grok 4 Fast **不是同一模型**；有第三方把 `grok-code-fast-1` 标为 "Grok 4.1 Fast (Reasoning)"，属标错。

### Raw benchmarks found

> xAI launch 数字标为 "vendor"（pass@1；对照列为 Grok 4 / Grok 3 Mini High / GPT-5 High / GPT-5 Mini High）；Vals AI、Artificial Analysis 为独立来源。

Reasoning / knowledge (xAI launch, Grok 4 Fast / Grok 4 / Grok 3 Mini High / GPT-5 High / GPT-5 Mini High):

- GPQA-D **85.7** / 87.5 / 79.0 / 85.7 / 82.3
- AIME 2025 无工具 **92.0** / 91.7 / 83.0 / 94.6 / 91.1
- HMMT 2025 无工具 **93.3** / 90.0 / 74.0 / 93.3 / 87.8
- HLE 无工具 **20.0** / 25.4 / 11.0 / 24.8 / 16.7
- LiveCodeBench (Jan–May) **80.0** / 79.0 / 70.0 / 86.8 / 77.4
- Search：BenchComp **44.9**（Grok 4 43.0）；SimpleQA 95.0（94.0）；Reka Research Eval 66.0（58.0）；BenchComp (zh) 51.2（45.0）；X Bench Deepsearch (zh) 74.0（66.0）；X Browse 58.0（53.2）
- 效率：Grok 4 Fast "achieves comparable performance to Grok 4 on benchmarks while using **40% fewer thinking tokens** on average"；"a **98% reduction in price** to achieve the same performance"；AIME 2024/2025、HMMT 2025 在 28,000 thinking tokens 下 100%，GPQA 同级

Independent:

- **Vals AI (reasoning):** MedCode 37.38、MedScribe 81.63、MortgageTax 42.09、SAGE 29.76、TaxEval v2 75.70、**Vibe Code Bench v1.1 0.00**、GPQA-D **85.35**、LiveCodeBench **78.97**、LegalBench 80.60、MMLU-Pro 79.70、MMMU-Pro 72.78、**SWE-bench 45.40**、**Terminal-Bench 2.0 29.21**（延迟 2 分 49 秒）。**Non-reasoning:** MedCode 30.04、MedScribe 79.72、MortgageTax 25.32、SAGE 15.99、TaxEval v2 71.58、GPQA-D **62.12**、LiveCodeBench **46.09**、MMLU-Pro 70.34、MMMU-Pro 63.41（延迟 6.53 秒）
- **Artificial Analysis (Non-reasoning):** Intelligence Index **11\***（估计，#23/71），$0.20/$0.50，速度 N/A，1 provider，"This model is deprecated"（继任 Grok 4.1 Fast）；per-eval：τ² 63.74%、TB-Hard 12.12%、**LCR 24.0%**、IFBench 37.69%、**HLE 4.54%**、**GPQA 60.61%**、**CritPt 0%**、MMMU-Pro 48.09%、LiveCodeBench 40.11%、AIME25 41.33%、Omniscience **-54.43** / acc 17.70% / halluc 87.65%
- **LMArena (xAI 自述):** Search Arena `grok-4-fast-search`（menlo）**#1，1163 Elo**（较 o3-search +17）；Text Arena `grok-4-fast`（tahoe）**#8**，"performing on par with `grok-4-0709`"
- **xAI model card (2025-09-19 PDF, safety):** refusal answer rate 0.00；AgentHarm 0.08（nr 0.10）；AgentDojo ASR 0.00（nr 0.03）；MASK dishonesty 0.47（nr 0.63）；sycophancy 0.10（nr 0.13）；MakeMeSay win rate 0.12；WMDP Bio 85.2 / Chem 77.5 / Cyber 81.4；CyBench 30.0；BioLP-Bench 39.0；VCT 54.5
- 无官方 tbench.ai / ARC Prize / Epoch AI / swebench.com 行

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 58/100.** Terminal-Bench 2.0 **29.21%** (Vals), BrowseComp 44.9%, X Bench Deepsearch (zh) 74.0%, X Browse 58.0%, Search Arena **#1 (1163 Elo)**, Text Arena #8, Hermes: 未列, Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found**. The search-side strength is real and #1-ranked; the general-agent side is weak. Capped by the rubric's anchors (TB2.1 ~88%+ → 29%; τ3 ~50%+ → not published; GDPval ~1750+ → not published) and by Terminal-Bench-Hard 12.12%.
- **Reasoning: 64/100.** GPQA-D 85.35% (Vals reasoning) / **60.61%** (AA non-reasoning), AIME 2025 92.0%, HMMT 2025 93.3%, LiveCodeBench 78.97%, HLE 20.0% (xAI) / **4.54%** (AA non-reasoning), and the AA Intelligence Index of **11\***. Capped by that index, by CritPt **0%**, by the 87.65% hallucination rate at 17.70% accuracy, and by the huge reasoning-vs-non-reasoning spread (GPQA 85.35 → 62.12, MMMU-Pro 72.78 → 63.41) that makes any unlabelled Grok 4 Fast number ambiguous.
- **Context window: 90/100.** **2,000,000 tokens** with a 2M max output — by far the **largest advertised window in this dataset** (roughly double the 1M field) and squarely the rubric's top tier. One point below because **no retrieval measurement exists** (no MRCR / RULER / GraphWalks) and because a window with no published long-context evidence is a claim, not a measurement.
- **Multimodal: 62/100.** Text + image in, text out, with MMMU-Pro 48.09% (AA non-reasoning) / 72.78% (Vals reasoning) and no published vision table. The rubric's "+image in = 60–70" band is met only in its lower half, and the model has no video or audio input.
- **Coding: 58/100.** LiveCodeBench 78.97% (Vals reasoning) / 40.11% (AA non-reasoning), SWE-bench **45.40%** (Vals), Terminal-Bench 2.0 29.21%, **Vibe Code Bench 0.00%** (Vals), and no DeepSWE, SWE-bench Pro, FrontierCode or CursorBench row. This is one of the weakest coding profiles of any model in the dataset — the "98% price reduction for comparable performance" claim does not survive a coding-benchmark comparison.
- **Cost efficiency: 98/100.** The evaluated route is **$0.20 in / $0.05 cached / $0.50 out** per 1M below 128K prompts (doubling to $0.40/$1.00 above it) — below the rubric's "~$0.15/$0.20 ≈ 97" tier on the cached-input side, though the output rate keeps it from the top. Artificial Analysis lists it at **$0.20/$0.50** and its "no measured speed" reflects a model with no surviving provider on the tracker.
- **Overall Score: 66.4/100.** (58 + 64 + 90 + 62 + 58) / 5 = 66.4 — best-fit: 一个**被 xAI 以"省 98% 价格"推广的搜索型快模型**（Search Arena #1、2M 上下文、$0.20/$0.50）—— 它在**搜索/检索**上确实一流（S#1、X Bench Deepsearch 74%），但推理与编程在 2026 年已明显掉队（AIME 92%、GPQA 85% 尚可，Vibe Code Bench 0%、SWE-bench 45.4%），且无任何长上下文实测；适合当"便宜搜索器"，不适合当主力模型。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **AA's $0.20/$0.50 is the <128K tier only** — xAI doubles it to $0.40/$1.00 for longer prompts; the cost score uses the base tier and the tier is stated.
2. **AA's index of 11\* is an estimate** while Vals measured both variants; the AA per-eval values quoted are for the **non-reasoning** configuration, which is why they look so much worse than the Vals reasoning numbers (GPQA 60.61 vs 85.35).
3. **The reasoning/non-reasoning spread is the single biggest caveat** — every capability number for this model depends on which mode produced it, and xAI publishes **no numeric effort levels**.
4. **Alias mis-labelling:** a third-party catalogue labels `grok-code-fast-1` as "Grok 4.1 Fast (Reasoning)" while xAI's own docs alias it to **grok-build-0.1** (256K, $1/$2) — a third model with no published scores. Neither is Grok 4 Fast.
5. **No tbench.ai, ARC Prize, Epoch AI or swebench.com row exists** for Grok 4 Fast, so the independent evidence is Vals AI, AA's estimate and xAI's own launch table plus the two arena placements.
6. **xAI's rate limits, batch support, max-output and knowledge cutoff are unpublished** — the model is retired and its docs URL 404s, so those gaps are recorded rather than guessed.
7. **AIME/HMMT/GPQA 100% claims** in the launch post refer to reaching 100% on AIME 2024/2025 and HMMT 2025 at 28,000 thinking tokens — a vendor claim with no independent confirmation, and not comparable to the Vals readings.

### Notes on identity

- `grok-4-fast` is a **distinct model** (September 2025), not a mode of `grok-4` (July 2025) — one set of weights, two serving modes.
- It must not be confused with `grok-build-0.1` (the canonical target of the retired aliases `grok-code-fast-1` / `grok-code-fast` / `grok-code-fast-1-0825`) nor with `grok-4.1-fast` (its successor).
- Its 2M-token window is the largest advertised in this dataset, though unmeasured.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — xAI's Grok 4 Fast launch post, the 2025-09-19 model-card PDF (safety rows), Artificial Analysis (model page with its per-evaluation payload and deprecation notice), Vals AI (both the reasoning and non-reasoning variants), models.dev's provider list, xAI's model documentation (including the alias mapping for grok-build-0.1), and negative verification at tbench.ai, ARC Prize, Epoch AI and swebench.com. The reasoning/non-reasoning split and the alias confusion are stated explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4_Fast.md`, using the same headings.
