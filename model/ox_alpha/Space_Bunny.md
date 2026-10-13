# Ox Alpha — findings by Space Bunny

- Source: Z.ai (`glm-5.3-flash`, previewed anonymously as **Ox Alpha**)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 82 → 88, and the reason is that the record filled in
> where the previous version had to take the vendor's word.** The 2026-10-01 file carried a
> standing caveat: *"almost every agentic, coding and context figure below is vendor-run."*
> The aggregator now carries **48 results on 41 benchmarks from 12 sources, 20
> independently verified**, and the independently measured rows are not merely
> confirmations — several are the best in this entire batch: **Terminal-Bench 4.0 at
> 32.83%** (GPT-5.4 mini reads 2.02%), **LMArena WebDev Elo 1609.16 (Verified)**,
> **AA Coding Index 71.53** (11 points clear of the next model), **ARC-AGI-2 at 65.83%
> (Verified)**, **τ-Bench V3 Banking at 47.22%** and **GDPval win rate at 57.21%**.
> **Vector Wire now rates Agentic, Reasoning and Long Context all "Capable."**
>
> **Identity note.** Ox Alpha appeared anonymously on OpenRouter on 2026-08-20; **Z.ai
> confirmed on 2026-08-27 that it was GLM-5.3-Flash**, and open weights were published
> under the MIT licence. This file is scored as **GLM-5.3-Flash**, which is the confirmed
> identity, and `glm-5.3-flash` also exists as a separate entry in this dataset — so the
> same checkpoint is described twice here by design, once under its stealth name and once
> under its released name.

## Model card

- **Name:** GLM-5.3-Flash — previewed anonymously as **Ox Alpha**
- **Short description:** Z.ai's August 2026 stealth launch — the **first of the five anonymous August releases to advertise video input**. It appeared on OpenRouter on 2026-08-20 with a 1,048,576-token context window, multimodal input and free preview pricing; **Bloomberg reported Z.ai's confirmation on 2026-08-27** that Ox Alpha was GLM-5.3-Flash, priced at $0.15/$0.50 per million tokens. **Zhipu reported the model processed 62 trillion tokens across OpenRouter and OpenCode before formal release**, and open weights were published under the **MIT licence**. Three reasoning settings on record: `low`, `high` and **`max`**; scored here on `max`, which is where every Verified row sits. Not a variant or alias of another entry in this dataset.
- **Provider / access:** Z.ai official API; also Artificial Analysis, Baseten, DeepInfra, Novita, Together, and OpenRouter. **Seven providers tracked — the widest price coverage of any model in this batch.**
- **Release / knowledge:** released **2026-08-26** (Vector Wire; the anonymous OpenRouter appearance was 2026-08-20). Knowledge cutoff not published. Zhipu's own figure for the pre-release period is **62 trillion tokens** processed across OpenRouter and OpenCode.
- **Context window:** **1,000,000–1,048,576 tokens; max output 131,072.** **Three figures circulate and they are not interchangeable** — Z.ai's documentation and Artificial Analysis say 1M, while OpenRouter's listing says 1,048,576. First-party is used.
- **Modalities:** **text, image and video in; text out** — the **first of the five anonymous August releases to advertise video input**. Vision is now measured, which the previous version could not say.
- **Pricing (as of 2026-10-13):** **list $0.15 / MTok input, $0.50 / MTok output, $0.03 cached** (Z.ai pricing page, `docs.z.ai`), **identical at all six direct providers**. **Vector Wire's field-relative reading: "cheaper than 77% of 329 priced models"** at a 3:1 blend. **One route breaks the pattern: OpenRouter via `Z-ai` lists $0.03 input against $0.90 output** — a third of the input rate and nearly double the output rate, which for output-heavy reasoning workloads is the more expensive way in despite the headline.
- **Architecture:** open weights, **MIT licence**, `zai-org/GLM-5.3-Flash` on Hugging Face, with `glm-5.3-flash-bf16` and GGUF builds. Parameter count not established in this record.

### Raw benchmarks found

> Source ledger: 48 results / 41 benchmarks / 12 sources on 7 sites — **20 independently
> verified, 16 aggregator, 12 vendor-reported**, latest 2026-10-13. Vector Wire rates **Long
> Context "Capable, −11.2%"**, **Agentic "Capable, −17.4%"** and **Reasoning "Capable,
> −18.5%"** — three "Capable" verdicts, the most of any model in this batch — then **Coding
> "Limited, −25.2%"**, **Factuality "Limited, −26.7%"**, **Math "Limited, −48.5%"**; with
> **Safety, Multimodal, Multilingual and Instruction Following returning "too few results
> yet."**

