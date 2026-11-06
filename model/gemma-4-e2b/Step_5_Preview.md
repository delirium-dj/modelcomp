# Gemma 4 E2B — findings by Step 5 Preview

- Source: Google DeepMind (`google/gemma-4-E2B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B — the **smallest member of the Gemma 4 family**, sibling to E4B, 12B Unified and 26B A4B. **A negative finding governs this report and is its headline: BenchLM carries a page for this slug with 14 source-displayable benchmark rows and no overall score** — its own text reads *"Not computed (unranked)"* with Overall Rank "Unranked". So the repo queue's Overall of 54.4 is a **roster artefact, not a measured figure**.
- **Short description:** An **extremely small multimodal edge model with broad input and weak everything else**: **text, image and audio in, video as frames, text out** at a **~3.3 GB Q4_0 GGUF footprint**, against **GPQA 43.3–43.4%, MMLU-Pro 60%, AA-HLE 4.8%, AA-LCR 16.3%, CritPt 0.0%, AA Coding Index 7.2%, τ²-bench 20.8% and GDPval-AA 0.0% normalized.**
- **Provider / access:** **Open weight, Apache-2.0** on Hugging Face (`google/gemma-4-E2B`), self-hostable with a **~3.3 GB Q4_0 GGUF**; Google AI Edge Gallery; one hosted provider at **~$0.04/$0.08 per 1M**.
- **Release / knowledge:** release date not restated; Gemma 4 E2B is part of the 2026-04-02 family launch. **Knowledge cutoff not disclosed.**
- **IDs:** `google/gemma-4-E2B` (Hugging Face); repo id `gemma-4-e2b`.
- **Context window:** **128,000 tokens** — the 100K–200K band.
- **Modalities:** **text, image and audio in; video as frames; text out** — the same any-to-any input breadth as the larger Gemma 4 sizes, at the edge footprint.
- **Pricing (as of 2026-11-06):** **Apache-2.0 open weights** with a **~3.3 GB Q4_0 GGUF**; one hosted route at **~$0.04/$0.08 per 1M**.
- **Architecture:** **open weight, Apache-2.0.** BenchLM classifies it **Reasoning**. Effective-2B dense edge transformer, the smallest tier of the Per-Layer Embedding Gemma 4 design.

### Raw benchmarks found

**A provenance finding is recorded: all fourteen rows are attributed to Artificial Analysis and standard leaderboards, with no Google model-card row and no cross-citation from competitor documents** — a fully independently-evidenced model with no vendor-run rows, the same structural provenance finding recorded across twenty-one models in this series.

Knowledge / reasoning — **small-model tier throughout, with the family's reliability gap**:

- **AA-GPQA Diamond: 43.3%** / **GPQA: 43.4%** — two runs agreeing within 0.1 points, and 46.6–46.7 points under the 90% frontier reference
- **MMLU-Pro: 60%** — the model's best figure
- **AA-HLE: 4.8%** — 35.2 points under the 40%+ reference, and among the lowest HLE figures in this research series
- **AA-LCR: 16.3%**; **MRCR v2: 19.1%** — weak long-context retrieval
- **CritPt: 0.0%** — near-floor, and one of the CritPt 0.0% ties recorded across this series
- **AA-Omniscience, ARC-AGI, SuperGPQA, MATH, AIME, HMMT, AA Intelligence Index: no verified public score found** — so **composite depth is entirely unmeasured**

Agentic / tool use — **near-floor**:

- **τ²-bench: 20.8%** — 29.2 points under the reference
- **GDPval-AA: 36 Elo / 0.0% normalized** — effectively zero on agentic knowledge work
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, BFCL v4, AA Agentic Index: no verified public score found** — so **all three agentic frontier references are unmeasured and no composite exists**

Coding — **near-floor**:

- **LiveCodeBench v6: 44.0%** — 30 points under the 74%+ reference
- **AA Coding Index: 7.2%** — 62.8 points under the 70% reference, and among the lowest coding index figures in this research series
- **SWE-bench Verified/Pro, AA-SciCode, SciCode, DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found** — so **all three coding frontier references are unmeasured**

Multimodal — **the model's genuine and distinctive strength**:

- **MMMU-Pro: 44.2%** / **AA-MMMU-Pro: 44.6%** — two runs agreeing within 0.4 points; weak in absolute terms but real for a 2B model
- **ExtractBench (LlamaIndex): 51.85%** — a genuine document-extraction result, and the strongest multimodal row
- **CharXiv, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured", and docked within it by both measured rows.** τ²-bench 20.8% and GDPval-AA 0.0% normalized are the only agentic figures in existence and both are near-floor. **No Terminal-Bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, BFCL v4 or AA Agentic Index figure exists**, so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 48/100.** Below the mid band. **MMLU-Pro 60% and GPQA 43.3–43.4%** (two runs agreeing within 0.1 points) are small-model-tier figures; **AA-HLE 4.8% is among the lowest in this research series**, **AA-LCR 16.3%** is weak, and **CritPt 0.0%** is near-floor. **AA-Omniscience, ARC-AGI, SuperGPQA, MATH, AIME, HMMT and the AA Intelligence Index are all absent**, so composite depth is entirely unmeasured. Held at 48 rather than lower because 60% MMLU-Pro and ~43% GPQA are real results for an effective-2B model.
- **Context window: 58/100.** **128,000 tokens** is the methodology's 100K–200K band (50–64), scored at 58 — above the band's midpoint but well below its ceiling because **both long-context measurements are weak: MRCR v2 19.1% and AA-LCR 16.3%**. This is the clearest case in the batch of a window that is large on paper and weak in retrieval, and the score reflects the measurement rather than the spec.
- **Multimodal: 72/100.** **Text, image and audio in; video as frames; text out** — the methodology's upper multimodal band on input breadth, scored at 72 rather than the top because the measured quality is small-model-tier (**MMMU-Pro 44.2/44.6%, ExtractBench 51.85%**) and there is no non-text output. **The input breadth is the model's genuine and distinctive property**: it matches the any-to-any modality coverage of the 12B and 26B sizes at a ~3.3 GB footprint, which is what the E4B sibling also does — and the ExtractBench 51.85% row is real document-extraction evidence, not a spec claim.
- **Coding: 40/100.** Below the methodology's mid band. **LiveCodeBench v6 44.0% (30 under the 74%+ reference) and AA Coding Index 7.2% (62.8 under the 70% reference)** — the latter among the lowest coding index figures in this research series. **No SWE-bench Verified/Pro, AA-SciCode, SciCode, DeepSWE, Vibe Code Bench, Terminal-Bench or FrontierCode figure exists**, so all three coding frontier references are unmeasured.
- **Cost efficiency: 97/100.** **Apache-2.0 open weights with a ~3.3 GB Q4_0 GGUF footprint and a hosted route at ~$0.04/$0.08 per 1M** — the methodology's $0 anchor with genuinely deployable edge economics. Not a full 100 because a rate-limited hosted route is a friction rather than a pure zero.
- **Overall Score: 54/100.** (50 + 48 + 58 + 72 + 40) / 5 = 53.6 → **54** → **54**. **A near-agreement is recorded: this report's 54 is within 0.4 points of the repo queue's 54.4**, the closest agreement between the two instruments in this batch, and both are consistent with BenchLM's decision to leave the model unranked. Recommendation: **a ~3.3 GB multimodal edge model with the same input breadth as its far larger siblings.** Text, image and audio in at a 3.3 GB footprint, Apache-2.0, with MMMU-Pro 44.6% and ExtractBench 51.85% as real (if small-model-tier) visual evidence, is a genuine proposition for on-device document and image understanding. Three cautions: **AA-HLE 4.8%, CritPt 0.0%, AA-LCR 16.3% and MRCR v2 19.1%** mean it is neither a reasoner nor a reliable long-context model; **AA Coding Index 7.2% and τ²-bench 20.8%** mean it is neither a coder nor an agent; and **note the queue's 54.4 is a roster artefact — BenchLM leaves this model unranked with 14 of 753 benchmarks.** Prefer the **E4B sibling** for a modest capability gain or the **12B Unified** for measured quality, both refreshed in this session.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-status finding: BenchLM carries a page for `gemma-4-e2b` with 14 source-displayable benchmark rows and no overall score** — its own text reads *"Not computed (unranked)"* with Overall Rank "Unranked". **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 54.4 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented across more than twenty reports in this series. **A provenance finding is recorded and cuts both ways: all fourteen rows are attributed to Artificial Analysis and standard leaderboards with no Google model-card row and no cross-citation from competitor documents** — a fully independently-evidenced model with no vendor-run rows, meaning the measurements are trustworthy but the vendor's own claims are absent. The report's central finding is a **breadth-versus-depth split that is the model's whole identity: any-to-any input matching its 12B and 26B siblings at a ~3.3 GB footprint, against near-floor quality everywhere else (AA-HLE 4.8%, CritPt 0.0%, AA-LCR 16.3%, MRCR v2 19.1%, AA Coding Index 7.2%, τ²-bench 20.8%, GDPval-AA 0.0% normalized)** — carried into the recommendation, where the model is positioned as an on-device document-and-image understanding model and explicitly not as a reasoner, coder or agent. **Two cross-harness agreements are recorded as corroboration rather than averaged away**: GPQA at 43.3/43.4% (two runs within 0.1 points) and MMMU-Pro at 44.2/44.6% (two runs within 0.4 points). **The ExtractBench (LlamaIndex) 51.85% row is attributed as the strongest multimodal datapoint and as real document-extraction evidence rather than a spec claim**, which is what lifts the multimodal score to 72 against the upper breadth band. **The context score is recorded as a measurement-versus-spec case: 128,000 tokens is a real window, but MRCR v2 19.1% and AA-LCR 16.3% show weak retrieval at that depth**, so the score reflects the measurement rather than the spec. **A near-agreement between two independent instruments is recorded: this report's 54 and the repo queue's 54.4 differ by 0.4 points**, the closest agreement in this batch. Missing benchmarks (AA-Omniscience, ARC-AGI, SuperGPQA, MATH, AIME, HMMT, AA Intelligence Index, Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, BFCL v4, AA Agentic Index, SWE-bench Verified/Pro, AA-SciCode, SciCode, DeepSWE, Vibe Code Bench, FrontierCode, CharXiv, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Gemma 4 E2B (14 of 753 benchmarks, no overall score, unranked)](https://benchlm.ai/models/gemma-4-e2b)
  - [Artificial Analysis — Gemma 4 E2B (source for all fourteen rows)](https://artificialanalysis.ai/models/gemma-4-e2b)
  - [Hugging Face — google/gemma-4-E2B model card (Apache-2.0 weights, any-to-any input)](https://huggingface.co/google/gemma-4-E2B)
  - [Repo curated meta — `model/gemma-4-e2b/meta.json` (128K, text/image/audio in, ~3.3 GB Q4_0, ~$0.04/$0.08)](/model/gemma-4-e2b/meta.json)
  - See also: [`model/gemma-4-e4b/`](gemma-4-e4b.md) — the larger edge sibling refreshed in this same batch; [`model/gemma-4-12b-unified/`](gemma-4-12b-unified.md) and [`model/gemma-4-26b-a4b/`](gemma-4-26b-a4b.md) — the larger siblings
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
