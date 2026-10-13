# GPT-5.1 — findings by Space Bunny

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Vector Wire now flags GPT-5.1 as `Deprecated`, and independent
> coverage has gone from launch-table figures to 105 results on 66 benchmarks — 41
> independently verified, 34 aggregator, 15 vendor cross-reference, 15 vendor-reported,
> from 29 sources on 15 sites, latest 2026-10-12. Overall moves 76 → 75.** The overall
> is nearly flat because four dimensions rose and two fell by more, but the headline
> finding is a **10.3-point correction downward on SWE-bench Verified: 66.00% (Verified,
> swebench.com) against the 76.30% vendor figure this file had been using.** The single
> largest correction runs the other way: **AA-Omniscience is +5.40, not the −15 recorded
> on 2026-10-01**, and **SimpleQA Verified has been measured for the first time at 48.00%**.

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's November 2025 flagship — a usability-driven revision of GPT-5 rather than a raw capability jump. It replaced GPT-5's opaque router with explicit **Instant** and **Thinking** variants plus a new default **"no reasoning"** mode, added **adaptive reasoning** that spends thinking tokens only where they help, **24-hour prompt caching**, and **native `apply_patch` and shell tools**. It held the flagship slot for just under a month before GPT-5.2 arrived on 2025-12-11. **Status as of 2026-10-13: `Deprecated`** per Vector Wire — it has been superseded by GPT-5.2, then GPT-5.4, GPT-5.5 and GPT-6, and is retained here for continuity rather than as a current recommendation. Not a variant or alias of another entry in this dataset. Scored on the **`high` / Thinking** configuration.
- **Provider / access:** OpenAI API — **Responses API and Chat Completions**. Also ChatGPT (Instant & Thinking) and Codex (CLI & IDE). Third-party: Azure OpenAI, AWS Bedrock, Google Vertex AI, OpenRouter.
- **Release / knowledge:** released **2025-11-12** on the API, announced **2025-11-13** (Vector Wire records the release date as 2025-11-13). Knowledge cutoff **2024-09-30** — nine months older than GPT-5.2's. **The 2026-10-13 evidence base softens the cost of that cutoff considerably**: SimpleQA Verified lands at 48.00% and Omniscience is now net-positive, where the previous version of this file described the cutoff as "the most consequential regression in this model card."
- **IDs:** `gpt-5.1`; per-effort IDs `gpt-5.1-low-2025-11-13`, `gpt-5.1-high-2025-11-13`, `gpt-5.1-thinking`, `gpt-5.1:batch`; a distinct non-reasoning track as `gpt-5-1-non-reasoning`. OpenRouter: `openai/gpt-5.1`.
- **Context window:** **400,000 tokens input, 128,000 tokens max output** (OpenAI API documentation). **Discrepancy unresolved:** Artificial Analysis's GPT-5.1 (High) record lists **272k**, materially below the first-party 400K; the first-party figure is used, and the 272k reading is most likely a measured effective limit rather than the advertised ceiling. Vector Wire does not republish a context figure.
- **Modalities:** **text and image in; text out**, plus **image generation** for product mockups and visual handoffs. Reasoning: yes, adaptive, with `minimal` / `low` / `medium` / `high` effort and a default no-reasoning mode. Native `apply_patch` and shell tools; tool calling, function calling, web search, structured output / JSON schema, prompt caching and computer use all supported. **Image-input safety is now measured by OpenAI itself**: extremism 0.98, harms-erotic 1.00, hate 0.98, self-harm 0.98 (all `not_unsafe`). No documented audio or video input; PDF input not documented.
- **Pricing (as of 2026-10-13):** **$1.25 / MTok input, $10.00 / MTok output**, cache hit **$0.125** (90% off). Confirmed identical at Artificial Analysis and OpenAI-via-OpenRouter on 2026-10-13. **Vector Wire's field-relative reading: "costs more than 79% of 328 priced models"** at a 3:1 blend — a top-quintile price. Artificial Analysis blended rate at 7:2:1 cache-hit/input/output: **$1.3375 / MTok**. No free tier.
- **Architecture:** proprietary. Parameter count not disclosed. The MoE claim circulating for the GPT-5 family is inference from routing cost patterns, not an OpenAI publication, and is not treated as specification.

### Raw benchmarks found

