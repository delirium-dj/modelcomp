# Gemma 4 E4B — findings by GPT-6 Luna

- Source: Google/Gemma 4 E4B, `google/gemma-4-e4b`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google's Apr 2026 Apache-2.0 edge model (4.5B effective, 128K, image+audio in): MMLU-Pro 69.4%, LiveCodeBench v6 52.0%, Q4 GGUF 4.59 GB at $0.02/$0.10.
- **Provider / access:** HuggingFace `google/gemma-4-e4b`; Google AI Studio; Ollama.
- **Release / knowledge:** Released 2026-03-31; knowledge cutoff not stated.
- **IDs:** `google/gemma-4-E4B` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 128,000 total
- **Modalities:** Text, image, audio in; video as frames; text out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** Hosted $0.02/$0.10 per 1M; Apache 2.0 self-host $0 (Q4 GGUF 4.59 GB)
- **Architecture:** Dense, 4.5B effective (8B with embeddings), 42 layers, 128K context, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not computed in the collected extract
- τ²-bench: **20.8%** (Artificial Analysis)
- GDPval-AA: **0.0%** / **177** (Artificial Analysis)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **32.4** (Unranked · 3 rankable rows)
- MMLU Pro: **69.4%** (Google model card)
- GPQA Diamond: **58.6%** (Google model card)
- HLE: not reported
- MRCRv2: **25.4%** (Google model card)
- AA-LCR: **32.0%** (Artificial Analysis)
- CritPt: **0.6%** (Artificial Analysis)
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): **12.5** (Estimated · #138/150)
- LiveCodeBench v6: **52.0%** (Google model card)
- AA Coding Index: **9.4%** (Artificial Analysis)
- AA-SciCode: **24.4%** (Artificial Analysis)
- Codeforces ELO: **940** (Google model card)

Long context:

- 128K window; MRCRv2 **25.4%** (Google model card); AA-LCR **32.0%** (Artificial Analysis).

Multimodal:

- Multimodal public-lane (BenchLM): **22.2** (#52/54)
- MMMU Pro: **52.6%** (Google model card)
- AA-MMMU-Pro: **51.4%** (Artificial Analysis)
- MATH-Vision: **59.5%** (Google model card)
- MedXPertQA MM: **28.7%** (Google model card)
- OmniDocBench 1.5: **0.181** (Google model card, lower is better)

### Normalized scores (1–100)

- **Tool use: 50/100.** τ²-bench 20.8%, GDPval-AA 0.0%/177; caps at GDPval-AA 0.0%.
- **Reasoning: 56/100.** MMLU Pro 69.4%, GPQA 58.6%, MRCRv2 25.4%, AA-LCR 32.0%, CritPt 0.6%; caps at CritPt 0.6%.
- **Context window: 56/100.** 128K window; MRCRv2 25.4%, AA-LCR 32.0%.
- **Multimodal: 60/100.** Text/image/audio/video in; MMMU Pro 52.6%, MATH-Vision 59.5%, MedXPertQA 28.7%; caps at MMMU Pro 52.6%.
- **Coding: 52/100.** LiveCodeBench 52.0%, AA Coding 9.4%, AA-SciCode 24.4%, Codeforces 940; caps at AA-SciCode 24.4%.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 54.8/100.** Half-up mean of the five non-cost quality dimensions: (50 + 56 + 56 + 60 + 52) / 5 = 54.8. Cost efficiency is excluded. best-fit for edge multimodal at zero cost.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://huggingface.co/google/gemma-4-E4B)
  - [Source 2](https://ai.google.dev/gemma/docs)
  - [Source 3](https://artificialanalysis.ai/models/gemma-4-e4b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
