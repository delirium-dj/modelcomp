# Mistral Medium 3.5 — findings by Muse Spark 1.2

- Source: Mistral AI/Mistral Medium 3.5 (`mistral-medium-3.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's dense 128B flagship merged model replacing Medium 3.1/Magistral/Devstral 2 — unified instruct/reasoning/coding weights with configurable reasoning effort, vision encoder, and 256K context for agentic workflows.
- **Provider / access:** Mistral AI API `mistral-medium-3.5` (docs.mistral.ai), HuggingFace `mistralai/Mistral-Medium-3.5-128B` (Modified MIT open-weights, 4-GPU self-hostable), OpenRouter `mistralai/mistral-medium-3-5`, Le Chat + Vibe CLI. No Zen Free ID.
- **Release / knowledge:** 2026-04-29 (HuggingFace), 2026-04 model v26.04; knowledge cutoff undisclosed
- **IDs:** `mistralai/mistral-medium-3.5` / `mistral-medium-3-5-26-04` (no Free ID on Zen)
- **Context window:** 262,144 (256K) verified via docs.mistral.ai, HuggingFace, Artificial Analysis 262K
- **Modalities:** text + image in; text out; reasoning yes (configurable per-request reasoning effort, instant vs reasoning mode); tool calls yes (native function calling, JSON mode); custom vision encoder variable aspect ratios; multilingual 12+ languages
- **Pricing (as of 2026-04-29):** $1.50 in / $7.50 out per 1M (Mistral API) — paid only; blended $1.16–$3.00 per BenchLeader/AA
- **Architecture:** dense 128B (non-MoE) unified model, 256K context

### Raw benchmarks found

Agent / tool use:

- τ³-Telecom: **91.4%** vendor (Mistral HuggingFace) / **94.2%** Artificial Analysis (OpenRouter/BenchLeader) — frontier agentic
- SWE-bench Verified: **77.6%** (Mistral HuggingFace leaderboard LEXam-hard proxy, SWE-bench Resolved)
- Terminal-Bench Hard: **33.3%** Artificial Analysis (OpenRouter/BenchLeader)
- GDPval-AA: **18.8%** normalized (Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (τ³-Telecom is proxy)
- GDPval-AA v2 explicit: **no verified public score found** beyond 18.8%
- Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **74.8%** Artificial Analysis (OpenRouter)
- HLE: **13.8%** Artificial Analysis
- IFBench: **68.8%** Artificial Analysis
- AA-LCR: **69.3%** Artificial Analysis
- SciCode: **40.2%** Artificial Analysis
- CritPt: **0.0%** Artificial Analysis (BenchLeader reasoning 46, instruction following 68)
- Artificial Analysis Intelligence Index: **14–14.9** points (Artificial Analysis, median 8)
- Omniscience Accuracy / Non-Hallucination: **24.7% / 18.4%** Artificial Analysis — low non-hallucination
- LCR / MLCR: see AA-LCR 69.3%
- BenchLeader Index: **51.3** (#311/430, 51.3 ±6.7; highest instruction following 68, lowest coding 41, human preference 47)

Coding:

- SWE-bench Verified 77.6% as above (unified coding model beating prior Devstral)
- LiveCodeBench / SciCode 40.2% as above
- Vibe Code Bench / DeepSWE / Coding Index 46.9 (Artificial Analysis Coding Index)
- BenchLeader Coding 41 (lowest category)

Long context:

- AA-LCR **69.3%** at 256K (BenchLeader Long context 61) — **no MRCR 1M/RULER at 1M reported** (256K model)

### Normalized scores (1–100)

- **Tool use: 74/100.** τ³-Telecom 91.4–94.2% with SWE-bench 77.6% shows best-in-class agentic for dense 128B, but Terminal Hard 33.3% and GDPval 18.8% cap below 85 frontier agentic.
- **Reasoning: 65/100.** GPQA 74.8% with AA Index 14 and HLE 13.8% map to mid reasoning for curated dense model; IFBench 68.8% helps but CritPt 0.0% and low Omniscience 18.4% cap well below frontier 85+.
- **Context window: 76/100.** 262K verified lands in 256K tier (256K ≈ 76); AA-LCR 69.3% confirms usable retrieval but sub-256K+ rivals and no 1M tier caps below 90.
- **Multimodal: 65/100.** Text + image in, text out with custom vision encoder covers image-in band (60–70); no video/audio ingest and text-only output caps at 65.
- **Coding: 71/100.** SWE-bench 77.6% replaces Devstral 2 with solid unified coding, Coding Index 46.9 and BenchLeader coding 41 suggest mid coding; SciCode 40.2% caps below flagship coding 80+.
- **Cost efficiency: 55/100.** $1.50/$7.50 paid-only with Modified MIT self-host savings but expensive per-token (median $0.07/$0.22 for open weights) → low cost efficiency.
- **Overall Score: 70/100.** Mean of the five non-cost dims (74+65+76+65+71)/5 = 70.2 → 70; best-fit as dense 128B unified agentic coding pick for 256K workflows where single-weight simplicity matters — cheaper MoE or 1M models outrank on cost/context.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Mistral docs 2026-04-29, HuggingFace Mistral-Medium-3.5-128B, Artificial Analysis 14.9 Index, OpenRouter benchmarks, BenchLeader 51.3 2026-09-15, LLM-Stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
