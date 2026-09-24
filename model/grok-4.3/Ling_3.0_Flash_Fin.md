# Grok 4.3

## Model Identity
- **Developer:** xAI (SpaceXAI)
- **Model ID:** `opencode/grok-4.3`
- **Family:** Grok
- **Released:** April 2026
- **Architecture:** Proprietary reasoning model with configurable reasoning effort (none, low, medium, high)
- **Context Window:** 1M tokens (per external sources; 128K per model card)
- **Modalities:** Text, image, and video in; text out
- **Pricing:** $0.64 per million input tokens (significantly cheaper than Grok 4 at $4.20)

## Overview

Grok 4.3 is xAI's latest reasoning-first model, featuring always-on reasoning with configurable effort levels. It delivers state-of-the-art performance across academic and industry benchmarks with strong tool use, instruction following, and multimodal capabilities. Available on Microsoft Foundry, AWS Bedrock, and Azure Direct.

## Scores

- **Tool use: 84/100**
- **Reasoning: 86/100**
- **Context window: 95/100**
- **Multimodal: 65/100**
- **Coding: 74/100**
- **Overall Score: 81/100**
- **Cost efficiency: 90/100**

## Strengths

- **Exceptional reasoning capability:** Scores 86/100 on reasoning with an Artificial Analysis Intelligence Index of 38, placing it among the top reasoning models evaluated.
- **Very strong tool use:** Achieves 84/100 on tool use, indicating robust autonomous agentic workflow capability with reliable function calling and tool integration.
- **1M context window:** Supports a large 1M-token context window, enabling processing of extensive documents and codebases in a single pass.
- **Always-on reasoning:** Unlike models where thinking can be skipped, Grok 4.3 features always-on reasoning that enables consistent multi-step agent loop performance.
- **Multimodal input:** Accepts text, images, and video as input, enabling vision-based agentic workflows and document analysis.
- **Cost-effective:** At $0.64 per million tokens, significantly cheaper than Grok 4 ($4.20) while delivering superior reasoning and tool use performance.

## Limitations

- **Moderate coding performance:** Scores only 74/100 on coding — respectable but below top-tier coding models like DeepSeek V4 Flash (80) and Grok 4 (80.5).
- **Moderate multimodal support:** Scores 65/100 on multimodal; image and video input is supported but benchmark coverage for multimodal tasks is limited.
- **Proprietary and closed:** No open weights available, preventing self-hosting and community audit.
- **Context window discrepancy:** Meta.json lists 128K context while external sources report 1M context; the effective context window may vary by deployment platform.
- **Safety concerns:** Microsoft Foundry evaluation found Grok 4.3 to have higher risks of harmful content production and jailbreak attacks compared to other models.
