# GPT-5.4 nano — findings by Space Bunny

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 68 → 70 on a record that has roughly doubled: 92
> results on 47 benchmarks, 27 independently verified, 54 aggregator, 11 vendor-reported,
> from 11 sources, latest 2026-10-12.** The two things worth knowing before anything else
> are both uncomfortable. **Vector Wire now flags the model `Deprecated`,** superseded by
> GPT-5.5 and the GPT-6 line, which is what pulls cost efficiency down 3 points. And the
> vendor **τ²-bench telecom figure of 92.5%** that this file and several peers in this
> folder have been using **reads 76.02% at `xhigh`** on the current record — a 16.5-point
> downward correction on the number carrying most of the tool-use score. Set against
> those: **LiveBench Mathematics 90.98% and Reasoning 81.10% (both Verified)**,
> **FrontierMath Tiers 1–3 at 44.91% (Verified)**, **AA-LCR 76.67%**, and an
> **AA Coding Index of 56.07 that is within 0.01 of GPT-5.4 mini's** — for a model priced
> at a quarter of mini's input rate.

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** The smallest and cheapest member of the GPT-5.4 generation, released 2026-03-17 alongside GPT-5.4 mini. OpenAI positions it for **high-volume classification, extraction, ranking, routing and cheap coding subagents** — API-only, no free ChatGPT route. Five reasoning-effort settings: **`none` / `low` / `medium` / `high` / `xhigh`**. Not a variant or alias of another entry in this dataset. **Status as of 2026-10-13: `Deprecated`** per Vector Wire, with live rate cards still quoted at both Artificial Analysis and OpenAI-via-OpenRouter on 2026-10-13 — the same disagreement between status labels and live pricing noted for GPT-5.1 and GPT-5.2 in this batch, and recorded rather than resolved here.
- **Provider / access:** **OpenAI API only** — Responses API and Chat Completions. Also Azure OpenAI, AWS Bedrock, Google Vertex AI, OpenRouter. No free ChatGPT tier, unlike mini.
- **Release / knowledge:** released **2026-03-17**. Knowledge cutoff as published in OpenAI's developer documentation.
- **IDs:** `gpt-5.4-nano`; dated snapshot `gpt-5.4-nano-2026-03-17`; per-effort IDs `gpt-5-4-nano-medium`, `gpt-5.4-nano-high`; non-reasoning track `gpt-5-4-nano-non-reasoning`; batch `gpt-5.4-nano:batch`.
- **Context window:** **400,000 tokens input, 128,000 tokens max output** (OpenAI launch post and developer docs; the max-output figure is corroborated by llm-stats). The same window as GPT-5.4 mini and full GPT-5.4. OpenAI's long-context measurements are at **64K–128K and 128K–256K**, well below the advertised ceiling.
- **Modalities:** **text and image in; text out.** Reasoning: yes, switchable across five settings. Tool calling, function calling, web search, structured output / JSON schema, prompt caching and computer use supported. No documented audio or video input.
- **Pricing (as of 2026-10-13):** **$0.20 / MTok input, $1.25 / MTok output**, cached input **$0.02**, Batch pricing published at a further discount. Confirmed identical at Artificial Analysis and OpenAI-via-OpenRouter on 2026-10-13. **Vector Wire's field-relative reading: "cheaper than 58% of 328 priced models"** at a 3:1 blend — genuinely budget-class, though GPT-5 nano at $0.05/$0.40 remains cheaper.
- **Architecture:** proprietary. Parameter count not disclosed. Throughput reported in the high 170s to 180 tokens/s.

### Raw benchmarks found

> Source ledger: 92 results / 47 benchmarks / 11 sources on 8 sites — **27
> independently verified, 54 aggregator, 11 vendor-reported**. Vector Wire rates **Long
> Context "Capable, −16.9%"** and **Instruction Following "Capable, −24.1%"** as its two
> best capabilities, and six as **"Limited"** — Reasoning −29.4%, Multimodal −33.9%,
> Coding −35.3%, **Factuality −37.0%**, **Agentic −41.7%**, **Math −48.4%** — with **Safety
> and Multilingual "too few results yet."**

Agent / tool use — **the largest correction in this file**:

