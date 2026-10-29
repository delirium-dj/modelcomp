# GLM 5.3 Flash X — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Z.AI / Zhipu AI (`glm-5.3-flashx`), modelcomp.vercel.app, chatoss.ai, trustthebench.com, docs.z.ai, z.ai blog
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash X
- **Short description:** Z.ai's speed-optimized 320B/18B-active MoE flash model with 1M context, native multimodal input, for agentic coding and interactive workflows. MIT open weights, free to self-host. FlashX is the higher-speed serving variant of GLM 5.3 Flash.
- **Provider / access:** Z.AI API (`glm-5.3-flashx`, `glm-5.3-flashx-legal`), Alibaba Cloud Model Studio (ZHIPU/GLM-5.3-FlashX), BigModel platform. Chat Completion API. MIT open weights — also free to self-host.
- **Release / knowledge:** Announced August 2026 (z.ai blog, 2026-08-26). Knowledge cutoff not publicly specified.
- **IDs:** `glm-5.3-flashx` (Z.AI API ID); `ZHIPU/GLM-5.3-FlashX` (Alibaba Cloud Model Studio ID).
- **Context window:** 1,048,576 total input tokens; 131,072 max output tokens (verified via Alibaba Cloud Model Studio and docs.z.ai).
- **Modalities:** Text, image, video, file in; text out. Native multimodal. Reasoning: yes (low/high/max effort, max default). Tool calls: yes (function calling, streaming). JSON mode: yes (structured outputs).
- **Pricing (as of 2026-10-29):** Z.AI: $0.37 input / $1.25 output / $0.075 cached per 1M tokens (docs.z.ai). Alibaba Cloud (China Beijing): 2 CNY input / 7 CNY output / 0.57 CNY cached per 1M tokens.
- **Architecture:** 320B total / 18B active parameters, MoE with sparse + linear attention hybrid; MIT open-weights license.

### Raw benchmarks found

- Terminal-Bench 2.1: **84.3%** (z.ai official blog, 2026-08-26; also modelcomp.vercel.app cites 84.3% from 4 reports: Big Pickle, GPT-6 Luna, Nemotron 3 Ultra 550B A55B, Step 5 Preview)
- DeepSWE v1.1: **63.4%** (z.ai official blog; modelcomp cites 63.4% from 5 reports)
- HLE w/ Tools: **55.3%** (z.ai official blog; modelcomp cites 55.3% from 4 reports)
- OSWorld 2.0: **59.1%** (z.ai official blog; modelcomp cites 59.1% from 2 reports)
- GDPval-AA v2: **1773 Elo** (z.ai official blog; modelcomp cites 1773 from 2 reports)
- LiveCodeBench: **80.5%** (modelcomp, 3 reports) vs trustthebench **66.3%** (saturated) — CONFLICT: modelcomp figure used as primary (multiple independent reports)
- SWE-bench Verified: chatoss.ai reports **92%** vs trustthebench **63%** (saturated) — CONFLICT: unable to reconcile; cited separately, no single figure adopted
- GPQA: trustthebench **74.8%** (nearing saturation)
- MMLU: trustthebench **86.7%** (saturated)
- RULER: trustthebench **78.2%** (nearing saturation)

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld 2.0 59.1% and Terminal-Bench 2.1 84.3% show solid agentic and computer-use capability; capped by moderate OSWorld result and lack of model-specific OSWorld-Verified breakdown.
- **Reasoning: 79/100.** HLE w/ Tools 55.3% and GPQA 74.8% indicate mid-tier reasoning; GDPval 1773 Elo is respectable but not frontier; capped below top reasoning models.
- **Context window: 94/100.** 1M total / 131K max output verified from official docs; excellent long-context capability.
- **Multimodal: 83/100.** Native multimodal with text, image, video, file input and text output; strong visual understanding (CharXiv 89.4, Chartography 78.0); no native multimodal generation output.
- **Coding: 79/100.** DeepSWE 63.4%, Terminal-Bench 84.3%; LiveCodeBench conflicts (80.5% modelcomp vs 66.3% trustthebench); SWE-bench Verified conflicts (92% chatoss vs 63% trustthebench); capped by unresolved conflicts and mid-tier DeepSWE.
- **Cost efficiency: 94/100.** $0.37/$1.25 per 1M is very low for a 320B MoE; MIT open weights means free self-hosting; among the most cost-efficient frontier models.
- **Overall Score: 83/100.** Mean of (80+79+94+83+79)/5 = 83; best-fit recommendation: cost-efficient open-weight MoE for agentic coding and long-context workflows where self-hosting is valued.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: modelcomp.vercel.app, z.ai official blog + docs.z.ai, chatoss.ai, trustthebench.com, Alibaba Cloud Model Studio); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting benchmark figures (LiveCodeBench, SWE-bench Verified) cited separately without reconciliation.
- Future sources: add a new file next to this one using the same headings.
