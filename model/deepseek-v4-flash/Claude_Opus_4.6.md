# DeepSeek V4 Flash — findings by Claude Opus 4.6

- Source: DeepSeek / DeepSeek V4 Flash
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's speed-first MoE model (early-mid 2026). 284B total / ~13B active. Auto-upgraded to V4.1-Flash (552B total, ~8B input / ~16B active). Native vision via DeepSeek-ViT. 1M context with ultra-efficient KV cache (~890 bytes/token). Open weights.
- **Provider / access:** DeepSeek API, OpenRouter, Hugging Face, Ollama, LM Studio. Open weights.
- **Release / knowledge:** Early-mid 2026; V4.1-Flash upgrade Sep 2026.
- **IDs:** `deepseek/deepseek-v4-flash` (auto-routes to V4.1-Flash)
- **Context window:** 1,000,000 tokens (1M).
- **Modalities:** Text, image in; text out. Native vision (DeepSeek-ViT, 2D-RoPE). Controllable reasoning effort.
- **Pricing (as of 2026-10-13):** Very competitive (DeepSeek pricing). Self-hosted option with open weights.
- **Architecture:** V4 Flash: 284B total / ~13B active. V4.1-Flash: 552B total, asymmetric causal Encoder-Decoder (~8B input / ~16B output active). Ultra-efficient KV cache (~890 bytes/token).

### Raw benchmarks found

- DeepSWE, AutomationBench, CyberGym: "punches above weight class" (source: deepseek.com, flowtivity.ai)
- Matches Pro-tier reasoning at lower latency (source: lindy.ai)
- KV cache: ~890 bytes/token (source: deepseek.com)

### Normalized scores (1–100)

- **Tool use: 80/100.** Designed for complex agentic loops and multi-turn workflows. Strong AutomationBench results. Controllable reasoning effort.
- **Reasoning: 78/100.** Approaches Pro-tier reasoning. Controllable effort settings. Speed-optimized tradeoff. Missing GPQA standalone.
- **Context window: 92/100.** 1M verified. Ultra-efficient KV cache (890 bytes/token) makes 1M context practical. Asymmetric encoder-decoder minimizes HBM usage.
- **Multimodal: 58/100.** Text + image in; text out. Native DeepSeek-ViT. No audio/video input. Vision-only multimodal = 55–62 range.
- **Coding: 82/100.** Strong DeepSWE, CyberGym results. Trades blows with older flagship models. Speed-first but competitive coding depth.
- **Cost efficiency: 94/100.** Extremely low DeepSeek API pricing. Open weights. ~13B active = efficient self-hosting. Ultra-efficient KV cache.
- **Overall Score: 78/100.** Mean of (80 + 78 + 92 + 58 + 82) / 5 = 78.0. Exceptional efficiency model with 1M context and breakthrough KV cache engineering; limited multimodal.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (deepseek.com, openrouter.ai, morphllm.com, lindy.ai, flowtivity.ai, huggingface.co); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
