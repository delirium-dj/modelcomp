# DeepSeek V4 Pro — findings by Mercury 3

- Source: DeepSeek/DeepSeek-V4-Pro
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Pro (snapshot 0813 tracked by AA/BenchLM)
- **Short description:** DeepSeek's open-weights (MIT) frontier MoE (preview of the V4 series, published 2026-08-13 as 0813): 1.6T total/49B active with CSA+HCA hybrid attention for 1M context (27% FLOPs / 10% KV of V3.2), Muon optimizer, domain-expert consolidation — the best open-source model at release per DeepSeek's claim.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`), open weights on Hugging Face; 9 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-08-13 (0813 snapshot); knowledge cutoff not published.
- **IDs:** `deepseek-ai/DeepSeek-V4-Pro` (HF; `deepseek-v4-pro` API; non-think/Think High/Think Max reasoning modes).
- **Context window:** 1,000,000 tokens (1M) total; max output 384,000 (models.dev).
- **Modalities:** text input, text output; reasoning (three effort modes); tool calls; structured outputs; no native vision.
- **Pricing (as of 2026-11-03):** $1.32 input / $3.96 output per 1M tokens (AA; 97% cache discount), blended ~$0.69; open weights free.
- **Architecture:** 1.6T total / 49B active MoE; MIT license, open weights.

### Raw benchmarks found

Agent / tool use (Max mode, DeepSeek TR / AA / BenchLM):

- Terminal-Bench 2.1: **87.9%** (DeepSeek API table) — note conflict: TB2.0 67.9% (TR), TB2.1-Vals 54.7%
- τ²-bench: **96.2%** (AA); GDPval-AA: **1554 Elo** (AA normalized 54.5%); MCP Atlas: **73.6%**; Toolathlon-Verified: 74.1% / Toolathlon 51.8%; CyberGym: **83.3%**; AA Agentic Index: 49.6%; APEX-Agents-AA: 24.3%; AutomationBench: 31.8%; Agents' Last Exam: 25.7%; EnterpriseOps-Gym: 49.6%; Tau3-Banking: 39.6%; Finch: 67.4%

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (TR) / 92.8% (AA) / 92.4% (Vals); HLE: **42.7%** (API table; AA 41.0%); MMLU-Pro: 87.5% (TR; AA 87.6% class); SimpleQA-Verified: 57.9%; Chinese-SimpleQA: 84.4%
- ARC-AGI-1: **90.00%**; ARC-AGI-2: **61.3%** (ARC Prize); AA-LCR: **80.3%**; CritPt: 18.0%; AA II: 23 (#13/23 open, AA); AA-Omniscience: accuracy 49.1%, hallucination rate **94.1%** (very high)

Coding:

- LiveCodeBench: **93.5%** (TR) / 87.5% (Vals); Codeforces rating: **3206**; SWE-bench Verified: **80.6%**; SWE Pro: 55.4%; SWE Multilingual: 76.2%; DeepSWE: 62.7%; NL2Repo: 61.5%; DSBench-FullStack: 71.1% / Hard 67.2%; AA Coding Index: 68.8%; AA-SciCode: 51.0%; Vibe Code Bench: 49.93%

Long context:

- 1M window; MRCR 1M: **83.5%**; CorpusQA 1M: **62.0%** (TR); AA-LCR 80.3%.

Multimodal:

- text-only in/out; Design Arena 1258 Elo (code-generated design, not native vision).

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 87.9%, τ² 96.2%, MCP Atlas 73.6%, CyberGym 83.3% — strong; capped by APEX 24.3%, AutomationBench 31.8%, and Vals TB2.1 54.7%.
- **Reasoning: 86/100.** GPQA 92.8% (AA), ARC-AGI-2 61.3%, LCR 80.3%, II 23; capped by HLE 41–43%, CritPt 18%, and hallucination rate 94.1%.
- **Context window: 92/100.** 1M with verified MRCR 83.5% and CorpusQA 62% at 1M depth.
- **Multimodal: 50/100.** Text-only input — no native vision/audio/video.
- **Coding: 88/100.** LiveCodeBench 93.5%, SWE Verified 80.6%, Codeforces 3206, multilingual 76.2%; capped by SWE Pro 55.4% and AA-SciCode 51%.
- **Cost efficiency: 82/100.** $1.32/$3.96 with 97% cache discount — fair for 1.6T open; 81.9 t/s, 120M-token verbosity.
- **Overall Score: 81/100.** Mean of (87+86+92+50+88)/5 = 80.6 → 81. An elite open coding/reasoning engine; text-only input and high hallucination rate are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (DeepSeek-V4 technical report/model card, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1 87.9 vs 54.7) listed side by side.
- Reference URLs:
  - [DeepSeek-V4-Pro model card + technical report (Hugging Face)](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
  - [DeepSeek V4 Pro 0813 — Artificial Analysis model page ($1.32/$3.96, 1M, 1.6T/49B)](https://artificialanalysis.ai/models/deepseek-v4-pro)
  - [DeepSeek V4 Pro 0813 — BenchLM benchmark aggregation](https://benchlm.ai/models/deepseek-v4-pro-0813)
  - [DeepSeek V4 Pro 0813 — Vals AI model page](https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813)
  - [ARC Prize results — DeepSeek V4 Pro 0813](https://arcprize.org/results/deepseek-v4-pro-0813)
