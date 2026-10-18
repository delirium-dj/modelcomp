# Gemini 3.1 Pro — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-17 (UTC)
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

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 64.7, #37/954, 48 of 639) and AA as of 2026-10-17.

- **Tool use: 58/100.** (Revised DOWN from 80.) τ²-bench 87.1% (revised down from 95.6%, below 90% frontier), Terminal-Bench 2.1 (Vals) 70.8% (revised down from 83.8%), GDPval-AA Elo 904 (below mid-tier frontier ~900-1200), GDPval-AA normalized 14.6% (CRITICAL drop from 31.0%), AA Agentic Index 10.3% (NEW, very low). Capped by τ²-bench below 90 frontier, GDPval-AA normalized 14.6% (severe), AA Agentic Index 10.3% (severe), no GDP.pdf, no TB-4.0, no OSWorld, no SWE-bench, no ApprenticeBench.

- **Reasoning: 82/100.** (Revised DOWN from 85.) GPQA Diamond 95.5% (Vals) / 94.1% (AA — ≥90 frontier), HLE w/o tools 45.4% (revised down from 54.8%, now below 40% frontier), AA-HLE 47.0% (revised down from 52.9%), MMLU-Pro (Vals) 91.0%, AA-MMLU-Pro 89.8%, AA Global-MMLU-Lite 93.2%, AA-LCR 82.0% (NEW). Capped by Intelligence Index 29.7 (well below ~60 frontier ref), AA-HLE 47.0% (below 50% frontier), CritPt 17.7% (NEW, low), no ARC-AGI-1 (removed from BenchLM page).

- **Context window: 95/100.** 2M-token input window (top tier, ≥1M). No MRCR/RULER retrieval-at-length figure ≥98% at 512K+ published for 100. 64K max output noted as caveat.
- **Multimodal: 85/100.** Text, image, audio, video and PDF input with Deep Think reasoning; text output only. MMMU 87.2%, MMMU-Pro 81%, CharXiv 88.7%, VideoMMMU 87.6%, MathVision 86.6%, V* 88.0%, RealWorldQA 83.3%, ScreenSpot Pro 84.4%, AA-MMMU-Pro 82.4%, Design Arena 1254. Capped by text-only output, no video output.

- **Coding: 75/100.** (Revised DOWN from 80.) LiveCodeBench 88.5% (Vals) (near ≥90 frontier), SWE-bench (Vals) 78.8%, AA-SciCode 58.7% (≥55% frontier), LiveCodeBench Pro 82.9% (NEW). AA Coding Index 68.8% (CRITICAL drop from 76.9%, now below 70% frontier, was previously above). Capped by AA Coding Index 68.8%, no SWE-bench Verified/Pro published, Vibe Code Bench 32.0% (very low).

- **Cost efficiency: 90/100.** Free tier on Google AI Studio/Zen ($0 in/out, usage-limited; content may be used to improve Google products); paid $2/$12 per 1M with 90% cache discount.
- **Overall Score: 79/100.** (Revised DOWN from 85.) Half-up mean: (58+82+95+85+75)/5 = 395/5 = 79. **Best-fit:** cost-efficient multimodal reasoning and long-context agent workhorse; GPQA 95.5% (Vals, ≥90 frontier) and strong vision benchmarks lead reasoning; cap: Intelligence Index 29.7 (well below ~60 frontier), τ²-bench dropped to 87.1 (below 90 frontier), GDPval-AA normalized 14.6% (severe), AA Coding Index 68.8% (below 70 frontier). Free on Google AI Studio; paid $2/$12.
- **Overall Score: 79/100.** (Revised DOWN from 85.) Half-up mean: (58+82+95+85+75)/5 = 395/5 = 79. **Best-fit:** cost-efficient multimodal reasoning and long-context agent workhorse; GPQA 95.5% (Vals, ≥90 frontier) and strong vision benchmarks lead; cap: Intelligence Index 29.7 (well below ~60 frontier), τ²-bench dropped to 87.1 (below 90 frontier), GDPval-AA normalized 14.6% (severe), AA Coding Index 68.8% (below 70 frontier). Free on Google AI Studio; paid $2/$12.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gemini-3.1-pro` for overall rank/score (#37/954, 64.7) and 48 benchmark rows including GPQA 95.5% (Vals), τ²-bench 87.1%, GDPval-AA Elo 904, GDPval-AA normalized 14.6%, AA Agentic Index 10.3%, LiveCodeBench 88.5%, SWE-bench 78.8%, AA-SciCode 58.7%, AA Coding Index 68.8%; AA model page `https://artificialanalysis.ai/models/gemini-3-1-pro-preview` for Intelligence Index 29.7, pricing $2/$12; Google DeepMind model card for vision benchmarks). Scores are normalized 1–100 interpretations per model-comparison.md v4. Zero-influence: did not read peer `*.md` findings files during research.
- Key revisions from Oct 10 to Oct 16 re-verification: BenchLM overall dropped 72.87→64.7 (rank #25→#37/954 as pool grew 889→954, 42→48 benchmarks); τ²-bench 95.6→87.1% (below 90% frontier, source updated to Meta AI Muse Spark comparison chart); GDPval-AA normalized CRITICAL drop 31.0→14.6%; AA Agentic Index new at 10.3% (very low); AA Coding Index 76.9→68.8% (below 70% frontier); AA-HLE 52.9→47.0%; GPQA-D 95.5→94.3% (Meta comparison); new benchmarks: AA-GPQA-D 94.1%, AA-LCR 82.0%, CritPt 17.7%, AA-IFBench 77.1%, AA-Omniscience 31.9%/54.9%/50.9%, DeepSearchQA 69.7%, Claw-Eval 57.8%, HealthBench Hard 20.6%, FrontierMath v2 59.649%/26.829%, MedXpertQA 71.5%, LiveCodeBench Pro 82.9%, Vibe Code Bench 32.03%, Video-MME 88.4/87.7%, ScreenSpot Pro 84.4%, MMMU 87.2%, MMMU-Pro 81%; Intelligence Index confirmed at 29.7% (my prior summary notes incorrectly stated 50.0→28.0; the Oct 10 file already had 29.7%). Normalized scores revised: Tool 80→58 (τ²-bench + GDPval-AA norm + AA Agentic Index all weakened), Reasoning 85→82 (HLE/AA-HLE dropped, ARC-AGI-1 removed), Coding 80→75 (AA Coding Index below frontier). Overall 85→79 (aligns with BenchLM 64.7).
- Re-verification (2026-10-17): Oct 16→17 re-verification confirmed BenchLM overall 64.7 (#37/954, 48/639) unchanged; all 48 benchmark scores and dimension scores unchanged; Overall retained at 79.

---
