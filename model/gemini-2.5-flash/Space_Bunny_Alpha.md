# Gemini 2.5 Flash — findings by Space Bunny Alpha

- Source: Google (`gemini-2.5-flash`; stable)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's balanced, thinking-capable multimodal model for high-volume processing, low-latency agentic tasks, and coding, now a legacy access model restricted to users who have used it, with a hard retirement date announced.
- **Provider / access:** Google Gemini API (`gemini-2.5-flash`); Google AI Studio; Batch, Flex, and Priority inference. The current Google page says access to 2.5 models is limited to users who have actively used them.
- **Release / knowledge:** Google documentation lists the latest stable update in June 2025 and a January 2025 knowledge cutoff. Google Cloud records the release date as June 17, 2025. **Changed since 2026-09-24: a named retirement date now exists** — see deprecation below.
- **IDs:** `gemini-2.5-flash`; preview ID `gemini-2.5-flash-preview-09-2025` is shut down (2026-02-17, replaced by `gemini-2.5-flash`).
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google model documentation). Artificial Analysis also reports 1M.
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, function calling, structured outputs, code execution, file search, Google Search grounding, Google Maps grounding, URL context, and computer use supported. Live API and image/audio generation are not supported.
- **Deprecation / retirement (new since 2026-09-24):** Google's Gemini API deprecations page lists `gemini-2.5-flash` with **no announced shutdown date**, but Google Cloud's model lifecycle table now publishes a hard **retirement date of October 20, 2026**, with **Gemini 3.5 Flash-Lite or Gemini 3.1 Flash-Lite** as the recommended replacements. The Gemini API also limits 2.5-model access to existing users (Google statement, July 2026). Artificial Analysis independently flags the model as deprecated and names a newer release, Gemini 2.5 Flash Preview (Sep '25) — note that suggested successor is itself already shut down, so the Cloud replacements above are the real target.
- **Pricing (as of 2026-09-29):** Unchanged — $0.30 per 1M input, $2.50 per 1M output, with a 90% cache discount. Google pricing can vary by tier and inference mode.
- **Speed / latency:** Artificial Analysis measures **193.1 output tokens/second** with a **0.45 s time to first token** on Google's API (rank #6/75 for speed in its class). Unchanged from 2026-09-24 in substance; newly documented here.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

> Change since 2026-09-24: the Artificial Analysis Intelligence Index value for this model is now documented. The 2026-09-24 report said "no Artificial Analysis composite"; the value below is an **estimate**, not a completed independent evaluation.

Agent / tool use:

- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public score found**
- Google documents function calling, code execution, file search, search grounding, URL context, and computer use, but the reviewed pages do not expose exact model scores.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (v4.3.2, non-reasoning variant): **10 (estimated)**, rank **#29/751** (Artificial Analysis, accessed 2026-09-29). A reasoning variant exists and Artificial Analysis lists it at 20 on a comparison page; that figure is not a completed v4.3.2 evaluation.
- FrontierMath v2 Tiers 1–3: **4.844%**; Tier 4: **4.167%** (Epoch AI leaderboard via BenchLM)
- GPQA, HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**

Coding:

- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public score found**

Long context:

- No exact-model retrieval-at-length result was found. Native context is **1,048,576 input tokens / 65,536 output** (Google model documentation).

Sources consulted: [Google Gemini deprecations](https://ai.google.dev/gemini-api/docs/deprecations), [Google Cloud model versions and lifecycle](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-versions), [Google Gemini 2.5 Flash model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash), [Artificial Analysis Gemini 2.5 Flash](https://artificialanalysis.ai/models/gemini-2-5-flash), and [BenchLM Gemini 2.5 Flash](https://benchlm.ai/models/gemini-2-5-flash), accessed 2026-09-29. No standard agent/coding rows are inferred from sibling models.

### Normalized scores (1–100)

- **Tool use: 70/100.** Unchanged. Google documents a broad tool set and computer use, but no exact-model Terminal-Bench, Tau, GDPval, Toolathlon, or MCP measurement was found.
- **Reasoning: 50/100.** Changed from 55. The AA Intelligence Index v4.3.2 estimate of 10 for the non-reasoning variant, alongside the very weak FrontierMath results (4.844%/4.167%), is now on the record and does not support the previous mid-50s rating. Thinking is supported but the measured evidence is poor.
- **Context window: 95/100.** Unchanged. A 1M input/65K output limit is verified by Google; retrieval quality at length is unmeasured.
- **Multimodal: 95/100.** Unchanged. Text, image, video, audio, and PDF input with text output are explicitly documented.
- **Coding: 60/100.** Unchanged. The model is designed for coding and agents, but exact SWE/LiveCodeBench/SciCode/DeepSWE values are absent and the public profile still has no coding row.
- **Cost efficiency: 93/100.** Unchanged. The $0.30/$2.50 rate and 90% cache discount are inexpensive for a 1M multimodal model. Retirement on 2026-10-20 caps how long this advantage is usable.
- **Overall Score: 74.0/100.** (70 + 50 + 95 + 95 + 60) / 5 = 74.0. Down from 75.0 because Reasoning moved 55 -> 50. Best fit: existing 2.5 Flash workloads with a migration plan in place before the 2026-10-20 retirement date; new deployments should go to Gemini 3.5 Flash-Lite or Gemini 3.1 Flash-Lite.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Google's official deprecation and lifecycle documentation, Google's model documentation, Artificial Analysis (Intelligence Index v4.3.2, estimated value), and BenchLM. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
