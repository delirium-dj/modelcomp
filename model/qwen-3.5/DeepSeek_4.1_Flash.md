# Qwen 3.5 — findings by DeepSeek 4.1 Flash

- Source: Alibaba / Qwen — Qwen3.5-397B-A17B (`qwen-3.5`, the Qwen3.5 flagship)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Slug note:** the folder slug is bare `qwen-3.5`; I resolved it to Alibaba's Qwen3.5 **flagship** release — `Qwen3.5-397B-A17B` — the canonical "Qwen 3.5" model (the model card states the hosted `Qwen3.5-Plus` is the same weights with 1M default context and built-in tools). Flagging in case the slug was intended for a different Qwen3.5 variant.

## Model card

- **Name:** Qwen 3.5 (Qwen3.5-397B-A17B)
- **Short description:** Alibaba's flagship Qwen3.5 generation — a unified vision-language Mixture-of-Experts foundation model (early-fusion multimodal training) with 397B total / 17B active parameters, strong reasoning, coding and agentic capability across 201 languages.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-397B-A17B`, Apache 2.0) with hosted routes on Alibaba Cloud PAI-EAS / Model Studio, OpenRouter, Together AI and Novita AI. Reasoning mode, tool calling with MCP, structured outputs.
- **Release / knowledge:** Released 2026-02-16. Knowledge cutoff not published.
- **IDs:** upstream `Qwen/Qwen3.5-397B-A17B` (the folder slug `qwen-3.5` has no Zen ID).
- **Context window:** 262,144 tokens natively, extensible up to 1,010,000 tokens via YaRN (model card).
- **Modalities:** Text and image in (early-fusion vision encoder); text out. Thinking/reasoning mode, tool calls, JSON/structured outputs.
- **Pricing (as of 2026-10-03):** $0.390 in / $2.34 out per 1M (Alibaba Cloud PAI-EAS and OpenRouter, cheapest of 4 routes; Novita/Together $0.60/$3.60).
- **Architecture:** Sparse MoE, 397B total / 17B active (512 experts, 10 routed + 1 shared), 60 layers of Gated DeltaNet + Gated Attention hybrid; Apache 2.0 open weights.

### Raw benchmarks found

> Primary source: LLM Reference record for Qwen3.5-397B-A17B (aggregating Alibaba's official HuggingFace model card and Artificial Analysis). Vendor-reported where noted.

Reasoning / knowledge:

- GPQA Diamond: **89.3%** (Artificial Analysis)
- MMLU-Pro: **87.8%** (official HF model card, accuracy)
- HLE (CoT, no tools): **28.7%** (official HF model card)
- AIME 2026: **91.3%** (official HF model card)
- IFEval (instruction following): **92.6%**

Agent / tool use:

- τ-bench (Tau2-Bench): **86.7%** (official HF model card)
- BFCL v4: **72.9%** (function calling)
- MultiChallenge: **67.6%** (#2 of 28 leaderboard)

Coding:

- SWE-bench Verified: **76.2%** (LLM Reference peer set #39/81)
- LiveCodeBench v6 (pass@1): **83.6%** (LLM Reference peer set #20/56)

Multimodal:

- MMMU: **85.0%**

Long context:

- 262K native / 1M via YaRN; no RULER/MRCR retrieval curve published in the card text I could read.

### Normalized scores (1–100)

- **Tool use: 84/100.** τ-bench (Tau2) 86.7%, BFCL v4 72.9% and MultiChallenge 67.6% are strong across tool-calling and multi-turn agent work — upper mid, below the τ³ 50%+/GDPval 1750+ frontier band.
- **Reasoning: 84/100.** GPQA Diamond 89.3% is near-frontier (90%+ band), MMLU-Pro 87.8% is high, but HLE 28.7% is mid and holds it below the top band.
- **Context window: 82/100.** 262K native is the 200K–500K tier (≈74), lifted to 82 by the catalogued 1M YaRN extension delivered through the hosted Plus tier; no ≥98% retrieval evidence, so short of the ≥1M band.
- **Multimodal: 68/100.** Text + image in (MMMU 85.0% is strong), but no video/audio documented → the 60–70 band.
- **Coding: 83/100.** SWE-bench Verified 76.2% and LiveCodeBench v6 83.6% are solidly upper-mid/high; no SciCode/DeepSWE figure lifts it to the frontier coding band.
- **Cost efficiency: 90/100.** $0.390 in / $2.34 out per 1M lands between the ~$0.60/$2.20 (~92) and ~$1.25/$4.25 (~88) reference points.
- **Overall Score: 80/100.** (84 + 84 + 82 + 68 + 83) / 5 = 80.2 → **80**. Best-fit: open-weights multimodal flagship for reasoning + agentic/coding workloads when self-hosting Apache-2.0 weights matters.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-03
- Method: independent public internet research (Qwen3.5-397B-A17B HuggingFace model card, LLM Reference benchmark record, Vector Wire model list). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
