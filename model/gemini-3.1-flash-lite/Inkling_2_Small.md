# Gemini 3.1 Flash-Lite — findings by Fledge Alpha

- Source: Google (`gemini-3.1-flash-lite`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's Mar 3, 2026 fastest/cheapest Gemini 3 tier; replaces the 2.5 Flash-Lite generation at $0.25/$1.50.
- **Provider / access:** Gemini API (`gemini-3.1-flash-lite`), AI Studio, Vertex, Gemini app, Search AI Overviews.
- **Release / knowledge:** preview Mar 3, 2026; GA May 7, 2026.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,048,576 tokens; 65,536 max output.
- **Modalities:** text + image + video + PDF in; audio in at $0.50/M; text out; thinking tokens billed at output rate.
- **Pricing (as of 2026-10-02):** $0.25/M in, $0.025/M cached, $1.50/M out; Batch 50% off.
- **Architecture:** Sparse MoE Flash-Lite tier; 363 t/s measured by AA.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom row not separately published for this ID; tool-use implied through the AA "Cost per Task" lane on AI Studio at $0.04/task.
- BullshitBench v2 not published; Agents' Last Exam row absent.

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (Google, High effort) — leading "similar-tier" rows at launch
- MMMU-Pro: **76.8%**; Video-MMMU: **84.8%**
- HLE: **16.0%** (Google); FACTS factuality suite: 40.6%
- AA Intelligence Index: ~16 (re-baselined ~34 in earlier scorecards); IFBench/AA-LCR not separately published

Coding:

- LiveCodeBench: **72.0%** (Google, Jan–May 2025 UI)
- SWE-bench rows not published for this ID
- Arena Code Elo: 1253

Long context:

- MRCR v2 (8-needle): **60.1%** at 128k average; **12.3%** at 1M pointwise.

### Normalized scores (1–100)

- **Tool use: 60/100.** No published Terminal-Bench row; BullshitBench/_agents' rows are absent — capped accordingly.
- **Reasoning: 70/100.** GPQA 86.9% and HLE 16% class — flash-tier window in the family.
- **Context window: 84/100.** 1M window; 12.3% MRCR at full window is the binding row.
- **Multimodal: 90/100.** Full 3.1-line multimodal surface with the cheapest audio pricing.
- **Coding: 66/100.** LiveCodeBench 72% publishes; no SWE-bench row for Flash-Lite.
- **Cost efficiency: 92/100.** $0.25/$1.50 with Batch 50% off — top-of-tier budget entry among the catalog.
- **Overall Score: 74/100.** Half-up mean of the five non-cost dims: (60+70+84+90+66)/5 = 74.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google launch blog, model card, AI/TLDR, HokAI, tokencost, venturebeat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
