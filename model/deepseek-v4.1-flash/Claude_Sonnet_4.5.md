# DeepSeek V4.1 Flash — findings by Claude Sonnet 4.5

- Source: DeepSeek (`deepseek-ai/DeepSeek-V4.1-Flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash (Reasoning Max Effort & Non-Reasoning variants; no dedicated Free tier — pay-per-token with off-peak discount)
- **Short description:** DeepSeek-V4.1-Flash is a native multimodal Mixture-of-Experts (MoE) model with 552B backbone parameters and a context length of up to one million tokens, using a 40-layer Causal Encoder-Decoder (CED) architecture with 20 causal-encoder layers and 20 decoder layers, activating 8B parameters per token during Prefill and 16B during Decode. Marketed by DeepSeek-AI as the efficient/agent-focused member of the V4.1 family; top use case is high-volume coding/agent workloads.
- **Provider / access:** DeepSeek first-party API (Set your model to deepseek-flash) using Chat Completions API. DeepSeek V4.1 Flash (max) is available through 22 API providers including DeepInfra, Databricks, SiliconFlow, Nebius, plus Baseten, NVIDIA Build, OpenRouter (`deepseek/deepseek-v4.1-flash`), and Vercel AI Gateway.
- **Release / knowledge:** Released on September 10, 2026; training cutoff not publicly specified.
- **IDs:** DeepSeek API: `deepseek-flash`; HuggingFace: `deepseek-ai/DeepSeek-V4.1-Flash`; OpenRouter: `deepseek/deepseek-v4.1-flash` and `deepseek/deepseek-v4.1-flash:batch`. No verified OpenCode Zen Free ID found.
- **Context window:** 1,048,576 token context window, maximum output of 1,048,576 tokens (verified on OpenRouter/HuggingFace/Artificial Analysis).
- **Modalities:** The model accepts text and images and supports a continuously adjustable reasoning effort from 1 to 100. Text-only output. Tool calling, thinking mode, numeric reasoning effort, mid-conversation system messages, and interleaved image content are supported. No audio/video in or non-text out.
- **Pricing (as of 2026-09-29):** DeepSeek first-party API — without a cache hit, input tokens run 15 cents per million during off-peak hours and 30 cents per million during peak hours. Output tokens cost 60 cents per million off-peak and $1.20 per million during peak hours. Cache Discount 98%. Batch tier: $0.112/M input tokens and $0.336/M output tokens, with separate rates for Cache Read at $0.00336/M tokens. Paid only — no Free tier; DeepSeek data-use privacy caveats apply to first-party API.
- **Architecture:** 552 billion parameter mixture-of-experts (MoE) model released as open weights under an MIT license. The model uses 1 shared expert and 384 routed experts per MoE layer, activating 6 routed experts per token. Also includes a separate 196B-parameter Engram conditional-memory component, which is accessed sparsely rather than executed like ordinary backbone parameters.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek harness Minimal mode, Max reasoning effort — Terminal-Bench 2.1: 90.6; also for code agent benchmarks (Terminal-Bench 2.1/3.0/4.0, DeepSWE v1.1, NL2Repo-Bench, ProgramBench), the model is evaluated with the Minimal mode of DeepSeek Harness and a 1M-token context window)
- Terminal-Bench 3.0 / 4.0: **30.0% / 31.2%** (DeepSeek vendor table)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Automation-Bench: **54.8%** (DeepSeek vendor table, Pass@1)
- Agents' Last Exam: **31.8%** (DeepSeek vendor table, Pass@1)

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (GPQA Diamond: 90.9, Pass@1, Max effort)
- HLE: **36.8%** (HLE: 36.8 (39.1\*) — 39.1 is text-only subset)
- HLE w/ tools: **63.9%** (DeepSeek vendor table)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **39** for Reasoning Max Effort variant / **25** for Non-Reasoning (DeepSeek V4.1 Flash (Reasoning, Max Effort) … 39 … 552B 16B active at inference time … 1M; no numeric leaderboard rank published)
- Codeforces: **3471** rating (DeepSeek vendor table)
- MathArena Apex: **65.6%** (DeepSeek vendor table, Pass@1)
- SuperGPQA (base model, 5-shot): **53.1** (SuperGPQA (EM) | 5-shot | 46.5 | 53.9 | 53.1)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (DeepSeek reports DeepSWE v1.1 in place of SWE-bench Verified)
- DeepSWE v1.1 (Resolved): **74.2%** (DeepSWE v1.1: 74.2; mini-SWE | … 74.2 scaffold-best)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- NL2Repo-Bench: **65.4** (DeepSeek vendor table)
- ProgramBench: **20.3** (DeepSeek vendor table)
- CyberGym: **88.1%** / SEC-Bench Pro: **62.8%** / ExploitGym: **15.3%** (DeepSeek vendor table)

Long context:

- No dedicated MRCR / RULER / GraphWalks retrieval score published for V4.1-Flash — vendor reports evaluate agent benchmarks at 1M window but do not publish needle/multi-needle retrieval accuracy.

Multimodal:

- Chartography w/ tools: **78.9%**, BabyVision w/ tools: **89.6%**, ZeroBench-main w/ tools (Pass@5): **49.0** (DeepSeek vendor table)

### Normalized scores (1-100)

- **Tool use: 90/100.** Terminal-Bench 2.1 at 90.6 is in the frontier band (≥88%). Automation-Bench 54.8 and Agents' Last Exam 31.8 are competitive with Opus-5/GPT-5.6-tier scores. Capped short of 95+ by absence of verified Tau3-Banking and GDPval-AA scores.
- **Reasoning: 85/100.** GPQA Diamond 90.9 sits at the frontier threshold; HLE 36.8 is just below the 40% frontier cutoff; DeepSeek V4.1 Flash (Reasoning, Max Effort) scores 39 on the Artificial Analysis Intelligence Index — solid but well under the ≥60 frontier tier. Codeforces 3471 and MathArena Apex 65.6 push it toward the top of the mid-frontier band.
- **Context window: 95/100.** 1,048,576 token context window qualifies for the ≥1M tier (95-100). Held to 95 because no verified MRCR/RULER retrieval ≥98% at 512K+ has been published; only 1M-window agent evals are reported.
- **Multimodal: 65/100.** The model accepts text and images with text-only output; no audio/video in or non-text out. Falls squarely in the "+image in" 60-70 band.
- **Coding: 92/100.** DeepSWE v1.1: 74.2 hits the frontier ≥74% threshold and Terminal-Bench 2.1: 90.6 exceeds the 85% frontier bar; CyberGym 88.1 and Codeforces 3471 reinforce. Capped shy of 95 because SciCode and LiveCodeBench numbers are missing and two separate hands-on tests, run independently, found DeepSeek V4.1 Flash underperforming relative to what its Deep SWE and Terminal Bench numbers would suggest.
- **Cost efficiency: 94/100.** First-party pricing of $0.30 per 1M input tokens and $1.20 per 1M output tokens (peak) is between the $0.10/$0.20 (~98) and $0.60/$2.20 (~92) anchors, and off-peak drops to $0.15/$0.60 with 98% cache discount. Third-party providers go as low as DeepInfra ($0.07 per 1M tokens) blended. Not free, so not 100.
- **Overall Score: 85.4/100.** Mean of (90 + 85 + 95 + 65 + 92)/5 = 85.4. Best-fit recommendation: a top-value open-weights choice for **long-context coding agents and high-volume agentic pipelines** where 1M context, image-in, and near-frontier tool-use/coding matter more than audio-in or the very top of the reasoning leaderboard.

---

## Signature

- Provided by: **Claude Sonnet 4.5 (anthropic/claude-sonnet-4.5)** — 2026-09-29
- Method: public internet research across DeepSeek's official API docs and news post, HuggingFace model card, arXiv paper, Artificial Analysis, OpenRouter, NVIDIA Build, Baseten, and third-party review coverage (MindStudio, KDnuggets, DataCamp, Regolo, Rundown); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
