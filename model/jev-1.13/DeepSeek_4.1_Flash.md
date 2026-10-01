# Jev 1.13 — findings by DeepSeek 4.1 Flash

- Source: TypeSafe AI / Jev-1.13 (`typesafe/jev-1.13`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13 (pinned stable `jev-1.13.0`; aliases `jev-latest` and `jev-preview` both resolved to it)
- **Short description:** TypeSafe AI's fast *decision* model: instead of prose it returns bounded answers (yes/no, one-of-N choice, or a score) plus a probability distribution, for routing, grading and thresholding. A specialised, closed, text-only model — not a general chat/coding LLM.
- **Provider / access:** TypeSafe "System One" production API (`api.typesafe.ai`, `docs.typesafe.ai`); also served through gateways including OpenCode Zen (`jev-1.13` paid plus a limited-time `jev-1.13-free`), on the System One endpoint `https://opencode.ai/zen/v1/systemone`. Not open weights.
- **Release / knowledge:** Pinned stable by 2026-09-22 (Failproof operational snapshot) and listed 2026-09-24 (OrcaRouter); knowledge cutoff not disclosed.
- **IDs:** `jev-1.13.0` (TypeSafe direct), `jev-1.13` and `jev-1.13-free` (OpenCode Zen); aliases `jev-latest`, `jev-preview`.
- **Context window:** **64K tokens total** across state plus every question, with a **32K** cap for state plus the longest single question (TypeSafe docs, verified 2026-09-22).
- **Modalities:** text in / bounded decision (and probability distribution) out; English is the strongest language; **no image, audio or video input** and no general tool-calling/chat surface documented.
- **Pricing (as of 2026-10-01):** **$0.042 per 1M input tokens ($42 per billion); output tokens free** on the direct API; free during the limited-time `jev-1.13-free` window on OpenCode Zen. Published direct limits ~250K tokens/s and 1,200 requests/min (dynamic).
- **Architecture:** proprietary and closed; parameter count not published.

### Raw benchmarks found

Agent / tool use:

- JevBench (Benchmark Heaven) v1.4.2.2: **Routing 100%** on the hard tier (only routing-family item found); Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / OSWorld / Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- JevBench (Benchmark Heaven) v1.4.2.2 composite: **63.3/100, rank #4 of 91 ranked systems**; axes — Intelligence **53.1**, Calibration **76.3**, Speed **83.3**, Cost **52.0**. Tier accuracy — Easy **100%**, Standard **99%**, Judge **95%**, Hard **74%**, Sealed **37%**.
- GPQA Diamond / HLE / AA-LCR / CritPt / Artificial Analysis Intelligence Index: **no verified public score found** (JevBench is a bespoke decision benchmark, not a knowledge suite).

Coding:

- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / DeepSWE: **no verified public score found** (Jev is not a coding model).

Long context:

- No MRCR/RULER/GraphWalks value; TypeSafe explicitly warns that irrelevant long state hurts accuracy and only accepts a 32K state+question budget: **no verified public score found**.

Throughput: **~221 tok/s** (OrcaRouter listing, 2026-09-24).

### Normalized scores (1–100)

- **Tool use: 55/100 (provisional).** Jev is a routing/decision layer rather than an agent — JevBench routing is 100%, but with no Terminal-Bench/Tau3/GDPval/OSWorld measurement it cannot rate as an agent and is scored provisionally at the top of the low-mid band for its decision-routing role.
- **Reasoning: 62/100.** JevBench Intelligence 53.1 is mid, but Calibration 76.3 and the hard-tier 74% / judge 95% accuracies show reliable bounded reasoning; capped well below frontier because no knowledge benchmark (GPQA/HLE) is published.
- **Context window: 45/100.** 64K total (state + questions) sits inside the <100K band (10–49); the extra 32K state+longest-question constraint and the model's own "long state hurts accuracy" warning keep it near the middle of that band.
- **Multimodal: 15/100.** Text-only input; no image/audio/video and no non-text output mode.
- **Coding: 40/100 (provisional).** No coding benchmark exists and Jev is not positioned for code generation; scored provisionally low (rather than excluded, since verified decision benchmarks do exist).
- **Cost efficiency: 99/100.** $0.042 per 1M input tokens with free output is among the cheapest evaluated tiers, and it is free during the Zen preview window.
- **Overall Score: 43/100.** (55 + 62 + 45 + 15 + 40) / 5 = 43.4 → 43. Best fit: cheap, low-latency decision/routing calls (yes/no, grading, thresholds) — not a general coding or agentic driver.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research from zero (Benchmark Heaven JevBench v1.4.2.2 page, BenchLM JevBench results page, Failproof "Jev model card" operational snapshot, Julian Goldie OpenCode Zen guide, OrcaRouter listing); scores are normalized 1–100 interpretations, not official vendor scores; Tool use and Coding marked provisional where no matching benchmark exists.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
