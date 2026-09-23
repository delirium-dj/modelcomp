# Tencent Hy3 Preview — research notes

## Exact-model evidence

- Tencent’s official [Hy3 Preview model card](https://huggingface.co/tencent/Hy3-preview) identifies a 295B-parameter MoE with 21B active parameters and a 256K-token context window. Its card describes competitive performance on STEM, context/instruction following, coding-agent, search-agent, ClawEval, and WildClawBench evaluations.
- The corresponding release benchmark presentation reports 74.4 on SWE-bench Verified, 54.4 on Terminal-Bench 2.0, 34.86 on LiveCodeBench-v6, 65.76 on MMLU-Pro, 51.60 on SuperGPQA, 76.28 on MATH, and 95.37 on GSM8K. The sources describe text and code/agent use; no image, audio, or video model capability is established.

## Ratings

- **Tool use: 69/100.** Terminal-Bench 2.0 54.4 and the model card’s documented search-agent and Claw benchmarks support solid tool-agent capability.
- **Reasoning: 76/100.** Strong MATH and GSM8K results plus competitive SuperGPQA support a high reasoning score.
- **Context window: 80/100.** The exact card specifies a 256K context window and highlights gains on its context-learning evaluations.
- **Multimodal: 18/100.** The reviewed exact-model documentation establishes text/code capabilities, not image, video, or audio input.
- **Coding: 73/100.** SWE-bench Verified 74.4 is strong, while LiveCodeBench-v6 34.86 and Terminal-Bench 54.4 warrant a more moderate aggregate score.
- **Cost efficiency: 82/100.** Only 21B of 295B MoE parameters are active per forward pass and the weights are open, although provider pricing was not established.

- **Overall Score: 63.2/100.** Mean of the five quality dims (69+76+80+18+73)/5 = 63.2.
