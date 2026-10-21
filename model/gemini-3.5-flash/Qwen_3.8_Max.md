# Gemini 3.5 Flash — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemini-3.5-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google DeepMind's mid-2026 Flash-tier reasoning model, shipped at Google I/O and positioned as "Pro-level reasoning at Flash-class latency." Built on the Gemini 3 Flash foundation with explicit thinking levels (the **"high"** config carries the published numbers). Its defining trait is the intelligence-vs-speed Pareto lead: it tops Google's agentic (MCP Atlas) and multimodal (CharXiv, MMMU-Pro) rows while running ~278 tok/s — but it trails the Pro tier and frontier on academic reasoning (HLE, ARC-AGI-2) and burns tokens to get there.
- **Provider / access:** Gemini API, Google AI Studio, Gemini app (free), Gemini Enterprise + Agent Platform, Google Search AI Mode, Google Antigravity, Android Studio. Public preview at launch.
- **Release / knowledge:** Released 2026-05-19; knowledge cutoff **January 2025** (notably stale for a mid-2026 model — it leans on in-context docs/Skills more than frontier peers).
- **IDs:** `google/gemini-3.5-flash` (batch variant `gemini-3.5-flash:batch`; a "Minimal" variant exists on Google AI Studio).
- **Context window:** 1,000,000 tokens input; 64,000-token output cap.
- **Modalities:** text + image + audio + video + PDF in → text out (broadest input set in the Gemini 3 line); reasoning yes (explicit thinking levels: low…high…); tool calls yes (first-party function calling, structured output, code execution, search-as-a-tool).
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

> Provenance: benchmark figures are from **Google's published model card** (vendor-run, "high" thinking config), compiled by Appwrite; the Artificial Analysis Intelligence Index (55.3, #7/147), speed (278 tok/s), verbosity (73M tokens vs a 36M leaderboard average), eval cost ($1,552 — 5.5x Gemini 3 Flash, 75% more than Gemini 3.1 Pro despite the lower per-token rate) and hallucination rate (61%) are **independent** AA measurements, and Appwrite Arena is an independent open-source SDK benchmark. Google's own claim ("Pro-level reasoning at Flash-class latency") holds on latency but not on the Intelligence Index, where 3.5 Flash uses ~22% more tokens than Gemini 3.1 Pro to reach a ~1.9-point-lower score — speed is the only axis on which it clearly leads the Pro tier.

### Normalized scores (1–100)

- **Tool use: 90/100.** Google's highest-ever MCP Atlas (83.6%) leads every model in its table, Finance Agent v2 (57.9%) and Toolathlon (56.5%) top the field, and OSWorld-Verified (78.4%) is at the frontier — the strongest agentic-tool profile of the Gemini 3 line; capped only by a middling GDPval-AA Elo (1656) and because these are vendor-run.
- **Reasoning: 82/100.** A respectable independent AA Intelligence Index of 55.3 (#7 of 147) and a huge ARC-AGI-2 jump over Gemini 3 Flash, but it genuinely trails the frontier on hard academic reasoning — HLE 40.2% and ARC-AGI-2 72.1% are below Opus 4.7, GPT-5.5 and even Gemini 3.1 Pro — so it is not a Pro-tier reasoner despite the marketing.
- **Context window: 85/100.** A full 1M-token input window (64K output), but retrieval is middling: MRCR v2 128k at 77.3% trails the Pro tier and GPT-5.5, and the 1M pointwise score (26.6%) is weak in absolute terms; discounted accordingly.
- **Multimodal: 89/100.** The broadest input set (text/image/audio/video/PDF) and it **leads** its table on both CharXiv (84.2%) and MMMU-Pro (83.6%) with a strong Blueprint-Bench 2 (33.6%) — a genuine multimodal leader at Flash price; held below the low-90s because the wins are vendor-run and output is text-only.
- **Coding: 83/100.** Terminal-Bench 2.1 (76.2%) beats the Pro tier and Opus 4.7 and it is the fastest top-tier Appwrite Arena coder (96.20 with Skills), but SWE-Bench Pro (55.1%) trails Opus 4.7 and GPT-5.5 — strong throughput-oriented coding, behind on the hardest repository engineering.
- **Cost efficiency: 78/100.** Cheap per token ($1.50/$9.00, cached $0.15, batch $0.75/$4.50) and the intelligence-vs-speed Pareto leader at 278 tok/s, but heavy verbosity (73M tokens vs a 36M average) makes the real eval cost $1,552 — 5.5x Gemini 3 Flash and 75% more than Gemini 3.1 Pro — so the sticker price overstates the savings on reasoning-heavy work.
- **Overall Score: 86/100.** Mean of Tool 90 + Reasoning 82 + Context 85 + Multimodal 89 + Coding 83 = 85.8 → 86. Best fit: throughput-bound MCP-driven agents, multimodal pipelines (charts/audio/video/PDF ingestion) and iterative bounded-scope coding where 278 tok/s at Flash price wins; research-grade reasoning and the hardest SWE work still favor the Pro tier / GPT-5.5 / Opus 4.7, and the January-2025 knowledge cutoff means current-API tasks need in-context docs.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21
- Method: public internet research (Google DeepMind's published model-card benchmark table and the independent Artificial Analysis Intelligence Index / speed / verbosity / cost / hallucination figures and Appwrite Arena SDK benchmark, all via Appwrite's deep-dive; cross-checked against nxcode and Respan pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
