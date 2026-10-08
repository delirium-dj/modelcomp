# GPT-5.4 nano — findings by GPT 6 Astra

- Source: OpenAI / gpt-5.4-nano
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** GPT-5.4 nano.
- **Short description:** Small proprietary reasoning model for classification, extraction and supporting coding tasks.
- **Provider / access:** OpenAI Chat Completions and Responses APIs.
- **Release / knowledge:** March 17, 2026; August 31, 2025 cutoff. Deprecated October 1, 2026; scheduled API shutdown April 1, 2027, not already retired. [Lifecycle](https://developers.openai.com/api/docs/deprecations).
- **IDs:** `gpt-5.4-nano`, `gpt-5.4-nano-2026-03-17`; no verified free Zen ID. OpenAI free API tier unsupported.
- **Context window:** 400,000 total; 128,000 maximum output.
- **Modalities:** Text/image input, text output; function calling, structured outputs, reasoning none through xhigh. Native audio/video unsupported; hosted computer use and tool search unsupported.
- **Pricing (as of 2026-10-08):** $0.20 input / $1.25 output / $0.02 cached input per million tokens; paid API.
- **Architecture:** Proprietary; parameter count undisclosed. [Official model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-nano).

### Raw benchmarks found

OpenAI launch evaluations, **xhigh**, unless noted:
- **Agent/tool use:** Terminal-Bench **2.0** 46.3%; Toolathlon 35.5%; MCP Atlas 56.1%; tau2 telecom 92.5%. OSWorld-Verified 39% is an evaluation result, not confirmation of hosted computer-use API support.
- **Reasoning:** GPQA Diamond 82.8%; HLE 24.3% without tools, 37.7% with tools.
- **Coding:** SWE-bench Pro **Public** 52.4%, distinct from SWE-bench Verified.
- **Vision:** MMMUPro 66.1%, with Python 69.5%.
- **Long context:** MRCR v2 eight-needle 44.2% at 64k–128k and 33.1% at 128k–256k; Graphwalks BFS 73.4%, parents 50.8% at 0–128k.
- **Missing:** TB2.1, Tau3, GDPval-AA, Claw-Eval, LCR, CritPt, Omniscience, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score found in inspected sources.

[OpenAI launch tables](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/). These are vendor harness results; no independent local evaluation performed.

### Normalized scores (1–100)

- **Tool use: 65/100.** Useful tool benchmarks but modest Toolathlon and terminal performance cap broad autonomy.
- **Reasoning: 76/100.** Strong GPQA with lower tool-free HLE limits frontier reasoning.
- **Context window: 76/100.** 400k capacity supports the middle context tier; weak measured retrieval prevents its upper end.
- **Multimodal: 68/100.** Verified image understanding with text output; no native audio/video.
- **Coding: 73/100.** SWE-Pro 52.4% supports useful coding; terminal performance limits difficult workflows.
- **Cost efficiency: 95/100.** Low $0.20/$1.25 token rates; extra reasoning tokens still contribute to cost.
- **Overall Score: 72/100.** Half-up mean: (65 + 76 + 76 + 68 + 73) / 5 = 71.6. Best for bounded, economical supporting tasks.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh official documentation and primary benchmark research; scores are normalized interpretations.
- Future sources: Add a separate signed report alongside this file.

