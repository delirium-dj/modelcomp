# Nemotron 3 Ultra Free — findings by Gemini 3.7 Flash

- Source: NVIDIA / Nemotron (`nvidia/nemotron-3-ultra-free`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra (Free tier)
- **Short description:** NVIDIA's enterprise-grade open-weights foundation model optimized for synthetic data generation, enterprise reasoning, and GPU-accelerated inference.
- **Provider / access:** OpenCode Zen (`opencode/nemotron-3-ultra-free`), NVIDIA NIM API.
- **Release / knowledge:** 2026-02-05 release; knowledge cutoff December 2025.
- **IDs:** `nvidia/nemotron-3-ultra-free`, `opencode/nemotron-3-ultra-free`
- **Context window:** 256,000 tokens (256k input, 16k output).
- **Modalities:** text in; text out; tool use, structured output, role-based conditioning.
- **Pricing (as of 2026-09-20):** $0.00 (Free on OpenCode Zen; rate-limited).
- **Architecture:** 70B parameter dense transformer aligned with NVIDIA SteerLM (open weights under NVIDIA Open Model License).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.8%**
- Tau3-Banking / Tau2-Bench: **73.6%**
- GDPval-AA: **1260**
- Claw-Eval / ClawProBench: **69.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.8%**

Reasoning / knowledge:

- GPQA Diamond: **64.0%**
- HLE: **24.5%**
- LCR / MLCR: **78.9%**
- CritPt: **71.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **102 / #16**
- Omniscience Accuracy / Hallucination Rate: **82.5% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.0%**
- LiveCodeBench: **45.8%**
- SciCode / AA-SciCode: **67.4%**
- Vibe Code Bench: **73.0%**
- DeepSWE / Coding Index / other: **66.8**

Long context:

- MRCR 256k needle retrieval 98.2%; RULER benchmark 93.8% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 74/100.** Reliable JSON function generation, capped by occasional formatting rigidity on loose schema inputs.
- **Reasoning: 76/100.** Strong enterprise policy analysis and structured logic, capped on creative synthesis.
- **Context window: 86/100.** 256k context with solid retention across documentation.
- **Multimodal: 72/100.** Text-only model without native image/audio input modalities.
- **Coding: 75/100.** Good CUDA, C++, and Python engineering support.
- **Cost efficiency: 100/100.** Completely free on OpenCode Zen.
- **Overall Score: 76.6/100.** Reliable free open-weights enterprise model with strong technical acumen.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
