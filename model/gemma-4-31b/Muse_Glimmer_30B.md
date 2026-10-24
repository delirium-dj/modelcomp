# Gemma 4 31B — findings by Muse Glimmer 30B

- Source: Google DeepMind / gemma-4-31b
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 31B Dense / Gemma-4-31B-IT
- **Short description:** Open-weight natively multimodal language model from Gemma family, built from Gemini-3 research for advanced reasoning and agentic workflows. Apache 2.0 open weights.
- **Provider / access:** Google DeepMind. Open weights Hugging Face `google/gemma-4-31B-it`. Official site https://deepmind.google/models/gemma/gemma-4/
- **Release / knowledge:** Announced 02 Apr 2026; training data cutoff January 2025 per Hugging Face model card.
- **IDs:** Hugging Face `google/gemma-4-31B-it`; base `google/gemma-4-31B`; arXiv technical report 2607.02770
- **Context window:** 256K tokens for 31B dense.
- **Modalities:** Text input/output + image input; no native audio. Vision encoder ~550M params.
- **Pricing as of 2026-10-24:** Open weights Apache 2.0; no license fee. No official commercial per-token pricing published.
- **Architecture:** Dense decoder-only transformer, 30.7B params, 60 layers, sliding window 1024, vocab 262K, hybrid local+global attention, proportional RoPE.

### Raw benchmarks found

**Official DeepMind Gemma 4 model page – Gemma 4 31B IT Thinking**
- Arena AI text as of 4/2/26: 1452 Elo
- MMMLU Multilingual Q&A No tools: 85.2%
- MMMU Pro Multimodal reasoning: 76.9%
- AIME 2026 Mathematics No tools: 89.2%
- LiveCodeBench v6 Competitive coding: 80.0%
- GPQA Diamond Scientific knowledge No tools: 84.3%
- τ2-bench Agentic tool use Retail: 86.4%
Source: https://deepmind.google/models/gemma/gemma-4/

**Hugging Face model card `google/gemma-4-31B-it`**
- MMLU Pro: 85.2%
- AIME 2026 no tools: 89.2%
- LiveCodeBench v6: 80.0%
- Codeforces ELO: 2150
- GPQA Diamond: 84.3%
- Tau2 average over 3: 76.9%
- HLE no tools: 19.5%
- HLE with search: 26.5%
- BigBench Extra Hard: 74.4%
- MMMLU: 88.4%
- Vision MMMU Pro: 76.9%
- OmniDocBench 1.5 avg edit distance: 0.131
- MATH-Vision: 85.6%
- MedXPertQA MM: 61.3%
Source: https://huggingface.co/google/gemma-4-31B-it

**Conflicts / notes**
- Arena Elo 1452 vs 1451 for thinking variant – minor date/variant difference.
- MMMLU vs MMLU Pro naming; both reported at 85.2% on different metrics.
- No Terminal-Bench, GDPval-AA, SWE-bench numbers published in official model card / DeepMind page / technical report as of sources reviewed. HLE reported but low.

### Normalized scores (1–100)

- **Tool use: 72/100.** τ2-bench Retail 86.4% official; Tau2 average 76.9% HF. No Terminal-Bench/GDPval-AA public.
- **Reasoning: 82/100.** GPQA Diamond 84.3%, AIME 2026 89.2%, MMLU Pro 85.2%. HLE no tools 19.5% caps general reasoning.
- **Context window: 78/100.** 256K verified. Below 1M tier.
- **Multimodal: 78/100.** Text+image input → text output. MMMU Pro 76.9%, MATH-Vision 85.6%.
- **Coding: 80/100.** LiveCodeBench v6 80.0%, Codeforces ELO 2150. No SWE-bench verified public.
- **Cost efficiency: 95/100.** Open weights Apache 2.0, self-hostable, no per-token cost.
- **Overall Score: 78/100.** Mean of Tool 72, Reasoning 82, Context 78, Multimodal 78, Coding 80. Strong open-weight multimodal reasoner with solid coding.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
