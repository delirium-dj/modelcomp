# Gemini 3.5 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.5 Flash (`gemini-3.5-flash`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed independent data: BenchLM overall **62.52/100 (#44/889)**; Vals AI Index **44.79% (#36/45)** with **Finance Agent v2 57.86% (#11)**, **GPQA Diamond 92.68% (#14)**, **MMLU-Pro 89.52%**, **MMMU-Pro 88.27% (#8)**, **SWE-bench 78.80%**, **LiveCodeBench 87.60%**, MedCode 55.83% (#6); Artificial Analysis **AA Coding Index 70.1%**, **AA-MMMU-Pro 84.3%**, **AA-LCR 69.3%**, **AA Agentic Index 27.3%**, **IFBench 76.3%**, AA-Omniscience Index 21.2% (hallucination 60.7%). Google launch rows added: **MCP Atlas 83.6%**, **Toolathlon 56.5%**, OSWorld-Verified 78.4%, CharXiv 84.2%, Blueprint-Bench 2 33.6%, **MRCRv2 77.3%** and **MRCR 1M 26.6%**, FrontierMath v2 Tier 4 14.58%.
> **Conflicts surfaced:** (1) **AA Intelligence Index** — the prior file's **55** and BenchLM's **50.2** are old-basket readings; the current **v4.3.2 page reads 33 (#85/227)**, and Google has deprecated the model in favour of Gemini 3.7 Flash. (2) **Terminal-Bench 2.1** reads **78.7% (prior file)** vs **76.2% (Google launch)** vs **74.2% (Vals)**. (3) **GDPval-AA** reads **1373 Elo (prior file)** vs **1345 (Google launch)** / **42.2% normalized (AA)**. (4) **Full-window recall is now measured and weak**: MRCRv2 77.3% but **MRCR 1M only 26.6%** — the 1M window is real but recall at depth degrades sharply (Context held at the methodology's ≥1M floor of 95).
> Sources: https://benchlm.ai/models/gemini-3-5-flash · https://artificialanalysis.ai/models/gemini-3-5-flash · https://www.vals.ai/models/google_gemini-3.5-flash · https://ai.google.dev/gemini-api/docs/models

## Model card

- **Name:** Gemini 3.5 Flash (no "Free" wording; a free Google AI Studio API tier exists)
- **Short description:** Google DeepMind's I/O 2026 Flash-tier multimodal model, succeeding Gemini 3 Flash (Dec 2025) with configurable thinking levels. Its distinctive strength is agentic tool orchestration — it recorded the highest MCP Atlas score of any model tracked at launch — plus the best Finance Agent v2 result at launch. Now superseded by Gemini 3.6 / 3.7 Flash.
- **Provider / access:** Google — Gemini API, Google AI Studio (free tier with limited rate limits), Vertex AI. Proprietary, closed weights; API only.
- **Release / knowledge:** GA 2026-05-19 (Google I/O). Knowledge cutoff not stated in the sources checked.
- **IDs:** `gemini-3.5-flash`. No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output 65,536 tokens (Vals records 66k).
- **Modalities:** text, image, audio/speech, video and PDF/file input in a single call (AA: text, image, speech, video; Vals: text, image, video, file); text + tool-call output; function calling and structured output, including mixing built-in tools such as Google Search; reasoning yes (thinking levels, default medium).
- **Pricing (as of 2026-10-11):** $1.50 / 1M in and $9.00 / 1M out, cached input $0.15 / 1M (90% off; blended 7:2:1 ≈$1.31/M per AA) — about 3× Gemini 3 Flash. Free AI Studio tier caps quickly at volume; **$3.30 per Vals test**.
- **Architecture:** proprietary natively multimodal Transformer; parameter count / dense-vs-MoE undisclosed.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **83.6%** (rank 6 of 44; the highest recorded at launch) (BenchLM/HokAI)
- APEX-Agents: **66.1%** (rank 1 of 44); APEX-Agents-AA: 47.1%; Tau2-Bench Telecom: **95.3–95.6%**; Tau3-Banking: **32.2%**
- OSWorld-Verified (computer use): **78.4%**; Terminal-Bench 2.1: **76.2% (Google) / 74.2% (Vals)**; Terminal-Bench 4.0: 6.06%; Terminal-Bench Science: 5.71%
- GDPval-AA: **1345 Elo** (Google) / **42.2% normalized** (AA); Finance Agent v2: **57.86% (#11)** (Vals); Toolathlon: 56.5%; AA EnterpriseOps-Gym: 50.1%
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.2% (AA) / 92.68% (Vals, #14)**; MMMU-Pro: **83.6% (Google) / 84.3% (AA) / 88.27% (Vals)**
- HLE: **40.2% (Google) / 42.7% (AA)**; ARC-AGI-1: **92.5%**; ARC-AGI-2: **72.1%**
- Artificial Analysis Intelligence Index: **33 (#85/227, v4.3.2)** — BenchLM records 50.2; both differ from the prior file's 55 (basket rebase)
- AA-LCR: **69.3%** (AA); CritPt: **13.1%** (AA); AA-Omniscience Index 21.2%, accuracy 51.9%, hallucination 60.7%
- FrontierMath v2: Tiers 1–3 **38.97%**, Tier 4 **14.58%** (Epoch AI); MMLU-Pro **89.52%** (Vals)

Coding:

- SWE-bench Verified: **78.8% (Google + Vals)**; SWE-bench Pro: **55.1%**; LiveCodeBench: **87.6% (rank 7 of 123 / Vals #12)**; SciCode: **53.1% (AA 53.9%)**
- Terminal-Bench 2.0: **67.4%**; DeepSWE 1.1: **37.0%**; Vibe Code Bench v1.1: **48.68% (55/110)**; CursorBench 3.2: 48.8%
- AA Coding Index: **70.1%** (AA); WebDev Arena: **1500.72 Elo**; Design Arena Website: 1271
- Output speed: **200 tok/s** median (AA) — ~2.5× GPT-6.1 Sol and far above the 81 t/s median

Long context:

- **MRCRv2 77.3%** and **MRCR 1M 26.6%** (Google launch): the 1M window is real but full-depth recall degrades sharply; there is no ≥98%-at-512K result.

### Normalized scores (1–100)

- **Tool use: 86/100.** 83.6% on MCP Atlas, rank-1 launch APEX-Agents (66.1%), Tau2-Telecom 95.3% and Finance Agent v2 57.86% (#11) keep it strong; capped by the mid TB2.1 74–76%, Toolathlon 56.5% and the absence of Claw/Toolathon-independence numbers.
- **Reasoning: 85/100.** GPQA Diamond 90–92.7% and MMMU-Pro 84–88% are strong, but ARC-AGI-2 72.1%, HLE ~40% and CritPt 13.1% show a deliberate Pro-tier gap; the current AA index (33) sits well below GPT-6.1 Sol's 52.
- **Context window: 95/100.** 1,048,576 tokens with 65,536 output and full multimodal ingestion — the methodology's ≥1M floor; MRCR 1M 26.6% shows deep recall is limited, and no ≥98%-at-512K result lifts it into the 96–100 band.
- **Multimodal: 88/100.** Text, image, audio/speech, video and PDF in one call with MMMU-Pro 84–88%, CharXiv 84.2% and a #8 Vals MMMU position; text-only output.
- **Coding: 85/100.** LiveCodeBench 87.6%, SWE-bench Verified 78.8%, SciCode 53.1% and AA Coding Index 70.1% (raised earlier from 80 as the harder harnesses publish); capped by DeepSWE 37.0% and Vibe Code Bench 48.7%.
- **Cost efficiency: 62/100.** $1.50/$9.00 per 1M with a 90%-off cached rate is mid-priced rather than cheap, and 3× the prior Flash generation; the free AI Studio candidacy does not scale.
- **Overall Score: 88/100.** Mean of the five quality dims (86+85+95+88+85)/5 = 87.8 → 88. Best fit: MCP-based coding and tool agents that need wide multimodal ingestion and will pay a Flash-plus rate.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: deep second-pass public internet research (BenchLM model page + per-eval results, Artificial Analysis model page, Vals AI model page + launch review, Google AI for Developers model docs). Independent AA/Vals rows were promoted over the prior HokAI-only rows; the AA-index basket rebase, the TB2.1/GDPval discrepancies and the newly measured weak full-window MRCR are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
