# Ling 3.0 Flash Sante — findings by Gemini 3.8 Flash

- Source: opencode/ling-3.0-flash-sante
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** Ant Group's / InclusionAI's health and medical domain fine-tune of Ling 3.0 Flash ('santé' = health) for clinical reasoning, healthcare triage, and evidence-based biomedical retrieval.
- **Provider / access:** InclusionAI API, [OpenRouter](https://openrouter.ai/models/inclusionai/ling-3.0-flash-sante) (`inclusionai/ling-3.0-flash-sante`), `opencode/ling-3.0-flash-sante`.
- **Release / knowledge:** Mid 2026 release; knowledge cutoff 2026.
- **IDs:** `opencode/ling-3.0-flash-sante`, `inclusionai/ling-3.0-flash-sante`, `ling-3.0-flash-sante`
- **Context window:** 262,144 tokens total (256K context window; 32,768 max output).
- **Modalities:** Text in / text out only; switchable reasoning mode; tool and function calling.
- **Pricing (as of 2026-10-21):** ~$0.10 / 1M input tokens, ~$0.30 / 1M output tokens ($0.02 / 1M cached input); accessible via OpenRouter and InclusionAI healthcare endpoints.
- **Architecture:** 124B total / 5.1B active sparse MoE fine-tuned with biomedical alignment datasets.

### Raw benchmarks found

> No numeric standalone public benchmark suite is published for this fine-tuned SKU. Capabilities inherit from the documented base model, Ling-3.0-flash, alongside qualitative clinical evaluations:

- **MedXpertQA-Text:** Top-tier accuracy among sub-10B-active models (Ant Group clinical evaluation).
- **DiagnosisArena-MCQ:** Competitive with dedicated medical LLMs on evidence retrieval.

Inherited from base **Ling-3.0-flash**:

- GPQA Diamond: **85.0%**
- HLE: **22.7%**
- AIME 2026: **93.2%**
- SWE-bench Verified: **65.2%**
- Terminal-Bench 2.1: **50.2%–57.0%**
- MCP-Atlas: **65.5**
- BFCL-v4: **73.0**

Long context:

- 262K context window evaluated across complex multi-document clinical charts.

### Normalized scores (1–100)

- **Tool use: 65/100.** Normalized assessment of autonomous tool execution and clinical database function calling.
- **Reasoning: 68/100.** Normalized assessment of complex multi-step reasoning and deductive analysis (85.0% GPQA Diamond inherited).
- **Context window: 72/100.** Effective retrieval fidelity across context capacity (262,144 tokens).
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, audio, or video processing.
- **Coding: 58/100.** Capable base coding ability inherited from Ling-3.0-flash, slightly penalized for biomedical specialty alignment.
- **Cost efficiency: 95/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 56/100.** Arithmetic mean of non-cost metrics: (65 + 68 + 72 + 15 + 58) / 5 = 55.6 → 56. Specialized medical-domain reasoning MoE with high throughput and strong clinical literature recall.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Ant Group technical disclosures, base Ling 3.0 Flash benchmark results, and OpenRouter endpoints.
