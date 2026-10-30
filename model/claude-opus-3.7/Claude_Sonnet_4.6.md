# Claude Opus 3.7 — Research Notes

**Model ID:** anthropic/claude-opus-3.7  
**Context window:** 200K total  
**Modalities:** Text in/out  
**Note:** Anthropic did not publicly release a "Claude Opus 3.7" — the 3.7 generation shipped as Claude 3.7 Sonnet. This folder likely tracks a previous-gen Opus variant or an internal checkpoint. Benchmarks below apply to the Claude 3.7 / Opus class.

## Benchmarks (Claude 3.7 Sonnet class — best available proxy)

- SWE-bench Verified: ~62.3% (base) / ~70.3% (with scaffolding)
- MMLU: ~89.7%
- TAU-bench Retail: ~81.2%
- First hybrid reasoning model with extended thinking

## Scores

- **Tool use: 78/100.** TAU-bench Retail ~81.2%; extended thinking/agentic work is the key capability; 200K context supports long knowledge-work sessions; text-only input limits computer-use workflows.
- **Reasoning: 82/100.** MMLU ~89.7%; extended thinking enables hybrid step-back reasoning; strong long-horizon knowledge work and memory tasks per meta.json description.
- **Context window: 75/100.** 200K total — solid but below the 1M tier that defines current frontier models.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video inputs.
- **Coding: 76/100.** SWE-bench Verified ~62–70% depending on harness; extended thinking improves multi-step coding debugging loops.
- **Cost efficiency: 55/100.** Standard Anthropic API pricing (unspecified); previous-generation model — likely still billed at legacy Opus rates which are premium; superseded by Opus 4+ line.
- **Overall Score: 65/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (78+82+75+15+76)/5 = 65.2 ≈ 65. Previous-generation Anthropic Opus: extended thinking pioneer for long-horizon agentic work and vision/memory tasks; superseded by Opus 4.4+ with image input and stronger benchmark coverage.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
