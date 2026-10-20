# Step 5 Preview — findings by MiniMax M3.1 Flash

- Source: StepFun (`step-5-preview`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun (阶跃星辰 / Step AI, China) 的 2026 年 8/9 月旗舰 —— 一个 **600B 总参数 / 27B 激活** 的稀疏 MoE，原生多模态（文本+图像+视频），在 AA 开放权重榜上 **#4（智能指数 44）**，并以 **"an early preview of the architecture used in Qwen4"** 的姿态发布。权重以 FP8 + BF16 形式发布在 Hugging Face（2026-10-15），采用 **StepFun Model License 1.0**（类 Apache-2.0 + 商用条件）。
- **Provider / access:** StepFun 平台 `step-5-preview`（`https://api.stepfun.com/v1` 中国区 / `https://api.stepfun.ai/v1` 全球区）；OpenRouter `stepfun/step-5-preview`（canonical `stepfun/step-5-preview-20261008`）；Hugging Face `stepfun-ai/Step-5-Preview`；self-host served-model-name `step5`（vLLM/SGLang）。**OpenCode Zen 现行模型表中没有 Step 5 条目** —— 只有 models.dev 里 `opencode` provider 下一个已标记 deprecated 的 `step-5-preview-free`（曾"免费一周"）。
- **Release / knowledge:** 2026 年 9 月（models.dev 记 2026-09-16，AA 记 2026-09-18，Vals 记 2026-09-28，权重实际 2026-10-15 上 HF）。Knowledge cutoff: **未公布**（OpenRouter `knowledge_cutoff: null`）。
- **IDs:** `step-5-preview`（StepFun / models.dev）、`stepfun/step-5-preview`（OpenRouter）、`stepfun-ai/Step-5-Preview`（HF）。
- **Context window:** **1M**（OpenRouter 1,048,576；AA "1.0M tokens"；StepFun 中国区 1,000,000 vs 全球区 1,024,000）。Max output: 官方文档 **64k**，HF 卡片写 "up to 1M"（冲突；OpenRouter 上 StepFun 端点 64,000、InferenceNet 131,072、Featherless 32,768）。
- **Modalities:** 输入 文本+图像+视频 → 输出 文本（OpenRouter / models.dev）；AA 只列 "text and image"，Vals 记 "Video input not supported"。
- **Reasoning controls:** 强制思考；`reasoning_effort` = low / medium / high（`output_config.effort`）；`max_tokens` "defaults to `INF`; no limit is applied and the model determines it automatically"。厂商自己的评测跑在 **High** 档。
- **Pricing (as of 2026-10-19, per 1M tokens):** **$1.00 in（cache miss）/ $0.10 cache hit / $2.70 out**（StepFun 文档，OpenRouter StepFun 端点一致；InferenceNet cache read $0.05）。限速按 V0–V4 档（100–2,600 RPM；500K–13M TPM）。
- **Architecture:** Sparse MoE，**600B 总参数 / 27B 激活**，92 个 transformer block，Gated SWA + sparse full attention（"Sparse GQA"，B=8, k=4096）。

### Raw benchmarks found

> 厂商 launch table 与 HF eval export 标为 "vendor"；Artificial Analysis、Vals AI、BenchLM 为独立来源。

Agent / tool use:

- Terminal-Bench 2.1: **85.0%**（vendor / BenchLM）；Terminal-Bench 4.0: **33.30%**（vendor / AA）/ **31.82% ± 2.62**（Vals AI）
- MCP Atlas **85.6%**；Toolathlon-Verified **74.1%**；BrowseComp **88.7%**；DRACO 83.3%；JobBench **59.0%**；AutomationBench **44.0%**（vendor）/ **50.96%**（AA）；APEX-Agents **37.8%**（vendor）/ 37.98% (AA)；Agents' Last Exam **29.5%**；CyberGym **84.7%**；Hermes Index **32.8%**；150 agent tasks **69.2%**；GDPval-AA **1566 Elo**（vendor）/ 1586.63 (AA)
- AA-Briefcase Elo **1424**（AA）；GDP.pdf 14.8%；ITBench-AA 55.56%；Harvey LAB-AA 93.4%；EnterpriseOps-Gym-AA 47.18%
- τ²/τ³-bench、Terminal-Bench-Hard、Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **93.5%**（vendor / BenchLM）；HLE **46.5%**（vendor）/ 46.48% (AA)；AA-LCR **88.3%** (AA) / 88.33%；CritPt **20.9%** (AA) / 20.86%；Critical Physics Tasks **20.9%**（BenchLM，喂给整体分）
- Artificial Analysis Intelligence Index: **44**（**#4 / 121** 开放权重类），92.9 t/s (#31/78)，$1.03/task (#38/43)，160M output tokens (#29/47)，TTFT 2.55s，**1 个 provider**（"currently available through 1 API provider that we benchmark and track"）
- Omniscience index **16.38** / accuracy **41.53%** / hallucination **43.03%** (AA)；MLCR-AA 16.67%
- 无 FrontierMath / AIME / ARC-AGI 公布

Coding:

- DeepSWE v1.1 **67.7%**（vendor，HF eval export 复现）；ProgramBench **80.5%**（vendor，BenchLM best-verified）；sweMarathon **72.7%**（vendor，best-verified）；SciCode **58.9%**（vendor）/ 58.91% (AA)；Terminal-Bench 2.1 85.0%；Vibe Code Bench v1.1 **70.40% ± 4.27**（Vals AI，OpenHands harness）；Scientific Code Benchmark 58.9%；MLS-Bench Lite 40.5%
- Terminal-Bench-Science 0.1 **2.38%** (AA) / 2.86% (Vals)；SWE-bench Multimodal 40.83%（Vals）；**无 SWE-bench Verified、LiveCodeBench、FrontierCode、FrontierSWE 数字**

Long context:

- **无 MRCR / RULER / GraphWalks / needle-in-haystack 公布。** 1M 窗口。

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 82/100.** Terminal-Bench 2.1 **85.0%** (near the ~88% anchor), MCP Atlas **85.6%**, Toolathlon-Verified 74.1%, BrowseComp **88.7%**, DRACO 83.3%, JobBench 59.0%, CyberGym 84.7%, AutomationBench 44.0% (vendor) / 50.96% (AA), APEX-Agents 37.8%, Agents' Last Exam 29.5%, GDPval-AA 1566–1587. Capped by AutomationBench in the 40s, by APEX-Agents and Agents' Last Exam under 40%, and by the absence of any τ-bench, Claw-Eval or Hermes-level independent row beyond the Hermes Index (32.8%).
- **Reasoning: 82/100.** GPQA Diamond **93.5%**, AA-LCR **88.33%** (the second-highest LCR of any model measured here), HLE 46.5%, CritPt 20.9%, and an AA Intelligence Index of **44 — #4 among open-weight models**. Capped by HLE under 47%, by the low 41.53% Omniscience accuracy, by Critical Physics Tasks at 20.9%, and by the absence of any FrontierMath, AIME or ARC-AGI measurement.
- **Context window: 94/100.** **1M** context (1,048,576 on OpenRouter; StepFun China 1,000,000 vs Global 1,024,000) with a 64k output cap — the rubric's top tier (≥1M = 95–100) on the window, with the output cap at the 64k line. One point below because **no long-context retrieval measurement exists** and the max-output figures disagree across sources (64k docs / 131,072 InferenceNet / 32,768 Featherless).
- **Multimodal: 87/100.** Text + image + **video** input — the rubric's "+video/PDF = 75–90" band — with MMMU-Pro 76.36% (AA) and OfficeQA Pro 60.3% (vendor). Held at 87 because the vision evidence is thin (two published rows) and AA and Vals both record **no video support** despite the vendor and OpenRouter advertising it.
- **Coding: 80/100.** DeepSWE 67.7%, Terminal-Bench 2.1 85.0% (above the 85% anchor), ProgramBench **80.5%** (the best ProgramBench in the catalogue), sweMarathon **72.7%** (best-verified), SciCode 58.91%, Vibe Code Bench 70.40%. Capped by Terminal-Bench 4.0 at 31.82–33.30%, by Terminal-Bench-Science at 2.38–2.86%, by SciCode just under 60%, and by the absence of any SWE-bench Verified, LiveCodeBench, FrontierCode or FrontierSWE number.
- **Cost efficiency: 88/100.** The evaluated route is StepFun's own API at **$1.00 in / $2.70 out** per 1M with a **$0.10 cache hit** (90% discount) — the rubric's "~$1.25/$4.25 ≈ 88" anchor. Artificial Analysis measures $1.03 per Index task. The deductions are the absence of an OpenCode Zen route (the free promotion was withdrawn) and a 160M-token verbosity that is above the open-weight median.
- **Overall Score: 85.0/100.** (82 + 82 + 94 + 87 + 80) / 5 = 85.0 — best-fit: the **strongest open-weight model of the autumn 2026 wave** (AA index 44, #4 open-weight; Terminal-Bench 2.1 85.0%, ProgramBench 80.5%, MCP Atlas 85.6%, BrowseComp 88.7%) with genuine native video input and 1M context at $1/$2.70 — the caveats are its near-zero Terminal-Bench-Science (2.4%), a 2.4% hallucination profile that is fine but a 41.5% accuracy, and a vendor evaluation set that is still mostly first-party.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Release date — 2026-09-16 (models.dev) vs 2026-09-18 (AA) vs 2026-09-28 (Vals) vs 2026-10-15 (weights actually on HF).** Four dates for one release; the HF date is the verifiable one for the weights.
2. **Max output — 64k (StepFun docs) vs "up to 1M" (HF card) vs 131,072 (InferenceNet) vs 32,768 (Featherless).** The vendor's own docs (64k) are used.
3. **Video input — yes (vendor, OpenRouter, models.dev) vs no (AA, Vals).** Recorded; the multimodal score uses the vendor list but does not credit video.
4. **Terminal-Bench 4.0 — 33.3% (vendor/AA/HF) vs 31.82% ± 2.62 (Vals).** Harness difference; AA is the anchor.
5. **AA index — 44 (page) vs 43.7 (OpenRouter API, BenchLM).** Rounding.
6. **Context — 1,000,000 (China) vs 1,024,000 (Global) vs 1,048,576 (OpenRouter).** Regional serving limits.
7. **Cache-hit price — $0.10 (StepFun docs) vs $0.05 (OpenRouter's InferenceNet endpoint).**
8. **Two premise corrections:** the "Vibe Code Bench 71.85%" figure could not be found on Vals, BenchLM or archived BenchLM snapshots (the published value is **70.40%**), and there is **no "AA-AutoDifficulty" benchmark** in BenchLM's 645-slug catalogue — that premise is dropped rather than scored.
9. **AA's own variant page `/models/step-5-preview` 404s** — the canonical AA slug is `step-5` — and there is no AA article, only a Hacker News link ("Stepfun Step 5 Preview (LLM): On AA Pareto frontier", 15 points).

### Notes on identity

- `step-5-preview` is a **distinct model** from Meta's "Muse Spark" family and from Alibaba's Step-derived Qwen line; StepFun's own naming is Step 1/2/3/… and this is the Step 5 preview, with the GA "step-5" id also present in AA's slug list.
- **Identity caveat:** Meta's "Muse Spark" is unrelated; but note that a `step-5` alias exists in AA's index alongside the preview, so the preview-vs-GA split should be checked before treating them as one model.
- Weights are published (FP8 + BF16 on HF, 604B safetensors) under the **StepFun Model License 1.0** — open weights with commercial conditions, not OSI open source.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — StepFun's model card and platform docs, the Hugging Face repository and eval export, the `inside-step-5-preview` technical blog, Artificial Analysis (`/models/step-5`), Vals AI, the BenchLM evidence ledger, OpenRouter's API, models.dev, and OpenCode Zen's catalogue, with negative verification at ARC Prize, Epoch AI, swebench.com, LiveCodeBench and LMArena. Vendor-vs-independent conflicts — the four release dates, the max-output disagreement, the video-support split and the two corrected premises — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_5_Preview.md`, using the same headings.
