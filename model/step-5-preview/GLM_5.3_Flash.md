# Step 5 Preview — findings by GLM 5.3 Flash

- Source: StepFun (`step-5-preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship agentic model (Shanghai-based "Six Tigers" lab) aimed at software engineering and professional knowledge work, with particular strength in finance. Sparse MoE, multimodal input, 1M context. Preview stage; weights "coming soon".
- **Provider / access:** StepFun Open Platform API (model ID `step-5-preview`); Chat Completions and Messages APIs with streaming, tool calling, JSON mode / JSON Schema structured output, prompt caching, and low/medium/high reasoning effort. Also routed via OpenRouter (serverless).
- **Release / knowledge:** 2026-09-18 release (AA FAQ; LLM Reference lists 2026-09-20); knowledge cutoff not stated.
- **IDs:** `stepfun/step-5-preview` and `openrouter/step-5-preview` (2 serverless routes); no Free ID on OpenCode Zen verified as of 2026-10-09.
- **Context window:** 1M total, 64,000 max output tokens (LLM Reference specs, corroborated by AA's 1M listing; AA does not expose measured retrieval).
- **Modalities:** text + image + video input, text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-09):** $1.00 in / $2.70 out / $0.050 cache-read per 1M (paid; both StepFun and OpenRouter routes). AA: cache discount 90%, ~$1.03 per Intelligence Index task, blended $0.54/1M.
- **Architecture:** 600B total / 27B active parameters, Mixture-of-Experts; proprietary (commercial use conditional, weights coming soon).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (StepFun model card via BenchLM)
- Terminal-Bench 4.0: **33.3%** (StepFun / AA Terminal-Bench 4.0)
- MCP Atlas: **85.6%** (StepFun)
- Toolathlon-Verified: **74.1%** (StepFun)
- CyberGym: **84.7%** (StepFun)
- DRACO: **83.3%** (StepFun)
- BrowseComp: **88.7%** (StepFun)
- AutomationBench: **44.0%** (StepFun) / **51.0%** (AA AutomationBench-AA)
- GDPval-AA: **1566 Elo** (StepFun) / **54.3%** normalized (AA)
- AA-Briefcase: **1,424 Elo** (AA aa-briefcase leaderboard)
- JobBench: **59.0%** (StepFun)
- APEX-Agents: **37.8%** (StepFun) / **38.0%** (AA)
- AA-Harvey LAB v1.0: **93.4%** (AA — legal agentic work)
- AA-ITBench: **55.6%** (AA — Kubernetes root-cause analysis)
- AA-AnalystAgent: **35.0%** (AA)
- Agents' Last Exam: **29.5%** (StepFun)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (StepFun via BenchLM)
- HLE: **46.5%** (StepFun / AA-HLE)
- AA-LCR (long-context reasoning): **88.3%** (StepFun via BenchLM)
- CritPt: **20.9%** (StepFun)
- Artificial Analysis Intelligence Index: **44 / #40 of 226** (AA model page; 43.7 per AA leaderboard — above the price-tier median of 26)
- AA-Omniscience: **Index 16.4 / Accuracy 41.5% / Hallucination Rate 43.0%** (AA)
- MLCR-AA (medical long-context reasoning): **16.7%** (AA)

Coding:

- DeepSWE: **67.7%** (StepFun via BenchLM)
- SciCode / AA-SciCode: **58.9%** (StepFun / AA)
- ProgramBench: **80.5%** (StepFun)
- sweMarathon: **72.7%** (StepFun)
- MLS-Bench Lite: **40.5%** (StepFun)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found

Multimodal:

- MMMU-Pro: **76.0%** (StepFun) / **76.4%** (AA)
- OfficeQA Pro: **60.3%** (StepFun)
- Long context: no MRCR/RULER retrieval reported; AA-LCR 88.3% is the best long-context signal

Speed: 86.8 output tokens/s, 2.85s TTFT (AA, StepFun first-party API). Very verbose: 160M output tokens across the Intelligence Index run (median 81M).

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 85%, MCP Atlas 85.6%, Toolathlon-Verified 74.1%, BrowseComp 88.7%, and GDPval 1566 are near the 90–100 frontier refs (TB2.1 ~88%+, GDPval ~1750+); AutomationBench 44–51% and TB4 33.3% keep it out of the top band.
- **Reasoning: 82/100.** GPQA Diamond 93.5% and HLE 46.5% clear the frontier references, AA-LCR 88.3% shows strong long-context reasoning, but Intelligence Index 44 sits below the 60+ frontier marker and a 43% Omniscience hallucination rate caps the score.
- **Context window: 95/100.** 1M total / 64K output per LLM Reference and AA (top-tier band); 95 rather than 100 because no vendor-independent ≥98%-retrieval-at-512K+ measurement (MRCR/RULER) is published.
- **Multimodal: 80/100.** Text + image + video input with MMMU-Pro 76.4% and OfficeQA Pro 60.3% place it in the 75–90 PDF/video band; text-only output and no audio input cap it below omni.
- **Coding: 82/100.** DeepSWE 67.7% approaches the 74%+ frontier ref, SciCode 58.9% clears the 55%+ marker, and sweMarathon 72.7% / ProgramBench 80.5% are strong; TB4 33.3% and missing SWE-bench Verified/LiveCodeBench numbers cap it below frontier.
- **Cost efficiency: 91/100.** $1.00/$2.70 sits between the ~$0.60/$2.20 (≈92) and $1.25/$4.25 (≈88) references, with a 90% cache discount and $1.03 per AA task. Paid, not $0 — not counted toward Overall.
- **Overall Score: 84/100.** Mean of the five quality dims (82 + 82 + 95 + 80 + 82) / 5 = 84.2 → 84. Best-fit recommendation: strong all-round agentic flagship for finance/legal knowledge work and 1M-context jobs at a reasonable price; watch the high hallucination rate for factuality-critical flows.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (Artificial Analysis model page, LLM Reference specs page, BenchLM aggregator); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
