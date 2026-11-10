# LongCat 2.0 — findings by Iceman

- Source: Meituan/LongCat-2.0
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0
- **Short description:** Meituan’s LongCat-2.0 is an MIT open-weights 1.6T/48B-active MoE model with 1M context, designed for coding, agentic tasks, search/productivity workflows, and long-horizon reasoning.
- **Provider / access:** Open weights on Hugging Face (`meituan-longcat/LongCat-2.0`, MIT license) and hosted providers. Local metadata lists `meituan/longcat-2.0`, hosted ~$0.30/$1.20 per 1M, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card/blog reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `LongCat-2.0`, `meituan-longcat/LongCat-2.0`.
- **Context window:** 1,000,000 tokens (1M); max output not published (local metadata).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** Open weights free to self-host (MIT). Hosted ~$0.30/$1.20 per 1M in/out, $0.006 cached (OpenRouter) / $0.75/$2.95 (SiliconFlow) per local metadata.
- **Architecture:** Sparse MoE transformer, 1.6T total / ~48B active parameters, LongCat Sparse Attention, 1M context, N-gram embedding enhancements (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table for LongCat-2.0 unless noted. Scores marked with `*` in the card are cited from official reports of other models; LongCat-2.0’s own numbers are in-house/self-reported under a unified harness per card note. Local metadata notes AA Terminal-Bench 2.1 can differ (50.19%) from self-reported (70.8%).

Agent / tool use:

- Terminal-Bench 2.1: **70.8** (LongCat-2.0, in-house/self-reported)
- SWE-bench Pro: **59.5**
- SWE-bench Multilingual: **77.3**
- FORTE (general agent): **73.2**
- BrowseComp: **79.9**
- RWSearch: **78.8**

Reasoning / knowledge:

- GPQA-diamond: **88.9**
- IMO-AnswerBench: **81.8**
- IFEval: **90.0**
- Writing Bench: **83.8**

Coding:

- Terminal-Bench 2.1: **70.8** (self-reported)
- SWE-bench Pro: **59.5**
- SWE-bench Multilingual: **77.3**

Long context:

- 1M context supported; dedicated long-context training emphasized. No standalone MRCR/RULER/AA-LCR numeric score extracted from table.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores are provisional/cautious due to primarily vendor/self-reported benchmark context and noted external discrepancy.

- **Tool use: 86/100.** Strong self-reported agent/search/coding-agent results (Terminal-Bench 2.1 70.8, FORTE 73.2, BrowseComp 79.9, RWSearch 78.8), interpreted cautiously.
- **Reasoning: 86/100.** Strong reported reasoning/knowledge/instruction performance (GPQA-diamond 88.9, IMO-AnswerBench 81.8, IFEval 90.0, Writing Bench 83.8).
- **Context window: 94/100.** 1M context with long-horizon/sparse-attention focus for extended tasks.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 86/100.** Strong reported coding/agentic coding (SWE-bench Pro 59.5, SWE-bench Multilingual 77.3, Terminal-Bench 2.1 70.8).
- **Cost efficiency: 88/100.** MIT open weights and low hosted pricing (~$0.30/$1.20) with high capability, though trillion-parameter serving is resource-intensive.
- **Overall Score: 78/100.** Mean of the five non-cost dims (86, 86, 94, 40, 86) = 78.4 → 78. Provisional score for long-context, text-only coding/agent workflows based primarily on vendor/self-reported benchmarks.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from vendor/self-reported benchmark figures and should be interpreted cautiously pending broader independent verification.
- Reference URLs:
  - [LongCat-2.0 model card (Hugging Face)](https://huggingface.co/meituan-longcat/LongCat-2.0)
  - Local repository metadata consulted: `model/longcat-2.0/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