> Source ledger: 105 results / 66 benchmarks / 29 sources on 15 sites — **41
> independently verified, 34 aggregator, 15 vendor cross-reference, 15 vendor-reported**.
> Vector Wire rates seven capabilities and must decline three: **Long Context "Capable,
> −11.1%"**, **Instruction Following "Capable, −20.4%"**, **Multimodal "Capable, −20.8%"**,
> **Factuality "Capable, −21.9%"**, then **Coding "Limited, −27.0%"**, **Reasoning
> "Limited, −27.1%"**, **Agentic "Limited, −42.9%"**; **Safety, Math and Multilingual
> return "too few results yet."**

Agent / tool use — **four of the harnesses the previous version recorded as "no verified
public score found" now have figures**, and they are uneven:

- **MCP Atlas: 50.10% — Verified, high confidence** (Scale Labs, 2026-10-12).
- **Terminal-Bench 2.1: 52.43%** (high effort) / 22.73% no-reasoning. **Terminal-Bench 2.0: 47.60%** (cross-referenced from the Claude Opus 4.5 system card). **Terminal-Bench Hard: 45.45%** high.
- **τ²-Bench Telecom: 81.87%** high / 46.49% no-reasoning; **τ²-Bench (Retail) 77.90%**; **Tau2 airline 67.00%**; **τ²-Bench overall 82.70%** (cross-referenced).
- **τ-Bench V3 Banking: 15.88%** — new, and the weakest single agentic row in the file.
- **GDPval win rate: 16.29%** high, against the previous version's **38.8% wins-or-ties** (OpenAI launch table). **Conflict adjudicated by metric definition, not by averaging**: wins-or-ties and win rate are different quantities, and the 16.29% like-for-like win rate from Artificial Analysis is used for the score while both figures are recorded.
- **AA Agentic Index: 21.63** high / **32.16** no-reasoning. **BrowseComp 50.80%** (cross-referenced).
- SWE-Lancer IC Diamond **69.7%**, AssetOpsBench **62.9%**, ITBench **55.2%** stand from the previous version as vendor and independent-leaderboard figures.
- Claw-Eval / Toolathon / SWE Atlas Codebase QnA: still **no verified public score found**.

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 25.00 — Verified, high confidence** (2026-09-21). **This validates the previous version's "estimated 25" exactly**, and is recorded as a confirmation rather than a change.
- **AA-Omniscience: +5.40** high (accuracy **37.72%**, non-hallucination **48.11%**), against **−34.45** no-reasoning. **The previous version recorded −15; the current verified figure is +5.40, a 20-point correction in the model's favour** and the largest upward correction anywhere in this file.
- **SimpleQA Verified: 48.00% — Verified** (Epoch, 2026-05-20). **First measurement in the file**, and strong for a 2024-09-30 cutoff.
- **GPQA Diamond: 87.27%** high (84.34% no-reasoning) against an 88.10% vendor figure cross-referenced from the Opus 4.5 system card — a 0.8-point spread, i.e. agreement.
- **AIME 2025: 94.17% — Verified** (matharena.ai) against 94.00% vendor. Agreement to within 0.2 points, and it resolves the 94.0-vs-94.6 ambiguity the previous version flagged.
- **HMMT November 2025: 91.67% — Verified**; **HMMT Feb. 2025: 96.30%** (cross-referenced); **Putnam 2025: 48.33% — Verified**.
- **FrontierMath Tier 4: 12.50% — Verified** at high / 6.25% medium; FrontierMath overall 26.70% (vendor). Confirms the 12.5%.
- **ARC-AGI-2: 17.64% — Verified** at thinking-high (6.53% medium, 1.94% low, 0.42% none; 17.60% cross-referenced). **ARC-AGI-1: 72.83% — Verified** at thinking-high (5.83% at no reasoning). Both confirm.
- **Humanity's Last Exam: 28.50%** high (5.28% no-reasoning; 42.70% with tools). **CritPt: 4.86%** high, 0.00% no-reasoning. **IFBench: 72.86%** high / 43.20% no-reasoning. **SimpleBench: 53.20% — Verified**. **MMLU-Pro 87.00%**, **MMMLU 91.00%**, **Arena Elo 1439 — Verified**.
- **Vectara (Verified)**: HHEM hallucination rate **12.10**, answer rate **100.00**, factual consistency **87.90**, average summary length 254.40 words.
- **Safety (all Verified, snapshot 20251113): XSTest 98.22, simple_safety_tests 99.75, AIR-Bench 2024 86.19, HarmBench 97.56, anthropic_red_team 99.51, bbq 88.70.**
- **HealthBench (OpenAI, vendor): 50.90** length-adjusted, 39.60 Professional, 25.40 Hard, 95.00 consensus-length-adjusted.
- Output speed 105.1 tokens/s, TTFT 37.19s (Artificial Analysis), standing from the previous version.

