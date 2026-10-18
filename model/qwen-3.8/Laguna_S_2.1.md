# Qwen 3.8 — findings by Laguna S 2.1

- Source: opencode/qwen-3.8 (Alibaba/Qwen), e.g. Alibaba Cloud, Artificial Analysis, Kingy AI, Hugging Face
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 — mapped here to the base dense open-weights flagship **Qwen3.8 27B (xhigh reasoning variant)** (Alibaba/Qwen). Distinct from the repo's separate `qwen3.8-max` folder (the 2.4T MoE Max variant).
- **Short description:** Alibaba's 27B dense, multimodal, open-weights reasoning model. Leads open-weight models on the AA Intelligence Index in its size class, with strong cost-efficiency; trade-offs are slower (~46 tok/s) and very verbose. Native 256K context (per AA Oct 10), extendable to 1M via YaRN (unverified).
- **Provider / access:** Alibaba/Qwen (AliCloud Model Studio + 12 API providers). Open weights on Hugging Face. Apache 2.0 (commercial). Reasoning/thinking (extended/CoT, xhigh), per-message effort, tool calling, structured outputs / JSON mode.
- **Release / knowledge:** Released August 14, 2026 (AA). Knowledge cutoff: NOT found precisely for the 27B in fetched sources.
- **IDs:** repo id `opencode/qwen-3.8` (Alibaba/Qwen); Hugging Face model `Qwen/Qwen3.8-27B`. Open-weights (weights downloadable; `noFreeId` not applicable — Apache 2.0 self-host/free route available).
- **Context window:** 262,144 tokens native (Artificial Analysis Oct 17 confirms 262K; ≡ kingy's 262,144) / extends to ~1,000,000 via YaRN scaling (full-window accuracy unproven independently). Scoring uses the AA-verified 262K native figure.
- **Modalities:** Text + image + video input → text output (multimodal). No audio; PDF not specified.
- **Pricing (as of 2026-10-10):** $0.50 / $3.00 per 1M input/output (Alibaba API); cache 80% off; blended 7:2:1 ≈ $0.47/MTok; cost per AA Intelligence Index task = $1.01. Cheap vs frontier ($5/$30 GPT-5.5, $10/$50 Fable) but "expensive" in open-weight terms (median $0.05/$0.15).
- **Architecture:** 27B dense decoder-only, open-weights (Apache 2.0), reasoning (xhigh) variant; a non-reasoning variant also exists.

### Raw benchmarks found

> Verified public numbers, sourced per metric. Benchmarks not located are NOT fabricated.

- AA Intelligence Index v4.3.2: **33.7%** — #1/142 open-weights (Medium size class; class median 8) (Artificial Analysis model page, Oct 17 — revised from 34)
- Output speed: **46.1 tok/s** (Alibaba API; below open-weight median 91.1) (AA Oct 10).
- Cost per Intelligence Index task: **$1.01** (AA Oct 10).

Agent / tool use:

- Terminal-Bench 2.1: 73.0% (source: Hugging Face model card)
- τ²-bench Telecom: 75.6% (source: Hugging Face model card)
- GDPval-AA: 46.0% — (AA model benchmarks via Oct 17 BenchLM — revised down from 57.3%)
- GDPval-AA (Elo): 1420 — (AA model benchmarks via Oct 17 BenchLM — revised down from 1685)
- OSWorld-Verified: 84.3% — (Hugging Face model card via Oct 17 BenchLM — revised up from 80.8%)
- Agents' Last Exam: 42.9% — (Hugging Face model card via Oct 17 BenchLM — revised up from 27.6%)
- CoWorkBench: 70.7% — (Qwen3.8-27B model card via Oct 17 BenchLM — NEW)
- aaTerminalBench21: 79.8% — (AA leaderboard via Oct 17 BenchLM — NEW)
- Terminal-Bench 2.1 (Vals): 58.4% — (Vals AI via Oct 17 BenchLM — NEW)
- AA Agentic Index: 46.5% — (AA model benchmarks via Oct 17 BenchLM — NEW)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (source: Hugging Face model card — vendor-reported, near-frontier for a 27B model)
- HLE: **30.8%** — (Qwen3.8-27B model card via Oct 17 BenchLM — was NOT FOUND in prior file; weak)
- AA-HLE: **33.9%** — (AA model benchmarks via Oct 17 BenchLM — NEW)
- AI Intelligence Index: **33.7%** — (same as above; revised from 34)
- CritPt: **5.4%** — (AA model benchmarks via Oct 17 BenchLM — NEW, very weak; was NOT FOUND)
- AA-Omniscience Index: **-10.0%** — (AA model benchmarks via Oct 17 BenchLM — NEW, severe reliability issues; was NOT FOUND)
- AA-Omniscience Accuracy: **15.6%** — (AA model benchmarks via Oct 17 BenchLM — NEW)
- AA-Omniscience Hallucination Rate: **30.3%** — (AA model benchmarks via Oct 17 BenchLM — NEW)
- MLCR-AA: **21.7%** — (AA model benchmarks via Oct 17 BenchLM — NEW, very weak)
- AA-GPQA Diamond: **90.5%** — (AA model benchmarks via Oct 17 BenchLM — NEW, strong)
- ARC-AGI-1: 93.7% (source: Hugging Face model card)
- ARC-AGI-2: 83.2% (source: Hugging Face model card)
- LCR: 94.3% (source: Hugging Face model card)
- CritPt: NOT FOUND
- Omniscience: NOT FOUND

Coding:

- SWE-bench Verified: 77.8% — (Hugging Face model card via BenchLM)
- SWE-bench (Vals): 86.0% — (Vals AI via Oct 17 BenchLM — NEW)
- LiveCodeBench v6: 90.3% — (Hugging Face model card via Oct 17 BenchLM)
- LiveCodeBench (Vals): 84.0% — (Vals AI via Oct 17 BenchLM — NEW)
- DeepSWE: 42.2% — (Hugging Face model card via Oct 17 BenchLM — CRITICAL downgrade from 64.8%, now below 50% frontier)
- AAA-SciCode: 46.6% — (AA model benchmarks via Oct 17 BenchLM — revised down from 53.5%, below 55% frontier)
- AA Coding Index: 68.1% — (AA model benchmarks via Oct 17 BenchLM — revised up from 65.8%)
- HumanEval: 96.0% — (Hugging Face model card via BenchLM)
- GPQA-Coding: 57.5% — (BenchLM)
- VulcanBench v3: 82.6% — (VulcanBench Eval Suite 3 leaderboard via Oct 17 BenchLM — NEW)
- Bug Hunt Bench: 15.0 — (Bug Hunt Bench public data via Oct 17 BenchLM — NEW)

Long context:

- Context window: 262,144 tokens native (AA Oct 17 confirms 262K; ≥200K tier = 65-84, score 80); 1M via YaRN (uncapped, unverified).
- MRCR (8-needle): 97.3%, 91.4%, 90.5%, 79.3%, 57.5%, 36.6% at various positions (source: Hugging Face model card).

Multimodal:

- **AA-MMMU-Pro:** 76.3% — (AA model benchmarks via Oct 17 BenchLM — revised up from 73.1%)
- **OfficeQA Pro:** 62.1% — (BenchLM)
- **MathVision:** 90.0% — (Qwen3.8-27B model card via Oct 17 BenchLM — NEW)
- **MathVision w/ Python:** 94.6% — (Qwen3.8-27B model card via Oct 17 BenchLM — NEW)
- **CharXiv:** 90.2% — (Qwen3.8-27B model card via Oct 17 BenchLM — NEW)
- **CharXiv w/o tools:** 83.7% — (Qwen3.8-27B model card via Oct 17 BenchLM — NEW)
- **OmniDocBench 1.5:** 91.1% — (Qwen3.8-27B model card via Oct 17 BenchLM — NEW)
- **RealWorldQA:** 85.9% — (Qwen3.8-27B model card via Oct 17 BenchLM — NEW)
- **ERQA:** 65.5% — (Qwen3.8-27B model card via Oct 17 BenchLM — NEW)

### Normalized scores (1–100)

> Method: `model-comparison.md` (v4). Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost independent, excluded. Uses **current AA Intelligence Index v4.3.2 = 33.7%** and new benchmark data from Hugging Face model card + BenchLM (Oct 17).

- **Tool use: 65/100.** (Unchanged.) TB-2.1 73.0% (above 70% frontier), τ²-bench Telecom 75.6% (decent), OSWorld-Verified 84.3% (up from 80.8%), AA Agentic Index 46.5% (new). GDPval-AA Elo 1420 (down from 1685, below 1750 frontier), GDPval-AA normalized 46.0% (down from 57.3%). New: CoWorkBench 70.7%, aaTerminalBench21 79.8%, TB-2.1 (Vals) 58.4%. Capped by GDPval-AA below frontier, Intelligence Index 33.7%.

- **Reasoning: 80/100.** (Unchanged.) GPQA Diamond 89.2% (near-frontier, above 80% threshold), AA-GPQA-D 90.5% (strong, new), LCR 94.3% (excellent), ARC-AGI-1 93.7% and ARC-AGI-2 83.2%. Intelligence Index 33.7% (revised from 34). New: HLE 30.8% (weak), CritPt 5.4% (very weak), AA-Omniscience Index -10.0% (severe reliability), AA-HLE 33.9%. Strong core scores offset weak reliability metrics.

- **Context window: 80/100.** 262,144 native tokens (AA Oct 17 confirms 262K; ≥200K tier); 1M via YaRN (uncapped, unverified). MRCR 8-needle: 97.3% at needle 1, 36.6% at needle 8.

- **Multimodal: 84/100.** (Upgraded from 82.) Text + image + video input, text output. New: MathVision 90.0%, MathVision w/ Python 94.6%, CharXiv 90.2%, OmniDocBench 91.1%, RealWorldQA 85.9%. AA-MMMU-Pro 76.3% (up from 73.1%). Strong vision benchmark cluster pushes to upper range. No audio input, PDF not verified.

- **Coding: 70/100.** (Downgraded from 72.) LiveCodeBench v6 90.3% (excellent), SWE-bench (Vals) 86.0% (new, ≥85 frontier), HumanEval 96.0% (excellent), VulcanBench v3 82.6% (new). BUT DeepSWE 42.2% (CRITICAL downgrade from 64.8%, now below frontier), AA-SciCode 46.6% (below 55% frontier), AA Coding Index 68.1% (up from 65.8%). Capped by DeepSWE below 50% frontier.
- **Cost efficiency: 76/100.** $0.50/$3.00 per 1M in/out — cheap vs frontier, 80% cache discount, $1.01/Index-task; but high among open-weight (median $0.05/$0.15).

- **Overall Score: 76/100.** (65 + 80 + 80 + 84 + 70) / 5 = 379 / 5 = 75.8 → 76. (Unchanged.) BenchLM overall 59.61 (#57/954, 68/639 benches). Intelligence Index 34→33.7%, Context 256K→262K (same tier). GDPval-AA Elo 1685→1420 (weaker), DeepSWE 64.8→42.2 (CRITICAL downgrade), OSWorld 80.8→84.3 (up), Agents' Last Exam 27.6→42.9 (up). New: MathVision 90%, CharXiv 90.2%, OmniDocBench 91.1%, VulcanBench 82.6%, SWE-bench (Vals) 86.0%, AA-GPQA-D 90.5%. Multimodal 82→84, Coding 72→70 (DeepSWE). Tool use 65→65, Reasoning 80→80. Confirmed by fresh Oct 17 BenchLM + AA data.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research (Hugging Face model card `Qwen/Qwen3.8-27B` for vendor-reported benchmarks; BenchLM.ai model page for Intelligence Index and benchmark tables; Artificial Analysis model page for Intelligence Index, context window, and cost-per-task). Scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `*.md` findings files during research.
- Sources: BenchLM.ai model page `https://benchlm.ai/models/qwen3-8-27b` (Overall 59.61/100, #57/954, 68 of 639 benchmarks, 2026-10-17); AA model page (Intelligence Index 33.7%, #1/142 open-weights, modalities text+image+video, context 262K); HuggingFace model card `Qwen/Qwen3.8-27B` (TB-2.1 73.0%, OSWorld 84.3%, DeepSWE 42.2%, GPQA 89.2%, MathVision 90.0%, CharXiv 90.2°, OmniDocBench 91.1°, etc.); Vals AI (SWE-bench 86.0%, GPQA-D 88.9%, MMLU-Pro 84.3%, LiveCodeBench 84.0%).
- Re-verification (Oct 17): BenchLM overall 61.33→59.61 (#54→#57/954, 33→68/639 benches). Intelligence Index 34→33.7% (negligible). CRITICAL: DeepSWE 64.8→42.2% (below frontier). GDPval-AA Elo 1685→1420, normalized 57.3→46.0%. OSWorld-Verified 80.8→84.3%, Agents' Last Exam 27.6→42.9%. New: MathVision, CharXiv, OmniDocBench, VulcanBench, SWE-bench (Vals) 86.0%, aaTerminalBench21 79.8%, AA-GPQA-D 90.5%. Multimodal 82→84, Coding 72→70. Overall 76→76.

---
