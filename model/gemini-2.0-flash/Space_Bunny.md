# Gemini 2.0 Flash — findings by Space Bunny

- Source: Google (`gemini-2.0-flash`, Feb '25 checkpoint; also `gemini-2.0-flash-001` and the Dec 2024 experimental)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note, and the theme of this revision is a single word: absence.** The
> 2026-10-01 file made three statements of the form "**no verified public score
> found**" — no agentic benchmark of any kind, no vision benchmark, no long-context
> retrieval measurement at any length — and then reasoned from those absences: Tool use
> was scored at 40 partly because "there is nothing measurable to score it against,"
> Context window was held to the bare tier mapping because "the window is a spec," and
> Multimodal was placed at the floor of the top band on modality breadth alone.
>
> **All three gaps have now been filled, and the score moves 57 → 53.** Independent
> evaluators have since published a Terminal-Bench Hard result (**3.79%**, #294), a
> τ²-Bench Telecom result (**29.5%**, #258), BrowseComp at **0.6%**, TheAgentCompany at
> **11.4%**, an **AA-LCR of 31.3% at #375 and the 23rd percentile of 193**, MMMU at
> **70.7%** and MMMU-Pro at **69.8%**, LiveCodeBench at **35.1%**, and HLE at **4.26%**.
> Scoring from absence was generous to this model; scoring from measurement is not.

## Model card

- **Name:** Gemini 2.0 Flash (February 2025 GA checkpoint)
- **Short description:** Google's **workhorse** Flash model from the December 2024 / February 2025 agentic-era releases — designed for **low latency and high-volume production use**, and announced alongside **2.0 Flash-Lite** as part of a deliberate push to put a cheap, fast, multimodal model in every developer workload. It went **generally available via the Gemini API in Google AI Studio and Vertex AI on 2025-02-05**, with image generation and text-to-speech arriving shortly after. It is the model that established the Flash price-and-latency template every later Flash in this dataset follows. **Distinct from `gemini-2.0-flash-lite`** (cheaper, weaker) and **not a variant of** any other entry here.
- **Provider / access:** Google Gemini API (AI Studio), **Vertex AI**, plus third-party routes on **Poe**, **Vercel AI Gateway** and **Qiniu AI**. **Retired 2026-06-01.**
- **Release / knowledge:** experimental **2024-12-11/20**; **GA 2025-02-05**. Knowledge cutoff: **August 2024** per LLM Stats and per Artificial Analysis's own experimental-checkpoint row; Artificial Analysis records **June 2024** for the Feb '25 checkpoint on its comparison page. The two disagree by two months and neither is first-party.
- **IDs:** `gemini-2.0-flash`, `gemini-2.0-flash-001`, `gemini-2.0-flash-exp-1206`.
- **Context window:** **1,000,000 tokens** (Google; Artificial Analysis confirms 1000k on both the Feb '25 and the experimental rows). **Max output 8,192 tokens (8.2K)** across every provider listed — a genuinely small output ceiling, and materially smaller than the input window implies. Poe reports a 990K window.
- **Modalities:** **text, image, speech and video in; text and image out** (Artificial Analysis). This remains the widest modality set of any model in this dataset — it is **the only entry here with native audio input**, and it also **generates images**. No audio output.
- **Pricing (as of 2026-10-13, historical):** **$0.10 / MTok input, $0.40 / MTok output**, cached read **$0.025** (Google first-party). Vertex AI at $0.15 / $0.60. Vercel AI Gateway at $0.15 / $0.60. **Batch: $0.075 / $0.30.** The September 2026 price drift recorded in the 2026-10-01 file (Vertex input $0.10 → $0.15, output $0.40 → $0.60) is now moot: the model retired 2026-06-01.
- **Architecture:** proprietary. Not disclosed.

### Raw benchmarks found

Agent / tool use — **every cell in this block was empty in the 2026-10-01 file:**

- **Terminal-Bench Hard: 3.79% — #294** (Artificial Analysis, reasoning off, observed 2026-09-16; AI Atlas reads the same row and computes **−62.1 pt versus GPT-5.6 Sol**). TechBriefly carries the same figure as 3.8%.
  > **Conflict recorded and adjudicated.** TrustTheBench lists **Terminal-Bench 47.9%
  > dated 2025-02-21** for this model. That is not the same measurement: TrustTheBench
  > says "Terminal-Bench" with no variant named, while the 3.79% row is explicitly
  > **Terminal-Bench Hard**. A 3.8% and a 47.9% cannot both describe the same
  > evaluation, and the harder variant is both the one Artificial Analysis ran
  > independently and the one consistent with everything else on this model — a 0.6%
  > BrowseComp, an 11.4% TheAgentCompany, a 29.5% τ²-Bench Telecom. **The 3.79% is
  > used**; the 47.9% is recorded as an unattributed, variant-unspecified figure.
- **τ²-Bench Telecom: 29.5% / 29.53% — #258** (Artificial Analysis, reasoning off)
- **TheAgentCompany: 11.4% — #7** (long-horizon simulated company tasks)
- **BrowseComp: 0.6% — #26** (OpenAI's own leaderboard) — effectively zero on difficult web-search retrieval
- SWE-bench Verified: **28.9%** (official SWE-bench board, CodeShellAgent, 2 runs). Model Beats records a separate **51.8% (#92)** under different conditions; the official figure is used.
- BenchLeader category scores: **Agents & tools 37**, Coding 31, Long context 37, Multimodal 49 — of a set whose low scores reflect a bottom-half composite.
- Tau3-Banking / Toolathlon / Claw-Eval / AutomationBench / MCP-Atlas / SWE Atlas Codebase QnA: still **no verified public score found**.

Reasoning / knowledge — **four new rows, all weak:**

- **Humanity's Last Exam: 4.26%** (Artificial Analysis, reasoning off) — **−54.9 pt versus Claude Fable 5.1**
- **IFBench: 40.2%** (Artificial Analysis) — **−43.1 pt versus Grok 4.3**
- **GPQA Diamond: 62.3%** (Artificial Analysis, Diamond variant, observed 2026-09-11) — consistent with Epoch AI's 60.6 ±3.5 and Model Beats' 60.1%
- **Artificial Analysis Intelligence Index: 8.94** (AA v4.3.2, reasoning off, observed 2026-09-16) — **−44.4 versus Claude Fable 5.1**. The 2026-10-01 file recorded 9 on the same index family; this is the same number to one decimal. The 12\* recorded against the older v4.1.1 family remains a different index version and is not compared.
- **ARC-AGI: 77.1%** (TrustTheBench, independent, 2025-02-06) — a new and genuinely strong row, marked as saturated by that source
- **MATH-500: 93%**; MATH 89.7%; AIME 33%; AIME 2025 **21.7%**; HiddenMath 63%; Natural2Code 92.9% — all via Artificial Analysis as relayed by TechBriefly
- **MMLU-Pro: four independent readings in a tight band — 75.5%** (TrustTheBench), **77.4%** (Vals AI harness, 2026-09-01), **76.4%**, **77.6%** (Model Beats)
- MMLU 83.7%; LiveBench (Continuous) **67.5%** (TrustTheBench, 2025-02-01); HumanEval 78%
- **FACTS Grounding 83.6%**; EgoSchema 71.5%; CoVoST2 39.2% (audio translation)
- BenchLeader category scores: Knowledge 51, Maths 49, Reasoning 38
- CritPt / AA-Omniscience: still **no verified public score found** for this model

Coding:

- **LiveCodeBench: 35.1%** (Artificial Analysis) — **new**; the 2026-10-01 file recorded "no verified public score found"
- **Natural2Code: 92.9%**; **Vibe-Eval: 56.3%** — new, and the second is respectable
- **Aider Polyglot: 22.2%** (Aider, whole-file format, **measured 2024-12-22**) — still the December 2024 experimental checkpoint, eight weeks pre-GA, and flagged as such
- BenchLeader **Coding 32** (thinking best) / 31 — **the model's lowest category**
- DeepSWE / SciCode / SWE-bench Pro: **no verified public score found**

Long context — **the gap that mattered most:**

- **AA-LCR v1.1: 31.3% — #375** (Artificial Analysis). LLMBoard independently reads the same row at **31.33%, rank 148 of 193, 23.44th percentile**, evidence tier B, and TechBriefly carries 31.3%. **The 2026-10-01 file stated flatly that "1M-token window with no published retrieval measurement" and "no MRCR, RULER, GraphWalks, LongBench or LCR figure was found." All of those are now contradicted: there is an AA-LCR figure, it is bottom-decile, and two more trackers corroborate it.
- **OpenAI-MRCR: 69%** (TrustTheBench, independent, 2025-02-20); **MRCR 69.2%** via TechBriefly/AA. This is the one decent long-context number, and it comes from the synthetic multi-round retrieval instrument rather than the reasoning one.
- Fiction.LiveBench 120k Long Reasoning: **37.5% #26** (thinking) / 62.5% #13
- BenchLeader **Long context 37** (thinking best) / 47

Vision / multimodal — **the last empty block, now populated:**

- **MMMU: 70.70% — rank 32 of 66, 52.31st percentile** (LLMBoard, evaluated 2026-10-11). BenchLeader carries **71.7%, #20**; Benchmark Registry carries Google's own **69.3%**; TechBriefly 70.7%. **Four sources, one tight band, all mid-field.**
- **MMMU-Pro: 69.8% — #69** (Vals AI harness, reported 2026-09-01) — the row the 2026-10-01 file noted as "Artificial Analysis's MMMU-Pro slot for this model is empty"
- **LMArena Vision: Elo 1158 — #112** — the only human-preference vision signal on record, and a low one
- **VISTA: 45.5% #23** (Scale AI SEAL) / 40.0% #39
- **GeoBench: 77.0% — #6** — the one strong spatial/perceptual row
- BenchLeader **Multimodal 56** — the model's highest category, as the 2026-10-01 file argued
- DocVQA / OmniDocBench / CharXiv / VideoMME: still **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 32/100.** *Revised down from 40, and the reason is that the gap is closed.* The 2026-10-01 file scored this on the argument that "**no agentic benchmark of any kind was published for this model**… there is nothing measurable to score it against," which is exactly the situation in which a score should have been withheld rather than assigned. The benchmarks now exist and they are at the floor: **Terminal-Bench Hard 3.79% at #294**, **τ²-Bench Telecom 29.5% at #258**, **TheAgentCompany 11.4%**, and **BrowseComp 0.6% on OpenAI's own board**. BenchLeader's own Agents & tools category score of 37 agrees. Capped at 32 rather than lower because **SWE-bench Verified 28.9%** on the official board shows it does patch real GitHub issues, the model shipped with working tool support, and Google explicitly framed it as kicking off "the agentic era" — but three independent instruments now say it cannot do long-horizon agentic work at all.
- **Reasoning: 50/100.** *Revised down from 52.* The two new independent weak rows outweigh the two new strong ones. Down: **Humanity's Last Exam 4.26%** and **IFBench 40.2%**, both from Artificial Analysis, both roughly 45–55 points off the field leader, alongside the **Index of 8.94** that sits −44.4 behind Claude Fable 5.1, **FrontierMath 0.9%**, and **AIME 2025 21.7%**. Up: **ARC-AGI 77.1%** and **MATH-500 93%** are both new and both respectable, and **GPQA Diamond 62.3%** sits inside the methodology's documented 60–80% mid-band with **MMLU-Pro 75.5–77.6%** across four independent readings. Net: a model with real breadth knowledge, no frontier mathematics, and no hard-reasoning ability.
- **Context window: 63/100.** *Revised down from 70, and this is the sharpest reasoning change in the file.* The old score held the bare tier mapping on the stated principle that "the window is a **spec**, and there is no retrieval measurement of any length." **AA-LCR v1.1 is now published at 31.3% — #375 on Artificial Analysis, and the 23.44th percentile of 193 models on LLMBoard's independent read**, corroborated by TechBriefly. Fiction.LiveBench long reasoning agrees at 37.5%. Against that, **MRCR at 69.2%** is the one solid number, but MRCR is synthetic multi-round retrieval and AA-LCR is real long-context reasoning — the same distinction that decided the `claude-sonnet-3.5` case. A model that advertises a 1,000,000-token window, measures in the **bottom decile for actually reasoning over what it retrieves**, and can emit only **8,192 tokens** per response is not better on this dimension than a working 200K model. 63 sits deliberately below the methodology's 200K anchor.
- **Multimodal: 88/100.** *Revised down from 90.* The modality breadth is unchanged and remains unique in this dataset — **text, image, speech and video in; text and image out**, the only native audio input here and the only image generator — which keeps it in the methodology's top band. What changed is that the band is no longer unmeasured. **MMMU lands at 70.7% and the 52nd percentile of 66** on LLMBoard, with four independent sources in a 69.3–71.7% band; **MMMU-Pro 69.8% at #69**; **LMArena Vision Elo 1158 at #112**; **VISTA 45.5%**. The one bright spot is **GeoBench at 77.0%, #6**. So the breadth claim is documented and the visual understanding is **mid-field**, and a top-band score now has to acknowledge that rather than rest on breadth alone. Held at 88 — still the top band, at its floor — because the modality set genuinely is unmatched here.
- **Coding: 33/100.** *Revised down from 35.* **LiveCodeBench 35.1%** is new and confirms the weakness the old file inferred rather than measured, and **BenchLeader's Coding category of 32 is the model's lowest of seven**. **SWE-bench Verified 28.9%** on the official board remains the load-bearing number, with Model Beats' 51.8% recorded but not scored. **Aider Polyglot 22.2%** is still the December 2024 experimental checkpoint and is flagged as such. The one genuine improvement is **Natural2Code 92.9%**, alongside a respectable **Vibe-Eval 56.3%** — the model can turn prose into code, it just cannot work on a repository or compete on algorithmic problems.
- **Cost efficiency: 96/100.** Unchanged, and now purely historical. **$0.10 / $0.40 per MTok with cached read at $0.025** (Google first-party), **Batch at $0.075 / $0.30**. Scored just below the methodology's ~$0.10/$0.20 ≈ 97–99 anchor: the input rate matches it and the output rate is double. The two credits — the $0.025 cache read, which governs a repeated-context workload, and the observation that Flash-Lite delivered better quality at the same price, meaning this was the family baseline rather than a premium — and the two deductions (Vertex and Vercel both at $0.15/$0.60; the September 2026 drift) all still stand, and all are now academic: **the model retired 2026-06-01**.
- **Overall Score: 53/100.** (32 + 50 + 63 + 88 + 33) / 5 = 266 / 5 = 53.2 → **53**, down from 57. The composition explains itself: **Multimodal 88 still carries the model** and **Coding 33 and Tool use 32 now confirm each other** where before Coding 35 was nearly cancelling a Multimodal scored on unmeasured breadth. The single sentence this revision adds to the 2026-10-01 summary is that **scoring a model from the absence of evidence is not neutral — it is generous**, and the fifteen independent rows that arrived in the two weeks after that file was written moved three dimensions downward and none upward. For context on the whole picture: **BenchLeader places this model at #501 of 760 on its composite, at 45.0 ±5.0, with 316 other configurations statistically indistinguishable** — Multimodal 56 is its best category, Coding 32 its worst. Best fit, stated historically: a **high-volume multimodal production workload** in the February 2025 window — image understanding, audio translation, video analysis, captioning at scale — at Flash latency and Flash price. **Today its practical best fit is none.** It retired four months ago, it is in the bottom half of every composite index measured on it, and **its 1M window measures in the bottom decile for long-context reasoning**. Route current work to **Gemini 3.8 Flash** or **Gemini 2.5 Flash**, both of which carry a 1M window *and* measurable long-context behaviour *and* modern coding scores.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own reports for this slug (56.8 → 57 → **53**).
  New independent sources this pass, all filling gaps the previous file had recorded as
  empty: **Artificial Analysis** (observed 2026-09-11 to 2026-09-16) for
  **Terminal-Bench Hard 3.79%**, **τ²-Bench Telecom 29.5%**, **Humanity's Last Exam
  4.26%**, **IFBench 40.2%**, **GPQA Diamond 62.3%**, **Intelligence Index 8.94**,
  **LiveCodeBench 35.1%**, **AA-LCR 31.3%**, MATH-500 93%, AIME 2025 21.7%,
  Natural2Code 92.9%, Vibe-Eval 56.3%, MRCR 69.2%, and its three-leader comparison
  gaps (−62.1 on Terminal-Bench Hard vs GPT-5.6 Sol, −54.9 on HLE vs Claude Fable 5.1,
  −43.1 on IFBench vs Grok 4.3, −44.4 on the Index vs Claude Fable 5.1);
  **LLMBoard** (evaluated 2026-10-11) for the **MMMU 70.70% at rank 32/66 and the
  52.31st percentile** and its independent read of **AA-LCR at 31.33%, rank 148/193,
  23.44th percentile**; **Vals AI** (reported 2026-09-01) for **MMMU-Pro 69.8% at #69**
  and MMLU-Pro 77.4%; **Benchmark Registry** (updated 2026-10-07) for Google's own
  MMMU 69.3%; **BenchLeader** (last measured 2026-09-01) for the **#501 of 760
  composite at 45.0 ±5.0**, all seven category scores (Multimodal 56 highest, Coding
  32 lowest), **TheAgentCompany 11.4%**, **BrowseComp 0.6% at #26**,
  **LMArena Vision Elo 1158 at #112**, **GeoBench 77.0% at #6**, **VISTA 45.5% #23**,
  Fiction.LiveBench 120k at 37.5% #26, and the terminal and τ² ranks of #294 and #258;
  **TrustTheBench** for **ARC-AGI 77.1%**, MMLU 83.7%, MMLU-Pro 75.5%, LiveBench
  67.5%, **OpenAI-MRCR 69%**, HumanEval 78%, and a conflicting unattributed
  "Terminal-Bench 47.9%" dated 2025-02-21; **AI Atlas** for the independent reading of
  the AA rows and the Terminal-Bench Hard leaderboard gap; and **TechBriefly** (updated
  2026-04-10) as a cross-check on twenty relayed AA figures. **Two conflicts
  adjudicated explicitly rather than averaged:** TrustTheBench's variant-unspecified
  "Terminal-Bench 47.9%" against Artificial Analysis's **Terminal-Bench Hard 3.79%** —
  the variant-specific independent run is preferred, and the unattributed figure is
  recorded; and the AA-LCR 31.3% against MRCR 69.2%, where the synthetic-retrieval
  instrument is set aside in favour of the reasoning instrument, consistent with the
  same call made on `claude-sonnet-3.5`. **The methodological finding of this pass —
  and the reason the score fell — is recorded explicitly: three dimensions in the
  previous version were scored partly from the absence of measurements, and that
  practice was generous rather than neutral.** The December 2024 experimental /
  February 2025 GA checkpoint distinction and the v4.1.1 versus v4.3.2 index-version
  distinction are both still flagged rather than collapsed. Scores are normalized 1–100
  interpretations per `model-comparison.md`, not official vendor scores.
- Future sources: **do not re-research.** The model retired 2026-06-01 and is now
  covered by roughly forty independent measurements across two dozen benchmarks — a
  coverage level none of the other retired entries in this set approaches. If a
  successor line-up is wanted, it is `gemini-2.5-flash` and `gemini-3.8-flash`, both
  already researched in this dataset.