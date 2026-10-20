# GPT-5.1 — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI 的 2025 年 11 月模型 —— "builds on GPT-5's coding capabilities with a more steerable coding personality, less overthinking, improved code quality"，SWE-bench Verified 从 72.8% 升到 **76.3%**、GPQA 85.7%→88.1%、MMMU 84.2%→85.4%，同时 "varies its thinking time more dynamically than GPT-5"。它是**第一个把 24 小时缓存保留（`prompt_cache_retention='24h'`）且"cache writes 不额外收费"**写进定价说明的模型。现已 **deprecated**（被 GPT-5.2 取代）。
- **Provider / access:** OpenAI API `gpt-5.1`（快照 `gpt-5.1-2025-11-13`）—— Chat Completions / Responses / Batch；同族变体 `gpt-5.1-chat-latest`、`gpt-5.1-codex`、`gpt-5.1-codex-mini`、`gpt-5.1-codex-max`；OpenRouter `openai/gpt-5.1`（创建于 2025-11-12，400K 上下文，$1.25/$10，batch $0.625/$5）。
- **Release / knowledge:** ChatGPT 发布 **2025-11-12**，API 发布 **2025-11-13**（AA "released on November 13, 2025"）。Knowledge cutoff **2024-09-30**。
- **IDs:** `gpt-5.1`（OpenAI API）、`openai/gpt-5.1`（OpenRouter）、`opencode/gpt-5.1`（Zen）。
- **Context window:** **400,000**；max output **128,000**（文档未单列 max input）。
- **Modalities:** 文本+图像 → 文本。
- **Reasoning controls:** "Reasoning.effort supports: none (default), low, medium, and high." —— **没有 `minimal`**，采用自适应推理；新增 `apply_patch` 工具，开发者博客另述 `shell` 工具。
- **Pricing (as of 2026-10-19, per 1M tokens):** **$1.25 in / $0.125 cached / $10.00 out**，Batch 50%（$0.625 / $5.00）；扩展缓存 24h："cached input tokens 90% cheaper than uncached tokens, and no additional charge for cache writes or storage"。限速档位与 GPT-5 相同。
- **Architecture:** proprietary，闭源；参数量未披露。

### Raw benchmarks found

> OpenAI 开发者博客附录标为 "vendor"（`GPT-5.1 (high)`，默认无工具）；Artificial Analysis 为独立测量。

Agent / tool use:

- Terminal-Bench 2.1: **52.43%** (AA)；Terminal-Bench 4.0: 未公布；Terminal-Bench-Hard **45.45%** (AA)
- τ²-bench **81.87%** (AA) / airline 67.0% / telecom 95.6% / retail 77.9%（vendor）
- BrowseComp-LC **90.0% (128k)**（vendor，与 GPT-5 持平）
- GDPval-AA **826.29 Elo** (AA)；AutomationBench: null (AA)；Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.27%** (AA) / **88.1%** (vendor)
- HLE: **28.50%** (AA) / 39.8% 无工具 / 52.1% 带工具（vendor）
- AIME 2025 **94.0%** (AA) / 94.0%（vendor；较 GPT-5 的 94.6% 略降）
- MMMU **85.4%**（vendor）/ 75.49% MMMU-Pro (AA)；LCR **80.0%** (AA)；CritPt **4.86%** (AA)
- Artificial Analysis Intelligence Index: **25\***（**估计值**，#126/217），120.9 t/s (#51/186)，TTFT 34.30s，$1.25/$10，90% cache 折扣，400K ctx；non-reasoning 变体 index 13 / 115 t/s / TTFA 1.14s
- Omniscience index **5.4** / accuracy **37.72%** / hallucination **51.89%** (AA)；LiveCodeBench **86.77%** (AA)；AIME25 94.0% (AA)
- FrontierMath **26.7%**（vendor，v1）；MRCR：未公布

Coding:

- SWE-bench Verified **76.3%**（vendor，全 500 题）/ 72.8%（GPT-5 对照）；LiveCodeBench 86.77% (AA)；SWE-bench Pro / DeepSWE / FrontierCode / FrontierSWE: **no verified public score found**
- Vibe Code Bench: 未公布

Long context:

