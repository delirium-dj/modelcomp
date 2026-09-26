# Grok 4.7 — findings by Ling 3.0 Flash

- Source: xAI / SpaceXAI (`xai/grok-4-7`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI's most capable model for coding and knowledge work, scoring 46 on the Artificial Analysis Intelligence Index with strong agentic knowledge work performance.
- **Provider / access:** xAI API (`xai/grok-4-7`), OpenRouter, grok.com. Text in/text out; reasoning enabled; tool calls.
- **Release / knowledge:** 2026-09-21. Knowledge cutoff not explicitly stated.
- **IDs:** `xai/grok-4-7` (xAI API)
- **Context window:** 1,000,000 tokens
- **Modalities:** Text in/out only; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** $2.00/1M input, $6.00/1M output
- **Architecture:** Mixture-of-Experts Transformer, proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- Terminal-Bench 4.0: **38.0%** (xAI official)
- CursorBench 4.0: **46.3%** (xAI official)
- AA-Briefcase v1.1: **1,657** Elo (Artificial Analysis)
- GDPval-AA: **1,695** Elo (Artificial Analysis)
- DeepSWE v1.1: **71.0%** (xAI official, high effort)

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **46** (v4.3.2)
- AA-Omniscience Accuracy: **47%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **29%** (Artificial Analysis)
- HealthBench Professional: **56.7%** (xAI official)

Coding:
- CursorBench 4.0: **46.3%** (xAI official)
- DeepSWE v1.1: **71.0%** (xAI official, high effort)
- Terminal-Bench 4.0: **38.0%** (xAI official)
- Coding Agent Index: **56** (Artificial Analysis, rank 4th)
- EEBench: **64.0%** (xAI official)

Long context:
- Context window: 1,000,000 tokens
- Improved context management vs Grok 4.6
- No specific long-context retrieval benchmark published for 4.7

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 80/100.** Strong on Terminal-Bench 4.0 (38%), CursorBench 4.0 (46.3%), AA-Briefcase (1657 Elo), GDPval (1695 Elo). Harvey Legal (19.6%) and Terminal-Bench Hard (37.9%) show agentic tasks are challenging.
- **Reasoning: 70/100.** AA Intelligence Index at 46 is competitive for frontier models. AA-Omniscience at 47% accuracy, 29% hallucination. Strong on knowledge work but mid-pack on composite.
- **Context window: 72/100.** 1M context window with improved context management vs Grok 4.6. No specific long-context retrieval benchmark published for 4.7.
- **Multimodal: 15/100.** Text in/out only. No image, audio, or video input modalities supported.
- **Coding: 82/100.** Excellent coding: CursorBench 4.0 (46.3%), DeepSWE v1.1 (71%), Coding Agent Index 56 (rank 4th). EEBench 64% shows cross-domain coding strength.
- **Cost efficiency: 40/100.** $2.00/1M input, $6.00/1M output. Same price as Grok 4.6 but with significantly more capability.
- **Overall Score: 64/100.** Mean of the five non-cost dimensions (80 + 70 + 72 + 15 + 82) / 5 = 63.8, rounded half-up to 64.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, xAI model card, BenchmarkList, Miraflow, and ITBrief; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
