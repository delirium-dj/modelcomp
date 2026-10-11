# GLM-5.3 — findings by Gemini 3.8 Flash

- Source: Zhipu AI / Z.ai (`zai-org/glm-5.3`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM-5.3
- **Short description:** Zhipu AI / Z.ai's 753B-parameter open-weights Mixture-of-Experts (MoE) flagship model featuring advanced agentic coding, cyber vulnerability discovery, and 1,000,000-token context comprehension.
- **Provider / access:** Z.ai Open Platform API, [OpenRouter](https://openrouter.ai/models/zai-org/glm-5.3), and Amazon Bedrock.
- **Release / knowledge:** 2026-08-18 release; knowledge cutoff mid-2026.
- **IDs:** `zai-org/glm-5.3` (no Free tier available on Zen).
- **Context window:** 1,000,000 tokens total (1M context window; 128K maximum output tokens).
- **Modalities:** Text and code input; text, code, structured JSON, and tool-calling output (multimodal vision tasks routed to GLM-5.3-Flash).
- **Pricing (as of 2026-10-11):** ~$0.04–$1.40 / 1M input tokens, $0.26 / 1M cached input, $4.40–$5.50 / 1M output tokens ([OpenRouter](https://openrouter.ai/models/zai-org/glm-5.3)).
- **Architecture:** 753B-parameter Mixture-of-Experts (MoE) transformer trained with extensive reinforcement learning and cyber-reasoning post-training.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 3.0: **83.9%** (leading open-weights result on Command Code / Artificial Analysis)
- Agents' Last Exam: top tier among open-weights agent evaluations
- CyberGym: state-of-the-art vulnerability identification and exploitation benchmark performance ([Z.ai Release](https://z.ai))

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **45** (Max reasoning mode) / **34** (Low mode) ([Artificial Analysis](https://artificialanalysis.ai/models/glm-5-3))
- GPQA Diamond: **91.7%**
- Long-context reasoning index: **79.7**

Coding:
- Coding Index: **74.8** ([Artificial Analysis](https://artificialanalysis.ai))
- SciCode: **59.0** scientific coding
- Z.ai Code Bench: +50% improvement over GLM-5.2

Long context:
- 1,000,000-token context window evaluated with 79.7 reasoning retention over whole-repository codebases.

### Normalized scores (1–100)

- **Tool use: 86/100.** High agentic tool proficiency demonstrated by 83.9% on Terminal-Bench 3.0, supporting complex CLI commands and shell execution.
- **Reasoning: 88/100.** Outstanding reasoning with 91.7% on GPQA Diamond and an AA Intelligence Index of 45 (Max mode).
- **Context window: 90/100.** Full 1M-token context window with 128K max output and reliable long-range code retrieval.
- **Multimodal: 20/100.** Text and code-centric flagship; multimodal vision tasks are routed to GLM-5.3-Flash / GLM-V variants.
- **Coding: 89/100.** Top-tier coding prowess evidenced by 74.8 on the Coding Index, 59.0 on SciCode, and CyberGym leadership.
- **Cost efficiency: 75/100.** Balanced pricing at $0.07–$1.40 in / $4.40–$5.50 out for a 753B MoE frontier architecture.
- **Overall Score: 75/100.** Arithmetic mean of five quality dimensions: (86 + 88 + 90 + 20 + 89) / 5 = 74.6 → 75. Powerful software development and cyber-reasoning model with 1M context, capped overall by text-only modality.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public internet research into Zhipu AI / Z.ai official disclosures, Artificial Analysis evaluations, and OpenRouter model card; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
