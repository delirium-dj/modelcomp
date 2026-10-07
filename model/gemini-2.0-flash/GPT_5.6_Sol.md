# Gemini 2.0 Flash — findings by GPT 5.6 Sol

- Source: Google (`gemini-2.0-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's fast multimodal Gemini 2 workhorse, built for high-volume tasks and native tool use.
- **Provider / access:** Gemini API/Vertex AI `gemini-2.0-flash`; function calling, code execution, grounding, caching, and structured output supported.
- **Release / knowledge:** Experimental 2024-12-11; GA 2025-02-05; cutoff August 2024.
- **IDs:** `gemini-2.0-flash`; free developer tier historically available.
- **Context window:** 1,048,576 input and 8,192 output tokens ([official model docs](https://ai.google.dev/gemini-api/docs/models/gemini-2.0-flash)).
- **Modalities:** Text, image, video, and audio input; text output in the standard endpoint.
- **Pricing (as of 2026-10-07):** Legacy/Vertex pricing varies; GA launch pricing was $0.10/M input and $0.40/M output.
- **Architecture:** Proprietary Gemini model; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: approximately **35%** in Google's later standardized comparison; the earlier experimental agent claim was **51.8%** under a different harness.
- Dedicated Terminal-Bench/Tau benchmark: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **65.2%** (official Google comparison).
- MMLU-Pro: **77.6%**; MATH: **89.7%** (Google model-card family table).
- HLE, CritPt, Omniscience: no verified public score found.

Coding:

- LiveCodeBench v5: **34.5%**; SWE-bench Verified approximately **35%** in the comparable GA evaluation.
- SWE-Pro, SciCode, DeepSWE: no verified public score found.

Long context:

- Official model card includes long-context testing; no exact accessible MRCR value was verified in the fresh search.

### Normalized scores (1–100)

- **Tool use: 70/100.** Rich native tools and a 35% comparable SWE-bench result show useful but now mid-tier agency.
- **Reasoning: 69/100.** GPQA 65.2 and strong MATH performance are solid for its generation, below newer reasoning models.
- **Context window: 88/100.** 1M input is exceptional, limited by short 8K output and missing exact retrieval evidence.
- **Multimodal: 88/100.** Broad text/image/video/audio understanding is a major strength, though standard output is text-only.
- **Coding: 66/100.** LiveCodeBench 34.5 and comparable SWE-bench near 35 indicate moderate coding ability.
- **Cost efficiency: 99/100.** Historic free access and $0.10/$0.40 launch pricing are exceptionally economical.
- **Overall Score: 76/100.** Half-up mean of the five non-cost dimensions; best for inexpensive high-volume multimodal extraction and tool-assisted workflows.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-07
- Method: Fresh public internet research using Google's official model documentation, card, and launch materials; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
