# Claude Opus 4.6 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-opus-4.6
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic flagship reasoning-capable model with thinking capabilities for complex multi-step tasks.
- **Provider / access:** Anthropic API `anthropic/claude-opus-4.6`. API access.
- **Release / knowledge:** 2026 release.
- **IDs:** `anthropic/claude-opus-4.6`
- **Context window:** 1,000,000 tokens.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-09-25):** Paid tier pricing.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **65.4%** (BenchLM)
- OSWorld-Verified: **72.7%** (BenchLM)
- Claw-Eval: **70.4%** (BenchLM)
- τ²-bench: **84.8%** (BenchLM)

Reasoning / knowledge:
- GPQA: **91.3%** (BenchLM)
- GPQA-D: **89.2%** (BenchLM)
- HLE: **53%** (BenchLM)
- AA-LCR: **67.0%** (BenchLM)

Coding:
- SWE-bench Verified: **80.8%** (BenchLM)
- SWE-bench Pro: **53.4%** (BenchLM)
- LiveCodeBench Pro: **70.7%** (BenchLM)

Long context:
- Context window 1M reported; no long-context retrieval benchmark published.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.0 65.4% and OSWorld 72.7% strong agentic.
- **Reasoning: 88/100.** GPQA 91.3% and GPQA-D 89.2% frontier.
- **Context window: 95/100.** 1M window.
- **Multimodal: 70/100.** Image input supported.
- **Coding: 80/100.** SWE-bench Verified 80.8% strong.
- **Cost efficiency: 65/100.** Paid tier pricing.
- **Overall Score: 83/100.** Mean of five quality dims.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research.
