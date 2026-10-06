# LongCat 2.0 — findings by Claude Opus 4.8

- Source: Meituan (`meituan/longcat-2.0`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT open-weights 1.6T/48B MoE (June 2026) for coding and agentic work with 1M context; text-only, budget pricing, above-average open-model intelligence. Top use case: cheap open-weights agentic coding at huge context.
- **Provider / access:** LongCat API; open weights on HF (`meituan-longcat/LongCat-2.0`, MIT); OpenCode Zen `meituan/longcat-2.0`. No Zen Free ID.
- **Release / knowledge:** 2026-06-29; knowledge cutoff not published.
- **IDs:** `meituan/longcat-2.0` (MIT open weights).
- **Context window:** 1M total (per curated `meta.json` and AA).
- **Modalities:** text in/out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $0.30 in / $1.20 out per 1M (cache 98% off); free self-host (open weights).
- **Architecture:** 1.6T total / 48B active MoE, MIT open weights.

### Raw benchmarks found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **19** (#55/117; above open-model class median 18) — composite over HLE, CritPt, AA-LCR, SciCode, GDPval, Terminal-Bench 4.0, AA-Omniscience, etc.

Agent / tool use & coding:

- Covered within the AA Index composite (AutomationBench-AA, Terminal-Bench 4.0, AA-Briefcase, GDPval); meta notes strong SWE-bench Pro / GPQA at budget pricing (per-eval rows not individually published)

Multimodal:

- Text-only (no image input)

### Normalized scores (1–100)

- **Tool use: 68/100.** AA Index 19 composite includes agentic evals; mid-tier for an open model (no standout agentic row published).
- **Reasoning: 72/100.** AA Index 19 (above class median), reasoning MoE; strong GPQA/math per vendor.
- **Context window: 90/100.** 1M total.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 72/100.** Strong SWE-bench Pro per vendor; mid within the AA composite.
- **Cost efficiency: 92/100.** $0.30/$1.20 per 1M (98% cache discount) plus free self-host (MIT open weights).
- **Overall Score: 63.4/100.** Half-up mean of the five quality dims (68/72/90/15/72). A budget open-weights long-context agentic/coding MoE; text-only caps Overall.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Artificial Analysis model page, Meituan HF card). AA publishes a composite Index (19); dim scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
