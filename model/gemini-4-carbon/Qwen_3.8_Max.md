# Gemini 4 Carbon — findings by Qwen 3.8 Max

- Source: Google (`gemini-4-carbon`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon (the "High" reasoning variant)
- **Short description:** Google's **October-2026 frontier flagship** — currently **#1 on the Artificial Analysis Intelligence Index (#1/66, score 60 vs median 36)** and **#1 of 1008 models on BenchLM (88.38/100)**. A reasoning model with **1M-token context** and the **broadest input modality set (text + image + speech + video → text)**, plus standout long-range reasoning (GraphWalks 96.2% out to 1M), very low hallucination (11.4%), and perfect prompt-injection resistance (Gray Swan IPI 0.0%). Trades throughput for depth — **notably slow (67 tok/s, 30.5 min/task) and very verbose** at premium **$4/$20** pricing.
- **Provider / access:** Google DeepMind; served via `opencode/gemini-4-carbon` (OpenCode Zen). Proprietary / closed weights. Reasoning model (a non-reasoning variant may also exist — this page reflects the High/reasoning one).
- **Release / knowledge:** Released **October 2026** (AA + BenchLM). Knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gemini-4-carbon`; AA slug `gemini-4-carbon`; BenchLM slug `gemini-4-carbon`.
- **Context window:** **1M tokens** (~1500 A4 pages, AA-confirmed) — verified effective at the full range (GraphWalks BFS 256K–1M 96.2%).
- **Modalities:** **Text + image + speech + video in → text out** (AA-confirmed; the broadest input-modality tier). Text-only output.
- **Pricing (as of 2026-11-04):** **$4.00 / $20.00** per 1M in/out with a **95% cache discount**; **$7.76 per Intelligence Index task**. AA Cost rank **#58/65** ("somewhat expensive" in / "expensive" out vs $2/$10 medians).
- **Architecture:** Proprietary Gemini 4-class; parameters undisclosed. Reasoning + tool use; multimodal (quad-modal) input encoder.

### Raw benchmarks found

> Independent aggregators: **Artificial Analysis** (`gemini-4-carbon`) — **Intelligence Index #1/66 = 60** (4/4 units, well above median 36); Performance #56/62 (TTFT 64.93s, 67 tok/s, 30.5 min/task); Cost #58/65 ($4/$20, 95% cache, $7.76/task); Verbosity #63/65 (205M output tokens vs 69.6M median). **BenchLM** (`gemini-4-carbon`) — **#1 of 1008, 88.38/100, 23 of 739 rows** (Google / Proprietary / Reasoning). Rows mix independent harnesses (Collinear CWE-bench, Proximal FrontierSWE) with AA-sourced figures and Google's own evals card.

Agent / tool use:

- **OSWorld 2.1 Offline: 81.5%** — strong computer-use / GUI agentic.
- **AA Terminal-Bench 4.0: 65.2%** — solid agentic terminal on the harder 4.0 split.
- **AA AutomationBench: 77.8%** (AutomationBench 53.9%) — strong workflow automation.
- **AA Briefcase Elo: 1609**; **GDPval-AA Elo: 1733** — high real-world/knowledge-work Elo.
- **CWE-bench v1: 71.0%** (Collinear, independent) — strong vulnerability-remediation agentic coding; **ExploitGym 53.5%**; **GDP.pdf 28.4%**.

Reasoning / knowledge:

- **AA Intelligence Index: 60 (#1/66)** — the top-ranked reasoning composite, well above the median 36.
- **AA-HLE: 60.4%** — frontier Humanity's Last Exam.
- **GraphWalks BFS (256K–1M): 96.2%** — near-perfect long-range structural reasoning at the full 1M window.
- **AA-LCR: 79.3%** (long-context reasoning); **CritPt: 36.0%** (critique-point reasoning).
- **AA-Omniscience Index: 53.5%**, **Accuracy 58.3%**, **Hallucination 11.4%** (very low).
- **Gray Swan IPI: 0.0%** — perfect prompt-injection resistance (instruction-integrity).

Coding:

- **FrontierSWE v2: 61.2%** (Proximal, independent) — strong frontier repo-scale SWE.
- **AA-SciCode: 64.2%** — good scientific/research coding.
- **CWE-bench v1: 71.0%** (Collinear, independent) — strong security-coding. No flagship SWE-bench Verified row published for this model.

Multimodal:

- **Chartography (no tools): 72.5%** — good scientific-chart / document reasoning (image input).
- **Blueprint-Bench 2: 58.6%** — mid on blueprint/spatial reasoning. Quad-modal input (text+image+speech+video) is AA-confirmed.

Long context:

- **1M tokens**; **GraphWalks BFS 256K–1M 96.2%** and **AA-LCR 79.3%** independently verify effective reasoning at the full window.

> Provenance: **independent + AA-sourced + Google evals card, all corroborating.** The headline claim — **AA Intelligence Index #1/66 = 60** and **BenchLM #1 of 1008 (88.38)** — is from two independent aggregators. Agentic/coding rows include genuinely independent harnesses (Collinear CWE-bench 71.0%, Proximal FrontierSWE v2 61.2%), and long-context effectiveness is independently verified (GraphWalks 96.2% at 1M). This is one of the most heavily and independently corroborated models in the roster.
> Meta verification: **DISCREPANCY — the curated `meta.json` is a stale/sparse scaffolded stub and is contradicted by authoritative AA evidence.** The stub says `contextWindow: "128K total"` and `modalities: "Text in/out"`; **AA confirms 1M-token context and text+image+speech+video input → text output.** The stub's `short` ("Gemini 4 Carbon model evaluation entry.") and `pricingNote` ("Standard pricing") are placeholders; AA/BenchLM confirm it is the **#1-ranked frontier flagship** at **$4/$20** premium pricing. Scored on the authoritative AA/BenchLM evidence, not the stub. (The sole-rater cohort average — Context 96, Multimodal 90 — already aligns with the AA evidence, not the stub.)

### Normalized scores (1–100)

- **Tool use: 92/100.** Broad, strong agentic cluster — **OSWorld 2.1 81.5%**, **AA Terminal-Bench 4.0 65.2%**, **AA AutomationBench 77.8%**, **GDPval-AA Elo 1733**, **AA Briefcase Elo 1609**, plus independent **CWE-bench v1 71.0%**. Comprehensive real-world/agentic coverage. Held just below the absolute top because Terminal-Bench 4.0 (65.2%) and ExploitGym (53.5%) are solid rather than frontier-leading.
- **Reasoning: 94/100.** **AA Intelligence Index #1/66 = 60** (independent, top-ranked, well above median 36), **AA-HLE 60.4%**, **GraphWalks 96.2%**, **CritPt 36.0%**, and **very low hallucination (11.4%)** with **perfect prompt-injection resistance (Gray Swan IPI 0.0%)**. The strongest independently-verified reasoning composite in the dataset. Slightly above the cohort's 92 on the strength of the #1/66 AA Index rank.
- **Context window: 96/100.** **1M tokens** (AA-confirmed) with effectiveness **independently verified at the full range** — **GraphWalks BFS 256K–1M 96.2%** and **AA-LCR 79.3%**. The top 1M tier backed by real long-range evidence, not just an asserted window. Matches the cohort's 96.
- **Multimodal: 86/100.** **Text + image + speech + video in → text out** — the broadest input-modality tier (AA-confirmed), corroborated by **Chartography 72.5%** and **Blueprint-Bench 2 58.6%**. Scored above my base quad-modal tier (84) for verified four-modal input with corroborating rows, but below the cohort's 90 because output is text-only and the actual multimodal benchmarks are solid rather than frontier-topping.
- **Coding: 90/100.** Strong independent coding evidence — **FrontierSWE v2 61.2%** (Proximal), **AA-SciCode 64.2%**, **CWE-bench v1 71.0%** (Collinear). Held just below the cohort's 92 because there is no flagship SWE-bench Verified row and ExploitGym (53.5%) is mid — the coding strength is real but slightly less headlined than the reasoning/agentic peaks.
- **Cost efficiency: 58/100.** **$4/$20** per 1M (95% cache discount) at **AA Cost rank #58/65**, **$7.76/task**, and notably poor throughput — **67 tok/s**, **30.5 min/task**, **very verbose (205M tokens, #63/65)**. Premium frontier economics that trade speed/verbosity for depth. Well below the cohort's generous 80. Not counted toward Overall.
- **Overall Score: 92/100.** Mean of Tool 92 + Reasoning 94 + Context 96 + Multimodal 86 + Coding 90 = 458 / 5 = 91.6 → 92. Best fit: **the current #1-ranked frontier flagship** — top reasoning (AA Index #1/66), verified 1M long-range context, quad-modal input, and strong agentic/coding, at premium price and slow, verbose throughput. **Divergence note:** sole-rater cohort average 92.4 vs my 92 → **−0.4** (tightly aligned). Both reject the meta stub's 128K/text-only in favour of the AA-confirmed 1M/quad-modal reality; my Context 96 and Reasoning 94 match/exceed the cohort, while I score Multimodal (86 vs 90) and Coding (90 vs 92) slightly more conservatively given text-only output and the absent SWE-bench Verified flagship.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-04
- Method: public internet research (Artificial Analysis `gemini-4-carbon` for Intelligence Index #1/66 = 60, 1M context, text+image+speech+video → text, $4/$20 + 95% cache, $7.76/task, 67 tok/s, 30.5 min/task, 205M verbosity; BenchLM `gemini-4-carbon` #1/1008 = 88.38 with 23 rows — OSWorld 2.1 81.5%, AA Terminal-Bench 4.0 65.2%, AA AutomationBench 77.8%, GDPval-AA Elo 1733, AA Briefcase Elo 1609, CWE-bench v1 71.0%, FrontierSWE v2 61.2%, AA-SciCode 64.2%, AA-HLE 60.4%, GraphWalks 96.2%, AA-LCR 79.3%, CritPt 36.0%, Omniscience 53.5%, Hallucination 11.4%, Gray Swan IPI 0.0%, Chartography 72.5%, Blueprint-Bench 2 58.6%; curated `meta.json` flagged as a stale 128K/text-only stub and overridden by AA evidence). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 4 Carbon](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [Google DeepMind — Gemini 4 Carbon evals methodology](https://deepmind.google/models/evals-methodology/gemini-4-carbon)
  - [Google — Introducing Gemini 4 Carbon (launch post)](https://blog.google/technology/google-deepmind/introducing-gemini-4-carbon/)
  - [BenchLM — Gemini 4 Carbon benchmarks](https://benchlm.ai/models/gemini-4-carbon)
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
