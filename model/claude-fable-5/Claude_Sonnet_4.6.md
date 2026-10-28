# Claude Fable 5 — Research Notes

**Model ID:** opencode/claude-fable-5  
**Context window:** 1M total; 128K max output  
**Modalities:** Text, image in; text out  
**Pricing:** $10/$50 per 1M in/out

## Benchmarks

- SWE-bench Pro: 80.3%
- Terminal-Bench 2.1 launch: 88.0%
- Terminal-Bench 4.0 (max effort): 44.5%
- Terminal-Bench-Science: 24.7%
- Superseded by Fable 5.1

## Scores

- **Tool use: 89/100.** Terminal-Bench 4.0 at 44.5% (max effort, superseded checkpoint); strong agent-first design for multi-step terminal execution — hampered by being the predecessor checkpoint vs 5.1.
- **Reasoning: 89/100.** First Mythos-class model; SWE-bench Pro 80.3%, long-horizon repo maintenance; elite reasoning for its release window even if now retired.
- **Context window: 92/100.** 1M token context; long-engineering-narrative workflows were its defining feature.
- **Multimodal: 60/100.** Text + image in, text out; no audio or video understanding.
- **Coding: 90/100.** SWE-bench Pro 80.3%; the first above-Opus Anthropic model — multi-file refactor and stack-trace iteration specialist.
- **Cost efficiency: 42/100.** $10/$50 per 1M — fully superseded by Fable 5.1; premium price for a retired checkpoint.
- **Overall Score: 84/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (89+89+92+60+90)/5 = 84. Historical landmark — the first Mythos tier; fully succeeded by Fable 5.1 and should not be used for new projects.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
