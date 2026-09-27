# Qwen 3.7

## Model Identity
- **Developer:** Alibaba Cloud / Qwen Team
- **Model ID:** `opencode/qwen-3.7`
- **Family:** Qwen 3.x
- **Released:** 2026
- **Architecture:** Qwen3-Next family; Mixture-of-Experts with hybrid attention
- **Context Window:** 1M tokens (per public release data)
- **Modalities:** Text input/output (per model card); some variants include vision
- **Pricing:** $1.25 per million input tokens, $3.75 per million output tokens

## Overview

Qwen 3.7 is Alibaba's latest entry in the Qwen language model family, designed as a competitive agentic coding and reasoning model. The Qwen3.7-Max variant achieves strong performance across coding, reasoning, and agentic benchmarks, with particular strength in long-running autonomous tasks demonstrated by a 35-hour kernel optimization run that produced a 10x geometric mean speedup.

## Scores

- **Tool use: 82/100**
- **Reasoning: 88/100**
- **Context window: 89/100**
- **Multimodal: 50/100**
- **Coding: 85/100**
- **Overall Score: 79/100**
- **Cost efficiency: 75/100**

## Strengths

- **Exceptional reasoning capability:** Scores 87.6/100 on reasoning — the strongest individual category — driven by GPQA Diamond at 89.2% and competitive math benchmarks. The model demonstrates deep analytical capability across scientific and mathematical domains.
- **Strong coding performance:** Achieves 80.4% on SWE-Verified, 90.3% on LiveCodeBench v6, and 73% on Terminal-Bench 2.1, placing it among the top-tier coding models. The Qwen3-Coder-Next variant (80B total / 3B active) provides efficient inference for production deployments.
- **Agentic tool-use proficiency:** Scores 76.4 on MCP-Atlas and 60.8 on MCP-Mark, with strong performance on BFCL-V4 (75.0) and SpreadSheetBench-v1 (87.0), indicating robust cross-tool generalization.
- **Long-horizon autonomous capability:** Demonstrated a 35-hour autonomous kernel optimization run across 1,158 tool calls, achieving 10x speedup — the clearest signal of sustained multi-step agentic coherence.
- **1M context window:** Supports 1M token context for processing entire codebases and long documents in a single pass.

## Limitations

- **Moderate multimodal support:** Scores only 50/100 on multimodal; the base Qwen 3.7 variant listed in the model card supports text-only input/output, with vision capabilities appearing only in specific Qwen3.8 variants.
- **HLE reasoning gap:** Scores 30.8% on Humanity's Last Exam, indicating significant struggles with highly specialized knowledge-intensive reasoning tasks.
- **SWE-Pro underperformance:** While SWE-Verified is strong at 80.4%, SWE-Pro drops to 60.6%, suggesting difficulty with harder software engineering tasks beyond standard benchmarks.
- **Higher cost than competitors:** At $1.25/$3.75 per million tokens, Qwen 3.7 is more expensive than DeepSeek V4 Flash ($0.14/$0.28) and other open alternatives, reducing its cost efficiency advantage.
- **Standard pricing (not free):** Unlike some competitors offering free tiers, Qwen 3.7 uses standard commercial pricing, which may limit accessibility for smaller projects.
