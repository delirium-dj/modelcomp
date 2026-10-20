# Gemma 4 31B — findings by MiniMax M3.1 Flash

- Source: Google (`gemma-4-31b-it` / `google/gemma-4-31b`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google 2026 年 4 月的**开放权重 31B 稠密模型**（非 MoE）—— 30.7B 参数、60 层、1024-token 滑窗、约 550M 视觉编码器，混合注意力（局部滑窗 + 全局，p-RoPE），**Apache-2.0** 许可，**AI Studio 上完全免费（$0.00 / $0.00）**，并且是 2026-04-01 时"the **#3 open model in the world** on the industry-standard Arena AI text leaderboard"。AA 测得智能指数 **15**（#19/141），成本档 **#1/24**（$0.00/task）。
- **Provider / access:** Hugging Face `google/gemma-4-31b`（base）与 `google/gemma-4-31b-it`（instruct）；OpenRouter `google/gemma-4-31b-it` + `:free`；Model Studio / AI Studio `gemma-4-31b-it`；models.dev google provider `gemma-4-31b-it`。
- **Release / knowledge:** released **2026-04-02**（Google 博客；AA "Gemma 4 31B (Reasoning) was released on April 2, 2026"）。Knowledge cutoff **2025 年 1 月**（"including web documents, code, images, audio, with a cutoff date of January 2025"）。
- **IDs:** `gemma-4-31b-it`（Model Studio / OpenRouter）、`google/gemma-4-31b-it`（OpenRouter）、`google/gemma-4-31b`（HF base）。
- **Context window:** **256K**（HF 卡片 "256K tokens"；AA/provider 表 262,144）；max output **32,768**（models.dev；Vals "33k"）。
- **Modalities:** 文本+图像 → 文本（视频按帧输入；**无音频**）。Vals 标 "Video input not supported"。
- **Reasoning controls:** thinking 由系统提示中的 `<|think|>` 触发；`enable_thinking=True`；采样 `temperature=1.0, top_p=0.95, top_k=64`；原生 system role、function calling、JSON 输出。
- **Pricing (as of 2026-10-19, per 1M tokens):** **$0.00 in / $0.00 out（"based on Google's API"，即 AI Studio 免费）**；第三方付费：OpenRouter $0.20/$0.40、models.dev deepinfra $0.20/$0.40、Together $0.14/$0.40、SiliconFlow $0.13/$0.40、NVIDIA $0/$0。
- **Architecture:** **稠密 30.7B**（AA "Total parameters 30.7B"），60 层，1024-token 滑窗，262K 词表，约 550M 视觉编码器，混合注意力（局部 + 全局，p-RoPE）。
- **Siblings (correction):** Gemma 4 家族为 **E2B、E4B、12B Unified、26B A4B（MoE，25.2B 总 / 3.8B 激活，128 专家选 8 + 1 共享）、31B（稠密）** —— 本条目不是 MoE。

### Raw benchmarks found

> Google 模型卡数字标为 "vendor"；Artificial Analysis 与 Vals AI 为独立来源。

Reasoning / knowledge (card, Gemma 4 31B IT):

- MMLU-Pro **85.2**；AIME 2026 无工具 **89.2**；GPQA Diamond **84.3**；Tau2 **76.9**；HLE 无工具 **19.5** / 带搜索 **26.5**；BigBench Extra Hard 74.4；MMMLU **88.4**；MMMU-Pro **76.9**；OmniDocBench 1.5 **0.131**（越低越好）；MATH-Vision **85.6**；MedXPertQA MM 61.3；LiveCodeBench v6 **80.0**；Codeforces ELO **2150**
- MRCR v2 8-needle 128k **66.4%**

Independent:

- **Artificial Analysis:** Intelligence Index **15**（#19 / 141），**35.7 t/s** (#54/64)，TTFT 1.10s，49M output tokens (#10/27)，**$0.00/task**，12 providers；provider 速度：SambaNova 506.4、Modular 231.1、FriendliAI 93.9、Google AI Studio 36；blended 价格 Google $0.00 → SiliconFlow $0.78。per-eval：TB 2.1 **43.45%**、**TB 4.0 0%**、TB-Hard 36.36%、τ² 59.94%、τ³ 14.85%、SciCode 45.49%、LCR 69.67%、IFBench 75.58%、HLE 23.63%、GPQA 85.66%、CritPt **1.43%**、APEX null、MMMU-Pro 73.41%、AutomationBench **4.93%**、GDPval **619.79 Elo**、EnterpriseOps 28.35%、ITBench 37.29%、Omniscience **-47.93** / accuracy **20.03%** / hallucination **84.99%**
- **Vals AI (2026-04-09):** Vals Index **38.94%**；Vals Multimodal Index 45.12%；SAGE 55.03%；MortgageTax 61.37%；Case Law v2 52.63%；Finance Agent v1.1 50.79%；SWE-bench Verified 子集 53.92%；Terminal-Bench 2.0 **39.33%**（TB2.0 延迟 855.3s，Vals Index 323.2s，Finance Agent 5360.3s）
- **Arena（Google 博客，2026-04-01）:** "the 31B model currently ranking as the **#3 open model in the world** on the industry-standard Arena AI text leaderboard"（26B 为 #6）
- 无 BenchLM 条目；tbench.ai / ARC Prize / Epoch AI 的 per-model 值均未取得（页面 JS 渲染）

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 58/100.** Terminal-Bench 2.1 **43.45%** (AA) / 39.33% (Vals), Terminal-Bench 4.0 **0%**, Terminal-Bench-Hard 36.36%, τ²-bench 59.94%, τ³-banking 14.85%, AutomationBench **4.93%**, Finance Agent v1.1 50.79%, Case Law 52.63%, TaxEval 65.09%. Capped by the rubric's anchors (TB2.1 ~88%+ → 39–43%; τ3 ~50%+ → 14.85%; GDPval ~1750+ → 619.79) and by the absence of any Toolathlon, MCP-Atlas or Claw-Eval row.
- **Reasoning: 70/100.** AIME 2026 **89.2%**, MMLU-Pro 85.2%, GPQA Diamond 84.3–85.66%, MMMLU 88.4%, MathVision 85.6%, Tau2 76.9%, BigBench Extra Hard 74.4%, MMLU-Pro 85.59% (Vals), and an AA Intelligence Index of **15 (#19/141)** plus an arena "#3 open model" placement. Capped by HLE at 19.5–23.63%, CritPt **1.43%**, the very low **20.03% Omniscience accuracy** with an 84.99% hallucination rate, and by Vals' Vals Index of only 38.94%.
- **Context window: 88/100.** 256K tokens with a 32,768 max output — the rubric's 200K–500K band (65–84) — with a published MRCR v2 8-needle **66.4% at 128k**. One point below because there is no measurement beyond 128k, and because the 32,768 output cap is small for long-form work.
- **Multimodal: 80/100.** Text + image in, text out, with a 550M vision encoder: MMMU-Pro **76.9%** (card) / 73.41% (AA) / Vals Multimodal Index 45.12%, MathVision 85.6%, OmniDocBench 1.5 0.131, MedXPertQA MM 61.3%, LiveCodeBench 80.0%. The rubric's "+image in = 60–70" band is met well above its top thanks to the measured vision rows, but not into the 90+ band (no audio input, no video input per Vals).
- **Coding: 66/100.** LiveCodeBench v6 **80.0%**, SWE-bench Verified 子集 53.92% (Vals), Terminal-Bench 2.0 39.33–43.45%, Codeforces ELO **2150**, TB-Science: 未列, FrontierCode: 未列, DeepSWE: 未列, **Terminal-Bench 4.0 0%**. Capped by the absence of any DeepSWE, SWE-bench Pro, FrontierCode, FrontierSWE or CursorBench row, and by Terminal-Bench 4.0 at zero.
- **Cost efficiency: 100/100.** The evaluated route is **$0.00 in / $0.00 out on Google AI Studio** ("based on Google's API" per Artificial Analysis), which is the rubric's "$0 = 100" anchor exactly — and AA ranks it **#1 of 24** for cost with $0.00 per Index task. Third-party hosts (Together $0.14/$0.40, SiliconFlow $0.13/$0.40, OpenRouter $0.20/$0.40) charge normally, and the model is Apache-2.0 with no self-hosting caveat.
- **Overall Score: 72.4/100.** (58 + 70 + 88 + 80 + 66) / 5 = 72.4 — best-fit: 一个**免费、Apache-2.0、1M 可扩展、视觉齐备的 31B 稠密模型**（AI Studio 上 $0，Codeforces 2150，MMMU-Pro 76.9%，Arena 开放模型 #3）—— 适合本地部署、批量文档/图像理解与教育场景；但 agent 能力几乎不可用（Terminal-Bench 4.0 = 0%、AutomationBench 4.9%）、知识可靠性是全批最差之一（Omniscience accuracy 20.0%、幻觉率 85.0%）。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Context — 256K (card) vs 262,144 (AA provider table).** Rounding.
2. **Max output — "33k" (Vals) vs 32,768 (models.dev).** Rounding.
3. **Vals prose says "#1 on SAGE" while the live table shows 2/91 at 55.03%.**
4. **Terminal-Bench 2.0 — 39.33% (Vals) vs 43.45% (AA).**
5. **The "Arena #3 open model" claim is dated 2026-04-01** — an April snapshot of a leaderboard that moves weekly; the current position was not retrievable (no independent arena row in this pass), so the claim is recorded with its date rather than as a present fact.
6. **AA's per-eval rows and the tbench.ai / ARC Prize / Epoch AI per-model values are JS-rendered** and were not retrieved — the numbers quoted are the AA payload plus the Google card and Vals.
7. **The sibling names in the brief were wrong** — the Gemma 4 family is E2B / E4B / 12B Unified / 26B A4B (MoE) / 31B (dense), and this entry is the **dense** 31B, not the MoE 26B.
8. **Speed is host-dependent** — 35.7 t/s median on AA, but 506.4 t/s on SambaNova and 36 t/s on Google AI Studio, so a single throughput number misleads.

### Notes on identity

- `gemma-4-31b` is a distinct model from the **MoE** `gemma-4-26b-a4b` (25.2B total / 3.8B active, 8-of-128 experts + 1 shared) and from the E2B/E4B/12B-Unified members of the same family.
- The 31B is the **dense** configuration — an unusual choice in 2026, where nearly every frontier-class open model is MoE — and it is also the one Google gives away for free on AI Studio.
- The base and instruct checkpoints are `google/gemma-4-31b` and `google/gemma-4-31b-it`; the API/Model Studio id is `gemma-4-31b-it`.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — the `google/gemma-4-31b` Hugging Face model card (architecture, licence, cutoff, the full vendor benchmark table), Google's Gemma 4 launch blog, Model Studio / AI Studio, Artificial Analysis (model page with its per-evaluation payload, provider speed table and cost ranking), Vals AI, OpenRouter and models.dev, and negative verification at tbench.ai, ARC Prize, Epoch AI, BenchLM and the live arena leaderboard. The family-composition correction, the date-stamped arena claim and the host-dependent throughput are stated explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_4_31B.md`, using the same headings.
