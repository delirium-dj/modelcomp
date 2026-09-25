# DeepSeek V4.1 Flash — findings by Kimi K3

- Source: DeepSeek / DeepSeek V4.1 Flash (`deepseek-v4.1-flash`; open weights `deepseek-ai/DeepSeek-V4.1-Flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's fast open-weight reasoning model of the V4.1 line — punchy agentic/coding profile (Terminal-Bench 2.1 90.6%, Codeforces 3471) at Flash pricing. Model card: huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash.
- **Provider / access:** DeepSeek API + open weights (HF), third-party hosts; OpenAI-compatible.
- **Release / knowledge:** 2026 release after V4 Flash 0731 (exact date not verified in my sources); cutoff not verified.
- **IDs:** `deepseek/deepseek-v4.1-flash` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (MMMU-Pro, BabyVision, ZeroBench measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; open weights → low-cost hosting (provisional).
- **Architecture:** open weights (benchlm.ai); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (benchlm.ai; Vals 74.5%); terminalBench3: **30%**; TB 4.0: **31.2%**
- CyberGym: **88.1%**; ExploitGym: **15.3%** (benchlm.ai)
- GDPval-AA: **1600 Elo** (55.0% normalized) (benchlm.ai)
- HLE w/ tools: **63.9%**; AA AutomationBench: **68.9%**; Agents' Last Exam: **31.8%** (benchlm.ai)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (GPQA-D) (benchlm.ai)
- HLE: **36.8%**; AA-HLE: **39.2%** (benchlm.ai)
- AA-LCR: **84.0%**; MLCR-AA: **22.8%**; CritPt: **14.3%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **39.5**; BenchLM overall unranked (partial coverage)
- AA-Omniscience Index: **−5.3%** — Accuracy **46.4%** / Hallucination Rate **96.5%** (benchlm.ai; worst grounding signal in this cohort)
- Apex (math): **65.6%** (benchlm.ai)

Coding:

- Codeforces: **3471** — highest competitive-programming rating in the surveyed cohort (benchlm.ai)
- DeepSWE: **74.2%** (benchlm.ai)
- NL2Repo: **65.4%**; AA-SciCode: **51.9%**; ProgramBench: **20.3%** (benchlm.ai)
- Terminal-Bench 2.1: **90.6%** (benchlm.ai)
- SWE-bench (Vals/Verified) / LiveCodeBench: no verified public score found

Long context:

- AA-LCR 84.0% at the 1M window (benchlm.ai); no MRCR/RULER public score found.

Multimodal:

- Chartography (tools): **78.9%**; BabyVision w/ Python: **89.6%**; ZeroBench w/ Python: **49.0%**; AA-MMMU-Pro: **77.0%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.1 90.6%, CyberGym 88.1%, GDPval-AA 1600, AutomationBench 68.9%; capped by TB 4.0 31.2% and ExploitGym 15.3%.
- **Reasoning: 76/100.** GPQA 90.9%, HLE w/ tools 63.9%, LCR 84.0%; capped hard by hallucination rate 96.5% and HLE no-tools 36.8%.
- **Context window: 86/100.** 1M window with LCR 84.0%; capped by missing MRCR/RULER probes.
- **Multimodal: 62/100.** Image input with decent chart/vision-with-tools rows (Chartography 78.9%, BabyVision+Py 89.6%); thin coverage and text-only output cap it.
- **Coding: 82/100.** Codeforces 3471 and DeepSWE 74.2% are elite signals; capped by ProgramBench 20.3%, SciCode 51.9% and missing SWE-bench rows.
- **Cost efficiency: 85/100.** Open weights; Flash-tier pricing expected; provisional.
- **Overall Score: 78/100.** Mean of the five quality dims (84+76+86+62+82)/5 = 78.0. Best fit: cheap open-weight agentic terminal coding with strong competitive-programming chops; watch grounding on open-domain QA.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, huggingface.co model card reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
