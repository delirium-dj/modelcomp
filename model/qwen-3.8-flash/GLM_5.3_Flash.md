# Qwen3.8 Flash — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`qwen/qwen3.8-flash`, production version of the open-weight Qwen3.8-Flash-Next)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash (Flash is the official managed production version based on the open-weight Qwen3.8-Flash-Next checkpoint)
- **Short description:** Alibaba's speed- and cost-optimized multimodal MoE in the Qwen3.8 family and an early preview of the Qwen4 architecture; aimed at high-volume tool-driven workflows, coding/co-working assistants, and long-video understanding. Beats Claude Opus 4.6 Max on most practical coding and agent benchmarks at ~1/12th the input price.
- **Provider / access:** QwenCloud / Alibaba Model Studio (`qwen3.8-flash`), OpenAI-compatible Chat Completions and Responses APIs plus Anthropic-compatible interface; hosted via gateways (Novita, OrcaRouter `qwen/qwen3.8-flash`); open weights `Qwen/Qwen3.8-Flash-Next` on Hugging Face/ModelScope. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-08-26 (weights + production API); knowledge cutoff not disclosed.
- **IDs:** `qwen3.8-flash` (QwenCloud/Model Studio, OpenRouter); `Qwen/Qwen3.8-Flash-Next` (open weights). Not the open-weight 27B sibling (`Qwen3.8-27B`) and not the Qwen3.8-Max flagship.
- **Context window:** 1M tokens by default in the production Flash version (131K max output, verified via llm-stats provider table and OrcaRouter); the underlying Flash-Next architecture natively supports 262,144 tokens extensible to 1M with YaRN.
- **Modalities:** text, image, and video input; text output; reasoning yes with a three-setting effort dial (low/medium/high); tool calls and structured outputs/JSON mode.
- **Pricing (as of 2026-09-24):** $0.15–0.16 / $0.47 per 1M in/out; cached input $0.016–0.018 per 1M (OrcaRouter cache write $0.23); weights are free (open) but the production API is a paid, provider-terms license.
- **Architecture:** 125B total / 6B active MoE plus 51B N-gram embedding parameters (RAM-resident, outside per-token compute); hybrid attention (Gated DeltaNet + Qwen Sparse Attention), Gated Residual, Muon optimizer, multi-token prediction; open-weight (Flash-Next) / proprietary production serving.

### Raw benchmarks found

Agent / tool use:

- Toolathlon Verified: **73.5** (Alibaba release table; vs DeepSeek-V4-Flash-0731's 70.3)
- CoWorkBench: **73.9** (Alibaba release table; vs Opus 4.6 Max 68.2)
- JobBench: **55.7** (Alibaba release table; vs Opus 4.6 Max 36.6)
- AndroidWorld: **84.5** (Alibaba release table; vs Opus 4.6 Max 62.0)
- Terminal-Bench, GDPval-AA, Tau3: no verified public score found (Qwen does not publish Terminal-Bench figures for this model)

Reasoning / knowledge:

- GPQA Diamond: **91.7** (Alibaba release table; just ahead of Opus 4.6 Max's 91.3)
- HLE: **35.9** (Alibaba release table; behind Opus 4.6 Max's 40.0)
- LiveCodeBench v6: **91.9** (Alibaba release table; vs Opus 4.6 Max's 88.8)
- Agents' Last Exam Pass@1: **24.3** (Alibaba release table; DeepSeek-V4-Flash-0731 edges it at 25.2)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Pro: **62.5** (Alibaba release table, Claude Code harness at temp 1.0 / 256K context; vs Opus 4.6 Max 53.4)
- SWE-bench Multilingual: **81.0** (Alibaba release table; vs Opus 4.6 Max 77.5)
- DeepSWE 1.1: **58.7** (Alibaba release table; vs 27B sibling 42.2, Qwen3.7-Plus 16.5, DeepSeek-V4-Flash 54.4)
- LiveCodeBench v6: **91.9** (as above)
- SWE-bench Verified: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 262K native / 1M with YaRN (up to 7.6x prefill and 8.6x overall throughput at 1M vs Qwen3.7-Plus per Alibaba); no MRCR/RULER/GraphWalks retrieval value verified for this exact model

### Normalized scores (1–100)

- **Tool use: 80/100.** Toolathlon Verified 73.5%, CoWorkBench 73.9% (beats Opus 4.6 Max's 68.2), JobBench 55.7% and AndroidWorld 84.5% are strong agent results; missing Terminal-Bench/GDPval numbers and vendor-only sourcing keep it under 85.
- **Reasoning: 84/100.** GPQA Diamond 91.7% hits the 90%+ frontier reference while HLE 35.9% stays under the 40% bar and no independent index run exists; exam-style reasoning is its documented weak spot.
- **Context window: 88/100.** Production version serves 1M tokens (131K output) but the architecture's native window is 262K extended via YaRN — a scaling claim with no measured retrieval at 512K+, so below the 95–100 native-1M tier.
- **Multimodal: 85/100.** Text, image and video input with strong vision results (MathVision 95.7, RealWorldQA 88.5, AndroidWorld 84.5); text-only output; sits in the +video-in 75–90 band.
- **Coding: 85/100.** LiveCodeBench v6 91.9%, SWE-bench Pro 62.5% (beats Opus 4.6 Max) and DeepSWE 58.7% are mid-frontier; no SWE-bench Verified/LiveCodeBench-independent numbers and harness caveats prevent 90+.
- **Cost efficiency: 98/100.** $0.15–0.16/$0.47 per 1M with ~$0.016 cached input sits in the ~$0.10/$0.20 = 97–99 methodology band; free open weights as an extra cost lever.
- **Overall Score: 84/100.** Mean of the five quality dims (80 + 84 + 88 + 85 + 85) / 5 = 84.4 → 84. Best-fit: the budget workhorse for high-volume coding agents, tool pipelines and multimodal extraction where cost per token trumps peak reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (Alibaba Cloud launch blog, DataCamp Flash-Next analysis, llm-stats and OrcaRouter model pages, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.md`, using the same headings.
