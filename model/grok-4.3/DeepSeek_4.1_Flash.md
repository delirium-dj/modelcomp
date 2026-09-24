# Grok 4.3 — findings by DeepSeek 4.1 Flash

- Source: xAI / SpaceXAI / Grok 4.3 (`grok-4.3`, alias `grok-4.3-latest`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3 (reasoning-effort selectable: none / low / medium / high / xhigh, default low)
- **Short description:** xAI's April-2026 reasoning model, positioned as a cheaper, faster successor to Grok 4.20 with a large agentic jump (GDPval-AA +321 Elo) and roughly 40%/60% lower input/output pricing. Superseded in its own line by Grok 4.5/4.6/4.7.
- **Provider / access:** xAI API (`grok-4.3`, `grok-4.3-latest`), OpenAI-compatible Chat Completions plus Batch API; function calling and structured outputs; three API providers tracked by Artificial Analysis. Tracked Zen id `opencode/grok-4.3`. **Folder-meta correction:** this repo's `meta.json` still carries placeholder values ("128K total", "Standard pricing"); verified specs are a **1,000,000-token** context and **$1.25 / $2.50** per 1M (I did not modify `meta.json`).
- **Release / knowledge:** launched 2026-04-30 (Artificial Analysis article and FAQ); BenchmarkList records 2026-05-06. Knowledge cutoff not published.
- **Context window:** 1,000,000 tokens (xAI docs). Requests above 200K tokens are billed at higher rates. Max output not published.
- **Modalities:** text + image in → text out (AA confirms no audio/video input and no image output).
- **Pricing (as of 2026-09-24):** $1.25 in / $2.50 out per 1M; cached input $0.20 per 1M (~84% cache discount); AA blended estimate $0.64 per 1M and $0.17 per Intelligence-Index task (its best-ranked dimension: #5 of 211 on cost).
- **Architecture:** proprietary; no open weights, parameter count undisclosed. Rate limits 37 req/s and 10M tokens/min.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **Elo 1500** (Artificial Analysis, up 321 from Grok 4.20 0309 v2's 1179) — a third-party harness on BenchmarkList records **1,099** (77th percentile)
- τ²-Bench Telecom: **98%** (AA) / **Tau2-Bench Telecom 97.7%** (BenchmarkList, rank 9 of 332); IFBench: **81%**
- Terminal-Bench 2.0: **43.4%** (57th percentile); Terminal-Bench 2.1: **41.9%**; Terminal-Bench Hard: **37.9%** (88th percentile, rank 39 of 326)
- APEX-Agents-AA: **17.0%**; Agents' Last Exam: **7.2%** (rank 31 of 32); Vending-Bench 2: **35.26** (rank 49 of 54); Workspace-Bench: **36.9%**; ITBench-AA: **32.7%**; Tau3-Banking: **12.4%**; AA-Briefcase: **760**

Reasoning / knowledge:

- GPQA Diamond: **91.4%** (BenchmarkList, 87th percentile, rank 16 of 117); Humanity's Last Exam: **37.2%** (92nd percentile, rank 39 of 466)
- Artificial Analysis Intelligence Index: **53 at launch** (2026-04-30; +4 versus Grok 4.20 0309 v2's 49, placing it just above Muse Spark and Claude Sonnet 4.6). The current AA profile (high effort, index v4.3.2, deprecated) records **25** (#109 of 211, median 26)
- AIIQ Composite IQ: **125** (90th percentile); ObviousBench: **98.6%**; AA-Omniscience: accuracy +8 points but non-hallucination rate −8 points versus Grok 4.20 0309 v2 (AA)
- Epoch Capabilities Index: **130.69** (#84 of 398)
- Speed / verbosity: **123.2 tokens/s** (#31 of 211), TTFT 21.24 s, 87M output tokens on the AA index (AA)

Multimodal:

- Design Arena: **Elo 1220** (64th percentile); Chartography (professional chart reading): **12.9%**; Blueprint-Bench 2 (floor-plan spatial reasoning): **0.477** (rank 24 of 24)
- Image input only — no audio or video input, no image output (AA specs)

Coding:

- SWE-bench Verified: **71.4%** (BenchmarkList third-party harness, 41st percentile, rank 43 of 72); LiveCodeBench: **84.5%** (75th percentile, rank 31 of 123); SciCode: **47.3%** (91st percentile, rank 44 of 458)
- ALE-Bench (AtCoder heuristic programming): **944.17** (73rd percentile); BLXBench: **85.5%** (rank 1 of 25); Vibe Code Bench v1.1: **19.4%**; IOI: **15.3%**; WebDev Arena: **1356.77**; Code Migration: **6.8%** (9th percentile)

Long context:

- AA-LCR v1.1: **68.3%** (BenchmarkList) — the only long-context retrieval number found for the 1M window
- MRCR / RULER at fixed window lengths: no verified public score found

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong where agent work actually pays off (GDPval-AA Elo 1500, τ²-Bench Telecom 97.7–98%, IFBench 81%, Terminal-Bench 2.0 43.4%), but the long-horizon tail is weak — APEX-Agents-AA 17.0%, Agents' Last Exam 7.2%, Vending-Bench 2 35.26, Workspace-Bench 36.9% — which caps it.
- **Reasoning: 80/100.** GPQA Diamond 91.4% (rank 16 of 117) and HLE 37.2% (rank 39 of 466) are strong, and the launch Intelligence Index of 53 beat Muse Spark and Claude Sonnet 4.6; capped by the current AA profile value of 25 (below the September-2026 median of 26) and by the omniscience hallucination regression.
- **Context window: 88/100.** A verified 1M-token window, top tier, backed by AA-LCR 68.3%; capped by higher billing above 200K tokens and by the absence of MRCR/RULER evidence.
- **Multimodal: 45/100.** Text + image in with text out: Design Arena Elo 1220 is mid-field, while Chartography 12.9% and Blueprint-Bench 2 at the bottom of its field show the limits, and there is no audio/video input or image output.
- **Coding: 74/100.** SWE-bench Verified 71.4%, LiveCodeBench 84.5%, SciCode 47.3% (91st percentile) and BLXBench 85.5% (rank 1 of 25) are solid; Vibe Code Bench 19.4% and Code Migration 6.8% cap it.
- **Cost efficiency: 74/100.** $1.25 / $2.50 per 1M with an ~84% cache discount and one of the best cost-per-Intelligence-Index-task figures in the AA field, but no free tier and premium billing above 200K context.
- **Overall Score: 72.6/100.** Mean of the five quality dimensions (76 + 80 + 88 + 45 + 74) / 5 = 72.6; best fit is fast, well-priced agentic work at 1M context, not multimodal or worst-case agent loops.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-24
- Method: public internet research — xAI's Grok 4.3 model page (context window, pricing and cache rate, modalities, reasoning efforts, rate limits), the Artificial Analysis Grok 4.3 launch analysis (Intelligence Index 53, GDPval-AA Elo 1500, τ²-Bench 98%, IFBench 81%, pricing deltas) and its Grok 4.3 (high) profile (index 25, deprecation, speed, TTFT, verbosity), plus BenchmarkList third-party harness rows for GPQA Diamond, HLE, coding, agentic and AA-LCR. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
