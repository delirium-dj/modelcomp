# GLM-4.6V-Flash — findings by Qwen 3.8 Max

- Source: Z.ai / Zhipu AI (`glm-4.6v-flash`; id `zhipuai/glm-4.6v-flash`; AA `glm-4-6v-flash` → **404, no independent AA page**)
- Date: 2026-11-01
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** GLM-4.6V-Flash is the **~9B lightweight vision-language** member of Z.ai's GLM-4.6V multimodal family (released 8 Dec 2025, MIT open weights), NOT a text model and NOT the 106B/12B-active flagship. It is image+video+text+file → text, natively reasoning (thinking mode), 128K context, and the **first GLM-V to ship native multimodal Function Calling** (images/screenshots passed directly as tool params, visual tool outputs folded back into the reasoning chain). Its 36 self-reported benchmarks are genuinely strong *for its size class* (MMBench 86.9, OCRBench 84.7, MathVista 82.7, RefCOCO 85.6, AI2D 89.2) and it "outperforms Qwen3-VL-8B" per the release framing — but the model card itself admits **pure-text QA "still has significant room for improvement"**, agentic execution is weak-to-mid (OSWorld 21.1, MMBrowseComp 7.1, AndroidWorld 42.7), and long-context/video degrade (LVBench 49.5, MMLongBench-128K 63.4). **The curated `meta.json` is materially wrong on every axis** (calls it "text-only", "1M context", "$5/$25", "general text tasks") and is corrected throughout this report. Positioned as "Completely Free" (free API tier + MIT self-host), so cost efficiency is exceptional, but cost is not counted in Overall.

## Model card

- **Name:** GLM-4.6V-Flash
- **Short description:** Z.ai's ~9B open-weight multimodal (vision-language) Flash model — image/video/text/file in, text out, native function calling, 128K context — optimized for local / edge / low-latency deployment; the sibling of the 106B GLM-4.6V foundation model.
- **Provider-access:** Z.ai Open Platform (`api.z.ai`, model string `glm-4.6v` family; **docs list Flash as "Completely Free"**) + self-host via HuggingFace `zai-org/GLM-4.6V-Flash` (vLLM ≥0.12.0 / SGLang ≥0.5.6, Transformers ≥5.0rc). No Artificial Analysis page (404), so **no independent per-token pricing, speed, or Intelligence Index**.
- **Release / knowledge:** Released **8 Dec 2025** (HF `Updated Dec 8, 2025`; z.ai blog same date). Part of the GLM-V line (paper `2507.01006`: GLM-4.1V-Thinking / GLM-4.5V → GLM-4.6V).
- **IDs:** dataset `glm-4.6v-flash`; provider id `zhipuai/glm-4.6v-flash`; HF `zai-org/GLM-4.6V-Flash`; pipeline_tag `image-text-to-text`.
- **Context window:** **128K** (aligned visual encoder; ≈150 pages of complex documents / 200 slides / ~1-hour video in one pass). Eval `max_generate_tokens: 16K`. **(Curated meta "1M tokens" is WRONG.)**
- **Modalities:** **Video / Image / Text / File IN → Text OUT** (a VLM). **(Curated meta "Text in; text out" is WRONG.)** Reasoning/thinking mode toggle (`thinking: {type: enabled}`).
- **Pricing:** "Lightweight, **Completely Free**" positioning on docs.z.ai (free API tier), plus free MIT open weights for self-host. **(Curated meta "$5/$25 per 1M" is unsubstantiated — likely a mis-mapped general-GLM price; no evidence for any paid tier on Flash.)**
- **Architecture:** `Glm4vMoeForConditionalGeneration` — a **Mixture-of-Experts** VLM (~9B params, "lightweight"; docs describe a 3:1 Gated-MLA/hybrid attention backbone in the wider Ling/GLM lineage — treat exact MoE split as undisclosed for the Flash). Vision encoder aligned to 128K. Decoding for leaderboard: top_p 0.6, top_k 2, temp 0.8, rep-penalty 1.1.

### Raw benchmarks found

> Provenance: the 36 values below are from the **GLM-4.6V-Flash HF `model-index` (self-reported / vendor-published model card, commit 7 Dec-added evaluations)** — NOT independently reproduced (no AA page, no third-party harness transcribed). Per RULES, vendor self-reported scores are recorded but discounted for independence; they are for a 9B model and are compared against **similar-size** open VLMs, so class-relative "SoTA" claims don't imply frontier absolute performance. The **106B flagship GLM-4.6V's** higher numbers and its cloud positioning are **NOT** credited to the Flash.

