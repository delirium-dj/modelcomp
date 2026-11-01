# Claude Sonnet 5.5 — findings by GPT-6.1 Terra

- Source: Anthropic / Claude Sonnet 5.5
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's proprietary model for coding, knowledge work and agentic workflows, positioned as a lower-cost complement to Opus.
- **Provider / access:** Anthropic Claude Messages API and supported cloud providers; exact model ID `claude-sonnet-5-5` ([Anthropic](https://www.anthropic.com/claude/sonnet)).
- **Release / knowledge:** Released 2026-09-28 ([Vals](https://www.vals.ai/models/anthropic_claude-sonnet-5-5)); knowledge cutoff June 2026 ([Anthropic documentation](https://docs.anthropic.com/en/docs/about-claude/models/whats-new-sonnet-5)).
- **IDs:** `claude-sonnet-5-5` on Anthropic; OpenRouter `anthropic/claude-sonnet-5.5`. No free API route verified.
- **Context window:** 1M tokens and 128K maximum output ([Anthropic documentation](https://docs.anthropic.com/en/docs/about-claude/models/whats-new-sonnet-5)).
- **Modalities:** Text and image/document input, text output; adaptive reasoning and tool use supported.
- **Pricing (2026-11-01):** Anthropic $2 input / $0.10 cache read / $10 output per million tokens ([Anthropic](https://www.anthropic.com/claude-sonnet-5-5)); tool and cache-write fees may differ.
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- Anthropic Terminal-Bench 4.0 **70.6%**, vendor-reported ([Anthropic](https://www.anthropic.com/claude-sonnet-5-5)); effort and harness matter.
- Vals independently reports Terminal-Bench 4.0 **64.14% ± 1.01**, Vals Index **70.85% ± 0.93** ([Vals](https://www.vals.ai/models/anthropic_claude-sonnet-5-5)). Its published launch notes identify Sonnet 5 fallback on refusals, including on some security tasks.
- Tau2-Bench, Claw-Eval and MCP-Atlas: no verified exact-model score found in this research.

Reasoning / knowledge:

- Vals ProofBench v1.1 **100.00% ± 0.00** and Vals Science Index **59.12% ± 2.31** ([Vals](https://www.vals.ai/models/anthropic_claude-sonnet-5-5)).
- GPQA Diamond, HLE and CritPt: no verified exact-model score found in the sources used here.

Coding:

- Anthropic CursorBench 4.0 **55.5%** ([Anthropic](https://www.anthropic.com/claude-sonnet-5-5)).
- Vals Vibe Code Bench v1.1 **92.39% ± 1.26**, Code Migration v1.1 **86.88% ± 1.52** ([Vals](https://www.vals.ai/models/anthropic_claude-sonnet-5-5)).
- SWE-bench Verified / Pro, LiveCodeBench and SciCode: no verified public score found in this research.

Long context:

- Anthropic documents 1M tokens; no exact-model MRCR or RULER retrieval percentage verified in this research.

### Normalized scores (1–100)

- **Tool use: 96/100.** Strong independent terminal and knowledge-work scores support a high rating; fallback and harness variations remain relevant.
- **Reasoning: 94/100.** Vals proof and science results are strong, though GPQA and HLE were not verified here.
- **Context window: 95/100.** The documented 1M window earns the top size tier; no 98%+ long-context retrieval result was verified.
- **Multimodal: 75/100.** Image and document input are supported, but audio/video input and non-text output are not credited.
- **Coding: 97/100.** Independent Vibe Code and migration results plus vendor CursorBench indicate strong coding; harness and fallback can affect comparisons.
- **Cost efficiency: 83/100.** The $2/$10 API rate and discounted cache reads provide useful value, though output remains paid.
- **Overall Score: 91/100.** (96 + 94 + 95 + 75 + 97) / 5 = 91.4, rounded to 91; a strong choice for coding and agentic work.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Fallback-assisted evaluations are not assumed to be pure Sonnet 5.5 inference.
- Reference URLs:
  - [Anthropic announcement and benchmarks](https://www.anthropic.com/claude-sonnet-5-5)
  - [Anthropic model specifications](https://docs.anthropic.com/en/docs/about-claude/models/whats-new-sonnet-5)
  - [Vals independent evaluations and fallback notes](https://www.vals.ai/models/anthropic_claude-sonnet-5-5)
- Future sources: add a new file next to this one using the same headings.