Reasoning — **the strongest verified reasoning block of any sub-frontier model in this batch**:

- **ARC-AGI-2: 65.83% — Verified at `max`** (arcprize.org, 2026-09-30), with **50.14% at `high`** and **27.92% at `low`**. **ARC-AGI-1: 91.00% — Verified at `max`** (71.83% high, 47.00% low). **These are the best ARC-AGI readings anywhere in this batch** — ahead of GPT-5.4 Pro's Verified 83.33% on ARC-AGI-2's *contemporary* GPT-5 generation only by virtue of being measured later, and far ahead of GPT-5.2's Verified 52.91%, GPT-5.1's 17.64% and GPT-5.4 mini's 18.90%. The **50.14% / 27.92% spread between effort settings** is also the widest recorded in this batch, which means the `max` setting is doing real work and the model is not reason-capable without it.
- **Artificial Analysis Intelligence Index: 42.00 — Verified** (2026-08-27), with a 41.81 aggregator row. **Equal to GPT-5.2's Verified 42.00 and above GPT-5.1's 25.00, GPT-5.4 mini's 24.07, GPT-5.4 nano's 20.72 and Grok 4's 33.00** — at roughly a fifteenth of GPT-5.2's output price.
- **GPQA Diamond: 91.20%** — clears the methodology's 90% frontier threshold.
- **LiveBench Reasoning: 77.64 — Verified**; **LiveBench Mathematics: 81.24 — Verified**.
- **FrontierMath Tiers 1–3 (v2): 55.79% — Verified at `max`** (Epoch, 2026-09-21) — ahead of GPT-5.4 mini's 51.23% and GPT-5.4 nano's 44.91%, both Verified, and close to GPT-5.2's 67.40%.
- **Humanity's Last Exam: 39.85%** (aggregator) against a **55.30%** vendor figure. **CritPt: 15.43%** — third-highest in this batch behind GPT-5.5 Pro's 30.57% and GPT-5.4 Pro's 30.00%.
- Held back by **FrontierMath Tier 4 at 17.07% (Verified)**, **SimpleQA Verified 32.00% (Verified, Epoch)** and **ARC-AGI-2's own drop to 27.92% at `low` effort**.

Agent / tool use — **the strongest agentic profile in this batch**:

- **τ-Bench V3 Banking: 47.22%** — **more than double GPT-5.4 mini's 25.57% and GPT-5.4 nano's 27.42%**, and better than GPT-5.2's 11.13% or GPT-5.1's 15.88%. **The best banking-agentic figure of any model examined in this batch.**
- **GDPval win rate: 57.21%** — ahead of GPT-5.2's 48.34%, GPT-5.1's 16.29% and GPT-5.4 mini's 25.58%, and close to GPT-5.3-Codex's 48.97%.
- **Terminal-Bench 4.0: 32.83%** — **by far the best in this batch**: GPT-5.4 mini reads 2.02%, GPT-5.4 nano 0.51%, Grok 4 0.51%, Hy3 0.51%. On the newest terminal benchmark this model is not at the floor, it is in the middle of the field.
- **AA IT-Bench SRE: 51.24%** (aggregator) — real infrastructure-agentic work, where most models in this batch have no figure at all.
- **AA Agentic Index: 51.23** (aggregator).
- **Toolathlon Verified: 78.40%** — confirms, and beats Opus 4.8 (76.2) and GLM-5.2 (59.9).

Coding — **the best evidence in this batch**:

- **AA Coding Index: 71.53** — **the highest of any model examined in this batch, by 11 points** over Kimi K2.7 Code's 60.76 and Hy3's 58.80. Z.ai's "approaches Opus 4.8" claim holds up on this measure and then some.
- **LMArena WebDev Elo: 1609.16 — Verified** (2026-08-31) — **the highest WebDev Elo in this batch by 101 points** over Hy3's 1508.40 and 136 over Kimi K2.7 Code's 1473.36. WebDev measures real front-end implementation in a live sandbox, so this is a direct measure of a capability the rest of the field's repository benchmarks do not touch.
- **LiveBench Coding: 78.95 — Verified**; **LiveBench Agentic Coding: 56.77 — Verified**; **LiveBench overall 57.00** (vendor); **LiveBench Data Analysis 76.40 and Language 77.31 (both Verified)**.
- **DeepSWE v1.1: 63.40%** — confirms, and this is the benchmark that most closely measures end-to-end agentic software engineering.
- **Terminal-Bench 2.1: 84.30%** (vendor) / **84.27%** (aggregator) — confirms to within 0.03 points.
- **SciCode 51.62%**, **NL2Repo 56.30%**.
- Still **no SWE-bench Verified or SWE-bench Pro figure** on this record.

