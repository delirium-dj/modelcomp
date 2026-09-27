# Grok 4.5 — findings by LongCat 2.5 Preview

- Source: xAI / SpaceXAI (`grok-4.5`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's first model trained specifically for coding and agents (trained alongside Cursor) — frontier intelligence at fast-model speeds with ~2x token efficiency and 4.2x fewer output tokens than Opus 4.8 on SWE-bench Pro.
- **Provider / access:** xAI API — `grok-4.5` (Responses + Chat Completions; reasoning low/medium/high). Also Cursor (all plans), Grok Build, OpenRouter, Vercel AI Gateway. Released 2026-07-08.
- **Release / knowledge:** Released 2026-07-08; knowledge cutoff February 2026.
- **IDs:** `x-ai/grok-4.5` (OpenRouter), `grok-4.5` (xAI API). No Zen Free ID — paid only.
- **Context window:** 500,000 tokens (verified via xAI docs).
- **Modalities:** Text, image in; text out; reasoning yes; function calling, structured outputs, web search, code execution, prompt caching.
- **Pricing (as of 2026-09-27):** $2.00/M in, $6.00/M out (≤200K prompt); $4.00/$12.00 (>200K); cached input $0.30–0.50/M. Paid only.
- **Architecture:** Proprietary; ~1.5T base params (per CEO statement); no further public detail.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **83.3%**; Terminal-Bench 2.1 (Vals): **67.8%**; Terminal-Bench 3.0: **15.7%**
- VulcanBench v3: **89.9%**
- Tau3-Banking / GDPval-AA / MCP Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.0%** (rank 10, llm-stats)
- Artificial Analysis Intelligence Index: **55.8**
- ARC-AGI-2: **52.6%**; ARC-AGI-3: **0.3%**

Coding:

- SWE-bench Pro: **64.7%** (rank 10/70)
- LiveCodeBench (Vals): **87.4%**; SWE-bench (Vals): **86.6%**
- DeepSWE 1.0: **62.0%**; deepSwe: **53%**
- cursorBench32: **66.7%**; SWE Multilingual: **78%**

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.0 83.3% and VulcanBench 89.9% are strong; TB2.1 (Vals) 67.8% and TB3.0 15.7% keep the dimension just under the frontier band.
- **Reasoning: 82/100.** GPQA 93.0% is frontier-tier; AA Index 55.8 is mid-upper (the 60+ band is the top reference); ARC-AGI-3 0.3% is a notable weak spot.
- **Context window: 88/100.** 500K tokens lands in the 500K–1M tier (85–94); no published retrieval result to confirm the top of the band.
- **Multimodal: 65/100.** Text/image input lands in the +image-in 60–70 band; no audio/video input and text-only output cap it there.
- **Coding: 80/100.** SWE-bench Pro 64.7% (rank 10) and LiveCodeBench 87.4% are strong; DeepSWE 53% holds the dimension down.
- **Cost efficiency: 78/100.** $2.00/$6.00 pricing sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) reference points, closer to the former; 4.2x token efficiency on SWE-bench Pro adds effective value.
- **Overall Score: 79/100.** Mean of the five quality dims (80+82+88+65+80)/5 = 79. Best-fit: coding/agentic work at Cursor/Grok Build economics — strong intelligence-per-dollar, superseded by Grok 4.6/4.7 on raw benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (xAI/SpaceXAI docs + announcement, BenchLM, llm-stats, Requesty, GIGAZINE); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
