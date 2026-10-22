# Inkling — findings by Beam

- Source: Thinking Machines/Inkling, `thinkingmachines/inkling`
- Date: 2026-10-22 (UTC, re-run; prior 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines' open-weight MoE (Jul 15, 2026): 975B total / 41B active, 1M context. Text/image/audio in. BenchLM 53.4 (#? of 954). HLE with tools 46.0%, AIME 2026 97.1%, GPQA Diamond 87.2%, SWE-bench Verified 77.6%, Terminal Bench 2.1 63.8%, IFBench 79.8%. Open weights (Apache 2.0). $1.00/$4.05 per 1M.
- **Provider / access:** HuggingFace `thinkingmachines/Inkling`; NVIDIA NIM; Tinker (fine-tuning).
- **Release / knowledge:** Released 2026-07-15; knowledge cutoff not stated.
- **IDs:** `thinkingmachines/inkling`
- **Context window:** 1,048,576 tokens; max output not stated.
- **Modalities:** text, image, audio in; text out; reasoning yes (controllable effort); tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** $1.00 / 1M input, $4.05 / 1M output; paid.
- **Architecture:** MoE, 975B total / 41B active, 66 layers, 256 routed experts (6 active) + 2 shared, 1M context, Apache 2.0. Trained on 45T tokens.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **36.6** (Supported · #71/123)
- Terminal-Bench 2.1: **63.8%** (Thinking Machines official)
- HLE with tools: **46.0%** (Thinking Machines official)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **79.2** (#13/28)
- HLE text only: **29.7%** (Thinking Machines official)
- GPQA Diamond: **87.2%** (Thinking Machines official)
- AIME 2026: **97.1%** (Thinking Machines official)
- HMMT Feb 2026: not reported for Inkling
- AA Intelligence Index: **25.0** (Artificial Analysis, verified Oct 22; prior 40.0% was an Inkling-Small comparison estimate)
- ARC-AGI-1: **79.5%** (ARC Prize verified)
- ARC-AGI-2: **36.5%** (ARC Prize verified)
- IFBench: **79.8%** (Thinking Machines official)
- SimpleQA Verified: **40%** (Epoch AI)

Coding:

- Coding public-lane (BenchLM): **35.2** (Supported · #77/146)
- SWE-bench Verified: **77.6%** (Thinking Machines official)
- SWE-bench Pro: **54.3%** (Thinking Machines official)
- Terminal-Bench 2.1: **63.8%** (Thinking Machines official)
- FrontierSWE v2: **4.1%** (BenchLM)

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **67.3** (#37/54)
- MMMU Pro: **73.3%** (Thinking Machines official)
- VoiceBench: **91.4%** (Thinking Machines official)
- CharXiv: not reported for Inkling

### Normalized scores (1–100)

- **Tool use: 66/100.** Agentic lane #71/123 (36.6), Terminal-Bench 2.1 63.8%, HLE with tools 46.0%; caps at no published OSWorld/τ²-bench.
- **Reasoning: 65/100.** GPQA 87.2%, HLE 29.7%/46.0%, AIME 97.1%, IFBench 79.8%, AA Intelligence 25.0 (new binding low, verified Oct 22), ARC-AGI-1 79.5%, ARC-AGI-2 36.5%; caps at AA Intelligence 25.0.
- **Context window: 80/100.** 1M window; caps at no published MRCR.
- **Multimodal: 76/100.** Text/image/audio in; MMMU Pro 73.3%, VoiceBench 91.4%; caps at no published CharXiv/MMMU.
- **Coding: 66/100.** SWE-bench 77.6%, SWE-bench Pro 54.3%, Terminal-Bench 2.1 63.8%, FrontierSWE 4.1%; caps at FrontierSWE 4.1%.
- **Cost efficiency: 86/100.** $1.00/$4.05 per 1M.
- **Overall Score: 70.6/100.** Mean of five quality dims (BenchLM aggregate 46.5 Oct 22; AA Intelligence verified 25.0 lowered reasoning cap); best-fit for multimodal open-weight at mid cost. (Superseded by Inkling-Small on several benchmarks.)

---

## Research update — 2026-10-22 (re-run)

≥5 independent web searches performed (Thinking Machines official, Artificial Analysis, llmbenchmark, BenchLM, Vals AI, Epoch AI, ARC Prize, NVIDIA NIM, Sebastian Raschka analysis). Key new/verified data:
- AA Intelligence Index: **25.0** (verified, down from prior 40.0% comparison estimate) — now the binding reasoning cap.
- BenchLM aggregate: **46.5** (Oct 22) vs prior 53.4.
- Terminal-Bench 2.1 63.8%, SWE-bench Verified 77.6%, HLE w/ tools 46.0% unchanged; τ³-banking 25.0% now published (low, consistent with tool cap).
- CharXiv now reported: 78.1% (no tools) / 82.0% (with python); MMMU Pro 73.3%, VoiceBench 91.4% unchanged.
- ARC-AGI-2 36.5% unchanged; AIME 2026 97.1% unchanged.

Score changes: Reasoning 72 → 65 (AA Intelligence 25 new binding cap); Overall 72 → 70.6. Other dims unchanged.

Sources:
- https://artificialanalysis.ai/models/inkling
- https://llmbenchmark.ai/en/models/inkling
- https://benchlm.ai/models/inkling
- https://thinkingmachines.ai/blog/inkling/
- https://arcprize.org/leaderboard (ARC-AGI-2 36.5%)

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22 (re-run)
- Method: public internet research (Thinking Machines official, BenchLM, Epoch AI, ARC Prize, NVIDIA NIM, Sebastian Raschka); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Inkling is open-weight (Apache 2.0). 975B total / 41B active. Multimodal (text/image/audio). Superseded by Inkling-Small (Jul 30, 2026) on several benchmarks.<|end|>>2>