# Qwen3.5-27B — findings by Big Pickle

- Source: OpenCode (`opencode/big-pickle`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Alibaba's February 2026 open-weight **dense** (non-MoE) member of the Qwen3.5 "medium" series: a 27.8B-parameter native vision-language model with Gated DeltaNet hybrid attention, multi-token prediction and a 262K native context window. It is the strongest coding / instruction-following model of the medium lineup (SWE-bench Verified 72.4, LiveCodeBench v6 80.7) and is a **distinct checkpoint** from its MoE siblings (122B-A10B, 35B-A3B) and from the hosted serving profiles Qwen3.5-Flash (35B-A3B) and Qwen3.5-Plus (397B-A17B).
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-27B`) and ModelScope; hosted on Alibaba Cloud Model Studio (`qwen3.5-27b`, OpenAI-compatible **Chat Completions**) and on OpenRouter (`qwen/qwen3.5-27b`, Chat Completions) with DeepInfra, SiliconFlow, NovitaAI, Phala, AtlasCloud and Alibaba Cloud Intl. as upstreams. **Not listed on OpenCode Zen** — no `opencode/…` route, and no Free ID exists anywhere.
- **Release / knowledge:** released 2026-02-24 (the series was introduced 2026-02-16 with the 397B-A17B flagship). Already superseded twice: Qwen3.6-27B (2026-04-22) and Qwen3.8-27B (2026-08-14). No knowledge-cutoff date is published on the model card.
- **IDs:** `Qwen/Qwen3.5-27B` (HF weights) · `qwen3.5-27b` (Model Studio) · `qwen/qwen3.5-27b` (OpenRouter) · `deepinfra/Qwen/Qwen3.5-27B` (DeepInfra) · `novita/qwen3.5-27b` (NovitaAI). No Free ID on OpenCode Zen.
- **Context window:** 262,144 tokens **native**; extensible to 1,010,000 with static YaRN RoPE scaling (rope_type `yarn`, factor 4.0; factor 2.0 recommended at ~524K) — Qwen's documented recipe, not a native 1M window. Max output 65,536 tokens (Model Studio lists 65K max output / 81K max reasoning; the card recommends 32,768 output for most queries and 81,920 for math/programming-competition benchmarking).
- **Modalities:** text, image **and video** in (native early-fusion VLM with a vision encoder); text out; thinking/reasoning mode on by default and switchable; tool calling (BFCL-V4 68.5; vLLM `qwen3_coder` tool-call parser); structured/JSON output; **no** audio input, **no** non-text output.
- **Pricing (as of 2026-10-22):** Model Studio $0.30 in / $2.40 out per 1M. OpenRouter headline $0.195 / $1.56 (a 35% promo on the cheapest route) with routed providers spanning $0.25–$0.30 in and $1.56–$2.60 out (DeepInfra $0.26/$2.60, SiliconFlow $0.25/$2.00, AtlasCloud $0.27/$2.16 with $0.27 cache read, Phala $0.30/$2.40 with $0.03 cache read, NovitaAI $0.30/$2.40, Alibaba Cloud Intl $0.195/$1.56). Self-hosting is free — Apache 2.0 weights.
- **Architecture:** dense, 27.8B total / 27B active (all parameters live) — the only non-MoE size in the medium lineup. 64 layers, hidden dimension 5,120, padded vocab 248,320, FFN intermediate 17,408, RoPE dim 64, hidden layout 16 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN)) with 48 linear-attention V heads / 16 QK heads (head dim 128) and 24 attention Q heads / 4 KV heads (head dim 256); trained with multi-token prediction (MTP, usable for speculative decoding). Apache 2.0 open weights. (Conflict: one aggregator lists hidden dimension 4,096 and 3:1 attention — the official card's 5,120 / 16×(3+1) layout is authoritative.)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **41.6%** (Qwen3.5-27B model card, vendor harness)
- Terminal-Bench Hard: **32.6%** (Artificial Analysis, TB 4.0 "Hard" subset; 31.8% non-reasoning) — *conflicting figure vs the 41.6% above because the bench version/subset differs*
- TAU2-Bench: **79.0%** (model card, official setup plus the Claude Opus 4.5 system-card airline fixes)
- τ²-Bench Telecom: **93.9%** (Artificial Analysis, reasoning; 87.1% non-reasoning)
- BFCL-V4: **68.5%** (model card)
- HLE with tools: **48.5%** (model card) — vs 24.3% without tools
- BrowseComp: **61.0%**; BrowseComp-zh 62.1%; WideSearch **61.1%**; Seal-0 47.2% (all model card, 256K context-folding strategy)
- DeepPlanning: **22.6%** (model card)
- GDPval-AA: no verified public score found (no standalone value published for this checkpoint)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (the Qwen3.5 flagship table publishes "Tool Decathlon" and "MCP-Mark" columns, but no value for the 27B)

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (model card) · 85.8% (Artificial Analysis, reasoning) · 84.2% (AA non-reasoning) · 86% (aggregator round-up) — *the HF eval widget also exposes 81.82 for a "default view" GPQA run, a lower-visibility view of the same dataset*
- HLE: **24.3%** (model card, w/ CoT) · 23.9% (AA reasoning) · 13.9% (AA non-reasoning)
- MMLU-Pro: **86.1%**; MMLU-Redux 93.2; C-Eval 90.5; SuperGPQA 65.6 (model card)
- HMMT Feb 2026: **92.0%**; HMMT Nov 2025 89.8; AIME 2026 90.83 (MathArena eval hosted on the HF repo); DynaMath 87.7 and MathVista 87.8 (aggregator tables, vendor-sourced)
- AA-LCR: **66.1%** (model card) · **77.7%** (Artificial AA-LCR v1.1, reasoning) · 64.0% (AA non-reasoning)
- CritPt: **0.9%** (Artificial Analysis, reasoning) · 0.3% (non-reasoning)
- Artificial Analysis Intelligence Index: **22.9** (reasoning) / **19.4** (non-reasoning), **#5 of 141** open-weight models; marked *deprecated* on the AA board (Alibaba shipped Qwen3.6-27B). *Conflict: ModelCap's archived AA board snapshot (2026-08-18) records 34.6 (#124/597) for the same model id — a different index revision, not the current v4.3.2 scale.*
- BenchLM overall: **48.65/100, #107 of 972**
- Rank.ai consensus: **#56 of 121**, consensus 52 (AA #42/110 = 22.9; LMArena #63/111 = 1409)
- LMArena: **1441 ± 12** on the open-source text-expert board (overall rank #131 of 183); ModelCap archive snapshot: overall **1408** (#131/389), coding **1450** (#133/384)
- Omniscience Accuracy / Hallucination Rate: **20.7% / 81.5%** (Artificial Analysis; non-hallucination rate 18.5%, Omniscience index −44)

Coding:

- SWE-bench Verified: **72.4%** (model card) — level with / above GPT-5-mini's 72.0 in the same table; SWE-Rebench **58.9%** (SWE-Rebench leaderboard, contamination-resistant variant)
- LiveCodeBench v6: **80.7%**
- CodeForces: **1899** (vendor's own query set; lowest in the medium lineup — 35B-A3B 2028, 122B-A10B 2100)
- OJBench: 40.1; FullStackBench en/zh 60.1 / 57.4
- SciCode / AA-SciCode: **39%** (Artificial Analysis; AA did not refresh the value on 2026-10-17)
- Terminal-Bench 2.0: 41.6% (see tool use)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

Long context:

- AA-LCR v1.1: **77.7%** (Artificial Analysis) · 66.1% (vendor card)
- LongBench v2: **60.6%** (vendor card — marginally above the 122B-A10B's 60.2 and the 35B-A3B's 59.0)
- 1M-token YaRN extension (factor 4.0): supported and documented by Qwen, but **no MRCR / RULER / GraphWalks retrieval score at 512K–1M** is published for this checkpoint → no verified public score found
- Note: the 1M-context-by-default products are Qwen3.5-Plus (397B-A17B) and Qwen3.5-Flash (35B-A3B) — not this checkpoint, so the 1M figure is not attributed to the 27B.

### Normalized scores (1–100)

- **Tool use: 74/100.** TAU2-Bench 79.0% and τ²-Bench Telecom 93.9% are frontier-band, and BFCL-V4 68.5% plus HLE-with-tools 48.5% and BrowseComp 61.0% show genuine agentic tool competence; what caps the score is the terminal axis — Terminal-Bench 2.0 41.6% (vendor) and AA's Terminal-Bench 4.0 Hard 32.6% sit in the mid band, and no GDPval-AA, Claw-Eval or Toolathlon number is published.
- **Reasoning: 72/100.** Hard STEM is genuinely strong (GPQA Diamond 85.5%, MMLU-Pro 86.1%, HMMT Feb-25 92.0%, AIME 2026 90.8%, AA-LCR 77.7%), but the hardest-reasoning ceiling is low — HLE 24.3%, CritPt 0.9%, Omniscience index −44 with an 81.5% hallucination rate — and the AA Intelligence Index sits at only 22.9.
- **Context window: 78/100.** The native window is 262,144 tokens, which lands in the 200K–500K band (65–84) and is confirmed by every host (OpenRouter 262K, Model Studio 262K, AA 262k); retrieval quality is mid-tier (LongBench v2 60.6%, AA-LCR 66.1% vendor / 77.7% independent), and the 1,010,000-token figure is a YaRN extrapolation rather than a native window, with no published retrieval score beyond 262K.
- **Multimodal: 82/100.** Native early-fusion vision-language with **video** in as well as image (VITA-Bench 41.9% — nearly 3× GPT-5-mini's 13.9%, MMMU-Pro 75%, ScreenSpot-Pro 70.3%, MathVista 87.8%), so it clears the +video band (75–90); it stays below 90 because there is no audio input and output is text-only, and the AA model page lists only text+image.
- **Coding: 73/100.** SWE-bench Verified 72.4% and LiveCodeBench v6 80.7% are solidly above the mid band and beat GPT-5-mini on the former, but SciCode 39% (<40%), SWE-Rebench 58.9%, Terminal-Bench 2.0 41.6% and CodeForces 1899 keep it out of the frontier tier.
- **Cost efficiency: 94/100.** Hosted pricing of $0.30 in / $2.40 out per 1M (Model Studio) and $0.195–$0.30 / $1.56–$2.60 across OpenRouter routes is cheap for this capability tier — AA calls $0.30/$2.40 "expensive" only relative to small open-weight models — and the Apache 2.0 weights make self-hosting effectively $0, which is the strongest cost argument; the 35% OpenRouter promo is not assumed permanent.
- **Overall Score: 76/100.** Mean of the five quality dims (74 + 72 + 78 + 82 + 73) / 5 = 75.8 → 76 — the best-value dense 27B-class open-weight model for multimodal coding agents that need a 262K window, and the pick when a single-GPU/FP8 deployment matters more than frontier agentic scores.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-22
- Method: public internet research (vendor model card and eval results on Hugging Face, the Qwen3.5 release blog, Artificial Analysis model and provider pages, OpenRouter and DeepInfra model pages, BenchLM, LMArena/Arena and Rank.ai leaderboards, ModelCap archives). Conflicting figures are listed side by side with their harness; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
