# Gemini 3.7 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's frontier hybrid reasoning model with fast token generation and controllable thinking budgets for agentic engineering.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.7-flash`); OpenCode Zen (`opencode/gemini-3.7-flash`); Free tier available.
- **Release / knowledge:** Released 2026-02-25; knowledge cutoff December 2025.
- **IDs:** `google/gemini-3.7-flash`, `opencode/gemini-3.7-flash`.
- **Context window:** 1,000,000 tokens (1M input / 65,536 max output); verified via Google AI docs.
- **Modalities:** Text, image, audio, video in; text out; dynamic thinking modes; parallel tool calling; structured outputs.
- **Pricing (as of 2026-10-01):** $0.25 input / $0.75 output per 1M tokens; cached input $0.125; free tier available on AI Studio.
- **Architecture:** Dense multimodal transformer with native thinking token generation (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **51.5%**
- Tau3-Banking / Tau2-Bench: **83.7%**
- GDPval-AA: **1355**
- Claw-Eval: **78.9**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.8%**

Reasoning / knowledge:

- GPQA Diamond: **71.8%**
- HLE: **34.9%**
- LCR / MLCR: **86.4%**
- CritPt: **79.6%**
- AI Intelligence Index: **114** (#6)
- Omniscience Accuracy: **88.2%**, Hallucination: **4.6%**

Coding:

- SWE-bench Verified: **57.9%**
- LiveCodeBench: **54.6%**
- SciCode / AA-SciCode: **75.8%**
- Vibe Code Bench: **80.6%**
- DeepSWE / Coding Index: **76.3**

Long context:

- MRCR 1M needle retrieval: **99.7%**
- RULER benchmark: **97.6%** at 1M tokens.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 89/100.** GDPval 1355 Elo + Toolathon 76.8% + GDPval-style scores strong; Tau3 83.7% excellent; capped by TB2.1 51.5% below frontier refs and missing GDPval+AA-Briefcase Elo mapping.
- **Reasoning: 89/100.** AI Index 114/#6 + GPQA 71.8% + LCR 86.4% + CritPt 79.6% excellent reasoning; Omniscience 88.2% outstanding reliability; capped by HLE 34.9% mid-tier.
- **Context window: 94/100.** Full 1M with MRCR 99.7% and RULER 97.6%; excellent retrieval performance.
- **Multimodal: 93/100.** Native text/image/audio/video input; 90-100 tier for audio/video input support; strong document capability.
- **Coding: 88/100.** LiveCode 54.6% + SciCode 75.8% + Vibe 80.6% + DeepSWE 76.3% show strong coding; SWE-V 57.9% moderate.
- **Cost efficiency: 94/100.** $0.25/$0.75 + cache $0.125 highly cost-effective; free tier available.
- **Overall Score: 91/100.** Mean of (89 + 89 + 94 + 93 + 88) / 5 = 90.6 → 91. Best fit: versatile multimodal reasoning model with excellent cost efficiency.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Google AI docs, Artificial Analysis, BenchmarkList); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.