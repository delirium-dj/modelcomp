# MiMo-V2.6-Pro — findings by Claude Opus 4.6

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's flagship open-weight omnimodal foundation model built on a sparse Mixture-of-Experts architecture with 1.02 trillion total parameters. Optimized for agentic workflows, complex coding, and long-horizon reasoning tasks.
- **Provider / access:** Xiaomi MiMo API (`mimo-v2.6-pro`), OpenRouter (`xiaomi/mimo-v2.6-pro`), OpenCode Zen (paid plans). Chat Completions API.
- **Release / knowledge:** 2026-09-21 release; knowledge cutoff not publicly specified.
- **IDs:** `xiaomi/mimo-v2.6-pro` (no verified Free ID on Zen — paid access only)
- **Context window:** 1,048,576 tokens (1M); input/output split not publicly documented. Verified via Xiaomi official announcement and OpenRouter listing.
- **Modalities:** text, image, video, audio in; text out; reasoning yes (thinking mode); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-29):** $0.435 / $0.87 per 1M tokens (input / output); cached input $0.0036 / 1M. Paid model — no free tier for Pro variant.
- **Architecture:** 1.02T total params, 42B active per token, sparse MoE, MIT open-weight license. Includes 681M-param vision transformer and ~435M-param audio stack.

### Raw benchmarks found

Agent / tool use:

- Toolathon-verified (**agent/tool**): **76.9** (source: Xiaomi official benchmarks, Sept 2026)
- Automation Bench v1.0.6 (**agent**): **53.1** (source: Xiaomi official benchmarks)
- Terminal-Bench: no verified public score found; described as "competitive with Claude Opus 5 and GPT-5.6" by independent reviewers but no exact number published.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **86.5%** (source: OpenRouter model card)
- HLE (Humanity's Last Exam): **49.4%** (source: OpenRouter / Artificial Analysis datasets)
- Artificial Analysis Intelligence Index: **46** / #1 open-weight (source: Artificial Analysis v4.3, Sept 2026)
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Verified: no independently verified public score found. Internal RL runs mention 61.1–66.2 range on mini-benchmark subsets (Xiaomi technical report), but not the official leaderboard.
- DeepSWE v1.1: **71.9%** (source: Xiaomi official benchmarks)
- LiveCodeBench: **90.52%** (source: Vals AI evaluations)
- Vibe Code Bench: **90.26%** (source: Vals AI evaluations — noted as "within noise" of leading models)
- ProgramBench: **26.5** (source: Xiaomi official benchmarks)
- MiMo Code Bench (in-house): **63.2** (source: Xiaomi official benchmarks)
- SciCode / AA-SciCode: no verified public score found.

Long context:

- 1M-token window advertised. No verified MRCR, RULER, or GraphWalks scores published; industry consensus notes many 1M-window models degrade significantly beyond 200K in complex retrieval tasks.

### Normalized scores (1–100)

- **Tool use: 78/100.** Toolathon-verified 76.9 and Automation Bench 53.1 place this model in the upper tier for agentic tool-calling; capped by lack of verified Terminal-Bench and Tau-bench numbers to confirm consistency.
- **Reasoning: 82/100.** GPQA Diamond 86.5% and HLE 49.4% are strong for an open-weight model; AA Intelligence Index #1 open-weight at 46 reinforces frontier-adjacent reasoning. Capped by trailing proprietary models on advanced benchmarks.
- **Context window: 85/100.** 1M-token window is among the largest available; tier mapping places it high. Capped slightly because no independent long-context retrieval benchmarks (MRCR/RULER) confirm effective utilization at full window.
- **Multimodal: 75/100.** Native omnimodal with text, image, video, and audio input — broader than most competitors. Capped because output is text-only (no image/audio generation) and no verified multimodal benchmark scores found.
- **Coding: 86/100.** LiveCodeBench 90.52% and Vibe Code Bench 90.26% are near the top of the field; DeepSWE 71.9% is solid. Capped by missing official SWE-bench Verified score and ProgramBench 26.5 being relatively low.
- **Cost efficiency: 62/100.** $0.435/$0.87 per 1M tokens is competitive for a flagship model but not free; MIT open-weight license allows self-hosting which could reduce costs substantially.
- **Overall Score: 81/100.** Mean of (78 + 82 + 85 + 75 + 86) / 5 = 81.2, rounded half-up to 81. A top-tier open-weight model excelling in coding and reasoning, with comprehensive multimodal input support and a massive context window.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-09-29
- Method: public internet research (Xiaomi official site, OpenRouter, Artificial Analysis, Vals AI, independent reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
