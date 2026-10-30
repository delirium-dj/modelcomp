# GPT-5.2 Codex — Research Notes

**Model ID:** opencode/gpt-5.2-codex  
**Context window:** 400K total; 272K max input; 128K max output  
**Modalities:** Text, image in; text out  
**Pricing:** $1.75/$14.00 per 1M in/out; $0.175 cached read

## Benchmarks

From the GPT-5.2 family data:
- SWE-bench Verified: ~80.0% (GPT-5.2 family)
- SWE-bench Pro: ~55.6% (GPT-5.2 family)
- Native context compaction support
- Responses API only; paid only

## Scores

- **Tool use: 84/100.** Native context compaction enables multi-window agentic workflows; Responses API agentic design; 400K context sustains long coding sessions.
- **Reasoning: 83/100.** GPT-5.2 family reasoning; SWE-bench Verified ~80.0%, SWE-bench Pro ~55.6%; strong coding-focused reasoning with compaction.
- **Context window: 82/100.** 400K total (272K max input, 128K output); large but below 1M-class frontier; compaction extends effective reach.
- **Multimodal: 60/100.** Text + image in; text out; no audio or video understanding.
- **Coding: 84/100.** Native context compaction tuned for repo-scale engineering; agentic coding specialist at $1.75/$14 — cost-competitive in the GPT-5.x Codex line.
- **Cost efficiency: 62/100.** $1.75/$14.00 per 1M — reasonable for a GPT-5.2 derivative; no free lane caps accessibility.
- **Overall Score: 79/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (84+83+82+60+84)/5 = 78.6 ≈ 79. GPT-5.2's agentic coding specialist: native context compaction and 400K context for repo-scale work via Responses API; no free lane.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
