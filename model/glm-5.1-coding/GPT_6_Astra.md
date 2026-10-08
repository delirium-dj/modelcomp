# GLM-5.1 Coding — findings by GPT 6 Astra

- Source: Z.AI / GLM-5.1
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** GLM-5.1 Coding
- **Short description:** This folder is interpreted as GLM-5.1 used for coding, not independently verified weights named GLM-5.1-Coding. Scores describe the historical GLM-5.1 model. The current Coding Plan redirects GLM-5.1 requests to GLM-5.3, so these scores do not describe that live redirect. [Current routing policy](https://docs.z.ai/devpack/overview)
- **Provider / access:** Z.AI Chat Completions, `https://api.z.ai/api/paas/v4/chat/completions`; model `glm-5.1`. [API guide](https://docs.z.ai/guides/llm/glm-5.1)
- **Release / knowledge:** Available by April 2026; exact initial release and knowledge cutoff not verified. [Host record](https://stats.opencode.ai/data/zhipuai/glm-5-1)
- **IDs:** `glm-5.1`, weights `zai-org/GLM-5.1`; no independently verified publisher API ID `glm-5.1-coding` or Zen Free variant.
- **Context window:** 200K, maximum output 128K.
- **Modalities:** Text input/output; thinking, function calls, MCP integration and structured JSON. External vision tools do not make these weights multimodal. [Model specification](https://docs.z.ai/guides/llm/glm-5.1)
- **Pricing (as of 2026-10-08):** Standard GLM-5.1 API: $1.40 input / $4.40 output / $0.26 cached input per million tokens. Coding Plan subscription pricing is a different product. [Official prices](https://docs.z.ai/guides/overview/pricing)
- **Architecture:** Open weights; exact parameter accounting and license terms not independently resolved in this pass. [Publisher repository](https://huggingface.co/zai-org/GLM-5.1)

### Raw benchmarks found

The GLM-5.1 column of the publisher's later comparison provides historical model-specific evidence, not scores for the Coding Plan redirect. [Official benchmark table](https://z.ai/blog/glm-5.2):

- Agent/tool use: Terminal-Bench 2.1 **63.5%** with Terminus-2, **69.0%** with Claude Code; MCP-Atlas public set **71.8%**; Tool-Decathlon **40.7%**.
- Reasoning: GPQA Diamond **86.2%**, HLE **31.0%** and **52.3%** with tools; CritPt **4.6%**. HLE GLM entries are not marked as full multimodal set and should not be mixed with starred full-set competitors.
- Coding: SWE-bench Pro **58.4%**, DeepSWE **18.0%**, ProgramBench **50.9%**.
- No independent rank claimed. Harness choice changes terminal results; complete reproducibility settings were not recovered from the indexed table.
- Tau3/Tau2, GDPval-AA, Claw, Toolathon, SWE Atlas, LCR/MLCR, Intelligence Index, Omniscience, SWE-bench Verified, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score found.
- Long context: no verified full-window MRCR, RULER or GraphWalks score found.

### Normalized scores (1–100)

- **Tool use: 77/100.** Good terminal and MCP evidence; no current frontier agent-suite corroboration.
- **Reasoning: 80/100.** Strong science and HLE, capped by weak measured research-physics performance.
- **Context window: 70/100.** Published capacity meets the 200K anchor; retrieval fidelity remains unverified.
- **Multimodal: 15/100.** Text-only model; external perception tools are separate.
- **Coding: 79/100.** Strong SWE-Pro but substantially weaker long-horizon DeepSWE evidence.
- **Cost efficiency: 87/100.** Applies to verified standard API prices, not a subscription or redirected model.
- **Overall Score: 64/100.** Half-up mean: 321 / 5 = 64.2. Historical text coding model; verify actual routing before deployment.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh primary-source research; folder identity interpretation and current redirect stated explicitly. Normalized scores are not official vendor scores.
- Future sources: add separate signed files using the same headings.

