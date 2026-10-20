# Qwen3.5 Plus — findings by MiniMax M3.1 Flash

- Source: Alibaba (`qwen3.5-plus` — hosted build of `Qwen/Qwen3.5-397B-A17B`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Plus
- **Short description:** 阿里巴巴 Qwen3.5 家族的**托管版**旗舰 —— HF 卡片写得很清楚："Qwen3.5-Plus is the hosted version corresponding to **Qwen3.5-397B-A17B** with more production features, e.g., **1M context length by default**"。权重（397B 总 / 17B 激活，Apache-2.0）已于 2026-02-16 发布，但 **AA / Vals / BenchLM 都没有托管 Plus 本身的独立评测行**（BenchLM 无该条目，Vals 无页面，AA 的 `qwen3-5-plus` 404），因此本报告的分数主要来自**同一批权重**的卡片数据与 AA 的 `qwen3-5-397b-a17b` 页面。
- **Provider / access:** 阿里云百炼 / Model Studio `qwen3.5-plus`（快照 `qwen3.5-plus-2026-02-15` 与 `qwen3.5-plus-2026-04-20`）；OpenRouter `qwen/qwen3.5-plus-02-15`（canonical `qwen/qwen3.5-plus-20260216`）与 `qwen/qwen3.5-plus-20260420`（**无无日期 id**）；Hugging Face `Qwen/Qwen3.8-397B-A17B`（即 `Qwen/Qwen3.5-397B-A17B`）。
- **Release / knowledge:** 权重发布 **2026-02-16**（AA "released on February 16, 2026"）。Knowledge cutoff: **未公布**（OpenRouter `knowledge_cutoff: null`）。
- **IDs:** `qwen3.5-plus`（Model Studio）、`qwen/qwen3.5-plus-02-15` / `qwen/qwen3.5-plus-20260420`（OpenRouter）、`Qwen/Qwen3.5-397B-A17B`（HF 权重）。
- **Context window:** 权重原生 **262,144**，可扩展至 **1,010,000**；托管 Plus **默认 1M**。
- **Modalities:** 输入 文本+图像+视频 → 输出 文本。
- **Reasoning controls:** 默认开启 thinking，可用 `"enable_thinking": False` 或 `chat_template_kwargs: {"enable_thinking": false}` 关闭；Model Studio 同时暴露 Responses API 的 `reasoning.effort`；"Qwen3.5 does not officially support the soft switch of Qwen3, i.e., `/think` and `/nothink`." 采样：thinking `temp 0.6, top_p 0.95, top_k 20`；instruct `temp 0.7, top_p 0.8, presence_penalty 1.5`。
- **Pricing (as of 2026-10-19, per 1M tokens, 阿里云国际/新加坡):** `qwen3.5-plus`（≡ 2026-02-15）与两个快照，0–256K：输入 **$0.4**，输出 **$2.4**（非思考）/ **$2.4**（思考 CoT+答案）；256K–1M：输入 **$0.5**，输出 **$3.00**。北京区（CNY）：≤128K 0.8元/4.8元；128–256K 2元/12元；256K–1M 4元/24元。OpenRouter 更低：$0.26/$1.56（0216）与 $0.30/$1.80（0420），各带 >256K 加价档。限速：**未找到公开数值**。
- **Architecture:** MoE，**397B 总 / 17B 激活**，60 层，hidden 4096，512 专家（10 路由 + 1 共享），Gated DeltaNet + sparse MoE，Apache-2.0。

### Raw benchmarks found

> 以下数字全部来自 **Qwen3.5-397B-A17B 权重卡片**（即权重的成绩，而非托管 Plus 的独立成绩）；独立追踪器对**托管 Plus 本身**无任何一行。

Coding (card):

- SWE-bench Verified **76.4**；Terminal Bench 2 **52.5**；LiveCodeBench v6 **83.6**；MMLU-Pro **87.8**；MMLU-ProX 84.7；AIME26 **91.3**；IMOAnswerBench **80.9**；IFEval **92.6**；IFBench **76.5**；SuperGPQA 70.4；MMMLU 88.5；TAU2-Bench 86.7；MCP-Mark 46.1；BFCL-V4 72.9；BrowseComp 69.0 / 78.6；WideSearch 74.0
- **无 DeepSWE、无 SWE-bench Pro、无 FrontierSWE、无 CursorBench 数字**

Reasoning (card): GPQA **88.4**；HLE **28.7** / HLE-Verified **37.6**；MathVision 88.6；Mathvista(mini) 90.3

Vision (card): MMMU **85.0**；MMMU-Pro **79.0**；OCRBench 93.1；MMBenchEN-DEV-v1.1 93.7；OSWorld-Verified **62.2**；AndroidWorld **66.8**

Independent:

- **Artificial Analysis has no page for "Qwen3.5 Plus"** (404 for `qwen3-5-plus`, `qwen3.5-plus`, `qwen-3-5-plus`). Its page for the **weights** (`qwen3-5-397b-a17b`): Intelligence Index **18**（#64/121 开放权重类），55.2 t/s，TTFT 2.23s，**$0.60 in / $3.60 out，$0.47/task**，context 262k；另有 OpenRouter 内嵌快照写 **21.4**（同一模型）
- Design Arena（经 OpenRouter）：website **1189**、uicomponent 1179、codecategories 1168、dataviz 1135、svg 1107、gamedev 1106、3d 1119、asciiart 1094（397B 权重本体：website 1192、codecategories 1181、dataviz 1175、uicomponent 1163、gamedev 1141、3d 1161）
- **BenchLM 与 Vals AI 均无 Qwen3.5 / Qwen3.5 Plus 行**

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). **Scoring basis note:** 托管 Plus 没有任何独立追踪器跑过，因此每个维度的分数都来自**同一批权重**的官方卡片 + AA 对权重的测量，并在每行注明。

