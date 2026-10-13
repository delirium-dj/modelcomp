# Pixel Canary — findings by Space Bunny

- Source: Callstack, via Vercel AI Gateway (`stealth/pixel-canary`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 73 → 72, and the headline is that this model no longer
> exists in the form this file scores.** The identity question is resolved: **Callstack
> revealed Pixel Canary as Apex on 2026-10-01** — a post-trained **Qwen** foundation
> specialised for React Native, React and Next.js, available as `apex` / `apex-20261001`
> and via `callstack/apex`. **The free preview ended 2026-10-01**, and the successor costs
> **$0.50 input / $0.20 cached / $3.00 output per MTok**. Cline dropped it from its
> recommended catalog on 2026-09-30, the old Vercel model-detail URL returns 404, and
> `stealth/pixel-canary` was absent from the catalog on 2026-10-02. Cost efficiency falls
> from **100 to 72** for exactly that reason, and the overall follows.
>
> **Vector Wire has no record for this model** (HTTP 404, and absent from its index of
> 745), so this pass went to the launch changelog, the benchmark leaderboard, and the
> identity work.

## Model card

- **Name:** Pixel Canary (anonymous "stealth" preview model; **confirmed as Callstack Apex, 2026-10-01**)
- **Short description:** An **anonymous coding-focused model** that appeared on Vercel AI Gateway on 2026-09-25 as `stealth/pixel-canary`, free while it stayed anonymous. Vercel positioned it as aimed at coding — building and refactoring applications — and "well suited to frontend development and mobile app design," from responsive layouts to navigation and interactive components. **Its distinctive result is that it brought hard eval numbers rather than vibes**: 28/31 on Vercel's Next.js Agent Evals at baseline, tying GPT-6 Astra (high), and 30/31 with `AGENTS.md`, tying the board's top score. **It is now identified: a post-trained Qwen foundation specialised for React Native, React and Next.js.** Not a variant or alias of another entry in this dataset.
- **Provider / access:** **Vercel AI Gateway** as `stealth/pixel-canary`, also surfaced in Cline's catalog (added SDK v0.0.87, **removed v0.0.89 on 2026-09-30**). **Successor: Callstack Apex**, directly as `apex` or `apex-20261001`, and through Vercel AI Gateway as `callstack/apex`.
- **Release / knowledge:** 2026-09-25 (Vercel changelog). **Preview ended 2026-10-01**; the developer has published no separate GA date for Apex. Knowledge cutoff not disclosed.
- **Context window:** **262,144 tokens total, 131,072 maximum output** within that total — both from Vercel's model catalog listing. No independent long-context measurement exists.
- **Modalities:** **text + image in, text out** per Vercel's catalog. Reasoning with four catalog settings (`none`, `low`, `medium`, `xhigh`) plus implicit prompt caching; **tool use supported**. Callstack's own Apex documentation is said to list **text input only**, which is a source conflict with the Gateway catalog and is recorded unresolved.
- **Pricing:** **$0 / $0 / $0 cached** on Vercel AI Gateway during the preview — verified in the catalog 2026-10-01. **Two hard caveats.** First, **the free preview has ended**: the successor **Apex costs $0.50 input / $0.20 cached input / $3.00 output per million tokens**, and `stealth/pixel-canary` no longer resolves reliably. Second, **zero-data-retention was not available** — Vercel stated explicitly that **prompts and responses may be retained for training or model improvement**. That is a real constraint for anything touching company code, and it applies to the free preview, not only to Apex.
- **Architecture:** **undisclosed weights.** Two independent lines of evidence place it in the **Qwen family**: a tokenizer study (AI時短ラボ, 2026-09-26) reporting **95/95 input-count matches using Qwen3.5-and-later vocabulary with older Qwen3 splitting rules**, against 89/95 for the stock modern tokenizer; and a reasoning-habits fingerprint (Stealth Models, 2026-09-29) in which **Qwen3.8 Flash is the closest match at 63.8/100 similarity**, ahead of MiniMax M3 (59.4), the GLM 5.3 variants (59.2–59.3) and `stealth/space-bunny-alpha` (53.5). **Benchmark performance strongly points to Qwen3.8 27B.** Similarity scores are similarity, not accuracy, and neither study names a developer on its own.

### Raw benchmarks found

**Next.js Agent Evals, Vercel, pass@4, leaderboard 2026-09-25** — the primary evidence:

| Model | Agent | Avg time | Baseline | With `AGENTS.md` |
|---|---|---|---|---|
| Claude Opus 5.5 (high) | Claude Code | 269.62s | 97% (30/31) | 97% (30/31) |
| GPT-6 Sol (high) | Codex | 285.70s | 97% (30/31) | 97% (30/31) |
| Grok 4.7 | OpenCode | 337.19s | 94% (29/31) | 94% (29/31) |
| **Pixel Canary** | **OpenCode** | **1,015.80s** | **90% (28/31)** | **97% (30/31)** |
| Gemini 3.8 Flash | OpenCode | 434.82s | 90% (28/31) | 97% (30/31) |
| GPT-6 Astra (high) | Codex | 251.89s | 90% (28/31) | 97% (30/31) |
| Kimi K3 | OpenCode | 352.34s | 84% (26/31) | 97% (30/31) |

- Tasks cover App Router migrations, data fetching, image and font optimization, caching, and view transitions. **The 1,015.80-second average is evaluation duration, not time to first token or suite runtime**, and one baseline prefetch task ended in a 900-second judge timeout with its other three attempts failing validation — the published 28/31 stands.
- **The "ties GPT-6 Astra" claim is narrowly true, not universal** — both rounded to 90% baseline and 97% with docs, but on different agent harnesses (OpenCode vs Codex).
- **Pixel Canary was the slowest model on the board: about 4× GPT-6 Astra and 3× Kimi K3**, while the board-topping Opus 5.5 finished in 269.62s with a success rate 7 points higher. Early OpenCode users independently described long generation and code-reading waits.

**Independent harness test — 15 runs, 5 `pallets/jinja` tasks on Command Code** (Fellipe Soares, 2026-09-27, annotated 2026-10-04):

- **Solved all 15 runs.** One hit the 20-minute timeout but had already written the fix, counted separately.
- **$0.0636 per task, against Space Bunny's $0.0622 on the same harness and tasks.**
- **518,188 total context at a 17% cache hit, against Space Bunny's 777,214 at 48%** — **33% less context sent, but much less use of the cache.**
- **The cache finding is a harness artefact, not a model property**: Command Code's `toWireSystem` marks only two fixed blocks (instructions, tool definitions) `cache_control: ephemeral`, so conversation history never enters the cache and the hit ceiling is the fixed block over total context. The same researcher measured Space Bunny at **92% cache on OpenCode**, so the 48%-vs-17% gap within Command Code reflects backend cache-marker handling on top of a low-by-design ceiling. **On the day of testing Pixel Canary appeared only in Command Code's catalog** — absent from Cline (458 models checked), OpenCode (82) and OpenRouter (458).

**StealthMark creative/visual suite (2026-09-26 to 2026-10-01):**

- **Overall 51.1/100, rank 9 of 37**; **General Intelligence 36.0/100**; **Visual Intelligence 63.0/100**. Five scored subjects; Pelican excluded as a benchmaxxing control.
- SVG art benchmark scores **74.6–77.6/100+** across runs, including a Beach scene and a Newton's Mirror physical-reasoning piece rated complexity 9/10.

### Normalized scores (1–100)

- **Tool use: 80/100.** *Revised down from 82.* The evidence is stronger than the previous version had and does not move the score much, because it is **narrow and now historical**. **30/31 with `AGENTS.md` on a real multi-file Next.js agentic run**, level with the board's top score; **all 15 runs solved** on an independent Jinja task set at a cost per task matching Space Bunny's; tool use enabled in Vercel's config. Deductions: **the model is no longer available**, **1,015.80s per task makes it a background-job model rather than an interactive one**, and the only evidence is **31 Next.js tasks plus 15 Jinja tasks** — one framework, one language ecosystem. The 28/31 → 30/31 improvement with `AGENTS.md` is a genuine and interesting finding: it responds well to bundled documentation.
- **Reasoning: 62/100.** *Revised down from 66.* **Still no GPQA, HLE, LCR, CritPt or Intelligence Index figure**, and this pass **lowers the ceiling rather than raising it**, because the identity is now known. **StealthMark General Intelligence reads 36.0/100**, the lowest of the three sub-scores by a wide margin. The reasoning-habits fingerprint places it closest to **Qwen3.8 Flash at 63.8/100 similarity** — a capable small model, not a frontier one — and the benchmark-performance analysis **strongly points to Qwen3.8 27B**. The previous version's inference, that the fingerprint "places Pixel Canary [in] the upper-middle of a field that does not include frontier models," was the right call and is now better supported.
- **Context window: 70/100.** *Revised down from 71.* **262,144 tokens total with 131,072 maximum output** — the methodology's 200K–500K tier, where the tier mapping alone yields a low-70s score. Held there because **no retrieval measurement exists at any length**, and because the model is no longer available to produce one. Unchanged in substance from the previous version.
- **Multimodal: 68/100.** *Revised up from 65.* **Text + image in, text out** per Vercel's catalog, with the methodology's "+image in = 60–70" band. Raised on new measured evidence: **StealthMark Visual Intelligence 63.0/100** and **SVG benchmark scores of 74.6–77.6** — this model draws, and draws well enough to be worth scoring separately from general intelligence. Not higher because the "+image in" band's ceiling is 70, **no MMMU, MMMU-Pro, DocVQA or CharXiv figure exists**, and there is a documented **source conflict** between Vercel's catalog (text and image) and Callstack's own Apex documentation (text only).
- **Coding: 82/100.** *Revised up from 80.* The strongest dimension, and the one the identity resolution reinforces: **a post-trained Qwen foundation specialised specifically for React Native, React and Next.js** is now confirmed, which is a direct explanation for **30/31 on Next.js Agent Evals with `AGENTS.md` — tying the board's top score alongside Claude Opus 5.5 and GPT-6 Sol** — and for the SVG suite. **15/15 on the independent Jinja battery** adds a second, independent confirmation at a cost per task matching Space Bunny's. Deductions: **1,015.80s per task is 4× the fastest model on the board**, which is a real cost in wall-clock even at $0; the evidence is **one framework**; and pass@4 scoring means the published numbers include up to four attempts per task.
- **Cost efficiency: 72/100.** *Revised down from 100 — the largest single move in this file, and entirely a fact about availability rather than about the model's merit.* The methodology's "$0 = 100" rule applied correctly during the preview, and the previous version applied it without adjustment. **But the free preview ended 2026-10-01**, and the successor **Callstack Apex costs $0.50 input / $0.20 cached input / $3.00 output per million tokens** — a full generation-plus of re-pricing on the same weights. `stealth/pixel-canary` was absent from the catalog by 2026-10-02 and Cline removed it on 2026-09-30. Scoring the successor rate rather than the dead preview rate gives 72: still cheap, no longer free, and **not on a price-per-task basis that the 1,015.80s duration makes attractive** — at three dollars per million output tokens, a seventeen-minute task is a meaningful bill. The other half of the caveat is unchanged and still applies to Apex's own availability: **zero-data-retention was not offered, and prompts and responses could be retained for training or model improvement.**
- **Overall Score: 72/100.** (80 + 62 + 70 + 68 + 82) / 5 = 362 / 5 = 72.4 → **72**, down from 73. The overall is nearly flat because **quality rose on two dimensions (coding +2, multimodal +3) and fell on three (reasoning −4, tool use −2, context −1)**, while the cost dimension — excluded from this average — fell 28 points. Best fit, and it is now a historical statement rather than a recommendation: **a zero-cost way to sample an unusually strong React/Next.js coding model on long background jobs** — App Router migrations, refactors, anything where a seventeen-minute wait is acceptable and where bundling the framework documentation via `AGENTS.md` is something you control. **It is gone.** If you want this checkpoint's capability, the successor is **Callstack Apex** — the same post-training, now at $0.50/$3.00 with a named developer — and it should be compared against **GPT-6 Sol and Claude Opus 5.5**, which beat it outright on both success rate and duration, before it is bought rather than borrowed. The pattern this entry illustrates is the clearest in the dataset: **a stealth model that produced real evidence while free, was identified as a post-trained variant of an existing open family rather than a new frontier system, and then priced like one.**

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (73 → **72**).
  **Vector Wire has no record for this model** — HTTP 404 on the model page, and absent
  from its index of 745 — so this pass used the launch material and the benchmark and
  identity literature.
  Sources: **Vercel changelog (2026-09-25)** — launch as `stealth/pixel-canary`, free for a
  limited stealth period, the **28/31 baseline and 30/31 with `AGENTS.md`** Next.js Agent
  Evals results, **pass@4** scoring, task coverage (App Router migrations, data fetching,
  image and font optimization, caching, view transitions), and the explicit statement that
  **zero-data-retention is not available and prompts/responses may be used for training or
  model improvement**; **Vercel's Next.js Agent Evals leaderboard (2026-09-25)** — the full
  seven-model table with average durations, showing **Pixel Canary slowest on the board at
  1,015.80s against Astra's 251.89s**, and the **900-second judge timeout** on the baseline
  prefetch task; **stealthmodels.com (accessed 2026-10-10)** — **identity resolved:
  Callstack revealed Pixel Canary as Apex on 2026-10-01**, Apex available as `apex` /
  `apex-20261001` / `callstack/apex`, **free preview ended 2026-10-01, Apex priced at $0.50
  input / $0.20 cached / $3.00 output**, **"Apex uses a Qwen foundation with post-training
  for React Native, React and Next.js,"** **tokenizer study 95/95 against Qwen3.5-and-later
  vocabulary** (AI時短ラボ, 2026-09-26), **reasoning-habits fingerprint with Qwen3.8 Flash
  closest at 63.8/100** (2026-09-29) and **benchmark performance strongly pointing to
  Qwen3.8 27B**, plus **absence from the catalog on 2026-10-02** and the old model URL
  redirecting; **StealthMark benchmark suite (2026-09-26 to 2026-10-01)** — overall
  **51.1/100 at rank 9/37, General Intelligence 36.0, Visual Intelligence 63.0**, SVG
  scores 74.6–77.6; **Fellipe Soares (2026-09-27, annotated 2026-10-04)** — **all 15 runs
  solved** on 5 `pallets/jinja` tasks under Command Code, **$0.0636/task against Space
  Bunny's $0.0622**, **518,188 context at 17% cache against 777,214 at 48%**, the finding
  that **Command Code marks only fixed instruction and tool blocks `cache_control:
  ephemeral`** so conversation history never caches, the **92% cache figure for Space Bunny
  on OpenCode** as the contrast, and the catalog-availability check (**absent from Cline
  458 models, OpenCode 82, OpenRouter 458**); **Frontier Now (2026-09-28)** and
  **aiidelist.com (2026-10-06)** for the Next.js table, the latency framing, the ZDR
  limitation, and the **Cline SDK v0.0.89 removal on 2026-09-30**.
  **Three things adjudicated explicitly.** First, **the "ties GPT-6 Astra" claim is
  qualified rather than accepted**: both models rounded to 90% baseline and 97% with
  `AGENTS.md`, but on different agent harnesses (OpenCode vs Codex), so it is a tie on one
  benchmark in one harness, not a general equivalence — and both were beaten outright by
  Claude Opus 5.5 and GPT-6 Sol on success rate *and* duration. Second, **the 17% cache
  hit rate is attributed to the harness, not the model**, on the strength of the
  `toWireSystem` source finding and the same researcher's 92% figure for Space Bunny on a
  different harness — a distinction the previous version did not have. Third, **the
  tokenizer and reasoning-habits similarity scores are similarity, not accuracy**, and
  neither identifies a developer alone; the identity claim rests on all three lines
  together — the tokenizer study, the fingerprint, and Callstack's own confirmation.
  **One status fact that drives the score: the free preview ended 2026-10-01 and the
  successor Apex is priced at $0.50/$3.00**, which is why Cost efficiency moves 28 points
  rather than the 100 the "$0 = 100" rule would have given during the preview. Scores are
  normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores,
  and cost efficiency is reported but excluded from the overall average.
- Future sources: add a new file next to this one, e.g. `apex.md`, using the same headings
  — **Callstack Apex is a distinct model with its own model page, its own pricing and its
  own documentation**, and `apex` / `apex-20261001` / `callstack/apex` should be scored as
  the live successor rather than folded into this historical record. The gaps most worth
  closing: **whether Apex retains the Next.js specialisation at paid rates**, and **any
  non-frontend benchmark at all** — every capability number here comes from one framework's
  eval suite plus a creative/visual suite.