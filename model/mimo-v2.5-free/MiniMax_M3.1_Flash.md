# MiMo-V2.5-Free — findings by MiniMax M3.1 Flash

- Source: OpenCode Zen (`opencode/mimo-v2.5-free`) — free route of **MiMo-V2.5**
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Free (free route of **MiMo-V2.5**)
- **Short description:** 小米 MiMo-V2.5 的**免费路由**（2026-04-22 发布，2026-04-24 上架 Zen）—— 底层是 **MiMo-V2.5 基础版（310B 总 / 15B 激活，MIT）**，原生文本/图像/视频/音频，**不是** Pro 版（Pro 为纯文本、$0.435/$0.87）。免费路由的定位是"限时收集反馈"，**明确不属于零保留**例外名单。
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free`（`https://opencode.ai/inference/openai/v1/chat/completions`，定价 Free / Free / Free）；小米官方 API `mimo-v2.5`（$0.14/$0.28）；Hugging Face `XiaomiMiMo/MiMo-V2.5`（MIT）。
- **Release / knowledge:** 模型 **2026-04-22**（小米博客 "MiMo-V2.5" — "A leap in agency and multimodality"）；Zen 免费路由 **2026-04-24**。Knowledge cutoff: **小米未公布**（仅 models.dev 记 2024-12）。
- **IDs:** `mimo-v2.5-free`（Zen）、`mimo-v2.5`（小米 API / models.dev）、`xiaomi/mimo-v2.5`（OpenRouter）。
- **Context window:** **免费路由 200,000 / max output 32,000**（models.dev）；付费路由 **1M / 128,000**。
- **Modalities:** 输入 文本+图像+视频+音频 → 输出 文本。
- **Reasoning controls:** `thinking.type` enabled/disabled；`tool-call-parser mimo`；`enable_thinking`。
- **Pricing (as of 2026-10-19):** **Free / Free / Free**（Zen）。付费同权重 $0.14 in / $0.28 out（cache hit $0.0028，98% 折扣）。
- **Availability / data use:** "MiMo‑V2.5 Free is available on OpenCode for a limited time. The team is using this time to collect feedback and improve the model."，并且在 Zen 的零保留例外名单中明确列出："During its free period, collected data may be used to improve the model."
- **Architecture:** MoE 310B 总 / 15B 激活，约 48T tokens 预训练，原生多模态（1M 上下文，Base 256K），SWA+GA 5:1 混合注意力 + MTP×3，729M ViT + 261M 音频编码器，MIT 许可。

### Raw benchmarks found

> 小米博客与 HF eval export 标为 "vendor"；Artificial Analysis 为独立测量。**免费路由本身没有任何专属评测。**

Underlying MiMo-V2.5 (vendor):

- Claw-Eval general **62.3**（小米博客原文："On Claw‑Eval, a benchmark for daily agentic tasks, MiMo‑V2.5 achieves a 62.3 on the general subset"）
- HF eval export：SWE-bench Pro **56.1**；Terminal-Bench 2.0 **65.8**；Claw-Eval General / Multimodal / Multi-Turn **62.1 / 23.8 / 63.2**（Pass³, N=3；161/101/38 任务）；ResearchClawBench Overall **16.91**
- 小米 Pro 对照：ClawEval Pass³ 64%、每轨迹约 70K token；SysY-Rust 编译器 233/233、672 次工具调用、4.3 小时

Independent:

- **Artificial Analysis:** Intelligence Index **22** (#48/121)，**37.3 t/s** (#75/78)，TTFT 4.12s，**$0.14 / $0.28**（cache 折扣 98%，$0.02），**$0.02/task**，95M output tokens；per-eval：TB 2.1 **63.67%**、**TB 4.0 0%**、TB-Hard 41.67%、τ² 90.64%、τ³ 8.66%、SciCode 43.87%、LCR 73.0%、HLE 27.20%、GPQA 84.95%、CritPt 3.71%、MMMU-Pro 75.43%、AutomationBench **18.43%**、GDPval **997.19 Elo**、Omniscience -9.83 / acc 16.75% / halluc 31.93%
- **无 BenchLM、Vals AI、tbench.ai 行**

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). **Scoring basis note:** the free route has no benchmark of its own; the capability scores are the underlying MiMo-V2.5's, and the two route-level differences — a 200K/32K window instead of 1M/128K, and the data-use caveat instead of zero retention — are applied to the Context and Cost lines.

