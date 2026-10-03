# Ling-3.0-flash-VL — findings by LongCat 2.5 Preview

- Source: InclusionAI/Ling-3.0-flash-VL (`inclusionAI/Ling-3.0-flash-VL`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash-VL
- **Short description:** InclusionAI's (Ant Group) native multimodal vision-language model with 124B total parameters (5.5B active). Supports image and video input with text output, thinking mode, and tool calls. Open weights under MIT license.
- **Provider / access:** InclusionAI API, OpenRouter, Hugging Face (self-hosting). vLLM and SGLang supported.
- **Release / knowledge:** 2026-09-10. Knowledge cutoff not officially stated.
- **IDs:** `inclusionAI/Ling-3.0-flash-VL`
- **Context window:** 131,072 tokens (paid tier); up to 256K tokens (free tier with YaRN scaling). Max output: 33K tokens.
- **Modalities:** Text, image, video input; text output. Reasoning: yes (thinking mode default). Tool calls: yes. Structured outputs: yes.
- **Pricing (as of 2026-10-03):** $0.06 / 1M input tokens; $0.18 / 1M output tokens (paid tier). Free tier available with 256K context.
- **Architecture:** 124B total params, 5.5B active. MoE with 512 routed experts (8 active per token) + 1 shared expert. Hybrid backbone alternating KDA and Gated MLA layers at 5:1 ratio. ViT visual encoder with VideoRoPE for spatial-temporal encoding. MIT license, open weights.

### Raw benchmarks found

Agent / tool use:

- τ-Bench V3 Banking: **34.43%** (Vector Wire / Artificial Analysis)
- GDPval (win rate): **32.49%** (Vector Wire)
- Terminal-Bench 2.1: **64.42%** (Vector Wire)
- Terminal-Bench 4.0: **0.00%** (Vector Wire)

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (Vector Wire / Artificial Analysis)
- Humanity's Last Exam: **22.0%** (Vector Wire)
- CritPt: **2.00%** (Vector Wire)
- Artificial Analysis Intelligence Index: **25** (v4.1.1) / **24.6** (v4.3)

Coding:

- Terminal-Bench 2.1: **64.42%** (Vector Wire)
- SciCode: **44.2%** (Vector Wire)

Long context:

- AA-LCR: **78.33%** (Vector Wire / Artificial Analysis)

Multimodal:

- MMMU-Pro: **78.96%** (Vector Wire)

Factuality:

- AA-Omniscience Non-hallucination: **77.95%** (Vector Wire)
- AA-Omniscience Accuracy: **14.35%** (Vector Wire)

### Normalized scores (1–100)

- **Tool use: 55/100.** τ-Bench V3 Banking 34.43% and GDPval 32.49% are moderate; Terminal-Bench 2.1 64.42% is decent. Terminal-Bench 4.0 0.00% is a significant weakness. Tool calling verified but agentic task performance is inconsistent.
- **Reasoning: 62/100.** GPQA Diamond 86.2% is strong; AA Intelligence Index 25 is above average. HLE 22.0% and CritPt 2.00% are weak. Thinking mode helps but overall reasoning is mid-tier.
- **Context window: 65/100.** 131K tokens (paid) is moderate; 256K with YaRN is decent. AA-LCR 78.33% confirms solid long-context retrieval.
- **Multimodal: 75/100.** Text, image, and video input verified. MMMU-Pro 78.96% is strong for visual understanding. VideoRoPE encoding is a differentiator.
- **Coding: 58/100.** Terminal-Bench 2.1 64.42% is decent; SciCode 44.2% is moderate. No SWE-bench Verified score found.
- **Cost efficiency: 92/100.** $0.06/$0.18 per 1M tokens is extremely competitive; open weights with MIT license allow free self-hosting.
- **Overall Score: 63/100.** Mean of (55 + 62 + 65 + 75 + 58) / 5 = 63.0 → 63. Best fit: cost-sensitive multimodal agentic workflows with vision and video understanding.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-03
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
