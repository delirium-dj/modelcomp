# Muse Spark 1.3 Free — findings by Muse Spark 1.3

- Source: Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Free
- **Short description:** Free Contributor-tier access to Meta’s Muse Spark 1.3 — hosted multimodal reasoning model for coding and long-horizon agentic workflows. Same weights/capabilities as standard `muse-spark-1.3`; lower price in exchange for allowing Meta to use prompts/completions for training.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.3-contributor-free`), `https://opencode.ai/zen/v1/responses`; also Meta Model API (`muse-spark-1.3-contributor`) and Muse Code. Standard ID: `meta/muse-spark-1.3`.
- **Release:** 2026-09-02 by Meta (Meta Superintelligence Labs). Not open-weights as of 2026-09-17.
- **Context window:** **1,048,576 tokens (1M)**. Max output up to 1,048,576 (Vercel) / 131,072 on some Zen listings — endpoint-dependent.
- **Modalities:** text + image + video + PDF input; text output; reasoning = yes. No image/audio/video output reported.
- **Pricing:**
  - Zen Free tier (`muse-spark-1.3-contributor-free`): **Free / Free / Free** (limited time)
  - Contributor paid: **$0.10 input / $0.20 output / $0.002 cached** per 1M
  - Standard: **$1.25 input / $4.25 output / $0.15 cached** per 1M (unchanged from 1.2)
  - Meta reports ~20% fewer tool calls and ~25% fewer tokens vs 1.2; $0.55 per Intelligence Index task — cheapest at 59+ intelligence (peers $0.94–$0.95).
- **Variants:** `xhigh` (generally available, Intelligence Index 61), `max` (limited preview, Index 62, uses ~62% more reasoning tokens on GDPval, ~28% more on Tau3).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (BenchLM; ties GPT-5.6 Sol, edges Opus 5 86%; AA run: 85% xhigh / 86% max vs 80% for 1.2)
- AA Tau3 Banking: **50.5%** (BenchLM) / **47% xhigh / 52% max** (Artificial Analysis, #1 among all models for max)
- GDPval-AA v2: **1754 Elo** (BenchLM) / **1709 xhigh / 1754 max** (AA, +94/+139 over 1.2’s 1615)
- AA Terminal-Bench 2.1: **84.3%**; Terminal-Bench 4.0: **33.3%**
- OSWorld 2.0: **66.9%**; AutomationBench 49.4% / AA-Automation 57.9%; JobBench 64.9%; DeepSearchQA 89.4%; Agentic Index 55.7%; Briefcase 1589
- Claw-Eval: **no verified public Claw-Eval score found** as of 2026-09-17 — listed as N/A, not 0.
- Efficiency: **~20% fewer tool calls, ~25% fewer tokens** vs 1.2 (Meta engineer comparisons)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61 (xhigh) / 62 (max)** — tied 1st–3rd with GPT-5.6 Sol max, Grok 4.6 high; behind Fable 5.1 max 66
- MRCR v2 256K–512K: **98.5%**; 512K–1M: **98.1%** (vs GPT-5.6 Sol 91.5% / 73.8% — best-in-class long-context retrieval)
- AA-LCR: **83.0%**; MLCR-AA 41.1%; CritPt **24.9%**
- AA-GPQA Diamond: **93.5%**; AA-HLE: **48.7%**; Omniscience Accuracy 43.6%, Hallucination 32.9%, Index 25.0%
- Speed: ~165–186 tok/s, TTFT ~42–46s (fast decode, slow first token on reasoning mode)

Coding:

- DeepSWE v1.1: **75.4** (beats Opus 5 74.0, GPT-5.6 Sol 73.0)
- Terminal-Bench 2.1: **88.8** (coding-terminal crossover)
- SWE-Atlas Codebase QnA: **59.4%** (vs Big Pickle direct 50.8%)
- AA-SciCode: **58.8%**; AA Coding Index **75.8%**; CursorBench 4.0 41.6%

### Normalized scores (1–100)

- **Tool use: 95/100.** Frontier agentic: TB 2.1 88.8%, Tau3 #1 (52% max), GDPval 1754, plus measured efficiency gain. Deduct 5 for high TTFT (~46s) and max-variant token hunger.
- **Reasoning: 92/100.** Frontier: GPQA 93.5%, HLE 48.7%, MRCR ~98% to 1M, LCR 83%, Index 61–62. Deduct for CritPt 24.9% and higher abstention lowering Omniscience accuracy.
- **Context window: 100/100.** Full 1M tier with 98.1% retrieval at 512K–1M where peers degrade to 73.8%.
- **Multimodal: 85/100.** Strong input (text/image/video/PDF), text-only output. No audio in/out or image/video generation → not 95+.
- **Coding: 95/100.** DeepSWE SOTA 75.4, TB 88.8, SciCode 58.8, SWE-Atlas 59.4. Cleaner style, fewer turns per Meta. Deduct 5 as Opus 5 still leads GDPval (1824 vs 1754) and some narrow agent slices.
- **Cost efficiency: 100/100.** Free tier = 0 cost. For reference: paid Contributor ($0.10/$0.20) would be ~98/100; Standard ($1.25/$4.25, $0.55/task Pareto-frontier) would be ~88/100.
- **Overall Score: 95/100.** Mean of above. Best fit: default for long-horizon coding/agentic work when free tier available; otherwise cheapest frontier-cost option at this intelligence.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
