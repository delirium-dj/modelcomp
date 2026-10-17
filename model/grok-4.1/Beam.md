# Grok 4.1 — findings by Beam

- Source: xAI/Grok 4.1, `xai/grok-4.1`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's refinement of Grok 4 (Nov 2025): #1 on LMArena (1483 Elo Thinking), 65% hallucination reduction, improved conversational quality. Superseded by 4.2/4.3/4.5/4.6/4.7.
- **Provider / access:** xAI API `grok-4.1`; X platform (SuperGrok).
- **Release / knowledge:** Released November 2025; knowledge cutoff not stated.
- **IDs:** `xai/grok-4.1`
- **Context window:** 256,000 tokens (2M on Fast variant); max output not stated.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-17):** Same as Grok 4 ($3.00/$15.00 per 1M); paid.
- **Architecture:** Same base as Grok 4 (1.5T params); proprietary.

### Raw benchmarks found

Agent / tool use:

- Agentic: not individually reported (BenchLM not computed for 4.1)
- ResearchClawBench: **13.5%**
- Terminal-Bench: not reported

Reasoning / knowledge:

- LMArena Elo: **1483** (#1 Thinking) / 1465 (#2 Non-Thinking)
- Hallucination rate: **~4.2%** (down 65% from Grok 4's ~12.1%)
- AA Intelligence Index: not reported
- ARC-AGI: not reported
- GPQA: not reported

Coding:

- Coding: not individually reported (BenchLM not computed)
- LiveCodeBench: not reported

Long context:

- 256K window (2M on Fast variant); MRCR: not reported.

Multimodal:

- Multimodal: not separately reported.

### Normalized scores (1–100)

- **Tool use: 60/100.** ResearchClawBench 13.5%; caps at no published agentic benchmarks.
- **Reasoning: 64/100.** LMArena 1483 Elo (#1), hallucination 4.2%; caps at no published GPQA/ARC-AGI/HLE.
- **Context window: 72/100.** 256K window (2M on Fast); caps at no published MRCR.
- **Multimodal: 68/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 60/100.** No coding benchmarks reported; caps pending verification.
- **Cost efficiency: 78/100.** Mid $3/$15 per 1M.
- **Overall Score: 64.8/100.** Mean of five quality dims (BenchLM not computed); best-fit for conversational quality at mid cost (superseded by 4.2/4.3).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (The AI Rankings, BenchLM, LMArena); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.