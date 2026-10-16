# Gemini 3.5 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.5 Flash (`gemini-3.5-flash`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-11)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Re-sourced this pass. BenchLM: **overall 61.86** (multimodal & grounded lane; #44/889 on the prior pass). Vals AI: **Vals Index 44.79% (#36/45)** with **Finance Agent v2 57.86% (#11)**, **GPQA Diamond 92.68% (#14)**, **MMLU-Pro 89.52%**, **MMMU-Pro 88.27% (#8)**, **SWE-bench 78.80%**, **LiveCodeBench 87.60%**, MedCode 55.83% (#6), Public Benefits Bench 59.47%, Vibe Code Bench v1.1 48.68%, ProofBench v1.1 31.00%, Terminal-Bench 4.0 6.06%, Terminal-Bench Science 5.71%, Code Migration 26.75%, Harvey Legal Agent 2.50%; cost/test **$3.30**. Artificial Analysis: **Intelligence Index 33.6 (#60)** with **AA Coding Index 70.1 (#26)**, TAU2 1.0 (#24), IFBench 0.8 (#21), SciCode 0.5, LCR 0.7 (#101), **~198.5 output tok/s**, TTFT ~0.97s. Google launch rows: **MCP Atlas 83.6%**, **Toolathlon 56.5%**, OSWorld-Verified 78.4%, CharXiv 84.2%, Blueprint-Bench 2 33.6%, **MRCRv2 77.3%**, MRCR 1M 26.6%, **GDPval-AA 1656 Elo**, HLE 40.2%, ARC-AGI-2 72.1%, SWE-bench Pro 55.1%. opencode.ai data confirms **1M ctx, 66K out, cutoff 2025-01, release 2026-05-19, text+image+video+audio+pdf in, $1.50/$9.00**.
> **Conflicts surfaced:** (1) **AA Intelligence Index rebase** — the launch article's **55 (2026-05-19, "+9 over Gemini 3 Flash")**, BenchLM's **50.2** and the prior file's 55 are old-basket readings; the current **v4.3.2 page reads 33 (#85/227) / 33.6 (#60)**, and Google has superseded the model with 3.6/3.7/3.8 Flash. (2) **GDPval-AA** reads **1656 Elo (Google via opencode.ai data)** vs **1345–1349 (Google launch + Gigazine)** vs **42.2% normalized (AA)** — three incompatible scales. (3) **Terminal-Bench 2.1** reads **78.7% (prior file)** vs **76.2% (Google)** vs **74.2% (Vals)**. (4) **Full-window recall is weak**: MRCRv2 77.3% but **MRCR 1M only 26.6%**, and Vals TB4.0 6.06% / TB-Science 5.71%. (5) **Pricing at 3×** Gemini 3 Flash; a free Google AI Studio tier caps quickly.
> Sources: https://deepmind.google/models/gemini/flash/ · https://artificialanalysis.ai/articles/gemini-3-5-flash-everything-you-need-to-know · https://www.vals.ai/comparisons/google_gemini-3.5-flash-vs-tencent_hy4-preview · https://benchlm.ai/models/gemini-3-flash · https://opencode.ai/data/google/gemini-3-5-flash · https://cloudprice.net/models/google-gemini-3-5-flash

## Model card

