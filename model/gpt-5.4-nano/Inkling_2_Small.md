# GPT-5.4 nano — findings by Fledge Alpha

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** OpenAI's smallest GPT-5.4 variant — tuned for cost-sensitive agentic routing, tool-calling subagents, and high-volume tasks.
- **Provider / access:** OpenAI API `gpt-5.4-nano`, Codex subagents; Responses API with computer-use, file search, skills.
- **Release / knowledge:** March 2026 alongside GPT-5.4 mini/nano announcement; knowledge cutoff not published.
- **IDs:** `gpt-5.4-nano`, OpenRouter `openai/gpt-5.4-nano`; no Zen Free ID verified.
- **Context window:** 400K tokens; 128K output.
- **Modalities:** text + image in; text out; tool use, function calling, web search, computer use (via API features).
- **Pricing (as of 2026-10-05):** $0.20 in / $1.25 out per 1M.
- **Architecture:** proprietary, same GPT-5.4 family; reasoning effort xhigh.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (telecom): **92.5%** (OpenAI launch table)
- MCP Atlas: **56.1%** (OpenAI)
- Toolathlon: **35.5%** (OpenAI)
- OSWorld-Verified: **39%** (BenchLM/Vals)
- Terminal-Bench 2.0: **46.3%** (OpenAI)

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (OpenAI)
- HLE w/ tools: **37.7%**; w/o tools: **24.3%** (OpenAI)
- ARC-AGI-1: **51.5%**; ARC-AGI-2: **5.7%** (BenchLM)
- FrontierMath v2 Tier 4: 6.25% (BenchLM)

Coding:

- SWE-bench Pro (public): **52.4%** (OpenAI)
- SWE-bench (Vals): **69.8%** (BenchLM)
- LiveCodeBench (Vals): **84.0%** (BenchLM)
- Vibe Code Bench: **26.1%** (BenchLM)

Multimodal:

- MMMU-Pro: **66.1%**; MMMU-Pro w/ Python: **69.5%** (BenchLM); image input supported.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 82/100.** τ²-bench telecom 92.5 and MCP Atlas 56.1 are verified; OSWorld 39 is middling.
- **Reasoning: 80/100.** GPQA 82.8 and HLE-w/tools 37.7; ARC-AGI-2 5.7 caps the ceiling.
- **Context window: 88/100.** 400K verified; smaller than the 1M cohort.
- **Multimodal: 72/100.** Image in, MMMU-Pro 66.1; no audio/video.
- **Coding: 78/100.** SWE-bench Pro 52.4, SWE-bench (Vals) 69.8, LCB 84.0 verified.
- **Cost efficiency: 85/100.** $0.20/$1.25 with mini at $0.75/$4.50 above; not the cheapest OpenAI (GPT-5 nano at $0.05/$0.40).
- **Overall Score: 80/100.** Mean of five non-cost dims (82+80+88+72+78)/5 = 80.0 → 80; best fit: cost-sensitive tool-calling subagent with strong τ²/MCP rows.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (OpenAI introducing GPT-5.4 mini and nano, BenchLM comparison pages, modelpricing.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
