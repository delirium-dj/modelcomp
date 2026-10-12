# Qwen3.8 Flash — findings by GLM 5.3

- Source: Alibaba/Qwen (`opencode/qwen3.8-flash`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash
- **Short description:** Alibaba's fast, cheap Qwen3.8-generation Flash model served on Zen; toggleable thinking with low/medium/xhigh effort. Top use case: high-volume multimodal agentic work at the lowest per-token cost in the Qwen family. Second-pass architecture fact: the open-weights sibling **Qwen3.8-Flash-Next is a 125B-total / 6B-active MoE with a separate 51B n-gram embedding table**, released as "an early preview of the architecture planned for Qwen4" under the qwen-community-1 license, thinking on by default (respan, buildfastwithai).
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages-compatible, `@ai-sdk/anthropic`); Aliyun Model Studio `alibaba/qwen3.8-flash`; Alibaba Cloud Int. endpoints on OpenRouter (2 endpoints, 52 tok/s). Composite trackers: BenchLeader **unranked — "no independent benchmark results so far, only pricing and metadata"** (sole row: GDP.pdf 16.6% #33); BenchLM composite 64.23 via the Flash-Next proxy (BenchLM's #2 Alibaba pick after Qwen3.8 Max).
- **Release / knowledge:** 2026-08-26 (flash entry per BenchLeader/llm-stats); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/qwen3.8-flash` (Zen; no Free ID — paid but very cheap)
- **Context window:** **1,000,000 tokens on the hosted API (991K max input / 131,072 max output)** — second-pass fact resolving the first-pass conflict: the open Flash-Next checkpoint is 262K natively extensible to 1M (self-host needs explicit extension to match the API; codersera, llm-stats, BenchLeader's 1M provider listings).
- **Modalities:** text/image/video in; text out; reasoning toggle + effort levels (low/medium/xhigh; thinking on by default); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen $0.15 in / $0.47 out per 1M (cached read $0.016; cache write $0.20) — unchanged, cheapest tracked Qwen on Zen; blended $0.23/M, chat reply ~$0.0002, agentic session ~$0.011; 58 tok/s output.
- **Architecture:** open-weights lineage (Qwen3.8-Flash-Next on HF, qwen-community-1 license); 125B total / 6B active + 51B n-gram embedding table (proxy architecture); Qwen4-preview architecture generation.

### Raw benchmarks found

> The API SKU `qwen3.8-flash` still has no dedicated public leaderboard row; benchmarks remain from BenchLM/HF for **Qwen3.8-Flash-Next** — the closest verified proxy (provisional, caveat retained). New this pass: the one direct independent row (GDP.pdf 16.6% #33, Epoch) and hands-on community tests.

Agent / tool use:

- GDPval-AA: **1648 Elo** / **55.6% normalized** (proxy); GDP.pdf: **16.6% #33** (Epoch, direct row — weak)
- CoWorkBench **73.9%**; Toolathlon-Verified **73.5%**; AndroidWorld **84.5%**; Agents' Last Exam **51.2%**; JobBench **55.7%** (proxy)
- OSWorld 2.0: **19.4%** (proxy — weak on the newest release)
- Hands-on (ai4users, SGLang on RTX PRO 6000): BFCL, τ²-bench, long-context and strategic-reasoning tests run — qualitative corroboration of agent competence, no conflicting numbers
- Claw-Eval / Tau3 / MCP-Atlas: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (proxy; AA harness 92.3%) — clears the 90% frontier bar
- HLE: **35.9%** / AA-HLE **38.0%** — just under the 40% bar
- AA-LCR: **79.7%**; CritPt: **11.1%** (weak); IFBench: **81.3%**
- AA Intelligence Index: **39.8** (proxy listing)
- Omniscience: accuracy **24.5%** (mediocre), hallucination rate **45.3%** (decent honesty)
- GGUF quantization study (kaitchup, GH200 + EvalScope): knowledge/scientific-reasoning/coding degrade gracefully Q4→Q1 — self-host viability corroboration

Coding:

- LiveCodeBench v6: **91.9%** (elite); SWE-bench Pro **62.5%**; SWE Multilingual **81%**; DeepSWE **58.7%**; NL2Repo **48.1%** (proxy)
- SciCode / AA-SciCode: **50.6%** (below the 55% reference); AA Coding Index **73.0%**
- SWE-bench Verified / Vibe Code Bench: no verified public score found (unchanged)

Long context:

- **1M served on the API** (991K in / 131K out; second-pass verified); AA-LCR 79.7% proxy; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- MathVision **90.6%** / w/ Python **95.7%**; CharXiv **90.6%** (w/o tools 84.6%); RealWorldQA **88.5%**; LVBench **76.6%** (video); ERQA **72.3%**; Vision2Web **64.0%**; AA-MMMU-Pro **79.8%** — elite vision-math, strong video, no audio.

### Normalized scores (1–100)

- **Tool use: 82/100.** Held: GDPval 1648/55.6%, CoWorkBench 73.9%, Toolathlon 73.5%, AndroidWorld 84.5% remain strong-for-tier; OSWorld 2.0 19.4%, the new direct GDP.pdf 16.6% #33, and the still-missing Claw/Tau3 rows plus the proxy-data caveat keep it at 82.
- **Reasoning: 82/100.** Held: GPQA 91.7% clears the bar and IFBench 81.3% is strong; HLE 35.9-38% misses the 40% bar, CritPt 11.1% and AA Index 39.8 are mid — no new evidence moved any axis.
- **Context window: 95/100.** Raised from 72: the first pass scored the open sibling's 262K native window — the second pass verified the hosted API SKU serves **1M (991K in / 131K out)** across Zen/Aliyun/OpenRouter listings, moving it into the ≥1M tier; no ≥512K retrieval bar met for 100.
- **Multimodal: 88/100.** Held: text+image+video input with elite vision-math (MathVision 90.6%) and solid video (LVBench 76.6%); no audio.
- **Coding: 76/100.** Held: LiveCodeBench v6 91.9% is elite; SWE-bench Pro 62.5%, DeepSWE 58.7%, SciCode 50.6% sit below frontier refs; SWE-bench Verified still unpublished.
- **Cost efficiency: 96/100.** Held: $0.15/$0.47 with $0.016 cached reads, $0.0002 chat replies, $0.011 agentic sessions — cheaper than the ~$0.60/$2.20 (≈92) anchor; 58 tok/s is the trade.
- **Overall Score: 84.6/100.** (82 + 82 + 95 + 88 + 76) / 5 = 84.6, up from 80.0 via the Context-window correction. Best-fit: the price-performance multimodal workhorse of the Qwen line — elite vision-math and LiveCodeBench at the family's cheapest tokens with a verified 1M served window; Max/27B for harder reasoning, and remember the benchmark rows are Flash-Next proxies until the API SKU gets its own leaderboard entries.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (Qwen3.8-Flash-Next HF card and family comparisons, hosted-API specs via codersera/llm-stats/OpenRouter/BenchLeader provider listings — resolving the 262K-vs-1M context conflict, Artificial Analysis leaderboard proxies, BenchLeader data as of 2026-10-12, BenchLM composite via its best-of-Alibaba table; three successful web searches; independent reviews: buildfastwithai, respan, orcarouter, ai4users hands-on SGLang tests, kaitchup GGUF study); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
