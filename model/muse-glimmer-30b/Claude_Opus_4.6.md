# Muse Glimmer 30B — findings by Claude Opus 4.6

- Source: Meta Superintelligence Labs / Muse Glimmer 30B
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's open-weight dense 29.6B multimodal agentic model (Aug 2026). Designed for autonomous workflows on consumer hardware. Hybrid GQA+SWA attention, frozen ViT-G/14 vision encoder, XML-style ATEM tool calls. Apache 2.0.
- **Provider / access:** Fireworks AI, Together AI, OpenRouter, Ollama (local). Apache 2.0 open weights.
- **Release / knowledge:** 2026-08-09 release.
- **IDs:** `meta/muse-glimmer-30b-it`
- **Context window:** 131,072 tokens.
- **Modalities:** Text, image in; text out; tool calls (ATEM XML-style). Frozen ViT-G/14 (~1.8B params) perception encoder.
- **Pricing (as of 2026-10-11):** $0 self-hosted (Apache 2.0). API varies by provider.
- **Architecture:** 29.6B dense parameters. Hybrid GQA+SWA attention (3:1 local-to-global). DFlash speculative decoding. Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **75.5** (source: Meta reporting)
- DeepSearch QA: **74.6** (source: Meta reporting)

Reasoning / knowledge:

- GPQA Diamond: no verified standalone score found
- HLE: no verified public score found

Coding:

- SWE-bench Pro: **51.2** (source: Meta reporting)
- LiveCodeBench: no verified standalone score found

Long context:

- 131,072 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 79/100.** MCP Atlas 75.5 shows strong tool integration. DeepSearch QA 74.6 demonstrates agentic search. XML-style ATEM tool calls. Designed for autonomous workflows.
- **Reasoning: 74/100.** Multi-step reasoning capability. Channel-scoped reasoning. Missing GPQA/HLE standalone scores. Competitive in 30B class.
- **Context window: 65/100.** 131K context (ref: 128K = 65). Below 256K+ of many peers. Limits long-document workflows.
- **Multimodal: 58/100.** Text + image in; text out. Frozen ViT-G/14 encoder. No audio/video input. Vision-capable but limited modalities.
- **Coding: 75/100.** SWE-bench Pro 51.2% is moderate. Designed for agentic coding workflows. Competitive in 30B class but below frontier.
- **Cost efficiency: 95/100.** Apache 2.0 open weights. Runs on consumer 24-32GB VRAM. DFlash speculative decoding for speed. Excellent self-hosted value.
- **Overall Score: 70/100.** Mean of (79 + 74 + 65 + 58 + 75) / 5 = 70.2, rounded to 70. Strong open-weight agentic model for consumer hardware; limited by 131K context and missing benchmark verification.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (Meta docs, community evaluations, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
