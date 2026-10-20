# Claude Haiku 5.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic 2026 年 10 月的**速度档**旗舰 —— "our fastest model to date at each model's standard speed"，AA 智能指数 **43（#3/173）**、**234.1 t/s**，价格 **$0.10 in / $0.50 out**（缓存 $0.01），且 "priced 90% lower than Claude Haiku 4.5 for requests up to 100,000 tokens, and 50% lower for requests over 100,000 tokens"。它是本数据集中"速度/价格比"最激进的模型，同时在 Vibe Code Bench 上拿到 **90.44%（#3/110）**。
- **Provider / access:** Claude API `claude-haiku-5-5`；Bedrock `anthropic.claude-haiku-5-5`；Vertex / Foundry / Claude Platform on AWS `claude-haiku-5-5`；OpenRouter `anthropic/claude-haiku-5-5`；OpenCode Zen `opencode/claude-haiku-5-5`。
- **Release / knowledge:** released **2026-10-07**（docs "Released October 7, 2026"）。Knowledge cutoff **2026 年 6 月**（reliable + training）。Retirement: "not sooner than October 7, 2027"。
- **IDs:** `claude-haiku-5-5`（Claude API / Bedrock / Vertex / Foundry / AWS）、`anthropic/claude-haiku-5-5`（OpenRouter）、`opencode/claude-haiku-5-5`（Zen）。
- **Context window:** **1M tokens**（"roughly 555k words"）；max output **128K**（同步），**300K**（Message Batches API + `output-300k-2026-03-24` beta）。
- **Modalities:** 文本+图像 → 文本；adaptive thinking 默认开启；effort `low|medium|high|xhigh|max` via `output_config.effort`，**默认 `medium`**；另有 per-message effort beta（`mid-conversation-output-config-2026-07-01`）。**新分词器：token 数比 Haiku 4.5 多约 30%**。
- **Pricing (as of 2026-10-19, per 1M tokens):** ≤100K prompt：输入 **$0.10**、5m cache write $0.125、1h write $0.20、cache read **$0.01（90% 折扣）**、输出 **$0.50**；>100K：**$0.50 / $0.625 / $1.00 / $0.05 / $2.50**。Batch 50%：$0.05/$0.25（≤100K）、$0.25/$1.25（>100K）。**Haiku 5.5 不提供 fast mode**（仅 Opus 5.5/5/4.8）；`inference_geo: us` 1.1×，区域端点 +10%。
- **Rate limits:** Start 1,000 RPM / 2,000,000 ITPM / 400,000 OTPM；Build 5,000 / 5,000,000 / 1,000,000；Scale 10,000 / 10,000,000 / 2,000,000。Batch 队列 200k/300k/500k（每批 100k）。消费上限 $500 / $1,000 / $200,000。

### Raw benchmarks found

> Anthropic launch page 数字标为 "vendor"；Artificial Analysis、Vals AI、ARC Prize、BenchLM 为独立来源。

Agent / tool use:

