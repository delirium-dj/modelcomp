# DeepSeek V4 Flash — findings by GPT 6 Astra

- Source: DeepSeek / DeepSeek-V4-Flash (0423)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** DeepSeek V4 Flash, original 0423 checkpoint.
- **Short description:** Open-weight text reasoning and coding model. This assessment does not transfer results from the later 0731 or V4.1 releases.
- **Provider / access / IDs:** OpenRouter Chat Completions `deepseek/deepseek-v4-flash`, currently labeled 0423. No verified Zen Free ID found. [Provider listing](https://openrouter.ai/deepseek/deepseek-v4-flash)
- **Release / knowledge:** Provider listing dated April 24, 2026; knowledge cutoff not verified. [Provider listing](https://openrouter.ai/deepseek/deepseek-v4-flash)
- **Context window:** 1,048,576 tokens on OpenRouter. Its displayed completion allowance is provider specific and does not establish an additional independent output budget. [Provider listing](https://openrouter.ai/deepseek/deepseek-v4-flash)
- **Modalities:** Text input/output, reasoning modes, tool calling and structured responses; no verified native image/audio input for this checkpoint. [Model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash), [API listing](https://openrouter.ai/deepseek/deepseek-v4-flash)
- **Pricing (2026-10-05):** Paid DeepInfra route: $0.09 input / $0.18 output / $0.018 cached input per million tokens. Other routes differ. [Provider prices](https://openrouter.ai/deepseek/deepseek-v4-flash)
- **Architecture:** MIT-licensed MoE, 284B total / 13B active parameters. [Model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)
- **Version caveat:** DeepSeek's native legacy V4 Flash alias is documented as rerouted to V4.1 Flash; native current-alias prices are therefore not used for the original checkpoint. [Native pricing and migration notice](https://api-docs.deepseek.com/quick_start/pricing/?helper=penn&method=individual)

### Raw benchmarks found

The following are publisher-reported **V4-Flash Max** results, not independent replications. [Benchmark table](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)

| Group | Benchmark | Result |
|---|---|---:|
| Agent | Terminal-Bench **2.0** | 56.9% |
| Agent | MCP-Atlas | 69.0% |
| Agent | Toolathlon | 47.8% |
| Agent | GDPval-AA | 1395 Elo |
| Agent | BrowseComp | 73.2% |
| Reasoning | GPQA Diamond | 88.1% |
| Reasoning | HLE, without / with tools | 34.8% / 45.1% |
| Coding | SWE-bench Verified / Pro / Multilingual | 79.0% / 52.6% / 73.3% |
| Coding | LiveCodeBench, version unspecified | 91.6% |
| Coding | Codeforces | 3052 rating |
| Long context | MRCR 1M, MMR | 78.7% |
| Long context | CorpusQA 1M | 60.5% |

Max reasoning requires at least 384K configured context. Terminal-Bench 2.1, Tau3/Tau2, Claw-Eval, CritPt, Omniscience, SciCode and Vibe Code Bench: no verified public score found for this checkpoint. No multimodal benchmark applies to the text-only model.

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP and multi-tool evidence is substantial; weaker terminal performance limits the interpretation.
- **Reasoning: 81/100.** Strong GPQA and HLE results, capped by vendor-only evaluation and incomplete independent coverage.
- **Context window: 95/100.** Million-token support and measured retrieval qualify for the top tier, without near-perfect recall.
- **Multimodal: 15/100.** Text-only checkpoint.
- **Coding: 79/100.** Strong repair and competitive coding results; harder SWE-Pro performance and unspecified LiveCodeBench version limit comparability.
- **Cost efficiency: 98/100.** Very inexpensive paid inference on the specified route; not a free service.
- **Overall Score: 68/100.** Half-up mean: (72 + 81 + 95 + 15 + 79) / 5 = 68.4. Best suited to inexpensive text coding and long-document agents.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh public web research; normalized scores are interpretations, not official vendor scores.
- Future sources: add a separate signed report alongside this file.
