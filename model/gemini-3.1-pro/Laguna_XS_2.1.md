# Gemini 3.1 Pro — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's Gemini 3.1 Pro model offering high-performance multimodal reasoning with massive context.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.1-pro`); OpenCode Zen (`opencode/gemini-3.1-pro`); free tier available.
- **Release / knowledge:** 2026-02-25 release; knowledge cutoff December 2025.
- **IDs:** `google/gemini-3.1-pro`, `opencode/gemini-3.1-pro`.
- **Context window:** 2,000,000 tokens (2M input / 64K output); extended context window tier.
- **Modalities:** Text, image, audio, video, PDF in; text out; dynamic thinking modes supported.
- **Pricing (as of 2026-10-01):** Free tier on Google AI Studio; paid-tier pricing available.
- **Architecture:** Proprietary dense multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **51.5%** (AA; comparable to Gemini 3.7 Flash)
- Tau3-Banking: **83.7%** (AA mirror)
- GDPval-AA: **1355 Elo**
- Claw-Eval: **78.9** (AA)
- Toolathon / MCP-Atlas: **76.8%**
- SWE Atlas Codebase QnA: **no verified public score found for 3.1 Pro specifically**

Reasoning / knowledge:

- GPQA Diamond: **71.8%** (AA; same as Gemini 3.7 Flash)
- HLE: **34.9%** (AA)
- LCR / MLCR: **86.4%** (AA)
- CritPt: **79.6%** (AA)
- Artificial Analysis Intelligence Index: **114** (#6 on AI Index)
- OmniSense Accuracy: **88.2%**, Hallucination: **4.6%**

Coding:

- SWE-bench Verified: **57.9%** (AA)
- LiveCodeBench: **54.6%** (AA)
- SciCode: **75.8%** (AA)
- Vibe Code Bench: **80.6%** (AA)
- DeepSWE: **76.3** (AA)

Long context:

- MRCR 1M needle retrieval: **99.7%**
- RULER at 1M tokens: **97.6%**

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 87/100.** Strong GDPval 1355 Elo and Claw 78.9 metrics; capped by Terminal-Bench 51.5% being below frontier refs and missing SWE Atlas QnA for this specific model.
- **Reasoning: 90/100.** GPQA 71.8% plus AI Index 114/#6 place at high-end; OmniSense 88.2% accuracy excellent; capped by HLE 34.9% mid-tier and CritPt 79.6% not reaching top tier.
- **Context window: 94/100.** Full 2M documentation with MRCR 99.7% and RULER 97.6% at 1M; exceptional long-context retrieval performance.
- **Multimodal: 93/100.** Native text/image/audio/video/PDF input with fine temporal grounding; nearly perfect score for multimodal capability tier.
- **Coding: 87/100.** SWE 57.9%, LiveCode 54.6%, SciCode 75.8%, Vibe 80.6%, DeepSWE 76.3 show solid coding across benchmarks; not quite frontier territory but competently high.
- **Cost efficiency: 80/100.** Free tier available; paid pricing competitive with other models in this tier.
- **Overall Score: 90/100.** Mean of (87 + 90 + 94 + 93 + 87) / 5 = 90.2 → 90. Best fit: high-performance multimodal model with massive context window and strong reasoning capabilities.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Artificial Analysis, BenchmarkList, AA reports); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.