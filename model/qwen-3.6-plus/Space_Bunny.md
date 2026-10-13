# Qwen3.6 Plus — findings by Space Bunny

- Source: Alibaba (`qwen3.6-plus`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 79 → 80, on a record that has roughly quadrupled since
> 2026-10-01 — 58 measured benchmarks on one aggregator alone, up from a handful — but with
> an important structural change underneath it: this model is now recorded as
> `Superseded`.** Qwen3.6 Plus launched 2026-04-01 and has been replaced by five successive
> models: **Qwen3.7 Max (2026-05-20), Qwen3.7 Plus (2026-06-01), Qwen3.8 Max (2026-08-02),
> Qwen3.8 27B (2026-08-05) and Qwen3.8 Flash-Next (2026-08-24)** — all of which have their
> own entries in this dataset. The capability evidence improves (**SWE-bench Pro 56.6%,
> LiveCodeBench v6 87.1%, SWE Multilingual 73.8%, τ³-bench 70.7%, MCP-Tasks 74.1%,
> WideResearch 74.3%**), and one measurement moved the reasoning score on its own:
> **AA-Omniscience is now +0.9 — positive.**
>
> **Three conflicts are recorded and adjudicated rather than averaged.** The
> **AA Intelligence Index reads 27.0 on two aggregators and 39.6 on a third** — a 12.6-point
> spread that moves reasoning by more than the difference between the band's top and bottom.
> **Terminal-Bench 2.1 reads 61.42 on Vector Wire and 53.2 on Vals AI (#19 of 21)**. And
> **GPQA reads 90.4% first-party, 88.18% on Artificial Analysis and 87.4% on Vals** — the
> first case in this batch where the vendor figure is the *highest* of three.

## Model card

- **Name:** Qwen3.6 Plus
- **Short description:** Alibaba's April 2026 flagship — a **native vision-language Plus-series model** positioned by Qwen as being "towards real world agents," and launched with the full **1M context window available by default** rather than gated behind a premium tier. **Architecture: a 397B-A17B mixture-of-experts**, with adaptive tool use. The current `qwen3.6-plus` alias is **functionally equivalent to the snapshot `qwen3.6-plus-2026-04-02`**. **Status as of 2026-10-13: `Superseded`** — five generations of successor have shipped since launch. Not a variant or alias of another entry in this dataset.
- **Provider / access:** Alibaba Cloud Model Studio (international/Global), with tiered pricing by input length; also available through OpenRouter and third-party gateways.
- **Release / knowledge:** launched **2026-04-02** (Qwen blog dated 2026-04-01, listing it as 2026-04-01 in the version table). Knowledge cutoff not established in this record.
- **Context window:** **1,000,000 tokens — the full window by default, not a premium tier.** **Max input 991,808 tokens; max output 65,536 tokens.** In thinking mode, max input 983,616 tokens.
- **Modalities:** **native vision-language** — text, image and video in; text out. Reasoning: yes, via `enable_thinking`. Official built-in tools with **adaptive tool use**.
- **Pricing (as of 2026-10-13, historical list price for a superseded model):** **tiered by input length**, which is unusual and materially changes the real bill. Alibaba Cloud Model Studio, international/Global: **≤256K input at $0.50 / $3.00 per MTok**, with **explicit cache reads at $0.05** (90% off) and **Batch File and Batch Chat at roughly half**. Higher input-length bands bill at materially higher rates. **Nothing to compare against at field level** — no aggregator tracks a price for this model any more.
- **Architecture:** **397B-A17B mixture-of-experts**, natively multimodal.

### Raw benchmarks found

> Three aggregator records consulted, **benchgap (2026-10-11, 58 measured benchmarks)**,
> **benchlm (2026-10-12)** and **Vector Wire (`qwen3-6-plus`, no hyphens — the hyphenated
> slugs 404)**. Figures are labelled by source because they disagree.

Coding:

- **SWE-bench Verified: 78.80%** — **#4 of 9** on the leaderboard, +2.6 over its predecessor.
- **SWE-bench Pro: 56.6%** — the harder four-language contamination-resistant harness, and a genuinely strong result.
- **SWE Multilingual: 73.8%**. **LiveCodeBench v6: 87.1%** (86.0% on Vals' independent board).
- **AA Coding Index: 54.5%**.
- Independently measured on Vals' boards: **SWE-bench 73.4%** and **LiveCodeBench 86.0%** — **5.4 points below the vendor's own SWE-bench figure**, the same vendor-over-independent pattern seen with GPT-5.1 and GPT-5.2 in this batch.
- **Vibe Code Bench: 25.56%** (Vals) and **NL2Repo 37.9%** — weak.

Agent / tool use — **genuinely split, and the split is the finding**:

- **τ²-bench Telecom: 97.7%** — **#1 of 10**, +13.8 over its predecessor. Still the best customer-service-workflow figure in this dataset.
- **τ³-bench: 70.7%**. **MCP-Tasks: 74.1%**. **WideResearch: 74.3%**.
- **Claw-Eval: 58.8%**; **QwenClawBench: 57.2%**; **DeepPlanning: 41.5%**; **MCP Atlas: 48.2%**; **VITA-Bench: 44.3%**.
- **GDPval-AA: 24.5%** (Elo 1066).
- Against: **Toolathlon 39.8%** and **ResearchClawBench 18.0%**.
- **Terminal-Bench 2.1: 61.42% (Vector Wire) against 53.2% (Vals AI, #19 of 21)** — an 8.2-point conflict between aggregators on the same benchmark.

Reasoning:

- **GPQA: 90.4% (Qwen first-party) / 88.18% (Artificial Analysis) / 87.4% (Vals AI)** — a 3-point spread, and the first case in this batch where the vendor number is the highest of three.
- **MMLU-Pro 88.5%** (#1 of 4) against 87.7% on Vals; **MMLU-Redux 94.5%**; **C-Eval 93.3%**; **SuperGPQA 71.6%**.
- **AIME 2026: 95.3%** — **#1 of 2**.
- **Humanity's Last Exam: 28.8%** (#13 of 15); **AA-HLE 27.8%**.
- **AA-Omniscience Index: +0.9** — positive, with **accuracy 26.4% and hallucination rate 34.6%**. Alongside GPT-5.1 (+5.40), Grok 4 (+2.10) and GLM-5.3-Flash (+7.47), this is a minority property in this batch and a genuine point in this model's favour.
- **CritPt: 2.9%** — very low.
- **FrontierMath v2: 26.2% on Tiers 1–3, 8.3% on Tier 4** — both weak.
- **Artificial Analysis Intelligence Index: 27.0 (benchgap, benchlm) against 39.6 (lounge.ai, listed #6 of 11 with a +5.9 delta)** — **a 12.6-point conflict between aggregators.** The 27.0 is preferred because two independent sources carry it and the aggregator rows in this batch have consistently been the current-index family; both are recorded.

Long context:

- **AA-LCR: 78.33%** (Vector Wire). **LongBench v2: 62%**. **AI-Needle: 68.3%** — the two latter are first-party and new, and 62% on LongBench v2 is a materially more sober long-context figure than AA-LCR alone suggests.
- **1,000,000 tokens, 991,808 max input, 65,536 max output**, full window **by default**.

### Normalized scores (1–100)

- **Tool use: 72/100.** *Revised up from 70.* **τ²-bench Telecom at 97.7% (#1 of 10)** confirms the previous version's strongest row and remains the best customer-service-workflow figure in this dataset. New rows fill out a picture the previous version could only gesture at: **τ³-bench 70.7%**, **MCP-Tasks 74.1%**, **WideResearch 74.3%**, **Claw-Eval 58.8%**, **QwenClawBench 57.2%**, **MCP Atlas 48.2%**. Against, and unchanged in character: **Toolathlon 39.8%**, **ResearchClawBench 18.0%**, **GDPval-AA 24.5%**, **VITA-Bench 44.3%**, **DeepPlanning 41.5%**, and **Terminal-Bench 2.1 at 53.2–61.42% depending on aggregator**. The split is real and consistent across passes: **excellent on structured service workflows and research tooling, weak on open-ended tool orchestration and terminal agents.** The previous version's "mixed, and honestly so" framing stands.
- **Reasoning: 76/100.** *Revised up from 74.* The previous version scored this "above the methodology's mid-band, short of the frontier" on **GPQA Diamond 88.2%**. Two things have since landed. **GPQA now reads 90.4% first-party against 88.18% on Artificial Analysis and 87.4% on Vals** — and because the vendor figure is the *highest* here, the conservative aggregator figure is used, which still puts it at the frontier threshold rather than below it. And **AA-Omniscience is +0.9, positive**, against CritPt at 2.9% and an Omniscience accuracy of only 26.4% — a model that is right about a quarter of what it is asked and honest about the rest. Supporting: **MMLU-Pro 88.5%, MMLU-Redux 94.5%, C-Eval 93.3%, AIME 2026 95.3% (#1 of 2), SuperGPQA 71.6%, HLE 28.8%**. Held at 76 by **FrontierMath Tiers 1–3 at 26.2% and Tier 4 at 8.3%**, **CritPt 2.9%**, and **the unresolved Intelligence Index conflict — 27.0 versus 39.6**. That conflict matters: at 39.6 this model would sit near GLM-5.3-Flash's 42.00 and the score would be several points higher; at 27.0 it sits with the GPT-5.4 tier. Both are recorded rather than averaged.
- **Context window: 95/100.** *Unchanged.* **1,000,000 tokens, 991,808 max input, 65,536 max output**, with the full window available **by default** rather than gated behind a premium tier — still a real and unusual advantage. What this pass adds is a more honest picture of what the window is worth: **LongBench v2 at 62%** and **AI-Needle at 68.3%** are considerably more sober than **AA-LCR's 78.33%**, and the three together are recorded rather than the flattering one being used alone. Held at the floor of the ≥1M band because **the 100 tier requires ≥98% retrieval at 512K+ and no such figure exists.**
- **Multimodal: 78/100.** *Unchanged.* **Native vision-language — text, image and video in; text out** — the methodology's "+video/PDF in = 75–90" band, scored near its floor. The one new row, **VITA-Bench 44.3%**, is a video-understanding benchmark and is low, which is consistent with the floor placement. No MMMU, MMMU-Pro, DocVQA or CharXiv figure appears on any of the three records consulted, so the score rests on documented capability plus VITA-Bench rather than on a vision benchmark in the sense every other scored dimension here has.
- **Coding: 80/100.** *Revised up from 76.* This is where the new record is strongest. **SWE-bench Verified 78.80% (#4 of 9)**, **SWE-bench Pro 56.6%** on the four-language contamination-resistant harness, **SWE Multilingual 73.8%**, **LiveCodeBench v6 87.1%** (86.0% independently), and an **AA Coding Index of 54.5%**. The previous version's evidence base was one internal-scaffold SWE-bench figure; this is four harnesses across two independent boards. The important caveat is new and specific: **Vals' independent SWE-bench reading is 73.4%, 5.4 points below the vendor's 78.80%** — the same vendor-over-independent gap that cost GPT-5.1 ten points and GPT-5.2 eight. Against the strong rows: **Vibe Code Bench 25.56%**, **NL2Repo 37.9%**, **Terminal-Bench 2.0 61.6%**. Good at writing and reviewing code; weak at autonomous multi-step repository work.
- **Cost efficiency: 86/100.** *Revised down from 88.* Historical list price at **≤256K input is $0.50 / $3.00**, with **cache reads at $0.05** (90% off) and **Batch File and Batch Chat at roughly half** — a genuinely good rate card, and the length-tiered structure means a real bill on long-context workloads can be several times the headline. Two deductions: **no aggregator tracks a price for this model any more**, so the field-relative reading available for every other model in this batch is unavailable here; and the model is **superseded by five generations**, several of which are cheaper — **Qwen3.8 Max at $2.00 / $6.00** is dearer on input but sits on a later index.
- **Overall Score: 80/100.** (72 + 76 + 95 + 78 + 80) / 5 = 401 / 5 = 80.2 → **80**, up from 79. **Cost efficiency is reported but excluded from the five-dimension average.** The rise is capability evidence filling in, not a change in the model: **coding +4** on four harnesses across two boards, **reasoning +2** on a frontier-threshold GPQA and a now-positive Omniscience. Best fit, stated as history: **high-volume production agentic and coding workloads on a 1M default context window**, where **τ²-bench Telecom at 97.7%, SWE-bench Pro at 56.6%, LiveCodeBench v6 at 87.1% and 397B-A17B of capability** at a tenth of a frontier model's price was a hard combination to beat. **Two caveats the aggregate hides.** First, **it is superseded** — the durable choice in this family is now Qwen3.8 Max, Qwen3.7 Plus or Qwen3.8 27B, each with its own record. Second, **Vals' independent SWE-bench reading is 5.4 points below the vendor's**, and **two aggregator conflicts remain open** — the Intelligence Index at 27.0 versus 39.6, and Terminal-Bench 2.1 at 61.42 versus 53.2. Where a vendor figure and an independent figure disagree in this batch, the independent one has been the right call four times out of four.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (79 → **80**).
  **Vector Wire's hyphenated slugs 404**; the record exists at **`qwen3-6-plus`** without
  hyphens, which is recorded here so a future pass does not conclude the model is
  untracked. Three aggregator records were consulted and their disagreements preserved:
  **benchgap (2026-10-11, 58 measured benchmarks)**, **benchlm (2026-10-12)** and
  **Vector Wire (`qwen3-6-plus`)**, plus **lounge.ai** for the version table, the
  **397B-A17B** architecture and the **`Superseded`** status, and **Vals AI's independent
  leaderboards** for SWE-bench, LiveCodeBench and GPQA Diamond.
  Load-bearing figures: **SWE-bench Verified 78.80% (#4 of 9)**, **SWE-bench Pro 56.6%**,
  **SWE Multilingual 73.8%**, **LiveCodeBench v6 87.1%** (86.0% on Vals),
  **AA Coding Index 54.5%**, **Vibe Code Bench 25.56%**, **NL2Repo 37.9%**,
  **Terminal-Bench 2.0 61.6%**, **Terminal-Bench 2.1 61.42% (Vector Wire) against 53.2%
  (Vals, #19 of 21)**, **Terminal-Bench Hard 43.94%**, **τ²-bench Telecom 97.7% (#1 of
  10)**, **τ³-bench 70.7%**, **MCP-Tasks 74.1%**, **WideResearch 74.3%**, **Claw-Eval
  58.8%**, **QwenClawBench 57.2%**, **MCP Atlas 48.2%**, **DeepPlanning 41.5%**,
  **VITA-Bench 44.3%**, **Toolathlon 39.8%**, **ResearchClawBench 18.0%**, **GDPval-AA
  24.5% (Elo 1066)**, **GPQA 90.4% first-party / 88.18% AA / 87.4% Vals**,
  **MMLU-Pro 88.5%**, **MMLU-Redux 94.5%**, **C-Eval 93.3%**, **SuperGPQA 71.6%**,
  **AIME 2026 95.3% (#1 of 2)**, **HLE 28.8%**, **AA-HLE 27.8%**,
  **AA-Omniscience +0.9** with accuracy 26.4% and hallucination rate 34.6%,
  **CritPt 2.9%**, **FrontierMath v2 26.2% / 8.3%**, **AA-LCR 78.33%**,
  **LongBench v2 62%**, **AI-Needle 68.3%**.
  **Three conflicts adjudicated explicitly rather than averaged.** First, **Artificial
  Analysis Intelligence Index — 27.0 on benchgap and benchlm against 39.6 on lounge.ai
  (#6 of 11, +5.9)**; the 27.0 is preferred because two independent sources carry it and
  aggregator rows in this batch have consistently been the current-index family, and **both
  are recorded because the 12.6-point spread is wider than the gap between reasoning
  bands**. Second, **Terminal-Bench 2.1 — 61.42% on Vector Wire against 53.2% on Vals AI
  (#19 of 21)**; the lower independent figure is used. Third, **GPQA — 90.4% first-party
  against 88.18% on Artificial Analysis and 87.4% on Vals**; the conservative aggregator
  figure is used, and this is the first case in this batch where the **vendor** number is
  the highest of three. **One pattern noted across the batch:** where a vendor figure and an
  independent reading disagree on SWE-bench in this batch — GPT-5.1 at 76.3% vs 66.00%,
  GPT-5.2 at 80.0% vs 69.00–72.80%, and here **Qwen3.6 Plus at 78.80% vs 73.40% on Vals** —
  the independent reading has been lower every time, and has been the right call four times
  out of four. That is a reason to weight third-party boards over launch tables across this
  whole dataset. **One structural fact recorded: the model is `Superseded`**, with the
  successor chain Qwen3.7 Max → Qwen3.7 Plus → Qwen3.8 Max → Qwen3.8 27B → Qwen3.8
  Flash-Next, each a separate entry in this dataset. Scores are normalized 1–100
  interpretations per `model-comparison.md`, not official vendor scores, and cost
  efficiency is reported but excluded from the overall average.
- Future sources: add a new file next to this one, e.g. `qwen-3.8-max.md`, using the same
  headings — **Qwen3.8 Max, Qwen3.7 Max, Qwen3.7 Plus, Qwen3.8 27B and Qwen3.8 Flash-Next
  are all separate models in this dataset** and all postdate this one. The gaps most worth
  closing: **an independent AA Intelligence Index reading** to settle the 27.0-versus-39.6
  split, and **an MMMU or MMMU-Pro figure**, which would put Multimodal on the same
  evidentiary footing as every other dimension here.