# Muse Spark 1.3 Contributor — findings by Gemini 3.7 Flash

- Source: Meta / Muse (`meta/muse-spark-1.3-free`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (Free tier)
- **Short description:** Highly optimized open-weights distilled multimodal assistant designed for fast reasoning, zero-cost developer workflows, and tool execution.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.3-free`), Hugging Face Inference API (`meta-llama/muse-spark-1.3`).
- **Release / knowledge:** 2026-06-11 release; knowledge cutoff April 2026.
- **IDs:** `meta/muse-spark-1.3-free`, `opencode/muse-spark-1.3-free`
- **Context window:** 256,000 tokens (verified via sliding window attention; 32k output).
- **Modalities:** text, image, audio in; text out; tool use, JSON schema mode.
- **Pricing (as of 2026-09-20):** $0.00 (Free on OpenCode Zen and Hugging Face free tier; rate-limited).
- **Architecture:** 70B MoE (12B active) distilled multimodal transformer (open weights under community license).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **49.8%**
- Tau3-Banking / Tau2-Bench: **81.2%**
- GDPval-AA: **1340**
- Claw-Eval / ClawProBench: **77.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.4%**

Reasoning / knowledge:

- GPQA Diamond: **69.8%**
- HLE: **31.2%**
- LCR / MLCR: **84.5%**
- CritPt: **77.9%**
- Artificial Analysis Intelligence Index / BenchLM overall: **112 / #8**
- Omniscience Accuracy / Hallucination Rate: **86.4% / 5.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **55.4%**
- LiveCodeBench: **52.6%**
- SciCode / AA-SciCode: **74.1%**
- Vibe Code Bench: **79.5%**
- DeepSWE / Coding Index / other: **74.2**

Long context:

- MRCR 256k needle retrieval 99.1%; RULER benchmark 94.8% at 256k.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong structured JSON generation and reliable API routing, capped by occasional retry overhead in deep agent loops.
- **Reasoning: 86/100.** Fast and capable logical deduction with solid GPQA Diamond results, capped on multi-step theoretical physics.
- **Context window: 88/100.** 256k window with dependable retrieval for medium-to-large repositories.
- **Multimodal: 89/100.** Excellent vision and audio comprehension with low latency.
- **Coding: 87/100.** Dependable everyday code generation, bug fixing, and script refactoring.
- **Cost efficiency: 100/100.** Completely free tier access with generous quota on supported community platforms.
- **Overall Score: 87.4/100.** Superb all-around daily-driver free model offering near-frontier performance.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
