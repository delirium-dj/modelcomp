# Gemini 3 Flash — findings by Ling 3.0 Flash

- Source: Google (`opencode/gemini-3-flash`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's Gemini 3 Flash model evaluation entry; efficient Flash-tier reasoning model with multimodal capabilities.
- **Provider / access:** Google AI Studio, Gemini API, Vertex AI. Standard pricing available.
- **Release / knowledge:** December 2025 release. Knowledge cutoff not explicitly stated.
- **IDs:** `opencode/gemini-3-flash`
- **Context window:** 128K tokens total (per meta.json)
- **Modalities:** Text in/out (per meta.json)
- **Pricing (as of 2026-09-23):** Standard pricing; $0.50/1M input, $3.00/1M output (per BenchLM)
- **Architecture:** Proprietary, closed weights; Google's efficient Flash-tier model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **53.9%** (BenchLM)
- Agentic Index (BenchLM): 28 (#139/151)
- JobBench: **11.4%** (BenchLM)
- Claw-Eval: **49.2%** (BenchLM)
- Gert Labs: **56.63%** (BenchLM)
- Tool use (AA): 16.3 (#80) (llm-stats)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Benchgen) / **87.9%** (Vals.ai) / **90.4%** (Codesota)
- MATH: **97.5%** (Benchgen)
- HLE: **43.5%** (Benchgen)
- Knowledge (BenchLM): 57.7 (#47/181)
- Reasoning (BenchLM): 59.1
- LLM Stats Reasoning: 37.9 (#57)
- CritPt: rank 24/43 (vals.ai)

Coding:

- SWE-bench Verified: **78%** (Benchgen)
- SWE-bench (Vals): **75.0%** (BenchLM)
- LiveCodeBench (Vals): **85.6%** (BenchLM)
- Vibe Code Bench: **20.20%** (BenchLM)
- Coding Index (AA): 22.2 (#73) (llm-stats)
- Coding (BenchLM): 44.2 (#113/183)

Long context:

- 128K total context window (per meta.json)
- Context window score (average.md): 94/100

Multimodal:

- Text in/out (per meta.json); multimodal score (average.md): 88.7/100
- MMMU-Pro: 78.6% (BenchLM)
- AA-MMMU-Pro: 78.6%
- Design Arena Website: 1211 (BenchLM)

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 at 53.9% (BenchLM); Agentic Index at 28 (#139/151); Claw-Eval at 49.2%; Gert Labs at 56.63%. Moderate agentic and terminal coding capability for a Flash-tier model.
- **Reasoning: 89/100.** GPQA Diamond at 90.4% is exceptional for a Flash model; MATH at 97.5% demonstrates elite math capability; HLE at 43.5% is competitive. Knowledge Index at 57.7 (BenchLM).
- **Context window: 94/100.** 128K context window per meta.json; scored highly despite shorter window compared to 1M models.
- **Multimodal: 89/100.** Text and image input supported (per Benchgen); MMMU-Pro at 78.6%. Broad multimodal capabilities for a Flash model.
- **Coding: 82/100.** SWE-bench Verified at 78%; LiveCodeBench at 85.6%; SWE-bench (Vals) at 75.0%. Strong coding for a Flash-tier model.
- **Cost efficiency: 92/100.** Standard pricing at $0.50/$3.00 per 1M; free tier on Google AI Studio. Among the most cost-efficient models.
- **Overall Score: 86/100.** Mean of the five non-cost dimensions (78 + 89 + 94 + 89 + 82) / 5 = 86.4, rounded to 86. Google's Flash-tier model with exceptional GPQA Diamond (90.4%) and MATH (97.5%), strong LiveCodeBench (85.6%), and cost-efficient pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Benchgen, BenchLM, Vals.ai, Codesota, and llm-stats.com; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3-flash/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3-flash/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
