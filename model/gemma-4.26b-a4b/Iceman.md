# Gemma 4 26B A4B — findings by Iceman

- Source: Google DeepMind/Gemma 4 26B A4B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind’s Gemma 4 26B A4B is an open-weight Mixture-of-Experts multimodal model (25.2B total / 3.8B active) optimized for efficient high-throughput reasoning, coding, and agentic tasks.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-26B-A4B`, Apache 2.0), Google AI Studio, and third-party hosts. Local metadata lists `google/gemma-4-26b-a4b-it`.
- **Release / knowledge:** Gemma 4 family release (HF card reviewed 2026-11-10). Pre-training cutoff January 2025 per HF card.
- **IDs:** `gemma-4-26B-A4B`, `google/gemma-4-26B-A4B`, `google/gemma-4-26b-a4b-it`.
- **Context window:** 256K tokens (262,144; local metadata/HF card).
- **Modalities:** Text and image input; text output (HF card; video via frame sequences in general Gemma 4 capabilities).
- **Pricing (as of 2026-11-10):** Open weights free to self-host (Apache 2.0). Hosted pricing varies (local metadata cites free on Google AI Studio, ~$0.09/$0.30 per 1M on OpenRouter, $0.13/$0.40 on some providers).
- **Architecture:** Sparse MoE transformer, 25.2B total / 3.8B active parameters, 30 layers, 8 active / 128 total experts + 1 shared, 1024 sliding window, 256K context, ~550M vision encoder (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `google/gemma-4-26B-A4B` (instruction-tuned results table, Gemma 4 26B A4B column) unless noted.

Agent / tool use:

- Tau2 (average over 3): **68.2%**
- HLE with search: **17.2%**
- Native function-calling support highlighted; other standardized agent benchmarks (Terminal-Bench 2.1, GDPval-AA, Toolathon, MCP-Atlas): **no verified public score found** in reviewed card

Reasoning / knowledge:

- MMLU Pro: **82.6%**
- GPQA Diamond: **82.3%**
- AIME 2026 (no tools): **88.3%**
- BigBench Extra Hard: **64.8%**
- MMMLU: **86.3%**
- HLE no tools: **8.7%**

Coding:

- LiveCodeBench v6: **77.1%**
- Codeforces ELO: **1718**
- SWE-bench / SWE-Pro / Terminal-Bench: **no verified public score found** in reviewed card

Long context:

- MRCR v2 8 needle 128k (average): **44.1%**
- 256K context window documented.

Multimodal / vision:

- MMMU Pro: **73.8%**
- OmniDocBench 1.5 (avg edit distance, lower is better): **0.149**
- MATH-Vision: **82.4%**
- MedXPertQA MM: **58.1%**

Audio:

- Not supported for 26B A4B per HF card (audio native on E2B/E4B/12B).

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 82/100.** Good agentic/tool-use capability for an efficient MoE (Tau2 68.2%, native function calling, HLE with search 17.2%), though broader terminal/agent benchmark coverage is limited.
- **Reasoning: 86/100.** Strong reasoning/math/knowledge results (AIME 2026 88.3%, GPQA Diamond 82.3%, MMLU Pro 82.6%, BBEH 64.8%, MMMLU 86.3%).
- **Context window: 84/100.** 256K context is strong; MRCR v2 8-needle 128k average 44.1% indicates moderate long-context retrieval performance.
- **Multimodal: 84/100.** Solid vision understanding (MMMU Pro 73.8%, MATH-Vision 82.4%, OmniDocBench 0.149, MedXPertQA MM 58.1%) with image input support.
- **Coding: 84/100.** Strong competitive/programming coding signals (LiveCodeBench v6 77.1%, Codeforces ELO 1718), but no SWE-bench/terminal coding benchmarks reported in reviewed card.
- **Cost efficiency: 96/100.** Only 3.8B active parameters with open weights and low hosted pricing/free tiers make it extremely cost-efficient.
- **Overall Score: 84/100.** Mean of the five non-cost dims (82, 86, 84, 84, 84) = 84.0 → 84. Best fit for efficient open-weight multimodal reasoning, function-calling agents, and coding at low active-compute cost.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [gemma-4-26B-A4B model card (Hugging Face)](https://huggingface.co/google/gemma-4-26B-A4B)
  - Local repository metadata consulted: `model/gemma-4.26b-a4b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
