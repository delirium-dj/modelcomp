# Solar Pro 4 — findings by GPT 6 Astra

- Source: Upstage / Solar Pro 4
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Solar Pro 4
- **Short description:** Commercial text model for document workflows and agents; distinct from open-weight Solar Open 2.
- **Provider / access:** Upstage Console API, with Chat Completions and an OpenAI-compatible Responses API; OpenRouter routing also available. [Responses documentation](https://console.upstage.ai/api/responses)
- **Release / knowledge:** Version release August 6, 2026; public announcement August 11; training cutoff February 2026.
- **IDs:** Pinned `solar-pro4-260806`, alias `solar-pro4`; OpenRouter `upstage/solar-pro4`. No verified Zen Free ID.
- **Context window:** 512K; maximum output 128K.
- **Modalities:** Text input/output; English, Korean and Japanese; reasoning, tools and structured outputs. No native image/audio/video support verified.
- **Pricing (as of 2026-10-08):** Standard API $0.30 input / $1.20 output / $0.06 cached input per million tokens. Free browser trial does not mean free API inference.
- **Architecture:** Proprietary; parameter counts undisclosed. Tokenizer publication is not a weight release. [Official specifications, versions and pricing](https://console.upstage.ai/docs/models/solar-pro-4), [tokenizer repository](https://huggingface.co/upstage/solar-pro4-tokenizer)

### Raw benchmarks found

[Upstage's August announcement and benchmark table](https://www.upstage.ai/blog/en/solar-pro-4):

- Agent/tool use: Terminal-Bench **2.1 57.0%**, Tau3-Banking **23.0%**; publisher-run BrowseComp **49.2%**, MCP-Atlas **61.4%**, APEX-Agents **18.7%**.
- GDPval-AA v2: **38.8** on the publisher's displayed scale. The table does not label this as Elo; no Elo conversion is assumed.
- Reasoning: GPQA Diamond **89.0%**; publisher-run MMLU-Pro **86.3%**, AIME 2026 **95.3%**.
- Coding: SWE-bench Verified **70.6%** with OpenHands; LiveCodeBench **87.8%**, version not specified.
- Long context: AA-LCR **71.0%**; no full-window MRCR/RULER/GraphWalks score verified.
- Unstarred results are attributed by Upstage to Artificial Analysis as of August, with public listing then forthcoming; starred results are in-house. They are reported here as publisher-sourced, not independently revalidated AA measurements. Complete sampling settings and ranks unverified.
- HLE, MLCR, CritPt, Omniscience, Intelligence Index, Claw, Toolathon, SWE Atlas, SWE-Pro, SciCode, Vibe Code Bench and DeepSWE: no verified public score found.
- Launch-discount language expired in September; the price assessment uses the current developer specification above.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal and banking results fit the upper middle tier; cross-domain consistency remains limited.
- **Reasoning: 83/100.** Strong science and document reasoning, without corroborating frontier HLE/physics evidence.
- **Context window: 88/100.** Published capacity fits the 500K tier; document evidence helps, but full-window retrieval is unverified.
- **Multimodal: 15/100.** Verified text-only interface; document processing does not imply native vision.
- **Coding: 76/100.** Useful code-generation and repository evidence; older or unspecified suites and missing scientific coding cap confidence.
- **Cost efficiency: 95/100.** Low paid API prices; agent retries and reasoning tokens still contribute to total cost.
- **Overall Score: 66/100.** Half-up mean: 330 / 5 = 66. Suitable for economical multilingual document agents.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh primary-source web research; normalized scores are interpretations, not official vendor scores.
- Future sources: add separate signed files using the same headings.

