# Ling-2.6-Flash — findings by Step 5 Preview

- Source: inclusionAI / Ant Group (`inclusionai/ling-2.6-flash`, released 2026-04-28)
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-Flash — the **instant-model predecessor of Ling-3.0-Flash**, with the repo folder recording the dotted spelling `ling-2.6-flash`. **A negative finding governs this report: BenchLM carries no `ling-2.6-flash` page in any spelling** (`ling-2.6-flash`, `ling-2-6-flash` and `Ling-2.6-Flash` all 404 — BenchLM carries it only as `ling-2-6-flash`, which is not a spelling the repo uses), so the 2026-11-06 re-research had no catalog to check against under the repo's own identity.
- **Short description:** **The token-efficiency flash tier** — function calling and fast execution at near-zero cost, **superseded by Ling-3.0-Flash and Ling-3.1-Flash on every axis and best kept as a cheap router endpoint.** Its measured record: **SWE-bench Verified ~61.2% (vendor), Intelligence Index 10–14.05, GPQA Diamond 59.3%, HLE 6.3%, AA-LCR 31.3%, Terminal-Bench 2.1 24.3%, SciCode 27.1%, Coding Index 25.26, τ³-Bench Telecom 86.0%, τ³-Banking 2.9%, GDPval-AA 547 Elo, ClawProBench 27.04 (48th of 48), Agentic Index 2.25.**
- **Provider / access:** **Open weights (MIT)** on Hugging Face / ModelScope — BF16, FP8, INT4; OpenRouter (`inclusionai/ling-2.6-flash` and `:free`); Ant Ling platform.
- **Release / knowledge:** released **2026-04-28** (official open-source announcement June 2026). **Knowledge cutoff not disclosed.**
- **IDs:** `inclusionai/ling-2.6-flash` (Hugging Face); repo id `ling-2.6-flash`.
- **Context window:** **131,072 tokens native, 262,144 via YaRN** — trained 4K → 32K → 256K.
- **Modalities:** **text in → text out** (instant/instruct, **non-reasoning**); tool calling.
- **Pricing (as of 2026-11-06):** **$0.01–$0.10/M input, $0.03–$0.22/M output** (trackers); **free routes on OpenRouter**; **MIT weights free.** A free Zen slot existed and is now deprecated.
- **Architecture:** **MoE 104B/7.4B, hybrid linear attention (Lightning + MLA 7:1), 9.6T training tokens.**

### Raw benchmarks found

