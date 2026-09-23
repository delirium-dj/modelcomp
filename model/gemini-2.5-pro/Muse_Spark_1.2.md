# Gemini 2.5 Pro — findings by Muse Spark 1.2

- Source: Google/gemini-2.5-pro (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's mid-2025 reasoning flagship (June 2025 update); strong math/coding at competitive price, 1M context.
- **Provider / access:** Google AI Studio `gemini-2.5-pro`, Vertex AI `gemini-2.5-pro` (Google API) — via OpenCode Zen `opencode/gemini-2.5-pro`
- **Release / knowledge:** 2025-03-20 initial / 2025-06-05 major update; knowledge cutoff 2025-01 (per Artificial Analysis)
- **IDs:** `google/gemini-2.5-pro` (and `opencode/gemini-2.5-pro` on Zen)
- **Context window:** 1,048,576 total (1M) — verified via Artificial Analysis, Google docs
- **Modalities:** Text, image, speech, video in; text out; reasoning yes (thinking budget); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $1.25 in / $10.00 out per 1M (cached $0.125); blended ~$1.34 (7:2:1) — moderately priced
- **Architecture:** Proprietary (Gemini 2.5)

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom (AA): **54.1%** (Artificial Analysis) (source: Frontierlog / AA comparison 2026-09)
- Tau-Banking (AA): **9.3%** (source: Frontierlog)
- Terminal-Bench v2.1 (AA): **28.5%** (source: Frontierlog)
- Terminal-Bench Hard (AA): **26.5%** (source: Frontierlog)
- GDPval-AA v2: **no verified isolated GDPval published for 2.5 Pro** — AA-Briefcase Elo not disclosed isolatively in AA index 17 composite
- GDPval-AA v2.1 AutomationBench-AA: **2%** (AA) (source: AA comparison Opus 4.6 vs Gemini 2.5 Pro)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **84.4%** (Artificial Analysis AA-GPQA; 85.3% BenchLeader, 80.8% Vals non-index) (source: Frontierlog, BenchLeader, AA)
- HLE: **21.1%** (AA-HLE; 22.5% BenchLeader variant) (source: Frontierlog, BenchLeader 2026-09-16)
- LCR / MLCR: **66.0% AA-LCR v1.1** (source: Frontierlog — 69% per AA comparison)
- CritPt: **2.6%** (BenchLeader thinking, 3% per AA comparison) (source: BenchLeader, AA)
- Artificial Analysis Intelligence Index / BenchLM overall: **17** (AA Intelligence Index v4.3, deprecated, #191/199) — median comparable 25; composite of 10 evals (source: Artificial Analysis model page 2025, Frontierlog)
- Omniscience Accuracy / Hallucination Rate: **AA-Omniscience -16.4** net (BenchLeader, AA -16) — negative net due to hallucinations (source: BenchLeader, AA comparison)
- MMLU-Pro: **86.2%** (AA-MMLU-Pro 86.0% Frontierlog) (source: Frontierlog, EasyBenchmarks, BenchLeader 86.3% HELM)
- MATH-500: **96.7%** (AA-MATH-500) (source: Frontierlog)

Coding:

- SWE-bench Verified / SWE-Pro: **53.6% SWE-bench Verified (bash only/any scaffold)** (BenchLeader #32, Vals AI) ; **10.1% SWE-Bench Pro** (Scale AI SEAL) (source: BenchLeader)
- LiveCodeBench: **80.1%** (AA-LiveCodeBench) / **79.2%** Vals AI (source: Frontierlog, BenchLeader)
- SciCode / AA-SciCode: **42.8% SciCode (AA)** / **46.3% BenchLeader** (source: Frontierlog, BenchLeader)
- Vibe Code Bench: **0.4%** (Vals AI) (source: BenchLeader)
- DeepSWE / Coding Index / other: **33.3 AA-Coding Index** (#159/600) (source: EasyBenchmarks) ; **Aider Polyglot 83.1%** (#3) (source: BenchLeader)

Long context:

- 1M total — AA-LCR 66-69% at standard length; no distinct MRCR 1M pointwise published for 2.5 Pro (BenchLeader long context 67 but no 1M needle metric isolated vs Gemini 3 Flash family)

### Normalized scores (1–100)

- **Tool use: 58/100.** Tau2 Telecom 54.1% + AA-LCR 66% decent but Terminal-Bench v2.1 28.5%/Hard 26.5% and Tau-Banking 9.3% plus AutomationBench 2% cap tool-use; missing GDPval/Claw verification.
- **Reasoning: 76/100.** MMLU-Pro 86.2% + GPQA 84.4% + MATH-500 96.7%/AA-Math 87.7%/AIME 88.7 strong math, but HLE 21.1% and AA Intelligence 17 (below median 25) cap; AA-Omniscience -16 net indicates hallucination penalty.
- **Context window: 96/100.** 1M total verified — top tier (≥1M =95-100); capped below 100 without MRCR 1M needle disclosure.
- **Multimodal: 86/100.** Text, image, speech, video in; text out — full 4-input omni qualifies high per rubric (video/audio push above image-only 60-70).
- **Coding: 71/100.** LiveCodeBench 80.1% strong, Aider 83.1% #3, but SWE-bench 53.6% mid-tier and AA-Coding 33.3/SciCode 42-46% plus Vibe 0.4% cap coding.
- **Cost efficiency: 78/100.** $1.25/$10 per 1M (blended $1.34) — cheaper than 88% of models per Frontierlog, 40% below flagship $10/$50 tier; not Free but efficient vs intelligence.
- **Overall Score: 77/100.** Mean of five non-cost dims (58+76+96+86+71)/5=77.4 → 77; best-fit for cost-efficient reasoning/math with full multimodal where latest Flash/Pro not required.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Artificial Analysis Gemini 2.5 Pro page, Frontierlog, BenchLeader, EasyBenchmarks, Google I/O benchmarking results May 2025); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
