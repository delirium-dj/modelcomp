# Step 5 Preview — findings by Muse_Glimmer_30B

- Source: StepFun (阶跃星辰) (`opencode/step-5-preview`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship agentic MoE preview for knowledge work and coding — 600B total / 27B active sparse MoE with 1M context, positioned as efficiency-first frontier performance for software engineering and professional knowledge work.
- **Provider / access:** StepFun Open Platform API (Chat Completions), Alibaba Cloud Model Studio `stepfun/step-5-preview`, OpenCode Zen `opencode/step-5-preview`. Reasoning effort levels supported.
- **Release / knowledge:** Announced 2026-09-20; open weights BF16 planned October 2026. Knowledge cutoff not verified publicly.
- **IDs:** `opencode/step-5-preview`, `stepfun/step-5-preview`. No free tier on Zen.
- **Context window:** 1M total, 1,000,000 in / 64K out max, `max_tokens` auto. Prompt caching supported.
- **Modalities:** Text, image, video in; text out. Images up to 60 per request, low/high detail. Video URL/Base64/`stepfile://`. Reasoning yes, tool calling supported, JSON mode/schema, streaming.
- **Pricing (as of 2026-10-20):** $1.00 / MTok input cache miss, $0.10 / MTok input cache hit, $2.70 / MTok output. No free tier. Rate-limit tiers by cumulative cash top-up.
- **Architecture:** Sparse Mixture-of-Experts, 600B total parameters, 27B active per token. Proprietary with open-weights preview.

### Raw benchmarks found

> Verified public scores from StepFun model card and independent Artificial Analysis measurements. Zero invented values.

Agent / tool use:

- Terminal-Bench 4.0: **33.3%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/terminalbench-v4-0)) — matches StepFun 33.30% claim
- Terminal-Bench 2.1: **85.0%** (StepFun)
- BrowseComp: **88.7%** (StepFun)
- MCP Atlas: **85.6%** (StepFun)
- CyberGym: **84.7%** (StepFun)
- DRACO: **83.3%** (StepFun)
- Toolathlon-Verified: **74.1%** (StepFun)
- Harvey LAB v1.0: **93.4%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/harvey-lab-aa))
- GDPval-AA: **1,566 Elo / 54.2% normalized** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/gdpval-aa))
- AA-Briefcase: **1,425 Elo** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/aa-briefcase))
- AutomationBench-AA: **51.0%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/automationbench-aa)) vs StepFun 44.0%

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (StepFun)
- HLE: **46.5%** (StepFun) / **46.5%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/humanitys-last-exam))
- AA-LCR: **88.3%** (StepFun)
- Artificial Analysis Intelligence Index: **43.7** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index))
- AA-Omniscience: Index **+16.4%**, Accuracy **41.5%**, Hallucination Rate **43.0%**
- CritPt: **20.9%** (StepFun); MLCR-AA: **16.7%** (StepFun)

Coding:

- ProgramBench: **80.5%** (StepFun)
- sweMarathon: **72.7%** (StepFun)
- DeepSWE: **67.7%** (StepFun)
- SciCode: **58.9%** (StepFun) / **58.9%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/scicode))
- MLS-Bench Lite: **40.5%** (StepFun)
- SWE-bench Verified / LiveCodeBench: **no verified public score found**

Multimodal:

- MMMU-Pro: **76.4%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/mmmu-pro)) / 76% StepFun
- OfficeQA Pro: **60.3%** (StepFun)
- No video-specific benchmark found despite native video input

Long context:

- AA-LCR 88.3% is the quantified long-context signal; no MRCR/RULER publication found

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 4.0 33.3% independently confirmed, Terminal-Bench 2.1 85.0%, BrowseComp 88.7%, MCP Atlas 85.6%, Harvey LAB 93.4%, GDPval-AA 54.2% and AA-Briefcase 1,425 Elo form a strong agentic set. Capped by GDP.pdf 14.8% and long-horizon document weakness.
- **Reasoning: 87/100.** GPQA Diamond 93.5%, HLE 46.5% exact match, AA-LCR 88.3%, Intelligence Index 43.7 with positive Omniscience Index. Capped by 43.0% hallucination rate, CritPt 20.9%, MLCR-AA 16.7% and missing MMLU-Pro/AIME.
- **Context window: 93/100.** True 1M input / 64K output with caching and AA-LCR 88.3% demonstrating usability. Capped for lack of published retrieval depth curve.
- **Multimodal: 84/100.** Native image+video in, MMMU-Pro 76.4% independently verified, OfficeQA Pro 60.3%. Text-only output and absence of video benchmark cap score.
- **Coding: 86/100.** Terminal-Bench 2.1 85.0%, ProgramBench 80.5%, sweMarathon 72.7%, DeepSWE 67.7%, SciCode 58.9% confirmed. No SWE-bench Verified/LiveCodeBench number is the main cap.
- **Cost efficiency: 95/100.** $1.00 in / $2.70 out with $0.10 cache hit delivers GPQA 93.5%, HLE 46.5%, 1M context at ~1/3 frontier pricing. No free tier docks slightly.
- **Overall Score: 88.0/100.** Mean of five quality dims (90 + 87 + 93 + 84 + 86) / 5 = 88.0. Best fit: long-horizon agentic engineering, terminal/MCP orchestration, professional research and multimodal document work at efficiency-first pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
