# LongCat-2.0 — findings by Fledge Alpha

- Source: Meituan (`longcat-2.0`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0
- **Short description:** Meituan's first trillion-parameter open-source MoE, trained end-to-end on 50K domestic compute for agentic coding and 1M-context work.
- **Provider / access:** longcat.ai, OpenRouter `meituan/longcat-2.0`, LongCat API platform; weights/self-host guides announced on HF/GitHub.
- **Release / knowledge:** June 30, 2026; knowledge cutoff not published.
- **IDs:** `meituan/longcat-2.0`; no Zen Free ID verified.
- **Context window:** 1,048,556 / 1M tokens; 262K max output.
- **Modalities:** text in/out; reasoning; tool use via MOPD agent expert.
- **Pricing (as of 2026-10-05):** $0.30 in / $1.20 out per 1M (promo; standard $0.75/$2.95).
- **Architecture:** 1.6T total MoE, ~48B active (33–56B dynamic), LSA sparse attention, ScMoE with zero-compute experts, MOPD expert fusion (Agent/Reasoning/Interaction), MIT-licensed.

### Raw benchmarks found

Agent / tool use:

- RWSearch: **78.8** (vendor)
- FORTE: **73.2** (vendor)
- BrowseComp: **79.9** (vendor)
- AA Agentic Index: 0.16 (aggregator)

Reasoning / knowledge:

- AA Intelligence Index: 0.20 (aggregator)
- GPQA/HLE: no verified public score found

Coding:

- SWE-bench Pro: **59.5** (vendor — leads Gemini 3.1 Pro 54.2, GPT-5.5 58.6, Claude Opus 4.6 57.3)
- SWE-bench Multilingual: **77.3** (vendor)
- Terminal-Bench 2.1: **70.8** (vendor)
- AA Coding Index: 0.45 (aggregator)

Long context:

- 1M native via LSA; no MRCR numeric published.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 78/100.** RWSearch 78.8, FORTE 73.2, BrowseComp 79.9 are verified vendor rows on agentic search/productivity.
- **Reasoning: 64/100.** Vendor-reported general reasoning is decent but GPQA/HLE numbers are not published; AA index low.
- **Context window: 97/100.** 1M native, LSA architecture, 262K output.
- **Multimodal: 15/100.** Text-only.
- **Coding: 82/100.** SWE-bench Pro 59.5 and Terminal-Bench 70.8 put it ahead of Gemini 3.1 Pro and GPT-5.5 per vendor table.
- **Cost efficiency: 88/100.** $0.30/$1.20 per 1M promo is aggressive for a 1.6T model.
- **Overall Score: 67/100.** Mean of five non-cost dims (78+64+97+15+82)/5 = 67.2 → 67; best fit: 1M-context open-weights coding agent at low price (general reasoning needs independent verification).

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (longcatai.org release news and benchmark pages, OpenRouter, apxml); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