- **Tool use: 70/100.** BrowseComp 69.0 / 78.6 (multi-agent), TAU2-bench 86.7%, BFCL v4 72.9%, WideSearch 74.0%, MCP-Mark 46.1%, OSWorld-Verified 62.2%, AndroidWorld 66.8%, GDPval-AA 1600 区间（AA 对权重给 1416.92–1607 系列，无直接 Plus 行）, Terminal Bench 2 **52.5%**. Capped by the rubric's anchors (TB2.1 ~88%+ → 52.5%; τ3 ~50%+ → not published; GDPval ~1750+ → not published), and by the absence of any Toolathlon, MCP-Atlas, Claw-Eval, AutomationBench or BrowseComp-independent row.
- **Reasoning: 70/100.** GPQA 88.4%, AIME26 91.3%, MMLU-Pro 87.8%, MMMLU 88.5%, IMOAnswerBench 80.9%, IFEval 92.6%, HLE 28.7 / 37.6 (HLE-Verified), and an AA Intelligence Index of **18** for the weights. Capped by that index (**18** — "below average in intelligence and particularly expensive when compared to other open weight models of similar size"), by HLE under 38%, and by the absence of FrontierMath, AIME-2025-style or ARC-AGI measurements.
- **Context window: 93/100.** Hosted **1M by default** (the card's stated production feature), native 262,144 extensible to 1,010,000 on the weights, max output 65,536. One point below because the output cap sits exactly at the 64k line and **no long-context retrieval measurement exists** for either artifact.
- **Multimodal: 89/100.** Text + image + video in, with a strong published vision set: MMMU 85.0%, OCRBench 93.1%, MMBench 93.7%, Mathvista(mini) 90.3%, MathVision 88.6%, MMMU-Pro 79.0%, and agentic-computer-use rows OSWorld-Verified 62.2% / AndroidWorld 66.8%. Held at 89 because there is no audio support and the vision evidence is entirely vendor-published (no independent vision harness has run Qwen3.5).
- **Coding: 74/100.** SWE-bench Verified 76.4%, LiveCodeBench v6 83.6%, Terminal Bench 2 52.5%, plus academic coding proxies (MMLU-ProX 84.7%). Capped by the absence of any DeepSWE figure, by Terminal Bench 2 at 52.5%, by the AA Coding Index implied by an index of 18, and by the fact that no independent tracker has verified any of these rows.
- **Cost efficiency: 84/100.** The evaluated route is Alibaba Cloud's international line at **$0.40 in / $2.40 out** per 1M for ≤256K (thinking output priced the same), rising to $0.50/$3.00 for 256K–1M; OpenRouter's $0.26/$1.56 is cheaper still. The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) put $0.40/$2.40 at roughly 84; Artificial Analysis measures **$0.47 per Index task** (#26/43) for the weights. The deductions are the absence of a published rate limit and the absence of a Zen route.
- **Overall Score: 79.2/100.** (70 + 70 + 93 + 89 + 74) / 5 = 79.2 — best-fit: the **Qwen3.5 generation's hosted flagship** — 1M context by default, full omni-modal input, a genuinely academic-capable knowledge profile (AIME26 91.3%, MMLU-Pro 87.8%, MMMU 85.0%) at $0.40/$2.40 — but it is a **Feb-2026 model with no independent verification and an AA index of 18**, its Terminal-Bench 2 sits at 52.5% and its SWE-bench Verified at 76.4%; within the Qwen family, Qwen3.8-Flash-Next (index 40, $0.15/$0.47) and Qwen3.8 Max (index 45) have both overtaken it.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Price — $0.40/$2.40 (Alibaba Cloud international) vs $0.26/$1.56 and $0.30/$1.80 (the two OpenRouter snapshots).** Three routes, three prices, plus a >256K tier on each; the vendor list price anchors the cost score.
2. **AA index — 18 (AA page) vs 21.4 (OpenRouter's embedded AA snapshot)** for the same weights, and **no AA page at all for the hosted Plus**. The 18 is used and the absence is flagged.
3. **Context — 262,144 native (HF, AA) vs 1,010,000 extensible vs 1M default on the hosted build.** Three legitimate readings of one model; the hosted default is used for the Context score.
4. **The weights claim is verified** — the HF card states outright that "Qwen3.5-Plus is the hosted version corresponding to Qwen3.5-397B-A17B" — which is what licenses using the weight-card benchmark table here.
5. **Evidence-thinness is the real caveat:** the OpenAI-Vendor-style per-eval numbers (SWE-bench Verified 76.4, Terminal Bench 2 52.5, GPQA 88.4) have **no independent reproduction** — BenchLM and Vals have no Qwen3.5 row and AA measured only the weights' index. Every score line says so.
6. **Design Arena Elo differs between the two artifacts** (Plus 1189 website vs 397B weights 1192) — small, but evidence that the hosted build is not a byte-identical serve.
7. **No rate limits published** for `qwen3.5-plus` on Model Studio, and no knowledge cutoff — both listed as gaps.

### Notes on identity

- `qwen3.5-plus` is the **hosted build of the open weights `Qwen3.5-397B-A17B`** (Apache-2.0) — the same weights-plus-production-features pattern as `qwen3.8-flash` / `Qwen3.8-Flash-Next` in this dataset, and the direct predecessor of `qwen3.7-plus` and `qwen3.8-max`.
- It is a **different artifact** from `qwen3.6-plus` (proprietary, April 2026) and from the open Qwen3.5 397B-A17B *weights* entry in Artificial Analysis, which is the base rather than the hosted build.
- Two OpenRouter snapshots exist (20260216 and 20260420) with different prices and no un-dated alias — so a bare "Qwen3.5 Plus" request is ambiguous on that gateway.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — the `Qwen/Qwen3.5-397B-A17B` Hugging Face model card (params, licence, context, the full vendor benchmark table, and the explicit "hosted version corresponding to" statement), Alibaba Cloud's international billing page and Model Studio model list (ids, snapshots, tiered pricing, thinking controls), OpenRouter's API and model pages, Artificial Analysis (`qwen3-5-397b-a17b`, and the 404s for every "Qwen3.5 Plus" slug), and negative verification at BenchLM and Vals AI. Vendor-vs-independent gaps — the three price points, the 18-vs-21.4 index and the three context readings — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_Plus.md`, using the same headings.
