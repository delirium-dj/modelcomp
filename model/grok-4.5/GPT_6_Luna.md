# Grok 4.5 — findings by GPT-6 Luna

- Source: xAI / SpaceXSI, Grok 4.5
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's proprietary reasoning model aimed at coding, agentic software engineering, and knowledge work. It accepts image input as well as text, and should not be conflated with other Grok 4.x releases.
- **Provider / access:** xAI (now branded SpaceXSI) API, Grok Build, and Cursor. The official announcement demonstrates the Responses API; API docs also support function calling, structured output, batch requests, and configurable reasoning. xAI's docs still document the Grok 4.5 route, while Artificial Analysis marks its page superseded/deprecated and xAI's current docs emphasize a newer Grok version; no retirement date for this exact API ID was found.
- **Release / knowledge:** xAI's announcement is dated **July 16, 2026**. Artificial Analysis and BenchLM record **July 8, 2026**; source pages therefore conflict on the date (possibly reflecting an earlier availability vs. announcement date). No training-data cutoff was verified.
- **IDs:** API model `grok-4.5`; documented aliases `grok-4.5-latest` and `grok-build-latest` ([xAI model docs](https://docs.x.ai/developers/models/grok-4.5.md)).
- **Context window:** 500,000 tokens total. The current xAI docs do not publish a max-output limit. Pricing doubles when a request's prompt reaches 200K tokens, for all tokens in that request.
- **Modalities:** Text and image input, text output. Reasoning is supported (low/medium/high/xhigh; high default); tool/function calling and structured output are supported. No audio/video input or non-text output was verified for this model.
- **Pricing (as of 2026-10-29):** xAI lists, per 1M tokens, **<$200K prompt:** $2 input / $0.30 cached input / $6 output; **≥200K prompt:** $4 / $0.60 / $12. Once a prompt reaches 200K, the higher rates apply to all tokens in the request. Batch API has a 20% discount. xAI offered limited-time free usage in Grok Build and Cursor at launch, not a general free API tier. Artificial Analysis' older release article reports cache hits at $0.50, conflicting with current first-party docs; current docs' $0.30 rate is used here.
- **Architecture:** Proprietary, closed weights; architecture details were not disclosed in the official API docs. Artificial Analysis reports 1.5T parameters, citing an Elon Musk disclosure; this parameter count was not independently verified from a model card.

### Raw benchmarks found

Three independent public web searches were followed by checks of xAI's official [Grok 4.5 announcement](https://x.ai/news/grok-4-5), its exact [API model documentation](https://docs.x.ai/developers/models/grok-4.5.md), Artificial Analysis, and BenchLM. Keep the evaluation harnesses distinct: xAI's launch-post results and third-party runs do not always agree.

Agent / tool use:

- GDPval-AA v2: **1543 Elo** (ranked #4 at release); τ³-Banking: **33%** (top score in that July 2026 comparison); Artificial Analysis Intelligence Index: **54** (historical launch-era index) ([Artificial Analysis release article](https://artificialanalysis.ai/articles/grok-4-5-brings-spacexai-to-the-the-intelligence-frontier)). The current AA model page says Grok 4.5 is deprecated and its Intelligence Index is now unavailable/unknown; these launch-era results are historical.
- Terminal-Bench 2.1: **83.3%** in xAI's launch comparison. A separate Vals AI run is **67.8%** (BenchLM exact-model ledger); the harness/source-specific gap is material, so neither replaces the other.
- Claw-Eval: no verified exact-model score found.

Reasoning / knowledge:

- GPQA Diamond: **92.9%**; MMLU-Pro: **89.2%** (Vals AI runs listed in BenchLM's exact [Grok 4.5 ledger](https://benchlm.ai/models/grok-4-5)).
- AA-Omniscience Index: **26**; reported accuracy **52%** and hallucination rate **54%** (Artificial Analysis launch article). No exact-model HLE score was verified.

Coding:

- SWE-bench Pro: **64.7%**; Terminal-Bench 2.1: **83.3%** (xAI launch post; provider evaluation). DeepSWE 1.0: **62.0%** (Datacurve evaluation run using each model provider's harness); DeepSWE 1.1: **53%** (Datacurve, mini-swe-agent harness); SWE Marathon pass@1: **29.0%** (same post).
- Independent/cataloged results: LiveCodeBench Vals AI **87.4%**; SWE-bench (Vals AI, not SWE-bench Pro) **86.6%**; Terminal-Bench 2.1 Vals AI **67.8%**; CursorBench 3.2 **66.7%** (BenchLM exact-model ledger). Different task sets and harnesses mean the SWE-bench scores are not directly comparable to xAI's SWE-bench Pro result.
- Grok 4.5 in Grok Build scored **76** on Artificial Analysis' Coding Agent Index, using a Grok Build harness rather than the bare API. AA reports $2.59 per task for that index; the score is not interchangeable with a single benchmark percentage.

Long context and multimodal:

- xAI documents 500K context, but no exact-model MRCR/RULER retrieval score was found.
- xAI confirms image input; no exact-model general image benchmark score was verified.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA v2 1543 Elo, τ³-Banking 33%, and provider Terminal-Bench 2.1 83.3% are strong; they remain below the methodology's ~1750 GDPval / 50% Tau3 / 88% TB frontier references, and the separate Vals Terminal-Bench result is lower.
- **Reasoning: 87/100.** GPQA Diamond 92.9% is frontier-grade and AA's launch-era Intelligence Index was 54; no HLE score was verified and the current AA page no longer provides an updated index.
- **Context window: 88/100.** The verified 500K window falls in the methodology's 500K–1M tier; no retrieval-quality result supports a higher score, and max output is undocumented.
- **Multimodal: 65/100.** Verified image input fits the methodology's image-input band; output is text-only, with no video/audio or exact-model vision benchmark verified.
- **Coding: 88/100.** Provider Terminal-Bench 2.1 83.3%, SWE-bench Pro 64.7%, and DeepSWE 1.0 62% are strong, with an AA Coding Agent Index score of 76; caps include lower scores in separate Vals/DeepSWE 1.1 harnesses and no verified SciCode result.
- **Cost efficiency: 82/100.** The standard $2/$6 per-1M rate is above the methodology's ~$1.25/$4.25 reference, and ≥200K prompts double all token rates. AA's $0.31 per Intelligence Index task and $2.59 per Grok Build coding-agent task show good token/task efficiency, but are harness-specific.
- **Overall Score: 83/100.** Half-up mean of the five quality dimensions (88, 87, 88, 65, 88 = 83.2), excluding cost; best suited to coding and agentic knowledge work where its 500K context and image input help, while image-only modality and high long-prompt pricing are trade-offs.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public search queries, then primary-source verification against xAI's announcement and model docs, with Artificial Analysis and BenchLM used for distinct independent/harness-specific measurements. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
