# LongCat 2.5 Preview — findings by Step 5 Preview

- Source: Meituan / LongCat (`longcat-2.5-preview`)
- Date: 2026-10-24 (UTC) — **re-research superseding a 2026-10-21 self-exclusion**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Re-research note (Step 3.3 twin procedure)

This file replaces the verdict of my earlier `Step_5_Preview.md.excluded` for this
slug. That file concluded "zero verified public benchmark numbers" because
BenchmarkList carried `meituan-longcat-2.5-preview` with **0 score rows** and every
standard benchmark (SWE-bench, Terminal-Bench, GPQA, HLE, Tau, GDPval, OSWorld,
Claw-Eval, MCP-Atlas, MMMU, AA-Index) was absent.

Fresh research on 2026-10-24 found **one third-party measured composite** the earlier
pass did not: aicodingdaily.com scores this model at **46.65 points, ranked #41**
(Laravel 16.98, React-TS 16.67, Bug Finding 2.4, Edge-case 10.6; 16:50 average task
time; OpenCode harness; dated 2026-10-02). That is a real benchmark number, so the
zero-benchmark self-exclusion condition no longer holds and a scored file is correct.

**The evidence base is still extremely thin** — one non-standard composite, no
standard benchmark, no independent Artificial Analysis entry, and no weights repo for
community reproduction. Four of the five quality dimensions below are therefore
provisional, and the Overall should be read as a placeholder pending real benchmarks,
not as a measured result.

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's multimodal reasoning model for coding and agent tasks with image understanding and a 1M-token context window — API/preview-only, with **no GA "LongCat 2.5" release at all** (verified: official docs, models.dev, Hugging Face and Artificial Analysis all carry only the Preview and the older 2.0).
- **Provider / access:** LongCat API Open Platform (pay-as-you-go), with a free OpenCode Zen route `longcat-2.5-preview-free`. Also on the Vercel AI Gateway and NanoGPT. **Not on OpenRouter** (its Meituan roster carries only `longcat-2.0` and `longcat-flash-chat`). OpenAI- and Anthropic-format APIs both supported, and Claude-Code-compatible harnesses are documented.
- **Release / knowledge:** released **2026-09-25** (models.dev; a change log corrected an earlier 26-September reading). Knowledge cutoff not disclosed.
- **IDs:** `meituan/longcat-2.5-preview` (models.dev); `longcat-2.5-preview-free` (OpenCode Zen free route).
- **Context window:** **1,000,000 tokens** (models.dev; the LongCat first-party provider row says 1,048,576). Max output **131,072** (models.dev, Vercel, OpenCode) — but **262,144** on the LongCat first-party row, and 128,000 per one secondary source. The models.dev figure is used.
- **Modalities:** **text and image in; text out** (models.dev description, Vercel, OpenCode). Reasoning Yes; tool calling Yes; thinking toggle. Structured output `-` (unset) on the canonical record, though the NanoGPT provider row says No.
- **Pricing (as of 2026-10-24):** **$0.30 in / $1.20 out per 1M with $0.006 cached input** on the LongCat first-party route and the Vercel AI Gateway (a limited-time promotional price, per Meituan's pricing docs). A free OpenCode Zen slot exists. One secondary provider (NanoGPT) lists $0.75/$2.95. models.dev's canonical row reads $0.00/$0.00 because it reflects the free OpenCode providers.
- **Architecture:** proprietary, API-only, no weights and no published license. Parameter count is **not officially disclosed**; a secondary claim of ~1.6T total / ~48B active (inherited from LongCat 2.0) circulates but is unverified and is not used here.

### Raw benchmarks found

Coding — **the only measured evidence that exists for this model:**

- **aicodingdaily.com composite: 46.65 points, rank #41** (2026-10-02, OpenCode harness). Breakdown: Laravel 16.98, React-TS 16.67, Bug Finding 2.4, Edge-case 10.6, with a 16:50 average task time.
- The composite's own structure is the important caveat: **Bug Finding at 2.4 and Edge-case at 10.6 are extremely low**, while the two web-framework tasks carry the score. So this is a framework-code-generation number, not a software-engineering number.

All standard benchmarks, per the earlier pass and confirmed again on 2026-10-24:

- Terminal-Bench (any version): no verified public score found.
- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA Elo / Coding Agents Index: no verified public score found.
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- AIME: no verified public score found.
- Artificial Analysis Intelligence Index: **no verified public score found** — AA has no page for this model (404), so no independent composite, rank, speed or latency measurement exists.

Long context:

- MRCR / RULER / GraphWalks / AA-LCR: no verified public score found. The 1M window is a catalog spec with **no retrieval measurement at any length**.

Vision (multimodal):

- MMMU / MMMU-Pro / OCRBench / DocVQA / ChartQA: no verified public score found, despite image input being a documented capability.

Speed / cost:

- Output speed, TTFT, cost per task: no verified public score found — no Artificial Analysis entry exists to measure them.

### Conflicts recorded (not silently resolved)

1. **Context window:** 1,000,000 (models.dev) vs 1,048,576 (LongCat first-party, Vercel). Effectively the same magnitude, both recorded.
2. **Max output:** 131,072 (models.dev, Vercel, OpenCode) vs **262,144** (LongCat first-party) vs 128,000 (one secondary source) — a 2x spread. models.dev's 131,072 used.
3. **Pricing:** $0.30/$1.20 (LongCat, Vercel, official docs) vs $0.75/$2.95 (NanoGPT) vs models.dev's canonical $0.00/$0.00 (a free-route artifact). The first-party price is used for cost scoring.
4. **Parameter count:** ~1.6T/48B is a secondary unverified claim inherited from LongCat 2.0 — Deliberately **not** used.
5. **Structured output:** unset (`-`) on models.dev's canonical record, `No` on NanoGPT. Not claimed here.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified public score found for Terminal-Bench, Tau3, Tau2, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas or the Coding Agents Index. Tool calling and reasoning are both flagged as supported, which keeps this off the floor, but the only measured number (aicodingdaily 46.65) is a composite whose agentic components — Bug Finding 2.4, Edge-case 10.6 — are among the weakest figures in this entire research pass. Provisional, capped low by missing evidence.
- **Reasoning: 40/100.** No verified public score found for GPQA, HLE, AIME, CritPt or any independent Intelligence Index (AA has no page at all). With zero reasoning measurements, no defensible score above the bottom band exists; 40 is provisional and essentially unmeasured.
- **Context window: 95/100.** 1,000,000-token window with 131,072 max output is squarely in the methodology's ≥1M tier (95-100), and Meituan positions the model explicitly for long-horizon agent work across terminals, browsers, GUIs, spreadsheets and design tools. Held at 95 rather than 100 because **no retrieval measurement exists at any length** — the methodology reserves 100 for ≥98% retrieval at 512K+, and here even a 128K retrieval figure is absent.
- **Multimodal: 65/100.** Text and image in, text out — the methodology's "+image in" band (60-70), confirmed by models.dev, Vercel and OpenCode. Scored in-band with no adjustment because every vision benchmark (MMMU, MMMU-Pro, OCRBench, DocVQA, ChartQA) is unpublished, so the capability is documented but entirely unmeasured.
- **Coding: 45/100.** The aicodingdaily composite of 46.65 (rank #41) is the only measured evidence, and its structure argues against a higher score: Laravel 16.98 and React-TS 16.67 are mid, but **Bug Finding at 2.4 and Edge-case at 10.6** are near-failure on the two tasks closest to real software engineering. A 16:50 average task time is also slow. Provisional — this is the model's own remit and it is still effectively unmeasured on any standard harness.
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M with $0.006 cached input on first-party pricing, plus a genuinely free OpenCode Zen route (`longcat-2.5-preview-free`). Inside the methodology's ~$0.10/$0.20 ≈ 97-99 band on price alone; held at 94 by a 16:50 average task time from the only measured source and by the free Zen route's limited-time promotional framing.
- **Overall Score: 57/100.** Mean of the five quality dims (40 + 40 + 95 + 65 + 45 = 285 ÷ 5 = 57.0). Best fit: very cheap long-horizon multimodal agent work where a 1M window and image input matter and capability requirements are low. Worst fit: anything requiring measured quality — four of the five dimensions here are provisional and the one measured number is a non-standard composite whose engineering sub-scores are near zero.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across five independent source families (models.dev's Meituan catalog and provider rows, Meituan's own pricing docs, the Vercel AI Gateway listing, the OpenCode Zen free-route record, and aicodingdaily.com's composite leaderboard), with Artificial Analysis and OpenRouter checked and found to carry no data; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: this file supersedes a 2026-10-21 self-exclusion that found zero benchmarks. The new evidence is a single third-party composite (aicodingdaily 46.65, #41); no standard benchmark and no independent tracker entry exists. The earlier `.excluded` twin has NOT been deleted — deleting it requires a per-file user confirmation popup per `RULES.md`, and it is flagged for that decision rather than removed unilaterally.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
