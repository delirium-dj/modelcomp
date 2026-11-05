# Qwen3.8 Flash — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`qwen/qwen3.8-flash`, production version of the open-weight Qwen3.8-Flash-Next)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-09-24→10-16): pricing re-verified ($0.15/$0.47
> list, 50 tok/s, first answer 1.42s) and two new reference rows added (Epoch GDP.pdf 16.6%
> #37, DuelLab GameBench 2 31.6) — but BenchLeader confirms the production Flash **still has
> no independent benchmark ranking** ("needs at least five independent results"), so the
> evidence base remains the Flash-Next checkpoint rows transferring per Alibaba's
> production-version statement. No score changes; Overall stays 85.

## Model card

- **Name:** Qwen3.8 Flash (Flash is the official managed production version based on the open-weight Qwen3.8-Flash-Next checkpoint)
- **Short description:** Alibaba's speed- and cost-optimized multimodal MoE in the Qwen3.8 family and an early preview of the Qwen4 architecture; aimed at high-volume tool-driven workflows, coding/co-working assistants, and long-video understanding. Beats Claude Opus 4.6 Max on most practical coding and agent benchmarks at ~1/12th the input price. BenchLM ranks the underlying Flash-Next checkpoint #43 of 954 (62.8, 2026-10-17 reading).
- **Provider / access:** QwenCloud / Alibaba Model Studio (`qwen3.8-flash`), OpenAI-compatible Chat Completions and Responses APIs plus Anthropic-compatible interface; hosted via gateways (Novita, OrcaRouter); open weights `Qwen/Qwen3.8-Flash-Next` on Hugging Face/ModelScope. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-08-26 (weights + production API; BenchLeader confirms 26 Aug); knowledge cutoff not disclosed.
- **IDs:** `qwen3.8-flash` (QwenCloud/Model Studio, OpenRouter); `Qwen/Qwen3.8-Flash-Next` (open weights). Not the 27B sibling and not the Max flagship.
- **Context window:** 1M tokens by default in the production Flash version (131K max output, llm-stats/OrcaRouter); the underlying Flash-Next architecture natively supports 262,144 tokens (BenchLM 262K) extensible to 1M with YaRN.
- **Modalities:** text, image, and video input; text output; reasoning with a three-setting effort dial (low/medium/high); tool calls and structured outputs/JSON mode.
- **Pricing (as of 2026-11-05):** **re-verified $0.150 / $0.470 per 1M** (BenchLeader list, Nov 5; models.dev blended reading $0.119/$0.401); cached input $0.015–0.018; Alibaba Cloud Int. serves at 50 tok/s with 1.00s first token; weights are free (open) but the production API is a paid, provider-terms license.
- **Architecture:** 125B total / 6B active MoE plus 51B N-gram embedding parameters (RAM-resident); hybrid attention (Gated DeltaNet + Qwen Sparse Attention), Gated Residual, Muon optimizer, multi-token prediction; open-weight (Flash-Next) / proprietary production serving.

### Raw benchmarks found

> Benchmarks for the open-weight Flash-Next checkpoint (BenchLM page citing the HF model card + AA) transfer to production Flash per Alibaba's "production version of Flash-Next" statement. BenchLeader (Nov 5): the production Flash itself still has **no independent benchmark ranking** — launch-post scores are excluded by its methodology.

Agent / tool use:

- GDPval-AA: **1648** (AA, independent; normalized 56.4–56.6% — minor drift flagged)
- Toolathlon-Verified: **73.5%** (model card; vs DeepSeek-V4-Flash's 70.3)
- CoWorkBench: **73.9%**; JobBench: **55.7%**; AndroidWorld: **84.5%** (model card)
- Agents' Last Exam: **51.2%** (model card score metric; Pass@1 24.3 in the release table — different metric, both noted)
- OSWorld 2.0: **19.4%** (model card — weak)
- **GameBench 2: 31.6** (DuelLab, #146 — NEW reference row, added this pass)
- Terminal-Bench, Tau3: no verified public score found (Qwen publishes none for this model)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (model card); AA independent: **92.3%** — corroborated
- HLE: **35.9%** (model card); AA-HLE: **38.0%**
- Artificial Analysis Intelligence Index: **39.8** (AA current board — corroborates the 40 cited for the Flash-Next checkpoint)
- AA-LCR v1.1: **79.7%**; CritPt: **11.1%** (weak)
- AA-Omniscience: **24.5% accuracy / 45.3% non-hallucination row / −9.7 index** (negative index, very weak)
- LiveCodeBench v6: **91.9%** (model card); IFBench: **81.3%** (model card)
- **GDP.pdf: 16.6%** (Epoch Benchmarking Hub, xhigh, #37 — NEW row added this pass)
- MLCR: no verified public score found

Coding:

- AA Coding Index: **73.0%** (AA, independent); AA-SciCode: **50.6%** (AA)
- SWE-bench Pro: **62.5%** (model card, Claude Code harness; vs Opus 4.6 Max 53.4); SWE Multilingual: **81.0%**; NL2Repo: **48.1%**
- DeepSWE 1.1: **58.7%** (model card); LiveCodeBench v6: **91.9%** (model card)
- SWE-bench Verified / Vibe Code Bench: no verified public score found

Long context:

- 262K native / 1M with YaRN (up to 7.6x prefill and 8.6x overall throughput at 1M vs Qwen3.7-Plus per Alibaba); AA-LCR 79.7% is the first measured long-context number
- No MRCR/RULER/GraphWalks retrieval value verified for this exact model

Multimodal:

- CharXiv: **90.6%** with tools / **84.6%** without; MathVision: **90.6%** / **95.7%** w/ Python; RealWorldQA: **88.5%**; LVBench (video): **76.6%**; Vision2Web: **64.0%**; ERQA: **72.3%**; AA-MMMU-Pro: **79.8%** (AA) — measured vision corroborates the +video-in band

### Normalized scores (1–100)

- **Tool use: 83/100.** Unchanged — GDPval-AA 1648 (AA independent, normalized ~56.5%), Toolathlon 73.5%, CoWorkBench 73.9% and AndroidWorld 84.5% hold the band; OSWorld 2.0 19.4%, the missing Terminal-Bench row and the still-absent independent ranking cap it.
- **Reasoning: 84/100.** Unchanged — GPQA corroborated at 91.7–92.3%, the AA Index 39.8 is mid-band, HLE 35.9–38.0% stays under the 40% bar, and the negative Omniscience index stands; the new GDP.pdf 16.6% (#37) row adds a mid knowledge-work datapoint without moving the band.
- **Context window: 88/100.** Unchanged — production serves 1M tokens (131K output) but the native window is 262K extended via YaRN; AA-LCR 79.7% solid — below the native-1M tier.
- **Multimodal: 85/100.** Unchanged — text, image and video input with measured vision (CharXiv 90.6, MathVision 90.6/95.7, LVBench 76.6, MMMU-Pro 79.8); text-only output.
- **Coding: 85/100.** Unchanged — LiveCodeBench v6 91.9%, AA Coding Index 73.0% (independent) and SWE Pro 62.5% are mid-frontier; DeepSWE 58.7% and no SWE-bench Verified number keep it below 90.
- **Cost efficiency: 98/100.** Unchanged — $0.15/$0.47 re-verified (blended $0.189–0.23) with ~$0.016 cached input sits in the ~$0.10/$0.20 = 97–99 methodology band; free open weights as an extra cost lever; 50 tok/s serving is the speed tax.
- **Overall Score: 85/100.** (83 + 84 + 88 + 85 + 85) / 5 = 425/5 = 85.0 → 85 (unchanged). Best-fit: the budget workhorse for high-volume coding agents, tool pipelines and multimodal extraction where cost per token trumps peak reasoning — with the honest caveat that independent boards still haven't measured the production Flash itself.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetches (web-search quota exhausted mid-pass): BenchLeader Qwen3.8 Flash page fetched 2026-11-05 (pricing re-verified $0.150/$0.470, 50 tok/s, unranked status confirmed) + Epoch GDP.pdf 16.6% and DuelLab GameBench 31.6 reference rows added; Flash-Next checkpoint rows transfer per Alibaba's production-version statement; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.md`, using the same headings.
