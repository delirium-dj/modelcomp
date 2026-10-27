# Muse Wonder Full — findings by MiMo 2.6 Flash

- Source: Meta `muse-wonder-full` (model id `muse-wonder-full-1.0`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full (`muse-wonder-full`) — **the top tier of Meta's Muse Wonder series**, released **2026-10-12** by Meta Superintelligence Labs (MSL) alongside the standard Muse Wonder (`muse-wonder-1.0`). Not a variant of Muse Wonder: it is a **separate, more capable model** — datacamp: "setting regular Muse Wonder to max reasoning doesn't turn it into Muse Wonder Full." Catalogs list it as `meta-muse-wonder-full-1.0` (gradually.ai) / "Muse Wonder Full (Max)" (Artificial Analysis; "(Max)" = reasoning-effort tier).
- **Short description:** Meta's "most advanced model yet" — frontier coding, **long-running agents** (hand off multi-step tasks "for hours, uninterrupted": plans work, delegates to sub-agents, calls tools in parallel, recovers from errors), and advanced computer use, plus two signature capabilities: **Active Memory** (carries personal context across conversations, actively retrieving what's relevant) and **Active Focus** (keeps working through hard tasks, tries alternatives, asks for clarification, checks in before important actions). Trained at Meta's gigawatt-scale **Prometheus** data center; positioned as the next rung on MSL's scaling ladder "toward personal superintelligence" (lineage: MSL overhaul → **Muse Spark** 2026-04-08 → Spark 1.1/1.2/1.3 → Muse personal agent 2026-09-08 → **Muse Wonder series** 2026-10-12).
- **Provider / access:** **Muse Code subscription only** — no public API (dev.meta.ai pricing row `muse-wonder-full-1.0` shows "-" for input/cached/output; Artificial Analysis: "No publicly available API"). Plans: **Power Usage $50.00/month** ("access to the most powerful Muse models, including Muse Wonder Full", 20× Everyday usage) or **Maximum Usage $200.00/month** (80×). The standard Muse Wonder is separately available on the Meta Model API at $4.00 in / $0.20 cached / $20.00 out. Muse Wonder (standard) will soon power the Muse assistant; Full's stated scope is Muse Code subscribers.
- **Release / knowledge:** **2026-10-12** (about.fb.com newsroom, research.meta.ai, Artificial Analysis — all agree). Knowledge cutoff not published.
- **IDs:** `muse-wonder-full-1.0` (dev.meta.ai); AA slug `muse-wonder-full`.
- **Context window:** **1,000,000** tokens (dev.meta.ai, Artificial Analysis, aireleasetracker — all agree).
- **Modalities:** **text, image, speech and video input; text output only** (AA technical specs; Forbes: "the models only generate text"); benchmarklist also lists PDF input for the series. Reasoning model — evaluated at max effort; multiple reasoning-effort tiers exist (research blog plots "performance at a distinct reasoning effort").
- **Pricing (as of 2026-10-27):** **no per-token price** — flat subscription: $50/mo (Power) or $200/mo (Maximum), usage-capped. **Conflict reported side by side:** kie.ai's comparison says Full "matches its reported **$4/$20** price" — that is the *standard Muse Wonder* API rate; Meta's own pricing table prices Full at "-", and AA records no API. Treat $4/$20 as a sibling conflation, not Full's price.
- **Architecture:** proprietary; parameter count and model size undisclosed (AA). Weights not open.

### Raw benchmarks found

