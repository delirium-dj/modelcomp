# Qwen 3.8 — findings by Mimo V2.6 Flash

- Source: Alibaba/`qwen-3.8` (site meta `opencode/qwen-3.8`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba Qwen team's mid-2026 flagship generation entry (announced 2026-07-19 WAIC; Max API GA 2026-08-02/03; open weights 2026-08-12 as `Qwen3.8-2.4T-A95B`) — 2.4T-parameter MoE (95B active), pitched as "second only to Fable 5" on Alibaba's internal suite, with open weights at Max scale for the first time. Distinct from sibling IDs `qwen3.8-max` (closed API product) and `qwen3.8-flash` / `qwen3.8-27b` (smaller tiers).
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio (`qwen3.8-max` API id for the Max product); Hugging Face / ModelScope open weights `Qwen/Qwen3.8-2.4T-A95B`; site meta `opencode/qwen-3.8`. Chat Completions-compatible on Model Studio.
- **Release / knowledge:** 2026-07-19 announcement; 2026-08-02/03 API; 2026-08-12 open weights. Knowledge cutoff not published in rows reviewed.
- **IDs:** Site `opencode/qwen-3.8`; commercial `qwen3.8-max` / `alibaba/qwen3.8-max`; open `Qwen/Qwen3.8-2.4T-A95B`. **Flag:** site meta still lists 128K / text-only — stale vs verified 262K–1M multimodal product rows; scoring below uses live sources, not the stale meta.
- **Context window:** 1,000,000 tokens on API (Model Studio / models.dev); open-weight card 262,144 native (YaRN-extendable); MRCR rows reported at 256K.
- **Modalities:** API Max: text, image, video in; text out; thinking mode (mandatory on open 2.4T-A95B snapshot — cannot disable); tool calls; structured output. Open 2.4T-A95B snapshot is **text-only** per model card (multimodal API ≠ open weights).
- **Pricing (as of 2026-09-23):** $2.00 / $6.00 per 1M in/out (QwenCloud / models.dev standard intl); undercuts prior Qwen3.7-Max $2.50/$7.50. Open weights free to download under custom license (>$50M revenue / model-hosting commercial terms gated). Paid API.
- **Architecture:** sparse MoE, 2.4T total / 95B active, 512 experts (10 routed + 1 shared), 92 layers, 8192 hidden (HokAI / HF card); hybrid linear+full attention 3:1.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen launch / OpenLM — beats Opus 4.8 84.6, Fable 84.6; trails Sol 88.8)
- Toolathlon Verified: **72.5%** Pass@1 (Qwen launch table)
- OSWorld-Verified: **86.1%** (HokAI / Qwen)
- AndroidBench: **75.1%**; CoWorkBench: **74.8%**; WorkSpaceBench: **67.7%**; JobBench: **53.4%**; SkillsBench: **70.2%** (Qwen launch)
- Agents' Last Exam: **Pass 27.0 / Score 52.4**; Automation-Bench Pass@1 **27.3%** (Qwen launch)
- GDPval-AA / MCP Atlas / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.6%** vendor (Qwen launch); **93.5%** independent AA (AI Atlas / AA observed 2026-09-11)
- HLE: **43.6%** no tools / **56.2%** with tools (Qwen launch)
- HLE-VL with tools: **52.2%** (Qwen multimodal table)
- IFBench: **82.8%**; HealthBench: **60.2%**; PLawBench: **73.2%** (Qwen launch)
- PaperBench: **93.0%** (Qwen / HokAI)
- $OneMillion-Bench expert: **52.5**; WideSearch: **81.9** (Qwen launch)
- AA Intelligence Index / ARC-AGI: **no verified public score found** (AIME/MMLU-Pro/ARC-AGI-2 unpublished per HokAI)

Coding:

- SWE-bench Pro: **67.7%** (Qwen launch)
- DeepSWE 1.1: **56.6%** vendor (trails Sol 73, Fable 70, Opus 4.8 59)
- NL2Repo-Bench: **55.9%**; FrontierSWE: **73.5%**; QwenSWEBench: **80.7%** (Qwen launch)
- LiveCodeBench / SWE-bench Verified: **no verified public score found** for this exact id in this pass (27B sibling has LCB v6 90.3 — not reused)

Long context:

- MRCR v2 256K (8-needle): **92.9%** (Qwen launch — near Sol 93.8, above Opus 83.2)
- LongBench v2: **66.3%**; 1M API window; open weights 262K native

Multimodal:

- MMMU-Pro: **82.3%** (Qwen launch — beats Fable 81.2, trails Sol 83.0)
- MathVision: **95.2 / 97.7**; BabyVision: **82.0 / 91.3**; LogicVista: **91.9**; HiPhO: **90.0**; RealWorldQA: **88.7** (Qwen multimodal table)
- OmniDocBench 1.5: **92.1** (prior research / Qwen docs row)

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 86.6, OSWorld 86.1, Toolathlon 72.5, ALE Score 52.4, CoWork 74.8 — elite agentic stack; capped by missing GDPval/MCP/Claw rows and Automation-Bench 27.3 still mid-pack.
- **Reasoning: 92/100.** GPQA 92.6/93.5, HLE 43.6/56.2-tools, PaperBench 93.0, IFBench 82.8 — frontier science/knowledge; capped by missing AA Index / ARC-AGI-2 and HLE no-tools still under Fable 53.3.
- **Context window: 95/100.** 1M API (≥1M tier); MRCR 92.9@256K proves depth; open-weights 262K native and no ≥512K public retrieval keep it off 100.
- **Multimodal: 86/100.** Image+video in on API (75–90 band); MMMU-Pro 82.3, MathVision 95.2, LogicVista 91.9 — strong; capped because open 2.4T-A95B is text-only and no audio/PDF claim extracted.
- **Coding: 88/100.** TB2.1 86.6, SWE-Pro 67.7, FrontierSWE 73.5, DeepSWE 56.6 — near-top coding; capped by DeepSWE behind Sol/Fable/Opus cluster and no public SWE-V/LCB row for this id.
- **Cost efficiency: 86/100.** $2/$6 matches Grok 4.5 and undercuts 3.7-Max $2.50/$7.50 and most $3+ Pro tiers while delivering 1M + open weights option; custom-license gates on self-host for large corps.
- **Overall Score: 90/100.** Mean of Tool 90 + Reasoning 92 + Context 95 + Multimodal 86 + Coding 88 = 451/5 = 90.2 → **90** (best-fit: open-weights-capable Max-class multimodal agent at $2/$6 when you want near-Fable coding with self-host option; accept text-only open snapshot vs multimodal API split).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (Qwen launch blog / OpenLM tables, HokAI, AI Atlas / AA, HF open-weight card, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
