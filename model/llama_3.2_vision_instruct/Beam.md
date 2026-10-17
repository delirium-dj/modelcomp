# Llama 3.2 11B Vision Instruct — findings by Beam

- Source: Meta/Llama 3.2 11B Vision Instruct, `meta/llama-3.2-11b-vision-instruct`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 11B Vision Instruct
- **Short description:** Meta's multimodal model (Sep 25, 2024): 11B params (10.6B), 128K context. Text/image in. MMMU 50.7%, MMMU-Pro 33.0%, VQAv2 66.83%, TextVQA 73.14%, DocVQA 62.26%. Open weights (Llama 3.2 Community License). Free.
- **Provider / access:** HuggingFace `meta-llama/Llama-3.2-11B-Vision-Instruct`; NVIDIA NIM; OpenRouter.
- **Release / knowledge:** Released 2024-09-25; knowledge cutoff Dec 2023.
- **IDs:** `meta/llama-3.2-11b-vision-instruct`
- **Context window:** 128,000 tokens; max output 4,096.
- **Modalities:** text, image in; text out; reasoning no; tool calling yes. Open weights (Llama 3.2 Community License).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host.
- **Architecture:** 11B (10.6B), Llama 3.1 text-only model + vision adapter (cross-attention layers), 128K context, Llama 3.2 Community License.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- Tau2-Bench Telecom: **14.6%** (BenchmarkList)
- Terminal-Bench Hard: **0.8%** (BenchmarkList)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- MMLU: **46.4%** (BenchmarkList)
- MMLU-Pro: **46.4%** (BenchmarkList)
- GPQA Diamond: **22.1%** (BenchmarkList)
- HLE: **5.5%** (BenchmarkList)
- MuSR: **9.8%** (BenchmarkList)
- AA Intelligence Index: **5.4** (Artificial Analysis via BenchmarkList)

Coding:

- Coding public-lane (BenchLM): not individually reported
- No coding benchmarks reported for 11B Vision.

Long context:

- 128K window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): not individually reported
- MMMU (val, CoT): **50.7%** (NVIDIA model card)
- MMMU-Pro, Standard: **33.0%** (NVIDIA model card)
- VQAv2 (test-dev, 30k): **66.83%** (NVIDIA model card)
- TextVQA (val): **73.14%** (NVIDIA model card)
- DocVQA (val, unseen): **62.26%** (NVIDIA model card)
- RealWorldQA: **62.2%** (BenchLM comparison)

### Normalized scores (1–100)

- **Tool use: 44/100.** Tau2-Bench Telecom 14.6%, Terminal-Bench Hard 0.8%; caps at Terminal-Bench Hard 0.8%.
- **Reasoning: 48/100.** MMLU 46.4%, MMLU-Pro 46.4%, GPQA 22.1%, HLE 5.5%, MuSR 9.8%, AA Intelligence 5.4; caps at AA Intelligence 5.4.
- **Context window: 56/100.** 128K window; caps at no published MRCR.
- **Multimodal: 64/100.** Text/image in; MMMU 50.7%, MMMU-Pro 33.0%, VQAv2 66.83%, TextVQA 73.14%, DocVQA 62.26%, RealWorldQA 62.2%; caps at MMMU-Pro 33.0%.
- **Coding: 40/100.** No coding benchmarks; provisional.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 50.4/100.** Mean of five quality dims (BenchLM not computed, AA Intelligence 5.4); best-fit for local multimodal at zero cost. Low-confidence (older model, Sep 2024).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Meta official, NVIDIA NIM, BenchmarkList, OpenCode data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Llama 3.2 11B Vision Instruct is an older model (Sep 2024). Superseded by Llama 3.3, Llama 4, and newer multimodal models. Llama 3.2 Community License (open weights).<|end|>>2>