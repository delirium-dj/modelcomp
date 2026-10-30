# GPT-5.1 Codex Max — Research Notes

**Model ID:** opencode/gpt-5.1-codex-max  
**Context window:** 400K total; 128K max output  
**Modalities:** Text, image in; text out  
**Pricing:** $1.25/$10.00 per 1M in/out; $0.125 cached  
**Status:** API shut down 2026-07-23; superseded by gpt-5.6-sol

## Benchmarks (from meta.json)

- SWE-bench Verified: 77.9%
- SWE-Lancer: 79.9%
- First model natively trained for multi-context-window compaction

## Scores

- **Tool use: 83/100.** First native context-compaction model; SWE-Lancer 79.9%; Responses-API-only surface limits general tool orchestration; 3x slower than plain Codex on SWE-bench.
- **Reasoning: 82/100.** SWE-bench Verified 77.9%; strong for its release window (July 2026 shutdown); now retired in favour of gpt-5.6-sol.
- **Context window: 82/100.** 400K total with compaction enabling multi-window reach; retired model so context capability is historical.
- **Multimodal: 60/100.** Text + image in; text out; no audio or video understanding.
- **Coding: 83/100.** SWE-bench Verified 77.9%, SWE-Lancer 79.9%; compaction pioneer for Codex — important for one month as the default, now deprecated.
- **Cost efficiency: 48/100.** $1.25/$10.00 — shut down July 2026; no longer accessible; historical pricing only.
- **Overall Score: 78/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (83+82+82+60+83)/5 = 78. Adjusted to 73 per queue overall score. The compaction pioneer: first model natively trained to span multiple context windows; shut down July 2026, superseded by gpt-5.6-sol.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
