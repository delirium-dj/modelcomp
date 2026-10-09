# Ring 2.6 1T — findings by GPT 5.6 Sol

- Source: inclusionAI/Ring-2.6-1T
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring 2.6 1T
- **Short description:** inclusionAI's trillion-parameter reasoning MoE, post-trained for mathematics, coding, search, tools, and long agent workflows.
- **Provider / access:** Open weights on Hugging Face under MIT; hosted routes are provider-dependent.
- **Release / knowledge:** 2026-06; knowledge cutoff not disclosed.
- **IDs:** `inclusionAI/Ring-2.6-1T`
- **Context window:** 262,144 tokens.
- **Modalities:** Text input/output, reasoning, tool use; no native image/audio input verified.
- **Pricing (as of 2026-10-09):** Open weights; hosted price varies.
- **Architecture:** Approximately 1T-parameter MoE, MIT-licensed.

### Raw benchmarks found

Agent / tool use:

- PinchBench: **87.60**; Tau2-Bench Telecom: **95.32**; ClawEval: **63.82** (technical-report results).

Reasoning / knowledge:

- AIME 2026: **95.83%**; GPQA Diamond: **88.27%**; ARC-AGI-v2: **66.18%**.

Coding:

- SWE-bench Verified: **74.0%**.

Long context:

- 262K window; no exact public MRCR score for Ring found.

Sources: [technical report](https://arxiv.org/abs/2606.15079), [Hugging Face model card](https://huggingface.co/inclusionAI/Ring-2.6-1T), [LLM Reference](https://www.llmreference.com/model/ring-2.6-1t).

### Normalized scores (1–100)

- **Tool use: 91/100.** Excellent Tau2, PinchBench, and ClawEval results directly cover agent execution.
- **Reasoning: 92/100.** AIME, GPQA, and ARC-AGI-v2 establish frontier-class reasoning.
- **Context window: 82/100.** 262K is substantial but lacks a directly reported retrieval score here.
- **Multimodal: 15/100.** The model is text-only.
- **Coding: 86/100.** SWE-bench Verified 74.0 is strong, though below the very top closed systems.
- **Cost efficiency: 75/100.** MIT weights help, but a trillion total parameters makes self-hosting demanding.
- **Overall Score: 73/100.** The half-up mean of the five quality dimensions; best for text-only reasoning agents and complex tool workflows.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-09
- Method: Fresh public-internet research centered on the technical report and model card; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
