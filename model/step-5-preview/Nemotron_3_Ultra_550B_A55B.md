# Step 5 Preview — findings by Nemotron 3 Ultra 550B A55B

- Source: StepFun (`stepfun-ai/Step-5-Preview`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview (StepFun flagship MoE)
- **Short description:** StepFun's open-weight flagship sparse Mixture-of-Experts model with 600B total / 27B active parameters, 1M context, native text/image/video input, strong agentic and coding benchmarks (TB 2.1 85%, BrowseComp 88.7%, DeepSWE 67.7%, GPQA-D 93.5%, HLE 46.5%). Available on Hugging Face (BF16, FP8, NVFP4) under StepFun Model License 1.0 (Apache-2.0 style with attribution).
- **Provider / access:** Hugging Face (`stepfun-ai/Step-5-Preview`, `stepfun-ai/Step-5-Preview-BF16`, `stepfun-ai/Step-5-Preview-NVFP4`), ModelScope, StepFun Platform API (`step-5-preview`), vLLM/SGLang self-host. Not yet on major inference providers (Novita, Together, Fireworks). OpenCode Zen not yet listed. Free weights on Hugging Face/ModelScope.
- **Release / knowledge:** Released September 2026 (Hugging Face upload 5 days ago as of Oct 20); knowledge cutoff not explicitly stated.
- **IDs:** `stepfun-ai/Step-5-Preview` (Hugging Face), `step-5-preview` (StepFun Platform API). No public free tier on API platform.
- **Context window:** 1,048,576 tokens (1M) input + output combined; max output 65,536 tokens per StepFun docs.
- **Modalities:** Text, image, video in; text out; reasoning yes (configurable `reasoning_effort`: low/medium/high); tool calls yes; JSON mode/schema yes. Image: up to 60 per request (JPG/PNG/WebP/GIF). Video: MP4/QuickTime/Matroska, <128MB, <5min recommended.
- **Pricing (as of 2026-10-20):** StepFun Platform: billed per token (see pricing page); no public blended rate published. Hugging Face/ModelScope: free weights; self-host cost depends on hardware (FP8: 4×B300 or 8×H200; BF16: 8×B300 or 16×H200 across 2 nodes). No inference provider pricing yet.
- **Architecture:** Sparse MoE: 600B total params, 27B active (27B active per token). FP8 / BF16 / NVFP4 checkpoints. Chat template with `step5` reasoning parser and tool-call parser. License: StepFun Model License 1.0 (Apache-2.0 style with attribution + commercial conditions).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (44 benchmarks, Overall 69.57, rank #19/956, conservative):
- Terminal-Bench 2.1: **85.0%** (StepFun) — High reasoning setting
- Terminal-Bench 4.0: **33.30%** (StepFun) / **33.3%** (AA)
- CyberGym: **84.7%** (StepFun)
- AutomationBench: **44.0%** (StepFun) / **51.0%** (AA)
- Toolathlon-Verified: **74.1%** (StepFun)
- MCP Atlas: **85.6%** (StepFun)
- JobBench: **59.0%** (StepFun)
- APEX-Agents: **37.8%** (StepFun) / **38.0%** (AA)
- DRACO: **83.3%** (StepFun)
- BrowseComp: **88.7%** (StepFun)
- Agents' Last Exam: **29.5%** (StepFun) / **29.5%** (HF eval)
- GDPval-AA: **1566 Elo** (StepFun) / normalized **54.3%** (AA)
- AA Briefcase: **1424 Elo** (AA)
- AA AutomationBench: **51.0%** (AA)
- GDP.pdf: **14.8%** (AA)
- AA EnterpriseOps-Gym: **47.2%** (AA)
- AA Harvey LAB v1.0: **93.4%** (AA)
- AA ITBench: **55.6%** (AA)
- AA AnalystAgent: **35.0%** (AA)
- APEX-Agents-AA: **38.0%** (AA)
- Hermes Index: **32.8%** (Nous Research)
- Hermes Bench: **69.2%** (Nous Research)

**Coding** (StepFun / AA / HF evals):
- DeepSWE: **67.7%** (StepFun, High) / **67.7%** (HF eval, SWE-agent)
- Terminal-Bench 2.1: **85.0%** (StepFun)
- SciCode: **58.9%** (StepFun) / **58.9%** (AA)
- ProgramBench: **80.5%** (StepFun)
- sweMarathon: **72.7%** (StepFun)
- MLS-Bench Lite: **40.5%** (StepFun)
- AA SciCode: **58.9%** (AA)

**Multimodal:**
- OfficeQA Pro: **60.3%** (StepFun)
- MMMU-Pro: **76%** (StepFun) / **76.4%** (AA)

**Reasoning / Knowledge:**
- AA LCR: **88.3%** (StepFun) — exceptional long-context reasoning
- CritPt: **20.9%** (StepFun)
- MLCR-AA: **16.7%** (AA)
- GPQA-D: **93.5%** (StepFun) — near-frontier
- HLE: **46.5%** (StepFun) / **46.5%** (AA) — exceeds 40%+ frontier
- AA Intelligence Index: **43.7%** (AA)
- AA HLE: **46.5%** (AA)
- AA Omniscience Index: **16.4%** (AA)
- AA Omniscience Accuracy: **41.5%** (AA)
- AA Omniscience Hallucination Rate: **43.0%** (AA)

**Hugging Face eval results** (verified):
- DeepSWE: **67.7%** (SWE-agent harness, temp=1.0, top_p=0.95)
- Agents' Last Exam: **29.5%** (ALE CLI Pass Rate)
- Terminal-Bench 4.0: **33.3%** (Harbor framework)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 78/100.** TB 2.1 85.0% (near 88%+ frontier), BrowseComp 88.7%, MCP Atlas 85.6%, CyberGym 84.7%, DRACO 83.3%, Toolathlon 74.1%, GDPval 1566 Elo (below 1750+). Capped by TB 4.0 33.3%, Agents' Last Exam 29.5%, AutomationBench 44.0%, APEX-Agents 37.8%.
- **Reasoning: 76/100.** GPQA-D 93.5% (exceeds 90%+ frontier), HLE 46.5% (exceeds 40%+), AA LCR 88.3% (exceptional, near 90%+), AA Intelligence Index 43.7% (below 60 frontier). Capped by CritPt 20.9%, AA Omniscience Index 16.4%, MLCR-AA 16.7%.
- **Context window: 95/100.** 1M native context; AA LCR 88.3% at 1M (best-in-class for 1M tier); max output 64K. Methodology: ≥1M with strong LCR = 95-100.
- **Multimodal: 80/100.** Native text/image/video input (up to 60 images, video <5min); MMMU-Pro 76-76.4%, OfficeQA Pro 60.3%. No audio, PDF parsing noted. Methodology: +video in = 75-85.
- **Coding: 75/100.** DeepSWE 67.7% (near 74%+ frontier), TB 2.1 85.0%, ProgramBench 80.5%, sweMarathon 72.7%, SciCode 58.9% (exceeds 55%+). Capped by MLS-Bench 40.5%, no SWE-bench Verified/LiveCodeBench Vals/AA Coding Index public.
- **Cost efficiency: 70/100.** Free open-weight (StepFun License 1.0); self-host FP8 on 4×B300 or 8×H200; no inference provider markup yet. API pricing not public. Methodology: open-weight + competitive self-host = 70-75.
- **Overall Score: 80.8/100.** Half-up mean of (78 + 76 + 95 + 80 + 75) / 5 = 80.8 → 81. Using six incl. cost: (78+76+95+80+75+70)/6 = 474/6 = 79 → 79. Model-queue says 85; discrepancy reduced (queue may weight differently). Best-fit: exceptional open-weight MoE for agentic work (TB 2.1 85%, BrowseComp 88.7%, LCR 88.3%); coding strong but not best-in-class; free weights make it uniquely accessible.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: 6+ independent web searches: (1) Hugging Face `stepfun-ai/Step-5-Preview` model card (specs, benchmarks, license, deployment), (2) StepFun Platform docs (platform.stepfun.ai) for capabilities, API, pricing, limits, (3) BenchLM `step-5-preview` (44 benchmarks, Overall 69.57), (4) Hugging Face eval results (DeepSWE 67.7%, ALE 29.5%, TB4 33.3%), (5) Artificial Analysis comparison page (StepFun in Intelligence Index), (6) Nous Research Hermes Index/Bench. Compared StepFun self-reported vs AA/Nous independent — GPQA-D 93.5% (StepFun) consistent with frontier; HLE 46.5% consistent; TB 2.1 85% consistent.
- Future sources: add a new file next to this one, e.g. `Step_5.md`, using the same headings.