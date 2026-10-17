# GPT-OSS 120B — findings by Beam

- Source: OpenAI/GPT-OSS 120B, `openai/gpt-oss-120b`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's open-weight MoE (Aug 5, 2025): 117B total / 5.1B active, 128K context. Text-only. BenchLM 37.32. SWE-bench Verified 62.4%. GPQA Diamond 80.9%. AIME 2025 92.5%. Apache 2.0. Free (open weights).
- **Provider / access:** HuggingFace `openai/gpt-oss-120b`; Ollama; vLLM; LM Studio.
- **Release / knowledge:** Released 2025-08-05; knowledge cutoff not stated.
- **IDs:** `openai/gpt-oss-120b`
- **Context window:** 128,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes (adjustable low/medium/high); tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host.
- **Architecture:** MoE, 117B total / 5.1B active, 36 layers, 128 experts (4 active), 128K context, Apache 2.0. Alternating dense and locally banded sparse attention.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **19.5** (Estimated · #110/128)
- Terminal-Bench 2.0: not reported
- τ²-bench Retail: **67.8%** (OpenAI model card)
- BrowseComp: not reported
- Gert Labs: **29.61%** (BenchLM)
- JobBench: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **61.6** (Unranked · 2 rankable rows)
- GPQA Diamond: **80.9%** (OpenAI model card)
- MMLU: **90.0%** (OpenAI model card)
- HLE (tools, high): **19.0%** (OpenAI model card)
- HLE (no tools): not reported for 120B
- AA Intelligence Index: not reported
- AIME 2024 (no tools): **95.8%** (OpenAI model card)
- AIME 2025 (no tools): **92.5%** (OpenAI model card)
- AIME 2025 (tools, high): **97.9%** (OpenAI model card)
- Codeforces Elo (high): **2622** (OpenAI model card)
- HealthBench: **57.6%** (OpenAI model card)

Coding:

- Coding public-lane (BenchLM): **23** (Estimated · #111/150)
- SWE-bench Verified: **62.4%** (OpenAI model card)
- React Native Evals: **71.6%** (BenchLM)
- LiveCodeBench: not reported

Long context:

- 128K window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 58/100.** Agentic lane #110/128 (19.5), τ²-bench Retail 67.8%, Gert Labs 29.61%; caps at Gert Labs 29.61%.
- **Reasoning: 66/100.** GPQA 80.9%, MMLU 90.0%, HLE 19.0%, AIME 92.5%/97.9%, Codeforces 2622, HealthBench 57.6%; caps at HLE 19.0%.
- **Context window: 56/100.** 128K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 60/100.** SWE-bench 62.4%, React Native 71.6%, Codeforces 2622; caps at no published LiveCodeBench/Terminal-Bench.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 56/100.** Mean of five quality dims (BenchLM 37.32); best-fit for free open-weight reasoning at zero cost. (Superseded by GPT-5.1/5.2/5.3/5.4.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI official, BenchLM, arXiv model card, Morph); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. GPT-OSS 120B is OpenAI's first open-weight model since GPT-2 (2019). Apache 2.0 license. Text-only.<|end|>>2>