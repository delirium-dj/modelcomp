# GPT-5.3-Codex — findings by Space Bunny

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 80 → 82, and almost all of the gain comes from
> evidence arriving for dimensions the previous version had to score blind.** The
> 2026-10-01 file recorded **no long-context retrieval measurement at all**, **no vision
> benchmark of any kind**, and **exactly one reasoning figure** — and it said so
> explicitly in each case. All three gaps have since closed: **AA-LCR 83.33%** (and
> Vector Wire rates Long Context **"Strong — only 5.9% behind the leader"**),
> **MMMU-Pro 78.50%**, and a reasoning block of **GPQA 91.52%, HLE 42.49%, CritPt 16.86%,
> IFBench 75.37%, AA Intelligence Index 32.50 and AA-Omniscience +10.87**. The evidence
> base is still thin — **28 results on 25 benchmarks, only 5 independently verified** — and
> **Vector Wire now flags the model `Deprecated`**, which is what drives cost efficiency
> down 6 points.

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's most capable agentic coding model, released 2026-02-05. It merges the frontier coding performance of **GPT-5.2-Codex** with the broader reasoning and professional-knowledge capability of **GPT-5.2** into one model, and runs about **25% faster**. It is tuned for long-horizon software-engineering work — research, tool use, terminal commands, repository search, multi-step debugging — and lets a user **steer and interact with it mid-task without losing context**. OpenAI notes it was partially used in its own creation. Not a variant or alias of another entry in this dataset; **GPT-5.3-Codex-Spark is a separate model** (a ChatGPT Pro research preview, not API-accessible) and is not scored here. **Status as of 2026-10-13: `Deprecated`** per Vector Wire, superseded by GPT-5.4 and GPT-5.5 — though both Artificial Analysis and OpenAI-via-OpenRouter still quote a live rate card dated 2026-10-13.
- **Provider / access:** OpenAI Codex surface — **app, CLI, IDE extension and web** — for paid ChatGPT plans. **GitHub Copilot: generally available from 2026-02-09.** OpenAI API model ID `gpt-5.3-codex`, with published pricing; also on OpenRouter and Vercel AI Gateway at identical rates.
- **Release / knowledge:** released **2026-02-05**. Knowledge cutoff **2025-08-31**.
- **IDs:** `gpt-5.3-codex` (OpenAI API). OpenRouter: `openai/gpt-5.3-codex`. Sibling, distinct model: `gpt-5.3-codex-spark`. Effort setting on record: `xhigh`, under the aliases `gpt-5.3-codex thinking (xhigh)`, `gpt-5.3 codex (xhigh)`, `gpt codex 5.3-xhigh` and `gpt-5.3-codex (codex-harness)` — the last of which confirms the harness under which the agentic numbers were produced.
- **Context window:** **400,000 tokens input, 128,000 tokens max output** (OpenAI developer docs).
- **Modalities:** **text and image in; text out.** Reasoning: four effort settings, **`low` / `medium` / `high` / `xhigh`**; every published figure is `xhigh`. Streaming, function calling and structured outputs supported. **Native context compaction** is the mechanism behind the long-horizon and token-efficiency claims — and now, with AA-LCR on the record, behind a measured retrieval capability too.
- **Pricing (as of 2026-10-13):** **$1.75 / MTok input, $14.00 / MTok output**, cached input **$0.175**. Confirmed identical at Artificial Analysis and OpenAI-via-OpenRouter on 2026-10-13. **Vector Wire's field-relative reading: "costs more than 87% of 328 priced models"** — tied with GPT-5.2 for the most expensive model examined in this batch. No free tier. This is **$0.50 / $4.00 more than GPT-5.2-Codex's $1.25 / $10.00** at launch.
- **Architecture:** proprietary. Parameter count not disclosed.

### Raw benchmarks found

