# Solar Mini 4 — findings by Ernie 5.5 Flash

- Source: Upstage/Solar Mini 4 (`solar-mini-4`, API `solar-mini4`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's compact cost-efficiency model (released 2026-09-22) — a 35B MoE with 3B active parameters and a 524K context, built for agentic use where response speed and cost dominate; fluent Korean/English/Japanese.
- **Provider / access:** Upstage API (`upstage/solar-mini4-20260922`), OpenRouter (`upstage/solar-mini4`), LLM Stats-tracked providers; reasoning + tools + structured outputs.
- **Release / knowledge:** 2026-09-22 (catalogue 2026-09-23); knowledge cutoff 2026-02-01.
- **IDs:** `solar-mini-4` (dataset), `solar-mini4` (API), `upstage/solar-mini4` (OpenRouter).
- **Context window:** 524,288 tokens (512K; AA lists 1M — discrepancy noted); max output 131,072.
- **Modalities:** text in / text out; reasoning (thinking mode); tool calls; structured outputs.
- **Pricing (as of 2026-11-13):** $0.10 in / $0.40 out per 1M (cache read $0.01; Benchable lists $0.05/$0.20 on the Upstage endpoint).
- **Architecture:** proprietary MoE, 35B total / 3B active (rumoured params per Benchable).

### Raw benchmarks found

> Independent measured rows (Benchable private eval suite, 8 benchmarks; Artificial Analysis speed/latency). No vendor benchmark table published.

Agent / tool use:

- Terminal-Bench / Tau2 / Claw-Eval / Toolathon: no verified public score found
- Benchable overall reliability: **99% success rate** (minimal technical failures)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **N/A** (not covered on v5.0.1)
- Benchable Reasoning: **68% accuracy** (39th pct); General Knowledge **93%** (29th pct); Instruction Following **53%** (41st pct); Hallucinations **64%** (13th pct)

Coding:

- Benchable Coding: **77% accuracy** (29th pct); LM Market Cap coding composite: **40/100** (rank #229)

Math / domain:

- Benchable Mathematics: **79% accuracy** (28th pct); Ethics **99%** (57th pct); Email Classification **96%** (31st pct)

Performance:

- Output speed **70 tok/s**; time to first answer token **102.62s** (AA — high latency); 96th percentile speed across 8 benchmarks (Benchable)

Long context:

- 524K declared (AA says 1M); no MRCR / RULER / GraphWalks row published.

### Normalized scores (1–100)

- **Tool use: 40/100.** No agentic benchmark row (TB2.1/Tau2/Claw) exists; only a 99% reliability figure and tool-calling support. Score reflects absence of evidence.
- **Reasoning: 55/100.** Benchable reasoning 68%, instruction following 53%, hallucination 64% — all mid/low for the 2026 field; no AA Index row exists. Mid-band.
- **Context window: 88/100.** 524K (up to 1M per AA) — tier 500K–1M band; no retrieval figure published.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 58/100.** Benchable coding 77% (29th pct) and a 40/100 coding composite — mid-tier for a 3B-active budget model; no SWE/LCB row.
- **Cost efficiency: 98/100.** $0.10/$0.40 per 1M (endpoint as low as $0.05/$0.20) for a 524K-context reasoning model.
- **Overall Score: 50.8/100.** Best fit for high-volume, latency-tolerant, cost-capped agentic workloads in Korean/English/Japanese where 524K context matters; the thin public benchmark surface and mid-pack rows keep it mid-band despite the excellent price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (Benchable private evaluation record, Artificial Analysis model page, LLM Stats / OpenRouter listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Upstage: Solar Mini 4 — Benchable (measured eval suite)](https://benchable.ai/models/upstage/solar-mini4-20260922)
  - [Solar Mini 4 — Artificial Analysis](https://artificialanalysis.ai/models/solar-mini4)
  - [Solar Mini 4 — LLM Stats](https://llm-stats.com/models/solar-mini4)
  - [Solar Mini 4 — OpenRouter](https://openrouter.ai/upstage/solar-mini4)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.