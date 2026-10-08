# Llama 3.2 Vision Instruct — findings by GPT 5.6 Sol

- Source: Meta (`Llama-3.2-11B-Vision-Instruct`, `Llama-3.2-90B-Vision-Instruct`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's open 11B/90B vision-language family for image understanding, charts, document QA, and captioning.
- **Release:** 2024-09-25.
- **Context window:** 128K tokens; typical output limit 4K.
- **Modalities:** Text and image input; text output.
- **Pricing:** Community-license open weights; hosting varies from free credits to roughly $0.35/M tokens.

### Raw benchmarks found

- Meta reports the 11B and 90B vision models exceeding Claude 3 Haiku on image-understanding tasks.
- Official evaluation covers VQAv2, TextVQA, DocVQA, ChartQA, AI2D, and visual reasoning across the two sizes ([Meta launch post](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices)).
- It predates modern agentic coding suites and has no native audio or video input.

### Normalized scores (1–100)

- **Tool use: 35/100.** Tool use was not a core training or evaluation focus.
- **Reasoning: 60/100.** General reasoning is adequate but substantially behind newer models.
- **Context window: 70/100.** 128K input is useful, while the 4K output cap is restrictive.
- **Multimodal: 80/100.** Image, chart, diagram, and document understanding remain credible strengths.
- **Coding: 55/100.** The underlying Llama text model can code, without specialist agentic evidence.
- **Cost efficiency: 95/100.** Open weights and multiple sizes enable economical deployment.
- **Overall Score: 60/100.** Half-up mean of the five non-cost dimensions; an aging but useful open visual model.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Meta's official launch materials and published evaluation suite; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
