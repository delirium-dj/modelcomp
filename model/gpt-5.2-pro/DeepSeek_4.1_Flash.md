# GPT-5.2 Pro — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-5.2 Pro (`gpt-5.2-pro`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's high-compute GPT-5.2 tier — the same family as GPT-5.2 but with extended thinking for research-grade, multi-step problems; paid only, no free lane.
- **Provider / access:** OpenAI Responses API (`gpt-5.2-pro`), OpenCode Zen (`opencode/gpt-5.2-pro`); ChatGPT Pro surface as well.
- **Release / knowledge:** 2025-12-11 (GPT-5.2 launch); knowledge cutoff not stated in the sources found.
- **IDs:** `gpt-5.2-pro`, `opencode/gpt-5.2-pro`. No Free ID.
- **Context window:** 400,000 total; 128,000 max output — OpenAI model docs.
- **Modalities:** text and image in; text out; reasoning tokens; tool calls.
- **Pricing (as of 2026-10-23):** $21.00/$168.00 per 1M in/out, $2.10 cached.
- **Architecture:** proprietary GPT-5.2 decoder with high-compute inference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **underperforms GPT-5.2 by ~7–9 points** on an independent 89-task run, with 26 timeouts vs 7–8 (xdotli/gpt-5.2-tb2); no standalone percentage published
- Tau2-Bench / OSWorld / GDPval-AA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (thinking mode; datalearner.com; llm-stats.com GPQA leaderboard)
- HLE: **50%** (datalearner.com)
- SimpleBench: **57.4%** (extra-high effort; datalearner.com)
- FrontierMath Tier 4: **31.3%** (datalearner.com)
- Artificial Analysis Intelligence Index: **no verified public score found** for this exact id

Coding:

- SWE-Bench Pro / SWE-bench Verified / LiveCodeBench: **no verified public score found** for the Pro variant (GPT-5.2 base: SWE-Bench Pro 55.6, SWE-bench Verified 80.0)
- Vibe Code Bench: **no verified public score found**

Long context:

- No MRCR/RULER figure published for the Pro variant; 400K window is vendor-stated.

### Normalized scores (1–100)

- **Tool use: 58/100.** The Pro tier is slower and less reliable than GPT-5.2 on terminal tasks (~7–9 points lower, more timeouts), so agentic tool use is a weakness despite the reasoning strength (xdotli/gpt-5.2-tb2).
- **Reasoning: 90/100.** GPQA 93.2%, HLE 50% and SimpleBench 57.4% are top-tier; FrontierMath T4 31.3% is the ceiling (datalearner.com; llm-stats.com).
- **Context window: 80/100.** 400K/128K is frontier-class; no retrieval measurement exists.
- **Multimodal: 50/100.** Image input accepted, text-only output; no MMMU row for the Pro variant.
- **Coding: 78/100.** No direct Pro coding score; the GPT-5.2 base (SWE-Bench Pro 55.6, SWE-bench Verified 80.0) sets expectations, capped by the Pro tier's terminal reliability issues.
- **Cost efficiency: 40/100.** $21/$168 per 1M is among the most expensive API tiers — justified only for high-value reasoning.
- **Overall Score: 71/100.** Mean of the five quality dims (58+90+80+50+78)/5 = 71.2 → 71. Best-fit: single high-stakes research/analysis questions; not long autonomous coding runs.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (DataLearner benchmark analysis, llm-stats GPQA leaderboard, independent Terminal-Bench 2.0 run, OpenAI model docs, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
