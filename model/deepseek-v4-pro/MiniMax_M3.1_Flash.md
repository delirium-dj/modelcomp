# DeepSeek V4 Pro — findings by MiniMax M3.1 Flash

- Source: DeepSeek (`deepseek-v4-pro`, 0813 GA snapshot)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's 2026 旗舰 MoE —— "DeepSeek-V4-Pro-0813 is the official release of DeepSeek-V4-Pro, superseding the preview version"，在 V4 Pro Preview 架构上加装 **DSpark 投机解码**模块，MIT 许可开权重，约 1.7T 总参数 / 49B 激活，1M 上下文。2026 年 8 月才 GA，是本批次中"参数规模最大、单价最贵"的开放权重模型之一。
- **Provider / access:** DeepSeek API `deepseek-v4-pro`（服务 0813 快照）；OpenRouter `deepseek/deepseek-v4-pro-0813`（canonical `deepseek-v4-pro-20260813`）、`deepseek/deepseek-v4-pro`（= "DeepSeek V4 Pro 0423" Preview 快照）；Hugging Face `deepseek-ai/DeepSeek-V4-Pro-0813`；arXiv 2606.19348。
- **Release / knowledge:** 0813 GA **2026-08-13**；Preview 快照 0423 在前。Knowledge cutoff: **未公布**（models.dev 仅为 0423 记 2025-05）。
- **IDs:** `deepseek-v4-pro`（DeepSeek API）、`deepseek/deepseek-v4-pro-0813` / `deepseek/deepseek-v4-pro`（OpenRouter）、`deepseek-ai/DeepSeek-V4-Pro-0813`（HF）。
- **Context window:** **1M**（1,048,576；provider 报 1,024,000）；max output **384K**。**纯文本输入输出，无视觉。**
- **Reasoning controls:** `reasoning_effort` = low / high / max（HF）；OpenRouter 标 mandatory=false、默认 high。
- **Pricing (as of 2026-10-19, per 1M tokens):** **peak $1.32 in / $3.96 out，cache hit $0.044**（97% 折扣）；**off-peak 减半：$0.66 / $1.98 / $0.022**。"Off-peak rates are half of the peak rates. Peak hours are 01:00 - 04:00 and 06:00 - 10:00 UTC, Monday through Friday"。并发上限 500。
- **Architecture:** MoE，HF "Model size 1.7T params"（0423 卡片为 1.6T 总 / 49B 激活），MIT 许可，DSpark 投机解码。

### Raw benchmarks found

> 厂商卡片数字标为 "vendor"（max effort、temp 1.0、top_p 0.95、DeepSeek Harness）；Artificial Analysis、Vals AI、BenchLM 为独立来源。

Agent / tool use:

- Terminal-Bench 2.1: **87.9%** (vendor) / **78.65%** (AA) / **54.68%** (Vals AI, Terminus 2)
- Terminal-Bench 4.0: **14.14%** (AA)；Terminal-Bench 2.0 **67.9%**（经 BenchLM 引厂商表）
- Toolathlon-Verified **74.1%**（vendor，HF eval export 复现）；BrowseComp **83.4%**；MCP Atlas **73.6%**；Cybergym **83.3%**；NL2Repo **61.5%**；AutomationBench **31.8%**（vendor）/ **56.71%** (AA objective-share)；Agents' Last Exam **25.7%**；ALE 25.7%
- τ³-bench banking **39.59%** (AA)；τ²-bench: not published；Claw-Eval / Toolathlon-independent: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.83%** (AA) / 90.1%（vendor，GPQA-D 90.1、经 BenchLM）/ 92.4%（Vals，GPQA-D）
- HLE: **42.7%** 无工具 / **60.0%** 带工具（vendor）/ 41.01% (AA)
- MRCR 1M **83.5%**（经 BenchLM 引厂商表）；CorpusQA 1M 62.0%；HMMT Feb-2026 95.2%；IMOAnswerBench 89.8%；MMLU-Pro 87.5%；Apex 38.3%
- Artificial Analysis Intelligence Index: **36**（#13 / 121 开放权重类），**107.1 t/s** (#23/78)，**$0.67/task** (#32/43)，160M output tokens (#32/47)，97% cache 折扣，1M ctx；OpenRouter 内嵌快照：intelligence 36、coding 68.8、agentic 41.3
- Omniscience index **0.83** / accuracy **49.1%** / hallucination **94.83%** (AA)；MLCR-AA 17.78%；CritPt 18.0%
- ARC-AGI-1 **90.00%**、ARC-AGI-2 **61.3%**（经 BenchLM 引 ARC Prize）；无 FrontierMath / AIME 独立值（Epoch 页面 404）

Coding:

