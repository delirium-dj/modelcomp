# Gemini 3.5 Flash — findings by Qwen 4 Max

- Source: Google/gemini-3.5-flash
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's May 19, 2026 I/O release — "frontier intelligence with action": the default model in the Gemini app and AI Mode in Search, the engine behind the Gemini Spark personal agent and the Antigravity agent-first development platform. Vendor claims ~4x faster output tokens/s than other frontier models (AA measures 168 tok/s, TTFT 12.74s — fast). Now **deprecated**: superseded by Gemini 3.6 Flash (Jul 21, "direct replacement… reduced token usage and lower output pricing" per AI Studio docs) and Gemini 3.7 Flash (Aug 13, AA's suggested successor).
- **Provider / access:** Gemini API / Google AI Studio / Vertex AI (Gemini Enterprise Agent Platform), OpenRouter (`google/gemini-3.5-flash`); proprietary, weights not available, parameter count undisclosed. AA tracks the **High** reasoning variant.
- **Release / knowledge:** Released 2026-05-19 (Google I/O; AA confirms May 19, 2026). Knowledge cutoff **January 2025** (OpenRouter listing). Reasoning model with extended thinking; launched under a strengthened Frontier Safety Framework (cyber/CBRN safeguards).
- **IDs:** `gemini-3.5-flash`; AA page slug `gemini-3-5-flash` (High); predecessor Gemini 3 Flash (Dec 2025); successors Gemini 3.6 Flash, Gemini 3.7 Flash; sibling Gemini 3.5 Flash-Lite (Jul 21) and a cybersecurity variant (separate SKU, out of production scope).
- **Context window:** **1,048,576 tokens** (OpenRouter) / 1M (AA). Long-context retrieval is the weak spot: vendor MRCR 1M **26.6** (vs MRCRv2 77.3), AA-LCR 69.3. No >200K surcharge tier documented in sources read (flat $1.50/$9 on the rate cards).
- **Modalities:** **Text, image, speech (audio), and video in; text out** — confirmed by AA's technical specs and FAQ (not merely family-inherited). CharXiv Reasoning 84.2, MMMU-Pro 83.6 (vendor) / 84.3 (AA), ExtractBench 79.84, ParseBench 73.22.
- **Pricing (as of 2026-11-12):** **$1.50 in / $9.00 out per 1M** (AA + OpenRouter), **90% cache discount**, blended $1.31/1M (7:2:1 ratio, AA). AA cost-per-Intelligence-Index-task: **N/A** (deprecated; index no longer computed). Free tier in the Gemini app at launch.
- **Architecture:** Proprietary, undisclosed size; reasoning ("thinking") model — AA page shows the High-effort variant; built for high-throughput agentic workloads (speed-first Flash line).

### Raw benchmarks found

Vendor-reported (blog.google launch post + Google DeepMind launch screenshots via BenchLM attribution):

- Agent/tool: Terminal-Bench 2.1 **76.2**, MCP Atlas **83.6**, Toolathlon **56.5**, OSWorld-Verified **78.4**, GDPval-AA **1,656 Elo** (launch blog) — but BenchLM's Google-reported GDPval-AA row says **1,345** (conflict, both labelled below)
- Coding: SWE-bench Pro **55.1**
- Reasoning/knowledge: HLE **40.2**, ARC-AGI-2 **72.1**, MRCRv2 **77.3**, MRCR 1M **26.6**
- Vision: CharXiv Reasoning **84.2**, MMMU-Pro **83.6**, Blueprint-Bench 2 **33.6**

Independent runs:

- Artificial Analysis: Intelligence Index **50.2** (historical figure carried by BenchLM, version unstated; the live AA page now shows **N/A** — deprecated, benchmarked every 18h instead of 6h); AA-HLE **42.7**, GPQA-D **92.2**, AA-Omniscience Index **21.2** (accuracy 51.9, hallucination rate 60.7), AA-LCR **69.3**, CritPt **13.1**, τ²-bench **95.3**, GDPval-AA normalized **42.2%**, AA Coding Index **70.1**, AA Agentic Index **27.3**, SciCode 53.1/53.9, IFBench **76.3**, EnterpriseOps-Gym 50.1, ITBench 40.3, AnalystAgent 45.0, APEX-Agents 47.1; performance: **168 tok/s**, TTFT 12.74s
- ARC Prize: ARC-AGI-1 **92.5** (High, verified)
- Epoch AI: FrontierMath v2 T1-3 **62.807**, Tier 4 **26.829**
- Vals AI: SWE-bench **78.8**, TB2.1 **74.2** (vs vendor 76.2 — close), LiveCodeBench **87.6**, GPQA-D **92.7**, MMLU-Pro **89.5**, Finance Agent v2 57.9, Vibe Code Bench 48.68
- Other: CursorBench 3.1 49.8 / 3.2 48.8, ExtractBench 79.84 / ParseBench 73.22 (LlamaIndex), Design Arena Website 1,265, Gert Labs 61.85, ResearchClawBench 18.0, MazeBench 0; BenchLM aggregate **61.48/100, #49 of 1026** (61/815 coverage, conservative per BenchLM)

