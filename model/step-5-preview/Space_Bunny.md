# Step 5 Preview — findings by Space Bunny

- Source: StepFun (`step-5-preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's (阶跃星辰) next-generation frontier model, previewed **2026-09-20/21** as a **600B-total / 27B-active sparse Mixture-of-Experts** with 1M context and native vision — pitched by StepFun as "advancing the Pareto frontier" for software engineering at $1.00/$2.70 per million tokens. It matches Kimi K3's Artificial Analysis Intelligence Index (44) at roughly a quarter of Kimi K3's 2.8T size. Weights are planned for **2026-10-15** under Apache 2.0, which would make it one of the largest openly licensed models from a Chinese lab.
- **Provider / access:** StepFun Open Platform API (`https://api.stepfun.ai/v1`, model ID `step-5-preview`); also served through Kilo, Lemonade, Nous Research, Modal, DeepInfra, Fireworks AI and OpenRouter. OpenAI-compatible Chat Completions API. No OpenCode Zen ID found.
- **Release / knowledge:** Previewed 2026-09-20 (StepFun launch post and platform listing); Vals AI lists 2026-09-28, Model Beat lists 2026-09-18 — the exact preview date varies by source. **Knowledge cutoff: not disclosed.** Weights ETA 2026-10-15.
- **IDs:** `step-5-preview` (StepFun), `stepfun/step-5-preview` (OpenRouter, models.dev)
- **Context window:** **1,024,000 tokens**, max output **65,536 (64K)** — verified on models.dev's StepFun provider table. Note: the docs listed 1M at launch and were **edited within two days**, so this figure has already moved once.
- **Modalities:** Text, images and video in → text out (StepFun's own spec). Reasoning: yes (effort-steerable; most self-reported figures are at "High effort"). Tool calls: yes. Structured output: yes (models.dev marks Structured = Yes). Temperature: not exposed as a configurable knob on this model per models.dev.
- **Pricing (as of 2026-10-09):** **$1.00 in / $2.70 out** per 1M tokens, standard billing. No cached-input or cache-write rate is published. Paid only — no Free tier. (For reference, StepFun's own Step 3.7 Flash is $0.16/$0.92.)
- **Architecture:** sparse Mixture-of-Experts, **600B total / 27B active per token**. License: proprietary during preview; **Apache 2.0 planned for the 2026-10-15 weight release** (not yet verifiable).

### Raw benchmarks found

> **Evidence-quality warning, load-bearing for this report:** of six tracked Step 5 Preview scores, only **one is independently run** (HLE without tools, by Artificial Analysis). The rest are StepFun's own launch-table figures with the agent harness unstated. Both lists are given below and are never averaged.

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (StepFun launch table, High effort — self-reported; tbench.ai's 2.1 board, last updated 2026-09-03, does not list the model)
- MCP Atlas: **85.6%** (benchlm.ai, independent aggregator sourcing)
- BrowseComp: **88.7%** (benchlm.ai)
- DRACO (deep research, LLM-judged rubrics): **83.3%** (benchlm.ai)
- Toolathlon-Verified: **74.1%** (StepFun launch table — self-reported; slightly ahead of GLM-5.3's 73.0%)
- JobBench: **59.0%** (benchlm.ai)
- APEX-Agents: **37.8%** (benchlm.ai)
- Agents' Last Exam: **29.5%** (benchlm.ai — slightly ahead of GLM-5.3's 28.5%)
- CyberGym: **84.7%** (benchlm.ai — effectively tied with GLM-5.3's 84.5%)
- Terminal-Bench 4.0: **33.3%** (Artificial Analysis — the one place AA has re-run this model on a terminal benchmark)
- AutomationBench, GDPval-AA, OSWorld, Tau3-Banking/Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / SWE Atlas Codebase QnA: Toolathlon-Verified 74.1% (above); SWE Atlas Codebase QnA — no verified public score found

Reasoning / knowledge:

- HLE without tools: **46.5%** (Artificial Analysis, 2026-09-22 — **the only independently measured score for this model**; ±2 is noise)
- HLE with tools: **59.4%** (StepFun launch table — self-reported)
- GPQA Diamond: **93.5%** (StepFun launch table, High effort, harness not stated — self-reported). Independently graded as *saturated*: vals.ai no longer runs new models on its GPQA page and AA had no Step 5 Preview entry there when checked 2026-09-21.
- Artificial Analysis Intelligence Index: **44** — identical to Kimi K3, at roughly 1/4 of its parameter count
- CritPt: **20.9%** (benchlm.ai)
- AA-LCR / MLCR / Omniscience: no verified public score found
- MMLU-Pro: no verified public score found

Coding:

- DeepSWE: **67.7%** (StepFun launch table, High effort, SWE-agent harness at temperature 1.0 / top_p 0.95 — self-reported; slightly ahead of GLM-5.3's 66.9%)
- Terminal-Bench 2.1: **85.0%** (see above; GLM-5.3 scores 88.2%)
- ProgramBench: **80.5%** (benchlm.ai — a 4× gap over GLM-5.3's 19.0%)
- sweMarathon: **72.7%** (benchlm.ai; GLM-5.3 42.5%)
- SciCode: **58.9%** (benchlm.ai — ahead of Sakana Fugu-Ultra 58.7% and Fugu 60.1% is above it)
- MLS-Bench Lite: **40.5%** (benchlm.ai)
- Terminal-Bench 4.0: **33.3%** (Artificial Analysis)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench: no verified public score found for this model
- Category composites (Model Beat, 0–100 percentile vs. the last year of models): **Coding 94th**, **Reasoning & Knowledge 91st** (vs Kimi K3 at 97th coding / 71st reasoning)

Long context:

- 1M-token context (1,024,000) verified on models.dev. **No MRCR / RULER / GraphWalks retrieval numbers published** for this model — and the max-output figure was already revised downward within two days of launch, so the window claims are less settled than they look.

Multimodal / grounded:

- MMMU-Pro: **76%** (benchlm.ai)
- OfficeQA Pro: **60.3%** (benchlm.ai)
- CharXiv: no verified public score found
- BenchLM multimodal & grounded public-lane score: **61.2 (#29 of 50)** — bottom-half of the field it covers

Independent aggregate context:

- BenchLM overall score: **68.53**, #18 of 168 on the Knowledge lane, #17 of 142 on Coding, #14 of 117 Agentic, #29 of 50 Multimodal — but most of those rows are the same StepFun self-reports
- **Every one of Step 5 Preview's coding comparisons and agentic comparisons is independently unconfirmed on both sides**, per an independent benchmark-verification audit (checked 2026-09-22)

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 at 85.0%, MCP Atlas 85.6%, BrowseComp 88.7% and DRACO 83.3% are all frontier-band, and Toolathlon-Verified 74.1% beats GLM-5.3. Capped by APEX-Agents at only 37.8%, Agents' Last Exam at 29.5%, and the fact that most of these are self-reported with unstated harnesses.
- **Reasoning: 80/100.** GPQA Diamond 93.5% and HLE 46.5% closed-book (independently measured) / 59.4% with tools are strong. Held down by an AA Intelligence Index of 44, CritPt at 20.9%, no MMLU-Pro, and no long-context retrieval data at all.
- **Context window: 96/100.** 1,024,000 tokens verified on models.dev — top tier. Not 100 because there is zero measured long-context *retrieval* evidence, and StepFun already edited the documented window within two days of launch.
- **Multimodal: 82/100.** Native text + image + **video** input with text output puts it in the 75–90 band, independently supported by MMMU-Pro 76% and OfficeQA Pro 60.3%. No audio input and no non-text output keep it below the top.
- **Coding: 82/100.** DeepSWE 67.7% (edges GLM-5.3), ProgramBench 80.5%, sweMarathon 72.7%, Terminal-Bench 2.1 85.0%, SciCode 58.9%. Held out of the frontier band by Terminal-Bench 4.0 at just 33.3%, MLS-Bench Lite at 40.5%, and the complete absence of an independent SWE-bench or LiveCodeBench number.
- **Cost efficiency: 88/100.** $1.00 in / $2.70 out sits at the ~$1.25/$4.25 reference point (~88), is ~3× cheaper than Kimi K3 ($1.99/$10.95) for comparable AA Index intelligence, and the planned Apache 2.0 weight release would push real-world economics further. No Free tier and no published cache rate keep it out of the 90s.
- **Overall Score: 86/100.** Best fit: cost-sensitive long-context multimodal agent and coding work where you want frontier-tier tool use at roughly a third of Kimi K3's price — with the caveat that this is still a preview whose benchmark set is almost entirely vendor-reported, and whose Apache 2.0 weights have not shipped yet.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked across StepFun's own platform and launch materials, Artificial Analysis (Intelligence Index, HLE, Terminal-Bench 4.0), models.dev's StepFun provider table (context/output/pricing/capabilities), benchlm.ai comparison tables against GLM-5.3, Sakana Fugu and Sakana Fugu-Ultra, an independent benchmark-verification audit that separates independently-run scores from vendor claims, and Model Beat percentile composites. Every vendor-reported figure is labeled as such and no vendor and independent number is averaged together. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_5.md`, using the same headings — particularly worth re-checking once the Apache 2.0 weights ship and independent SWE-bench / LiveCodeBench numbers appear.