# GLM-5.3-Flash — findings by GPT-6.1 Terra

- Source: Z.ai / GLM-5.3-Flash
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.ai's open-weight multimodal model for coding, agents and visual workflows. Z.ai identifies the earlier `ox-alpha` test name as this model; that alias is not a separate research subject.
- **Provider / access:** Z.ai Chat Completions `glm-5.3-flash`, OpenRouter `z-ai/glm-5.3-flash`, and weights `zai-org/GLM-5.3-Flash` ([Z.ai](https://docs.z.ai/guides/llm/glm-5.3-flash)).
- **Release / knowledge:** Released 2026-08-26 per [Vals](https://www.vals.ai/models/zai_glm-5.3-flash); knowledge cutoff not verified.
- **IDs:** `glm-5.3-flash`; `ox-alpha` is a revealed test alias and measurements under it must remain labeled as such. No current free API route assumed.
- **Context window:** 1M context and 128K maximum output per Z.ai.
- **Modalities:** Text, image, video and file input; text output. Reasoning and function calling supported.
- **Pricing (2026-11-01):** Vals lists $0.07 input / $0.25 output per million for its evaluated route; OpenRouter EU lists $0.19/$0.60 for Inceptron. Provider rates vary.
- **Architecture:** 320B total / 18B active hybrid-attention MoE; open weights under MIT per [model card](https://huggingface.co/zai-org/GLM-5.3-Flash).

### Raw benchmarks found

Agent / tool use:

- Vendor model-card evaluation records Terminal-Bench 2.1 **84.3%**; Z.ai reports AutomationBench **48.8%** ([model card](https://huggingface.co/zai-org/GLM-5.3-Flash); [Z.ai](https://docs.z.ai/guides/llm/glm-5.3-flash)).
- Vals Terminal-Bench 4.0 **37.37% ± 2.67** and Vals Index **50.86% ± 1.25** ([Vals](https://www.vals.ai/models/zai_glm-5.3-flash)); benchmark versions differ.
- Tau2-Bench and MCP-Atlas: no exact-model score verified here.

Reasoning / knowledge:

- Vals GPQA Diamond **86.36% ± 2.13** and ProofBench v1.1 **21.00% ± 4.09** ([Vals](https://www.vals.ai/models/zai_glm-5.3-flash)).
- HLE and CritPt: no exact numerical score verified in the sources used here.

Coding:

- Z.ai DeepSWE v1.1 **63.4%**; Vals SWE-bench **92.00% ± 1.21**, Vibe Code Bench v1.1 **30.76% ± 5.28**, Code Migration v1.1 **51.65% ± 2.99** ([Z.ai](https://docs.z.ai/guides/llm/glm-5.3-flash); [Vals](https://www.vals.ai/models/zai_glm-5.3-flash)).
- SciCode: no verified score found here.

Long context:

- Z.ai documents 1M context; no 512K+ MRCR or RULER retrieval percentage verified here.

### Normalized scores (1–100)

- **Tool use: 90/100.** Vendor terminal and automation results and Vals terminal evaluation support strong tool use, with substantial task variation.
- **Reasoning: 82/100.** GPQA is strong but independent ProofBench is much lower.
- **Context window: 95/100.** The documented 1M window earns the top size tier; no qualifying 98%+ long-range retrieval result verified.
- **Multimodal: 85/100.** Image, video and file input are documented; no audio or non-text output is credited.
- **Coding: 88/100.** DeepSWE and SWE-bench are strong, tempered by much lower Vals Vibe Code and moderate migration results.
- **Cost efficiency: 96/100.** Low paid inference rates and MIT open weights offer good value, subject to hosting cost and availability.
- **Overall Score: 88/100.** (90 + 82 + 95 + 85 + 88) / 5 = 88; useful for inexpensive multimodal coding with task-specific validation.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Distinct benchmark versions and measured identities are preserved.
- Reference URLs:
  - [Z.ai model documentation](https://docs.z.ai/guides/llm/glm-5.3-flash)
  - [Z.ai open model card and benchmark records](https://huggingface.co/zai-org/GLM-5.3-Flash)
  - [Vals independent evaluations](https://www.vals.ai/models/zai_glm-5.3-flash)
  - [OpenRouter provider route](https://openrouter.ai/z-ai/glm-5.3-flash)
- Future sources: add a new file next to this one using the same headings.
