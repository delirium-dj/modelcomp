# Beam Model Research Report

## Model Overview
Beam is an open-weight model from Reflection AI, designed for coding, reasoning, and agentic workloads. It's the first model from Reflection to be released under an Apache 2.0 license.

## Technical Specifications
- **Model Size**: 501.3B total parameters, 23.4B active parameters
- **Architecture**: Sparse Mixture of Experts (MoE) with 52 layers (3 dense + 49 MoE layers), 256 experts
- **Context Window**: 1M tokens
- **Vocabulary Size**: 152k tokens
- **Supported Modalities**: Text only
- **Numerics**: BF16, FP8, NVFP4

## Training Methodology
- **Pretraining**: 23.8 trillion diverse, curated, high-quality tokens from web and proprietary datasets
- **Reinforcement Learning**: Over 100 million rollouts on 10.5K NVIDIA GB300 GPUs for 4 weeks
- **Environments**: Nearly 1 million environments across software engineering, terminal use, competitive coding, STEM, web search, tool use, and general knowledge
- **RL Infrastructure**: 110K concurrent rollouts, asynchronous execution, flexible compute allocation

## Key Features and Capabilities
- **Agentic Tool Use**: Long-horizon task completion with MCP-based tool integration
- **Efficient Reasoning**: Reaches comparable solution quality using approximately 3x fewer inference-time reasoning tokens
- **Software Engineering**: Resolves real-world GitHub issues, operates in CLI and DevOps environments
- **Coding**: Supports multiple programming languages with code generation capabilities
- **Math and Science Reasoning**: Graduate-level problem solving, theorem proving, and applied mathematics
- **Efficiency**: Frontier-level inference efficiency, using 3-4x less compute than comparable models

## Benchmark Results
### Agentic Coding/Terminal
- **DeepSWE v1.1**: 43.3%
- **SWE Bench Pro v2-Hard**: 76.5-78.6%
- **Terminal Bench v2.1**: 80.1%
- **SWE Atlas Codebase QnA**: 34.6%
- **SWEBench Multilingual**: 78.0%
- **SWEBench Verified**: 80.9%

### Reasoning
- **AIME 2026**: 97.7-98.0%
- **HLE (no tools)**: 36.2%
- **HLE (with tools)**: 51.1%
- **SciCode**: 49.7%
- **CriPT AA**: 16.3%
- **GPQA Diamond**: 90.5%

### Tool Calling/Search
- **AutomationBench**: 37.0%
- **MCP Atlas**: 78.7%
- **tau3 banking**: 38.0%
- **BrowseComp**: 77.4%
- **DeepSearchQA**: 80.1%

### General Capabilities
- **AA-LCR**: 79.3%
- **LongBench v2**: 65.5%
- **IFBench**: 79.7%
- **AA Omniscience**: 13.0%

## Performance vs Competitors
| Model | Size | Agentic Coding | Reasoning | Tool Use | Overall |
|-------|------|---------------|-----------|----------|---------|
| Beam | 501B | 44.4% | 97.8% | 37.0% | 71.2% |
| Inkling | - | 44.0% | 97.1% | NR | NR |
| Nemotron 3 Ultra | - | NR | NR | NR | NR |
| GLM 5.2 | - | 61.0% | 99.2% | 48.2% | NR |
| GLM 5.3 | - | NR | NR | 84.2% | NR |
| Kimi K3 | - | 68.0% | NR | 46.7% | NR |
| Qwen 3.8 Max | - | 51.0% | NR | 39.8% | NR |
| DeepSeek V4.1 Flash | - | 74.2% | NR | 54.8% | NR |

Beam achieves competitive or superior results compared to models like GLM 5.2 and Qwen 3.8-Max on coding and agentic tasks.

## Limitations
1. Text-only model (no multimodal capabilities)
2. Still developing in some areas like browsing and web search
3. Requires specialized infrastructure for training and deployment
4. Performance may vary based on context length and token efficiency settings

## Future Work
1. Expand multimodal capabilities through additional training
2. Improve browsing and web interaction capabilities
3. Enhance safety and alignment through additional reinforcement learning
4. Develop more efficient deployment options for enterprise use cases

## Conclusion
Beam represents a significant advancement in large language model technology with its 501B parameter scale and efficient reasoning capabilities. The model demonstrates frontier-level performance on coding and agentic tasks while maintaining exceptional efficiency, making it a powerful workhorse for enterprise coding and agentic workloads. The open-weight release will enable broader adoption and further development of this technology.

- **Tool use: 81/100** (Competitive agentic tool use capabilities with efficient reasoning, outperforming many models in coding and tool-based tasks)
- **Reasoning: 97/100.** AIME 2026 97.7–98.0%, GPQA Diamond 90.5%, HLE w/tools 51.1% — upper-mid reasoning; SciCode 49.7% caps general math.
- **Context window: 100/100.** Native 1M tokens — one of the largest context windows in this cohort.
- **Multimodal: 20/100.** Text-only; no image/audio input on standard endpoint.
- **Coding: 72/100.** Terminal Bench 2.1 80.1%, SWEBench Verified 80.9%, SWEBench Multilingual 78.0%, DeepSWE v1.1 43.3%.
- **Cost efficiency: 0/100.** Free on OpenCode Zen ($0/$0/$0).
- **Overall Score: 74/100.** Mean [Tool 81 + Reasoning 97 + Context 100 + Multimodal 20 + Coding 72] / 5 = 73.8; cap by text-only and no independent coding benchmark data beyond curated SWE suites.
