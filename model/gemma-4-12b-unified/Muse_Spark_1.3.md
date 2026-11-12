# Gemma 4 12b Unified — findings by Muse Spark 1.3

- Source: Google DeepMind (google/gemma-4-12b, unified encoder-free variant)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12b Unified
- **Short description:** Google DeepMind's 11.95B dense encoder-free open-weight model; mid-size Gemma 4 with image/text/audio inputs for on-device and local-agent use.
- **Provider / access:** Open weights (Apache 2.0) via Hugging Face / Kaggle / Ollama / AI Studio; OpenCode Zen `opencode/gemma-4.12b-unified`. Transformers, llama.cpp, MLX, WebGPU supported.
- **Release / knowledge:** 2026-04-02 release (HF blog); training data ends January 2025 (community benchmark page).
- **IDs:** `opencode/gemma-4.12b-unified` (Zen).
- **Context window:** 256K (HF blog + benchmark page, verified); thinking mode off for long-context measurements.
- **Modalities:** image + text + audio in; text out (HF blog: 12B Unified supports audio; video via image path). Function calling yes; reasoning (thinking mode) yes.
- **Pricing (as of 2026-10-05):** $0 open weights (Apache 2.0); hosted pricing varies by provider.
- **Architecture:** 11.95B dense, encoder-free unified; Per-Layer Embeddings + shared KV cache; proprietary training, open weights.

### Raw benchmarks found

> Self-reported vendor numbers via Gemma 4 Technical Report (arXiv:2607.02770), thinking mode enabled unless noted, transcribed via community benchmark page (Aug 2026). Independent third-party rows noted where available. No Terminal-Bench 2.1, Tau3, GDPval, or Claw numbers found.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- IFEval instruction following: **97.2%** (vendor tech report, thinking on)
- IFBench: **74.0%** (vendor tech report, thinking on)

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (vendor tech report, thinking on)
- HLE: **5.2%** no-tools (vendor tech report; 31B is 19.5, 26B A4B 8.7 — 12B trails hard)
- MMLU Pro: **77.2%** (vendor tech report, thinking on)
- AIME 2026 no-tools: **77.5%** (vendor tech report; post-cutoff, contamination-resistant)
- BBH micro avg: **53.0%** (vendor tech report)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMMU Pro: **69.1%** at max resolution (vendor tech report; 67.7 at low-res default)
- MATH-Vision: **79.7%** at max resolution (vendor tech report; 76.7 at low-res)

Coding:

- LiveCodeBench v6: **72.0%** (vendor tech report, thinking on; contamination-resistant)
- SciCode: **38.0%** (vendor tech report)
- Codeforces Elo: **1659** (vendor tech report; vs 2150 for 31B)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 32K: **96.4%** / RULER 128K: **91.2%** (vendor tech report, no thinking mode)
- LOFT retrieval Recall@k 128K: **66.4%** (vendor tech report)
- GraphWalks F1 <128K: **71.0%** (vendor tech report)
- MTOB eng→kgv 128K: **45.1%** (vendor tech report)

### Normalized scores (1–100)

- **Tool use: 62/100.** IFEval 97.2 + IFBench 74.0 show strong instruction following; capped, zero verified TB2.1/Tau3/GDPval/Claw agent numbers.
- **Reasoning: 74/100.** GPQA 78.8 + AIME 77.5 (post-cutoff) + MMLU Pro 77.2 solid mid-tier; capped by HLE 5.2 trailing hard and BBH 53.0.
- **Context window: 78/100.** 256K verified with RULER 96.4 at 32K / 91.2 at 128K (200K–500K tier anchor ~70, up for strong retrieval); capped below 500K–1M native.
- **Multimodal: 88/100.** Image + text + audio in with MMMU Pro 69.1 / MATH-Vision 79.7; capped, text-only output and resolution-sensitive vision scores.
- **Coding: 72/100.** LCB v6 72.0 + Codeforces 1659 + SciCode 38.0 solid mid-pack; capped, no SWE-bench numbers and trails the 31B badly.
- **Cost efficiency: 99/100.** $0 Apache 2.0 open weights, runnable on-device/local; near-free even hosted.
- **Overall Score: 75/100.** Mean (62+74+78+88+72)/5 = 374/5 = 74.8 → 75. Best fit: local/on-device multimodal agent work where open weights and audio input matter more than frontier reasoning.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
