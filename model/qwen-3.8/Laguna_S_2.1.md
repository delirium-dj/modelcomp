# Qwen 3.8 — findings by Laguna S 2.1

> Source: opencode/qwen-3.8 (Alibaba/Qwen), e.g. Alibaba Cloud, Artificial Analysis, Kingy AI
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 — mapped here to the base dense open-weights flagship **Qwen3.8 27B (xhigh reasoning variant)** (Alibaba/Qwen). Distinct from the repo's separate `qwen3.8-max` folder (the 2.4T MoE Max variant).
- **Short description:** Alibaba's 27B dense, multimodal, open-weights reasoning model. Leads open-weight models on the AA Intelligence Index in its size class, with strong cost-efficiency; trade-offs are slower (~43 tok/s) and very verbose. Native 260K context, extendable to 1M via YaRN.
- **Provider / access:** Alibaba/Qwen (AliCloud Model Studio + 8 API providers). Open weights on Hugging Face. Apache 2.0 (commercial). Reasoning/thinking (extended/CoT, xhigh), per-message effort, tool calling, structured outputs / JSON mode.
- **Release / knowledge:** Released August 2026 (Alibaba official; AA). Knowledge cutoff: NOT found precisely for the 27B in fetched sources.
- **IDs:** repo id `opencode/qwen-3.8` (Alibaba/Qwen); model profile `Qwen3.8-27B` (xhigh) on Hugging Face. Open-weights (weights downloadable; `noFreeId` not applicable — Apache 2.0 self-host/free route available).
- **Context window:** 260,000 tokens native (Artificial Analysis; ≡ kingy's 262,144) / extends to ~1,000,000 via YaRN scaling (full-window accuracy unproven independently).
- **Modalities:** Text + image + video input → text output (multimodal). No audio; PDF not specified.
- **Pricing (as of 2026-09-23):** $0.50 / $3.00 per 1M input/output (Alibaba API); cache 80% off; blended 7:2:1 ≈ $0.47/MTok; cost per AA Intelligence Index task = $1.01. Cheap vs frontier ($5/$30 GPT-5.5, $10/$50 Fable) but "expensive" in open-weight terms (median $0.05/$0.15).
- **Architecture:** 27B dense decoder-only, open-weights (Apache 2.0), reasoning (xhigh) variant; a non-reasoning variant also exists.

### Raw benchmarks found

> Verified public numbers, sourced per metric. Benchmarks not located are NOT fabricated.

- AA Intelligence Index v4.3.2: **34** — #1/142 open-weights (Medium size class; class median 8) (Artificial Analysis model page, 2026-09). Same v4.3.2 scale on which Fable 5.1 = 26.
- Output speed: **43.3 tok/s** (Alibaba API; below open-weight median 91.1) (AA).
- Cost per Intelligence Index task: **$1.01** (AA).
- Verbosity: ~200M output tokens on the Index (very verbose vs open-weight median 82M) (AA).
- Component evals (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR): Index 34 is their aggregate; isolated public figures NOT FOUND in fetched pages.
- Terminal-Bench (any version) standalone %: NOT FOUND (kingy: "DeepSeek leads Qwen on published Terminal-Bench", Qwen figure not quoted).
- SWE-bench / DeepSWE / LiveCodeBench / SciCode / SWE-Atlas / Toolathon / MCP-Atlas / Tau3-Banking / Tau3-general: NOT FOUND for this model in fetched pages.
- GPQA Diamond / HLE / AA-Omniscience acc / LCR / CritPt / MMMU-Pro / MRCR / RULER: NOT FOUND as standalone for the 27B in fetched pages.
- Knowledge cutoff: NOT FOUND precisely for the 27B.

### Normalized scores (1–100)

> Method: `model-comparison.md` (v4). Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost independent, excluded. Uses **current AA Intelligence Index v4.3.2 = 34**.

- **Tool use: 60/100.** AA Index 34 = #1/142 open-weights (Medium class); Terminal-Bench 4.0 is an Index component. No standalone Terminal-Bench 4.0 / SWE-bench % located → ceiling kept mid.
- **Reasoning: 61/100.** Index 34; xhigh extended-thinking variant; no standalone GPQA/HLE/AA-Omniscience ranks.
- **Context window: 80/100.** 260,000 native tokens (large) with a documented 1,000,000-token YaRN extension — but full-window accuracy at 1M is not independently verified, so not credited at the ≥1M tier.
- **Multimodal: 82/100.** Text + image + video input, text output (+image +video-in). No audio; PDF not verified.
- **Coding: 58/100.** Index 34 (aggregates Terminal-Bench 4.0); kingy: Qwen trails DeepSeek on published Terminal-Bench; no standalone SWE-bench/DeepSWE/LiveCodeBench % located.
- **Cost efficiency: 76/100.** $0.50/$3.00 per 1M in/out — cheap vs frontier, 80% cache discount, $1.01/Index-task; but high among open-weight (median $0.05/$0.15).
- **Overall Score: 68/100.** (60 + 61 + 80 + 82 + 58) / 5 = 341 / 5 = 68.2 → 68.

> **Scale note / discrepancy:** The repo's `model-comparison.md` AI-Rankings average for this model is **83.5**. My score (68) is based on the **current, verifiable AA Intelligence Index v4.3.2 = 34**; on the same v4.3.2 scale, Claude Fable 5.1 scores Index 26 (= 67 here), so a 27B open-weight model at Index 34 plausibly sits near 68, not 83.5. The repo average likely reflects the older Dec-2025 higher index scale (e.g., Fable's pre-release 71) and/or credited the YaRN-1M window as native. The authoritative current figure (34) governs the scores above; both are recorded for reconciliation.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis Qwen3.8-27B model page; Kingy AI "Qwen3.8-27B vs DeepSeek V4 Flash"; benchlm.ai page contained only navigation, no raw rows). Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.
