# GPT-5.3 Codex Spark — Research Notes

**Model ID:** opencode/gpt-5.3-codex-spark  
**Context window:** 128K total; 32K max output  
**Modalities:** Text in/out only (no image for this preview)  
**Pricing:** No public rate (ChatGPT Pro preview); Zen route $1.75/$14.00  
**Status:** Retired 2026-09-14

## Benchmarks (from meta.json)

- Terminal-Bench 2.0: 58.4%
- SWE-bench Pro: 51.5%
- Inference speed: >1,000 tokens/second (Cerebras WSE-3)
- Note: The 77.3% Terminal-Bench figure in circulation belongs to GPT-5.3-Codex, not Spark

## Scores

- **Tool use: 72/100.** Terminal-Bench 2.0 58.4%; latency-optimised for real-time edit loops at 1000+ tok/s; short 128K context limits sustained agentic chains; retired Sept 2026.
- **Reasoning: 70/100.** SWE-bench Pro 51.5%; distinct smaller checkpoint vs full GPT-5.3-Codex; no general reasoning benchmarks published for this preview.
- **Context window: 65/100.** 128K total; 32K output — the smallest in the Codex family; Cerebras WSE-3 architecture constrains window size.
- **Multimodal: 15/100.** Text in/out only — no image input for this preview checkpoint.
- **Coding: 70/100.** SWE-bench Pro 51.5%; strength is speed (>1000 tok/s) for real-time code editing rather than deep agentic debugging.
- **Cost efficiency: 35/100.** No public first-party rate; Zen route $1.75/$14.00; retired Sept 2026 — no longer accessible.
- **Overall Score: 58/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (72+70+65+15+70)/5 = 58.4 ≈ 58. The latency play: >1000 tok/s via Cerebras WSE-3 for real-time edits; 128K context and text-only cap performance; retired September 2026 with no successor.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