> Source ledger: **28 results on 25 benchmarks from 6 sources on 6 sites — only 5
> independently verified, 16 aggregator, 3 vendor cross-reference, 4 vendor-reported**.
> Artificial Analysis alone supplies 16 of the 28. This is the thinnest verified record of
> any model in this batch, and it should temper every verdict below. Vector Wire rates
> **Long Context "Strong, −5.9%"**, **Reasoning "Capable, −17.5%"** and **Instruction
> Following "Capable, −24.4%"**, then **Coding "Limited, −25.6%"**, **Multimodal
> "Limited, −26.1%"**, **Factuality "Limited, −31.5%"**, **Agentic "Limited, −34.6%"**;
> **Safety, Math and Multilingual return "too few results yet."**

Reasoning / knowledge — **the previous version's single-anchor problem is resolved**:

- **GPQA Diamond: 91.52%** (xhigh) — confirms the 92.6% self-reported figure, and clears the methodology's 90% frontier threshold on an aggregator measurement rather than a self-report.
- **Humanity's Last Exam: 42.49%** (xhigh) — **first measurement in the file**, and the highest HLE recorded for any model in this batch (GPT-5.2 reads 37.67%, GPT-5.1 28.50%, GPT-5 nano 9.50%).
- **CritPt: 16.86%** (xhigh) — **first measurement**, and likewise the highest in the batch (GPT-5.2 11.55%, GPT-5.1 4.86%, GPT-5 nano 0.00%).
- **Artificial Analysis Intelligence Index: 32.50** (xhigh) — **first measurement**. Notably **below GPT-5.2's 42.00 (Verified, x-high) on the same index**, which is consistent with a coding-specialised checkpoint trading general reasoning breadth for terminal competence.
- **AA-Omniscience: +10.87** — **first measurement**, and the only positive Omniscience reading across the four GPT-5-family models in this batch.
- **IFBench: 75.37%** (xhigh) — first.
- **AA-Omniscience accuracy 52.88% against non-hallucination 10.82%.** The split is extreme and is the most important caveat in this section: **when it knows an answer it is right more often than any other model here, and when it does not, it is confidently wrong roughly nine times in ten.**
- AIME, FrontierMath, ARC-AGI, SimpleQA, SimpleBench: still **no score found** for this checkpoint. GPT-5.2's figures are **not** transferred.

Agent / tool use:

- **OSWorld-Verified: 64.70%** (vendor) — confirms, against GPT-5.2-Codex's 38.2%.
- **GDPval win rate: 48.97%** (xhigh) — **first like-for-like measurement**. The previous version's **70.9%** was a *wins-or-ties* vendor figure; the two are different metrics, both are recorded, and the win rate is used for scoring.
- **τ²-Bench Telecom: 85.96%** (xhigh) — first, and strong.
- **AA Agentic Index: 60.54** (xhigh) — first, and at the same level as GPT-5.2's 60.20 at xhigh.
- **METR autonomy (all Verified): `swaa` 99.49%, `hcast` 75.64%, `re_bench` 25.00%.** New. The `swaa` result matches GPT-5.2's 99.62%; **`re_bench` at 25.00% is well below GPT-5.2's 35.00%**, which is a specific and reproducible weakness on real-world software-engineering tasks.
- **HiL-Bench: 4.33% — Verified** (Scale Labs, 2026-10-12) — new, and the weakest single figure anywhere in this file.
- **Terminal-Bench 2.0: 77.30% (vendor) against 64.70% (cross-referenced, DeepMind, xhigh)** — a **12.6-point conflict on the same benchmark and effort setting**, recorded rather than averaged. **Terminal-Bench Hard: 53.03%** (xhigh, aggregator) — a different and lower benchmark, not comparable to the 2.0 numbers.
- Terminal-Bench 2.1 at 79.1% under the owner-leaderboard Codex CLI protocol, τ-bench 77.8%, SWE-Lancer IC Diamond 81.4% and Cybersecurity CTF 77.6% stand from the previous version.

Coding:

