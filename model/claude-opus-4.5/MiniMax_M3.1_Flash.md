# Claude Opus 4.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-opus-4-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic 的 2025 年 11 月模型 —— "Pricing is now $5/$25 per million tokens—making Opus-level capabilities accessible to even more users"，其长上下文与多代理能力是发布重点（BrowseComp-Plus 70.48% → **85.30%** with context+memory techniques；multi-agent search 87.0% vs 74.8%），并首次把 **ARC-AGI-2 做到闭源模型 SOTA（37.6% @64k thinking）**。现在已 **legacy**（被 Opus 4.6 取代）。
- **Provider / access:** Claude API `claude-opus-4-5-20251101`（别名 `claude-opus-4-5`）；Bedrock `anthropic.claude-opus-4-5-20251101-v1:0`；Vertex `claude-opus-4-5@20251101`；Foundry / AWS `claude-opus-4-5`；OpenRouter `anthropic/claude-opus-4.5`（创建于 2025-11-30）。
- **Release / knowledge:** released **2025-11-24**；legacy，retirement "Not sooner than November 24, 2026"。Reliable knowledge cutoff **2025 年 5 月**，training-data cutoff **2025 年 8 月**（AA 记 "Aug 1, 2025"）。
- **IDs:** `claude-opus-4-5-20251101` / `claude-opus-4-5`、`anthropic.claude-opus-4-5-20251101-v1:0`、`claude-opus-4-5@20251101`、`anthropic/claude-opus-4.5`。
- **Context window:** **200,000**；max output **64,000**。
- **Modalities:** 文本+图像 → 文本（Vals：支持 file 输入，不支持 video）。
- **Reasoning controls:** "**Extended**"（手动 `budget_tokens`），默认 effort `high`；4.5 可用档位 low/medium/high（**max 与 xhigh 的列表不含它**）—— "On Claude Opus 4.5, the only extended-thinking-only model that supports effort"。
- **Pricing (as of 2026-10-19, per 1M tokens):** 输入 **$5**、输出 **$25**、5m cache write **$6.25**、1h write **$10**、cache read **$0.50**（90% 折扣）、Batch 50%（$2.50/$12.50）。**fast mode 不支持**（5.5 为 $8/$40，Opus 5/4.8 为 $10/$50）。
- **Rate limits (Opus 4.x 共享池):** Start 1,000 RPM / 2M ITPM / 400K OTPM；Build 5,000 / 5M / 1M；Scale 10,000 / 10M / 2M；消费上限 $500 / $1,000 / $200,000。
- **Architecture:** proprietary，闭源；参数量未披露。

### Raw benchmarks found

> Anthropic system card 数字标为 "vendor"（adaptive thinking、max effort、默认采样、5 次平均）；Vals AI、ARC Prize、LMArena、BenchLM 为独立来源。

Agent / tool use (system card):

