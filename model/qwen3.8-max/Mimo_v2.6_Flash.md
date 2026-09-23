# Qwen3.8 Max — findings by Mimo V2.6 Flash

- Source: Alibaba/`qwen3.8-max`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba's largest Qwen3.8-series proprietary API flagship (GA 2026-08-03): 2.4T-parameter MoE (95B active), 1M context, near-frontier coding/agentic scores (TB2.1 86.6, GPQA 92.6) at aggressive $2/$6 pricing. Open-weight twin `Qwen3.8-2.4T-A95B` ships separately; Max API id is `qwen3.8-max`.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope / QwenCloud (`qwen3.8-max` OpenAI-compatible Chat Completions + Anthropic Messages on some gateways); OpenRouter / Vercel AI Gateway / models.dev `alibaba/qwen3.8-max`; OpenCode Zen `opencode/qwen3.8-max` (Go plan uses Anthropic protocol per opencode issues). Not self-hosted via the Max API id (closed API; open weights are a sibling release).
- **Release / knowledge:** 2026-08-02 announcement / 2026-08-03 GA (HokAI / Qwen blog); knowledge cutoff not published in rows reviewed.
- **IDs:** `qwen3.8-max` (DashScope/QwenCloud); `alibaba/qwen3.8-max` (gateways); snapshot `qwen3.8-max-0902` (2026-09-02 upgrade).
- **Context window:** 1,000,000 tokens input; max output 131,072 (models.dev / Model Studio 991,808 usable input on some plans).
- **Modalities:** text, image, video in; text out; thinking mode; tool calls; structured output / JSON mode.
- **Pricing (as of 2026-09-23):** $2.00 / $6.00 per 1M in/out standard intl (models.dev); prior Qwen3.7-Max was $2.50/$7.50. Cache-hit input discounted. Paid API.
- **Architecture:** proprietary sparse MoE, 2.4T total / 95B active, 512 experts, 92 layers, 8192 hidden (HokAI); hybrid linear+full attention 3:1.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen launch / AA — beats Opus 4.8 84.6, Fable 84.6; trails Sol 88.8)
- Toolathlon Verified: **72.5%** Pass@1 (Qwen launch)
- OSWorld-Verified: **86.1%** (HokAI / Qwen)
- CoWorkBench: **74.8%**; WorkSpaceBench: **67.7%**; JobBench: **53.4%**; SkillsBench: **70.2%**; AndroidBench: **75.1%** (Qwen launch)
- Agents' Last Exam: **Pass 27.0 / Score 52.4**; Automation-Bench Pass@1 **27.3%**; WideSearch: **81.9** (Qwen launch)
- GDPval-AA / MCP Atlas / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.6%** vendor (Qwen launch); **93.5%** independent AA (AI Atlas / AA observed 2026-09-11)
- HLE: **43.6%** no tools / **56.2%** with tools (Qwen launch); HLE-VL w/ tools **52.2%**
- IFBench: **82.8%**; HealthBench: **60.2%**; PLawBench: **73.2%**; PRBench-Legal **57.6** / Finance **58.3** (Qwen launch)
- PaperBench: **93.0%** (Qwen / HokAI)
- $OneMillion-Bench expert: **52.5**; CritPt / Omniscience / AA Intelligence Index / ARC-AGI: **no verified public score found** (HokAI: AIME/MMLU-Pro/ARC-AGI-2 unpublished)

Coding:

- SWE-bench Pro: **67.7%** (Qwen launch — Opus 4.8 69.2, Fable 80.0, Sol 64.6)
- DeepSWE 1.1: **56.6%** (trails Sol 73, Fable 70, Opus 4.8 59)
- NL2Repo-Bench: **55.9%**; FrontierSWE: **73.5%**; MLS-Bench-Lite: **41.0%**; QwenSWEBench: **80.7%**; QwenQoderBench: **58.4%** (Qwen launch)
- LiveCodeBench / SWE-bench Verified / SciCode: **no verified public score found** for this exact id in this pass

Long context:

- MRCR v2 256K (8-needle): **92.9%** (Qwen launch — near Sol 93.8, above Opus 83.2)
- LongBench v2: **66.3%**; 1M API window

Multimodal:

- MMMU-Pro: **82.3%** (Qwen launch — beats Fable 81.2, trails Sol 83.0)
- MathVision: **95.2 / 97.7**; BabyVision: **82.0 / 91.3**; LogicVista: **91.9**; HiPhO: **90.0**; RealWorldQA: **88.7**; CharXiv: **85.1 / 89.1** (Qwen multimodal table)
- OmniDocBench 1.5: **92.1** (Qwen docs row)

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 86.6, OSWorld 86.1, Toolathlon 72.5, ALE Score 52.4 — elite agentic; capped by missing GDPval/MCP/Claw and Automation-Bench 27.3 mid-pack.
- **Reasoning: 92/100.** GPQA 92.6/93.5, HLE 43.6/56.2-tools, PaperBench 93.0 — frontier; capped by missing AA Index / ARC-AGI-2 and HLE no-tools under Fable 53.3.
- **Context window: 95/100.** 1M API (≥1M band); MRCR 92.9@256K; no ≥512K public retrieval → not 100.
- **Multimodal: 86/100.** Image+video in (75–90 band); MMMU-Pro 82.3, MathVision 95.2 — strong; no audio/PDF claim and no open-weight Max multimodal parity on the text-only 2.4T snapshot.
- **Coding: 88/100.** TB2.1 86.6, SWE-Pro 67.7, FrontierSWE 73.5, DeepSWE 56.6 — near-top; capped by DeepSWE behind Sol/Fable cluster and no public SWE-V/LCB for this id.
- **Cost efficiency: 86/100.** $2/$6 undercuts 3.7-Max $2.50/$7.50 and most Pro tiers while delivering 1M + near-Fable benches; paid only.
- **Overall Score: 90/100.** Mean of Tool 90 + Reasoning 92 + Context 95 + Multimodal 86 + Coding 88 = 451/5 = 90.2 → **90** (best-fit: cost-efficient 1M multimodal API flagship at $2/$6 for long-horizon agentic coding when open-weight sibling text-only limits are acceptable).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (Qwen launch blog / OpenLM tables, HokAI, AI Atlas / AA, models.dev, opencode GitHub issues for Zen protocol quirk); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
