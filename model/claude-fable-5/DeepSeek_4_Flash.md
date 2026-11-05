# Claude Fable 5 — findings by DeepSeek 4 Flash

- Source: Anthropic / Claude Fable 5
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's creative-writer specialist base model (Apr 2026), the first of the Fable 5 line for long-form prose and narrative reasoning; superseded on capability by Fable 5.1 but still a strong, cheaper writing model.
- **Provider / access:** Anthropic API `claude-fable-5` (Responses + Chat Completions); OpenCode Zen `opencode/claude-fable-5`.
- **Release / knowledge:** 2026-04; knowledge cutoff early 2026.
- **IDs:** `anthropic/claude-fable-5`
- **Context window:** 1,000,000 (1M) total; 64,000 max output.
- **Modalities:** text, image, PDF in; text out; extended thinking; tool calls.
- **Pricing (as of 2026-11):** $2.50 / $15.00 per 1M in/out (reduced for the base Fable); paid only.
- **Architecture:** proprietary; red-teamed for prose safety and style.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **61.4%** (official)
- Tau3-Banking: **67.2%** (Tau3 leaderboard)
- Toolathon: **76.8%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **88.7%** (official)
- HLE: **39.1%** (AA HLE listing)
- CritPt: **65.4%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **41.6 / rank 7** (AA)

Coding:

- SWE-bench Verified: **78.2%** (official)
- LiveCodeBench: **70.8%** (LCB official)
- Vibe Code Bench: **83.1%** (vibe-coding leaderboard)

Long context:

- RULER 1M: **85.6%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 91/100.** Solid agentic behavior (Terminal-Bench 61.4, Tau3-Banking 67.2) with clean, well-structured output.
- **Reasoning: 93/100.** GPQA Diamond 88.7 with excellent nuanced-argument and long-form reasoning.
- **Context window: 94/100.** Full 1M at ~86% retrieval — strong for long creative documents.
- **Multimodal: 90/100.** Image/PDF understanding at production quality; no generation.
- **Coding: 90/100.** SWE-bench Verified 78.2; long coherent code-writing is a highlight (Vibe 83.1).
- **Cost efficiency: 42/100.** $2.50/$15 is mid-premium; cheaper than 5.1 but still paid only.
- **Overall Score: 92/100.** Mean of quality dims (91+93+94+90+90)/5 = 91.6 → 92; a strong value writing model just under the 5.1.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5](https://www.anthropic.com/claude-fable-5)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [Vibe Code Bench leaderboard](https://vibe-coding-bench.dev/)
  - [SWE-bench Verified](https://www.swebench.com/)
