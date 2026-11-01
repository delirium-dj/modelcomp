# Claude Opus 5.5 — findings by GPT-6.1 Terra

- Source: Anthropic / Claude Opus 5.5
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's proprietary reasoning model for agentic coding, complex knowledge work and long-running tasks. Safeguards can transparently route certain sensitive requests to earlier models, affecting measured results.
- **Provider / access:** Claude Messages API and supported cloud platforms; exact Anthropic model ID `claude-opus-5-5` ([Anthropic](https://www.anthropic.com/claude-opus-5-5)).
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff June 2026 ([Anthropic documentation](https://docs.anthropic.com/en/docs/about-claude/models/whats-new-sonnet-5)).
- **IDs:** `anthropic/claude-opus-5.5` on OpenRouter; `claude-opus-5-5` on the Claude API. No free API route verified.
- **Context window:** 1M tokens, with 128K maximum standard output ([Anthropic release notes](https://docs.anthropic.com/en/release-notes/api)).
- **Modalities:** Text and image input, text output; reasoning and tool use supported. Chart and document understanding are evidenced; no audio or video input is credited here.
- **Pricing (2026-11-01):** Standard API $4 input / $0.20 cache read / $20 output per million tokens; fast mode $8 / $40 input / output ([Anthropic](https://www.anthropic.com/claude-opus-5-5)). Other providers and batching may differ.
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4% ± 2.6**, Anthropic xhigh-effort evaluation; GDPval-AA v2.1 **1846 Elo** and OSWorld 2.1 **81.8% partial**, Anthropic max-effort evaluation ([Anthropic](https://www.anthropic.com/claude-opus-5-5)). The vendor reports production safeguards and fallback models were enabled for some domains.
- Vals independently reports Terminal-Bench 4.0 **61.62%** and Terminal-Bench 2.1 **87.64%** under its own settings ([Vals](https://www.vals.ai/models/anthropic_claude-opus-5-5)); different versions are not directly interchangeable.
- Tau2-Bench, Claw-Eval and MCP-Atlas: no verified public score found in this research.

Reasoning / knowledge:

- Humanity's Last Exam: **67.7% with tools**, Anthropic max-effort result ([Anthropic](https://www.anthropic.com/claude-opus-5-5)).
- Artificial Analysis Intelligence Index: **58**, max effort with default fallback ([Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-5-5)).
- GPQA Diamond, CritPt and hallucination rate: no verified public score found in this research.

Coding:

- FrontierCode v1.1 Main **54.4%** and CursorBench 4.0 **57.8%**, Anthropic max-effort results ([Anthropic](https://www.anthropic.com/claude-opus-5-5)).
- SWE-bench Verified / Pro, LiveCodeBench and SciCode: no independently verified exact-model score found in the sources used here.

Long context:

- A 1M token context is documented by Anthropic; no independently verified exact-model MRCR or RULER retrieval score found in this research.

### Normalized scores (1–100)

- **Tool use: 97/100.** Strong Terminal-Bench, OSWorld and GDPval results support a frontier score; production fallback and harness differences limit attribution.
- **Reasoning: 96/100.** HLE with tools and an independent index of 58 are strong, though neither proves performance on every reasoning task.
- **Context window: 96/100.** The documented 1M window earns the top size tier, but no 98%+ long-context retrieval result was verified.
- **Multimodal: 78/100.** Image and document understanding are supported; audio, video and non-text output were not verified.
- **Coding: 97/100.** FrontierCode, CursorBench and independent terminal results indicate excellent agentic coding, subject to harness and fallback caveats.
- **Cost efficiency: 72/100.** Standard $4/$20 pricing is substantial despite discounted cache reads and efficient task completion.
- **Overall Score: 93/100.** (97 + 96 + 96 + 78 + 97) / 5 = 92.8, rounded to 93; suited to demanding coding and agentic work when cost is justified.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Evaluation settings and fallback behavior are identified where reported.
- Reference URLs:
  - [Anthropic announcement and benchmark table](https://www.anthropic.com/claude-opus-5-5)
  - [Anthropic API release notes](https://docs.anthropic.com/en/release-notes/api)
  - [Vals independent evaluations](https://www.vals.ai/models/anthropic_claude-opus-5-5)
  - [Artificial Analysis model evaluation](https://artificialanalysis.ai/models/claude-opus-5-5)
- Future sources: add a new file next to this one using the same headings.
