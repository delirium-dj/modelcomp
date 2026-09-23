# Grok 4.5 — findings by Muse Spark 1.2

- Source: xAI/grok-4.5 (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's July 2026 flagship for agentic tool use and long-session coding; #4 on AA Intelligence Index and #1 on agentic tool-use at launch.
- **Provider / access:** xAI API `grok-4.5` (high/medium/low reasoning), OpenRouter `x-ai/grok-4.5` — Chat Completions + Responses API with function calling, web/X search, code execution
- **Release / knowledge:** 2026-07-08 release; knowledge cutoff 2026-07 (per xAI)
- **IDs:** `x-ai/grok-4.5`, `xai/grok-4.5`
- **Context window:** 500,000 total (500K) / ~32K max output — tiered pricing at 200K threshold; verified via xAI, LLMReference
- **Modalities:** Text, image in; text out; reasoning yes (configurable); tool calls yes; image generation via tools
- **Pricing (as of 2026-09-23):** $2.00 in / $6.00 out per 1M (cached $0.50) ≤200K prompts; $4.00/$1.00/$12.00 >200K — no Zen Free ID; $0.31/task on AA Index (1/5 of Sonnet 5)
- **Architecture:** Proprietary (1.5T params per Musk, 3× Grok 4.3)

### Raw benchmarks found

Agent / tool use:

- τ³-Banking (AA, Tau3): **33%** — #1 of 28 models charted, vs GPT-5.5 xhigh 31% / Sonnet 4.6 31% (source: Artificial Analysis eesel.ai, OfficeChai)
- AutomationBench-AA: **51.4%** clean completion — #1, vs Fable 5 48.6% / Opus 4.8 48.5% (first to clear 50%) (source: OfficeChai, Artificial Analysis)
- GDPval-AA v2: **1543 Elo** — between Opus 4.8 1600 / GLM-5.2 1513 / GPT-5.5 1494 (source: OfficeChai)
- Terminal-Bench 2.1: **83.3%** (xAI first-party chart, harness not specified; AA confirms #5 behind Fable 84.3%/GPT-5.5 83.4%) (source: xAI 2026-07-16 chart, DataLLM Lab, LLMReference)
- GDPval-AA / GDP.pdf: see 1543 above
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified isolated Toolathon** — proxy via AutomationBench above; Coding Agent Index tied with GPT-5.5

Reasoning / knowledge:

- GPQA Diamond: **93%** (#4 near-tied with Gemini 3.1 Pro/GPT-5.5) per eesel.ai estimate anchored to Grok 4.3 90% trajectory (source: eesel.ai, agentguides.dev table estimates)
- HLE: **no verified public HLE for Grok 4.5 isolated** — DeepSWE/SWE-focused launch did not publish HLE
- LCR / MLCR: **no verified public LCR found**
- CritPt: **no verified public CritPt found**
- Artificial Analysis Intelligence Index / BenchLM overall: **54** (AA Index v4.1, #4/168, behind Fable 5 60/Opus 4.8 56/GPT-5.5 55; high=39 on v4.3.2 #43/202) (source: Artificial Analysis model page, eesel.ai, OfficeChai, DataLLM Lab)
- Omniscience Accuracy / Hallucination Rate: **26 AA-Omniscience** (accuracy 52% vs Grok 4.3 35%, hallucination 54% vs 25%) (source: OfficeChai)
- MMLU-Pro etc: **87.0% MMLU-Pro / 92.0 HumanEval / 97.0 MATH-500** (estimates anchored to Grok 4.3 per agentguides.dev, not measured) — marked as provisional

Coding:

- SWE-bench Pro: **64.7%** (xAI chart) vs Fable 80.4% / Opus 4.8 69.2% / Opus 4.7 64.3% / GLM-5.2 62.1% (source: xAI 2026-07-16, OfficeChai, DataLLM Lab)
- SWE-bench Verified (Lite): **~73% SWE-bench** (agentguides estimate anchored to Grok 4.3 73%; not isolated) (source: agentguides.dev)
- SciCode / AA-SciCode: **no verified public SciCode for Grok 4.5 isolated**
- Vibe Code Bench: **no verified public Vibe found**
- DeepSWE / Coding Index / other: **62.0% DeepSWE 1.0** (Datacurve, AA harnesses: Fable 66.1% / GPT-5.5 64.31% / Opus 4.8 55.75%) ; **53% DeepSWE 1.1** (mini-swe-agent) vs Fable 70%; **29.0% SWE Marathon pass@1** #1 vs Opus 4.8 26% (source: xAI 2026-07-16); **76 AA Coding Agent Index** (Grok Build) tied GPT-5.5, behind Fable 5 (source: OfficeChai); CursorBench 3.2 **66.7% high** (Cursor vendor, training-data advantage noted)

Long context:

- 500K total — no MRCR/RULER at 500K published; 500K is 50% of 1M tier but above 256K tier

### Normalized scores (1–100)

- **Tool use: 92/100.** Tau3-Banking 33% #1 + AutomationBench-AA 51.4% #1 (first >50%) + GDPval 1543 + TB2.1 83.3% top-5 demonstrate best-in-class agentic tool use; capped by missing Claw-Eval/MCP-Atlas direct and 500K not 1M.
- **Reasoning: 84/100.** AA Index 54 (#4 overall) + GPQA ~93% + GDPval 1543 high knowledge work; capped by missing HLE isolation and hallucination rate 54% (up from 25% on 4.3) limiting Omniscience 26.
- **Context window: 84/100.** 500K total — tiered 500K pricing, 75-85 range per methodology (1M=95-100, 500K~84, 256K=72); capped below 1M models.
- **Multimodal: 60/100.** Text, image in; text out per AA (text+image) — image-only tier 60-70, no video/audio in.
- **Coding: 88/100.** SWE-Pro 64.7% + DeepSWE 62% + TB2.1 83.3% + Coding Index 76 + Marathon 29% #1 show frontier coding; capped by Fable 5 SWE-Pro 80.4% and DeepSWE 66% leadership.
- **Cost efficiency: 70/100.** $2/$6 per 1M (≤200K) tiered — $0.31/task AA Index, 90% cheaper per GDPval task than models above it, 1/5 cost of Sonnet 5 max; no Free but best intelligence-per-dollar in top-5.
- **Overall Score: 82/100.** Mean of five non-cost dims (92+84+84+60+88)/5=81.6 → 82; best-fit for agentic tool-heavy workflows where cost and speed (85.6 tok/s) matter.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Artificial Analysis Grok 4.5 pages, xAI 2026-07-16 launch chart, eesel.ai, OfficeChai, DataLLM Lab, LLMReference, agentguides.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
