# DeepSeek V4 Pro — findings by Kimi K3

- Source: DeepSeek / DeepSeek V4 Pro (0813 reasoning variant, `deepseek-v4-pro`; open weights `deepseek-ai/DeepSeek-V4-Pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (0813)
- **Short description:** DeepSeek's V4-generation Pro reasoning model — an elite math/competitive-programming performer (Codeforces 3206, LiveCodeBench Pass@1-CoT 93.5%) with strong agentic tool use and verified 1M-context retrieval (MRCR 1M 83.5%). Text-only (official docs: vision not supported).
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`, OpenAI-compatible; Anthropic-compatible endpoint also) + MIT open weights on Hugging Face. Concurrency limit 500 on the official API.
- **Release / knowledge:** V4 preview 2026-04-24; 0813 checkpoint GA 2026-08-13; cutoff not verified.
- **IDs:** `deepseek/deepseek-v4-pro` (checkpoint V4-Pro-0813 on the API; HF `deepseek-ai/DeepSeek-V4-Pro`; DSpark speculative-decoding variant `DeepSeek-V4-Pro-DSpark`).
- **Context window:** 1M tokens (benchlm.ai, codersera); max output shared 384K limit per official pricing table.
- **Modalities:** text in / text out — official pricing page lists Vision as "Not supported" for this model; reasoning yes (thinking default); tool calls; JSON mode; Responses API.
- **Pricing (as of 2026-09-29):** per 1M tokens, peak/off-peak tiers in force since 2026-08-16 16:00 UTC — off-peak: $0.66 input (miss) / $0.022 cache hit / $1.98 output; peak: $1.32 / $0.044 / $3.96 (peak = 01:00–04:00 and 06:00–10:00 UTC Mon–Fri). Price history: launch $1.74/$3.68-era rates → standing cut to $0.435/$0.87 on 2026-05-22 (codersera; user's prior figure was the pre-cut price) → raised into the Aug 16 tiers. The planned 2026-09-14 reroute of `deepseek-v4-pro` traffic to V4.1-Flash was reversed on 2026-09-17: Pro service continues, billed unchanged until further notice. Source: api-docs.deepseek.com (verified 2026-09-29), codersera.com, digitalapplied.com.
- **Architecture:** open weights (MIT); 1.6T total params / 49B active MoE with DeepSeek Sparse Attention (DSA) and mHC (codersera); supports reasoning effort low/high/max and DSpark speculative decoding.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.9%** (Vals 54.7% — large harness divergence); TB 2.0: **67.9%** (benchlm.ai). On Terminus 2 reference harness: **54.68%** — a 33-pt gap vs DeepSeek's own-harness claim and below V4-Flash on the same harness (codersera).
- τ²-bench (Tau2-Bench): **96.2%** (benchlm.ai)
- GDPval-AA: **1306 Elo** (54.5% normalized) (benchlm.ai)
- MCP Atlas: **73.6%**; Toolathlon-Verified: **74.1%**; CyberGym: **83.3%**; BrowseComp: **83.4%** (benchlm.ai)
- AA Agentic Index: **49.6%**; APEX-Agents-AA: **24.3%**; EnterpriseOps-Gym: **49.6%**; LiveBench agentic coding: **54.95** (last of seven frontier peers — codersera, Aug 2026) (benchlm.ai)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (GPQA-D; AA 92.8%; Vals 92.4%) (benchlm.ai)
- HLE: **42.7%**; HLE w/ tools: **60.0%**; AA-HLE: **41.0%** (benchlm.ai)
- AA-LCR: **80.3%**; CritPt: **18.0%**; MRCR 1M: **83.5%**; CorpusQA 1M: **62.0%** (benchlm.ai)
- ARC-AGI-1: **90.0%**; ARC-AGI-2: **61.3%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **53.2**; BenchLM overall **63.48/100, #33 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **49.1% / 94.1%** — severe hallucination (benchlm.ai; codersera quotes AA-Omniscience index 0.83 vs Opus 5's 37.07)
- HMMT Feb 2026: **95.2%**; IMOAnswerBench: **89.8%**; Apex Shortlist: **90.2%**; MMLU-Pro: **87.5%** (benchlm.ai)

Coding:

- SWE-bench Verified: **80.6%**; SWE-bench (Vals): **96.4%** — 2nd behind Claude Opus 5 (97.0%) on Vals' neutral harness (codersera); SWE-bench Pro: **55.4%**; SWE Multilingual: **76.2%** (benchlm.ai)
- LiveCodeBench Pass@1-COT: **93.5%**; LiveCodeBench (Vals): **87.5%**; Codeforces: **3206** (benchlm.ai)
- DeepSWE: **62.7%**; NL2Repo: **61.5%**; DSBench-FullStack: **71.1%**; AA-SciCode: **51.0%**; AA Coding Index: **68.8** (benchlm.ai)

Long context:

- MRCR 1M: **83.5%**; CorpusQA 1M: **62.0%** (benchlm.ai) — verified retrieval at the full 1M window.

Multimodal:

- Design Arena Website: **1258 Elo** (benchlm.ai); OpenDesign Arena mean **72.9/100** (digitalapplied.com); official docs confirm no vision input — text-only model.

### Normalized scores (1–100)

- **Tool use: 85/100.** τ²-bench 96.2%, TB 2.1 87.9%, CyberGym 83.3%, Toolathlon-Verified 74.1%; capped by Vals/Terminus-2 TB divergence (54.7%) and Agentic Index 49.6%.
- **Reasoning: 84/100.** HMMT 95.2%, GPQA ~92%, ARC-AGI-2 61.3%, AA Index 53.2; capped hard by 94.1% hallucination rate (Omniscience) and HLE 41–42.7%.
- **Context window: 96/100.** 1M window (band 95–100) with measured MRCR-1M 83.5% and CorpusQA-1M 62.0% — rare verified max-window retrieval.
- **Multimodal: 12/100.** Officially text-only (vision not supported per API docs) — text-only band 10–15; the Design Arena rows are text-in web design, not vision, so it stays near the floor.
- **Coding: 84/100.** Codeforces 3206 and LiveCodeBench-CoT 93.5% are world-class; SWE-bench Verified 80.6% (Vals 96.4%); capped by SWE-bench Pro 55.4% and SciCode 51%.
- **Cost efficiency: 88/100.** Verified peak/off-peak pricing ($1.32/$3.96 peak; $0.66/$1.98 off-peak) after the 2026-08-16 rise — still ~10–38× cheaper than Opus-class models on output, and MIT open weights make self-hosting possible; up from 80 now that pricing is verified, below the old standing-rate band (~94 at $0.435/$0.87) after the August increase.
- **Overall Score: 72.2/100.** Mean of the five quality dims (85+84+96+12+84)/5 = 72.2. Best fit: 1M-context math/competitive-coding and text-only agent pipelines; note the announced-then-reversed Sept 14 reroute to V4.1-Flash when planning service continuity.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchlm.ai scorecard, api-docs.deepseek.com pricing, codersera.com V4 guide, digitalapplied.com Pro-routing coverage); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: added verified peak/off-peak pricing (since 2026-08-16; prior $1.74/$3.48 was pre-2026-05-22), GA date 2026-08-13 for the 0813 checkpoint, MIT open-weights status (1.6T/49B MoE), official "vision not supported" confirmation, Sept 14 reroute reversal, independent Terminus-2/Vals/LiveBench caveats; cost 80→88, context 90→96 (1M band rule), multimodal 20→12 (text-only band rule), overall 73→72.2.
- Future sources: add a new file next to this one using the same headings.
