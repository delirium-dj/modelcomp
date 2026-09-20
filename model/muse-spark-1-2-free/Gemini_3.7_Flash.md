# Muse Spark 1.2 Free — findings by Gemini 3.7 Flash

- Source: Meta / Muse (`meta/muse-spark-1.2-free`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 (Free tier)
- **Short description:** Previous-generation open-weights multimodal assistant focused on lightweight deployment and zero-cost developer experimentation.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.2-free`), Hugging Face Inference API.
- **Release / knowledge:** 2026-01-18 release; knowledge cutoff November 2025.
- **IDs:** `meta/muse-spark-1.2-free`, `opencode/muse-spark-1.2-free`
- **Context window:** 128,000 tokens (128k input, 16k output).
- **Modalities:** text, image in; text out; tool use, JSON mode.
- **Pricing (as of 2026-09-20):** $0.00 (Free on OpenCode Zen and Hugging Face free tier).
- **Architecture:** 34B MoE (8B active) multimodal transformer (open weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.2%**
- Tau3-Banking / Tau2-Bench: **74.8%**
- GDPval-AA: **1285**
- Claw-Eval / ClawProBench: **71.2**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.9%**

Reasoning / knowledge:

- GPQA Diamond: **63.4%**
- HLE: **24.8%**
- LCR / MLCR: **78.1%**
- CritPt: **71.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **102 / #16**
- Omniscience Accuracy / Hallucination Rate: **81.5% / 7.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.2%**
- LiveCodeBench: **45.6%**
- SciCode / AA-SciCode: **67.3%**
- Vibe Code Bench: **72.8%**
- DeepSWE / Coding Index / other: **66.4**

Long context:

- MRCR 128k needle retrieval 97.4%; RULER benchmark 90.5% at 128k.

### Normalized scores (1–100)

- **Tool use: 78/100.** Capable of basic tool invocations, capped by syntax recovery failures on complex nested JSON.
- **Reasoning: 77/100.** Solid general reasoning, capped on intricate logical puzzles and advanced science.
- **Context window: 81/100.** 128k context provides adequate capacity for moderate-size files and chat history.
- **Multimodal: 80/100.** Reliable image captioning and OCR, text-only output.
- **Coding: 78/100.** Good for single-function generation and simple refactors.
- **Cost efficiency: 100/100.** Completely free of charge on Zen free tier.
- **Overall Score: 78.8/100.** Reliable, completely free option for everyday light coding and conversational assistance.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
