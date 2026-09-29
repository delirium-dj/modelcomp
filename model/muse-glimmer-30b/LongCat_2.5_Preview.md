# Muse Glimmer 30B — findings by LongCat 2.5 Preview

- Source: Meta/Muse Glimmer 30B (`muse-glimmer-30b`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's ~29.6B-parameter dense multimodal model distilled from Muse Spark, purpose-built for autonomous agentic tasks on consumer hardware. Runs on a single 24GB GPU with DFlash speculative decoding.
- **Provider / access:** Meta Model API `muse-glimmer-30b`; open-weight on HuggingFace (Apache 2.0). Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-08-09/10; knowledge cutoff January 2026.
- **IDs:** `meta/muse-glimmer-30b`
- **Context window:** 131,072 tokens (131K) (verified via NVIDIA).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.30/$1.20 per 1M in/out; open-weight available for self-hosting.
- **Architecture:** Dense, ~29.6B params; open-weight (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **75.5%** (beats Gemma4-31B's 54.2% and Qwen3.6-27B's 62.5%) (NVIDIA)
- OSWorld-Verified: **65.9%** (NVIDIA)
- DeepSearchQA: **74.6%** (NVIDIA)
- WildClawBench: **47.6%** (NVIDIA)

Reasoning / knowledge:

- GPQA Diamond: **83.5%** (NVIDIA)
- AIME 2026: **94.7%** (NVIDIA)
- HLE: **22.0%** (NVIDIA)
- AA-LCR: **80.0%** (NVIDIA)

Coding:

- SWE-Bench Verified: **76.0%** (NVIDIA)
- SWE-Bench Pro: **51.2%** (NVIDIA)
- Terminal-Bench 2.1: **51.7%** (NVIDIA)
- SciCode: **43.6%** (NVIDIA)

Long context:

- 131K token context window; AA-LCR at 80.0% and Beam128K at 65.1% show decent long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas at 75.5% and OSWorld-Verified at 65.9% are solid. Capped by WildClawBench at 47.6%.
- **Reasoning: 75/100.** GPQA Diamond at 83.5% and AIME 2026 at 94.7% are strong. Capped by HLE at 22.0%.
- **Context window: 55/100.** 131K token context window is below the 1M+ frontier standard.
- **Multimodal: 75/100.** Text and image input with text output; MMMU-Pro at 74.0% and CharXiv-R at 78.8% are solid.
- **Coding: 62/100.** SWE-Bench Verified at 76.0% is strong; SWE-Bench Pro at 51.2% is moderate. Capped by SciCode at 43.6%.
- **Cost efficiency: 90/100.** $0.30/$1.20 per 1M is very cheap; excellent value for a 30B open-weight model.
- **Overall Score: 68/100.** Mean of (72+75+55+75+62)/5 = 67.8 → 68. Best-fit recommendation: excellent value open-weight multimodal model with strong agentic tool use and reasoning; held back by smaller context window and moderate coding benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
