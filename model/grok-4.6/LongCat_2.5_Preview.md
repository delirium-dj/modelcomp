# Grok 4.6 — findings by LongCat 2.5 Preview

- Source: xAI / SpaceXAI (`grok-4.6`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's frontier model for coding, agentic tasks, and knowledge work — returns SpaceXAI to the intelligence frontier with standout agentic performance (GDPval-AA rank 1 at release) and minimal hallucinations at competitive $2/$6 pricing.
- **Provider / access:** xAI API — `grok-4.6` (Responses + Chat Completions; `reasoning_effort` low/medium/high/xhigh). Also AWS Bedrock, Google Vertex (OpenAI-compatible), Cursor, OpenRouter. Released 2026-08-12.
- **Release / knowledge:** Released 2026-08-12 (xAI API); knowledge cutoff January 2026 (xAI docs; one page lists 2026-02-01).
- **IDs:** `x-ai/grok-4.6` (Bedrock/Vertex), `grok-4.6` (xAI API). No Zen Free ID — paid only.
- **Context window:** 500,000 tokens; no text output limit (450K max completion tokens per gateway listings).
- **Modalities:** Text and image in; text out; reasoning yes (configurable effort); function calling, structured outputs, web/X search, code execution.
- **Pricing (as of 2026-09-27):** $2.00/M in, $6.00/M out (prompts <200K); $4.00/$12.00 (≥200K); cached input $0.50/$1.00. Paid only.
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **78.3%**; Terminal-Bench 3.0: **26.5%**
- GDPval-AA v2: **1753 Elo** (rank 1 at release; AA)
- APEX-Agents: **57.5%**; Harvey LAB (Vals): **15.8%**
- Tau3-Banking / OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Vals): **94.7%**
- Artificial Analysis Intelligence Index: **61** (high; in line with GPT-5.6 Sol)
- AA-Briefcase: **1577**; non-hallucination rate **65.7%**

Coding:

- SWE-bench (Vals): **95.6%**
- DeepSWE v1.1: **65.9%**
- LiveCodeBench (Vals): **88.2%**
- CursorBench v3.2: **69.9%**; VulcanBench v3: **87.0%**
- FrontierCode v1.1: **61.3%**; cursorBench32: **70.8%**; FrontierSWE v2: **25.3%**

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID; context compaction supported for long agent loops (xAI docs).

### Normalized scores (1–100)

- **Tool use: 85/100.** GDPval-AA 1753 Elo (rank 1 at release) and TB2.1 78.3% are strong; APEX-Agents 57.5% and TB3.0 26.5% keep the dimension just under 90.
- **Reasoning: 90/100.** GPQA 94.7% and AA Intelligence Index 61 clear the frontier reference points; 65.7% non-hallucination rate is a standout honesty signal.
- **Context window: 88/100.** 500K tokens lands in the 500K–1M tier (85–94); no published retrieval result to confirm the top of the band.
- **Multimodal: 65/100.** Text/image input lands in the +image-in 60–70 band; no audio/video input and text-only output cap it there.
- **Coding: 85/100.** SWE-bench (Vals) 95.6%, LiveCodeBench 88.2% and VulcanBench 87.0% are strong; DeepSWE 65.9% and FrontierSWE v2 25.3% hold it at the band floor.
- **Cost efficiency: 78/100.** $2.00/$6.00 pricing sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) reference points, closer to the former.
- **Overall Score: 83/100.** Mean of the five quality dims (85+90+88+65+85)/5 = 82.6 → 83. Best-fit: xAI-ecosystem default for coding and knowledge-work agents — frontier intelligence with best-in-class honesty at a mid-range price.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (xAI/SpaceXAI docs + launch coverage, Artificial Analysis, Vals.ai, BenchLM, Kilo Code); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
