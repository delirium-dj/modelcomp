# Xing4.0-29B-A4B — findings by GPT 6 Astra

- Source: China Telecom / Xing4.0-29B-A4B
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Identity:** Successor to the TeleChat series; 29B total/4B active text MoE, 40 layers, MLA, mHC and MTP, 64 routed experts/four active plus one shared. Apache 2.0. Trained on Ascend NPUs using MindSpore. [Official checkpoint](https://huggingface.co/Xingchen-AGI/Xing4.0-29B-A4B/raw/main/README.md).
- **Release / cutoff:** Public reporting exists in early October 2026; October 16 catalog dates describe gateway availability, not necessarily initial release. Knowledge cutoff unverified.
- **Access:** Weights `Xingchen-AGI/Xing4.0-29B-A4B`; local OpenAI-compatible serving; OpenRouter `xingchen-agi/xing4.0-29b-a4b:free`. No distinct Zen Free ID established.
- **Context / output:** 256K native, extensible to 512K per publisher. Live [OpenRouter catalog](https://openrouter.ai/api/v1/models) verifies 262,144 context and 235,929 maximum completion tokens. Shared window still constrains combined input/output.
- **Modalities / tools:** Text in/out, thinking toggle, function calling and structured responses. No native image/audio/video support established.
- **Pricing (2026-10-27):** Live OpenRouter catalog lists zero prompt/completion cost for the exact `:free` route. NanoGPT is a separate paid route; its full tariff was not recovered. Local weights require compute.

### Raw benchmarks

All following measurements are **publisher-run**, from the checkpoint card:

| Benchmark | Score | Setup |
|---|---:|---|
| SWE-bench Verified | 75.00 | SWE-agent, 210K context |
| SWE-bench Multilingual | 66.00 | SWE-agent, 210K context |
| Terminal-Bench 2.1 | 57.50 | Terminus-2, 64K output, 24-hour timeout, three-run mean |
| Claw-Eval | 76.55 | Official harness, 16,384 output, 256K context, three runs |
| Tau3-Bench | 64.63 | Official harness, 16,384 output, average pass^1 over four runs |
| DeepresearchBII | 60.80 | OpenCode, Exa MCP, 32,768 output, 256K context |
| AIME 2026 | 90.00 | 131,072 output, five-run mean |
| IFBench | 69.67 | 81,920 output |
| AA.LCR | 61.00 | 65,536 output, three-run mean |

The Tau3 domain is not specified in the table; do not silently relabel it as an AA banking result. AA.LCR names a benchmark, not an independent Artificial Analysis run. Temperature is 1.0 for SWE, AIME and LCR; 0.8 for terminal, tools and IFBench; top-p 0.95/repetition penalty 1.05 throughout.

### Independent coverage and reconciliation

Five targeted DuckDuckGo searches located [MindStudio](https://www.mindstudio.ai/blog/xing4-29b-a4b-benchmarks), [AI Modeling](https://www.aimodeling.com/en/news/slug/xing4-29b-a4b-ascend-moe) and other reviews repeating the vendor table. No independent numerical reproduction was established. No verified exact-model GPQA, HLE, CritPt, SciCode, MCP-Atlas, Toolathon or DeepSWE result found. AIME supports mathematical reasoning but not broad factual reliability. No high-recall 512K retrieval established.

An aggregator calls this model closed, contradicted by the primary weights and Apache license. Another advertises free access correctly but supplies an unexplained composite rating; that rating is not treated as a benchmark. The OpenRouter page's generated API guide drops `:free` in example requests, while the live catalog explicitly retains it; the live ID controls this report. Terminal's 24-hour timeout and large output budgets materially affect comparisons. Official 96% training-throughput improvement is relative to its own baseline, not a measured inference-speed or cost advantage.

### Normalized scores (1–100)

- **Tool use: 70/100.** Claw 76.55, Tau3 64.63 and terminal 57.5 support practical agents; vendor-only evidence and generous budgets cap confidence.
- **Reasoning: 68/100.** AIME 90 and IFBench 69.67 support mathematics/instructions, but no broad independent knowledge evaluation was recovered.
- **Context window: 73/100.** Native 262K and LCR 61; unverified 512K extension does not earn the higher capacity tier.
- **Multimodal: 15/100.** Native text-only model.
- **Coding: 75/100.** SWE Verified 75, multilingual 66 and terminal 57.5 support capable engineering with harness and replication caveats.
- **Cost efficiency: 100/100.** Exact live OpenRouter free route has zero input/output charges; availability and local hardware costs remain separate.
- **Overall Score: 60/100.** (70 + 68 + 73 + 15 + 75) / 5 = 60.2 → 60; compact text engineering model with limited independent validation.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Five targeted web searches, primary checkpoint and live provider-catalog verification; normalized scores are interpretations, not official scores.
