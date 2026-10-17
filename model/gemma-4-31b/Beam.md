# Gemma 4 31B — findings by Beam

- Source: Google/Gemma 4 31B, `google/gemma-4-31b`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's dense flagship (Mar 31, 2026): 31B params, 256K context. Text/image/video in. BenchLM 39.88 (#140 of 954). MMLU Pro 85.2%, GPQA Diamond 84.3%, LiveCodeBench v6 80.0%, MMMU Pro 76.9%, MRCRv2 66.4%, AA-LCR 69.7%. Open weights (Apache 2.0). Free.
- **Provider / access:** HuggingFace `google/gemma-4-31b`; Google AI Studio; Ollama; DeepInfra.
- **Release / knowledge:** Released 2026-03-31; knowledge cutoff not stated.
- **IDs:** `google/gemma-4-31b`
- **Context window:** 256,000 tokens; max output 131,072.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host. ($0.14/$0.40 per 1M on DeepInfra.)
- **Architecture:** Dense, 31B params, 60 layers, 256K context, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **19.7** (Estimated · #109/128)
- Gert Labs: **35.26%** (BenchLM)
- Terminal-Bench: not reported
- OSWorld: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **66.6** (Unranked · 3 rankable rows)
- MMLU Pro: **85.2%** (Google model card)
- GPQA Diamond: **84.3%** (Google model card)
- HLE: **26.5%** (Google model card)
- HLE w/o tools: **19.5%** (Google model card)
- MRCRv2: **66.4%** (Google model card)
- AA-LCR: **69.7%** (Artificial Analysis)
- CritPt: **1.4%** (Artificial Analysis)
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): **31.7** (Supported · #89/150)
- LiveCodeBench v6: **80.0%** (Google model card)
- SWE-Rebench: **41.6%** (BenchLM)
- React Native Evals: **75.2%** (BenchLM)
- Codeforces ELO: **2150** (Google model card)
- AA Coding Index: not reported
- AA-SciCode: not reported
- Terminal-Bench Hard: **27.08%** (NVIDIA NVFP4)

Long context:

- 256K window; MRCRv2 **66.4%** (Google model card); AA-LCR **69.7%** (Artificial Analysis).

Multimodal:

- Multimodal public-lane (BenchLM): **74.3** (#26/54)
- MMMU Pro: **76.9%** (Google model card)
- MATH-Vision: **85.6%** (Google model card)
- MedXPertQA MM: **61.3%** (Google model card)
- OmniDocBench 1.5: **0.131** (Google model card, lower is better)

### Normalized scores (1–100)

- **Tool use: 54/100.** Agentic lane #109/128 (19.7), Gert Labs 35.26%; caps at no published Terminal-Bench/OSWorld.
- **Reasoning: 68/100.** MMLU Pro 85.2%, GPQA 84.3%, HLE 26.5%/19.5%, MRCRv2 66.4%, AA-LCR 69.7%, CritPt 1.4%; caps at CritPt 1.4%.
- **Context window: 66/100.** 256K window; MRCRv2 66.4%, AA-LCR 69.7%.
- **Multimodal: 76/100.** Text/image/video in; MMMU Pro 76.9%, MATH-Vision 85.6%, MedXPertQA 61.3%; caps at no published CharXiv.
- **Coding: 66/100.** LiveCodeBench 80.0%, SWE-Rebench 41.6%, React Native 75.2%, Codeforces 2150, Terminal-Bench Hard 27.08%; caps at SWE-Rebench 41.6%.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 66/100.** Mean of five quality dims (BenchLM 39.88); best-fit for local multimodal reasoning at zero cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google model card, BenchLM, NVIDIA NIM, AIML API, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Gemma 4 31B is the dense flagship (31B params, 256K context). Apache 2.0 open weights. Superseded by larger closed models but best in Gemma 4 family.<|end|>>2>