# Gemini 2.5 Flash Lite

## Model Identity
- **Developer:** Google
- **Model ID:** `opencode/gemini-2.5-flash-lite`
- **Family:** Gemini 2.5 (ultra-low-latency tier)
- **Released:** July 22, 2025
- **Architecture:** Ultra-low-latency model optimized for cost-sensitive, high-frequency tasks
- **Context Window:** 1M tokens
- **Modalities:** Text, image, audio, PDF in; text out
- **Pricing:** Free tier available; $0.10/$0.40 per million tokens

## Overview

Gemini 2.5 Flash Lite is Google's ultra-low-latency, cost-efficient model designed for high-frequency, lightweight tasks. It offers the fastest performance for cost-sensitive applications including high-volume classification, simple data extraction, and extremely low-latency applications where budget and speed are the primary constraints.

## Scores

- **Tool use: 58/100**
- **Reasoning: 60/100**
- **Context window: 95/100**
- **Multimodal: 84/100**
- **Coding: 57/100**
- **Overall Score: 71/100**
- **Cost efficiency: 98/100**

## Strengths

- **Extremely cost-efficient:** Achieves 98/100 on cost efficiency with free tier access and $0.10/$0.40 per million tokens pricing — the cheapest model in the evaluated set.
- **1M context window:** Scores 95/100 on context with a 1M token window, supporting long-horizon workflows.
- **Strong multimodal support:** Scores 84/100 on multimodal, supporting text, image, audio, and PDF input with thinking mode enabled.
- **Free tier available:** Free tier on Google AI Studio and OpenCode Zen with standard rate limits, making it highly accessible.
- **Code execution and tools:** Supports code execution, function calling, grounding with Google Maps, search grounding, and structured outputs.

## Limitations

- **Very weak agentic coding:** Scores only 4.5% on Terminal-Bench Hard (rank 207/326) and 0.6 on MCP-Bench, indicating severe difficulty with terminal-based agentic tasks.
- **Low coding performance:** Scores 57/100 on coding — below average for the evaluated set. LLM Stats ranks it #252 with a score of 10.6.
- **Weak reasoning:** Scores 60/100 on reasoning with GPQA at 64.6%, significantly below more capable models.
- **Low intelligence index:** LLM Stats Intelligence Index of 11.1 (rank #246), indicating very low measured intelligence relative to peers.
- **Older knowledge cutoff:** Knowledge cutoff of January 2025, making it less current than newer models.
