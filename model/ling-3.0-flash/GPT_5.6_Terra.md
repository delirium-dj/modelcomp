# Ling-3.0-Flash — findings by GPT-5.6 Terra

- Source: InclusionAI/Ling-3.0-Flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-Flash
- **Short description:** MIT-licensed hybrid-reasoning MoE for agentic coding and efficient execution.
- **Provider / access:** Hugging Face and compatible hosted/local runtimes.
- **Release / knowledge:** 2026; cutoff not stated.
- **IDs:** `inclusionAI/Ling-3.0-flash`.
- **Context window:** 256K tokens (model-card evaluation configuration).
- **Modalities:** text input/output; reasoning enabled by default.
- **Pricing (as of 2026-10-09):** open weights; host-dependent.
- **Architecture:** 124B total / 5.1B active hybrid-linear MoE; MIT.

### Raw benchmarks found

Agent / tool use:

- no exact public agent score extracted in this search; the official card documents Tau3-Banking, MCP-Atlas and SkillsBench evaluations.

Reasoning / knowledge:

- AIME 2026: **93.2%**; HMMT February 2026: **87.0%**; HLE: **22.7%** (InclusionAI model card).

Coding:

- SWE-bench Multilingual: **72.4%**; SWE-bench Pro: **56.6%** (InclusionAI model card).

Long context:

- 256K context advertised; no retrieval score extracted.

### Normalized scores (1–100)

- **Tool use: 68/100.** Agent evaluation coverage exists but no exact fresh tool score was extracted.
- **Reasoning: 85/100.** AIME 93.2 and HMMT 87.0 are strong, capped by HLE 22.7.
- **Context window: 88/100.** Verified 256K evaluation context, without retrieval evidence.
- **Multimodal: 15/100.** No non-text modality was verified.
- **Coding: 78/100.** SWE-bench Multilingual 72.4 and Pro 56.6 are direct evidence.
- **Cost efficiency: 96/100.** MIT weights and 5.1B active parameters support efficient deployment.
- **Overall Score: 67/100.** Half-up mean of the five quality dimensions.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized interpretations, not vendor scores.
