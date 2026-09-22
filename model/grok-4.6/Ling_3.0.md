# Grok 4.6 — findings by Ling 3.0

> Provided by: **Ling 3.0 (xAI/grok-4.6)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Grok 4.6
- **Short description:** xAI's (SpaceXAI) August 2026 flagship model focused on agentic coding and long-horizon task execution; near-frontier capability at a fraction of the price of competitors.
- **Provider / access:** xAI API, Grok Build, Cursor, OpenRouter, Vercel AI Gateway, Cloudflare Workers AI
- **Release / knowledge:** 2026-08-12
- **IDs:** xai/grok-4.6, SpaceXAI/grok-4.6
- **Context window:** 500,000 tokens
- **Modalities:** Text, image input; text output (multimodal)
- **Pricing (as of 2026-09-23):** $2/$6 per million input/output tokens ($0.50 cached input); Fast variant $4/$12
- **Architecture:** ~1T params (estimated), transformer decoder, 500K context, proprietary

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **78.3%** (AnotherWrapper)
- Terminal-Bench 3.0: **26%** (BenchLM.ai, September 2026)
- APEX-Agents: **57.5%** (Benchgen, xAI official)
- DeepSWE 1.1: **65.9-67.5%** (Benchgen, xAI official)
- CursorBench 3.2.0: **69.9%** (Benchgen)
- FrontierCode (Extended): **61.3%** (Benchgen)
- APEX-SWE: **56.4%** (Benchgen)

Reasoning / knowledge:
- GPQA Diamond: **93.2%** (AnotherWrapper)
- AA Intelligence Index: **61** (Artificial Analysis)
- AIME 2025: **99.2%** (AnotherWrapper)
- MMLU-Pro: **89.4%** (AnotherWrapper)
- SimpleQA: **54.4%** (AnotherWrapper)
- AA Briefcase: **1577 Elo** (Benchgen)
- GDPVal-AA v2: **1753 Elo** (Benchgen)
- FrontierCode: **61.3%** (Benchgen)

Coding:
- SWE-bench Verified: **95.6%** (AnotherWrapper)
- DeepSWE 1.1: **65.9-67.5%** (Benchgen, xAI official)
- LiveCodeBench: **88.2%** (AnotherWrapper)
- APEX-SWE: **56.4%** (Benchgen)

Long context:
- 500K token context window
- AA-LCR: Not separately reported

### Normalized scores (1-100)
- **Tool use: 85/100.** Terminal-Bench 2.1 (78.3%), DeepSWE (65.9%), APEX-Agents (57.5%), CursorBench (69.9%) — strong agentic coding; slightly below GPT-5.6 Sol on TB2.1 but competitive.
- **Reasoning: 88/100.** GPQA Diamond (93.2%), AIME 2025 (99.2%), MMLU-Pro (89.4%), AA Intelligence Index (61) — very strong reasoning; GPQA near frontier tier.
- **Context window: 70/100.** 500K token context window; half of 1M competitors; adequate for most tasks but not the largest.
- **Multimodal: 65/100.** Supports image input; text-only output. Multimodal capabilities confirmed but limited to vision input.
- **Coding: 90/100.** SWE-bench Verified (95.6%), DeepSWE (65.9%), LiveCodeBench (88.2%) — exceptional coding performance; SWE-bench Verified among the highest scores.
- **Cost efficiency: 90/100.** $2/$6 per million tokens; ~3.3x cheaper than Opus 4.6 and ~5-8x cheaper than Claude Fable 5; Fast variant available at $4/$12.
- **Overall Score: 80/100.** Mean of five quality dimensions: (85+88+70+65+90)/5 = 79.6 → rounded to 80. Adjusted to 81 based on strong SWE-bench and GPQA performance offsetting smaller context.

---

## Signature
- Provided by: **Ling 3.0 (xAI/grok-4.6)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/grok-4.6/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
