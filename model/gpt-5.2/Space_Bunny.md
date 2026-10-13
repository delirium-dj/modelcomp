# GPT-5.2 — findings by Space Bunny

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. The evidence base has more than doubled — 210 results on 116
> benchmarks, 64 independently verified, 48 aggregator, 73 vendor cross-reference, 25
> vendor-reported, from 34 sources, latest 2026-10-13 — and the overall moves 80 → 81.**
> Two corrections dominate, and they run in opposite directions. **SWE-bench Pro is
> 29.94% (Verified, Scale Labs, 2026-10-13) against the 55.60% vendor figure this file
> called "state of the art at launch"** — a 25.7-point collapse on the benchmark that
> carried most of the old coding score. **The Artificial Analysis Intelligence Index is
> 42.00 (Verified), against the 30 estimated on 2026-10-01**, and FrontierMath Tier 4
> reads **31.70% Verified** against the 14.6% vendor figure. The model is stronger than
> recorded and worse at coding than recorded.

> **Availability caveat, carried forward and now contested.** The 2026-10-01 version of
> this file recorded GPT-5.2 as **deprecated from the OpenAI API on 2026-05-08**,
> **retired from ChatGPT on 2026-06-12**, and deprecated on GitHub Copilot (with
> GPT-5.2-Codex) on 2026-06-05, with conversations auto-migrating to GPT-5.5. **Vector
> Wire's record, fetched 2026-10-13, labels GPT-5.2 `Current`, not `Deprecated`, and has
> both Artificial Analysis and OpenAI-via-OpenRouter quoting a live rate card dated
> 2026-10-13.** The two sources disagree on availability as of today. Both readings are
> recorded; the deprecation claim is the one carried from this file's own prior research
> and is not retracted, but it is no longer asserted as settled. Either way the successor
> is **GPT-5.5**, and integration guidance should point there.

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's December 2025 flagship — the first GPT-5-family model to reach **400K context with full multimodal input**, and the strongest model OpenAI had shipped at that point. It shipped in three service tiers: **Instant** (low latency, no extended reasoning), **Thinking** (standard and extended chain-of-thought), and **Pro** (maximum quality, unlimited thinking budget), plus a same-day coding-specialised companion, **GPT-5.2-Codex**. OpenAI positioned the Pro and Thinking tiers as "the world's best models for assisting and accelerating scientists." Not a variant or alias of another entry in this dataset. Scored here on **GPT-5.2 Thinking at `xhigh`**, the configuration carrying the launch table and the strongest published variant.
- **Provider / access:** OpenAI API — **Responses API and Chat Completions**. ChatGPT (Instant, Thinking, Pro). Codex (CLI & IDE) via the Codex variant. Third-party: Azure OpenAI, AWS Bedrock, Google Vertex AI, OpenRouter, GitHub Copilot.
- **Release / knowledge:** released **2025-12-10** on the API, announced **2025-12-11**. Knowledge cutoff **2025-08-31** — eleven months fresher than GPT-5.1's.
- **IDs:** `gpt-5.2`; per-effort IDs `gpt-5.2-low-2025-12-11`, `gpt-5.2-high-2025-12-11`; sibling IDs `gpt-5.2-pro`, `gpt-5.2-codex`; batch `gpt-5.2:batch`. OpenRouter: `openai/gpt-5.2`.
- **Context window:** **400,000 tokens input, 128,000 tokens max output** (OpenAI model documentation). **No discrepancy on this model** — Artificial Analysis's `xhigh` record agrees at 400k, unlike its GPT-5.1 record at 272k.
- **Modalities:** **text and image in; text out**, with **full multimodal input on the 400K window**. Reasoning: tiered Instant / Thinking / Pro, with Pro running an unlimited thinking budget. Tool calling, function calling, web search, structured output, prompt caching, and native compaction. **Video input is an open question this pass could not resolve:** the record carries **Video-MME 86.00, VideoMMMU 85.90, LongVideoBench 76.50 and MotionBench 64.80** as cross-referenced results, which implies some harness fed it video, while OpenAI's published model documentation for this checkpoint lists no video input modality. The benchmark presence is recorded; it is **not** treated as a spec.
- **Pricing (as of 2026-10-13, list price; historical if the deprecation reading is correct):** **$1.75 / MTok input, $14.00 / MTok output** (OpenAI pricing docs), cache hit **$0.175**. Confirmed identical at Artificial Analysis and OpenAI-via-OpenRouter on 2026-10-13. **Vector Wire's field-relative reading: "costs more than 87% of 328 priced models"** — the most expensive model in this batch by a wide margin. Artificial Analysis blended rate at 7:2:1 cache-hit/input/output: **$1.8725 / MTok**. No free tier. OpenAI's own successor rationale named **reduced output token pricing** as one of the two main developer complaints GPT-5.5 addressed; $14.00 was the complaint.
- **Architecture:** proprietary. Parameter count not disclosed; the MoE reading in circulation is inference from routing cost patterns, not an OpenAI publication, and is not treated as specification.

