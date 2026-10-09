# Union Alpha — findings by Mimo v2.6 Flash

- Source: Unbiased (Circuit & Chisel)/`stealth/union-alpha` → revealed `unbiased/pareto` (Pareto 26.9)
- Date: 2026-10-09 (UTC; original research 2026-09-22, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (stealth listing; identity resolved 2026-09-17 as **Pareto 26.9** by Unbiased)
- **Short description:** Blended/composite model from Unbiased (Circuit & Chisel) that routes each request across several frontier and open models and keeps the best answer — one model string, one bill. Appeared anonymously on OpenRouter 2026-09-16 as `stealth/union-alpha`, free for ~33 hours, then revealed and switched to paid as `unbiased/pareto`.
- **Provider / access:** OpenCode Zen `opencode/union-alpha` (Chat Completions); OpenRouter `stealth/union-alpha` (retired endpoints) → `unbiased/pareto`; Unbiased API `pareto`; Cloudflare AI. Second-pass note (2026-10-09): OpenRouter lists a single live provider for `unbiased/pareto` with 3-day uptime 97.64% / availability 96.69%, P550 latency 1.50s, and real production traffic (top apps: omp, Hermes Agent, pi, Claude Code, Cursor — 1.65B tokens). Unbiased also ships **Pareto 26.10 Preview** (1.0M context, $0.80/$3.20) as the next version — a separate dataset entry; `pareto-26.9` remains the stable ID.
- **Release / knowledge:** 2026-09-16 (stealth listing 14:42 UTC); reveal 2026-09-17 23:24 UTC; knowledge cutoff undisclosed.
- **IDs:** `opencode/union-alpha` / `stealth/union-alpha` (historical); current paid ID `unbiased/pareto`.
- **Context window:** 262,144 input; 131,072 max output (OpenRouter catalog).
- **Modalities:** text/image in; text out; tool calling (`tools`, `tool_choice`); structured JSON via `response_format` (no schema enforcement); no exposed reasoning control.
- **Pricing (as of 2026-10-09):** Free preview ended after 33 hours (missed the announced one-week window). Still **$2.50 in / $7.50 out per 1M**, cached input $0.25 — re-confirmed on the OpenRouter page 2026-10-09; ~25% of Fable 5 input rate per Unbiased. Official cost-per-task figures (Unbiased, 2026-10-01 runs — on the 26.10 Preview): $0.24 DeepSWE, $0.48 TB4.0, $0.008 HLE, $0.004 GPQA; Pareto 26.9's own measured DeepSWE cost $0.29/task.
- **Architecture:** proprietary blend (no params/weights exposed); tokenizer listed as Other; composite routing layer over frontier + open models.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.
> All five vendor card scores are Unbiased-reported; no independent reproduction as of 2026-09-22.

Agent / tool use:

- DeepSWE: **74** (Unbiased Pareto 26.9 model card; ties GPT-6 Astra and DeepSeek 4.1 Flash, beats Claude Fable 5.1 67 — vendor-run, not independently reproduced). **Conflict (2026-10-09):** Unbiased's current site transcribes Pareto 26.9 at **70.0%** ($0.29/task) on a **30-task slice** of DeepSWE v1.1 (Sep 20 run, "not independently validated") — treat the vendor range as 70–74; the 74 tie-with-Astra claim is softened.
- Terminal-Bench 4.0: **51** (Unbiased card; trails Astra 58, Fable 5.1 56; beats DeepSeek 4.1 Flash 31)
- OpenCode coding snapshot: **23.14/40** across four projects, ~$0.03 avg cost/prompt (BuildFastWithAI, 2026-09-16 — community/third-party, limited methodology)
- Tau3 / Toolathlon / MCP-Atlas / OSWorld / GDPval-AA: no verified public score found

Reasoning / knowledge:

- HLE (no tools): **49** (Unbiased card; trails Fable 5.1 55, Astra 54). Second-pass caveat (2026-10-09): Unbiased's own methodology note says Pareto 26.9's HLE result "was reported as Humanity's Last Exam, **without a text-only qualifier**" — harness ambiguity acknowledged by the vendor.
- ArXivMath: **88** (Unbiased card; beats Fable 5.1 72, trails Astra 91)
- GPQA Diamond / AA Intelligence Index / ARC-AGI-2: no verified public score found
- Note: launch-day OpenRouter chart implied ~73% DeepSWE near-zero cost; scientific reasoning hand-test was never completed due to free-tier throttling (MindStudio)

Coding:

- DeepSWE: **74** (Unbiased card — headline result, three-way tie at top)
- Terminal-Bench 4.0: **51** (Unbiased card)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found on the card (OpenRouter launch claim of beating GPT-5.6 Sol on TB 2.1 + SWE-Verified was **not** on the model card — unscored)

Long context:

- 262K window; MRCR / RULER / GraphWalks: no verified public score found

Multimodal:

- MMMU-Pro: **78** (Unbiased card; trails Fable 5.1 81, Astra 87)
- CharXiv / Video-MMMU / OCRBench: no verified public score found

### Normalized scores (1–100)

- **Tool use: 78/100.** DeepSWE 74 ties frontier coding agents and TB4.0 51 is mid-high, but scores are vendor-run only and no Tau/MCP/OSWorld/GDPval rows exist — tool-use breadth unproven outside coding.
- **Reasoning: 80/100.** HLE no-tools 49 and ArXivMath 88 are solid mid-frontier reasoning/math signals; capped by no GPQA/AA-Index and by all numbers being single-source vendor claims.
- **Context window: 68/100.** True 262,144 / 131,072 window is production-shaped (vs 1M stealth peers) but mid-tier absolute size; no long-context retrieval quality published.
- **Multimodal: 82/100.** Text+image in with MMMU-Pro 78 is real multimodal capability; no audio/video, and 78 trails frontier vision models (81–87 on the same card).
- **Coding: 82/100.** DeepSWE 74 (tie with Astra/DeepSeek 4.1 Flash) is the strongest evidence — updated 2026-10-09 to a vendor range of **70–74** (site re-transcription on a 30-task slice); still ~Fable 5 (70.0) parity at ~2% of its per-task cost. TB4.0 51 and missing SWE-Verified/LiveCodeBench keep it below fully-charted frontier coding stacks; blend architecture means the effective model can shift without notice — held at 82 (the 70.0 low end remains within the original band's evidence).
- **Cost efficiency: 78/100.** $2.50/$7.50 with $0.25 cache and modeled agentic task ~$2.03 vs $9.70 Astra is excellent frontier-adjacent value; not free (preview ended), and true cost-per-task is unpublished for a multi-model-per-request design.
- **Overall Score: 78/100.** Mean of five quality dims (78+80+68+82+82)/5 = 78.0. Best-fit: cost-sensitive agentic coding where DeepSWE-class resolution matters more than published Tau/MCP breadth — pin the model ID, keep a switch, and re-benchmark after Unbiased's Oct 10 formal launch.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-09 (original: 2026-09-22; user-approved second pass)
- Method: public internet research (OpenRouter listing/compare, Capital & Compute reveal deep-dive, CellCog, Siora Labs, BuildFastWithAI, MindStudio, Enera, Unbiased model card via those write-ups); second pass 2026-10-09 re-checked the [OpenRouter `unbiased/pareto` page](https://openrouter.ai/models/unbiased/pareto) (pricing, uptime, traffic) and [unbiased.ai](https://www.unbiased.ai/) (published-scores table, methodology notes, cost-per-task) — AA has no page for Pareto; no independent reproduction of vendor numbers found; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Confirmed:** $2.50/$7.50 + $0.25 cache, 262K/131K window, text+image in, blend architecture ("runs several models… keeps the best answer", cache-preserving, not a router) — all re-verified on OpenRouter + unbiased.ai.
- **Conflict:** DeepSWE card **74** vs site **70.0%** (30-task slice, Sep 20, "not independently validated") → vendor range 70–74 recorded; Coding held at 82.
- **New:** operational health (97.64% uptime / 96.69% availability over 3d, 1.50s P50); real production traffic (omp, Hermes Agent, Claude Code, Cursor); measured costs ($0.29/task DeepSWE for 26.9); HLE qualifier caveat; sibling **Pareto 26.10 Preview** (1M ctx, $0.80/$3.20; GPQA-D 92.4, HLE 49.9, TB4.0 50.8, DeepSWE 69.9 — separate dataset entry).
- **Still missing for 26.9:** independent (non-vendor) benchmark reproduction; GPQA/AA-Index/SWE-Verified/LCB rows; the announced Oct-10 formal launch event had no public artifact as of this pass.
- **Scores:** no dimension changed; Overall held at 78.
