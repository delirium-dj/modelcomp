# DeepSeek V4 Vision Exp — findings by MiniMax M3.1 Flash

- Source: DeepSeek (`deepseek-v4-flash-vision-exp`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp (DeepSeek-V4-Flash-Vision-Exp)
- **Short description:** DeepSeek 家族中**第一个实验性多模态模型** —— "our first experimental multimodal model in the DeepSeek‑V4 family… builds on the DeepSeek‑V4‑Flash architecture by incorporating visual modules"。它是 V4 Flash 0731 的**视觉特化继续训练版**（不是独立新架构），权重已以 **MIT** 发布在 Hugging Face（`deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`，305B 参数）。**API 名已于 2026-09-10 退役**："the corresponding models have been retired, their requests are served by the DeepSeek‑V4.1‑Flash‑1017 model and billed at the Flash price"。
- **Provider / access:** DeepSeek API `deepseek-v4-flash-vision-exp`（**已退役**）；OpenRouter `deepseek/deepseek-v4-flash-vision-exp`（canonical `deepseek-v4-flash-vision-exp-20260821`，创建于 2026-08-21 11:26 UTC，provider: DeepInfra / GMICloud / SiliconFlow）；Hugging Face `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`。
- **Release / knowledge:** released **2026-08-21**；2026-09-10 API 名退役。Knowledge cutoff: DeepSeek 未公布（models.dev 记 `2025-05`）。
- **IDs:** `deepseek-v4-flash-vision-exp`（DeepSeek API / OpenRouter），`deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`（HF）。
- **Context window:** **1,048,576**（HF config `max_position_embeddings` 1,048,576，YaRN rope）。Max output: 各 provider 不同 —— DeepInfra fp8 **262,144**、SiliconFlow 393,216、GMICloud 943,717。
- **Modalities:** 输入 文本+图像 → 输出 文本（**无视频**）；JPEG/PNG/GIF/WebP，每请求 ≤600 张图，≤1024 tokens/图。
- **Reasoning controls:** `reasoning_effort` = max / high / low / none（默认 high）；厂商用 DeepSeek Harness minimal 模式、`max`、temperature 1.0、top_p 0.95 跑分。
- **Pricing (as of 2026-10-19, per 1M tokens):** 现按 Flash 价计 —— **peak $0.30 in / $1.32 out，off-peak $0.15 / $0.60**；OpenRouter 上 DeepInfra $0.2156/$0.6468，GMICloud 与 SiliconFlow $0.44/$1.32；AA 记 $0.44/$1.32，cache hit **$0.014**（97% 折扣）。并发上限 2500。
- **Architecture (HF config):** `DeepseekV4ForCausalLM`，**43 层**，**256 个路由专家 / 每 token 选 6 + 1 共享**，hidden 4096，视觉塔 32 层 dim 1024、patch 14、downsample 3，DFlash attention、DSpark 投机解码、fp8 权重。

### Raw benchmarks found

> 厂商 changelog / HF card 标为 "vendor"；Artificial Analysis 为独立测量来源。

Agent / tool use:

- Terminal-Bench 2.1: **83.9**（vendor）/ **74.16%** (AA)；Terminal-Bench 4.0 **12.12%** (AA)
- Toolathlon-Verified **75.9**（vendor，HF eval export 复现）；AutomationBench (Public) **25.7**（vendor）/ 47.47% (AA objective-share)；Agents' Last Exam **27.3**（vendor）；ApexBench (Pass@1) **36.5**（vendor）/ APEX-Agents-AA 38.0% (AA)
- Chartography **64.3**（vendor）；ZeroBench (Pass@5) **35.0**（vendor）；Cybergym **75.3**（vendor）；NL2Repo **57.7**（vendor）
- τ³-bench banking **41.03%** (AA)；τ²-bench: not published；GDPval-AA **1546.78 Elo**（AA，normalized 52.3%）；AutomationBench 47.47%；EnterpriseOpsGym 47.09%
- Claw-Eval / Toolathlon-independent / MCP-Atlas / BrowseComp: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **91.3%** (AA)；HLE **34.5%** (AA)；AA-LCR **81.3%** (AA)；CritPt **10.9%** (AA)；Omniscience index **-17.63** / accuracy **38.57%** / hallucination **91.48%** (AA)
- Artificial Analysis Intelligence Index: **34.84**（#15 / 173），coding index **65**，agentic index **47.5**，**203.9 t/s** (#24/151)，**$1.038/task**，170M output tokens，1M ctx
- 无 FrontierMath / AIME / ARC-AGI 公布

Coding:

- DeepSWE v1.1 **59.3**（vendor，HF eval export 复现）；DSBench-Hard **63.6**（vendor）；SciCode **49.65%** (AA)；Terminal-Bench 2.1 83.9；SWE-bench Verified / LiveCodeBench / FrontierCode / FrontierSWE: **no verified public score found**

Long context:

- **无 MRCR / RULER / GraphWalks 公布。** 1M ctx，262K–943K max output（provider 差异）。

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 76/100.** Terminal-Bench 2.1 83.9% (vendor) / 74.16% (AA), Toolathlon-Verified 75.9%, NL2Repo 57.7%, Chartography 64.3%, Cybergym 75.3%, AutomationBench 25.7% (vendor) / 47.47% (AA), ApexBench 36.5%, Agents' Last Exam 27.3%, GDPval-AA 1546.78. Capped by AutomationBench in the 25–47% band, by Agents' Last Exam and ApexBench under 40%, and by the absence of τ²-bench, MCP-Atlas, BrowseComp and Claw-Eval rows.
- **Reasoning: 74/100.** GPQA Diamond 91.3%, AA-LCR 81.3%, HLE 34.5%, CritPt 10.9%, and an AA Intelligence Index of **34.84 (#15/173)** with a Coding Index of 65. Capped by the **negative Omniscience index (-17.63) with a 91.48% hallucination rate** — the model is often wrong and does not hedge — by HLE under 35%, by CritPt under 11%, and by the absence of FrontierMath, AIME and ARC-AGI measurements.
- **Context window: 95/100.** **1,048,576** tokens (HF config `max_position_embeddings`, YaRN rope) with a 262,144 max output on the cheapest provider — the rubric's top tier (≥1M = 95–100). One point below only because **no long-context retrieval measurement exists** and the max-output figure varies by provider (262,144 / 393,216 / 943,717).
- **Multimodal: 86/100.** Text + image in with text out (no video), with a published vision set: MMMU-Pro 74.80% (AA), ZeroBench (Pass@5) 35.0% (vendor), Chartography 64.3% (vendor), and per-image limits of ≤1024 tokens / ≤600 images per request. Held at 86 rather than higher because **no video support exists** and the measured vision evidence is a single AA row plus two vendor rows.
- **Coding: 76/100.** DeepSWE 59.3% (vendor), Terminal-Bench 2.1 83.9% (vendor) / 74.16% (AA), Toolathlon-Verified 75.9%, DSBench-Hard 63.6%, SciCode 49.65% (AA). Capped by DeepSWE under the 74% anchor, by Terminal-Bench 4.0 at 12.12%, by SciCode under 50%, and by the total absence of SWE-bench Verified, LiveCodeBench, FrontierCode and FrontierSWE numbers for this model.
- **Cost efficiency: 93/100.** The evaluated route is billed at the **Flash price** since the API name's retirement: peak **$0.30 in / $1.32 out**, off-peak $0.15/$0.60, with a **$0.014 cache hit** (97% discount) per Artificial Analysis. That is far below the rubric's "~$1.25/$4.25 ≈ 88" tier. The deductions are the 2× peak-hour pricing, the fact that the route now silently serves a *different* model (V4.1 Flash 1017), and the absence of an OpenCode Zen row.
- **Overall Score: 81.4/100.** (76 + 74 + 95 + 86 + 76) / 5 = 81.4 — best-fit: a **fast (203.9 t/s) cheap first-of-its-kind vision build** with 1M context and MIT weights, whose capability profile is that of V4 Flash plus image understanding — solid tooling (Toolathlon 75.9%, TB 2.1 83.9%) but a 91.5% hallucination rate and no coding-eval coverage; and whose API id has already been retired, so it is now a *weights-and-history* entry rather than a service.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 2.1 — 83.9% (vendor) vs 74.16% (AA).** A ~10-point harness gap; AA is the anchor.
2. **Parameters — 305B (HF card) vs 284B (AA) with 13B active.** Same checkpoint, different counting; both are recorded.
3. **Pricing — $0.2156/$0.6468 (DeepInfra on OpenRouter) vs $0.44/$1.32 (GMICloud, SiliconFlow, AA) vs the current DeepSeek peak $0.30/$1.32.** Three hosts, three prices for one model.
4. **Open vs proprietary.** HF ships **MIT** weights; AA still records `isOpenWeights: false` / "Proprietary model" — the tracker is out of date, and this report follows the weights.
5. **Status.** models.dev marks the id **deprecated**, canonicalises it to `deepseek/deepseek-v4.1-flash-1017` and dates it **2026-10-17**, while DeepSeek's own changelog retired it on **2026-09-10** and says requests now route to V4.1 Flash 1017 "and billed at the Flash price". The vendor's date is used.
6. **Max output — 256K (DeepInfra fp8) vs 384K (SiliconFlow) vs ~922K (GMICloud).**
7. **No independent tracker has published a full row for this model:** BenchLM has **no page** for it and Vals AI has **no page** for it, so AA's payload and DeepSeek's own tables are the entire evidence base.

### Notes on identity

- `deepseek-v4-vision-exp` denotes **DeepSeek-V4-Flash-Vision-Exp** — a vision-enabled continued-training build of V4 Flash 0731, **not** a V4.1 checkpoint and **not** a separate model family. It is a *configuration* of the same lineage, in the same way Gemini 3.8 Flash / Flash Cyber and Claude Fable 5.1 / Mythos 5.1 are configurations.
- Because DeepSeek retired the id on 2026-09-10, any live call to `deepseek-v4-flash-vision-exp` is now served by **DeepSeek-V4.1-Flash-1017** — a different model with different benchmarks. This folder therefore documents a retired artifact, and any new measurement of it would measure its replacement, not the original.
- The weights remain downloadable and MIT-licensed, so self-hosting still yields the original 2026-08-21 behaviour.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — DeepSeek's API docs (pricing, vision guide, model changelog with the retirement notice), the `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp` Hugging Face card and `config.json` (architecture, context, vision tower), Artificial Analysis (`/models/deepseek-v4-flash-vision` with its per-evaluation payload), OpenRouter's API and description, models.dev, and negative verification at BenchLM, Vals AI, ARC Prize, Epoch AI, swebench.com and LMArena. Vendor-vs-independent conflicts — the Terminal-Bench gap, the parameter and price counts, and the open-vs-proprietary labelling — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Vision_Exp.md`, using the same headings.