- **SWE-bench Pro (public, 731 tasks): 56.80%** — vendor, and cross-referenced at the same figure by DeepMind (2026-05-01). **No independently verified figure exists for this checkpoint**, which is a meaningful contrast with GPT-5.2, where Scale Labs published 29.94% for the base model on the same benchmark. The two models should not be assumed comparable on this number.
- **SciCode: 53.24%** (xhigh) — **first measurement in the file**.
- **Terminal-Bench Hard: 53.03%** (xhigh) — first.
- **LMArena WebDev Elo: 1408.60 — Verified** (2026-05-22) — first, and below GPT-5.2's 1415.99.
- **AA Coding Index: 53.10** (xhigh) — first, against GPT-5.2's 48.67.
- **SWE-bench Verified 85.0% (#7 of 81, official board)**, **SWE-rebench 58.2%**, **Terminal-Bench 2.1 79.1%** and **Terminal-Bench 2.0 77.3%** stand from the previous version. **LiveBench 72.76%** (vendor) is new.
- DeepSWE / Vibe Code Bench / LiveCodeBench / Aider Polyglot: still **no verified public score found**.

Long context — **the gap is closed**:

- **AA-LCR v1.1: 83.33%** (xhigh) — **the first long-context retrieval measurement for this checkpoint.** The previous version called the absence of any such figure "the largest evidence gap on the model card"; at 83.33% it is now one of the strongest in this batch, and **Vector Wire rates Long Context "Strong — only 5.9% behind the leader."**
- Still no MRCR, RULER or GraphWalks figure, so this remains a single-benchmark retrieval result.

Vision / multimodal — **the gap is closed**:

- **MMMU-Pro: 78.50%** (xhigh) — **the first vision benchmark of any kind published for GPT-5.3-Codex.** The previous version recorded no MMMU, MMMU-Pro, DocVQA or CharXiv figure and called the absence "a genuine gap in the record, not a claim of weakness." It was a gap; it is now filled, and 78.50% is a strong number for an image-in/text-out model. **No DocVQA or CharXiv figure exists**, and GPT-5.2's CharXiv 82.10% is not transferred.
- No MMMU, LMArena Vision Elo, MathVista or OCRBench figure.

### Normalized scores (1–100)

- **Tool use: 82/100.** *Revised down from 86.* The previous version anchored 86 on **Terminal-Bench 2.1 at 79.1%** and **Terminal-Bench 2.0 at 77.3%**, and noted that the 2.0 and 2.1 numbers could not be merged with third-party harness results. New evidence bears on both. **Terminal-Bench 2.0 cross-references at 64.70% against the vendor's 77.30%** — a 12.6-point conflict on the same benchmark at the same effort setting — and **Terminal-Bench Hard reads 53.03%**, a distinct benchmark that is lower again. **GDPval win rate at 48.97%** replaces the vendor's 70.9% wins-or-ties as the like-for-like figure. Against those: **τ²-Bench Telecom 85.96%**, **OSWorld-Verified 64.70%** after its +26.5-point jump, **AA Agentic Index 60.54**, and **METR `swaa` 99.49% (Verified)**. Two rows are genuinely bad: **HiL-Bench 4.33% (Verified, Scale Labs)** — the lowest figure recorded for any model in this batch — and **METR `re_bench` at 25.00% (Verified)**, below GPT-5.2's 35.00%. Vector Wire: **"Agentic — Limited, 34.6% behind the leader."**
- **Reasoning: 86/100.** *Revised up from 82.* The old score of 82 carried an explicit penalty — *"a coding-specialised model with one frontier-tier science score and no breadth evidence belongs at 82, not 90"* — and that penalty no longer applies, because the breadth evidence has arrived. **Humanity's Last Exam 42.49%** and **CritPt 16.86%** are both the highest readings in this batch, **GPQA Diamond 91.52%** confirms the frontier-tier science score on an aggregator rather than a self-report, **IFBench 75.37%** and **AA Intelligence Index 32.50** are new, and **AA-Omniscience at +10.87** is the only positive Omniscience figure among the four GPT-5-family models here. Held at 86 rather than higher by two real limits: **the Intelligence Index of 32.50 sits well below GPT-5.2's 42.00 (Verified)**, confirming that this checkpoint trades general reasoning breadth for terminal competence; and **Omniscience accuracy 52.88% against non-hallucination 10.82%** is the widest confidence gap measured for any model in this batch, meaning its apparent knowledge is far less reliable than its accuracy alone suggests.
- **Context window: 84/100.** *Revised up from 78.* **The single largest change in this file is the arrival of AA-LCR v1.1 at 83.33%** — the measurement the previous version recorded as entirely absent and named as the model's largest evidence gap. **400,000 tokens in, 128,000 out**, native context compaction, and now a retrieval result that places it near the top of the methodology's 200K–500K band rather than being scored on spec alone. **Vector Wire independently rates Long Context "Strong — only 5.9% behind the leader,"** the strongest relative rating any model in this batch received. At the band ceiling of 84 rather than above it, because this rests on a single benchmark — no MRCR, RULER or GraphWalks figure exists — and because the 400K window places it out of reach of the 85–94 band regardless.
- **Multimodal: 74/100.** *Revised up from 65.* The old score of 65 was a below-midpoint placement in the "+image in = 60–70" band justified by the total absence of vision measurement; **MMMU-Pro at 78.50%** is the first vision benchmark published for this checkpoint and it is a strong one. Scored at the top of the image-in band. Capped at 74 because there is no documented audio input and no video benchmark, so the 75–90 band is unreachable on the evidence — and because **DocVQA and CharXiv remain absent**, meaning document and scientific-figure reading are unmeasured here in a way they are not for GPT-5.2. Vector Wire: **"Multimodal — Limited, −26.1%."**
- **Coding: 84/100.** *Revised down from 87.* **SWE-bench Pro 56.80%** is confirmed at that figure by both the vendor and a DeepMind cross-reference, and **SWE-bench Verified 85.0% (#7 of 81)**, **SWE-rebench 58.2%**, **Terminal-Bench 2.1 79.1%** and **Terminal-Bench 2.0 77.3%** all stand from the previous version — this is still a near-top-of-band coding profile. What pulls it down is what is *not* there. **No independently verified SWE-bench Pro figure exists for this checkpoint**, and the contrast with GPT-5.2 is instructive: Scale Labs published 29.94% for the base model on that same benchmark, so 56.80% cannot be assumed to survive independent measurement. **Terminal-Bench 2.0 cross-references 12.6 points below the vendor figure**, **Terminal-Bench Hard reads 53.03%**, **SciCode 53.24%** and **LMArena WebDev Elo 1408.60 (Verified) sits below GPT-5.2's 1415.99**. Two methodology anchors also remain unmet — Terminal-Bench 2.1 at 79.1% against the 85%+ anchor, and SWE-bench Pro as a frontier *lead* rather than a frontier *score*. Vector Wire: **"Coding — Limited, −25.6%."**
- **Cost efficiency: 58/100.** *Revised down from 64.* The rate card is unchanged at **$1.75 / $14.00** with a **$0.175** cache hit, confirmed identical at both providers on 2026-10-13, and the previous version's two efficiency credits — fewer output tokens than any prior model to reach Terminal-Bench leadership, and a ~25% speed improvement over GPT-5.2-Codex — are not contradicted by anything in the new record. But **"costs more than 87% of 328 priced models"** now sits against a **`Deprecated`** label, and the capability it bought has been superseded twice. Paying the joint-highest price in this batch for a retired model is the specific problem.
- **Overall Score: 82/100.** (82 + 86 + 84 + 74 + 84) / 5 = 410 / 5 = **82.0 → 82**, up from 80. **Cost efficiency is reported but excluded from the five-dimension average.** The overall rises 2 points, and the composition matters more than the total: **context +6, multimodal +9 and reasoning +4** — all three from evidence arriving for dimensions previously scored blind — against **tool use −4, coding −3 and cost −6**, the first two from newly visible measurement conflicts and the third from deprecation. Best fit, revised: **long-horizon agentic software engineering in a real terminal**, where Terminal-Bench 2.1 at 79.1%, OSWorld at 64.70%, τ²-Bench Telecom at 85.96% and `swaa` at 99.49% are strong, and where the model is genuinely better at long-context retrieval and at reading images than the previous version of this file could demonstrate. Two cautions that the new evidence sharpened rather than removed: **the verified record is only 5 results deep**, so most of what is scored here rests on aggregator and vendor figures; and **HiL-Bench 4.33% and METR `re_bench` 25.00%** mark real, reproducible weak spots on exactly the long-horizon software-engineering tasks this model is bought for. If you need this profile today, **GPT-5.4 or GPT-5.5** are the live successors.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (80 → **82**).
  New evidence is concentrated in **Vector Wire's GPT-5.3 Codex record**, fetched
  2026-10-13: **28 results on 25 benchmarks from 6 sources on 6 sites — 5 independently
  verified, 16 aggregator, 3 vendor cross-reference, 4 vendor-reported, latest
  2026-10-12** — supplying the **`Deprecated` status flag**, the field-relative price
  reading, and the per-capability verdicts (**Long Context "Strong, −5.9%"**,
  **Reasoning "Capable, −17.5%"**, **Instruction Following "Capable, −24.4%"**, four
  "Limited", three unrated).
  Load-bearing figures: **AA-LCR 83.33%** (the first long-context measurement for this
  checkpoint), **MMMU-Pro 78.50%** (the first vision measurement for this checkpoint),
  **GPQA Diamond 91.52%**, **Humanity's Last Exam 42.49%**, **CritPt 16.86%**,
  **IFBench 75.37%**, **AA Intelligence Index 32.50**, **AA-Omniscience +10.87** with
  accuracy 52.88% against non-hallucination 10.82%, **OSWorld-Verified 64.70%**,
  **GDPval win rate 48.97%**, **τ²-Bench Telecom 85.96%**, **AA Agentic Index 60.54**,
  **METR `swaa` 99.49% / `hcast` 75.64% / `re_bench` 25.00% (all Verified)**,
  **HiL-Bench 4.33% (Verified, Scale Labs)**, **Terminal-Bench Hard 53.03%**,
  **SciCode 53.24%**, **SWE-bench Pro 56.80%** (vendor + DeepMind cross-reference, with
  no independent verification), **LMArena WebDev Elo 1408.60 (Verified)**,
  **AA Coding Index 53.10**, **LiveBench 72.76%**, and **Terminal-Bench 2.0 at 77.30%
  vendor against 64.70% cross-referenced**.
  **Three conflicts adjudicated explicitly.** First: **Terminal-Bench 2.0 — 77.30% vendor
  against 64.70% cross-referenced (DeepMind, xhigh)**, the same benchmark at the same
  effort setting; both are recorded and neither is averaged, and the score is set on the
  balance of the record rather than on either figure alone. Second: **GDPval — 48.97% win
  rate (Artificial Analysis) against 70.9% wins-or-ties (vendor)**; these are different
  metrics rather than competing measurements, so both are recorded and the like-for-like
  win rate is used. Third: **SWE-bench Pro — 56.80%, which is vendor and cross-referenced
  but *not* independently verified**, in explicit contrast to GPT-5.2's 29.94% Verified
  figure on the same benchmark; the absence is recorded as a limit on the coding score
  rather than papered over. **One structural caveat carried forward:** with only **5
  independently verified results**, this is the thinnest verified record in the batch, and
  that fact is weighted into every score above. Scores are normalized 1–100
  interpretations per `model-comparison.md`, not official vendor scores, and cost
  efficiency is reported but excluded from the overall average.
- Future sources: add a new file next to this one, e.g. `GPT_5_4.md` or `GPT_5_5.md`,
  using the same headings — **GPT-5.3-Codex-Spark is a separate model and has its own
  record**, and the `low` / `medium` / `high` effort settings of this checkpoint are
  separable now that per-effort rows exist on the Artificial Analysis benchmarks.