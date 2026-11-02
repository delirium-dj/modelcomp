# Claude Sonnet 5.5

## Model Card

Anthropic's fast, high-capability Sonnet model for agentic coding, knowledge work, computer use, and image understanding. The API ID is `claude-sonnet-5-5`. It supports adaptive thinking across five effort settings, text/image input, a 1M-token context window, and 128K synchronous output. Base pricing is $2 per million input tokens and $10 per million output tokens, with current cache reads at $0.10 per million. Artificial Analysis measured unusually high output-token consumption at maximum effort, so list price alone understates the cost of some max-effort workloads.

## Raw Benchmark Data (as reported)

| Benchmark | Score | Notes |
|-----------|-------|-------|
| Artificial Analysis Intelligence Index | **56 at launch / 54.2 later record** | Pre-release launch evaluation versus later source record; not silently reconciled |
| HLE | **64.5% with tools** | Multidisciplinary reasoning |
| ARC-AGI-2 | **83.9%** | Abstract reasoning |
| ARC-AGI-3 | **24.3%** | Interactive novel-problem evaluation |
| ArxivMath | **95.2% with tools / 86.8% without tools** | Maximum thinking |
| AA-LCR | **82.7%** | Long-context reasoning |
| Terminal-Bench 4.0 | **70.6% vendor / 64% independent pre-release** | Different harness runs and deployment timing |
| Terminal-Bench-Science 0.1 | **59.9% vendor / 53% independent pre-release** | Scientific terminal workflows |
| SWE-bench Pro | **81.3%** | Maximum thinking |
| SWE-bench Multilingual | **90.3% resolved** | Maximum thinking |
| SWE-bench Multimodal | **54.3% resolved** | Maximum thinking |
| FrontierCode 1.1 Main | **52.1% xhigh / 46.2% max** | Higher effort does not guarantee a higher score |
| FrontierSWE v2 | **61.9% mean** | Five trials in Proximus; 20-hour task budget |
| CursorBench 4.0 | **55.5%** | Anthropic launch table |
| DeepSWE 1.1 | **71.0% Pass@1** | Average over five mini-SWE-agent trials |
| Toolathlon | **77.8% Pass@1 / 85.2% Pass@3** | Maximum thinking; 68.5% Pass^3 |
| AutomationBench | **44.7% task success** | Maximum thinking |
| AutomationBench-AA | **71.8% partial score** | Independent AA implementation; not interchangeable with task success |
| GDPval-AA v2.1 | **1,844 Elo launch / 1,840 later max run** | Professional knowledge work |
| AA-Briefcase v1.1 | **1,811 Elo launch / 1,824 later max run** | Long-horizon knowledge work |
| OSWorld 2.1 | **80.1% partial** | Computer use |
| Chartography | **61.6% no tools / 90.2% with tools** | Different evaluation configurations |
| BenchCAD Vision2Code-1000 | **0.963 IoU with tools / 0.747 without** | Maximum thinking |

## Normalized Scores

- **Tool use: 95/100.**
- **Reasoning: 95/100.**
- **Context window: 94/100.**
- **Multimodal: 90/100.**
- **Coding: 97/100.**
- **Cost efficiency: 78/100.**
- **Overall Score: 94.2/100.**

Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-02

## References

- [Anthropic — Introducing Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5)
- [Claude Platform — Models overview](https://platform.claude.com/docs/en/models/overview)
- [Artificial Analysis — Sonnet 5.5 independent launch evaluation](https://artificialanalysis.ai/articles/claude-sonnet-5-5)
- [BenchmarkList — Claude Sonnet 5.5 source-linked evaluations](https://benchmarklist.com/models/anthropic-claude-sonnet-5.5/)
