# Grok 4.1 Fast Reasoning — findings by Qwen 3.8 Flash

- Source: xAI (`xai/grok-4-1-fast-reasoning`; curated id `opencode/grok-4.1-fast-reasoning`), cross-checked against xAI's Grok 4.1 Fast launch post, Artificial Analysis (τ²-bench), OpenRouter and the Agent-Tools-API benchmark table
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (Reasoning)
- **Short description:** The "maximal-intelligence" endpoint of xAI's **Grok 4.1 Fast** — a purpose-built, low-cost **tool-calling / agentic-search** model (2025-11-19) rather than a deep-reasoning flagship. xAI ships two variants off one model: `grok-4-1-fast-reasoning` (this entry) and `grok-4-1-fast-non-reasoning` (instant). Its signature strength is state-of-the-art agentic tool use with a 2M-token window; its weakness is that it is explicitly *not* the top "brain" of the Grok line.
- **Provider / access:** xAI API (`model="grok-4-1-fast-reasoning"`) + OpenRouter (`x-ai/grok-4-1-fast`); paired with xAI's **Agent Tools API** (web search, X search, code execution, file search, remote MCP) running on xAI infra.
- **Release / knowledge:** 2025-11-19; knowledge cutoff not separately published. Curated meta flags it **deprecated/superseded** — the Grok 4.20 / 4.5+ line now serves the same agentic niche with better judgment.
- **IDs:** `grok-4-1-fast-reasoning`; sibling endpoints `grok-4-1-fast-non-reasoning`, `grok-4-fast-reasoning` (the earlier 4.0 Fast lane).
- **Context window:** **2,000,000 tokens**, trained (long-horizon RL, multi-turn emphasis) to stay consistent across the full window.
- **Modalities:** **text-only** in / text out (no image/audio on the Fast lane); reasoning yes (this variant); parallel tool calls yes.
- **Pricing (as of 2026-10-20):** **$0.20/M input, $0.50/M output, $0.05/M cached**, tool calls from $5/1,000 successful invocations — one of the cheapest agentic tiers.
- **Architecture:** proprietary; RL-trained in simulated multi-domain tool environments; a distilled "Fast" sibling of Grok 4 with roughly halved hallucination vs Grok 4 Fast.

### Raw benchmarks found

> A strong mix of xAI-reported and **Artificial-Analysis-independent** numbers. The τ²-bench Telecom result is explicitly "verified by Artificial Analysis." No SWE-bench/GPQA absolutes are published for this tool-calling-focused endpoint.

Agent / tool use:

- **τ²-bench Telecom: 100%** — *independent evaluation verified by Artificial Analysis* (agentic customer-support tool use; total cost $105)
- **Berkeley Function Calling v4: 72%** overall accuracy (frontier tool-calling; vs Gemini 3 Pro, whose score is an estimated pending-official)
- Deep-research / agentic search (Agent Tools API): **Research-Eval Reka 63.9** (beats GPT-5 45.5, Sonnet 4.5 41.2, Gemini 3 Pro 55.9), **FRAMES 87.6**, **X Browse 56.3**

Reasoning / knowledge:

- FActScore factuality "on par with Grok 4"; hallucination halved vs Grok 4 Fast (relative, not an absolute)
- GPQA Diamond / HLE / MMLU-Pro: **no absolute published** for this Fast endpoint (positioned below the Grok 4/4 Heavy "brain" tier); superseded on reasoning by the 4.20/4.5+ line

Coding:

- SWE-bench Verified / LiveCodeBench: **no published absolute** for this exact ID (Vals notes the successor 4.20 improves AIME/GPQA/LCB/SWE over 4.1 Fast)

Long context:

- 2M window with multi-turn long-context consistency emphasized; **no MRCR/RULER numeric score transcribed** in the launch material.

### Normalized scores (1–100)

- **Tool use: 92/100** Class-defining: an **AA-verified τ²-bench Telecom 100%** plus BFCL-v4 72% and best-in-class agentic-search (Research-Eval 63.9, FRAMES 87.6) with native parallel tool calls — the whole point of this model, and it leads the cohort here.
- **Reasoning: 62/100** Deliberately the "hands," not the "brain": factuality is Grok-4-class, but no GPQA/HLE absolutes are published and the successor line is explicitly better at judgment — so pure reasoning is solid-mid, not frontier.
- **Context window: 90/100** A genuine **2M-token** window trained to hold up across long multi-turn agentic horizons — top of the cohort — held just under 95 by the absence of a published single-window retrieval score.
- **Multimodal: 15/100** Text-only Fast lane (no image/audio in or out) — the template's text-only floor.
- **Coding: 58/100** Competent agentic coding via tool use, but with no SWE-bench/LiveCodeBench absolute for this endpoint and a design center in search/support agents rather than repo-scale software, coding is scored as functional-not-specialist.
- **Cost efficiency: 96/100** $0.20/$0.50 per 1M (cached $0.05) with blazing-fast inference is among the cheapest serious agentic tiers in the registry — the second pillar of its pitch.
- **Overall Score: 63.4/100** Half-up mean of the five quality dims (92+62+90+15+58)/5 = 63.4. Best fit: **high-volume, cost-sensitive tool-calling agents — customer support, finance ops, and deep/agentic search** — where elite τ²/BFCL scores, a 2M window and pennies-per-task pricing matter far more than frontier reasoning or multimodality.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-20
- Method: public internet research — xAI "Grok 4.1 Fast and Agent Tools API" launch post (τ²-bench Telecom 100% AA-verified, BFCL-v4 72%, Research-Eval Reka 63.9 / FRAMES 87.6 / X Browse 56.3, pricing $0.20/$0.50/$0.05, 2M ctx, the `-reasoning` vs `-non-reasoning` API variants), OpenRouter listing, and Vals/Artificial-Analysis context on the 4.20/4.5+ supersession. Scores are normalized 1–100 interpretations, not official vendor scores; missing GPQA/SWE absolutes are flagged as gaps, not filled from the flagship Grok 4. Curated `meta.json` "128K / Text in-out" was overridden by first-party evidence (2M context; text-only retained).
- Revisit trigger: an Artificial Analysis Intelligence-Index single number for the 4.1-Fast-reasoning endpoint, or published GPQA/SWE-bench absolutes (note the 4.3+ line is the recommended successor).
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Flash.md`, using the same headings.
