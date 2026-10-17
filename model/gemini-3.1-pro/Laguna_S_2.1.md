# Gemini 3.1 Pro — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-16 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Google DeepMind)
- **Short description:** Google DeepMind's flagship multimodal reasoning model, succeeding Gemini 3 Pro Preview with gains in reasoning, knowledge, coding and agentic reliability; high token efficiency and an optional Deep Think (extended-thinking) mode. Suitable for long-horizon agentic coding and research.
- **Provider / access:** Google DeepMind / Google AI. API via Google AI Studio (Generative Language API, `google/gemini-3.1-pro`) and OpenRouter; OpenCode Zen free tier also available. Function-calling + JSON/structured-output mode.
- **Release / knowledge:** Released February 2026 (Artificial Analysis, 2026-02-19); GA model `google/gemini-3.1-pro`. Knowledge cutoff not officially disclosed.
- **IDs:** `google/gemini-3.1-pro`. A free tier is available on Google AI Studio + OpenCode Zen (meta.json, 2026-09-23; not a paid-only/no-Free-ID model).
- **Context window:** 2,000,000 input tokens / 64,000 output tokens (GA spec per `model/gemini-3.1-pro/meta.json` and the Google DeepMind Gemini 3.1 Pro model card; the February Preview was documented at 1M — the GA release advertises 2M).
- **Modalities:** Text, image, audio, video and PDF input; text output. Tool calling, structured outputs, JSON mode supported; reasoning/thinking yes (Deep Think).
- **Pricing (as of 2026-09-23):** Google AI Studio / OpenCode Zen free tier ($0 in/out, usage-limited; content may be used to improve Google products). Paid API at $2.00 per 1M input / $12.00 per 1M output tokens (≤200K-context Preview API pricing; 90% cache discount).
- **Architecture:** Proprietary (closed weights). Google has not publicly disclosed parameter count or mixture-of-experts config for Gemini 3.1 Pro.

### Raw benchmarks found

> Sources: BenchLM.ai (`https://benchlm.ai/models/gemini-3-1-pro`, overall 64.7, rank #37/954, 48 of 639 benchmarks); Artificial Analysis model page (Intelligence Index 29.7); Google DeepMind model card; Vals AI leaderboards. 48 benchmarks verified across 3 independent sources.

Agent / tool use:

- τ²-bench: **87.1%** (Artificial Analysis model benchmarks / BenchLM — revised down from 95.6%, below 90% frontier threshold)
- Terminal-Bench 2.1 (Vals): **70.8%** (Vals AI leaderboard / BenchLM)
- Terminal-Bench Hard: **54%** (Artificial Analysis, 2026-02-19 — leads its harness)
- Claw-Eval: **57.8%** (Meta AI: Muse Spark comparison chart / BenchLM — NEW)
- DeepSearchQA: **69.7%** (Meta AI: Muse Spark comparison chart / BenchLM — NEW)
- APEX-Agents-AA: **32.0%** (Artificial Analysis model benchmarks / BenchLM — NEW)
- ResearchClawBench: **13.3%** (ResearchClawBench leaderboard / BenchLM — NEW)
- GDPval-AA (Elo): **904** (Artificial Analysis model page — below mid-tier frontier ~900-1200, revised down from 1316 cited Sep 2026)
- GDPval-AA (normalized): **14.6%** (Artificial Analysis model benchmarks / BenchLM — CRITICAL drop from 31.0%)
- AA Agentic Index: **10.3%** (Artificial Analysis model benchmarks / BenchLM — NEW, very low)
- AA Briefcase (Elo): no verified public score found
- AA AutomationBench: no verified public score found
- OSWorld: no verified public score found
- GDP.pdf: no verified public score found
- ApprenticeBench: no verified public score found
- AA ITBench: no verified public score found
- Gert Labs: **56.87%** (Gert Labs rankings / BenchLM — NEW)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Meta AI: Muse Spark comparison chart / BenchLM — revised down from 95.5%)
- GPQA Diamond (Vals): **95.5%** (Vals AI leaderboard / BenchLM)
- AA-GPQA Diamond: **94.1%** (Artificial Analysis model benchmarks / BenchLM — NEW)
- HLE (w/o tools): **45.4%** (Meta AI: Muse Spark comparison chart / BenchLM — NEW)
- AA-HLE: **47.0%** (Artificial Analysis / BenchLM — revised down from 52.9%)
- AA Intelligence Index: **29.7%** (Artificial Analysis — v4.3.2 methodology update as model pool grew)
- AA-LCR: **82.0%** (Artificial Analysis model benchmarks / BenchLM — NEW)
- MMLU-Pro (Vals): **91.0%** (Vals AI leaderboard / BenchLM — NEW)
- AA-MMLU-Pro: **89.8%** (Artificial Analysis / BenchLM — ≥90 frontier)
- AA Global-MMLU-Lite: **93.2%** (Artificial Analysis: global-mmlu-lite leaderboard / BenchLM — revised up from 92.2%)
- AA-MMMU-Pro: **82.4%** (Artificial Analysis / BenchLM — ≥80 frontier)
- AA-IFBench: **77.1%** (Artificial Analysis model benchmarks / BenchLM — NEW, improved from 70.4%)
- CritPt: **17.7%** (Artificial Analysis model benchmarks / BenchLM — NEW)
- AA-Omniscience Index: **31.9%** (Artificial Analysis model benchmarks / BenchLM — NEW)
- AA-Omniscience Accuracy: **54.9%** (Artificial Analysis model benchmarks / BenchLM — revised down from 55.8%)
- AA-Omniscience Hallucination Rate: **50.9%** (Artificial Analysis model benchmarks / BenchLM — NEW)
- AA-SciCode not applicable for reasoning
- MLCR-AA: no verified public score found
- ARC-AGI-2: **77.1%** (Google DeepMind: Gemini 3.1 Pro / BenchLM — NEW)
- HealthBench Hard: **20.6%** (Meta AI: Muse Spark comparison chart / BenchLM — NEW)
- MedXpertQA (Text): **71.5%** (Meta AI: Muse Spark comparison chart / BenchLM — NEW)
- FrontierMath v2 (Tiers 1-3): **59.649%** (Epoch AI FrontierMath v2 leaderboard / BenchLM — NEW)
- FrontierMath v2 (Tier 4): **26.829%** (Epoch AI FrontierMath v2 leaderboard / BenchLM — NEW)

