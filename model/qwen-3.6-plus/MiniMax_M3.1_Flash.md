# Qwen3.6 Plus — findings by MiniMax M3.1 Flash

- Source: Alibaba (`qwen3.6-plus`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6 Plus
- **Short description:** Alibaba's **April 2026 proprietary mid-tier** multimodal model — live from 2026-04-02 and now **deprecated** ("Alibaba has launched a newer release, Qwen3.7 Plus"). It was a broad "does everything" SKU (text+image+video, 1M context, an extensive Qwen tool suite) at a mid price, and it is the weakest-indexed model in this dataset that still carries a 1M window.
- **Provider / access:** Qwen Cloud / DashScope `qwen3.6-plus` (OpenAI-compatible); OpenRouter `qwen/qwen3.6-plus` (canonical `qwen3.6-plus-04-02`). **Proprietary** — "Qwen3.6 Plus is proprietary. The model weights are not publicly available." No Hugging Face or ModelScope card.
- **Release / knowledge:** released **2026-04-02** ("Qwen 3.6 Plus is a model from Alibaba, released April 2, 2026"; AA "was released on April 2, 2026"). Knowledge cutoff: **not disclosed**.
- **IDs:** `qwen3.6-plus` (Qwen Cloud / DashScope), `qwen/qwen3.6-plus` (OpenRouter).
- **Context window:** **1M** (max input 991K; 983K in thinking mode). Max output **65,536** (QwenCloud and OpenRouter both); Vals records "66k" and a 984k context.
- **Modalities:** text + image + video in, text out.
- **Reasoning controls:** thinking enabled via `extra_body={"enable_thinking": True}` — **no `reasoning_effort` levels are documented** for this model.
- **Pricing (as of 2026-10-19, per 1M tokens):** **$0.50 in / $3.00 out** for inputs ≤256K (Qwen Cloud), explicit cache write $0.625, explicit cache read $0.05; **OpenRouter lists $0.325 / $1.95** with a >256K override of $1.30 / $3.90.
- **Architecture:** proprietary — "Alibaba has not disclosed the model size or parameter count." (The 397B/17B figure that circulates for "Qwen3.7-Plus" and "Qwen3.5" does **not** belong to this model.)

### Raw benchmarks found

> The vendor launch table (BenchLM-cited to `qwen.ai/blog?id=qwen3.6`) is marked "vendor"; Artificial Analysis, Vals AI and the BenchLM ledger are independent. The Qwen blog is client-rendered, so only BenchLM's citations of it were available.

Agent / tool use:

- Terminal-Bench 2.0: **61.6%** (vendor) / Terminal-Bench 2.1 **61.42%** (AA) / **53.18%** (Vals AI)
- Terminal-Bench 4.0: **no verified public score found** (AA's field is null)
- Toolathlon **39.8%**; MCP-Tasks 74.1%; MCP Atlas **48.2%**; WideResearch **74.3%**; ClawEval **58.8%**; QwenClawBench 57.2%
- Tau3-bench **70.7%** (vendor) / 20.82% (AA); Tau2-bench **97.66%** (AA); AutomationBench: not published; APEX-Agents: not published
- OSWorld 2.0: not published for this model (Qwen3.7 Plus's 2.8% figure belongs to a different model); Finance Agent v2 40.85% (Vals); Tax Agent 7.68% (Vals); IPI: not published
- GDPval-AA **990.26** (AA) / 24.5% normalized; AA-Briefcase: not published for this model

Reasoning / knowledge:

- GPQA Diamond: **88.18%** (AA) / **90.4%** (vendor) / **87.37%** (Vals AI)
- HLE **27.85%** (AA) / 28.8% (vendor); AIME 2026 **95.3%** (vendor); HMMT Feb-2025 **96.7%** (vendor) / Nov-2025 94.6% / Feb-2026 87.8%; MMAnswerBench 83.8%
- MMLU-Pro **88.5%** (vendor) / 87.67% (Vals); MMLU-Redux 94.5%; C-Eval 93.3%; SuperGPQA 71.6%; IFEval **94.3%**; IFBench **75.17%** (AA) / 75.8% (vendor); MMLU-ProX 84.7%; NOVA-63 57.9%
- Artificial Analysis Intelligence Index: **27\*** (estimated, #111/217) / 27 (OpenRouter mirror); Coding Index **54.5**; 55.9 t/s (#148/186), TTFT 2.07s
- CritPt **2.86%** (AA); LCR 78.33% (AA); MLCR-AA not published; Omniscience index **0.88** (accuracy 26.38%, hallucination 34.64%)
- FrontierMath: **no verified public score found** for this model

Coding:

- SWE-bench Verified: **78.8%** (vendor) / **73.40%** (Vals AI); SWE-bench Pro **56.6%**; SWE-bench Multilingual **73.8%**
- LiveCodeBench v6 **87.1%** (vendor) / **85.95%** (Vals AI); SciCode: not published; Terminal-Bench 2.0 61.6%; Vibe Code Bench v1.1 **25.57%** (Vals); ProgramBench **0.00%** (Vals)
- No DeepSWE, no FrontierCode, no CursorBench, no FrontierSWE row for this model

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published.** 1M window; the vendor's own long-context-adjacent rows are AI-Needle **68.3** and LongBench v2 **62** — the weakest such numbers among the Qwen models here.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 66/100.** A broad but shallow tool profile — Terminal-Bench 2.0 **61.6%** / 2.1 61.42% / 53.18%, Toolathlon 39.8%, MCP Atlas 48.2%, MCP-Tasks 74.1%, WideResearch 74.3%, ClawEval 58.8%, τ²-bench 97.66%, τ³-Banking 20.82%, IFBench 75.17%. Capped by the rubric's anchors (TB2.1 ~88%+ → 61.4% at best; τ3 ~50%+ → 20.82% on AA against the vendor's 70.7%; GDPval ~1750+ → 990.26), by **Terminal-Bench 4.0 having no public score at all**, by the absence of any AutomationBench, APEX-Agents or IPI row, and by Finance Agent v2 40.85% and Tax Agent 7.68%.
- **Reasoning: 74/100.** GPQA Diamond 87.37–90.4%, MMLU-Pro 87.67–88.5%, MMLU-Redux 94.5%, C-Eval 93.3%, AIME 2026 95.3%, HMMT Feb-2025 96.7%, IFEval 94.3%, IFBench 75.17%. Capped by the AA Intelligence Index of **27\*** (#111/217 — the weakest estimated index among the Qwen models here), by HLE 27.85–28.8%, CritPt **2.86%**, by the low 26.38% Omniscience accuracy, and by the absence of any FrontierMath or ARC-AGI measurement.
- **Context window: 94/100.** 1M context with a 65,536 max output — the rubric's top tier (≥1M = 95–100), with the output cap just above the 64K line. One point below because **no long-context retrieval measurement exists** and because the vendor's own long-context-adjacent numbers are the weakest in the Qwen set (AI-Needle 68.3, LongBench v2 62).
- **Multimodal: 88/100.** Text, image and video in with text out, with a wide published vision set — MMMU-Pro 78.8% (vendor) / 84.16% (Vals) / 77.98% (AA), MMMU 86.0%, MathVision 88.0%, VideoMMMU 84.0%, CharXiv 81.5%, V* **96.9%**, VITA-Bench 44.3%, ScreenSpot-Pro 68.2%. Held at 88 because there is **no audio support** (the rubric's 90–100 band needs audio or non-text output) and the strongest vision rows are vendor-published.
- **Coding: 72/100.** SWE-bench Verified 78.8% (vendor) / 73.40% (Vals), SWE-bench Pro 56.6%, Multilingual 73.8%, LiveCodeBench v6 87.1% / 85.95%, Terminal-Bench 2.0 61.6%, Vibe Code Bench 25.57%. Capped by the absence of any DeepSWE, FrontierCode, CursorBench or FrontierSWE row, by ProgramBench 0.00%, by Vibe Code Bench 25.57%, and by SWE-bench Pro 56.6%.
- **Cost efficiency: 82/100.** The evaluated route is Qwen Cloud at **$0.50 in / $3.00 out** per 1M with a $0.05 explicit cache read, which the rubric places at roughly 82; OpenRouter's $0.325/$1.95 is materially cheaper. The deductions are the >256K override ($1.30/$3.90), the model's low measured value density (AA index 27 at $0.50/$3.00 — the same price band buys far more from Qwen3.8-Flash-Next at $0.15/$0.47 with index 40), and the absence of an OpenCode Zen route.
- **Overall Score: 78.8/100.** (66 + 74 + 94 + 88 + 72) / 5 = 78.8 — best-fit: a **broad but shallow April-2026 multimodal generalist** — 1M context, text+image+video, a deep tool suite (MCP-Tasks 74.1%, WideResearch 74.3%, τ²-bench 97.7%) and solid academic knowledge (MMLU-Redux 94.5%, C-Eval 93.3%) — whose agentic and coding numbers (Terminal-Bench 2.1 ~55–61%, Terminal-Bench 4.0 unmeasured, Vibe Code 25.6%, ProgramBench 0%) and knowledge reliability (HLE 28%, Omniscience 26%) place it clearly below Qwen3.7 Plus (80.0) and Qwen3.8 Max (87.6) at similar or lower prices.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Price — $0.50/$3.00 (Qwen Cloud, AA) vs $0.325/$1.95 (OpenRouter).** The vendor price anchors the cost score; the aggregator difference is recorded.
2. **AA index — 27\* (estimated) vs 27 (OpenRouter and BenchLM).** Consistent, but the index is an *estimate* for this model.
3. **Context — 1M (Qwen Cloud, AA) vs 984k (Vals).** Minor.
4. **HLE — 27.8% (AA) vs 28.8% (vendor).** Small.
5. **GPQA Diamond — 88.18% (AA) vs 90.4% (vendor) vs 87.37% (Vals).**
6. **Tau3-bench — 70.7% (vendor) vs 20.82% (AA).** A 50-point gap on the same benchmark family, the largest single conflict in this entry; both are listed and the AA figure is used for the cap.
7. **SWE-bench Verified — 78.8% (vendor) vs 73.40% (Vals).** Harness difference.
8. **Parameter count is not published at all** — the 397B/17B figure belongs to Qwen3.7-Plus and Qwen3.5, and mis-attribution of it to this model is called out explicitly.
9. **Primary-source limitation:** `qwen.ai/blog?id=qwen3.6` is client-rendered and yielded no text, so every vendor number here is a BenchLM citation of that blog rather than a direct read; the qwen.ai citation metadata was all that could be retrieved.
10. **The model is deprecated** (AA banner: "Alibaba has launched a newer release, Qwen3.7 Plus"), so live measurements are frozen history.

### Notes on identity

- `qwen3.6-plus` is a **distinct, proprietary** model from `qwen3.7-plus` (its successor), from `qwen3.8-max` / `qwen3.8-max-0902` / `qwen3.8-flash` and from the open-weight Qwen3.6 releases (35B-A3B, 27B — note the **27B open model is a different artifact from this 27B-free Plus**).
- It is not a tier of `qwen3.6-max`; no ids, prices or weights link them, and Alibaba published no size for the Plus.
- Effort control is limited to a thinking on/off flag — this model predates the `reasoning_effort` ladder that Qwen3.7-Plus and the Qwen3.8 family expose.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — the Qwen3.6-Plus launch material as cited by BenchLM (the qwen.ai blog itself is client-rendered), QwenCloud and Alibaba Cloud Model Studio model pages, Artificial Analysis (model page and per-evaluation payload, index marked as an estimate), Vals AI, the BenchLM evidence ledger, OpenRouter's API and model page, and negative verification at OpenCode Zen, Hugging Face, ModelScope, swebench.com, ARC Prize, Epoch AI and LMArena. Vendor-vs-independent conflicts — the 50-point τ³-bench gap, the SWE-bench spread and the two-host price gap — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6_Plus.md`, using the same headings.
