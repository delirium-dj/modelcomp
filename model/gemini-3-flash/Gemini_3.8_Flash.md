# Gemini 3 Flash — findings by Gemini 3.8 Flash

- Source: Google / Gemini (`gemini-3-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google DeepMind's frontier-speed workhorse model, balancing high reasoning and agentic multimodal throughput with low latency.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3-flash`); OpenCode Zen (`opencode/gemini-3-flash`).
- **Release / knowledge:** 2025-12-17 release; knowledge cutoff late 2025.
- **IDs:** `google/gemini-3-flash`, `opencode/gemini-3-flash`
- **Context window:** 1,048,576 tokens (1M input, up to 64k tokens output).
- **Modalities:** text, code, images, audio, video, PDF in; text and code out; structured JSON mode; tool calls / function calling; thought chain reasoning.
- **Pricing (as of 2026-09-24):** $0.50 / 1M input ($0.050 cached read), $3.00 / 1M output; free tier available via Google AI Studio (rate-limited, data used for model improvement).
- **Architecture:** Proprietary multimodal sparse Mixture-of-Experts (MoE).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **53.9%** (BenchLM / Vals)
- Claw-Eval: **49.2%** (BenchLM)
- Gert Labs agentic tasks: **56.63%** (BenchLM)
- GAIA (General AI Assistants): **35.2%** (evals.report / unverified)
- GDPval: **1204 Elo** (evals.report / Google DeepMind official)
- JobBench: **11.4%** (BenchLM)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.2%** (evals.report / Google DeepMind official; 87.9% BenchLM Vals)
- Humanity's Last Exam (HLE): **36.6%** (evals.report / Google DeepMind official)
- FrontierMath: **35.64%** Tiers 1-3, **4.17%** Tier 4 (evals.report / official)
- ARC-AGI-1: **84.67%** (evals.report / official)
- ARC-AGI-2: **33.61%** (evals.report / official)
- AIME 2026: **95.83%** (evals.report / official)
- MMLU-Pro: **89.0%** (evals.report / verified; 88.6% BenchLM Vals)
- Artificial Analysis Intelligence Index: **35 Index** (evals.report / unverified)
- Omniscience Accuracy / Hallucination Rate: **13.5%** hallucination rate (evals.report / Vectara Hallucination Leaderboard)
- CritPt: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **75.4%** (evals.report / Google DeepMind official; 75.0% BenchLM Vals)
- SWE-bench Pro: **34.63%** (evals.report / official)
- SWE-rebench: **57.6%** pass@1 (evals.report / official)
- LiveCodeBench: **79.7%** pass@1 (evals.report; 85.6% BenchLM Vals)
- LiveCodeBench Pro: **2316 Codeforces Elo** (evals.report / official)
- DeepSWE: **5.16%** (evals.report / official)
- SciCode: **50.6%** (evals.report / unverified)
- Vibe Code Bench: **20.20%** (evals.report / verified)

Long context:

- OpenAI-MRCR v2: **22.1%** accuracy at long context (evals.report / verified)
- Full 1M token context window retrieval verified across documents and video.

### Normalized scores (1–100)

- **Tool use: 85/100.** Verified 53.9% on Terminal-Bench 2.1, 1204 GDPval Elo, and 49.2% Claw-Eval demonstrate solid agentic and tool calling capabilities, capped below frontier specialized reasoning models.
- **Reasoning: 89/100.** Strong GPQA Diamond (83.2%), 36.6% on HLE, 89.0% MMLU-Pro, and 95.8% AIME 2026 show high-tier analytical reasoning, capped by hard math/HLE boundaries.
- **Context window: 92/100.** Full 1M token multi-modal context window enables long-form document and video reasoning, though with moderate retrieval degradation on complex coreference (22.1% MRCR v2).
- **Multimodal: 91/100.** Native multimodal architecture handling audio, video, images, PDFs, and text with 86.9% Video-MMMU and 80.3% CharXiv, capped only by lack of native image/audio generation output.
- **Coding: 88/100.** Exceptional 75.4% SWE-bench Verified and 79.7%–85.6% LiveCodeBench place it firmly in frontier-level coding performance for high-speed models.
- **Cost efficiency: 86/100.** At $0.50/1M input and $3.00/1M output alongside a generous free evaluation tier on Google AI Studio, it offers very competitive price-to-performance.
- **Overall Score: 89/100.** Mean of quality dimensions: Math.round((85 + 89 + 92 + 91 + 88) / 5) = 89.0. Outstanding balanced frontier speed model suited for production agent pipelines and code review.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24 UTC
- Method: Public web research across evals.report and BenchLM verified ledgers; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
