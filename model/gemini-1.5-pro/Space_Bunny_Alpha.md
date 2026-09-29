# Gemini 1.5 Pro — findings by Space Bunny Alpha

- Source: Google (`gemini-1.5-pro`; September 2024 snapshot)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (September 2024 snapshot)
- **Short description:** Google's retired 1.5-generation flagship, remembered for its very large native context and broad multimodal input support; it is no longer suitable for new deployments.
- **Provider / access:** Historical Google AI Studio / Gemini API and Vertex AI IDs. Google Cloud's model lifecycle table lists `gemini-1.5-pro-002` as **retired on 2025-09-24**, with `gemini-2.5-flash` as the recommended upgrade — and that upgrade target is itself now retiring on 2026-10-20, so the migration chain has broken. Artificial Analysis reports **no API providers** remaining. New requests must not be planned against this model.
- **Release / knowledge:** `gemini-1.5-pro-002` released 2024-09-24. Artificial Analysis lists the September 2024 snapshot with an **August 2024 knowledge cutoff**; the API lifecycle page confirms the retirement date.
- **IDs:** `gemini-1.5-pro-002`; historical alias `gemini-1.5-pro`; predecessor `gemini-1.5-pro-001` (retired 2025-05-24).
- **Context window:** **2M tokens** (Artificial Analysis, accessed 2026-09-29; this is the model's own Artificial Analysis page under v4.3.2). This is a correction: the 2026-09-24 report recorded 1M from the BenchLM/AA snapshot. The model family was historically documented as supporting 2M-class input, and AA now states 2M directly. Exact maximum output was not shown.
- **Modalities:** Text, image, speech/audio, and video input; text output; function calling was available historically. Audio/video output and current agentic tools are not claimed.
- **Deprecation (confirmed 2026-09-29):** Retired 2025-09-24. Artificial Analysis additionally flags the model as deprecated and names a newer release, **Gemini 2.0 Flash (Feb '25)**, as the suggested alternative. AA also states that only the default 10k-input-token workload is still benchmarked and that other workload results are historical and no longer updated.
- **Pricing (as of 2026-09-29):** No price is available — Artificial Analysis lists $0.00 in and $0.00 out because the model has no remaining API provider. Historical rates were $1.25/$5.00 per 1M input/output tokens for prompts up to 128K, with higher long-context rates above that threshold. These are historical prices, not an available offer.
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

> Index version note: the Artificial Analysis Intelligence Index value below is read from the model's own Artificial Analysis page under **v4.3.2** (accessed 2026-09-29). It is an *estimate*, and AA states an independent evaluation is not forthcoming for this deprecated model.

Agent / tool use:

- Function calling: **supported historically**; no modern harness score found.
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, MCP-Atlas, and exact agent benchmark scores: **no verified public score found** for the retired September 2024 model.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **8 (estimated)**, rank **#123/299** (Artificial Analysis v4.3.2, accessed 2026-09-29) — unchanged from 2026-09-24. Above the non-reasoning price-class median of 7.
- GPQA Diamond: **59.1%** (Gemini 1.5 Pro technical-report/model-card evidence; exact harness details vary by snapshot)
- MATH: **67.7%** (Google Gemini 1.5 technical report, May 2024 revision)
- Big-Bench Hard: **89.2%** (Google Gemini 1.5 technical report)
- HLE: **approximately 3.5–4.9%** (aggregated historical trackers; not a current exact-model evaluation)
- MRCR: **82.6** (llm-stats historical record; not treated as a current official result)
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**

Coding:

- SWE-bench Verified: **34.2%** (Google historical baseline reported in the Gemini 2.5 report; not a direct current run)
- Natural2Code: **82.6%** (Google Gemini 1.5 technical report)
- HumanEval: **approximately 84%** (Google technical report; trackers vary)
- LiveCodeBench: **41.7%** (historical aggregator, provisional; not an official exact-model result)
- SWE-Pro, SciCode, Vibe Code Bench, and DeepSWE: **no verified public score found**

Long context:

- Native context: **2M tokens** (Artificial Analysis, accessed 2026-09-29) — this corrects the 1M figure used on 2026-09-24.
- Historical model documentation reports near-perfect long-context retrieval in research evaluations. No current retrieval result is claimed, since the model is retired and AA no longer updates non-default workloads.

Sources consulted: [Google Cloud model versions and lifecycle](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-versions), [Artificial Analysis Gemini 1.5 Pro (Sep '24)](https://artificialanalysis.ai/models/gemini-1-5-pro), and [BenchLM Gemini 1.5 Pro](https://benchlm.ai/models/gemini-1-5-pro), accessed 2026-09-29. Historical benchmark values are labeled where exact current evidence is unavailable. The v4.3.2 value was read from the model's own Artificial Analysis page, not from a live comparison page.

### Normalized scores (1–100)

- **Tool use: 45/100.** Unchanged. Function calling was supported, but the model is retired with no remaining API provider and no modern Terminal-Bench/Tau/GDPval/tool benchmark was verified.
- **Reasoning: 58/100.** Unchanged. GPQA 59.1%, MATH 67.7%, and BBH 89.2% reflect its historical strengths, the AA Index estimate of 8 is a current-version datapoint, and HLE is very low by current standards.
- **Context window: 98/100.** **Changed from 96.** The verified limit is **2M tokens** per Artificial Analysis, not 1M as recorded on 2026-09-24. The score rises slightly, not to the maximum, because the model is retired and no current retrieval-at-length result exists.
- **Multimodal: 90/100.** Unchanged. Text, image, speech/audio, and video input with text output were supported; no multimodal output is claimed.
- **Coding: 58/100.** Unchanged. Natural2Code is strong for its era, but SWE-bench Verified 34.2% is weak on current coding tasks and current LiveCodeBench evidence is only provisional.
- **Cost efficiency: 70/100.** Unchanged. There is no purchasable route at all — $0.00 on AA reflects an absent provider, not a free offer — and the historical $1.25/$5 pricing was only mid-range.
- **Overall Score: 69.8/100.** (45 + 58 + 98 + 90 + 58) / 5 = 69.8. Up from 69.4 because Context window moved 96 -> 98 on the corrected 2M limit. Best fit: historical comparison and archived long-context experiments only; migrate new work to a current Gemini model (note that the suggested `gemini-2.5-flash` upgrade also retires 2026-10-20).

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Google Cloud lifecycle documentation, Artificial Analysis (Intelligence Index v4.3.2 read from the model's own page), BenchLM, and historical Gemini technical-report evidence. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
