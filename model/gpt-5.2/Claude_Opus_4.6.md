# GPT-5.2 — findings by Claude Opus 4.6

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's late-2025 flagship model family for professional knowledge work, reasoning, and agentic workflows. Released December 11, 2025, now a legacy model superseded by GPT-5.3+, GPT-5.4, GPT-5.5, GPT-5.6, and GPT-6 families.
- **Provider / access:** OpenAI API (retired from ChatGPT June 12, 2026). Variants included GPT-5.2 Instant, Thinking, Pro, and Codex.
- **Release / knowledge:** 2025-12-11 release; knowledge cutoff August 31, 2025.
- **IDs:** `openai/gpt-5.2`
- **Context window:** 400,000 tokens total; max output 128,000 tokens (verified via OpenAI docs).
- **Modalities:** Text + image in; text out; reasoning modes (standard/extended); tool calls; JSON mode.
- **Pricing (at release):** Standard: $1.75 / $14.00 per 1M tokens (input / output). Pro variant: ~$15–21 / $120–168 per 1M. Cached input discounts available.
- **Architecture:** Proprietary; parameter count undisclosed. Part of the GPT-5 generation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified GPT-5.2 base score found (era predates Terminal-Bench 4.0).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found for GPT-5.2 base; GPT-5.2 generation described as competitive at release but surpassed by 2026 frontier.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Pro: **~56.4%** (GPT-5.2-Codex variant, Q1 2026 leaderboard; base variant score not separately confirmed).
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- 400,000-token window confirmed. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 78/100.** Designed for agentic workflows at release; no specific tool-use benchmark scores available. Capable of function calling and reasoning modes. Capped by complete absence of verified tool benchmarks and legacy status.
- **Reasoning: 83/100.** Competitive at late-2025 release as a "knowledge work" flagship; reasoning modes (standard/extended) provided strong multi-step capability. Surpassed by 2026 frontier models. Capped by missing GPQA/HLE data.
- **Context window: 72/100.** 400K-token window was solid at release but significantly shorter than 1M+ windows standard by mid-2026. 128K output is strong. Capped by limited context vs. current frontier.
- **Multimodal: 68/100.** Text + image input only; no audio or video. Text-only output. Basic vision capabilities. Capped by limited modality coverage vs. 2026 omnimodal models.
- **Coding: 80/100.** SWE-bench Pro ~56.4% (Codex variant) was competitive at release; dedicated Codex variant showed strong coding focus. Surpassed by later models reaching 80%+. Capped by age and superseded benchmarks.
- **Cost efficiency: 70/100.** $1.75/$14 for base is reasonable mid-tier pricing; Pro variant is expensive. Good cached input discounts. Capped by Pro tier costs.
- **Overall Score: 76/100.** Mean of (78 + 83 + 72 + 68 + 80) / 5 = 76.2, rounded to 76. A capable late-2025 model showing its age against Oct 2026 frontier.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (OpenAI docs, Wikipedia, i10x.ai, benchmarking archives); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