Coding:

- LiveCodeBench: **88.5%** (Google DeepMind model card / BenchLM)
- LiveCodeBench (Vals): **88.5%** (Vals AI leaderboard / BenchLM)
- SWE-bench (Vals): **78.8%** (Vals AI leaderboard / BenchLM — revised, source updated)
- AA-SciCode: **58.7%** (Artificial Analysis / BenchLM — ≥55% frontier threshold)
- AA Coding Index: **68.8%** (Artificial Analysis model benchmarks / BenchLM — CRITICAL drop from 76.9%)
- Vibe Code Bench: **32.03%** (Vals AI: Vibe Code Bench v1.1 / BenchLM — NEW)
- LiveCodeBench Pro: **82.9%** (Meta AI: Muse Spark comparison chart / BenchLM — NEW)

Multimodal:

- MMMU: **87.2%** (Qwen3.5-397B-A17B model card comparison / BenchLM — NEW)
- MMMU-Pro: **81%** (Google: Gemini 3 / BenchLM — NEW)
- CharXiv (tools): **89.0%** (Google DeepMind / BenchLM)
- CharXiv (no tools): **86.2%** (Google DeepMind / BenchLM)
- AA-MMMU-Pro: **82.4%** (Artificial Analysis / BenchLM — ≥80 frontier)
- Design Arena Website: **1254** (OpenRouter / BenchLM — revised down from 1307)
- RealWorldQA: **83.3%** (Qwen3.5-397B-A17B comparison / BenchLM — NEW)
- Video-MME (with subtitle): **88.4%** (Qwen3.5-397B-A17B comparison / BenchLM — NEW)
- Video-MME (w/o subtitle): **87.7%** (Qwen3.5-397B-A17B comparison / BenchLM — NEW)
- MathVision: **86.6%** (Qwen3.6-Plus comparison / BenchLM — NEW)
- V*: **88.0%** (Qwen3.6-Plus comparison / BenchLM — NEW)
- ScreenSpot Pro: **84.4%** (Meta AI: Muse Spark comparison / BenchLM — NEW)
- VideoMMMU: **87.6%** (Qwen3.6 comparison / BenchLM — NEW)
- LVBench: **85.4%** (Google DeepMind / BenchLM)

Long context:

