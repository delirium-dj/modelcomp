# Claude Fable 5

## Model Card

Anthropic's June 2026 frontier model for long-running agents, coding, research, and professional knowledge work; it remains available as a legacy model. The API ID is `claude-fable-5`. It shares its underlying specifications with the verification-gated Claude Mythos 5 but adds public-use safeguards and can route safety-flagged requests to a fallback model. It supports always-on adaptive thinking, a 1M-token context window, and 128K synchronous output. Base pricing is $10 per million input tokens and $50 per million output tokens, with cache reads at $1 per million.

## Raw Benchmark Data (as reported)

| Benchmark | Score | Notes |
|-----------|-------|-------|
| Artificial Analysis Intelligence Index | **64.9 at launch / 62.1 later record** | Pre-release max-effort evaluation with Opus 4.8 fallback versus later source record |
| GPQA Diamond | **93.2% Vals / 92.6% verified run** | Different independent runs |
| HLE | **63.8% with tools / 53% AA pre-release** | AA run included Opus 4.8 fallback on 9% of tasks; configurations differ |
| ARC-AGI-2 | **89.2% verified** | Maximum thinking |
| FrontierMath Tier 4 v2 | **87.8%** | Research mathematics |
| AA-LCR | **82.3%** | Long-context reasoning |
| SWE-bench Verified | **95.0%** | Maximum effort |
| SWE-bench Pro | **80.4%** | Maximum effort |
| Terminal-Bench 2.1 | **84.6% shared run / 88.0% best reported harness** | Harnesses are not interchangeable |
| Terminal-Bench 4.0 | **42.4%** | Later terminal-agent evaluation |
| FrontierCode | **64.9% main / 64.9% extended** | Production-code evaluation |
| CursorBench 3.2 | **70.5% max / 68.4% xhigh** | Source-reported effort sweep |
| Toolathlon | **77.9% Pass@1** | Multi-tool agent evaluation |
| MCP Atlas | **84.7%** | Maximum effort |
| GDPval-AA | **1,932 Elo** | Launch system-card result |
| AA-Briefcase | **1,583 Elo** | Maximum effort |
| MMMU Pro | **89.3% Vals / 84.2% model-card run** | Different evaluation sources |
| MathVision | **94.8% / 98.6% with Python** | Maximum effort |
| CharXiv-R | **88.9% / 93.5% with Python** | Scientific-chart reasoning |
| Chartography | **84.2% with tools / 36.6% without tools** | Maximum effort |
| OSWorld 2.0 | **72.9% partial / 36.1% strict** | Anthropic first-attempt evaluation |
| OSWorld-Verified | **86.0%** | Separate verified-subset result |

## Normalized Scores

- **Tool use: 95/100.**
- **Reasoning: 96/100.**
- **Context window: 94/100.**
- **Multimodal: 92/100.**
- **Coding: 96/100.**
- **Cost efficiency: 48/100.**
- **Overall Score: 94.6/100.**

Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-02

## References

- [Anthropic — Introducing Claude Fable 5 and Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)
- [Claude Platform — Fable 5 model overview](https://platform.claude.com/docs/en/models/fable-5/overview)
- [Artificial Analysis — Fable 5 independent launch evaluation](https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index)
- [BenchmarkList — Claude Fable 5 source-linked evaluations](https://benchmarklist.com/models/anthropic-claude-fable-5/)
