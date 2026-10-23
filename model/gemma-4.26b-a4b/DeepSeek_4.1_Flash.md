# Gemma 4 26B A4B — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`google/gemma-4-26B-A4B`)
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-10-05); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gemma-4-26b-a4b`, 9 rows) computes an overall **45.58/100 (#122 of 228)** and re-confirms the prior pass. **No score change.**

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: official Hugging Face model card `google/gemma-4-26B-A4B`, Artificial Analysis, BenchLM, plus the Google blog launch post; Vals AI and OpenRouter have no Gemma 4 26B A4B entry — both 404).
> **New rows found.** The 2026-10-05 pass had no hosted pricing; this pass adds the first verified hosted rates — **~$0.10 in / $0.40 out** per 1M (AA median across 9 providers, 50% cache discount, blended **$0.10/1M**), **62.0 tok/s** output speed, **TTFT 0.97 s**. The official HF card now fills the benchmark table directly and adds **Tau2 (average over 3) 68.2%** (vendor), **MMLU Pro 82.6%**, **AIME 2026 88.3%**, **LiveCodeBench v6 77.1%**, **Codeforces 1718**, **GPQA 82.3%**, **HLE no-tools 8.7% / with-search 17.2%**, **BigBench Extra Hard 64.8%**, **MMMLU 86.3%**, **MMMU Pro 73.8%**, **OmniDocBench 1.5 0.149**, **MATH-Vision 82.4%**, **MedXpertQA MM 58.1%** and **MRCR v2 8-needle 128K 44.1%**. Artificial Analysis / BenchLM add **AA-LCR 65.7%**, **AA-MMMU-Pro 69.2%**, **AA-GPQA Diamond 79.2%**, **AA-HLE 19.3%**, **AA-Omniscience Index -50.8 / accuracy 19.1% / hallucination 86.4%**, **AA Coding Index 39.3%**, **AA-SciCode 40.0%**, **AA-IFBench 72.4%**, **AA Intelligence Index 16.7 (#15/141; AA page prints 17 estimated)** and **GDPval-AA 713 Elo / 3.3% normalized**. BenchLM overall **45.65/100 (#119/950, 22 of 638 benchmarks covered — conservative)**.
> **Corrections.** (1) Architecture is **25.2B total / 3.8B active** with **30 layers** and **8-of-128 experts active (plus 1 shared)** per the HF card and AA — the prior pass's "26.1B total / ~4B active" is superseded. (2) GDPval-AA normalizes to **3.3%** (was 2.6%). (3) Pricing is no longer "unverified": AA publishes a cross-provider median. Release date **2026-04-02** is confirmed by AA and the Google blog (Apr 2, 2026).
> **Conflicts.** (1) **Tau2 68.2% (vendor HF card)** vs **43.6% (AA)** — a wide harness spread, mirroring the 12B's vendor/AA gap. (2) Context window: official card **256K** vs AA FAQ text quoting "260k". (3) LMArena position: Google blog (Jul-2026 era) calls 26B the **#6 open model**; the prior-pass LMArena Elo **1438 (rank 61, 2026-06-19)** is older and not directly comparable.
> Sources: https://huggingface.co/google/gemma-4-26B-A4B · https://artificialanalysis.ai/models/gemma-4-26b-a4b · https://benchlm.ai/models/gemma-4-26b-a4b · https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/ · https://arxiv.org/abs/2607.02770

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's 26B-parameter Mixture-of-Experts entry in the open-weight Gemma 4 family — only ~3.8B parameters active per token, with a 256K context and strong math/knowledge density; the weakest link is multi-step agentic tool use.
- **Provider / access:** Google DeepMind. Hugging Face `google/gemma-4-26B-A4B`, Ollama, AI Studio, Kaggle, Google Cloud Model Garden, NVIDIA NIM; open weights (**Apache 2.0**). Hosted inference via 9 API providers (Artificial Analysis).
- **Release / knowledge:** Released **2026-04-02** (Artificial Analysis and the Google blog launch post; the family page also references 2026-03-31 pre-release postings). Knowledge cutoff **January 2025**.
- **IDs:** `google/gemma-4-26B-A4B`; no OpenCode Zen Free ID verified.
- **Context window:** **256K tokens** (official model card; AA FAQ text quotes 260k). Max output not officially broken out.
- **Modalities:** Text, image and video in; text out. Reasoning (thinking mode), native function calling / structured output, 140+ languages. **No audio** — the HF card confirms audio is native only on E2B/E4B/12B, so audio input is not claimed here.
- **Pricing (as of 2026-10-16):** Open weights, self-host free under Apache 2.0. Hosted median **~$0.10 in / $0.40 out** per 1M (Artificial Analysis, across 9 providers; 50% cache discount; blended 7:2:1 rate ~$0.10/1M). No first-party per-token API price.
- **Architecture:** Sparse MoE, **25.2B total / 3.8B active per forward pass**, **30 layers**, 1024-token sliding window, 262K vocab, **8 active of 128 experts plus 1 shared expert**; ~550M-param vision encoder. Hybrid local/global attention with p-RoPE; bfloat16 weights fit a single 80 GB H100, quantized packs run on consumer GPUs. Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **43.6%** (Artificial Analysis) vs **68.2%** vendor Tau2 average-over-3 (HF card) — wide harness spread
- GDPval-AA: **713 Elo / 3.3% normalized** (Artificial Analysis / BenchLM)
- Agentic composite: vendor 31B sibling ranked near-bottom (#129 of 134, 25.5/100); 26B A4B trails the 31B (prior pass)
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AIME 2026 (no tools): **88.3%** (official HF card / Gemma 4 technical report, arXiv:2607.02770)
- MMLU Pro: **82.6%** (official HF card)
- GPQA Diamond: **82.3%** vendor / **79.2%** AA (HF card; Artificial Analysis)
- HLE: **8.7%** no-tools / **17.2%** with search (official HF card)
- AA-HLE: **19.3%** (Artificial Analysis)
- BigBench Extra Hard (BBH): **64.8%** (official HF card)
- MMMLU (multilingual): **86.3%** (official HF card)
- Artificial Analysis Intelligence Index: **16.7** (BenchLM; AA page prints **17** estimated, #15/141 similar-size open weights)
- AA-LCR: **65.7%** (Artificial Analysis)
- IFEval **98.5%** / IFBench **72.0%** / AA-IFBench **72.4%** (Gemma 4 report; Artificial Analysis)
- Omniscience Index **-50.8** / Accuracy **19.1%** / Hallucination Rate **86.4%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)

Coding:

- LiveCodeBench v6: **77.1%** (official HF card)
- Codeforces ELO: **1718** (official HF card)
- SciCode / AA-SciCode: **40.0%** (Gemma 4 report; Artificial Analysis)
- AA Coding Index: **39.3%** (Artificial Analysis)
- SWE-Rebench (31B sibling proxy): **41.6%** (independent testing, gemmai4.com — prior pass)
- DeepSWE / SWE-bench Verified: no verified public score found

Long context:

- MRCR v2 (8 needle, 128K): **44.1%** (official HF card) — shallow retrieval at depth despite the 256K claim
- AA-LCR: **65.7%** (Artificial Analysis long-context reasoning)
- RULER: **97.3% @32K / 89.8% @128K** (Gemma 4 report, no thinking; prior pass)
- LOFT retrieval Recall@k: **66.3 @128K**; GraphWalks F1: **72.6** (<128K); MTOB eng→kgv: **48.9 @256K** (prior pass)

Multimodal:

- MMMU Pro: **73.8%** vendor / **69.2%** AA
- MATH-Vision: **82.4%** (official HF card)
- InfographicVQA: **89.3%** (prior pass)
- MedXpertQA MM: **58.1%** (official HF card)
- OmniDocBench 1.5 (average edit distance, lower is better): **0.149** (official HF card)
- LMArena Elo: **1438** (rank 61, as of 2026-06-19; Google blog separately ranks 26B as the #6 open model in the era of its launch)

### Normalized scores (1–100)

- **Tool use: 55/100.** Native function calling exists, but GDPval-AA 713 (3.3% normalized), Tau2 43.6% (AA) and a near-bottom agentic composite place it in the mid band; this is explicitly the model's biggest gap — strong single-turn reasoning does not translate to reliable multi-step tool use.
- **Reasoning: 72/100.** MMLU Pro 82.6%, GPQA 82.3% and AIME 2026 88.3% are excellent for a ~3.8B-active MoE, but HLE 8.7% and the AA Intelligence Index 16.7/17 show the frontier-difficulty ceiling.
- **Context window: 76/100.** 256K native with RULER 89.8% at 128K, AA-LCR 65.7% and MRCR v2 44.1% at 128K maps to the upper half of the 200K–500K band; the shallow needle retrieval and depth-dependent LOFT/MTOB keep it below the ≥1M tier.
- **Multimodal: 80/100.** Image + video in with text out (MMMU Pro 73.8%, MATH-Vision 82.4%, InfographicVQA 89.3%) is strong in the +video band; no audio input and no non-text output caps it below 85.
- **Coding: 72/100.** LiveCodeBench v6 77.1% and a 1718 Codeforces ELO are competitive, but SciCode/AA-SciCode 40.0% and the 31B sibling's 41.6% SWE-Rebench show that repository-level software engineering is a real-world weak spot.
- **Cost efficiency: 96/100.** Apache 2.0 open weights mean $0 self-host at a ~16 GB Q4 footprint, with no MAU cap or field-of-use restriction; hosted routes are cheap (~$0.10/$0.40 per 1M), but cloud/API access still carries cost.
- **Overall Score: 71/100.** Mean of (55 + 72 + 76 + 80 + 72) / 5 = 71.0 → **71** (unchanged — new pricing and the extra AA/HF rows corroborate the bands without moving any dimension across a threshold). Best-fit: cheap self-hosted math/knowledge and document-vision work, not autonomous agent pipelines.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research; third-pass re-verification on 2026-10-16 against the official Hugging Face model card `google/gemma-4-26B-A4B`, Artificial Analysis, BenchLM and the Google blog launch post, correcting the architecture (25.2B total / 3.8B active, 30 layers) and GDPval-AA normalization (3.3%), and adding the first verified hosted pricing, output speed/TTFT, and the AA long-context (AA-LCR), omniscience, IFBench and HF benchmark-table rows; Vals AI and OpenRouter were checked and have no 26B A4B entry (404). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
