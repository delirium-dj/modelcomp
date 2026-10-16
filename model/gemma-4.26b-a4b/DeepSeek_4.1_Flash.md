# Gemma 4 26B A4B — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`google/gemma-4-26B-A4B`)
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-10-05)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: official Hugging Face model card `google/gemma-4-26B-A4B` plus the Google launch blog, Artificial Analysis, BenchLM).
> **New rows found.** The HF family card now publishes **MRCR v2 8-needle 128K 44.1%**, **Tau2 (average over 3) 68.2%** (vendor), **HLE 8.7% no-tools / 17.2% with search**, **MMMLU 86.3%** and **OmniDocBench 1.5 0.149**. Artificial Analysis scores the reasoning build **17 (estimated; v4.3.2, #15/141 similar-size open weights; BenchLM lists 16.7; was 16.7 in the prior pass)** with **AA-LCR 65.7%**, **AA Coding Index 39.3%**, **AA-SciCode 40.0%**, **AA-IFBench 72.4%**, **CritPt 0.0%** and **AA-Omniscience index -50.8 / accuracy 19.1% / hallucination 86.4%**; first verified hosted pricing **~$0.10 in / $0.40 out** per 1M (50% cache discount), 62.0 tok/s, TTFT 0.97s. BenchLM gives **45.65/100 (#119/950, partial coverage)**.
> **Corrections.** The architecture is **25.2B total / 3.8B active** parameters (the earlier "26.1B / ~4B" was off): 30 layers, 8-of-128 experts active plus 1 shared. GDPval-AA normalizes to **3.3%** (was recorded as 2.6%). The family launched **2026-04-02** per the Google launch blog.
> **Conflicts.** **Tau2 68.2% (vendor)** vs **43.6% (AA)** — a wide, unexplained spread. Audio is **not** supported (HF/AA list text, image and video only), consistent with the prior pass.
> Sources: https://huggingface.co/google/gemma-4-26B-A4B · https://artificialanalysis.ai/models/gemma-4-26b-a4b · https://benchlm.ai/models/gemma-4-26b-a4b · https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's 26B-class Mixture-of-Experts entry in the open-weight Gemma 4 family — only ~3.8B parameters active per token, with a 256K context and strong math/knowledge density; the weakest link is multi-step agentic tool use.
- **Provider / access:** Google DeepMind. Hugging Face `google/gemma-4-26B-A4B` (base) and `google/gemma-4-26B-A4B-it` (instruction-tuned), Ollama, AI Studio, Kaggle, Google Cloud Model Garden; open weights under **Apache 2.0**. Hosted routes ~$0.10/$0.40 per 1M (AA median across ~9 providers).
- **Release / knowledge:** Gemma 4 family launched **2026-04-02** (Google launch blog; AA lists 26B A4B as 2026-04-02). A July 15, 2026 refresh changed tool-calling behavior, chat template and vision defaults without a version bump. Knowledge cutoff **January 2025**.
- **IDs:** `google/gemma-4-26B-A4B` / `google/gemma-4-26B-A4B-it`; no OpenCode Zen Free ID verified.
- **Context window:** **256K tokens** (official model card; AA reports 256K).
- **Modalities:** Text, image and video in; **text out**. Reasoning (thinking mode), native function calling / structured output, 140+ languages. Audio benchmarks are published only for the 12B and edge models, so audio input is not claimed here.
- **Pricing (as of 2026-10-16):** Open weights, self-host free under Apache 2.0; hosted median ~**$0.10 in / $0.40 out** per 1M (Artificial Analysis, ~50% cache discount; blended ~$0.10). No first-party per-token API price.
- **Architecture:** Sparse MoE, **25.2B total / 3.8B active per forward pass**, 30 layers, 1024-token sliding window in a hybrid local/global attention stack with p-RoPE, **8 active experts of 128 total plus 1 shared**; ~550M vision encoder. Dense-equivalent quality for ~4B compute; runs in ~16 GB at Q4. Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Tau2 (average over 3): **68.2%** vendor (HF card) vs **43.6%** (Artificial Analysis)
- GDPval-AA: **713 Elo / 3.3% normalized** (Artificial Analysis)
- Agentic composite: vendor 31B sibling ranked near-bottom (#129 of 134, 25.5/100); 26B A4B trails the 31B
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AIME 2026 (no tools): **88.3%** (Gemma 4 technical report, arXiv:2607.02770)
- MMLU Pro: **82.6%** (official model card)
- GPQA Diamond: **82.3%** vendor / **79.2%** AA (Gemma 4 report; Artificial Analysis)
- HLE: **8.7%** no-tools / **17.2%** with search (Gemma 4 report)
- AA-HLE: **19.3%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **17** (estimated; v4.3.2, #15/141 similar-size open weights) — BenchLM lists **16.7**
- AA-LCR: **65.7%** (Artificial Analysis)
- MMMLU (multilingual): **86.3%** (Gemma 4 report)
- BBH / BigBench Extra Hard (micro avg): **64.8%** (Gemma 4 report)
- IFEval **98.5%** / IFBench **72.0%** / AA-IFBench **72.4%**
- Omniscience Index **-50.8** / Accuracy **19.1%** / Hallucination Rate **86.4%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)

Coding:

- LiveCodeBench v6: **77.1%** (Gemma 4 report)
- Codeforces ELO: **1718** (Gemma 4 report)
- SciCode / AA-SciCode: **40.0%** (Gemma 4 report; Artificial Analysis)
- AA Coding Index: **39.3** (Artificial Analysis)
- SWE-Rebench (31B sibling proxy): **41.6%** (independent testing, gemmai4.com)
- DeepSWE / SWE-bench Verified: no verified public score found

Long context:

- MRCR v2 8-needle 128K (average): **44.1%** (HF card)
- AA-LCR: **65.7%** (Artificial Analysis long-context reasoning)
- RULER: **97.3% @32K / 89.8% @128K** (Gemma 4 report, no thinking)
- LOFT retrieval Recall@k: **66.3 @128K**
- GraphWalks F1: **72.6** (<128K)
- MTOB eng→kgv: **48.9 @256K**

Multimodal:

- MMMU Pro: **73.8%** vendor / **69.2%** AA
- MATH-Vision: **82.4%**
- InfographicVQA: **89.3%**
- MedXpertQA MM: **58.1%**
- OmniDocBench 1.5 (average edit distance, lower is better): **0.149** (HF card)
- LMArena Elo: **1438** (rank 61, as of 2026-06-19)

### Normalized scores (1–100)

- **Tool use: 55/100.** Native function calling exists, but the vendor Tau2 68.2% and AA's 43.6% diverge widely, and GDPval-AA 713 Elo plus a near-bottom agentic composite place it in the mid band; this is explicitly the model's biggest gap — strong single-turn reasoning does not translate to reliable multi-step tool use.
- **Reasoning: 72/100.** MMLU Pro 82.6%, GPQA 82.3% and AIME 2026 88.3% are excellent for a ~4B-active MoE, but HLE 8.7% and AA Intelligence Index 17 show the frontier-difficulty ceiling.
- **Context window: 76/100.** 256K native with RULER 89.8% at 128K and 97.3% at 32K maps to the upper half of the 200K–500K band; LOFT 66.3 and MTOB 48.9 at depth keep it below the ≥1M tier.
- **Multimodal: 80/100.** Image + video in with text out (MMMU Pro 73.8%, MATH-Vision 82.4%, InfographicVQA 89.3%) is strong in the +video band; no audio input and no non-text output caps it below 85.
- **Coding: 72/100.** LiveCodeBench v6 77.1% and a 1718 Codeforces ELO are competitive, but SciCode 40.0% and the 31B sibling's 41.6% SWE-Rebench show that repository-level software engineering is a real-world weak spot.
- **Cost efficiency: 96/100.** Apache 2.0 open weights mean $0 self-host at a ~16 GB Q4 footprint, with no MAU cap or field-of-use restriction; only cloud/API access carries cost.
- **Overall Score: 71/100.** Mean of (55 + 72 + 76 + 80 + 72) / 5 = 71.0 → **71** (unchanged — new rows corroborate the bands; the architecture and GDPval-normalized corrections do not move a dimension). Best-fit: cheap self-hosted math/knowledge and document-vision work, not autonomous agent pipelines.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-16
- Method: public internet research; third-pass re-verification on 2026-10-16 against the official Hugging Face model card `google/gemma-4-26B-A4B`, the Google launch blog, Artificial Analysis and BenchLM, adding the first MRCR v2 long-context, Tau2-vendor, MMMLU and OmniDocBench rows, correcting the parameter count to 25.2B/3.8B and the GDPval-AA normalization, and flagging the Tau2 vendor-vs-AA spread. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