- **τ²-Bench Telecom: 76.02%** at `xhigh` (52.63% medium, 34.80% no-reasoning). **This corrects the vendor 92.5% figure this file used on 2026-10-01 — a 16.5-point downward revision.** That vendor number is still carried by several peer reports in this folder, so the correction is worth flagging across the dataset.
- **MCP Atlas: 56.10%** (vendor) — confirms, and still a strong schema-bound tool-calling result for the tier, close to GPT-5.4 mini's verified 56.70%.
- **OSWorld-Verified: 39.00%** — confirms the "computer-use collapse" against mini's 72.10%. **A 33-point gap at 3.75× the input price is the single clearest tier distinction in the family.**
- **Terminal-Bench 4.0: 0.51%.** Effectively zero.
- **AA Agentic Index: 17.74 at `xhigh`, against 41.64 at `medium` and 25.92 with no reasoning.** **The same effort inversion recorded for GPT-5.4 mini** — more reasoning tokens, worse agentic score. On two sibling models this is now a pattern rather than an anomaly, which raises its weight considerably even though both rest on aggregator indices rather than verified measurement.
- **GDPval win rate: 22.38%** at `xhigh` (34.91% medium, 9.04% no-reasoning) — the same inversion again.
- **τ-Bench V3 Banking: 27.42%. AA IT-Bench SRE: 24.39%** at `xhigh`. **AA ApexAgents: 24.93%. Finance Agent v2: 38.22%. Toolathlon: 35.50%** — confirms.
- **Terminal-Bench 2.1: 60.67%**, **Terminal-Bench 2.0: 46.30%**, **Terminal-Bench Hard: 42.42%** at `xhigh`.

Reasoning / knowledge:

- **LiveBench at `xhigh` — all Verified: Mathematics 90.98%, Reasoning 81.10%, Coding 70.84%, Instruction Following 67.20%, Agentic Coding 46.77%, Data Analysis 67.64%, Language 62.51.** New suite in this file. **Mathematics at 90.98% is the highest LiveBench mathematics reading of any model examined in this batch**, and is a genuinely surprising result for a $0.20/$1.25 model.
- **FrontierMath Tiers 1–3 (v2): 44.91% — Verified** (20.35% low, 4.56% no-reasoning); **Tier 4: 12.20% — Verified** (6.25% at an earlier date). **The Tiers 1–3 / Tier 4 split is 45% against 12%** — capable of competition-style problems, not of the frontier tier.
- **GPQA Diamond: 81.72%** at `xhigh` (76.06% medium, 55.76% none), against an 82.80% vendor figure. Confirms.
- **ARC-AGI-2: 5.69% — Verified** at `xhigh` (3.61% high, 1.94% medium, 1.53% low). **ARC-AGI-1: 51.50% — Verified** at `xhigh` (38.17% high, 33.00% medium, 18.33% low). Abstract reasoning is effectively absent.
- **Humanity's Last Exam: 28.27%** at `xhigh` (15.94% medium, 4.08% none). **CritPt: 9.25%**. **IFBench: 75.92%** — Vector Wire rates this a "Capable" capability.
- **Artificial Analysis Intelligence Index: 20.72** at `xhigh` (20.01 medium, 11.69 no-reasoning).
- **AA-Omniscience: −29.47** at `xhigh` (−18.03 medium, **−37.48** none); accuracy 25.67%, **non-hallucination 25.83%**.

Factuality — **the dimension this file should have weighted more heavily**:

- **Vectara (Verified, snapshot 20260317): HHEM hallucination rate 3.10 — the lowest of any model in this batch** — answer rate **100.00%**, **factual consistency 96.90%**, average summary length 144.40 words. These are the best summarisation-fidelity numbers anywhere in this batch.
- **SimpleQA Verified: 11.70% — Verified** (Epoch) — very low, and the honest counterweight to the Vectara figures. On closed-set factual recall this model is weak; on summarisation fidelity it is excellent. Vector Wire rates Factuality **"Limited, −37.0%."**

Long context:

- **AA-LCR v1.1: 76.67%** at `xhigh` (67.33% medium, 29.67% no-reasoning) — confirms, and **Vector Wire rates Long Context "Capable, −16.9% behind the leader,"** one of only two "Capable" verdicts for this model.
- OpenAI's own published retrieval measurements stand: **MRCR v2 44.2% at 64K–128K falling to 33.1% at 128K–256K**; **GraphWalks BFS 73.4% and parents 50.8%** at 0–128K.