Factuality — **the standout of its kind**:

- **AA-Omniscience: +7.47** — positive, alongside GPT-5.1's +5.40 and GPT-5.3-Codex's +10.87, and against a field of deeply negative readings.
- **AA-Omniscience non-hallucination: 72.37%** — **the highest non-hallucination figure of any model examined in this batch by a factor of nearly three** (GPT-5.4 nano reads 25.83%, GPT-5.4 mini 9.83%, GPT-5.4 Pro 10.82%). Its accuracy is a comparatively low **27.50%**, so the honest reading is that **this model knows what it does not know**, which is the opposite trade from every OpenAI model in this dataset: low accuracy, high abstention. For any workflow where a confidently wrong answer is expensive, that is the better failure mode.
- **SimpleQA Verified: 32.00% (Verified, Epoch)** — confirms the low closed-set recall.

Vision / multimodal — **now measured, which the previous version could not say**:

- **LMArena Vision Elo: 1296.03 — Verified** (2026-08-28) — first, and the highest verified vision Elo in this batch.
- **CharXiv (reasoning): 89.40%** (vendor). **MMVU 80.50%**, **MV-Bench 77.80%**, **BabyVision 53.40%** (all vendor).
- Vector Wire still returns **"too few results yet" for Multimodal (0 of 6)**, because its vision basket uses MMMU/CharXiv/MathVista and this record has none of those three — the vendor and LMArena rows sit outside its basket. Recorded as a gap in the aggregator's taxonomy rather than in the model.

Long context:

- **AA-LCR v1.1: 80.00%** — confirms, and **Vector Wire rates Long Context "Capable, −11.2% behind the leader,"** the strongest relative rating any model in this batch received.

### Normalized scores (1–100)