- SWE-bench Pro **55.4%**；SWE-bench Verified **80.6%**；SWE-bench **96.4%** (Vals)；LiveCodeBench **87.5%** (Vals)；DeepSWE v1.1 **62.7%**（vendor，HF eval export 复现）；Pass@1-COT **93.5%**；Codeforces **3206**；TB-Science 5.71%；FrontierCode 38.80%
- DSBench-FullStack 71.1%、DSBench-Hard **67.2%**（vendor）；Vibe Code Bench 49.93%；OpenHarmony 59.0%
- 无 FrontierSWE / CursorBench / FrontierMath 独立值

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 78/100.** Toolathlon-Verified **74.1%**, BrowseComp 83.4%, MCP Atlas 73.6%, Cybergym 83.3%, NL2Repo 61.5%, τ³-banking 39.59%, Terminal-Bench 2.1 at 87.9% (vendor) / 78.65% (AA) / 54.68% (Vals), AutomationBench 31.8% (vendor) / 56.71% (AA), Agents' Last Exam 25.7%. Capped by the 33-point Terminal-Bench 2.1 spread (harness-dependent), by AutomationBench in the 30s on the vendor's own run, and by Agents' Last Exam and τ³-banking in the mid-to-high 20s/40s.
- **Reasoning: 84/100.** GPQA Diamond 90.1–92.83%, HLE 42.7% / 60.0% with tools, MRCR 1M **83.5%**, HMMT Feb-2026 95.2%, IMOAnswerBench 89.8%, MMLU-Pro 87.5%, FrontierMath v2 via BenchLM (not directly verifiable), and an AA Intelligence Index of **36 (#13 open-weight)**. Capped by ARC-AGI-2 at 61.3% and ARC-AGI-3 unmeasured, by the **94.83% hallucination rate** at 49.1% accuracy, and by the absence of an independent FrontierMath value.
- **Context window: 96/100.** **1,048,576 tokens** with a **384K max output** — the rubric's top tier on both window and output, with MRCR **83.5% at 1M** showing the window is genuinely used. One point below because the Terminal-Bench 2.1 gap (87.9 vendor vs 54.7 Vals) and the 14.14% Terminal-Bench 4.0 show the long-horizon agentic behaviour is uneven.
- **Multimodal: 15/100.** **Text in, text out — no vision at all.** The rubric's text-only band is 10–20, so this is the top of that band. (The sibling `deepseek-v4-flash-vision-exp` is the vision build; this one is not.)
- **Coding: 78/100.** SWE-bench Verified **80.6%** and SWE-bench 96.4% (Vals), LiveCodeBench 87.5%, Pass@1-COT **93.5%**, Codeforces 3206, DSBench-Hard 67.2%, Terminal-Bench 2.1 87.9% (vendor), SWE-bench Pro 55.4%, DeepSWE 62.7%, FrontierCode 38.80%, Terminal-Bench 4.0 14.14%, TB-Science 5.71%. Capped by DeepSWE under the 74% anchor, by Terminal-Bench 4.0 at 14%, and by the absence of any independent FrontierMath or FrontierSWE value.
- **Cost efficiency: 82/100.** The evaluated route is DeepSeek's own API at **peak $1.32 in / $3.96 out** with a **$0.044 cache hit** (97% discount), and **off-peak $0.66 / $1.98** — inside the rubric's "~$1.25/$4.25 ≈ 88" band, and half that outside peak hours. The deductions are the 2× peak-hour multiplier and the $3.96 output rate, which is high for a 1.7T-parameter model; the 160M-token verbosity makes the per-task cost real rather than notional.
- **Overall Score: 70.2/100.** (78 + 84 + 96 + 15 + 78) / 5 = 70.2 — best-fit: a **huge open-weight model that is a superb text-and-code workhorse** (1M context with 83.5% MRCR at 1M, SWE-bench Verified 80.6%, Pass@1-COT 93.5%, Codeforces 3206) at MIT-licensed weights — but it is **text-only** (multimodal 15/100), its knowledge reliability is poor (94.8% hallucination rate), and its terminal-agent numbers swing 33 points across harnesses.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 2.1 — 87.9% (vendor, DeepSeek Harness) vs 78.65% (AA) vs 54.68% (Vals, Terminus 2).** A 33-point spread; the vendor figure is quoted and AA is used for the score.
2. **Price — AA's $1.32/$3.96 is the *peak* rate; DeepSeek's own off-peak rate is $0.66/$1.98** (and OpenRouter's listed 0813 price differs again). The peak rate anchors the cost score and the off-peak rate is quoted beside it.
3. **GPQA-D — 90.1% (vendor) vs 92.4% (Vals) vs 92.83% (AA).**
4. **"160M output tokens" is a verbosity metric, not a max-output figure** — the actual max output is 384K.
5. **Snapshot naming:** there is **no `deepseek-v4-pro-0424`**; the prior snapshot is `deepseek/deepseek-v4-pro` = "DeepSeek V4 Pro 0423" (Preview), and the AA page for the undated id renders the **0813 (Max)** numbers. The folder slug therefore denotes the current GA build, not the Preview.
6. **Architecture sizing — 1.7T params (HF) vs 1.6T total / 49B active (0423 card) vs AA `parameters: null`.** Both are recorded.
7. **No AA per-eval table is readable** (the charts are JS-rendered), and **Epoch AI has no model page for it (404)**, so the FrontierMath and ARC-AGI values rest on BenchLM's citations rather than a direct read.

### Notes on identity

- `deepseek-v4-pro` is the **GA 0813 build**; the Preview 0423 is a separate id (`deepseek/deepseek-v4-pro`) with the same API string now serving 0813 — the same "one id, two snapshots" pattern as Gemini 3.8 Flash / Flash Cyber.
- It is **text-only**, unlike `deepseek-v4-flash-vision-exp` (the vision build of V4 Flash, scored separately) — and unlike the Pro/Flash pair, the vision capability was **not** ported to Pro.
- Weights are **MIT** on Hugging Face, and the model is text-only with a DSpark speculative-decoding module attached to the Preview architecture.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — DeepSeek's API docs (pricing, peak/off-peak schedule, model ids), the `deepseek-ai/DeepSeek-V4-Pro-0813` Hugging Face card and eval export, the arXiv technical report reference, Artificial Analysis (model page, per-evaluation payload, OpenRouter AA mirror), the BenchLM evidence ledger, Vals AI, and negative verification at Epoch AI, ARC Prize, swebench.com and the official Terminal-Bench board. Vendor-vs-independent conflicts — chiefly the 33-point Terminal-Bench spread and the peak/off-peak price split — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Pro.md`, using the same headings.
