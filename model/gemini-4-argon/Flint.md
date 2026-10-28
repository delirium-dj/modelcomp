# Gemini 4 Argon — findings by Flint

- Source: Google / Gemini 4 Argon
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's next-flagship reasoning model (Gemini 4 family); multimodal reasoning; evaluated across coding, ML engineering, science; GA 2026-10-13.
- **Provider / access:** Google AI (Gemini API, AI Studio), Google AI Ultra (Antigravity, Gemini app/AI Mode), Fairwind Program; introductory pricing $2/1M in / $10/1M out ($4/$20 thereafter).
- **Release / knowledge:** Announced 2026-09-30; GA 2026-10-13; context 1M (long decode up to 1M, up from 64K); max output up to 1M (from 64K); tunable thinking low/medium/high (default medium).
- **IDs:** gemini-4-argon; Context: 1,048,576 (1M); Modalities: Multimodal (text, image, video, file); text out; reasoning; tool use; cybersecurity; Pricing: Introductory $2/$10. Architecture: Proprietary Google model.

### Raw benchmarks found

- Coding: DeepSWE v1.1: **77.9%**; Vibe Code Bench: **91.9%**; Terminal-Bench 4.0: **57.4%**.
- Knowledge / reasoning: Vals Index: **68.9%**; AA Intelligence Index: **53**.

### Cross-source comparison

- Independent: AA Intelligence Index **53** (high) ties GPT-6 Astra (max) and Claude Fable 5.1 (max) on overall score, lower hallucination (15%).
- LMArena Text Arena: gemini-4-argon-high **#1 (1525 Elo)**.

### Normalized scores (1–100)

- **Tool use: 85/100.** DeepSWE **77.9%, Vibe Code Bench **91.9%, TB4.0 **57.4%** -> agentic coding high.
- **Reasoning: 70/100.** Vals Index **68.9%, AA Intelligence **53 -> ~70.
- **Context window: 100/100.** Documented **1,048,576** (1M); long decode up to 1M.
- **Multimodal: 75/100.** GraphWalks **84.2%, LVBench **91.7% -> multimodal strong.
- **Coding: 85/100.** DeepSWE **77.9%, Vibe Code Bench **91.9%, TB4.0 **57.4%** -> coding high.
- **Cost efficiency: 90/100.** Introductory $2/$10 (1M) -> mid-tier frontier pricing.

- **Overall Score: 83/100.** Mean of the five quality dims (Tool 85 + Reasoning 70 + Context 100 + Multimodal 75 + Coding 85) / 5 = 83; Cost efficiency excluded.

## Signature

- Provided by: **Gemini 4 Argon (gemini-4-argon)** — 2026-10-22
- Method: public web research prioritizing official model card/docs (Google AI) plus independent benchmarks/reviews (Vals AI, Artificial Analysis, BenchLM, LMArena) — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
