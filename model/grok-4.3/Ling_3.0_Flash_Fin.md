# Grok 4.3 — findings by Ling 3.0 Flash

- Source: xAI / SpaceXAI (`xai/grok-4-3`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's latest model for coding and knowledge work, scoring 46 on the Artificial Analysis Intelligence Index with strong agentic knowledge work performance.
- **Provider / access:** xAI API (`xai/grok-4-3`), OpenRouter, grok.com. Text in/text out; reasoning enabled; tool calls.
- **Release / knowledge:** 2026-04-30. Knowledge cutoff not explicitly stated.
- **IDs:** `xai/grok-4-3` (xAI API)
- **Context window:** 1,000,000 tokens
- **Modalities:** Text in/out only; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** $1.25/1M input, $2.50/1M output (xAI API)
- **Architecture:** Mixture-of-Experts Transformer, proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- GDPval-AA: **1,099** Elo (Artificial Analysis, 77th percentile)
- τ²-Bench Telecom: **97.7%** (Artificial Analysis, rank 9th of 332)
- IFBench: **81.3%** (Artificial Analysis)
- APEX-Agents-AA: **17.0%** (BenchmarkList)
- Terminal-Bench Hard: **37.9%** (Artificial Analysis)

Reasoning / knowledge:
- GPQA Diamond: **90.1%** (Artificial Analysis)
- HLE: **37.2%** (Artificial Analysis)
- AA-LCR: **68.3%** (Artificial Analysis)
- CritPt: **1.7%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **37.9** (rank 71st of 418)
- MMLU-Pro: **85.8%** (Vals AI)
- AIME 2025: **92.0%** (BenchmarkList)

Coding:
- SWE-bench Verified: **71.4%** (Vals AI)
- LiveCodeBench: **84.5%** (Vals AI)
- SciCode: **47.3%** (Artificial Analysis)
- Vibe Code Bench v1.1: **19.4%** (Vals AI)
- Terminal-Bench Hard: **37.9%** (Artificial Analysis)

Long context:
- AA-LCR: **68.3%** at 1M context (Artificial Analysis)
- Context window: 1,000,000 tokens

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 70/100.** Strong on GDPval-AA (1099 Elo), τ²-Bench Telecom (97.7%), IFBench (81.3%), but weak on APEX-Agents (17.0%) and Terminal-Bench Hard (37.9%). Agentic performance is mixed.
- **Reasoning: 68/100.** Strong math (GPQA 90.1%, AIME 92.0%) but moderate general knowledge (HLE 37.2%, CritPt 1.7%). AA Intelligence Index at 37.9 is mid-pack for its class.
- **Context window: 75/100.** 1M context window with AA-LCR at 68.3%. Solid long-context performance but not class-leading compared to 2M context competitors.
- **Multimodal: 15/100.** Text in/out only. No image, audio, or video input modalities supported.
- **Coding: 62/100.** Decent on SWE-bench Verified (71.4%), LiveCodeBench (84.5%) but weak on Terminal-Bench Hard (37.9%) and Vibe Code Bench (19.4%).
- **Cost efficiency: 75/100.** $1.25/1M input, $2.50/1M output. ~40% cheaper than Grok 4.20 but not free. 40% fewer reasoning tokens than predecessor.
- **Overall Score: 58/100.** Mean of the five non-cost dimensions (70 + 68 + 75 + 15 + 62) / 5 = 58.0, rounded half-up to 58.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, Vals AI, BenchmarkList, xAI model card, and official blog; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
