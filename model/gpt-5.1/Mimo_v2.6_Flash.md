# GPT-5.1 — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-5.1`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's 2025-11-13 API release in the GPT-5 series, balancing intelligence and speed for agentic and coding tasks; adds a `none` reasoning-effort value (default) and 24-hour prompt-cache retention over GPT-5. Not a variant/alias of another entry in this dataset.
- **Provider / access:** OpenAI Responses API + Chat Completions (`https://api.openai.com/v1`), plus aggregators (Requesty, OpenRouter, Vercel AI Gateway — LLMReference/Requesty rows). Both Chat Completions and Responses supported.
- **Release / knowledge:** released 2025-11-13 (`gpt-5.1-2025-11-13`); knowledge cutoff not published for this snapshot in sources found.
- **IDs:** `gpt-5.1`, `gpt-5.1-2025-11-13`. **No OpenCode Zen Free ID found** — scored on paid API pricing.
- **Context window:** 400,000 tokens input, 128,000 max output (llm-stats, Requesty, LLMReference spec rows agree).
- **Modalities:** text + image in; text out; reasoning yes (effort levels including `none` / `minimal` / `high`); tool calling, prompt caching (90% discount on cached input, optional 24h retention), structured outputs. PDF/file input not explicitly verified for this snapshot; no audio/video input found.
- **Pricing (as of 2026-10-01):** $1.25 / 1M input, $10.00 / 1M output (OpenAI list via llm-stats/Requesty); cached input 90% cheaper (~$0.125 / 1M), no cache-write/storage charge; 24h retention via `prompt_cache_retention='24h'` (OpenAI developer post). Paid tier only — no free API tier verified.
- **Architecture:** proprietary, closed weights (llm-stats: "Proprietary, Closed source"); parameter count not published.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench Hard: **45.5%** (Artificial Analysis via Requesty)
- τ²-Bench: **81.9%** (AA via Requesty); τ²-Bench Telecom: **95.6%** (llm-stats shared-benchmark row)
- SWE-bench Verified (agentic loop, OpenAI high effort, JSON apply-patch harness): **76.3%** (OpenAI "GPT-5.1 for developers")
- GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / OSWorld: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (no tools, OpenAI high): **88.1%**; **87.3%** (AA via Requesty)
- AIME 2025 (no tools): **94.0%** (OpenAI; AA via Requesty agrees)
- HLE: **28.5%** (AA via Requesty)
- MMLU-Pro: **87.0%** (AA via Requesty)
- FrontierMath (with Python tool): **26.7%** (OpenAI)
- Artificial Analysis Intelligence Index: **37.5** (AA via Requesty); AA Coding Index **49.4**
- LCR / CritPt / AA-Omniscience: **no verified public score found**

Coding:

- SWE-bench Verified: **76.3%** (OpenAI, all 500 problems, averaged across reasoning efforts)
- LiveCodeBench: **86.8%** (AA via Requesty)
- SciCode: **43.3%** (AA via Requesty)
- SWE-bench Pro / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- 400K window (spec rows); MRCR / RULER / GraphWalks retrieval: **no verified public score found**

Multimodal:

- MMMU: **85.4%** (OpenAI); image input supported (Requesty capability row)

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-Bench 81.9% (AA) with τ²-Bench Telecom at 95.6% is upper-mid, but Terminal-Bench Hard 45.5% sits at the very bottom of the mid band (TB 45–60 → 50–70) and drags the blend down; no GDPval/OSWorld row found.
- **Reasoning: 82/100.** GPQA Diamond 87–88% is near the frontier anchor (90+ → 90–100), AIME 94% and MMLU-Pro 87% are strong; HLE 28.5% (frontier 40+ → 90–100) and AA Index 37.5 (60+ → 90–100) are the caps.
- **Context window: 78/100.** 400K tokens sits in the upper half of the 200K–500K tier (65–84) with a generous 128K output cap; no long-context retrieval measurement found.
- **Multimodal: 65/100.** Text + image in with a strong 85.4% MMMU score puts it mid-band for image-in (60–70); PDF/file input is not explicitly verified for this snapshot and there is no audio/video input or non-text output, so it cannot reach the 75–90 band.
- **Coding: 82/100.** SWE-bench Verified 76.3% (OpenAI) clears the frontier reference (DeepSWE 74%+) and LiveCodeBench 86.8% is excellent, but SciCode 43.3% (<55% frontier ref) and AA Coding Index 49.4 (<70 ref) keep it out of the 90s.
- **Cost efficiency: 70/100.** $1.25/$10 is between the ~$1.25/$4.25 ≈ 88 anchor and the $3/$15 ≈ 60 anchor — input is cheap, output is pricey; 90%-off cache reads soften the effective rate.
- **Overall Score: 76/100.** (72 + 82 + 78 + 65 + 82) / 5 = 75.8 → 76 — best-fit as a fast, cache-friendly flagship coder/agentic model with near-frontier reasoning, capped by Terminal-Bench-class agentic reliability, image-only multimodal input and $10 output pricing.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (OpenAI "GPT-5.1 for developers" post, Artificial Analysis scores via Requesty comparison page, llm-stats shared-benchmark tables, LLMReference spec sheet); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
