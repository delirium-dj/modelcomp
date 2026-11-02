# Gemini 3.5 Flash — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemini-3.5-flash`; AA id `gemini-3-5-flash` "(high)")
- Date: 2026-10-21 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the April draft leaned on a **v4.x-vintage AA Intelligence Index (55.3, "#7 of 147")** that AA has since rebased — the **current v5.0 read is 50.2**, and AA now marks the model **deprecated** (superseded by Gemini 3.7 Flash), with its composite otherwise N/A. 50.2 is still high-mid (the vintage drop is a basket rebase, not a regression), so the headline reasoning claim survives, but two of the draft's framing pillars move. **(1) Speed:** the defining "Pareto lead at ~278 tok/s" is re-measured by AA at **193.4 tok/s (#16/195)** — still fast, materially less than marketed; speed is unscored. **(2) Tool (90 → 88):** the vendor "highest-ever MCP Atlas 83.6 / leads every model" is partly confirmed by independent **τ²-bench 95.3 (AA)** and **Finance Agent v2 57.9 (Vals, matches)**, but AA's **Agentic Index is only 27.3** (weak), so the top-of-table agentic framing is tempered. **(3) Multimodal (89 → 90):** this is the one lift — **AA's spec independently confirms text+image+speech+video input** and **AA-MMMU-Pro 84.3 corroborates the vendor visual lead**, with **LlamaIndex ExtractBench 79.84 / ParseBench 73.36** as neutral document scores, so the draft's "wins are vendor-run" cap is relieved. The rest holds on independent confirmation: **ARC-AGI-1 92.50 (ARC Prize, verified)** and **Vals GPQA-Diamond 92.7 / MMLU-Pro 89.5** support **Reasoning 82**, while a **60.7% Omniscience hallucination** and **CritPt 13.1** confirm it trails the frontier on hard reasoning; **Context 85** stands (AA-LCR 69.3 corroborates mid long-context); **Coding 83** holds (strong **Vals LiveCodeBench 87.6** offset by **CursorBench ~49** and a still-trailing SWE-bench Pro). **Overall holds 86.**

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google DeepMind's mid-2026 Flash-tier reasoning model, shipped at Google I/O and positioned as "Pro-level reasoning at Flash-class latency." Built on the Gemini 3 Flash foundation with explicit thinking levels (the **"high"** config carries the published numbers). Its defining trait is the intelligence-vs-speed Pareto lead: it tops Google's agentic (MCP Atlas) and multimodal (CharXiv, MMMU-Pro) rows while running ~193 tok/s (AA v5.0, #16/195; the drafted 278 was a launch figure) — but it trails the Pro tier and frontier on academic reasoning (HLE, ARC-AGI-2) and burns tokens to get there.
- **Provider / access:** Gemini API, Google AI Studio, Gemini app (free), Gemini Enterprise + Agent Platform, Google Search AI Mode, Google Antigravity, Android Studio. Public preview at launch.
- **Release / knowledge:** Released 2026-05-19; knowledge cutoff **January 2025** (notably stale for a mid-2026 model — it leans on in-context docs/Skills more than frontier peers).
- **IDs:** `google/gemini-3.5-flash` (batch variant `gemini-3.5-flash:batch`; a "Minimal" variant exists on Google AI Studio; **AA marks it deprecated, superseded by Gemini 3.7 Flash**).
- **Context window:** 1,000,000 tokens input; 64,000-token output cap.
- **Modalities:** text + image + audio + video + PDF in → text out (broadest input set in the Gemini 3 line; **AA spec confirms text+image+speech+video input, 2026-11-02**); reasoning yes (explicit thinking levels: low…high…); tool calls yes (first-party function calling, structured output, code execution, search-as-a-tool).
- **Pricing (as of 2026-10-21):** $1.50 input / $9.00 output per 1M tokens; cached input $0.15 (90% discount); batch $0.75 / $4.50. 25% cheaper per token than Gemini 3.1 Pro but 3x Gemini 3 Flash — the most expensive Flash-tier Google model. Free in the consumer Gemini app and Search AI Mode.
- **Architecture:** Undisclosed; Gemini 3 Flash reasoning foundation with configurable thinking levels.

### Raw benchmarks found

Agent / tool use (Google model card, "high" thinking, vendor-run):

- MCP Atlas (multi-step MCP workflows): **83.6%** — **the highest Google has published**, leading Gemini 3.1 Pro (78.2%), Claude Opus 4.7 (79.1%), GPT-5.5 (75.3%); +21.6 over Gemini 3 Flash
- Toolathlon (real-world tool use): **56.5%** — ahead of GPT-5.5 (55.6%)
- OSWorld-Verified (UI control): **78.4%** — near the top (GPT-5.5 78.7%, Opus 4.7 78.0%, Gemini 3.1 Pro 76.2%)
- Finance Agent v2: **57.9%** — leads the whole table (GPT-5.5 51.8%, Opus 4.7 51.5%, Gemini 3.1 Pro 43.0%)
- GDPval-AA (Elo): **1656** — below GPT-5.5 (1769), Opus 4.7 (1753), Claude Sonnet 4.6 (1676)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index (independent): 55.3** — rank **#7 of 147** (below GPT-5.5 xhigh 60.2 / high 58.9, Opus 4.7 max 57.3, Gemini 3.1 Pro Preview 57.2); second-best Gemini
- Humanity's Last Exam (full set): **40.2%** — trails Opus 4.7 (46.9%), Gemini 3.1 Pro (44.4%), GPT-5.5 (41.4%)
- ARC-AGI-2: **72.1%** — well behind GPT-5.5 (84.6%), Gemini 3.1 Pro (77.1%), Opus 4.7 (75.8%); a huge +38.5 over Gemini 3 Flash (33.6%)
- AA hallucination rate: **61%** — 31 points lower than Gemini 3 Flash (material factual-reliability gain)

Coding:

- Terminal-Bench 2.1 (Terminus-2 harness): **76.2%** — beats Gemini 3.1 Pro (70.3%) and Opus 4.7 (66.1%); below GPT-5.5 (78.2%)
- SWE-Bench Pro (public, single attempt): **55.1%** — trails Opus 4.7 (64.3%) and GPT-5.5 (58.6%), roughly level with Gemini 3.1 Pro (54.2%)
- Appwrite Arena (SDK/API driving, independent, 2026-05-20): **96.20** with Skills / **90.70** without — the **fastest** top-tier model (20m / 13m); GPT-5.5 (97.70) and Opus 4.7 (97.10) edge it on correctness

Multimodal:

- CharXiv Reasoning (no tools): **84.2%** — leads the table (GPT-5.5 84.1%, Gemini 3.1 Pro 83.3%, Opus 4.7 82.1%)
- MMMU-Pro (no tools): **83.6%** — leads (Gemini 3 Flash 81.2%, GPT-5.5 81.2%, Gemini 3.1 Pro 80.5%, Opus 4.7 75.2%)
- Blueprint-Bench 2 (normalized): **33.6%** — second only to GPT-5.5 (36.2%); accepts text/image/audio/video/PDF

Long context:

- MRCR v2 (8-needle, 128k avg): **77.3%** — beats Opus 4.7 (59.3%) but trails Gemini 3.1 Pro & Sonnet 4.6 (84.9%) and GPT-5.5 (94.8%)
- MRCR v2 (1M, pointwise): **26.6%** — weak in absolute terms, though it leads Gemini 3 Flash (22.1%) and Gemini 3.1 Pro (26.3%)

Independent (added 2026-11-02 — AA page now deprecated, composite Index/Speed/Cost/Verbosity N/A except the default 10k workload and per-eval cells; BenchLM, Vals, ARC Prize, Epoch, LlamaIndex, Cursor cross-checks):

- **AA Intelligence Index v5.0 (independent, current read): 50.2** — the draft's 55.3 was a **v4.x-vintage** figure AA has since rebased; not convertible across vintages, so 50.2 governs and the drop is a basket rebase, not a capability regression.
- **AA Speed: 193.4 tok/s (#16/195)** — replaces the drafted launch figure of ~278 (unscored axis, but the "Pareto lead" framing moves).
- **AA spec (authoritative modality): text + image + speech + video in → text out, 1M context** — independently confirms the omni-input claim that the draft had only on vendor authority.
- **BenchLM overall: 61.4/100 (#49/1004, 55 of 724 benchmarks covered — partial/conservative).**
- Agentic: **AA Agentic Index 27.3 (weak)**; **AA ITBench 40.3**; **AA-AnalystAgent 45.0**; **τ²-bench 95.3 (AA)** and **Finance Agent v2 57.9 (Vals, matches vendor)** confirm the tool ceiling; **GDPval-AA 1345 (vendor)** / 42.2% (AA-normalized); **MazeBench 0%**.
- Reasoning/knowledge: **ARC-AGI-1 92.50 (ARC Prize, verified)**; **Vals GPQA-Diamond 92.7**; **MMLU-Pro (Vals) 89.5**; **AA GPQA 92.2**; **AA-HLE 42.7**; **CritPt 13.1**; **Epoch FrontierMath v2 T1-3 62.8 / T4 26.8**; **AA-Omniscience accuracy 51.9 / hallucination 60.7**.
- Coding: **Vals LiveCodeBench 87.6**; **AA Coding Index 70.1**; **Vals SWE-bench 78.8**; **CursorBench 3.1 49.8 / 3.2 48.8**; **Vibe Code 48.68**; **AA-SciCode 53.9**.
- Multimodal/docs: **AA-MMMU-Pro 84.3** (corroborates the vendor visual lead); **LlamaIndex ExtractBench 79.84 / ParseBench 73.36** (neutral document scores).
- Long context: **AA-LCR 69.3** (mid long-context, corroborates Context 85).

> Provenance: benchmark figures are from **Google's published model card** (vendor-run, "high" thinking config), compiled by Appwrite; the Artificial Analysis Intelligence Index (55.3, #7/147), speed (278 tok/s), verbosity (73M tokens vs a 36M leaderboard average), eval cost ($1,552 — 5.5x Gemini 3 Flash, 75% more than Gemini 3.1 Pro despite the lower per-token rate) and hallucination rate (61%) are **independent** AA measurements, and Appwrite Arena is an independent open-source SDK benchmark. Google's own claim ("Pro-level reasoning at Flash-class latency") holds on latency but not on the Intelligence Index, where 3.5 Flash uses ~22% more tokens than Gemini 3.1 Pro to reach a ~1.9-point-lower score — speed is the only axis on which it clearly leads the Pro tier. **2026-11-02 reconciliation:** the launch AA figures above (Index 55.3, Speed 278) are **vintage/history**; the current v5.0 reads (Index 50.2, Speed 193.4) and the per-eval cells in the Independent block govern, and AA now flags the model **deprecated (superseded by Gemini 3.7 Flash)**.

### Normalized scores (1–100)

- **Tool use: 88/100.** (was 90, trimmed 2026-11-02) Google's highest-ever MCP Atlas (83.6%) leads its table and OSWorld-Verified (78.4%) is at the frontier, and the tool ceiling is independently confirmed by **τ²-bench 95.3 (AA)** and **Finance Agent v2 57.9 (Vals, matches)**; tempered because **AA's Agentic Index is only 27.3** (ITBench 40.3, AnalystAgent 45.0) and the top-of-table agentic framing is largely vendor-run.
- **Reasoning: 82/100.** (hold) The independent current read is **AA v5.0 Intelligence Index 50.2** (the draft's 55.3 was a v4.x-vintage rebase — not a regression), with **ARC-AGI-1 92.50 (ARC Prize)** and **Vals GPQA-Diamond 92.7 / MMLU-Pro 89.5** supporting a high-mid reasoner, but it genuinely trails the frontier on hard academic reasoning — **CritPt 13.1**, a **60.7% Omniscience hallucination**, and HLE 40.2% keep it below a Pro-tier reasoner despite the marketing.
- **Context window: 85/100.** (hold) A full 1M-token input window (64K output), but retrieval is middling: MRCR v2 128k at 77.3% trails the Pro tier and GPT-5.5, the 1M pointwise score (26.6%) is weak, and **AA-LCR 69.3** corroborates mid long-context; discounted accordingly.
- **Multimodal: 90/100.** (was 89, lifted 2026-11-02 — provenance, not a capability change) The broadest input set is now **independently confirmed by AA's spec (text+image+speech+video in)**, and **AA-MMMU-Pro 84.3** corroborates the vendor visual lead (CharXiv 84.2%, MMMU-Pro 83.6%), with neutral **LlamaIndex ExtractBench 79.84 / ParseBench 73.36** as document-IO checks; relief of the draft's "wins are vendor-run" cap lifts it into the low 90s (output still text-only).
- **Coding: 83/100.** (hold) Strong independent **Vals LiveCodeBench 87.6** and **AA Coding Index 70.1** confirm throughput-oriented coding, but **CursorBench 3.1 49.8 / 3.2 48.8** and a still-trailing SWE-Bench Pro (55.1%) mark it behind on the hardest repository engineering.
- **Cost efficiency: 78/100.** (hold) Cheap per token ($1.50/$9.00, cached $0.15, batch $0.75/$4.50) and the intelligence-vs-speed Pareto leader (speed now measured at 193.4 tok/s), but heavy verbosity (73M tokens vs a 36M average) makes the real eval cost $1,552 — 5.5x Gemini 3 Flash and 75% more than Gemini 3.1 Pro — so the sticker price overstates the savings on reasoning-heavy work.
- **Overall Score: 86/100.** (hold) Mean of Tool 88 + Reasoning 82 + Context 85 + Multimodal 90 + Coding 83 = 85.6 → 86. Best fit: throughput-bound MCP-driven agents, multimodal pipelines (charts/audio/video/PDF ingestion — now AA-spec-confirmed) and iterative bounded-scope coding where ~193 tok/s at Flash price wins; research-grade reasoning and the hardest SWE work still favor the Pro tier / GPT-5.5 / Opus 4.7, and the January-2025 knowledge cutoff means current-API tasks need in-context docs. (AA marks the model deprecated — consider Gemini 3.7 Flash for new builds.)

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21; re-researched 2026-11-02.
- Method (2026-11-02 refresh): original draft's Google model-card table and launch AA figures preserved; independent sources added from **Artificial Analysis** (deprecated `gemini-3-5-flash` page: v5.0 Index **50.2**, Speed **193.4** #16/195, spec text+image+speech+video, per-eval AA Agentic 27.3 / ITBench 40.3 / τ²-bench 95.3 / AA-MMMU-Pro 84.3 / AA-LCR 69.3 / Omniscience 51.9 acc / 60.7 halluc / CritPt 13.1) and **BenchLM** (`gemini-3-5-flash` 61.4 #49/1004, 55/724), surfacing **ARC Prize** (ARC-AGI-1 92.50 verified), **Vals** (GPQA-D 92.7, MMLU-Pro 89.5, LCB 87.6, SWE-bench 78.8, Finance Agent 57.9, TB2.1 74.2, Vibe Code 48.68), **Epoch** (FrontierMath v2 T1-3 62.8 / T4 26.8), **LlamaIndex** (ExtractBench 79.84 / ParseBench 73.36) and **Cursor** (CursorBench 3.1 49.8 / 3.2 48.8) cells.
- Conflict handling: vendor-vs-independent recorded, never averaged, independent governs — **Tool 90→88** (AA Agentic 27.3 tempers the vendor "leads every model" agentic framing, though τ²-bench 95.3 + Vals Finance Agent 57.9 confirm the ceiling); **Multimodal 89→90** (provenance lift — AA spec independently confirms speech+video and AA-MMMU-Pro 84.3 corroborates the vendor visual lead); **Overall holds 86**.
- Guards: the draft's **v4.x Index 55.3 is superseded by v5.0 50.2** (basket rebase, not a regression — vintages not convertible); **Speed 278→193.4** (unscored axis, launch figure replaced); the model is **AA-deprecated** (superseded by Gemini 3.7 Flash) so its AA verbosity/cost-per-task composite is historical and read only for the default 10k workload + per-eval cells; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
