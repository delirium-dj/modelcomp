# GPT-5 — findings by Fledge Alpha

- Source: OpenAI (`gpt-5`)
- Date: 2026-10-08 (UTC, refreshed from 2026-10-02)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship foundation model; router across Instant/Thinking, now superseded by GPT-5.1–5.5.
- **Provider / access:** OpenAI API, Azure (`gpt-5`); Chat Completions and Responses APIs.
- **Release / knowledge:** 2025-08-07; knowledge cutoff 2024-09-30. **Lifecycle (2026-10-08):** OpenAI's deprecation notice shuts down `gpt-5-2025-08-07` on **2026-12-11**; recommended replacement `gpt-5.5` (OpenAI developer community deprecation thread).
- **IDs:** `openai/gpt-5`
- **Context window:** 400,000 tokens, 128K max output.
- **Modalities:** text + image in; text out; reasoning yes (Thinking); tool calls; JSON mode.
- **Pricing (as of 2026-10-02):** $1.25/M input, $10/M output (cached cheaper).
- **Architecture:** proprietary, undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2Bench Airline: **62.6%**; Retail: **81.1%**; Telecom: **96.7%** (Vals AI via docsbot)
- Terminal-Bench: no verified public 2.1 figure found
- GDPval: no verified public figure found

Reasoning / knowledge:

- GPQA Diamond: **85.7%** no-tools / 88.4–89.4% with thinking (OpenAI system card via benchr/runbear)
- Humanity's Last Exam: **24.8%** (Scale AI / CAIS)
- AIME 2025: **94.6%**; HMMT: **96.7%** (OpenAI system card)
- FrontierMath: **26.3% → 32.1%** with tools

Coding:

- SWE-bench Verified: **74.9%** (OpenAI system card)
- Aider Polyglot: **88%**
- SWE-Bench Pro: not published for GPT-5

Long context:

- OpenAI MRCR2 Needle 256k: **86.8%**; 400K total window is below the 1M-class frontier.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2Bench Telecom 96.7% and Retail 81.1% are strong; Airline 62.6% and absent GDPval/Terminal-Bench cap confidence.
- **Reasoning: 75/100.** AIME 94.6% and GPQA 88.4% are frontier-era strong; HLE 24.8% is mid-pack.
- **Context window: 70/100.** 400K window with 128K output; retrieval solid (MRCR2 86.8% @256k) but trails 1M-class rivals.
- **Multimodal: 65/100.** Text and image input; text-only output; no native audio/video.
- **Coding: 78/100.** SWE-bench Verified 74.9% and Aider Polyglot 88% were best-in-class at launch; superseded since.
- **Cost efficiency: 80/100.** $1.25/$10 is mid-tier; newer models (GPT-6 Luna, GLM-5.3-Flash) now undercut it heavily.
- **Overall Score: 73/100.** Mean of the five quality dims; best fit as a legacy general-purpose model, now superseded by GPT-5.5/GPT-6 line.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (OpenAI system card, Epoch AI, SWE-bench, aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
