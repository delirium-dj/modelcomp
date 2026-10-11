# LongCat 2.0 — findings by Laguna S 2.1

- Source: Tencent/LongCat (`hy4`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT-licensed open-weights MoE language model (1.6T total / 48B active per token, 1M context) with native chain-of-thought reasoning, optimized for coding, agentic work, and long-horizon tasks. Integrated with Claude Code, OpenClaw, and Hermes harnesses.
- **Provider / access:** LongCat API ($0.30/$1.20 per 1M tokens); open weights on Hugging Face (`meituan-longcat/LongCat-2.0`). No OpenCode Zen Free ID.
- **Release / knowledge:** Released June 29, 2026; training data cutoff not published.
- **IDs:** `meituan/longcat-2.0` (OpenCode Zen); `meituan-longcat/LongCat-2.0` (Hugging Face); `Tencent-Hunyuan/LongCat-2.0` (ModelScope)
- **Context window:** 1,048,576 total (960K input / 64K output per `meta.json`)
- **Modalities:** Text in / text out
- **Pricing (as of 2026-10-11):** LongCat API $0.30 input / $1.20 output per 1M tokens; cache hit $0.006; or Apache 2.0 self-hosted ($0)
- **Architecture:** Mixture-of-Experts (MoE); 1.6T total params, 48B active per token; 78 layers; LongCat Sparse Attention (LSA) with Streaming-aware Indexing, Cross-Layer Indexing, Hierarchical Indexing; 135B N-gram Embedding params; native MTP for speculative decoding; MIT license
- **Reasoning:** Yes (extended thinking / chain-of-thought, default mode)
- **Speed:** 64.2 tokens/second (AA, median across providers)

### Raw benchmarks found

All scores from the official Hugging Face model card evaluation table (`https://huggingface.co/meituan-longcat/LongCat-2.0`), measured in-house by LongCat under a unified harness unless marked with * (cited from official reports).

Agent / tool use:

- Terminal-Bench 2.1: **70.8%**
- BrowseComp: **79.9** (browsing/task tool use)
- FORTE: **73.2** (agentic workflow harness)
- RWSearch: **78.8** (retrieval/search tool use)

Reasoning / knowledge:

- GPQA Diamond: **88.9%**
- IFEval: **90.0** (instruction following)
- IMO-AnswerBench: **81.8** (mathematical reasoning)
- Writing Bench: **83.8**

Coding:

- SWE-bench Multilingual: **77.3%**
- SWE-bench Pro: **59.5%**
- Terminal-Bench 2.1: **70.8** (agentic coding in terminal)

No verified public score found for: Tau3 / GDPval-AA, HLE, MRCR/LCR, CritPt, DeepSWE, LiveCodeBench, AAA-SciCode, Vibe Code Bench, Claw-Eval.

### Normalized scores (1–100)

- **Tool use: 77/100.** Terminal-Bench 2.1 at 70.8% is strong (below frontier ref of ~88%+); BrowseComp 79.9 and FORTE 73.2 reinforce. Capped by lacking a top-tier TB2.1 score.
- **Reasoning: 87/100.** GPQA Diamond 88.9% near frontier (ref: 90%+ → 90–100); IFEval 90.0 and Writing Bench 83.8 support; IMO-AnswerBench 81.8 solid. No HLE or MRCR data caps the upper bound.
- **Context window: 95/100.** 1,048,576 total tokens (960K in / 64K out); top tier per methodology. No retrieval-at-512K figure to claim 100.
- **Multimodal: 15/100.** Text in / text out only (per AA and `meta.json`).
- **Coding: 82/100.** SWE-bench Multilingual 77.3% and SWE-bench Pro 59.5% with TB2.1 70.8%; strong but below frontier refs (DeepSWE 74%+, TB2.1 85%+).
- **Cost efficiency: 95/100.** $0.30/$1.20 API pricing, or Apache 2.0 self-hosted at $0; cache hit $0.006.
- **Overall Score: 71/100.** Mean of five quality dims: (77+87+95+15+82)/5 = 71.2 → 71. Strong open-weights coding/agents flagship; text-only and in-house harness cap confidence.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-11
- Method: public internet research via Hugging Face model card (evaluation results table), Artificial Analysis model page, and OpenCode Zen docs; scores are normalized 1–100 interpretations, not official vendor scores. The `.excluded` twin (2026-10-02) predated this model card's benchmark table; the HF evaluation results are genuinely new evidence.

---

## Submission checklist

1. All placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/longcat-2.0/Laguna_S_2.1.md`.
3. Signature block filled in; relative links resolve from `model/longcat-2.0/`.
4. No benchmark invented; 10 verified public benchmark scores from the official HF model card.
