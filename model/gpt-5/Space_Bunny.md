# GPT-5 — findings by Space Bunny

- Source: OpenAI (`gpt-5`, snapshot `gpt-5-2025-08-07`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — the independent composite has been downgraded from a measurement to an estimate.** Artificial Analysis now flags Intelligence Index **23\*** with an explicit *"Estimate (independent evaluation forthcoming)"* label, has frozen performance benchmarking to the default 10k input-token workload, and reports **Cost per Intelligence Index task as N/A** and **verbosity as N/A**. Because the only independent composite is now explicitly unverified and the cost evidence has been withdrawn, **Reasoning 82 → 80**, **Context 82 → 81**, and **Cost 52 → 50**; Overall **78.0 → 77.4**. Throughput also drifted downward: **104 → 88.2 tokens/s** and **TTFT 64.04 → 73.11s**.

## Model card

- **Name:** GPT-5 (high)
- **Short description:** OpenAI's August 2025 flagship — a unified router system pairing a fast model with a deeper reasoning model behind one ID. Set launch records in math and coding at the time; now a legacy model **deprecated with a confirmed API shutdown**, superseded by GPT-5.1 and then by the GPT-5.4/5.5/5.6 and GPT-6 families.
- **Provider / access:** OpenAI API on both endpoints — Chat Completions `v1/chat/completions` and Responses `v1/responses` (a Realtime `v1/realtime` endpoint is also listed). OpenCode Zen serves the same weights as `opencode/gpt-5`. Artificial Analysis lists **2 API providers**.
- **Lifecycle — deprecated, shutdown confirmed:** OpenAI's API deprecations page (2026-06-11 notice) sets **shutdown 2026-12-11** for `gpt-5-2025-08-07`, with **`gpt-5.6-sol`** as the named replacement. The sibling `gpt-5-pro` maps to `gpt-5.6-sol` with `reasoning.mode: pro`, also shutting down 2026-12-11. `gpt-5-chat-latest` already shut down 2026-07-23. Artificial Analysis carries a matching deprecation banner, freezes benchmarking to the 10k default workload, and suggests **GPT-5.1**. **Days remaining to API shutdown from this report: 62.**
- **Release / knowledge:** Snapshot `gpt-5-2025-08-07`, released **2025-08-07**. **Knowledge cutoff 2024-09-30** (OpenAI model page; Artificial Analysis independently shows "Sep 30, 2024"). This is a **25-month-old cutoff**.
- **IDs:** `gpt-5`; snapshot `gpt-5-2025-08-07`. No Zen Free ID — this is a paid model.
- **Context window:** **400,000 tokens total, 128,000 max output** (OpenAI model page; Artificial Analysis independently confirms 400k, ≈600 A4 pages).
- **Modalities:** Text and image in; text out. OpenAI's model page explicitly lists **audio and video as not supported**. Reasoning token support with `reasoning.effort` = minimal / low / medium / high. Tool calls, structured outputs, JSON mode supported.
- **Pricing (verified 2026-10-10, unchanged):** **$1.25 input / $0.125 cached input / $10.00 output per 1M**. Batch API halves the input rate. Blended 7:2:1 rate **$1.34 per 1M**; Artificial Analysis reports a **90% cache discount**. OpenCode Zen tier per the repository's curated `meta.json` is $1.07/$8.50.
- **Architecture:** Proprietary. OpenAI describes GPT-5 as a unified router switching between a fast model and a deeper reasoning model, with a sparse mixture-of-experts design. Parameter count not officially disclosed (secondary sources report ~200B).

### Raw benchmarks found

Agent / tool use:

- Tau2-bench Airline **62.6%**; Telecom **96.7%**; Retail **81.1%** (OpenAI GPT-5.1 launch comparison table, GPT-5 high; Telecom run used a short generic prompt)
- **Terminal-Bench 2.1: 49.6%** (Epoch AI Benchmarking Hub via Devmesh, 2026-08-25)
- **APEX Agents 18.3%**; **RLI (real-world tool use) 1.67%**; **GDPval 34.8%** (Epoch AI via Devmesh)
- **Artificial Analysis Intelligence Index v4.3.2: 23\* — now explicitly labelled an ESTIMATE** ("Estimate (independent evaluation forthcoming)"), rank **#138 of 227** reasoning models, below average against a **median of 26** in the $1+/1M tier. **Changed from the previously recorded #130/216.** The value itself is unchanged at 23.
- **Cost per Intelligence Index task: N/A. Output tokens from Index: N/A.** Both withdrawn as a direct consequence of deprecation — the cheapest-looking evidence this model once had no longer exists.
- AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, AA-LCR v1.1: **no verified public per-row score found** (none published for this deprecated model)

Reasoning / knowledge:

- **GPQA Diamond 85.7%** (no tools, GPT-5 high, OpenAI official); independent aggregation **86.17%** (Epoch AI via Devmesh); a third card gives 86.2% — a tight three-way spread
- **AIME 2025: 94.6%** (no tools, OpenAI official)
- **Humanity's Last Exam: 25.32%** (Epoch AI via Devmesh)
- **FrontierMath with Python tool: 26.3%** (OpenAI official)
- SimpleQA Verified **50.6%**; SimpleBench **56.7%**; Fiction.liveBench **96.9%** (Epoch AI via Devmesh)
- CritPt and AA-Omniscience Accuracy / Hallucination Rate: **no verified public score** — "Under review" / empty on the AA v4.3.2 page
- OpenAI launch hallucination reporting: HealthBench hallucination rate **1.6%** with thinking / 3.6% without; LongFact-Concepts 0.7%, LongFact-Objects 0.8%, FActScore 1.0%

Coding:

- **SWE-bench Verified 72.8%** (all 500 problems, GPT-5 high, OpenAI official GPT-5.1 comparison); **74.9%** at launch with thinking; independent aggregation **73.55%** (Epoch AI via Devmesh)
- **Aider Polyglot 88%** (OpenAI launch reporting)
- **SciCode 42.94%** (Epoch AI via Devmesh)
- AlgoTune **1.67%**; OJBench not published for this ID
- LiveCodeBench, Vibe Code Bench, DeepSWE / Coding Index: **no verified public score found**

Long context / autonomy:

- **BrowseComp Long Context 128k: 90.0%** (OpenAI official comparison table) — a real retrieval result, but at 128k, not the full 400K window
- **METR Time Horizons: 203.01 minutes** of solo autonomous work (Epoch AI via Devmesh) — the strongest single autonomy datapoint for this model
- No MRCR / RULER / GraphWalks result at full 400K length. **AA-LCR v1.1 is an index component but no per-row value is published.**

Performance (Artificial Analysis, 2026-10-10): output speed **88.2 tokens/s** (#72/227, "faster than average" vs. a 79.0 t/s median); **TTFT 73.11s** (vs. a 3.80s median) — **down from 104 t/s and 64.04s** on the prior pass.

Sources consulted: [Artificial Analysis GPT-5 (High)](https://artificialanalysis.ai/models/gpt-5), [OpenAI GPT-5 model page](https://developers.openai.com/api/docs/models/gpt-5), [OpenAI API deprecations](https://developers.openai.com/api/docs/deprecations), [OpenAI GPT-5.1 for developers](https://openai.com/index/gpt-5-1-for-developers/) (evaluation comparison table), [Devmesh GPT-5 / Epoch AI aggregation](https://www.devmesh.me/models/gpt-5), [aichangewatch gpt-5-2025-08-07 retirement page](https://aichangewatch.com/deprecations/model/gpt-5-2025-08-07), and [Artificial Analysis Intelligence Index v4.3 methodology](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-3), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 78/100.** Unchanged. Tau2-bench averages ~80 across airline/telecom/retail and **METR's 203 minutes of solo autonomous work** remains the strongest autonomy datapoint in this dataset. Capped by **Terminal-Bench 2.1 at 49.6%**, **APEX Agents at 18.3%**, and **RLI at 1.67%** — 2025-era agentic reliability is well behind 2026 frontier routes. The AA component rows remain unpublished, so the agentic picture rests entirely on 2025-vintage measurements.
- **Reasoning: 80/100.** Reduced from 82. **GPQA Diamond 85.7–86.2%** across three sources, **AIME 2025 94.6%**, and OpenAI's very low launch hallucination rates (HealthBench 1.6% with thinking, FActScore 1.0%) are genuinely strong. The reduction is driven by evidence quality rather than capability: **the Intelligence Index of 23 is now explicitly an estimate pending independent evaluation**, not a measurement; **HLE at 25.32%** and **FrontierMath at 26.3%** are the ceiling; and **CritPt and AA-Omniscience are still unpublished**, leaving no knowledge-grounding measurement at all.
- **Context window: 81/100.** Reduced from 82. The 400K/128K limits are solid and **BrowseComp Long Context returns 90.0% at 128k**, which is real evidence. Held down because that is the *only* retrieval measurement and it tops out at **32% of the advertised window**; AA-LCR v1.1 is an index component with **no per-row value published**; and no MRCR/RULER/GraphWalks result exists at full length. The 400K figure remains a capacity claim.
- **Multimodal: 70/100.** Unchanged. Text and image in, text out, with MMMU-Pro at 84.2% — solid visual reasoning. OpenAI's own model page lists **audio and video as unsupported**, which is what holds this below the native-multimodal tier.
- **Coding: 78/100.** Unchanged. **SWE-bench Verified 72.8–74.9%** (three sources, tight spread) and **Aider Polyglot 88%** were launch-leading in August 2025. Capped by **SciCode at 42.94%**, **Terminal-Bench 2.1 at 49.6%**, and **AlgoTune at 1.67%**, all of which place it clearly behind 2026 coding-specialist models. No LiveCodeBench, Vibe Code Bench, or DeepSWE figure exists.
- **Cost efficiency: 50/100.** Reduced from 52. The sticker rate has not moved — **$1.25 / $10.00 with a 90% cache discount and a $1.34 blended rate** — and against 2025 frontier pricing that was good. Two changes this pass: **Artificial Analysis has withdrawn Cost per Intelligence Index task and verbosity as N/A**, so the cheapest-remaining price-per-task evidence this model had is gone; and **throughput has degraded from 104 to 88.2 tokens/s with TTFT rising from 64.04s to 73.11s**, which raises the wall-clock cost of every long agentic run. Against 2026 routes (GPT-5.6 Luna at $0.20/$1.20, GPT-6 Luna at $0.10/$0.50) this is very expensive, and the named replacement **GPT-5.6 Sol at $4/$20** is more expensive still.
- **Overall Score: 77.4/100.** (78 + 80 + 81 + 70 + 78) / 5 = 387 / 5 = 77.4, down from 78.0. The score barely moves because nothing about the model's *capability* changed — what degraded is the **evidence**, as deprecation freezes every independent measurement. **Best fit: existing GPT-5 production traffic needing a stable, well-documented endpoint on both Chat Completions and Responses, with ~62 days to plan a migration.** **Not a fit for new deployments.** The obvious migration is **GPT-6 Luna at $0.10/$0.50** rather than the officially-named GPT-5.6 Sol, which costs several times more on every axis.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Artificial Analysis, OpenAI's model / pricing / deprecation pages, OpenAI's GPT-5.1 evaluation comparison table, and the Epoch AI Benchmarking Hub aggregation; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: the **Intelligence Index of 23 is now explicitly an estimate** ("independent evaluation forthcoming") rather than a completed run, which is the single most consequential change this pass and is stated wherever the index is used. Cost-per-task and verbosity are **withdrawn as N/A**, not carried forward. Throughput drift (**104 → 88.2 t/s**, **64.04 → 73.11s TTFT**) is recorded as measurement drift, not a capability regression. Search-provider rate limiting (HTTP 429) persisted through this pass, so evidence came from direct retrievals of Artificial Analysis, OpenAI's documentation pages, and the Epoch AI aggregation rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `GPT_5_Recheck.md`, using the same headings.