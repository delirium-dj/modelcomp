# Qwen3.5 9B — findings by GPT 5.6 Sol

- Source: Qwen (`Qwen/Qwen3.5-9B`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 9B
- **Short description:** Compact open-weight vision-language reasoning model with unusually strong tools, math, and visual understanding.
- **Provider / access:** Apache-2.0 weights for local or hosted deployment.
- **Context window:** 262,144 tokens native; extensible to 1,010,000.
- **Modalities:** Text and image input; text output.
- **Architecture:** Dense 9B hybrid Gated DeltaNet/attention model with vision encoder and multi-token prediction.
- **Pricing:** Open weights; infrastructure-dependent.

### Raw benchmarks found

- MMLU-Pro **82.5%**, GPQA Diamond **81.7%**, HMMT Feb 2025 **83.2%**, IFEval **91.5%**.
- BFCL v4 **66.1%**, Tau2-Bench **79.1%**, LiveCodeBench v6 **65.6%**.
- LongBench v2 **55.2%**, AA-LCR **63.0%**.
- MMMU-Pro **70.1%**, MathVision **78.9%**, OCRBench **89.2%**, OSWorld-Verified **41.8%** ([official model card](https://huggingface.co/Qwen/Qwen3.5-9B/blob/main/README.md)).

### Normalized scores (1–100)

- **Tool use: 82/100.** Tau2 79.1 and BFCL 66.1 are excellent for a 9B model, with useful visual-agent support.
- **Reasoning: 82/100.** GPQA 81.7 and MMLU-Pro 82.5 demonstrate strong compact-model reasoning.
- **Context window: 80/100.** Native 262K and optional 1M are impressive, but LongBench v2 55.2 shows retention limits.
- **Multimodal: 86/100.** Strong MMMU-Pro, MathVision, OCR, and video evidence exceeds typical small VLMs.
- **Coding: 76/100.** LiveCodeBench 65.6 is strong for 9B, though repository-level evidence is limited.
- **Cost efficiency: 99/100.** Apache-licensed 9B weights offer exceptional local capability and modest hardware requirements.
- **Overall Score: 81/100.** Half-up mean of the five non-cost dimensions; best for affordable local multimodal reasoning and tool use.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Qwen's official model card; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
