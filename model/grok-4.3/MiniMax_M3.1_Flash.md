# Grok 4.3 — findings by MiniMax M3.1 Flash

- Source: xAI / SpaceXAI (`grok-4.3`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI 的 2026 年 4 月模型 —— **1M 上下文 + 全家族最便宜的缓存价（$0.20）+ 唯一支持 Batch 20% 折扣的 Grok 档**（$1.25 / $0.20 / $2.50）。它是 Grok 4.5/4.6/4.7 之前的那一代：能力明显更低（AA 智能指数 24.9，Terminal-Bench 4.0 为 **0%**），但**性价比与吞吐**（94.0 t/s、AA 成本 $0.21/task 全场最低一档）依然可圈可点。无厂商 launch blog（404），因此其公开记录几乎全来自独立追踪器。
- **Provider / access:** xAI API `grok-4.3`（别名 `grok-4.3-latest`）于 `https://api.x.ai/v1`；OpenRouter `x-ai/grok-4.3` 与 `x-ai/grok-4.3:batch`（创建于 2026-04-30；**`x-ai/grok-4.3-20260430` 404**）；OpenCode Zen `opencode/grok-4.3`。
- **Release / knowledge:** released **2026-04-30**（AA / OpenRouter / Vals "Grok 4.3 Released"）；grok.com release notes 显示 2026-04-21 有 beta。Knowledge cutoff: **未公布**。
- **IDs:** `grok-4.3`（x.ai API）、`x-ai/grok-4.3`（OpenRouter）、`opencode/grok-4.3`（Zen）。
- **Context window:** **1,000,000**（Vals 记 1M；与 4.5/4.6/4.7 的 500K 不同）。
- **Modalities:** 文本+图像 → 文本。
- **Reasoning controls:** efforts none / low / medium / high / xhigh，**默认 `low`** —— 与同代 4.5/4.6/4.7 的默认 high 不同。
- **Pricing (as of 2026-10-19, per 1M tokens):** <200k **$1.25 in / $0.20 cached / $2.50 out**；≥200k **$2.50 / $0.40 / $5.00**。**"Batch API requests are billed at a 20% discount to standard rates"**（OpenRouter batch: $1.00 / $0.16 / $2.00）；Priority 2×；web search $5/1k calls。
- **Rate limits:** 37 rps、1,800 rpm、10,000,000 tpm；区域 us-east-1、eu-west-1、us-west-2。
- **Architecture:** proprietary，闭源；参数量未披露。

### Raw benchmarks found

> **没有厂商 launch blog**（`/news/grok-4-3` 与 `/news/grok-4-3-release` 均 404），因此以下全部来自独立追踪器：Vals AI、Artificial Analysis、Epoch AI（经 BenchLM 转发）、BenchLM。

Agent / tool use:

- Terminal-Bench 2.1: **41.95%** (Vals, #66/75) / **39.70%** (AA) / 41.9%（经 BenchLM）
- Terminal-Bench 4.0: **0%** (AA)；Terminal-Bench-Hard **37.88%** (AA)
- τ²-bench **97.66%** (AA)；τ³-banking **12.37%** (AA)；AutomationBench **1.38%** (AA)；APEX-Agents **17.04%** (AA)
- GDPval-AA **937.89 Elo** (AA)；Gert Labs **43.86%**；ResearchClawBench **12.4%**；OSWorld 2.0 / BrowseComp / MCP-Atlas / Toolathlon / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.10%** (AA) / **91.41%** (Vals, #22/138)
- HLE **37.21%** (AA)；LCR **73.0%** (AA)；IFBench **81.29%** (AA)；SciCode **48.26%** (AA)；CritPt **8.0%** (AA)；MMLU-Pro **85.84%** (Vals) / 85.8%（经 BenchLM）；MMMU-Pro **78.09%** (AA) / 83.06% (Vals)
- Artificial Analysis Intelligence Index: **24.88**（**#124 / 217**），94.0 t/s (#77/186)，TTFT 21.42s，**$0.21/task**（#8/114 —— 全 AA 成本榜最便宜档），87M output tokens (#59/116)
- Omniscience index 17.98 / accuracy **34.78%** / hallucination **25.76%** (AA)
- FrontierMath v2 (Epoch AI): T1–3 **42.807%**，T4 **14.634%**；ARC-AGI / AIME: **no verified public score found**（`arcprize.org/results/xai-grok-4-3` → 404）

Coding:

- SWE-bench **71.40%** (Vals, #57/88)；LiveCodeBench **84.49%** (Vals, #39/143)；Terminal-Bench 2.1 41.95%；Vibe Code Bench **19.40%** (Vals)
- **无 SWE-bench Pro、无 DeepSWE、无 Terminal-Bench 4.0 独立行、无 FrontierCode、无 FrontierSWE、无 CursorBench**

Long context:

- **无 MRCR / RULER / GraphWalks 公布。** 1M 窗口（本家族唯一）。

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 58/100.** Terminal-Bench 2.1 **41.95%** (Vals) / 39.70% (AA), Terminal-Bench 4.0 **0%**, AutomationBench **1.38%**, APEX-Agents 17.04%, ResearchClawBench 12.4%, τ³-banking 12.37%, τ²-bench 97.66% (the one standout), GDPval-AA 937.89 Elo, Gert Labs 43.86%. Capped by the rubric's mid band (TB2.1 45–60% → met at the bottom; τ3 10–25% → met; GDPval 900–1200 → met) but every anchor sits at its floor, with Terminal-Bench 4.0 at literally zero.
- **Reasoning: 72/100.** GPQA Diamond 90.10–91.41%, MMLU-Pro 85.84%, FrontierMath v2 42.807% (T1–3) / 14.634% (T4), IFBench 81.29%, LCR 73.0%, HLE 37.21%, CritPt 8.0%, and an AA Intelligence Index of **24.88 (#124/217)**. Capped by that index, by FrontierMath Tier 4 at 14.63%, by CritPt 8.0%, and by the absence of any ARC-AGI or AIME measurement.
- **Context window: 95/100.** **1,000,000** tokens with a 1M max output (Vals) — the rubric's top tier (≥1M = 95–100) with a very large output cap, and **the only 1M-context model in the Grok family** (4.5/4.6/4.7 are 500K). One point below only because **no long-context retrieval measurement exists** and its agentic-terminal numbers show the model does not use that window well.
- **Multimodal: 70/100.** Text + image in, text out — the rubric's "+image in = 60–70" band — with MMMU-Pro 78.09% (AA) / 83.06% (Vals) as the only vision row. The band is met at its top; no video or audio input is documented.
- **Coding: 62/100.** SWE-bench 71.40%, LiveCodeBench 84.49%, Terminal-Bench 2.1 41.95%, Vibe Code Bench 19.40%, SciCode 48.26%. Capped by Terminal-Bench 4.0 at **0%** and Terminal-Bench 2.1 at ~42%, by Vibe Code Bench 19.40%, and by the absence of any DeepSWE, SWE-bench Pro, FrontierCode, FrontierSWE or CursorBench number.
- **Cost efficiency: 92/100.** The evaluated route is xAI's API / OpenRouter at **$1.25 in / $2.50 out** per 1M with a **$0.20 cached read** (84% discount) — and, uniquely in this family, **Batch at a 20% discount** ($1.00/$2.00 on OpenRouter). The rubric's anchors (~$0.60/$2.20 ≈ 92) fit almost exactly, and Artificial Analysis measures **$0.21 per Index task (#8 of 114 — the cheapest cost class in the catalogue**). The only deduction is the ≥200K doubling to $2.50/$5.00.
- **Overall Score: 71.4/100.** (58 + 72 + 95 + 70 + 62) / 5 = 71.4 — best-fit: the **Grok 家族的廉价 1M-上下文档** — 94.0 t/s、$0.21/task、Batch -20%、缓存 $0.20，推理端（GPQA 90.1%、MMLU-Pro 85.8%）仍可看 —— 但 agentic 端几乎不可用（Terminal-Bench 4.0 = 0%、AutomationBench 1.4%），适合高吞吐分类/抽取/轻量代理，不适合自主 agent 或长程编程。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **No vendor material at all** — xAI's launch pages for Grok 4.3 both 404, so every number here is third-party; there is no "Anthropic-style" system card to cross-check against.
2. **The AA index 24.88 is mis-transcribed by BenchLM**, which lists "Artificial Analysis Intelligence Index 37.6" for this model — 37.6 is in fact AA's **Omniscience Index** for Grok 4.3, not the intelligence composite. The AA page value (24.88) is used and the mislabel is recorded.
3. **MMMU-Pro — 78.09% (AA) vs 83.06% (Vals); LCR 73.0% (AA) vs 64.3% (OpenRouter, via BenchLM).** Different harness passes.
4. **Terminal-Bench 2.1 — 41.95% (Vals) vs 39.70% (AA) vs 41.9% (BenchLM)** — all agree on ~40–42%.
5. **Terminal-Bench 4.0 at exactly 0%** is an AA measurement; no official-board row exists (the tbench.ai table is client-rendered) and Vals does not publish a 4.0 row for this model, so the zero rests on one source.
6. **Default effort differs from the rest of the family** — Grok 4.3 defaults to **low**, while 4.5/4.6/4.7 default to high — a material difference when comparing "the Grok 4.3 number" with the later models' numbers.
7. **Batch is the only discount route in the family** (20% off, $1.00/$2.00) — worth noting for bulk workloads, and it is absent from 4.5/4.6/4.7.
8. **No ARC-AGI, AIME, LMArena or swebench.com row exists for Grok 4.3**, so the reasoning and coding scores rest on Vals, AA and BenchLM only.

### Notes on identity

- `grok-4.3` is a distinct model from `grok-4.5` (July 2026), `grok-4.6` (August), `grok-4.7` (September), `grok-4.20`, `grok-4.1-fast` and `grok-build-0.1` (256K, $1/$2).
- Within the family it is uniquely positioned: **1M context (the only Grok with 1M)**, **Batch-eligible with a 20% discount (the only Grok in this set)**, **the cheapest cache read ($0.20)**, and **the lowest default reasoning effort (low)**.
- There is **no `x-ai/grok-4.3-20260430` route** (404) — the un-dated id plus the `:batch` variant are the only OpenRouter paths.
- `grok-build-0.1` remains the only remaining "fast"-aliased line (`grok-code-fast-1` per the retired-alias record), and it has **no published benchmark scores at all**.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — xAI's model, pricing, rate-limit and reasoning documentation (including the embedded catalogue JSON), the absence of any Grok 4.3 launch post (404 on both candidates), Artificial Analysis (model page with its per-evaluation payload), Vals AI, Epoch AI via the BenchLM ledger, the BenchLM evidence ledger, OpenRouter's API, and negative verification at ARC Prize, swebench.com, LMArena and the official Terminal-Bench board. Vendor-vs-independent gaps — the BenchLM index mislabel and the harness spreads — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.3.md`, using the same headings.
