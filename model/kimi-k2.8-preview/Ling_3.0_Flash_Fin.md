# Kimi K2.8 Preview

## Model Identity
- **Developer:** Moonshot AI
- **Model ID:** `opencode/kimi-k2-8-preview`
- **Family:** Kimi K2.x (between K2.7 Code and flagship K3)
- **Released:** 2026
- **Architecture:** Mixture-of-Experts, ~1T total parameters, 32B active per token
- **Context Window:** 1M tokens
- **Modalities:** Text and image in; text out
- **Pricing:** Kimi membership plan (no per-token billing, no OpenCode Zen Free tier)

## Overview

Kimi K2.8 Preview is Moonshot AI's mid-tier coding and agentic model, positioned between the K2.7 Code release and the flagship K3. It inherits the K2.x family's strong coding and mathematical reasoning capabilities while offering a 1M-token context window for long-horizon agentic workflows. As a preview release, it is evaluated within the Kimi Code ecosystem.

## Scores

- **Tool use: 76/100**
- **Reasoning: 76/100**
- **Context window: 93/100**
- **Multimodal: 70/100**
- **Coding: 78/100**
- **Overall Score: 79/100**
- **Cost efficiency: 73/100**

## Strengths

- **1M context window (highest category score):** Achieves 93/100 on context — the strongest category — enabling genuinely long-horizon agentic tasks that require maintaining state across extended interactions.
- **Exceptional mathematical reasoning:** The K2.x family scores 96.4% on AIME 2026 and 92.7% on HMMT February 2026, placing it among the top mathematical reasoning models available.
- **Strong coding benchmarks:** Achieves 80.2% on SWE-bench Verified and 89.6% on LiveCodeBench v6 (K2.6 baseline), demonstrating competitive repository-level coding performance.
- **Agentic tool-use proficiency:** K2.7 Code scores 76.0 on MCP Atlas and 81.1 on MCP Mark Verified, indicating robust cross-tool generalization and strong agentic task execution.
- **Open-source weights:** Moonshot AI publishes open-weight models, enabling self-hosting and community evaluation.

## Limitations

- **No free tier available:** Unlike many competitors, Kimi K2.8 Preview requires a Kimi membership plan with no per-token billing and no OpenCode Zen Free ID, reducing accessibility for smaller projects.
- **Moderate multimodal support:** Scores only 70/100 on multimodal; image input is supported but output is text-only, with limited vision-specific benchmarks compared to dedicated multimodal models.
- **Agentic coding inconsistency:** While SWE-bench Verified is strong at 80.2%, Terminal-Bench 2.0 scores only 66.7%, and FrontierSWE performance (K2.6 at 27%) suggests difficulty with the hardest long-horizon engineering tasks.
- **Preview status:** As a preview release, benchmark coverage is limited and some capabilities may shift before the stable release.
- **Pricing opacity:** The membership-based pricing model makes cost comparison difficult and may not be as transparent as per-token billing used by competitors.
