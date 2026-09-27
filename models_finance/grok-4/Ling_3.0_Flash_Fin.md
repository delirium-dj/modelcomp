# Grok 4

## Model Identity
- **Developer:** xAI (SpaceXAI)
- **Model ID:** `opencode/grok-4`
- **Family:** Grok
- **Released:** July 9, 2025
- **Architecture:** Proprietary reasoning model (closed weights)
- **Context Window:** 256K tokens
- **Modalities:** Text, image, and PDF in; text out
- **Pricing:** $3 per million input tokens, $15 per million output tokens ($0.75 cached)

## Overview

Grok 4 is xAI's proprietary reasoning model and the predecessor of the Grok 4.5/4.6 line. Designed for coding, mathematical reasoning, and agentic tasks, it achieves strong performance on knowledge benchmarks and mathematical competition problems, though it has limited benchmark coverage on public leaderboards.

## Scores

- **Tool use: 83/100**
- **Reasoning: 87/100**
- **Context window: 74/100**
- **Multimodal: 65/100**
- **Coding: 81/100**
- **Overall Score: 78/100**
- **Cost efficiency: 60/100**

## Strengths

- **Exceptional mathematical reasoning:** Scores 92.7% on AIME 2025 and 94.9% on GPQA Diamond, making it one of the strongest mathematical reasoning models evaluated.
- **Strong coding performance:** Achieves ~88% on SWE-bench Verified and 81.9% on LiveCodeBench, demonstrating competitive software engineering capability.
- **Robust tool use:** Scores 82.5/100 on tool use with a Tau2 agentic score of 90.3%, indicating strong autonomous task execution.
- **Multimodal input support:** Accepts text, image, and PDF as input, enabling document analysis and visual reasoning workflows.
- **Tool calling and file access:** Supports file input and tool calling, making it suitable for agentic coding workflows.

## Limitations

- **Very high cost:** At $3/$15 per million tokens, Grok 4 is significantly more expensive than open alternatives like DeepSeek V4 Flash or Gemma 4 31B, contributing to its low cost efficiency score of 60/100.
- **Moderate context window:** At 256K tokens, the context window is substantially shorter than 1M-context competitors (DeepSeek V4, Kimi K2.8, Ox Alpha), limiting long-horizon agentic workflows.
- **Weak Terminal-Bench performance:** Scores only 37.9% on Terminal-Bench, indicating significant difficulty with terminal-based agentic tasks that require sustained interaction.
- **Limited public benchmark coverage:** BenchLM scores only 54.91 overall with very limited verified benchmark rows, suggesting sparse independent evaluation.
- **Proprietary and closed:** No open weights available, preventing self-hosting and community audit.
