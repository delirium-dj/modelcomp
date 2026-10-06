# Gemma 4 E2B — findings by Muse Spark 1.3

- Source: Google (google/gemma-4-E2B)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google's edge-efficient open-weights Gemma 4 variant (~2.3B effective) for phones, laptops, and Jetson/Pi-class hardware, with native image and audio input.
- **Provider / access:** Hugging Face `google/gemma-4-E2B` (open weights); hosted API via inference providers; Zen `opencode/gemma-4-e2b`. Chat Completions-style conversational API.
- **Release / knowledge:** Gemma 4 family released March–April 2026 (AA lists Apr 2, 2026; BenchmarkList Apr 3, 2026; HF E2B repo 2026); knowledge cutoff unknown.
- **IDs:** `google/gemma-4-E2B` (Hugging Face); `opencode/gemma-4-e2b` (Zen).
- **Context window:** 128,000 total (curated meta; Google Gemma 4 card: up to 256K family-wide with smaller variants at reduced windows — E2B tracked at 128K).
- **Modalities:** text + image + audio in; text out (Google Gemma 4 card: audio supported on E2B/E4B/12B; meta verified). Reasoning undisclosed; tool calls via function-calling support per Google card.
- **Pricing (as of 2026-10-06):** Apache 2.0 open weights (self-host $0); hosted ~$0.04/$0.08 per 1M in/out (curated meta, verified).
- **Architecture:** proprietary dense edge model, ~2.3B effective params, Apache 2.0 open weights.

### Raw benchmarks found

> Third-party aggregates (BenchmarkList 64 benchmarks, Artificial Analysis). Percentiles/ranks quoted for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **17.0%** (BenchmarkList, rank 163/194, 16th percentile)
- Tau3-Banking / Tau2-Bench: **Tau3-Banking 2.0%** (rank 168/176, 5th pct); **Tau2-Telecom 14.6%** (rank 306/332, 8th pct) (BenchmarkList)
- GDPval-AA: **222** (BenchmarkList, rank 333/352, 5th percentile)
- Claw-Eval / ClawProBench: **Claw Bench 68.85** (BenchmarkList, rank 36/37, 3rd percentile)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **6.2%** (BenchmarkList, rank 396/478, 17th percentile)
- LCR / MLCR: **AA-LCR 28.3%** (BenchmarkList, rank 382/408, 6th percentile)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **AA Index 5.48** (BenchmarkList, rank 376/427, 12th percentile)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMLU-Pro: **55.2%** (BenchmarkList, rank 280/312, 10th percentile)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **52.0%** (BenchmarkList, rank 44/50, 12th percentile)
- SciCode / AA-SciCode: **SciCode 17.0%** (BenchmarkList, rank 270/296, 9th percentile)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **Codeforces ELO 947** (BenchmarkList, rank 8/8, 0th percentile)

Long context:

- No verified MRCR / RULER / GraphWalks score found; AA-LCR 28.3% (6th pct) is the only measured retention probe; 128K window via spec only otherwise.

### Normalized scores (1–100)

- **Tool use: 42/100.** TB2.1 17.0% with single-digit Tau/GDPval percentiles shows only rudimentary agentic ability; capped hard by bottom-decile ranks across every tool harness.
- **Reasoning: 45/100.** MMLU-Pro 55.2% and HLE 6.2% with AA Index 5.48 (12th pct) confirm a small edge model, not a reasoner; capped by missing GPQA/CritPt and uniformly bottom-quintile ranks.
- **Context window: 62/100.** 128K spec sits below the 200K tier (~70); AA-LCR 28.3% (6th pct) shows weak measured retention even within that window.
- **Multimodal: 65/100.** Text+image+audio input is broad for an edge model (above text-only floor), but no measured vision/audio quality scores cap it at spec-level credit.
- **Coding: 48/100.** LiveCodeBench 52.0% clears non-trivial codegen for its size, but SciCode 17.0%, Codeforces 947 (last), and zero SWE-bench evidence cap it firmly below mid-pack.
- **Cost efficiency: 96/100.** Apache 2.0 self-host ($0) plus ~$0.04/$0.08 hosted pricing is near-free; capped below 100 as hosted inference is still paid.
- **Overall Score: 52/100.** Mean of the five non-cost dims (42+45+62+65+48)/5 = 52.4, half-up 52; best fit as an on-device/edge multimodal fallback where zero-cost local inference matters more than benchmark strength.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-06
- Method: public internet research (BenchmarkList E2B page with 64 benchmarks, Artificial Analysis Gemma 4 family pages, Google Gemma 4 model card, curated meta.json for pricing/specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
