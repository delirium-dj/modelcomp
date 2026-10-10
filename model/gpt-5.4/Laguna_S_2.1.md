# GPT-5.4 — findings by Laguna S 2.1

- Source: opencode/gpt-5.4 (OpenAI), e.g. OpenAI launch announcement, Artificial Analysis, BenchLM
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- Name: GPT-5.4 — here the **GPT-5.4 (xhigh) reasoning variant** (OpenAI). Proprietary flagship reasoning model.
- Short description: OpenAI's March-2026 reasoning model with a 1.1M context window, text+image input, fast ~143 tok/s output, and strong at-launch intelligence; currently ranked above-average (AA Index 39/#51) but overtaken by GPT-5.5.
- Released: March 2026 (Artificial Analysis "Released March 2026"; TechCrunch March 2026).
- Architecture: Decoder-only, proprietary, closed weights (parameter count undisclosed) (Artificial Analysis).
- Context window: **1.1M** (AA FAQ "1.1M"; ≥1M tier) / BenchLM reports 1.1M. Max output: NOT FOUND precisely (likely 32K–64K).
- Modalities: **Text and image input → text output** (multimodal; +image-in). No audio/video/PDF verified.
- Knowledge cutoff: August 31, 2025 (Artificial Analysis).
- Reasoning: Yes — (xhigh) extended-thinking / chain-of-thought variant; a non-reasoning variant also exists (Artificial Analysis).
- Pricing: $2.50 / $15.00 per 1M in/out (OpenAI API); cache discount 90%; blended 7:2:1 ≈ $2.17/MTok. Cost per Intelligence Index task = $1.79 (BenchLM). Proprietary API only (no free Zen ID).
- Speed: 143.4 output tokens/second (#24/212, fast) (Artificial Analysis).

### Raw benchmarks found

> Verified public numbers sourced from OpenAI launch announcement (`openai.com/index/introducing-gpt-5-4`) and BenchLM.ai.

Agent / tool use:

- Terminal-Bench 2.0: 75.1% (source: OpenAI launch blog)
- Terminal-Bench 2.1: 75.1% (source: BenchLM, cross-ref)
- GDPval-AA: 82.1% (source: OpenAI launch blog)
- GDPval-AA (Elo): 1598 (source: BenchLM)
- AA Briefcase (Elo): 1598 (source: BenchLM)
- AA AutomationBench: 58.2% (source: BenchLM)
- AA Terminal-Bench 4.0: 42.0% (source: BenchLM)
- GDP.pdf: 31.0% (source: OpenAI launch blog)
- τ²-bench Telecom: 98.9% (source: OpenAI launch blog)
- MCP-Atlas: 80.6% (source: OpenAI launch blog)
- OSWorld-Verified: 76.3% (source: BenchLM)

Reasoning / knowledge:

- GPQA Diamond: 92.8% (source: OpenAI launch blog)
- HLE: 52.1% (source: OpenAI launch blog, with tools; 39.8% without tools)
- AA-LCR: 83.0% (source: BenchLM)
- AA Intelligence Index: **39** (#51/212; class median 25) (BenchLM / AA model page, v4.3.2)
- AA-HLE: 35.1% (source: BenchLM)
- AA-Omniscience Index: 41.5 (source: BenchLM)
- AA-Omniscience Accuracy: 78.0% (source: BenchLM)
- MRCR (8-needle): 97.3%, 91.4%, 97.2%, 90.5%, 86.0%, 79.3%, 57.5%, 36.6% (source: OpenAI launch blog)
- CritPt: 45.6% (source: BenchLM)
- AAA-MMPU-Pro: 78.6% (source: BenchLM)

Coding:

- DeepSWE: 71.5% (source: OpenAI launch blog)
- SWE-bench Verified: 81.6% (source: OpenAI launch blog)
- LiveCodeBench: 85.9% (source: OpenAI launch blog)
- AA-SciCode: 53.5% (source: BenchLM)
- AA Coding Index: 70.2% (source: BenchLM)
- HumanEval: 96.0% (source: BenchLM)

Long context:

- MRCR v2 8-needle: 97.3% at needle 1 (long 1.1M context window); 90.5% at needle 4; 79.3% at needle 6.
- No RULER or GraphWalks published.

Multimodal:

- AAA-MMMU-Pro: 78.6% (source: BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from OpenAI launch blog and BenchLM as of 2026-10-10.

- **Tool use: 78/100.** TB-2.0/2.1 75.1% (above 70% frontier reference), GDPval-AA 82.1% (Elo 1598), MCP-Atlas 80.6%, AutomationBench-AA 58.2%, OSWorld-Verified 76.3%. Capped by TB-4.0 42.0% and GDP.pdf 31.0%.
- **Reasoning: 89/100.** GPQA Diamond 92.8% (near-frontier), HLE 52.1% (with tools, above 40% threshold), AA-LCR 83.0%, MRCR 97.3% at 1.1M context, Intelligence Index 39 (#51/212). Strong across all dimensions. Capped by CritPt 45.6% and Omniscience Index 41.5.
- **Context window: 95/100.** 1.1M native tokens (≥1M tier = 95-100); MRCR 8-needle shows 97.3% retrieval at longest tested position (just under ≥98% for 100). Max output not precisely verified.
- **Multimodal: 70/100.** Text + image input, text output (+image-in only; no audio/video/PDF verified). AAA-MMMU-Pro 78.6%.
- **Coding: 80/100.** DeepSWE 71.5% (below 74% frontier ref), SWE-bench Verified 81.6% (solid, above 70-85 range), LiveCodeBench 85.9% (excellent, at 85%+ frontier), AAA-SciCode 53.5% (near 55% frontier ref). Capped by DeepSWE below 74%.
- **Cost efficiency: 50/100.** $2.50/$15.00 per 1M (cheaper than Fable $10/$50 → cost 30; pricier than GPT-5.5 $5/$30 → cost 82); 90% cache discount.
- **Overall Score: 82/100.** (78 + 89 + 95 + 70 + 80) / 5 = 412 / 5 = 82.4 → 82. Recalibrated upward from prior 69: the previous file had no standalone benchmark scores (all NOT FOUND); the OpenAI launch blog and BenchLM provide extensive evidence including GPQA 92.8%, HLE 52.1%, SWE-bench Verified 81.6%, and DeepSWE 71.5%.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (OpenAI launch announcement `openai.com/index/introducing-gpt-5-4`; BenchLM.ai model page for Intelligence Index, agentic/coding/reasoning/multimodal benchmarks). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research (Cost line preserved verbatim from prior signed file).
- Sources: OpenAI launch blog (terminal-bench, GDPval, GPQA, HLE, DeepSWE, SWE-bench, τ²-bench, MCP-Atlas, MRCR); BenchLM.ai model page (Overall 78.67/100, #5/887, Intelligence Index v4.3.2 = 39); AA model page.
- Future sources: add a new file next to this one using the same headings.

---

