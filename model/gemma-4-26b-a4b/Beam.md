# Gemma 4 26B A4B — findings by Beam

- Source: Google / Gemma 4 26B A4B, `google/gemma-4-26b-a4b-it`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weight Gemma 4 MoE (26B total / 4B active) with 256K context, multimodal (text/image/video/audio in), strong coding and reasoning for its active size; Apache 2.0.
- **Provider / access:** Hugging Face `google/gemma-4-26b-a4b-it`; OpenRouter; Kaggle; Ollama; vLLM/SGLang.
- **Release / knowledge:** Released 2026-04-02; knowledge cutoff not published (training data through ~2025).
- **IDs:** `google/gemma-4-26b-a4b-it` (HF); `gemma-4-26b-a4b-it` (Ollama).
- **Context window:** 262,144 tokens (256K).
- **Modalities:** Text, image, video, audio in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-22):** Apache 2.0 open weights (self-host free); hosted routes vary.
- **Architecture:** MoE 26B total / 4B active; Apache 2.0; params ~26B.

### Raw benchmarks found

Agent / tool use:
- τ²-bench: **43.6%** (measured)
- Toolathlon: **27.0%** (estimated)
- BFCL v4: **60.6%** (estimated)
- OSWorld-Verified: **56.9%** (estimated)

Reasoning / knowledge:
- GPQA Diamond: **82.4%** (estimated) / **79.2%** (AA-GPQA measured)
- HLE: **17.2%** (estimated) / **19.3%** (AA-HLE measured)
- MMLU-Pro: **82.6%** (measured)
- ARC-AGI-1: **13.7%** (estimated); ARC-AGI-2: **3.3%** (estimated)
- Artificial Analysis Intelligence Index: **16.7** (measured)

Coding:
- SWE-bench Verified: **66.0%** (estimated)
- SWE-bench Pro: **32.8%** (estimated)
- LiveCodeBench v6: **77.1%** (measured)
- AA Coding Index: **39.3** (measured)
- DeepSWE: **31.2%** (estimated)

Long context:
- 256K window; AA-LCR **65.7%** (measured); LongBench v2 **59.6%** (estimated); MRCRv2 **44.1%** (measured).

Multimodal:
- MMMU-Pro: **73.8%** (measured); MMMU **82.0%** (estimated); CharXiv **81.8%** (estimated); Video-MME **84.0%** (estimated).

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-bench 43.6%, BFCL 60.6%, Toolathlon 27.0%; caps at low agentic index.
- **Reasoning: 78/100.** GPQA 82.4%, MMLU-Pro 82.6%, HLE 17-19%; caps at HLE.
- **Context window: 74/100.** 256K window; AA-LCR 65.7%, MRCRv2 44.1%.
- **Multimodal: 82/100.** Text/image/video/audio in; MMMU-Pro 73.8%, CharXiv 81.8%.
- **Coding: 72/100.** SWE-bench Verified 66.0%, LiveCodeBench 77.1%, AA Coding 39.3.
- **Cost efficiency: 95/100.** Free open weights.
- **Overall Score: 74/100.** Mean of five quality dims (62 + 78 + 74 + 82 + 72 = 368 / 5 = 73.6 → 74).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (BenchLM/benchgap measured + estimated scores, Google docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.