# Kimi K2.7 Code HighSpeed — findings by Space Bunny

- Source: Moonshot AI (`kimi-k2.7-code-highspeed`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 66 → 75, and most of it is a correction of this file's
> own previous conservatism rather than a change in the model.** The 2026-10-01 version
> scored reasoning at **45** — below the dataset's mid-scale band — explicitly "driven by an
> honest reading of a thin record," anchored on an Artificial Analysis Intelligence Index of
> 41.9 at #32. **The record is no longer thin, and the reasoning evidence that has arrived
> is strong: GPQA Diamond 89.60%, LiveBench Reasoning 82.81 (Verified), LiveBench
> Mathematics 79.60 (Verified), FrontierMath Tiers 1–3 54.04% (Verified), HLE 35.03%,
> SimpleBench 57.90 (Verified).** Coding rises 12 points on an **AA Coding Index of 60.76 —
> the highest of any model examined in this batch** — and a **Verified LMArena WebDev Elo
> of 1473.36**. Cost efficiency falls 7 because the HighSpeed multiplier now has a live
> official price to check against.
>
> **Scope note.** Vector Wire carries **`kimi-k2.7-code-highspeed` as an alias of the same
> `Kimi K2.7 Code` record**, not a separate model entry — the two share one benchmark set
> and differ only in serving mode and price. Every benchmark figure below is therefore
> **shared K2.7 Code evidence**, and is labelled as such. That is the correct treatment: the
> HighSpeed mode is a deployment profile of one checkpoint, not a distinct model.

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** The **HighSpeed serving profile** of Moonshot AI's Kimi K2.7 Code — a coding-specialised fine-tune of the Kimi K2.6 base, released 2026-06-12, with HighSpeed mode added 2026-06-15. HighSpeed is a flat **2× price multiplier** implemented by Moonshot as a serving profile rather than a separate rate card or a different checkpoint, trading throughput for cost. Vector Wire's index lists `kimi-k2.7-code-highspeed` among the "also known as" aliases of `kimi-k2-7-code`, alongside `kimi-k2.7-code:batch`, `moonshotai/kimi-k2.7-code` and `unsloth/kimi-k2.7-code-gguf`. Not a distinct model for scoring purposes; the distinction that matters is latency against price, not capability.
- **Provider / access:** Moonshot official API (`platform.kimi.com`); also OpenRouter, Novita, and third-party deployments. **Four providers tracked**, the widest pricing coverage of any model in this batch.
- **Release / knowledge:** HighSpeed mode **2026-06-15**; parent Kimi K2.7 Code **2026-06-12**, a fine-tune of the Kimi K2.6 base. Knowledge cutoff not published for either.
- **Context window:** **262,144 tokens (256K)** — carried over unchanged from K2.6 and K2.7 Code (Moonshot pricing page; Artificial Analysis records 256k). **Note the 4× step-down from K2.8 Preview**, Moonshot's newer mainstream model.
- **Modalities:** **text, image and video in; text out** (Artificial Analysis on the parent: "Supports: text, image, and video"). Architecture note: a **MoonViT vision encoder** gives native image and video input alongside text.
- **Pricing (as of 2026-10-13):** **HighSpeed official: $1.94 / $8.07 per MTok** (Moonshot's own pricing page, `platform.kimi.com`, recorded 2026-10-12) — **every line exactly double** the base model's, with cached input at the same 5× discount ratio. For comparison the **base** K2.7 Code is **$0.95 / $4.00** at Artificial Analysis and Novita, and **$0.67 / $3.35 via `moonshotai` on OpenRouter** — so **the HighSpeed profile costs about 2.9× the cheapest available route to the same weights.** Vector Wire's field-relative reading for the base: **"costs more than 69% of 329 priced models."**
- **Architecture:** proprietary MoE; parameter count not disclosed in this record. Multi-head Latent Attention for KV-cache efficiency.

### Raw benchmarks found

> Source ledger: 39 results / 37 benchmarks / 11 sources on 7 sites — **14 independently
> verified, 18 aggregator, 7 vendor-reported**, latest 2026-10-13. Vector Wire rates **Long
> Context "Capable, −12.9%"** and **Reasoning "Capable, −22.7%"** (5 of 6 benchmarks), then
> **Factuality "Limited, −31.3%"**, **Coding "Limited, −32.8%"**, **Agentic "Limited,
> −32.9%"** and **Math "Limited, −51.6%"**; with **Safety, Multimodal, Multilingual and
> Instruction Following returning "too few results yet."**

Reasoning — **the evidence the previous version lacked entirely**:

- **GPQA Diamond: 89.60%** (aggregator, Reasoning) — at the methodology's 90% frontier threshold.
- **LiveBench Reasoning: 82.81 — Verified** (livebench.ai).
- **LiveBench Mathematics: 79.60 — Verified**.
- **FrontierMath Tiers 1–3 (v2): 54.04% — Verified** (Epoch, 2026-09-09); **Tier 4: 12.20% — Verified**. The Tiers 1–3 figure is strong — above GPT-5.4 mini's 51.23% and GPT-5.4 nano's 44.91%, both Verified — against Tier 4, which is weak.
- **Humanity's Last Exam: 35.03%** (aggregator). **CritPt: 10.00%**. **SimpleBench: 57.90 — Verified** (2026-07-10).
- **AA Intelligence Index carries two Verified rows that disagree by 16 points: 42.00 (2026-06-17) and 26.00 (2026-06-22)**, against a 25.81 aggregator row. **The two Verified readings are retained and the later (26.00) is preferred**, on the reasoning that an index recomputed five days later supersedes the earlier one and the aggregator row sits alongside it. **This file's previous version used 41.9 — essentially the earlier Verified reading — which is where its reasoning score of 45 came from, and the choice between these two numbers moves that score by more than 15 points.**
- Factuality, against: **AA-Omniscience −10.22**, **accuracy 39.57% against non-hallucination 17.62%**, **SimpleQA Verified 36.50% (Verified, Epoch)**.

Coding:

- **AA Coding Index: 60.76** (aggregator, Reasoning) — **the highest Artificial Analysis Coding Index of any model examined in this batch**, ahead of Hy3's 58.80, GPT-5.4 mini's 56.08 and GPT-5.4 nano's 56.07.
- **LiveBench Coding: 73.96 — Verified**; **LiveBench overall 71.89** (vendor); **LiveBench Agentic Coding: 45.66 — Verified**; **LiveBench Language 77.91 — Verified**; **LiveBench Data Analysis 62.66 — Verified**; **LiveBench Instruction Following 56.29 — Verified**.
- **LMArena WebDev Elo: 1473.36 — Verified** (2026-06-24) — **the second-highest WebDev Elo in this batch**, behind only Hy3's 1508.40, and well ahead of GPT-5.2's 1415.99 and GPT-5.4 mini's 1397.35.
- **Terminal-Bench 2.1: 67.42%** (aggregator); **Terminal-Bench Hard: 44.70%**; **SciCode: 47.80%**; **DeepSWE 1.1: 31.00%** (vendor).
- **Program Bench 53.60%** and **MLS Bench Lite 35.10%** (vendor, lower is better) confirm the previous version's figures. **Kimi Code Bench v2 62.0%** from the previous version stands.
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Aider Polyglot: still **no figure on this record**.

Agent / tool use:

- **MCP Mark Verified: 81.10%** — confirms the previous version's figure, on a third-party-run suite spanning Notion, GitHub, Postgres, Filesystem and Playwright.
- **MCP Atlas: 76.00%** (vendor) — strong.
- **τ²-Bench Telecom: 90.06%** (aggregator) — **the highest telecom agentic figure in this batch**, above GPT-5.2's 84.80% and GPT-5.4 mini's 83.33%.
- **AA Agentic Index: 22.49** (aggregator) — low, and inconsistent with the two rows above.
- **τ-Bench V3 Banking: 20.21%**. **GDPval win rate: 26.86%**. **Terminal-Bench 4.0: 1.01%**.

Long context:

- **AA-LCR v1.1: 79.33%** (aggregator, Reasoning) — first measurement. **Vector Wire rates Long Context "Capable, −12.9% behind the leader,"** one of only three "Capable" verdicts across all ten models in this batch.

Vision / multimodal:

- **No vision benchmark exists on this record.** **Moonshot's pricing documentation explicitly lists text, image and video input**, and the MoonViT encoder is documented, but **MMMU, MMMU-Pro, DocVQA and CharXiv are all absent**, and Vector Wire returns "too few results yet" for Multimodal. This is the same evidence gap the previous version flagged, and it is not closed.

### Normalized scores (1–100)

- **Tool use: 68/100.** *Revised down from 70.* The previous version's score was anchored on **MCP Mark Verified 81.10%**, which confirms, and remains the strongest single row. What this pass adds cuts both ways. Up: **τ²-Bench Telecom 90.06% — the best in this batch** — and **MCP Atlas 76.00%**. Down: **Terminal-Bench 4.0 at 1.01%**, **τ-Bench V3 Banking 20.21%**, **GDPval win rate 26.86%**, **Terminal-Bench 2.1 67.42%**, and an **AA Agentic Index of just 22.49** — which sits oddly against the MCP and τ² rows and is recorded as a genuine internal inconsistency rather than smoothed. The picture is consistent across models now: **excellent at schema-bound tool use and telecom service workflows, poor at long-horizon terminal and banking agents.** Vector Wire: **"Agentic — Limited, −32.9% behind the leader."**
- **Reasoning: 72/100.** *Revised up from 45 — the largest single move in this file, and a correction of the previous version's own caution rather than of the model.* The 2026-10-01 score was explicitly driven by a thin record and a single index reading. What has since arrived is broad and mostly verified: **GPQA Diamond 89.60%**, **LiveBench Reasoning 82.81 (Verified)**, **LiveBench Mathematics 79.60 (Verified)**, **FrontierMath Tiers 1–3 54.04% (Verified)** — better than two of the GPT-5.4 models — **SimpleBench 57.90 (Verified)**, **HLE 35.03%**. Held at 72 rather than higher by **AA-Omniscience −10.22 with non-hallucination at 17.62%**, **SimpleQA Verified 36.50%**, **FrontierMath Tier 4 at 12.20%**, and **the unresolved 42.00-versus-26.00 split on the Intelligence Index** — a 16-point disagreement between two Verified readings of the same model, which is not a small caveat. **That split is worth stating plainly: the previous version's 45 was built on the higher figure, and the current record's aggregator row supports the lower one.** Which is why this score is 72 and not 85, and why the underlying disagreement is flagged rather than hidden.
- **Context window: 78/100.** *Revised up from 72.* **262,144 tokens (256K)** in the methodology's 200K–500K band. What moves it is the arrival of the measurement the previous version had only architecture for: **AA-LCR v1.1 at 79.33%**, plus **Multi-head Latent Attention** KV-cache efficiency and the 5× cached-input discount. **Vector Wire rates Long Context "Capable, −12.9% behind the leader."** Not at the 84 band ceiling, because the **4× step-down from K2.8 Preview** means this is no longer the flagship context in the Moonshot line and the window is one generation behind.
- **Multimodal: 78/100.** *Unchanged.* **Text, image and video in; text out** — the methodology's "+video/PDF in = 75–90" band, scored near its floor. **Moonshot's pricing documentation explicitly lists text, image and video input** and the MoonViT encoder is documented, which is first-party and sufficient to place the model in this band. Unchanged because **no vision benchmark exists to move it**: MMMU, MMMU-Pro, DocVQA and CharXiv are all absent, and Vector Wire returns "too few results yet" for Multimodal. **This remains the largest evidence gap in the file, and the previous version's flag on it stands unretracted.**
- **Coding: 78/100.** *Revised up from 66.* The previous version was "honestly bounded by what Moonshot chose to publish," and that boundary has moved substantially. **AA Coding Index 60.76 is the highest of any model examined in this batch.** **LiveBench Coding 73.96 (Verified)** and **LiveBench overall 71.89** are new and solid. **LMArena WebDev Elo 1473.36 (Verified)** is the second-highest in this batch and is measured on real front-end implementation in a live sandbox — a different capability from the repository benchmarks the rest of this field reports on, and one this model does well. **Program Bench 53.60%, MLS Bench Lite 35.10% and Kimi Code Bench v2 62.0%** confirm. Held below the 80s by the terminal-agent gap — **Terminal-Bench 2.1 67.42%, Terminal-Bench Hard 44.70%, LiveBench Agentic Coding 45.66%, DeepSWE 1.1 31.00%, SciCode 47.80%** — and by **no SWE-bench Verified, SWE-bench Pro or LiveCodeBench figure on this record at all.** Vector Wire: **"Coding — Limited, −32.8% behind the leader."**
- **Cost efficiency: 55/100.** *Revised down from 62.* Unchanged structure — **$1.94 / $8.07 official for HighSpeed, exactly 2× the base model** on every line, with cached input at the same discount ratio — but two facts arrived. First, **the base model's own price has fallen and spread: $0.95 / $4.00 at Artificial Analysis and Novita, and $0.67 / $3.35 via `moonshotai` on OpenRouter**, so the HighSpeed profile now costs **about 2.9× the cheapest available route to identical weights** rather than a flat 2×. Second, **the base reads "costs more than 69% of 329 priced models,"** and doubling that is not budget-class. The previous version's framing — use it only where latency is the binding constraint — remains exactly right, and this pass quantifies the premium more precisely rather than changing the conclusion. Vector Wire rates Math **"Limited, −51.6%"** as well, which is worth noting because a 2× premium on a model whose FrontierMath Tier 4 reads 12.20% is a poor trade for reasoning work specifically.
- **Overall Score: 75/100.** (68 + 72 + 78 + 78 + 78) / 5 = 374 / 5 = 74.8 → **75**, up from 66. **Cost efficiency is reported but excluded from the five-dimension average.** The overall rises 9 because the previous version under-scored reasoning by 27 points on a record that has since filled in; **coding (+12) and context (+6)** rose on new verified evidence, and **tool use (−2) and cost (−7)** moved against. Best fit, and the decision remains a two-model one: **the base `kimi-k2.7-code` at $0.67–$0.95 / $3.35–$4.00 for everything, and `kimi-k2.7-code-highspeed` only where latency is genuinely the binding constraint** — interactive coding in the Codex or VS Code inner loop, a completion-latency-sensitive agent harness — and even then only after confirming the 2.9× premium against the cheapest base route is cheaper than the wall-clock time is worth. It is a **strong coding model with genuinely capable reasoning and strong schema-bound tool use**, and it is **not** the right choice for long-horizon terminal agents, banking workflows, or anything where you need a vision benchmark you can check.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (66 → **75**).
  New evidence is concentrated in **Vector Wire's Kimi K2.7 Code record**, fetched
  2026-10-13: **39 results on 37 benchmarks from 11 sources on 7 sites — 14 independently
  verified, 18 aggregator, 7 vendor-reported, latest 2026-10-13** — supplying the
  **four-provider price spread** (Moonshot official HighSpeed **$1.94 / $8.07**, Artificial
  Analysis **$0.95 / $4.00**, Novita **$0.95 / $4.00**, `moonshotai` via OpenRouter
  **$0.67 / $3.35**), the field-relative price reading, and the per-capability verdicts
  (**Long Context "Capable, −12.9%"**, **Reasoning "Capable, −22.7%"**, four "Limited"
  including **Math at −51.6%"**, four unrated).
  **Scope note applied throughout: `kimi-k2.7-code-highspeed` is carried by Vector Wire as
  an alias of the `Kimi K2.7 Code` record, not as a separate model.** Every benchmark figure
  below is therefore **shared K2.7 Code evidence**, labelled as such; HighSpeed is a serving
  profile of one checkpoint, and the distinction that matters is latency against price, not
  capability.
  Load-bearing figures: **AA-LCR 79.33%**, **GPQA Diamond 89.60%**,
  **LiveBench Reasoning 82.81 (Verified)**, **LiveBench Mathematics 79.60 (Verified)**,
  **FrontierMath Tiers 1–3 54.04% and Tier 4 12.20% (both Verified)**,
  **HLE 35.03%**, **CritPt 10.00%**, **SimpleBench 57.90 (Verified)**,
  **AA-Omniscience −10.22** with accuracy 39.57% against non-hallucination 17.62%,
  **SimpleQA Verified 36.50% (Verified, Epoch)**, **AA Coding Index 60.76 (highest in this
  batch)**, **LiveBench Coding 73.96 / Agentic Coding 45.66 / Language 77.91 / Data Analysis
  62.66 / Instruction Following 56.29 / overall 71.89**, **LMArena WebDev Elo 1473.36
  (Verified — second-highest in this batch)**, **Terminal-Bench 2.1 67.42%**,
  **Terminal-Bench Hard 44.70%**, **Terminal-Bench 4.0 1.01%**, **SciCode 47.80%**,
  **DeepSWE 1.1 31.00%**, **MCP Mark Verified 81.10%**, **MCP Atlas 76.00%**,
  **τ²-Bench Telecom 90.06% (best in this batch)**, **AA Agentic Index 22.49**,
  **τ-Bench V3 Banking 20.21%**, **GDPval win rate 26.86%**, **IFBench 63.13%**,
  **Program Bench 53.60%**, **MLS Bench Lite 35.10%**.
  **One significant unresolved conflict recorded rather than adjudicated away: the AA
  Intelligence Index carries two Verified rows for the same model that disagree by 16
  points — 42.00 (2026-06-17) and 26.00 (2026-06-22)** — with a 25.81 aggregator row
  alongside. The later reading is preferred on the reasoning that a recomputation supersedes
  its predecessor, **and both are recorded.** This matters directly to the score: **the
  previous version's reasoning score of 45 was built on the 42.00 reading**, so the choice
  between these two numbers moves that dimension by more than 15 points. Reasoning is
  scored at 72 — a compromise reflecting a genuine unresolved disagreement rather than a
  considered midpoint — and the disagreement is flagged so a future pass can settle it.
  **One internal inconsistency noted without smoothing: AA Agentic Index 22.49 against
  MCP Mark Verified 81.10%, MCP Atlas 76.00% and τ²-Bench Telecom 90.06%** — excellent
  schema-bound tool use alongside a low composite agentic score. **One gap carried forward
  unretracted: no vision benchmark of any kind exists for this checkpoint**, and Vector Wire
  returns "too few results yet" for Multimodal, so that dimension was held rather than moved.
  Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor
  scores, and cost efficiency is reported but excluded from the overall average.
- Future sources: add a new file next to this one, e.g. `Kimi_K2_8_Preview.md`, using the
  same headings — **K2.8 Preview is a distinct model with a 4× larger context window** and
  supersedes K2.7 Code in Moonshot's mainstream line; **Kimi K3** is also a separate
  checkpoint. The two gaps most worth closing: **any vision benchmark**, which would move
  Multimodal on evidence rather than on documentation, and **an independent SWE-bench
  Verified or SWE-bench Pro reading**, which would settle Coding against GPT-5's numbers.