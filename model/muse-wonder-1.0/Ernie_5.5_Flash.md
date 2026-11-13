# Muse Wonder 1.0 — findings by Ernie 5.5 Flash

- Source: Meta/Muse Wonder 1.0 (`muse-wonder-1.0`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0 (the API SKU of Meta's Muse Wonder; distinct from the subscription-only Muse Wonder Full)
- **Short description:** Meta Superintelligence Labs' first frontier-class proprietary reasoning model (released 2026-10-12), built for long-horizon personal/professional agent work and coding. This entry is the public-API SKU; Muse Wonder Full is a separate, subscription-only model tracked in `model/muse-wonder-full/`.
- **Provider / access:** Meta Model API (`muse-wonder-1.0`, OpenAI-SDK-compatible), Muse Code (Everyday/High plans), OpenRouter (`meta/muse-wonder`) at the same $4/$20 rate.
- **Release / knowledge:** 2026-10-12; knowledge cutoff not published.
- **IDs:** `muse-wonder-1.0` (Meta Model API), `meta/muse-wonder` (OpenRouter). No free tier; no open weights (closed model).
- **Context window:** 1,048,576 tokens (1M), unchanged from Muse Spark 1.3 — vendor model card + OpenRouter listing.
- **Modalities:** text / image / video / audio in, text out; reasoning (max effort dial) yes; tool calls / built-in agentic tooling yes.
- **Pricing (as of 2026-11-13):** $4.00 in / $0.20 cached / $20.00 out per 1M tokens — identical to Claude Opus 5.5; 3.2× Muse Spark 1.3 input.
- **Architecture:** proprietary closed-weights MoE-class frontier model (params undisclosed).

### Raw benchmarks found

> Meta's own launch scorecard (max effort) plus Artificial Analysis Intelligence Index v4.3 (launch) and v5.0.1 (current).

Agent / tool use:

- Terminal-Bench 4.0-AA (max): **52.0%** (Meta chart; vs 59.6 Opus 5.5, 59.1 GPT-6 Astra)
- AutomationBench-AA: **39.1** (Meta chart, index-style; Full 45.4)
- GDPval-AA v2.1: **no separate Wonder row found** (Full 1857 Elo; Wonder leads GDP.pdf 30.8 vs 30.6 Opus 5.5)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52** (v4.3.2, launch, max) → **43.6** (v5.0.1, 2026-11-10 reading) — rank ~#11
- AA-Omniscience: **25**, hallucination rate **27%** (third-lowest among 45+ index scorers)
- HLE: **no verified public score found** for this SKU (Full 50.1% per lounge.ai summary of Meta data — not this model)
- GPQA Diamond / LCR / CritPt / MRCR: no verified public score found for this SKU (Full tops CritPt 33%)

Coding:

- SWE-Marathon (very long projects): **53.1** (Full 57.5 @ xhigh)
- DeepSWE 1.1: **78.8** (vs 79.0 Full, 74.2 Opus 5.5)
- ProgramBench (from scratch): **50.0** (vs 70.5 Opus 5.5)
- Terminal-Bench 4.0-AA: **52.0%**
- AA Coding Agents Index (Muse Code): **63** (Full 68; Claude Code+Sonnet 5.5 max 68)
- LiveCodeBench / SciCode: no verified public score found for this SKU (Full SciCode 63)

Long context:

- MemoryBench (Meta internal, 64K–100K conversations): **85.6** — best on Meta's chart; no MRCR/RULER figure at 1M published.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 4.0-AA 52% and AutomationBench-AA 39.1 are mid-frontier, a clear step below Opus 5.5 (59.6) and GPT-6 Astra (59.1); MemoryBench 85.6 shows strong recall-driven tool use. Capped by the missing GDPval-AA row and mid-pack agentic scores.
- **Reasoning: 78/100.** AA Index 43.6 (v5.0.1) is below the frontier band (Fable 5.2 64.6, Opus 5.5 59.1); knowledge is the weak spot (Omniscience 25) though hallucination is low (27%). Index rescale (52 → 43.6) is the cap.
- **Context window: 100/100.** 1,048,576-token window, vendor-verified; MemoryBench 85.6 at 64–100K is the only public retrieval-style row.
- **Multimodal: 90/100.** text/image/video/audio in, text out — full input coverage; text-only output is standard for the class.
- **Coding: 86/100.** DeepSWE 1.1 78.8 and SWE-Marathon 53.1 are frontier-adjacent (beats Opus 5.5 on DeepSWE), but ProgramBench 50.0 and TB2.1-AA 52% trail; Coding Agents Index 63 caps it.
- **Cost efficiency: 60/100.** $4/$20 per 1M matches Opus 5.5 while scoring 15.5 index points lower; AA cost-per-task $4.52 (2.8× Muse Spark 1.3).
- **Overall Score: 87.6/100.** Best fit for long-horizon coding and legal/document agent work where its DeepSWE/SWE-Marathon margins hold; priced at the frontier yet scoring below it keeps it a niche pick.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (Artificial Analysis launch article + index table, Meta model page/pricing docs via secondary reporting, Fello AI transcription of Meta's launch scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Wonder and Muse Wonder Full — Artificial Analysis](https://artificialanalysis.ai/articles/muse-wonder)
  - [Muse Wonder (Max) — Artificial Analysis model page](https://artificialanalysis.ai/models/muse-wonder)
  - [Muse Wonder — Meta developer model page](https://dev.meta.ai/models/muse-wonder)
  - [Pricing and rate limits — Meta Model API](https://dev.meta.ai/docs/pricing-rate-limits)
  - [Meta Muse Wonder: The Benchmarks, the Price, and Where Claude Still Wins — Fello AI](https://felloai.com/muse-wonder/)
  - [Muse Wonder — OpenRouter](https://openrouter.ai/meta/muse-wonder)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.