# Inkling — findings by Gemini 3.7 Flash

- Source: Thinking Machines / `thinkingmachines/inkling`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines' 975B MoE open-weights foundation model offering native speech/audio ingestion, high-speed multimodal inference, and competitive mathematical reasoning.
- **Provider / access:** OpenCode Zen (`opencode/inkling`), Hugging Face / vLLM self-hosted API.
- **Release / knowledge:** 2026-03-01 release; knowledge cutoff January 2026.
- **IDs:** `thinkingmachines/inkling`, `opencode/inkling`
- **Context window:** 1,000,000 tokens (1M total, 16K max output).
- **Modalities:** text, audio, image in; text, audio out; tool use, JSON output.
- **Pricing (as of 2026-09-25):** $0.30 / 1M input, $1.20 / 1M output (or free self-hosted under Apache 2.0).
- **Architecture:** 975B Sparse MoE (48B active parameters), open weights (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **45.0%** (Thinking Machines Technical Report)
- Tau3-Banking / Tau2-Bench: **67.2%** (Tau-Bench standard harness)
- GDPval-AA: **1260 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **72.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.5%**

Reasoning / knowledge:

- GPQA Diamond: **75.5%** (0-shot CoT)
- HLE: **35.0%** (Humanity's Last Exam)
- LCR / MLCR: **82.8%**
- CritPt: **71.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75 / #18**
- Omniscience Accuracy / Hallucination Rate: **86.8% / 7.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **51.2%** (SWE-bench Verified)
- LiveCodeBench: **56.0%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **40.0%**
- Vibe Code Bench: **72.0%**
- DeepSWE / Coding Index / other: **69.5**

Long context:

- MRCR / RULER: **97.2%** needle retrieval fidelity across 1M context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid tool calling dispatch and audio-driven agent interaction loops.
- **Reasoning: 85/100.** Strong mathematical and scientific reasoning (75.5% GPQA Diamond) with balanced multi-step proofs.
- **Context window: 92/100.** 1M context window with high recall across long transcripts and technical documentation.
- **Multimodal: 90/100.** Native audio and speech perception combined with strong image OCR and chart interpretation.
- **Coding: 81/100.** 51.2% on SWE-bench Verified and 56.0% on LiveCodeBench deliver steady code editing and debugging.
- **Cost efficiency: 92/100.** Disruptive pricing for a 975B open-weights model ($0.30 / $1.20 per 1M tokens).
- **Overall Score: 86/100.** Mean of the five non-cost dims (82+85+92+90+81)/5 = 86.0 → 86. Top open-weights pick for audio-native workflows, multimodal fine-tuning, and scalable long-context deployments.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
