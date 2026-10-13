# Claude Sonnet 5 — findings by GPT 6 Sol

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's June 2026 adaptive-thinking Sonnet model for agentic coding, browsing and everyday knowledge work, distinct from Sonnet 5.5 ([Anthropic launch](https://www.anthropic.com/news/claude-sonnet-5)).
- **Provider / access:** Anthropic **Messages API** `claude-sonnet-5`, Amazon Bedrock `anthropic.claude-sonnet-5`, Vertex/Foundry and Claude subscriptions ([Anthropic model page](https://platform.claude.com/docs/en/models/sonnet-5/overview)). Free Claude chat access is not proof of a free Zen API ID; none verified for this route.
- **Release / knowledge:** June 30, 2026; reliable and training cutoff January 2026 ([Anthropic model page](https://platform.claude.com/docs/en/models/sonnet-5/overview)).
- **IDs:** `anthropic/claude-sonnet-5` and pinned Claude API ID `claude-sonnet-5`.
- **Context window:** 1M tokens; **128K synchronous output**, optional 300K Batch output with beta header ([Anthropic model page](https://platform.claude.com/docs/en/models/sonnet-5/overview)).
- **Modalities:** Text/image in → text out, tool calls and adaptive thinking (default high effort); file ingestion via host tooling, no native video/audio I/O ([Anthropic model page](https://platform.claude.com/docs/en/models/sonnet-5/overview)).
- **Pricing (as of 2026-10-13):** **$2 input / $10 output / $0.20 cache read per 1M**; 5-minute writes $2.50, 1-hour writes $4; Batch 50% off ([Anthropic model page](https://platform.claude.com/docs/en/models/sonnet-5/overview)). Anthropic's [August 10 launch-post correction](https://www.anthropic.com/news/claude-sonnet-5) made $2/$10 permanent; legacy $3/$15 chart pricing is stale.
- **Architecture:** Proprietary; size and weights undisclosed ([Anthropic docs](https://platform.claude.com/docs/en/models/sonnet-5/overview)).

### Raw benchmarks found

[Anthropic system-card measurements attributed by BenchLM](https://benchlm.ai/models/claude-sonnet-5) are compared with independent [Vals](https://www.vals.ai/models/anthropic_claude-sonnet-5) (max effort except its TB2.1 high-effort run) and [AA](https://artificialanalysis.ai/models/claude-sonnet-5). Vals' launch-news historical ranks and current dynamic ranks use different cohorts and sometimes a subset; use current benchmark rows with labels, not historical #3 as a current rank.

Agent / tool use:

- [Anthropic TB2.1 **80.4%**, BrowseComp **84.7%**, OSWorld-Verified **81.2%**, GDPval-AA **1603 Elo**](https://benchlm.ai/models/claude-sonnet-5) (system-card attribution). [Vals TB2.1 **74.5%**, Finance Agent v2 **53.91% ±0.52**, Code Migration **44.39% ±4.25**, SRE Bench **0.38% ±0.38**, Harvey Legal Agent **5.00% ±1.65**](https://www.vals.ai/models/anthropic_claude-sonnet-5).
- OSWorld-Verified and TB2.1 results depend on a configured tool harness; no verified Claw-Eval numeric score found for this specific Sonnet release.

Reasoning / knowledge:

- [Anthropic HLE **43.2% without tools / 57.4% with tools**](https://benchlm.ai/models/claude-sonnet-5); [AA GPQA Diamond **91.1%**, HLE **41.3%**, CritPt **16.9%**, AA-LCR **82.0%**, Intelligence Index **38.2**](https://benchlm.ai/models/claude-sonnet-5) attributed to AA, with index methodology independent from Anthropic's.
- [Vals GPQA Diamond **88.89% ±2.22**, MMLU-Pro **87.55% ±0.37**, ProofBench v1.1 **77.00% ±4.23**](https://www.vals.ai/models/anthropic_claude-sonnet-5); tool-assisted HLE is not a no-tool score.

Coding:

- [Anthropic SWE-bench Verified **85.2%**, SWE-bench Pro **63.2%**, SWE Multilingual **78.3%**, TB2.1 **80.4%**](https://benchlm.ai/models/claude-sonnet-5) (system-card attributed). [Cognition FrontierCode 1.1 Main **42.7%**](https://cognition.com/blog/frontier-code-1.1) as catalogued by [BenchLM](https://benchlm.ai/models/claude-sonnet-5).
- [Vals SWE-bench **79.60% ±1.80**, LiveCodeBench **82.43% ±1.09**, Vibe Code Bench v1.1 **81.33% ±3.05**, Terminal-Bench 4.0 **10.61% ±1.51**, ProgramBench **0.00%**](https://www.vals.ai/models/anthropic_claude-sonnet-5). Harder/newer suites temper the vendor-era coding results.

Long context / vision:

- [Anthropic 1M context and 128K output](https://platform.claude.com/docs/en/models/sonnet-5/overview); [AA-LCR **82.0%**](https://benchlm.ai/models/claude-sonnet-5) on its own long-context suite. A specified full-1M eight-needle MRCR figure was **not verified** in reviewed sources.
- [Anthropic CharXiv **77.0% without tools / 88.3% with tools**](https://benchlm.ai/models/claude-sonnet-5) (system-card attribution); [Vals MMMU-Pro **83.01% ±0.90**](https://www.vals.ai/models/anthropic_claude-sonnet-5). Vision support does not add native speech/video input.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 74–80% and OSWorld-Verified 81.2% are strong; independent SRE 0.38% and legal agent 5% cap specialised reliability.
- **Reasoning: 86/100.** GPQA ~89–91%, HLE 43–57% and ProofBench 77% show broad reasoning, with CritPt 16.9% and AA Index 38.2 limiting the high end.
- **Context window: 95/100.** Documented 1M/128K and AA-LCR 82%, subject to unverified full-window needle retrieval and provider tokenization.
- **Multimodal: 66/100.** Good image/chart comprehension but only text/image input and text output; no native audio/video.
- **Coding: 87/100.** SWE Verified ~80–85%, SWE-Pro 63.2% and Vibe Code 81%; TB4 10.61%, ProgramBench 0% lower hard-agent confidence.
- **Cost efficiency: 73/100.** Current permanent $2/$10 and $0.20 cache reads are better than the stale $3/$15 quote; no verified Zen free ID.
- **Overall Score: 83/100.** (82 + 86 + 95 + 66 + 87) / 5 = 83.2, half-up 83; a capable cost-conscious text/image coding agent with harder operations verified before deployment.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh Anthropic model/pricing documentation checked against attributed system-card figures, Vals and AA; normalized scores are interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
