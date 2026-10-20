# Gemini 3.5 Flash-Lite — findings by MiniMax M3.1 Flash

- Source: Google (`gemini-3.5-flash-lite`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google 2026 年 7 月的**速度档** Flash —— "Our fastest, most cost-effective 3.5-class model"，AA 测得 **454.3 t/s（#4/151）**、智能指数 **22**、价格 **$0.30 in / $2.50 out**，上下文 1M / 输出 64K。它是 Gemini 3.6/3.7/3.8 Flash 的同代低成本版本（后者的 AA 指数为 34 / 39 / 41），也是"Flash-Lite"这条产品线在 3.5 代的落点。
- **Provider / access:** Gemini API `gemini-3.5-flash-lite`（Stable，AI Studio / Gemini App / Gemini Enterprise Agent Platform）；OpenRouter `google/gemini-3.5-flash-lite`（canonical `google/gemini-3.5-flash-lite-20260721`，另有 `:batch`）。
- **Release / knowledge:** released **2026-07-21**（模型卡 "Published 21 July 2026"；OpenRouter slug 日期）。Knowledge cutoff **2026 年 3 月** —— "The knowledge cutoff date for Gemini 3.5 Flash-Lite is March 2026"，"in others they may experience the model's knowledge is limited to January 2025"。
- **IDs:** `gemini-3.5-flash-lite`（Gemini API）、`google/gemini-3.5-flash-lite`（OpenRouter）、`opencode/gemini-3.5-flash-lite`（Zen）。
- **Context window:** 1,048,576 输入；输出 **65,536**（模型卡措辞 "Text, with a 64K token output"）。
- **Modalities:** 输入 文本+图像+视频+音频+PDF → 输出 文本。Tools: function calling、search as a tool、computer use。
- **Thinking:** 强制开启、默认启用，档位 high / medium / low / **minimal**（默认 minimal）。
- **Pricing (as of 2026-10-19, per 1M tokens):** 标准 **$0.30 in / $2.50 out**（含 thinking），cache hit **$0.03** + 存储 $1.00/1M tokens·小时；Batch $0.15/$1.25（cache $0.02）；Flex $0.15/$1.25（cache $0.02）；Priority $0.54/$4.50（cache $0.05）；Contributor 档 $0.15/$1.25（cache $0.015）。Search grounding 每月 5,000 次免费，之后 $14/1,000。**无引入价/到期说明。**
- **Rate limits:** 分层制，per-model RPM/TPM 未公开（"View your active rate limits in AI Studio"）。Priority = 0.3× 标准价。Batch：100 并发、2GB 输入文件、20GB 存储；enqueued tokens 10,000,000 (T1) / 500,000,000 (T2) / 1,000,000,000 (T3)。

### Raw benchmarks found

> Google 模型卡数字标为 "vendor"；Artificial Analysis、Vals AI（经 BenchLM）、Epoch AI（经 BenchLM）为独立来源。

Agent / tool use (card):

- SWE-bench Pro (Public) **54.2%**；Terminal-bench 2.1 (Terminus-2) **54.0%**；MLE-Bench 39.2%；GDPVal-AA v2 Elo **1140**；OSWorld-Verified **74.0%**；CharXiv reasoning 74.5%（无工具）/ 76.5%（带工具）

Reasoning / knowledge (card):

- HLE (no tools) **16.0%**；GPQA Diamond **86.9%**；MMMU-Pro **76.8%**；MMMLU 88.9%；SimpleQA Verified 43.3%；FACTS 40.6%；LiveCodeBench (1/1–5/1/2025) **72.0%**

Long context (card):

- GDM-MRCR v2 (8-needle)：128k 平均 **72.2%**，1M pointwise **21.3%**；输出速度 **350 t/s**（"according to the Artificial Analysis Index"）

Independent:

- **Artificial Analysis:** Intelligence Index **22** (#42/173)，**454.3 t/s (#4/151)**，TTFT 8.09s，**$0.19/task**，59M output tokens (#25/68)，blended $0.33/M，90% cache 折扣，1M ctx；OpenRouter 内嵌快照：index 22.2 / coding 49.3 / agentic 14.3；per-eval：TB 2.1 **53.56%**、TB 4.0 **1.01%**、TB-Science **0%**、τ³ 17.53%、SciCode 41.32%、LCR 76.0%、HLE 18.81%、GPQA 83.84%、CritPt **0%**、MMMU-Pro 79.02%、AutomationBench 25.01%、GDPval **983.28 Elo**、Omniscience 5.23 / accuracy 29.47% / hallucination 34.36%、EnterpriseOps 42.35%
- **Vals AI (经 BenchLM):** LiveCodeBench **79.0%**、SWE-bench **75.0%**、Terminal-Bench 2.1 **50.2%**、MMLU-Pro **85.8%**、GPQA-Diamond **83.8%**
- **Epoch AI (经 BenchLM):** FrontierMath v2 T1–3 **25.965%** / T4 **0.000%**
- **BenchLM:** overall 49.61，**#101/226**（#57/87 verified）；Agentic #81/130，Coding #77/151，Knowledge #86/186
- **无 ARC Prize、tbench.ai 官方榜、LMArena、swebench.com 行**

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 66/100.** Terminal-Bench 2.1 **54.0%** (card) / 53.56% (AA) / 50.2% (Vals), OSWorld-Verified **74.0%**, SWE-bench Pro 54.2%, AutomationBench 25.01% (AA), GDPval-AA 983.28 Elo, Agentic Index 14.3 (OpenRouter mirror). Capped by the rubric's anchors (TB2.1 ~88%+ → ~53%; τ3 ~50%+ → 17.53%; GDPval ~1750+ → 983), by Terminal-Bench 4.0 at **1.01%** and Terminal-Bench-Science at **0%**, and by the absence of any Toolathlon, MCP-Atlas or Claw-Eval row.
- **Reasoning: 70/100.** GPQA Diamond 83.84–86.9%, MMLU-Pro 85.8%, MMMLU 88.9%, LiveCodeBench 72.0–79.0%, MMMU-Pro 76.8–79.02%, SimpleQA Verified 43.3%, FACTS 40.6%. Capped by HLE at **16.0–18.81%**, by CritPt **0%**, by FrontierMath v2 T1–3 25.965% / **T4 0.000%**, and by the low 29.47% Omniscience accuracy (the 34.36% hallucination rate is comparatively good, so the weakness is knowing rather than confabulating).
- **Context window: 90/100.** 1,048,576 tokens with a 65,536 max output — the rubric's top tier on window size, with a published MRCR v2 8-needle **72.2% at 128k**. One point below because Google's own 1M figure is **21.3% pointwise** — the same collapse every 2026 Gemini generation shows at the top of its window — and because no RULER/GraphWalks row exists.
- **Multimodal: 85/100.** Text + image + video + audio + PDF in, text out — the rubric's "+audio in = 90–100" band — with MMMU-Pro 76.8–79.02%, CharXiv 74.5/76.5%, plus a large document/video suite. Held at 85 because the vision evidence is vendor-published and the Agentic Index of 14.3 shows the model's real strength is perception rather than action.
- **Coding: 68/100.** SWE-bench Pro **54.2%**, LiveCodeBench 72.0–79.0%, Terminal-Bench 2.1 ~53%, SciCode 41.32%, and Terminal-Bench 4.0 **1.01%** / TB-Science **0%**. Capped by the absence of any SWE-bench Verified, DeepSWE, FrontierCode or FrontierSWE row, and by Terminal-Bench 4.0 at ~1%.
- **Cost efficiency: 94/100.** The evaluated route is **$0.30 in / $0.03 cached / $2.50 out** per 1M, with Batch/Flex at $0.15/$1.25, a Contributor tier at $0.15/$1.25, Priority at $0.54/$4.50 (0.3× of standard is cheaper than Priority's headline), and 5,000 free grounding requests/month. The rubric's "~$0.60/$2.20 ≈ 92" band is met and slightly beaten on the blended rate (AA: $0.33/M blended, $0.19/task). The deduction is the $2.50 output rate and the 90%-only cache discount.
- **Overall Score: 75.8/100.** (66 + 70 + 90 + 85 + 68) / 5 = 75.8 — best-fit: **速度优先的感知型模型**（454.3 t/s、全模态输入、1M 上下文、$0.30/$2.50）—— 适合分类、抽取、文档/音视频理解与高并发流水线；但 Terminal-Bench 4.0 约 1%、HLE 16%、FrontierMath T4 0%，说明它是**看懂**而非**做成**，复杂编程与长程代理任务应交给 3.6/3.8 Flash 或 Gemini 4 Argon。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Speed — 454.3 t/s (AA) vs 391 t/s (BenchLM's AA snapshot, 19 Oct) vs "delivering 350 output tokens per second according to the Artificial Analysis Index" (DeepMind).** AA's own 454.3 is used; the vendor's 350 is the conservative claim.
2. **Terminal-Bench 2.1 — 54.0% (Google, Terminus-2) vs 50.2% (Vals).**
3. **Blended price — $0.33/M (AA) vs $1.40 (BenchLM's simple in/out average).** The rubric's blended 7:2:1 figure is the meaningful one.
4. **Lifecycle framing.** Google lists the model as **Stable** with no deprecation note and no introductory price; Artificial Analysis marks it deprecated (in favour of Gemini 3.5 Flash-Lite — which is this model — and 3.7/3.8 Flash). The vendor's status is recorded.
5. **AA's per-eval tables are chart-rendered** and not extractable, so the AA values quoted here come from the model page's own payload; **no AA-PersonalityBench exists** for this model.
6. **No independent leaderboard row at all** — ARC Prize, tbench.ai, LMArena and swebench.com all render client-side with no entries — so the independent evidence is AA's index plus Vals' and Epoch's rows relayed through BenchLM.

### Notes on identity

- `gemini-3.5-flash-lite` is a distinct model from `gemini-3.5-flash` (AA index 34), `gemini-3.6-flash` (34), `gemini-3.7-flash` (39), `gemini-3.8-flash` (41) and `gemini-3.1-flash-lite` (16) — the "Lite" suffix is a cost/latency tier of the same generation, and the 3.5 Lite is the one that pairs the 350–454 t/s decode with the $0.30/$2.50 rate.
- Google's product line at this tier is deliberately double-tiered (Contributor at $0.15/$1.25, Priority at 0.3× of standard), which makes the *headline* price the least representative number for most users.
- It replaced Gemini 3.1 Flash-Lite, whose AA index of 16 marks how far the tier had moved in two generations.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Google's Gemini API model page and pricing page, the DeepMind Gemini 3.5 Flash-Lite model card (including its benchmark table and MRCR/long-context rows), Artificial Analysis (model page with its per-evaluation payload), Vals AI and Epoch AI via the BenchLM ledger, OpenRouter and OpenCode Zen, and negative verification at ARC Prize, tbench.ai, LMArena and swebench.com. Vendor-vs-independent conflicts — the speed spread, the Terminal-Bench gap and the blended-price methods — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.5_Flash_Lite.md`, using the same headings.
