# Poolside Laguna S-2.1 — research notes

## Exact-model evidence

- Poolside identifies **Laguna S-2.1** as a 118B-parameter MoE with 8B active parameters, a 1,048,576-token context window, and configurable thinking. Its public release data reports 70.2 on Terminal-Bench 2.1, 78.5 on SWE-bench Multilingual, 59.4 on SWE-Pro Public, 40.4 on DeepSWE, 46.2 on SWE-Atlas, and 49.7 on Toolathlon Verified. [Poolside’s announcement](https://poolside.ai/blog/introducing-laguna) and the [exact model card](https://huggingface.co/RedHatAI/Laguna-S-2.1) support these claims.
- The published evidence is strongly agentic/coding oriented and supports the long-context assessment, but it provides no vision or audio benchmark. The multimodal score is therefore deliberately conservative rather than inferred from text-agent results.

## Ratings

- **Tool use: 73/100.** Toolathlon Verified 49.7 and Terminal-Bench 2.1 70.2 show capable, though not frontier-leading, agent/tool execution.
- **Reasoning: 78/100.** The release’s SWE-Pro, DeepSWE, and SWE-Atlas results indicate solid multi-step software reasoning.
- **Context window: 92/100.** The exact model supports a 1,048,576-token context window.
- **Multimodal: 28/100.** Exact-model documentation describes a text model and supplies no image, video, or audio capability evidence.
- **Coding: 76/100.** SWE-bench Multilingual 78.5 and the multiple software-engineering benchmarks support a strong coding score.
- **Cost efficiency: 70/100.** The 8B-active MoE design is comparatively efficient, but current public API pricing was not established by the cited sources.

- **Overall Score: 69.4/100.** Mean of the five quality dims (73+78+92+28+76)/5 = 69.4.
