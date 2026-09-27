# GLM-5.3 Flash — findings by LongCat 2.5 Preview

- Source: Z.AI (`glm-5.3-flash`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 Flash
- **Short description:** The first natively multimodal model in the GLM-5 series — 320B total / 18B active hybrid sparse+linear-attention MoE delivering stronger intelligence than GLM-5.2 at roughly one-tenth the price (formerly stealth-tested as "ox-alpha").
- **Provider / access:** Z.AI API — `glm-5.3-flash` (Chat Completions; thinking always on, `reasoning_effort` low/high/max, default max). Open weights on HuggingFace (MIT). Also OpenRouter, Fireworks, B.AI, Vals. Released 2026-08-26.
- **Release / knowledge:** Released 2026-08-26; knowledge cutoff not published.
- **IDs:** `z-ai/glm-5.3-flash` (OpenRouter), `zai-org/GLM-5.3-Flash` (HF). No Zen Free ID — paid API / open weights.
- **Context window:** 1,048,576 tokens native; max output 128K–131K.
- **Modalities:** Text, image, video, file in; text out; reasoning yes; function calling, structured outputs, context caching, browser/computer use via ZCode.
- **Pricing (as of 2026-09-27):** $0.07/M in, $0.25/M out (Vals/OpenRouter); MIT open weights.
- **Architecture:** 320B total params, 18B active; hybrid sparse + linear attention (first in GLM-5 series); Manifold-Constrained Hyper-Connections (mHC); 30T-token multimodal pretraining corpus; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Claude Code harness, 6h timeout; Vals TB2.1: 62.9%)
- Toolathlon-Verified: **78.4%**; AutomationBench: **48.8%**
- GDPval-AA v2: evaluated by Artificial Analysis (absolute score not published)
- Tau3-Banking / MCP Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **57** (at $0.045/task discounted)
- HLE (with tools, full set): **55.3%**
- Agents' Last Exam: **26.3%**

Coding:

- DeepSWE v1.1: **63.4%** (mini-SWE-agent harness)
- LiveCodeBench (Vals): **80.5%**; SWE-bench (Vals): **92.0%**
- NL2Repo: **56.3%**
- SWE-bench Verified: no verified public score found

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

Multimodal extras:

- CharXiv: **89.4%**; OfficeQA Pro: **62.4%**; MMVU: **80.5%**; Chartography (tools): **78.0%**; BabyVision: **53.4%**

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 84.3% and Toolathlon 78.4% are strong; AutomationBench 48.8% and the Vals TB2.1 split (62.9%) keep the dimension in the upper-mid range.
- **Reasoning: 82/100.** AA Intelligence Index 57 and HLE-with-tools 55.3% are frontier-tier for the generation; Agents' Last Exam 26.3% is a notch under the leaders.
- **Context window: 95/100.** 1M native tokens with 128K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 85/100.** Text/image/video input lands in the 75–90 band; text-only output caps it there.
- **Coding: 78/100.** DeepSWE 63.4% and SWE-bench (Vals) 92.0% are strong; LiveCodeBench 80.5% and NL2Repo 56.3% hold the dimension down.
- **Cost efficiency: 97/100.** $0.07/$0.25 pricing is among the lowest in the field — intelligence previously available at ~10x the cost.
- **Overall Score: 84/100.** Mean of the five quality dims (78+82+95+85+78)/5 = 83.6 → 84. Best-fit: default cost-efficient multimodal coding/agent — near-frontier capability at Flash-tier economics with MIT open weights.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (z.ai blog + docs, HF model card, BenchLM, Vals.ai, DataCamp, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