Coding:

- **SWE-bench Pro: 52.40%** — confirms, and remains the standout: within 5.3 points of full GPT-5.4 at one-fifth of its input price.
- **AA Coding Index: 56.07** at `xhigh` (35.03 medium, 27.89 none) — **within 0.01 of GPT-5.4 mini's 56.08**, which is the most striking single figure in this file. On this index the nano is indistinguishable from the model priced at 3.75× its input rate.
- **LiveBench Coding 70.84% and Agentic Coding 46.77% (both Verified)** — new.
- **Terminal-Bench 2.1 60.67%**, **Terminal-Bench 2.0 46.30%**, **Terminal-Bench Hard 42.42%**, **SciCode 47.22%** at `xhigh` (38.43% medium, 35.19% none).
- SWE-bench Verified / LiveCodeBench / DeepSWE / Aider Polyglot: still **no verified public score found** on this record, though peer reports in this folder cite SWE-bench Verified 69.8% (Vals) and LiveCodeBench 84.0% (BenchLM); neither appears in the aggregator record and neither is treated as first-party here.

Vision / multimodal:

- **MMMU-Pro: 65.38%** at `xhigh` (59.54% medium, 43.76% none), against a **66.10%** vendor figure. Confirms.
- **LMArena Vision Elo: 1195.96 — Verified** (2026-09-21) and **1198 — Verified** (2026-05-06) — **first measurements**, and roughly 50 Elo below GPT-5.4 mini's 1245–1256 and below GPT-5 nano's 1159 is the only nano that trails it.
- **OmniDocBench 1.5: 75.81%** (vendor), against mini's 87.37%.

### Normalized scores (1–100)

