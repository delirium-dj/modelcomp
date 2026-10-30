# GPT-5.1 Codex — Research Notes

**Model ID:** opencode/gpt-5.1-codex  
**Context window:** 400K total; 128K max output  
**Modalities:** Text, image in; text out  
**Pricing:** $1.25/$10.00 per 1M; $0.125 cached (Zen: $1.07/$8.50)  
**Status:** API shutdown 2026-07-23; deprecated on Zen

## Benchmarks

- SWE-bench Verified: ~76.3–77.9% (variant-dependent; 30% fewer thinking tokens vs baseline)
- Terminal-Bench 2.0: ~58.1–58.4%

## Scores

- **Tool use: 80/100.** Terminal-Bench 2.0 ~58.2%; repo-scale agentic coding between Mini and Max; Responses-API design for multi-step software engineering; now deprecated.
- **Reasoning: 80/100.** SWE-bench Verified ~76.3–77.9% with 30% fewer thinking tokens; strong mid-tier Codex reasoning efficiency.
- **Context window: 82/100.** 400K total; 128K output; full Codex-family context window.
- **Multimodal: 60/100.** Text + image in; text out; no audio or video.
- **Coding: 80/100.** SWE-bench Verified ~77% for multi-file GitHub issue resolution; whole-codebase engineering in the Codex surface; shut down July 2026.
- **Cost efficiency: 48/100.** $1.25/$10.00 per 1M — historical; API shut down July 2026 so not accessible for new work; newer codex lanes cover same ground cheaper.
- **Overall Score: 76/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (80+80+82+60+80)/5 = 76.4 ≈ 76. The mid-tier Codex between Mini and Max: whole-codebase engineering with 30% token efficiency; shut down July 2026 in favour of gpt-5.6-sol.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
