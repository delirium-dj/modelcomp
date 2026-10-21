# Qwen 3.5 Flash — findings by GLM 5.3 Flash

- Source: Alibaba (`qwen3.5-flash`), hosted Flash-tier Qwen3.5 model
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Flash (hosted tier; dated snapshot `qwen3.5-flash-02-23` on OpenRouter)
- **Short description:** Alibaba's hosted Flash tier of the Qwen3.5 generation — a fast multimodal reasoning model with 1M context and built-in production tooling. The official Qwen HF card states Qwen3.5-Flash is the hosted version corresponding to the open-weight Qwen3.5-35B-A3B checkpoint. Top use case: cheap high-throughput multimodal chat, RAG and agent serving.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.5-flash` (Chat Completions); OpenRouter `qwen/qwen3.5-flash-02-23`; Vercel AI Gateway `alibaba/qwen3.5-flash` (all verified via CloudPrice provider table, 2026-10-21).
- **Release / knowledge:** released 2026-02-25 (CloudPrice; snapshot id `-02-23`); knowledge cutoff not verified.
- **IDs:** `qwen3.5-flash` (Alibaba, current) / `qwen3.5-flash-2026-02-23` (dated) / `qwen/qwen3.5-flash-02-23` (OpenRouter). No Free ID verified on OpenCode Zen.
- **Context window:** 1,000,000 total, 66K max output (verified via CloudPrice specs and TokenRate's OpenRouter-sourced data, 2026-10-21).
- **Modalities:** text + image + video + PDF input, text output; reasoning default; function calling + parallel function calling; structured outputs / native JSON schema; prompt caching (CloudPrice capability grid). No audio.
- **Pricing (as of 2026-10-21, CloudPrice):** Alibaba `qwen3.5-flash` **$0.10 in / $0.40 out** per 1M (batch $0.05/$0.20); OpenRouter **$0.065 / $0.26**; Vercel **$0.10 / $0.40** with $0.01 cache read / $0.125 cache write. Budget band — 8.5× below the tracked median output price (CostPerPrompt).
- **Architecture:** hosted serving tier of the Qwen3.5-35B-A3B family — sparse MoE (35B total / 3B active), Gated DeltaNet + Gated Attention hybrid, unified vision encoder (vendor card).

### Raw benchmarks found

Third-party measured scores for the exact `qwen3.5-flash` SKU (BenchLM model page, updated 2026-10-20, sourcing Vals AI leaderboards and Epoch AI); sibling-checkpoint numbers from the official Qwen HF card cited only as clearly-labelled proxy where the SKU itself is unmeasured.

Agent / tool use:

- Tau3-Banking / Tau2-Bench: no verified public score found for the SKU (proxy: sibling `Qwen3.5-35B-A3B` TAU2-Bench 81.2%, HF card)
- BFCL-V4: no verified public score found for the SKU (proxy: sibling 67.3, HF card)
- Terminal-Bench 2: no verified public score found for the SKU (proxy: sibling 40.5%, HF card)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (Vals AI leaderboard via BenchLM)
- MMLU-Pro: **84.1** (Vals AI leaderboard via BenchLM)
- FrontierMath v2 (Tiers 1-3): **18.246%** (Epoch AI leaderboard via BenchLM)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **42.73 / #130 of 972** (BenchLM, conservative — only 5 of 668 benchmarks covered)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified (Vals): **64.4%** (Vals AI leaderboard via BenchLM)
- LiveCodeBench (Vals): **83.3%** (Vals AI leaderboard via BenchLM)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / other: no verified public score found

Long context:

- No long-context retrieval benchmark reported for the SKU (1M window verified from specs); no MRCR/RULER/GraphWalks found

### Normalized scores (1–100)

- **Tool use: 74/100.** No SKU-specific agent benchmark; scored on verified function-calling/parallel-calling capability plus clearly-labelled sibling proxy (TAU2-Bench 81.2, BFCL-V4 67.3 on Qwen3.5-35B-A3B weights) — capped by absence of third-party agent-harness numbers for this exact ID.
- **Reasoning: 78/100.** GPQA-Diamond 82.8 and MMLU-Pro 84.1 measured for the SKU are strong; FrontierMath v2 18.25% and BenchLM's conservative 42.73 (#130) cap it below the reasoning-flagship tier.
- **Context window: 88/100.** Verified 1M-token context with 66K max output; no retrieval benchmark measured, so the score rests on the spec, not measured recall.
- **Multimodal: 72/100.** Image + video + PDF input verified, but no vision benchmark measured for the SKU; sibling proxy (MMMU 81.4 on 35B-A3B weights) supports solid vision; no audio caps it.
- **Coding: 74/100.** SWE-bench (Vals) 64.4 with LiveCodeBench (Vals) 83.3 for the exact ID — capable but below the flagship coding tier.
- **Cost efficiency: 92/100.** Verified $0.065–$0.10 in / $0.26–$0.40 out per 1M (OpenRouter is cheapest), half-price batch on Alibaba, prompt caching included — among the cheapest multimodal 1M-context offerings tracked.
- **Overall Score: 77/100.** Mean of the five non-cost dims (74+78+88+72+74)/5 = 77.2. Best fit: budget multimodal workhorse for chat, RAG and light agentic workloads where 1M context at cents-per-million matters more than flagship reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-21
- Method: public internet research (BenchLM model page with Vals AI / Epoch AI sourced numbers, CloudPrice specs & provider pricing, official Qwen HF card for the sibling checkpoint, TokenRate); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
