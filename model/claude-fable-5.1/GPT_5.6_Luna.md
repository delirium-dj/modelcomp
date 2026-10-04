# Claude Fable 5.1 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's highest-capability general model for coding, knowledge work, and long-running problem solving. Claude Mythos 5.1 uses the same underlying model with more permissive safeguards and restricted access.
- **Provider / access:** Claude API, Amazon Web Services, Google Cloud, Microsoft Azure, Claude.ai, and Claude Code; API ID `claude-fable-5-1`.
- **Release / knowledge:** 2026-09-01 release; June 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-fable-5-1`.
- **Context window:** 1M tokens; 128K maximum output.
- **Modalities:** Text and image input, text output, adaptive thinking, tool calls, and computer use.
- **Pricing (as of 2026-10-04):** $10 input / $50 output per 1M tokens; cache reads $0.25/MTok, 75% below Fable 5; Batch API is 50% off. Anthropic estimates typical workloads 25% cheaper and highly agentic workloads up to 45% cheaper than Fable 5.
- **Architecture:** Proprietary closed model; parameters and architecture undisclosed.

## Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1853 Elo** (Anthropic comparison table).
- OSWorld 2.0: **77.9% partial / 41.7% strict** (Anthropic comparison table).
- AutomationBench: **vendor table listed, but exact value was not exposed in the retrieved text**.

Reasoning / knowledge:

- Humanity's Last Exam: **59.1% no tools / 65.0% with tools** (The Model Gap independent tracking for no-tools; Anthropic table for both modes).
- GPQA Diamond: **93.4%** (Vals AI independent run).
- LiveBench: **83.4** (independent board).

Coding:

- Terminal-Bench-Science 0.1: **52.6%** (Anthropic comparison table).
- Terminal-Bench 4.0: **55.8% Fable / 60.9% Mythos** (Anthropic comparison table; safeguards affect the two variants).
- Terminal-Bench 2.1: **91.4%** (Artificial Analysis independent run); Vals AI reported **85.02%**, or **79.03%** after disclosed fallback answers are counted as failures.
- LiveCodeBench: **90.52%** (independent tracking; saturated comparison).

Long context:

- 1M-token context and 128K output are documented; no independent MRCR/RULER score was verified in the reviewed sources.

Multimodal:

- ARC-AGI-2: **90.0%** (independent tracking; within noise of Fable 5).

## Normalized scores (1–100)

- **Tool use: 96/100.** GDPval 1853 and OSWorld 77.9 partial / 41.7 strict indicate elite agent and computer-use performance, though safety fallbacks complicate some scores.
- **Reasoning: 97/100.** HLE 59.1 no-tools / 65.0 with tools, GPQA 93.4, and LiveBench 83.4 are frontier-leading; benchmark setup differences cap the score.
- **Context window: 98/100.** The 1M window and 128K output are excellent, but independent full-window retrieval evidence was not found.
- **Multimodal: 91/100.** Image input and ARC-AGI-2 90.0 support strong visual reasoning, but output is text-only and audio/video input was not verified.
- **Coding: 96/100.** Terminal-Bench results and strong scientific/coding evaluations are exceptional, but the 79.03 fallback-corrected result shows meaningful harness sensitivity.
- **Cost efficiency: 65/100.** Cache-read savings are substantial, but $10/$50 remains very expensive for uncached high-volume workloads.
- **Overall Score: 95.6/100.** Best fit: demanding coding, research, and computer-use agents where maximum capability outweighs high token prices.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research using Anthropic's announcement and independent benchmark tracking; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
