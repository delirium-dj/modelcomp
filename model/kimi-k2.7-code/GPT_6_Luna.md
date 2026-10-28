# Kimi K2.7 Code — findings by GPT-6 Luna

- Source: Moonshot AI/Kimi K2.7 Code (`kimi-k2.7-code`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's open-weight agentic coding model, tuned for long-horizon software engineering and coding workflows. Moonshot reports around 30% fewer reasoning tokens than K2.6 on comparable tasks.
- **Provider / access:** Moonshot API (`kimi-k2.7-code`), Kimi Code products, and downloadable Hugging Face weights. API supports OpenAI- and Anthropic-compatible interfaces.
- **Release / knowledge:** Announced 2026-10-08; knowledge cutoff not verified.
- **IDs:** `moonshotai/Kimi-K2.7-Code` (weights); API `kimi-k2.7-code`. The `-highspeed` route is a serving profile of the same weights and is not treated as a separate model.
- **Context window:** 262,144 tokens; Moonshot API documents up to 229,376 input and 16,384 output tokens.
- **Modalities:** Text, image, and video input; text output; reasoning and tool calling supported. Specific provider implementations may expose different modality limits.
- **Pricing (as of 2026-10-28):** Moonshot API: $0.95 per 1M cache-miss input, $0.19 cache-hit input, and $4.00 output. Self-hosting costs depend on hardware.
- **Architecture:** 1T total / 32B active MoE parameters, 61 layers, 384 experts with 8 selected per token, MLA attention, and a 400M MoonViT vision encoder. Hugging Face lists a modified MIT license.

### Raw benchmarks found

Moonshot's model card reports the following results for K2.7 Code, tested through Kimi Code CLI with thinking enabled at temperature 1.0, top-p 0.95, and 262,144-token context. These are publisher-reported results.

Agent / tool use:

- Kimi Claw 24/7 Bench: **46.9** (average pass rate across 3 runs).
- MCP Atlas: **76.0** (100-call budget; averaged over 3 runs).
- MCP Mark Verified: **81.1** (100-step budget; averaged over 3 runs).

Reasoning / knowledge:

- No exact GPQA Diamond, HLE, or Artificial Analysis Intelligence Index score was verified in Moonshot's model card.

Coding:

- Kimi Code Bench v2: **62.0**.
- Program Bench: **53.6**.
- MLS Bench Lite: **35.1**.

Long context:

- 262,144-token context documented; no MRCR/RULER/GraphWalks retrieval score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** MCP Atlas 76.0 and MCP Mark Verified 81.1 are strong; Kimi Claw shows useful long-horizon performance, but all three results are vendor-reported.
- **Reasoning: 70/100.** No verified general reasoning benchmark was located, so a frontier score is not warranted despite the model's thinking mode.
- **Context window: 80/100.** 262K capacity is substantial, but no retrieval benchmark validates accuracy at that length.
- **Multimodal: 75/100.** Image and video inputs are documented; output is text and provider modality support can vary.
- **Coding: 87/100.** Strong vendor-reported results on Kimi Code Bench v2 and Program Bench, plus improvement over K2.6; capped because the principal coding benchmark is internal.
- **Cost efficiency: 80/100.** $0.95/$4 per million tokens is moderate, and cache hits are inexpensive; self-hosted cost is hardware-dependent.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions; a good specialist for coding agents and tool execution, with limited independent general-reasoning evidence.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public web research; benchmark scores retain Moonshot's named harnesses and test settings. Normalized scores are independent interpretations, not official ratings.
- Sources: [Moonshot K2.7 Code model card](https://huggingface.co/moonshotai/Kimi-K2.7-Code); [Kimi.ai model and benchmark announcement](https://www.kimi.ai/resources/kimi-k2-7-code); [Moonshot API pricing and context documentation](https://platform.moonshot.ai/docs/pricing).
