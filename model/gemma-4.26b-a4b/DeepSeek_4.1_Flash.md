# Gemma 4 26B A4B — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`google/gemma-4-26B-A4B`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's 26B-parameter Mixture-of-Experts entry in the open-weight Gemma 4 family — only ~4B parameters active per token, with 256K context and strong math/knowledge density; the weakest link is multi-step agentic tool use.
- **Provider / access:** Google DeepMind. Hugging Face `google/gemma-4-26B-A4B`, Ollama, AI Studio, Kaggle, Google Cloud Model Garden; open weights (Apache 2.0).
- **Release / knowledge:** Gemma 4 family released 2026-03-31 / 2026-04-02; a July 15, 2026 refresh changed tool-calling behavior, chat template and vision defaults without a version bump. Knowledge cutoff January 2025.
- **IDs:** `google/gemma-4-26B-A4B`; no OpenCode Zen Free ID verified.
- **Context window:** 256K tokens (official model card).
- **Modalities:** Text, image and video in; text out. Reasoning (thinking mode), native function calling / structured output, 140+ languages. Audio benchmarks are published only for the 12B and edge models, so audio input is not claimed here.
- **Pricing (as of 2026-10-05):** Open weights, self-host free under Apache 2.0. No first-party per-token API price verified.
- **Architecture:** Sparse MoE, 26.1B total / ~4B active per forward pass; dense-equivalent quality for ~4B compute. Runs in ~16 GB at Q4. Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **43.6%** (Artificial Analysis)
- GDPval-AA: **713 Elo / 2.6% normalized** (Artificial Analysis)
- Agentic composite: vendor 31B sibling ranked near-bottom (#129 of 134, 25.5/100); 26B A4B trails the 31B
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AIME 2026 (no tools): **88.3%** (Gemma 4 technical report, arXiv:2607.02770)
- MMLU Pro: **82.6%** (official model card)
- GPQA Diamond: **82.3%** vendor / **79.2%** AA (Gemma 4 report; Artificial Analysis)
- HLE: **8.7%** no-tools / **17.2%** with search (Gemma 4 report)
- AA-HLE: **19.3%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **16.7** (Artificial Analysis)
- BBH (micro avg): **64.8%** (Gemma 4 report)
- IFEval **98.5%** / IFBench **72.0%** / AA-IFBench **72.4%**
- Omniscience Accuracy **19.1%** / Hallucination Rate **86.4%** (Artificial Analysis)

Coding:

- LiveCodeBench v6: **77.1%** (Gemma 4 report)
- Codeforces ELO: **1718** (Gemma 4 report)
- SciCode / AA-SciCode: **40.0%** (Gemma 4 report; Artificial Analysis)
- AA Coding Index: **39.3** (Artificial Analysis)
- SWE-Rebench (31B sibling proxy): **41.6%** (independent testing, gemmai4.com)
- DeepSWE / SWE-bench Verified: no verified public score found

Long context:

- RULER: **97.3% @32K / 89.8% @128K** (Gemma 4 report, no thinking)
- LOFT retrieval Recall@k: **66.3 @128K**
- GraphWalks F1: **72.6** (<128K)
- MTOB eng→kgv: **48.9 @256K**

Multimodal:

- MMMU Pro: **73.8%** vendor / **69.2%** AA
- MATH-Vision: **82.4%**
- InfographicVQA: **89.3%**
- MedXpertQA MM: **58.1%**
- LMArena Elo: **1438** (rank 61, as of 2026-06-19)

### Normalized scores (1–100)

- **Tool use: 55/100.** Native function calling exists, but GDPval-AA 713, Tau2 43.6% and a near-bottom agentic composite place it in the mid band; this is explicitly the model's biggest gap — strong single-turn reasoning does not translate to reliable multi-step tool use.
- **Reasoning: 72/100.** MMLU Pro 82.6%, GPQA 82.3% and AIME 2026 88.3% are excellent for a ~4B-active MoE, but HLE 8.7% and AA Intelligence Index 16.7 show the frontier-difficulty ceiling.
- **Context window: 76/100.** 256K native with RULER 89.8% at 128K and 97.3% at 32K maps to the upper half of the 200K–500K band; LOFT 66.3 and MTOB 48.9 at depth keep it below the ≥1M tier.
- **Multimodal: 80/100.** Image + video in with text out (MMMU Pro 73.8%, MATH-Vision 82.4%, InfographicVQA 89.3%) is strong in the +video band; no audio input and no non-text output caps it below 85.
- **Coding: 72/100.** LiveCodeBench v6 77.1% and a 1718 Codeforces ELO are competitive, but SciCode 40.0% and the 31B sibling's 41.6% SWE-Rebench show that repository-level software engineering is a real-world weak spot.
- **Cost efficiency: 96/100.** Apache 2.0 open weights mean $0 self-host at a ~16 GB Q4 footprint, with no MAU cap or field-of-use restriction; only cloud/API access carries cost.
- **Overall Score: 71/100.** Mean of (55 + 72 + 76 + 80 + 72) / 5 = 71.0 → **71**. Best-fit: cheap self-hosted math/knowledge and document-vision work, not autonomous agent pipelines.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-05
- Method: public internet research (Gemma 4 technical report summary, official model card, BenchLM/Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
