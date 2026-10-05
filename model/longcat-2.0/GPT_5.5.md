# LongCat 2.0 — findings by GPT 5.5

- Source: Meituan LongCat (`longcat-2.0`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan open-weight long-context reasoning model with 1M context and strong price-performance focus.
- **Provider / access:** Hugging Face (`meituan-longcat/LongCat-2.0`), LongCat API, and third-party routers.
- **Release / knowledge:** Public release/tracking in mid-2026; cutoff not stated.
- **IDs:** `meituan-longcat/LongCat-2.0`, `longcat-2.0`.
- **Context window:** **1M tokens**.
- **Modalities:** Text/code model; some third-party summaries claim multimodal tasks, but exact modality matrix was not verified.
- **Pricing (as of 2026-10-05):** Public listings report **$0.30/M input** and **$1.20/M output**; LongCat docs include limited-time discounted pricing.
- **Architecture:** Open-weight reasoning model using LongCat Sparse Attention and hundreds of billions of tokens of 1M-context training data.

### Raw benchmarks found

Agent / tool use:

- BenchLeader: strongest category **long context 58**, lowest category **agents/tools 41**.
- LongCat technical reports describe strong agentic task performance for LongCat-Flash lineage.

Reasoning / knowledge:

- ModelCap ranks LongCat 2.0 **#12** with benchmark index/catalog data.
- Artificial Analysis has an Intelligence/Performance/Price page for LongCat 2.0.

Coding:

- LongCat-vs-GPT benchmark page compares LongCat 2.0 on SWE-bench Pro against GPT-family models, but exact snippet values were not recovered.

Long context:

- Hugging Face model card says LongCat-2.0 trains on hundreds of billions of tokens of **1M-context** data.
- ModelCap and pricing pages list **1M** context.

### Normalized scores (1–100)

- **Tool use: 48/100.** BenchLeader agents/tools 41 keeps tool score moderate despite agentic lineage.
- **Reasoning: 66/100.** ModelCap #12 and AA tracking support strong non-frontier reasoning.
- **Context window: 96/100.** 1M native long-context training earns near-top context credit.
- **Multimodal: 25/100.** Exact multimodal support was not verified for the base text model.
- **Coding: 62/100.** Coding comparisons exist, but exact standard values were not recovered.
- **Cost efficiency: 92/100.** $0.30/$1.20 with 1M context is excellent.
- **Overall Score: 59/100.** Half-up mean of the five quality dimensions; best fit is cheap open long-context work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