- OSWorld **66.26%**（P@1，avg@5）；τ²-bench Retail **88.9%** / Telecom **98.2%**
- BrowseComp-Plus **70.48%** → **85.30%**（context+memory 技术）
- Multi-agent search **87.0%** vs 74.8%（+12.2%）
- Toolathlon: 未列；MCP-Atlas: 未列；Claw-Eval: 未列
- Vals: Terminal-Bench 2.0 **58.43%**（nonthinking）/ **76.40%**（thinking）；Finance Agent v1.1 54.50% (#16)
- BenchLM: Gert Labs 64.23%、JobBench 32.3%、Toolathlon 43.5%、MCP Atlas 42.3%、MCP-Tasks 71.8%、WideResearch 76.4%、Claw-Eval 59.6%、QwenClawBench 52.3%、τ³ 70.2%、CyberGym 50.6%

Reasoning / knowledge:

- GPQA Diamond **87.0%**（vendor）/ 79.55% (Vals) / 81.0%（经 BenchLM 的 AA 归因）
- MMMU **80.72%**（vendor；Vals 82.95% thinking）/ 71.21% (AA non-reasoning)；HLE **13.16%** (AA)；LCR 70.67%；CritPt **0.29%**；τ² 86.26%；Omniscience **-4.13** / accuracy 40.92% / hallucination 76.25%
- AIME25 62.67% (AA)；LiveCodeBench 73.76% (AA)；FrontierMath v2 **34.386% / 4.878%**（Epoch AI, via BenchLM）
- ARC-AGI（ARC Prize 验证，thinking/私有集）：ARC-1 40.0%→**80.0%**（thinking 预算 1K→64K）、ARC-2 7.8%→**37.6%**（64k thinking，$1.47/$2.40 per task）
- Artificial Analysis Intelligence Index: **24\***（non-reasoning，#8/56）与 **21**（reasoning，#155/217）；51.8 t/s，TTFT 1.08s，$5/$25，90% cache 折扣，blended $3.85，200k ctx，cutoff Aug 1 2025，4 providers；AA 页面注 "This model is deprecated."
- LMArena (text)：`claude-opus-4-5 (High, 32K, 20251101)` **rank 42，1474 ±4**（37,509 votes）；`claude-opus-4-5 (20251101)` rank 48，**1470 ±3**（72,899 votes）
- Vals: nonthinking accuracy **66.15%**；thinking **69.57%**（"first on Vals Index, SWE-bench Verified, SAGE"）；RSI 14.82%；MMLU-Pro 85.59%；LegalBench 82.84%；TaxEval v2 74.33%

Coding:

- SWE-bench Verified **80.9%**（vendor；SWE-bench Verified hard subset 21/45）；SWE-bench Pro 57.1%；NL2Repo 43.2%（经 BenchLM）
- Terminal-Bench 2.0 **59.3%**（vendor）/ 58.43%（Vals nonthinking）/ 76.40%（Vals thinking）
- FrontierCode 1.1: 未列；DeepSWE: 未列；LiveCodeBench 73.76% (AA)；Aider Polyglot +10.6% over Sonnet 4.5；Vending-Bench +29% over Sonnet 4.5；at medium effort "matches Sonnet 4.5 on SWE-bench Verified using 76% fewer output tokens"，at top effort "exceeds Sonnet 4.5 performance by 4.3 percentage points"

Long context:

- **无 MRCR / RULER / GraphWalks 公布。** 200K 窗口，64K 输出。

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 74/100.** OSWorld **66.26%**, τ²-bench Retail 88.9% / Telecom 98.2%, BrowseComp-Plus 70.48% → **85.30%** (context+memory), multi-agent search 87.0%, Terminal-Bench 2.0 59.3% (vendor) / 58.43% (Vals) / 76.40% (Vals thinking), Finance Agent v1.1 54.50%, Toolathlon 43.5%, MCP Atlas 42.3%, JobBench 32.3%. Capped by the rubric's anchors (TB2.1 ~88%+ → not published for 2.1; τ3 ~50%+ → 70.2% is met; GDPval ~1750+ → not published), by the absence of any Toolathlon/MCP-Atlas/Claw-Eval *vendor* row, and by the wide 58.43–76.40 Terminal-Bench spread across effort settings.
- **Reasoning: 80/100.** GPQA Diamond 87.0% (vendor) / 79.55% (Vals) / 81.0% (AA), MMMU 80.72–82.95%, FrontierMath v2 **34.386% / 4.878%**, AIME25 62.67%, HLE **13.16%**, CritPt **0.29%**, LCR 70.67%, ARC-AGI-1 80.0% / ARC-AGI-2 37.6% (64k thinking), and an LMArena 1474 Elo (#42). Capped by the AA Intelligence Index of **24\*/21** (under the 60+ anchor), by HLE at 13.16%, CritPt at 0.29%, FrontierMath Tier 4 at 4.878%, and by the **76.25% hallucination rate** at 40.92% accuracy.
- **Context window: 88/100.** 200,000 tokens with a 64,000 max output — the rubric's 200K–500K band (65–84) — raised by the model's own long-context *product* story (BrowseComp-Plus with context+memory 85.30%). One point below because no retrieval measurement exists (no MRCR / RULER / GraphWalks), because the 200K window is small by 2026 standards, and because the 64K output cap is the lowest among the Opus models here.
- **Multimodal: 72/100.** Text + image in, text out, with MMMU 71.21% (AA) / 80.72% (vendor) and OfficeQA-class document results. The rubric's "+image in = 60–70" band is met at its top; no video or audio input is documented.
- **Coding: 76/100.** SWE-bench Verified **80.9%**, SWE-bench Pro 57.1%, Terminal-Bench 2.0 59.3% (vendor), LiveCodeBench 73.76%, NL2Repo 43.2%, Aider Polyglot +10.6% over Sonnet 4.5, and the notable efficiency claim — at medium effort it "matches Sonnet 4.5 on SWE-bench Verified using 76% fewer output tokens". Capped by the absence of any DeepSWE, FrontierCode, FrontierSWE or CursorBench row, and by SWE-bench Pro 57.1% sitting well under the rubric's 74% anchor.
- **Cost efficiency: 48/100.** The evaluated route is **$5 in / $25 out** per 1M with a $0.50 cache read (90% discount) and Batch at 50% — the rubric's anchors run "~$3/$15 = ~60" and "~$10/$50 = ~30", placing $5/$25 between them. Fast mode is unavailable for this model (no $10/$50 escape hatch), and the $10 cache-write price is the most expensive in the dataset.
- **Overall Score: 78.0/100.** (74 + 80 + 88 + 72 + 76) / 5 = 78.0 — best-fit: 2025 年 11 月的**多代理与长上下文研究型旗舰**（BrowseComp-Plus 85.3%、multi-agent search 87.0%、ARC-AGI-2 闭源 SOTA 37.6%、LMArena 1474），但主评测被后续 Opus 4.6/4.7/4.8/5 全面超越，且 $5/$25 的价格与 200K 窗口在 2026 年已不占优。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **SWE-bench Verified 80.9% (Anthropic) vs Vals' "top 2" claim** and swebench.com not retrievable; Terminal-Bench 2.0 59.3% (Anthropic) vs 58.43% (Vals nonthinking) vs 76.40% (Vals thinking).
2. **GPQA Diamond — 87.0% (Anthropic) vs 79.55% (Vals) vs 81.0% (AA).**
3. **MMMU — 80.72% (Anthropic) vs 82.95% (Vals thinking) vs 71.21% (AA non-reasoning).**
4. **Context — 200K (Anthropic) vs 1M (AA / Vals / OpenRouter).** The 1M figure comes from a beta header and is not the standard configuration; 200K is used.
5. **Cutoff — May 2025 reliable / Aug 2025 training (Anthropic) vs "Aug 1, 2025" (AA).**
6. **Three different "index" scales** — AA 24\* (non-reasoning estimate) vs AA 21 (reasoning) vs BenchLM 54.05 vs Vals 66.15/69.57 — are not comparable; only AA's numbers enter the rubric.
7. **No verified LMArena rank at launch** — arena.ai returns 403 and the available HF dataset snapshots end 2025-08-29, so the widely repeated "#1 on the arena" claim for Sonnet/Opus 4.5-era models is **not verifiable**; the current published rank is 42/48.
8. **Anthropic's evaluation table is an image** (no extractable AIME/GPQA/MMMU/Terminal-Bench values), the system-card PDF exceeded the fetch limit, and **no ARC Prize, Epoch AI, swebench.com, tbench.ai or BenchLM row could be verified directly** — several numbers above are BenchLM-attributed.

### Notes on identity

- `claude-opus-4-5` is a distinct model from `claude-opus-4-6`, `-4-7`, `-4-8` and `claude-opus-5`; each generation publishes a comparison column against its predecessor.
- It is the **only "extended-thinking-only" model in this dataset that still supports the `effort` parameter**, and it predates the `xhigh` level (introduced with Opus 4.7).
- The 200K / 64K window and $5/$25 price are the model's own; the 1M context exists only behind a beta header and is not the default configuration.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic first-party model overview, pricing and rate-limit docs, the Opus 4.5 system card and launch page, Artificial Analysis (both the non-reasoning and reasoning pages), Vals AI, the LMArena leaderboard dataset, the BenchLM evidence ledger, OpenRouter, and negative verification at ARC Prize, Epoch AI, swebench.com and tbench.ai. Vendor-vs-independent conflicts — the SWE-bench, GPQA, MMMU, context and index-scale discrepancies — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.5.md`, using the same headings.