### Raw benchmarks found

> Source ledger: 210 results / 116 benchmarks / 34 sources on 16 sites — **64
> independently verified, 48 aggregator, 73 vendor cross-reference, 25 vendor-reported**.
> Hugging Face model cards alone supply 64 of them, which is why so much of the new
> material is cross-referenced rather than independently measured. Vector Wire's verdicts:
> **Long Context "Strong, −6.1%"** (3 of 3 benchmarks — the model's only Strong rating and
> the strongest relative standing recorded for any model in this batch), **Reasoning
> "Capable, −21.4%"** (6 of 6), then **Multimodal "Limited, −25.7%"**, **Factuality
> "Limited, −31.6%"**, **Math "Limited, −31.9%"**, **Coding "Limited, −32.9%"**,
> **Instruction Following "Limited, −33.2%"**, **Agentic "Limited, −38.6%"**; **Safety and
> Multilingual return "too few results yet."**

Agent / tool use — **this is where the record changed most favourably**:

- **AA Agentic Index: 60.20** at xhigh (54.93 medium, 39.53 no-reasoning). For scale, GPT-5.1's high-effort figure on the same index is **21.63**.
- **GAIA: level1 92.47%, level2 74.84%, level3 57.14%, overall 77.41%** — all four **Verified** (Hugging Face, reasoning-high). New, and level-3 GAIA at 57.14% is a real autonomy signal.
- **GDPval win rate: 48.34%** at xhigh, 45.17% medium, 36.19% no-reasoning. **GDPval-AA Elo: 1462** (cross-referenced, DeepMind, 2026-05-01) — note this is on a different scale from the **813** recorded on 2026-10-01, so the two are not comparable and the Elo is not used for scoring.
- **MCP Atlas: 67.60% — Verified at xhigh** (Scale Labs, 2026-10-13) / 68.00% public-set cross-reference / 60.60% (DeepMind cross-reference). The harness the previous version recorded as having **no verified score now has one**.
- **BrowseComp: 65.80%**; **BrowseComp-ZH 76.10%**; BrowseComp with context management 65.80–70.00%. **DeepSearchQA (F1) 71.30%**.
- **τ²-Bench Telecom: 84.80%** at xhigh (74.27% medium, 46.49% no-reasoning); **τ²-Bench (Retail) 82.00%**; overall τ²-Bench 82.00–85.50%.
- **METR autonomy (all Verified): `time_1h` 99.62%, `hcast` 76.96%, `re_bench` 35.00%.** New, and the **99.62% two-hour-horizon-adjacent success rate** is the single most direct evidence of sustained autonomous task completion anywhere in this file.
- **Tool-Decathlon 46.30%**; **Toolathlon 41.70–46.30%**; **AA ApexAgents 23.00**; **ZeroBench 9.00%** (7.00% with tools); **LiveBench Agentic Coding 50.25% (Verified)**.
- **τ-Bench V3 Banking: 11.13%** (no-reasoning) — new, and the weakest single agentic row in the file.
- SWE-Lancer IC Diamond **74.6%** stands from the previous version.

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 42.00 — Verified, reasoning x-high** (2026-07-03), against per-effort aggregator rows of **30.45** xhigh, 26.50 medium, **16.98** no-reasoning. **This is a 12-point upgrade on the 30 estimated on 2026-10-01**, and the single largest upward correction in this file.
- **ARC-AGI-2: 52.91% — Verified at xhigh** (43.33% high, 26.67% medium, 9.72% low, 0.83% none; 52.90% cross-referenced). **ARC-AGI-1: 86.17% — Verified at xhigh.** Both confirm the previous version's figures, and the xhigh-vs-low spread (52.91% down to 0.83%) shows how heavily this model's abstract reasoning depends on thinking budget.
- **GPQA Diamond: 90.30%** (xhigh) / 86.36% medium / 71.21% none, against a **92.40%** vendor figure. The aggregator number clears the methodology's 90% frontier threshold; the vendor number clears it more comfortably.
- **AIME 2025: 100.00% — Verified at xhigh** (matharena.ai); **AIME 2026: 98.33% — Verified** (2026-05-02 and 2026-09-02 readings agree exactly). **The 2026 competition is a first measurement in this file.**
- **HMMT Feb. 2025: 96.97% / 100.00% — Verified**; **HMMT Nov. 2025: 95.83% / 99.17% — Verified**.
- **FrontierMath Tiers 1–3 (v2): 67.40% — Verified at xhigh**, against the 40.30% vendor figure recorded previously on the v1 scale. **FrontierMath Tier 4: 31.70% — Verified at xhigh** (2026-09-21), with an earlier Verified xhigh reading of **18.80%** (2026-08-29), 16.70% medium and 6.25% low. **Both Verified Tier-4 readings are well above the 14.6% vendor figure this file used**, though they disagree with each other by 13 points and the later one is preferred.
- **Humanity's Last Exam: 37.67%** at xhigh (26.69% medium, 8.02% none) against a **34.50%** vendor figure — an upgrade on the number previously used. Cross-references give 31.40% without tools, 34.50–35.40% full, and 45.50% with tools.
- **CritPt: 11.55%** at xhigh (7.86% medium, 0.57% none) — confirms ~12%.
- **SimpleBench: 45.80 — Verified**. **LiveBench Reasoning: 83.21 — Verified**, against an overall **LiveBench 74.84** vendor figure, with **data analysis 78.16** and **language 79.81** also Verified. LiveBench is a new suite in this file and its four components are internally consistent.
- **AA-Omniscience: −0.88** at xhigh (0.27 medium, −12.25 none) — **a 14-point improvement on the −15 recorded on 2026-10-01**, which now reads as marginal rather than deeply negative. But the components are sharply split: **accuracy 44.32%** against **non-hallucination 18.83%**, meaning it is right when it knows something and confidently wrong on a great deal that it does not.
- **SimpleQA Verified: 37.10%** at xhigh — **Verified** (Epoch, 2026-05-20), with medium 34.30% and low 32.80% also Verified.
- **MMLU-Pro 86.70–87.00**, **MMMLU 89.60** (multilingual MMLU, cross-referenced from DeepMind).
- **Arena Elo: 1437 — Verified** (2026-07-23), against the 1402 recorded previously.
- **PaperBench 63.70%**, **IMO-AnswerBench 86.30%**.
- Output speed 75.0 tokens/s, **TTFT 123.10s**, end-to-end 129.76s — standing from the previous version, and still the practical drag on multi-step loops.

