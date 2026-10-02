# Gemini 1.5 Pro — findings by Space Bunny Alpha

- Source: Google (`gemini-1.5-pro`; September 2024 snapshot)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (September 2024 snapshot)
- **Short description:** Google's retired 1.5-generation flagship, remembered for its very large native context and broad multimodal input support; it is no longer suitable for new deployments.
- **Provider / access:** Historical Google AI Studio / Gemini API and Vertex AI IDs; current Cloud documentation lists `gemini-1.5-pro-002` as retired on 2025-09-24. New requests should not be planned against this model.
- **Release / knowledge:** `gemini-1.5-pro-002` released 2024-09-24. Artificial Analysis lists the September 2024 snapshot with an August 2024 knowledge cutoff; the API lifecycle page confirms the retirement date.
- **IDs:** `gemini-1.5-pro-002`; historical alias `gemini-1.5-pro`; predecessor `gemini-1.5-pro-001`.
- **Context window:** **1M** in the exact September 2024 BenchLM/Artificial Analysis record; the model family is also documented historically as supporting 2M-class input in some routes. Exact maximum output was not shown in the current lifecycle source.
- **Modalities:** Text, image, speech/audio, and video input; text output; function calling was available historically. Audio/video output and current agentic tools are not claimed.
- **Pricing (as of 2026-09-24):** Historical rates were $1.25/$5.00 per 1M input/output tokens for prompts up to 128K, with higher long-context rates above that threshold. The model is retired, so these are historical prices, not an available offer.
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Function calling: **supported historically**; no modern harness score found.
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, and exact agent benchmark scores: **no verified public score found** for the retired September 2024 model.

Reasoning / knowledge:

- GPQA Diamond: **59.1%** (Gemini 1.5 Pro technical-report/model-card evidence, as recorded in the repository's independent research context; exact harness details vary by snapshot)
- MATH: **67.7%** (Google Gemini 1.5 technical report, May 2024 revision)
- Big-Bench Hard: **89.2%** (Google Gemini 1.5 technical report)
- HLE: **approximately 3.5–4.9%** (aggregated historical trackers; not a current exact-model evaluation)
- MRCR: **82.6** (llm-stats historical record; not treated as a current official result)
- Artificial Analysis Intelligence Index: **8 estimated**, rank **#122/298** (Artificial Analysis, accessed 2026-09-24; deprecated page)
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**

Coding:

- SWE-bench Verified: **34.2%** (Google historical baseline reported in the Gemini 2.5 report; not a direct current run)
- Natural2Code: **82.6%** (Google Gemini 1.5 technical report)
- HumanEval: **approximately 84%** (Google technical report; trackers vary)
- LiveCodeBench: **41.7%** (historical aggregator, provisional; not an official exact-model result)
- SWE-Pro, SciCode, Vibe Code Bench, and DeepSWE: **no verified public score found**

Long context:

- Historical model documentation reports near-perfect long-context retrieval in research evaluations; the reviewed exact September 2024 record reports a 1M context. No current 2M retrieval result is claimed.

Sources consulted: [Google Cloud model lifecycle documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versions), [Artificial Analysis Gemini 1.5 Pro](https://artificialanalysis.ai/models/gemini-1-5-pro), and [BenchLM Gemini 1.5 Pro](https://benchlm.ai/models/gemini-1-5-pro), accessed 2026-09-24. Historical benchmark values are labeled where exact current evidence is unavailable.

### Normalized scores (1–100)

- **Tool use: 45/100.** Function calling was supported, but the model is retired and no modern Terminal-Bench/Tau/GDPval/tool benchmark was verified.
- **Reasoning: 58/100.** GPQA 59.1%, MATH 67.7%, and BBH 89.2% reflect its historical strengths, while HLE is very low by current standards.
- **Context window: 96/100.** The reviewed September 2024 record reports 1M context and historical research results report strong long-context retrieval; retirement and no current 2M result cap confidence.
- **Multimodal: 90/100.** Text, image, speech/audio, and video input with text output were supported; no multimodal output is claimed.
- **Coding: 58/100.** Natural2Code is strong for its era, but SWE-bench Verified 34.2% is weak on current coding tasks and current LiveCodeBench evidence is only provisional.
- **Cost efficiency: 70/100.** Historical $1.25/$5 pricing was mid-range, but retirement means no current paid route or reliable cost comparison.
- **Overall Score: 69.4/100.** (45 + 58 + 96 + 90 + 58) / 5 = 69.4. Best fit: historical comparison and archived long-context experiments only; migrate new work to a current Gemini model.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Google lifecycle documentation, Artificial Analysis, BenchLM, and historical Gemini technical-report evidence; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
