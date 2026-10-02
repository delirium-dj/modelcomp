# GPT-5 — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5`, snapshot `gpt-5-2025-08-07`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 (OpenAI, August 2025 flagship)
- **Short description:** OpenAI's August 2025 flagship, a router system that pairs a fast model with a deeper reasoning model behind one ID. It set launch records in math and coding at the time and is now a legacy/deprecated model, superseded by GPT-5.1 and later by the GPT-5.4/5.5/5.6 and GPT-6 families.
- **Provider / access:** OpenAI API on both endpoints — Chat Completions `v1/chat/completions` and Responses `v1/responses` (a Realtime `v1/realtime` endpoint is also listed). OpenCode Zen serves the same weights as `opencode/gpt-5`. Artificial Analysis lists 2 API providers.
- **Release / knowledge:** Snapshot `gpt-5-2025-08-07`, released 2025-08-07. Knowledge cutoff **2024-09-30** (OpenAI model page; Artificial Analysis independently shows "Sep 30, 2024"). The model is marked Deprecated, with a confirmed API shutdown of **2026-12-11** and GPT-5.6 Sol named as the replacement.
- **IDs:** `gpt-5`; snapshot `gpt-5-2025-08-07`; sibling chat variant `gpt-5-chat-latest` (separate, 128K context, itself shut down 2026-07-23). No Zen Free ID exists — this is a paid model.
- **Context window:** **400,000 tokens total, 128,000 max output** (OpenAI model page, verified; Artificial Analysis independently confirms 400k).
- **Modalities:** Text and image in; text out. OpenAI's model page explicitly lists audio and video as **not supported** for `gpt-5`. Reasoning token support with `reasoning.effort` = minimal / low / medium / high. Tool calls, structured outputs and JSON mode supported.
- **Pricing (as of 2026-09-29, unchanged):** **$1.25 input / $0.125 cached input / $10.00 output per 1M tokens** (OpenAI pricing page and Artificial Analysis, both verified). Batch API halves the input rate. The repository's curated `meta.json` lists the OpenCode Zen tier at $1.07/$8.50. Blended rate at a 7:2:1 cache-hit/input/output ratio is $1.34 per 1M.
- **Architecture:** Proprietary. OpenAI describes GPT-5 as a unified router system switching between a fast model and a deeper reasoning model; a sparse mixture-of-experts design. Parameter count has not been officially disclosed (secondary sources report ~200B).

### Raw benchmarks found

Agent / tool use:

- Tau2-bench Airline: **62.6%** (OpenAI, GPT-5.1 launch comparison table, GPT-5 high, no custom prompt)
- Tau2-bench Telecom: **96.7%**; Tau2-bench Retail: **81.1%** (same source; Telecom run used a short generic prompt)
- Terminal-Bench 2.1: **49.6%** (Epoch AI Benchmarking Hub via Devmesh, 2026-08-25)
- APEX Agents: **18.3%**; RLI (real-world tool use): **1.67%** (Epoch AI via Devmesh)
- GDPval: **34.8%** (Epoch AI via Devmesh)
- Artificial Analysis Intelligence Index **v4.3.2: 23/100** (Artificial Analysis model page, accessed 2026-09-29), rank **#130 of 216** reasoning models, "below average" against a median of 26 in the $1+/1M tier. **Changed from the previously recorded 35/100** — this model did **not** move with the v4.3.2 re-base; the value was already low and the harder v4.3.2 task set (Terminal-Bench 4.0, AutomationBench-AA, AA-Briefcase) did not lift it. Same page: 104 output tokens/s, TTFT 64.04s, blended $1.34 per 1M.
- AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, AA-LCR v1.1: **no verified public per-row score found**
- Claw-Eval / ClawProBench, Toolathon, MCP-Atlas, SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (no tools, GPT-5 high, OpenAI official); an independent aggregation gives **86.17%** (Epoch AI via Devmesh) and a third card gives 86.2%
- AIME 2025: **94.6%** (no tools, OpenAI official)
- Humanity's Last Exam: **25.32%** (Epoch AI via Devmesh)
- FrontierMath (with Python tool): **26.3%** (OpenAI official)
- SimpleQA Verified: **50.6%** (Epoch AI via Devmesh) — calibration/hallucination-adjacent
- SimpleBench: **56.7%**; Fiction.liveBench: **96.9%** (Epoch AI via Devmesh)
- CritPt and AA-Omniscience Accuracy / Hallucination Rate: **no verified public score found** for this exact ID — both are "Under review" / empty on the Artificial Analysis v4.3.2 page for a deprecated model
- Hallucination (OpenAI launch reporting): HealthBench hallucination rate **1.6%** with thinking / 3.6% without; LongFact-Concepts 0.7%, LongFact-Objects 0.8%, FActScore 1.0% (W&B ml-news summary of the OpenAI GPT-5 release)

Coding:

