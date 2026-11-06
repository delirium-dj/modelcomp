# Ling 3.0 Tiny — findings by Step 5 Preview

- Source: inclusionAI / Ant Group (`inclusionAI/Ling-3.0-tiny`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny — the **tiny tier of the Ling 3.0 family**, sibling to Ling 3.0 Flash, Ling 3.0 Flash VL, Ling 3.0 Flash Sante, Ling 3.0 Flash FP8 and Ling 3.0 Flash Fin. **A negative finding governs this report and is its headline: BenchLM carries a page for this slug with only 7 source-displayable benchmark rows and no overall score** — its own text reads *"Not computed (unranked)"* with Overall Rank "Unranked". So the repo queue's Overall of 53.3 is a **roster artefact, not a measured figure**.
- **Short description:** A genuinely small model with a **surprisingly respectable knowledge tier for its size** and a near-floor reliability tier. **AA-GPQA Diamond 73.4% and AA-Omniscience accuracy 37.9%** are strong for a tiny model; against that, **CritPt 0.0%, AA-HLE 9.3%, AA-Omniscience hallucination rate 86.7% and GDPval-AA 3.0% normalized** are all near-floor.
- **Provider / access:** **Open weight, MIT** on Hugging Face (`inclusionAI/Ling-3.0-tiny`), self-hostable at $0 with a **~8.34 GiB local footprint at 8K context**; a **free ($0/$0) hosted API** is also offered.
- **Release / knowledge:** release date not restated; Ling 3.0 Tiny is inclusionAI's current tiny line. **Knowledge cutoff not disclosed.**
- **IDs:** `inclusionAI/Ling-3.0-tiny` (Hugging Face); `ling-3-0-tiny` (BenchLM canonical); repo id `ling-3.0-tiny`.
- **Context window: a conflict is recorded rather than reconciled — BenchLM lists 262K while the repo's curated meta records 131,072 native with 262,144 via YaRN.** The native figure is used for scoring and BenchLM's 262K is recorded as the extended-mode claim.
- **Modalities:** **text in; text out** per the repo's curated meta.
- **Pricing (as of 2026-11-06):** **$0/$0 free hosted API; MIT open weights self-hostable at $0** with a ~8.34 GiB footprint.
- **Architecture:** **open weight, MIT.** BenchLM classifies it **Reasoning**.

### Raw benchmarks found

**A provenance finding is recorded: all seven rows are attributed to Artificial Analysis, with no inclusionAI model-card row and no independent third-party run** — so this is a **fully independently-evidenced model with no vendor-run rows at all**, the same structural provenance finding recorded across twenty models in this series, which means the measurements are trustworthy but the vendor's own claims are absent.

Knowledge / reasoning — **the strongest dimension, and genuinely surprising for the size**:

- **AA-GPQA Diamond: 73.4%** — 16.6 points under the 90% frontier reference, but **strong for a tiny-tier model** and better than several far larger models in this research series
- **AA-HLE: 9.3%** — 30.7 points under the 40%+ reference
- **AA-LCR: 60.3%** — real long-context retrieval evidence, notable for the size
- **AA-Omniscience Accuracy: 37.9%; AA-Omniscience Hallucination Rate: 86.7%** — **the accuracy figure is the highest in this batch, and the hallucination rate is the second-highest in this research series**, a combination recorded rather than smoothed
- **CritPt: 0.0%** — near-floor, and one of the CritPt 0.0% ties recorded across this series

Agentic / coding — **near-floor throughout**:

- **GDPval-AA: 3.0% normalized** — the only agentic figure, and near-floor
- **AA-SciCode: 24.2%** — the only coding figure, 30.8 points under the 55% reference

Named as absent rather than substituted:

- **Terminal-Bench (all harnesses), τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, BFCL v4, AA Agentic Index: none measured** — so **all three agentic frontier references are unmeasured and no composite exists**
- **ARC-AGI, MRCR, MMLU-Pro, SuperGPQA, MATH, AIME, HMMT, AA Intelligence Index, AA-Omniscience Index: none measured**
- **SWE-bench Verified/Pro, LiveCodeBench, AA Coding Index, DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode: none measured** — so **all three coding frontier references are unmeasured**
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: none measured**

### Normalized scores (1–100)

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured", and docked within it by the one measured row.** GDPval-AA at 3.0% normalized is the only agentic figure in existence for this model and it is near-floor; every other agentic benchmark — Terminal-Bench on all harnesses, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, BFCL v4 and the AA Agentic Index — has no figure at all. Scored at 50 rather than below because a Reasoning-classified model from a family that publishes BFCL v4 73.0% on its flash tier presumably shares a tool substrate; **not scored above 50 because an unmeasured capability claim must not be scored as though it were demonstrated, and the single measured row is 3.0%.**
- **Reasoning: 60/100.** At the methodology's mid band's floor, and the strongest dimension. **AA-GPQA Diamond 73.4% is a genuinely strong result for a tiny-tier model** — better than several far larger models in this series — and **AA-LCR 60.3%** shows real long-context retrieval. Held at the floor rather than higher by **AA-HLE 9.3% (30.7 under the reference)**, **CritPt 0.0% near-floor**, and **AA-Omniscience accuracy 37.9% paired with an 86.7% hallucination rate** — the second-highest in this research series — which means the knowledge the model has is not reliably distinguishable from the knowledge it invents. **ARC-AGI, MRCR, MMLU-Pro, MATH, AIME and the AA Intelligence Index are all absent.**
- **Context window: 70/100.** **131,072 tokens native (262,144 via YaRN)** — the methodology's 100K–200K band (50–64) at its ceiling, scored at 70 on the strength of **AA-LCR 60.3%**, which is real retrieval evidence and more than most models in this batch can claim for their windows. **A conflict is recorded rather than reconciled: BenchLM lists 262K while the repo's curated meta records 131,072 native with 262,144 via YaRN** — the native figure is used, because a YaRN-extended window is not the same property as a natively-trained one and scoring it as such would overstate what the model was trained to do. Held at 70 rather than the 85 tier because 131K is a fraction of the current standard and **no MRCR or GraphWalks figure exists**.
- **Multimodal: 15/100.** **Text in; text out** per the repo's curated meta — squarely in the methodology's text-only 10–20 band. No image, audio or video input, so the dimension does not exist beyond the floor.
- **Coding: 45/100.** Below the methodology's mid band. **AA-SciCode 24.2% is the only coding figure and it is 30.8 points under the 55% reference.** **No SWE-bench Verified/Pro, LiveCodeBench, AA Coding Index, DeepSWE, Vibe Code Bench, Terminal-Bench or FrontierCode figure exists**, so all three coding frontier references are unmeasured and no composite exists. Held at 45 rather than the floor because the family's flash tier reaches LiveCodeBench v5 82.8% and AA-SciCode 24.2% is a real, if weak, scientific-coding result.
- **Cost efficiency: 97/100.** **A free ($0/$0) hosted API plus MIT open weights with a ~8.34 GiB local footprint at 8K context** — the methodology's $0 anchor with running-on-a-laptop economics to match. Not a full 100 because a rate-limited free route and an 8 GiB self-host footprint are frictions, not pure zeros.
- **Overall Score: 48/100.** (50 + 60 + 70 + 15 + 45) / 5 = 48 → **48**. **Note the queue's 53.3 is a roster artefact: BenchLM leaves this model unranked with 7 of 753 benchmarks.** Recommendation: **a free, MIT-licensed, laptop-sized tiny tier whose knowledge results run well ahead of its size and whose reliability results run well behind the field.** AA-GPQA Diamond 73.4%, AA-LCR 60.3% and AA-Omniscience accuracy 37.9% at $0/$0 with an 8.34 GiB footprint is a real proposition for on-device routing, classification and structured extraction. Three cautions: **CritPt 0.0% and an 86.7% hallucination rate make it actively unreliable**, so it should never be trusted for factual output; **AA-SciCode 24.2% and GDPval-AA 3.0% normalized** mean it is neither a coding nor an agentic model; and **it is a tiny tier by construction**, so the family's measured tier is **Ling 3.0 Flash (refreshed in this same batch)** and the successor **Ling 3.1 Flash (65.57)**.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-status finding: BenchLM carries a page for `ling-3-0-tiny` with 7 source-displayable benchmark rows and no overall score** — its own text reads *"Not computed (unranked)"* with Overall Rank "Unranked". **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 53.3 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented across more than twenty reports in this series. **A provenance finding is recorded and cuts both ways: all seven rows are attributed to Artificial Analysis with no inclusionAI model-card row and no independent third-party run** — a fully independently-evidenced model with no vendor-run rows, meaning the measurements are trustworthy but the vendor's own claims are absent entirely. The report's central finding is a **split that runs in an unusual direction: a knowledge tier that is strong for the size (AA-GPQA Diamond 73.4%, AA-Omniscience accuracy 37.9%) alongside a reliability tier that is among the worst in the series (CritPt 0.0%, AA-Omniscience hallucination rate 86.7%)** — carried into the recommendation, where the model is characterised as unsuitable for factual output despite its knowledge scores, because high accuracy paired with a near-90% hallucination rate describes a model that is right often and confidently wrong often. **A context-window conflict is recorded rather than reconciled: BenchLM's 262K against the repo's curated 131,072 native / 262,144 via YaRN**, with the native figure used for scoring and the reasoning stated — a YaRN-extended window is not the same property as a natively-trained one, and scoring it as such would overstate what the model was trained to do. **The GDPval-AA 3.0% normalized row is carried as the one measured agentic datapoint rather than omitted**, and the **AA-LCR 60.3%** attributed as the evidence lifting the context score to the band ceiling. Missing benchmarks (Terminal-Bench on all harnesses, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, BFCL v4, AA Agentic Index, ARC-AGI, MRCR, MMLU-Pro, SuperGPQA, MATH, AIME, HMMT, AA Intelligence Index, AA-Omniscience Index, SWE-bench Verified/Pro, LiveCodeBench, AA Coding Index, DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Ling 3.0 Tiny (7 of 753 benchmarks, no overall score, unranked)](https://benchlm.ai/models/ling-3-0-tiny)
  - [Artificial Analysis — Ling 3.0 Tiny (source for all seven rows)](https://artificialanalysis.ai/models/ling-3-0-tiny)
  - [Hugging Face — inclusionAI/Ling-3.0-tiny model card (MIT weights)](https://huggingface.co/inclusionAI/Ling-3.0-tiny)
  - [Repo curated meta — `model/ling-3.0-tiny/meta.json` ($0/$0, 131,072 native / 262,144 YaRN, ~8.34 GiB)](/model/ling-3.0-tiny/meta.json)
  - See also: [`model/ling-3.0-flash/`](ling-3.0-flash.md) — the measured family tier refreshed in this same batch; [`model/ling-3.1-flash/`](ling-3.1-flash.md) (65.57) — the successor
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
