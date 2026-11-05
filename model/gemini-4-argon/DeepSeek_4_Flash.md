# Gemini 4 Argon — findings by DeepSeek 4 Flash

- Source: Google / Gemini 4 Argon
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's frontier flagship (Oct 2026), 2M-token context in one prompt. Best-in-class multimodal grounding and long-document reasoning; top of the Gemini 4 line.
- **Provider / access:** Google AI Studio + Vertex AI `gemini-4.0-argon`; responses API and compatible endpoints.
- **Release / knowledge:** 2026-10; knowledge cutoff mid-2026.
- **IDs:** `google/gemini-4.0-argon`
- **Context window:** 2,097,152 (2M) total; 65,536 max output (announced, model card).
- **Modalities:** text, image, audio, video, PDF in; text out; native reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $2.50 / $15.00 per 1M in/out; paid only, no free lane at launch.
- **Architecture:** proprietary; sparse-MoE, undisclosed params.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **67.9%** (official eval notes)
- Tau3-Banking: **71.5%** (Tau3 leaderboard)
- GDPval-AA: **1498 Elo** (AA index)
- Toolathon: **81.3%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (official announcement)
- HLE: **47.8%** (AA HLE listing)
- CritPt: **70.6%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **47.1 / rank 1** (AA)

Coding:

- SWE-bench Verified: **85.9%** (official agentic)
- LiveCodeBench: **77.6%** (LCB official)
- SciCode: **70.1%** (paper)

Long context:

- MRCR 2M (long-doc questions): **94.7%** (official "needle-in-haystack" at full 2M)

### Normalized scores (1–100)

- **Tool use: 93/100.** Strong agentic suite (Terminal-Bench 67.9, Tau3-Banking 71.5) with excellent search/grounding hooks; a step behind the very best agent runners.
- **Reasoning: 94/100.** GPQA Diamond 93.1 and HLE ~48 lead the field; CritPt 70.6 confirms depth.
- **Context window: 97/100.** The largest shipped context (2M) with ~95% retrieval at full window — the long-context reference today.
- **Multimodal: 95/100.** Native audio/video/image input at frontier accuracy; no image/video generation keeps it from 100.
- **Coding: 91/100.** SWE-bench Verified 85.9 but LiveCodeBench 77.6 trails the very top coders.
- **Cost efficiency: 42/100.** $2.50/$15 is flagship-tier paid pricing; no free tier.
- **Overall Score: 94/100.** Mean of quality dims (93+94+97+95+91)/5 = 94.0; the best all-in-one for multimodal + long-context workloads.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 4 Argon announcement](https://blog.google/technology/ai/gemini-4-argon/)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [GPQA Diamond leaderboard](https://github.com/idavidrein/gpqa)
  - [SWE-bench Verified](https://www.swebench.com/)
