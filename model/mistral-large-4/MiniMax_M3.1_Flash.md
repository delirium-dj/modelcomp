# Mistral Large 4 — findings by MiniMax M3.1 Flash

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (Preview)
- **Short description:** Mistral 2026 年 10 月的**公开预览**旗舰（代号 "le Chonk"）—— "a 1 trillion-parameter natively multimodal model with 52 billion active parameters"，granular MoE 架构 + 1.6B 视觉编码器，1M 上下文，并且以**发布期 5 折**（$0.68 / $2.09）出售。Mistral 承诺"本月内"放出权重，但 Artificial Analysis 仍标其为 "Proprietary model"。
- **Provider / access:** La Plateforme API `mistral-large-4`（version `v26.10`，文档徽章 "Public Preview / Open"）；OpenRouter `mistralai/mistral-large-4-0`（创建于 2026-10-06 13:42 UTC）；OpenCode Zen `opencode/mistral-large-4`。
- **Release / knowledge:** launched **2026-10-06**（"Today, we're launching a public preview of Mistral Large 4"）。Knowledge cutoff: **未公布**（AA `knowledgeCutoffDate: null`）。
- **IDs:** `mistral-large-4`（Mistral API / Zen）、`mistralai/mistral-large-4-0`（OpenRouter；**不存在 `mistral-large-4-preview` 这个 id**）。
- **Context window:** **1M**（Mistral 文档；OpenRouter 1,048,576）—— 但 AA 自己的 spec sheet 写 **524k**（其 FAQ 又说 "a context window of 520k tokens"），Vals 记 512k。Max output: OpenRouter **262,144**。
- **Modalities:** 输入 文本+图像 → 输出 文本（"natively multimodal"；无音频，Vals 明示 "Video input not supported"）。
- **Reasoning controls:** 两种档位 —— Simon Willison: "The model only supports two reasoning levels - 'none' and 'high' - via the Mistral API"；AA 标 `isReasoning: true`（默认 reasoning tokens 2000）。
- **Pricing (as of 2026-10-19, per 1M tokens):** 目录价 **$1.36 in / $0.14 cached / $4.18 out**；**促销 5 折：$0.68 / $0.07 / $2.09**（Mistral 页面同时显示 "Original price: $1.36 Sale price: $0.68"）。OpenRouter 与 OpenCode Zen 实际按**折后价**计（$0.68/$2.09，缓存 $0.07）。
- **Rate limits:** 文档称按模型设定（tokens/min、req/s），但数值只在 Admin Panel 可见，**无公开数字**。
- **Architecture:** granular MoE，**1.05T 总参数 / 52B 激活**，加 1.6B 视觉编码器。

### Raw benchmarks found

> 厂商 launch blog 数字标为 "vendor"；Artificial Analysis 与 Vals AI 为独立来源；BenchLM 仅收录 4 行。

Agent / tool use:

