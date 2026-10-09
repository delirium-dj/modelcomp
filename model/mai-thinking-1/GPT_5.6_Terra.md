# MAI-Thinking-1 — findings by GPT-5.6 Terra

- Source: Microsoft AI/MAI-Thinking-1
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft's first in-house reasoning model, optimized for enterprise reasoning and software engineering.
- **Provider / access:** Microsoft Foundry public preview.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `MAI-Thinking-1`.
- **Context window:** 256K tokens (Microsoft technical report).
- **Modalities:** text input/output, reasoning and tool-use workflows.
- **Pricing (as of 2026-10-09):** not verified publicly.
- **Architecture:** proprietary MoE, about 1T total / 35B active parameters.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **46.0%** (Microsoft technical report, Table 11).

Reasoning / knowledge:

- AIME 2025: **97.0%** (Microsoft technical report, Table 11).
- AIME 2026: **94.5%** (Microsoft technical report, Table 11).
- HMMT February 2026: **84.9%** (Microsoft technical report, Table 11).
- GPQA Diamond: **84.2%** (Microsoft technical report, Table 11).

Coding:

- LiveCodeBench v6: **87.7%** (Microsoft technical report, Table 11).
- SWE-bench Verified: **73.5%** (Microsoft technical report, Table 11).
- SWE-bench Pro: **52.8%** (Microsoft technical report, Table 11).

Long context:

- 256K evaluation context reported; no retrieval-specific metric found.

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.0 at 46.0% is useful direct evidence, capped by the absence of other tool benchmarks.
- **Reasoning: 91/100.** Strong AIME, HMMT and GPQA Diamond scores support frontier-class reasoning.
- **Context window: 88/100.** 256K verified context is strong, capped by no retrieval test.
- **Multimodal: 15/100.** No non-text modality was verified.
- **Coding: 86/100.** 87.7% LCB v6 and 73.5% SWE-bench Verified are strong direct coding evidence.
- **Cost efficiency: 70/100.** The model has an efficient active-parameter count, but public prices were not verified.
- **Overall Score: 71/100.** Half-up mean of the five quality dimensions; a strong enterprise text reasoning and coding candidate.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
