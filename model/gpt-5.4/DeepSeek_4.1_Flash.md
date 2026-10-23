# GPT-5.4 — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-5.4 (`gpt-5.4`)
- Date: 2026-10-18 (UTC); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM now exposes ~57 rows for GPT-5.4 (was ~26), filling the biggest gaps in the first draft: independent **AA-LCR 82.0%**, **CritPt 23.4%**, **τ²-bench 98.9%**, **Claw-Eval 60.3%**, **LiveCodeBench Pro 87.5%** and **AA Intelligence Index 39.0%**. BenchLM overall is **66.7/100, #30 of 954**. Coding moves 85 → 86; the Overall is unchanged at **85**.

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's flagship "more affordable model for coding and professional work", released 2026-03-05. It is the base tier of the GPT-5.4 family (GPT-5.4 Pro and GPT-5.4 Mini are separate, differently priced IDs), not an alias of GPT-5.5.
- **Provider / access:** OpenAI API — model `gpt-5.4`, snapshot `gpt-5.4-2026-03-05`; served on Responses (`v1/responses`), Chat Completions (`v1/chat/completions`), Live, Realtime and Batch endpoints. OpenCode Zen route `opencode/gpt-5.4`.
- **Release / knowledge:** released 2026-03-05 (OpenAI model catalog / evals.report); knowledge cutoff 2025-08-31.
- **IDs:** `openai/gpt-5.4` (snapshot `gpt-5.4-2026-03-05`); `opencode/gpt-5.4` (Zen). No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,050,000 input tokens, 128,000 max output (OpenAI model page). Requests over 272K input tokens are billed at 2× input / 1.5× output for the whole session.
- **Modalities:** text + image in → text out (audio and video not supported); reasoning via `reasoning_effort` none/low/medium/high/xhigh; streaming; function calling; structured outputs; Responses tools include web search, file search, code interpreter, computer use, hosted shell, apply patch, MCP, skills and tool search.
- **Pricing (as of 2026-10-18):** $2.50 in / $15.00 out per 1M tokens; cached input $0.25 per 1M; Batch API discount and flex tier listed.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **75.1%** (OpenAI, verified); Terminal-Bench 2.1: **no verified public score found**
- Tau2-Bench (τ²): **98.9%** (OpenAI, via BenchLM); τ²-bench Telecom **87.1%** pass^1 (official, evals.report)
- OSWorld-Verified **75.0%** (OpenAI); Online-Mind2Web **92.8%** (verified)
- BrowseComp **82.7%**, MCP Atlas **70.6%**, Toolathlon **54.6%**, Claw-Eval **60.3%**, CyberGym **79.0%**, DeepSearchQA **73.6%** (via BenchLM)
- GDPval **1674 Elo** (official) — GDPval-AA **1307 Elo / 37.3% normalized** (Artificial Analysis)
- APEX-Agents-AA **33.3%**, JobBench **38.9%**, ExploitGym **6.0%**, ApprenticeBench **11%**, MazeBench **0%**, Gert Labs **64.89%** (via BenchLM)
- METR task-completion time horizon **341.7 min**; FrontierSWE **54** dominance; PostTrainBench **20.23%**

Reasoning / knowledge:

- GPQA Diamond: **93.3%** (evals.report) / **92.8%** (OpenAI) / **92.0%** (AA)
- HLE: **40.28%** official / **52.1%** with tools / **39.8%** w/o tools (OpenAI) — AA-HLE **43.7%**
- AA-LCR: **82.0%** (Artificial Analysis); CritPt **23.4%** (Artificial Analysis)
- ARC-AGI-1 **93.67%**, ARC-AGI-2 **74.0%**, ARC-AGI-3 **0.2%** (ARC Prize)
- Artificial Analysis Intelligence Index **39.0%**; Epoch Capabilities Index **156.1**; LiveBench **80.28%**
- AA-Omniscience Index **5.8%**, Accuracy **50.8%**, Hallucination Rate **91.7%** (AA); Vectara Hallucination Rate **7.0%** (official)
- AIME 2026 **99.17%**; FrontierMath v2 (Tiers 1–3) **78.60%** / (Tier 4) **49.0%** (Epoch AI) — an earlier reading of 47.6% Tiers 1–3 was recorded in the first draft; listed as a conflicting/older figure
- HealthBench Hard **40.1%**; IFBench **73.9%**; EnigmaEval **15.96%**; BenchLM overall **66.7/100, #30 of 954**

Coding:

- SWE-bench Verified: **76.9%** (official, evals.report); SWE-bench Pro **59.10%** (evals.report) / **57.7%** (OpenAI)
- DeepSWE **55.53%** (official); SciCode **56.6%**; Vibe Code Bench **67.42%**
- LiveCodeBench Pro **87.5%** (Meta comparison chart via BenchLM); AA Coding Index **71.0%**
- React Native Evals **85.3%**; PostTrainBench v1.1 **19.0%** (via BenchLM)
- WebDev Arena **1388** Elo (verified); Design Arena **1264**; LMArena **1472**

Long context:

- AA-LCR 82.0% is the first independent long-context signal for this ID; the 1.05M window is surcharged above 272K input. No MRCR/RULER row published.

### Normalized scores (1–100)

- **Tool use: 88/100.** τ² 98.9%, Terminal-Bench 2.0 75.1%, OSWorld 75.0%, BrowseComp 82.7%, MCP Atlas 70.6% and Claw-Eval 60.3% are a near-frontier agentic profile; capped by Terminal-Bench 2.1 / Tau3-Banking being unverified and GDPval-AA 1307 (frontier ref 1750+).
- **Reasoning: 90/100.** GPQA Diamond 93.3% and HLE 40.28% (52.1% with tools) hit the frontier band, now corroborated by AA-LCR 82.0%, CritPt 23.4% and ARC-AGI-2 74.0%; held just below the top by AA Intelligence Index 39.0 and EnigmaEval 15.96%.
- **Context window: 95/100.** 1.05M input / 128K output is the ≥1M tier, kept at the band floor because prompts above 272K input are surcharged 2× and no 512K-retention figure exists.
- **Multimodal: 68/100.** Image input only (MMMU-Pro 82.1% w/ Python, ScreenSpot-Pro 85.4%) → bottom of the "+image in = 60–70" band; no audio/video input and text-only output.
- **Coding: 86/100.** SWE-bench Verified 76.9%, SWE-bench Pro 57.7–59.1%, SciCode 56.6%, LiveCodeBench Pro 87.5% and Coding Index 71.0% are strong; capped by DeepSWE 55.53% against the 74% frontier reference.
- **Cost efficiency: 62/100.** $2.50/$15.00 per 1M sits just above the $3/$15 ≈ 60 anchor (cached input $0.25 softens agent loops); no free or promotional tier verified.
- **Overall Score: 85/100.** (88 + 90 + 95 + 68 + 86) / 5 = 85.4 → **85**. Best fit: highest verified all-round quality in this batch for professional coding and knowledge work — provided text+image input is enough.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (OpenAI API model catalog + launch/comparison posts, BenchLM `gpt-5-4` — 57 rows —, Artificial Analysis, evals.report, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
