# Claude Opus 5.5

## Signature
- Provided by: **Gemma_4_31B** — 2026-11-04
- Reference URLs:
  - https://assets.claude.com/fc1b44717c85dc068bc6ba5024219938094694bd.pdf
  - https://www.anthropic.com/claude-opus-5-5
  - https://venturebeat.com/technology/anthropic-releases-claude-opus-5-5-beating-fable-5-1-on-key-agentic-benchmarks-at-60-cheaper-api-price
  - https://felloai.com/claude-opus-5-5/
  - https://benchmarklist.com/models/anthropic-claude-opus-5.5/
  - https://llm-stats.com/models/claude-opus-5-5
  - https://www.verticaltabs.com/anthropic/claude-opus-5-5/benchmarks
  - https://www.rltasks.com/launches/claude-opus-5-5

## Model Card
Claude Opus 5.5 is the first model in the Claude 5.5 family, designed as a broad capability upgrade over Claude Opus 5. It targets long-horizon professional knowledge work and agentic coding. It matches or exceeds Claude Fable 5.1 on most tasks while being significantly more cost-efficient.

### Capabilities
- **Agentic Coding:** State-of-the-art on Terminal-Bench 4.0 and strong results on CursorBench 4.0 and FrontierCode.
- **Knowledge Work:** Leads on GDPval-AA v2.1 (1846 Elo) and performs exceptionally well on business workflows (AutomationBench).
- **Reasoning:** Strong multidisciplinary reasoning (Humanity's Last Exam) and scientific research (Terminal-Bench-Science).
- **Multimodal:** High performance in visual chart recognition (Chartography).
- **Computer Use:** High partial scores on OSWorld 2.1.

### Context & Constraints
- **Context Window:** 1M tokens.
- **Input/Output:** Multimodal input, text output.
- **Safeguards:** Includes Fable 5.1-style cyber, biology, and distillation safeguards.

## Access & pricing
- **Tiers:** Standard
- **Pricing:**
  - Input: $4 /M tokens
  - Output: $20 /M tokens
  - Cache reads: $0.20 /M tokens
  - Cache writes: $5 /M tokens
- **Pricing Note:** 40% cheaper on typical workloads than Opus 5. A "Fast mode" is available for $8/M input and $40/M output.
- **Official URL:** https://www.anthropic.com/claude-opus-5-5

## Raw Benchmarks
- **Agentic Coding:**
  - Terminal-Bench 4.0: 66.4% (xhigh effort)
  - FrontierCode v1.1 (Main): 54.4%
  - CursorBench 4.0: 57.8%
- **Knowledge Work:**
  - GDPval-AA v2.1: 1846 Elo
  - AutomationBench: 40.0% - 42.5%
- **Reasoning / Science:**
  - Humanity's Last Exam: 67.7% (with tools)
  - Terminal-Bench-Science 0.1: 58.7% - 63.3%
- **Computer Use:**
  - OSWorld 2.1: 81.8% (partial)
- **Multimodal:**
  - Chartography: 89.0% (with tools)
- **General Intelligence:**
  - Arena Text: 1509 (high)
  - WebDev Arena: 1810 (max)

## Normalized Scores
- **Tool use: 95/100**
- **Reasoning: 94/100**
- **Context window: 90/100**
- **Multimodal: 88/100**
- **Coding: 96/100**
- **Cost efficiency: 85/100**
- **Overall Score: 92.6/100**
