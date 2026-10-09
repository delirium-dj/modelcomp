# Gemini 2.5 Flash-Lite — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-2.5-flash-lite`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite (preview 2025-06-17, stable/GA 2025-07-22; Sep 2025 preview refresh)
- **Short description:** The smallest and cheapest Gemini 2.5 model — a "hybrid reasoning" tier built purely for high-volume, latency-sensitive work (classification, translation, extraction, routing), with thinking off by default and a controllable thinking budget when a task earns it. It accepts text, image, audio, video and PDF across a 1M-token context, runs native tools (Grounding with Google Search, code execution, URL context), and was Google's lowest-cost 2.5 model at $0.10/$0.40 per million tokens. Google's pitch is "intelligence per dollar," and the model card shows it beats 2.0 Flash-Lite across the board — but the absolute numbers are deliberately small-tier: GPQA ~72%, HLE ~7%, SWE-bench Verified ~39%.
- **Provider / access:** API-only (proprietary) — Gemini API in AI Studio, Vertex AI, OpenRouter.
- **Release:** 2025-06-17 (preview), 2025-07-22 (GA), Sep-2025 preview refresh. Knowledge cutoff January 2025.
- **Context window:** 1,048,576 tokens (1M); max output 65,536 tokens.
- **Modalities:** Text, image, audio, video, PDF in → text out; sparse MoE transformer (parameters undisclosed).
- **Pricing (as of 2026-10-09):** $0.10/M input (text/image/video), $0.30/M audio input, $0.40/M output; cached input $0.025–0.03/M; Batch and Flex tiers at 50%.
- **Status:** superseded by the Gemini 3.x Flash-Lite line (Gemini 3.1 Flash-Lite is the current cheapest tier) but still active on the Gemini API.

### Raw benchmarks found

Google model card (June 2025 non-thinking / thinking; Sep-2025 preview non-thinking / thinking):

- HLE: 5.1 / 6.9 / **7.3** (thinking, Sep preview)
- GPQA Diamond: 64.6 / 66.7 / 70.2 / **71.7**
- AIME 2025: 49.8 / 63.1 / 50.1 / 48.2
- MMMU: **72.9** / 72.9 / 74.0 / 72.0
- Global MMLU-Lite: 81.1 / 84.5 / 82.9 / **84.9**
- FACTS Grounding: 84.1 / 86.8 / 86.9 / **87.5**
- Vibe-Eval (Reka): 51.3 / 57.5 / 58.4 / **59.8**
- SWE-bench Verified: 31.6 / 27.6 / 41.3 / **38.9**
- Aider Polyglot: **26.7%** (whole)
- SimpleQA: 10.7 / 13.0; SimpleQA Verified (Sep): 9.6–11.3
- MRCR v2 8-needle: **25.6% @128K** (thinking, Sep) / **7.7% @1M** — long-context retrieval collapses at full length
- LiveCodeBench: 34.2–42.6 (model card)

Third-party:

- Artificial Analysis: Intelligence Index **6.7–10.4** (non-reasoning/Sep-preview reasoning); Math Index 35.3–68.7; MMLU-Pro 72.4–80.8; GPQA 47.4–70.9; HLE 3.7–7.0; IFBench 31.5–52.6; τ²-Telecom 18.4–30.7; AA-LCR 32.0–64.7; LiveCodeBench 40.0–68.8; Terminal-Bench Hard 2.3–12.9; AIME 35.3–68.7; MATH-500 96.9; AA-Omniscience accuracy 15.4–18.0%
- BenchGecko: 48.6% average across 12 benchmarks (#235 of tracked); HELM WildBench 81.8%, IFEval 81.0%, MMLU-Pro 53.7%
- Latency p95 440 ms TTFT (llm-stats, Google)

### Normalized scores (1–100)

- **Tool use: 40/100.** Native tools are all wired (Grounding, code execution, URL context, function calling) and AA's τ²-Telecom rerun reaches 30.4–30.7%, but there is no Terminal-Bench, MCP Atlas or GDPval score published for this tier, and 30% τ² is weak-mid — a tool-capable classifier, not an agent.
- **Reasoning: 48/100.** GPQA Diamond 64.6–71.7% and MMLU-Pro up to 80.8% sit low-mid band; HLE 5.1–7.3%, SimpleQA ~10–11% and AA Intelligence Index 6.7–10.4 mark it as the cheap tier it is. MATH-500 96.9 and AIME up to 68.7 (Sep preview) show thinking mode helps math specifically.
- **Context window: 60/100.** The 1M-token window is nominal but the retrieval evidence is the weakest in the 1M class: MRCR v2 8-needle 25.6% @128K and only 7.7% @1M, with AA-LCR 32–65% depending on mode — a window the model cannot reliably use at full length.
- **Multimodal: 85/100.** Text + image + audio + video + PDF input → text out is the 90–100 band; MMMU 72.9%, Vibe-Eval 59.8% and FACTS Grounding 87.5% are competent-but-not-leading multimodal for its price, so it lands at the bottom of the band — still full omni-modal input at $0.10/M.
- **Coding: 40/100.** SWE-bench Verified ~31.6–41.3%, Aider Polyglot 26.7%, Terminal-Bench Hard 2.3–12.9%, LiveCodeBench 34–69% depending on mode — classic benchmark coding only; not an agentic coder by 2026 standards.
- **Cost efficiency: 97/100.** $0.10/$0.40 per million tokens with $0.025 cache reads, 50%-off Batch/Flex tiers and 440 ms p95 TTFT — squarely in the methodology's ~$0.1/$0.2 ≈ 97–99 tier, and in 2026 outpriced only by the newer Flash-Lite generations.
- **Overall Score: 55/100.** Best-fit recommendation: the cheapest full-modality Gemini — classification, extraction, translation and routing at $0.10/M with 1M context; for reasoning, coding or agentic work, step up to a thinking-enabled Flash or the 3.x line.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Gemini 2.5 Flash-Lite model card PDF, Google developer blog GA post, Gemini 2.5 tech report, Artificial Analysis/OpenRouter, llm-stats, BenchGecko); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3_1_Flash_Lite.md`, using the same headings.
