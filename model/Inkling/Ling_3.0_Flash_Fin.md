# Inkling

## Model Identity
- **Developer:** Thinking Machines Lab
- **Model ID:** `opencode/inkling`
- **Family:** MoE transformer (66-layer, 256 experts, 6 per token + 2 shared)
- **Released:** July 15, 2026
- **Architecture:** Natively multimodal MoE; images via hierarchical patch encoder, audio via discrete token encoding; all modalities projected into shared hidden space
- **Context Window:** 1M tokens
- **Modalities:** Text, image, and audio in; text out
- **Pricing:** $1.87/$4.68 per million tokens (open weights, Apache 2.0)

## Overview

Inkling is a broad, balanced generalist model from Thinking Machines Lab designed for agentic coding, reasoning, multimodal understanding, and instruction following. Released in July 2026, it achieves competitive performance across text, agentic, multimodal, and audio evaluations, with strong mathematical reasoning and moderate agentic capabilities.

## Scores

- **Tool use: 41/100**
- **Reasoning: 58/100**
- **Context window: 95/100**
- **Multimodal: 49/100**
- **Coding: 41/100**
- **Overall Score: 56.8/100**
- **Cost efficiency: 73/100**

## Strengths

- **Exceptional mathematical reasoning:** Scores 97.1% on AIME 2026 and 87.2% on GPQA Diamond, placing it among the top mathematical reasoning models evaluated.
- **1M context window:** Achieves 95/100 on context, enabling long-horizon agentic workflows and processing of extensive documents in a single pass.
- **Strong instruction following:** Scores 85.2/100 on instruction following (IFBench 79.8%), indicating reliable adherence to complex prompts and constraints.
- **Natively multimodal:** Processes text, images, and audio from the ground up with dedicated encoders, enabling genuine multimodal agentic workflows.
- **Open weights:** Released under Apache 2.0 license, enabling self-hosting and community evaluation.
- **High SWE-bench Verified:** Achieves 77.6% on SWE-bench Verified, demonstrating competitive repository-level coding performance.

## Limitations

- **Weak agentic coding:** Scores only 40.7 on BenchLM agentic and 41.4 on coding, indicating significant difficulty with autonomous agentic workflows despite strong individual coding benchmarks.
- **Moderate multimodal support:** Scores only 49/100 on multimodal; while natively multimodal, benchmark coverage for vision-specific tasks is limited.
- **Terminal-Bench inconsistency:** Scores 63.8% on Terminal-Bench 2.0 but only 47.6% on Terminal-Bench 2.1 (Vals), suggesting performance varies across evaluation frameworks.
- **HLE reasoning gap:** Scores 46% on HLE with tools, indicating difficulty with highly specialized knowledge-intensive reasoning tasks.
- **Limited independent evaluation:** No meta.json or average.md in the model folder; scores rely entirely on BenchLM and vendor-reported benchmarks.
