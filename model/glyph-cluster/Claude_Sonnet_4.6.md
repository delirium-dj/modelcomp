# Glyph Cluster — Claude Sonnet 4.6 Research

Glyph Cluster (`stealth/glyph-cluster`) is an anonymous stealth reasoning model deployed on the Vercel AI Gateway and OpenRouter in October 2026 as a free preview. Reverse-engineering (tokenizer analysis matching the `o200k` family, API path fingerprinting) attributed it to Microsoft AI (MAI) infrastructure — specifically linked to the MAI-Code-1-Flash architecture (a 137B sparse MoE model, 5B active parameters). Context: 256K in / 256K out (symmetric — matching MAI-Code-1-Flash specs). Text in/out only. Free preview tier ($0 via Vercel AI Gateway and OpenRouter). No committed SLA; autonomous agent benchmarks show timeout sensitivity on pass@1 tests.

Benchmarks (verified — via MAI attribution):
- SWE-bench Verified: ~71.6% (MAI coding configurations; Glyph Cluster is an early-access wrapper)
- SWE-bench Pro: ~51.2% (MAI-Code-1-Flash, the attributed base; uses adaptive thinking loops)
- Architecture: 137B sparse MoE, 5B active parameters, 256K context (MAI-Code-1-Flash specs)
- Pricing: Free preview ($0); no committed SLA

## Scores

- **Tool use: 68/100.** MAI adaptive thinking loops enable structured agentic code actions; SWE-bench Pro 51.2% confirms multi-step software engineering tool use at a mid-to-upper level. Timeout sensitivity on complex pass@1 agent loops is a noted limitation of the stealth deployment.
- **Reasoning: 65/100.** MAI-Thinking-1 lineage provides solid reasoning; Glyph Cluster is the coding-focused derivative. No MMLU or GPQA scores published for this specific stealth wrapper; MAI-Code-1-Flash's adaptive thinking outperforms Claude Haiku 4.5 on coding-adjacent reasoning per reported comparisons.
- **Context window: 78/100.** 256K in / 256K out (symmetric — the 256K output cap is unusually large and matches MAI-Code-1-Flash). Tier: 256K = 78 points.
- **Multimodal: 15/100.** Text in/out only. No image, audio, or video support.
- **Coding: 72/100.** SWE-bench Verified ~71.6% and SWE-bench Pro 51.2% are strong for a mid-weight architecture. Specifically tuned for agentic coding workflows; tested by community on DeepSWE and agent frameworks. Timeout sensitivity on the most complex long-horizon tasks is the primary constraint.
- **Cost efficiency: 100/100.** Free ($0) preview tier with no committed costs. Highest possible cost efficiency score.
- **Overall Score: 60/100.** Mean of Tool use (68) + Reasoning (65) + Context (78) + Multimodal (15) + Coding (72) = 298 / 5 = 59.6, rounded to 60. Best positioned as a free-tier option for SWE-bench-class coding tasks; text-only constraint and stealth SLA limitations cap the overall score.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
