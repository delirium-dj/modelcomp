# Claude Haiku 5.5 — findings by GPT-6 Luna

- Source: Anthropic/Claude Haiku 5.5, `anthropic/claude-haiku-5-5`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's Haiku small model (1M/128K, $0.10/$0.50) for high-volume subagents; 237.9 tok/s, AA-LCR 82.7%.
- **Provider / access:** Anthropic API `claude-haiku-5-5`; AWS Bedrock; OpenRouter; Kie AI.
- **Release / knowledge:** Released 2026-10-07; knowledge cutoff not stated in sources (likely mid-2026).
- **IDs:** `opencode/claude-haiku-5.5` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 1,000,000 total (128K max output)
- **Modalities:** Text, image, PDF in; text out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** $0.10/$0.50 per 1M in/out (prompts ≤100K), $0.50/$2.50 above 100K
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **62.7** (#21/128)
- Terminal-Bench 4.0: **39.20%** (Vals 36.36%)
- Terminal-Bench 2.1: **86.9%** estimated (benchgap); AA Terminal-Bench 2.1 **86.4%** estimated
- OSWorld 2.1: **72.4%** (offline subset); OSWorld-Verified **85.1%** estimated (benchgap)
- HLE w/ tools: **57.4%** (measured)
- Vals Index: **54.44%** (#18/48)
- CyberBench v1.1: **75.48%** (Vals)
- CyberGym: **88.2%** estimated (benchgap)
- Vibe Code Bench v1.1: **90.44%** (Vals, #3/112)
- FrontierCode 1.1 (Main): **46.4%** (measured)
- FrontierSWE v2: **43.8%** (measured)
- Bug Hunt Bench: **21.5 fixes** (measured)
- DeepSWE: **69.3%** estimated (benchgap)
- GDPval-AA: **55.9%** (measured)
- BrowseComp: **91.2%** estimated (benchgap)
- DeepSearchQA: **89.6%** estimated (benchgap)
- MCP Atlas: **84.3%** estimated (benchgap)
- τ²-bench: **98.1%** estimated (benchgap, high confidence)
- AA Agentic Index: **52.0%** estimated (benchgap)
- JobBench: **60.7%** estimated (benchgap)
- WideResearch: **81.9%** estimated (benchgap)
- APEX-Agents-AA: **40.8%** estimated (benchgap)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **82.7** (#8/28)
- HLE: **45.9%** (measured, w/o tools); HLE w/ tools **57.4%** (measured)
- AA-HLE: **44.4%** (measured)
- ARC-AGI-1: **89.0%** (measured)
- ARC-AGI-2: **61.3%** (measured)
- GPQA Diamond: **91.3%** estimated (benchgap); GPQA **92.9%** estimated
- MMLU: **89.7%** estimated; MMLU-Pro **85.8%** estimated
- AA Intelligence Index: **43.4%** (measured; #4 of 173)
- AA-LCR: **82.7%** (measured)
- CritPt: **18.9%** (measured)
- AA Omniscience Accuracy: **36.4%** (measured)
- FrontierMath v2 (Tier 4): **46.3%** (measured); Tiers 1-3 **75.1%** (measured)
- AA-IFBench: not separately published
- HLE-Verified: **30.5%** estimated (benchgap)

Coding:

- Coding public-lane (BenchLM): **53** (#38/150)
- Vibe Code Bench v1.1: **90.44%** (Vals)
- Vibe Code Bench 1-100: **20.41%** (Vals)
- FrontierCode 1.1 (Main): **46.4%** (measured)
- FrontierSWE v2: **43.8%** (measured)
- Bug Hunt Bench: **21.5 fixes** (measured)
- SWE-bench Verified: **88.4%** estimated (benchgap); Vals SWE-bench **86.6%** estimated
- SWE-bench Pro: **75.9%** estimated (benchgap)
- SWE-bench Multimodal: **25.2%** estimated (benchgap)
- LiveCodeBench v6: **95.7%** estimated (benchgap)
- DeepSWE: **69.3%** estimated (benchgap)
- AA-SciCode: **55.0%** (measured)
- AA Coding Index: **76.7%** estimated (benchgap)
- Vibe Code Bench: **75.2%** estimated (benchgap)
- CyberGym: **88.2%** estimated (benchgap)
- SciCode: **54.7%** estimated (benchgap)

Long context:

- 1M window; AA-LCR **82.7%** (measured); MRCRv2 **85.9%** estimated (benchgap, low confidence).

Multimodal:

- Multimodal: not separately reported (text/image/PDF in).
- AA-MMMU-Pro: **72.9%** estimated (benchgap)
- MMMU-Pro: **75.3%** estimated (benchgap)
- CharXiv: **81.4%** estimated (benchgap); CharXiv w/o tools **74.4%** estimated
- SWE-bench Multimodal: **25.2%** estimated (benchgap)

### Normalized scores (1–100)

- **Tool use: 85/100.** Agentic lane #21/128 (62.7), Terminal-Bench 4.0 39.2%, OSWorld 72.4%→85.1% estimated, HLE w/tools 57.4%, CyberBench 75.48%, GDPval-AA 55.9% measured, τ²-bench 98.1% estimated, BrowseComp 91.2% estimated; caps at Vals Index 54.44%.
- **Reasoning: 86/100.** HLE 45.9% measured, GPQA 92.9% estimated, ARC-AGI-1 89.0% measured, ARC-AGI-2 61.3% measured, FrontierMath Tier4 46.3% measured, CritPt 18.9% measured, AA-LCR 82.7% measured; caps at AA Omniscience 36.4%.
- **Context window: 88/100.** 1M window; AA-LCR 82.7% measured, MRCRv2 85.9% estimated; caps below 95 at retrieval <90%.
- **Multimodal: 78/100.** Text/image/PDF in; AA-MMMU-Pro 72.9% estimated, CharXiv 81.4% estimated; caps at no verified multimodal benchmark suite.
- **Coding: 83/100.** Vibe Code 90.44%, FrontierCode 46.4% measured, SWE-bench Verified 88.4% estimated, SWE-bench Pro 75.9% estimated, LiveCodeBench 95.7% estimated, DeepSWE 69.3% estimated; caps at Vibe Code 1-100 20.41% and SciCode 54.7%.
- **Cost efficiency: 98/100.** Very cheap $0.10/$0.50 per 1M.
- **Overall Score: 84/100.** Half-up mean of the five non-cost quality dimensions: (85 + 86 + 88 + 78 + 83) / 5 = 84. Cost efficiency is excluded. best-fit for high-volume agentic at very low cost.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://www.anthropic.com/news/claude-haiku-5.5)
  - [Source 2](https://www.anthropic.com/pricing)
  - [Source 3](https://benchlm.ai/models/claude-haiku-5-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