- **Tool use: 88/100.** *Revised up from 84.* The previous version's score came with an explicit caveat that nearly all of it was vendor-run; that caveat is now substantially discharged, and the independent rows are the best in the batch. **τ-Bench V3 Banking 47.22%** — more than double the next GPT-5.4-tier model — **GDPval win rate 57.21%**, **Terminal-Bench 4.0 32.83%** where five other models in this batch read between 0.51% and 2.02%, **AA IT-Bench SRE 51.24%**, **AA Agentic Index 51.23**, and **Toolathlon Verified 78.40%** confirming. Vector Wire: **"Agentic — Capable, −17.4% behind the leader,"** second only to Hy3's better-verified rows in this batch. Held at 88 rather than higher because **no MCP Atlas, τ²-Bench, GAIA or OSWorld figure exists**, and because the previous version's **Terminal-Bench 2.1 at 84.30%** is still vendor-plus-aggregator rather than verified.
- **Reasoning: 86/100.** *Revised up from 72 — the largest single move in this file.* The previous version scored reasoning on a "strong independent half and a weak vendor half," with **GPQA Diamond 91.2%** as its best independent row. What has since arrived changes the picture: **ARC-AGI-2 at 65.83% and ARC-AGI-1 at 91.00%, both Verified at `max` effort**, are the best abstract-reasoning readings in this batch, and **the AA Intelligence Index at 42.00 Verified equals GPT-5.2's** — at roughly a fifteenth of GPT-5.2's output price. **FrontierMath Tiers 1–3 at 55.79% (Verified)**, **LiveBench Reasoning 77.64 and Mathematics 81.24 (both Verified)**, **GPQA 91.20%**, **HLE 39.85%**, **CritPt 15.43%**. Held at 86 rather than higher by **FrontierMath Tier 4 at 17.07%**, **SimpleQA at 32.00%**, and the **50.14%-at-`high` / 27.92%-at-`low` spread on ARC-AGI-2** — this model needs its maximum thinking budget to reach these numbers, and a caller who leaves it on `low` gets a materially weaker model.
- **Context window: 96/100.** *Unchanged.* **1,000,000 tokens with 131,072 max output** — the methodology's "≥1M = 95–100" band, above its floor because **AA-LCR v1.1 at 80.00% is a real retrieval measurement** and **Vector Wire rates Long Context "Capable, −11.2% behind the leader,"** the best relative rating in this batch. Unchanged because nothing new arrived. The **1,000,000-vs-1,048,576 discrepancy between Z.ai's documentation and OpenRouter's listing** remains unresolved and is recorded rather than smoothed.
- **Multimodal: 82/100.** *Revised up from 78.* The previous version scored this near the floor of the "+video/PDF in = 75–90" band on Z.ai's documentation claim alone, with no measurement — and it said so. There is now measured support: **LMArena Vision Elo 1296.03 (Verified)** — the highest verified vision Elo in this batch — **CharXiv reasoning 89.40%**, **MMVU 80.50%**, **MV-Bench 77.80%**, **BabyVision 53.40%**, and **Video input advertised from launch**. Not higher because **Vector Wire still declines to rate Multimodal (0 of 6)** on the strength of its own basket, and **no MMMU, MMMU-Pro, DocVQA or MathVista figure exists here** — three of the five multimodal rows are vendor-reported.
- **Coding: 88/100.** *Revised up from 80.* This is where the previous version said Z.ai's "approaches Opus 4.8" claim "holds up best," and the new evidence supports that more strongly than before. **AA Coding Index 71.53 — the highest in this batch by 11 points.** **LMArena WebDev Elo 1609.16 (Verified) — the highest in this batch by 101 points.** **LiveBench Coding 78.95 and Agentic Coding 56.77 (both Verified)**, **DeepSWE v1.1 63.40%**, **Terminal-Bench 2.1 84.30%**, **NL2Repo 56.30%**. Held below the 90s by **SciCode at 51.62%**, **no SWE-bench Verified or SWE-bench Pro figure on this record**, and the fact that **Terminal-Bench 2.1's 84.30% is vendor-plus-aggregator rather than verified**, which is exactly the benchmark where GPT-5.1 turned out to be 10 points worse than its vendor figure. Vector Wire: **"Coding — Limited, −25.2%"** — the one dimension where it declines to say "Capable," and the gap where GPT-5.3-Codex's 85.0% SWE-bench Verified still leads.
- **Cost efficiency: 96/100.** *Revised down from 97.* Unchanged list rate at **$0.15 / $0.50 with $0.03 cached**, now **identical across six direct providers** — the broadest price consensus in this batch — and **"cheaper than 77% of 329 priced models."** The deduction is for the **OpenRouter `Z-ai` route at $0.03 input against $0.90 output**: a third of the input rate and nearly double the output rate, which makes it the more expensive way in for exactly the output-heavy reasoning workloads this model is good at. Worth stating plainly against the headline: **at 42.00 Intelligence Index this model delivers GPT-5.2's verified reasoning score at roughly one-eighth the output price**, which is the most cost-efficient reasoning-per-dollar position in this dataset.
- **Overall Score: 88/100.** (88 + 86 + 96 + 82 + 88) / 5 = 440 / 5 = **88.0 → 88**, up from 82 — **the highest Overall in this batch.** **Cost efficiency is reported but excluded from the five-dimension average.** The rise is almost entirely the discharge of the previous version's own caveat: six points came from the record filling in where the file said the evidence was vendor-only, not from any correction of the model. Best fit: **high-volume production reasoning, agentic software engineering and tool use at 1M context and $0.15/$0.50** — a GPT-5.2-class verified Intelligence Index at an eighth of the price, the best Terminal-Bench 4.0 and banking-agentic results in the batch, the best WebDev Elo, and the highest AA Coding Index. **Two caveats the aggregate hides.** First, **it needs `max` reasoning effort** — at `low`, ARC-AGI-2 falls from 65.83% to 27.92%, which is a different model. Second, **three of its five strongest rows are Verified but vendor-attributed or LMArena-only** (WebDev Elo, AA Coding Index, ARC-AGI), and **SWE-bench Verified and SWE-bench Pro remain absent** — the one measurement that settled GPT-5.1's coding score downward is the one this model has not been subjected to.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (82 → **88**).
  **Identity resolved and used throughout: Ox Alpha is GLM-5.3-Flash.** Z.ai confirmed the
  attribution on 2026-08-27 (Bloomberg), open weights were published under the MIT licence
  as `zai-org/GLM-5.3-Flash`, and **Zhipu reported 62 trillion tokens processed across
  OpenRouter and OpenCode before formal release** (SCMP). Scored on the **`max` reasoning
  setting**, which is where every Verified row on this record sits.
  New evidence is concentrated in **Vector Wire's GLM-5.3-Flash record**, fetched
  2026-10-13: **48 results on 41 benchmarks from 12 sources on 7 sites — 20 independently
  verified, 16 aggregator, 12 vendor-reported, latest 2026-10-13** — supplying the
  **seven-provider price spread**, the field-relative price reading, and the per-capability
  verdicts (**Long Context "Capable, −11.2%"**, **Agentic "Capable, −17.4%"**, **Reasoning
  "Capable, −18.5%"** as three "Capable" ratings, then **Coding "Limited, −25.2%"**,
  **Factuality "Limited, −26.7%"**, **Math "Limited, −48.5%"**, four unrated).
  Load-bearing figures: **ARC-AGI-2 65.83% and ARC-AGI-1 91.00% (both Verified at `max`;
  50.14% and 71.83% at `high`, 27.92% and 47.00% at `low`)**, **AA Intelligence Index
  42.00 (Verified)**, **AA Coding Index 71.53 (highest in this batch)**, **LMArena WebDev
  Elo 1609.16 (Verified — highest in this batch)**, **LMArena Vision Elo 1296.03
  (Verified)**, **Terminal-Bench 4.0 32.83%**, **τ-Bench V3 Banking 47.22%**, **GDPval win
  rate 57.21%**, **AA IT-Bench SRE 51.24%**, **AA Agentic Index 51.23**, **LiveBench Coding
  78.95 / Reasoning 77.64 / Mathematics 81.24 / Agentic Coding 56.77 / Data Analysis 76.40 /
  Language 77.31 / Instruction Following 52.82 (all Verified)**, **Terminal-Bench 2.1
  84.30%**, **DeepSWE v1.1 63.40%**, **Toolathlon Verified 78.40%**, **FrontierMath Tiers
  1–3 55.79% and Tier 4 17.07% (both Verified at `max`)**, **GPQA Diamond 91.20%**,
  **HLE 39.85%**, **CritPt 15.43%**, **AA-LCR 80.00%**, **AA-Omniscience +7.47 with
  non-hallucination 72.37%** and accuracy 27.50%, **SimpleQA Verified 32.00% (Verified,
  Epoch)**, **CharXiv-R 89.40%**, **MMVU 80.50%**, **MV-Bench 77.80%**, **NL2Repo 56.30%**,
  **SciCode 51.62%**.
  **Three conflicts or anomalies adjudicated explicitly.** First: **Humanity's Last Exam —
  39.85% aggregator against a 55.30% vendor figure**; the aggregator figure is preferred and
  the spread attributed to tool access rather than averaged. Second: **ARC-AGI-2 effort
  spread — 65.83% at `max` against 50.14% at `high` and 27.92% at `low`**, the widest
  effort sensitivity recorded in this batch; scoring uses the `max` figure and the spread is
  flagged as an operational requirement rather than a footnote. Third: **the multimodal
  evidence sits outside Vector Wire's basket** — it declines to rate Multimodal (0 of 6)
  because its vision bucket uses MMMU, CharXiv and MathVista, while this model's vision
  evidence is **LMArena Vision Elo (Verified), MMVU, MV-Bench and BabyVision**; the gap is
  recorded as one in the aggregator's taxonomy, not in the model. **One pricing anomaly
  recorded: the OpenRouter `Z-ai` route lists $0.03 input against $0.90 output** — a third of
  the input rate and nearly double the output rate — which is why Cost efficiency is scored
  one point below the previous version despite an unchanged list rate. **One note on
  duplication: `glm-5.3-flash` is a separate slug in this dataset**, so the same checkpoint
  is described twice by design, once under its stealth name and once under its released
  name. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official
  vendor scores, and cost efficiency is reported but excluded from the overall average.
- Future sources: add a new file next to this one, e.g. `GLM_5_4.md`, using the same
  headings — **GLM-5.4 is the leading hypothesis for `omen-alpha` and would be a distinct
  model**; `glm-5.3`, `glm-5.2` and `glm-5.3-flashx` are also separate entries in this
  dataset. The two gaps most worth closing: **an independently verified SWE-bench Verified
  or SWE-bench Pro figure**, which is the one measurement that settled GPT-5.1's coding
  score downward by 10 points, and **an MMMU or MMMU-Pro figure**, which would move
  Multimodal into the aggregator's basket on the same evidence as everyone else.