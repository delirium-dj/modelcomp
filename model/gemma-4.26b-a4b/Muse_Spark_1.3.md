# Gemma 4 26B A4B — findings by Muse Spark 1.3

- Source: Google (google/gemma-4-26B-A4B)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weights multimodal MoE (26.5B total / 3.8B active) for chat, function calling, and image understanding; instruction-tuned image-text-to-text variant.
- **Provider / access:** Hugging Face `google/gemma-4-26B-A4B` (Transformers, safetensors); API via inference providers (e.g. Featherless AI); Zen `opencode/gemma-4.26b-a4b`. Chat Completions-style conversational API.
- **Release / knowledge:** 2026-03-12 repo creation (Hugging Face); BenchmarkList lists release Apr 3, 2026; Artificial Analysis lists Apr 2, 2026; knowledge cutoff unknown.
- **IDs:** `google/gemma-4-26B-A4B` (Hugging Face); `opencode/gemma-4.26b-a4b` (Zen).
- **Context window:** 256K–260K total (Google Gemma 4 model card: up to 256K; Artificial Analysis: 260K; verified via spec pages).
- **Modalities:** text + image (+ video per Artificial Analysis) in; text out (Hugging Face pipeline image-text-to-text; Google card: text+image in; AA: text/image/video in). Reasoning yes (AA reasoning variant); tool calls yes (function calling per Google card).
- **Pricing (as of 2026-10-06):** open-weights API median ~$0.06–$0.10/$0.33–$0.37 per 1M in/out (BenchmarkList $0.06/$0.33; Artificial Analysis median $0.10/$0.37, verified); paid tier on Zen (Standard pricing).
- **Architecture:** MoE, 26.5B total / 3.8B active params (AA + HF safetensors 25.8B BF16), Apache 2.0 open weights.

### Raw benchmarks found

> Third-party aggregates (BenchmarkList 64 benchmarks, Artificial Analysis) plus Google model-card family context. BenchmarkList percentiles/ranks quoted for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **39.0%** (BenchmarkList, rank 98/194, 50th percentile)
- Terminal-Bench Hard: **25.0%** (BenchmarkList, rank 89/326, 73rd percentile)
- Tau3-Banking / Tau2-Bench: **Tau3-Banking 12.0%** (rank 87/176, 51st pct); **Tau2-Telecom 43.6%** (rank 150/332, 55th pct); **Tau2 Average 68.2%** (rank 3/5, 50th pct) (all BenchmarkList)
- GDPval-AA: **770** (BenchmarkList, rank 158/352, 55th percentile)
- Claw-Eval / ClawProBench: **Claw Bench 83.47** (BenchmarkList, rank 33/37, 11th percentile)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **19.3%** (BenchmarkList, rank 121/478, 75th percentile)
- LCR / MLCR: **AA-LCR 65.7%** (BenchmarkList, rank 140/408, 66th percentile)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **AA Index 25.69** (BenchmarkList, rank 127/427, 70th percentile; AA page estimates Index 17, #15/142 in small open-weights class)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMLU-Pro: **82.6%** (BenchmarkList, rank 64/312, 80th percentile)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **77.1%** (BenchmarkList, rank 21/50, 59th percentile)
- SciCode / AA-SciCode: **SciCode 40.0%** (BenchmarkList, rank 114/296, 62nd percentile)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **ALE-Bench 927.17** (rank 25/83, 71st pct); **Codeforces ELO 1718** (rank 5/8, 43rd pct) (BenchmarkList)

Long context:

- MRCR-v2 128k **44.1%** (BenchmarkList, rank 17/20, 16th percentile); AA-LCR 65.7% (above); 256K window verified via spec only beyond these two probes.

### Normalized scores (1–100)

- **Tool use: 73/100.** TB2.1 39.0% + TB-Hard 25.0% (73rd pct) with mid-pack Tau2/GDPval-AA 770 show a capable small-model agent; capped by weak Tau3-Banking 12.0% and bottom-decile Claw Bench with no Toolathon corroboration.
- **Reasoning: 71/100.** MMLU-Pro 82.6% (80th pct) and HLE 19.3% (75th pct) plus AA Index 25.69 (70th pct) are solid for a 3.8B-active MoE; capped by missing GPQA/CritPt/Omniscience and an estimated-only AA Index 17.
- **Context window: 72/100.** 256K spec clears the 200K tier (~70) but AA-LCR 65.7% is mid-pack and MRCR-v2-128k 44.1% (16th pct) shows weak measured retention at half the window.
- **Multimodal: 75/100.** Text+image (+video per AA) input with ParseBench 58.5 (88th pct) is genuinely multimodal; capped by no audio/PDF input and thin vision-quality evidence beyond one strong parse score.
- **Coding: 74/100.** LiveCodeBench 77.1% and SciCode 40.0% (62nd pct) plus ALE-Bench 927 (71st pct) show decent small-model coding; capped by zero SWE-bench/Vibe evidence and weak Codeforces 1718.
- **Cost efficiency: 90/100.** ~$0.06–$0.10/$0.33–$0.37 per 1M is cheap open-weights API pricing, but paid so below a $0 tier.
- **Overall Score: 73/100.** Mean of the five non-cost dims (73+71+72+75+74)/5 = 73.0, half-up 73; best fit as a cheap self-hostable multimodal small model for cost-sensitive chat and light coding, not frontier agentic work.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-06
- Method: public internet research (Artificial Analysis model page, BenchmarkList model page with 64 benchmarks, Google Gemma 4 model card, Hugging Face repo specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
