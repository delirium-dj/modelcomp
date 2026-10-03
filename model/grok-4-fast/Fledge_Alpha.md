# Grok 4 Fast — findings by Fledge Alpha

- Source: xAI (`grok-4-fast`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's Sep 19, 2025 cost-optimized 2M-context model; deprecated May 15, 2026 in favor of Grok 4.3, API retirement scheduled Aug 15, 2026 (rate card unchanged through July 2026).
- **Provider / access:** xAI API (`grok-4-fast-reasoning`, `grok-4-fast-non-reasoning`), Azure; deprecated.
- **Release / knowledge:** 2025-09-19.
- **IDs:** `x-ai/grok-4-fast`
- **Context window:** 2,000,000 tokens; playground output capped at 16,000 tokens; no published MRCR row.
- **Modalities:** text + image + file in; text out; Agent Tools API.
- **Pricing (as of 2026-10-02):** $0.20/M in, $0.05/M cached, $0.50/M out; extended-context rate above 128K.
- **Architecture:** Proprietary; ~40% fewer reasoning tokens than Grok 4 for comparable results, per xAI launch comparison.

### Raw benchmarks found

Agent / tool use:

- 2M-context search: grok-4-fast-search variant topped LMArena Search Arena at 1163 Elo at launch
- No current AA Agentic Index row for the base ID

Reasoning / knowledge:

- AA Intelligence Index: **35.1** (Reasoning variant); GPQA Diamond 84.8–85.3% (AA/vals Reasoning); HLE 19.1% (AA Reasoning)
- IFBench: 81.2-class on 0309 v2 in the same era
- MMLU Pro: 85.0% (pricepertoken row, reasoning)
- CritPt: 2.9%

Coding:

- SWE-bench (vals, Reasoning): **45.4%**; LiveCodeBench (Vals): 79.0% (Reasoning)
- No SWE-bench Verified row published for this ID

Long context:

- 2M window — the only xAI tier at 2M in this era; AA-LCR 73.7% (Reasoning) on the AA row set
- Fiction.LiveBench 120k: 75.0% (not stated config)

### Normalized scores (1–100)

- **Tool use: 62/100.** 2M-context search ranked #1 at launch is the strongest tool-use signal; no AA agentic row.
- **Reasoning: 60/100.** AA Index 35.1 (Reasoning) and GPQA 85% — budget-class at launch, mid-pack today.
- **Context window: 96/100.** 2M window — tied with Grok 4.20 as the catalog ceiling at launch; no published full-window recall number.
- **Multimodal: 76/100.** Native text + image + file in; no audio/video on this ID at launch.
- **Coding: 58/100.** Vals SWE-bench 45.4% is the weakest documented SWE row of any current xAI tier.
- **Cost efficiency: 92/100.** $0.20/$0.50 with 75% cache discount — among the cheapest tier rates; deprecated May 2026.
- **Overall Score: 70/100.** Half-up mean of the five non-cost dims: (62+60+96+76+58)/5 = 70.4 → 70.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (HokAI model card, benchleader config table, pricepertoken AA-rate scorecard, BenchLeader page, anotherwrapper); scores are normalized 1–100 interpretations, not official vendor scores. Deprecated May 15, 2026.
- Future sources: add a new file next to this one using the same headings.
