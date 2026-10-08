# Gemini 2.5 — findings by Laguna S 1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/gemini-2-5-pro`), BenchLM (`https://benchlm.ai/models/gemini-2-5-pro`), Google DeepMind (`https://deepmind.google/models/gemini/pro/`), Epoch AI (`https://epoch.ai/benchmarks/frontiermath-tier-4-v2`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's Gemini 2.5 Pro flagship (served as `gemini-2.5-pro`): deep-reasoning model with 1M context, thinking, and text/image/audio/video input. Released June 2025; now deprecated with only 10k-input-token workload benchmarking active.
- **Provider / access:** Google AI (Gemini API, Vertex AI); OpenRouter `google/gemini-2.5-pro`; OpenCode Zen: `google/gemini-2.5-pro` (per `meta.json`, `noFreeId: true`; note: meta.json `id` is `google/gemini-2.5-pro`, not `opencode/...`); 2 API providers
- **Release / knowledge:** Released June 5, 2025; knowledge cutoff January 1, 2025
- **IDs:** `google/gemini-2.5-pro` (Google API, OpenRouter; per `meta.json` and verified 2026-10-04); also accessible via Google DeepMind model page (`https://deepmind.google/models/gemini/pro/`)
- **Context window:** 1,048,576 (1M) (per AA model page and `meta.json`)
- **Modalities:** Text, image, speech, and video input; text output (per AA model page: "Supports: text, image, speech, and video")
- **Pricing (as of 2026-10-08):** $1.25 input / $10.00 output per 1M tokens (Google API; OpenRouter, per `meta.json`); cache hits discounted 90% (AA); $0.33 cost per Intelligence Index task (AA)
- **Architecture:** Proprietary (Google has not disclosed parameter count)
- **Reasoning:** Yes (extended thinking / chain-of-thought; per AA model page); note: BenchLM classifies as Non-Reasoning — this model has a non-reasoning variant
- **Speed:** 119.0 tokens/s output (AA, Google API; rank #36/225 among similar models)
- **TTFT:** 22.64s (AA, Google API)
- **Status:** Deprecated — Google has launched Gemini 3 Pro Preview; AA continues only 10k-input-token workload benchmarking

### Raw benchmarks found

> Sources: Artificial Analysis model page (`https://artificialanalysis.ai/models/gemini-2-5-pro`), BenchLM (`https://benchlm.ai/models/gemini-2-5-pro`), Google DeepMind (`https://deepmind.google/models/gemini/pro/`), Epoch AI FrontierMath (`https://epoch.ai/benchmarks/frontiermath-tier-4-v2`). BenchLM covers 25 of 623 benchmarks. Note: BenchLM classifies Gemini 2.5 Pro as Non-Reasoning; the AA model page shows the reasoning variant. Benchmarks below may reflect the non-reasoning variant.

Agent / tool use:

- **GDPval-AA:** **616** (Elo) — (Artificial Analysis via BenchLM)
- **GDPval-AA (normalized):** **0.0%** — (Artificial Analysis via BenchLM)
- **AA Agentic Index:** **3.5%** — (Artificial Analysis via BenchLM)
- **τ²-bench:** **54.1%** — (Artificial Analysis via BenchLM)
- **Gert Labs:** **42.01%** — (Gert Labs rankings via BenchLM)
- **Terminal-Bench 2.1:** no verified public score found (not reported)
- **Terminal-Bench 4.0:** no verified public score found (not reported)
- **OSWorld-Verified:** no verified public score found
- **Claw-Eval:** no verified public score found

Reasoning / knowledge:

- **GPQA Diamond:** **83%** — (Google DeepMind model page; AA GPQA-D: 84.4%)
- **AA-GPQA Diamond:** **84.4%** — (Artificial Analysis via BenchLM)
- **HLE:** **18.8%** — (Google: Gemini 2.5 Pro blog via BenchLM)
- **AA-HLE:** **22.5%** — (Artificial Analysis via BenchLM)
- **AA-LCR:** **69.0%** — (Artificial Analysis via BenchLM)
- **CritPt:** **2.6%** — (Artificial Analysis via BenchLM)
- **AA-Omniscience Index:** **-16.3%** — (Artificial Analysis via BenchLM)
- **AA-Omniscience Accuracy:** **39.1%** — (Artificial Analysis via BenchLM)
- **AA-Omniscience Hallucination Rate:** **90.9%** — (Artificial Analysis via BenchLM)
- **AA-IFBench:** **48.7%** — (Artificial Analysis via BenchLM)
- **Artificial Analysis Intelligence Index:** **16** — (AA model page, rank #173/225, lower end; median: 26)
- **FrontierMath v2 (Tiers 1-3):** **14.138%** — (Epoch AI FrontierMath v2 leaderboard)
- **FrontierMath v2 (Tier 4):** **4.167%** — (Epoch AI FrontierMath v2 leaderboard)

Coding:

- **SWE-bench Verified:** **63.8%** — (Google: Gemini 2.5 Pro blog via BenchLM)
- **SWE-bench (Vals):** **54.4%** — (Vals AI via BenchLM)
- **Vibe Code Bench:** **0.40%** — (Vals AI: Vibe Code Bench v1.1 via BenchLM)
- **AA-SciCode:** **46.3%** — (Artificial Analysis via BenchLM)
- **AA Coding Index:** **33.3%** — (Artificial Analysis via BenchLM)
- **DeepSWE:** no verified public score found
- **LiveCodeBench:** no verified public score found

Multimodal & grounded:

- **AA-MMMU-Pro:** **74.9%** — (Artificial Analysis via BenchLM)
- **Design Arena Website:** **1172** (Elo) — (OpenRouter model benchmarks via BenchLM)

Long context:

- **AA-LCR:** **69.0%** — (Artificial Analysis via BenchLM) — moderate long-context reasoning
- **MRCR / RULER:** no verified public score found

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: moderate — 25 public benchmarks found across 5 sources (AA, BenchLM, Google DeepMind, Epoch AI, OpenRouter). Note: BenchLM classifies this model as Non-Reasoning; the AA model page shows the reasoning variant. The model is deprecated (Google has launched Gemini 3 series), and AA continues only 10k-input-token workload benchmarking.

- **Tool use: 38/100.** GDPval-AA at 616 Elo (AA) is weak (below ~900-1200 mid-tier range). GDPval-AA (normalized) at 0.0% is at the zero threshold. AA Agentic Index at 3.5% is extremely weak. τ²-bench at 54.1% (AA) is moderate. Gert Labs at 42.01% is moderate. No Terminal-Bench 2.1 or 4.0 score. The model performs poorly on general agentic benchmarks, despite some strength on τ²-bench.

- **Reasoning: 46/100.** AA Intelligence Index at 16 (rank #173/225, lower end; median: 26). Using II + 30 formula: 16 + 30 = 46. GPQA Diamond at 84.4% (AA) is good but below the 90%+ frontier. HLE at 18.8% (text-only) / 22.5% (AA) is very weak (well below 40% frontier). CritPt at 2.6% is very low. AA-LCR at 69.0% is moderate (below 95% frontier). AA-Omniscience Index at -16.3% is negative. AA-IFBench at 48.7% is mid-tier. Despite strong multimodal GPQA (84.4%), the very low Intelligence Index (16), weak HLE, and poor CritPt/Omniscience drag down the score. Note: BenchLM data may reflect the non-reasoning variant.

- **Context window: 95/100.** 1,048,576 (1M) tokens per AA model page and `meta.json` (both agree). ≥1M tier → 95. AA notes the model is deprecated with only 10k-input-token workload active, but the 1M context window spec stands.

- **Multimodal: 90/100.** Text, image, speech, and video input; text output (per AA model page and `meta.json`). Per methodology: "+audio in = 90–100". The model supports all input modalities (text, image, speech, video). 90 (lower end since no non-text output).

- **Coding: 48/100.** SWE-bench Verified at 63.8% (Google) is moderate. Vibe Code Bench at 0.40% (Vals AI) is extremely weak. AA-SciCode at 46.3% is below the 55% frontier. AA Coding Index at 33.3% is very weak. SWE-bench (Vals) at 54.4% is moderate. DeepSWE and LiveCodeBench not reported. The extremely low Vibe Code Bench (0.40%) and very weak AA Coding Index (33.3%) indicate significant coding weaknesses.

- **Cost efficiency: 60/100.** $1.25 input / $10.00 output per 1M tokens (per `meta.json`, `noFreeId: true`). In the "$1–2 / $4–5 tier ≈ 65" range, but the output price of $10 is significantly higher than the $4-5 reference tier. The blended rate is $1.34 per 1M. Cost per Intelligence Index task is $0.33 (very efficient per task, but the model is also not very intelligent so tasks are cheaper to compute). Proprietary model (no open weights). No free tier on Zen.

- **Overall Score: 63/100.** Mean of five non-cost dimensions: (38 + 46 + 95 + 90 + 48) / 5 = 317 / 5 = 63.4 → 63. Strong multimodal capabilities (text+image+audio+video in, 90) and 1M context (95) offset by very weak agentic tool use (GDPval 616 Elo, AA Agentic Index 3.5%), low Intelligence Index (16), and poor coding (AA Coding Index 33.3%, Vibe 0.40%). Deprecated model superseded by Gemini 3 series.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public internet research via Artificial Analysis, BenchLM, Google DeepMind, and Epoch AI; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Pro_Tech_Report.md`, using the same headings.

---