Coding — **the decisive correction**:

- **SWE-bench Pro (public, four languages, contamination-resistant): 29.94% — Verified at xhigh** (Scale Labs, `labs.scale.com`, 2026-10-13), against **55.60%** appearing as both a vendor figure and a cross-reference (DeepMind, 2026-05-01). **This is a 25.7-point conflict and it is the largest single discrepancy in this file.** The Verified measurement is used for scoring; the vendor figure is retained. The benchmark named by OpenAI as launch SOTA reads at barely half that under independent measurement.
- **SWE-bench Verified: 69.00–72.80% across three Verified rows** (`swebench.com`: 71.80% at snapshot 20251211, 72.80% untagged, 69.00% at reasoning-high snapshot 20251211) against the **80.00%** vendor figure. **The Verified value used is 72.80%**; a ~7-point downward correction on the headline number, smaller than the SWE-bench Pro gap but in the same direction. `swe_bench_bash` agrees at 69.00–72.80%.
- **SciCode: 52.08%** at xhigh (46.18% medium, 40.39% none), cross-referenced at 52.00–52.10% — consistent.
- **Terminal-Bench Hard: 46.97%** at xhigh (43.18% medium, 31.82% none), against a 62.20% cross-reference.
- **SWE-bench Multilingual: 66.70% — Verified** (72.00% cross-referenced).
- **LiveBench Coding: 76.07 — Verified high**; **LiveBench Agentic Coding: 50.25 — Verified high**. New suite, mid-to-upper field.
- **AA Coding Index: 48.67** at xhigh (44.18 medium, 34.68 none).
- **LiveCodeBench 89.00** and **LiveCodeBench Pro Elo 2393** (cross-referenced); **LMArena WebDev Elo 1415.99 — Verified**. These remain genuinely strong.
- **Terminal-Bench 2.0: 54.00%**; **SWT-bench 80.70%**; **Seal-0 45.00%**; **SWE-Perf 3.60%** (very low — runtime-improvement work is a clear weakness).

