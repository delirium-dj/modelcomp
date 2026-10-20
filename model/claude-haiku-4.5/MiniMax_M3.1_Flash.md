# Claude Haiku 4.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic (Claude Haiku 4.5), `claude-haiku-4-5-20251001`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's October 2025 fast-and-cheap tier (200K context, $1/$5) with a 73.3% SWE-bench Verified and a manual extended-thinking budget — still live on OpenCode Zen and on Anthropic's API, now superseded by Haiku 5.5 but not yet deprecated.
- **Provider / access:** Anthropic Messages API (`claude-haiku-4-5-20251001`), Amazon Bedrock (`anthropic.claude-haiku-4-5`), Google Vertex AI (`claude-haiku-4-5@20251001`), Microsoft Foundry. **Live on OpenCode Zen** as `opencode/claude-haiku-4-5` — **$1.00/M in, $5.00/M out, $0.10 cached read, $1.25 cached write** (Zen price equals Anthropic's list price).
- **Release / knowledge:** **2025-10-15**. Knowledge cutoff reliable **February 2025** (training data through July 2025).
- **IDs:** `claude-haiku-4-5-20251001` / `claude-haiku-4-5` (Anthropic), `anthropic/claude-haiku-4.5` (third-party routes), `opencode/claude-haiku-4-5` (Zen).
- **Context window:** **200,000** tokens, **64,000** max output (Anthropic model page, models.dev).
- **Modalities:** text and image input, text output; manual extended thinking (`thinking.type: "enabled"` with a `budget_tokens` cap — not adaptive, no `effort` parameter, no interleaved thinking); tool use, structured outputs, context awareness with 200K budget injection.
- **Pricing (as of 2026-10-20):** **$1.00/M input, $5.00/M output**, 5-minute cache write **$1.25**, 1-hour cache write **$2.00**, cache read **$0.10/M**; batch 50% off.
- **Architecture:** proprietary.

### Raw benchmarks found

> Anthropic's launch table is a rendered image, so only footnoted text values are first-party; the rest are independent runs.

Agent / tool use:

- Terminal-Bench (Terminus 2): **40.21%** (6 runs, no thinking) / **41.75%** (5 runs, 32K budget) (Anthropic launch footnote) · Terminal-Bench 2.1: **43.8%** (Vals AI) / **44.2%** (Google DeepMind)
- OSWorld-Verified: **50.7%** (DeepMind) · GDPval-AA: **907 Elo** (DeepMind) · MCP Atlas: no verified public score found
- JobBench: **16.0%** (BenchLM) · MazeBench: **0%** (BenchLM) · Toolathlon / Tau2 / AutomationBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **72.2%** (Vals AI) — no Anthropic-published figure exists
- MMLU-Pro: **78.7%** (Vals AI) · HLE / AIME / ARC-AGI / MMMU: no verified public score found
- GDM-MRCR (128k): **35.3%** (DeepMind) · SWE-Bench Pro: **39.5%** (DeepMind)

Coding:

- SWE-bench Verified: **73.3%** (50 trials, 128K thinking budget — Anthropic launch footnote)
- SWE-bench (Vals AI run): **66.6%** · LiveCodeBench: **41.2%** (Vals AI)
- ParseBench (document parsing for agents): **45.17%** (LlamaIndex leaderboard, via BenchLM) · Design Arena: **1122** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 50/100.** Terminal-Bench 40–44% and OSWorld-Verified 50.7% sit mid-band, GDPval-AA 907 is low and JobBench 16.0% shows the long-horizon gap; no τ² or MCP-Atlas number exists.
- **Reasoning: 58/100.** GPQA 72.2% and MMLU-Pro 78.7% are mid-band, with no published HLE, AIME or MMMU figure to corroborate them.
- **Context window: 68/100.** 200,000 tokens with 64,000 max output is the 200K tier, and the one retrieval measurement published (GDM-MRCR 35.3% at 128k) shows the window is not retrieval-strong.
- **Multimodal: 65/100.** Text and image input with text output — the "+image in" band, with no audio or video.
- **Coding: 68/100.** SWE-bench Verified 73.3% (Anthropic's own number) is solid, but SWE-bench 66.6% on Vals' harness, LiveCodeBench 41.2% and SWE-Bench Pro 39.5% show a much weaker repo-scale picture.
- **Cost efficiency: 88/100.** $1.00/M in and $5.00/M out is roughly the "$1.25/$4.25" band (~88), with a $0.10/M cache read that rewards long sessions.
- **Overall Score: 62/100.** Mean of the five quality dims = (50 + 58 + 68 + 65 + 68) / 5 = 61.8 → **62**. Best fit: cheap, fast subtasks inside a larger agent — and note Anthropic's own launch table suggests Haiku 4.5 is a deliberate step below Sonnet on agentic work.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Anthropic launch post and model page, pricing and deprecation docs, Google DeepMind benchmark table, Artificial Analysis, BenchLM + Vals AI, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_5.5.md`, using the same headings.
