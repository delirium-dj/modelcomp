# Qwen3.8 Flash — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`qwen/qwen3.8-flash`, production version of the open-weight Qwen3.8-Flash-Next)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash (Flash is the official managed production version based on the open-weight Qwen3.8-Flash-Next checkpoint)
- **Short description:** Alibaba's speed- and cost-optimized multimodal MoE in the Qwen3.8 family and an early preview of the Qwen4 architecture; aimed at high-volume tool-driven workflows, coding/co-working assistants, and long-video understanding. Beats Claude Opus 4.6 Max on most practical coding and agent benchmarks at ~1/12th the input price. BenchLM ranks the underlying Flash-Next checkpoint #37 of 889 (64.23); 2026-10-17: #43/954, 62.8.
- **Provider / access:** QwenCloud / Alibaba Model Studio (`qwen3.8-flash`), OpenAI-compatible Chat Completions and Responses APIs plus Anthropic-compatible interface; hosted via gateways (Novita, OrcaRouter `qwen/qwen3.8-flash`); open weights `Qwen/Qwen3.8-Flash-Next` on Hugging Face/ModelScope. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-08-26 (weights + production API); knowledge cutoff not disclosed.
- **IDs:** `qwen3.8-flash` (QwenCloud/Model Studio, OpenRouter); `Qwen/Qwen3.8-Flash-Next` (open weights). Not the open-weight 27B sibling (`Qwen3.8-27B`) and not the Qwen3.8-Max flagship.
- **Context window:** 1M tokens by default in the production Flash version (131K max output, verified via llm-stats provider table and OrcaRouter); the underlying Flash-Next architecture natively supports 262,144 tokens (BenchLM lists 262K) extensible to 1M with YaRN.
- **Modalities:** text, image, and video input; text output; reasoning yes with a three-setting effort dial (low/medium/high); tool calls and structured outputs/JSON mode.
- **Pricing (as of 2026-10-11):** $0.15–0.16 / $0.47 per 1M in/out; cached input $0.016–0.018 per 1M (OrcaRouter cache write $0.23); weights are free (open) but the production API is a paid, provider-terms license.
- **Architecture:** 125B total / 6B active MoE plus 51B N-gram embedding parameters (RAM-resident, outside per-token compute); hybrid attention (Gated DeltaNet + Qwen Sparse Attention), Gated Residual, Muon optimizer, multi-token prediction; open-weight (Flash-Next) / proprietary production serving.

### Raw benchmarks found

> Benchmarks for the open-weight Flash-Next checkpoint (BenchLM page updated 2026-10-10, citing the HF model card + AA) transfer to production Flash per Alibaba's "production version of Flash-Next" statement.

Agent / tool use:

