# Claude Opus 4.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic official announcement (anthropic.com/news/claude-opus-4-5), evals.report, Artificial Analysis
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's flagship Opus model for coding, agents, and computer use; state-of-the-art on real-world software engineering; released Nov 24, 2025; superseded by Claude Opus 4.6. Proprietary.
- **Provider / access:** Anthropic API (`claude-opus-4-5-20251101`, OpenAI-compatible Chat Completions); Claude apps; Amazon Bedrock; Google Cloud Vertex AI. No Free ID on Zen (noFreeId: true).
- **Release / knowledge:** Released November 24, 2025; knowledge cutoff August 2025.
- **IDs:** `claude-opus-4-5-20251101` (Anthropic API). Parameter count not publicly disclosed.
- **Context window:** 200,000 tokens (200K) per Anthropic API docs and Artificial Analysis.
- **Modalities:** Text and image input; text output; reasoning model (extended thinking); tool use supported (Berkeley Function Calling Leaderboard 77.47%); JSON mode / structured outputs supported.
- **Pricing (as of 2026-10-17):** $5.00 input / $25.00 output per 1M tokens; cache discount 90%. Blended ~$3.85/1M (7:2:1 cache ratio). Expensive vs median ($2.00 input / $10.00 output).
- **Architecture:** Proprietary — parameter count and architecture not disclosed by Anthropic.

### Raw benchmarks found

Agent / tool use:
- SWE-bench Verified: **76.7%** (evals.report, Official, Nov 24, 2025) — matches meta.json's 76.8%
- SWE-bench Pro: **45.89%** (evals.report, Official, Nov 24, 2025)
- SWE-bench Multilingual: **70.7%** (evals.report, Official, Nov 24, 2025)
- Berkeley Function Calling Leaderboard: **77.47%** (evals.report, Official, Nov 24, 2025)
- OSWorld: **66.3%** (evals.report, Unverified, Nov 24, 2025)
- WebArena: **65.3%** (evals.report, Verified, Nov 24, 2025)
- τ²-bench (Telecom): **98.2%** (evals.report, Unverified, Nov 24, 2025)
- LiveCodeBench: **73.8%** (evals.report, Unverified, Nov 24, 2025)
- MCP Atlas: **62.3%** (evals.report, Official, Nov 24, 2025)
- Vibe Code Bench: **20.63%** (evals.report, Verified, Nov 24, 2025)

Reasoning / knowledge:
- GPQA Diamond: **86.0%** (evals.report, Official, Nov 24, 2025)
- HLE: **25.8%** (evals.report, Official, Nov 24, 2025)
- ARC-AGI-1: **80%** (evals.report, Official, Nov 24, 2025)
- ARC-AGI-2: **37.64%** (evals.report, Official, Nov 24, 2025)
- MMLU-Pro: **89.5%** (evals.report, Verified, Nov 24, 2025)
- FrontierMath: **20.69%** (evals.report, Official, Nov 24, 2025)
- AIME (OTIS Mock): **86.1%** (evals.report, Official, Nov 24, 2025)
- LiveBench: **75.96%** (evals.report, Official, Nov 24, 2025)
- AA Intelligence Index: **29** (estimated, Artificial Analysis)
- SciCode: **49.5%** (evals.report, Unverified, Nov 24, 2025)

Coding:
- SWE-bench Verified: **76.7%** (evals.report, Official)
- ZeroBench: **10.0%** (evals.report, Verified, Nov 24, 2025)
- Text + image input only; no audio/video support.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100.** Strong on SWE-bench Verified (76.7%), Berkeley Function Calling (77.47%), τ²-bench Telecom (98.2%), MCP Atlas (62.3%). Capped by weaker OSWorld (66.3%) and WebArena (65.3%). Frontier agent capabilities strong but not top-of-class.
- **Reasoning: 83/100.** Strong on GPQA Diamond (86.0%), MMLU-Pro (89.5%), AIME OTIS Mock (86.1%), LiveBench (75.96%). Capped by weak HLE (25.8%), ARC-AGI-2 (37.64%), FrontierMath (20.69%). AA Intelligence Index 29 (estimated) is mid-range.
- **Context window: 75/100.** 200K context verified; below 1M native models. No public retrieval score at full window.
- **Multimodal: 70/100.** Text + image input only (no audio/video); MMMU 80.7%, MMMU-Pro 73.9%. Capped by lack of vision modalities and low ZeroBench (10.0%).
- **Coding: 86/100.** Strong on SWE-bench Verified (76.7%), Aider Polyglot (89.4%), LiveCodeBench (73.8%). Capped by weaker SWE-bench Pro (45.89%) and Vibe Code Bench (20.63%). Anthropic positions it as best for coding.
- **Cost efficiency: 40/100.** $5.00/$25.00 per 1M — expensive tier (median: $2.00/$10.00). 90% cache discount helps. Not counted toward Overall.
- **Overall Score: 79/100.** Half-up mean of (82 + 83 + 75 + 70 + 86) / 5 = 79.2 → 79. Best-fit recommendation: a capable coding and agent model at premium price; verify on HLE-class reasoning before production reliance on hard open-ended tasks.

### Conflicts vs existing meta.json / queued average

- meta.json claims SWE-bench Verified 76.8% vs evals.report 76.7% — negligible rounding difference ✓
- meta.json contextWindow 200K — matches official and AA ✓
- meta.json modalities "Text, image in; text out" — matches ✓
- meta.json pricing $5/$25 per 1M — matches official Anthropic pricing ✓
- meta.json says "superseded by Opus 4.6-5.5" — confirmed by AA deprecation notice (Opus 4.6 launched) ✓

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (official Anthropic announcement + evals.report + Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
- SWE-bench Pro: **45.89%** (evals.report, Official)
- Aider Polyglot: **89.4%** (evals.report, Verified, Nov 24, 2025)
- DeepSWE: not reported

Long context:
- No public long-context retrieval score at full 200K window. Context window 200K verified.

Multimodal:
- MMMU: **80.7%** (evals.report, Verified, Nov 24, 2025)
- MMMU-Pro: **73.9%** (evals.report, Official, Nov 24, 2025)
- ZeroBench: **10.0%** (evals.report, Verified, Nov 24, 2025)
- Text + image input only; no audio/video support.