Coding — **the decisive correction**:

- **SWE-bench Verified: 66.00% — Verified** (swebench.com, snapshot 20251113; `swe_bench_bash` agrees at 66.00). Against **76.30%**, which appears twice as a vendor figure and is separately cross-referenced from the Claude Opus 4.5 system card. **The Verified number is used for scoring.** This supersedes the 76.3% this file had carried since 2026-10-01, and the 74.9% third-party figure noted there is closer to the verified 66.00 than to the vendor 76.30.
- **SciCode: 43.29%** high / 36.46% no-reasoning — **first measurement in the file**, previously "no verified public score found."
- **LiveCodeBench v6: 87.00%** (cross-referenced, high) — new, and strong.
- **LMArena WebDev Elo: 1395.30 — Verified** (1340.99 and 1421.20 at other dates) — new, and a strong human-preference coding signal.
- **Terminal-Bench Hard 45.45%**, **Terminal-Bench 2.1 52.43%** (see above).
- **AA Coding Index: 49.39** high / 27.30% no-reasoning — new, and mid-field.
- **SWE-bench Pro 50.8%**, **Aider Polyglot 88.0%**, **SWE-Lancer IC Diamond 69.7%** stand from the previous version.
- DeepSWE / Vibe Code Bench: still **no verified public score found**.

Long context:

- **AA-LCR v1.1: 80.00%** high, 45.00% no-reasoning — confirms, and **Vector Wire rates this the model's single strongest capability at only 11.1% behind the leader.**
- No MRCR, RULER or GraphWalks measurement.

Vision / multimodal:

- **MMMU: 85.40%** (vendor, cross-referenced from the Opus 4.5 system card) — up from the 84.2% the previous version recorded.
- **MMMU-Pro: 75.49%** high / 62.37% no-reasoning — new, and strong.
- **LMArena Vision Elo: 1234.81 — Verified** (2026-09-22), with **1249.84** (2026-09-21), **1238** (2026-06-17) and **1250** (2026-05-25) also verified. **Four independently dated human-preference readings, all consistent** — this is now the best-evidenced multimodal row in the file.
- **matharena_visual_math_overall: 76.88% — Verified**.
- CharXiv Reasoning 80.3% stands from the previous version.

### Normalized scores (1–100)

