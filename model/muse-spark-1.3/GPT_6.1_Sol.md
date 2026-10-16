# Muse Spark 1.3 — findings by GPT 6.1 Sol

- Source: Meta / `muse-spark-1.3`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary multimodal reasoning model for sustained coding, tool use, and knowledge work. Contributor pricing and max/xhigh reasoning settings belong to this same model, not separate model entries.
- **Provider / access:** Meta Model API, base `https://api.meta.ai/v1`; Responses, Chat Completions, and Anthropic-compatible Messages surfaces [S1].
- **Release / knowledge:** Released September 2, 2026 [S2]; knowledge cutoff not verified.
- **IDs:** `muse-spark-1.3`, `muse-spark-1.3-contributor` [S1]. A current Zen Free route was not independently established in this research.
- **Context window:** 1,048,576 tokens [S1]. Exact first-party maximum output not verified; the approximately 944K output field on LLM Stats [S5] is not accepted as a verified output guarantee.
- **Modalities:** Text, image, video/document perception and text output; reasoning, parallel tool calls, and structured output [S1,S3,S4]. LLM Stats also labels audio input, but the sources inspected do not resolve standalone audio support for this exact hosted model; no audio bonus awarded.
- **Pricing (as of 2026-10-16):** Standard $1.25 input / $0.15 cached input / $4.25 output per million tokens. Contributor $0.10 / $0.002 / $0.20, with prompts/completions used to improve Meta products [S3,S5]. Contributor is discounted, not inherently free.
- **Architecture:** Proprietary; parameter count undisclosed [S4]. Do not transfer Muse Spark Open's parameter count to 1.3.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** vendor max setting [S3], versus approximately **86% max / 85% xhigh** independently reported at launch by Artificial Analysis [S6]. Separate harnesses, not averaged.
- Tau3-Bench Banking: **52% max / 47% xhigh** [S6].
- GDPval-AA v2: **1754 Elo max / 1709 xhigh** [S6]; vendor scorecard also reports 1754 [S3].
- JobBench **64.9%**, OSWorld 2.0 **66.9% partial / 32.0% binary**, DeepSearchQA **90.3%**, AutomationBench **49.6%**: vendor max-setting measurements [S3].
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: approximately **94%**, max and xhigh [S6].
- HLE: approximately **47% xhigh**, max about two points higher [S6]; this is the article's rounding, not an exact decimal measurement.
- CritPt: **26% xhigh**, max one point lower [S6].
- AA-LCR: **79%** both settings [S6].
- Artificial Analysis Intelligence Index: **62 max / 61 xhigh at launch** [S6]; current model page **48**, rank **24/217**, explicitly using Index **v4.3.2** [S4]. These are different index snapshots; 48 is not a percentage or directly comparable to the historical 62.
- AA-Omniscience accuracy: **44% max / 42% xhigh** [S6]; exact hallucination percentage not verified.

Coding:

- DeepSWE v1.1: **75.4%**; SWEAtlas CodeBase QnA: **59.4%**, vendor max setting [S3].
- SciCode: approximately **59% xhigh** in independent launch coverage [S6].
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench: no verified public score found in inspected sources.

Long context:

- Vendor MRCR: **98.5% at 256K–512K**, **98.1% at 512K–1M** [S3]. This supports near-full-window retrieval, whereas AA-LCR 79% measures harder reasoning rather than simple retrieval [S6].

### Evidence comparison and research trail

Three separate successful searches on DuckDuckGo: `"Muse Spark 1.3"`; `Muse Spark 1.3 official model API documentation`; `Muse Spark 1.3 independent benchmark review MRCR`. Google returned a JavaScript interstitial, Brave returned 429, and Bing produced irrelevant results; none was treated as evidence. Official docs, the vendor scorecard, independent AA measurements, and a separate aggregator were read directly.

The AA launch article described max as limited preview with unannounced pricing, while the official release page says max is available on Model API [S2,S6]. This is an availability snapshot discrepancy: use the current official access statement, retain the launch article's exact effort labels for its measurements. AA's current index and launch index are kept separate because methodology changed. Vendor terminal results exceed AA by roughly three points; this is harness-dependent evidence, not proof of a regression. LLM Stats repeats official pricing and is corroboration, not an independent rerun of the vendor benchmark suite.

### Normalized scores (1–100)

- **Tool use: 95/100.** Independent Tau3 52%, GDPval 1754 and terminal performance support frontier agent quality; differing harness results and missing Claw evidence cap certainty [S3,S6].
- **Reasoning: 92/100.** GPQA about 94%, HLE about 47–49% and strong scientific performance support the score, capped by AA-LCR 79% and incomplete knowledge accuracy [S6].
- **Context window: 100/100.** Official 1M context plus vendor retrieval above 98% beyond 512K meets the repository's top tier; retrieval remains vendor-measured [S1,S3].
- **Multimodal: 85/100.** Verified image/video/document input earns the visual multimodal tier; no verified non-text output or standalone audio guarantee [S1,S3,S4].
- **Coding: 95/100.** DeepSWE 75.4%, terminal 86–88.8% and SciCode about 59% meet frontier anchors; several other coding suites remain unverified [S3,S6].
- **Cost efficiency: 98/100.** Scored on the published $0.10/$0.20 Contributor tier, conditional on data-use consent; Standard pricing is materially higher [S3].
- **Overall Score: 93/100.** Half-up mean: (95 + 92 + 100 + 85 + 95) / 5 = 93.4 → 93; strong fit for long-horizon visual coding agents. Cost excluded.

### Sources

- [S1] https://dev.meta.ai/docs/overview — official API protocols, IDs, context, tool capabilities.
- [S2] https://research.meta.ai/blog/introducing-muse-spark-1-3 — official launch and availability.
- [S3] https://dev.meta.ai/models/muse-spark — official benchmark scorecard and pricing.
- [S4] https://artificialanalysis.ai/models/muse-spark-1-3 — current independent model profile and methodology version.
- [S5] https://llm-stats.com/models/muse-spark-1.3 — separate pricing/spec aggregator, not independent benchmark execution.
- [S6] https://artificialanalysis.ai/articles/muse-spark-1-3 — independent launch measurements and effort comparison.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research; three distinct successful searches, direct official and independent source comparison. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new independently signed file next to this one using the same headings.
