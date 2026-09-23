# Gemini 3.6 Flash — findings by Ling 3.0 Flash

- Source: Google (`google/gemini-3.6-flash`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's advanced 3.6 Flash model with improved reasoning and token efficiency; free tier available; delivers better coding, knowledge work, and multimodal performance than 3.5 Flash.
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI. Free tier available; paid $1.50/1M input, $7.50/1M output.
- **Release / knowledge:** July 21, 2026 release. Knowledge cutoff not explicitly stated.
- **IDs:** `google/gemini-3.6-flash` (Google API)
- **Context window:** 1,048,576 (1M) tokens, 65.5K max output
- **Modalities:** Text, image, audio, PDF in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** Free tier available; paid $1.50/1M input, $7.50/1M output
- **Architecture:** Proprietary, closed weights; Google's efficient multimodal model, 17% fewer output tokens than 3.5 Flash

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2): **78.0%** (Google DeepMind model card)
- OSWorld-Verified: **83.0%** (Google DeepMind model card)
- CyberBench Patch: **84.75%** (Vals.ai, #1)
- Agentic Index (BenchLM): **83.0** (BenchLM comparison)
- Terminal-Bench 2.1 (Vals): **73.78%** (vals.ai, #8/43)
- Terminal-Bench 3.0: not directly found

Reasoning / knowledge:

- GPQA Diamond (Vals): rank **7/138** (vals.ai)
- DeepSWE v1.1: **49%** (Google DeepMind model card)
- MLE-Bench: **63.9%** (Google DeepMind model card)
- Intelligence Index (AA): ~43.5 (llm-stats)
- LLM Stats Score: 43.5 (llm-stats)
- Vals Index: 55.35% (vals.ai, #13/43)
- BenchAlign v5 overall: **75.54** (#9 of 218)
- CharXiv Reasoning: **85.2%** (no tools) / **89.4%** (with tools) (Google DeepMind model card)
- CritPt: rank 24/43 (vals.ai)
- ProgramBench: rank 24/43 (vals.ai)

Coding:

- SWE-bench Pro (Public): **58.7%** (Google DeepMind model card)
- DeepSWE v1.1: **49%** (Google DeepMind model card)
- SWE-bench Verified (Vals subset): **77.45%** (vals.ai)
- Vibe Code Bench (Vals subset): **57.88%** (vals.ai)
- Terminal-Bench 2.1: **78.0%** (also agentic)
- Vals Index: 55.35% (#13/43)
- SWE-bench: rank 26/88 (vals.ai)

Long context:

- 1M context window
- GDM-MRCR v2 (8-needle): **91.8%** (128k average) / **54.0%** (1M pointwise) (Google DeepMind)
- CharXiv with tools: **89.4%**

Multimodal:

- Text, image, audio, PDF in; text out
- OSWorld-Verified: **83.0%**
- CharXiv Reasoning: **85.2-89.4%**
- MLE-Bench: **63.9%**
- Broad multimodal with audio support

### Normalized scores (1–100)

- **Tool use: 83/100.** Terminal-Bench 2.1 at 78.0% (Google DeepMind); OSWorld-Verified at 83.0%; CyberBench Patch at 84.75% (#1); Agentic Index at 83.0 (BenchLM). Solid agentic and terminal coding capability.
- **Reasoning: 85/100.** GPQA Diamond ranked #7/138 (Vals.ai); DeepSWE at 49%; MLE-Bench at 63.9%; CharXiv Reasoning at 85.2-89.4%. Intelligence Index of 43.5 (AA) confirms solid reasoning.
- **Context window: 96/100.** 1M context window; GDM-MRCR v2 at 91.8% (128k average) confirming strong long-context retrieval; 65.5K max output.
- **Multimodal: 89/100.** Text, image, audio, and PDF input supported; broadest modality coverage; OSWorld-Verified at 83.0%; CharXiv with tools at 89.4%. Strong multimodal with audio support.
- **Coding: 81/100.** SWE-bench Pro at 58.7%; DeepSWE at 49%; Terminal-Bench 2.1 at 78.0% (also agentic); SWE-bench Verified (Vals) at 77.45%; Vibe Code Bench at 57.88%. Solid coding with strong terminal capability.
- **Cost efficiency: 95/100.** Free tier available on Google AI Studio and OpenCode Zen; paid pricing at $1.50/$7.50 per 1M. Among the most cost-efficient frontier models.
- **Overall Score: 87/100.** Mean of the five non-cost dimensions (83 + 85 + 96 + 89 + 81) / 5 = 86.8, rounded to 87. Google's advanced Flash model with strong multimodal (audio + image + PDF), 1M context, solid Terminal-Bench 2.1 (78.0%), and free tier at $1.50/$7.50 pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Google DeepMind model cards, Vals.ai, BenchLM, llm-stats.com, and aitoolsreview.co.uk; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. Gemini_3_7_Flash.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.6-flash/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.6-flash/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
