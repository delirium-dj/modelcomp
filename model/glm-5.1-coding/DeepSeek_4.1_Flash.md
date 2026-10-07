# GLM 5.1 Coding — findings by DeepSeek 4.1 Flash

- Source: Z.ai (Zhipu AI) / GLM-5.1 (`glm-5.1` — requested as "Coding Free"; no free ID found on OpenCode Zen)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding (published name GLM-5.1; no "Free" tier observed)
- **Short description:** Z.ai's April 2026 open-weights flagship, positioned as a major leap in coding with large gains on long-horizon autonomous tasks — Z.ai's launch material advertises an 8-hour autonomous task capability, and third-party coverage called it the top model on SWE-bench Pro at release, ahead of GPT-5.4 and Claude Opus 4.6. It sits between GLM-5 (Feb 2026) and GLM-5.2 (Jun 2026) in the same generation; GLM-5.2 (753B, 1M context) and GLM-5.3 have since shipped, and BenchLM now scores GLM-5.3 at 68.68 versus 56.14 for GLM-5.1.
- **Provider / access:** Z.ai's own API plus third-party hosts (DeepInfra, OpenRouter, SiliconFlow, Chutes, DigitalOcean, Baidu, Fireworks) and open weights for self-hosting. An OpenAI-compatible endpoint is standard across hosts. **No `glm-5.1-*-free` ID was found on OpenCode Zen as of 2026-10-06**, so this file is scored on paid pricing.
- **Release / knowledge:** Released 2026-04-07. Knowledge cutoff not published in the sources checked.
- **IDs:** `glm-5.1` (Z.ai / OpenRouter). No OpenCode Zen Free ID. Weights: `zai-org/GLM-5.1` on Hugging Face.
- **Context window:** 202,752 tokens (200K; Z.ai's serving `max_model_len`; BenchLM lists 203K and hosts list 200K; the tracker had recorded a change to 204,800 on 2026-07-21). Max output is now confirmed at 128K–131K tokens.
- **Modalities:** text in / text out only — no native image, audio or video input; tool calls and JSON/structured output yes; reasoning yes (dual thinking-effort modes).
- **Pricing (as of 2026-10-06):** $1.40 / 1M in and $4.40 / 1M out list on Z.ai ($0.26 / 1M cached input). Cheaper third-party routes: DeepInfra $1.05 / $3.50 and OpenRouter routed near $0.97 / $3.04. No free tier from Z.ai; self-hosting the open weights avoids API fees. A high-speed API tier reaching ~400 tok/s launched 2026-05-21.
- **Architecture:** 744B-total Mixture-of-Experts transformer with 40B active per token, open weights under the MIT license. DSA sparse attention layered on Multi-head Latent Attention (MLA), 78 layers, 256 routed experts plus 1 shared expert (8+1 active per token), and multi-token-prediction (MTP) speculative decoding. Weights are `zai-org/GLM-5.1` on Hugging Face; BF16 footprint is ~1.5 TB, FP8 ~754 GB.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau2-Bench (τ²-bench): **97.7%** (Artificial Analysis) — the highest tool-agent reliability figure found in this scan
- Terminal-Bench 2.0: **63.5%** (Z.ai; rises to 66.5 with the Claude Code scaffold, which the earlier "62.0%" secondary figure approximated) — clarified from a previously provisional row
- Terminal-Bench 2.1: **56.9%** (Vals AI)
- τ³-bench: **70.6%** (Z.ai)
- MCP-Atlas: **71.8%** (Z.ai)
- Claw-Eval: **62.3%** (Claw-Eval leaderboard)
- CyberGym: **68.7%** (CyberGym leaderboard)
- GDPval-AA: **31.0% / 1181 Elo** (Artificial Analysis)
- BrowseComp: **68.0%** (Z.ai); AA Agentic Index: **25.2%**; Gert Labs: **60.11%**
- Agentic index: **94th percentile of tracked models** (Epoch AI via Model Beat) — the model's strongest category
- Vendor claim: 8-hour autonomous task execution (Z.ai launch coverage)

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (Epoch AI via Model Beat); note the same benchmark is reported at **86.8%** by Artificial Analysis and **86.2%** by Z.ai — evaluator spread is wide
- HLE: **30.1%** (Artificial Analysis; improved from 28.0%); Z.ai self-reports a much higher **52.3%**
- SimpleBench: **55.1%** (revised down from 58.7%); SimpleQA Verified: **34.0%** (revised down from 37.3%)
- WeirdML: **57.1%** (Epoch AI via Model Beat)
- AIME 2024/2025: **93.3%**; AIME 2026: **95.3%**; HMMT Nov 2025: **94.0%**; HMMT Feb 2026: **82.6%**
- FrontierMath: **33.4%**; FrontierMath Tier 4: **12.5%**
- AA-LCR (long-context reasoning): **73.7%**; CritPt: **4.6%** (Artificial Analysis)
- MMLU-Pro (Vals): **86.9%**
- AA-Omniscience Accuracy: **23.7%**; Hallucination Rate: **29.9%** (Artificial Analysis)
- Artificial Analysis Intelligence Index / BenchLM overall: no single headline AA composite reproduced; BenchLM scores GLM-5.1 at **56.14/100, #57 of 882**

Coding:

- SWE-bench Verified: **74.2%** (Epoch AI via Model Beat)
- SWE-bench Pro: **58.4%** (Z.ai) — the top score at its April 2026 launch, ahead of GPT-5.4 (57.7) and Claude Opus 4.6 (57.3)
- SciCode: **44.8%** (Epoch AI via Model Beat); AA Coding Index: **55.8%**
- WebDev Arena: **1509 Elo** (Epoch AI via Model Beat); Design Arena Website: **1290 Elo** (OpenRouter)
- LiveCodeBench (Vals): **81.4%**; SWE-bench (Vals): **76.4%**; SWE-Rebench: **62.7%**
- NL2Repo: **42.7%** (repo-scale generation); Vibe Code Bench: **31.46%** (Vals AI)
- SWE-bench Pro top-ranked at launch held up as a numeric figure (58.4%)

Long context:

- AA-LCR long-context reasoning: **73.7%** — the first measured recall signal for the 202,752-token window; no MRCR/RULER/GraphWalks value published, and the window is smaller than the 1M-token GLM-5.2 successor.

### Normalized scores (1–100)

- **Tool use: 92/100.** τ²-bench 97.7% plus a 94th-percentile agentic placement, an advertised 8-hour autonomous run and a record-speed API tier make it a top-tier agent model; the newly found Terminal-Bench 2.0 (63.5%), Claw-Eval (62.3%) and GDPval-AA (31.0%) numbers are mid-pack, so the score holds.
- **Reasoning: 80/100.** GPQA Diamond 89.9% and WeirdML 57.1% are strong, but HLE 30.1%, FrontierMath Tier 4 12.5%, CritPt 4.6% and a falling SimpleQA Verified score keep it below the frontier-proprietary cohort.
- **Context window: 70/100.** 202,752 tokens is mid-tier in a market where 1M windows are now common, and only the 73.7% AA-LCR result argues the window is usable.
- **Multimodal: 15/100.** Text-in/text-out only; no image, audio, video or PDF input, with vision handled by a separate GLM-5V model.
- **Coding: 89/100.** SWE-bench Pro 58.4% (SOTA at launch), SWE-bench Verified 74.2%, LiveCodeBench 81.4%, SciCode 44.8% and a 1509 WebDev Arena Elo; the former gap on LiveCodeBench and SWE-bench Pro numbers is now closed, leaving only the absence of any free access path.
- **Cost efficiency: 78/100.** $0.97–$1.40 / $3.04–$4.40 per 1M is roughly 20× DeepSeek-V4-Flash's input rate, but open weights make self-hosting the real cost lever.
- **Overall Score: 69/100.** (92 + 80 + 70 + 15 + 89) / 5 = 69.2 → **69** (Cost efficiency never enters Overall). Best fit: agentic coding and long-horizon tool workflows where a 205K window and self-hostable weights are enough.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: public internet research (Z.ai GLM-5.1 technical report and blog, BenchLM and Artificial Analysis benchmark ledgers, Vals AI leaderboards, the Morph GLM-5.1 architecture writeup, Epoch AI figures via Model Beat, OpenCode Zen docs for free-ID verification); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
