# Kimi K2.7 Code Highspeed — findings by Qwen 3.7 Plus
- Source: Moonshot AI/Kimi K2.7 Code Highspeed (`opencode/kimi-k2.7-code-highspeed`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** Moonshot AI's June 2026 high-speed serving tier of Kimi K2.7 Code — identical open-weights coding-specialized 1T/32B MoE model at ~180 tok/s (peaking 260 tok/s for short contexts) for 2x the base rate. Achieves 62.0% on Kimi Code Bench v2, 53.6% on Program Bench, 35.1% on MLS Bench Lite, 81.1% on MCP Mark Verified, 76.0% on MCP Atlas, and 46.9% on Kimi Claw 24/7 Bench. 256K context window. 30% fewer thinking tokens than K2.6. Native multimodal (text, image, video in). Always-on thinking mode. Open weights on Hugging Face.
- **Provider / access:** Moonshot AI (Kimi API, OpenRouter). Open weights.
- **Release / knowledge:** June 12, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/kimi-k2.7-code-highspeed`
- **Context window:** 262,144 tokens (256K); 32,768 max output
- **Modalities:** Text, image, video in; text out
- **Pricing:** $1.90 in / $8.00 out per 1M; $0.38 cached input

### Raw benchmarks found

Agent / tool use: Kimi Claw 24/7 Bench 46.9% · MCP Atlas 76.0% · MCP Mark Verified 81.1%.

Reasoning / knowledge: Internal benchmarks only (Moonshot). Compared against GPT-5.5 and Claude Opus 4.8 on coding/agent tasks. No standard reasoning benchmarks (GPQA, MMLU-Pro, HLE) reported.

Coding: Kimi Code Bench v2 62.0% · Program Bench 53.6% · MLS Bench Lite 35.1%. vs GPT-5.5 (69.0/69.1/35.5) and Claude Opus 4.8 (67.4/63.8/42.8).

Multimodal: Native video ingestion with temporal analysis and clip extraction. Images (PNG, JPEG, WebP, GIF) and video (MP4, MOV, AVI) supported via custom tools. No standard multimodal benchmarks reported.

Long context: 256K native context. Designed for long-horizon coding — 4,000+ tool call sequences and 12+ hours of continuous execution.

### Normalized scores (1–100)

- **Tool use: 60/100.** MCP Mark Verified 81.1% and MCP Atlas 76.0% are strong. Kimi Claw 24/7 Bench 46.9% is moderate. Designed for agentic coding workflows with extensive tool use.
- **Reasoning: 50/100.** No standard reasoning benchmarks reported. Coding-optimized model with always-on thinking mode. 30% fewer thinking tokens than K2.6 shows efficiency gains. General reasoning capability inferred from coding performance.
- **Context window: 65/100.** 256K context is good. Designed for long-horizon coding (4,000+ tool calls, 12+ hours). 32K max output is a limitation.
- **Multimodal: 50/100.** Native video ingestion and image support is unique for a coding model. No standard multimodal benchmarks reported. MoonViT 400M visual encoder.
- **Coding: 62/100.** Kimi Code Bench v2 62.0% is strong (vs GPT-5.5 69.0, Claude Opus 4.8 67.4). Program Bench 53.6% is moderate (vs GPT-5.5 69.1, Claude Opus 4.8 63.8). MLS Bench Lite 35.1% is modest (vs GPT-5.5 35.5, Claude Opus 4.8 42.8). Competitive but below top-tier coding models.
- **Cost efficiency: 50/100.** $1.90/$8.00 per 1M is 2x the base Kimi K2.7 Code rate for the highspeed tier (~180 tok/s). Open weights available for self-hosting. 30% fewer thinking tokens reduces effective cost.
- **Overall Score: 57/100.** Mean of Tool (60) + Reasoning (50) + Context (65) + Multimodal (50) + Coding (62) = 287/5 = 57.4. Rounded to 57. The highspeed tier offers identical capability to K2.7 Code at 2x price for faster interactive coding, but lacks standard reasoning/multimodal benchmarks and coding scores are below GPT-5.5 and Claude Opus 4.8.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
