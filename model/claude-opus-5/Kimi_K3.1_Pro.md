# Claude Opus 5

## Model Card

Anthropic's July 2026 flagship for high-end coding, reasoning, knowledge work, and computer use, now a legacy model that remains available. The API ID is `claude-opus-5`. It supports adaptive thinking with configurable effort, a 1M-token context window, and 128K synchronous output (300K through the Message Batches beta). Public evaluations cover text, image, chart, and video understanding. Base API pricing is $5 per million input tokens and $25 per million output tokens; batch requests receive a 50% discount and cache reads cost 10% of base input.

## Raw Benchmark Data (as reported)

| Benchmark | Score | Notes |
|-----------|-------|-------|
| Artificial Analysis Intelligence Index | **63.1** | Source-linked launch record; index version predates current v5.0 |
| GPQA Diamond | **93.7%** | Launch record; a separate Vals run reports 93.4% |
| HLE | **64.7% with tools / 56.3% without tools** | System-card result |
| HLE-Verified | **54.4%** | Revised 1,811-item set; distinct from original HLE |
| ARC-AGI-3 | **30.2%** | Interactive novel-problem evaluation |
| FrontierMath Tier 4 v2 | **73.2%** | Research mathematics |
| Context Arena / GDM-MRCRv2 | **77.3% average** | Maximum thinking; AUC 97.5% at 128K and 45.7% at 1M |
| AA-LCR | **82.0% medium / 79.3% max** | Independent long-context reasoning; effort results differ |
| SWE-bench Verified | **96.0% system card / 97.0% separate run** | Different runs; do not merge |
| Terminal-Bench 2.1 | **89.1% max / 84.6% high** | Terminal-agent evaluation |
| Terminal-Bench 4.0 | **52.3%** | Maximum thinking |
| CursorBench 3.2 | **70.0%** | Maximum effort, production Cursor harness |
| ProgramBench | **93.0% best / 83.0% lowest hidden-test pass** | Anthropic harness, 166-task golden subset |
| Toolathlon | **80.6% Pass@1 / 87.0% Pass@3** | Maximum thinking; 73.1% Pass^3 |
| MCP Atlas | **87.0%** | Maximum effort |
| AutomationBench | **50.3% task success** | Maximum effort |
| GDPval-AA | **1,861 Elo** | Professional knowledge work |
| MMMU Pro | **89.9% Vals run / 84.7% verified later run** | Different harnesses and dates |
| Chartography | **84.0% with tools** | Maximum effort |
| LVBench | **75.4%** | Long-video understanding |
| OSWorld 2.0 | **75.4% partial / 39.6% strict** | Anthropic first-attempt evaluation |

## Normalized Scores

- **Tool use: 97/100.**
- **Reasoning: 96/100.**
- **Context window: 94/100.**
- **Multimodal: 91/100.**
- **Coding: 98/100.**
- **Cost efficiency: 63/100.**
- **Overall Score: 95.2/100.**

Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-02

## References

- [Anthropic — Introducing Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)
- [Claude Platform — Opus 5 model overview](https://platform.claude.com/docs/en/models/opus-5/overview)
- [BenchmarkList — Claude Opus 5 source-linked evaluations](https://benchmarklist.com/models/anthropic-claude-opus-5/)
