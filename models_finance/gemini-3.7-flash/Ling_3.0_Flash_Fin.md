# Gemini 3.7 Flash — findings by Ling 3.0 Flash

- Source: Google (`google/gemini-3.7-flash`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-capability 3.7 Flash model with multimodal audio and PDF input; free tier available on Google AI Studio and OpenCode Zen.
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI. Free tier available on Google AI Studio and OpenCode Zen with standard rate limits; paid-tier pricing also available.
- **Release / knowledge:** August 13, 2026 release. Knowledge cutoff March 31, 2026.
- **IDs:** `google/gemini-3.7-flash` (Google API)
- **Context window:** 1,048,576 (1M) tokens, 65.5K max output
- **Modalities:** Text, image, audio, PDF in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** Free tier available; paid $0.75/1M input, $3.75/1M output (introductory through Dec 31, 2026; standard $1.50/$7.50)
- **Architecture:** Proprietary, closed weights; Google's efficient multimodal model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google's official benchmark table)
- Terminal-Bench 2.0: not directly found
- Terminal-Bench 3.0: **14.9%** (DataCamp)
- OSWorld 2.0: **47.9%** (DataCamp)
- JobBench: **11.4%** (BenchLM)
- AutomationBench: **30.4%** (AnotherWrapper)
- Agents' Last Exam: **26.3%** (AnotherWrapper)

Reasoning / knowledge:

- SWE-bench Verified: **88.6%** (AnotherWrapper)
- SWE-bench Pro: **69.2%** (AnotherWrapper)
- GPQA Diamond: **87.9%** (Vals.ai) / **81.2%** (AA)
- HLE Verified: **53.6%** (AnotherWrapper)
- FrontierMath v2 Tiers 1-3: **35.640%** (BenchLM)
- Intelligence Index (AA): **56**
- Overall BenchLM score: 70.2
- MRCR v2 (128k): **97.0%** (DataCamp)

Coding:

- SWE-bench Verified: **88.6%**
- SWE-bench Pro: **69.2%**
- FrontierCode 1.1 Main: **43.6%** (DataCamp)
- DeepSWE v1.1: **65.3%** (DataCamp)
- Terminal-Bench 2.1: **85.8%** (also agentic)
- LiveCodeBench: **85.6%** (BenchLM, for Gemini 3 base)
- Arena Code Elo: **1588** (DataCamp)
- GDP.pdf: **34.0%** (DataCamp)

Long context:

- 1M context window
- MRCR v2: 97.0% (DataCamp)
- GDM-MRCR v2: 97.0%

Multimodal:

- Text, image, audio, PDF in; text out
- AA-MMMU-Pro: **78.6%** (BenchLM)
- Harvey LAB-AA: **90.7%** (DataCamp)
- GDP.pdf: **34.0%** (DataCamp)
- CharXiv-R: **88.7%** (AnotherWrapper)
- Score: strong multimodal with audio and PDF input

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 at 85.8% is strong; but weaker on agentic coding evals like OSWorld (47.9%), AutomationBench (30.4%), and TB3.0 (14.9%). Solid terminal capability but not elite on broader agentic benchmarks.
- **Reasoning: 87/100.** SWE-bench Verified at 88.6% and GPQA Diamond at 87.9% (Vals.ai) show strong reasoning; HLE Verified at 53.6% and FrontierMath at 35.6% are moderate; Intelligence Index of 56 (AA) confirms good reasoning.
- **Context window: 97/100.** 1M context window with MRCR v2 at 97.0% confirming exceptional long-context retrieval; 65.5K max output is standard.
- **Multimodal: 89/100.** Text, image, audio, and PDF input supported; strong multimodal with MMMU-Pro at 78.6%, Harvey LAB-AA at 90.7%, and CharXiv-R at 88.7%. Broader modality coverage than most models including audio input.
- **Coding: 86/100.** SWE-bench Verified at 88.6%; SWE-bench Pro at 69.2%; FrontierCode 1.1 at 43.6%; DeepSWE at 65.3%; Terminal-Bench 2.1 at 85.8%. Strong on SWE-bench but moderate on research-level coding benchmarks.
- **Cost efficiency: 95/100.** Free tier available on Google AI Studio and OpenCode Zen; introductory pricing of $0.75/$3.75 per 1M. Among the most cost-efficient frontier models.
- **Overall Score: 89/100.** Mean of the five non-cost dimensions (86 + 87 + 97 + 89 + 86) / 5 = 89.0, rounded to 89. Google's multimodal Flash model with strong SWE-bench Verified (88.6%), exceptional long-context (MRCR 97.0%), and audio/PDF input at introductory pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Google's official benchmark table, DataCamp, BenchLM, AnotherWrapper, and Vals.ai; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. Gemini_3_8_Flash.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.7-flash/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.7-flash/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
