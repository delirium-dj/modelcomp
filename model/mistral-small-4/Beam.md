# Mistral Small 4 — findings by Beam

- Source: Mistral/Mistral Small 4, `mistralai/mistral-small-2603` (`mistral-small-2603`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral AI's March 2026 MoE model (119B total / ~6.5B active parameters, Apache 2.0 ancestry) with native multimodality (text + image in), 256K context, and configurable reasoning effort (standard vs. heavy reasoning modes). Part of the Devstral-lineage agentic coding family.
- **Provider / access:** Mistral La Plateforme `mistral-small-2603`; OpenRouter, Hugging Face, Azure AI Foundry. Chat Completions / Conversations; function calling, structured outputs, JSON mode, reasoning mode, vision.
- **Release / knowledge:** Released 2026-03-16 (model card "Mistral Small 4 119B A6B"). Knowledge cutoff not published (OpenRouter lists "Not published"). Apache 2.0 weights (ancestry).
- **IDs:** `mistral-small-2603`, `mistralai/mistral-small-2603`, `mistralai/Mistral-Small-4-119B-2603` (HF), `opencode/mistral-small-4`.
- **Context window:** 262,144 tokens total (OpenRouter / LLMBenchmark); max output 210K. AA-LCR 49.7% (reasoning mode) / 28.3% (non-reasoning).
- **Modalities:** Text + image in; text out; reasoning yes (configurable effort); tool calling yes; structured outputs / JSON mode yes; vision. No audio/video.
- **Pricing (as of 2026-11-06):** $0.15 / $0.60 per 1M input/output tokens (hosted; cache $0.015/1M input); self-host Apache 2.0 ancestry = $0. Output speed 159 tok/s (OpenRouter, reasoning effort).
- **Architecture:** MoE transformer, 119B total / ~6.5B active params per token; unified capabilities of several Mistral flagships; reasoning + non-reasoning modes in one model. Devstral-lineage agentic coding.

### Raw benchmarks found

Maker-reported (Mistral AI, launch 2026-03-16; own numbers, not independent):
- AIME 2025: **36.0%** (instruct) / **84.0%** (reasoning)
- GPQA Diamond: **59.1%** (instruct) / **71.2%** (reasoning)
- LiveCodeBench: **32** (instruct) / **64** (reasoning)
- MMLU Pro: **73.5%** (instruct) / **78.0%** (reasoning)
- MMMU-Pro: **46.3** (instruct) / **60** (reasoning)
- IFBench (AllenAI): **35.7** (instruct) / **48** (reasoning)
- Arena Hard: **55.8** (instruct) / **58.3** (reasoning)
- LCR: **44** (instruct) / **72** (reasoning)

Independent (Artificial Analysis / OpenRouter / Vals AI / BenchmarkList / LLMBenchmark):
- AA Intelligence Index: **4.3** (OpenRouter, reasoning mode)
- Coding Index (AA): **26.6** (OpenRouter)
- Agentic Index (AA): **0.8** (OpenRouter)
- GPQA Diamond: **76.9%** (AA, reasoning mode)
- HLE: **9.9%** (AA, reasoning mode) / **3.8%** (AA, non-reasoning)
- IFBench: **48.2%** (AA, reasoning) / **32.8%** (AA, non-reasoning)
- Tau2-Bench Telecom: **41.2%** (AA, reasoning) / **18.4%** (AA, non-reasoning)
- Tau-Bench Banking: **4.9%** (AA, reasoning)
- AA-LCR: **49.7%** (AA, reasoning) / **28.3%** (AA, non-reasoning)
- CritPt: **0.3%** (AA, both modes)
- Terminal-Bench Hard: **10.6%** (AA, non-reasoning)
- SciCode: **38.8%** (AA / BenchmarkList)
- Terminal-Bench 2.0: **16.85-16.9%** (Vals AI)
- Terminal-Bench 2.1: **21.0%** (OpenRouter / AA)
- GDPval-AA: **0.0%** (OpenRouter / AA); AA-Briefcase: **241** (BenchmarkList)
- Vibe Code Bench (Vals AI, OpenHands): **0.0%** (0/100)
- SAGE (Vals AI): **59.16%**
- ALE-Bench: **497.63** ($0.0156/problem)
- BLXBench: **75.2%** (BenchmarkList)
- HLE: **9.9%** (BenchmarkList)
- Context Arena avg: **14.0%**
- IDP Leaderboard (multimodal): **71.5**
- Vals Multimodal Index: IDP 71.5 (BenchmarkList)
- SciCode: **38.8%**

### Normalized scores (1-100)

- **Tool use: 62/100.** Agentic Index 0.8 and GDPval-AA 0.0% are weak, but Tau2-Bench Telecom 41.2% (reasoning) and Terminal-Bench 2.1 21.0% show mid-tier agentic coding from the Devstral lineage; Terminal-Bench Hard 10.6% caps it.
- **Reasoning: 68/100.** GPQA Diamond 76.9% (reasoning) and MMLU Pro 78.0% are strong for a 119B MoE; AIME 2025 84.0% (maker) and HLE 9.9% (independent) plus AA Intelligence Index 4.3 cap it. Wide spread between standard (57.1% GPQA) and reasoning (76.9%) modes.
- **Context window: 74/100.** 262K context maps to the 256K tier; AA-LCR 49.7% (reasoning) / 28.3% (non-reasoning) is moderate retrieval, capping above-base gains.
- **Multimodal: 60/100.** Text + image in, text out; MMMU-Pro 60 (maker) and IDP Leaderboard 71.5; no audio/video.
- **Coding: 60/100.** SciCode 38.8%, LiveCodeBench 64 (maker), Terminal-Bench 2.1 21.0%, Coding Index 26.6 — mid-tier generalist coding with configurable reasoning; Vibe Code Bench 0.0% caps agentic coding claim.
- **Cost efficiency: 90/100.** $0.15/$0.60 per 1M is very cheap for a 119B MoE with reasoning + vision; Apache 2.0 ancestry = $0 self-host; cache $0.015/1M input.
- **Overall Score: 65/100.** Mean of five quality dims (62 + 68 + 74 + 60 + 60) / 5 = 324 / 5 = 64.8 -> 65.

---

## Signature

- Provided by: **Beam (Beam)** - 2026-11-06
- Method: public internet research (Mistral docs/blog, Hugging Face model card, Artificial Analysis, OpenRouter, Vals AI, BenchmarkList, LLMBenchmark); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - https://docs.mistral.ai/models/model-cards/mistral-small-4-26-03
  - https://mistral.ai/news/mistral-small-4
  - https://huggingface.co/mistralai/Mistral-Small-4-119B-2603
  - https://artificialanalysis.ai/models/mistral-small-4
  - https://openrouter.ai/mistralai/mistral-small-2603
  - https://www.vals.ai/models/mistralai_mistral-small-2603
  - https://benchmarklist.com/models/mistralai-mistral-small-2603/
  - https://llmbenchmark.ai/models/mistral-small-2603
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
