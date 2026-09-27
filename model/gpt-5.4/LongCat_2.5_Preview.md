# GPT-5.4 — findings by LongCat 2.5 Preview

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's frontier model for professional work — the first mainline model with native state-of-the-art computer-use capability, combining GPT-5.3-Codex coding gains with strong agentic tool use.
- **Provider / access:** OpenAI API — `gpt-5.4` (Chat Completions + Responses API; `reasoning_effort` none/low/medium/high/xhigh; GPT-5.4 Thinking in ChatGPT/Codex). Also OpenRouter, Vercel AI Gateway, AWS Bedrock. Released 2026-03-05.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff 2025-08-31.
- **IDs:** `openai/gpt-5.4`. No Zen Free ID — paid only.
- **Context window:** 1,050,000 tokens; 128,000 max output (verified via OpenAI API docs). Long-context pricing breakpoint at 272K input tokens.
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes (computer use, code interpreter, web/file search, tool search, MCP, hosted shell); structured outputs; prompt caching.
- **Pricing (as of 2026-09-27):** $2.50/M in, $15.00/M out (≤272K); $5.00/$22.50 (>272K); cached input $0.25/M. Paid only.
- **Architecture:** Proprietary; decoder-only (per LLMReference); no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **75.1%**
- BrowseComp: **82.7%**; OSWorld-Verified: **75.0%**
- MCP Atlas: **67.2%** (OpenAI table; 70.6% per BenchLM); Toolathlon: **54.6%**
- τ²-bench (telecom): **98.9%**; CyberGym: **79.0%**; Claw-Eval: **60.3%**
- DeepSearchQA: **73.6%**; Gert Labs: **64.89%**

Reasoning / knowledge:

- GPQA Diamond: **93.0%**
- HLE: **39.8%** no tools / **52.1%** with tools
- MRCR v2 (8-needle): **97.3%** (4K–8K), 91.4% (8–16K), 97.2% (16–32K), 90.5% (32–64K), 86.0% (64–128K), 79.3% (128–256K), 57.5% (256–512K), 36.6% (512K–1M)

Coding:

- SWE-bench Pro (Public): **57.7%**
- LiveCodeBench Pro: **87.5%**; Vibe Code Bench: **67.42%**
- SWE-bench Verified: no verified public overall score found (Vals difficulty split 88/76/50/0%)

Long context:

- MRCR v2 57.5% at 256K–512K and 36.6% at 512K–1M (OpenAI) — strong short-context retrieval with expected long-range decay.

Multimodal extras:

- MMMUPro: **81.2%** (81.5% with Python)

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.0 75.1%, BrowseComp 82.7% and τ²-bench 98.9% are strong; MCP Atlas 67.2% and Toolathlon 54.6% keep the dimension just under the frontier band.
- **Reasoning: 88/100.** GPQA 93.0% and HLE 52.1% with tools are frontier-tier; MRCR results degrade past 256K, capping the top band.
- **Context window: 95/100.** 1.05M tokens with 128K output earns the ≥1M tier; MRCR 57.5% at 256K–512K is solid but not a confirmed 512K+ top-band result.
- **Multimodal: 65/100.** Text/image input lands in the +image-in 60–70 band; no audio/video input and text-only output cap it there.
- **Coding: 75/100.** LiveCodeBench Pro 87.5% and Vibe Code Bench 67.42% are strong; SWE-bench Pro 57.7% sits mid-field.
- **Cost efficiency: 62/100.** $2.50/$15.00 standard pricing sits just above the $3/$15 ≈ 60 reference point; the >272K tier ($5/$22.50) scores lower.
- **Overall Score: 81/100.** Mean of the five quality dims (80+88+95+65+75)/5 = 80.6 → 81. Best-fit: OpenAI-ecosystem professional-work default with native computer use — superseded by the 5.5/5.6 generation but still a strong all-rounder.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (OpenAI API docs + announcement, BenchLM, LLMReference, modelpricing.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