- GDPval-AA: **1648** (AA, independent; 2026-10-17 refresh reads normalized 56.4% — minor drift, flagged — fills the GDPval gap the 2026-10-08 pass marked missing; normalized **56.6%**)
- Toolathlon-Verified: **73.5%** (model card; vs DeepSeek-V4-Flash's 70.3)
- CoWorkBench: **73.9%** (model card; vs Opus 4.6 Max 68.2); JobBench: **55.7%**; AndroidWorld: **84.5%** (model card)
- Agents' Last Exam: **51.2%** (model card; the 2026-10-08 pass read Pass@1 24.3 from the release table — different metric)
- OSWorld 2.0: **19.4%** (model card — weak)
- Terminal-Bench, Tau3: no verified public score found (Qwen does not publish Terminal-Bench figures for this model)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (model card); AA independent: **92.3%** — corroborated
- HLE: **35.9%** (model card); AA-HLE: **38.0%** (AA)
- Artificial Analysis Intelligence Index: **39.8** (AA current board — corroborates the 40 cited 2026-10-08 for the Flash-Next checkpoint)
- AA-LCR v1.1: **79.7%** (AA — fills the long-context gap); CritPt: **11.1%** (weak)
- AA-Omniscience: **24.5% accuracy / 45.3% non-hallucination row / −9.7 index** (AA — negative index, very weak)
- LiveCodeBench v6: **91.9%** (model card); IFBench: **81.3%** (model card)
- MLCR: no verified public score found

Coding:

- AA Coding Index: **73.0%** (AA, independent — fills the gap); AA-SciCode: **50.6%** (AA)
- SWE-bench Pro: **62.5%** (model card, Claude Code harness; vs Opus 4.6 Max 53.4); SWE Multilingual: **81.0%**; NL2Repo: **48.1%**
- DeepSWE 1.1: **58.7%** (model card); LiveCodeBench v6: **91.9%** (model card)
- SWE-bench Verified: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 262K native / 1M with YaRN (up to 7.6x prefill and 8.6x overall throughput at 1M vs Qwen3.7-Plus per Alibaba); AA-LCR 79.7% is the first measured long-context number
- No MRCR/RULER/GraphWalks retrieval value verified for this exact model

Multimodal:

- CharXiv: **90.6%** with tools / **84.6%** without; MathVision: **90.6%** / **95.7%** w/ Python; RealWorldQA: **88.5%**; LVBench (video): **76.6%**; Vision2Web: **64.0%**; ERQA: **72.3%**; AA-MMMU-Pro: **79.8%** (AA) — measured vision corroborates the +video-in band

### Normalized scores (1–100)

- **Tool use: 83/100.** (Was 80 on the prior pass.) GDPval-AA 1648 (AA independent, normalized 56.6%) fills the largest prior gap, on top of Toolathlon 73.5%, CoWorkBench 73.9% and AndroidWorld 84.5%; OSWorld 2.0 19.4% and the missing Terminal-Bench row keep it under 85.
- **Reasoning: 84/100.** GPQA corroborated at 91.7–92.3% (two sources) and the AA Index of 39.8 is now known (mid-band), but HLE 35.9–38.0% stays under the 40% bar and the negative Omniscience index documents exam-style/knowledge weaknesses — unchanged.
- **Context window: 88/100.** Production serves 1M tokens (131K output) but the native window is 262K (BenchLM concurs) extended via YaRN; AA-LCR 79.7% is a solid first measurement — still below the native-1M tier.
- **Multimodal: 85/100.** Text, image and video input with measured vision (CharXiv 90.6, MathVision 90.6/95.7, LVBench 76.6, MMMU-Pro 79.8); text-only output; +video-in 75–90 band.
- **Coding: 85/100.** LiveCodeBench v6 91.9%, AA Coding Index 73.0% (independent) and SWE Pro 62.5% (beats Opus 4.6 Max) are mid-frontier; DeepSWE 58.7% and no SWE-bench Verified number keep it below 90.
- **Cost efficiency: 98/100.** $0.15–0.16/$0.47 per 1M with ~$0.016 cached input sits in the ~$0.10/$0.20 = 97–99 methodology band; free open weights as an extra cost lever.
- **Overall Score: 85.0/100.** (Was 84.4 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (83 + 84 + 88 + 85 + 85) / 5 = 425/5 = 85.0 — nudged up on the 2026-10-11 second pass as the independent GDPval row converts the tool-use gap into measured evidence. Best-fit: the budget workhorse for high-volume coding agents, tool pipelines and multimodal extraction where cost per token trumps peak reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai Qwen3.8-Flash-Next page updated 2026-10-10 citing the HF model card, Artificial Analysis independent boards (GDPval/GPQA/HLE/LCR/SciCode/Omniscience/Coding Index) via benchlm.ai, plus the prior 2026-09-24/10-08 passes on the Alibaba launch blog/llm-stats/OrcaRouter; 2026-10-16 re-check: BenchLM 37-row refresh corroborates every row, no new data (GDPval normalized 56.6% → 56.4%; Flash-Next rank → #43/954 62.8) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores. Flash-Next checkpoint numbers transfer to production Flash per Alibaba's production-version statement.
- Future sources: add a new file next to this one, e.g. `Qwen_3.md`, using the same headings.
