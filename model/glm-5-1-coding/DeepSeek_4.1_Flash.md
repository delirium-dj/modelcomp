# GLM 5.1 Coding — findings by DeepSeek 4.1 Flash

- Source: Z.ai (Zhipu AI) / GLM-5.1 (`glm-5.1` — requested as "Coding Free"; no free ID found on OpenCode Zen)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding (published name GLM-5.1; no "Free" tier observed)
- **Short description:** Z.ai's April 2026 open-weights flagship, positioned as a major leap in coding with large gains on long-horizon autonomous tasks — Z.ai's launch material advertises an 8-hour autonomous task capability, and third-party coverage called it the top model on SWE-bench Pro at release, ahead of GPT-5.4 and Claude Opus 4.6. It sits between GLM-5 (Feb 2026) and GLM-5.2 (Jun 2026) in the same generation.
- **Provider / access:** Z.ai's own API plus third-party hosts (SiliconFlow, Chutes, DigitalOcean, Baidu, Fireworks) and open weights for self-hosting. An OpenAI-compatible endpoint is standard across hosts. **No `glm-5.1-*-free` ID was found on OpenCode Zen as of 2026-09-18**, so this file is scored on paid pricing.
- **Release / knowledge:** Released 2026-04-07. Knowledge cutoff not published in the sources checked.
- **IDs:** `glm-5.1` (Z.ai / OpenRouter). No OpenCode Zen Free ID. Weights: `zai-org/GLM-5.1` on Hugging Face.
- **Context window:** 204,800 tokens (listed as 205K; the tracker records a change from 202,752 to 204,800 on 2026-07-21). Max output not reproduced in the sources checked.
- **Modalities:** text in / text out only — no native image, audio or video input; tool calls and JSON/structured output yes; reasoning yes (dual thinking-effort modes).
- **Pricing (as of 2026-09-18):** $1.40 / 1M in and $4.40 / 1M out list on Z.ai; cheapest credible third-party route $1.19 / $3.74 (SiliconFlow). No free tier from Z.ai; self-hosting the open weights avoids API fees. A high-speed API tier reaching ~400 tok/s launched 2026-05-21.
- **Architecture:** Mixture-of-Experts transformer with open weights under an unrestricted license; Z.ai has not published a full parameter breakdown for this checkpoint in the sources checked.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau2-Bench (τ²-bench): **97.7%** (Epoch AI via Model Beat) — one of the highest tool-agent reliability figures found in this scan
- Agentic index: **94th percentile of tracked models** (Epoch AI via Model Beat) — the model's strongest category
- Claw-Eval / ClawProBench / GDPval-AA / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Terminal-Bench 2.1 / 2.0: **no verified public score found** for GLM-5.1 itself; a secondary source cites 62.0% for Terminal-Bench in a GLM-5.2 comparison, attributed to the 5.1 predecessor — provisional only
- Vendor claim: 8-hour autonomous task execution (Z.ai launch coverage)

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (Epoch AI via Model Beat; revised up from 85.5% on 2026-08-10)
- HLE: **30.1%** (Epoch AI via Model Beat; improved from 28.0%)
- SimpleBench: **55.1%** (revised down from 58.7%); SimpleQA Verified: **34.0%** (revised down from 37.3%)
- WeirdML: **57.1%** (Epoch AI via Model Beat)
- AIME 2024/2025: **93.3%**; FrontierMath: **33.4%**; FrontierMath Tier 4: **12.5%**
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: no single headline composite reproduced; the tracker places it at the 62nd percentile overall
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **74.2%** (Epoch AI via Model Beat)
- SciCode: **44.8%** (Epoch AI via Model Beat)
- WebDev Arena: **1509 Elo** (Epoch AI via Model Beat)
- SWE-bench Pro: **top-ranked at launch**, ahead of GPT-5.4 and Claude Opus 4.6 (Analytics India Magazine, 2026-04-09) — no numeric value reproduced
- LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall value published for the 205K window; the context is smaller than the 1M-token GLM-5.2 successor and recall at depth is unmeasured in the sources checked.

### Normalized scores (1–100)

- **Tool use: 92/100.** τ²-bench 97.7% plus a 94th-percentile agentic placement, an advertised 8-hour autonomous run and a record-speed API tier make it a top-tier agent model; capped by missing Terminal-Bench/Claw/GDPval numbers.
- **Reasoning: 80/100.** GPQA Diamond 89.9% and WeirdML 57.1% are strong, but HLE 30.1%, FrontierMath Tier 4 12.5% and a falling SimpleQA Verified score keep it below the frontier-proprietary cohort.
- **Context window: 70/100.** 204,800 tokens is mid-tier in a market where 1M windows are now common, and no recall benchmark exists to argue the window is fully usable.
- **Multimodal: 15/100.** Text-in/text-out only; no image, audio, video or PDF input, with vision handled by a separate GLM-5V model.
- **Coding: 88/100.** SWE-bench Verified 74.2%, SciCode 44.8%, a 1509 WebDev Arena Elo and a launch-leading SWE-bench Pro claim; capped by missing LiveCodeBench/DeepSWE values and the absence of any free access path.
- **Cost efficiency: 78/100.** $1.19–$1.40 / $3.74–$4.40 per 1M is roughly 20× DeepSeek-V4-Flash's input rate, but open weights make self-hosting the real cost lever.
- **Overall Score: 71/100.** (92 + 80 + 70 + 15 + 88 + 78) / 6 = 70.5 → **71**. Best fit: agentic coding and long-horizon tool workflows where a 205K window and self-hostable weights are enough.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Epoch AI figures and OpenRouter specs via Model Beat, Z.ai launch coverage via press aggregation, OpenCode Zen docs for free-ID verification); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.