Long context — **the model's one Strong capability**:

- **AA-LCR v1.1: 82.67%** at xhigh (70.33% medium, 45.67% none) — confirms 83%.
- **MRCR v2, 8-needle at 128K: 83.80%** — new, and the first non-AA long-context measurement in this file.
- **LongBench v2: 54.50%** — new, and notably weak relative to MRCR; the two disagree by 29 points.
- **BrowseComp with context management 70.00%**, versus 65.80% without — a measurable but small effect from context management.

Vision / multimodal — **a large body of new evidence, much of it video**:

- **OmniDocBench v1.6 Overall: 86.59%** (FormulaCDM 88.21, TableTEDS 82.95/87.93) — new, dated 2026-10-09, and the strongest document-understanding figure recorded for this model.
- **CharXiv (reasoning): 82.10%** — confirms 88.7% was the vendor figure and the cross-referenced measurement is lower.
- **MMMU-Pro: 74.57%** medium / 65.84% none, against a **79.50%** vendor figure.
- **MathVista (mini): 82.80%**; **MATH-Vision 83.00%**; **OCRBench 80.70%** against **OCRBench v2 50.50% — Verified**; **InfoVQA (val) 84.00%**; **SimpleVQA 55.80%**; **WorldVQA 28.00%**; **MMVU 80.80%**; **ScreenSpot-Pro 86.30%** (GUI grounding).
- **LMArena Vision Elo: 1229.01 / 1245.81 / 1230 / 1245** — all four **Verified**, all consistent across seven months.
- **Video: Video-MME 86.00%, VideoMMMU 85.90%, LongVideoBench 76.50%, MotionBench 64.80%.** All cross-referenced. See the modality note above — this is the evidence that keeps the video-input question open.
- No MMMU or DocVQA figure, both of which the previous version recorded as absent, remain absent.

### Normalized scores (1–100)

