# Gemini 3.6 Flash — findings by Fledge Alpha

- Source: Google (`gemini-3.6-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's July 21, 2026 Flash workhorse, 17% fewer output tokens than 3.5 Flash with broad coding/agentic gains; superseded Aug 13 by 3.7 Flash.
- **Provider / access:** Gemini API (`gemini-3.6-flash`), Vertex AI, AI Studio; free tier available.
- **Release / knowledge:** 2026-07-21; knowledge cutoff Mar 2026.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,048,576 tokens; 65,536 max output.
- **Modalities:** text, image, audio, video, PDF in; text out; thinking minimal/low/medium/high.
- **Pricing (as of 2026-10-02):** Intro $0.75/$3.75 (through 2026-12-31, per the newer Flash promo); standard $1.50/$7.50 from 2027-01-01; Batch/Flex 50% off.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (Terminus-2 harness)
- OSWorld-Verified: **83.0%**
- GDPval-AA v2: **1421 Elo**
- AutomationBench: improved over 3.5 Flash (17.0→30.4% was for 3.7; 3.6 sits between)

Reasoning / knowledge:

- GPQA Diamond: **92.8–93.4%** (AA/vals.ai)
- HLE: **40.8%** (AA) / **38.3%** (AA by one source); ARC-AGI-2: **60.4%** (ARC Prize, high effort)
- AA Intelligence Index: **50** (ties 3.5 Flash); MMLU-Pro: **89.3%** (vals.ai)

Coding:

- SWE-Bench Pro: **58.7%** (Google)
- SWE-bench Verified: **79.6%** (vals.ai); LiveCodeBench: **88.1%** (vals.ai)
- DeepSWE v1.1: **49%** (Google)
- MLE-Bench: **63.9%**; CursorBench 3.2: **53.5%**

Long context:

- GDM-MRCR v2: **91.8%** @128K average; **54.0%** @1M pointwise.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 78% and OSWorld 83% are solid for the tier; GDPval 1421 Elo mid-tier.
- **Reasoning: 78/100.** GPQA ~93% and ARC-AGI-2 60.4%; HLE ~40% and AA Index 50 are mid-pack.
- **Context window: 88/100.** 1M window with 91.8% MRCR at 128K, dropping to 54% at full 1M; 64K output cap.
- **Multimodal: 95/100.** Full native text/image/audio/video/PDF input.
- **Coding: 74/100.** SWE-bench Verified ~80% and DeepSWE 49% improve on 3.5 but trail the newest Flash tiers.
- **Cost efficiency: 78/100.** Standard $1.50/$7.50 is beaten by the $0.75 intro rates Google applied to all Flash models through 2026-12-31.
- **Overall Score: 83/100.** Mean of the five quality dims; a stepping-stone release between 3.5 Flash and the 3.7/3.8 Flash cadence.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google launch post/model card, vals.ai, AA, ARC Prize, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
