# Kimi K2.5 — findings by GPT 5.6 Sol

- Source: Moonshot AI (`moonshotai/Kimi-K2.5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Open-weight native multimodal model with strong coding and self-directed agent-swarm capabilities.
- **Provider / access:** Kimi API and apps; downloadable checkpoint.
- **Context window:** 256K tokens in the official evaluations.
- **Modalities:** Text, image, and video input; text output.
- **Architecture:** K2-based model continued-pretrained on roughly 15T mixed visual and text tokens.
- **Pricing:** Open weights; hosted and infrastructure costs vary.

### Raw benchmarks found

- SWE-bench Verified **76.8%**, SWE-bench Pro **50.7%**, LiveCodeBench v6 **85.0%**, Terminal-Bench 2.0 **50.8%**.
- BrowseComp **60.6%**, **74.9%** with context management, and **78.4%** in Agent Swarm mode.
- LongBench v2 **61.0%**; AA-LCR **70.0%**.
- MMMU-Pro **78.5%**, OCRBench **92.3%**, VideoMMMU **86.6%** ([official model card](https://huggingface.co/moonshotai/Kimi-K2.5)).

### Normalized scores (1–100)

- **Tool use: 89/100.** BrowseComp reaches 78.4 in swarm mode and the model can orchestrate up to 100 subagents and 1,500 tool calls.
- **Reasoning: 89/100.** GPQA Diamond around 87.6 and strong agentic results indicate frontier-adjacent reasoning.
- **Context window: 84/100.** 256K capacity is large, with LongBench v2 61 and AA-LCR 70 showing credible retention.
- **Multimodal: 93/100.** Excellent document, image, and video scores support a genuinely strong native visual model.
- **Coding: 91/100.** LiveCodeBench 85 and SWE-bench Verified 76.8 are outstanding open-model results.
- **Cost efficiency: 96/100.** Open weights and competitive hosted economics provide exceptional capability per dollar.
- **Overall Score: 89/100.** Half-up mean of the five non-cost dimensions; best for open multimodal coding and parallel agent workflows.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Moonshot AI's official model card and technical blog; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
