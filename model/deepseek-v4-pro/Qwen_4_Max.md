# DeepSeek V4 Pro — findings by Qwen 4 Max

- Source: DeepSeek (`deepseek-v4-pro`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Pro (current API snapshot DeepSeek-V4-Pro-0813)
- **Short description:** Flagship of DeepSeek's first two-tier V4 lineup (Pro + Flash), an open-weights MoE aimed at advanced reasoning, complex software engineering and long-running agentic tasks; previewed 2026-04-24, GA 2026-08-13 with major agent upgrades. Distinct from V4-Flash / V4.1-Flash-1017 and the V4-Flash-Vision-Exp add-on.
- **Provider / access:** DeepSeek API `deepseek-v4-pro` (OpenAI ChatCompletions + Responses + Anthropic formats; Codex-optimized one-click setup); chat.deepseek.com Expert Mode; DeepInfra `deepseek-ai/DeepSeek-V4-Pro`, Novita, Together (LLM Stats tracks 4; AA counts 8 providers); OpenCode Zen `opencode/deepseek-v4-pro` $1.74/$3.48 cache $0.145. Open weights on HF/ModelScope (Pro + Pro-Base).
- **Release / knowledge:** Preview 2026-04-24; GA / 0813 snapshot 2026-08-13 (new peak/off-peak pricing effective Aug 16 16:00 UTC). Knowledge cutoff not stated in fetched sources.
- **IDs:** `deepseek-v4-pro` (API name unchanged across snapshots); no Free tier.
- **Context window:** 1M default across official services; max output 384K (official pricing page; LLM Stats lists 393.2K — labelled discrepancy). Think Max recommends ≥384K window.
- **Modalities:** Text in / text out only — Vision explicitly "Not supported" on the pricing page (AA confirms no image input); JSON output, tool calls, prefix completion, FIM (non-thinking only); three effort modes Non-think / Think High / Think Max (GA adds low/high/max).
- **Pricing (as of 2026-11-13):** DeepSeek peak $1.32 in / $3.96 out per 1M, cache hit $0.044 (97% off); off-peak half ($0.66/$1.98, cache $0.022); peak = 01:00–04:00 & 06:00–10:00 UTC Mon–Fri. DeepInfra $1.30/$2.60 cache $0.10. AA measured $1.77/task, blended $0.69/M (7:2:1). Search/fetch $0.75 per 1K uses. Concurrency 500 (vs Flash 2500).
- **Architecture:** 1.6T total / 49B active MoE, MIT; hybrid CSA + HCA attention (at 1M: 27% of V3.2 single-token FLOPs, 10% KV cache), mHC residual stabilization, Muon optimizer, >32T pretrain tokens, domain-expert SFT/RL (GRPO) + on-policy distillation consolidation; FP4 experts + FP8 mixed; no Jinja template — Python `encoding` folder. Tech report arXiv 2606.19348.

### Raw benchmarks found

Vendor-reported — HF card, V4-Pro-Max vs frontier (April preview; Opus 4.6 Max / GPT-5.4 xHigh / Gemini 3.1 Pro High / K2.6 Thinking / GLM-5.1 Thinking):

Agent / tool use:

- BrowseComp: **83.4%**; HLE w/ tools: **48.2%** (0813 update: **60.0%** per BenchLM-cited agent table); MCP Atlas Public: **73.6%**; Toolathlon: **51.8%** (0813 Toolathlon-Verified: **74.1%**)
- GDPval-AA: **1554 Elo** (vendor claims open-weights lead; AA v2.1 carriage: normalized **54.5%**); Terminal Bench 2.0: **67.9%**
- 0813 agent table (via BenchLM): CyberGym **83.3%**, AutomationBench **31.8%**, Agents' Last Exam **25.7%**; AA carriages: Agentic Index 49.6, τ² 96.2, τ³-Banking 39.6, EnterpriseOps 49.6, APEX-Agents 24.3

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (AA run 92.8; Vals 92.4); HLE: **37.7%** preview → **42.7%** 0813 (AA-HLE 41.0); MMLU-Pro: **87.5**; SimpleQA-Verified: **57.9**; Chinese-SimpleQA: **84.4**
- HMMT Feb 2026: **95.2**; IMOAnswerBench: **89.8**; Apex: **38.3** / Apex Shortlist: **90.2**; Codeforces: **3206**
- ARC-AGI-1: **90.0%** / ARC-AGI-2: **61.3%** (ARC Prize semi-private, independent); CritPt (AA): **18.0**
- AA Intelligence Index: **23 live (v5.0.1, Max), #17/28 open-large** (median 24); BenchLM carriage 53.2 is an older index version — labelled, never compared. AA-Omniscience: net **+0.8**, accuracy 49.1%, hallucination **94.1%** (near-zero abstention).
- BenchLM overall: **62.31, #52/1033** (66/830 rows, partial coverage).

Coding:

- SWE-bench Verified: **80.6%** (Vals independent: **96.4%**); SWE-Pro: **55.4%**; SWE Multilingual: **76.2%**; LiveCodeBench: **93.5** (Vals 87.5)
- 0813 table: Terminal-Bench 2.1 **87.9%** (Vals independent **54.7%** — large harness gap, labelled), NL2Repo **61.5%**, DeepSWE **62.7%**, DSBench-FullStack **71.1%**, DSBench-Hard **67.2%**
- AA Coding Index 68.8, AA-SciCode 51.0; Vibe Code Bench 49.93 (Vals); OpenHarmony Bench 59.0; Design Arena Website 1258 (OpenRouter carriage)

Long context:

- MRCR 1M: **83.5** (vendor; Opus 4.6 Max 92.9 leads); CorpusQA 1M: **62.0**; AA-LCR: **80.3**; base-model LongBench-V2 51.5. No surcharge reported; 1M flat pricing.

### Normalized scores (1–100)

- **Tool use: 83/100.** BrowseComp 83.4, MCP Atlas 73.6, Toolathlon 51.8/74.1-Verified, GDPval 1554, τ² 96.2 and the 0813 agent upgrades are frontier-adjacent; capped by HLE-tools 48.2→60.0 still below top tier, AutomationBench 31.8 and τ³ 39.6.
- **Reasoning: 85/100.** Codeforces 3206, LCB 93.5, HMMT 95.2, IMOAnswerBench 89.8, ARC-2 61.3, GPQA 90.1–92.8 and HLE 42.7 are strong; capped by AA live index 23 (below open-large median), CritPt 18.0 and Omni hallucination 94.1% (knowledge reliability risk).
- **Context window: 88/100.** 1M native with MRCR 1M 83.5 + LCR 80.3 + CorpusQA 62.0, flat pricing and 384K output justify the high-80s; capped below Opus 4.6's 92 (MRCR 92.9) and no independent million-token retrieval verification.
- **Multimodal: 15/100.** Text-only — Vision explicitly unsupported on the official pricing page and confirmed by AA; no image/audio/video input.
- **Coding: 84/100.** SWE-V 80.6 (Vals 96.4), LCB 93.5, Codeforces 3206, TB2.1 87.9 vendor, NL2Repo 61.5, DeepSWE 62.7 are open-weights SOTA claims; capped by SWE-Pro 55.4, Vals TB2.1 54.7 harness conflict and AA Coding 68.8.
- **Cost efficiency: 80/100.** $1.32/$3.96 peak with 97% cache discount and 50% off-peak, $1.77/task measured — good value vs closed flagships (DeepInfra: >4× cheaper index run than Opus 4.7); capped by expensive-vs-open-median pricing, 119M verbose tokens, 21.4 min/task and TTFT 55.64s.
- **Overall Score: 71.0/100.** (83+85+88+15+84)/5 = 71.0. Best fit: text-only agentic coding, long-context research and math-heavy workloads at open-weights prices; not suitable where vision is required.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (official preview + GA news, HF model card read in full, official pricing page, AA live page, BenchLM full row set, DeepInfra overview, LLM Stats provider table); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: April preview card (V4-Pro-Max) vs 0813 GA snapshot rows (HLE 37.7→42.7, HLE-tools 48.2→60.0, TB2.1 87.9 new); max output 384K (official) vs 393.2K (LLM Stats); AA live index 23 (v5.0.1) vs BenchLM carriage 53.2 (older version) vs DeepInfra April-era "#2 open-weights, 52 vs K2.6 54" claim; Vals SWE-V 96.4 / TB2.1 54.7 vs vendor 80.6 / 87.9 (harness differences); DeepInfra 190M-token/$1,071 index-run figures are April-era vs AA current 119M/$1.77-per-task; GA benchmark table is an image — 0813 rows taken via BenchLM's cited carriage; OpenRouter lists an older "0423" pricing variant ($0.90/$1.50) — superseded.
- Reference URLs:
  - [DeepSeek V4 Preview Release — DeepSeek API Docs](https://api-docs.deepseek.com/news/news260424)
  - [DeepSeek-V4-Pro GA Release (0813) — DeepSeek API Docs](https://api-docs.deepseek.com/news/news260813/)
  - [Models & Pricing — DeepSeek API Docs](https://api-docs.deepseek.com/quick_start/pricing/)
  - [DeepSeek-V4-Pro model card — Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/raw/main/README.md)
  - [DeepSeek V4 Pro 0813 (Max) — Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-pro)
  - [DeepSeek V4 Pro 0813 — BenchLM](https://benchlm.ai/models/deepseek-v4-pro-0813)
  - [DeepSeek V4 Pro overview — DeepInfra blog](https://deepinfra.com/blog/deepseek-v4-pro-model-overview)
  - [DeepSeek-V4-Pro-0813 — LLM Stats](https://llm-stats.com/models/deepseek-v4-pro-0813)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Tech report arXiv 2606.19348 / DeepSeek_V4.pdf and the GA benchmark-table image were not text-extracted this pass.