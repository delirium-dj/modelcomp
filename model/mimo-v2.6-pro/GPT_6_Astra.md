# MiMo-V2.6-Pro — findings by GPT 6 Astra

- Source: Xiaomi / MiMo-V2.6-Pro
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Research refresh — 2026-10-09

Compared with the 2026-10-03 report. Sources accessed on 2026-10-09; access dates are not benchmark execution dates. This section supersedes conflicting or missing-data statements in the preserved snapshot below. No local model evaluation was performed.

The [official Pro page](https://mimo.mi.com/models/en-US/mimo-v2.6-pro) fills the output gap: **128K maximum output**, alongside 1M context. It confirms text/image/video/audio input, text output, structured output, tools, caching and OpenAI/Anthropic-compatible access. The USD list now directly confirms **$0.435 input / $0.87 output / $0.0036 cache** per million; CNY rates are **3 / 6 / 0.025** respectively. This strengthens provenance beyond the previous AA-provider-only citation. [Xiaomi's release log](https://mimo.mi.com/docs/en-US/updates/model) gives **September 22, 2026** for the hosted series.

[AA's Pro column](https://artificialanalysis.ai/models/comparisons/mimo-v2-6-flash-vs-mimo-v2-6-pro): Briefcase **1516** and GDPval v2.1 **1685**, versus 1517/1688 previously. Index **46**, Automation **59%**, Terminal 4.0 **35%**, SciCode **61%**, HLE **49%**, CritPt **27%**, Omniscience index **8**, LCR v1.1 **86%** remain consistent. GDP.pdf **19%** adds document-reasoning evidence. Minor moving-Elo changes do not establish regression; SciCode/CritPt are marked under review.

Vibe Code Bench v1.1 / OpenHands: **85.22%**, **$1.04/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

Coding 88→90 reflects additional independent end-to-end evidence; the rounded overall stays 91. Other dimensions stay unchanged. Remaining gaps: cutoff, hosted checkpoint/license mapping, SWE-bench/LiveCodeBench and full-window retrieval. Do not transfer RL/MOPD or Ultraspeed measurements automatically to this endpoint.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **88, 89, 95, 95, 88, 95**; revised: **88, 89, 95, 95, 90, 95**. Overall: **91 → 91**. Scores are normalized judgments, not raw benchmark percentages.

## Prior research snapshot — 2026-10-03

The following model card and raw findings preserve the earlier evidence and its gaps for comparison; read the refresh above for current corrections.

### Model card

- **Name:** MiMo-V2.6-Pro, hosted evaluation
- **Short description:** Multimodal reasoning model for agentic work; hosted checkpoint identity may differ from downloadable RL/MOPD checkpoints.
- **Provider / access:** Xiaomi API; `https://api.xiaomimimo.com/v1/chat/completions` is documented in a [first-party repository issue](https://github.com/XiaomiMiMo/MiMo/issues/98).
- **Release / knowledge:** September 2026; cutoff unverified.
- **IDs:** `mimo-v2.6-pro`; Zen Free ID unverified.
- **Context window:** 1M; maximum output unverified.
- **Modalities:** Text/image/video/speech input, text output; reasoning and tools.
- **Pricing (as of 2026-10-03):** AA's evaluated provider: $0.435 input / $0.87 output / $0.0036 cached input per million tokens; exchange-rate/provider dependent.
- **Architecture:** Open-weight family; exact hosted checkpoint and license mapping unverified. [AA model](https://artificialanalysis.ai/models/mimo-v2-6-pro/)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: 1688 Elo; AA-Briefcase v1.1: 1517; AutomationBench-AA: 59%; Terminal-Bench 4.0: 35%.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Intelligence Index: 46; HLE: 49%; CritPt: 27%; Omniscience index: 8. GPQA and hallucination rate: no verified public score found.

Coding:

- SciCode: 61%; SWE-bench / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found in reviewed primary measurements.

Long context:

- AA-LCR v1.1: 86%; full-window retrieval unverified.

Measurements and evaluated pricing: [AA Flash/Pro comparison](https://artificialanalysis.ai/models/comparisons/mimo-v2-6-flash-vs-mimo-v2-6-pro), Pro column. Moving Elo ratings differ slightly across crawl dates.

## Current normalized scores (1–100)

- **Tool use: 88/100.** Strong workflow and professional work; terminal performance and reported loop failures limit confidence.
- **Reasoning: 89/100.** HLE and LCR are strong, but Omniscience shows reliability weaknesses.
- **Context window: 95/100.** 1M capacity without qualifying full-window retrieval evidence.
- **Multimodal: 95/100.** Broad inputs, including speech; text output only.
- **Coding: 90/100.** Revised from 88; evidence and rationale are recorded in the dated refresh above.
- **Cost efficiency: 95/100.** Low evaluated token prices; provider-specific discounts may change.
- **Overall Score: 91/100.** Half-up mean (88 + 89 + 95 + 95 + 90) / 5 = 91.4; cost excluded. See the refresh for the comparison with 91.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09
- Method: Fresh independent public research; normalized interpretations, not official scores.
- Future sources: add separate signed reports with these headings.
