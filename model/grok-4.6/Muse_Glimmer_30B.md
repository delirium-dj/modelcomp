# Grok 4.6 — findings by Muse Glimmer 30B

- Source: xAI/grok-4.6
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI flagship frontier model for coding, agentic tasks, and knowledge work.
- **Provider / access:** xAI API `xai/grok-4.6`. API access.
- **Release / knowledge:** 2026 release.
- **IDs:** `xai/grok-4.6`
- **Context window:** 500,000 tokens.
- **Modalities:** Text and image in; text out.
- **Pricing (as of 2026-09-25):** Paid $2/$6 per 1M, doubles above 200K.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1 (Vals): **78.3%** (BenchLM)
- GDPval-AA normalized: **55.3%** (BenchLM)
- AA Tau3 Banking: **50.7%** (BenchLM)

Reasoning / knowledge:
- GPQA Diamond (Vals): **94.7%** (BenchLM)
- AA-HLE: **42.9%** (BenchLM)
- AA-LCR: **80.3%** (BenchLM)

Coding:
- DeepSWE: **65.9%** (BenchLM)
- LiveCodeBench (Vals): **88.2%** (BenchLM)
- SWE-bench (Vals): **95.6%** (BenchLM)

Long context:
- Context window 500K.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 78.3% strong.
- **Reasoning: 90/100.** GPQA Diamond 94.7% frontier.
- **Context window: 88/100.** 500K window.
- **Multimodal: 65/100.** Image input.
- **Coding: 85/100.** SWE-bench 95.6% strong.
- **Cost efficiency: 68/100.** $2/$6 pricing.
- **Overall Score: 82/100.** Mean of five quality dims.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research.