- **Tool use: 50/100.** *Revised down from 55.* The previous version credited **τ²-bench telecom 92.5%** as "near-frontier" and **MCP Atlas 56.1%**, and built an argument that nano was "not simply GPT-5.4 mini, cheaper" for schema-bound tool calling. **The τ² figure is now 76.02% at `xhigh`, a 16.5-point downward correction**, and that correction removes most of the basis for the argument. What remains genuinely strong is **MCP Atlas 56.10%**, which is close to mini's verified 56.70%, plus **IFBench 75.92%** and **LiveBench Instruction Following 67.20% (Verified)** — nano is a good *structured* tool caller. What is now measured and poor: **Terminal-Bench 4.0 at 0.51%**, **OSWorld-Verified 39.00%** against mini's 72.10%, **τ-Bench V3 Banking 27.42%**, **AA IT-Bench SRE 24.39%**, **AA ApexAgents 24.93%**, **Finance Agent v2 38.22%**, **Toolathlon 35.50%**, and an **AA Agentic Index of 17.74 at `xhigh` against 41.64 at `medium`**. That last inversion now appears on **both** GPT-5.4 models in this batch, which is a pattern rather than an oddity. Vector Wire: **"Agentic — Limited, 41.7% behind the leader."**
- **Reasoning: 76/100.** *Revised up from 76 — held, on substantially better evidence.* **LiveBench Mathematics at 90.98% and Reasoning at 81.10%, both Verified**, are the strongest new results and the first genuinely surprising ones — the highest LiveBench mathematics reading in this batch, from a model priced at $0.20/$1.25. **FrontierMath Tiers 1–3 at 44.91% (Verified)** is strong for the tier, and **IFBench 75.92%** is rated "Capable" by Vector Wire. Confirmed: **GPQA 81.72%**, **HLE 28.27%**, **CritPt 9.25%**, **AA Intelligence Index 20.72**. Held down by **ARC-AGI-2 at 5.69% (Verified)** — effectively zero abstract reasoning — **FrontierMath Tier 4 at 12.20%**, **AA-Omniscience −29.47**, **non-hallucination 25.83%** and **SimpleQA Verified 11.70%**. The score is unchanged because the previous version was already scoring the measured surface accurately; what changed is that the reasoning is now anchored on verified rows rather than vendor figures alone.
- **Context window: 78/100.** *Revised up from 72.* **400,000 tokens in, 128,000 out**, and **AA-LCR v1.1 at 76.67%** confirms that the first ~128K is genuinely usable. The previous version discounted this dimension heavily on the strength of **MRCR falling from 44.2% to 33.1%** and **GraphWalks parents at 50.8%**; those measurements stand and are still recorded. But **GraphWalks BFS at 73.4%** and **AA-LCR at 76.67%** show that structural reasoning and long-context reasoning both hold up better than the MRCR needle count alone suggests, and **Vector Wire rates Long Context "Capable, −16.9%,"** one of only two "Capable" verdicts for this model. Not at the 84 band ceiling because the reliable region is closer to 128K than to 400K.
- **Multimodal: 70/100.** *Revised up from 68.* **Text and image in; text out.** **MMMU-Pro 65.38%** confirms the 66.1% vendor figure to within a point. **OmniDocBench 1.5 at 75.81%** is usable document parsing, though 11 points behind mini's 87.37%. **Two Verified LMArena Vision Elo readings, 1195.96 and 1198**, are new human-preference data and place nano roughly 50 Elo below mini — so vision is real but clearly the weaker half of the tier. Capped at 70 by the methodology's ceiling for non-audio input: no audio, video or PDF input is documented.
- **Coding: 74/100.** *Revised up from 70.* **SWE-bench Pro 52.40%** confirms and remains the headline — within 5.3 points of full GPT-5.4 at one-fifth the input price. **The AA Coding Index at 56.07 is within 0.01 of GPT-5.4 mini's 56.08**, which is the most striking comparison in this file: on this composite index the nano is indistinguishable from a model priced at 3.75× its input rate. **LiveBench Coding 70.84% (Verified)** supports that. What holds it back is unchanged: **Terminal-Bench 2.0 at 46.30%**, **Terminal-Bench Hard 42.42%**, **SciCode 47.22%**, **LiveBench Agentic Coding 46.77%**, and no SWE-bench Verified or LiveCodeBench figure on this record. It writes good patches cheaply; it does not drive a terminal or an agentic loop.
- **Cost efficiency: 90/100.** *Revised down from 93.* Unchanged rate card at **$0.20 / $1.25** with a **$0.02** cache hit and published Batch discount, confirmed identical at both providers on 2026-10-13, and **"cheaper than 58% of 328 priced models"** supports the budget-class reading. What changed is the **Deprecated** flag: this is now a model being retired, and the price advantage is against a successor rather than a live alternative. It remains outstanding value for what it does — GPQA 81.7%, SWE-bench Pro 52.4% and an AA Coding Index of 56.07 at $1.45 of blended rate — and the previous version's caveats stand: **API-only with no free ChatGPT route**, and output billed at 6.25× input on a model whose effort settings sweep to `xhigh`.
- **Overall Score: 70/100.** (50 + 76 + 78 + 70 + 74) / 5 = 348 / 5 = 69.6 → **70**, up from 68. **Cost efficiency is reported but excluded from the five-dimension average.** The overall rises 2 because coding (+4), context (+6) and multimodal (+2) all improved on verified evidence, more than offsetting tool use (−5). What the fuller record shows is a model with a **genuinely surprising reasoning and coding core** — LiveBench Mathematics 90.98%, LiveBench Reasoning 81.10%, FrontierMath Tiers 1–3 44.91%, SWE-bench Pro 52.40%, an AA Coding Index matching mini's to two decimal places, and **the lowest Vectara hallucination rate in this batch at 3.10 with 96.90% factual consistency** — wrapped in an agentic and factual-reliability shell that does not work: **Terminal-Bench 4.0 at 0.51%, OSWorld at 39.00%, banking agentics at 27.42%, SimpleQA at 11.70%, Omniscience at −29.47**. Best fit, unchanged in substance and better quantified: **API-only high-volume classification, extraction, ranking, routing and coding subagents**, where the 400K window lets one cheap call replace many and where verification is cheap because the model is accurate on the input it was given. **Not** a fit for computer use, agentic loops, abstract reasoning, or any query whose answer you cannot cheaply check — and note that the model is **deprecated**, so GPT-5.4 mini or the GPT-5.5-generation equivalents are the durable choice.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (68 → **70**).
  New evidence is concentrated in **Vector Wire's GPT-5.4 nano record**, fetched
  2026-10-13: **92 results on 47 benchmarks from 11 sources on 8 sites — 27
  independently verified, 54 aggregator, 11 vendor-reported, latest 2026-10-12** —
  supplying the **`Deprecated` status flag**, the field-relative price reading, and the
  per-capability verdicts (**Long Context "Capable, −16.9%"** and **Instruction Following
  "Capable, −24.1%"**, six "Limited" including **Factuality at −37.0%** and **Math at
  −48.4%**, two unrated).
  Load-bearing figures: **τ²-Bench Telecom 76.02% at `xhigh`**, **Terminal-Bench 4.0
  0.51%**, **AA Agentic Index 17.74 (`xhigh`) against 41.64 (`medium`)**, **OSWorld-Verified
  39.00%**, **MCP Atlas 56.10%**, **GDPval win rate 22.38%**, **τ-Bench V3 Banking 27.42%**,
  **AA IT-Bench SRE 24.39%**, **AA ApexAgents 24.93%**, **Finance Agent v2 38.22%**,
  **Toolathlon 35.50%**, **the full LiveBench suite at `xhigh` — Mathematics 90.98,
  Reasoning 81.10, Coding 70.84, Instruction Following 67.20, Agentic Coding 46.77, Data
  Analysis 67.64, Language 62.51, all Verified**, **FrontierMath Tiers 1–3 44.91% and
  Tier 4 12.20% (both Verified)**, **GPQA 81.72%**, **HLE 28.27%**, **CritPt 9.25%**,
  **IFBench 75.92%**, **AA Intelligence Index 20.72**, **ARC-AGI-2 5.69% and ARC-AGI-1
  51.50% (both Verified)**, **AA-Omniscience −29.47** with accuracy 25.67% against
  non-hallucination 25.83%, **SimpleQA Verified 11.70% (Verified, Epoch)**, **Vectara HHEM
  3.10 with 96.90% factual consistency and 100.00% answer rate (Verified)**,
  **AA-LCR 76.67%**, **SWE-bench Pro 52.40%**, **AA Coding Index 56.07**,
  **Terminal-Bench 2.1 60.67% / 2.0 46.30% / Hard 42.42%**, **SciCode 47.22%**,
  **MMMU-Pro 65.38%**, **two Verified LMArena Vision Elo readings (1195.96 / 1198)**,
  **OmniDocBench 1.5 75.81%**.
  **One large correction, one pattern, one unresolved status conflict.** The correction:
  **τ²-Bench Telecom — the vendor 92.5% this file used on 2026-10-01 against 76.02% at
  `xhigh` on the current record**; the aggregator figure is used, and this is what drives
  tool use down 5 points. **Several peer reports in this folder also carry the 92.5%
  figure and should be revisited.** The pattern: **the AA Agentic Index is lower at
  `xhigh` than at `medium` on both GPT-5.4 models** (nano 17.74 vs 41.64; mini 19.65 vs
  40.27), with GDPval win rate inverting the same way on both. This still rests on
  aggregator indices rather than verified measurement, but two independent models
  reproducing it raises its weight, and it is flagged as the single most actionable thing
  to test on your own workloads. The conflict: **`Deprecated` on Vector Wire against live
  rate cards dated 2026-10-13 at both Artificial Analysis and OpenAI-via-OpenRouter** —
  the same disagreement recorded for GPT-5.1 and GPT-5.2 in this batch, and not resolved
  here. Scores are normalized 1–100 interpretations per `model-comparison.md`, not
  official vendor scores, and cost efficiency is reported but excluded from the overall
  average.
- Future sources: add a new file next to this one, e.g. `GPT_5_4_Nano_Recheck.md`, using
  the same headings — **SWE-bench Verified and LiveCodeBench are the two measurements
  most worth adding** (peer reports in this folder cite 69.8% and 84.0% respectively,
  neither of which appears in the aggregator record), and **the `none` / `low` / `medium`
  effort tiers are worth scoring separately** given the agentic inversion. The
  GPT-5.5- and GPT-6-generation successors are also worth a fresh file, since this
  checkpoint is deprecated.