- SWE-bench Verified: **72.8%** (all 500 problems, GPT-5 high, OpenAI official GPT-5.1 comparison); **74.9%** at launch with thinking (OpenAI launch reporting); independent aggregation **73.55%** (Epoch AI via Devmesh)
- Aider Polyglot: **88%** (OpenAI launch reporting)
- SciCode: **42.94%** (Epoch AI via Devmesh)
- AlgoTune: **1.67%**; OJBench: **not published for this ID** (Epoch AI via Devmesh)
- LiveCodeBench, Vibe Code Bench, DeepSWE / Coding Index: **no verified public score found**

Long context:

- BrowseComp Long Context 128k: **90.0%** (OpenAI official comparison table) — a real retrieval-at-length result, but measured at 128k, not at the full 400K window.
- No MRCR / RULER / GraphWalks result at the full 400K length was found. Artificial Analysis lists AA-LCR v1.1 as an index component but publishes no per-row value for this deprecated model. The 400K figure is a capacity claim; the only measured long-context number tops out at 128k.
- METR Time Horizons: **203.01 minutes** of solo autonomous work (Epoch AI via Devmesh) — the strongest single autonomy datapoint for this model.

Sources consulted: [OpenAI GPT-5 model page](https://developers.openai.com/api/docs/models/gpt-5), [OpenAI API deprecations](https://developers.openai.com/api/docs/deprecations) (2026-06-11 notice: `gpt-5-2025-08-07` → `gpt-5.6-sol`, shutdown Dec 11 2026), [Artificial Analysis GPT-5 (high)](https://artificialanalysis.ai/models/gpt-5), [Artificial Analysis Intelligence Index v4.3](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-3), [OpenAI GPT-5.1 for developers](https://openai.com/index/gpt-5-1-for-developers/) (evaluation comparison table), [Devmesh GPT-5 / Epoch AI aggregation](https://www.devmesh.me/models/gpt-5), [aichangewatch gpt-5-2025-08-07 retirement page](https://aichangewatch.com/deprecations/model/gpt-5-2025-08-07), [TechCrunch on GPT-5 launch pricing](https://techcrunch.com/2025/08/08/openai-priced-gpt-5-so-low-it-may-spark-a-price-war/), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2-bench averages ~80 across airline/telecom/retail and METR shows 203 minutes of solo autonomy, but Terminal-Bench 2.1 at 49.6%, APEX Agents at 18.3% and RLI at 1.67% cap it — 2025-era agentic reliability is well behind 2026 frontier routes. **Reinforced by change:** the v4.3.2 index of 23 with an "Agents 30%" weighting confirms the agentic weakness under the harder task set.
- **Reasoning: 82/100.** GPQA Diamond 85.7–86.2% and AIME 2025 94.6% are strong, and OpenAI's launch reporting shows very low hallucination rates. HLE at 25.3% and FrontierMath at 26.3% are the ceiling on this score.
- **Context window: 82/100.** 400K total with 128K max output is a strong mid-high tier, and BrowseComp Long Context returns 90.0% at 128k. It falls short of the 1M+ tier and the only retrieval measurement is at a third of the window.
- **Multimodal: 70/100.** Text and image in, text out, with MMMU at 84.2% — solid visual reasoning. OpenAI's own model page lists audio and video as unsupported, which is what holds this below the native-multimodal tier.
- **Coding: 78/100.** SWE-bench Verified 72.8–74.9% and Aider Polyglot 88% were launch-leading, but SciCode 42.94% and a 49.6% Terminal-Bench 2.1 place it clearly behind 2026 coding-specialist models.
- **Cost efficiency: 52/100.** $1.25/$10 per 1M with a 90% cache discount is mid-range: cheap against 2025 frontier pricing, expensive against 2026 routes such as GPT-5.6 Luna at $0.20/$1.20. The named replacement GPT-5.6 Sol is **more** expensive ($5/$30), so migrating costs roughly 300% on input and 200% on output.
- **Overall Score: 78.0/100.** (78 + 82 + 82 + 70 + 78) / 5 = 390 / 5 = 78.0. Best fit: existing GPT-5 production traffic that wants a stable, well-documented reasoning endpoint on both Chat Completions and Responses. Not a fit for new deployments — it is deprecated with a confirmed 2026-12-11 shutdown (113 days from this report), and GPT-5.4/5.5/5.6 or GPT-6 Astra dominate it on nearly every axis.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of OpenAI's own model, pricing and deprecation pages, OpenAI's published GPT-5.1 evaluation comparison table, Artificial Analysis (model page + Intelligence Index v4.3.2 methodology note), and the Epoch AI Benchmarking Hub aggregation. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Changes vs the 2026-09-27 revision of this file: AA Intelligence Index 35 → **23** (v4.3.2, rank #130/216); output speed 93.1 → **~104 tokens/s** and TTFT 67.50s → **64.04s**; deprecation shutdown **2026-12-11 confirmed** on OpenAI's own deprecations page with `gpt-5.6-sol` as the named replacement; `gpt-5-chat-latest` shutdown 2026-07-23 noted; GPT-5.6 Sol's higher replacement pricing added. No score line changed.
- Future sources: add a new file next to this one, e.g. `GPT_5_Pro.md`, using the same headings.
