# Grok 4.1 Fast — findings by GPT-6 Luna

- Source: xAI/Grok 4.1 Fast (Reasoning)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's fast, tool-calling model family, released with reasoning and non-reasoning API variants. This tracked entry identifies the reasoning variant (`grok-4-1-fast-reasoning`); do not mix its results with the separately named non-reasoning variant.
- **Provider / access:** xAI API. The launch page demonstrates the xAI SDK and Agent Tools API. The older release remains documented, but xAI's current model/pricing documentation emphasizes newer models and no longer lists Grok 4.1 Fast; Artificial Analysis marks both variants deprecated. I found no official retirement date.
- **Release / knowledge:** Launched **2025-11-19**. No exact knowledge-cutoff date verified.
- **IDs:** Reasoning: `grok-4-1-fast-reasoning`; non-reasoning sibling: `grok-4-1-fast-non-reasoning`. xAI's launch code example uses the reasoning ID. Models.dev records the canonical route as `xai/grok-4.1-fast-reasoning`.
- **Context window:** **2,000,000 tokens**, as stated by xAI and independently listed by Artificial Analysis. Models.dev reports a **30,000-token** output limit for the xAI route; I did not find that limit in xAI's launch post. xAI says it trained for multi-turn, long-horizon performance across the full window, but the linked chart does not provide a verifiable retrieval percentage in its text.
- **Modalities:** Text and image input, text output (Artificial Analysis model pages for both variants). xAI's launch post focuses on text agent/tool use and does not enumerate modalities.
- **Pricing (as of 2026-10-29):** xAI's launch page lists **$0.20 / MTok input**, **$0.05 / MTok cached input**, and **$0.50 / MTok output**, plus **$5 per 1,000 successful tool invocations**. These are launch-page prices; the current xAI model pricing page no longer lists this model, so current availability/pricing is not independently confirmed.
- **Architecture:** Proprietary/closed weights; xAI has not disclosed parameter count or architecture in the referenced public material.

### Raw benchmarks found

The xAI release reports its own launch evaluations, with one result explicitly noted as independently verified by Artificial Analysis. The third-party rows below are from Artificial Analysis data as reproduced by BenchLM; differences in suite scope and harness are retained rather than collapsed.

Agent / tool use:

- τ²-bench Telecom: **100%**, total evaluation cost **$105** (xAI launch report; footnote says independent evaluation verified by Artificial Analysis).
- τ²-bench: **93.3%** (Artificial Analysis benchmark figure reproduced by BenchLM for the reasoning variant). This is lower than xAI's Telecom-only **100%**; the available summaries do not establish identical task subset or harness, so both are reported without treating them as a direct contradiction.
- Berkeley Function Calling v4: **72% overall accuracy**, reported total cost **$400** (xAI launch evaluation).
- Search-agent evaluations (xAI launch report): Research-Eval **63.9** at average cost **$0.046**; RekaFRAMES **87.6** at **$0.048**; internal X Browse **56.3** at **$0.091**. The post describes X Browse as an internal multihop X/web search benchmark; these results are vendor-reported.
- No verified public GDPval-AA score found.

Reasoning / knowledge:

- GPQA Diamond: **85.3%**; HLE: **19.3%**; AA-LCR: **74.0%**; Artificial Analysis Intelligence Index: **20.4%** (Artificial Analysis results reproduced by BenchLM; exact reasoning variant identified there).
- No verified CritPt v2 score beyond the low **2.9%** listed in the same reproduced AA data; no separate primary leaderboard result was located.

Coding:

- LiveCodeBench (AA): **82.2%** (Artificial Analysis leaderboard result reproduced by BenchLM).
- Vibe Code Bench v1.1: **1.20%** (Vals AI leaderboard result reproduced by BenchLM). This is a sharply weaker result on a different coding task suite; do not average it with LiveCodeBench as if the tests were interchangeable.
- No verified SWE-bench Verified, SWE-bench Pro, or Terminal-Bench result found for the reasoning variant.

Multimodal / long context:

- AA-MMMU-Pro: **63.3%** for the reasoning variant (Artificial Analysis result reproduced by BenchLM).
- xAI states that Grok 4.1 Fast was trained for multi-turn performance across its **2M-token** context, but no numeric long-context retrieval result was verified. Artificial Analysis lists a **2M** context; BenchLM's summary lists **2M** for the reasoning variant and **1M** for the non-reasoning sibling, so the latter is not applied to this report.

### Normalized scores (1–100)

- **Tool use: 88/100.** The reported τ²-bench Telecom result is 100% (with a 93.3% broader AA figure), and xAI reports promising search-agent results; the score is capped by vendor-specific evidence and no verified GDPval-AA result.
- **Reasoning: 81/100.** GPQA Diamond is 85.3% and AA-LCR is 74.0%, but HLE is 19.3% and the reproduced AA Intelligence Index is 20.4%; the mixed profile and secondary presentation cap the score.
- **Context window: 96/100.** The vendor and independent model listing specify 2M tokens, above the 1M threshold. No verified ≥98% retrieval result at 512K+ supports a 100.
- **Multimodal: 65/100.** Text and image input qualify for the project's image-input band; output is text only, with no verified audio/video input.
- **Coding: 75/100.** LiveCodeBench is 82.2%, but Vibe Code Bench v1.1 is 1.20% and no SWE-bench/Terminal-Bench score was verified; evidence is mixed and limited.
- **Cost efficiency: 95/100.** Launch prices of $0.20/$0.50 per MTok are inexpensive under the project scale, with a further $0.05 cached-input rate. Successful Agent Tools invocations have a separate fee, and current availability/pricing is unconfirmed.
- **Overall Score: 81/100.** Half-up mean of the five quality dimensions: `(88 + 81 + 96 + 65 + 75) / 5 = 81`. Best fit is cost-conscious long-context agents that need tool calling; weaker coding suite results and uncertain current API status are important caveats.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-29
- Method: Three independent public searches; xAI's [Grok 4.1 Fast launch post](https://x.ai/news/grok-4-1-fast), current [xAI model/pricing docs](https://docs.x.ai/docs/models), [Artificial Analysis reasoning-variant listing](https://artificialanalysis.ai/models/grok-4-1-fast-reasoning), and its benchmark values as reproduced by [BenchLM](https://benchlm.ai/models/grok-4-1-fast-reasoning). The adjacent non-reasoning variant was checked separately and not used for this report. Vendor Telecom-only results and broader AA results, along with the different coding suites, remain separate. Scores are normalized interpretations, not official xAI ratings.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
