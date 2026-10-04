# Qwen 3.8 Flash Next — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen (curated id `opencode/qwen-3.8-flash-next`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next (`Qwen3.8-Flash-Next`, experimental-preview variant)
- **Short description:** Alibaba's August 2026 "Flash-Next" preview: a very sparse 180 B-total / 6 B-active MoE reasoning model that punches far above its active parameter count on agentic/cowork benchmarks while staying cheap to serve. **Variant flag:** distinct weights from `model/qwen-3.8-flash/` (the production 3.8 Flash tier) and from `qwen-3.8-27b` — do not conflate.
- **Provider / access:** open weights on Hugging Face `Qwen/Qwen3.8-Flash-Next` (model card is the primary benchmark source); served via Alibaba ModelScope / Qwen API and third-party open-weight hosts. Chat Completions.
- **Release / knowledge:** released August 2026 (announced 2026-08-25 as a preview); knowledge cutoff not disclosed on the pages I could read.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (HF); curated site id `opencode/qwen-3.8-flash-next`.
- **Context window:** 262,144 tokens (BenchLM card) / "256k" (Artificial Analysis technical specs) — consistent 256 K-class window; max output not separately disclosed.
- **Modalities:** text + image + video input, text output (Artificial Analysis); reasoning model; tool calling measured (Toolathlon / AndroidWorld). No audio input listed.
- **Pricing (as of 2026-10-04):** $0.15 in / $0.47 out per 1M tokens with an 89 % cached-input discount; $0.37 average cost per Intelligence-Index task (Artificial Analysis). Open weights under the Qwen License, so self-hosting is available.
- **Architecture:** 180 B total / 6 B active parameters, sparse MoE, open weights, Qwen License 1.0. **Spec conflict:** the launch press coverage described a 125 B-parameter model with 6 B active — Artificial Analysis lists 180 B/6 B against the same HF artifact, so the total-parameter figure is unresolved; the 6 B-active number is agreed.
- **Serving note:** 55.2 output tokens/s (Artificial Analysis, #47/118) and notably verbose — 240 M output tokens to complete the Intelligence Index vs a 140 M median, which erodes some of the nominal price advantage in long agent loops.

### Raw benchmarks found

BenchLM `qwen3-8-flash-next` (updated 2026-10-02): overall **64.52/100, #39 of 783**, 37 of 645 benchmarks covered; vendor rows from the HF model card, aggregator rows from Artificial Analysis. AA Intelligence Index **40** (#7 of 118 in class).

Agent / tool use:

- GDPval-AA v2: **1648 Elo** (55.6 % normalized) — the standout row, near-frontier real-world cowork
- Toolathlon-Verified: **73.5 %**; AndroidWorld: **84.5 %**
- CoWorkBench: **73.9 %**; JobBench: **55.7 %**; Agents' Last Exam: **51.2 %**
- OSWorld 2.0: **19.4 %**; Terminal-Bench 2.1 / τ² / τ³ / Claw-Eval: **no verified public score found for this ID**

Reasoning / knowledge:

- GPQA Diamond: **91.7 %** (card) / **92.3 %** (AA)
- HLE: **35.9 %** (card, no tools) / **38.0 %** (AA); CritPt: **11.1 %**
- IFBench: **81.3 %**; AA-LCR (long-context reasoning): **79.7 %**
- AA Intelligence Index: **40**; AA-Omniscience accuracy **24.5 %**, hallucination rate **45.3 %**, index −9.7 (knowledge calibration is the clear weak point)

Coding:

- SWE-bench Multilingual: **81 %**; SWE-bench Pro: **62.5 %**; DeepSWE: **58.7 %**
- LiveCodeBench v6: **91.9 %**; AA Coding Index: **73.0 %**; AA-SciCode: **50.6 %**; NL2Repo: **48.1 %**
- SWE-bench Verified: **no verified public score found for this ID** (only the Multilingual split is reported)

Multimodal / long context:

- AA-MMMU-Pro: **79.8 %**; RealWorldQA: **88.5 %**; ERQA: **72.3 %**; Vision2Web: **64.0 %**
- MathVision: **90.6 %** (95.7 % with Python); CharXiv: **90.6 %** (84.6 % without tools)
- Video: LVBench **76.6 %**; no audio rows (audio is not an input modality for this ID)

### Normalized scores (1–100)

- **Tool use: 85/100.** GDPval-AA 1648 plus Toolathlon-Verified 73.5 % and AndroidWorld 84.5 % show genuinely frontier-adjacent cowork and device-control ability for a 6 B-active model; capped below 90 by no Terminal-Bench/SWE-style agentic-coding row and OSWorld 2.0 at 19.4 %.
- **Reasoning: 85/100.** GPQA 91.7–92.3 %, HLE 35.9–38.0 %, CritPt 11.1 % and Index 40 sit in the frontier band; capped by weak knowledge calibration (Omniscience accuracy 24.5 %, hallucination 45.3 %) and heavy verbosity.
- **Context window: 78/100.** A 256/262 K window falls in the methodology's 200–500 K tier (65–84); AA-LCR 79.7 % at that length earns the upper part, and the absence of an MRCR/RULER retrieval figure plus undisclosed max output keeps it from the 85+ band.
- **Multimodal: 82/100.** Image + video input with strong measured results (RealWorldQA 88.5 %, CharXiv 90.6 %, LVBench 76.6 %) maps to the "video/PDF in" band of 75–90; capped by text-only output and no audio input.
- **Coding: 79/100.** SWE-bench Multilingual 81 %, LiveCodeBench v6 91.9 % and AA Coding Index 73.0 % are strong, but DeepSWE 58.7 % and SWE-Pro 62.5 % fall short of the methodology's frontier references (DeepSWE 74 %+), and no SWE-bench Verified row exists for the ID.
- **Cost efficiency: 97/100.** $0.15 in / $0.47 out with an 89 % cache discount and $0.37 per Index task is one of the cheapest near-frontier routes, plus open weights for self-hosting; the 55 tok/s throughput and 1.7× median verbosity are the only deductions.
- **Overall Score: 82/100.** Mean of the five quality dimensions (85 + 85 + 78 + 82 + 79) / 5 = 82.2 → 82; Cost excluded per `RULES.md`. Best fit: high-volume agentic cowork and multimodal document/video reading at a fraction of flagship cost, provided you can verify its factual output.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-04
- Method: fresh public internet research (Qwen HF model card reference via BenchLM/Artificial Analysis, Artificial Analysis technical specs, launch press coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
