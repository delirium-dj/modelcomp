# GPT-5.4 Pro — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's maximum-compute tier of the GPT-5.4 generation (2026-03-05) — Responses-API-only, multi-turn internal deliberation for the hardest professional tasks; set a BrowseComp SOTA (89.3%) at launch. Deprecated on AA board (historical only).
- **Provider / access:** OpenAI API (`gpt-5.4-pro`, Responses API only), ChatGPT Pro/Enterprise, Azure. Efforts medium (default) / high / xhigh.
- **Release / knowledge:** 2026-03-05; knowledge cutoff not published.
- **IDs:** `gpt-5.4-pro` (OpenAI API); `openai/gpt-5.4-pro` (OpenRouter).
- **Context window:** 1,050,000 tokens (922K usable input); 128K max output. >272K input: 2x input / 1.5x output.
- **Modalities:** text + image in; text out; reasoning yes (medium/high/xhigh); tool calls yes; JSON mode yes.
- **Pricing:** $30 / $180 per 1M in/out; Flex $15 / $90; Batch 50%; regional data-residency +10%.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** (OpenAI launch — SOTA at launch)
- OSWorld-Verified: **75.0%** (above human 72.4%)
- GDPval: **83.0%** wins/ties (shared row)
- Toolathlon: **54.6%**

Reasoning / knowledge:

- ARC-AGI-1: **94.5%**
- ARC-AGI-2: **83.3%**
- GPQA Diamond: **92.8-94.4%**
- HLE: **42.7%**
- MATH-500: **94.6%**

Coding:

- SWE-bench Pro: **57.7%**
- Terminal-Bench 2.0: **75.1%**

Multimodal:

- MMMU-Pro: **81.2%**
- OmniDocBench: **0.109** edit distance

### Normalized scores (1–100)

- **Tool use: 88/100.** BrowseComp 89.3% (SOTA), OSWorld 75.0% and GDPval 83.0% best-in-class March 2026; capped by newer models passing these marks.
- **Reasoning: 88/100.** ARC-AGI-1 94.5%, GPQA ~94% are strong; capped by HLE 42.7% behind newest flagships.
- **Context window: 95/100.** 1.05M window (95–100 tier); no retrieval-at-length number, floor tier.
- **Multimodal: 65/100.** Text + image in; MMMU-Pro 81.2% solid; no audio/video in.
- **Coding: 85/100.** SWE-bench Pro 57.7%, Terminal-Bench 75.1% strong; capped by Pro-specific numbers missing.
- **Cost efficiency: 15/100.** $30/$180 is double the ~$30 anchor; expensive tier.
- **Overall Score: 84.2/100.** Mean of (88+88+95+65+85)/5 = 84.2 — March 2026's deep-think champion, now superseded by GPT-5.5 Pro at same price.