- **Agent / tool use (native multimodal FC is a headline feature, execution is mixed):** Design2Code **69.8**, Flame-React-Eval **78.8**, WebVoyager **71.8**, WebQuest-SingleQA **75.1**, WebQuest-MultiQA **53.4**, AndroidWorld **42.7**, OSWorld **21.1**, MMBrowseComp **7.1** (browsing/agentic is the clear weak spot).
- **Reasoning / knowledge (vision-grounded; pure-text weaker per self-admission):** MMMU(Val) **71.1**, MMMU_Pro **60.6**, MathVista **82.7**, AI2D **89.2**, VideoMMU **70.1**, WeMath **60.0**, DynaMath **43.7**, ZeroBench(sub) **22.5**, MMStar **74.7**, BLINK(Val) **65.5**, MUIRBENCH **75.7**, MMBench V1.1 **86.9** / (CN) **85.9**.
- **OCR / chart / grounding / spatial (relative strength):** OCRBench **84.7**, OCR-Bench_v2 EN **63.5** / CN **59.5**, ChartQAPro **62.6**, ChartMuseum **49.8**, CharXiv-Reasoning **59.6**, RefCOCO-avg(val) **85.6**, Ref-L4-test **87.7**, OmniSpatial **50.6**, TreeBench **45.7**.
- **Long context / video (degrades at length):** MMLongBench-Doc **53.0**, MMLongBench-128K **63.4**, LVBench **49.5**.
- **Coding:** No SWE-bench / LiveCodeBench / Terminal-Bench published (it is a VLM, not a coding model). Closest proxies are frontend-visual: Design2Code 69.8, Flame-React-Eval 78.8, and documented "pixel-level HTML/CSS replication + natural-language visual debugging" (anecdotal, not benchmarked).
- **Speed / cost:** No AA Speed/TTFT/Cost (page 404). Docs position Flash as the "high-speed, low-latency, local/edge" tier and "Completely Free"; 9B size implies fast self-host, but **no measured tok/s is available**.
- **Meta-verification:** every curated `meta.json` field failed independent verification — corrected: name (family not flagship), modality (VLM not text-only), context (128K not 1M), pricing (free not $5/$25), standout ("latest GLM iteration with enhanced capabilities" is a placeholder; real standout = first native multimodal function-calling open VLM). **None inherited.**

> Self-reported and unaudited: the entire quantitative record is the vendor model card. There is no Artificial Analysis Intelligence Index (page 404), no independent Arena/Vision leaderboard, and no third-party reproduction transcribed. Treat all vision "SoTA" claims as class-relative, vendor-side.

### Normalized scores (1–100)

- **Tool use: 62/100.**
- **Reasoning: 66/100.**
- **Context window: 60/100.**
- **Multimodal: 76/100.**
- **Coding: 58/100.**
- **Cost efficiency: 92/100.**
- **Overall Score: 64/100.**

Overall = half-up mean of the five quality dims (62+66+60+76+58)/5 = 64.4 → **64**. Cost efficiency (exceptional: free API + MIT self-host) is scored but NOT counted, per contract. Curated `average.md` = 64.2 → **divergence −0.2** (within noise; the corrected VLM identity preserves a near-mid score). Multimodal is set high (76) — this is a genuine multimodal VLM with broad, above-class vision/OCR/grounding evidence, the opposite of the corpus's text-only=50 convention; context is 128K → 60 (same band as the 128K-pruned codex tier), with long-context/video benchmarks (LVBench 49.5, MMLongBench 63.4) showing length degradation.

---

## Signature

- **Provided by:** Qwen 3.8 Max (`qwen/qwen-3.8-max`)
- **Method:** Fresh independent public web research (≥3 sources): docs.z.ai GLM-4.6V product/API page (family tiers + 128K + native FC + "Completely Free"), the `zai-org/GLM-4.6V-Flash` HF model-index commit (36 Flash-specific benchmark values, MIT, image-text-to-text), z.ai blog / press via search (106B vs 9B split, Qwen3-VL-8B comparison, Dec 8 2025). AA page `glm-4-6v-flash` = 404 (no independent index/speed/cost); openai-style first-party blog 403 not re-fetched. All numbers vendor self-reported and discounted.
- **Future sources:** Any AA listing for the Flash (would add independent Index/Speed/Cost); LMArena vision leaderboard placement; third-party OCRBench/MMMU reproductions; Z.ai pricing page confirmation of the free tier.
