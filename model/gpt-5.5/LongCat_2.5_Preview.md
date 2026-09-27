# GPT-5.5 — findings by LongCat 2.5 Preview

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's fully retrained agentic model (GPT-5.5 Thinking) — optimized for agentic coding, computer use, knowledge work, and early scientific research, with significantly better token efficiency than GPT-5.4.
- **Provider / access:** OpenAI API — `gpt-5.5` (Chat Completions + Responses API; `reasoning_effort` none/low/medium/high/xhigh; Fast mode 1.5x speed at 2.5x cost). Also OpenRouter, Vercel AI Gateway, AWS Bedrock. API release 2026-04-23.
- **Release / knowledge:** API release 2026-04-23; knowledge cutoff December 2025.
- **IDs:** `openai/gpt-5.5`. No Zen Free ID — paid only.
- **Context window:** 1,050,000 tokens; 128,000 max output (verified via OpenAI announcement + LLMReference). Long-context surcharge above 272K input tokens.
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes (computer use, code execution, web/file search, MCP); structured outputs; caching.
- **Pricing (as of 2026-09-27):** $5.00/M in, $30.00/M out; cached input $0.50/M; Batch/Flex 50% of standard; Priority 2.5x. Paid only.
- **Architecture:** Proprietary; decoder-only (per LLMReference); no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (Codex CLI harness)
- BrowseComp: **84.4%**; MCP Atlas: **75.3%**; OSWorld-Verified: **78.7%**
- Toolathlon: **55.6%**; τ²-bench: **98%**; Gert Labs: **72.93%**
- GDPval: **84.9%** wins/ties (OpenAI system card)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (rank 6, llm-stats)
- HLE: **41.4%** no tools / **52.2%** with tools (AA, per llm-stats)
- ARC-AGI-1: **94.5%**; ARC-AGI-2: **83.3%**
- Artificial Analysis Intelligence Index: **55** (xhigh)

Coding:

- SWE-bench Verified: **82.6%** (Vals independent harness)
- SWE-bench Pro: **58.6%** (rank 3/30, BenchLM)
- Vibe Code Bench: **69.85%**; cursorBench32: **58.4%**
- FrontierCode 1.1 Main: **43.0%**

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

Multimodal extras:

- MMMU-Pro: **81.2%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.0 82.7%, BrowseComp 84.4% and OSWorld 78.7% are near-frontier; MCP Atlas 75.3% and Toolathlon 55.6% keep the dimension just under 90.
- **Reasoning: 88/100.** GPQA 93.6%, HLE 41.4%/52.2% and AA Index 55 are all frontier-tier; ARC-AGI-2 83.3% is strong but not top-band.
- **Context window: 95/100.** 1.05M tokens with 128K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 65/100.** Text/image input lands in the +image-in 60–70 band; no audio/video input and text-only output cap it there.
- **Coding: 80/100.** SWE-bench Verified 82.6% and Vibe Code Bench 69.85% are solid; SWE-bench Pro 58.6% (rank 3) is a notch under the frontier leaders.
- **Cost efficiency: 45/100.** $5/$30 standard pricing sits between the $3/$15 (≈60) and $10/$50 (≈30) reference points; strong token efficiency partially offsets the rate.
- **Overall Score: 83/100.** Mean of the five quality dims (85+88+95+65+80)/5 = 82.6 → 83. Best-fit: OpenAI-ecosystem agentic coding and computer-use work at pre-GPT-5.6 pricing; superseded by the 5.6 family for the hardest tasks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (OpenAI announcement + system card, llm-stats, BenchLM, LLMReference, AA-sourced figures); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
