# Union Alpha — findings by Ernie 5.5 Flash

- Source: Circuit & Chisel / Unbiased — Union Alpha (Pareto 26.9 composite) (`union-alpha`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (Pareto 26.9)
- **Short description:** A composite/routed "union" model by Circuit & Chisel (Unbiased) that blends GPT-6 Astra, DeepSeek and GLM into one API product — a router/composite, never a single checkpoint.
- **Provider / access:** OpenRouter (`unbiased/pareto-26.9`), plus ~3 routes. Identified as Pareto 26.9 (the successor Pareto 26.10 is the separate tracked model `pareto-26.10-preview`).
- **Release / knowledge:** 2026-10-13 (models.dev record for Pareto 26.9; BenchLM lists Sep 17, 2026 for the composite); knowledge cutoff inherited from its constituents.
- **IDs:** `union-alpha`, `unbiased/pareto-26.9`, `pareto-26.9`, `stealth/union-alpha`.
- **Context window:** 262,144 tokens; max output 131,072.
- **Modalities:** text and image in; text out; tool calls; reasoning off (models.dev lists `reasoning: false` — the routed members' thinking is not exposed as a single control).
- **Pricing (as of 2026-11-11):** $2.50 / $7.50 per 1M input/output; cache read $0.25.
- **Architecture:** composite router (GPT-6 Astra + DeepSeek + GLM), not a checkpoint — per the repo's alias-family record, never scaffold a folder for `pareto-26.9` or `unbiased-pareto`.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **51.00%**
- Toolathlon / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- HLE without tools: **49%** (composite-level)
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- DeepSWE: **74.0%** on BenchLM's profile — but the repo's alias-family record flags the circulated "DeepSWE ~74%" as **GPT-6 Astra's** number and records Pareto 26.9 at **70.0%**. Cite 70.0% for the composite unless the vendor republishes a dated row.
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 262K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 4.0 51.0% is the only verified agentic row and it is mid; with no OSWorld/Toolathlon publication the score is a single-row estimate.
- **Reasoning: 75/100.** HLE 49% without tools is decent for a composite; no GPQA/ARC/FrontierMath row was published.
- **Context window: 78/100.** 262,144 tokens with 131,072 max output.
- **Multimodal: 78/100.** Text and image in with MMMU-Pro 78% as the only verified multimodal row.
- **Coding: 80/100.** DeepSWE at 70.0% (composite figure per the repo record; BenchLM shows 74.0%, flagged as Astra's) is good, but it is the only coding row and it is inherited from a routed member.
- **Cost efficiency: 82/100.** $2.50/$7.50 per 1M for a blend of three frontier models is reasonable.
- **Overall Score: 77.0/100.** Best fit for teams that want one API key across several frontier models; as a composite it has no weights, no fixed behaviour and thin independent evidence — verify on your own tasks.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (BenchLM Pareto 26.9 profile, union-alpha.com identity page, stealthmodels.com evaluations, models.dev catalog, repo alias-family record); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Union Alpha is Pareto 26.9 — union-alpha.com](https://union-alpha.com)
  - [Pareto 26.9 benchmarks & sources — BenchLM](https://benchlm.ai/models/pareto-26-9)
  - [Pareto 26.9 (Union of GPT-6 Astra + DeepSeek + GLM) — stealthmodels](https://stealthmodels.com/benchmarks/models/union-alpha)
  - [Union Alpha / Pareto composite record — model-aliases.generated.md](../../model-aliases.generated.md)
- Future sources: add a new file next to this one, e.g. `Union_Alpha_v2.md`, using the same headings.