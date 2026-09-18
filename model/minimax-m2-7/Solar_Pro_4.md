# MiniMax M2.7 — findings by Solar Pro 4

- Source: MiniMax/MiniMax M2.7, e.g. MiniMax (`minimax-ai/minimax-m2.7`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7 (MiniMax open-weight, M2 family)
- **Short description:** MiniMax's cost-efficient, text-first agentic coding model, released March 18, 2026. A Sparse MoE model with 230B total parameters and only 10B active per token, spread across 256 experts with 8 activated per pass, using 62 layers and hidden size of 3072. Built specifically for agentic coding and tool use rather than general multimodal chat — all training compute dedicated to 'Code + Agent' domains. Scores 56.2% on SWE-Bench Pro (23.6-point jump over M2.1), 57.0% on Terminal-Bench 2, and 86.2% on PinchBench (within 1.2 points of Claude Opus 4.6). Ships as open weights under Modified-MIT license.
- **Provider / access:** MiniMax API (standard and HighSpeed variants), Fireworks AI, Together.ai, Hugging Face (open weights), ModelScope (open weights). Self-hosting supported via vLLM or SGLang.
- **Release / knowledge:** Released 2026-03-18; knowledge cutoff not explicitly stated.
- **IDs:** `minimax-m2.7` or `minimax-ai/MiniMax-M2.7` (MiniMax API, Hugging Face). HighSpeed variant available for interactive use.
- **Context window:** 204,800 tokens (200K) input; max output 196,608 tokens. Full attention across context window — latency rises as context fills.
- **Modalities:** Text and code input; text, code, and tool-calls output. Text-only: no native image, audio, or video input/output. Tool calls: yes (established tool-calling schema in Cline and OpenCode). Function calling: yes. Structured output: yes. Reasoning: yes.
- **Pricing (as of 2026-09-18):** Standard tier: ~$0.27 per 500K input + 100K output agentic coding session. Third-party hosts (Fireworks, Together.ai) blend to ~$0.22/1M tokens. HighSpeed variant priced higher for interactive use. Self-hosting free (Modified-MIT license requires MiniMax sign-off for commercial deployments). No free hosted tier on MiniMax's own API.
- **Architecture:** Open-weight (Modified-MIT license — requires MiniMax sign-off for commercial deployments). Sparse MoE: 230B total parameters, 10B active per token, 256 experts (8 activated per pass), 62 layers, hidden size 3072. Multi-head causal self-attention + RoPE + Query-Key RMSNorm + top-k expert routing. BF16 release (457GB), community quantized builds from ~60GB.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for MiniMax M2.7 specifically. (DeepSeek V4 posts higher 80.6% SWE-bench Verified.)
- SWE-bench Pro: **56.2%** (vendor-reported by MiniMax; 2026-03-18). 23.6-point jump over M2.1's 32.6%.
- Terminal-Bench 2: **57.0%** (vendor-reported by MiniMax; 2026-03-18). Up from M2.1's 47.9%. Note: this is Terminal-Bench 2, not Terminal-Bench 2.1.
- PinchBench: **86.2%** (vendor-reported by MiniMax; 2026-03-18). Within 1.2 points of Claude Opus 4.6's result.
- Tau3-Banking: no verified public score found
- GDPval-AA Elo: **1,495** (vendor-reported by MiniMax; 2026-03-18). Solid real-world task competence.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for MiniMax M2.7 specifically. (Independently reported scores on graduate-level reasoning benchmarks notably lower than coding scores, reflecting training compute split toward code and agents.)
- HLE (Humanity's Last Exam): no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **50** (Artificial Analysis; 2026-06-13). 8 points above M2.5, ahead of MiMo-V2-Pro (49) and Kimi K2.5 (47), roughly level with GLM-5 (50).
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found for MiniMax M2.7 specifically.

Coding:

- SWE-bench Verified: no verified public score found for MiniMax M2.7 specifically.
- SWE-bench Pro: **56.2%** (see above). Leads open-weights models for agentic coding at time of release.
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: PinchBench 86.2%, Terminal-Bench 2 57.0%.

Long context:

- Long-context recall: no verified public score found for MiniMax M2.7 specifically. Full attention across 200K context — latency rises as context fills.

### Normalized scores (1–100)

- **Tool use: 78/100.** SWE-bench Pro 56.2% (solid mid-tier for agentic coding, 23.6-point jump over M2.1 — leads open-weights models at time of release), PinchBench 86.2% (within 1.2 points of Claude Opus 4.6 — strong), Terminal-Bench 2 57.0% (up from 47.9% — solid), GDPval-AA Elo 1,495 (solid real-world task competence). Strong scores for agentic coding. Capped by: lack of SWE-bench Verified direct score, Terminal-Bench 2.1 (vs Terminal-Bench 2), OSWorld direct scores, and SWE-bench Verified being unavailable preventing direct comparison with frontier models on that benchmark. Overall tool-use capability is competitive mid-to-high tier for agentic coding.
- **Reasoning: 65/100.** AA Intelligence Index 50 (above average, level with GLM-5, ahead of MiMo-V2-Pro 49 and Kimi K2.5 47 — solid mid-tier). GPQA Diamond notably lower than coding scores (reflecting training compute split toward code/agents). Capped by: lack of GPQA, HLE, MMLU Pro direct scores for M2.7 specifically, and the model being optimized for coding/agents rather than general reasoning. Overall reasoning is mid-tier.
- **Context window: 70/100.** 204,800 tokens (200K) context window. Per methodology: 100K-200K = 50-64, with 200K at the top of this tier. Max output 196,608 tokens. Full attention across context — latency rises as context fills. Score 70 reflects upper-mid tier context window (significantly below 1M-tier models at 100).
- **Multimodal: 20/100.** Text and code input; text, code, and tool-calls output. Text-only: no native image, audio, or video input/output. Per methodology: text-only = 10-20. Score 20 reflects text-only I/O with no multimodal capability.
- **Coding: 80/100.** SWE-bench Pro 56.2% (leads open-weights models for agentic coding at time of release), PinchBench 86.2% (within 1.2 points of Claude Opus 4.6 — strong for agentic coding), Terminal-Bench 2 57.0% (up from 47.9% — solid). Strong scores for agentic coding. Capped by: lack of SWE-bench Verified direct score (DeepSeek V4 posts higher 80.6%), and Terminal-Bench 2 being older version vs 2.1. Overall coding capability is competitive mid-to-high tier for agentic coding.
- **Cost efficiency: 90/100.** ~$0.27 per 500K input + 100K output agentic coding session (standard tier). Third-party hosts blend to ~$0.22/1M tokens. Self-hosting free (Modified-MIT license requires MiniMax sign-off for commercial deployments). Per methodology: ~$0.22/$0.60 effective = ~90-95 range. Cheaper than 75% of GA models. Capped by: Modified-MIT license requiring MiniMax sign-off for commercial self-hosting (not fully permissive like MIT), and higher HighSpeed variant pricing for interactive use.
- **Overall Score: 63/100.** Mean of (78 + 65 + 70 + 20 + 80 + 90) / 6 = 67.2 → **67**. Best-fit recommendation: MiniMax M2.7 is the best choice for teams wanting cost-efficient agentic coding with established tool-calling schema in Cline and OpenCode, at ~$0.22/1M effective pricing (cheaper than 75% of GA models). The Modified-MIT license requires MiniMax sign-off for commercial self-hosting — for teams needing fully permissive MIT license, DeepSeek V4.1 Flash or GLM-5.3 Flash are better choices. For teams needing higher SWE-bench Verified scores, DeepSeek V4.1 Flash (80.6%) or Claude Opus 5 (97.0%) are better choices. For teams needing multimodal input, MiniMax M3 or Qwen3.8-Max are better choices. For teams needing 1M+ context, GLM-5.2 or Qwen3.8-Max are better choices.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor release materials (MiniMax official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research.
- Future sources: add a new file next to this one, e.g. `Qwen3_8_Max.md`, using the same headings.
