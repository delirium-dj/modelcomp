# GPT-5.1 — findings by Claude Opus 4.6

- Source: OpenAI / GPT-5.1
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's mid-cycle GPT-5 upgrade (Nov 2025). Focused on warmer conversational tone, improved instruction following, and adaptive reasoning. Variants included Instant, Thinking, and Pro. Retired from ChatGPT Mar 2026; deprecated in favor of GPT-6 family.
- **Provider / access:** OpenAI API (`gpt-5.1`). Retired from ChatGPT 2026-03-11. Now deprecated.
- **Release / knowledge:** 2025-11-12 release; retired 2026-03-11. Succeeded by GPT-5.2, then GPT-6.
- **IDs:** `openai/gpt-5.1` (deprecated)
- **Context window:** ~200,000 tokens (estimated from GPT-5 era specs).
- **Modalities:** Text, image in; text out; tool calls; JSON mode. Variants: Instant (speed), Thinking (reasoning), Pro (quality).
- **Pricing (as of 2026-10-11):** Deprecated. Historical: moderate (between GPT-5 and GPT-5.2 pricing tiers).
- **Architecture:** Proprietary; GPT-5 series. Multiple variants for different use cases.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified standalone score found (not specialized for agentic coding like Codex variants)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (GPT-5.1 Thinking variant; source: industry reports, artificialanalysis.ai)
- HLE (Humanity's Last Exam): no verified public score found
- ARC-AGI-2: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Lite: **~36.3%** (source: SWE-bench leaderboard)
- SWE-bench Pro: no verified score (GPT-5.2 later achieved ~55.6%)
- LiveCodeBench: no verified standalone score found
- SciCode: no verified public score found

Long context:

- ~200K context window (estimated). No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 72/100.** No Terminal-Bench score. General tool calling capability present but not agentic-specialized. Succeeded quickly by Codex and GPT-5.2 variants.
- **Reasoning: 84/100.** GPQA Diamond 88.1% (Thinking variant) is strong for its era. Adaptive reasoning was a key improvement. GPT-5.2 pushed higher to 92–93%.
- **Context window: 75/100.** ~200K estimated context (ref: 200K = 75). Below the 1M standard of newer models.
- **Multimodal: 55/100.** Text + image in; text out. No audio/video input. Standard multimodal for GPT-5 era = 50–60 range.
- **Coding: 72/100.** SWE-bench Lite ~36.3% is moderate for late 2025. Not specialized for coding like Codex variants. Later surpassed significantly by GPT-5.2 and GPT-6.
- **Cost efficiency: 78/100.** Moderate pricing for its era. Now deprecated with much better successors available at similar or lower cost.
- **Overall Score: 72/100.** Mean of (72 + 84 + 75 + 55 + 72) / 5 = 71.6, rounded to 72. Solid mid-cycle upgrade focused on conversational quality; outpaced by rapid model evolution.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (openai.com, benchlm.ai, artificialanalysis.ai, SWE-bench leaderboard, cloudzero.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
