# GPT-6 Astra — findings by LongCat 2.5 Preview

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's most capable model — a hosted computer-use/flagship reasoning model built for the hardest end-to-end work: complex reasoning, coding, computer use, research, and professional document creation.
- **Provider / access:** OpenAI API — `gpt-6-astra` (Chat Completions + Responses API; reasoning via `reasoning_effort` low/medium/high/xhigh/max, no temperature while reasoning). Also Azure AI Foundry and AWS Bedrock. Rollout began 2026-09-03.
- **Release / knowledge:** Announced 2026-09-03 (broader availability from 2026-09-08); knowledge cutoff 2026-04-30.
- **IDs:** `openai/gpt-6-astra`. No Zen Free ID — paid only.
- **Context window:** 1,050,000 tokens total; max input 922,000; max output 128,000 (verified via OpenAI API docs). Long-context pricing multiplier above 272K input tokens.
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes (web search, file search, code interpreter, hosted shell, computer use, MCP, image generation).
- **Pricing (as of 2026-09-27):** $10.00/M in, $50.00/M out; cached input $1.00/M; cache writes $12.50/M; >272K input: 2x input/cache, 1.5x output; Batch/Flex 50% of standard. Paid only.
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.27%** (Vals, rank 1; Snorkel/Codex CLI 87.4% ±0.9)
- Terminal-Bench 4.0: **57.9%** resolution (tbench.ai public leaderboard, rank 1)
- OSWorld 2.0 (computer use): **72.6%**
- ScreenSpot-Pro: **92.7%**
- GDPval-AA v2: regressed ~80 Elo vs GPT-5.6 Sol (Artificial Analysis); absolute score not published
- Tau3-Banking: 2–3 pt regression vs predecessor (AA); absolute score not published

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (rank 1 of 247, llm-stats)
- ARC-AGI-3: **99.9%** (adapter harness; OpenAI)
- FrontierMath Tier 4: **98%** (OpenAI)
- Artificial Analysis Intelligence Index: **61** (equal to GPT-5.6 Sol; 5 pts below Fable 5.1 max)
- HLE: +6 pts vs GPT-5.6 Sol (AA); absolute score not published
- AA-Omniscience: hallucination rate **51%** (down from 92%), accuracy +4 pts

Coding:

- AA Coding Agent Index: **67** (Codex harness; ≈ Opus 5 / Fable 5, behind Fable 5.1 at 70)
- ExploitBench: **100%** (OpenAI)
- SWE-bench Verified / SWE-Pro: no verified public score found

Long context:

- No long-context retrieval (MRCR/RULER/AA-LCR absolute) score published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 87.27% (rank 1) is a hair under the 88%+ frontier reference; OSWorld 72.6% and computer-use saturation are strong, but the GDPval-AA regression (~80 Elo) keeps it at the band floor.
- **Reasoning: 95/100.** GPQA Diamond 96.0% (rank 1 of 247), ARC-AGI-3 99.9%, FrontierMath Tier 4 98%, AA Index 61 — all at or above the frontier reference points.
- **Context window: 95/100.** 1.05M tokens with 128K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 85/100.** Text+image input plus image generation (non-text out) reaches the 90–100 band criteria, but no audio/video input caps it slightly below.
- **Coding: 90/100.** AA Coding Agent Index 67 ties Opus 5/Fable 5 at less than half their cost; TB2.1 87.27% and ExploitBench 100% support the frontier band; no SWE-bench number to confirm 95+.
- **Cost efficiency: 30/100.** $10/$50 standard pricing matches the methodology's $10/$50 ≈ 30 reference point exactly.
- **Overall Score: 91/100.** Mean of the five quality dims (90+95+95+85+90)/5 = 91. Best-fit: default frontier pick for the hardest end-to-end agentic/coding/computer-use jobs — at a premium price that demands top-tier throughput needs.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (OpenAI API docs + announcement, Artificial Analysis benchmarking article, Vals.ai, Snorkel, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
