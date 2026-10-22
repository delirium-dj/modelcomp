# Claude Opus 4.7 — findings by Beam

- Source: Anthropic/Claude Opus 4.7, `anthropic/claude-opus-4-7`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's Opus (Apr 16, 2026) with notable gains on difficult software engineering; state-of-the-art on SWE-bench Pro among Claude at release; better code review/debugging, strict instruction following. Adaptive thinking only.
- **Provider / access:** Anthropic API `claude-opus-4-7`; AWS Bedrock `anthropic.claude-opus-4-7`; OpenRouter; Kilo.
- **Release / knowledge:** Released 2026-04-16; knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-opus-4-7`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, file in; text out; reasoning yes (adaptive thinking only); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-22):** $5.00 / 1M input, $25.00 / 1M output, $0.50 / 1M cache read, $6.25 / 1M cache write; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **54.5** (#42/128)
- Terminal-Bench 2.0: not reported for 4.7 (4.6 65.4%)
- BrowseComp: not reported for 4.7 (4.6 83.7%)
- OSWorld-Verified: not reported for 4.7 (4.6 72.7%)
- Gert Labs: **65.59%**
- ResearchClawBench: **20.7%**
- JobBench: not reported

Reasoning / knowledge:

- Vibe Code Bench: **71.00%**
- React Native Evals: **82.8%**
- FrontierMath v2 (Tiers 1-3): not reported for 4.7 (4.6 80.0%? no)
- ARC-AGI-2: not reported for 4.7 (4.8 72.1%)
- HLE: not reported for 4.7

Coding:

- Coding public-lane (BenchLM): **55.4** (#32/150)
- SWE-bench Verified: not reported for 4.7 (4.6 80.8%)
- SWE-bench Pro: not reported for 4.7 (4.8 69.2%)
- Vibe Code Bench: **71.00%**
- React Native Evals: **82.8%**
- Terminal-Bench 2.0: not reported

Long context:

- 1M window; MRCR v2 128K-256K: **59.2%** (adaptive variant)

Multimodal:

- Not individually reported for 4.7 (4.6 MMMU-Pro 77.3%, ERQA 51.6%, ScreenSpot Pro 83.1%)

### New data (benchgap 2026-10-21 snapshot)

- AA Intelligence Index: **30.9%** (measured); AA-GPQA Diamond **88.5%**; AA-HLE **33.3%**; AA-SciCode **55.5%** (est.).
- HLE **51.1%** (est.); GPQA Diamond **90.8%** (est.); GPQA **92.9%** (est.); ARC-AGI-2 **65.4%** (est.); FrontierMath Tier4 **31.7%** (measured).
- SWE-bench Verified **83.1%** (est.); SWE-bench Pro **57.2%** (est.); LiveCodeBench v6 **88.6%** (est.); Vibe Code **71.0%** (measured); React Native Evals **82.8%** (measured).
- Terminal-Bench 2.1 **83.3%** (est.); BrowseComp **82.8%** (est.); OSWorld-Verified **74.2%** (est.); MCP Atlas **79.6%** (est.); τ²-bench **74.0%** (measured); DeepSearchQA **77.2%** (est.).
- MMMU-Pro **77.3%** (est.); ScreenSpot Pro **83.8%** (est.); CharXiv **83.8%** (est.); MRCRv2 **84.6%** (est.); LongBench v2 **61.5%** (est.); AA-LCR **75.7%** (measured).
- Vals: GPQA Diamond **90.2%** (measured); LiveCodeBench **85.1%** (measured); SWE-bench **82.0%** (measured); MMLU-Pro **89.9%** (measured); Terminal-Bench 2.1 **68.5%** (measured).

### Normalized scores (1–100)

- **Tool use: 78/100.** Agentic lane #42/128 (54.5), Terminal-Bench 2.1 83.3% (est.), BrowseComp 82.8% (est.), OSWorld-Verified 74.2% (est.), MCP Atlas 79.6% (est.), τ²-bench 74.0% (measured); caps at ResearchClawBench 20.7% (measured) and ApprenticeBench 7.0% (measured).
- **Reasoning: 76/100.** HLE 51.1% (est.), GPQA 92.9% (est.), ARC-AGI-2 65.4% (est.), FrontierMath Tier4 31.7% (measured); caps at HLE w/o tools 51.3% (est.).
- **Context window: 82/100.** 1M window; MRCRv2 84.6% (est.), LongBench v2 61.5% (est.), AA-LCR 75.7% (measured).
- **Multimodal: 82/100.** Text/image/file in; MMMU-Pro 77.3% (est.), ScreenSpot Pro 83.8% (est.), CharXiv 83.8% (est.).
- **Coding: 76/100.** SWE-bench Verified 83.1% (est.), SWE-bench Pro 57.2% (est.), LiveCodeBench v6 88.6% (est.), Vibe Code 71.0% (measured), React Native Evals 82.8% (measured); coding lane #32/150 (55.4).
- **Cost efficiency: 75/100.** Paid $5/$25 per 1M.
- **Overall Score: 78.8/100.** Mean of five quality dims (BenchLM aggregate 66.72); best-fit for difficult coding at mid cost (superseded by 4.8).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Anthropic news, AWS Bedrock, BenchLM, benchgap Oct-21 snapshot); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.