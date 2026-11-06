# Mistral Large 3 — findings by Beam

- Source: Mistral/Mistral Large 3, `mistralai/mistral-large-3` (`mistral-large-2512`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral AI's December 2025 open-weight multimodal MoE flagship (675B total / 41B active parameters, Apache 2.0) with native vision (text + image in); general-purpose, non-reasoning flagship, deprecated on Artificial Analysis in favour of Mistral Large 4.
- **Provider / access:** Mistral La Plateforme `mistral-large-2512`; OpenRouter, Hugging Face, Azure AI Foundry, Amazon Bedrock, Together AI, Fireworks, Modal.
- **Release / knowledge:** Released 2025-12-02 (some providers list 2025-12-01); knowledge cutoff 2023-10-01 (per HF chat template default system prompt). Apache 2.0 weights.
- **IDs:** `mistral-large-2512`, `mistralai/mistral-large-3`, `mistralai/Mistral-Large-3-675B-Instruct-2512` (HF), `opencode/mistral-large-3`.
- **Context window:** 256,000 tokens total (262,144 on Vals); max output up to 256K on Vals. AA-LCR 36.0%.
- **Modalities:** Text + image in; text out; reasoning no; tool calling yes; structured outputs / JSON mode yes; vision (charts, diagrams, document images). No audio/video.
- **Pricing (as of 2026-11-06):** $0.50 / $1.50 per 1M input/output tokens (hosted; cache 90% off); self-host Apache 2.0 = $0. Deprecated on AA (superseded by Large 4; deprecation 2026-10-31).
- **Architecture:** Sparse MoE transformer, 675B total / 41B active params per token; trained from scratch on 3,000 NVIDIA H200 GPUs; NVFP4 checkpoint via llm-compressor; Apache 2.0.

### Raw benchmarks found

Agent / tool use:
- Agentic Index (AA): **1.0** (OpenRouter)
- Tau2-Bench Telecom: **24.6%** (OpenRouter / AA)
- Tau-Bench Banking: **5.8%** (OpenRouter / AA)
- Terminal-Bench 2.0: **9.0%** (Vals AI); Terminal-Bench 2.1: **12.0%** (OpenRouter / AA); Terminal-Bench Hard: **15.9%** (OpenRouter / AA)
- GDPval-AA: **0.0%** (OpenRouter / AA); AA-Briefcase: **229** (BenchmarkList)
- IFBench: **36.2%** (OpenRouter / AA)

Reasoning / knowledge:
- GPQA Diamond: **68.0%** (AA) / **68.43%** (Vals AI)
- MMLU-Pro: **80.7%** (AA) / **79.82%** (Vals AI)
- HLE: **4.2%** (AA / OpenRouter)
- AIME 2025: **38.0%** (AA / OpenRouter)
- AA Intelligence Index (v5.0.1): **15.93** (BenchmarkList)
- BenchLM overall: **49** (BenchmarkList, #57/106)
- CritPt: **0.0%** (OpenRouter / AA)

Coding:
- SWE-bench Verified: **41.4%** (Vals AI / OpenRouter)
- LiveCodeBench: **46.5%** (AA / OpenRouter) / **55.34%** (Vals AI)
- SciCode: **36.6%** (AA / OpenRouter)
- Coding Index (AA): **20.1** (OpenRouter)

Long context:
- AA-LCR: **36.0%** (OpenRouter / AA); context window 256K.

Multimodal:
- MMMU Pro: **66.19%** (Vals AI)
- Design Arena Elo: ~1093-1138 (OpenRouter / Design Arena)
- Vals Multimodal Index: second-to-last, ahead of Llama 4 Maverick (Vals AI note)

### Normalized scores (1-100)

- **Tool use: 64/100.** SWE-bench Verified 41.4% and Terminal-Bench 2.1 12.0% show mid-tier agentic repair; AA Agentic Index 1.0 and GDPval-AA 0.0% cap the score.
- **Reasoning: 66/100.** GPQA Diamond 68.4% and MMLU-Pro 80.7% solid for a non-reasoning open MoE; HLE 4.2% and AIME 2025 38.0% plus AA Intelligence Index 15.93 cap it.
- **Context window: 78/100.** 256K total context maps to the 256K tier; AA-LCR 36.0% is moderate-low retrieval.
- **Multimodal: 60/100.** Text + image in, text out; MMMU Pro 66.19% and Design Arena ~1100 Elo; Vals notes weak multimodal index. No audio/video.
- **Coding: 58/100.** SWE-bench Verified 41.4%, LiveCodeBench 46.5-55.3%, SciCode 36.6%, Terminal-Bench 2.1 12.0%, AA Coding Index 20.1.
- **Cost efficiency: 85/100.** Apache 2.0 open weights = $0 self-host; hosted $0.50/$1.50 per 1M; cache 90% off.
- **Overall Score: 65/100.** Mean of five quality dims (64 + 66 + 78 + 60 + 58) / 5 = 326 / 5 = 65.2 -> 65.

---

## Signature

- Provided by: **Beam (Beam)** - 2026-11-06
- Method: public internet research (Mistral docs/blog, Hugging Face model card, Artificial Analysis, OpenRouter, Vals AI, BenchmarkList); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - https://docs.mistral.ai/models/model-cards/mistral-large-3-25-12
  - https://mistral.ai/news/mistral-3/
  - https://artificialanalysis.ai/models/mistral-large-3
  - https://openrouter.ai/mistralai/mistral-large-2512
  - https://www.vals.ai/models/mistralai_mistral-large-2512
  - https://benchmarklist.com/models/mistralai-mistral-large-2512/
  - https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
