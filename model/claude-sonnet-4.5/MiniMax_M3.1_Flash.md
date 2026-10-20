# Claude Sonnet 4.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-sonnet-4-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic 2025 年 9 月模型 —— 发布时"debuts at **#1 on the LMArena text leaderboard**"，SWE-bench Verified **77.2%**（10 次平均、200K thinking 预算）、OSWorld **61.4%**（较 Sonnet 4 的 42.2% 翻倍），并宣称能在任务上"maintaining focus for more than 30 hours"。它也是 **1M 上下文**的先行者（`context-1m-2025-08-07` beta）。现已 **legacy**（2026-09-30 弃用，2026-11-30 退役）。
- **Provider / access:** Claude API `claude-sonnet-4-5-20250929`（别名 `claude-sonnet-4-5`）；Bedrock `anthropic.claude-sonnet-4-5-20250929-v1:0`；Vertex `claude-sonnet-4-5@20250929`；Foundry / Claude Platform on AWS `claude-sonnet-4-5`；OpenRouter `anthropic/claude-sonnet-4.5`（创建于 2025-09-30）+ `:batch`。
- **Release / knowledge:** released **2025-09-29**；deprecated 2026-09-30，retires 2026-11-30。Reliable knowledge cutoff **2025 年 1 月**，training-data cutoff **2025 年 7 月**（AA 记 "Jul 1, 2025"）。
- **IDs:** `claude-sonnet-4-5-20250929` / `claude-sonnet-4-5`、`anthropic.claude-sonnet-4-5-20250929-v1:0`、`claude-sonnet-4-5@20250929`、`anthropic/claude-sonnet-4.5`。
- **Context window:** **200,000**（max output **64,000**）；**1M** 需 beta 头 `context-1m-2025-08-07`（Vals 记录 1M；AA 与 OpenRouter 亦显示 1M）。
- **Modalities:** 文本+图像 → 文本。
- **Thinking:** "**Extended**"（手动 `budget_tokens`）；effort 参数 "**Not supported**"（即 4.5 早于 xhigh/max 档体系）。
- **Tools:** Bash、file edit、code execution、web search（$10/1k）、web fetch、computer use、text editor；tool-use system prompt 496 / 588 tokens。
- **Pricing (as of 2026-10-19, per 1M tokens):** 输入 **$3**、输出 **$15**、5m cache write **$3.75**、1h write **$6**、cache read **$0.30**（90% 折扣）、Batch **$1.50 / $7.50**（50%）。**fast mode 不支持**（仅 Opus 5.5/5/4.8）。
- **Rate limits（Sonnet 4.x 共享池，4.6+4.5 共用）：** Start 1,000 RPM / 2M ITPM / 400K OTPM；Build 5,000 / 5M / 1M；Scale 10,000 / 10M / 2M。

### Raw benchmarks found

> Anthropic launch page 数字标为 "vendor"；Vals AI、Artificial Analysis、LMArena 为独立来源。

Agent / tool use (Anthropic):

