# Jev 1.13 — findings by DeepSeek 4.1 Flash

- Source: TypeSafe AI / Jev-1.13 (`typesafe/jev-1.13`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM has **no page** for `jev-1.13` (404); no new independent benchmark surfaced and the 2026-10-11 deep-pass rows stand. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-verified that Jev is TypeSafe AI's structured *decision* ("System One") model, `typesafe/jev-1.13`, text-in / typed-answer out, 64K total context (32K state + longest question), $0.042/1M input with free output. Independent confirmations came from OrcaRouter's live serving write-up (2026-09-30), AI/TLDR's model page, JevBench's external decision leaderboard (2026-09-25), DecisionsApi, AIHubMix, and thejevai.com's model directory; the vendor spec is the primary authority for native facts (docs.typesafe.ai/models). No verified public score exists for GPQA/HLE/SWE-bench/Terminal-Bench/MRCR, so all quality dimensions keep their prior conservative values; only rate-limit and throughput details moved. Conflicts surfaced: gateway price $0.0462 vs vendor $0.042; provider "context 32K" (AIHubMix) vs 64K combined (state alone is 32K — both true); rate limits revised 250K/1,200 → 100K/80 (docs say dynamic); throughput readings 192/221/349 tok/s across sources (and Jev emits no generated text, so the meter is not comparable).

## Model card

- **Name:** Jev 1.13 (pinned stable `jev-1.13.0`; aliases `jev-latest` and `jev-preview` both resolved to it)
- **Short description:** TypeSafe AI's fast *decision* model: instead of prose it returns bounded, typed answers (choice from a supplied label set, an ordered score, or a true/false "noul") plus a calibration probability — for routing, grading, triage and thresholding. A specialised, closed, text-only model, not a general chat/coding LLM.
- **Provider / access:** TypeSafe "System One" production API (`api.typesafe.ai`, `docs.typesafe.ai`), single endpoint `POST /v1/systemone`; also served via gateways — OpenCode Zen (`jev-1.13` paid plus a limited-time `jev-1.13-free`, System One endpoint `https://opencode.ai/zen/v1/systemone`), OrcaRouter (`typesafe/jev-1.13`, added 2026-09-24), AIHubMix and the Jev AI / DecisionsApi playgrounds. Not open weights.
- **Release / knowledge:** Early access announced 2026-09-15 (TypeSafe blog, founder Diogo Almeida); pinned stable listed through gateways 2026-09-18 to 2026-09-24. Knowledge cutoff not disclosed.
- **IDs:** `jev-1.13.0` (TypeSafe direct), `typesafe/jev-1.13` (OrcaRouter / Jev AI / DecisionsApi), `jev-1.13` and `jev-1.13-free` (OpenCode Zen); aliases `jev-latest`, `jev-preview`.
- **Context window:** **64K tokens total** across state plus every question, with a **32K** cap for state plus the longest single question (TypeSafe docs, verified 2026-10-11). Gateway specs that advertise "32K context" (AIHubMix) refer to the state-alone budget.
- **Modalities:** text in / typed decision (with probability distribution) out; English is the primary and strongest language; **no image, audio or video input** and no general text-generation, streaming, chat or tool-calling surface documented.
- **Pricing (as of 2026-10-11):** **$0.042 per 1M input tokens ($42 per billion); output tokens free** — billed on input only on the direct API; listed at $0.042/M by OrcaRouter (0% markup) and $0.0462/M by AIHubMix (gateway markup); free during the limited-time `jev-1.13-free` window on OpenCode Zen. Rate limits documented as ~100K tokens/s and 80 requests/s (dynamic, revised down from an earlier ~250K/s and 1,200 req/min).
- **Architecture:** proprietary and closed; parameter count, training compute and weights not published; trained with TypeSafe's own "RLCD" (Reinforcement Learning for Calibrated Decisions) objective.

### Raw benchmarks found

Agent / tool use:

- JevBench (Benchmark Heaven) v1.4.2.2: **Routing 100%** on the hard tier (only routing-family item found); the external JevBench.dev board (separate project) reports a **decision-game win rate** — top row "84% win rate to beat" for TypeSafe Jev 1.13, 24 verified wins across 105 published runs, 4 models ranked (2026-09-25). Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / OSWorld / Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- JevBench (Benchmark Heaven) v1.4.2.2 composite: **63.3/100, rank #4 of 91 ranked systems**; axes — Intelligence **53.1**, Calibration **76.3**, Speed **83.3**, Cost **52.0**. Tier accuracy — Easy **100%**, Standard **99%**, Judge **95%**, Hard **74%**, Sealed **37%**.
- GPQA Diamond / HLE / AA-LCR / CritPt / Artificial Analysis Intelligence Index: **no verified public score found** (JevBench is a bespoke decision benchmark, not a knowledge suite). CherryRouter/OrcaRouter live-traffic error rate **0.49%** over the 7 days ending 2026-09-30 (independent serving figure, not an accuracy benchmark).

Coding:

- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / DeepSWE: **no verified public score found** (Jev is not a coding model). AI/TLDR and OrcaRouter both note TypeSafe lists "Generation" as a documented failure mode and advises using a generative model instead.

Long context:

- No MRCR/RULER/GraphWalks value; TypeSafe explicitly warns that irrelevant long state hurts accuracy ("accuracy drops as state grows") and only accepts a 32K state + longest-question budget: **no verified public score found**.

Multimodal:

- Text-only in / typed out; images, audio and video are unsupported and must be pre-converted to text, and prose/translation/summary generation is excluded by design: **no multimodal capability** (TypeSafe docs, verified 2026-10-11).

Throughput / latency (independent, no generated text — figures are for the structured payload): OrcaRouter median time-to-first-token **151 ms**, p95 **247 ms**, ~**349 tok/s** response-side, over the 7 days ending 2026-09-30; AI/TLDR lists **192 tok/s**; an earlier OrcaRouter listing gave **~221 tok/s**. Vendor claim: 70–500 ms end-to-end, framed as 40x–200x faster than frontier LLMs on System One tasks (vendor-reported, unreplicated).

### Normalized scores (1–100)

- **Tool use: 55/100 (provisional).** Jev is a routing/decision layer rather than an agent — JevBench routing is 100% and JevBench.dev shows the top decision-game win rate, but with no Terminal-Bench/Tau3/GDPval/OSWorld measurement it cannot rate as an agent and is scored provisionally at the top of the low-mid band for its decision-routing role (https://benchmarkheaven.com/jev-models, https://jevbench.dev/leaderboard).
- **Reasoning: 62/100.** JevBench Intelligence 53.1 is mid, but Calibration 76.3 and the hard-tier 74% / judge 95% accuracies show reliable bounded reasoning; capped well below frontier because no knowledge benchmark (GPQA/HLE) is published and the vendor itself lists nine failure modes including math and date comparison (https://docs.typesafe.ai/models, https://benchmarkheaven.com/jev-models).
- **Context window: 45/100.** 64K total (state + questions) sits inside the <100K band (10–49); the extra 32K state+longest-question constraint and the model's own "long state hurts accuracy" warning keep it near the middle of that band (https://docs.typesafe.ai/models).
- **Multimodal: 15/100.** Text-only input; no image/audio/video and no non-text generation mode (https://ai-tldr.dev/models/jev-1-13/, https://docs.typesafe.ai/models).
- **Coding: 40/100 (provisional).** No coding benchmark exists and Jev is not positioned for code generation — "Generation" is a documented failure mode; scored provisionally low (rather than excluded, since verified decision benchmarks do exist).
- **Cost efficiency: 99/100.** $0.042 per 1M input tokens with free output is among the cheapest evaluated tiers, and it is free during the Zen preview window; the $0.0462 gateway rate is a small markup on the same base price (https://docs.typesafe.ai/models, https://www.orcarouter.ai/blog/jev-model-explained, https://aihubmix.com/model/jev-1.13).
- **Overall Score: 43/100.** (55 + 62 + 45 + 15 + 40) / 5 = 43.4 → 43. Best fit: cheap, low-latency typed decision/routing calls (choice, score, noul) embedded beside a generative model — not a general coding, agentic or multimodal driver.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research from zero, second pass (TypeSafe docs.typesafe.ai/models; OrcaRouter "Jev 1.13 Explained" serving write-up 2026-09-30; AI/TLDR model page; JevBench.dev leaderboard; DecisionsApi model page; AIHubMix model page; thejevai.com model directory; Benchmark Heaven JevBench v1.4.2.2 page; Failproof operational snapshot; Bing and DuckDuckGo HTML searches). Scores are normalized 1–100 interpretations, not official vendor scores; Tool use and Coding marked provisional where no matching benchmark exists. No scored dimension changed in this second pass — evidence confirmed the prior values but produced no new verified quality benchmark; rate-limit and throughput details were updated.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
