# GPT-5.5 Pro — findings by Space Bunny

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 86 → 87, the highest in this batch, and the reason is a
> correction that runs in the model's favour.** The previous version scored reasoning on
> **FrontierMath Tier 1–3 at 52.4% and Tier 4 at 39.6%**, both vendor figures from
> OpenAI's launch table. **Both are now on the record as Verified and both are far
> higher: Tier 1–3 at 87.72% and Tier 4 at 78.05%.** Nearly double, independently
> measured. Alongside **ARC-AGI-2 at 84.16% (Verified)**, **SimpleQA Verified at 64.50%**
> and **SimpleBench at 76.90% (Verified)** — the highest SimpleQA and SimpleBench
> readings of any model examined across these ten files — cost efficiency falls to **8**,
> since **"costs more than 99% of 328 priced models"** and OpenAI publishes **no cached
> input discount** for this checkpoint.

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's maximum-effort reasoning tier as of April 2026, released 2026-04-23 — the flagship successor to GPT-5.4 Pro and the model that GPT-5.2, GPT-5.3-Codex and GPT-5.4 nano users were all migrated toward during OpenAI's mid-2026 deprecations. Built for **correctness-critical work where a wrong answer is more expensive than a slow one**. Two recorded effort settings, **`high` and `xhigh`**; scored here on `xhigh`. Not a variant or alias of another entry in this dataset. **Current**, not deprecated.
- **Provider / access:** OpenAI API — Responses API and Chat Completions. ChatGPT Pro tier. Also Azure OpenAI, AWS Bedrock, Google Vertex AI, OpenRouter. **Note: only one provider currently quotes a rate card** (OpenAI via OpenRouter), against two for every other model in this batch — thinner on the pricing side.
- **Release / knowledge:** released **2026-04-23**. Knowledge cutoff as published in OpenAI's developer documentation.
- **IDs:** `gpt-5.5-pro`; batch `gpt-5.5-pro:batch`; effort aliases `gpt-5.5 pro (high)` and `gpt-5.5 pro (xhigh)`.
- **Context window:** **1,050,000 tokens input, 128,000 tokens max output** (OpenAI developer docs). DataLLM Lab lists a slightly different split (922K input / 128K output within the 1,050,000 total); the first-party 1,050,000 / 128,000 pair is used.
- **Modalities:** **text, image and file in; text out.** Reasoning: yes, at maximum budget. Tool calling, function calling, web search, structured output / JSON schema supported. **No published cached-input discount** — see pricing. No audio or video input documented; file input is listed by DataLLM Lab alongside image.
- **Pricing (as of 2026-10-13):** **$30.00 / MTok input, $180.00 / MTok output**. **Vector Wire's field-relative reading: "costs more than 99% of 328 priced models"** at a 3:1 blend — tied with GPT-5.4 Pro as the most expensive model in the tracked field. **The disqualifying detail is first-party: OpenAI states GPT-5.5 Pro does not offer a cached input discount.** For a 1M-context model that is a substantial structural penalty, since long-context workloads are precisely the workloads caching exists to serve. No free tier.
- **Architecture:** proprietary. Parameter count not disclosed.

### Raw benchmarks found

> Source ledger: 16 results / 14 benchmarks / 9 sources on 6 sites — **9 independently
> verified, 1 aggregator, 6 vendor-reported**. This is the thinnest record in the batch and
> the ratio of verified to vendor rows (9:6) is the best of any model here. Vector Wire
> rates **Reasoning "Capable, −10.6%"** and **Math "Capable, −21.8%"**, and returns
> **"too few results yet" for eight of ten capabilities** — Coding, Agentic, Safety, Long
> Context, Multimodal, Multilingual, Instruction Following and Factuality.

Reasoning — **the strongest verified reasoning block anywhere in this batch**:

- **ARC-AGI-2: 84.16% — Verified at `xhigh`** (arcprize.org, 2026-09-21), with **84.58% — Verified at `high`** (2026-05-10). **The highest ARC-AGI-2 reading of any model examined across these ten files**, ahead of GPT-5.4 Pro's Verified 83.33% and 30 points above GPT-5.2's Verified 52.91%. **ARC-AGI-1: 95.00% — Verified at `xhigh`** (96.50% at `high`).
- **FrontierMath Tiers 1–3 (v2): 87.72% — Verified at `xhigh`** (Epoch, 2026-09-21), against the **52.4% vendor figure** this file used on 2026-10-01 — a **35-point upgrade**, and the highest Tiers 1–3 figure in the dataset.
- **Humanity's Last Exam: 57.20%** (vendor).
- **SimpleBench: 76.90% — Verified** (simple-bench.com, 2026-05-10) — **the highest SimpleBench reading in the dataset.**
- **CritPt: 30.57%** at `xhigh` — the highest in the dataset, ahead of GPT-5.4 Pro's 30.00% and more than double GPT-5.3-Codex's 16.86%.

Math:

- **FrontierMath Tier 4: 78.05% — Verified at `xhigh`** (Epoch, 2026-09-21), against the **39.6% vendor figure** used previously — a **38-point upgrade**, and the highest Tier-4 reading in the dataset by a wide margin (GPT-5.4 Pro reads 58.54%). An earlier Verified reading of **39.60%** (2026-08-29) sits exactly on the old vendor number, which suggests the launch figure was an early measurement rather than an error; both are recorded and the later one is used.
- **FrontierMath overall: 39.60%** (vendor) — **anomalously low against Tier 4 at 78.05%**, and unexplained. Recorded as a discrepancy rather than smoothed: overall FrontierMath and the Tier 4 subtier are not obviously measuring the same thing, but a vendor overall figure of 39.60% sitting 38 points below its own Tier-4 subtier is not self-consistent on its face.

Factuality and agentic:

- **SimpleQA Verified: 64.50% — Verified at `xhigh`** (Epoch, 2026-05-20) — **the highest SimpleQA reading of any model in this batch**, 16.5 points above GPT-5.1's 48.00% and far above GPT-5.4 nano's 11.70%. For a model with no published knowledge cutoff figure this is the single most useful number on factuality.
- **BrowseComp: 90.10%** (vendor) — confirms the figure this file used. **Vector Wire cannot rate the Agentic capability at all (0 of 7 benchmarks)**, so this single row carries the entire tool-use argument.

Domain-specific and biosecurity:

- **GeneBench: 33.20%** (vendor) — a specific and reproducible weakness in genomics.
- **OpenAI biosecurity evaluations (vendor): hard-negative protein binding prediction 0.00%, DNA sequence design for transcription factor binding 16.50%.** Recorded because they are first-party and specific. The 0.00% on hard-negative protein binding is a refusal-rate figure as much as a capability figure — a model declining a dual-use-adjacent task scores zero by construction — and is labelled as such rather than read as a failure.

Long context, vision and coding:

- **No measurement of any kind** on this record for **AA-LCR, MRCR, RULER, GraphWalks, MMMU, MMMU-Pro, DocVQA, CharXiv, SWE-bench Verified, SWE-bench Pro, Terminal-Bench, LiveCodeBench, SciCode or Aider Polyglot.** Vector Wire returns "too few results yet" for Long Context, Multimodal and Coding alike. The 1.05M window, file-and-image input, and the third-party **SWE-bench Verified 82.6%** and **SWE-bench Pro** readings recorded on 2026-10-01 all stand from this file's prior research; none has gained independent corroboration since.

### Normalized scores (1–100)

