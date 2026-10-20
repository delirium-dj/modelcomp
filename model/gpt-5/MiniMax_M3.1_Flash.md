# GPT-5 — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI 的 2025 年 8 月旗舰 —— 第一个把 **reasoning effort（minimal/low/medium/high）与 verbosity（low/medium/high）分开暴露**的模型，"GPT‑5 is state-of-the-art (SOTA) across key coding benchmarks, scoring 74.9% on SWE-bench Verified and 88% on Aider polyglot"，并以 "responses ~45% less likely to contain a factual error than GPT‑4o" 强化事实性叙事。现已 **deprecated**（被 GPT-5.1 取代）。
- **Provider / access:** OpenAI API `gpt-5`（唯一快照 `gpt-5-2025-08-07`）—— Responses / Chat Completions / Batch 均支持，无 fine-tuning / embeddings / realtime；OpenRouter `openai/gpt-5`（创建于 2025-08-07，400K 上下文，$1.25/$10）。
- **Release / knowledge:** released **2025-08-07**。Knowledge cutoff **2024-09-30**。
- **IDs:** `gpt-5`（OpenAI API）、`openai/gpt-5`（OpenRouter）、`gpt-5-pro` / `gpt-5-mini` / `gpt-5-nano` / `gpt-5-chat-latest`（同族）。
- **Context window:** **400,000**（max input 272,000；max output **128,000**）。
- **Modalities:** 文本+图像 → 文本；支持 reasoning tokens。
- **Reasoning controls:** "Reasoning.effort supports: minimal, low, medium, and high."（`medium` 默认）+ 新的 `verbosity` 档（low/medium/high）。
- **Tools:** function_calling, web_search, file_search, image_generation, code_interpreter, mcp；特性含 streaming、structured_outputs、file_uploads、image_input、prompt_caching。
- **Pricing (as of 2026-10-19, per 1M tokens):** 输入 **$1.25**、缓存 **$0.125**（90% 折扣）、输出 **$10**；OpenRouter 的 batch 变体 $0.625 / $0.0625 / $5.00。**Priority / fast / ultrafast 的 gpt-5 价格未找到可核实来源**（价格页表格动态渲染）。
- **Rate limits:** Build 5,000 RPM / 1M TPM / batch 队列 3,000,000；Launch 10,000 / 4M / 200M；Grow 15,000 / 40M / 15,000,000,000。

### Raw benchmarks found

> OpenAI 开发者博客数字标为 "vendor"（`GPT-5 (high)`，默认无工具）；Artificial Analysis 为独立测量；swebench.com / LiveCodeBench / ARC Prize / Vals / BenchLM / LMArena 均未找到 GPT-5 的行。

Agent / tool use:

- Terminal-Bench 2.1: **35.21%** (AA)；Terminal-Bench 4.0: 未公布；Terminal-Bench-Hard **32.58%** (AA)
- τ²-bench **84.80%** (AA) / airline 62.6% / retail 81.1% / telecom 96.7%（vendor）
- BrowseComp-LC **90.0% (128k) / 88.8% (256k)**（vendor）；Scale MultiChallenge **69.6%**（o3-mini 评分，vendor）
- GDPval-AA **917.24 Elo** (AA)；AutomationBench: null (AA)；Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found**
- Aider polyglot **88.0%**（vendor）；SWE-bench Verified **74.9%**（vendor，n=477）

Reasoning / knowledge:

- AIME 2025 **94.33%** (AA) / 94.6%（vendor，无工具）
- GPQA Diamond **85.35%** (AA) / 85.7%（vendor）
- HLE **28.50%** (AA) / 24.8%（vendor）；LCR **78.2%** (AA)；CritPt **5.71%** (AA)
- MMMU **84.2%**、MMMU-Pro（std+vision 均值）**78.4%**（vendor）；CharXiv reasoning 81.1%（vendor）；HMMT 2025 **93.3%**（vendor）；FrontierMath（python）**26.3%**（vendor）；COLLIE 99.0%（vendor）
- Artificial Analysis Intelligence Index: **23\***（**估计值**，#140/217），109.4 t/s (#63/186)，TTFT 63.16s，$1.25/$10，90% cache 折扣，400K ctx，cutoff Sep 30 2024；AA 页面另注 "3 out of 4 units for Intelligence"
- Omniscience index **-8.73** / accuracy **40.32%** / hallucination **82.18%** (AA)；LiveCodeBench **84.55%** (AA)；AIME25 94.33% (AA)

Long context:

- **MRCR 2-needle：128k 95.2% / 256k 86.8%**（vendor）；BrowseComp-LC 90.0% (128k) / 88.8% (256k)
- 400K 窗口，128K 输出

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 72/100.** τ²-bench 84.80% (AA) / telecom 96.7% (vendor), BrowseComp-LC 90.0% (128k), SWE-bench Verified 74.9%, Aider polyglot 88.0%, Scale MultiChallenge 69.6%, GDPval-AA 917. Capped by **Terminal-Bench 2.1 at 35.21%** — the agentic-terminal anchor of the rubric is far below the ~88% frontier mark — by Terminal-Bench-Hard 32.58%, and by the absence of any AutomationBench, Claw-Eval, Toolathlon or MCP-Atlas row.
- **Reasoning: 80/100.** AIME 2025 **94.33–94.6%**, GPQA Diamond 85.35–85.7%, MMMU 84.2%, HMMT 2025 93.3%, LCR 78.2%, CharXiv 81.1%, FrontierMath 26.3%, COLLIE 99.0%. Capped by HLE at 24.8–28.5%, by CritPt 5.71%, by FrontierMath 26.3%, and by the **-8.73 Omniscience index with an 82.18% hallucination rate** at 40.32% accuracy; the AA index of **23\*** is an estimate, not a measurement.
- **Context window: 92/100.** **400,000 tokens** with a 128,000 max output — the rubric's 200K–500K band (65–84) for the window, lifted to 92 by the published MRCR 2-needle ladder (**95.2% at 128k, 86.8% at 256k**) and BrowseComp-LC retention. Not 95+ because the window is 400K rather than 1M and no measurement beyond 256K exists.
- **Multimodal: 75/100.** Text + image in, text out, with MMMU-Pro 78.4% (std+vision average) / MMMU 84.2% and CharXiv reasoning 81.1%. The rubric's "+image in = 60–70" band is met at its top; no video or audio input is documented.
- **Coding: 78/100.** Aider polyglot **88.0%**, SWE-bench Verified **74.9%** (n=477), LiveCodeBench 84.55%, plus the fact that this launch reset the SWE-bench Pro record. Capped by the absence of any SWE-bench Pro, DeepSWE, FrontierCode or FrontierSWE number, and by Terminal-Bench 2.1 at 35.21% and Terminal-Bench-Hard 32.58%.
- **Cost efficiency: 82/100.** The evaluated route is **$1.25 in / $0.125 cached / $10.00 out** per 1M with a 90% cache discount and Batch at $0.625/$5.00 — inside the rubric's "~$1.25/$4.25 ≈ 88" band on input and above it on output, hence roughly 82. The deductions are the $10 output rate and the absence of a verifiable priority/fast price row.
- **Overall Score: 79.4/100.** (72 + 80 + 92 + 75 + 78) / 5 = 79.4 — best-fit: the **2025 年 8 月的推理 + 编程双料旗舰**（AIME 94.3%、Aider 88.0%、SWE-bench Verified 74.9%、400K 上下文带完整 MRCR 阶梯），今天已被 GPT-5.1 / 5.2 / 5.5 一路超越 —— 它的历史价值在"定义了 effort 与 verbosity 分离"的产品范式，而不在分数上。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Knowledge cutoff — "Sep 30, 2024"** per OpenAI's docs and Artificial Analysis. (A "Sep 30 2025" variant is unsupported and is not used.)
2. **AIME 94.6% (OpenAI) vs 94.33% (AA); GPQA 85.7% vs 85.35%; MMMU-Pro 78.4% (OpenAI's std+vision average) vs 74.22% (AA).**
3. **The AA Intelligence Index 23\* is an estimate** — the page states "3 out of 4 units for Intelligence" and AA publishes no per-evaluation set for GPT-5, so no measured index exists.
4. **No independent row exists anywhere else:** swebench.com's data files contain no `gpt-5` entry, the LiveCodeBench leaderboard and the official Terminal-Bench board render client-side, and Vals AI, BenchLM, LMArena and ARC Prize have no GPT-5 row retrievable. Every "vendor" number here is OpenAI's own, and the single independent figure is AA's Terminal-Bench 2.1 at 35.21%.
5. **Priority / fast / ultrafast pricing for `gpt-5` is not verifiable** — the pricing tables render dynamically and only GPT-6 / 5.6 rows could be extracted; no price was invented.
6. **Two GPT-5 rows in the API:** `gpt-5` and `gpt-5-chat-latest` (non-reasoning) are distinct surfaces of the same generation, and `gpt-5-pro` is a separate high-compute configuration priced like the later Pro models.

### Notes on identity

- `gpt-5` is a distinct model from `gpt-5.1` (its November-2025 successor), `gpt-5-pro`, `gpt-5-mini` and `gpt-5-nano`.
- Its distinctive contribution is the **effort/verbosity split** — the first OpenAI model to expose reasoning effort and response length as two independent knobs, a pattern every later model in this dataset keeps.
- The 400K context and 272K max input are the model's own; later generations moved to 1.05M.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model page, pricing page, the "Introducing GPT-5" developer blog and system card; Artificial Analysis (model page with its per-evaluation payload and the estimated-index note), OpenRouter's API entry, and negative verification at swebench.com, the LiveCodeBench leaderboard, the official Terminal-Bench board, ARC Prize, Vals AI, BenchLM and LMArena. Vendor-vs-independent gaps — chiefly the estimated AA index and the absence of any independent leaderboard row — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
