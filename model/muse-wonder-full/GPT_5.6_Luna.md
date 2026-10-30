# Muse Wonder Full — findings by GPT 5.6 Luna

- Source: Meta / Muse Wonder Full
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's larger Muse Wonder-series frontier model for long-running personal and professional agents, including sustained software engineering, knowledge work, memory, and multimodal tasks. It is a distinct Full variant, not merely a subscription label for Muse Wonder.
- **Provider / access:** Meta Muse Code subscriber access; Meta's launch post says Muse Wonder Full is available through Muse Code while the smaller Muse Wonder is the model exposed through the Meta Model API. Artificial Analysis reports no public API for Full as of this research date.
- **Release / knowledge:** 2026-10-12 release; knowledge cutoff not disclosed.
- **IDs:** `meta/muse-wonder-full-1.0` (catalog route); no public token API ID for Full was verified. The standard `muse-wonder` route must not be substituted.
- **Context window:** 1M total tokens; maximum output not published. The 1M figure is independently listed by Artificial Analysis and The Decoder.
- **Modalities:** Text, image, speech, and video input; text output; extended reasoning; agentic tool use in Muse Code and benchmark harnesses. The public API/tool contract for Full is not documented.
- **Pricing (as of 2026-10-30):** No public per-token price; access is through paid Muse Code subscription plans. Artificial Analysis marks the model as having no publicly available API, so cost-per-token comparisons are not available.
- **Architecture:** Proprietary Meta model; parameter count and weights are undisclosed.

### Raw benchmarks found

> Scores below retain the benchmark version and harness where the source provides them. Meta's model-card PDF is linked from the launch post, while the HTML launch page describes the evaluation areas but does not expose its image/table values as text.

Agent / tool use:

- Terminal-Bench 4.0: **57%** (The Decoder's report of Meta's launch comparison; exact Muse Wonder Full result, with the article noting the standard Wonder result at 52%).
- GDPval-AA v2.1: **1,857 Elo** and GDP.pdf: **33%** (Artificial Analysis launch comparison; Full was reported #2 on GDPval-AA and narrowly led GDP.pdf).
- AA-Briefcase: **1,729 Elo** and AutomationBench-AA: **71%** (Artificial Analysis launch comparison; Full placed among the leading models).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **50** (Artificial Analysis's current independently measured page, updated after the v4.3 launch snapshot).
- Artificial Analysis Intelligence Index v4.3: **56** (The Decoder and Artificial Analysis's launch announcement; not directly interchangeable with the current v5.0 score).
- ProofBench: **94/100** (The Decoder's report of Meta's comparison; predecessor Muse Spark 1.3 was reported at 58/100).
- CritPt: **33%** (Artificial Analysis's launch comparison, scientific-reasoning result).
- AA-Omniscience: **30** and reported hallucination rate **23%** (The Decoder's transcription of the launch evaluation table).

Coding:

- Coding Agents Index: **68** (The Decoder, citing the Artificial Analysis comparison; tied Claude Sonnet 5.5 in that snapshot).
- Terminal-Bench 4.0: **57%** (The Decoder; agentic coding result, repeated here because it is also a tool-use measure).
- ProofBench: **94/100** (The Decoder; mathematical-proof/coding-adjacent reasoning result).

Long context:

- Declared context: **1M tokens** (Artificial Analysis and The Decoder).
- No independently reported MRCR, RULER, or other exact-model retrieval score was found; Meta's Active Memory claims are product/evaluation descriptions, not a retrieval percentage.

Multimodal:

- Artificial Analysis lists text, image, speech, and video input with text output; The Decoder independently reports the same input coverage. No non-text output modality was verified.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 4.0 at 57%, GDPval-AA 1,857 Elo, AA-Briefcase 1,729 Elo, and AutomationBench-AA 71% show strong agent execution; the current AA composite is only 50 and Full lacks a public API for broader reproducibility, which caps the score below the frontier ceiling.
- **Reasoning: 86/100.** ProofBench 94/100 and CritPt 33% show excellent specialist reasoning, while the current AA Index 50 and AA-Omniscience 30/23% result are strong but not dominant; the mixed knowledge signal caps this dimension.
- **Context window: 98/100.** The independently documented 1M-token window earns the top tier, but no exact-model retrieval curve at the advertised limit was found, so it is not awarded a fully measured 100.
- **Multimodal: 95/100.** Text, image, speech, and video input are independently documented, with text output; the absence of non-text output keeps it below the maximum.
- **Coding: 88/100.** Coding Agents Index 68 and Terminal-Bench 4.0 at 57%, plus ProofBench 94/100, support a high score; the lack of an independently reproduced SWE-style score and the current AA composite cap it.
- **Cost efficiency: 55/100.** Full has no published token price and is subscription-only, so it cannot receive the standard low-price bonus or a precise task-cost score.
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions `(88 + 86 + 98 + 95 + 88) / 5 = 91`; best suited to long-horizon multimodal agent work when Muse Code access is available.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-30
- Method: Three independent search tracks (Meta's official launch/model-card links, Artificial Analysis measurements, and independent reporting from The Decoder), followed by direct page checks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