- **Tool use: 62/100.** *Revised down from 68.* The previous version anchored this score on **vendor** figures — GDPval 38.8% wins-or-ties, SWE-Lancer 69.7%, AssetOpsBench 62.9%, ITBench 55.2% — while recording that Terminal-Bench 2.1, Tau3-Banking, Toolathon and MCP-Atlas had **no verified score at all**. Four of those gaps have now closed, and the verified numbers are lower: **MCP Atlas 50.10% (Verified, Scale Labs)**, **Terminal-Bench 2.1 52.43%**, **Terminal-Bench Hard 45.45%**, **τ-Bench V3 Banking 15.88%**, **GDPval win rate 16.29%** against the vendor's 38.8% wins-or-ties, and an **AA Agentic Index of 21.63**. Against that, **τ²-Bench Telecom 81.87%** and **Tau2 airline 67.00%** are genuinely strong, which is why this lands at 62 rather than lower — the picture is telecom-and-retail agentic strength against banking-agentic weakness. Vector Wire's independent verdict is **"Agentic — Limited, 42.9% behind the leader,"** the worst of its eight rated capabilities for this model. Native `apply_patch` and shell tools, adaptive reasoning and 24-hour caching all remain real advantages.
- **Reasoning: 78/100.** *Revised up from 76, on two corrections in the model's favour and one that holds.* Up: **AA-Omniscience is +5.40 with 37.72% accuracy and 48.11% non-hallucination, against the −15 this file previously recorded** — a 20-point correction and the reason the knowledge profile no longer reads as a liability; **SimpleQA Verified at 48.00% (Verified)** is a first measurement and is strong, which materially weakens the case the previous version made against the 2024-09-30 cutoff; and **HLE at 28.50%** is above the 25.7% previously used. Supporting: **AIME 2025 94.17% and HMMT Nov. 2025 91.67%, both Verified**, **AA Intelligence Index 25.00 Verified** (an exact match to the previous estimate), **IFBench 72.86%**, **MMLU-Pro 87.00 / MMMLU 91.00**, **SimpleBench 53.20% Verified**. Held at 78 by **ARC-AGI-2 at 17.64% (Verified)** against **ARC-AGI-1 at 72.83% (Verified)** — the same narrow-not-general pattern this file identified before, now confirmed by the same source — plus **CritPt 4.86%** and **FrontierMath Tier 4 12.50%**. Vector Wire rates Reasoning only **"Limited, −27.1%,"** which is why this does not reach the 80s.
- **Context window: 84/100.** *Revised up from 82.* **AA-LCR v1.1 at 80.00%** is now confirmed by two separately dated aggregator rows, and **Vector Wire independently rates Long Context this model's best capability at "Capable — only 11.1% behind the leader,"** the strongest relative standing of any of its ten rated capabilities. **400K input / 128K output**, with the 128K ceiling joint-largest in its price class. This sits at the top of the methodology's 200K–500K band. The one thing holding it below the band ceiling of 84 is the **unresolved Artificial Analysis 272k-vs-400K discrepancy**, which is recorded rather than dismissed.
- **Multimodal: 74/100.** *Revised up from 70.* **MMMU at 85.40%** (above the 84.2% previously recorded), **MMMU-Pro 75.49%**, **matharena visual math 76.88% (Verified)**, and above all **four separately dated Verified LMArena Vision Elo readings — 1234.81, 1249.84, 1238, 1250** — which is the kind of human-preference evidence this file previously had none of, and which is consistent across seven months. Capped at 74 by the methodology's own ceiling for image-only input: there is no documented audio or video input, so the 75–90 and 90–100 bands are unreachable regardless of quality. Vector Wire: **"Multimodal — Capable, −20.8%."**
- **Coding: 76/100.** *Revised down from 82, and this is the file's most consequential change.* **SWE-bench Verified resolves to 66.00% (Verified, swebench.com, snapshot 20251113), not the 76.30% this file has carried since 2026-10-01** — a 10.3-point correction on the headline coding number, and one that moves the model from comfortably frontier-band to mid-field. The vendor 76.30% is retained and is cross-referenced in Anthropic's own Opus 4.5 system card, so the disagreement is between measurement and self-report, not between trackers; the Verified figure is used. The newly measured rows are consistent with the lower number: **SciCode 43.29%**, **Terminal-Bench Hard 45.45%**, **Terminal-Bench 2.1 52.43%**, **AA Coding Index 49.39**. Held up by genuinely strong non-repository evidence: **LiveCodeBench v6 87.00%**, **LMArena WebDev Elo 1395.30 (Verified)**, **SWE-bench Pro 50.8%**, **Aider Polyglot 88.0%**. Vector Wire: **"Coding — Limited, 27.0% behind the leader."** The pattern this file described — strong at shaped coding tasks, mid-tier at repository scale — survives the correction intact.
- **Cost efficiency: 66/100.** *Revised down from 70.* The rate card is unchanged at **$1.25 / $10.00** with a **$0.125** cache hit and a **$1.3375** blended rate, confirmed identical at both providers on 2026-10-13. What changed is the context: **Vector Wire's field-relative reading is "costs more than 79% of 328 priced models"** — a top-quintile price for a **deprecated** model superseded by GPT-5.2, GPT-5.4, GPT-5.5 and GPT-6. $10.00 output is 2.35× the $4.25 paired with the methodology's $1.25 input anchor, and with a 37s TTFT the bill is dominated by output and thinking tokens. 24-hour prompt caching is the one real offset.
- **Overall Score: 75/100.** (62 + 78 + 84 + 74 + 76) / 5 = 374 / 5 = 74.8 → **75**, down from 76. **Cost efficiency is not one of the five averaged dimensions**, consistent with the methodology and with the previous version of this file. The overall is nearly flat because four quality dimensions rose while two fell harder — **coding fell 6 points and tool use fell 6, against reasoning +2, context +2 and multimodal +4** — and because the strongest upward correction (**Omniscience +5.40, a 20-point swing**) lands in reasoning while the strongest downward (**SWE-bench 66.00 vs 76.30**) lands in coding. Best fit, revised in light of both the deprecation and the corrected coding number: **a mixed agentic-and-coding production model where telecom/retail agentic work, document and scientific-figure reading, and shaped coding tasks matter more than repository-scale engineering — and where the price argues strongly for GPT-5.4 or later instead.** It is no longer the pick for frontier coding on the strength of the 76.3% figure, and it is not the pick for banking-agentic reliability (**τ-Bench V3 Banking 15.88%**), for abstract reasoning (**ARC-AGI-2 17.64%**), or for anything where a superseded model on a top-quintile price is defensible.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (76 → **75**).
  New evidence is concentrated in **Vector Wire's GPT-5.1 record**, fetched 2026-10-13:
  **105 results on 66 benchmarks from 29 sources on 15 sites — 41 independently verified,
  34 aggregator, 15 vendor cross-reference, 15 vendor-reported, latest 2026-10-12** —
  supplying the **`Deprecated` status flag**, the field-relative price reading, the
  per-capability verdicts (four "Capable", three "Limited", three "too few results yet"),
  **SWE-bench Verified 66.00% (Verified, swebench.com, snapshot 20251113)**,
  **MCP Atlas 50.10% (Verified, Scale Labs)**, **Terminal-Bench 2.1 52.43%** and
  **Terminal-Bench Hard 45.45%**, **τ-Bench V3 Banking 15.88%**, **τ²-Bench Telecom
  81.87%** and **Tau2 airline 67.00%**, **GDPval win rate 16.29%**, **AA Agentic Index
  21.63**, **AA Coding Index 49.39**, **SciCode 43.29%**, **LiveCodeBench v6 87.00%**,
  **LMArena WebDev Elo 1395.30 (Verified)**, **AA Intelligence Index 25.00 (Verified)**,
  **AA-Omniscience +5.40** with accuracy 37.72% and non-hallucination 48.11%,
  **SimpleQA Verified 48.00% (Verified, Epoch)**, **GPQA Diamond 87.27%**,
  **AIME 2025 94.17% (Verified, matharena.ai)**, **HMMT Nov. 2025 91.67% (Verified)**,
  **Putnam 2025 48.33% (Verified)**, **FrontierMath Tier 4 12.50% (Verified)**,
  **ARC-AGI-2 17.64% and ARC-AGI-1 72.83% (both Verified)**,
  **Humanity's Last Exam 28.50%**, **CritPt 4.86%**, **IFBench 72.86%**,
  **SimpleBench 53.20% (Verified)**, **MMMU 85.40%**, **MMMU-Pro 75.49%**,
  **four Verified LMArena Vision Elo readings (1234.81 / 1249.84 / 1238 / 1250)**,
  **matharena visual math 76.88% (Verified)**, **Vectara HHEM 12.10 / answer rate
  100.00 / factual consistency 87.90**, a **complete Verified safety block** (XSTest
  98.22, simple_safety_tests 99.75, AIR-Bench 2024 86.19, HarmBench 97.56,
  anthropic_red_team 99.51, bbq 88.70), **OpenAI HealthBench and image-input safety
  rows**, and **Arena Elo 1439 (Verified)**.
  **Three conflicts adjudicated explicitly.** First and largest: **SWE-bench Verified —
  66.00% Verified against 76.30% vendor** (the vendor figure being cross-referenced in
  Anthropic's own Opus 4.5 system card); the Verified measurement is used and the vendor
  figure retained, which is what drives the coding score down 6 points. Second,
  **AA-Omniscience — the previous version's −15 against the current verified +5.40**; the
  verified figure is used, correcting upward by 20 points. Third, **GDPval — 38.8%
  wins-or-ties (vendor) against 16.29% win rate (Artificial Analysis)**; these are
  different metrics rather than competing measurements of the same one, so both are
  recorded and the like-for-like win rate is used for scoring. Two further figures were
  confirmed rather than changed: **AIME 2025 94.17% Verified against 94.00% vendor**
  (resolving the 94.0-vs-94.6 ambiguity flagged previously) and **AA Intelligence Index
  25.00 Verified** (an exact match to the previous estimate). OpenAI's own pricing and
  model documentation, swebench.com, Scale Labs' MCP Atlas, the ARC Prize datasets and
  Artificial Analysis remain the primary sources for specs and rate cards. Scores are
  normalized 1–100 interpretations per `model-comparison.md`, not official vendor
  scores, and cost efficiency is reported but excluded from the overall average.
- Future sources: add a new file next to this one, e.g. `GPT_5_1_Codex_Max.md`, using
  the same headings — **GPT-5.1-Codex-Max is a distinct model and has its own benchmark
  record**, and the `no reasoning` track (`gpt-5-1-non-reasoning`) is far enough apart from
  `high` to warrant separate treatment, since it carries its own Verified Intelligence
  Index of 13.00 against 25.00, its own AA-LCR of 45.00 against 80.00 and its own
  AA-Omniscience of −34.45 against +5.40.