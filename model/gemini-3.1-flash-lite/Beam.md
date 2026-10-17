# Gemini 3.1 Flash-Lite — findings by Beam

- Source: Google/Gemini 3.1 Flash-Lite, `google/gemini-3.1-flash-lite`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's most cost-efficient Gemini model (May 7, 2026 GA): 1M context, 65K output, multimodal, thinking. Matches Gemini 2.5 Flash performance. $0.25/$1.50 per 1M.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3.1-flash-lite`; OpenRouter; AIMLAPI.
- **Release / knowledge:** Released 2026-03-03 (preview), GA 2026-05-07; knowledge cutoff January 2025.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.25 / 1M input, $1.50 / 1M output, $0.025 / 1M cached; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **27.4** (estimated #100/128)
- Terminal-Bench 2.1 (Vals): **34.1%**
- Gert Labs: **38.46%**
- JobBench: not reported
- MCP Atlas: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported (coming soon)
- JevBench 1.4: **14.26**
- JevBench 1.5: **19.58**
- MRCRv2: not reported
- GPQA: **81.1%** (Vals)
- MMLU-Pro: **86.2%** (Vals)
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): **27.2** (estimated #101/150)
- Vibe Code Bench: **0.00%**
- LiveCodeBench (Vals): **80.1%**
- SWE-bench (Vals): **62.8%**

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **42** (unranked, 1 row)
- CharXiv: **73.2%**

### Normalized scores (1–100)

- **Tool use: 60/100.** Agentic lane #100/128 (27.4), Terminal-Bench 2.1 Vals 34.1%, Gert Labs 38.46%; caps at no published MCP Atlas.
- **Reasoning: 62/100.** GPQA 81.1%, MMLU-Pro 86.2%; caps at JevBench 14.26-19.58.
- **Context window: 78/100.** 1M window; caps at no published MRCR.
- **Multimodal: 72/100.** Text/image/video/audio/PDF in; CharXiv 73.2%.
- **Coding: 58/100.** LiveCodeBench Vals 80.1%, SWE-bench Vals 62.8%, Vibe Code 0.00%, coding lane #101/150 (27.2).
- **Cost efficiency: 94/100.** Very cheap $0.25/$1.50 per 1M.
- **Overall Score: 66/100.** Mean of five quality dims (BenchLM aggregate 46.95); best-fit for high-volume cheap tasks.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google docs, BenchLM, AIMLAPI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>