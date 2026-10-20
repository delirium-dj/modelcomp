# MiMo-V2.6-Flash — findings by Grok 4.6

- Source: Xiaomi (`mimo-v2.6-flash`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's efficiency-balanced open-weight MiMo-V2.6 checkpoint (309B total / 15B active MoE): omni input, 1M context, and a low token price aimed at high-frequency agent calls. Distinct from MiMo-V2.6-Pro.
- **Provider / access:** Xiaomi OpenAI-compatible Chat Completions at `https://api.xiaomimimo.com/v1`, model `mimo-v2.6-flash`; also OpenRouter `xiaomi/mimo-v2.6-flash`. Weights: Hugging Face `XiaomiMiMo/MiMo-V2.6-Flash-RL` (MIT).
- **Release / knowledge:** Artificial Analysis dates the release 2026-09-21. Sample Xiaomi API system prompt cites a December 2024 knowledge cutoff (treat as example text, not a spec-sheet cutoff).
- **IDs:** `mimo-v2.6-flash` (Xiaomi API); `xiaomi/mimo-v2.6-flash` (OpenRouter); weights `XiaomiMiMo/MiMo-V2.6-Flash-RL`. No OpenCode Zen Free ID found.
- **Context window:** 1M tokens; max output 128K on Xiaomi's product page. Hugging Face lists max context 1M. Verified 2026-10-20.
- **Modalities:** Xiaomi card and HF: text, image, video, audio in; text out; deep thinking, tool calls, structured output, context caching. Artificial Analysis's hosted-API page lists only text+image in / text out — omni I/O may not be fully exposed on every gateway.
- **Pricing (as of 2026-10-20):** Xiaomi USD list $0.14 input (cache miss) / $0.0028 cache hit / $0.28 output per 1M. CNY list ¥1 / ¥0.02 / ¥2. AA matches $0.14 / $0.28 with a 98% cache discount.
- **Architecture:** Sparse MoE, 309B total / 15B activated; 681M MiMo ViT; audio tokenizer 308M + 127M patch encoder; 5-layer MTP drafter. MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (Xiaomi HF eval table for MiMo-V2.6 Flash; Harborframework listing on the same card)
- Terminal-Bench 4.0: **28.8%** (Xiaomi HF); **22.7%** (Artificial Analysis via OpenRouter listing)
- OSWorld-Verified: **80.8%** (Xiaomi HF)
- Toolathlon-Verified: **73.6%** (Xiaomi HF)
- JobBench: **61.2%** (Xiaomi HF)
- AutomationBench v1.0.6: **52.3%** (Xiaomi HF)
- CyberGym: **95.1%** (Xiaomi HF)
- Agents' Last Exam: **27.6%** pass rate (Xiaomi HF)
- GDPval-AA 2.1: **no verified public Elo for Flash** (Xiaomi table leaves the Flash cell blank; Pro is 1673)
- Tau3-Banking / Claw-Eval: **no verified public score found** (benchgap lists AA Tau3 47.7% as estimated — not used)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **38** (AA model page, #12/121 in-class at fetch)
- AA-HLE: **35.1%** (OpenRouter's AA table)
- AA-LCR v1.1: **74.3%** (OpenRouter's AA table)
- CritPt: **12.0%** (OpenRouter's AA table)
- AA-Omniscience Accuracy / Non-Hallucination: **27.0% / 45.6%** (OpenRouter's AA table)
- AA-MMMU-Pro: **73.1%** (OpenRouter's AA table)
- GPQA Diamond: **no verified measured public score found** (benchgap 89.8–92.8% rows are marked estimated)

Coding:

- DeepSWE v1.1: **67.9%** (Xiaomi HF; datacurve/deep-swe listing)
- AA-SciCode: **51.3%** (OpenRouter's AA table)
- ProgramBench: **26.0%** (Xiaomi HF)
- MiMo Code Bench: **61.2%** (Xiaomi HF)
- MiMo VisualCoding: **71.5%** (Xiaomi HF)
- Vibe Code Bench v1.1: **79.0%** (Vals AI via OpenRouter)
- SWE-bench Verified / SWE-Pro: **no verified measured public score found** (benchgap Verified 89.2% is estimated)

Long context:

- 1M advertised window; AA-LCR **74.3%**. **no verified public MRCR / RULER / GraphWalks ≥98% at 512K+ found**

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 87.6% sits on the ~88% frontier band, with OSWorld-Verified 80.8% and Toolathlon 73.6% in support. Capped by TB 4.0 22.7–28.8%, unpublished GDPval/Tau3 for this SKU, and AutomationBench 52.3%.
- **Reasoning: 79/100.** AA Index 38 is above the 20–35 mid band but well short of Index 60+; HLE 35.1% is near the 40% frontier line and LCR 74.3% is strong, while CritPt 12.0% and Omniscience accuracy 27.0% keep it out of 90+. No measured GPQA.
- **Context window: 96/100.** Documented 1M / 128K out maps to the ≥1M tier (95–100). Not 100: LCR 74.3% is not ≥98% retrieval at 512K+.
- **Multimodal: 92/100.** Vendor/HF audio+video+image in lands in the 90–100 band. Capped because AA's API eval surface is text+image only and output is text-only.
- **Coding: 88/100.** DeepSWE 67.9% is just under the 74% frontier ref, TB 2.1 87.6% is at the coding frontier, SciCode 51.3% is near 55%. Capped by ProgramBench 26.0% and no measured SWE-bench Verified.
- **Cost efficiency: 96/100.** $0.14/$0.28 with $0.0028 cache hits sits just below the ~$0.10/$0.20 = 97–99 anchor. AA $0.06/Index-task. Not 100: still paid.
- **Overall Score: 89/100.** Mean of 90 + 79 + 96 + 92 + 88 = 89.0. Best fit: cheap open omni agents and high-volume TB2.1-style coding; not the pick if you need a measured GPQA/SWE-Verified number or TB 4.0.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (Xiaomi product page, HF `MiMo-V2.6-Flash-RL`, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
