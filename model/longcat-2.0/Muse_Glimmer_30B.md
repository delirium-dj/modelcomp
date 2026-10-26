# LongCat-2.0 — findings by Muse Glimmer 30B

- Source: Meituan LongCat / LongCat-2.0
- Date: 2026-10-26
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0
- **Short description:** Meituan open-weight 1.6T MoE model with ~48B active parameters, designed for agentic coding, long-context reasoning and repository-level understanding.
- **Provider / access:** OpenRouter `meituan/longcat-2.0`, SiliconFlow, Kilo Code; Chat Completions API. Open weights on Hugging Face `meituan-longcat/LongCat-2.0`.
- **Release / knowledge:** Released 2026-07-20; knowledge cutoff not published.
- **IDs:** `meituan/longcat-2.0`
- **Context window:** 1,048,576 tokens reported by vendor; Hugging Face config caps max_position_embeddings at 262,144 with YaRN up to 983,040. Max output 131,072 tokens.
- **Modalities:** Input text → text output; tool calling supported; no verified image/audio support.
- **Pricing (as of 2026-10-26):** OpenRouter $0.30 / 1M input, $1.20 / 1M output; SiliconFlow $0.75 / 1M input, $2.95 / 1M output.
- **Architecture:** 1.6T total parameters, ~48B active per token MoE; LongCat Sparse Attention + N-gram Embedding; MIT license open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: 70.8 (longcatai.org benchmarks)
- FORTE: 73.2 (longcatai.org benchmarks)
- BrowseComp: 79.9 (longcatai.org benchmarks)
- RWSearch: 78.8 (longcatai.org benchmarks)
- Tau2-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: 88.9 (Hugging Face INT8 card table)
- IFEval: 90.0 (Hugging Face INT8 card table)
- HLE: 33.7% (Artificial Analysis)
- Artificial Analysis Intelligence Index: 19.1

Coding:

- SWE-bench Pro: 59.5 (longcatai.org benchmarks)
- SWE-bench Multilingual: 77.3 (longcatai.org benchmarks)
- Terminal-Bench 2.1: 70.8 (longcatai.org benchmarks)
- SciCode: 36.3% (Artificial Analysis)
- Terminal-Bench 4.0: 0.0% (Artificial Analysis)

Long context:

- No MRCR/RULER public score published; 1M training window claimed, 256K serving cap noted by third-party review.

### Normalized scores (1–100)

- **Tool use: 71/100.** FORTE 73.2 and Terminal-Bench 70.8 show strong agentic execution; capped by conflicting Terminal-Bench 50.2% on Artificial Analysis and no Tau2-Bench verification.
- **Reasoning: 68/100.** GPQA Diamond 88.9 strong; capped by HLE 33.7% and modest Intelligence Index 19.1.
- **Context window: 90/100.** 1M claimed window with sparse attention; capped by Hugging Face config 262K serving limit and lack of retrieval benchmark.
- **Multimodal: 15/100.** Text-only model; no image/video support verified.
- **Coding: 66/100.** SWE-bench Pro 59.5 and SWE-bench Multilingual 77.3 solid; capped by SciCode 36.3% and Terminal-Bench variant conflict.
- **Cost efficiency: 72/100.** $0.30/$1.20 via OpenRouter competitive for 1.6T MoE; higher SiliconFlow pricing limits score.
- **Overall Score: 62/100.** Mean of Tool 71, Reasoning 68, Context 90, Multimodal 15, Coding 66 = 62.0. Best-fit recommendation: long-context agentic coding with cost-efficient OpenRouter routing; verify actual serving context limit before production.

---

## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-10-26
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