- **Name:** Gemini 3.5 Flash (no "Free" wording; a free Google AI Studio API tier exists)
- **Short description:** Google DeepMind's I/O 2026 Flash-tier multimodal model, succeeding Gemini 3 Flash (Dec 2025) with configurable thinking levels. Its distinctive strength is agentic tool orchestration — it recorded a top MCP Atlas score and the best Finance Agent v2 result at launch — plus strong speed. Superseded by Gemini 3.6 / 3.7 / 3.8 Flash.
- **Provider / access:** Google — Gemini API, Google AI Studio (free tier with limited rate limits), Vertex AI; plus Databricks, DeepInfra, OpenRouter, Perplexity, Snowflake, Vercel AI Gateway. Proprietary, closed weights; API only.
- **Release / knowledge:** GA 2026-05-19 (Google I/O); knowledge cutoff 2025-01; announced deprecation 2027-05-19.
- **IDs:** `gemini-3.5-flash`. No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output 65,536 tokens (trackers round to 66K).
- **Modalities:** text, image, audio/speech, video and PDF/file input in a single call (AA: text, image, speech, video; Vals: text, image, video, file); text + tool-call output; function calling and structured output, including mixing built-in tools such as Google Search; reasoning yes (thinking levels, default medium).
- **Pricing (as of 2026-10-16):** $1.50 / 1M in and $9.00 / 1M out, cached input ~$0.15 / 1M (90% off; blended 7:2:1 ≈$1.31/M per AA) — about 3× Gemini 3 Flash. Free AI Studio tier caps quickly at volume; **$3.30 per Vals Index test**.
- **Architecture:** proprietary natively multimodal Transformer; parameter count / dense-vs-MoE undisclosed.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **83.6%** (Google; highest recorded at launch)
- APEX-Agents: **66.1%** (rank 1 of 44); APEX-Agents-AA: 47.1%; Tau2-Bench Telecom: **95.3–95.6%**; Tau3-Banking: ~32%
- OSWorld-Verified (computer use): **78.4%**; Terminal-Bench 2.1: **76.2% (Google) / 74.2% (Vals)**; Terminal-Bench 4.0: **6.06%**; Terminal-Bench Science: 5.71%
- GDPval-AA: **1656 Elo (Google via opencode.ai)** / **1345–1349 (Google launch)** / **42.2% normalized (AA)**; Finance Agent v2: **57.86% (#11, Vals)**; Toolathlon: 56.5%; AA EnterpriseOps-Gym: 50.1%
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.2% (AA) / 92.68% (Vals, #14)**; MMMU-Pro: **83.6% (Google) / 84.3% (AA) / 88.27% (Vals)**
- HLE: **40.2% (Google) / 42.7% (AA)**; ARC-AGI-1: **92.5%**; ARC-AGI-2: **72.1%**
- Artificial Analysis Intelligence Index: **33.6 (#60, v4.3.2)** — BenchLM records 50.2 and the launch article 55; all differ from a single basket
- AA-LCR: **69.3%** (AA); CritPt: **13.1%** (AA); AA-Omniscience Index 21.2%, accuracy 51.9%, hallucination 60.7%
- FrontierMath v2: Tiers 1–3 **38.97%**, Tier 4 **14.58%** (Epoch AI); MMLU-Pro **89.52%** (Vals)

Coding:

- SWE-bench Verified: **78.8% (Google + Vals)**; SWE-bench Pro: **55.1%**; LiveCodeBench: **87.6% (Vals #12)**; SciCode: **53.1% (AA 53.9%)**
- Terminal-Bench 2.0: **67.4%**; DeepSWE 1.1: **37.0%**; Vibe Code Bench v1.1: **48.68% (#55/110)**; CursorBench 3.2: 48.8%
- AA Coding Index: **70.1%** (AA); WebDev Arena: **1500.72 Elo**; Design Arena Website: 1271; Code Migration 26.75% (Vals)
- Output speed: **~198–200 tok/s** median (AA) — ~2.5× GPT-6.1 Sol and far above the 81 t/s median

Long context:

- **MRCRv2 77.3%** and **MRCR 1M 26.6%** (Google): the 1M window is real but full-depth recall degrades sharply; no ≥98%-at-512K result.

### Normalized scores (1–100)

- **Tool use: 86/100.** 83.6% MCP Atlas, rank-1 launch APEX-Agents (66.1%), Tau2-Telecom 95.3% and Finance Agent v2 57.86% (#11) keep it strong; capped by mid TB2.1 74–76%, Toolathlon 56.5% and the absence of Claw/Toolathon-independence numbers.
- **Reasoning: 85/100.** GPQA Diamond 92.2–92.7% and MMMU-Pro 84–88% are strong, but ARC-AGI-2 72.1%, HLE ~40% and CritPt 13.1% show a deliberate Pro-tier gap; the current AA index (33) sits well below GPT-6.1 Sol's 52.
- **Context window: 95/100.** 1,048,576 tokens with 65,536 output and full multimodal ingestion — the methodology's ≥1M floor; MRCR 1M 26.6% shows deep recall is limited, and no ≥98%-at-512K result lifts it into the 96–100 band.
- **Multimodal: 88/100.** Text, image, audio/speech, video and PDF in one call with MMMU-Pro 84–88%, CharXiv 84.2% and a #8 Vals MMMU position; text-only output.
- **Coding: 85/100.** LiveCodeBench 87.6%, SWE-bench Verified 78.8%, SciCode 53.1% and AA Coding Index 70.1%; capped by DeepSWE 37.0%, Vibe Code Bench 48.7% and TB4.0 6.06%.
- **Cost efficiency: 62/100.** $1.50/$9.00 per 1M with a 90%-off cached rate is mid-priced rather than cheap, and 3× the prior Flash generation; the free AI Studio candidacy does not scale.
- **Overall Score: 88/100.** Mean of the five quality dims (86+85+95+88+85)/5 = 87.8 → 88. Best fit: MCP-based coding and tool agents that need wide multimodal ingestion and fast throughput, and will pay a Flash-plus rate.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-16
- Method: rewrite-pass public internet research (Google DeepMind model page, Artificial Analysis launch article + model pages, Vals AI comparison page, BenchLM model page + per-eval results, opencode.ai data, CloudPrice, GIGAZINE/Fello AI generational coverage). Independent AA/Vals rows were promoted over vendor-only rows; the AA-index basket rebase, the GDPval-AA scale mismatch, the TB2.1 discrepancy and the weak full-window MRCR are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
