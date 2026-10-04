# GLM-5.2 Coding — Independent Research Report

## Summary and evidence

GLM-5.2 Coding is the coding-oriented deployment of Z.ai's open GLM-5.2 model. Official materials describe a **753B-parameter** model, MIT-licensed weights, up to **1M context**, and report **81.0 on Terminal-Bench 2** plus **62.1 on SWE-bench Pro**.

Sources: [Z.ai GLM-5.2 announcement](https://z.ai/blog/glm-5.2), [GLM-5.2 model card](https://huggingface.co/zai-org/GLM-5.2)

## Cost and limitations

The very large weights demand substantial self-hosting infrastructure, while API economics vary by provider. Multimodal coverage is less central than text, reasoning, and software engineering.

## Scores

- **Tool use: 89/100.** Terminal performance and agentic coding design support strong tool workflows.
- **Reasoning: 87/100.** Broad reasoning is strong, though later GLM generations improve it further.
- **Context window: 96/100.** Up to 1M context is excellent for repositories and long agent traces.
- **Multimodal: 70/100.** The coding deployment is primarily text-centric with limited media breadth.
- **Coding: 91/100.** Terminal-Bench 81.0 and SWE-bench Pro 62.1 are excellent coding-agent results.
- **Cost efficiency: 86/100.** Open MIT weights are valuable, offset by the heavy infrastructure footprint.
- **Overall Score: 87/100.** Half-up rounded mean: (89 + 87 + 96 + 70 + 91) / 5 = 86.6.

## Bottom line

GLM-5.2 Coding is a powerful open coding-agent model for teams that can support its substantial serving requirements.

