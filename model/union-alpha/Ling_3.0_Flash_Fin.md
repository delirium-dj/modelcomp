# Union Alpha

## Model Identity
- **Developer:** Anonymous (stealth); identified as Pareto 26.9 from unbiased.ai
- **Model ID:** `opencode/union-alpha`
- **Family:** Stealth model (MoA — Mixture of Agents architecture)
- **Released:** September 16, 2026
- **Architecture:** Blended LLM synthesis with Mixture of Agents; multiple specialized models compete on every request via consensus layer
- **Context Window:** 128K tokens
- **Modalities:** Text and image in; text out
- **Pricing:** Standard pricing (free preview ended after one day)

## Overview

Union Alpha is a stealth AI model launched on OpenRouter in September 2026, built on blended LLM synthesis for coding, research, and agentic workflows. Its Mixture of Agents architecture routes each request through multiple specialized models, with a consensus layer selecting the best output before returning results to the user. Independent benchmarks show it competing with models at significantly higher price points.

## Scores

- **Tool use: 77/100**
- **Reasoning: 81/100**
- **Context window: 78/100**
- **Multimodal: 68/100**
- **Coding: 81/100**
- **Overall Score: 77/100**
- **Cost efficiency: 73/100**

## Strengths

- **Strong coding benchmarks:** Scores 74.2% on SWE-bench Verified and 74.0% on DeepSWE, matching models that charge $50 per million tokens. On Terminal-Bench v4.0, it achieves 50-60%, placing it in the mid-to-high terminal capability range.
- **Mixture of Agents architecture:** Uses multiple specialized models competing on every request, with a consensus layer selecting the best answer — a novel approach that can theoretically leverage specialized strengths for different task types.
- **Text and image input:** Supports multimodal input with tool calling, enabling visual agentic workflows and document-based coding tasks.
- **Frontier coding performance at lower cost:** Community investigations position it competitively against GPT-6 Astra and Claude Fable 5.1 on coding benchmarks while costing significantly less.
- **Multiple platform availability:** Available on OpenRouter, OpenCode, and Cloudflare AI.

## Limitations

- **Anonymous developer:** The development team remains anonymous, with no official model card or public attribution as of September 2026, creating uncertainty about the model's true capabilities and long-term availability.
- **Short free preview:** The free preview period ended after only one day, making the model commercially priced and less accessible for extended evaluation.
- **Moderate multimodal support:** Scores only 68/100 on multimodal; image input is supported but output is text-only, with limited vision-specific benchmarks.
- **Smaller context window:** At 128K tokens (meta.json), the context window is shorter than 1M-context competitors, limiting long-horizon agentic tasks.
- **Limited public benchmark coverage:** As a stealth model, it has very limited independent evaluation and no official model card with comprehensive benchmark data.
