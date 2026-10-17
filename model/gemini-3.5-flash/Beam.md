# Gemini 3.5 Flash — findings by Beam

- Source: Google/Gemini 3.5 Flash, `google/gemini-3.5-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's deprecated Flash (May 2026, auto-routed to 3.6 Flash) with sustained frontier-level intelligence at higher speed/lower cost; 1M context, 65K output, thinking, computer use preview.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3.5-flash` (deprecated → 3.6 Flash); OpenRouter.
- **Release / knowledge:** Released May 2026 (deprecated Jul 2026); knowledge cutoff not stated.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes; tool calling yes; structured output yes; computer use (preview).
- **Pricing (as of 2026-10-17):** $1.50 / 1M input, $9.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **51.3** (#45/128)
- Terminal-Bench 2.1: **76.2%**
- MCP Atlas: **83.6%**
- Toolathlon: **56.5%**
- OSWorld-Verified: **78.4%**
- Finance Agent v2: **57.9%**
- GDPval-AA: **1345 Elo**
- τ²-bench: **95.3%**
- Gert Labs: **61.85%**

Reasoning / knowledge:

- AA Intelligence Index: **50.2**
- GPQA: **92.2%**; GPQA-D: **92.7%** (Vals)
- HLE: **40.2%** (Google) / 42.7% (AA)
- ARC-AGI-2: **72.1%**
- ARC-AGI-1: **92.50%**
- MRCRv2: **77.3%**
- MRCR 1M: **26.6%**
- AA-LCR: **69.3%**
- AA-Omniscience Accuracy: **51.9%**; Hallucination Rate: **60.7%**

Coding:

- Coding public-lane (BenchLM): **50.1** (#43/150)
- SWE-bench Pro: **55.1%**
- SciCode: **53.1%**
- Vibe Code Bench: **48.68%**
- LiveCodeBench (Vals): **87.6%**

Long context:

- 1M window; MRCRv2 77.3%, MRCR 1M 26.6%, AA-LCR 69.3%.

Multimodal:

- CharXiv: **84.2%**
- MMMU-Pro: **83.6%**
- Blueprint-Bench 2: **33.6%**
- AA-MMMU-Pro: **84.3%**

### Normalized scores (1–100)

- **Tool use: 78/100.** Agentic lane #45/128 (51.3), Terminal-Bench 2.1 76.2%, MCP Atlas 83.6%, OSWorld 78.4%, τ²-bench 95.3%, GDPval 1345; caps at Toolathlon 56.5%.
- **Reasoning: 78/100.** AA Intelligence 50.2, GPQA 92.2%, HLE 40.2-42.7%, ARC-AGI-2 72.1%, MRCRv2 77.3%; caps at MRCR 1M 26.6%.
- **Context window: 78/100.** 1M window; MRCRv2 77.3%, MRCR 1M 26.6% caps higher.
- **Multimodal: 86/100.** Text/image/video/audio/PDF in; CharXiv 84.2%, MMMU-Pro 83.6%, AA-MMMU-Pro 84.3%; caps at Blueprint-Bench 2 33.6%.
- **Coding: 72/100.** SWE-bench Pro 55.1%, Vibe Code 48.68%, SciCode 53.1%, LiveCodeBench Vals 87.6%, coding lane #43/150 (50.1).
- **Cost efficiency: 85/100.** Mid-low $1.50/$9 per 1M.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 61.87); best-fit for multimodal agentic at mid cost (deprecated → use 3.6/3.8 Flash).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google docs, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>