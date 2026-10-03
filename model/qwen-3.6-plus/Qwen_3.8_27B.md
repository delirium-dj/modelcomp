# Qwen 3.6 Plus — findings by Qwen 3.8 27B

- Source: Alibaba/Qwen — Qwen3.6-Plus
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's hosted "Plus" tier of the Qwen3.6 generation — a 1M-context, reasoning multimodal workhorse (hybrid linear attention + sparse MoE per OpenRouter). Now deprecated on Artificial Analysis in favor of Qwen3.7 Plus.
- **Provider / access:** Alibaba first-party API (`qwen3.6-plus`); OpenRouter `qwen/qwen3.6-plus` ($0.325/$1.95 per 1M); Chat Completions API. No OpenCode Zen ID verified in this pass.
- **Release / knowledge:** Released April 2, 2026 (Artificial Analysis FAQ); knowledge cutoff not verified in this pass.
- **IDs:** `qwen3.6-plus` (Alibaba API); `qwen/qwen3.6-plus` (OpenRouter); no Free ID on Zen verified in this pass.
- **Context window:** 1,000,000 total (OpenRouter + Artificial Analysis); max output limit not verified in this pass.
- **Modalities:** text + image + video in, text out (AA + OpenRouter architecture); reasoning (thinking on by default); tool calls; JSON mode.
- **Pricing (as of 2026-10-03):** first-party $0.50 in / $3.00 out per 1M, 90% cache discount, blended ~$0.43 (Artificial Analysis, Alibaba API); OpenRouter $0.325/$1.95 per 1M.
- **Architecture:** Proprietary; parameter count undisclosed by Alibaba; hybrid architecture combining linear attention with sparse MoE routing per OpenRouter.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **61.6%** (Qwen blog "Qwen3.6-Plus" via BenchLM)
- Terminal-Bench 2.1 (Vals): **53.2%** (Vals AI leaderboard)
- Tau3-bench: **70.7%** (Qwen blog via BenchLM)
- Tau2-bench: **97.7%** (Artificial Analysis)
- GDPval-AA: **1066** (Artificial Analysis; mid-band ref 900–1200)
- Claw-Eval: **58.8%** (Claw-Eval leaderboard via BenchLM)
- Toolathlon: **39.8%**; MCP Atlas: **48.2%**; VITA-Bench: **44.3%**; DeepPlanning: **41.5%**; MCP-Tasks: **74.1%**; WideResearch: **74.3%**; QwenClawBench: **57.2%** (Qwen blog via BenchLM)
- SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Qwen blog via BenchLM); AA-GPQA Diamond **88.2%** (AA); Vals 87.4%
- HLE: **28.8%** (Qwen blog via BenchLM); AA-HLE **27.8%** (AA)
- LCR: **78.3%** (AA)
- CritPt: **2.9%** (AA)
- Artificial Analysis Intelligence Index: **27** (estimate, #108/224, above price-tier median 26 — independent evaluation still marked forthcoming by AA)
- Omniscience Accuracy / Hallucination Rate: **26.4% / 34.6%** (AA)
- MMLU-Pro **88.5%**, SuperGPQA **71.6%**, AIME26 **95.3%**, HMMT Feb 2026 **87.8%**, FrontierMath v2 T1–3 **26.2%** (Qwen blog via BenchLM; Epoch)
- IFEval **94.3%**, IFBench **75.8%** (Qwen blog via BenchLM)
- Multimodal (multimodal input): MMMU **86.0%**, MMMU-Pro **78.8%**, MathVision **88.0%**, VideoMMMU **84.0%**, CharXiv **81.5%**, V\* **96.9%**, ScreenSpot Pro **68.2%** (Qwen blog via BenchLM); AA-MMMU-Pro **78.0%** (AA)

Coding:

- SWE-bench Verified: **78.8%** (Qwen blog via BenchLM); Vals 73.4%
- SWE-bench Pro: **56.6%**; SWE Multilingual: **73.8%** (Qwen blog via BenchLM)
- LiveCodeBench v6: **87.1%** (Qwen blog via BenchLM); Vals 86.0%
- Vibe Code Bench: **25.56%** (Vals v1.1)
- AA Coding Index: **54.5%** (Artificial Analysis)
- SciCode / DeepSWE: no verified public score found

Long context:

- AI-Needle **68.3%**, LongBench v2 **62%** (Qwen blog via BenchLM); AA-LCR **78.3%** (AA); no MRCR/RULER at 1M window published

### Normalized scores (1–100)

- **Tool use: 66/100.** TB2.0 61.6% / TB2.1-Vals 53.2% sit mid-band (45–60% → 50–70) and GDPval-AA 1066 is mid, but Tau3 70.7% and Tau2 97.7% clear the frontier refs; capped by Claw-Eval 58.8% and Toolathlon 39.8%.
- **Reasoning: 68/100.** GPQA 88–90% is near-frontier and LCR 78.3% above mid, but HLE ~28%, CritPt 2.9% and AA Index 27 (methodology mid-band 20–35) cap it; strong math (AIME26 95.3%).
- **Context window: 95/100.** 1M total context (AA + OpenRouter) = >=1M band (95–100); no verified 512K+ retrieval to award 100.
- **Multimodal: 84/100.** text + image + video in, text out (+video in = 75–90 band) with verified MMMU 86.0 / MathVision 88.0 / VideoMMMU 84.0; no audio input or non-text output.
- **Coding: 74/100.** SWE-bench Verified 78.8%, SWE-Pro 56.6%, LiveCodeBench v6 87.1% place it solidly mid-upper, but AA Coding Index 54.5% and absent DeepSWE/SciCode public numbers cap it below the 90–100 frontier band.
- **Cost efficiency: 88/100.** $0.50/$3.00 per 1M first-party (90% cache discount; OpenRouter $0.325/$1.95) sits just above methodology's ~$0.60/$2.20 → ~92 band on output pricing.
- **Overall Score: 77/100.** (66 + 68 + 95 + 84 + 74) / 5 = 77.4 → 77. Best fit: high-volume 1M-context multimodal document/agent workloads where price-per-task matters; superseded by Qwen3.7 Plus for new deployments.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-10-03
- Method: public internet research (BenchLM model page qwen3-6-plus, 2026-10-02, citing the Qwen "Qwen3.6-Plus" blog table and Vals AI leaderboards; Artificial Analysis model page qwen3-6-plus; OpenRouter model spec); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
