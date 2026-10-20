# Step 5 Preview — findings by Grok 4.6

- Source: StepFun (`step-5-preview`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship sparse-MoE agent model (600B/27B) for software engineering and professional/finance work, with native text/image/video input and a 1M context window. Preview weights on Hugging Face.
- **Provider / access:** StepFun API `step-5-preview` (platform.stepfun.ai). OpenRouter `stepfun/step-5-preview`. Weights `stepfun-ai/Step-5-Preview`. Chat Completions-style; tools + structured output on OpenRouter.
- **Release / knowledge:** OpenRouter lists 2026-10-08. StepFun marketing said open weights on October 15. Knowledge cutoff not on the English docs page fetched.
- **IDs:** `step-5-preview`; `stepfun/step-5-preview`; `stepfun-ai/Step-5-Preview`. No Zen Free ID found.
- **Context window:** 1M tokens. StepFun docs: max output **64k**. OpenRouter: 1,048,576 context / 131,072 completion. HF: up to 1M output. Score uses the 1M window; 64k sync max on first-party docs is a caveat.
- **Modalities:** StepFun docs: text, images, and video in; text out. HF spec table lists text/image in (video on the intro blurb). No audio I/O.
- **Pricing (as of 2026-10-20):** StepFun $1.00 cache-miss input (includes cache write) / $0.10 cache hit / $2.70 output per 1M. Output includes reasoning tokens. OpenRouter $1 / $2.70, cache read $0.05.
- **Architecture:** Sparse MoE, 600B total / 27B active. Open weights (HF).

### Raw benchmarks found

Vendor table is Step 5 Preview (High) on stepfun.com. AA/Vals via OpenRouter.

Agent / tool use:

- Terminal-Bench v2.1: **85.0%** (StepFun)
- Terminal-Bench v4 / 4.0: **33.3%** (StepFun / AA); **31.8%** (Vals)
- MCP-Atlas: **85.6** (StepFun)
- Toolathlon-Verified: **74.1** (StepFun)
- τ³-Banking: **42.5%** (StepFun)
- GDPval-AA v2.1: **1566** Elo (StepFun)
- AutomationBench-AA: **51.0%**; public AutomationBench: **44.0%** (StepFun)
- AA-Briefcase v1.1: **1433** (StepFun)
- JobBench: **59.0**; BrowseComp: **88.7%** (StepFun)
- Agents' Last Exam: **29.5%** (StepFun)
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (StepFun)
- HLE: **46.5%** (StepFun; AA lists the same 46.5%)
- HLE w/ tools: **59.4%** (StepFun)
- AA-LCR v1.1: **88.3%** (StepFun / AA)
- CritPt: **20.9%** (StepFun / AA)
- Artificial Analysis Intelligence Index: **43.7** (OpenRouter AA)
- AA-Omniscience accuracy / non-halluc: **41.5% / 57.0%** (AA)
- MMMU-Pro: **76.0%** (StepFun)

Coding:

- DeepSWE v1.1: **67.7%** (StepFun)
- SciCode: **58.9%** (StepFun / AA)
- ProgramBench pass rate: **80.5%** (StepFun)
- CyberGym: **84.7%** (StepFun)
- SWE-Atlas-QnA: **63.6%**; Test-writing: **50.8%** (StepFun)
- Vibe Code Bench v1.1: **70.4%** (Vals)
- SWE-bench Multimodal: **40.8%** (Vals)
- SWE-bench Verified: **no verified public score found**

Long context:

- 1M advertised; AA-LCR **88.3%**. **no ≥98% MRCR at 512K+ found**

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 85.0% is near the 88% frontier band; MCP-Atlas 85.6 and Toolathlon 74.1 are strong; GDPval 1566 is below ~1750. Capped by Tau3 42.5%, TB 4.0 33%, and AutomationBench ~44–51%.
- **Reasoning: 90/100.** GPQA 93.5% and HLE 46.5% are in the frontier GPQA/HLE band; LCR 88.3% is strong. Capped by Index 43.7 (not 60+) and CritPt 20.9%.
- **Context window: 96/100.** 1M is the ≥1M tier. Not 100: LCR 88.3% ≠ 98%; first-party max out 64k.
- **Multimodal: 82/100.** Docs video+image in maps to 75–90. Capped by text-only output and HF's image-only spec table.
- **Coding: 88/100.** TB 2.1 85% and SciCode 58.9% meet coding-frontier refs; DeepSWE 67.7% is just under 74%. Capped by no SWE-Verified and TB 4.0 33%.
- **Cost efficiency: 89/100.** $1.00/$2.70 is slightly cheaper than the ~$1.25/$4.25 ≈ 88 anchor. Cache hits $0.10 help. No $0 tier.
- **Overall Score: 89/100.** Mean of 88 + 90 + 96 + 82 + 88 = 88.8 → 89 half-up. Best fit: paid 1M multimodal agents and TB 2.1 coding, especially finance-flavored work; not TB 4.0 / legal-agent.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (StepFun docs/pricing, stepfun.com eval table, OpenRouter AA/Vals, HF card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
