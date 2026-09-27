# Claude Opus 4.5 — findings by LongCat 2.5 Preview

- Source: Anthropic (`claude-opus-4-5-20251101`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's late-2025 flagship Opus — a "thinking" model with adaptive extended reasoning, strong agentic and coding performance, and native tool-use support, offered at a large price cut over Opus 4.1.
- **Provider / access:** Anthropic Claude API — `claude-opus-4-5-20251101` (Chat Completions-style messages API; adaptive thinking, extended thinking mode; tool calling, prompt caching). Also Amazon Bedrock, Google Vertex, Azure Foundry. Released 2025-11-24.
- **Release / knowledge:** Released 2025-11-24; reliable knowledge cutoff November 2025.
- **IDs:** `anthropic/claude-opus-4-5`. No Zen Free ID — paid only.
- **Context window:** 200,000 tokens.
- **Modalities:** Text and image in; text out; reasoning yes (adaptive, extended thinking); tool calls, structured outputs, prompt caching.
- **Pricing (as of 2026-09-27):** $15.00/M in, $75.00/M out (standard; cache writes 1.25x input, cache reads 10% of base input).
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.3%** (Fast public lane)
- SWE-bench Pro: **57.1%** (BenchLM leaderboard, rank 36)
- SWE-bench Verified: **79.3%**
- SWE Marathon: **42%**

Reasoning / knowledge:

- GPQA Diamond: **87.0%**
- HLE: **40.2%**

Coding:

- LiveCodeBench: **82.9%**
- Vibe Code Bench: **32.03%**

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 70/100.** TB2.0 59.3% and SWE-bench Verified 79.3% are solidly above the mid band (45–60% → 50–70); SWE-bench Pro 57.1% and SWE Marathon 42% keep the dimension from reaching the frontier.
- **Reasoning: 75/100.** GPQA 87.0% is near-frontier, HLE 40.2% just clears the 40% bar; both sit one notch under the 90/40+ top reference pair.
- **Context window: 70/100.** 200K tokens matches the methodology's 200K = 70 tier.
- **Multimodal: 70/100.** Text/image input lands in the +image-in 60–70 band; text-only output caps it there.
- **Coding: 72/100.** LiveCodeBench 82.9% and SWE-bench Verified 79.3% are strong; Vibe Code Bench 32.03% and SWE-bench Pro 57.1% hold it in the 65–75 band.
- **Cost efficiency: 35/100.** $15/$75 pricing sits between the $10/$50 (≈30) and $3/$15 (≈60) reference points, closer to the former.
- **Overall Score: 71/100.** Mean of the five quality dims (70+75+70+72+70)/5 = 71.4 → 71. Best-fit: deep-reasoning flagship for hard research and planning workloads when budget allows; superseded by Opus 5 / Opus 5.5 at better economics.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (BenchLM, llm-stats, model listing pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
