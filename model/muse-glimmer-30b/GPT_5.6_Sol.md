# Muse Glimmer 30B — Independent Research Report

## Summary and evidence

Muse Glimmer 30B is Meta's open-weight dense model for local reasoning and always-on agent workflows. Meta distributes a high-reasoning configuration through its Model API and open checkpoints for common local runtimes. The model accepts vision input and is small enough to run quantized on high-end consumer hardware; its trained context is approximately 131K.

Sources: [Meta Model API listing](https://dev.meta.ai/models/muse-glimmer), [AMD local deployment guide](https://www.amd.com/en/blogs/2026/run-meta-muse-glimmer-30b-on-amd-ryzen-ai-max-and-radeon-gpus.html)

## Cost and limitations

Open weights eliminate mandatory token charges and enable private local use. Compared with cloud frontier models, the 30B dense model has lower absolute reasoning and coding capacity; community extensions beyond native context are not equivalent to official support.

## Scores

- **Tool use: 80/100.** It targets local agents but relies on caller-provided tooling.
- **Reasoning: 82/100.** High reasoning is impressive for 30B, below frontier-scale systems.
- **Context window: 79/100.** Roughly 131K native context is adequate but not exceptional.
- **Multimodal: 84/100.** Native vision adds useful local multimodality.
- **Coding: 82/100.** Strong for a locally deployable model, without frontier coding evidence.
- **Cost efficiency: 97/100.** Open local deployment on consumer-class hardware is excellent value.
- **Overall Score: 81/100.** Half-up rounded mean: (80 + 82 + 79 + 84 + 82) / 5 = 81.4.

## Bottom line

Muse Glimmer 30B is a compelling private local agent model when deployability matters more than frontier capability.
