# MiniMax M3 — findings by Beam

- Source: MiniMax/MiniMax M3, `minimax/minimax-m3`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weight multimodal model (May 31, 2026) with MSA (MiniMax Sparse Attention), 1M context, frontier coding/agentic. First open-weight model with frontier coding + 1M context + multimodal.
- **Provider / access:** MiniMax API; OpenRouter; HuggingFace (open weights).
- **Release / knowledge:** Released 2026-05-31; knowledge cutoff not stated.
- **IDs:** `minimax/minimax-m3`
- **Context window:** 1,000,000 tokens (guaranteed min 512K); max output 512,000.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-10-17):** $0.30 / 1M input, $1.20 / 1M output, $0.06 / 1M cached; paid. Very cheap.
- **Architecture:** MSA (MiniMax Sparse Attention), open weights, ~? params.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **83.5%** (surpasses Opus 4.7 79.3%)
- MCP Atlas: **74.2%**
- OSWorld-Verified: **70.06%**
- Terminal-Bench 2.1: **66.0%**
- Vals Index: **36.53%** (#39/45) / 58.94% (#6 open-weights)
- Vals Multimodal Index: **59.97%** (#6)

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (Serenities) / 92.68% (Vals)
- AA Intelligence Index: **29.6** (29th of 66)
- AA Agentic Index: **30.8** (25th of 70)
- τ²-Bench Airline: **71.0%**
- LongBench v2: not reported

Coding:

- SWE-bench Verified: **80.5%** (official) / 75.00% (Vals)
- SWE-bench Pro: **59.0%**
- Terminal-Bench 2.1: **66.0%**
- LiveCodeBench: **82.15%** (Vals)
- AA Coding Index: **58.6** (33rd of 96)
- LiveBench Coding: **68.2%**
- LiveBench Agentic Coding: **60.0%**
- Vibe Code Bench v1.1: **47.57%**
- DeepSWE: not reported

Long context:

- 1M window (guaranteed min 512K); MRCR: not reported.

Multimodal:

- BenchGecko avg: **79.7** (#23)
- LiveBench: text/image/video in; multimodal native.
- MMMU-Pro: **81.16%** (Vals)

### Normalized scores (1–100)

- **Tool use: 80/100.** BrowseComp 83.5%, MCP Atlas 74.2%, OSWorld 70.06%, Terminal-Bench 2.1 66.0%, τ²-Bench Airline 71.0%; caps at Vals Index 36.53%.
- **Reasoning: 76/100.** GPQA 90.6-92.68%, AA Intelligence 29.6, AA Agentic 30.8; caps at no published HLE/ARC-AGI.
- **Context window: 88/100.** 1M window (guaranteed min 512K); caps at no published MRCR.
- **Multimodal: 84/100.** Text/image/video in native; MMMU-Pro 81.16%, BenchGecko 79.7.
- **Coding: 78/100.** SWE-bench Verified 75.0-80.5%, SWE-bench Pro 59.0%, Terminal-Bench 2.1 66.0%, LiveCodeBench 82.15%, AA Coding 58.6; caps at Vibe Code 47.57%.
- **Cost efficiency: 96/100.** Very cheap $0.30/$1.20 per 1M.
- **Overall Score: 81/100.** Mean of five quality dims (BenchGecko 79.7); best-fit for cost-efficient multimodal agentic coding.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (MiniMax blog, BenchLM, Vals AI, BenchGecko, Serenities, Thomas Wiegold); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.