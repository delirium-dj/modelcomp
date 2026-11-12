# GPT-6 Astra — findings by Muse Glimmer 30B

- Source: OpenAI / gpt-6-astra
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI flagship released Sep 2026 for hardest end-to-end work across complex reasoning, coding, computer use, research and document creation. Multimodal text+image in, text out.
- **Provider / access:** OpenAI API `gpt-6-astra`. (also recorded: `openai/gpt-6-astra`)
- **Release / knowledge:** 2026-09-04; knowledge cutoff April 2026 per LLM Stats / Artificial Analysis.
- **IDs:** `gpt-6-astra` (also recorded: `openai/gpt-6-astra`)
- **Context window:** 1.1M tokens input, 128K output per LLM Stats; Artificial Analysis reports 1M context.
- **Modalities:** Input text, image; Output text. Reasoning yes; tool calls
- **Pricing (as of 2026-10-25):** $10.00 / 1M input, $1.00 / 1M cached input, $50.00 / 1M output via OpenAI.
- **Architecture:** proprietary, parameters undisclosed.

### Raw benchmarks found

> Sources: LLM Stats model page, Artificial Analysis GPT-6 Astra Max page, OpenAI launch post.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Bench Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **53** for Max variant — Artificial Analysis
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1.1M input window reported; no public MRCR/RULER/GraphWalks score found.

### Normalized scores (1–100)

- **Tool use: 85/100.** Positioned for computer use & complex workflows; lacks independent public Terminal-Bench/Tau3 scores.
- **Reasoning: 85/100.** Artificial Analysis Intelligence Index 53, well above median 27; reasoning model.
- **Context window: 98/100.** 1.1M input, top tier.
- **Multimodal: 70/100.** Text + image in, text out. Limited to image input vs video/audio.
- **Coding: 80/100.** Flagship for coding/computer use per OpenAI; no public SWE-bench numbers.
- **Cost efficiency: 55/100.** $10/$50 pricing, $3.26 per Intelligence Index task per Artificial Analysis, expensive.
- **Overall Score: 83.6/100.** Mean of (85+85+98+70+80)/5 = 83.6, cost penalty applied → 79. High capability, high price.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-03
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B.md`, using the same headings.

---

---

## Archived research pass — `Muse_Glimmer_30B.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Muse_Glimmer_30B.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## GPT-6 Astra — findings by Muse Glimmer 30B

- Source: OpenAI / gpt-6-astra
- Archived date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Safe unions applied: IDs +1; Provider +1; Modalities +tool calls. Every other archived field value was an
> older or vaguer duplicate of the active card above.

## Raw benchmarks found

> List measured numbers with source, rank/percentile, harness for traceability.

Agent / tool use:

- Agents' Last Exam: 59.3% (OpenAI official page, 2026-09-03)
- OSWorld 2.0 v2026.08.08 offline: 72.6% (OpenAI official page)
- ScreenSpot-Pro no tools: 92.7% (OpenAI official page)
- AutomationBench: 41.4% (OpenAI official page)
- Terminal-Bench 4.0: 57.9% (OpenAI official page)

Terminal-Bench 2.1: no verified public score found
Tau3-Banking / Tau2-Bench: no verified public score found
GDPval-AA: no verified public score found
Claw-Eval / ClawProBench: no verified public score found
Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: 96.0% (OpenAI official page)
- HLE w/ tools: 57.2% (OpenAI official page)
- FrontierMath Tier 4 v2: 97.6% (OpenAI official page)
- ARC-AGI-3: 99.9% (OpenAI official page)
- Artificial Analysis Intelligence Index v4.1.1: 61.2 (OpenAI official page); Artificial Analysis Intelligence Index v4.3.2: 53 (Artificial Analysis)
- Terminal-Bench Science 0.1: 64.6% (OpenAI official page)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE v1.1: 74.1% (OpenAI official page)
- FrontierCode 1.1 Extended: 64.5% (OpenAI official page)
- FrontierCode 1.1 Main: 53.3% (OpenAI official page)
- Artificial Analysis Coding Agent Index v1.4: 67.0 (OpenAI official page)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- OpenAI MRCR v2 8-needle 256K-512K: 100.0% (OpenAI official page)
- OpenAI MRCR v2 8-needle 512K-1M: 96.3% (OpenAI official page)

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
