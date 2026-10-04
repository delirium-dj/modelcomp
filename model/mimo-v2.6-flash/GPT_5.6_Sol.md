# MiMo-V2.6-Flash — findings by GPT 5.6 Sol

- Source: Xiaomi/MiMo-V2.6-Flash
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's MIT-licensed, ultra-low-cost full-modal sparse-MoE model for high-volume professional, agentic, and multimodal workloads.
- **Provider / access:** Xiaomi MiMo API and Token Plan as `mimo-v2.6-flash`, MiMo Desktop, and open weights at `XiaomiMiMo/MiMo-V2.6-Flash-RL`.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff not disclosed.
- **IDs:** `xiaomi/mimo-v2.6-flash`; no verified OpenCode Zen Free ID found.
- **Context window:** 1M tokens with 128K maximum output.
- **Modalities:** Text, image, video, and audio input; text output; deep thinking, tool calls, streaming, web search, structured output, and caching.
- **Pricing (as of 2026-10-04):** $0.14/1M uncached input, $0.0028 cached input, and $0.28 output, with no length threshold or promotional condition.
- **Architecture:** MIT open-weight sparse MoE, 309B total parameters and 15B active per token.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.40% ±1.72** (Vals AI independent Terminus 2 run); Xiaomi reports 87.6%.
- Toolathlon-Verified: **73.6%** (Xiaomi model card; not independently confirmed).
- Agents' Last Exam: **27.6%** (Xiaomi model card; split unspecified).
- Tau3-Banking / GDPval-AA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond / HLE / CritPt / MLCR: no verified public exact-model score found.

Coding:

- DeepSWE v1.1: **67.9%** in Xiaomi's model card; its training report separately states 65.7%, neither independently confirmed.
- Terminal-Bench 2.1: **76.40%** independent.
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public exact-model score found.

Long context:

- No verified public MRCR/RULER result found; supported context is 1M tokens.

Multimodal:

- Native joint text, image, audio, and video input is documented, but no independently verified MMMU/CharXiv result was found.

Sources: [Xiaomi official model page](https://mimo.mi.com/models/zh-CN/mimo-v2.6-flash), [Xiaomi API documentation](https://mimo.mi.com/docs/en-US/api/chat/anthropic-api), [Xiaomi Hugging Face catalog](https://huggingface.co/XiaomiMiMo/models), and [The Model Gap evidence ledger](https://themodelgap.com/models/mimo-v2-6-flash).

### Normalized scores (1–100)

- **Tool use: 84/100.** Independent Terminal-Bench 2.1 is strong and Toolathlon is promising, while low Agents' Last Exam and tool-loop reports cap the score.
- **Reasoning: 80/100.** The model is capable in complex agentic work, but the absence of verified hard-reasoning benchmarks requires a conservative score.
- **Context window: 93/100.** A 1M-token window and 128K output are excellent, with no public retrieval measurement to validate full-window use.
- **Multimodal: 90/100.** Native text, image, audio, and video input provides broad coverage, capped by missing independent multimodal results.
- **Coding: 85/100.** Terminal-Bench 76.4% and vendor DeepSWE near 68% indicate strong coding, below frontier leaders and with limited reproduction.
- **Cost efficiency: 100/100.** $0.14/$0.28 pricing, near-free cached input, MIT weights, and only 15B active parameters are exceptional.
- **Overall Score: 86/100.** Half-up mean of the five quality dimensions; best for extremely low-cost multimodal agents and high-volume coding where some reliability variance is acceptable.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using Xiaomi documentation and independent benchmark evidence; vendor-only results are labeled and scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
