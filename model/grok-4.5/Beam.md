# Grok 4.5 — findings by Beam

- Source: xAI/Grok 4.5, `x-ai/grok-4.5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's model (Jul 8, 2026): 500K context. BenchLM 63.27 (#41 of 954). AA Intelligence Index 38.8%. Terminal-Bench 2.1 83.3% (strongest agentic tool-use). SWE-bench Pro 64.7%. GDPval-AA 44.2%. $2.00/$6.00 per 1M.
- **Provider / access:** xAI API; OpenRouter.
- **Release / knowledge:** Released 2026-07-08; knowledge cutoff not stated.
- **IDs:** `x-ai/grok-4.5`
- **Context window:** 500,000 tokens; max output 500,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes. Proprietary.
- **Pricing (as of 2026-10-17):** $2.00 / 1M input, $6.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **58.9** (Supported · #31/128)
- Terminal-Bench 3.0: **15.7%** (Terminal-Bench 3.0 leaderboard)
- Terminal-Bench 2.1: **83.3%** (xAI launch post)
- deepSwe: **53%** (xAI launch post)
- GDPval-AA: **44.2%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **67.8%** (Vals AI)
- Snorkel GDPval+: **29%** mean pass rate (Snorkel AI)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **54.1** (#28/28)
- GPQA Diamond (Vals): **92.9%** (Vals AI)
- MMLU-Pro (Vals): **89.2%** (Vals AI)
- ARC-AGI-1: **85.67%** (ARC Prize)
- ARC-AGI-2: **52.6%** (ARC Prize)
- ARC-AGI-3: **0.3%** (ARC Prize)
- AA Intelligence Index: **38.8%** (Artificial Analysis)
- AA-GPQA Diamond: **93.1%** (Artificial Analysis)
- AA-HLE: **42.7%** (Artificial Analysis)
- AA-LCR: **79.3%** (Artificial Analysis)
- CritPt: **15.4%** (Artificial Analysis)
- AA-Omniscience Index: **25.3%** (Artificial Analysis)
- AA-Omniscience Accuracy: **51.6%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **54.1%** (Artificial Analysis)
- FrontierMath v2 (Tiers 1-3): **57.193%** (Epoch AI)
- FrontierMath v2 (Tier 4): **24.390%** (Epoch AI)

Coding:

- Coding public-lane (BenchLM): **55.7** (Supported · #30/150)
- SWE-bench Pro: **64.7%** (BenchLM)
- SWE Multilingual: **78%** (BenchLM)
- LiveCodeBench (Vals): **87.4%** (BenchLM)
- SWE-bench (Vals): **86.6%** (BenchLM)

Long context:

- 500K window; AA-LCR **79.3%** (Artificial Analysis); MRCR not reported.

Multimodal:

- Text/image in; multimodal lane not reported.

### Normalized scores (1–100)

- **Tool use: 70/100.** Agentic lane #31/128 (58.9), Terminal-Bench 2.1 83.3%, deepSwe 53%, Terminal-Bench 3.0 15.7%, GDPval-AA 44.2%, Snorkel GDPval+ 29%; caps at Terminal-Bench 3.0 15.7%.
- **Reasoning: 68/100.** GPQA 93.1%, MMLU-Pro 89.2%, ARC-AGI-1 85.67%, ARC-AGI-2 52.6%, ARC-AGI-3 0.3%, AA Intelligence 38.8%, AA-LCR 79.3%, CritPt 15.4%; caps at ARC-AGI-3 0.3%.
- **Context window: 72/100.** 500K window; AA-LCR 79.3%; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 70/100.** SWE-bench Pro 64.7%, SWE Multilingual 78%, LiveCodeBench 87.4%, SWE-bench 86.6%, coding lane #30/150 (55.7); caps at no published Terminal-Bench Hard/SciCode.
- **Cost efficiency: 84/100.** Mid $2.00/$6.00 per 1M.
- **Overall Score: 68/100.** Mean of five quality dims (BenchLM 63.27); best-fit for mid-cost agentic coding at mid cost. (Superseded by Grok 4.6.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (BenchLM, TL Dev Tech, xAI official, Snorkel AI, Propakistani); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Grok 4.5 is superseded by Grok 4.6 (Aug 12, 2026) and Grok 4.7 (Oct 2026). Strongest agentic tool-use (Terminal-Bench 2.1 83.3%). Snorkel GDPval+ 29% (vs GPT 5.5 22%, Opus 4.8 21%).<|end|>>2>