- **Tool use: 68/100.** Claw-Eval general **62.3%** (vendor) with the 62.1 / 23.8 / 63.2 general-multimodal-multi-turn split, Terminal-Bench 2.0 **65.8%** (vendor) / 63.67% (AA), SWE-bench Pro 56.1%, ResearchClawBench 16.91%, τ³-banking 8.66%, AutomationBench 18.43% (AA). Capped by the rubric's anchors (TB2.1 ~88%+ → 63.7–65.8%; τ3 ~50%+ → 8.66%; GDPval ~1750+ → 997.19) and by the absence of any Toolathlon, MCP-Atlas or independent Claw-Eval row.
- **Reasoning: 70/100.** An AA Intelligence Index of **22 (#48/121)**, GPQA 84.95%, MMLU/τ² 90.64%, LCR 73.0%, MMMU-Pro 75.43%, and ClawEval 62.3% (agentic, not academic). Capped by HLE at 27.20%, CritPt 3.71%, the very low **16.75% Omniscience accuracy** (hallucination 31.93% is comparatively good), and by the absence of any FrontierMath, AIME or ARC-AGI measurement.
- **Context window: 74/100.** The free route serves **200,000 tokens with a 32,000 max output** — squarely the rubric's 200K–500K band (65–84) — against the paid route's 1M/128K. The underlying model is stronger than the route: the 1M window with TB 2.1 at 63.67% is the paid configuration, so the score is anchored on what a free-tier caller actually gets.
- **Multimodal: 86/100.** Native text+image+video+audio input with text out, a 729M ViT and a 261M audio encoder, plus the Claw-Eval multimodal subset at 23.8% and MiMo VisualCoding 71.5% on the Pro sibling. The rubric's "+audio in = 90–100" band is met in its lower half because the strongest vision row for this model (multimodal Claw-Eval 23.8%) is weak and the richer vision numbers belong to MiMo-V2.6.
- **Coding: 74/100.** Terminal-Bench 2.0 **65.8%** (vendor) / 63.67% (AA), SWE-bench Pro 56.1%, SciCode 43.87%, FrontierCode: 未列, DeepSWE: 未列, and **Terminal-Bench 4.0 at 0%** (AA). Capped by the absence of any DeepSWE, SWE-bench Verified, FrontierCode, FrontierSWE or CursorBench row, and by Terminal-Bench 4.0 at zero.
- **Cost efficiency: 96/100.** The evaluated route is **Free / Free / Free** on OpenCode Zen — the rubric's "$0 = 100" anchor. The deduction is the one that matters: Zen's privacy section lists MiMo-V2.5-Free among the routes where "During its free period, collected data may be used to improve the model" — **no zero-retention guarantee** — and the promotion has no published end date, while the durable paid price for the same weights is $0.14/$0.28 with a $0.0028 cache read (AA: $0.02 per Index task, #3 of 8 in its class). A $0 price that is explicitly a feedback window, with a data-consent clause, is not the same product as a permanent free tier.
- **Overall Score: 74.4/100.** (68 + 70 + 74 + 86 + 74) / 5 = 74.4 — best-fit: 一个**极便宜的全模态（文本/图像/视频/音频）开放权重模型**的免费通道（MT 310B/15B 激活、MIT、$0.14/$0.28 付费价），适合大批量多模态抽取与轻量 agent；代价是 200K 窗口、Terminal-Bench 4.0 为 0%、知识可靠性弱（Omniscience accuracy 16.75%），以及免费期"数据可用于改进模型"的条款。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Route status — Zen's docs still list MiMo-V2.5 Free as available, while models.dev marks the id `status: deprecated`.** The vendor's own listing wins; the deprecation marker is recorded.
2. **Context/output — the free route's 200,000/32,000 vs the underlying model's 1M/128K on the paid route.** Both are stated; the free limits govern this entry's Context score.
3. **Release date — 2026-04-22 (Xiaomi blog) vs 2026-04-24 (models.dev free row).**
4. **AA's deprecation notice points at MiMo-V2.6-Pro**, i.e. the whole V2.5 line is superseded.
5. **Pricing formatting — AA prints the Pro price as $0.43 vs models.dev/OpenRouter $0.435.**
6. **Knowledge cutoff "2024-12" appears only on models.dev**; Xiaomi publishes none, and the API's default system prompt still carries the generic "December 2024" placeholder.
7. **Xiaomi's benchmark tables are images** — only Claw-Eval 62.3 is available as prose — and **no independent tracker has a MiMo-V2.5 row at all** (no BenchLM, no Vals, no tbench.ai), so the evidence base is the vendor's own evals plus AA's index.
8. **Free route identity** rests on models.dev's modality description matching the paid base route rather than the Pro — the Pro is text-only at a different price, so the free route cannot be serving it.

### Notes on identity

- `mimo-v2.5-free` is the **free OpenCode Zen route of MiMo-V2.5 (base, omni)**, not of MiMo-V2.5-Pro, and not a distinct model. The Pro sibling is `model/mimo-v2.6-pro/`'s predecessor generation with 309B/15B... no: Pro is the larger, text-only, $0.435/$0.87 member of the V2.5 family.
- Like `model/mimo-v2.6-free/` (the V2.6 Flash free route), this is a **promotion rather than a tier**: the durable economics are the paid $0.14/$0.28 route, and the free route additionally halves the window.
- Xiaomi's V2.5 line is the base of the V2.6 generation (Pro/Flash), which the dataset tracks separately.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenCode Zen's model and pricing tables and its privacy/zero-retention exceptions, models.dev's `opencode` provider row (route limits, status, cost), Xiaomi's MiMo-V2.5 launch blog and the `XiaomiMiMo/MiMo-V2.5` Hugging Face card and eval export, Artificial Analysis (model page with its per-evaluation payload), and negative verification at BenchLM, Vals AI, tbench.ai, swebench.com and LMArena. The free-route identity, its caps and its data-use clause are stated explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2.5_Free.md`, using the same headings.
