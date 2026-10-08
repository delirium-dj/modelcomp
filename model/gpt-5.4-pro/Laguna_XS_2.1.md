# GPT-5.4 Pro — findings by Laguna XS 2.1

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's maximum-compute tier of the GPT-5.4 generation (2026-03-05) — Responses-API-only, multi-turn internal deliberation for the hardest professional tasks; set a BrowseComp SOTA (89.3%) at launch. Deprecated on Artificial Analysis' board (historical results only).
- **Provider / access:** OpenAI API (`gpt-5.4-pro`, Responses API only — some requests take several minutes), ChatGPT Pro/Enterprise, Azure. Efforts medium (default) / high / xhigh.
- **Release / knowledge:** 2026-03-05; knowledge cutoff not published in sources found.
- **IDs:** `gpt-5.4-pro` (OpenAI API); `openai/gpt-5.4-pro` (OpenRouter). No Zen Free ID found.
- **Context window:** 1,050,000 tokens (922K usable input per OpenRouter); 128K max output. >272K input: 2x input / 1.5x output.
- **Modalities:** text + image in; text out; reasoning yes (medium/high/xhigh); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $30 / $180 per 1M in/out; Flex $15 / $90; Batch 50%; regional data-residency +10%.
- **Architecture:** proprietary; GPT-5.4 unified architecture with extra test-time compute.

### Raw benchmarks found

Agent / tool use:

- BrowseComp (Pro compute): **89.3%** (OpenAI launch — new SOTA, +17 pts abs over GPT-5.2)
- GDPval: **83.0%** wins/ties (GPT-5.4 launch row, shared; SOTA at launch)
- OSWorld-Verified: **75.0%** (shared GPT-5.4 row — SOTA at launch, above human 72.4%)
- Toolathlon: **54.6%** (shared GPT-5.4 row)
- WebArena-Verified: **67.3%**; Online-Mind2Web: **92.8%** (shared GPT-5.4 rows)
- Claw-Eval / MCP-Atlas absolute: no verified public score found (OpenAI notes tool search cut tokens 47% across 250 MCP Atlas tasks at same accuracy)

Reasoning / knowledge:

- ARC-AGI-1 (Verified): **94.5%**; ARC-AGI-2: **83.3%** (BenchGecko)
- GPQA Diamond: **92.8%** (BenchGecko) / **94.4%** (vendor via ModelPriceWatch)
- HLE: **42.7%** (vendor via ModelPriceWatch)
- CritPt: **30.0% xhigh** (AA via OpenRouter)
- MATH-500: **94.6%** (OpenTools)
- Chatbot Arena: **1478 Elo** (LMSYS via BenchLM)

Coding:

- SWE-bench Pro (Public): **57.7%** (shared GPT-5.4 row — outperforms GPT-5.3-Codex at launch)
- Terminal-Bench 2.0: **75.1%** (shared GPT-5.4 launch row)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in sources checked

Long context:

- 1.05M window; MRCR / RULER / GraphWalks: no verified public score found

Multimodal (supporting): MMMU-Pro **81.2%** no tools (shared GPT-5.4 row); OmniDocBench edit distance **0.109** (no reasoning)

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 89.3% (launch SOTA), OSWorld-Verified 75.0% (above human) and GDPval 83.0% were all best-in-class in March; capped by newer models (Sol/Terra/Astra) passing these marks and no MCP-Atlas absolute row.
- **Reasoning: 88/100.** ARC-AGI-1 94.5%, ARC-AGI-2 83.3% and GPQA ~93–94% are strong; capped by HLE 42.7% behind the newest flagships and CritPt 30.0%.
- **Context window: 95/100.** 1.05M window (95–100 tier); no public retrieval-at-length number found, so the floor; 272K billing step is a caveat.
- **Multimodal: 65/100.** Text + image in, text out (image-in band); MMMU-Pro 81.2% and OmniDocBench 0.109 back solid vision parsing; no audio/video in.
- **Coding: 85/100.** SWE-bench Pro 57.7% (beat GPT-5.3-Codex at launch) and TB 2.0 75.1% are strong; capped by shared GPT-5.4 rows rather than Pro-specific numbers and no SWE-bench Verified row.
- **Cost efficiency: 15/100.** $30/$180 is double the $10/$50 (~30) anchor; Flex ($15/$90) helps marginally, but this is one of the most expensive API tiers available.
- **Overall Score: 84.2/100.** Mean of (88, 88, 95, 65, 85) = 84.2 — March 2026's deep-think champion, now superseded by GPT-5.5 Pro at the same price with better scores.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (OpenAI launch post + developer docs, OpenRouter, Artificial Analysis, BenchGecko, OpenTools, ModelPriceWatch); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
