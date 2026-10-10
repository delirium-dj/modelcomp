# Qwen 3.8 — findings by Laguna S 2.1

- Source: opencode/qwen-3.8 (Alibaba/Qwen), e.g. Alibaba Cloud, Artificial Analysis, Kingy AI, Hugging Face
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 — mapped here to the base dense open-weights flagship **Qwen3.8 27B (xhigh reasoning variant)** (Alibaba/Qwen). Distinct from the repo's separate `qwen3.8-max` folder (the 2.4T MoE Max variant).
- **Short description:** Alibaba's 27B dense, multimodal, open-weights reasoning model. Leads open-weight models on the AA Intelligence Index in its size class, with strong cost-efficiency; trade-offs are slower (~43 tok/s) and very verbose. Native 260K context, extendable to 1M via YaRN.
- **Provider / access:** Alibaba/Qwen (AliCloud Model Studio + 8 API providers). Open weights on Hugging Face. Apache 2.0 (commercial). Reasoning/thinking (extended/CoT, xhigh), per-message effort, tool calling, structured outputs / JSON mode.
- **Release / knowledge:** Released August 2026 (Alibaba official; AA). Knowledge cutoff: NOT found precisely for the 27B in fetched sources.
- **IDs:** repo id `opencode/qwen-3.8` (Alibaba/Qwen); Hugging Face model `Qwen/Qwen3.8-27B`. Open-weights (weights downloadable; `noFreeId` not applicable — Apache 2.0 self-host/free route available).
- **Context window:** 260,000 tokens native (Artificial Analysis; ≡ kingy's 262,144) / extends to ~1,000,000 via YaRN scaling (full-window accuracy unproven independently).
- **Modalities:** Text + image + video input → text output (multimodal). No audio; PDF not specified.
- **Pricing (as of 2026-10-10):** $0.50 / $3.00 per 1M input/output (Alibaba API); cache 80% off; blended 7:2:1 ≈ $0.47/MTok; cost per AA Intelligence Index task = $1.01. Cheap vs frontier ($5/$30 GPT-5.5, $10/$50 Fable) but "expensive" in open-weight terms (median $0.05/$0.15).
- **Architecture:** 27B dense decoder-only, open-weights (Apache 2.0), reasoning (xhigh) variant; a non-reasoning variant also exists.

### Raw benchmarks found

> Verified public numbers, sourced per metric. Benchmarks not located are NOT fabricated.

- AA Intelligence Index v4.3.2: **34** — #1/142 open-weights (Medium size class; class median 8) (Artificial Analysis model page, September 2026).
- Output speed: **43.3 tok/s** (Alibaba API; below open-weight median 91.1) (AA).
- Cost per Intelligence Index task: **$1.01** (AA).

Agent / tool use:

- Terminal-Bench 2.1: 73.0% (source: Hugging Face model card)
- τ²-bench Telecom: 75.6% (source: Hugging Face model card)
- GDPval-AA: 57.3% (source: BenchLM; was NOT FOUND in September 2026 sources)
- GDPval-AA (Elo): 1685 (source: BenchLM)
- OSWorld-Verified: 80.8% (source: Hugging Face model card)
- DeepSWE: 64.8% (source: Hugging Face model card)
- Agents' Last Exam: 27.6% (source: BenchLM)
- TB-4.0: 38.0% (source: BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (source: Hugging Face model card — vendor-reported, near-frontier for a 27B model)
- HLE: NOT FOUND (not in HF model card or BenchLM for this exact ID)
- AA Intelligence Index: 34 (same as above)
- ARC-AGI-1: 93.7% (source: Hugging Face model card)
- ARC-AGI-2: 83.2% (source: Hugging Face model card)
- LCR: 94.3% (source: Hugging Face model card)
- CritPt: NOT FOUND
- Omniscience: NOT FOUND

Coding:

- SWE-bench Verified: 77.8% (source: Hugging Face model card)
- LiveCodeBench: 90.3% (source: Hugging Face model card)
- GPQA-Coding: 57.5% (source: BenchLM)
- DeepSWE: 64.8% (source: Hugging Face model card)
- AAA-SciCode: 53.5% (source: BenchLM)
- AA Coding Index: 65.8% (source: BenchLM)
- HumanEval: 96.0% (source: Hugging Face model card)

Long context:

- Context window: 260,000 tokens native (≥100K tier = 50-64 per methodology; but ≥200K tier = 65-84); 1M via YaRN (uncapped, unverified).
- MRCR (8-needle): 97.3%, 91.4%, 90.5%, 79.3%, 57.5%, 36.6% at various positions (source: Hugging Face model card).

Multimodal:

- AAA-MMU-Pro: 73.1% (source: BenchLM)
- OfficeQA Pro: 62.1% (source: BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` (v4). Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost independent, excluded. Uses **current AA Intelligence Index v4.3.2 = 34** and new benchmark data from Hugging Face model card + BenchLM.

- **Tool use: 65/100.** TB-2.1 73.0% (just above 70% frontier reference), τ²-bench Telecom 75.6% (decent), GDPval-AA 57.3% (Elo 1685), OSWorld-Verified 80.8%; Intelligence Index 34 (mid). Capped by Intelligence Index 34 and GDPval below frontier.
- **Reasoning: 80/100.** GPQA Diamond 89.2% (near-frontier, above 80% threshold), LCR 94.3% (excellent), ARC-AGI-1 93.7% and ARC-AGI-2 83.2%; Intelligence Index 34 tempers the rating. No HLE score located.
- **Context window: 80/100.** 260,000 native tokens (large, in 200K-500K tier = 65-84, score 80); extends to ~1M via YaRN but full-window accuracy not independently verified. MRCR 8-needle: 97.3% at needle 1, 36.6% at needle 8.
- **Multimodal: 82/100.** Text + image + video input, text output (+image +video-in). No audio; PDF not verified. AAA-MMU-Pro 73.1%, OfficeQA Pro 62.1%.
- **Coding: 72/100.** LiveCodeBench 90.3% (excellent), SWE-bench Verified 77.8% (strong), HumanEval 96.0% (excellent); AAA-SciCode 53.5% (near 55% frontier ref). Capped by DeepSWE 64.8% (mid, 60-74 range) and GPQA-Coding 57.5%.
- **Cost efficiency: 76/100.** $0.50/$3.00 per 1M in/out — cheap vs frontier, 80% cache discount, $1.01/Index-task; but high among open-weight (median $0.05/$0.15).
- **Overall Score: 76/100.** Mean of five quality dims: (65+80+80+82+72)/5 = 379/5 = 75.8 → 76. **Up from prior 68:** recalibrated upward from Intelligence Index 34 alone (no benchmarks in Sept 2026 sources) to include now-available benchmark data: GPQA 89.2%, LiveCodeBench 90.3%, SWE-bench Verified 77.8%, TB-2.1 73.0%, HumanEval 96.0%. Intelligence Index 34 remains the anchor; scores reflect strong GPQA/LiveCodeBench/HumanEval but capped by no HLE score and Intelligence Index mid-tier.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (Hugging Face model card `Qwen/Qwen3.8-27B` for vendor-reported benchmarks; BenchLM.ai model page for Intelligence Index 34 and partial benchmarks; Artificial Analysis model page for Intelligence Index 34 and cost-per-task $1.01, September 2026). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research (Cost line preserved verbatim from prior signed file).
- Sources: HuggingFace model card `Qwen/Qwen3.8-27B`; BenchLM.ai model page; Artificial Analysis Qwen3.8-27B model page (September 2026).
- Future sources: add a new file next to this one using the same headings.

---

