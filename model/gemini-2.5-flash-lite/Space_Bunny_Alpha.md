# Gemini 2.5 Flash-Lite — findings by Space Bunny Alpha

- Source: Google (`gemini-2.5-flash-lite`; stable)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's cost-efficient, low-latency multimodal model for high-volume classification, extraction, and lightweight thinking tasks. Now a **legacy-access model under active deprecation**.
- **Provider / access:** Google Gemini API (`gemini-2.5-flash-lite`); Google AI Studio. Google limits access to users who have actively used 2.5 models; the preview ID `gemini-2.5-flash-lite-preview-09-2025` was shut down on 2026-03-31 with `gemini-3.1-flash-lite` named as its replacement.
- **Release / knowledge:** Release date is **not consistent across sources** — the Gemini deprecations table gives **2025-07-22**, Artificial Analysis gives **June 17, 2025**, and the AA provider table repeats June 2025. Knowledge cutoff **January 2025** (Google documentation, confirmed by AA).
- **Deprecation status (NEW on 2026-09-29 — changed since 2026-09-24):** Google's deprecations page row for `gemini-2.5-flash-lite` now reads **"No shutdown date announced"** and **no longer names a recommended replacement**. Until at least 2026-07-30 the same row read *"October 16, 2026"* with `gemini-3.1-flash-lite` as the replacement; a stale Gemini Enterprise catalogue page still shows a **retirement date of October 20, 2026**, which conflicts with the current deprecations page and should not be relied on. Google published no changelog entry for the withdrawal. Separately, **Artificial Analysis flags the model as deprecated** and suggests *Gemini 2.5 Flash-Lite Preview (Sep '25)* instead, and continues to benchmark only the default 10K-input-token workload (all other workload results frozen as historical). Practical read: the hard deadline is gone, but the model is clearly on the way out and the recommended migration target is no longer stated.
- **IDs:** `gemini-2.5-flash-lite`; preview `gemini-2.5-flash-lite-preview-09-2025` is shut down.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google model documentation). AA records the combined window as **1M tokens (~1500 A4 pages)**, and its provider table reports a 1M context window for the Google route.
- **Modalities:** AA v4.3.2 records **text, image, speech (audio) and video input with text output**. Google additionally documents PDF input, thinking, function calling, structured outputs, code execution, file search, Google Search grounding, URL context, and computer use. Live API and image/audio generation are not supported.
- **Pricing (as of 2026-09-29 — corrected):** **$0.10 per 1M input, $0.40 per 1M output, with a 90% cache discount** (AA v4.3.2, Google's first-party API rate; blended $0.07/1M at 7:2:1). The previous report's **$0.30 / $2.50** came from BenchLM and does not match Google's published first-party rate; the AA figure is used here. Pricing still varies by tier and inference mode.
- **Speed / latency (NEW on 2026-09-29):** output speed **267.5 tokens/s** (AA v4.3.2, Google's API; rank #2 / 75 in class, versus a 105.2 t/s class median — the search snippet elsewhere quotes 324.0 t/s, so the figure is drifting upward between AA refreshes), **TTFT 0.31s** (class median 1.84s), end-to-end response for 500 tokens 2.10s, first chunk 0.31s. This is a genuinely fast route.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- **AA v4.3.2 has no agentic evaluation for this model:** AutomationBench-AA, Terminal-Bench 4.0, τ³-Banking, ITBench-AA, EnterpriseOps-Gym-AA and Terminal-Bench-Science 0.1 all carry **no verified public score found**.
- Google documents function calling, code execution, file search, search grounding, URL context, and computer use, but no exact model scores were shown.
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index v4.3.2 = 7 (estimated), rank #56 / 757** — "below average in intelligence … compared to other non-reasoning models in a similar price tier (median: 9)". The v4.3.2 index is the 10-evaluation composite (AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1) with a **ceiling of 58** (Claude Opus 5.5 adaptive/max). **This is the first independent index value to exist for the model** — the previous pass had no composite at all.
- AA v4.3.2 component rows: HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1, MMLU-Pro — **no verified public score found**
- FrontierMath v2 Tiers 1–3: **4.844%**; Tier 4: **4.167%** (Epoch AI leaderboard via BenchLM)
- GPQA and an independent composite beyond AA: **no verified public score found**

Coding:

- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE, and the AA SciCode row: **no verified public score found**

Long context:

- Native context: **1,048,576 input tokens / 65,536 output** (Google model documentation); AA records 1M combined. No exact-model retrieval-at-length result was found; AA-LCR v1.1 carries no value for this model.

Sources consulted: [Artificial Analysis Gemini 2.5 Flash-Lite (Non-reasoning)](https://artificialanalysis.ai/models/gemini-2-5-flash-lite) and its [provider benchmarking page](https://artificialanalysis.ai/models/gemini-2-5-flash-lite/providers), both read on **Intelligence Index v4.3.2**, plus the [Google Gemini API deprecations table](https://ai.google.dev/gemini-api/docs/deprecations), [Google Gemini 2.5 Flash-Lite model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite), and [BenchLM Gemini 2.5 Flash-Lite](https://benchlm.ai/models/gemini-2-5-flash-lite), accessed 2026-09-29. Sibling-model scores are not transferred.

### Normalized scores (1–100)

- **Tool use: 65/100** *(was 68)*. Google documents a broad and genuinely fast tool surface, but **no agentic evaluation carries a value for this model on AA v4.3.2** and no exact-model Terminal-Bench / τ-bench / Claw-Eval / Toolathlon / MCP-Atlas number exists anywhere. Lowered 3 points to reflect the deprecation: the tool surface is real but the route is being wound down.
- **Reasoning: 48/100** *(was 52)*. Thinking is supported, but the only new evidence is decisive in the negative: **AA Intelligence Index v4.3.2 = 7**, below the 9 median for its price class and far below the 58 ceiling, and it is the first independent composite for this model. The FrontierMath rows (4.844% / 4.167%) are also very weak. Lowered 4 points.
- **Context window: 95/100** *(unchanged)*. Google verifies 1M input and 65K output, corroborated by AA's 1M figure; retrieval quality is still unmeasured.
- **Multimodal: 95/100** *(unchanged)*. Text, image, video, audio/speech and PDF input with text output are explicitly documented by Google and confirmed by AA. The output-side restriction (text only, no native image/audio generation) caps this at the top of the band rather than beyond it.
- **Coding: 58/100** *(unchanged)*. The model supports code execution and is intended for lightweight tasks, but no exact SWE / LiveCodeBench / SciCode / AA-SciCode score is available in any source.
- **Cost efficiency: 99/100** *(was 98)*. Corrected to Google's first-party rate of **$0.10 in / $0.40 out with a 90% cache discount** (blended $0.07/1M), which is materially cheaper than the $0.30/$2.50 BenchLM figure previously used, and the route is extremely fast at 267.5 t/s with 0.31s TTFT. Held at 99 rather than 100 because it is a metered API, not $0, and access is tier-limited with a deprecation overhang.
- **Overall Score: 72.2/100** *(was 73.6)*. (65 + 48 + 95 + 95 + 58) / 5 = 361 / 5 = **72.2**. Best fit: inexpensive high-volume multimodal extraction and classification where the per-token cost dominates the decision. It is emphatically not a reasoning or coding route, and it is on the way out — a migration plan is now worth more than an adoption plan.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research. Primary new evidence on 2026-09-29 was the Artificial Analysis Gemini 2.5 Flash-Lite model and provider pages, read on **Intelligence Index v4.3.2** (10 evals: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1; ceiling 58), plus the Google deprecations table and model documentation. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Changes from the 2026-09-24 pass: first AA index value (7, rank #56/757); pricing corrected $0.30/$2.50 → $0.10/$0.40 with 90% cache discount; output speed 267.5 t/s and TTFT 0.31s added; deprecation status changed — the October 16, 2026 shutdown date and the `gemini-3.1-flash-lite` replacement were withdrawn from Google's table and now read "No shutdown date announced" (a stale Gemini Enterprise page still shows Oct 20, 2026). Reasoning 52 → 48, Tool use 68 → 65, Cost efficiency 98 → 99, Overall 73.6 → 72.2.
- Future sources: add a new file next to this one, e.g. `Gemini_3.1_Flash_Lite.md`, using the same headings.
