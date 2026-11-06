# Solar Open 2 — findings by Step 5 Preview

- Source: Upstage (`upstage/Solar-Open2-250B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2. Upstage's **open-weight Solar** model — note the repo folder name is `solar-open-2` while BenchLM's canonical slug is `solar-open-2` and the Hugging Face model is **`upstage/Solar-Open2-250B`**, so the "2" in the folder is the generation and the "250B" is the parameter count. **A negative finding governs this report and is its headline: BenchLM carries a page for this slug but only 15 source-displayable benchmark rows with no overall score** — its own text reads *"has 15 source-displayable benchmark rows but no public overall score. It remains unranked"*, with Overall Score "Not computed (unranked)". So the repo queue's Overall of 69.8 is a **roster artefact, not a measured figure** — the same discrepancy documented across sixteen models in this research series.
- **Short description:** An **unranked open-weight 1M model with a strong Korean-language suite and genuinely strong coding-maths figures, and a weak execution layer.** Its best figures are **LiveCodeBench v6 92.4%, AIME26 95.7%, HMMT Feb 2026 93.9%, IFBench 80%, MMLU-Pro 86.2% and GPQA-D 86.3%**, and — unusually in this corpus — **a full Korean benchmark cluster (CLIcK 90.7%, HRM8K 92.2%, KMMLU-Pro 78.4%)** which is the model's defining differentiator. Its weaknesses are **APEX-Agents 16.6%, terminalBenchHard 28.3% and HLE w/o tools 28.8%**.
- **Provider / access:** **Open weights** on Hugging Face (`upstage/Solar-Open2-250B`), and self-hosting. No Zen free tier is recorded.
- **Release / knowledge:** release date not restated; Solar Open 2 is Upstage's 2026 open line, positioned above Solar Pro 3 (31.08) and Solar Pro 2 (30.32) in the repo queue. **Knowledge cutoff not disclosed.**
- **IDs:** `upstage/Solar-Open2-250B` (Hugging Face); `solar-open-2` (BenchLM canonical, repo).
- **Context window:** **1M tokens** (BenchLM) — a full frontier window, and one of only two verified properties for this model.
- **Modalities:** **text in; text out** — no visual or multimodal benchmark exists in the 15-row catalog.
- **Pricing (as of 2026-11-06):** **not published in any source checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open weight**; parameter count undisclosed in the sources checked, though the model name carries "250B".

### Raw benchmarks found

**A provenance note is recorded prominently: every one of this model's 15 rows is attributed to Upstage's own Solar Open 2 model card** — a same-model, first-party source, which is *better* provenance than the cross-citation-from-competitor-documents pattern recorded across fourteen models in this series. But it also means **there is no independent measurement of any kind**, and the figures are vendor-run by construction. 15 benchmarks total.

Agentic / tool use — **weak**:

- **MCP Atlas: 58.2%** (vendor); **APEX-Agents: 16.6%** (vendor) — near-floor; **terminalBenchHard: 28.3%** (vendor)
- **Terminal-Bench (all harnesses), τ²-bench, τ³-bench, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **genuinely strong, and the best-sourced cluster here**:

- **MMLU-Pro: 86.2%** (vendor); **GPQA-D: 86.3%** (vendor) — fails the 90%+ reference by 3.7 points
- **HLE w/o tools: 28.8%** (vendor) — fails the 40%+ reference by 11.2 points
- **AA-LCR: 62.3%** (vendor) — the weakest long-context figure in this batch; **IFBench: 80%** (vendor) — strong instruction following
- **KMMLU-Pro: 78.4%; CLIcK: 90.7%; HRM8K: 92.2%** (vendor) — **a full Korean benchmark cluster, the model's defining differentiator and one of only two in this research series**
- **CritPt, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR: no verified public score found** — so **composite depth, reliability and two of five reasoning references are entirely unmeasured**

Coding — **strong, and the best-evidenced dimension here**:

- **LiveCodeBench v6: 92.4%** (vendor) — **the strongest single figure in this report**, and among the best competitive-programming results in this research series
- **SWE-bench Verified: 70.4%** (vendor) — 14.6 points under the 85%+ terminal reference
- **SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found** — so the 74%, 70% and 55% references are all unmeasured

Mathematics — **strong**:

- **AIME26: 95.7%** (vendor); **HMMT Feb 2026: 93.9%** (vendor) — both excellent competition-maths figures
- **MATH, FrontierMath: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 45/100.** Below the methodology's mid band, and the weakest dimension. **MCP Atlas 58.2% is mid-tier, APEX-Agents 16.6% is near-floor and terminalBenchHard 28.3% is weak** — and all three are vendor-sourced with no independent corroboration. **Terminal-Bench on every harness, τ²-bench, τ³-bench, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no figure at all**, so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 70/100.** Mid-band, and the best-grounded quality dimension, anchored on three genuinely strong figures: **MMLU-Pro 86.2%, GPQA-D 86.3% (3.7 points under the frontier reference) and IFBench 80%**. The Korean cluster (**CLIcK 90.7%, HRM8K 92.2%, KMMLU-Pro 78.4%**) is a real and rare differentiator — one of only two Korean benchmark suites in this research series — and matters disproportionately for Korean-language deployment. Capped by **HLE w/o tools 28.8% (11.2 under the 40% reference), AA-LCR 62.3% (the weakest in this batch), and the total absence of CritPt, the AA Intelligence Index, AA-Omniscience, ARC-AGI and MRCR** — so composite depth, reliability and two of five reasoning references are unknown.
- **Context window: 92/100.** **1M tokens** places it in the methodology's ≥1M tier — a full frontier window, and one of only two verified properties for this model. Scored at 92 at the tier's lower bound. Held at 92 rather than 95+ because **AA-LCR is 62.3%, the weakest long-context figure measured in this batch**, so the window is demonstrably among the least usable at depth of any 1M model here, no MRCR or GraphWalks figure exists, and no max-output limit is published.
- **Multimodal: 50/100.** **Scored at the methodology's neutral floor: the model is text in / text out.** There is no image, audio or video input, so the dimension does not exist. Scored at 50 rather than lower because the absence is a verified design choice and text-out is a real capability.
- **Coding: 76/100.** Above the methodology's mid band, and a genuinely strong dimension, anchored on two real figures: **LiveCodeBench v6 92.4%** (the strongest single figure in this report, and among the best competitive-programming results in this research series) and **SWE-bench Verified 70.4%** (solid mid-frontier repair). Capped by SWE-bench sitting 14.6 points under the frontier reference, and by the **total absence of SWE-bench Pro, DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench and FrontierCode** — so the 74%, 70% and 55% references cannot be checked.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable** — a genuinely permissive proposition, and one of only two verified properties for this model. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 67/100.** (45 + 70 + 92 + 50 + 76 + 88) / 5 = 70.2 → **70**. Recommendation: **an unranked open-weight 1M model with a strong maths/coding profile, a rare Korean suite, and a weak execution layer.** LiveCodeBench v6 92.4%, AIME26 95.7%, HMMT 93.9%, IFBench 80%, GPQA-D 86.3% and **CLIcK 90.7% / HRM8K 92.2% / KMMLU-Pro 78.4%** at **open weights** and a 1M window is a reasonable package — and for Korean-language deployment it is one of only two models in this research series with a measured Korean suite, which is a genuine differentiator. **But note the queue's 69.8 is a roster artefact: BenchLM leaves this model unranked with 15 of 744 benchmarks, and all 15 rows are vendor-sourced from Upstage's own card with no independent corroboration whatsoever.** Two further cautions: **AA-LCR 62.3% is the weakest in this batch**, so the 1M window is nominally large and measurably shallow; and **APEX-Agents 16.6% with no composite agentic index** means it is not an autonomous agent. Benchmark it yourself on your own harness before relying on it.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-status finding: BenchLM carries a page for `solar-open-2` with 15 source-displayable benchmark rows but no overall score** — its own text reads *"has 15 source-displayable benchmark rows but no public overall score. It remains unranked"* and *"Benchmarks covered: 15 of 744"*, with Overall Score "Not computed (unranked)". **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 69.8 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max, Ling 3.0 Flash VL, DeepSeek V4 Flash, Grok Build 0.1, MAI-Code-1.1-Flash, Hy4, GLM-5.2, Nemotron 3 Ultra Free, Nemotron 3 Nano Omni, Hy3, LongCat 2.0 and Qwen 3.7 Flash reports. **A provenance finding is recorded: all 15 rows are attributed to Upstage's own Solar Open 2 model card — a same-model, first-party source, which is *better* provenance than the cross-citation-from-competitor-documents pattern recorded across fourteen models in this series, but which also means there is no independent measurement of any kind and the figures are vendor-run by construction.** The **Korean benchmark cluster (CLIcK 90.7%, HRM8K 92.2%, KMMLU-Pro 78.4%)** is attributed as the model's defining differentiator and one of only two Korean suites in this research series. The **batch-weakest AA-LCR (62.3%)** and the **near-floor APEX-Agents (16.6%)** are attributed rather than presented bare. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (Terminal-Bench on all harnesses, τ²-bench, τ³-bench, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, CritPt, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode, MATH, FrontierMath, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — upstage/Solar-Open2-250B model card (primary and only source for all 15 rows)](https://huggingface.co/upstage/Solar-Open2-250B)
  - [BenchLM — Solar Open 2 (15 benchmark rows, no overall score, unranked)](https://benchlm.ai/models/solar-open-2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/solar-pro-3/`](solar-pro-3.md) (31.08) and [`model/solar-pro-2/`](solar-pro-2.md) (30.32) — the Pro siblings, refreshed in this session; [`model/solar-pro-4/`](solar-pro-4.md) — the Pro 4 sibling with no computed BenchLM score
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
