# Union Alpha — findings by Mimo v2.6 Flash

- Source: Unbiased (Circuit & Chisel)/`stealth/union-alpha` → revealed `unbiased/pareto` (Pareto 26.9)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (stealth listing; identity resolved 2026-09-17 as **Pareto 26.9** by Unbiased)
- **Short description:** Blended/composite model from Unbiased (Circuit & Chisel) that routes each request across several frontier and open models and keeps the best answer — one model string, one bill. Appeared anonymously on OpenRouter 2026-09-16 as `stealth/union-alpha`, free for ~33 hours, then revealed and switched to paid as `unbiased/pareto`.
- **Provider / access:** OpenCode Zen `opencode/union-alpha` (Chat Completions); OpenRouter `stealth/union-alpha` (retired endpoints) → `unbiased/pareto`; Unbiased API `pareto`; Cloudflare AI.
- **Release / knowledge:** 2026-09-16 (stealth listing 14:42 UTC); reveal 2026-09-17 23:24 UTC; knowledge cutoff undisclosed.
- **IDs:** `opencode/union-alpha` / `stealth/union-alpha` (historical); current paid ID `unbiased/pareto`.
- **Context window:** 262,144 input; 131,072 max output (OpenRouter catalog).
- **Modalities:** text/image in; text out; tool calling (`tools`, `tool_choice`); structured JSON via `response_format` (no schema enforcement); no exposed reasoning control.
- **Pricing (as of 2026-09-22):** Free preview ended after 33 hours (missed the announced one-week window). Now **$2.50 in / $7.50 out per 1M**, cached input $0.25 — ~25% of Fable 5 input rate per Unbiased. No measured cost-per-task published.
- **Architecture:** proprietary blend (no params/weights exposed); tokenizer listed as Other; composite routing layer over frontier + open models.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.
> All five vendor card scores are Unbiased-reported; no independent reproduction as of 2026-09-22.

Agent / tool use:

- DeepSWE: **74** (Unbiased Pareto 26.9 model card; ties GPT-6 Astra and DeepSeek 4.1 Flash, beats Claude Fable 5.1 67 — vendor-run, not independently reproduced)
- Terminal-Bench 4.0: **51** (Unbiased card; trails Astra 58, Fable 5.1 56; beats DeepSeek 4.1 Flash 31)
- OpenCode coding snapshot: **23.14/40** across four projects, ~$0.03 avg cost/prompt (BuildFastWithAI, 2026-09-16 — community/third-party, limited methodology)
- Tau3 / Toolathlon / MCP-Atlas / OSWorld / GDPval-AA: no verified public score found

Reasoning / knowledge:

- HLE (no tools): **49** (Unbiased card; trails Fable 5.1 55, Astra 54)
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
- **Coding: 82/100.** DeepSWE 74 (tie with Astra/DeepSeek 4.1 Flash) is the strongest evidence; TB4.0 51 and missing SWE-Verified/LiveCodeBench keep it below fully-charted frontier coding stacks; blend architecture means the effective model can shift without notice.
- **Cost efficiency: 78/100.** $2.50/$7.50 with $0.25 cache and modeled agentic task ~$2.03 vs $9.70 Astra is excellent frontier-adjacent value; not free (preview ended), and true cost-per-task is unpublished for a multi-model-per-request design.
- **Overall Score: 78/100.** Mean of five quality dims (78+80+68+82+82)/5 = 78.0. Best-fit: cost-sensitive agentic coding where DeepSWE-class resolution matters more than published Tau/MCP breadth — pin the model ID, keep a switch, and re-benchmark after Unbiased's Oct 10 formal launch.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (OpenRouter listing/compare, Capital & Compute reveal deep-dive, CellCog, Siora Labs, BuildFastWithAI, MindStudio, Enera, Unbiased model card via those write-ups); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
