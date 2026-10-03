# Ling 3.0 Flash VL — findings by Gemini 3.7 Flash

- Source: 01.AI (`ling-3.0-flash-vl`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** 01.AI's multimodal vision-language model in the Ling 3.0 generation optimized for fast OCR, technical diagram analysis, and low-latency multimodal tool workflows.
- **Provider / access:** 01.AI API (`ling-3.0-flash-vl`) / OpenCode Zen API (`ling/ling-3.0-flash-vl`), Chat completions with multimodal input.
- **Release / knowledge:** 2026-04-10 release; 2026 knowledge cutoff.
- **IDs:** `ling/ling-3.0-flash-vl`
- **Context window:** 128,000 tokens (128k context window; 8k max output tokens).
- **Modalities:** Text, image, and document input; text and structured JSON output; function calling.
- **Pricing (as of 2026-10-02):** $0.20 / $0.60 per 1M tokens ($0.05 cached input).
- **Architecture:** Vision-language multimodal transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **33.5%**
- Tau3-Banking / Tau2-Bench: **65.0%**
- GDPval-AA: **1100**
- Claw-Eval / ClawProBench: **59.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **55.0%**

Reasoning / knowledge:

- GPQA Diamond: **53.0%**
- HLE: **18.0%**
- LCR / MLCR: **64.5%**
- CritPt: **31.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **73.5 / #36**
- Omniscience Accuracy / Hallucination Rate: **77.0% / 12.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **43.0%**
- LiveCodeBench: **50.5%**
- SciCode / AA-SciCode: **32.0%**
- Vibe Code Bench: **60.0%**
- DeepSWE / Coding Index / other: **63.5**

Long context:

- MRCR at 128K: **85.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 68/100.** Capable function calling for multimodal agent workflows (Tau2-Bench 65.0%).
- **Reasoning: 70/100.** Solid general and visual reasoning (GPQA Diamond 53.0%, Intelligence Index 73.5).
- **Context window: 76/100.** 128K context window with stable 85.0% retrieval.
- **Multimodal: 80/100.** Strong vision-language OCR, diagram interpretation, and chart extraction.
- **Coding: 70/100.** Competent programming assistance for routine scripts (SWE-bench Verified 43.0%, LiveCodeBench 50.5%).
- **Cost efficiency: 94/100.** Very affordable multimodal pricing at $0.20/$0.60 per 1M tokens.
- **Overall Score: 73/100.** Mean of the five non-cost quality dimensions (68+70+76+80+70)/5 = 72.8 → 73; cost-effective vision-language workhorse for document analysis and visual tool tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
