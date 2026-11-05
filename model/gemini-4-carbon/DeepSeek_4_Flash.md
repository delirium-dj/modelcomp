# Gemini 4 Carbon — findings by DeepSeek 4 Flash

- Source: Google / Gemini 4 Carbon
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google's balanced Gemini 4-line model (Oct 2026), the value variant of the Gemini 4 generation with 1M context and full multimodal input — a mid-flight Pro-class model below the Argon flagship.
- **Provider / access:** Google AI Studio + Vertex AI `gemini-4-carbon`.
- **Release / knowledge:** 2026-10; knowledge cutoff mid-2026.
- **IDs:** `google/gemini-4-carbon`
- **Context window:** 1,048,576 (1M) total; 65,536 max output.
- **Modalities:** text, image, audio, video, PDF in; text out; native reasoning; tool calls.
- **Pricing (as of 2026-11):** $1.25 / $8.00 per 1M in/out; paid only.
- **Architecture:** proprietary; MoE-style expert routing, smaller than Argon.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.9%** (official)
- Tau3-Banking: **69.1%** (Tau3 leaderboard)
- GDPval-AA: **1439 Elo** (AA index)

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (official)
- HLE: **39.4%** (AA HLE listing)
- CritPt: **66.9%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **42.0 / rank 6** (AA)

Coding:

- SWE-bench Verified: **80.8%** (official)
- LiveCodeBench: **72.9%** (LCB official)

Long context:

- MRCR 1M: **92.4%** (official long-context suite)

### Normalized scores (1–100)

- **Tool use: 91/100.** Capable agentic tool use (Terminal-Bench 63.9, Tau3-Banking 69.1) at a value price point; not an elite agent runner.
- **Reasoning: 93/100.** GPQA Diamond 89.9 with solid HLE 39.4 — Pro-class reasoning in a lighter package.
- **Context window: 95/100.** Full 1M at ~92% retrieval for a non-flagship tier — genuinely good.
- **Multimodal: 93/100.** Full native audio/video/image input at near-flagship accuracy.
- **Coding: 90/100.** SWE-bench Verified 80.8 with a good speed/quality balance.
- **Cost efficiency: 52/100.** $1.25/$8 is competitive for the capability; no free tier.
- **Overall Score: 92/100.** Mean of quality dims (91+93+95+93+90)/5 = 92.4 → 92; the pragmatic Gemini 4 pick when Argon's price is too high.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 4 Carbon](https://ai.google.dev/gemini-api/docs/models/gemini-4-carbon)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [GPQA Diamond leaderboard](https://github.com/idavidrein/gpqa)
  - [SWE-bench Verified](https://www.swebench.com/)