- **Tool use: 88/100.** *Revised up from 86.* **BrowseComp at 90.10%** confirms the previous version's figure, and remains the highest BrowseComp reading anywhere in this batch — on what is among the hardest agentic retrieval benchmarks in public use. **SimpleQA Verified at 64.50%** is a genuine addition and it matters for this dimension specifically: it says the model is right about verifiable facts, not merely fluent, which is the property that makes long-horizon retrieval usable. Held back from higher by the scale of the caveat: **no MCP Atlas, τ²-Bench, GAIA, OSWorld, Terminal-Bench or Toolathlon figure exists for this checkpoint, and Vector Wire declines to rate the Agentic capability at all (0 of 7 benchmarks).** One row points the other way and is recorded: **GeneBench at 33.20%** is a real domain weakness in genomics. The evidence supports "outstanding at agentic retrieval, unmeasured elsewhere," and the score reflects exactly that.
- **Reasoning: 96/100.** *Revised up from 92.* The previous version's reasoning score rested on **vendor** FrontierMath figures of 52.4% and 39.6%. **Both are now Verified and both are far higher: Tiers 1–3 at 87.72% and Tier 4 at 78.05%.** That is a 35- and 38-point upgrade on the two numbers the score was built on, and it is the single largest favourable correction in this batch. Alongside: **ARC-AGI-2 at 84.16% (Verified)** — the highest in the dataset — **ARC-AGI-1 at 95.00% (Verified)**, **SimpleBench 76.90% (Verified)** — also the highest in the dataset — **SimpleQA Verified 64.50%**, **CritPt 30.57%** and **HLE 57.20%**. Held at 96 rather than higher for two honest reasons: **no AIME, HMMT or Putnam figure exists on this record**, and the **FrontierMath overall figure of 39.60% sitting 38 points below its own Tier-4 subtier is not self-consistent** and is recorded rather than explained away.
- **Context window: 95/100.** *Unchanged.* **1,050,000 tokens with 128,000 max output** — the methodology's "≥1M = 95–100" band, at its floor. Unchanged because **nothing has arrived to move it**: no AA-LCR, no MRCR, no RULER, no GraphWalks, and **Vector Wire returns "too few results yet" for Long Context**. The 100 tier requires **≥98% retrieval at 512K+**, and with no retrieval measurement at all the score stays where spec alone can justify it. One point worth restating because this model makes it concrete: **OpenAI publishes no cached-input discount for GPT-5.5 Pro**, so the workload the 1M window exists for is also the workload where this checkpoint is most expensive to run.
- **Multimodal: 72/100.** *Unchanged.* **Text, image and file in; text out.** Scored above the "+image in = 60–70" band and into the floor of the "+video/PDF in = 75–90" band because **file input is listed** alongside image — not because any vision benchmark exists, because **none does**. No MMMU, MMMU-Pro, DocVQA or CharXiv figure is on this record and Vector Wire declines to rate Multimodal. There is no new evidence in either direction, so the line holds rather than moving on absence. No audio or video input is documented.
- **Coding: 86/100.** *Unchanged, and unchanged for the same reason the previous version gave: every coding number for this model is either a dash from OpenAI or a third-party figure.** The best available remains LLMReference's shared reading of **SWE-bench Verified 82.6%** and the **SWE-bench Pro** figure recorded on 2026-10-01. No coding measurement has been added to the aggregator record since, and Vector Wire returns "too few results yet" for Coding. The score is high because the third-party readings are strong, not because the evidence is strong — and that distinction is carried forward unresolved rather than quietly upgraded.
- **Cost efficiency: 8/100.** *Revised down from 10.* Unchanged rate card at **$30.00 / $180.00**, and **"costs more than 99% of 328 priced models"** places it tied with GPT-5.4 Pro at the very top of Vector Wire's priced field of 328. **The disqualifying detail remains first-party: OpenAI states GPT-5.5 Pro does not offer a cached input discount.** No model in this dataset scores worse. One further factor is new in this pass: **only one provider currently quotes a rate card**, against two for every other model in the batch, so there is less independent pricing corroboration as well. No free tier, and a 6× output-to-input ratio on a maximum-budget reasoning model where thinking tokens dominate the bill.
- **Overall Score: 87/100.** (88 + 96 + 95 + 72 + 86) / 5 = 437 / 5 = 87.4 → **87**, up from 86 — **the highest Overall in this batch**. **Cost efficiency is reported but excluded from the five-dimension average**, and that exclusion is the single most important fact about this number: **the best-scoring model here is also, jointly with GPT-5.4 Pro, the most expensive thing in it**, and it is the only checkpoint in the batch with *no published caching discount at all*. Best fit, with the price stated first because the Overall hides it: **correctness-critical work where a wrong answer costs more than a slow one** — frontier scientific and mathematical reasoning, abstract-reasoning research, and agentic retrieval. The Verified evidence justifies that fit better than it did a fortnight ago: **FrontierMath Tier 4 at 78.05%, Tiers 1–3 at 87.72%, ARC-AGI-2 at 84.16%, SimpleQA at 64.50%, SimpleBench at 76.90%, BrowseComp at 90.10%** — and the frontier maths and abstract-reasoning figures are the highest of any model examined across these ten files. **Two cautions the aggregate hides.** First, **three of the five averaged dimensions — multimodal, coding and long context — rest on a third-party or spec-only basis**, because the aggregator record contains 16 results and Vector Wire declines to rate eight of ten capabilities. Second, **at $30/$180 with no caching discount, every token above 128K of context is billed at full rate on both directions**, which makes the 1.05M window a theoretical rather than an economic asset for almost any real workload.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (86 → **87**).
  New evidence is concentrated in **Vector Wire's GPT-5.5 Pro record**, fetched 2026-10-13:
  **16 results on 14 benchmarks from 9 sources on 6 sites — 9 independently verified,
  1 aggregator, 6 vendor-reported, latest 2026-10-12** — supplying the field-relative
  price reading, the **single-provider** pricing note, and the per-capability verdicts
  (**Reasoning "Capable, −10.6%"**, **Math "Capable, −21.8%"**, and **eight of ten
  capabilities returning "too few results yet"**).
  Load-bearing figures: **FrontierMath Tiers 1–3 (v2) 87.72% and Tier 4 78.05% (both
  Verified at `xhigh`)**, **ARC-AGI-2 84.16% and ARC-AGI-1 95.00% (both Verified)**,
  **SimpleQA Verified 64.50%**, **SimpleBench 76.90% (Verified)**, **CritPt 30.57%**,
  **HLE 57.20%**, **BrowseComp 90.10%**, **GeneBench 33.20%**, and OpenAI's first-party
  biosecurity rows (**hard-negative protein binding 0.00%**, **DNA sequence design for
  transcription factor binding 16.50%**).
  **Two corrections, both upward, both on the reasoning score's foundations.**
  **FrontierMath Tiers 1–3 — 52.4% vendor (used 2026-10-01) against 87.72% Verified**;
  **FrontierMath Tier 4 — 39.6% vendor (used 2026-10-01) against 78.05% Verified.** Both
  are used, and together they move reasoning from 92 to 96. An **earlier Verified Tier-4
  reading of 39.60%** sits exactly on the old vendor number, which suggests the launch
  figure was an early measurement rather than an error — this is noted so the correction
  is not over-read. **One anomaly recorded but not resolved:** the **FrontierMath overall
  vendor figure of 39.60% sits 38 points below its own Tier-4 subtier of 78.05%**, which is
  not self-consistent on its face; it is reported as a discrepancy rather than smoothed or
  explained away. **One figure labelled as what it is:** the **0.00% hard-negative protein
  binding** score is a refusal-rate figure as much as a capability figure — a model
  declining a dual-use-adjacent task scores zero by construction — and is not read as a
  failure. **Three dimensions could not be moved at all:** multimodal, coding and long
  context have no new measurement on any source consulted, Vector Wire returns "too few
  results yet" for all three, and all three scores are held rather than revised — which is
  why the overall rises only 1 point despite reasoning gaining 4. Scores are normalized
  1–100 interpretations per `model-comparison.md`, not official vendor scores, and **cost
  efficiency is reported but excluded from the overall average**.
- Future sources: add a new file next to this one, e.g. `GPT_5_6_Sol_Pro.md`, using the
  same headings — **GPT-5.6 Sol Pro and the GPT-6 generation are the successors worth
  tracking**, since GPT-5.5 Pro is already out of the current OpenAI line per this
  dataset's own model index. **An AIME/HMMT/Putnam block and any independent coding or
  long-context measurement are the two gaps most worth closing**, since three of five
  averaged dimensions currently rest on a 16-result record and the FrontierMath overall
  discrepancy needs an independent reading to settle.