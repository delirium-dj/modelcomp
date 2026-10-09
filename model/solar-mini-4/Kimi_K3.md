# Solar Mini 4 — findings by Kimi K3

- Source: Upstage (`solar-mini4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's compact proprietary reasoning model (35B total / 3B active MoE, reported), launched 2026-09-22 for high-volume agentic and long-context work; sets an Artificial Analysis Pareto point for intelligence per active parameter but burns ~88K output tokens per task.
- **Provider / access:** Upstage Console API (`solar-mini4`; 70% off promo ran through 2026-10-10 UTC); OpenRouter `upstage/solar-mini4`; paired product "Solar Jev" (decision endpoint). Chat Completions; reasoning model.
- **Release / knowledge:** 2026-09-22 (OpenRouter/opper; Korean press GA 10-01); **knowledge cutoff Feb 2026** (AA).
- **IDs:** `upstage/solar-mini4` (OpenRouter). No OpenCode Zen Free ID verified; promo pricing, not a free tier.
- **Context window:** discrepancy across trackers: AA lists **1M** tokens (262K max output), OpenRouter lists **524,288** (131,072 output), llm-stats lists 524K. Vendor docs govern; flag both.
- **Modalities:** text in → text out (AA); reasoning tokens heavy (72K of 88K per AA task are thinking).
- **Pricing (as of 2026-10-09):** list $0.10 / $0.40 / $0.01 cached per 1M; OpenRouter from $0.05/$0.20. AA measured cost: **$0.36 per Intelligence Index task** (~5x GPT-6 Luna's $0.07 — verbosity + only 48% cache hit rate).
- **Architecture:** MoE, 35B total / 3B active (vendor-reported; proprietary, not independently verifiable — AA caveat).

### Raw benchmarks found

(Artificial Analysis independent evals, 2026-09-30 article + model page)

Agent / tool use:

- Terminal-Bench 4.0: **1%**; AutomationBench-AA: **22%** — agentic execution is the weak flank
- GDPval-AA: **1072 Elo**; AA-Briefcase: **872 Elo** (≈ Inkling xhigh territory)

Reasoning / knowledge:

- AA Intelligence Index: **24** (Pareto-best per active parameter under 3B active; 16 pts above Solar Pro 3's 8)
- AA-Omniscience: **-11** index (18% accuracy but 64% non-hallucination — abstains ~half; more honest than Inkling/GPT-6 Luna)
- SciCode: **48%** (ahead of MiniMax-M3 47, Inkling 47)

Long context:

- AA-LCR v1.1: **83%** — matches MiniMax-M3 and GPT-6 Luna (max), ahead of Gemini 3.8 Flash (high) and GPT-6 Astra (max) at 81. Standout dimension.

Speed/efficiency: 208 tok/s output; 7.1 min average per AA task (heavy thinking).

SWE-bench / GPQA / HLE: no verified public score found.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 45/100.** TB4.0 1% and AutomationBench 22% show it cannot yet drive long agent loops; GDPval/AA-Briefcase mid-pack salvages Q&A-style tool work.
- **Reasoning: 52/100.** Index 24 with SciCode 48% and elite abstention discipline (64% non-hallucination); raw knowledge recall (18%) is low.
- **Context window: 82/100.** 524K–1M window (tracker discrepancy flagged) with AA-LCR 83% — genuinely top-tier long-context retrieval, its best dimension.
- **Multimodal: 15/100.** Text-only (AA modalities) — methodology floor.
- **Coding: 45/100.** SciCode 48% is respectable science code; Terminal-Bench 4.0 at 1% says agentic coding is currently broken.
- **Cost efficiency: 62/100.** Token prices are flash-class ($0.10/$0.40) but 88K output tokens per task and poor cache hits make real tasks ~5x pricier than GPT-6 Luna — the price-per-task catch AA calls out.
- **Overall Score: 48/100.** Mean of 45/52/82/15/45 = 47.8 → 48. Best fit: cheap long-document Q&A/RAG at volume for Korean+English corpora where verbosity is tolerable; not for agentic coding.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (Artificial Analysis launch analysis + model page, OpenRouter listing, llm-stats, opper.ai, orcarouter.ai, ajupress); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
