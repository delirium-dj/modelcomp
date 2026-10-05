# Gemma 4 E4b — findings by Muse Spark 1.3

- Source: Google DeepMind (google/gemma-4-e4b, edge variant)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4b
- **Short description:** Google DeepMind's 4.5B-effective edge-optimized multimodal model (8B with embeddings); mobile and edge latency tier with native audio input.
- **Provider / access:** Open weights (Apache 2.0) via Hugging Face / Kaggle / Ollama; OpenCode Zen `opencode/gemma-4-e4b`. llama.cpp, MLX, WebGPU supported.
- **Release / knowledge:** 2026-04-02 release (HF blog); training data ends January 2025.
- **IDs:** `opencode/gemma-4-e4b` (Zen).
- **Context window:** 128K (HF blog + benchmark page, verified); thinking mode off for long-context measurements.
- **Modalities:** image + text + audio in; text out (HF blog: small variants carry audio). Function calling yes; reasoning (thinking mode) yes.
- **Pricing (as of 2026-10-05):** $0 open weights (Apache 2.0); hosted ~$0.02/$0.10 per 1M.
- **Architecture:** 4.5B effective (8B with embeddings); Per-Layer Embeddings + shared KV cache; open weights.

### Raw benchmarks found

> Self-reported vendor numbers via Gemma 4 Technical Report (arXiv:2607.02770), thinking mode enabled unless noted, transcribed via community benchmark page (Aug 2026). No Terminal-Bench 2.1, Tau3, GDPval, or Claw numbers found.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- IFEval instruction following: **96.7%** (vendor tech report, thinking on)
- IFBench: **44.0%** (vendor tech report — weak detailed-instruction following)

Reasoning / knowledge:

- GPQA Diamond: **58.6%** (vendor tech report, thinking on)
- HLE: **no verified public score found** (not reported for E4B)
- MMLU Pro: **69.4%** (vendor tech report, thinking on)
- AIME 2026 no-tools: **42.5%** (vendor tech report; post-cutoff)
- BBH micro avg: **33.1%** (vendor tech report)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMMU Pro: **52.6%** at max resolution (vendor tech report; 51.4 at low-res)
- MATH-Vision: **59.5%** at max resolution (vendor tech report; 59.2 at low-res)

Coding:

- LiveCodeBench v6: **52.0%** (vendor tech report, thinking on)
- SciCode: **24.0%** (vendor tech report)
- Codeforces Elo: **940** (vendor tech report)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 32K: **95.2%** / RULER 128K: **86.6%** (vendor tech report, no thinking mode)
- LOFT retrieval Recall@k 128K: **58.5%** (vendor tech report)
- GraphWalks F1 <128K: **50.9%** (vendor tech report)
- MTOB eng→kgv 128K: **37.8%** (vendor tech report)

### Normalized scores (1–100)

- **Tool use: 45/100.** IFEval 96.7 basic following but IFBench 44.0 weak on detail; capped, zero verified agent-harness numbers.
- **Reasoning: 56/100.** GPQA 58.6 + MMLU Pro 69.4 lower-mid; capped by AIME 42.5, BBH 33.1, no HLE reported.
- **Context window: 60/100.** 128K verified with RULER 95.2/86.6 and GraphWalks 50.9 (usable retrieval, shaky multi-hop); capped at the 128K band.
- **Multimodal: 80/100.** Image + text + audio in with MMMU Pro 52.6 / MATH-Vision 59.5; capped, text-only output and modest absolute vision scores.
- **Coding: 52/100.** LCB v6 52.0 + Codeforces 940 + SciCode 24.0 lower-mid; capped, no SWE-bench numbers.
- **Cost efficiency: 100/100.** $0 Apache 2.0 weights with edge-latency footprint — free is the product.
- **Overall Score: 59/100.** Mean (45+56+60+80+52)/5 = 293/5 = 58.6 → 59. Best fit: mobile/edge multimodal tasks where latency and $0 weights beat raw capability.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
