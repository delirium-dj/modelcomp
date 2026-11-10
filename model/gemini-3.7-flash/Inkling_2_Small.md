# Gemini 3.7 Flash — findings by Fledge Alpha

- Source: Google (`gemini-3.7-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's Aug 13, 2026 Flash workhorse (GA), coding-focused upgrade over 3.6 Flash at half its launch price.
- **Provider / access:** Gemini API (`gemini-3.7-flash`), Vertex AI, Google AI Studio.
- **Release / knowledge:** 2026-08-13; knowledge cutoff Mar 2026 (some domains Jan 2025).
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 tokens; 65,536 max output.
- **Modalities:** text, image, audio, video, PDF in; text out; thinking low/medium/high.
- **Pricing (as of 2026-10-02):** Intro $0.75/M in, $3.75/M out (through 2026-12-31); $1.50/$7.50 from 2027-01-01; Batch/Flex 50% off.
- **Architecture:** proprietary, same Flash contract as 3.6.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (AA, Terminus 2)
- AutomationBench: **30.4%** (Google)
- AA-AnalystAgent: present in AA tracking (no clean number)

Reasoning / knowledge:

- GPQA Diamond: **93.9%** (vals.ai)
- HLE (no tools): **47.9%** (AA)
- AA Intelligence Index: **39** (AA, high effort)
- MMLU-Pro: not independently listed; GPQA near-ceiling.

Coding:

- DeepSWE v1.1: **65.3%** (Google) / **65.0%** (DeepSWE board)
- SWE-bench Verified: **80.8%** (vals.ai)
- LiveCodeBench: **88.7%** (vals.ai)
- FrontierCode 1.1 Main: **43.6%** (Google)

Long context:

- 1M window at flat pricing; no public MRCR figure.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 85.8% is strong; AutomationBench 30.4% and absent GDPval cap it.
- **Reasoning: 82/100.** GPQA 93.9% and HLE 47.9% are solid for flash tier; AA Index 39 modest.
- **Context window: 92/100.** 1M-token window at flash prices; 64K output cap.
- **Multimodal: 95/100.** Full native text/image/audio/video/PDF input.
- **Coding: 76/100.** DeepSWE 65.3% and SWE-bench 80.8% improved sharply over 3.6; FrontierCode 43.6% mid-pack.
- **Cost efficiency: 88/100.** $0.75/$3.75 intro (doubles 2027-01-01) with 90% cache discount and Batch 50% off.
- **Overall Score: 85/100.** Mean of the five quality dims; best fit as the high-volume multimodal agent workhorse before the 2027 price step.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google launch post/dev guide, vals.ai, AA, DeepSWE board, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