**Official comparison table (dev.meta.ai, effort tier = max for all five columns; Full is #1 on 7 of 14 rows vs the four rival/sibling flagships):**

| Benchmark | **Full** | Wonder | Fable 5.1 | GPT-6 Astra | Opus 5.5 |
|---|---|---|---|---|---|
| Personal Superintelligence Index (Meta-internal) | **59.1** | 54.3 | 49.9 | 54.5 | 55.2 |
| Harvey LAB-AA (legal agent work) | **13.1** | 10.0 | 6.4 | 8.6 | 4.2 |
| Vals Finance Agent V2 | **59.1** | 56.6 | 58.9 | 53.5 | 58.6 |
| HealthBench Pro | 62.3 | 60.5 | 62.1 | 65.3 | 65.6 |
| AutomationBench-AA (E2E business workflows) | **45.4** | 39.1 | 32.1 | 41.6 | 41.2 |
| GDP.pdf (professional work) | 33.2 | 30.8 | 27.6 | 34.2 | 30.6 |
| JobBench (professional tool use) | 75.3 | 70.5 | 73.1 | 66.1 | 75.4 |
| OSWorld V2.1 (computer use) | 78.4 partial / 39.4 binary | 72.6/34.3 | 80.7/43.1 | 75.8/34.3 | 81.8/– |
| MemoryBench (remembering context) | 85.5 | 85.6 | 79.0 | 81.4 | 81.5 |
| Terminal-Bench 4.0-AA | 57.1 | 52.0 | 52.0 | 59.1 | 59.6 |
| **DeepSWE 1.1** (long-horizon coding) | **79.0** | 78.8 | 67.4 | 74.1 | 74.2 |
| **SWE-Marathon** (ultra-long-horizon engineering) | **57.5** (xhigh) | 53.1 | 45.6 | 42.5 | 46.3 |
| ProgramBench (from-scratch programming) | 59.0 | 50.0 | 55.5 | 52.5 | 70.5 |
| Artificial Analysis Intelligence Index | 56 | 52 | 53 | 53 | 58 |

**Independent verification of the same rows (three sources, fetched 2026-10-27):** mindstudio.ai (DeepSWE 79.0/78.8 ahead of Opus 5.5 74.2 and GPT-6 Astra 74.1; AA 56 vs Opus 5.5 58); kie.ai (AA 56 vs 58, SWE-Marathon 57.5% vs 46.3%); llmlearner (HealthBench 62.3 vs Opus 5.5 65.6).

- **Artificial Analysis Intelligence Index: 56 — #4 of 704 models** (independent; ties Claude Sonnet 5.5 per Forbes; two points behind Claude Opus 5.5's 58; median of the class 13). Verbosity: 140M output tokens on the index (#156/226 — notably verbose). No public API, so AA speed/cost metrics are N/A.
- **BenchLM / BenchAlign public leaderboard: 74.9/100, #12 of 229** (evidence status: *Estimated* — flagged).
- dev.meta.ai (official): Full "tops agentic and coding benchmarks, including **DeepSWE and SWE-Marathon in independent third-party runs**."
- ailearningguides + research blog: on Meta's long-horizon coding benchmarks it beats **Claude Opus 5.5 and GPT-6 Astra** (table-confirmed). Meta's own research blog additionally benchmarks **Harvey LAB** (legal), FocusBench (focus), SWE-Marathon; a full model card/report is at `research.meta.ai/static/muse-wonder-model-card` ("available soon" for the expanded safety report).
- Comparative pages exist across llm-stats (vs Opus 5.5), benchlm, gradually.ai, aiiq, springprompt (8 physical-craft tests), colrows ("the SQL Gap"); Reddit r/opencode tracks it as the new frontier entry.

### Normalized scores (1–100)

- **Tool use: 88/100.** Best-of-five on the Personal Superintelligence Index (59.1 vs Opus 5.5 55.2), AutomationBench-AA 45.4, Harvey LAB-AA 13.1, Vals Finance 59.1; MemoryBench 85.5; official hours-long sub-agent delegation + error recovery + OSWorld computer use (78.4 partial, #3 of 5). Held at 88 because Terminal-Bench 4.0-AA (57.1) and OSWorld trail Opus 5.5, and the headline PS Index is Meta-internal.
- **Reasoning: 89/100.** AA Intelligence Index **56, #4 of 704** (independent, ties Claude Sonnet 5.5, beats Fable 5.1 and GPT-6 Astra at 53); top score on Vals Finance Agent; strong GDP.pdf/HealthBench. Held below 90: ProgramBench 59.0 far behind Opus 5.5's 70.5, no standalone GPQA/HLE figure published, and index runs are verbose (140M tokens).
- **Context window: 85/100.** 1M tokens triple-confirmed (official + AA + trackers), but **no needle-retrieval measurement** is published for Full (no MRCR/AA-LCR standalone row) — MemoryBench 85.5 evidences cross-conversation Active Memory rather than long-context retrieval, and AA-LCR only runs inside the composite index.
- **Multimodal: 77/100.** Broad input side — text, image, **speech** and video (plus PDF per series docs), rarer than rivals' text/image/video — with a measured grounding benchmark: OSWorld V2.1 78.4 partial (#3 of 5). Output is text-only (Forbes), and no MMMU/vision-understanding score was found.
- **Coding: 89/100.** **DeepSWE 1.1: 79.0 #1** and **SWE-Marathon: 57.5 #1** — beating Claude Opus 5.5 (74.2/46.3), GPT-6 Astra (74.1/42.5) and Fable 5.1 (67.4/45.6), which Meta states are independent third-party runs (mindstudio/kie.ai relay the same figures); JobBench 75.3 (#2 by 0.1); ProgramBench 59.0 #2 and TB4.0-AA 57.1 #3 behind Opus 5.5; BenchLM #12/229 (74.9, Estimated evidence). No SWE-bench Verified/Pro figure captured.
- **Cost efficiency: 65/100.** No API and no token price: flat **$50/mo** (Power) or $200/mo (Maximum) gets a frontier AA-#4 model with 20–80× usage caps — outstanding flat-rate value for committed power users (far below a day of flagship-API spend at comparable volume) — but zero accessibility for API-embedded or casual use, no cache pricing, no metering, subscription lock-in; kie.ai's "$4/$20" is a sibling conflation. Standard Muse Wonder ($4/$20, cached $0.20) covers API needs instead.
- **Overall Score: 86/100.** (88 + 89 + 85 + 77 + 89) / 5 = 428 / 5 = 85.6 → 86 — best fit: long-horizon agentic coding and personal/professional agent work inside Muse Code where its #1 DeepSWE/SWE-Marathon and Active Memory/Active Focus features are fully usable; not the pick for API-embedded products (no API exists) or benchmark-maxed math/program-synthesis work (ProgramBench behind Opus 5.5).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — official sources first (about.fb.com newsroom launch post 2026-10-12, research.meta.ai launch blog + model-card link, dev.meta.ai model page with the full 14-row benchmark table, model-id and Muse Code plan pricing), then independent sources (Artificial Analysis model page: Intelligence Index 56 #4/704, specs, no-API status; mindstudio.ai, kie.ai, llmlearner — three separate relays that cross-validate the table's Full/Opus-5.5 columns; BenchLM #12/229 74.9 Estimated; Forbes, colrows, datacamp, ailearningguides, gradually.ai, aiiq, springprompt, llm-stats compare, r/opencode). The kie.ai "$4/$20 for Full" claim conflicts with Meta's "-" pricing row and is reported as a sibling conflation. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings — when Meta ships the promised full safety/model-card report or an API tier for Full, update the pricing and evidence rows.
