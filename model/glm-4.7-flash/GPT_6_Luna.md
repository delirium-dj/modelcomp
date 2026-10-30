# GLM 4.7 Flash — findings by GPT-6 Luna

- Source: Z.ai / GLM-4.7-Flash
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

GLM-4.7-Flash is Z.ai's lightweight reasoning and coding model, released January 19, 2026 according to [BenchmarkList's linked provider record](https://benchmarklist.com/models/z-ai-glm-4.7-flash/). Knowledge cutoff is unverified. The [primary checkpoint](https://huggingface.co/zai-org/GLM-4.7-Flash) specifies a **30B-total/3B-active MoE**, MIT licensed; secondary descriptions calling it dense are incorrect.

- Access: Z.ai Chat Completions API, `glm-4.7-flash`; open weights `zai-org/GLM-4.7-Flash`; third-party route `z-ai/glm-4.7-flash`. Zen Free ID not verified.
- [Official model documentation](https://docs.z.ai/guides/llm/glm-4.7) explicitly gives Flash **200K context / 128K maximum output**, text input/output, thinking, function calling and structured output. Provider-specific 128K listings are not a universal native limit. Coding visual applications does not establish image input.
- [Official pricing](https://docs.z.ai/guides/overview/pricing) lists Flash input, output, caching and cache storage as **Free**. BenchmarkList lists paid third-party hosting at **$0.06 input/$0.40 output per million tokens**. Free hosted access and MIT weights do not imply zero infrastructure costs or unlimited concurrency; no special privacy guarantee was verified.

### Raw benchmarks found

[Official checkpoint card](https://huggingface.co/zai-org/GLM-4.7-Flash/raw/main/README.md), publisher harness: AIME 2025 **91.6%**, GPQA **75.2%**, HLE **14.4%**, LiveCodeBench v6 **64.0%**, SWE-bench Verified **59.2%**, Tau2 **79.5%**, BrowseComp **42.8%**. These are Flash results, not full GLM-4.7 results from the surrounding family documentation.

The card recommends default temperature 1/top-p .95 and 131,072 new tokens; SWE/terminal evaluations use temperature .7/top-p 1 and 16,384 output; Tau2 uses temperature 0 with domain-specific prompt/fix details. Preserved thinking and the evaluation scaffold matter.

[BenchmarkList](https://benchmarklist.com/models/z-ai-glm-4.7-flash/) aggregates independent measurements: AA Tau2 Telecom **98.8%**, Terminal-Bench Hard **22.0%**, historical GDPval-AA **838 Elo**, SciCode **33.7%**, GPQA **58.1%**, CritPt **0.3%**, Omniscience **−59.33**. Its composite lists HLE **7.1%** and LCR **35.0%**, while separate rows show **7.6%** and **41.7%**. These are different snapshots, not interchangeable measurements. Neither Terminal Hard nor historical GDPval is substituted for TB2.1 or GDPval v2.1.

The same aggregator reports SWE-rebench **34.0%** (pass@5 **56.1%**, SEM **2.2**, **$0.08/problem**) and VibeCodingBench **83.83 score / 92.8% pass over 180 tasks**. VibeCodingBench is not Vals Vibe Code Bench. The publisher's Tau2 aggregate and independent telecom-only result measure different task mixtures. Independent reasoning and repository-repair results warrant a substantial discount from the strongest vendor numbers.

No verified public Flash-specific MRCR/RULER result at the advertised 200K ceiling, TB2.1, Tau3-Banking, Claw-Eval, Toolathon or MCP-Atlas score found. LCR is reasoning evidence, not proof of near-perfect full-window retrieval. No native vision/audio benchmark applies to this text-only model.

### Normalized scores (1–100)

- **Tool use: 54/100.** Strong narrow telecom/vendor Tau2 results are capped by Terminal Hard 22% and historical GDPval 838.
- **Reasoning: 63/100.** GPQA 58.1% independently versus 75.2% publisher, low independent HLE and CritPt constrain the AIME-led upside.
- **Context window: 70/100.** Official 200K tier; reliable retrieval across that entire window remains unverified.
- **Multimodal: 15/100.** Verified text-only interface.
- **Coding: 62/100.** SWE Verified 59.2% and LCB v6 64% show useful coding, with independent SWE-rebench 34% limiting agentic confidence.
- **Cost efficiency: 100/100.** Official free API tier; third-party paid deployment has separate charges.
- **Overall Score: 53/100.** Half-up mean of the five non-cost quality dimensions: (54 + 63 + 70 + 15 + 62) / 5 = 52.8, rounded to 53. Cost efficiency is excluded. Best suited to low-cost text and lightweight coding workflows.


## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Three fresh public searches, primary Z.ai documentation and the exact Hugging Face checkpoint card, reconciled against BenchmarkList. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://huggingface.co/zai-org/GLM-4.7-Flash)
  - [Source 2](https://docs.z.ai/guides/overview/pricing)
  - [Source 3](https://docs.z.ai/guides/llm/glm-4.7)
  - [Source 4](https://benchmarklist.com/models/z-ai-glm-4.7-flash/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
