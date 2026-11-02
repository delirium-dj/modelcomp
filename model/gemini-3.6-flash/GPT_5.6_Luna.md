# Gemini 3.6 Flash — findings by GPT 5.6 Luna

- Source: Google/Gemini 3.6 Flash
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's fast reasoning Flash model for multimodal production tasks, coding, long-context work, and agents.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI, OpenRouter, and downstream providers; API ID `gemini-3.6-flash`.
- **Release / knowledge:** General availability July 21, 2026; current model-card/catalogue references report a March 2026 knowledge cutoff.
- **IDs:** `gemini-3.6-flash` / `google/gemini-3.6-flash`.
- **Context window:** 1,048,576 tokens.
- **Modalities:** Text and image input verified; current product listings support multimodal document/visual workflows, while broad audio/video support was not independently confirmed for every endpoint.
- **Pricing (as of 2026-11-02):** Approximately $0.75 input / $3.75 output per 1M tokens on the direct API; cache and regional/provider rates vary.
- **Architecture:** Proprietary; Google does not disclose parameter count or internal architecture.

## Raw benchmarks found

- BenchLM current profile: **62.41/100, #44 of 1,004**, with 29 of 724 benchmark rows covered.
- Terminal-Bench 2.1 (Vals): **73.8%**; GDPval-AA: **39.2%**; Artificial Analysis Agentic Index: **30.1%**.
- DeepSWE: **49.0%**; CursorBench 3.2: **53.5%**; LiveCodeBench: **88.1%**; SWE-bench: **79.6%**; AA Coding Index: **69.2%**.
- ParseBench: **69.38%**; AA-MMMU-Pro: **83.2%**; Design Arena Website: **1299**.
- AA-LCR: **80.0%**; AA-GPQA Diamond: **92.8%**; AA-HLE: **40.8%**; MMLU-Pro (Vals): **89.3%**.
- FrontierMath v2 tiers 1–3: **58.947%** and tier 4: **21.951%**.
- Artificial Analysis Intelligence Index: **34.0%**; AA-Omniscience Accuracy: **50.0%** and hallucination rate: **55.6%**.
- Context window: **1M tokens** (Google/catalogue documentation).

## Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 73.8%, OSWorld-related rows, and tool support establish useful agent performance, while the AA agentic index and MazeBench 0% show unevenness.
- **Reasoning: 85/100.** GPQA 92.8%, AA-LCR 80%, and FrontierMath support strong reasoning for Flash, but HLE and the composite index are more moderate.
- **Context window: 95/100.** The 1M-token window is a major strength; no independent full-window retrieval curve was verified.
- **Multimodal: 90/100.** AA-MMMU-Pro 83.2% and Google visual/document support provide solid evidence, though endpoint-level audio/video coverage remains unclear.
- **Coding: 87/100.** SWE-bench 79.6%, LiveCodeBench 88.1%, and AA Coding Index 69.2% indicate a capable coding model with meaningful suite variance.
- **Cost efficiency: 95/100.** $0.75/$3.75 is excellent for a 1M-context multimodal model.
- **Overall Score: 87.8/100.** Mean of the five quality dimensions `(82 + 85 + 95 + 90 + 87) / 5 = 87.8`; best fit is inexpensive high-throughput multimodal and long-context workloads.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Google model/API documentation, BenchLM's October 29 profile, Artificial Analysis rows, Vals results, and current price listings; benchmark variance was retained, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Google Gemini 3.6 Flash model card](https://deepmind.google/models/model-cards/gemini-3-6-flash/)
  - [Gemini API model catalog](https://ai.google.dev/gemini-api/docs/models)
  - [BenchLM Gemini 3.6 Flash profile](https://benchlm.ai/models/gemini-3-6-flash)
  - [Gradually Gemini 3.6 Flash price/spec snapshot](https://www.gradually.ai/en/ai-models/gemini-3.6-flash/)
