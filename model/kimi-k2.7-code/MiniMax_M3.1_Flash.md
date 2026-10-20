# Kimi K2.7 Code — findings by MiniMax M3.1 Flash

- Source: Moonshot AI (`kimi-k2.7-code`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot 2026 年 6 月的**编程特化 agentic 模型** —— "Kimi K2.7 Code is a coding-focused agentic model built upon Kimi K2.6"，在 K2.6 的 1T/32B-active MoE 架构上做后训练，"reducing thinking-token usage by approximately 30% compared with Kimi K2.6"。**Modified MIT 开权重**，通过 Kimi Code 计划（`https://api.kimi.ai/coding/v1`）以 `kimi-for-coding-highspeed` 暴露。Vals AI 测得它是 **SWE-bench Verified 开放权重第一（78.20%）**。
- **Provider / access:** Moonshot API `kimi-k2.7-code`（及 `kimi-k2.7-code-highspeed`）；Hugging Face `moonshotai/Kimi-K2.7-Code`（107,768 次下载/月）；AA slug `kimi-k2-7-code`；OpenCode Zen `opencode/kimi-k2.7-code`。
- **Release / knowledge:** released **2026-06-12**（AA "released on June 12, 2026"）。Knowledge cutoff: **未公布**。
- **IDs:** `kimi-k2.7-code` / `kimi-k2.7-code-highspeed`（Moonshot）、`moonshotai/Kimi-K2.7-Code`（HF）。
- **Context window:** **256K**（262,144；OpenRouter `context_length` 262,144）。
- **Modalities:** 文本+图像+视频 → 文本（MoonViT 400M 视觉塔）。
- **Reasoning controls:** **不支持 non-thinking 模式**（"Kimi K2.7 Code does not support non-thinking mode"）；`preserve_thinking` 强制开启；温度固定 1.0 / top_p 0.95；`max_tokens` 默认 32k。
- **Pricing (as of 2026-10-19, per 1M tokens):** 输入 **$0.95**、输出 **$4.00**、cache hit **$0.19**（80% 折扣）；highspeed 变体 $1.90 / $8.00。**K2 系列无 TTL cache-write 档**（K3 才有）。限速按账户档位：Tier0–5（RPM 3→300，TPM 0.5M→5M，TPD 1.5M 后无限）。
- **Architecture:** MoE 1T 总 / 32B 激活，61 层（1 稠密），384 专家（8 选中 + 1 共享），MLA，MoonViT 400M，词表 160K，原生 INT4，**Modified MIT**。

### Raw benchmarks found

> 厂商卡片数字标为 "vendor"；Artificial Analysis、Vals AI、BenchLM（转引 Epoch AI）为独立来源。

Coding (vendor card, Kimi K2.7 Code vs K2.6):

- **Kimi Code Bench v2 62.0**（K2.6 50.9）；**Program Bench 53.6**（48.3）；MLS Bench Lite 35.1（26.7）；Kimi Claw 24/7 **46.9**（42.9）；**MCP Atlas 76.0**（69.4）；**MCP Mark Verified 81.1**（72.8）
- 同卡对照列（GPT-5.5 / Opus 4.8）：Kimi Code Bench 69.0 / 67.4，Program Bench 69.1 / 63.8，MLS Bench Lite 35.5 / 42.8，Kimi Claw 52.8 / 50.4，MCP Atlas 79.4 / 81.3，MCP Mark 92.9 / 76.4

Agent / tool use:

- Terminal-Bench 2.1: **67.42%** (AA) / **67.04%** (Vals, "#1 open-weight model on … Terminal-Bench 2.1")
- Terminal-Bench 4.0: **1.01%** (AA)；Terminal-Bench 2.0-Hard 44.70% (AA)
- τ²-bench Telecom **90.06%** (AA)；τ-bench banking 20.21% (AA)；AutomationBench 24.45% (AA)；GDPval-AA Elo **1037.51** (AA, normalized 26.9%)
- 无 Claw-Eval / Toolathlon / MCP-Atlas 独立行（MCP Atlas 76.0 来自厂商卡）

Reasoning / knowledge:

- GPQA-D **89.60%** (AA)；HLE **35.03%** (AA)；SciCode 47.80% (AA)；CritPt **10.0%** (AA)；AA-LCR 79.33% (AA)；IFBench 63.13% (AA)
- FrontierMath v2: T1–3 **54.035%**、T4 **12.195%**（Epoch AI, via BenchLM）
- Omniscience index **-10.22** / accuracy **39.57%** / hallucination **82.38%** (AA)
- Artificial Analysis Intelligence Index: **26** (25.81, #29/121)，**58.8 t/s** (#52/78)，TTFT 2.93s，**$0.54/task**，120M output tokens，256k ctx；OpenRouter 内嵌：coding index 60.8、agentic 21.0

Independent (Vals AI): avg accuracy 49.99%；**SWE-bench 78.20%**（"#1 open-weight model on SWE-bench Verified"）；LiveCodeBench 82.05% (#8 open-weight)；Vibe Code Bench 47.21% (#3 open-weight)；Code Migration 25.39%；SkillsBench 50.04%；ProgramBench **0.00%**；TB 2.1 67.04%

BenchLM: 49.35（#103/956）；OpenHarmony 52.1%；CursorBench 3.2 49.7%；Design Arena 1265

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 76/100.** MCP Atlas **76.0%** (vendor), MCP Mark Verified **81.1%** (vendor), Kimi Code Bench v2 **62.0** (vendor, vs K2.6's 50.9), Terminal-Bench 2.1 67.42% (AA) / 67.04% (Vals), τ²-bench Telecom 90.06%, Kimi Claw 46.9%, AutomationBench 24.45%, GDPval-AA 1037.51. Capped by the rubric's anchors (τ3 ~50%+ → 20.21%; GDPval ~1750+ → 1037.51), by Terminal-Bench 4.0 at **1.01%**, and by the absence of any Toolathlon / Claw-Eval / MCP-Atlas independent row.
- **Reasoning: 78/100.** GPQA-D 89.60%, FrontierMath v2 54.035% (T1–3), AA-LCR 79.33%, IFBench 63.13%, SciCode 47.80%, Kimi Code Bench 62.0 / Program Bench 53.6 (vendor). Capped by HLE at 35.03%, CritPt 10.0%, FrontierMath Tier 4 at **12.195%**, the AA Intelligence Index of **26** (under the rubric's 60+ anchor), and by the negative Omniscience index (-10.22) with an 82.38% hallucination rate at 39.57% accuracy.
- **Context window: 88/100.** 262,144 tokens with a 32k default output — the rubric's 200K–500K band (65–84) for the window, with Kimi Code Bench and MCP Mark evidence of sustained multi-step tool use. One point below because **no retrieval measurement exists** (no MRCR / RULER / GraphWalks) and because the default 32k output is well under the 64k line.
- **Multimodal: 80/100.** Text + image + video in, text out, with a 400M MoonViT vision tower and the vendor's own visual-agent rows (Kimi Claw 24/7 46.9%). The rubric's "+video/PDF = 75–90" band is met near its lower end; no published MMMU-Pro or vision-only row exists for this model, so the score leans on the modality support plus the agentic-vision evidence.
- **Coding: 80/100.** **SWE-bench 78.20%** (Vals, #1 among open-weight models), Terminal-Bench 2.1 67.04–67.42%, LiveCodeBench 82.05%, Kimi Code Bench v2 62.0, Program Bench 53.6, MLS Bench Lite 35.1, FrontierMath v2 54.035%. Capped by Terminal-Bench 4.0 at 1.01%, by ProgramBench at 0.00% on Vals' harness, by SciCode 47.80%, and by the absence of any DeepSWE, SWE-bench Pro, FrontierCode or CursorBench row.
- **Cost efficiency: 84/100.** The evaluated route is **$0.95 in / $4.00 out** with a **$0.19 cache read** (80% discount) — inside the rubric's "~$1.25/$4.25 ≈ 88" band on input and below it on output, hence roughly 84. Artificial Analysis measures **$0.54 per Index task**; the highspeed route is $1.90/$8.00. The deductions are the 2× highspeed tier and the Kimi Code plan's point-based quota, which is the real cost of access for most users.
- **Overall Score: 80.4/100.** (76 + 78 + 88 + 80 + 80) / 5 = 80.4 — best-fit: **开放权重里的 SWE-bench 冠军**（78.2%，Vals 口径）、MCP Atlas 76.0、MCP Mark 81.1，且比 K2.6 少用约 30% thinking token —— 适合预算敏感的编程 agent；但 Terminal-Bench 4.0 仅 1.01%、HLE 35%、FrontierMath T4 12.2%、幻觉率 82.4%，说明它是**会写代码的模型**而非**会推理的模型**。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **ProgramBench — 53.6% (vendor card) vs 0.00% (Vals AI).** The most extreme conflict in this batch; the vendor harness and Vals' harness are not comparable, and both are quoted.
2. **SWE-bench — 78.20% (Vals, "#1 open-weight")** is the only *independent* figure for the model's headline coding claim, and it is high.
3. **Agentic Index — 21.0 (OpenRouter) vs 22.5 (BenchLM).**
4. **GDPval-AA Elo — 1037.51 (AA) vs 1114 (per BenchLM's citation).**
5. **AA index 26 (25.81) for K2.7 Code vs 26.98 for K2.6** — i.e. the coding-specialised fine-tune is *not* above its own base on AA's composite, even though it wins on the vendor's coding benchmarks and on SWE-bench (Vals).
6. **No independent Terminal-Bench 4.0, ARC Prize, LMArena or swebench.com row** (the tbench.ai board renders client-side, LMArena 403), and the Epoch AI numbers are BenchLM-relayed.
7. **Knowledge cutoff, the exact K2.7→K2.6 training method (distillation is not stated) and the Kimi Code quota limits are all unpublished** — recorded as gaps rather than estimated.

### Notes on identity

- `kimi-k2.7-code` is a **post-K2.6 fine-tune of the same architecture** (1T/32B, 61 layers, 384 experts, MLA, MoonViT), *not* a derivative of Kimi K3 (2.8T, KDA attention, July 2026, $3/$15, 1M context) — the lineage matters because the two are easy to confuse in the catalogue.
- The **highspeed** id (`kimi-k2.7-code-highspeed`, exposed as `kimi-for-coding-highspeed` on the Kimi Code plan) is the same weights on a faster serving route at 2× the price, and is gated to "Allegretto / Pro members and above".
- It is **not available on the GLM-style Coding Plan of other vendors**, and it has no `reasoning_effort` control at all — only an always-on thinking mode with `preserve_thinking`.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — the `moonshotai/Kimi-K2.7-Code` Hugging Face card (architecture, licence, the vendor benchmark table), Moonshot's Kimi Code documentation and pricing/limits pages, Artificial Analysis (model page with its per-evaluation payload), Vals AI, the BenchLM evidence ledger (including the Epoch AI FrontierMath rows), OpenRouter, and negative verification at ARC Prize, LMArena, swebench.com and tbench.ai. The ProgramBench conflict and the K2.7-vs-K2.6 index inversion are called out explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.7_Code.md`, using the same headings.
