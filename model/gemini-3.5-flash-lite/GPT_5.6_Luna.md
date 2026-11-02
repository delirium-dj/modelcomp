# Gemini 3.5 Flash-Lite — findings by GPT 5.6 Luna

- Source: Google DeepMind / Gemini 3.5 Flash-Lite
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's low-latency, high-throughput multimodal Gemini model for subagents, document parsing, translation, and inexpensive production workloads.
- **Provider / access:** Gemini API model code `gemini-3.5-flash-lite`, Google AI Studio, Vertex/Enterprise platforms, and the Gemini API's built-in computer-use/function-calling/tool features.
- **Release / knowledge:** Released 2026-07-21; the developer page lists July 2026 as the latest update. A reliable knowledge cutoff was not stated.
- **IDs:** `gemini-3.5-flash-lite`.
- **Context window:** 1,048,576 input tokens and 65,536 output tokens (Google developer documentation).
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, code execution, computer use, function calling, search grounding, file search, and structured output.
- **Pricing (as of 2026-11-02):** Standard $0.30 input / $2.50 output per 1M tokens; Batch $0.15 / $1.25; standard cache input $0.03 plus storage. A free tier is available, but Google says free-tier content may be used to improve products; paid traffic is not used for that purpose.
- **Architecture:** Proprietary Gemini Flash family.

### Raw benchmarks found

> Google reports the launch results, while BenchLM's 2026-10-29 profile adds partial Artificial Analysis and Vals measurements. The 1M context retrieval result is kept separate from the 128K result.

Agent / tool use:

- Terminal-Bench 2.1: **54.0%**; OSWorld-Verified: **74.0%**; GDPval-AA v2: **1140 Elo** (Google launch post; BenchLM profile lists 1139 Elo).
- Artificial Analysis/BenchLM: AA Agentic Index **15.9%**, EnterpriseOps-Gym **42.3%**, and GDPval normalized **24.2%**.
- BenchLM's partial composite is **46.72/100**, rank **#117/1004**, with 28/724 benchmark rows.

Reasoning / knowledge:

- GDM-MRCR v2: **72.2% at 128K** and **21.3% at 1M**; AA-LCR: **76.0%**.
- GPQA Diamond: **83.8%**; AA-HLE: **18.8%**; Artificial Analysis Intelligence Index: **11.7**; CritPt: **0.0%**.
- AA omniscience accuracy / hallucination rate: **26.5% / 26.7%**.

Coding:

- SWE-bench Pro: **54.2%**; Terminal-Bench 2.1: **54.0%**; MLE-Bench: **39.2%** (Google launch/model-card material).
- Vals SWE-bench: **75.0%**; LiveCodeBench: **79.0%**; AA-SciCode: **41.3%** (independent profiles with different harnesses).

Multimodal:

- CharXiv: **74.5% without tools / 76.5% with tools**; ParseBench: **59.66%**; AA-MMMU-Pro: **79.0%**.
- The official model supports audio, video, PDF, and image input, but no non-text output was verified.

Long context:

- Official input capacity is **1,048,576 tokens**. The 21.3% MRCR result at 1M is a material retrieval-quality caveat despite the nominal capacity.

### Normalized scores (1–100)

- **Tool use: 75/100.** OSWorld 74%, Terminal-Bench 54%, and GDPval 1140 show useful agentic ability; the low independent Agentic Index and mid-tier terminal rate cap it.
- **Reasoning: 72/100.** GPQA 83.8% and LCR 76% are solid, but HLE 18.8%, Index 11.7, and CritPt 0% indicate limited frontier reasoning.
- **Context window: 90/100.** The advertised 1M input window earns a high tier, but MRCR falls from 72.2% at 128K to 21.3% at 1M, preventing a top score.
- **Multimodal: 82/100.** Broad text/image/video/audio/PDF input and strong MMMU-Pro support the score; ParseBench 59.66% and text-only output cap it.
- **Coding: 71/100.** SWE-Pro 54.2%, Terminal-Bench 54.0%, and SciCode 41.3% are useful but mid-tier; Vals results are stronger but use a different harness.
- **Cost efficiency: 95/100.** $0.30/$2.50 standard and $0.15/$1.25 Batch pricing are unusually low, with free access available, though free-tier data-use terms matter.
- **Overall Score: 78.0/100.** `(75 + 72 + 90 + 82 + 71) / 5 = 78.0`; best fit is high-volume multimodal extraction and routine subagent work, not the hardest reasoning or coding tasks.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Google developer documentation, July launch post/model-card figures, current pricing, and BenchLM's October 29 partial profile. Context-window test points and independent coding/tool harnesses were kept separate; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.5 Flash-Lite developer documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)
  - [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing#gemini-3.5-flash-lite)
  - [Google launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
  - [BenchLM Gemini 3.5 Flash-Lite profile](https://benchlm.ai/models/gemini-3-5-flash-lite)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