- Terminal-Bench 4.0: **32.83%** (AA) / **39.2%**（Anthropic launch table）
- Terminal-Bench 2.1: 未公布；Terminal-Bench-Science 0.1 **20.0%** (AA)
- OSWorld 2.1 offline **72.4%**（Anthropic launch table）；BrowseComp / Toolathlon / MCP-Atlas / Claw-Eval: **no verified public score found**
- FrontierCode 1.1 Main **41.81%** (AA) / 46.4%（Anthropic 表）；Chartography（无工具）**46.4%**（Anthropic 表）/ 无工具值 AA
- GDPval-AA v2.1 **1618.33** (AA) / **1620**（Anthropic）；AA-Briefcase v1.1 1578（Anthropic）；AutomationBench **35.41%** (AA)
- CyberBench v1.1 **75.48%** (#5/45, Vals)；Vibe Code Bench v1.1 **90.44% ± 3.55** (#3/110, Vals)；Harvey Legal 1.25% (Vals) / Harvey LAB-AA 0.56% (AA)

Reasoning / knowledge:

- HLE: **44.39%** (AA) / 45.9% 无工具（Anthropic 表）/ 18.7% 带工具（Anthropic 表）
- AA-LCR **82.67%** (AA)；MLCR-AA **63.33%** (AA)；CritPt **18.86%** (AA)
- ARC-AGI（ARC Prize 验证，六档）：v1 **89.0%**（max；93/100 完成）、v2 **61.3%**（xhigh；max 档未列，74/120）、v3 0.5% standard / **2.8%** Provider Adapter（max）。v1 阶梯：Max 89.0 / XHigh 87.5 / High 81.5 / Med 57.3 / Low 50.3
- Artificial Analysis Intelligence Index: **43**（#3/173），**234.1 t/s** (#17/151)，**$0.21/task** (#48/66)，**440M output tokens (#68/68 —— 全 AA 目录最啰嗦)**，90% cache 折扣，TTFT 244.84s
- Omniscience index 10.67 / accuracy **36.38%** / hallucination **40.42%** (AA)；HealthBench Pro 55.7（经 BenchLM）；FrontierMath v2 75.088% / 46.341%（经 BenchLM 引 Epoch AI）

Coding:

- 无 SWE-bench Verified、LiveCodeBench、Terminal-Bench 2.1、DeepSWE、FrontierCode、CursorBench、Vibe Code Bench（厂商）的公开数值
- Vals: Vibe Code Bench **90.44%**，Code Migration 44.57%，EMB 59.02%，Legal Research 43.27%（对比 Haiku 4.5 Thinking：Vibe Code 11.39 → 90.44，Code Migration 7.55 → 44.57，EMB 22.66 → 59.02）
- FrontierMath v2 75.088% / 46.341%（Epoch AI, via BenchLM）；FrontierSWE v2 43.8%（经 BenchLM）

Long context:

- **无 MRCR / RULER / GraphWalks 公布。** 1M 窗口（300K 输出在 Batch）。

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 82/100.** Terminal-Bench 4.0 **32.83%** (AA) / 39.2% (Anthropic), OSWorld 2.1 offline **72.4%**, Vibe Code Bench **90.44%** (#3/110), CyberBench 75.48% (#5/45), FrontierCode 1.1 Main 46.4%, Chartography 46.4%, GDPval-AA 1620, AutomationBench 35.41%. Capped by the absence of any Terminal-Bench 2.1, BrowseComp, Toolathlon, MCP-Atlas or Claw-Eval row, and by AutomationBench in the mid-30s.
- **Reasoning: 86/100.** ARC-AGI-1 **89.0%** (max) / ARC-AGI-2 61.3% (xhigh), HLE 44.39–45.9%, AA-LCR **82.67%**, MLCR-AA **63.33%**, FrontierMath v2 75.088% (T1–3), HealthBench Pro 55.7%, MMLU-Pro 87.36% (Vals), CritPt 18.86%, and an AA Intelligence Index of **43 (#3/173)** — the third-highest index of any model in this dataset. Capped by the **76.73%… no — 40.42%** hallucination rate at only 36.38% accuracy, by ARC-AGI-2 at 61.3% and ARC-AGI-3 at ~0.5–2.8%, and by HLE at ~45%.
- **Context window: 93/100.** **1M tokens** with a 128,000 max output (300K on Batch) — the rubric's top tier on size, with a published "roughly 555k words" framing. One point below because **no long-context retrieval measurement exists** and the new tokenizer's ~30% inflation eats into the effective window.
- **Multimodal: 72/100.** Text + image in with text out; the only vision number published for this model is indirect (ScreenSpot-class OSWorld 72.4% and Chartography 46.4%). The rubric's "+image in = 60–70" band is met at its top; no video or audio input is documented.
- **Coding: 82/100.** The coding evidence is unusual: **Vibe Code Bench 90.44% (#3/110)**, Code Migration 44.57%, EMB 59.02%, Legal Research 43.27%, plus FrontierMath v2 75.088%. Capped by the **absence of every mainstream coding benchmark** (no SWE-bench Verified, no LiveCodeBench, no DeepSWE, no Terminal-Bench 2.1, no FrontierCode, no CursorBench) — so the score rests on one vendor-adjacent benchmark plus Vals' specialist set.
- **Cost efficiency: 96/100.** The evaluated route is **$0.10 in / $0.01 cached / $0.50 out** per 1M for prompts up to 100K, with a 90% cache discount, Batch at 50% ($0.05/$0.25) and no fast-mode surcharge. Anthropic's own framing — "priced 90% lower than Claude Haiku 4.5 for requests up to 100,000 tokens" and "around 75% less to run" — matches the rubric's top tier. The only deduction is the **5× jump above 100K prompts** ($0.50/$2.50), which materially changes the effective price for long-context work.
- **Overall Score: 83.0/100.** (82 + 86 + 93 + 72 + 82) / 5 = 83.0 — best-fit: 2026 年 10 月的**速度与价格双料冠军**（234.1 t/s、AA 指数 43 排第 3、$0.10/$0.50、Vibe Code Bench 90.4%），在 1M 上下文 + 低延迟 + 低价的组合上几乎无人能及；代价是事实可靠性（Omniscience accuracy 36.4%）、缺乏主流编程评测数据，以及 >100K prompt 后的价格跳涨。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 4.0 — 39.2% (Anthropic) vs 32.83% (AA).** AA is the anchor.
2. **HLE column ambiguity.** Anthropic's launch table distinguishes text-only vs with-tools, and the only reading consistent with AA-HLE 44.4% is Haiku 5.5 = **45.9% without tools / 18.7% with tools** (Sonnet 5.5 = 57.4% without tools, GPT-6 Luna = 64.5% with tools). BenchLM's "HLE w/ tools 57.4%" is a **mis-mapped column** for Haiku 5.5 and is excluded.
3. **AA index 43 vs 43.4** — rounding.
4. **Flat pricing is base-tier only.** The headline $0.10/$0.50 applies to prompts ≤100K; above that it is $0.50/$2.50, which AA's headline tiles do not show. The cost score uses the base tier and flags the tier.
5. **The Haiku 5.5 system card could not be read** (PDF exceeded the 5 MB fetch limit), so no alignment/safety numbers are quoted.
6. **LMArena 403, swebench.com and tbench.ai render client-side with no rows** — so no arena placement and no official-board Terminal-Bench 4.0 row is available; Epoch AI is reachable only through BenchLM's citation.
7. **Verbosity:** 440M output tokens is the **highest in the AA catalogue** (#68/68) — a real cost and latency caveat for agentic use, and the reason the cost score stops at 96 despite the $0.10 input price.

### Notes on identity

- `claude-haiku-5-5` is a distinct model from `claude-haiku-4-5` (the previous Haiku, whose Vibe Code Bench score was 11.39% against this model's 90.44%) and from `claude-haiku-4-5` family members in the dataset.
- Anthropic highlights it as "our fastest model to date at each model's standard speed" and Asana measured "over a 30% reduction in latency … up to 2.5x faster inference per agent turn"; HubSpot's CRM suite 92.8%.
- The new tokenizer (~30% more tokens) is a model-generation property worth remembering when comparing Haiku 5.5's "1M context" with earlier Haiku generations' effective capacity.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic first-party model overview, pricing and rate-limit docs, the Haiku 5.5 launch page, Artificial Analysis (model page with its per-evaluation payload and effort variants), ARC Prize (verified, six configurations), Vals AI, the BenchLM evidence ledger, OpenRouter and OpenCode Zen, and negative verification at LMArena, swebench.com, tbench.ai and Epoch AI. Vendor-vs-independent conflicts — the Terminal-Bench 4.0 gap, the HLE column mapping and the hidden >100K price tier — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_5.5.md`, using the same headings.
