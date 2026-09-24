# Gemini 1.5 Pro

## Model Identity
- **Developer:** Google
- **Model ID:** `opencode/gemini-1.5-pro`
- **Family:** Gemini 1.5 (legacy)
- **Released:** June 2025
- **Architecture:** Proprietary, 2M context window (legacy flagship)
- **Context Window:** 2M tokens (largest in evaluated set)
- **Modalities:** Text, image, audio, and video in; text out
- **Pricing:** Legacy; free tier via AI Studio (~$1.25/$5 per million tokens equivalent)

## Overview

Gemini 1.5 Pro is Google's legacy 2M-context multimodal flagship from the Gemini 1.5 generation. Superseded by newer Gemini 3.x generations, it remains available with a free tier and offers the largest context window in the evaluated set. It was one of the first models to offer 2M-token context for processing extremely long documents.

## Scores

- **Tool use: 47/100**
- **Reasoning: 63/100**
- **Context window: 98/100**
- **Multimodal: 88/100**
- **Coding: 56/100**
- **Overall Score: 70.4/100**
- **Cost efficiency: 85/100**

## Strengths

- **Largest context window:** Achieves 98/100 on context with a 2M-token window — the largest of any evaluated model — enabling processing of extremely long documents, codebases, and multimodal content in a single pass.
- **Strong multimodal capabilities:** Scores 88/100 on multimodal, supporting text, image, audio, and video input with native multimodal understanding.
- **Free tier available:** Free access via Google AI Studio with standard rate limits, making it accessible for evaluation and lighter workloads.
- **Strong instruction following:** BenchLM scores 85.2 on instruction following (IFBench 79.8%), indicating reliable adherence to complex prompts and constraints.
- **Legacy long-context pioneer:** As one of the first models to offer 2M context, it set the standard for long-context evaluation.

## Limitations

- **Weak coding performance:** Scores only 56/100 on coding — the weakest coding model in the evaluated set. BenchLM lists coding at 35.3/100 and AA Coding Index at 23.6/100.
- **Weak agentic coding:** Scores only 40.7 on BenchLM agentic and very low Terminal-Bench scores, indicating significant difficulty with autonomous agentic workflows.
- **Legacy model:** Superseded by Gemini 3.x generations with significantly better coding and agentic performance. The 2M context window is now available in newer models as well.
- **Very low benchmark coverage:** BenchLM lists 0 sourced benchmark rows and ranks very low, indicating sparse independent evaluation.
- **Weak HLE performance:** Scores 4.9% on HLE and 38.7% on knowledge benchmarks, indicating significant difficulty with highly specialized reasoning tasks.