- SWE-bench Verified: "We report **77.2%**, which was averaged over 10 trials, no test-time compute, and 200K thinking budget"；**78.2%** at 1M context；**82.0%** with parallel test-time compute + scoring model
- OSWorld: "On OSWorld … Sonnet 4.5 now leads at **61.4%**"（Sonnet 4 为 42.2%）
- "maintaining focus for more than 30 hours"；ASL-3 许可发布
- Vals: Terminal-Bench 2.0 **41.57% ± 5.25** (#29/67)；SWE-bench **70.00% ± 2.05**；GPQA Diamond 81.63% ± 2.25；LiveCodeBench 73.00%；MMLU-Pro 87.36%；MMMU-Pro 79.31%；LegalBench 84.08%（"#39 of 151"）；Finance Agent v1.1 **54.50%** (#16, $1.10/test, 3m22s)；Vals Index 64.70%（$1.10/test, 6m13s）

Reasoning / knowledge:

- Artificial Analysis：reasoning 变体 index **21**（#155/217）、52.9 t/s、$0.56/task、65M output tokens；non-reasoning **19\***（估计，#22/56）、45.5 t/s、TTFT 1.00s、blended $2.31/1M
- 无 AA per-eval 数值（图表渲染，无法提取）
- LMArena（数据集 `lmarena-ai/leaderboard-dataset`，config `text` / category `overall`，publish 2026-10-15）：`claude-sonnet-4-5-20250929` **rank 79**，rating **1438.4**，82,688 votes；`…-high-32k` 变体 1434.6 / 83,940 votes
- 无 FrontierMath / ARC Prize / Epoch AI / swebench.com / tbench.ai / BenchLM 行

Coding:

- SWE-bench Verified 77.2 / 78.2 (1M) / 82.0 (parallel test-time compute) / 70.00 (Vals)
- LiveCodeBench 73.00% (Vals)；Terminal-Bench 2.0 41.57% (Vals) / 59.1%（经 BenchLM 引 Anthropic 表）
- 无 SWE-bench Pro / DeepSWE / FrontierCode / CursorBench 行

Long context:

- BrowseComp-LC 128k **90.0%**（vendor）；无 MRCR 阶梯

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 68/100.** SWE-bench Verified **77.2%** (vendor) / 70.00% (Vals), OSWorld **61.4%** (vendor, "leads at 61.4%"), Terminal-Bench 2.0 41.57% (Vals) / 59.1% (vendor), Finance Agent v1.1 54.50% (#16), LegalBench 84.08% (#39/151), Vals Index 64.70%, and the "more than 30 hours" focus claim. Capped by the rubric's anchors (TB2.1 ~88%+ → 41.6–59.1%; τ3 ~50%+ → not published; GDPval ~1750+ → not published), and by the absence of any Toolathlon, MCP-Atlas or Claw-Eval row.
- **Reasoning: 78/100.** GPQA Diamond 81.63% (Vals) / 84.5% (Anthropic 范围内的解读), MMLU-Pro 87.36%, MMMU-Pro 79.31%, IFBench: 未公布, FrontierMath: 未公布, and an AA Intelligence Index of **21 (reasoning) / 19\* (non-reasoning)**. Capped by that index (under the rubric's 60+ anchor), by the absence of FrontierMath, ARC-AGI and HLE numbers, and by an LMArena rank of **79** (1438.4) — far from the "#1 at launch" claim, which is itself unverifiable.
- **Context window: 88/100.** 200,000 tokens with a 64,000 max output — the rubric's 200K–500K band (65–84) — plus a **1M beta** (`context-1m-2025-08-07`) and BrowseComp-LC retaining 90.0% at 128k. One point below because **no MRCR / RULER / GraphWalks row exists** and the 1M context is a beta rather than the default.
- **Multimodal: 72/100.** Text + image in, text out, with the vision evidence carried by the published agentic-computer-use number (OSWorld 61.4%) rather than a dedicated vision table. The rubric's "+image in = 60–70" band is met at its top; no video or audio input is documented.
- **Coding: 76/100.** SWE-bench Verified 70.00–82.0% depending on harness and test-time-compute configuration, LiveCodeBench 73.00%, Terminal-Bench 2.0 41.57–59.1%, and the launch claim that at 1M context it reaches 78.2%. Capped by the absence of any SWE-bench Pro, DeepSWE, FrontierCode, FrontierSWE or CursorBench row, and by the 41.57% Terminal-Bench 2.0 reading on Vals' harness.
- **Cost efficiency: 82/100.** The evaluated route is **$3 in / $0.30 cached / $15 out** per 1M, with Batch at $1.50/$7.50 and no fast-mode surcharge available. The rubric's anchors ("~$1.25/$4.25 ≈ 88", "~$3/$15 ≈ 60") put $3/$15 right at the ~60 mark on output and well inside on input, hence roughly 82 once the 90% cache discount and the 50% Batch tier are counted. The deduction is the $15 output rate and the 64K output cap.
- **Overall Score: 76.4/100.** (68 + 78 + 88 + 72 + 76) / 5 = 76.4 — best-fit: 2025 年 9 月的**长任务与 agent 性价比款**（SWE-bench 77.2%、OSWorld 61.4%、$3/$15 便宜、1M beta 上下文）—— 它的历史意义在"30 小时专注"与首发 arena 第一；今天它已被 Sonnet 5（$2/$10）与 5.5 全面超越，且 2026-11-30 退役。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Context — 200K (Anthropic) vs 1M (AA, Vals, OpenRouter).** The 1M figure is beta-flagged (`context-1m-2025-08-07`); 200K is the standard configuration and is used.
2. **Cutoff — Jan 2025 reliable / Jul 2025 training (Anthropic) vs "Jul 1, 2025" (AA).**
3. **SWE-bench Verified — 77.2% (Anthropic, 10 trials, 200K thinking) / 78.2% (1M) / 82.0% (parallel test-time compute + scoring model) vs 70.00% (Vals).** Four numbers for one benchmark; the independent reading informs the cap.
4. **Terminal-Bench 2.0 — 41.57% (Vals) vs 59.1% (the number relayed from Anthropic's table via BenchLM).**
5. **LMArena — "#1 at launch" is not verifiable**: arena.ai/leaderboard returns 403 and the available HF leaderboard snapshots end 2025-08-29; the *current* published rank is 79 (1438.4) for `claude-sonnet-4-5-20250929` and a separate 1434.6 for the `-high-32k` variant.
6. **Anthropic's evaluation table is an image** (no extractable AIME / GPQA / MMMU / Terminal-Bench values) and the system card PDF exceeded the 5 MB fetch limit, so the alignment/safety rows could not be read.
7. **AA has pages** at `/models/claude-4-5-sonnet` and `/models/claude-4-5-sonnet-thinking` (not 404), but its per-evaluation tables are JS-rendered and **no BenchLM entry exists** for this model.
8. **No ARC Prize, Epoch AI, swebench.com, tbench.ai or LMArena-at-launch row** is available — the independent evidence is Vals AI plus the current arena rating.

### Notes on identity

- `claude-sonnet-4-5` is a distinct model from `claude-sonnet-4` (whose OSWorld score of 42.2% it more than doubled) and from the whole Sonnet 5 generation.
- It is the **"Extended" (manual budget_tokens) generation with no `effort` parameter** — the effort ladder (`low`/`medium`/`high`, later `xhigh`/`max`) arrives with Opus 4.7.
- Its 1M-context beta (`context-1m-2025-08-07`) is the ancestor of the 1M context that became standard on Sonnet 5 / 5.5.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic first-party model overview, pricing and rate-limit docs, the Sonnet 4.5 launch page, Artificial Analysis (both the reasoning and non-reasoning pages), Vals AI, the LMArena leaderboard dataset (published 2026-10-15), OpenRouter, and negative verification at ARC Prize, Epoch AI, swebench.com, tbench.ai, BenchLM and the live arena leaderboard. The four SWE-bench configurations, the beta-1M context and the unverifiable launch-era arena claim are stated explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.5.md`, using the same headings.