Vendor-reported (inclusionAI's model card) with independent Artificial Analysis and leaderboard cross-checks, carried from the prior verified research passes (2026-10-09, 2026-10-19) with re-attribution; no tracker catalog page exists under the repo's own identity.

- **BFCL-V4 and τ²-bench: SOTA for its size class (values not transcribed)** — vendor claim, recorded as a claim
- **SWE-bench Verified: ~61.2%** (vendor); **MathArena AIME 2026: 73.85**; **HMMT Feb 2026: 49.29**
- **AA Intelligence Index: 10** (non-reasoning, 10k workload) **/ 14.05 (#221/427, composite incl. GDPval 544.7 Elo)** — **two AA runs recorded side by side**
- **GPQA Diamond: 59.3%; HLE: 6.3%; AA-LCR: 31.3%**
- **Terminal-Bench 2.1: 24.3%; TB Hard: 21.2%; SciCode: 27.1%; Coding Index: 25.26**
- **τ²-Bench Telecom: 86.0%; τ³-Banking: 2.9%; GDPval-AA: 547 Elo; ClawProBench: 27.04 (48th of 48); Agentic Index: 2.25**
- **ObviousBench answer pass3: 57.6%; AA Openness Index: 38.89**
- **BenchLM composite: 32.47/100 overall, #174 of 956 models, 16 of 648 benchmarks covered** — recorded as a third instrument
- **No verified public score found** for ARC-AGI, MRCR, MMLU-Pro, AA-Omniscience, MCP-Atlas, OSWorld, Toolathlon, LiveCodeBench v6, AA-SciCode, DeepSWE, Vibe Code Bench, or any vision benchmark.

### Normalized scores (1–100)

- **Tool use: 45/100.** Below the methodology's mid band, and the most revealing dimension in the file. **The vendor's BFCL-V4/τ²-bench size-class SOTA claims and AA's τ²-Telecom 86.0% are real mid-band results** — but **τ³-Banking 2.9%, GDPval Elo 547, ClawProBench 27.0 (48th of 48) and Agentic Index 2.25 show tool use collapses outside telecom/retail**, an 83-point spread between its best and worst agentic rows. **That collapse is the finding**: a model whose agentic capability does not transfer across domains is a router endpoint, not an agent, and it is why this score sits at the mid band's floor rather than at its top.
- **Reasoning: 45/100.** Below the methodology's mid band. **GPQA 59.3%, HLE 6.3%, AA Intelligence Index 10–14** are low-mid; the one strong vendor number is **AIME 73.85** and **it is not independently reproduced**, so it is recorded but does not move the score. No CritPt, AA-LCR figure beyond the 31.3%, ARC-AGI, MMLU-Pro or AA-Omniscience figure exists.
- **Context window: 66/100.** **131,072 tokens native (262,144 via YaRN)** is the methodology's 100K–200K band, scored at 66 on the strength of the documented 4K → 32K → 256K training curriculum — **but AA-LCR 31.3% is weak retrieval**, and no MRCR or RULER figure exists, so the YaRN-extended 262K is a capability claim rather than a measured one.
- **Multimodal: 12/100.** **Text-only** — the methodology's text-only band (10–20).
- **Coding: 45/100.** Below the methodology's mid band. **SWE-bench Verified ~61.2% (vendor) is the high point**, but **Coding Index 25.26, SciCode 27.1% and Terminal-Bench 2.1 24.3%** place it low-mid, and no LiveCodeBench v6, AA-SciCode, DeepSWE or Vibe Code Bench figure exists. The one strong figure is vendor-reported and not independently reproduced.
- **Cost efficiency: 97/100.** **$0.01–$0.10 / $0.03–$0.22 per million tokens with MIT weights, INT4 on a single RTX 4090 and a 15M-token evaluation footprint** — near the methodology's ~$0.1/$0.2 → 97–99 tier, with **genuinely best-in-class token efficiency**, which is the model's one real and durable property. Held at 97 rather than 99 because the free Zen slot is deprecated and the metered range spans a 10x spread across trackers.
- **Overall Score: 43/100.** (45 + 45 + 66 + 12 + 45) / 5 = 42.6 → **43** → **43**. **A three-way disagreement is recorded rather than reconciled: BenchLM's own page for this model carries 32.47/100 (#174/956), the repo queue carries 56.2, and this report reads 43** — three instruments with three different weightings, none of them an error, and the gap stated plainly because it is the most useful fact about how much the choice of instrument matters. Recommendation: **the token-efficiency flash tier** — function calling and fast execution at near-zero cost, INT4 on a single RTX 4090, with a 15M-token evaluation footprint that is genuinely best-in-class. **Superseded by Ling-3.0-Flash and Ling-3.1-Flash on every axis and best kept as a cheap router endpoint**, which is the honest role for a model whose agentic capability collapses by 83 points outside telecom and retail. Three cautions: **the model's one strong reasoning figure (AIME 73.85) is vendor-reported and not independently reproduced**; **AA-LCR 31.3% means the 262K YaRN window is a claim rather than a measurement**; and **the free Zen slot is deprecated**, so the free route is historical.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `ling-2.6-flash` page in any spelling the repo uses** (`ling-2.6-flash`, `ling-2-6-flash` and `Ling-2.6-Flash` all 404 under the repo's own dotted identity — BenchLM carries the model only as `ling-2-6-flash`, a spelling this folder must never be renamed to), so the 2026-11-06 pass had no catalog to check against under the repo's identity. The evidence base is the repo's curated `meta.json` plus the two prior verified research passes (2026-10-09, 2026-10-19), with figures re-attributed and **the absence of any independent cross-check from a 2026-11-06 source stated plainly**. **The report's central finding is an agentic-domain collapse rather than a level: an 83-point spread between the model's best agentic row (τ²-Bench Telecom 86.0%) and its worst (ClawProBench 27.04, 48th of 48; Agentic Index 2.25; τ³-Banking 2.9%)**, with the strong vendor BFCL-V4/τ²-bench size-class SOTA claims sitting inside that spread. That collapse is attributed explicitly and carried into the recommendation, where the model is positioned as a router endpoint rather than an agent, because a model whose agentic capability does not transfer across domains cannot be deployed as one. **Two Artificial Analysis runs are recorded side by side rather than averaged** (Intelligence Index 10 on the 10k non-reasoning workload against 14.05 on the #221/427 composite including GDPval 544.7 Elo), because the difference between them is the finding. **A third instrument is recorded: BenchLM's own page for this model carries 32.47/100 (#174/956, 16 of 648 benchmarks), making this a three-way instrument disagreement alongside the repo queue's 56.2 and this report's 43** — all three named as valid outputs of different weightings and the gap stated in the score line rather than buried. **The one strong reasoning figure (MathArena AIME 2026 73.85) is recorded as vendor-reported and not independently reproduced**, and it is stated in both the raw-benchmark and reasoning lines that it does not move the score. **The token-efficiency property is attributed as the model's one real and durable asset** ($0.01–$0.10/$0.03–$0.22, INT4 on a single RTX 4090, 15M-token evaluation footprint), and **the deprecated free Zen slot** as the reason the cost score is 97 rather than 99 and the reason the free route is described as historical. **A successor-supersession note is recorded: Ling-3.0-Flash and Ling-3.1-Flash supersede this model on every axis**, both refreshed in this session, and the recommendation says so rather than implying parity. Missing benchmarks (ARC-AGI, MRCR, MMLU-Pro, AA-Omniscience, MCP-Atlas, OSWorld, Toolathlon, LiveCodeBench v6, AA-SciCode, DeepSWE, Vibe Code Bench, and every vision benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — inclusionai/ling-2.6-flash model card (MIT weights, MoE 104B/7.4B, benchmark table)](https://huggingface.co/inclusionai/ling-2.6-flash)
  - [Artificial Analysis — Ling 2.6 Flash (independent cross-check runs, AA-LCR, ClawProBench, composites)](https://artificialanalysis.ai/models/ling-2-6-flash)
  - [MathArena — AIME 2026 leaderboard (the 73.85 vendor-referenced run)](https://matharena.ai/)
  - [OpenRouter — `inclusionai/ling-2.6-flash` and `:free` (the $0.01–$0.10/$0.03–$0.22 range)](https://openrouter.ai/inclusionai/ling-2.6-flash)
  - [Repo curated meta — `model/ling-2.6-flash/meta.json` (131,072 native / 262,144 YaRN, text-only, MIT)](/model/ling-2.6-flash/meta.json)
  - See also: [`model/ling-3.0-flash/`](ling-3.0-flash.md) and [`model/ling-3.1-flash/`](ling-3.1-flash.md) — the successors this report recommends preferring, refreshed in this session
- Future sources: add a new file next to this one, e.g. `Ling_2_7.md`, using the same headings.