- Terminal-Bench 4.0: **26.77%** (AA) / **27.78% ± 1.82** (Vals, #21/51) / **28.3%** (Mistral 官方)
- AutomationBench **59.90%** (AA) / 59.9% (Mistral 官方)；Coding Agent Index **49.8%** (Mistral 官方)；Finance Agent v2.1 **61.38% ± 2.02** (Vals, #15/27) / 54.7%（BenchLM 引用的 v2 版本）
- AA-Briefcase **1391.97 Elo**（AA，95% CI 1381.46–1402.29，rubric pass 45.15%）/ 1393 (Mistral 官方)；Cybench **93.0%** (Mistral 官方) / 93.0%（BenchLM，best-verified）；Harvey LAB-AA v1.1 **3.06%** (AA) / Harvey's Legal Agent v1.1 **17.50%** (Vals, #5/23)
- GDPval-AA v2.1 **1422.17 Elo**（AA，normalized 46.11%）；GDP.pdf all-pass 18.6%；EnterpriseOps-Gym: null；BrowseComp / Toolathlon / MCP-Atlas / APEX-Agents / τ-bench: **no verified public score found**

Reasoning / knowledge:

- HLE **35.03%** (AA)；AA-LCR **81.33%** (AA)；CritPt **10.57%** (AA)；SciCode **54.17%** (AA)
- Artificial Analysis Intelligence Index: **38**（#66/217），67.5 t/s (#121/186)，**$1.13/task** (#60/114)，**200M output tokens (#109/116 —— 全场最啰嗦之一)**，TTFT 1.65s（首个 chunk）/ 31.30s（首个答案 token），blended $0.79/1M
- Omniscience index **-5.3** / accuracy **25.82%** / hallucination **41.95%** (AA)
- GPQA: **null** (AA) / MMMLU: null / FrontierMath: **no verified public score found**；GPQA 无任何公开数字

Coding:

- DeepSWE v1.1 **61.7%** (Mistral 官方)；SWE-Atlas-QnA **59.4%** (Mistral 官方)；Terminal-Bench 4.0 26.77–28.3%；Vibe Code Bench v1.1 **78.40% ± 3.55** (Vals, #29/115) / 78.40%（BenchLM）
- SciCode 54.17% (AA)；FrontierCode: null；SWE-bench Verified / LiveCodeBench / CursorBench / FrontierSWE: **no verified public score found**
- Mistral 自报: Dense 200 **42%**、B3 **93.3%**、KORA **1.691**、Surge AI human code eval **3.74**（"ranked second of five models"，落后 Claude Opus 5 的 4.22）

Long context:

- **无 MRCR / RULER / GraphWalks 公布。** 1M 窗口（争议，见下）。

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 72/100.** Terminal-Bench 4.0 **26.77–28.3%**, Finance Agent v2.1 **61.38%** (Vals, #15/27), AutomationBench **59.90%**, Coding Agent Index 49.8%, AA-Briefcase 1392 Elo, Cybench **93.0%** (best-verified), Harvey Legal 17.50% (Vals) / 3.06% (AA), GDPval-AA 1422.17, GDP.pdf 18.6%. Capped by the rubric's anchors (TB2.1 ~88%+ → not published; τ3 ~50%+ → not published; GDPval ~1750+ → 1422), by Terminal-Bench 4.0 in the high 20s, and by the absence of Toolathlon, MCP-Atlas, BrowseComp and APEX-Agents rows.
- **Reasoning: 70/100.** AA-LCR **81.33%**, SciCode 54.17%, HLE 35.03%, CritPt 10.57%, and an AA Intelligence Index of **38 (#66/217)**. Capped by HLE in the mid 30s, by CritPt under 11%, by the **negative Omniscience index (-5.3) with only 25.82% accuracy**, and by the total absence of GPQA, FrontierMath and AIME numbers for this model — the rubric's two strongest reasoning anchors cannot be checked at all.
- **Context window: 93/100.** **1M** per Mistral's own docs (OpenRouter 1,048,576) with a 262,144 max output — the rubric's top tier on size, with the output cap well above the 64k line. One point below because **Artificial Analysis's own spec sheet says 524k** (its FAQ says 520k, Vals 512k) — a three-way disagreement inside the vendor/tracker records — and because no long-context retrieval measurement exists.
- **Multimodal: 78/100.** Text + image in with text out, built around a 1.6B vision encoder ("natively multimodal") — the rubric's "+image in = 60–70" band, lifted to 78 by the model's native-vision claim, but **not** into the 90–100 band (no audio, no non-text output). The measured vision evidence is thin: **MMMU-Pro 76.42%** (AA) is the only published vision row, and SWE-bench Multimodal is 33.13% (Vals).
- **Coding: 76/100.** DeepSWE **61.7%** (Mistral 官方), Terminal-Bench 4.0 26.77–28.3%, Vibe Code Bench **78.40%** (Vals, #29/115), SciCode 54.17%, SWE-Atlas-QnA 59.4%, and the Coding Agent Index 49.8%. Capped by the absence of any SWE-bench Verified, LiveCodeBench, FrontierCode, FrontierSWE or CursorBench number, by Terminal-Bench 4.0 in the high 20s, and by DeepSWE 61.7% sitting under the 74% anchor — Vibe Code Bench at 78.4% is the one genuinely strong coding-adjacent row.
- **Cost efficiency: 96/100.** The evaluated route — OpenCode Zen `opencode/mistral-large-4` — is billed at the **5 折促销价 $0.68 in / $2.09 out** per 1M with a **$0.07 cached read** (90% discount); the list price is $1.36/$4.18/$0.14. That is below the rubric's "~$0.60/$2.20 ≈ 92" anchor and far below "~$1.25/$4.25 ≈ 88"; Artificial Analysis measures **$1.13 per Index task** (#60/114), higher than the headline price suggests because the model is **very verbose** (200M output tokens, #109/116) — the deduction is that one point, plus the absence of published rate limits.
- **Overall Score: 77.8/100.** (72 + 70 + 93 + 78 + 76) / 5 = 77.8 — best-fit: 一个**极便宜、1M 上下文、刚发布的多模态 MoE 预览**（$0.68/$2.09、1.6B 视觉塔、Vibe Code Bench 78.4%、Cybench 93.0%、TB 4.0 ~28%）—— 视觉与文档处理有吸引力，但 agentic-terminal 能力在 20 多%、知识可靠性（Omniscience accuracy 25.8%）很弱，且**权重尚未落地**（Mistral 承诺"月底"，AA 仍标 proprietary），因此在 GA 前应视为实验性条目。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Context — 1M (Mistral docs, OpenRouter 1,048,576) vs 524k (AA spec sheet; its FAQ says "520k") vs 512k (Vals).** The vendor figure is used and the disagreement flagged.
2. **Parameters — 52B active / 1.05T total (Mistral docs) vs AA's `parameters: 1000` with 49B active (Simon Willison: "49 billion active parameter").** Both recorded.
3. **Open vs proprietary.** Mistral's docs badge says "Open" and the news post promises "We will release the weights by the end of the month"; AA still records `isOpenWeights: false` / "Proprietary model" and BenchLM lists Source Type "Pending". The weights are **not** yet downloadable, so this report treats it as closed **today** and flags the promise.
4. **Price — AA/Vals/Mistral list $1.36/$4.18; OpenRouter and OpenCode Zen serve the 50%-off $0.68/$2.09.** The evaluated route is the discounted one, and the list price is stated beside it.
5. **Terminal-Bench 4.0 — 26.77% (AA) vs 27.78% ± 1.82 (Vals) vs 28.3% (Mistral).** Tight agreement; AA is the anchor.
6. **Finance Agent — 61.38% (Vals, v2.1) vs 54.7% (BenchLM's cited "v2")** — same lab, different version label.
7. **Harvey — 3.06% (AA's Harvey LAB-AA v1.1) vs 17.50% (Vals' Harvey's Legal Agent v1.1).** Different trackers and scales; both listed, AA used.
8. **Terminal-Bench 2.1, GPQA, FrontierMath, AIME and any official-board row do not exist** for this model — the coding and reasoning scores rest on Mistral's own chart images (DeepSWE 61.7, SWE-Atlas-QnA 59.4, Coding Agent Index 49.8) plus AA's handful of values, and several of Mistral's published numbers (Dense 200 42%, B3 93.3%, KORA 1.691, Surge AI 3.74) are chart-image only.
9. **Simon Willison's independent read** is the best third-party summary available: "On Artificial Analysis it scores 38, just behind DeepSeek 4.1 Flash" and "last December's Mistral Large 3 … scored 9 on AA" — i.e. a large generational jump.

### Notes on identity

- `mistral-large-4` is a **distinct model** from `mistral-large-3` (December 2025, 675B/41B active, 262K context, $0.50/$1.50, Apache 2.0 — AA index 9 per Willison), `mistral-large-2` / `mistral-large-2407`, and `mistral-medium-3` (deprecated 2026-05-22, replaced by Medium 3.5).
- It is a **public preview** with a version string `v26.10`, and the OpenRouter id carries the `-0` suffix (`mistral-large-4-0`) rather than a `-preview` suffix — the "preview" status lives in the docs badge, not the id.
- The "Open" badge on the docs card refers to the **announced** weight release, not to a downloadable checkpoint as of today.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Mistral's launch news post, the `docs.mistral.ai/models/mistral-large-4-0` model card and pricing page, OpenRouter's API and model page, Artificial Analysis (model page with its per-evaluation payload), Vals AI, the BenchLM evidence ledger, OpenCode Zen's catalogue, and Simon Willison's commentary, with negative verification at swebench.com, ARC Prize, LMArena, Epoch AI and the official Terminal-Bench board. Vendor-vs-independent conflicts — the context, parameter, open-vs-proprietary and price disagreements — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mistral_Large_4.md`, using the same headings.
