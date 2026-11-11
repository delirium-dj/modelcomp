# Qwen3-Max — findings by Kimi K3

- Source: Alibaba Qwen (`qwen3-max`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max (Qwen3-Max-Instruct / -Thinking variants)
- **Short description:** Alibaba's Qwen3-series flagship — after Qwen3.6-Max-Preview went closed-weights on 2026-04-20, the most capable *openly licensed* Qwen model. 100+ languages, tool-calling/RAG-optimized, strong multilingual profile. A 2025-2026 generation model now well below the 3.8 series frontier.
- **Provider / access:** Alibaba Cloud DashScope (`qwen3-`, `alibaba/qwen3-max`, OpenAI-compatible), OpenRouter `qwen/qwen3-max`, gateways (Requesty, TokenMix); self-host from open weights (8x H100 80GB minimum fp16 per tokenmix).
- **Release / knowledge:** preview era Sep 2025; current-release listing "Released 2026-01-26" (Requesty); described by OpenRouter as an updated release over the Jan-2025-version line. Knowledge cutoff not consistently published.
- **IDs:** `qwen/qwen3-max` (OpenRouter), `alibaba/qwen3-max` (Requesty). No OpenCode Zen Free ID verified.
- **Context window:** 262,144 tokens; max output 65,536–66K (OpenRouter/Requesty).
- **Modalities:** text + image in → text out (vision per Requesty capabilities); tool calling; JSON schema; prompt caching (provider-dependent); no native video/audio.
- **Pricing (as of 2026-10-09):** $0.78 / $3.90 per 1M in/out direct (pricepertoken via tokenmix), $0.86 / $3.44 on Alibaba Cloud Singapore (Requesty, no caching on that endpoint).
- **Architecture:** open-weight flagship of the Qwen3 line (license per Alibaba open terms — "Apache 2.0 / Qwen License variant" per tokenmix); parameter count not officially disclosed.

### Raw benchmarks found

(Requesty benchmark panel [official cards + AA + public leaderboards]; tokenmix review table [est = estimated]; Artificial Analysis via OpenRouter/Requesty)

Agent / tool use:

- τ²-Bench: **83.6%** (Requesty panel)
- Vendor positioning: purpose-optimized tool calling / RAG (Alibaba benchmarks, no public harness numbers)
- Tau3 / MCP Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.1%** (Requesty panel)
- HLE: **28.0%** (Requesty panel)
- Artificial Analysis Intelligence Index: **21.3** (AA via Requesty)
- MMLU: **~88%** (tokenmix table, est)
- Multilingual: strongest sub-$1-input non-English coverage (100+ languages, vendor claim)

Coding:

- HumanEval: **~90%** (tokenmix, est)
- SWE-Bench Verified: **~70–75%** (tokenmix, est — no exact official figure surfaced)
- LiveCodeBench / Terminal-Bench / SciCode: no verified public score found

Long context:

- 262K window; no MRCR/RULER/AA-LCR public number found.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 78/100.** τ²-Bench 83.6% plus tool/RAG-optimized training is strong for a 2025-era flagship; capped by zero Tau3/MCP-Atlas independent coverage.
- **Reasoning: 68/100.** GPQA 86.1% respectable; HLE 28.0% and AA Index 21.3 show the gap to 2026 reasoning leaders; multilingual breadth is the edge.
- **Context window: 68/100.** 262K/66K was top-tier at debut but is mid-pack in late 2026; no independent long-context retrieval scores.
- **Multimodal: 60/100.** Image input confirmed (Requesty capabilities + MMMU listed), text-only output, no audio/video.
- **Coding: 72/100.** ~70–75% SWE-bench Verified (estimated band) and ~90% HumanEval; credible but every headline coding number is an estimate rather than a published run — verification-capped.
- **Cost efficiency: 80/100.** $0.78/$3.90 with open weights and fine-tune freedom; ~72% cheaper than GPT-5.4 at scale (tokenmix math), though DeepSeek V3.2 undercuts it.
- **Overall Score: 69/100.** Mean of 78/68/68/60/72 = 69.2 → 69. Best fit: cost-sensitive multilingual production chat/RAG and fine-tune-or-self-host deployments; teams wanting 2026-frontier agentic coding should look at the 3.6–3.8 series instead.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (Requesty provider endpoint + benchmark panel, OpenRouter model page, tokenmix.ai review incl. pricing math, datalearner, dev.to release analysis); scores are normalized 1–100 interpretations, not official vendor scores. Estimated figures are marked.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
