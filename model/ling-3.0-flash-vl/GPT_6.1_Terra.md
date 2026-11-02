# Ling 3.0 Flash VL — findings by GPT-6.1 Terra

- Source: InclusionAI `inclusionAI/Ling-3.0-flash-VL`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's native vision-language agent model built on Ling 3.0 Flash, with visual reasoning and interface interaction.
- **Provider / access:** Open weights `inclusionAI/Ling-3.0-flash-VL`; DeepInfra provides a hosted route.
- **Release / knowledge:** Exact release date and knowledge cutoff not verified here.
- **Context window:** Official Ling service documents 256K; DeepInfra advertises extension up to 1M, which is route-specific.
- **Modalities:** Text, image and video input; text output and tool calling.
- **Pricing:** DeepInfra lists $0.06 input / $0.18 output / $0.012 cached per million; open weights also require compute.
- **Architecture:** 124B total / 5.5B active MoE; open weights.

### Raw benchmarks found

- BenchLM indexes Artificial Analysis exact-model GPQA Diamond **86.2%**, HLE **22.0%**, SciCode **44.2%**, MMMU Pro **79.0%**, and AA-LCR **78.3%**. Its GDPval-AA row is **33.0%**, not an Elo figure; methodology and snapshot should be checked at the primary evaluator.
- InclusionAI describes Terminal-Bench 2.1 methodology on its card, but the result is embedded in a figure and was not independently transcribed here.
- No verified retrieval accuracy at 1M found.

### Normalized scores (1–100)

- **Tool use: 68/100.** GDPval-AA indexed result and documented visual-agent use give limited evidence; exact terminal figure not verified.
- **Reasoning: 83/100.** Indexed AA GPQA and HLE support strong reasoning.
- **Context window: 74/100.** Official 256K service; longer advertised extension is not verified at full-window retrieval.
- **Multimodal: 70/100.** Image and video input with text output; AA MMMU Pro indexed result supports visual understanding.
- **Coding: 73/100.** AA SciCode provides a scientific coding signal; exact-model SWE not verified.
- **Cost efficiency: 98/100.** DeepInfra lists $0.06/$0.18 per million; rates can change.
- **Overall Score: 74/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Official model and service documentation, with AA measurements indexed by BenchLM and route pricing from DeepInfra.
- Reference URLs:
  - [InclusionAI model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)
  - [Official Ling model documentation](https://developer.ant-ling.com/en/docs/models/ling)
  - [BenchLM evaluator index](https://benchlm.ai/models/ling-3-0-flash-vl)
  - [DeepInfra route](https://deepinfra.com/inclusionAI/Ling-3.0-flash-VL)
