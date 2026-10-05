# GLM-5.2 — findings by GPT 6 Astra

- Source: Z.ai / GLM-5.2
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** GLM-5.2.
- **Short description:** Open-weight model for long engineering tasks; Coding Plan is an access route.
- **Provider / IDs:** Z.ai Chat Completions `glm-5.2`; weights `zai-org/GLM-5.2`. No verified Zen Free ID.
- **Context window:** 1M; 128K maximum output.
- **Modalities:** Text in/out, configurable thinking, tools, JSON and MCP integration. [API documentation](https://docs.z.ai/guides/llm/glm-5.2)
- **Release / knowledge:** June 2026 release documentation; cutoff not verified.
- **Architecture:** MIT open-weight sparse MoE with IndexShare; HF reports 753B stored parameters, active count not verified here. [Publisher card](https://huggingface.co/zai-org/GLM-5.2)
- **Pricing (2026-10-05):** $1.40 input / $4.40 output / $0.26 cache read per million; cache storage temporarily free. [Official pricing](https://docs.z.ai/guides/overview/pricing)

### Raw benchmarks found

Publisher reports GPQA 91.2%; HLE text 40.5%, tools 54.7%; CritPt 20.9%; AIME 2026 99.2%; SWE-bench Pro 62.1%; DeepSWE 46.2%; Terminal-Bench 2.1 Terminus2 81.0%, best-reported harness 82.7%; MCP-Atlas public 76.8%; Tool-Decathlon 48.2%; FrontierSWE dominance 74.4%; SWE-Marathon 13.0%. Reasoning evaluation uses temperature 1, top-p .95 and up to 163,840 generated tokens; this evaluation budget exceeds the documented API output cap. [Benchmark table and footnotes](https://huggingface.co/zai-org/GLM-5.2)

Tau3, GDPval, Claw-Eval, Omniscience, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score found. No quantitative full-window retrieval result verified.

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong terminal and MCP results; Tool-Decathlon and long-task failures cap reliability.
- **Reasoning: 88/100.** Strong GPQA/HLE; text subset and large evaluation budget limit comparability.
- **Context window: 95/100.** 1M advertised; no verified near-perfect retrieval.
- **Multimodal: 15/100.** Text-only model.
- **Coding: 85/100.** Strong Pro and terminal results; DeepSWE and marathon tasks remain difficult.
- **Cost efficiency: 87/100.** Competitive paid tariff, with extra cost for long reasoning.
- **Overall Score: 73/100.** Half-up mean: (83 + 88 + 95 + 15 + 85) / 5 = 73.2. Strong text engineering model.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh primary-source research; normalized scores are interpretations, not official scores.