### Normalized scores (1–100)

- **Tool use: 85/100.** MCP Atlas 83.6, OSWorld-V 78.4, τ² 95.3, GDPval-AA 1,656 (blog; AA normalized 42.2%) and TB2.1 76.2/74.2 — genuinely frontier-adjacent agentic performance for a Flash-tier model; capped by Toolathlon 56.5, AA Agentic Index 27.3, ITBench 40.3, MazeBench 0, and the unresolved GDPval Elo conflict (1,656 vs 1,345).
- **Reasoning: 85/100.** GPQA-D 92.2 (AA) / 92.7 (Vals), MMLU-Pro 89.5, ARC-AGI-1 92.5 verified, ARC-2 72.1, HLE 40.2 vendor / 42.7 AA; capped by FrontierMath v2 T4 26.8 (hard math well below Pro-tier), CritPt 13.1, and Omniscience hallucination rate 60.7 (index 21.2).
- **Context window: 78/100.** Full 1M window with flat pricing and 90% cache discount, but vendor MRCR 1M **26.6** — the same deep-retrieval collapse seen on Gemini 3 Pro (26.3), so the window is real for capacity, weak for needle-in-haystack at depth; MRCRv2 77.3 and AA-LCR 69.3 support mid-range retrieval.
- **Multimodal: 85/100.** Text + image + audio + video in (AA-confirmed), strong chart/document grounding (CharXiv 84.2, MMMU-Pro 83.6/84.3 AA, ExtractBench 79.84, ParseBench 73.22); capped by Blueprint-Bench 2 33.6 and no native image/audio output.
- **Coding: 82/100.** SWE-bench Verified 78.8 (Vals), TB2.1 76.2, LCB 87.6, SWE-Pro 55.1, AA Coding 70.1, SciCode ~53 — solid mainstream agentic coding; capped by CursorBench ~49, Vibe Code 48.68, and no DeepSWE/FrontierSWE-class rows showing hardest-repo strength.
- **Cost efficiency: 80/100.** $1.50/$9 with 90% cache discount (blended $1.31) and 168 tok/s / 12.74s TTFT — excellent throughput-per-dollar while it was current; deducted for **deprecated status** (3.6 Flash is the cheaper direct replacement, 3.7 Flash the newer successor), AA index/cost-per-task now N/A, and $9 output being 2.4x the successor's intro rate.
- **Overall Score: 83.0/100.** Mean of the five quality dims (85+85+78+85+82)/5 = 83.0. Best-fit (historical): the May–July 2026 workhorse for high-volume multimodal agents, Search/AI Mode, and Spark-style personal automation; today prefer Gemini 3.6/3.7 Flash for new deployments — 3.5 Flash remains a capable, fast, fully multimodal fallback with weak 1M-depth retrieval and mid-tier hard math.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Google's official I/O launch blog fetched in full, Artificial Analysis' live model page with technical specs and deprecation banner, BenchLM's 61-row sourced profile, OpenRouter rate card and AI Studio successor notes via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: **GDPval-AA 1,656 Elo (launch blog) vs 1,345 (BenchLM's Google-reported row)** — same-vendor discrepancy, both cited, neither averaged; AA normalized GDPval-AA 42.2% is a different metric again. AA Intelligence Index **50.2** is a historical, version-unstated figure — the live AA page shows N/A (deprecated), so it is never compared with v5.0.1 indices. Successor chain labelled: AI Studio docs name 3.6 Flash the direct replacement; AA's banner suggests 3.7 Flash. TB2.1 76.2 (vendor) vs 74.2 (Vals) — harness gap, small. Identity: Gemini 3.5 Flash ≠ 3.5 Flash-Lite ≠ 3.6 Flash ≠ 3 Flash; MRCRv2 ≠ MRCR 1M; ARC-AGI-1 ≠ ARC-AGI-2; FrontierMath v2 tiers reported separately.
- Reference URLs:
  - [Gemini 3.5: frontier intelligence with action — Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
  - [Gemini 3.5 Flash (High) Intelligence, Performance & Price — Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-5-flash)
  - [Gemini 3.5 Flash benchmark profile — BenchLM](https://benchlm.ai/models/gemini-3-5-flash)
  - [Gemini 3.5 Flash — OpenRouter](https://openrouter.ai/google/gemini-3.5-flash)
  - [A new era for AI Search (Gemini 3.5 Flash in AI Mode) — Google blog](https://blog.google/products-and-platforms/products/search/search-io-2026/)
  - [ARC Prize leaderboard (ARC-AGI-1 verified)](https://arcprize.org/leaderboard)
  - [Epoch AI FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [Vals AI — Gemini 3.5 Flash independent runs](https://www.vals.ai/models/google_gemini-3.5-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.