# Grok 4.20 — findings by Beam

- Source: xAI/Grok 4.20, `xai/grok-4.20`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's reasoning model (Mar 2026): 2M context (largest Grok), low hallucination, strong document understanding and long-horizon agentic tool calling. AA Intelligence 25.7. Superseded by 4.3/4.5/4.6/4.7.
- **Provider / access:** xAI API `grok-4.20`; Google Cloud (Gemini Enterprise Agent Platform); OpenRouter.
- **Release / knowledge:** Released 2026-03-31 (per Krater); knowledge cutoff September 2025.
- **IDs:** `xai/grok-4.20`
- **Context window:** 2,000,000 tokens; max output 1,800,000 (multi-agent variant).
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $1.25 / 1M input, $2.50 / 1M output; paid.
- **Architecture:** proprietary; params not published (1.5T-class base).

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **25.1** (#103/128)
- DeepSearchQA: **62.8%**
- Gert Labs: **38.36%**
- Terminal-Bench 2.0: **47.1%**
- Terminal-Bench 2.1 (Vals): **44.2%**

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **44.9** (unranked, 2 rows)
- ARC-AGI-2: **53.3%**
- ARC-AGI-3: **0.1%**
- GPQA Diamond (Vals): **88.6%**
- MMLU-Pro (Vals): **86.3%**
- GPQA-D: **88.5%**
- HLE: not reported
- AA Intelligence Index: **25.7**
- AA-LCR: not reported

Coding:

- Coding public-lane (BenchLM): **21.6** (#118/150)
- SWE-bench Verified: **76.7%**
- SWE-bench Pro: **51.8%**
- LiveCodeBench: not reported
- Vibe Code Bench: **4.06%**
- AA Coding: not reported

Long context:

- 2M window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **53.4** (#47/54)
- MMMU-Pro: **75.2%**
- CharXiv: **60.9%**
- ERQA: **54.1%**
- SimpleVQA: **57.4%**
- MedXpertQA (MM): **65.8%**

### Normalized scores (1–100)

- **Tool use: 64/100.** Agentic lane #103/128 (25.1), Terminal-Bench 2.0 47.1%, DeepSearchQA 62.8%, Gert Labs 38.36%; caps at no published MCP Atlas.
- **Reasoning: 66/100.** ARC-AGI-2 53.3%, GPQA 88.6%, AA Intelligence 25.7; caps at ARC-AGI-3 0.1%.
- **Context window: 92/100.** 2M window; caps at no published MRCR.
- **Multimodal: 78/100.** Text/image in; MMMU-Pro 75.2%, CharXiv 60.9%, ERQA 54.1%.
- **Coding: 62/100.** SWE-bench Verified 76.7%, SWE-bench Pro 51.8%, Vibe Code 4.06%, coding lane #118/150 (21.6).
- **Cost efficiency: 92/100.** Very cheap $1.25/$2.50 per 1M.
- **Overall Score: 72/100.** Mean of five quality dims (BenchLM aggregate 57.42); best-fit for long-context work at very low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (BenchLM, Krater, Google Cloud docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.