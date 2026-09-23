# Grok 4.5 — findings by Mimo V2.6 Flash

- Source: xAI/`grok-4.5`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's July 2026 coding/agentic-workflow model (trained jointly with Cursor on real developer session data), pitched as a faster, more token-efficient Opus-class worker at $2/$6 — roughly 4× fewer output tokens per SWE-Pro task than Opus 4.8. Sits alongside the larger Grok 4.20 flagship rather than replacing it; context cut to 500K from Grok 4.3's 1M.
- **Provider / access:** xAI API (Responses + Chat Completions, `grok-4.5`), Grok Build terminal agent (Apache 2.0 runtime license — model weights proprietary), Cursor, Microsoft Office add-ins, OpenRouter, Vercel AI Gateway, Cloudflare Workers AI, Snowflake Cortex, Databricks Mosaic; Zen `opencode/grok-4.5`. EU API console not available at launch.
- **Release / knowledge:** 2026-07-08 (xAI / DataLearner; launch news 2026-07-16); knowledge cutoff not published.
- **IDs:** `grok-4.5` (xAI API); `x-ai/grok-4.5` on gateways.
- **Context window:** 500,000 tokens (DataLearner / HokAI / Awesome Agents — half of Grok 4.3's 1M; extended-tier pricing above 200K).
- **Modalities:** text, image in; text out; `reasoning_effort` low/medium/high (default high); tool calls; function calling; structured output.
- **Pricing (as of 2026-09-23):** $2.00 / $6.00 per 1M in/out up to 200K; extended tier >200K $4.00 / $12.00; cached input $0.50 (up to $1.00 extended). Paid; no free tier published.
- **Architecture:** proprietary closed weights; ~1.5T MoE per Awesome Agents (HokAI: parameter count and dense/MoE status undisclosed by xAI — treat 1.5T as secondary-source). No system card/model card published at launch (gap vs prior Grok releases).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (xAI launch / AA — ties GPT-5.5 83.4, trails Fable 5 84.3); best-reported-harness row **79.3% ±1.5** (BenchmarkList)
- Long-Horizon Terminal-Bench: **0.51** mean reward — **#1 of 21**, 100th percentile (BenchmarkList, 2026-08-27)
- Terminal-Bench 3.0: **15.7%** Pass@1 (#11/17; field leader O-5 42.7) (BenchmarkList)
- Tau3-Banking: **42.1%** (#13/174, 93rd pct) (BenchmarkList)
- AutomationBench-AA: **51.4%** (#3/13) (BenchmarkList)
- APEX-Agents-AA: **47.1%** (#4/33) (BenchmarkList)
- GDPval-AA: **1535** Elo (BenchmarkList; Awesome Agents cites v2 1543)
- AA-Briefcase: **1313** (BenchmarkList)
- BrowseComp: **75.8% ±6.1** (BenchmarkList)
- Agents' Last Exam: **27.0%** (BenchmarkList)
- Claw-Eval / ClawProBench / MCP Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (BenchmarkList / AA, 2026-07-28; DataLearner 93.43 — xAI did not publish at launch)
- HLE: **42.7%** (BenchmarkList)
- MMLU Pro: **89.2%** (BenchmarkList)
- ARC-AGI-1: **87.2%**; ARC-AGI-2: **52.6%**; ARC-AGI-3: **0.3%** (BenchmarkList)
- AA Intelligence Index: **54** (#4 frontier at launch per Awesome Agents / HokAI; BenchmarkList rank 17/418 across all time)
- AA-LCR: **74.0%** (BenchmarkList)
- SimpleBench: **70** (DataLearner)
- CritPt / Omniscience: **no verified public score found**

Coding:

- SWE-bench Verified: **86.6%** (BenchmarkList, 2026-07-28, thinking=high — rank 7/72)
- SWE-bench Pro: **64.7%** (xAI / AA / BenchmarkList — Opus 4.8 69.2, Fable 5 80.4, GPT-5.5 58.6)
- DeepSWE 1.0: **62.0%** (xAI, provider harness — beats Opus 4.8 55.75); DeepSWE 1.1: **53%** (xAI, neutral mini-swe-agent) / **56.6%** (BenchmarkList — harness drift, both noted)
- SWE Marathon: **29.0%** pass@1 (xAI — beats Opus 4.8 26.0, Fable 24.0)
- LiveCodeBench: **87.4%** (BenchmarkList, #9/123)
- SciCode: **54.1%**; Vibe Code Bench v1.1: **69.0%**; FrontierSWE: **5.47**; CursorBench: **3.2** (contaminated — Cursor training-data overlap disclosed) (BenchmarkList)
- AA Coding Index: **76** (HokAI / AA)
- Avg output tokens / SWE-Pro task: **~15,954** vs Opus 4.8 ~67,020 (~4.2× efficiency) (AA / Awesome Agents)

Long context:

- MRCR-v2 128K (8-needle): **81.4%** (BenchmarkList, self-reported via Qwen launch comparison — field leader G-5.6 Terra 93.5)
- 500K window; retrieval at 512K+: **no verified public score found**

Multimodal:

- MMMU-Pro: **61.8%** (BenchmarkList — weak, #69/79); Vals Multimodal Index: **63.4** (BenchmarkList)
- Image in, text out only; no audio/video.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 83.3 plus #1 Long-Horizon TB, Tau3 42.1, AutomationBench 51.4, GDPval 1535, BrowseComp 75.8 — elite long-horizon agent profile; capped by TB3.0 15.7 (mid-pack) and missing public MCP/Claw rows.
- **Reasoning: 90/100.** GPQA 92.9, HLE 42.7, AA Index 54 (frontier #4 at launch), MMLU-Pro 89.2; capped by ARC-AGI-2 52.6 trailing top Pro/Sol-class 70%+ and Index still below Fable/Mythos tier.
- **Context window: 86/100.** 500K lands in the 500K–1M tier (85–94); MRCR 81.4% at only 128K is mid-pack and there is no ≥512K retrieval proof — plus an unexplained cut from Grok 4.3's 1M and extended pricing above 200K.
- **Multimodal: 65/100.** Text + image in only (no audio/video/PDF, text out) → image-in band 60–70; MMMU-Pro 61.8 is weak for the class, anchoring the lower half of that band.
- **Coding: 90/100.** SWE-V 86.6, TB2.1 83.3, SWE-Pro 64.7, LCB 87.4, Vibe 69.0, SWE Marathon lead over Opus/Fable — frontier coding/agent; capped slightly by DeepSWE 1.1 53–56.6 trailing Fable 70 and CursorBench contamination.
- **Cost efficiency: 84/100.** $2/$6 matches the Qwen3.8-Max flat tier and beats $3/$15≈60 by a wide margin; ~4× token efficiency compounds real-world savings; docked for the >200K $4/$12 extended tier and no free tier.
- **Overall Score: 84/100.** Mean of Tool 88 + Reasoning 90 + Context 86 + Multimodal 65 + Coding 90 = 419/5 = 83.8 → **84** (best-fit: high-volume coding/agentic worker at $2/$6 when ≤500K context and image-in-only suffice; step up to 4.20/Opus/Fable for 1M docs or top HLE depth).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (xAI launch post, BenchmarkList, Awesome Agents, HokAI, DataLearnerAI, DataLLM Lab); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
