# Qwen3.7 Max — findings by MiniMax M3.1 Flash

- Source: Alibaba (`qwen3.7-max`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Max
- **Short description:** 阿里巴巴 2026 年 5 月的 **Qwen-Max 档专有模型**（blog 标题 "Qwen3.7: The Agent Frontier"）—— 1M 上下文、thinking 模式、纯文本接口，**对标 agent 与编码工作流**（SWE-bench Verified 80.4%、TB 2.0 69.7%、LiveCodeBench v6 91.6%、MCP Atlas 76.4%）。AA 测得 **201.3 t/s**、智能指数 29。已被 Qwen3.8 Max 取代。
- **Provider / access:** QwenCloud / DashScope `qwen3.7-max`（OpenAI 兼容 `compatible-mode/v1`）；OpenRouter `qwen/qwen3.7-max`（创建于 2026-05-21）。**闭源专有**（"The model weights are not publicly available"）。
- **Release / knowledge:** AA "released on May 19, 2026"；Qwen 博客元数据 **2026-05-16**；BenchLM 记 2026-05-16。Knowledge cutoff: **未公布**；参数规模 **未公布**（397B-A17B 的说法未经证实）。
- **IDs:** `qwen3.7-max`（QwenCloud）、`qwen/qwen3.7-max`（OpenRouter）。
- **Context window:** **1M**（max input 991K，thinking 983K）；max output **131K**。
- **Modalities:** **纯文本输入输出**（"pure-text-only interface"）。
- **Reasoning controls:** thinking 模型，`enable_thinking` 开关；function calling、cache、batch、web search、code_interpreter。
- **Pricing (as of 2026-10-19, per 1M tokens):** 输入 **$2.50**、输出 **$7.50**，implicit cache $0.50，显式 cache 写 $3.125、显式 cache 读 $0.25。限速：TPM 1M、RPM 600。
- **Architecture:** 未公布。

### Raw benchmarks found

> 厂商 launch table 数字标为 "vendor"（经 BenchLM 引用 `qwen.ai/blog?id=qwen3.7`）；Artificial Analysis 与 Vals AI 为独立来源。

Agent / tool use (vendor):

- SWE-bench Verified **80.4%**（Pro 60.6%、Multilingual 78.3%）；Terminal-Bench 2.0 **69.7%**；LiveCodeBench v6 **91.6%**；SciCode 53.5%；NL2Repo 47.2%；MCP Atlas **76.4%**；BFCL v4 **75.0%**；QwenClawBench 64.3%；Claw-Eval 65.2%；QwenWebBench 1568；VITA-Bench 47.9%；Toolathlon-Verified 72.5%（经 BenchLM）

Reasoning / knowledge (vendor):

- GPQA **92.4%**；HLE **41.4%** / 带工具 53.5%；MMLU-Pro **89.6%**；MMLU-Redux 95%；SuperGPQA 73.6%；MMMLU 90.3%；MRCRv2 **90.4%**；CritPt 13.4%

Independent (Artificial Analysis, Max): Intelligence Index **29** (29.46, #99/217)，**201.3 t/s** (#15/186)，TTFT 2.23s，**$1.15/task**，120M output tokens；GDPval-AA Elo **1127.65**（normalized 31.4%）；TB 2.1 **74.53%**；TB 2.0-Hard 50.76%；**TB 4.0 1.52%**；SciCode 49.54%；HLE 40.50%；GPQA-D 92.32%；CritPt 13.43%；AA-LCR 79.0%；IFBench 80.54%；τ² Telecom 94.74%；τ-banking 11.75%；Omniscience 13.48 / acc 31.13% / halluc 25.63%；AutomationBench 22.98%；GDP.pdf 8.6%；AnalystAgent 18.75%；ITBench-SRE 42.47%；Coding Index 66.0；Agentic Index 22.5

Independent (Vals AI): Vals Index **57.29% (#5)**，avg accuracy 58.80%；SWE-bench **68.80%**；TB 2.1 **61.05%**；LiveCodeBench 87.06%；Vibe Code Bench 47.67%；MMLU-Pro 89.31%；GPQA-D 90.15%；LegalBench 84.91%；TaxEval v2 75.31%；TB 2.0 59.2%；CorpFin v2 65.4%

BenchLM: 62.59/100（#47/956）；OpenHarmony 53.4%；ResearchClawBench 18.7%；Design Arena Website 1274

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 76/100.** Terminal-Bench 2.0 **69.7%** (vendor) / TB 2.1 74.53% (AA) / 61.05% (Vals), MCP Atlas 76.4%, BFCL v4 75.0%, Toolathlon-Verified 72.5%, QwenWebBench 1568, GDPval-AA 1127.65, Claw-Eval 65.2%, Agents' Last Exam implied by the Vals set. Capped by the rubric's anchors (TB2.1 ~88%+ → 61–75%; τ3 ~50%+ → 11.75%; GDPval ~1750+ → 1127.65), by **Terminal-Bench 4.0 at 1.52%**, by AutomationBench 22.98%, and by the absence of any MCP-Atlas-independent or Toolathlon-independent row.
- **Reasoning: 80/100.** GPQA 90.15–92.4%, MMLU-Pro 89.31–89.6%, MMMLU 90.3%, MMLU-Redux 95%, MRCR v2 **90.4%**, IFBench 80.54%, AA-LCR 79.0%, FrontierMath: 未列. Capped by HLE at 40.50–41.4%, CritPt 13.43%, τ-banking 11.75%, the AA Intelligence Index of **29** (under the rubric's 60+ anchor), and by the low 31.13% Omniscience accuracy (hallucination 25.63% is comparatively good).
- **Context window: 92/100.** 1M context (991K max input, 131K output) with a published **MRCR v2 90.4%** — the strongest long-context figure in this batch, and it is the one place this model is genuinely frontier-tier. One point below because no RULER/GraphWalks row exists and because the max output is reported as 131K by the vendor but 66k by Vals.
- **Multimodal: 76/100.** **Text-only** on the hosted build (a "pure-text-only interface"), so image input is not available; the measured vision-adjacent rows are MMMU-Pro 80.46% on AA's generic evaluation and VITA-Bench 47.9%. The rubric's image band (60–70) is met only because the model is judged on text-plus-partial-vision evidence, and the score is held below the audio/video band because it has neither.
- **Coding: 78/100.** SWE-bench Verified **80.4%** (vendor) / 68.80% (Vals), LiveCodeBench v6 **91.6%**, Terminal-Bench 2.0 69.7%, SciCode 53.5%, FrontierSWE: 未列. Capped by Terminal-Bench 4.0 at 1.52%, by SciCode under the 55% anchor, and by the absence of any DeepSWE, SWE-bench Pro-independent or FrontierCode row.
- **Cost efficiency: 72/100.** The evaluated route is QwenCloud at **$2.50 in / $7.50 out** per 1M with an implicit cache read at $0.50 and explicit read at $0.25. The rubric's anchors ("~$1.25/$4.25 ≈ 88", "~$3/$15 ≈ 60") put $2.50/$7.50 at roughly 72; Artificial Analysis measures **$1.15 per Index task** (#63 of 114), which is a better figure than the sticker price suggests, but 201.3 t/s and 120M output tokens keep real cost up.
- **Overall Score: 80.4/100.** (76 + 80 + 92 + 76 + 78) / 5 = 80.4 — best-fit: 2026 年 5 月的 **Qwen-Max 档 agent/编码旗舰**（SWE-bench 80.4%、LiveCodeBench 91.6%、MRCR 90.4%、201 t/s），但**纯文本接口**、Terminal-Bench 4.0 仅 1.52%、$2.50/$7.50 偏贵，很快被 Qwen3.8 Max（AA 指数 45、$2/$6、TB 4.0 38.9%）取代。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Release date — 2026-05-19 (AA) vs 2026-05-16 (Qwen blog metadata and BenchLM).**
2. **SWE-bench Verified — 80.4% (vendor) vs 68.80% (Vals).** An 11.6-point harness gap; AA's index shows no SWE-bench row for this model.
3. **Terminal-Bench — 69.7% on 2.0 (vendor) vs 74.53% on 2.1 (AA) vs 61.05% on 2.1 (Vals) vs 59.2% on 2.0 (Vals).** Two benchmark versions and two harnesses, four numbers.
4. **GDPval-AA Elo — 1127.65 (AA) vs 1190 (vendor table).**
5. **Agentic Index — 22.5 (OpenRouter) vs 23.9 (BenchLM).**
6. **Max output — 131K (vendor) vs 66k (Vals).**
7. **Pricing is not tiered by context on Model Studio** (a single $2.50/$7.50 rate, unlike the 3.5 Plus and 3.6 Plus lines) — noted because it makes this model comparatively expensive for 1M-token jobs.
8. **No independent ARC Prize, Epoch AI or LMArena row exists** for this model (LMArena returned 403), and the Qwen blog body is client-rendered, so the vendor table is reachable only through BenchLM's citation.

### Notes on identity

- `qwen3.7-max` is a **distinct, proprietary** model from `qwen3.7-plus` (June 2026, AA index 25, $0.40/$1.60), from the hosted `qwen3.5-plus`, and from `qwen3.8-max` (September 2026, AA index 45, $2/$6, Terminal-Bench 4.0 38.9%, ~600 TPS on the 3.8 Max row of Meta's comparison table).
- Qwen3.7 Max's own framing is "The Agent Frontier" — the generation Qwen pushed agentic/coding capability before shifting to the 3.8 line.
- The Zen route (`opencode/qwen3.7-max`) mirrors the vendor pricing; no free variant exists for this model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — QwenCloud's model page (ids, context, pricing, rate limits), the Qwen3.7 blog metadata and its vendor table via the BenchLM ledger, Artificial Analysis (model page with its per-evaluation payload), Vals AI, OpenRouter, and negative verification at ARC Prize, Epoch AI, LMArena and swebench.com. Vendor-vs-independent conflicts — the release date, the SWE-bench and Terminal-Bench spreads and the output-cap dispute — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Max.md`, using the same headings.
