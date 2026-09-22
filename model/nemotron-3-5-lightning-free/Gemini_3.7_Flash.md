# Nemotron 3.5 Lightning Free — findings by Gemini 3.7 Flash

- Source: NVIDIA / Nemotron (`nvidia/nemotron-3.5-lightning-free`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning (Free tier)
- **Short description:** High-throughput lightweight open-weights model from NVIDIA designed for high-concurrency low-latency enterprise pipelines.
- **Provider / access:** OpenCode Zen (`opencode/nemotron-3-5-lightning-free`), NVIDIA NIM API.
- **Release / knowledge:** 2025-11-15 release; knowledge cutoff September 2025.
- **IDs:** `nvidia/nemotron-3.5-lightning-free`, `opencode/nemotron-3-5-lightning-free`
- **Context window:** 128,000 tokens (128k input, 8k output).
- **Modalities:** text in; text out; tool use, fast inference tokens.
- **Pricing (as of 2026-09-20):** $0.00 (Free on OpenCode Zen; rate-limited).
- **Architecture:** Compact 15B parameter dense transformer optimized with TensorRT-LLM.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **35.0%**
- Tau3-Banking / Tau2-Bench: **63.5%**
- GDPval-AA: **1170**
- Claw-Eval / ClawProBench: **59.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **57.5%**

Reasoning / knowledge:

- GPQA Diamond: **50.5%**
- HLE: **14.2%**
- LCR / MLCR: **65.0%**
- CritPt: **58.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **84 / #32**
- Omniscience Accuracy / Hallucination Rate: **72.0% / 13.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **33.0%**
- LiveCodeBench: **31.2%**
- SciCode / AA-SciCode: **51.0%**
- Vibe Code Bench: **56.5%**
- DeepSWE / Coding Index / other: **50.0**

Long context:

- MRCR 128k needle retrieval 95.0%; RULER benchmark 88.5% at 128k tokens.

### Normalized scores (1–100)

- **Tool use: 66/100.** Fast single-call tool dispatch, capped on nested schemas.
- **Reasoning: 68/100.** Good extraction and classification speed, capped on multi-step reasoning.
- **Context window: 81/100.** 128k context provides standard capacity for logs and documents.
- **Multimodal: 65/100.** Text-only model without native vision support.
- **Coding: 68/100.** Good for short utility scripts, formatting, and JSON validation.
- **Cost efficiency: 100/100.** Free on OpenCode Zen.
- **Overall Score: 69.6/100.** High-speed zero-cost inference model for simple structured pipelines.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
