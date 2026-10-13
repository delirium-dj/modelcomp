# GPT-5 nano — findings by Space Bunny

- Source: OpenAI (`gpt-5-nano`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Independent coverage has roughly doubled since 2026-10-01 — 85
> results on 43 benchmarks, 34 independently verified, from 21 sources, latest
> 2026-10-12 — and the score moves 57 → 54.** The 2026-10-01 file worked from a thin
> record and repeatedly recorded "no verified public score found" for agentic and
> coding rows. Those rows now exist and most of them are bad: **GDPval win rate 12.79%,
> GAIA overall 23.26%, ARC-AGI-2 at 2.61%, ARC-AGI-1 at 16.67%, SimpleQA at 11.70%,
> SciCode at 36.57%, Terminal-Bench Hard 12.12% at high effort.** One number moved the
> other way and is worth flagging first: **the Artificial Analysis Intelligence Index is
> now a Verified 20.00**, well above the 13 this file recorded.

## Model card

- **Name:** GPT-5 nano
- **Short description:** The smallest and cheapest member of the GPT-5 family, released 2025-08-07. OpenAI positions it for **summarisation, classification and high-volume extraction** — the cheap, fast tier of a frontier family, not a frontier model. Three reasoning-effort variants (`minimal`, `medium`, `high`) differ materially and every row below is reported per effort where the source allows. Scored on the **`high`** variant. Not a variant or alias of another entry here.
- **Provider / access:** OpenAI API — Responses API and Chat Completions. Also Azure OpenAI, AWS Bedrock (`openai.gpt-5-nano-2025-08-07`), Google Vertex AI, OpenRouter. `flex` processing tier at $0.025 / $0.20. Active; price re-confirmed **2026-10-13 across both tracked providers at identical rates**.
- **Release / knowledge:** released **2025-08-07**. Knowledge cutoff **2024-05-30** — still the **oldest of any GPT-5-family model**, and the 2026-10-13 evidence base makes it far more visible than it was: **SimpleQA Verified at 11.70%** is what a May-2024 cutoff looks like on a factual benchmark.
- **IDs:** `gpt-5-nano`; dated snapshot `gpt-5-nano-2025-08-07`; per-effort IDs `gpt-5-nano-minimal`, `-medium`, `-high`; batch `openai/gpt-5-nano:batch`.
- **Context window:** **400,000 tokens input, 128,000 tokens max output** (OpenAI API docs; corroborated by Artificial Analysis, OpenRouter, Requesty, llm-stats). One dissenting tracker (LLMLearner) lists 256K / 4K output; the first-party figures are used.
- **Modalities:** **text and image in; text out**. Reasoning: yes — switchable `minimal` / `medium` / `high`. Tool calling, function calling, web search, structured output / JSON schema, prompt caching and computer use all supported. No documented audio or video input; PDF input not documented.
- **Pricing (as of 2026-10-13):** **$0.05 / MTok input, $0.40 / MTok output**, cache read **$0.005** (90% off), **Batch $0.025 / $0.20**, `flex` $0.025 / $0.20. Confirmed identical at both Artificial Analysis and OpenAI-via-OpenRouter on 2026-10-13. **Vector Wire's field-relative reading: "cheaper than 86% of 328 priced models" at a 3:1 blend.** No free tier.
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

> Source ledger: 85 results / 43 benchmarks / 21 sources — **34 independently verified,
> 46 aggregator-attributed, 5 vendor-reported**. That verification ratio is far better
> than the record this file worked from, which is why so much of the new material is
> load-bearing. Vector Wire can rate five capabilities and must decline five others:
> Instruction Following "Limited −30.5%", Multimodal "Limited −36.5%", Agentic "Limited
> −41.2%", Coding "Limited −42.9%", Math "Limited −55.8%", with **Reasoning, Safety,
> Long Context, Multilingual and Factuality all returning "too few results yet."**

Agent / tool use — **three previously-absent rows, all weak:**

- **GDPval win rate: 12.79%** at high, 4.40% at medium, **0.00%** at minimal (Artificial Analysis). *The 2026-10-01 file recorded "no verified public score found."*
- **GAIA: level1 39.78%, level2 18.24%, level3 8.16%, overall 23.26%** (all Verified, Hugging Face leaderboard).
- **AA Agentic Index: 23.25** high / 16.78 medium / 8.58 minimal.
- **Terminal-Bench Hard: 12.12% at high**, 17.42% medium, 6.82% minimal. **Note this supersedes the 17.4% figure in the previous version of this file**, which was the *medium* reading — the `high` variant is lower.
- **τ²-Bench Telecom: 36.55%** high / 30.41% medium / 25.73% minimal — confirms 36.5%.
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: still **no verified public score found**.
- Output speed **158–161 tokens/s** across variants; `minimal` has the lowest time-to-first-answer at **0.85s**.

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 20.00 — Verified, High confidence** (dated 2026-07-03), against per-effort aggregator rows of **12.99** high, 12.48 medium and **7.09** minimal. **This is the one genuine upgrade in the file**: the previous version recorded 13 / 12 / 7, and the per-effort numbers reproduce exactly — so 20.00 is a later, differently-computed verified index rather than a correction of the 13. Both are recorded; the Verified figure is preferred.
- **GPQA Diamond: 67.58%** high / 66.97% medium / **42.83%** minimal — confirms 67.6%.
- **AIME 2025: 46.15% — Verified** (matharena.ai, high·low config) against an **85.20% vendor figure** (llm-stats). **This is a 39-point conflict and the Verified independent number is used.** The previous version's 85.0% came from LLMLearner "with tools"; a no-tools or different-budget configuration is the likelier explanation for the gap.
- **HMMT November 2025: 81.67% (Verified, matharena.ai)**; HMMT 2025 75.60% (vendor).
- **FrontierMath Tiers 1–3 (v2): 20.00% and Tier 4: 2.44%** (both Verified, Epoch); FrontierMath overall 9.60% (vendor).
- **ARC-AGI-2: 2.61% (Verified, high effort)**, 0.88% medium, **0.00%** minimal. **ARC-AGI-1: 16.67% (Verified, high)**, 20.71% medium. **New, and the most damning reasoning evidence in the file** — abstract reasoning is effectively absent.
- **SimpleQA Verified: 11.70%** (Epoch) — new, and a direct read on the 2024-05-30 cutoff.
- **AA-Omniscience: −28.67** high / −25.78 medium / **−64.07** minimal; **accuracy 19.08%** high; **non-hallucination 40.99%**. Confirms the previous −29 and quantifies it.
- **Humanity's Last Exam: 9.50%** high; **CritPt: 0.00%** at every effort.
- **IFBench: 67.55%** high / 65.92% medium / **32.52%** minimal — new.
- **Safety (all Verified, 2026-10-07, storage.googleapis.com): XSTest 97.61, simple_safety_tests 100.00, HarmBench 98.44, bbq 97.60, anthropic_red_team 99.55, AIR-Bench 2024 87.82.** A new block of evidence, and it is excellent — worth recording even though safety is not a scored dimension, because it is the one place this model is unambiguously strong.
- Vectara (Verified): HHEM hallucination rate **10.50**, answer rate **100.00**, factual consistency **89.50**, average summary length 105.70.

Coding:

- **SWE-bench Verified: 34.80%** (Verified, swebench.com, 20250807) — confirms, and **42 points behind Claude Opus 4.5**.
- **SciCode: 36.57%** high / 33.80% medium / 29.05% minimal — **new**, and weak.
- **Terminal-Bench Hard 12.12%** at high (see above).
- **AA Coding Index: 22.88** medium / **20.27** high — new.
- **LiveCodeBench 78.9% (#48 of 180, LLMLearner)** — stands from the previous version and is the one genuinely strong coding row this model owns.
- DeepSWE / SWE-bench Pro / Vibe Code Bench: still **no verified public score found**.

Long context:

- **AA-LCR v1.1: 45.00%** high / 43.67% medium / **20.00%** minimal — confirms 45%. Bottom-decile, and Vector Wire declines to rate the capability at all.
- No MRCR, RULER or GraphWalks measurement.

Vision / multimodal:

- **MMMU-Pro: 60.98%** high / 58.21% medium / 31.79% minimal — confirms ~61%.
- **LMArena Vision Elo: 1159.10** (Verified, 2026-09-21) — new, and low.
- **DocVQA 78.3%, #5 of 5** (LLMLearner) — still the model's best multimodal result and the practical one for a cheap extraction model.
- MMMU 57.6%; Chatbot Arena Elo 1200.

### Normalized scores (1–100)

- **Tool use: 30/100.** *Revised down from 32.* The previous version's reasoning was that "every harness that actually measures multi-step agentic reliability puts it near the floor" — on a thin record. The record has since filled in and confirms the judgement while making it firmer: **GDPval win rate 12.79%** and **0.00% at minimal effort**, **GAIA overall 23.26%** with level-3 at 8.16%, **Terminal-Bench Hard down to 12.12% at `high`** (the variant this file is scored on — the previous version used the more flattering `medium` reading of 17.4%), and an **AA Agentic Index of 23.25**. Vector Wire's independent verdict is **"Agentic — Limited, 41.2% behind the leader."** It supports function calling and web search as an interface, and it is genuinely fast; it is not an agent.
- **Reasoning: 52/100.** *Revised down from 58, and the reasoning is that the gains and losses roughly cancelled with the losses larger.* Up: **AA Intelligence Index now a Verified 20.00**, above the 13 recorded before, plus **HMMT Nov. 2025 at 81.67% (Verified)** and **IFBench at 67.55%**. Down, and heavier: **AIME 2025 resolves to 46.15% Verified**, not the 85.0% this file recorded — a 39-point correction on what had been its strongest maths evidence; **ARC-AGI-2 at 2.61% and ARC-AGI-1 at 16.67%, both Verified**, which is an outright absence of abstract reasoning; **SimpleQA at 11.70%**; **Omniscience at −28.67 with 19.08% accuracy**; **CritPt 0.00%**; **HLE 9.50%**; **FrontierMath Tier 4 at 2.44%**. GPQA 67.58% sits inside the 60–80% band and keeps it out of the floor.
- **Context window: 72/100.** *Revised down from 74.* Unchanged in substance and slightly reduced because the evidence is now unambiguous rather than merely absent: **AA-LCR 45.00% at high**, 43.67% medium and **20.00% at minimal**, against a 400K window. A large window the model demonstrably struggles to use is a spec, and **Vector Wire declines to rate the Long Context capability at all**. The 128K output ceiling remains the joint-largest at this price and is what keeps this out of the bottom of the band.
- **Multimodal: 66/100.** *Revised down from 68.* **MMMU-Pro 60.98%** confirms the previous figure, and **LMArena Vision Elo 1159.10 (Verified)** is new and low. **DocVQA at 78.3%, #5 of 5**, remains genuinely best-in-class for document and chart reading, which is the practical workload — but MMMU 57.6% and MMMU-Pro 61.0% say it reads documents well and reasons over diagrams poorly. Vector Wire: **"Multimodal — Limited, 36.5% behind the leader."** No audio, video or PDF input documented, so the band ceiling is unchanged.
- **Coding: 52/100.** *Revised down from 55.* **SciCode at 36.57%** and an **AA Coding Index of 20.27** are new and both weak; **Terminal-Bench Hard 12.12%** at high is confirmed; **SWE-bench Verified 34.80%** stands at 42 points behind Opus 4.5. The split this file identified still holds and is now better measured: **LiveCodeBench 78.9% (#48 of 180)** says competitive-programming-shaped work is real, while repository-scale work, scientific coding and terminal work all sit near the floor. Vector Wire: **"Coding — Limited, 42.9% behind the leader."**
- **Cost efficiency: 98/100.** *Revised up from 96.* **$0.05 / $0.40**, cache read **$0.005**, **Batch and `flex` both $0.025 / $0.20**, confirmed identical at both providers on 2026-10-13, and now with a field-relative figure to sit against the rate card: **"cheaper than 86% of 328 priced models"** at a 3:1 blend. The deduction this file made last time — that $0.40 output is 2.7× the $0.15 class median and this model's intended use is output-heavy — is real but is priced against a market where most models are dearer still.
- **Overall Score: 54/100.** (30 + 52 + 72 + 66 + 52) / 5 = 272 / 5 = 54.4 → **54**, down from 57. Three quality dimensions fell and one cost dimension rose, and the falls are all attributable to the same cause: **measurements arriving for rows that had been recorded as absent, and coming in low.** Best fit is unchanged in substance and better quantified: **very high-volume summarisation, classification, routing and document/chart extraction at 400K input**, especially on Batch or `flex`. The 2026-10-13 record now lets that recommendation be stated with numbers rather than caveats — **DocVQA #5 of 5, Vectara factual consistency 89.5%, IFBench 67.55%, a safety profile that is clean across five verified suites, and a Verified Intelligence Index of 20 for $0.86 of blended rate**. Explicitly not a fit for agentic work (**GAIA 23.26%, GDPval 12.79%**), repository-scale coding (**SWE-bench 34.8%**), abstract or scientific reasoning (**ARC-AGI-2 2.61%, CritPt 0%**), or any query where a **May-2024 knowledge cutoff** is disqualifying (**SimpleQA 11.70%**).

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (57 → **54**).
  New evidence is concentrated in **Vector Wire's GPT-5 nano record**, fetched 2026-10-13:
  **85 results on 43 benchmarks from 21 sources, 34 independently verified, 46
  aggregator, 5 vendor-reported, latest 2026-10-12** — supplying the **Verified AA
  Intelligence Index of 20.00**, **GDPval win rate 12.79%**, **GAIA overall 23.26%
  (level1/2/3 39.78 / 18.24 / 8.16, all Verified)**, **AA Agentic Index 23.25**,
  **Terminal-Bench Hard 12.12% at high**, **SciCode 36.57%**, **AA Coding Index 20.27**,
  **ARC-AGI-2 2.61% and ARC-AGI-1 16.67% (both Verified)**, **SimpleQA 11.70%
  (Verified, Epoch)**, **AA-Omniscience −28.67 with 19.08% accuracy and 40.99%
  non-hallucination**, **IFBench 67.55%**, **HMMT Nov. 2025 81.67% (Verified,
  matharena.ai)**, **LMArena Vision Elo 1159.10 (Verified)**, a **complete verified
  safety block** (XSTest 97.61, simple_safety_tests 100.00, HarmBench 98.44, bbq 97.60,
  anthropic_red_team 99.55, AIR-Bench 2024 87.82) and the **Vectara set** (HHEM 10.50
  hallucination rate, 100.00 answer rate, 89.50 factual consistency); its per-capability
  verdicts (five "Limited" with their gaps to leader, five "too few results yet"); and
  its field-relative price reading, **"cheaper than 86% of 328 priced models."**
  **Two conflicts adjudicated explicitly rather than averaged.** First, **AIME 2025**:
  the previous version recorded **85.0%** (LLMLearner, "with tools") while a **Verified
  46.15%** (matharena.ai) is now on record against an 85.20% vendor figure — the
  Verified independent number is used and the vendor figure retained. Second, **the
  Intelligence Index**: the per-effort rows (12.99 / 12.48 / 7.09) reproduce the
  previous version's 13 / 12 / 7 exactly, so the **Verified 20.00** is a later
  differently-computed index rather than a correction, and both are recorded with the
  Verified figure preferred. A third correction is noted without adjudication: the
  previous version's Terminal-Bench Hard 17.4% was the **medium**-effort reading, and
  the `high` figure this file is scored on is **12.12%**. OpenAI's own pricing and model
  documentation, the official SWE-bench board, and Artificial Analysis remain the
  primary sources for specs and rate cards. Scores are normalized 1–100
  interpretations per `model-comparison.md`, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_Nano_4_Nano.md`, using
  the same headings — **gpt-5.4 nano is the successor tier and a separate model in this
  dataset**, and the three effort variants here remain distinct enough to warrant their
  own files given how far apart the AA-LCR (20.00 vs 45.00) and GDPval (0.00% vs 12.79%)
  figures run between them.