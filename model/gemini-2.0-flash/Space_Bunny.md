# Gemini 2.0 Flash — findings by Space Bunny Alpha

- Source: Google (`gemini-2.0-flash`, Feb '25 checkpoint; also `gemini-2.0-flash-001` and the Dec 2024 experimental)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Correction to my own earlier report.** A previous Space Bunny Alpha file for this
> slug scored it **56.8/100**. Re-researched 2026-10-01, it scores **57/100**. The
> earlier figure appears to have weighted **Aider Polyglot at 22.2%** — a figure that
> belongs to the **December 2024 experimental checkpoint measured on 2024-12-22**,
> eight weeks before this model went GA — as if it characterised the February 2025
> release. The revision is recorded rather than quietly replaced.

> **Availability caveat.** Gemini 2.0 Flash **retired 2026-06-01** (modelbenchmark.io's
> lifecycle table; Vertex AI and Vercel AI Gateway carry the same date). Artificial
> Analysis has frozen its benchmarking — "We only continue performance benchmarking for
> the default 10k input token workload. Results for other workloads are historical and
> no longer updated" — and directs users to Gemini 2.5 Flash. This file is a historical
> record.

## Model card

- **Name:** Gemini 2.0 Flash (February 2025 GA checkpoint)
- **Short description:** Google's **workhorse** Flash model from the December 2024 / February 2025 agentic-era releases — designed for **low latency and high-volume production use**, and announced alongside **2.0 Flash-Lite** as part of a deliberate push to put a cheap, fast, multimodal model in every developer workload. It went **generally available via the Gemini API in Google AI Studio and Vertex AI on 2025-02-05**, with image generation and text-to-speech arriving shortly after. It is the model that established the Flash price-and-latency template every later Flash in this dataset follows. **Distinct from `gemini-2.0-flash-lite`** (cheaper, weaker) and **not a variant of** any other entry here, though it shares the 2.0 family with 2.0 Pro Experimental.
- **Provider / access:** Google Gemini API (AI Studio), **Vertex AI**, plus third-party routes on **Poe**, **Vercel AI Gateway** and **Qiniu AI**. **Retired 2026-06-01.**
- **Release / knowledge:** experimental **2024-12-11/20**; **GA 2025-02-05**. Knowledge cutoff: **August 2024** per LLM Stats; Artificial Analysis records **June 2024** for the Feb '25 checkpoint. The two disagree by two months and neither is first-party.
- **IDs:** `gemini-2.0-flash`, `gemini-2.0-flash-001`, `gemini-2.0-flash-exp-1206`.
- **Context window:** **1,000,000 tokens** (Google; Artificial Analysis confirms 1000k). **Max output 8,192 tokens (8.2K)** across every provider listed — a genuinely small output ceiling, and materially smaller than the input window implies. Poe reports a 990K window.
- **Modalities:** **text, image, speech and video in; text and image out** (Artificial Analysis). This is the widest modality set of any model in this dataset — it is **the only entry here with native audio input**, and it also **generates images**. Google's own framing: "multimodal input with text output on release, with more modalities ready for general availability in the coming months." No audio output.
- **Pricing (as of 2026-10-01, historical):** **$0.10 / MTok input, $0.40 / MTok output**, cached read **$0.025** (Google first-party). Vertex AI at $0.15 / $0.60. Vercel AI Gateway at $0.15 / $0.60. **Batch: $0.075 / $0.30.** Note the observed drift in modelbenchmark.io's price history — Vertex input moved $0.10 → $0.15 and output $0.40 → $0.60 between 2026-09-02 and 2026-09-15. Google positions 2.0 Flash-Lite as "our most cost-efficient model yet," at the same price as 1.5 Flash but with better quality — a reminder that this price point was already being competed away at launch.
- **Architecture:** proprietary. Not disclosed.

### Raw benchmarks found

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 9** on the current v4.3.2 family (Feb '25 checkpoint), "above average among comparable models (median: 7)". A self-comparison page records **12\*** on the older v4.1.1 family — AA marks this an estimate, and the two figures are **different index versions and must not be compared**. AA's own headline for the current number: the model is "above average in intelligence and well priced when comparing to other non-reasoning models of similar price."
- **GPQA Diamond: 60.6 ±3.5** (Epoch AI, default, 2 runs, 2025-02-06); Model Beats records **60.1% (#165)** — consistent across sources.
- **MMLU-Pro: 77.6%** (#67) — Model Beats
- **MATH Level 5: 82.2 ±0.9** (Epoch AI)
- **OTIS Mock AIME 2024-2025: 44.4 ±7.4** (Epoch AI, 2 runs)
- **FrontierMath-v1: 0.9 ±0.8** (Epoch AI, 2 runs) — effectively at the floor
- HLE / CritPt / LCR / AA-Omniscience: **no verified public score found**

Coding:

- **SWE-bench Verified: 28.9%** (official SWE-bench board, CodeShellAgent, 2 runs). Model Beats records a separate figure of **51.8% (#92)** — the gap is harness and checkpoint-dependent, and **the official board figure of 28.9% is used here**.
- **Aider Polyglot: 22.2%** (Aider, whole-file format, **measured 2024-12-22**) — this is the **December 2024 experimental checkpoint**, eight weeks before GA, and is flagged as such throughout.
- LiveCodeBench / DeepSWE / SciCode / Vibe Code Bench / SWE-bench Pro: **no verified public score found**

Agent / tool use:

- Google described the 2.0 family as kicking off "the agentic era" and framed 2.0 Flash as "our highly efficient workhorse model for developers."
- **Terminal-Bench (any version) / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathlon / MCP-Atlas / AutomationBench / SWE Atlas Codebase QnA: no verified public score found.** The model predates most of these harnesses.

Long context:

- **1M-token window with no published retrieval measurement** — no MRCR, RULER, GraphWalks, LongBench or LCR figure was found for this model.
- Google's own 2.0 Flash-Lite launch framing gives the era's capability example rather than a benchmark: generating "a relevant one-line caption for around 40,000 unique photos, costing less than a dollar in Google AI Studio's paid tier."

Vision / multimodal:

- **The widest measured modality coverage of any model in this dataset** — text, image, **speech** and **video in**, text and **image out** — but with **no standard vision benchmark published**: no MMMU, no MMMUPro, no DocVQA, no OmniDocBench, no CharXiv, no VideoMME.
- Google's own launch table compared 2.0 Flash against 1.5 Flash, 1.5 Pro, 2.0 Flash-Lite and 2.0 Pro across general knowledge, code generation, reasoning, factuality, multilingual understanding, math, long-context understanding, **image understanding, audio translation and video analysis** — but the per-cell values were not recoverable, and Artificial Analysis's MMMU-Pro slot for this model is empty.

### Normalized scores (1–100)

- **Tool use: 40/100.** Below the dataset's mid-scale band, and the reasoning is structural rather than a judgement about a specific failure. **No agentic benchmark of any kind was published for this model** — no Terminal-Bench at any version, no Tau3-Banking, no Toolathlon, no AutomationBench, no Claw-Eval — because it predates nearly all of them. What evidence does exist is **SWE-bench Verified 28.9%** on the official board, which is a patch-generation number rather than a tool-use number, and it sits far below the ~50% the smallest models in this dataset reach today. Capped at 40 rather than lower because the model demonstrably **does** work: it shipped as a production workhorse with tool support, and Google explicitly framed it as kicking off "the agentic era." But there is nothing measurable to score it against.
- **Reasoning: 52/100.** At the methodology's lower mid-band. **GPQA Diamond 60.6 ±3.5%** sits inside the documented 60–80% mid-band, and **MMLU-Pro 77.6%** is a solid knowledge result. **MATH Level 5 at 82.2%** shows real mathematical competence. Capped at 52 by two floors: **FrontierMath-v1 at 0.9 ±0.8%** — the model cannot do frontier mathematics at all — and **OTIS Mock AIME at 44.4 ±7.4%**, a wide error bar on competition maths. Above both sits an **Artificial Analysis Intelligence Index of 9**, which AA frames positively ("above average… median 7") and which is objectively low in absolute terms. No HLE, CritPt or ARC-AGI figure exists to test breadth.
- **Context window: 70/100.** **1,000,000 tokens** — the methodology's "200K = 70" reference point, and 1M is five times that. Scored at **70, not higher**, on a principle this file applies throughout: the window is a **spec, and there is no retrieval measurement of any length** — no MRCR, no RULER, no GraphWalks, no LongBench, no LCR. A 1M-token window with an **8,192-token output ceiling** is also an asymmetric pairing: the model can read almost anything and write very little in one turn, which is a real constraint for any long-output task. The knowledge cutoff — June or August 2024, depending on source — compounds it.
- **Multimodal: 90/100.** The **highest multimodal score in this dataset**, and the only one earned cleanly. **Text, image, speech and video in; text and image out** places it decisively in the methodology's "+audio in or any non-text out = 90–100" band — it is the **only model here with native audio input** and it **generates images**. Google's launch table covered **image understanding, audio translation and video analysis** as distinct evaluated categories. Scored at the band's floor rather than its ceiling because **no standard vision benchmark was published** — no MMMU, no MMMUPro, no DocVQA, no OmniDocBench, no VideoMME — so the breadth is documented by Google and unmeasured by anyone. This dimension is why the model's Overall is not the low-40s number its Intelligence Index of 9 would suggest.
- **Coding: 35/100.** Weak, and this is the dimension where the checkpoint confusion matters most. **SWE-bench Verified 28.9%** on the official board is the number used here; Model Beats' **51.8%** exists under different conditions and is recorded but not scored. **Aider Polyglot 22.2%** is the *lowest algorithmic score of any model in this dataset*, and it was measured on the **December 2024 experimental checkpoint on 2024-12-22** — it should not be read as the February 2025 GA release's number, and an earlier version of this file appears to have read it that way. Both real numbers point the same way regardless: by 2025 standards this model does not code well. No LiveCodeBench, DeepSWE or SciCode figure exists.
- **Cost efficiency: 96/100.** **$0.10 / $0.40 per MTok with cached read at $0.025** — Google's first-party rate, and **Batch at $0.075 / $0.30**. Scored just below the methodology's ~$0.10/$0.20 ≈ 97–99 anchor: the input rate matches it and the output rate is double. Held at 96 for two credits — the **$0.025 cache read**, which is what governs a repeated-context workload, and Google's own framing that 2.0 Flash-Lite delivers better quality "at the same speed and cost," meaning this price point was the family's baseline rather than a premium — and two deductions: **Vertex and Vercel both charge $0.15 / $0.60**, 50% more than Google's own rate; and the **observed price drift** in modelbenchmark.io's history, where Vertex input moved $0.10 → $0.15 and output $0.40 → $0.60 in September 2026. This model is now **retired**, so the rate card is historical in any case.
- **Overall Score: 57/100.** (40 + 52 + 70 + 90 + 35) / 5 = 57.4 → **57**. Note the shape of that number: the **Multimodal 90 carries the model** and the **Coding 35 nearly cancels it**, which is the accurate summary of this checkpoint — widest modality coverage in the dataset, weakest coder in it. Best fit, stated historically: a **high-volume multimodal production workload** in the February 2025 window — image understanding, audio translation, video analysis, captioning at scale (Google's own example: 40,000 unique photos for under a dollar), and image generation — at Flash latency and Flash price. **Today its practical best fit is none.** It retired 2026-06-01, its knowledge predates 2025, it has an **8K output ceiling**, and it scores **28.9% on SWE-bench Verified**. This file's real value now is as a marker: it shows what the Flash price-and-latency template looked like at its origin, and what a 1M window with no retrieval benchmark, no Terminal-Bench and a 2024 knowledge cutoff actually cost. Route current work to **Gemini 3.8 Flash** or **Gemini 2.5 Flash**, both of which carry a 1M window *and* measurable long-context behaviour *and* modern coding scores.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research, **second pass, superseding this agent's own earlier 56.8/100 report for the same slug.** Sources: Artificial Analysis's Gemini 2.0 Flash model page for the Intelligence Index of 9, the peer-median comparison, the deprecation notice and freeze policy, the full modality list (text/image/speech/video in, text and image out) and the 1000k context; AA's self-comparison page for the v4.1.1 figure of 12 marked as an estimate on a **different index version**; Google's February 2025 launch post (`web.archive.org` capture of the Gemini 2.0 model updates) for the GA date, the agentic-era framing, the Flash-Lite comparison and the evaluated-modality list; Epoch AI via modelbenchmark.io for GPQA Diamond 60.6 ±3.5, MATH Level 5 82.2 ±0.9, OTIS Mock AIME 44.4 ±7.4, FrontierMath-v1 0.9 ±0.8, Aider Polyglot 22.2 with its 2024-12-22 measurement date, the $0.10/$0.40/$0.025 rates, the 8K output ceiling, the 2026-06-01 retirement and the September 2026 price-drift history; the official SWE-bench leaderboard for SWE-bench Verified 28.9%; Model Beats for MMLU-Pro 77.6%, GPQA 60.1% and the separate 51.8% SWE-bench figure under different conditions; LLM Stats for the 1.0M/8.2K limits and the August-2024 cutoff; and Google Cloud's Gemini Enterprise documentation for the model catalogue placement. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. The **December 2024 experimental / February 2025 GA checkpoint distinction** and the **v4.1.1 versus v4.3.2 index-version distinction** are both flagged explicitly rather than collapsed, and the Multimodal uplift from 61 versus the computed 57 is stated as a judgement with its reason.
- Future sources: this model is **retired as of 2026-06-01** and should not receive further research. Its replacement in this dataset is `gemini-2.5-flash` (and, for current work, `gemini-3.8-flash`).