- BrowseComp-LC 128k 90.0%（vendor）；**无 MRCR 阶梯**

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 74/100.** τ²-bench 81.87% (AA) with airline 67.0% / telecom 95.6% / retail 77.9% (vendor), BrowseComp-LC **90.0% at 128k**, SWE-bench Verified 76.3%, and the launch claim that on SWE-bench Verified "GPT‑5.1 works even longer than GPT‑5 and reaches 76.3%". Capped by **Terminal-Bench 2.1 at 52.43%** (the rubric's agentic-terminal anchor, roughly 12 points better than GPT-5's 35.21% but far below the ~88% frontier mark), by Terminal-Bench-Hard 45.45%, and by the absence of any AutomationBench, Claw-Eval, Toolathlon or MCP-Atlas row.
- **Reasoning: 82/100.** GPQA Diamond 87.27–88.1%, AIME 2025 94.0%, MMMU 85.4%, LCR 80.0%, CharXiv 82.1% (vendor), COLLIE 99.0% (vendor), FrontierMath 26.7%. Capped by HLE at 28.50–39.8%, by CritPt 4.86%, by FrontierMath 26.7%, and by the AA index of **25\*** being an estimate rather than a measurement, with a 51.89% hallucination rate at 37.72% accuracy.
- **Context window: 92/100.** **400,000 tokens** with a 128,000 max output, plus BrowseComp-LC retaining 90.0% at 128k. The rubric's 200K–500K window band (65–84) is lifted by the published long-context behaviour, but **no MRCR ladder exists** for this model (unlike GPT-5's 95.2%/86.8%), and the window is 400K rather than 1M — hence 92 rather than 95.
- **Multimodal: 76/100.** Text + image in, text out, with MMMU-Pro 75.49% (AA) / 75.49% (vendor) and MMMU 85.4%, CharXiv reasoning 82.1%. The rubric's "+image in = 60–70" band is met at its top; no video or audio input is documented.
- **Coding: 79/100.** SWE-bench Verified **76.3%** (up from 72.8%), LiveCodeBench 86.77%, plus the reported "less overthinking, improved code quality" behaviour. Capped by the absence of any SWE-bench Pro, DeepSWE, FrontierCode, FrontierSWE, CursorBench or Terminal-Bench 4.0 number, and by Terminal-Bench 2.1 at 52.43%.
- **Cost efficiency: 82/100.** The evaluated route is **$1.25 in / $0.125 cached / $10.00 out** per 1M, with Batch at $0.625/$5.00 and a 90% cache discount that carries **no cache-write or storage charge** for the 24h extended retention — a real saving for agentic workloads with stable system prompts. The rubric's "~$1.25/$4.25 ≈ 88" band is met on input and beaten on output, so roughly 82.
- **Overall Score: 80.6/100.** (74 + 82 + 92 + 76 + 79) / 5 = 80.6 — best-fit: 2025 年 11 月的**"更稳、更少过度思考"**修订版（SWE-bench 76.3%、GPQA 88.1%、MMMU 85.4%、24 小时免费缓存），在同价位上比 GPT-5 更值得用 —— 但它只存在了约三个月就被 5.2 / 5.4 / 5.5 取代，且仍没有可独立核验的 Terminal-Bench / DeepSWE 数据。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **SWE-bench Verified — 76.3% (OpenAI, all 500 problems) vs 72.8% for GPT-5 on the same table.** The 61.8% figure that circulates for this model comes only from third-party harnesses; the official number is 76.3% and is used.
2. **GPQA — 88.1% (OpenAI) vs 87.27% (AA); MMMU-Pro — 81.0% (vendor table) vs 75.49% (AA); HLE — 39.8% no-tools / 52.1% with-tools (vendor) vs 28.50% (AA).**
3. **AIME fell slightly** (94.6% → 94.0%) — the one place the "better" model is not better, and the vendor's own table shows it.
4. **The "hallucinations reduced by 45% relative to GPT-5" claim is not supported.** OpenAI's primary sources contain a 45% claim only for **GPT-5 vs GPT-4o** ("~45% less likely to contain a factual error"); the GPT-5.1 system-card addendum reports only safety regressions (harassment, sexual content, mental health, emotional reliance) and **no hallucination-rate table**. It is not used here.
5. **The AA index 27.1 quoted at launch is not verifiable**; the current AA page shows **25\*** (index v4.3.2), an estimate with no published per-evaluation set.
6. **Terminal-Bench 2.0 84.0% is not verifiable** — no official board row, no swebench.com row, no Vals row for this model.
7. **Nothing else is independently confirmed**: no LiveCodeBench official-board row, no ARC-AGI, no Epoch AI, no LMArena placement, no BenchLM entry — so the tool and coding scores rest on OpenAI's own table plus AA's ten index evaluations.

### Notes on identity

- `gpt-5.1` is a distinct model from `gpt-5` (August 2025) and from its own `gpt-5.1-codex` / `-codex-mini` / `-codex-max` / `-chat-latest` variants.
- Its two product-level contributions are the **24-hour extended cache retention without cache-write charges** and the **"less overthinking / more steerable"** behaviour change, which OpenAI frames as the reason a lower raw AIME score is acceptable.
- The 400K window and 2024-09-30 cutoff carried over unchanged from GPT-5; the 1.05M window arrived with GPT-5.4.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model page, pricing page, the GPT-5.1 developer blog (with its evaluation appendix) and system-card addendum, Artificial Analysis (model page, per-evaluation payload, effort variants), the official Terminal-Bench board, OpenRouter's API entry, and negative verification at swebench.com, LiveCodeBench, ARC Prize, Epoch AI, Vals AI, BenchLM and LMArena. Vendor-vs-independent conflicts — the SWE-bench, GPQA, MMMU-Pro and HLE spreads and the unsupported 45% hallucination claim — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.1.md`, using the same headings.
