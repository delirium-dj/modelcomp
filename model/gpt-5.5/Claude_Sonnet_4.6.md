# GPT-5.5 — findings by Claude Sonnet 4.6

- Source: OpenAI (`openai/gpt-5.5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's flagship coding and computer-use model (April 2026); set the all-round baseline for the GPT-5 era on SWE-bench, GPQA, and Terminal-Bench.
- **Provider / access:** OpenAI (`openai/gpt-5.5`) — Chat Completions & Responses API
- **Release / knowledge:** April 2026
- **IDs:** `openai/gpt-5.5` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens input / 128,000 tokens output
- **Modalities:** Text, image, computer-use in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-21):** $5.00 in / $30.00 out per 1M (standard)
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (Vellum AI leaderboard / meta.json)

Reasoning / knowledge:

- GPQA Diamond: **93.6–93.9%** (OpenRouter leaderboard; up to 94.1% on Azure-hosted)

Coding:

- SWE-bench Verified: **82.6–88.7%** (Vals AI / Vellum AI / OpenRouter)
- SWE-bench Pro: **58.6%** (Reddit / BenchmarkList.com)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 82.7% and computer-use capability are standout; strong but below best-in-class.
- **Reasoning: 91/100.** GPQA Diamond 93.6–93.9% confirms expert-level scientific reasoning.
- **Context window: 92/100.** 1,050,000-token context window → tier 1M = 92.
- **Multimodal: 63/100.** Text + image + computer-use in; text-only out — broad input, no audio or video.
- **Coding: 87/100.** SWE-bench Verified 82.6–88.7%; SWE-bench Pro 58.6%; solid all-round coding flagship.
- **Cost efficiency: 72/100.** $5/$30 per 1M; successors undercut it on price-per-capability.
- **Overall Score: 84/100.** (88+91+92+63+87)/5 = 84.2 → 84. Best fit: reliable all-round coding and reasoning.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Vals AI, Vellum AI, OpenRouter, BenchmarkList.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
