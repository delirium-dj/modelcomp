# Claude Fable 5.1 — findings by DeepSeek 4 Flash

- Source: Anthropic / Claude Fable 5.1
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's creative-writer specialist (Jul 2026), positioned between Sonnet and Opus for long-form prose, instruction following and narrative reasoning. Distinct weights from Claude Sonnet 5.5 — not an alias.
- **Provider / access:** Anthropic API `claude-fable-5-1` (Responses + Chat Completions); OpenCode Zen `opencode/claude-fable-5.1`.
- **Release / knowledge:** 2026-07; knowledge cutoff 2026-04.
- **IDs:** `anthropic/claude-fable-5-1`
- **Context window:** 1,000,000 (1M) total; 64,000 max output.
- **Modalities:** text, image, PDF in; text out; extended thinking; tool calls.
- **Pricing (as of 2026-11):** $3.00 / $15.00 per 1M in/out; paid only.
- **Architecture:** proprietary; defense-in-depth red-teamed for persona and prose safety.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (official)
- Tau3-Banking: **69.4%** (Tau3 leaderboard)
- Toolathon: **78.9%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (official)
- HLE: **41.3%** (AA HLE listing)
- CritPt: **67.2%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **42.7 / rank 4** (AA)

Coding:

- SWE-bench Verified: **80.1%** (official)
- LiveCodeBench: **72.4%** (LCB official)
- Vibe Code Bench: **84.6%** (vibe-coding leaderboard — strong long-form generation)

Long context:

- RULER 1M: **86.4%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 92/100.** Solid agentic use (Terminal-Bench 63.8, Tau3-Banking 69.4) with careful, well-formatted output; not a pure agent runner.
- **Reasoning: 94/100.** GPQA Diamond 89.6 with outstanding nuanced-argument handling; HLE 41.3 is respectable.
- **Context window: 95/100.** Full 1M with ~86% retrieval at the window — strong for creative long documents.
- **Multimodal: 90/100.** Image/PDF understanding at production quality; no generation.
- **Coding: 90/100.** Decent SWE-bench Verified 80.1; shines at long, coherent code-writing tasks (Vibe 84.6).
- **Cost efficiency: 41/100.** $3/$15 is mid-premium; no free tier.
- **Overall Score: 92/100.** Mean of quality dims (92+94+95+90+90)/5 = 92.2 → 92; the best long-form-writing model available.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5.1](https://www.anthropic.com/claude-fable-5-1)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [Vibe Code Bench leaderboard](https://vibe-coding-bench.dev/)
  - [SWE-bench Verified](https://www.swebench.com/)
