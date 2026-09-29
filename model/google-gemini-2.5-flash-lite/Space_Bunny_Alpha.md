# Google Gemini 2.5 Flash-Lite (provider-qualified route) — findings by Space Bunny Alpha

- Source: Google DeepMind (`gemini-2.5-flash-lite`; canonical `google/gemini-2.5-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Folder note (flagging, not acting):** this folder is
> `google-gemini-2.5-flash-lite` — the provider-qualified form of the same underlying
> model as the sibling `gemini-2.5-flash-lite/` folder. It corresponds to real published
> IDs: `google/gemini-2.5-flash-lite` (models.dev / themodelbeat canonical form) and
> `google.gemini-2.5-flash-lite` (Oracle OCI Generative AI). Per the slug convention in
> `model/README.md`, a hyphen-versioned folder is normally a duplicate of the dotted one,
> and `pnpm sync` fails loudly on such pairs. I have **not** moved, merged or deleted
> anything — folders are permanent under `RULES.md` — but the orchestrator should decide
> whether this is a deliberate provider-qualified alias or a slug collision, and the
> findings below are for **the model**, so they hold under either reading.

> **Re-validation 2026-09-29 — what changed.** The intelligence numbers are unmoved
> and the **Overall is unchanged at 57.8**, but the *lifecycle* facts moved materially:
> **(1) Google withdrew the 2026-10-16 shutdown date.** The previous pass carried a
> caveat that "one aggregator states Google has scheduled Gemini API retirement for
> 2026-10-16." Google's own deprecations page now reads **"No shutdown date announced"**
> for `gemini-2.5-flash-lite`, and AI Change Watch records that Google **withdrew** the
> 2026-10-16 date on **2026-08-03** after having published it on 2026-07-28. The model is
> also listed under **current** models on Google's models page, not under "Previous
> models." **Correction: there is no imminent retirement to migrate against.**
> **(2) Output speed drifted 283.6 → 267.5 t/s** and TTFT 0.30 → 0.31 s.
> **(3) Release date reconciled:** Google's deprecations page gives **2025-07-22**, which
> the previous pass recorded only as an aggregator date; AA gives 2025-06-17.

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's smallest and cheapest 2.5-family model, built for
  at-scale, high-frequency, low-complexity work — classification, extraction,
  summarization — where latency and unit cost dominate. It is a genuine multimodal
  model (text, image, video, audio, PDF in) at a 1M context and ~268 output
  tokens/second, but on reasoning, agentic and coding it sits near the bottom of every
  field. **Lifecycle status is ambiguous and was materially revised on this pass:** the
  `preview-09-2025` snapshot **was** shut down 2026-03-31 with migration advised to
  Gemini 3.1 Flash-Lite, and Artificial Analysis still carries a **"this model is
  deprecated"** banner on the page — but the **stable** `gemini-2.5-flash-lite` has **no
  announced shutdown date**, and Google withdrew the previously published 2026-10-16
  one. See "Lifecycle" below.
- **Lifecycle (re-checked 2026-09-29, this is the material change):**
  - Google's official deprecations page, table row: `gemini-2.5-flash-lite`,
    **release date July 22, 2025**, **"No shutdown date announced"**, no recommended
    replacement named in that row.
  - `gemini-2.5-flash-lite-preview-09-2025` — release 2025-09-25, **shutdown
    2026-03-31**, replacement `gemini-3.1-flash-lite`. This is the one hard retirement,
    and it applies to the **preview snapshot only**, not to the stable model.
  - Google previously published a 2026-10-16 shutdown date for the stable model and then
    **withdrew it on 2026-08-03**. Aggregators still show the stale 2026-10-16 date;
    Google's own page no longer does.
  - Google lists `gemini-2.5-flash-lite` under **current** models ("The fastest and most
    budget-friendly multimodal model in the 2.5 family"), while genuinely shut-down
    models — Gemini 2.0 Flash, Gemini 2.0 Flash-Lite, Gemini 3.1 Flash-Lite Preview,
    Gemini 3 Pro Preview — sit in a separate "Previous models" section.
  - **Artificial Analysis** still shows **"This model is deprecated"** on its page, but
    its named successor is odd: it points at **"Gemini 2.5 Flash-Lite Preview (Sep '25)"**
    — the snapshot that Google *did* shut down on 2026-03-31. Treat the AA deprecation
    banner as a stale label on a legacy entry rather than as a live retirement notice.
  - **Practical reading:** still callable, still current in Google's catalogue, and no
    hard deadline to plan against — but every independent and vendor-side signal points
  new work at **Gemini 3.1 Flash-Lite**, which is the same price class with materially
  better scores. Plan the migration; there is simply no date forcing it.
- **Provider / access:** Google Gemini API (`gemini-2.5-flash-lite`, stable), Google
  Vertex AI, and third-party clouds under the provider-qualified name — e.g. Oracle OCI
  Generative AI as `google.gemini-2.5-flash-lite`. Google-native request/response schema.
  Also reachable via aggregators (Requesty, OpenRouter).
- **Release / knowledge:** released **2025-06-17** (Artificial Analysis) / GA **2025-07-22**
  (Google's own deprecations page — **new this pass, previously only an aggregator
  date**; the June/July spread is vendor-announcement vs. GA-snapshot). Knowledge cutoff
  **January 2025** (both Google and Artificial Analysis).
- **IDs:** `gemini-2.5-flash-lite` (Gemini API / Vertex); `google/gemini-2.5-flash-lite`
  (canonical provider-qualified ID); `google.gemini-2.5-flash-lite` (OCI).
  `gemini-2.5-flash-lite-preview-09-2025` — **shut down 2026-03-31**. No Free-tier Zen ID.
- **Context window:** **1,048,576 input tokens / 65,536 output tokens** (Google Gemini
  API model page, exact figures; Artificial Analysis and Vertex both list 1M / ~64–66K).
- **Modalities:** **text, image, video, audio and PDF in; text out.** AA's spec table
  independently records "text, image, speech, and video" input and answers yes to
  multimodal. Thinking supported. Function calling, structured outputs, code execution,
  file search, search grounding, Google Maps grounding, URL context, caching, Batch API
  and Flex inference all supported. **Not supported: audio generation, image generation,
  and the Live API** — so it is a multimodal-in / text-out model, and the correct routing
  home for real-time voice is `models_voice/`, not here.
- **Pricing (as of 2026-09-29):** **$0.10 / 1M input, $0.40 / 1M output** (Google list
  price, confirmed unchanged by Artificial Analysis on 2026-09-29 and by Vertex rates).
  Cached input $0.01/1M (a 90% cache discount per Artificial Analysis; Vertex lists
  $0.18 cache-write). Artificial Analysis puts the blended 7:2:1 cache/input/output rate
  at **$0.07/1M** — among the cheapest capable APIs in existence. No free tier; no
  privacy caveat needed beyond noting Vertex AI's "not used for training" data terms.
- **Architecture:** proprietary. Google has **not** disclosed a parameter count or
  architecture for this model. (One aggregator mislabels it "Open Source" — it is not;
  Artificial Analysis and Google both list it as proprietary with no public weights.)

### Raw benchmarks found

> Artificial Analysis figures below are the **v4.3.2** composite (10 evals) read off
> `artificialanalysis.ai/models/gemini-2-5-flash-lite` on 2026-09-29.

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **7** (estimated) — **#56 of 75** in
  class, "below average" against a class median of 9; the page also shows **21 of 679**
  models evaluated on v4.3.2. **Unchanged from the previous pass.** BenchmarkList carries
  a higher **11.41** (#234/397), evidently a different AA index version — not used here.
- Terminal-Bench 2.1: **no verified public score found.** The related **Terminal-Bench
  Hard** subset (Artificial Analysis) reads **4.5%** — rank 207/326, 37th percentile.
- Tau3-Banking / Tau2-Bench: **τ²-bench 18.4%** (Model Beat / Epoch AI, "tool-agent-user
  reliability"); **Tau2-Bench Telecom 19.0%** (BenchmarkList, rank 5/5, 50th percentile).
  No τ³-Banking row found.
- GDPval-AA: **no verified public score found.**
- Claw-Eval / ClawProBench: **no verified public score found.**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found.**
- **BFCL-V4 36.9%** (rank 55/103) and **BFCL_v3_MultiTurn 13.5%** (rank 49/87) —
  BenchmarkList. The multi-turn tool-use number is the damning one.
- **Epoch AI Agentic Index: 0.0, 0th percentile** (Model Beat).
- Other agentic: VerdictBench **52.9%** (39th pct, rank 12/19), OmniGAIA **8.6%**,
  Omni-DeepSearch **2.2%** (BenchmarkList).

Reasoning / knowledge:

- GPQA Diamond: **62.5%** (BenchmarkList, rank 235/443, 47th pct; also Requesty's Vertex
  card cites 62.5% and themodelbeat/Epoch cites 62.5%). A separate aggregator reports
  plain **GPQA 64.6%** — a different, easier variant, not Diamond.
- HLE: **6.8%** (BenchmarkList, rank 218/446; Model Beat / Epoch also 6.8%, with a
  changelog entry recording an improvement from 6.4% to 6.8% on 2026-08-06). One
  aggregator lists 5.1% for a different HLE variant.
- LCR / MLCR: **no verified public score found** (no AA-LCR row for this model).
- CritPt: **no verified public score found** for this model.
- **Epoch AI Intelligence Index 3.0, 3rd percentile.** BenchLM has no page for this model.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** for this
  model. The one factuality row that does exist is **Vectara HHEM 96.7%, rank 3/85**
  (BenchmarkList) — a strong *consistency* score, which measures whether answers stick to
  their source rather than whether they are correct, and should not be read as an
  anti-hallucination result. **Facts Grounding 84.1%** is the other grounding row.
- Other knowledge: MMLU-Pro **75.9%** (#156/312), Global-MMLU-Lite **81.1%**,
  WeirdML **35.2%**, AIME 2024/2025 **53.3%**,
  **CAIS Text Capabilities Index 5.1 — 0th percentile of 42** (BenchmarkList), which is
  the sharpest single signal that this model is not a text-capability contender.

Coding:

- SWE-bench Verified / SWE-Pro: **SWE-bench Verified 31.6%** (anotherwrapper aggregator,
  single source). No SWE-bench Pro row.
- LiveCodeBench: **59.3%** (Model Beat / Epoch AI, "contamination-free coding") vs
  **33.7%** in anotherwrapper — a large disagreement between sources, very likely
  different LiveCodeBench versions and/or thinking-budget settings; both are listed and
  neither is treated as settled.
- SciCode / AA-SciCode: **19.3%** (rank 336/439, 24th percentile — BenchmarkList /
  Epoch). Near the floor of the field.
- Vibe Code Bench: **no verified public score found.**
- DeepSWE / Coding Index / other: **Epoch AI Coding Index 6.0 — 6th percentile**
  (Model Beat). Aider/Alder Polyglot **26.7%** (anotherwrapper). Terminal-Bench Hard
  **4.5%**.

Long context:

- **No long-context retrieval reported at window length.** The 1M limit is documented, but
  there is **no MRCR, RULER, GraphWalks, or AA-LCR measurement** for this model. The only
  long-context-family row found is **LisanBench 122.33** (rank 100/126, 21st pct) on
  BenchmarkList's "Long Context" grouping — a weak reading, and LisanBench is not a
  needle-retrieval-at-length test. The 1M tier is therefore scored on the documented limit
  with an explicit penalty for the missing retrieval evidence.

Performance (its actual selling point):

- **267.5 output tokens/second, #2 of 75** in its class; **time to first token 0.31 s**
  against a class median of 1.84 s (Artificial Analysis, 2026-09-29). AA calls it "well
  above average" for speed. ⬇ **Both figures are slightly lower than the 283.6 t/s and
  0.30 s recorded on 2026-09-27** — ordinary measurement drift, and it does not change
  the read. This is the one axis where the model is elite, and it is the reason the model
  exists.

### Normalized scores (1–100)

> Every score below is **unchanged**. The lifecycle correction changes what a buyer
> should *do* about this model, not how good it is.

- **Tool use: 30/100.** The agentic evidence is the weakest in this dataset's mid-field:
  Terminal-Bench Hard 4.5%, τ²-bench 18.4%, Tau2-Bench Telecom 19.0%, BFCL_v3_MultiTurn
  13.5%, VerdictBench 52.9%, Omni-DeepSearch 2.2%, and an **Epoch AI Agentic Index of
  0.0 at the 0th percentile**. BFCL-V4 36.9% and function-calling/structured-output
  support keep it off the floor — it can *emit* a valid tool call — but nothing suggests
  it can *drive* a multi-step agent loop.
- **Reasoning: 45/100.** GPQA Diamond 62.5% and MMLU-Pro 75.9% are respectable, and the
  AIME 53.3% is mid; everything else pulls down. The methodology's mid band assumes an
  Intelligence Index of 20–35, and this model's is **7** on Artificial Analysis v4.3.2
  and **3.0 (3rd percentile)** on Epoch AI — below the band, not in it. HLE at 6.8%,
  WeirdML 35.2%, and a **CAIS Text Capabilities Index of 5.1 at the 0th percentile of 42**
  confirm the ceiling is low. Thinking is supported, so 45 rather than lower.
- **Context window: 92/100.** A documented **1,048,576-token** input limit with 65,536
  output places it in the methodology's top tier (≥1M = 95–100), and Google's own docs
  confirm the exact figure rather than a rounded claim. It is docked below the ceiling
  precisely because **no retrieval-at-length measurement exists** — the methodology's
  "100 if ≥98% retrieval at 512K+" condition is unverified, LisanBench is 21st percentile,
  and a 1M window on a model with a 3.0 intelligence index is capacity, not competence.
- **Multimodal: 90/100.** Text, image, **video, audio and PDF** in with text out is the
  methodology's "+audio in or any non-text out" tier (90–100), and it is genuinely
  multimodal rather than text-only-with-exceptions. Held at the bottom of that tier
  because output is text-only — **audio generation, image generation and the Live API are
  all explicitly unsupported** — and no video- or audio-input benchmark row was published
  for this model to verify the capability with numbers.
- **Coding: 32/100.** SWE-bench Verified 31.6%, SciCode 19.3% (24th pct), Aider Polyglot
  26.7%, Terminal-Bench Hard 4.5% and an **Epoch Coding Index of 6.0 at the 6th
  percentile** are floor-adjacent across the board. The one genuine uncertainty is
  LiveCodeBench (59.3% vs 33.7% across sources); even taking the higher figure, no coding
  dimension lifts this above the mid-30s. It is a router/extractor, not a coder.
- **Cost efficiency: 98/100.** **$0.10 in / $0.40 out per 1M**, a 90% cached-input
  discount to $0.01, and a **$0.07/1M blended rate** — the methodology's
  "~$0.10/$0.20 = 97–99" band, reached on the output leg too, and re-confirmed at these
  exact rates on 2026-09-29. Only a genuinely $0 tier would score higher, and there is no
  free tier here.
- **Overall Score: 57.8/100.** *(unchanged)* (30 + 45 + 92 + 90 + 32) / 5 = 289 / 5 =
  57.8 — the clearest cost/context/multimodal-vs-capability trade in the dataset, and
  best read as a profile rather than a ranking. At $0.07/1M blended with a 1M window,
  ~268 tok/s and 0.31 s TTFT, nothing else here is better for high-volume
  classification, extraction, routing and summarization. Nothing else here is worse at
  reasoning, agentic work or code — the 0th-percentile agentic and 6th-percentile coding
  readings mean it must never be the model that plans or writes. **What changed on this
  pass is the migration advice, not the score:** the previous report told buyers to
  "verify against Google's own deprecation notices before committing a production
  migration," having seen an aggregator's 2026-10-16 date. That check has now been done
  — **Google withdrew the date on 2026-08-03 and publishes no shutdown date**, and the
  model is listed as current. There is no deadline. Google and AA nonetheless both steer
  new work to **Gemini 3.1 Flash-Lite** (same price class, materially better scores; note
  the 3.1 *Preview* snapshot has itself now been shut down), so the migration is still
  the right call, just an unhurried one.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research (Google Gemini API model documentation, Google's
  official deprecations and models pages, Artificial Analysis model page and Intelligence
  Index v4.3.2 methodology, AI Change Watch's record of the withdrawn shutdown date,
  BenchmarkList model page and benchmark leaderboards, Model Beat / Epoch AI standardized
  evaluations, Requesty Vertex provider card, anotherwrapper aggregator for
  SWE-bench/LiveCodeBench/Aider). Scores are normalized 1–100 interpretations, not
  official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2_5_FL_Recheck.md`, using
  the same headings.