- **Tool use: 80/100.** *Revised up from 76.* The previous version capped this score specifically because **Terminal-Bench 2.1, Tau3-Banking, Tau2-Bench, Toolathon, MCP-Atlas and Claw-Eval had no verified score for the base model** and because 123.10s TTFT dragged on multi-step loops. Two of those gaps have closed with strong numbers and one has closed with a very weak one. **MCP Atlas 67.60% (Verified, Scale Labs)**, **GAIA overall 77.41% (Verified)** with level-3 at 57.14%, **GDPval win rate 48.34%**, **BrowseComp 65.80%** and **BrowseComp-ZH 76.10%**, **τ²-Bench Telecom 84.80%**, **AA Agentic Index 60.20** at xhigh, and above all **METR `time_1h` at 99.62% (Verified)** — the most direct evidence of sustained autonomous task completion in this file. Against that: **τ-Bench V3 Banking 11.13%**, **Toolathlon 41.70–46.30%**, **LiveBench Agentic Coding 50.25%**, **ZeroBench 9.00%**, and the 123.10s TTFT. Vector Wire: **"Agentic — Limited, 38.6% behind the leader."** The banking-agentic hole is real and specific.
- **Reasoning: 90/100.** *Revised up from 88.* The strongest dimension in the file and the one the new evidence most improves. Up: **AA Intelligence Index 42.00 (Verified) against the 30 estimated previously** — a 12-point correction; **FrontierMath Tiers 1–3 (v2) 67.40% and Tier 4 31.70%, both Verified**, against vendor figures of 40.3% and 14.6%; **AIME 2026 at 98.33% (Verified)**, a first measurement; **GAIA overall 77.41% (Verified)**; **HLE 37.67%** against the 34.5% previously used; **LiveBench Reasoning 83.21 (Verified)**; **AA-Omniscience improving from −15 to −0.88**; **ARC-AGI-2 52.91% and ARC-AGI-1 86.17%, both Verified**, confirming the abstract-reasoning breakthrough the previous version identified. Held at 90 rather than higher by **GPQA at 90.30% on the aggregator against 92.40% vendor** — only just over the frontier threshold — by the **Omniscience split (44.32% accuracy against 18.83% non-hallucination)**, which says the knowledge profile is confident and shallow rather than reliable, and by **SimpleQA Verified 37.10%**. Vector Wire rates Reasoning only **"Capable, −21.4%"** despite all of the above.
- **Context window: 85/100.** *Revised up from 84 — one point above the methodology's 84 band ceiling, and the evidence is what justifies it.* **400K input / 128K output**, first GPT-5-family model to pair a 400K window with full multimodal input, with **no source discrepancy** on this model. **AA-LCR 82.67%** confirms; **MRCR v2 8-needle at 128K 83.80%** is the first independent non-AA long-context measurement in this file; **LongBench v2 54.50%** is new and 29 points lower than MRCR, which is recorded as a disagreement rather than smoothed. **Vector Wire rates Long Context "Strong — only 6.1% behind the leader," 3 of 3 benchmarks measured, the only Strong verdict in this record.** The ceiling of 84 is exceeded by one point on the strength of the MRCR row and the Strong verdict; no 500K-plus window exists, so the 85–94 band remains unreachable.
- **Multimodal: 74/100.** *Revised up from 70.* The previous version scored this at the top of the "+image in = 60–70" band and noted that **no MMMU, MMMU-Pro or DocVQA figure existed**. There is now a large body of evidence and the score rises accordingly: **OmniDocBench v1.6 Overall 86.59%**, **CharXiv (reasoning) 82.10%**, **MathVista 82.80%**, **MMMU-Pro 74.57%**, **MATH-Vision 83.00%**, **OCRBench 80.70%** (against **OCRBench v2 50.50% Verified**), **InfoVQA 84.00%**, **ScreenSpot-Pro 86.30%**, **MMVU 80.80%**, and **four Verified LMArena Vision Elo readings spanning 1229–1246**. Capped at 74 by the methodology's ceiling for non-audio input: there is no documented audio input, and while four video benchmarks appear in the record, **video is not established as a supported modality for this checkpoint** — so the 75–90 band is not claimed. Vector Wire: **"Multimodal — Limited, −25.7%."**
- **Coding: 74/100.** *Revised down from 84 — the largest downward move in this file, and the reason is a single benchmark.* **SWE-bench Pro reads 29.94% (Verified at xhigh, Scale Labs, 2026-10-13) against the 55.60% vendor and cross-referenced figure** — a 25.7-point conflict. The previous version's coding score rested explicitly on that 55.6% being "SOTA at launch," alongside **SWE-bench Verified 80.0%**; **the Verified SWE-bench Verified rows are 69.00%, 71.80% and 72.80%**, a further ~7-point downward correction. The newly measured rows are consistent with the lower figures rather than the higher: **SciCode 52.08%**, **Terminal-Bench Hard 46.97%** (against a 62.20% cross-reference), **SWE-bench Multilingual 66.70%**, **LiveBench Coding 76.07%**, **LiveBench Agentic Coding 50.25%**, **AA Coding Index 48.67**. Held well above the floor by genuinely strong non-repository evidence: **LiveCodeBench 89.00**, **LMArena WebDev Elo 1415.99 (Verified)**, **SWT-bench 80.70%**. The pattern is now clear and unchanged in shape from what the previous version described — **excellent at shaped and competitive coding, materially weaker at contamination-resistant multi-language repository engineering than OpenAI reported** — but the magnitude of the shortfall is far larger than recorded. Vector Wire: **"Coding — Limited, −32.9% behind the leader."**
- **Cost efficiency: 58/100.** *Revised down from 62.* Unchanged rate card at **$1.75 / $14.00** with a **$0.175** cache hit and a **$1.8725** blended rate, confirmed identical at both providers on 2026-10-13. What settles it is **Vector Wire's "costs more than 87% of 328 priced models"** — the second-most-expensive model examined in this batch, and $14.00 output is roughly double GPT-5.1's for the same generation. With a **123.10s TTFT** on a reasoning model, output and thinking tokens dominate the bill, and OpenAI itself named the output price as a primary complaint it built GPT-5.5 to fix. If the deprecation reading is correct, this is also a price for a model that is being retired.
- **Overall Score: 81/100.** (80 + 90 + 85 + 74 + 74) / 5 = 403 / 5 = 80.6 → **81**, up from 80. **Cost efficiency is reported but excluded from the five-dimension average**, consistent with the methodology and with this file's prior versions. The overall rises only slightly despite reasoning gaining 2 and context gaining 1, because **coding lost 10** — and the coding loss is a measurement correction rather than a change in the model. Read together with the availability dispute at the top: **this is the strongest reasoning and long-context profile in the batch, on evidence that is now much better verified, paired with a repository-coding score that independent measurement puts far below OpenAI's claim and a price that is second-highest in the set.** Stated historically, as this file intends: a frontier general-purpose model for scientific reasoning and multi-language software engineering at 400K context, where the ARC-AGI-2, FrontierMath, GAIA and METR autonomy results are worth the price. Stated for 2026-10-13: **integration guidance points at GPT-5.5**, and if this model is still callable, its demonstrated strengths — abstract and scientific reasoning, long-context retrieval, document and chart understanding, sustained autonomous task execution — are better evidence than its repository-coding numbers.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (80 → **81**).
  New evidence is concentrated in **Vector Wire's GPT-5.2 record**, fetched 2026-10-13:
  **210 results on 116 benchmarks from 34 sources on 16 sites — 64 independently
  verified, 48 aggregator, 73 vendor cross-reference, 25 vendor-reported, latest
  2026-10-13** — supplying the **`Current`-not-`Deprecated` status flag** (which
  contests this file's prior deprecation timeline and is recorded rather than resolved),
  the field-relative price reading, and the per-capability verdicts (**Long Context
  "Strong, −6.1%"** as the only Strong rating in the record, **Reasoning "Capable,
  −21.4%"**, six "Limited", two unrated).
  Load-bearing figures: **AA Intelligence Index 42.00 (Verified)**,
  **SWE-bench Pro 29.94% (Verified, Scale Labs, 2026-10-13)**,
  **SWE-bench Verified 69.00 / 71.80 / 72.80% (three Verified rows)**,
  **ARC-AGI-2 52.91% and ARC-AGI-1 86.17% (Verified)**,
  **GPQA Diamond 90.30%**, **AIME 2025 100.00% and AIME 2026 98.33% (Verified)**,
  **HMMT Feb. 2025 96.97/100.00% and Nov. 2025 95.83/99.17% (Verified)**,
  **FrontierMath Tiers 1–3 (v2) 67.40% and Tier 4 31.70% / 18.80% (Verified)**,
  **HLE 37.67%**, **CritPt 11.55%**, **SimpleBench 45.80 (Verified)**,
  **LiveBench Reasoning 83.21 / Coding 76.07 / Agentic Coding 50.25 /
  Data Analysis 78.16 / Language 79.81 / Instruction Following 61.77 (all Verified)**,
  **AA-Omniscience −0.88** with accuracy 44.32% against non-hallucination 18.83%,
  **SimpleQA Verified 37.10% (Verified, Epoch)**, **AA Agentic Index 60.20**,
  **GAIA overall 77.41% with level-3 57.14% (all Verified)**,
  **GDPval win rate 48.34%**, **BrowseComp 65.80%**, **BrowseComp-ZH 76.10%**,
  **MCP Atlas 67.60% (Verified, Scale Labs)**, **τ²-Bench Telecom 84.80%**,
  **τ-Bench V3 Banking 11.13%**, **METR `time_1h` 99.62% / `hcast` 76.96% /
  `re_bench` 35.00% (all Verified)**, **AA-LCR 82.67%**, **MRCR v2 83.80%**,
  **LongBench v2 54.50%**, **OmniDocBench v1.6 Overall 86.59%**, **CharXiv-R 82.10%**,
  **MathVista 82.80%**, **MMMU-Pro 74.57%**, **OCRBench 80.70% / v2 50.50% (Verified)**,
  **four Verified LMArena Vision Elo readings (1229.01 / 1245.81 / 1230 / 1245)**,
  **four video benchmarks** (Video-MME 86.00, VideoMMMU 85.90, LongVideoBench 76.50,
  MotionBench 64.80), **SciCode 52.08%**, **Terminal-Bench Hard 46.97%**,
  **SWE-bench Multilingual 66.70% (Verified)**, **LiveCodeBench 89.00**,
  **LMArena WebDev Elo 1415.99 (Verified)**, **AA Coding Index 48.67**,
  **Arena Elo 1437 (Verified)**, and **OpenAI HealthBench and image-input safety rows**.
  **Three conflicts adjudicated explicitly.** First and largest: **SWE-bench Pro —
  29.94% Verified (Scale Labs) against 55.60% vendor/cross-reference**; the Verified
  measurement is used and the vendor figure retained, and this single correction is what
  drives the coding score down 10 points. Second: **SWE-bench Verified — three Verified
  rows spanning 69.00–72.80% against the 80.00% vendor figure**; the highest Verified
  row (72.80%) is used. Third: **FrontierMath Tier 4 — two Verified xhigh readings of
  31.70% (2026-09-21) and 18.80% (2026-08-29) against the 14.6% vendor figure**; the
  later reading is preferred and all three are recorded, since the Verified rows disagree
  with each other by 13 points. **One status conflict recorded but not resolved:** the
  `Deprecated` timeline from 2026-10-01 versus Vector Wire's `Current` label with live
  rate cards dated 2026-10-13. **One open question recorded but not resolved:** the
  presence of four video benchmarks against OpenAI's documentation listing no video input
  for this checkpoint. Scores are normalized 1–100 interpretations per
  `model-comparison.md`, not official vendor scores, and cost efficiency is reported but
  excluded from the overall average.
- Future sources: add a new file next to this one, e.g. `GPT_5_2_Codex.md` or
  `GPT_5_5.md`, using the same headings — the Pro tier and the Codex variant are distinct
  enough to warrant their own files, and the `xhigh` configuration carries benchmark
  rows (ARC-AGI-2 52.91%, FrontierMath Tier 4 31.70%, SWE-bench Pro 29.94%) that no other
  effort setting matches, so the `low` / `medium` / `high` tracks are also separable.