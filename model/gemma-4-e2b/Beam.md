# Gemma 4 E2B — findings by Beam

- Source: Google/Gemma 4 E2B, `google/gemma-4-e2b`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google's edge model (Mar 31, 2026): 2.3B effective (5.1B with embeddings), 128K context. Text/image/audio in. BenchLM 29.94 (#182 of 954). MMLU Pro 60.0%, GPQA Diamond 43.4%, LiveCodeBench v6 44.0%, MMMU Pro 44.2%. Open weights (Apache 2.0). Free.
- **Provider / access:** HuggingFace `google/gemma-4-e2b`; Google AI Studio; Ollama; Amazon Bedrock; Snowflake.
- **Release / knowledge:** Released 2026-03-31; knowledge cutoff not stated.
- **IDs:** `google/gemma-4-e2b`
- **Context window:** 128,000 tokens; max output not stated.
- **Modalities:** text, image, audio in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host. ($0.04/$0.08 per 1M on Bedrock.)
- **Architecture:** Dense, 2.3B effective (5.1B with embeddings), 35 layers, 128K context, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): Coming soon (not computed)
- τ²-bench: **20.8%** (Artificial Analysis)
- GDPval-AA: **0.0%** / **36** (Artificial Analysis)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **23.7** (Unranked · 3 rankable rows)
- MMLU Pro: **60.0%** (Google model card)
- GPQA Diamond: **43.4%** (Google model card)
- HLE: not reported
- MRCRv2: **19.1%** (Google model card)
- AA-LCR: **16.3%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): **10.9** (Estimated · #140/150)
- LiveCodeBench v6: **44.0%** (Google model card)
- AA Coding Index: **7.2%** (Artificial Analysis)
- AA-SciCode: not reported
- Codeforces ELO: **633** (Google model card)

Long context:

- 128K window; MRCRv2 **19.1%** (Google model card); AA-LCR **16.3%** (Artificial Analysis).

Multimodal:

- Multimodal public-lane (BenchLM): **13.4** (#53/54)
- MMMU Pro: **44.2%** (Google model card)
- AA-MMMU-Pro: **44.6%** (Artificial Analysis)
- MATH-Vision: **52.4%** (Google model card)
- MedXPertQA MM: **23.5%** (Google model card)
- OmniDocBench 1.5: **0.290** (Google model card, lower is better)

### Normalized scores (1–100)

- **Tool use: 48/100.** τ²-bench 20.8%, GDPval-AA 0.0%/36; caps at GDPval-AA 0.0%.
- **Reasoning: 52/100.** MMLU Pro 60.0%, GPQA 43.4%, MRCRv2 19.1%, AA-LCR 16.3%, CritPt 0.0%; caps at CritPt 0.0%.
- **Context window: 52/100.** 128K window; MRCRv2 19.1%, AA-LCR 16.3%.
- **Multimodal: 58/100.** Text/image/audio in; MMMU Pro 44.2%, MATH-Vision 52.4%, MedXPertQA 23.5%; caps at MMMU Pro 44.2%.
- **Coding: 48/100.** LiveCodeBench 44.0%, AA Coding 7.2%, Codeforces 633; caps at AA Coding 7.2%.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 51.6/100.** Mean of five quality dims (BenchLM 29.94); best-fit for edge multimodal at zero cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google model card, BenchLM, Artificial Analysis, CloudPrice); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Gemma 4 E2B is the smallest edge variant (2.3B effective, 128K context). Apache 2.0 open weights. Superseded by larger Gemma 4 variants.<|end|>>2>