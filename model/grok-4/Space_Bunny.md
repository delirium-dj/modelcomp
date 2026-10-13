# Grok 4 — findings by Space Bunny

- Source: SpaceXAI (`grok-4`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall is unchanged at 72, but almost every line inside it moved, and
> the two status changes matter as much as the numbers.** **Vector Wire now flags Grok 4
> `Deprecated`,** and it records the vendor as **SpaceXAI rather than xAI** — the model has
> moved on four generations to Grok 4.7. The evidence base is 54 results on 43 benchmarks
> with **19 independently verified**, and it cuts both ways: **the Artificial Analysis
> Intelligence Index is now a Verified 33.00** and **SimpleQA Verified reads 47.90%**,
> both far better than this file could previously demonstrate — against **ARC-AGI-2 at
> 15.97% (Verified)**, **CritPt 2.00%**, **FrontierMath Tier 4 at 2.08% (Verified)**, and
> **IMO 2025 at 1.90% and 0.00% on two separate Verified matharena rows**, which is close
> to the worst result recorded for any model in this dataset.

## Model card

- **Name:** Grok 4
- **Short description:** xAI's frontier reasoning model, released **2025-07-09/10**, trained with large-scale reinforcement learning on xAI's **Colossus** cluster (200,000 H100s, Memphis — xAI-confirmed) and shipped with **native, RL-trained tool use and real-time search across X and the web**. Not a variant or alias of another entry in this dataset. **Status as of 2026-10-13: `Deprecated`** per Vector Wire, with the vendor recorded as **SpaceXAI**; the live xAI line is now **Grok 4.1 → 4.3 → 4.6 → 4.7**, plus Grok 4 Fast, Grok 4.1 Fast and Grok 4.5.
- **Provider / access:** xAI API. Also available through OpenRouter and third-party gateways.
- **Release / knowledge:** released **2025-07-09** (API), recorded as **2025-07-10** by Artificial Analysis. Snapshot alias `grok-4-0709`. Knowledge cutoff **2024-12-31** — and this is the one figure where the model's real-time-search architecture partly compensates, since live retrieval bypasses the cutoff entirely for anything current-events-shaped.
- **IDs:** `grok-4`; `grok-4-0709`; effort and configuration aliases `grok-4 (high)`, `Grok 4 (Thinking)`, `grok 4 (0709)`, `grok 4 (specific prompt)`.
- **Context window:** **256,000 tokens**. **Max output is inconsistently reported**: 8,000 tokens (Awesome Agents, LLM Stats), 16,000 (Opper), 256,000 (modelbenchmark.io). The discrepancy is unresolved and recorded rather than smoothed.
- **Modalities:** **text and image in; text out** (xAI). Opper additionally lists **files and PDF input**, which is what lifts this model into the methodology's file/PDF band. Tools and structured output supported. **No audio or video input** documented.
- **Pricing (as of 2026-10-13):** **$3.00 / MTok input, $15.00 / MTok output**, **cached input $0.75** (75% off), automatic prompt caching. **Long-context surcharge: prompts above 128K tokens bill at $6.00 / $30.00 per MTok.** **Vector Wire's field-relative reading: "costs more than 88% of 328 priced models"** at a 3:1 blend. **Only one provider currently quotes a rate card** (Artificial Analysis, 2026-10-13), so independent pricing corroboration is thinner than for any other model in this batch.
- **Architecture:** proprietary. Parameter count not disclosed; third-party MoE-backbone estimates circulate and are not treated as specification.

### Raw benchmarks found

> Source ledger: 54 results / 43 benchmarks / 21 sources on 11 sites — **19 independently
> verified, 16 aggregator, 13 vendor cross-reference, 6 vendor-reported**. Vector Wire
> rates **Factuality "Capable, −18.3%"** — its single best capability — then **Long Context
> "Limited, −27.1%"**, **Reasoning "Limited, −30.3%"**, **Multimodal "Limited, −33.0%"**,
> **Instruction Following "Limited, −37.3%"**, **Agentic "Limited, −38.7%"**; and returns
> **"too few results yet" for Coding, Safety, Math and Multilingual.**

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 33.00 — Verified** (2026-07-03), against a 22.49 aggregator row on the current index. **This is a large upgrade on a model this file could previously not place against peers**, and it puts Grok 4 above GPT-5.1's Verified 25.00, GPT-5.4 mini's 24.07 and GPT-5.4 nano's 20.72, below GPT-5.2's Verified 42.00.
- **SimpleQA Verified: 47.90% — Verified** (Epoch, 2026-05-20) — **first measurement**, and the second-highest in this batch behind GPT-5.5 Pro's 64.50%.
- **AA-Omniscience: +2.10**, with **accuracy 40.48% and non-hallucination 35.51%**. **This split is the healthiest of any model examined in this batch** — nearly balanced, against OpenAI's GPT-5-family models where accuracy runs 25–53% against non-hallucination of 10–26%.
- **GPQA Diamond: 87.68%** (aggregator) / 87.50% vendor — confirms the 87.5% previously recorded.
- **SimpleBench: 60.50% — Verified** — first measurement, and a respectable one.
- **AIME 2025: 91.70%** without tools, **98.80%** with Python, **100.00%** at heavy budget (all cross-referenced). **HMMT 2025: 90.00%**; **HMMT November 2025: 88.33% — Verified** (matharena).
- **Humanity's Last Exam: 26.69%** (aggregator) against a **40.00%** vendor figure; cross-references give **25.40%** text-only without tools, **41.00%** with tools and **50.70%** at heavy budget. The aggregator figure is lower than the vendor one and is preferred.
- **CritPt: 2.00%** — among the lowest in the dataset.
- **ARC-AGI-2: 15.97% — Verified** (arcprize.org); **ARC-AGI-1: 66.67% — Verified**. Abstract reasoning is weak, on the same pattern as every other 2024-cutoff model here.
- **FrontierMath Tier 4: 2.08% — Verified** (Epoch) — very low.

Math — **the finding that most changes the picture**:

- **IMO 2025: 1.90% — Verified** (matharena.ai, 2026-09-02) and **IMO 2025: 0.00% — Verified** (matharena.ai, 2026-05-10). **Two independently verified near-zero results on the hardest mathematics competition in public use.** This sits in direct tension with AIME 2025 at 91.70% and HMMT at 88–90%, and the tension is real: AIME and HMMT are solvable with heavy sampling, formalisation and verification, while IMO problems are not. The read is that Grok 4's competition-maths strength is **procedure-assisted, not native**.
- **IMO-AnswerBench (no tools): 73.10%** (cross-referenced) — measures short-answer IMO problems rather than full proofs, which is why it is so much higher than the 1.90% full-paper figure.
- **matharena_visual_math_overall: 70.03% — Verified**.

Agent / tool use:

- **GDPval win rate: 24.59%** (aggregator, 2026-06-15) — **first measurement**, and low: this is a knowledge-work benchmark on which GPT-5.2 reads 48.34% and GPT-5.1 16.29%.
- **AA Agentic Index: 41.50** (aggregator) — mid-field.
- **τ²-Bench Telecom: 74.85%** (aggregator) — confirms.
- **IFBench: 53.67%** (aggregator) — weak, and Vector Wire rates Instruction Following only **"Limited, −37.3%."**
- **Terminal-Bench Hard: 37.88%** — confirms a mid-tier terminal agent.
- Vector Wire rates Agentic **"Limited, −38.7%"** on **1 of 7 benchmarks** — the thinnest agentic basis of any model in this batch.

Coding:

- **Aider Polyglot: 79.60% — Verified, high confidence** (aider.chat, 2026-08-29) — confirms.
- **LiveCodeBench: 79.00%** (vendor) — confirms.
- **SciCode: 45.72%** (aggregator) — first.
- **AA Coding Index: 40.49** (aggregator) — mid-field.
- **SWE-bench Verified 72.5–75%** from the previous version's research stands; **it does not appear on the current aggregator record**, and Vector Wire returns **"too few results yet" for Coding (0 of 10 benchmarks)**. The coding score therefore rests substantially on figures this pass could not corroborate.

Long context:

- **AA-LCR v1.1: 68.00%** (aggregator, Reasoning) — confirms the 68% the previous version used.
- No MRCR, RULER or GraphWalks measurement.

Vision / multimodal:

- **MMMU-Pro: 68.84%** (aggregator, Reasoning) — first.
- **LMArena Vision Elo: 1210.14 — Verified** (2026-08-25) and **1182 — Verified** (2026-05-01) — first, and mid-range.
- **matharena_visual_math_overall 70.03% (Verified)** — see above.

Safety — **one bad row in an otherwise clean block** (all Verified, snapshot 0709):

- **HarmBench 39.69%** — very low, and by far the weakest safety figure recorded for any model in this batch. **anthropic_red_team 95.65**, bbq 93.69, simple_safety_tests 92.21, **XSTest 96.61**, **AIR-Bench 2024 44.38** (also low).
- Safety is not a scored dimension, but a HarmBench refusal rate below 40% is worth naming explicitly.

### Normalized scores (1–100)

- **Tool use: 58/100.** *Revised down from 62.* The previous version's score rested on **native RL-trained tool use with real-time X and web search baked into training** — which remains a genuine architectural advantage over function-call wrappers — plus **τ²-Bench Telecom 74.85%**. What the new record adds is mostly weaker: **GDPval win rate 24.59%** on real professional knowledge work, **IFBench 53.67%**, **Terminal-Bench Hard 37.88%**. The strongest structural point against the old score is that **Vector Wire rates Agentic "Limited, −38.7%" on 1 of 7 benchmarks** — the thinnest agentic basis of any model in this batch — and **AA Agentic Index 41.50** is mid-field. Real-time X search is a real capability that no API-only competitor replicates, and it is what the model is for; sustained multi-step agentic reliability is not something the evidence supports.
- **Reasoning: 80/100.** *Revised up from 78.* The previous version scored this as "strong and specifically shaped," which remains exactly right, but the model can now be **placed against peers** for the first time. **AA Intelligence Index 33.00 (Verified)** is the anchor: above GPT-5.1, GPT-5.4 mini and GPT-5.4 nano, below GPT-5.2. **SimpleQA Verified 47.90%**, **SimpleBench 60.50% (Verified)**, **GPQA 87.68%**, **AIME 2025 91.70%**, **HMMT November 2025 88.33% (Verified)** and — the item most worth noting for a model with live search — **AA-Omniscience at +2.10 with 40.48% accuracy against 35.51% non-hallucination**, the most balanced knowledge profile in this batch. Held at 80 by four hard floors: **ARC-AGI-2 15.97% (Verified)**, **CritPt 2.00%**, **HLE 26.69%** on the aggregator, and **FrontierMath Tier 4 2.08% (Verified)**.
- **Context window: 74/100.** *Unchanged.* **256,000 tokens** with **AA-LCR v1.1 at 68.00%**, the methodology's 200K–500K band. Unchanged because nothing new arrived: no MRCR, no RULER, no GraphWalks, and **Vector Wire rates Long Context "Limited, −27.1%"**. The deductions the previous version documented still apply — the **above-128K surcharge at $6.00/$30.00** halves the effective value of the window's upper half, and the **inconsistent max-output reporting** (8K / 16K / 256K across trackers) remains unresolved.
- **Multimodal: 74/100.** *Revised up from 72.* **Text, image and (per Opper) file/PDF input; text out.** The old score was near the floor of the "+video/PDF in = 75–90" band on the strength of documented file and PDF input alone, with no benchmark. There is now measured support: **MMMU-Pro 68.84%**, **matharena_visual_math_overall 70.03% (Verified)**, and **two Verified LMArena Vision Elo readings at 1210.14 and 1182**. Not scored above 74 because **no audio or video input is documented**, so the methodology's video band is only partly reachable, and because the vision Elo readings are mid-range rather than strong.
- **Coding: 74/100.** *Revised down from 76.* **Aider Polyglot 79.60% (Verified)** and **LiveCodeBench 79.00%** confirm the good rows, and **SWE-bench Verified 72.5–75%** from prior research stands as a level-with-GPT-5 result. What pulls it down is that **the SWE-bench figure could not be corroborated on the current aggregator record**, **Vector Wire returns "too few results yet" for Coding across all 10 benchmarks**, and the rows that *are* on record are middling: **SciCode 45.72%**, **Terminal-Bench Hard 37.88%**, **AA Coding Index 40.49**. Competent at shaped coding; no evidence of frontier repository-scale work.
- **Cost efficiency: 52/100.** *Revised down from 62.* Unchanged rate card at **$3.00 / $15.00** with a **$0.75** automatic cache discount, but three things now count against it that did not before: **"costs more than 88% of 328 priced models"** at a 3:1 blend; a **`Deprecated`** label, superseded by four generations of Grok; and **only one provider quoting a rate card**, the thinnest pricing corroboration in this batch. The previous version's genuine credits — 5× cheaper than Claude Opus 4.6 on both input and output at comparable SWE-bench, and a real automatic 75% cache discount — are not contradicted by anything new, but they are credits for a retired model at an above-median price.
- **Overall Score: 72/100.** (58 + 80 + 74 + 74 + 74) / 5 = 360 / 5 = **72.0 → 72**, unchanged. The flat overall hides the largest internal reshuffle of any file in this batch: **tool use −4, cost −10, reasoning +2, multimodal +2, coding −2**. Best fit, and it is narrower than it was: **search-grounded reasoning where recency matters and the cost of a wrong answer is low** — live-data analysis, X/Twitter-signal research, competition mathematics with heavy tooling, and graduate-level science QA. **Not** a fit for unattended agentic work (**GDPval 24.59%, Terminal-Bench Hard 37.88%, one agentic benchmark on record**), for proof-grade mathematics (**IMO 2025 at 1.90% and 0.00%, both Verified, against AIME at 91.70%**), for abstract reasoning (**ARC-AGI-2 15.97%**), or for anything where **HarmBench at 39.69%** matters. And it is **deprecated** — Grok 4.7 is the live model.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (72 → **72**, flat, with
  large internal movement).
  New evidence is concentrated in **Vector Wire's Grok 4 record**, fetched 2026-10-13:
  **54 results on 43 benchmarks from 21 sources on 11 sites — 19 independently verified,
  16 aggregator, 13 vendor cross-reference, 6 vendor-reported, latest 2026-10-12** —
  supplying the **`Deprecated` status flag**, the **SpaceXAI** vendor rename, the
  single-provider pricing note, and the per-capability verdicts (**Factuality "Capable,
  −18.3%"**, five "Limited", four unrated).
  Load-bearing figures: **AA Intelligence Index 33.00 (Verified)**, **SimpleQA Verified
  47.90% (Verified, Epoch)**, **AA-Omniscience +2.10** with accuracy 40.48% against
  non-hallucination 35.51%, **IMO 2025 1.90% and 0.00% (both Verified, matharena)**,
  **FrontierMath Tier 4 2.08% (Verified)**, **ARC-AGI-2 15.97% and ARC-AGI-1 66.67% (both
  Verified)**, **CritPt 2.00%**, **HLE 26.69% aggregator against 40.00% vendor**,
  **SimpleBench 60.50% (Verified)**, **GPQA Diamond 87.68%**, **AIME 2025 91.70%**,
  **HMMT November 2025 88.33% (Verified)**, **GDPval win rate 24.59%**,
  **AA Agentic Index 41.50**, **IFBench 53.67%**, **τ²-Bench Telecom 74.85%**,
  **Terminal-Bench Hard 37.88%**, **SciCode 45.72%**, **AA Coding Index 40.49**,
  **Aider Polyglot 79.60% (Verified)**, **LiveCodeBench 79.00%**, **AA-LCR 68.00%**,
  **MMMU-Pro 68.84%**, **two Verified LMArena Vision Elo readings (1210.14 / 1182)**,
  **matharena_visual_math_overall 70.03% (Verified)**, **IMO-AnswerBench 73.10%**, and the
  **Verified safety block including HarmBench 39.69%**, XSTest 96.61, simple_safety_tests
  92.21, bbq 93.69, anthropic_red_team 95.65 and AIR-Bench 2024 44.38.
  **Three conflicts or anomalies adjudicated explicitly.** First: **Humanity's Last Exam —
  26.69% aggregator against a 40.00% vendor figure**, with cross-references at 25.40%
  text-only-no-tools and 41.00% with tools; the aggregator figure is preferred and the
  spread is attributed to tool access rather than averaged away. Second: **AIME 2025 at
  91.70% against IMO 2025 at 1.90% and 0.00%, all Verified** — not a contradiction but a
  sharp capability boundary, since AIME is solvable with heavy sampling and formalisation
  while IMO problems are not; the read recorded is that Grok 4's competition-maths strength
  is **procedure-assisted, not native**, and **IMO-AnswerBench's 73.10%** is consistent
  with that since it measures short answers rather than proofs. Third: **SWE-bench Verified
  72.5–75%, carried from this file's 2026-10-01 research, could not be corroborated** on the
  current aggregator record and Vector Wire returns "too few results yet" for Coding across
  all 10 benchmarks; the figure is retained and the coding score is reduced to reflect that
  it now rests partly on uncorroborated data. Scores are normalized 1–100 interpretations
  per `model-comparison.md`, not official vendor scores, and cost efficiency is reported
  but excluded from the overall average.
- Future sources: add a new file next to this one, e.g. `Grok_4_7.md`, using the same
  headings — **Grok 4 is deprecated and superseded by Grok 4.1 → 4.3 → 4.6 → 4.7**, each a
  distinct model with its own record, and **Grok 4 Fast / Grok 4.1 Fast / Grok 4.5** are
  separate entries. An **independent SWE-bench Verified reading** and any **long-context
  retrieval measurement beyond AA-LCR** are the two gaps most worth closing here.