# Step 5 Preview — findings by GLM 5.3 Flash

- Source: StepFun (`step-5-preview`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-09→10-16): **the weights are now open** —
> BenchLM cites the HF model card `stepfun-ai/Step-5-Preview` and classifies it Open Weight,
> resolving the old "proprietary, weights coming soon" note (Cost 91→93). The AA Index
> rebased 44→28.5 (v5.0) and the Omniscience rows drifted (accuracy 41.5→36.4%; hallucination
> 31.3% — better than MiniMax M3's 91.4% but still a caveat). New AA cyber rows added
> (CyberGym-E2E 74.8%, Cyber Index 47.7%). Reasoning 82→81; Overall 84.2→84.

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship agentic model (Shanghai-based "Six Tigers" lab) aimed at software engineering and professional knowledge work, with particular strength in finance and legal. Sparse MoE, multimodal input, 1M context. BenchLM ranks it #62 of 1009 (56.15, Nov 4 — drifted from #17/889 70.25 as the board recomposed). **Weights now open on Hugging Face.**
- **Provider / access:** StepFun Open Platform API (model ID `step-5-preview`, platform.stepfun.ai); Chat Completions and Messages APIs with streaming, tool calling, JSON mode / JSON Schema structured output, prompt caching, low/medium/high reasoning effort. OpenRouter serverless routes. **Open weights: `stepfun-ai/Step-5-Preview` on Hugging Face.**
- **Release / knowledge:** 2026-09-18 release (AA FAQ; LLM Reference lists 2026-09-20); knowledge cutoff not stated.
- **IDs:** `stepfun/step-5-preview`, `openrouter/step-5-preview`; `stepfun-ai/Step-5-Preview` (HF).
- **Context window:** 1M total, 64,000 max output tokens.
- **Modalities:** text + image + video input, text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-11-05):** $1.00 in / $2.70 out / $0.050 cache-read per 1M (unchanged); AA ~$1.03 per Index task, blended $0.54/1M. Open weights add a free self-host path (600B/27B MoE — datacenter-class).
- **Architecture:** 600B total / 27B active MoE; **weights open** (license per the HF card — not re-verified this pass).

### Raw benchmarks found

> BenchLM Nov 4 refresh (48 rows) — core rows re-confirmed; new rows flagged. AA Index version chain: **44 (#40/226, v4.3.2) → 28.5 (v5.0)**.

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (StepFun, corroborated); Terminal-Bench 4.0: **33.3%** (StepFun / AA — corroborated)
- MCP Atlas: **85.6%**; Toolathlon-Verified: **74.1%**; CyberGym: **84.7%**; DRACO: **83.3%**; BrowseComp: **88.7%** (all corroborated)
- GDPval-AA: **1566 Elo** / **54.3%** normalized (both confirmed); AA-Briefcase: **1423–1425 Elo**
- AutomationBench: **44.0%** (vendor) / **51.0%** (AA); AA EnterpriseOps-Gym: **47.2%**; AA GDP.pdf: **14.8%**
- JobBench: **59.0%**; APEX-Agents: 37.8–38.0%; Agents' Last Exam: 29.5%
- AA-Harvey LAB v1.0: **93.4%** (elite legal agentic); AA-ITBench: **55.6%**; AA-AnalystAgent: 35.0%; Hermes Index 32.8% / Hermes Bench 69.2%
- AA cyber rows (NEW): AA Cyber Index **47.7%**, CWE-Bench-AA **52.5%**, DeepsecBench-AA 15.8%, **CyberGym-E2E-AA 74.8%** (strong)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (corroborated); HLE: **46.5%** (corroborated)
- AA-LCR: **88.3%** (best-in-class long-context signal, confirmed); MLCR-AA: **18.3%** (drift from 16.7%); CritPt: **20.9%**
- Artificial Analysis Intelligence Index version chain: **44** (v4.3.2) → **28.5** (v5.0) — rebase documented
- AA-Omniscience: index 16.4 (confirmed); accuracy **36.4%** (drift from 41.5%); hallucination rate **31.3%** (NEW row — a real caveat, though far better than MiniMax M3's 91.4%)
- Coding (NEW rows this pass): AA Cyber Index 47.7%, CWE-Bench-AA 52.5%

Coding:

- DeepSWE: **67.7%**; SciCode / AA-SciCode: **58.9%** (clears the 55%+ mark); ProgramBench: **80.5%**; sweMarathon: **72.7%**; MLS-Bench Lite: **40.5%** — all corroborated
- SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified public score found

Multimodal:

- MMMU-Pro: **76.0%** (vendor) / **76.4%** (AA); OfficeQA Pro: **60.3%** — corroborated

Speed: 86.8 tok/s output, 2.85s TTFT; very verbose (160M output tokens across the Index run vs 81M median).

### Normalized scores (1–100)

- **Tool use: 82/100.** Unchanged — TB2.1 85%, MCP Atlas 85.6%, Toolathlon 74.1%, BrowseComp 88.7%, GDPval 1566 and the new CyberGym-E2E 74.8% hold near the frontier refs; AutomationBench 44–51% and TB4 33.3% keep it out of the top band.
- **Reasoning: 81/100.** CHANGED from 82 — GPQA 93.5% and HLE 46.5% clear the frontier references and AA-LCR 88.3% stays best-in-class, but the AA Index rebase to 28.5 and the Omniscience accuracy drift to 36.4% (with the 31.3% hallucination rate now an explicit row) dock it a point.
- **Context window: 95/100.** Unchanged — 1M / 64K output; no ≥98%-retrieval-at-512K+ measurement published.
- **Multimodal: 80/100.** Unchanged — text + image + video in with MMMU-Pro 76.0/76.4% and OfficeQA Pro 60.3%; text-only output, no audio.
- **Coding: 82/100.** Unchanged — DeepSWE 67.7%, SciCode 58.9%, sweMarathon 72.7%, ProgramBench 80.5% all re-confirmed; TB4 33.3% and missing SWE-V/LiveCodeBench cap it.
- **Cost efficiency: 93/100.** CHANGED from 91 — $1.00/$2.70 list with a 90% cache discount and $1.03/task stands, and the **open weights** now provide a free self-host path (600B/27B MoE, datacenter-class) — a real cost lever the prior pass couldn't count.
- **Overall Score: 84/100.** CHANGED from 84.2 — (82 + 81 + 95 + 80 + 82) / 5 = 420/5 = 84.0 → 84. Best-fit: strong all-round agentic flagship for finance/legal knowledge work and 1M-context jobs — now self-hostable, with the hallucination rate the main factuality caveat.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetch (web-search quota exhausted): BenchLM Step 5 Preview page fetched 2026-11-05 (Nov 4 data, 48 rows) — open-weights status confirmed via the HF model-card citation, AA Index rebase and Omniscience drift documented, new AA cyber rows added; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
