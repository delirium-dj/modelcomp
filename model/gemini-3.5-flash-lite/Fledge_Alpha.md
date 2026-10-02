# Gemini 3.5 Flash-Lite — findings by Fledge Alpha

- Source: Google (`gemini-3.5-flash-lite`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's July 21, 2026 fastest, cheapest Gemini 3 tier; AA-measured ~350 output tokens/s and better coding/agent numbers than the older Gemini 3 Flash.
- **Provider / access:** Gemini API (`gemini-3.5-flash-lite`), AI Studio, Vertex AI, Gemini app, Search AI Overviews.
- **Release / knowledge:** 2026-07-21; knowledge cutoff Mar 2026.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 tokens; 65,536 max output.
- **Modalities:** text, image, audio, video, PDF in; text out; thinking low/medium/high; tools incl. code execution, file search, Google Maps grounding, URL context.
- **Pricing (as of 2026-10-02):** $0.30/M in, $0.03/M cached, $2.50/M out; Batch/Flex 50% off.
- **Architecture:** Proprietary Flash-Lite tier.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (Google model card, Terminus-2) — out-classes Gemini 3 Flash's 65.1% OSWorld row and matches GPT-5.4 mini (59.2%)
- OSWorld-Verified: **74.0%** (beats Gemini 3 Flash's 65.1%)
- GDPval-AA v2: **1140 Elo** (vs 3.1 Flash-Lite's 642)

Reasoning / knowledge:

- AA Intelligence Index: **36** (well above the median for its price tier)
- GPQA Diamond / HLE: not published for this ID (deliberately thin coverage on the card — read the broader reasoning profile from the Intelligence Index row, not academic tables)

Coding:

- SWE-Bench Pro: **54.2%** (ties GPT-5.4 mini's 54.4%)
- SWE-bench Verified: ~75% class (aggregator-reported)

Long context:

- GDM-MRCR v2: **72.2%** (vs 3.1 Flash-Lite's 60.1%)

Multimodal:

- Native text/image/audio/video/PDF input with 1M window — same modality surface as 3.5 Flash.

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.1 54% and OSWorld 74% are AA-class for a Lite tier; GDPval 1140 Elo is the open-value tier.
- **Reasoning: 66/100.** AA Index 36 with no published GPQA/HLE row for this ID; the Flash-Lite intent is speed/cost over peak reasoning.
- **Context window: 86/100.** 1M window with 72.2% GDM-MRCR v2 — better tail recall than recent Pro tiers (GPT-5.4's 36% at 1M).
- **Multimodal: 94/100.** Full 3.5-line modality surface at the cheapest price.
- **Coding: 72/100.** SWE-Bench Pro 54.2% ties GPT-5.4 mini and beats Gemini 3 Flash (49.6%) — remarkable for the price tier.
- **Cost efficiency: 94/100.** $0.30/$2.50 with cached input at $0.03 and Batch 50% off — the most aggressive multimodal Gemini entry.
- **Overall Score: 78/100.** Mean of the five quality dims; best fit for high-volume computer-use loops, doc triage, and extraction where Flash-tier capability is enough. Pair with 3.8 Flash for harder reasoning/coding rows.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google launch blog + model card, AI/TLDR, Gradually, userightai/anotherwrapper); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
