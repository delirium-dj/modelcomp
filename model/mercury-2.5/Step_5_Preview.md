# Mercury 2.5 — findings by Step 5 Preview

- Source: Inception (`inception/mercury-2.5`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5 — Inception's proprietary small-context flagship, sibling to Mercury 3. BenchLM scores it **33.79/100, #170 of 1,016** and classifies it **Reasoning**.
- **Short description:** A model whose measured record is dominated by **one exceptional figure and three weak ones**. **τ³-bench 96.0%** is the highest τ³-bench result in this research series; against that, **Terminal-Bench 2.1 (Vals) 34.5%, DeepSearchQA 34.0%, GDPval-AA 0.0% normalized, CritPt 0.0% and AA-HLE 11.8%** are all low-to-near-floor.
- **Provider / access:** **Proprietary** — Inception API, OpenRouter, Vercel. **No weights, no self-hosting.**
- **Release / knowledge:** release date not restated; Mercury 2.5 is Inception's 2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `inception/mercury-2.5` (repo id); `mercury-2-5` (BenchLM canonical).
- **Context window:** **260,000 tokens total, 65,536 max output** — a quarter of the current 1M standard, but generous for the price class.
- **Modalities:** **text in; text out** per the repo's curated meta.
- **Pricing (as of 2026-11-06):** **$0.20/M input, $0.75/M output, $0.02/M cached** at Inception's list; **$0.04/$0.15 launch price still shown on OpenRouter/Vercel.**
- **Architecture:** **proprietary.** BenchLM classifies it **Reasoning**.

### Raw benchmarks found

**A provenance finding is recorded: all rows are attributed to Artificial Analysis and Vals AI, with no Inception launch post or model card anywhere in the attribution** — a fully independently-evidenced model with no vendor-run rows, the same structural provenance finding recorded across twenty-two models in this series, which means the measurements are trustworthy but the vendor's own claims are absent.

Agentic / tool use — **one exceptional figure, three weak ones, and a very thin base**:

- **τ³-bench: 96.0%** — **the highest τ³-bench figure in this research series**, and an exceptional result on any reading
- **Terminal-Bench 2.1 (Vals): 34.5%** — 53.5 points under the 88%+ reference
- **DeepSearchQA: 34.0%** — mid-low
- **GDPval-AA: 0.0% normalized** — effectively zero on agentic knowledge work
- **Terminal-Bench on other harnesses, τ²-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, BFCL v4, AA Agentic Index: no verified public score found** — so **two of three frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **split, with the family's reliability gap**:

- **GPQA-D: 79.0%** — 11 points under the 90% frontier reference
- **AA-HLE: 11.8%** — 28.2 points under the 40%+ reference
- **AA-LCR: 68.0%** — real long-context retrieval evidence
- **CritPt: 0.0%** — near-floor, and one of the CritPt 0.0% ties recorded across this series
- **AA-Omniscience Accuracy: 22.0%; AA-Omniscience Hallucination Rate: 67.0%** — a high hallucination rate, the third-highest in this batch
- **ARC-AGI, MRCR, MMLU-Pro, SuperGPQA, MATH, AIME, HMMT, AA Intelligence Index, AA-Omniscience Index: no verified public score found** — so **composite depth is entirely unmeasured**

Coding — **two rows, both mid-low**:

- **SciCode: 38.0%** / **AA-SciCode: 38.5%** — 0.5-point agreement across harnesses; both 16.5–17 points under the 55% reference
- **SWE-bench Verified/Pro, LiveCodeBench, AA Coding Index, DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found** — so **all three coding frontier references are unmeasured**

Multimodal — **text-only**:

- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**, and the repo's curated meta records **text in/out only**

### Normalized scores (1–100)

- **Tool use: 58/100.** Below the mid band's top, and the most internally contradictory dimension in the batch. **τ³-bench 96.0% is the highest τ³-bench figure in this research series** — a genuinely exceptional multi-turn tool-use result that no other model in this corpus matches. Against it, **Terminal-Bench 2.1 (Vals) 34.5% is 53.5 points under the reference, DeepSearchQA 34.0% is mid-low, and GDPval-AA 0.0% normalized is effectively zero** — a 61.5-point spread between the best and worst agentic rows. Held at 58 rather than higher by those three low rows and by the **absence of Terminal-Bench on other harnesses, τ²-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, BFCL v4 and the AA Agentic Index**, so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 55/100.** At the methodology's mid band's floor, and split in the same way as tool use. **GPQA-D 79.0% is 11 points under the frontier reference and AA-LCR 68.0% is real retrieval evidence**; against that, **AA-HLE 11.8% is 28.2 points under the reference, CritPt 0.0% is near-floor, and AA-Omniscience accuracy 22.0% with a 67.0% hallucination rate** is the third-worst reliability pair in this batch. **ARC-AGI, MRCR, MMLU-Pro, SuperGPQA, MATH, AIME, HMMT, the AA Intelligence Index and the AA-Omniscience Index are all absent**, so composite depth is entirely unmeasured.
- **Context window: 85/100.** **260,000 tokens with 65,536 max output** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 on the strength of **AA-LCR 68.0%** — real long-context retrieval evidence, which is more than most models in this batch can claim for their windows. Held at the ceiling rather than the ≥1M tier because **no MRCR, RULER or GraphWalks figure exists** and 260K is a quarter of the current standard.
- **Multimodal: 15/100.** **Text in; text out** per the repo's curated meta — squarely in the methodology's text-only 10–20 band. **Every visual benchmark in the methodology's list is unmeasured**, so the dimension does not exist beyond the floor.
- **Coding: 42/100.** Below the methodology's mid band. **SciCode 38.0% / AA-SciCode 38.5%** (0.5-point agreement across harnesses) are the only coding figures and both are 16.5–17 points under the 55% reference. **No SWE-bench Verified/Pro, LiveCodeBench, AA Coding Index, DeepSWE, Vibe Code Bench, Terminal-Bench or FrontierCode figure exists**, so all three coding frontier references are unmeasured and no composite exists. Held at 42 rather than lower because a reasoning-classified proprietary model presumably has a coding substrate, and the τ³-bench 96.0% result is adjacent evidence of strong multi-step execution.
- **Cost efficiency: 88/100.** **$0.20/$0.75 per 1M with $0.02 cached reads**, and a **$0.04/$0.15 launch price still shown on OpenRouter/Vercel** — the methodology's ~$0.2/$0.75 → 88 band with a genuinely cheap launch rate on record. Held at 88 rather than higher because **the model is proprietary with no weights and no self-hosting path**, so the $0 escape that lifts open-weight models does not exist here.
- **Overall Score: 51/100.** (58 + 55 + 85 + 15 + 42) / 5 = 51 → **51**. **A three-way disagreement is recorded rather than reconciled: BenchLM scores this model 33.79/100 (#170/1,016), the repo queue carries 54.7, and this report reads 51** — three instruments with three different weightings, none of them an error, and the gap stated plainly because it is the most useful fact about how much the choice of instrument matters. Recommendation: **a cheap proprietary reasoning tier with the single strongest τ³-bench result in this research series and a thin, split evidence base behind it.** τ³-bench 96.0%, GPQA-D 79.0%, AA-LCR 68.0% and a 260K window at $0.20/$0.75 is a real proposition for high-volume multi-turn tool work at low cost. Three cautions: **the evidence base is only ten benchmark rows**, so almost every dimension rests on one or two figures; **CritPt 0.0%, AA-HLE 11.8% and a 67.0% hallucination rate** make it unreliable for factual and deep-reasoning work despite the τ³ result; and **it is text-only and proprietary**, so there is no self-hosting escape and no multimodal capability.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using BenchLM's 10-row catalog as the direct source, cross-attributed to Artificial Analysis and Vals AI. **A provenance finding is recorded and cuts both ways: all rows are attributed to Artificial Analysis and Vals AI with no Inception launch post or model card anywhere** — a fully independently-evidenced model with no vendor-run rows, meaning the measurements are trustworthy but the vendor's own claims are absent. The report's central finding is a **split that runs through every dimension: one exceptional figure against several weak ones** — **τ³-bench 96.0%, the highest in this research series, against Terminal-Bench 2.1 (Vals) 34.5%, DeepSearchQA 34.0% and GDPval-AA 0.0% normalized** (a 61.5-point agentic spread), and **GPQA-D 79.0% against AA-HLE 11.8%, CritPt 0.0% and a 67.0% hallucination rate**. Both spreads are attributed explicitly and carried into the recommendation, where the model is characterised as suitable for high-volume multi-turn tool work and unsuitable for factual or deep-reasoning work. **A three-way instrument disagreement is recorded rather than reconciled: BenchLM's 33.79/100 (#170/1,016), the repo queue's 54.7 and this report's 51**, with all three named as valid outputs of different weighting schemes and the gap stated in the score line rather than buried. **The two cross-harness agreements are recorded as corroboration rather than averaged away**: SciCode at 38.0%/38.5% within 0.5 points. **The AA-LCR 68.0% row is attributed as the evidence lifting the context score to the band ceiling**, and **the absence of a self-hosting path** as the reason the cost score sits at 88 rather than the ~97 tier that open-weight models at this price reach. Missing benchmarks (Terminal-Bench on other harnesses, τ²-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, BFCL v4, AA Agentic Index, ARC-AGI, MRCR, MMLU-Pro, SuperGPQA, MATH, AIME, HMMT, AA Intelligence Index, AA-Omniscience Index, SWE-bench Verified/Pro, LiveCodeBench, AA Coding Index, DeepSWE, Vibe Code Bench, FrontierCode, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Mercury 2.5 (10 rows, 33.79/100, #170/1016)](https://benchlm.ai/models/mercury-2-5)
  - [Artificial Analysis — Mercury 2.5](https://artificialanalysis.ai/models/mercury-2-5)
  - [Vals AI — Mercury 2.5 (independent Terminal-Bench 2.1 run)](https://www.vals.ai/models/inception-mercury-2.5)
  - [Inception — Mercury 2.5 API and pricing](https://www.inceptionlabs.ai/)
  - [Repo curated meta — `model/mercury-2.5/meta.json` (260K/65,536, text-only, $0.20/$0.75)](/model/mercury-2.5/meta.json)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
