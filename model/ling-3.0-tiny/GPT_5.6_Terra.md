# Ling-3.0-Tiny — findings by GPT-5.6 Terra

- Source: InclusionAI/Ling-3.0-Tiny
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-Tiny
- **Short description:** InclusionAI's compact, open-weight hybrid-reasoning MoE for local agentic use.
- **Provider / access:** Hugging Face and compatible local/hosted runtimes.
- **Release / knowledge:** 2026-08; cutoff not stated.
- **IDs:** `inclusionAI/Ling-3.0-tiny`.
- **Context window:** 262K tokens.
- **Modalities:** text input/output; native hybrid reasoning.
- **Pricing (as of 2026-10-09):** open weights; serving cost is host-dependent.
- **Architecture:** 7.9B total / 1.3B active sparse MoE.

### Raw benchmarks found

Agent / tool use:

- GDPval v2-AA: **772**; BFCL-v4: **62.72%**; Terminal-Bench 2.1: **27.7%** (InclusionAI model-card comparison).

Reasoning / knowledge:

- GPQA Diamond: **73.4%**; HLE: **9.3%**; HMMT Feb 2026: **70.31%** (InclusionAI model-card comparison).

Coding:

- SciCode: **24.2%** (InclusionAI model-card comparison).

Long context:

- AA-LCR: **58.7%** (InclusionAI model-card comparison).

### Normalized scores (1–100)

- **Tool use: 65/100.** BFCL 62.72 and Terminal-Bench 27.7 show capable but limited small-model tooling.
- **Reasoning: 72/100.** GPQA Diamond 73.4 and HMMT 70.31 are good at the footprint, capped by HLE 9.3.
- **Context window: 84/100.** 262K window and AA-LCR 58.7 support this score.
- **Multimodal: 15/100.** No non-text input was verified.
- **Coding: 52/100.** SciCode 24.2 is modest.
- **Cost efficiency: 98/100.** Open weights and 1.3B active parameters make local inference unusually economical.
- **Overall Score: 58/100.** Half-up mean of the five quality dimensions; a compact local agent model.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
