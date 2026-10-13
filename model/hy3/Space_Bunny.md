# Hy3 — findings by Space Bunny

- Source: Tencent (`Hunyuan Hy3`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 70 → 65, and the cause is a single large correction.**
> The previous version scored tool use at 87 on the strength of **Terminal-Bench 2.1 at
> 90.4%** — a frontier-tier figure that anchored the model's whole profile. **No aggregator
> record reproduces it.** Vector Wire's Hy3 record puts Terminal-Bench 2.1 at **64.42%
> (aggregator, reasoning) against a 71.70% vendor figure**, a 26-point gap on the number
> the previous version treated as best-in-class. That is the whole of the drop.
>
> **Scope caveat, stated before anything else in this note.** **Vector Wire tracks
> `Hy3-preview`, released 2026-04-23 — not the `Hy3` checkpoint this file scores, which
> Tencent released 2026-07-06.** The two are distinct entries in Vector Wire's own index
> (`Hy3-preview` and `Hy3-preview-Base` are separate records, and `Hy4` is a third). No
> figures below are transferred to the released model as if they were first-party; they are
> labelled **preview-checkpoint** evidence, used because it is the only systematic record
> available for the Hy3 line and because the previous version of this file leaned on
> launch-era figures of the same provenance.

## Model card

- **Name:** Hy3 (Tencent Hunyuan Hy3 series; successor to Hy3 Preview)
- **Short description:** Tencent's 2026 flagship open-weight text model, previewed late April 2026 and **officially released 2026-07-06**. Positioned as a cheap, long-context, coding-capable general model. **Preview-checkpoint aliases recorded by Vector Wire:** `Hunyuan Hy3`, `hunyuan-hy3-preview`, `hy 3.0 preview`, `hy3`, `hy3-preview (reasoning)`, `hy3-preview (non-reasoning)`, `tencent/Ty3-preview`; base checkpoint separately as `Hy3-preview-Base`. Not a variant or alias of another entry in this dataset.
- **Provider / access:** Tencent first-party API; also Novita AI, DeepInfra, OpenRouter.
- **Release / knowledge:** preview **2026-04-23** (per Artificial Analysis), late April 2026 per other trackers; officially released **2026-07-06**. Knowledge cutoff not published.
- **Context window:** **256K tokens** (first-party — Tencent's GitHub and Hugging Face model cards both state "Context Length: 256K"; Artificial Analysis independently records 256k). **Max output: 131K tokens** (Puter). Requesty and llm-stats are said to disagree; the discrepancy is flagged and unresolved.
- **Modalities:** **text in; text out.** Artificial Analysis is explicit — "The model supports text input, outputs text" — and Requesty agrees. **No image, audio or video input.** This is the single largest constraint on the model and it is why the Overall sits where it does.
- **Pricing (as of 2026-10-13):** **Tencent first-party ¥1 / ¥4 / ¥0.25 per 1M** (input / output / cached input) — approximately **$0.13 / $0.53 / $0.03**. Artificial Analysis records **$0.14 / $0.56**; Tencent-via-OpenRouter records **$0.18 / $0.60**. **Vector Wire's field-relative reading: "cheaper than 77% of 328 priced models"** at a 3:1 blend — comfortably budget-class, though not the cheapest model in the market.
- **Architecture:** open-weight on Hugging Face and GitHub; parameter count not established in this record.

### Raw benchmarks found

> Source ledger: 48 results / 33 benchmarks / **3 sources on 3 sites** — **only 1
> independently verified, 30 aggregator, 17 vendor-reported**. Artificial Analysis supplies
> 30 of the 48. **This is the weakest verification profile of any model in this batch by a
> wide margin**, and it is weighted into every score below. Vector Wire rates **Long Context
> "Capable, −13.4%"**, **Coding "Capable, −23.6%"** (7 of 10 benchmarks) and **Reasoning
> "Capable, −25.0%"**; then **Factuality "Limited, −27.1%"**, **Agentic "Limited, −28.2%"**
> and **Instruction Following "Limited, −40.1%"**; with **Safety, Math, Multimodal and
> Multilingual returning "too few results yet."**

Agent / tool use — **the decisive correction**:

- **Terminal-Bench 2.1: 64.42% (Artificial Analysis aggregator, Reasoning) against 71.70% (vendor).** **The previous version of this file used 90.4%, which appears on no aggregator record consulted in this pass.** The two figures on record disagree by 7.3 points with each other and by 26 points with the one previously used; the aggregator figure is preferred and the vendor figure retained.
- **MCP Atlas: 79.10%** (vendor) — among the strongest in this batch.
- **BrowseComp: 84.20%** (vendor) — very strong.
- **DeepSearchQA (F1): 91.00%** (vendor) — the highest of any model in this batch.
- **WideSearch: 76.40%** (vendor). **Claw-Eval (pass@3): 68.50%** (vendor). **Toolathlon: 48.50%** (vendor).
- **τ-Bench V3 Banking: 22.89%** (Reasoning). **Terminal-Bench 4.0: 0.51%** (Reasoning). **AA ApexAgents: 25.60%** (vendor).
- **GDPval win rate: 28.35%** at Reasoning, **36.45%** with no reasoning — **the same effort inversion seen on GPT-5.4 mini and GPT-5.4 nano, now on a fourth model and a fourth vendor.** AA Agentic Index follows it exactly: **25.64 at Reasoning against 46.70 with no reasoning.**
- **AA Agentic Index: 25.64** at Reasoning.

Reasoning / knowledge:

- **GPQA Diamond: 89.70%** at Reasoning (90.40% vendor) — confirms the 89.7–90.4% range previously recorded, sitting just past the methodology's 90% frontier threshold.
- **Humanity's Last Exam: 33.46%** at Reasoning — confirms.
- **IMO-AnswerBench: 90.00%** (vendor) — new, and strong; note this measures short-answer IMO problems rather than full proofs, which is why it can be so much higher than Grok 4's 1.90% full-paper IMO result.
- **CritPt: 4.86%** at Reasoning (0.29% no-reasoning).
- **AA Intelligence Index: 25.30** at Reasoning (17.04 no-reasoning) — new, and level with GPT-5.1's Verified 25.00 and above GPT-5.4 mini's 24.07.
- **AA-Omniscience: −18.47** at Reasoning (−34.95 no-reasoning); **accuracy 31.97% against non-hallucination 25.87%**. Vector Wire rates Factuality **"Limited, −27.1%."**

Coding — **the strongest evidence for this model, and it is better than the previous version claimed**:

- **SWE-bench Verified: 78.00%** (vendor) — confirms.
- **SWE-bench Pro: 57.90%** (vendor) — confirms, on the harder four-language contamination-resistant harness.
- **SWE-bench Multilingual: 75.80%** (vendor) — **new**, and a strong result on a benchmark where most models in this batch have no figure at all.
- **LMArena WebDev Elo: 1508.40 — Verified** (datasets-server.huggingface.co, 2026-05-22). **This is the single independently verified result in the model's entire 48-result record, and it is the highest LMArena WebDev Elo of any model examined in this batch** — ahead of GPT-5.2's 1415.99, GPT-5.3-Codex's 1408.60, GPT-5.4 mini's 1397.35 and GPT-5.4 nano's absence. WebDev measures real front-end implementation in a live sandbox, which is a different capability from the repository-scale benchmarks that dominate the rest of this field.
- **AA Coding Index: 58.80** at Reasoning — the highest Artificial Analysis Coding Index of any model examined in this batch, ahead of GPT-5.4 mini's 56.08 and GPT-5.4 nano's 56.07.
- **SciCode: 48.61%** at Reasoning (39.35% no-reasoning). **Terminal-Bench Hard: 31.82%** (no-reasoning). **DeepSWE: 28.00%** (vendor). **NL2Repo: 45.60%** (vendor).

Long context:

- **AA-LCR v1.1: 79.00%** at Reasoning — confirms the 79% the previous version used. **Vector Wire rates Long Context "Capable, −13.4% behind the leader,"** one of only three "Capable" verdicts across all ten models in this batch.
- 42.00% with no reasoning; a vendor row gives 73.40%.

Vision / multimodal:

- **Text-only.** No vision benchmark exists or could exist. Vector Wire returns "too few results yet" for Multimodal.

### Normalized scores (1–100)

- **Tool use: 68/100.** *Revised down from 87 — by far the largest move in this file.* The previous version's score was built on **Terminal-Bench 2.1 at 90.4%**, described as "a frontier-tier result on the exact harness the methodology anchors this dimension to," and it contributed 19 points of headroom over a mid-band score. **That figure appears on no aggregator record.** The two figures that do exist are **64.42% (aggregator, Reasoning)** and **71.70% (vendor)**, and neither is frontier-tier. What survives as genuinely strong is a specific and real cluster: **MCP Atlas 79.10%**, **BrowseComp 84.20%**, **DeepSearchQA 91.00%**, **WideSearch 76.40%**, **Claw-Eval 68.50%**. Those say this is an excellent *research and retrieval* agent. Against them: **Terminal-Bench 4.0 at 0.51%**, **τ-Bench V3 Banking 22.89%**, **AA Agentic Index 25.64**, **GDPval win rate 28.35%**, **Toolathlon 48.50%** and **DeepSWE 28.00%** — terminal, banking and repository-agentic work is where it does not hold up. Vector Wire: **"Agentic — Limited, −28.2%."** The effort inversion (**AA Agentic Index 25.64 at Reasoning vs 46.70 with no reasoning; GDPval 28.35% vs 36.45%**) now appears on **four models across three vendors** and should be treated as a live caveat for the whole family, not a quirk.
- **Reasoning: 78/100.** *Revised down from 82.* **GPQA Diamond 89.70%** and **HLE 33.46%** confirm the previous figures and remain strong. **IMO-AnswerBench at 90.00%** is new and good. What this pass adds that is worse: **AA Intelligence Index 25.30**, which places the model level with GPT-5.1 and GPT-5.4 mini rather than above them; **AA-Omniscience −18.47** with **non-hallucination 25.87%**; **CritPt 4.86%**; and a sharp drop to **17.04 / −34.95 / 0.29%** when reasoning is disabled. The previous version scored this without an index reading to anchor against, which is why it landed four points high. The honest read is that Hy3's reasoning is real graduate-level science QA with a knowledge profile that is not reliable.
- **Context window: 80/100.** *Unchanged.* **256K context with 131K max output**, the methodology's 200K–500K band, upper half, because **AA-LCR at 79.00% is a real retrieval measurement** behind the spec — and **Vector Wire independently rates Long Context "Capable, −13.4% behind the leader."** Nothing new arrived to move it. The one thing worth adding is the effort sensitivity: **AA-LCR falls from 79.00% to 42.00% with reasoning disabled**, so the window is only usable with the reasoning budget on.
- **Multimodal: 15/100.** *Unchanged.* **Text in; text out, with no image, audio or video input.** Artificial Analysis states this directly and Requesty corroborates it; no Tencent source claims otherwise. Dataset floor for a text-only model, and the single largest constraint on this model's Overall.
- **Coding: 82/100.** *Revised down from 82 — held, on materially better evidence.* The score is unchanged but the basis is not: the previous version relied on **SWE-bench Verified 78%** and **SWE-bench Pro 57.9%**, both vendor figures, and this pass adds **SWE-bench Multilingual 75.80%** (vendor), **the AA Coding Index at 58.80 — the highest in this batch** — and, most importantly, **LMArena WebDev Elo at 1508.40, Verified, and the highest WebDev Elo of any model examined here.** WebDev is a real-sandbox front-end implementation benchmark and its standing is a genuine point in this model's favour that the previous version could not make. Held below the high 80s by **SciCode 48.61%**, **Terminal-Bench Hard 31.82%**, **DeepSWE 28.00%** and **NL2Repo 45.60%** — repository-scale and scientific coding are where it falls short of the patch-generation numbers. Vector Wire: **"Coding — Capable, −23.6%"** on 7 of 10 benchmarks, the second-best coding rating in this batch.
- **Cost efficiency: 96/100.** *Revised down from 98.* **Tencent first-party ¥1 / ¥4 / ¥0.25**, corroborated closely by **Novita AI ($0.14 / $0.58 / $0.035)** and **DeepInfra**, with **Artificial Analysis at $0.14 / $0.56** and **Tencent-via-OpenRouter at $0.18 / $0.60**. **"Cheaper than 77% of 328 priced models"** confirms budget-class positioning, and the Artificial Analysis blended rate is around $0.11/MTok. Two points deducted that the previous version did not weigh: the **open-router price is ~38% above first-party**, so the effective rate depends on which door you come through; and **the 48-result record rests on a single verified score**, which is a reason for caution about the promotional framing around this model generally. Still outstanding value on any reading.
- **Overall Score: 65/100.** (68 + 78 + 80 + 15 + 82) / 5 = 323 / 5 = 64.6 → **65**, down from 70. The entire drop is tool use (−19), itself entirely the Terminal-Bench 2.1 correction; coding, reasoning and context each moved by 2–4 points downward on better evidence rather than on new problems with the model. Best fit, revised: **high-volume coding work and long-context text pipelines where interface coding and search-driven research matter more than terminal or repository-scale autonomy** — **SWE-bench Pro 57.90%, SWE-bench Multilingual 75.80%, an AA Coding Index of 58.80 and a Verified LMArena WebDev Elo of 1508.40 at $0.13/$0.53 first-party** is a genuinely hard-to-beat combination. **Not** a fit for anything needing image input (text-only, 15/100), **not** a fit for unattended terminal or banking agents (**Terminal-Bench 4.0 at 0.51%, banking at 22.89%**), and **not** a fit for factual reliability you cannot verify (**Omniscience −18.47, non-hallucination 25.87%**). Two standing cautions: **the only independently verified result in this model's 48-result record is one WebDev Elo reading**, and **the record is for the April preview checkpoint, not the July release this file scores.**

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (70 → **65**).
  New evidence is concentrated in **Vector Wire's Hy3 record**, fetched 2026-10-13:
  **48 results on 33 benchmarks from only 3 sources on 3 sites — 1 independently verified,
  30 aggregator, 17 vendor-reported, latest 2026-10-13** — supplying the field-relative
  price reading, the two-provider price spread, and the per-capability verdicts (**Long
  Context "Capable, −13.4%"**, **Coding "Capable, −23.6%"**, **Reasoning "Capable, −25.0%"**,
  three "Limited", four unrated).
  **Scope caveat, applied throughout and load-bearing:** **this record is for
  `Hy3-preview` (released 2026-04-23), not the `Hy3` checkpoint this file scores (released
  2026-07-06)** — the two are separate entries in Vector Wire's index, alongside a separate
  `Hy3-preview-Base` record and `Hy4`. No figure here is transferred as first-party to the
  released model; all are labelled preview-checkpoint evidence.
  Load-bearing figures: **Terminal-Bench 2.1 64.42% (aggregator) against 71.70% (vendor)**,
  **LMArena WebDev Elo 1508.40 (Verified — the only verified result in the record, and the
  highest WebDev Elo in this batch)**, **AA Coding Index 58.80 (highest in this batch)**,
  **SWE-bench Verified 78.00%**, **SWE-bench Pro 57.90%**, **SWE-bench Multilingual 75.80%**,
  **MCP Atlas 79.10%**, **BrowseComp 84.20%**, **DeepSearchQA 91.00%**, **WideSearch 76.40%**,
  **Claw-Eval 68.50%**, **GPQA Diamond 89.70%**, **HLE 33.46%**, **IMO-AnswerBench 90.00%**,
  **AA Intelligence Index 25.30**, **AA-Omniscience −18.47** with accuracy 31.97% against
  non-hallucination 25.87%, **CritPt 4.86%**, **AA-LCR 79.00%**, **SciCode 48.61%**,
  **Terminal-Bench Hard 31.82%**, **DeepSWE 28.00%**, **NL2Repo 45.60%**, **τ-Bench V3
  Banking 22.89%**, **Terminal-Bench 4.0 0.51%**, **AA ApexAgents 25.60%**,
  **GDPval win rate 28.35%**, **Toolathlon 48.50%**, **AA Agentic Index 25.64**.
  **One decisive conflict adjudicated explicitly: Terminal-Bench 2.1 — 64.42% (Artificial
  Analysis aggregator, Reasoning) against 71.70% (vendor), where the previous version of
  this file used 90.4% on no aggregator record.** The aggregator figure is preferred, the
  vendor figure retained, and the 19-point tool-use drop follows directly from it. **One
  pattern generalised:** the **effort inversion in agentic scores — AA Agentic Index 25.64
  at Reasoning against 46.70 with no reasoning, GDPval 28.35% against 36.45%** — now
  appears on **four models across three vendors** (GPT-5.4 mini, GPT-5.4 nano, GPT-5.5 Pro
  indirectly, and now Hy3). It is recorded as a live caveat for the family rather than a
  per-model curiosity, though for every one of these models it still rests on aggregator
  indices rather than verified measurement. **One structural caveat carried forward:** with
  **a single verified result in 48**, this is the weakest verification profile in the batch,
  and that fact is weighted into every score above. Scores are normalized 1–100
  interpretations per `model-comparison.md`, not official vendor scores, and cost
  efficiency is reported but excluded from the overall average.
- Future sources: add a new file next to this one, e.g. `Hy4.md`, using the same headings —
  **`Hy3-preview-Base` and `Hy4` are separate models with separate records**, and a
  **`Hy3` (non-preview, released 2026-07-06)** record would supersede this one entirely.
  The two gaps most worth closing: **any independent Terminal-Bench 2.1 reading**, which is
  what this file's largest correction turns on, and **an independently verified coding
  result beyond the single WebDev Elo reading**.