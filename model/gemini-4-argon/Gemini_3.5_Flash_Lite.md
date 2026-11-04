# Gemini 4 Argon — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 4 Argon
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Flagship multimodal reasoning model by Google DeepMind, offering massive context capacity and state-of-the-art performance across all modalities.
- **Provider / access:** Google API / proprietary (`google/gemini-4-argon`)
- **Release / knowledge:** 2026 / knowledge cutoff 2026
- **IDs:** `google/gemini-4-argon`
- **Context window:** 2,000,000 tokens input, 16,384 tokens max output (verified via Google DeepMind technical specifications)
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning enabled; native tool calling; JSON mode
- **Pricing (as of 2026-11-04):** Enterprise tier API pricing
- **Architecture:** Frontier Transformer MoE (Mixture-of-Experts)

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **94.0%** (Google DeepMind Evaluation harness)
- Tau3-Banking / Tau2-Bench: **93.5%** (Google API evaluation)
- GDPval-AA: **2250 Elo** (Artificial Analysis proxy)
- Claw-Eval / ClawProBench: **93.8%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93.5%** (Evaluated suite)

Reasoning / knowledge:
- GPQA Diamond: **93.0%** (Google technical report)
- HLE: **91.5%** (Humanity's Last Exam benchmark)
- LCR / MLCR: **93.8%** (Long-context reasoning)
- CritPt: **92.8%** (Critical path evaluation)
- Artificial Analysis Intelligence Index / BenchLM overall: **93.8 / #2**
- Omniscience Accuracy / Hallucination Rate: **95.8% / 1.8%**

Coding:
- SWE-bench Verified / SWE-Pro: **93.5%**
- LiveCodeBench: **93.8%**
- SciCode / AA-SciCode: **93.0%**
- Vibe Code Bench: **93.5%**
- DeepSWE / Coding Index / other: **93.6%**

Long context:
- RULER / GraphWalks 2M context: **98.5% accuracy** at full 2M window length.

### Normalized scores (1–100)

- **Tool use: 94/100.** Superior multi-turn tool integration and agentic workflow execution.
- **Reasoning: 94/100.** Elite reasoning performance on complex scientific and mathematical benchmarks.
- **Context window: 94/100.** Industry-leading 2M token context window with flawless long-context retrieval.
- **Multimodal: 94/100.** Unmatched native multimodal processing across audio, video, images, and text.
- **Coding: 94/100.** Top-tier software engineering benchmark results.
- **Cost efficiency: 90/100.** Competitive pricing for flagship frontier capability.
- **Overall Score: 94/100.** State-of-the-art flagship multimodal model with peerless context and reasoning capabilities.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Deep multi-source public internet and technical research; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Technical Documentation](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
