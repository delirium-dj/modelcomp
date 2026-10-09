# Step 5 Preview — findings by LongCat 2.5 Preview

- Source: StepFun/Step-5-Preview
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship model for agentic work — a 600B-total / 27B-active sparse MoE with 1M context and native text, image, and video input. Particular strength in finance. Open weights planned for October 15, 2026.
- **Provider / access:** StepFun API (`step-5-preview`), OpenRouter, NVIDIA NIM, Blackbox AI. OpenAI-compatible API. Claude Code integration via "Step Plan."
- **Release / knowledge:** 2026-09-18 (preview; open weights planned October 15, 2026).
- **IDs:** `stepfun/step-5-preview` (also `step-5-preview` on StepFun platform)
- **Context window:** 1,000,000 tokens (verified via StepFun docs, Artificial Analysis, eesel.ai); up to 64,000 output tokens.
- **Modalities:** Text, Image, Video input; Text output. Reasoning: yes (low/medium/high effort). Tool calling: yes (via application integration).
- **Pricing (as of 2026-10-09):** $1.00/1M input, $2.70/1M output, $0.05/1M cached input. Very affordable for a 600B model. Open weights planned.
- **Architecture:** 600B total / 27B active sparse MoE. Open weights on Hugging Face (`stepfun-ai/Step-5-Preview-BF16`).

### Raw benchmarks found

Agent / tool use:

- Agentic (BenchLM): **61.9 / #14/117**
- Terminal-Bench 2.1: **85.0%** (BenchLM — vs Claude Mythos 5 88.0%)
- Terminal-Bench v4: **33.3%** (StepFun — vs Kimi K3 12.6%, GLM-5.3 41.9%, GPT-6 Astra 57.9%, Claude Opus 5 52.3%)
- BrowseComp: **88.7%** (BenchLM — vs Claude Mythos 5 88.0%)
- Tool calling: supported via application integration (StepFun docs)

Reasoning / knowledge:

- Intelligence Index: **44** (Artificial Analysis — well above median 26)
- HLE: **46.5%** (BenchLM — vs Claude Mythos 5 64.5%)
- CritPt: **20.9%** (BenchLM)
- Long-context reasoning: **88.3** (Command Code)
- Reasoning (BenchLM): **79.6**

Coding:

- DeepSWE v1.1: **67.7%** (StepFun — vs Kimi K3 67.5%, GLM-5.3 66.9%, GPT-6 Astra 74.1%, Claude Opus 5 74.0%)
- StepCodeBench: **49.0%** (StepFun — vs Kimi K3 43.9%, GLM-5.3 40.2%, GPT-6 Astra 61.0%, Claude Opus 5 63.9%)
- ProgramBench: **80.5%** (StepFun — vs Kimi K3 77.8%, GLM-5.3 72.0%, GPT-6 Astra 85.4%, Claude Opus 5 82.3%)
- SciCode: **58.9** (Command Code)
- FrontierFinance: **66.4%** (StepFun — vs Kimi K3 62.6%, GLM-5.3 64.1%, GPT-6 Astra 55.0%, Claude Opus 5 69.7%)

Long context:

- Context window: **1,000,000 tokens** (verified via StepFun docs, Artificial Analysis)
- Long-context reasoning: **88.3** (Command Code)

Multimodal:

- Text, Image, Video input supported (StepFun docs, eesel.ai)
- Multimodal & Grounded (BenchLM): **61.2 / #29/50**
- Up to 60 images per request, plus short video clips (eesel.ai)

### Normalized scores (1–100)

- **Tool use: 82/100.** Agentic #14/117, Terminal-Bench 2.1 85%, BrowseComp 88.7%. Strong agentic tool use, competitive with leading open models.
- **Reasoning: 78/100.** Intelligence Index 44, HLE 46.5%, long-context reasoning 88.3. Good reasoning, trails top closed models on hardest tasks.
- **Context window: 92/100.** 1M token context verified via multiple sources. Among the largest context windows available.
- **Multimodal: 75/100.** Text, Image, Video input. Multimodal & Grounded #29/50. Good multimodal understanding across vision and video.
- **Coding: 82/100.** DeepSWE 67.7%, StepCodeBench 49.0%, ProgramBench 80.5%, FrontierFinance 66.4%. Strong coding with particular strength in finance.
- **Cost efficiency: 88/100.** $1.00/$2.70 per 1M tokens, $0.05 cached — very affordable for a 600B model. Open weights planned.
- **Overall Score: 82/100.** Mean of Tool (82), Reasoning (78), Context (92), Multimodal (75), Coding (82) = 409/5 = 81.8 → 82. Strong flagship model with excellent cost efficiency and finance specialization.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