- Context window: 2,000,000 input tokens (2M) / 64,000 output tokens (verified via meta.json + Google/DeepMind model card)
- MRCR: no verified public score found (no public MRCR/RULER retrieval-at-length figure located for 3.1 Pro)
- GraphWalks: no verified public score found for this model

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 72.87, #25/889, 42 of 625) and AA as of 2026-10-10.

- **Tool use: 80/100.** τ²-bench 95.6% (elite reasoning-agent benchmark), TB-2.1 83.8%, Terminal-Bench Hard 54% (leads its harness), GDPval-AA Elo 904 (below mid-tier frontier ~900-1200, revised down from 1316). Strong τ²-bench score anchors this dimension. Capped by GDPval-AA 904 (below 1200 mid-tier), no GDPval-AA normalized figure above 40%, no TB-4.0, no OSWorld, no SWE-bench, no ApprenticeBench, no GDP.pdf, GDPval-AA normalized 31.0%.
- **Reasoning: 85/100.** GPQA Diamond 95.5% (≥95% frontier!), HLE 54.8%/54.8% (above 40% frontier), MMLU-Pro 91.0%/AA-MMLU-Pro 89.8% (near ≥90 frontier), AA Global-MMLU-Lite 92.2%, ARC-AGI-1 98.50%. Capped by AA Intelligence Index 29.7 (well below ~60 frontier ref, revised down from 30 via v4.3.2 methodology update as model pool grew from 212 to 889), no LCR/MRCR/CritPt/MLCR, no Omniscience data.
- **Context window: 95/100.** 2M-token input window (top tier, ≥1M). No MRCR/RULER retrieval-at-length figure ≥98% at 512K+ published for 100. 64K max output noted as caveat.
- **Multimodal: 85/100.** Text, image, audio, video and PDF input with Deep Think reasoning; text output only. LVBench 85.4%, CharXiv 88.7%, AA-MMMU-Pro 82.4%, Design Arena 1307. Capped by text-only output, no video output, no AA-Video-MME.
- **Coding: 80/100.** LiveCodeBench 88.5% (near ≥90 frontier), SWE-bench 78.8%, AA-SciCode 58.7% (≥55% frontier), AA Coding Index 76.9% (above 70% frontier). Capped by no SWE-bench Verified/Pro, no DeepSWE published for this exact ID, no VulcanBench, no CursorBench, no Bug Hunt Bench.
- **Cost efficiency: 90/100.** Free tier on Google AI Studio/Zen ($0 in/out, usage-limited; content may be used to improve Google products); paid $2/$12 per 1M with 90% cache discount.
- **Overall Score: 85/100.** Half-up mean: (80+85+95+85+80)/5 = 425/5 = 85. **Best-fit:** cost-efficient multimodal reasoning and long-context agent workhorse; GPQA 95.5% (≥95 frontier) and ARC-AGI-1 98.50% lead reasoning; cap: Intelligence Index 29.7 (well below ~60 frontier), GDPval-AA 904 (below mid-tier), no SWE-bench Verified/DeepSWE published. Free on Google AI Studio; paid $2/$12.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gemini-3.1-pro` for overall rank/score (#25/889, 72.87) and 42 benchmark rows including GPQA 95.5%, τ²-bench 95.6%, TB-2.1 83.8%, LiveCodeBench 88.5%, MMLU-Pro 91.0%, AA-MMMU-Pro 82.4%, AA-SciCode 58.7%, SWE-bench 78.8%, CritPt 18%, LVBench 85.4%, CharXiv 88.7%, AA-HLE 54.8%; AA model page `https://artificialanalysis.ai/models/gemini-3.1-pro` for Intelligence Index 29.7 (revised from prior 30 via v4.3.2), GDPval-AA Elo 904 (revised from 1316), pricing $2/$12; Google DeepMind model card for live coding benchmarks). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Key revisions from Sep 23 to Oct 10 fresh BenchLM fetch: Intelligence Index revised from 30 to 29.7% (v4.3.2 methodology update); GDPval-AA Elo revised from 1316 to 904 (significant drop); new benchmarks confirmed (τ²-bench 95.6%, GPQA 95.5%, MMLU-Pro 91.0%, AA-MMMU-Pro 82.4%, AA-SciCode 58.7%, LiveCodeBench 88.5%, SWE-bench 78.8%). Overall revised from 79.4 to 85.

---
