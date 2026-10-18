# Step 5 Preview — findings by GLM 5.3 Flash

- Source: StepFun (`step-5-preview`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship agentic model (Shanghai-based "Six Tigers" lab) aimed at software engineering and professional knowledge work, with particular strength in finance. Sparse MoE, multimodal input, 1M context. BenchLM ranks it #17 of 889 (70.25). Preview stage; weights "coming soon".
- **Provider / access:** StepFun Open Platform API (model ID `step-5-preview`, platform.stepfun.ai docs); Chat Completions and Messages APIs with streaming, tool calling, JSON mode / JSON Schema structured output, prompt caching, and low/medium/high reasoning effort. Also routed via OpenRouter (serverless).
- **Release / knowledge:** 2026-09-18 release (AA FAQ; LLM Reference lists 2026-09-20); knowledge cutoff not stated.
- **IDs:** `stepfun/step-5-preview` and `openrouter/step-5-preview` (2 serverless routes); no Free ID on OpenCode Zen verified.
- **Context window:** 1M total (BenchLM concurs), 64,000 max output tokens (LLM Reference specs, corroborated by AA's 1M listing).
- **Modalities:** text + image + video input, text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-11):** $1.00 in / $2.70 out / $0.050 cache-read per 1M (paid; both StepFun and OpenRouter routes). AA: cache discount 90%, ~$1.03 per Intelligence Index task, blended $0.54/1M.
- **Architecture:** 600B total / 27B active parameters, Mixture-of-Experts; proprietary (commercial use conditional, weights coming soon).

### Raw benchmarks found

> Second-pass verification (2026-10-11): the freshly fetched BenchLM page (updated 2026-10-10) reproduces every row of the 2026-10-09 report identically — StepFun vendor rows and AA independent rows all corroborate; no new evidence since release. Scores are carried, not moved.

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (StepFun via BenchLM, corroborated); Terminal-Bench 4.0: **33.3%** (StepFun / AA — corroborated)
- MCP Atlas: **85.6%**; Toolathlon-Verified: **74.1%**; CyberGym: **84.7%**; DRACO: **83.3%**; BrowseComp: **88.7%** (StepFun — all corroborated)
- GDPval-AA: **1566 Elo** (StepFun; AA-normalized **54.3%**); AA-Briefcase: **1,424 Elo** (AA; 2026-10-17 refresh reads 1,425 — minor drift, flagged — corroborated)
- AutomationBench: **44.0%** (StepFun) / **51.0%** (AA AutomationBench-AA); AA EnterpriseOps-Gym: **47.2%**; AA GDP.pdf: **14.8%**
- JobBench: **59.0%**; APEX-Agents: **37.8%** (StepFun) / **38.0%** (AA); Agents' Last Exam: **29.5%**
- AA-Harvey LAB v1.0: **93.4%** (AA — legal agentic work, elite); AA-ITBench: **55.6%**; AA-AnalystAgent: **35.0%**; Hermes Index: **32.8%** / Hermes Bench: **69.2%** (Nous Research — added 2026-10-16)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (StepFun via BenchLM — corroborated); HLE: **46.5%** (StepFun / AA-HLE — corroborated)
- AA-LCR (long-context reasoning): **88.3%** (StepFun via BenchLM — corroborated; best-in-class long-context signal)
- CritPt: **20.9%** (corroborated); MLCR-AA: **16.7%** (AA — weak)
- Artificial Analysis Intelligence Index: **44 / #40 of 226** (43.7 per AA leaderboard — corroborated)
- AA-Omniscience: **Index 16.4 / Accuracy 41.5% / non-hallucination row 43.0%** (AA — corroborated; the 43% hallucination-adjacent rate remains the factuality caveat)

Coding:

- DeepSWE: **67.7%** (corroborated); SciCode / AA-SciCode: **58.9%** (corroborated); ProgramBench: **80.5%**; sweMarathon: **72.7%**; MLS-Bench Lite: **40.5%** (corroborated)
- SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified public score found

Multimodal:

- MMMU-Pro: **76.0%** (StepFun) / **76.4%** (AA — corroborated); OfficeQA Pro: **60.3%** (corroborated)

Speed: 86.8 output tokens/s, 2.85s TTFT (AA). Very verbose: 160M output tokens across the Intelligence Index run (median 81M).

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: full row-by-row corroboration, no new evidence.

- **Tool use: 82/100.** Terminal-Bench 2.1 85%, MCP Atlas 85.6%, Toolathlon-Verified 74.1%, BrowseComp 88.7%, and GDPval 1566 are near the 90–100 frontier refs (TB2.1 ~88%+, GDPval ~1750+); AutomationBench 44–51% and TB4 33.3% keep it out of the top band.
- **Reasoning: 82/100.** GPQA Diamond 93.5% and HLE 46.5% clear the frontier references, AA-LCR 88.3% shows strong long-context reasoning, but Intelligence Index 44 sits below the 60+ frontier marker and a 43% non-hallucination row caps the score.
- **Context window: 95/100.** 1M total / 64K output per LLM Reference, AA and BenchLM (top-tier band); 95 rather than 100 because no ≥98%-retrieval-at-512K+ measurement (MRCR/RULER) is published.
- **Multimodal: 80/100.** Text + image + video input with MMMU-Pro 76.0/76.4% and OfficeQA Pro 60.3% place it in the 75–90 PDF/video band; text-only output and no audio input cap it below omni.
- **Coding: 82/100.** DeepSWE 67.7% approaches the 74%+ frontier ref, SciCode 58.9% clears the 55%+ marker, and sweMarathon 72.7% / ProgramBench 80.5% are strong; TB4 33.3% and missing SWE-bench Verified/LiveCodeBench numbers cap it below frontier.
- **Cost efficiency: 91/100.** $1.00/$2.70 sits between the ~$0.60/$2.20 (≈92) and $1.25/$4.25 (≈88) references, with a 90% cache discount and $1.03 per AA task. Paid, not $0 — not counted toward Overall.
- **Overall Score: 84.2/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (82 + 82 + 95 + 80 + 82) / 5 = 421/5 = 84.2. Best-fit recommendation: strong all-round agentic flagship for finance/legal knowledge work and 1M-context jobs at a reasonable price; watch the high hallucination rate for factuality-critical flows.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the StepFun model page, Artificial Analysis independent boards (GDPval/Briefcase/Harvey/ITBench/LCR/Omniscience) via benchlm.ai, plus the prior 2026-10-09 pass; full row-by-row corroboration confirmed; 2026-10-16 re-check: BenchLM 44-row refresh corroborates all rows (Hermes 32.8/69.2% added; Briefcase 1424 → 1425 drift; rank #17/889 70.25 → #20/954 69.44) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
