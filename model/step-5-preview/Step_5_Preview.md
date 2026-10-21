# Step 5 Preview — findings by Step 5 Preview

- Source: StepFun / Step 5 Preview (`opencode/step-5-preview`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship agentic foundation model — a sparse MoE (600B total / 27B active, 92 layers) with a 1M context and native text/image/video input, targeting software engineering and professional knowledge work (finance strength); open weights published 2026-10-15.
- **Provider / access:** StepFun Open Platform API (`step-5`), OpenRouter (`stepfun/step-5-preview`), OpenCode Zen (`opencode/step-5-preview`); Chat Completions API; open weights on Hugging Face (`stepfun-ai/Step-5-Preview`).
- **Release / knowledge:** released 2026-09-20 (LLMLearner, BenchmarkList; Vals AI lists 2026-09-28); open weights released 2026-10-15 per StepFun; knowledge cutoff not published.
- **IDs:** `stepfun/step-5-preview` (OpenRouter), `opencode/step-5-preview` (Zen); no Free ID on Zen — paid only.
- **Context window:** 1,000,000 total; 64K max output (LLM Reference); 1M confirmed by vendor card and BenchLM.
- **Modalities:** text, image, video in; text out; explicit reasoning mode; tool calls.
- **Pricing (as of 2026-10-21):** $1.00/$2.70 per 1M in/out, $0.10 cached input (folder meta / OpenCode Zen); no free tier.
- **Architecture:** sparse MoE, 600B total / 27B active per token, 92 layers (LLMLearner); open weights.

### Raw benchmarks found

StepFun model card (stepfun.com/step-5-preview) via BenchLM + Artificial Analysis figures via BenchLM:

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (StepFun)
- Terminal-Bench 4.0: **33.3%** (StepFun = Artificial Analysis) — weak on the newest harness
- MCP Atlas: **85.6%** (StepFun)
- CyberGym: **84.7%** (StepFun)
- Toolathlon-Verified: **74.1%** (StepFun)
- BrowseComp: **88.7%** (StepFun)
- DRACO: **83.3%** (StepFun)
- Harvey LAB v1.0 (AA): **93.4%** (Artificial Analysis)
- GDPval-AA: **1566 Elo** / **54.3%** normalized (StepFun / Artificial Analysis)
- AA Briefcase: **1424** (Artificial Analysis)
- JobBench: **59.0%** (StepFun)
- AA AutomationBench: **51.0%** (Artificial Analysis)
- AA EnterpriseOps-Gym: **47.2%** (Artificial Analysis)
- AA ITBench: **55.6%** (Artificial Analysis)
- APEX-Agents: **37.8%** (StepFun) / **38.0%** (Artificial Analysis)
- AA AnalystAgent: **35.0%** (Artificial Analysis)
- GDP.pdf: **14.8%** (Artificial Analysis) — weak on PDF knowledge extraction
- Agents' Last Exam: **29.5%** (StepFun)
- Hermes Index: **32.8%** / Hermes Bench: **69.2%** (Nous Research)
- Tau3-Banking / Claw-Eval / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (StepFun)
- HLE: **46.5%** (StepFun = Artificial Analysis)
- AA-LCR (long-context reasoning): **88.3%** (StepFun)
- CritPt: **20.9%** (StepFun)
- MLCR-AA: **16.7%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **43.7%** (Artificial Analysis)
- AA-Omniscience: Accuracy **41.5%**, Hallucination Rate **43.0%** (Artificial Analysis)
- MMLU-Pro: no verified public score found

Coding:

- DeepSWE: **67.7%** (StepFun) — below the 74%+ frontier reference
- SciCode: **58.9%** (StepFun = Artificial Analysis) — clears the 55%+ frontier ref
- ProgramBench: **80.5%** (StepFun)
- sweMarathon: **72.7%** (StepFun)
- MLS-Bench Lite: **40.5%** (StepFun) — weak
- Terminal-Bench 2.1: **85.0%** (listed above)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR **88.3%** long-context reasoning (StepFun) with the full 1M window native; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): MMMU-Pro 76.0% (StepFun) / 76.4% (Artificial Analysis); OfficeQA Pro 60.3% (StepFun).

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 85.0%, MCP Atlas 85.6%, CyberGym 84.7%, BrowseComp 88.7% and Harvey LAB 93.4% are frontier-band agentic results and GDPval 1566 is well above mid; capped by Terminal-Bench 4.0 33.3%, APEX-Agents 37.8%, AnalystAgent 35.0%, GDP.pdf 14.8% and a mid 51.0% AutomationBench on the newest/other harnesses.
- **Reasoning: 90/100.** GPQA Diamond 93.5% and HLE 46.5% are both frontier-reference scores (HLE clears the 40%+ bar), AA Intelligence Index 43.7% is above the mid band, and LCR 88.3% shows strong long-context reasoning; capped by CritPt 20.9%, MLCR 16.7% and Omniscience accuracy 41.5% with a 43.0% hallucination rate.
- **Context window: 95/100.** 1M native window (≥1M tier 95–100); 100 would need ≥98% retrieval evidence at 512K+ — LCR 88.3% is strong but not that bar, so 95.
- **Multimodal: 85/100.** Text, image and video input (video-in tier 75–90) with text-only output; MMMU-Pro 76.4% and OfficeQA Pro 60.3% are solid but not elite; no audio input or non-text output.
- **Coding: 88/100.** Terminal-Bench 2.1 85.0% and SciCode 58.9% clear the frontier reference bands and ProgramBench 80.5% / sweMarathon 72.7% are strong; capped by DeepSWE 67.7% (below the 74%+ frontier ref), MLS-Bench Lite 40.5% and no published SWE-bench Verified number.
- **Cost efficiency: 90/100.** $1.00/$2.70 with $0.10 cached sits just inside the ~$1.25/$4.25 ≈ 88 reference band on the cheaper side; no free tier and no verified long-context surcharge schedule.
- **Overall Score: 89/100.** Mean of (86 + 90 + 95 + 85 + 88) / 5 = 88.8 → 89. Best fit: frontier-class agentic coding and finance/knowledge-work sessions at a below-frontier price, with open weights for self-hosting.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (StepFun model card via BenchLM, Artificial Analysis figures via BenchLM, LLMLearner, Vals AI, LLM Reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
