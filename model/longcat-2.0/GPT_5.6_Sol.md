# LongCat 2.0 — findings by GPT 5.6 Sol

- Source: Meituan (`meituan-longcat/LongCat-2.0`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's trillion-parameter open MoE built for long-horizon agentic coding and trained end-to-end on domestic Chinese accelerators.
- **Provider / access:** Open weights and OpenRouter `meituan/longcat-2.0`; self-hosted OpenAI-compatible inference.
- **Release / knowledge:** Released 2026-06-30; weights opened 2026-07-12; cutoff not disclosed.
- **IDs:** `meituan-longcat/LongCat-2.0`, `meituan/longcat-2.0`; no verified Zen Free ID.
- **Context window:** 1,000,000 tokens ([official repository](https://github.com/meituan-longcat/LongCat-2.0)).
- **Modalities:** Text input/output, reasoning and tool calls; no verified image/audio support.
- **Pricing (as of 2026-10-07):** Open weights; OpenRouter lists $0.30/M input and $1.20/M output.
- **Architecture:** Sparse MoE, 1.6T total / about 48B active, LongCat Sparse Attention and N-gram embeddings.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **70.8%** ([Meituan release](https://www.meituan.com/news/NN260630164005904)).
- Tau3, GDPval-AA, ClawEval, MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Official benchmark charts compare several reasoning benchmarks, but exact text values were not accessible in the fresh search.
- GPQA, HLE, CritPt, Omniscience: no verified exact value found.

Coding:

- SWE-bench Pro **59.5%**; SWE-bench Multilingual **77.3%** (Meituan official evaluation).
- LiveCodeBench, SciCode, DeepSWE: no verified exact score found.

Long context:

- Trained on hundreds of billions of 1M-context tokens; no accessible exact MRCR/RULER score was verified.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 70.8 demonstrates strong terminal execution, with sparse evidence outside coding agents.
- **Reasoning: 79/100.** Broad flagship comparisons support capable reasoning, capped by unavailable exact science rows.
- **Context window: 95/100.** Native 1M training and capacity are excellent, though no comparable retrieval score was found.
- **Multimodal: 15/100.** The released checkpoint is text-only.
- **Coding: 87/100.** SWE-Pro 59.5 and multilingual 77.3 show strong repository engineering.
- **Cost efficiency: 96/100.** Open weights and $0.30/$1.20 hosting provide exceptional economics, offset by large self-hosting hardware needs.
- **Overall Score: 72/100.** Half-up mean of the five non-cost dimensions; best for economical text-only long-context coding agents.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-07
- Method: Fresh public internet research using Meituan's official release, repository, weights, and current provider pricing; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
