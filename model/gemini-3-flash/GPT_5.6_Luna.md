# Gemini 3 Flash — findings by GPT 5.6 Luna

- Source: Google/Gemini 3 Flash
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's fast, low-cost multimodal model for high-volume analysis, coding, and general production workflows.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI, and downstream providers; API ID `gemini-3-flash`.
- **Release / knowledge:** Gemini 3 family release; the current public model-card and catalogue material does not publish one universal cutoff for every serving surface.
- **IDs:** `gemini-3-flash` / `google/gemini-3-flash`.
- **Context window:** Approximately 1,000,000 tokens; MRCR v2 evidence is reported at 128K rather than the full advertised window.
- **Modalities:** Text, image, audio, video, and file input; text output. The current independent profile classifies the model as non-reasoning, unlike later reasoning Flash variants.
- **Pricing (as of 2026-11-02):** $0.50 input / $3 output per 1M tokens on the direct API; cache, region, and provider rates vary.
- **Architecture:** Proprietary; parameter count and internal architecture are undisclosed.

## Raw benchmarks found

- BenchLM current profile: **54.12/100, #81 of 1,004**, with 25 benchmark rows covered.
- Claw-Eval: **49.2%**; τ²-bench: **43.3%**; Gert Labs: **56.63%**; JobBench: **11.4%**; Vals Terminal-Bench 2.1: **53.9%**.
- LiveCodeBench: **85.6%**; SWE-bench: **75.0%**; Vibe Code Bench: **20.20%**.
- AA-MMMU-Pro: **78.6%**; ParseBench: **75.05%**; AA-LCR: **55.3%**; CritPt: **1.4%**.
- AA-GPQA Diamond: **81.2%**; GPQA Diamond (Vals): **87.9%**; AA-HLE: **15.0%**; MMLU-Pro (Vals): **88.6%**.
- Google's earlier launch material reported GPQA Diamond **90.4%**, HLE without tools **33.7%**, and MRCR v2 at 128K **67.2%**; these vendor rows are kept separate from current independent tracking.

## Normalized scores (1–100)

- **Tool use: 70/100.** Claw-Eval, τ²-bench, and Terminal-Bench show usable agent capability, but the current independent agentic composite and JobBench are modest.
- **Reasoning: 74/100.** Vendor GPQA is strong, while current AA-LCR, HLE, CritPt, and Intelligence Index results indicate a clear gap to reasoning-first Flash models.
- **Context window: 91/100.** The 1M window is documented and MRCR 128K is 67.2%; the score is capped because full-window retrieval evidence is absent.
- **Multimodal: 88/100.** Native text/image/audio/video/file input and AA-MMMU-Pro 78.6% support broad coverage; output remains text.
- **Coding: 78/100.** LiveCodeBench and SWE-bench are useful, but Vibe Code Bench and the agentic coding profile show substantial harness variance.
- **Cost efficiency: 98/100.** $0.50/$3 is excellent for a 1M-context multimodal model.
- **Overall Score: 80.2/100.** Mean of the five quality dimensions `(70 + 74 + 91 + 88 + 78) / 5 = 80.2`; best fit is inexpensive multimodal throughput where maximum reasoning depth is not the primary requirement.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Google model-card/catalogue material, BenchLM's October 29 aggregation, Vals, and Artificial Analysis; vendor launch rows and independent rows were kept separate, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Google Gemini 3 Flash model card](https://deepmind.google/models/model-cards/gemini-3-flash/)
  - [Gemini API model catalogue](https://ai.google.dev/gemini-api/docs/models)
  - [BenchLM Gemini 3 Flash profile](https://benchlm.ai/models/gemini-3-flash)
