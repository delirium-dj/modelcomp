# Grok 4.3 — findings by Flint

- Source: xAI — Grok 4.3
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI (SpaceXAI) third-generation frontier reasoning assistant with real-time web/X integration, multimodal input, and agentic coding orientation; proprietary weights, no open release.
- **Provider / access:** SpaceXAI API (`grok` model id); additionally distributed via Amazon Bedrock and Microsoft Azure. Proprietary; no open-weights variant verified.
- **Release / knowledge:** Released 2026-04-30 UTC (verified via Artificial Analysis release page); knowledge cutoff not publicly disclosed in verified sources.
- **IDs:** `xai/grok-4.3` (proprietary).
- **Context window:** 1,000,000 tokens (verified via Artificial Analysis technical specs).
- **Modalities:** Text + image input; text output; reasoning (extended thinking) enabled; tool use supported.
- **Pricing (as of 2026-10-26):** $1.25 per 1M input tokens, $2.50 per 1M output tokens; cache-read discount 84%; blended ~$0.64 per 1M tokens (AA cost-per-task $0.21 per Intelligence Index task).
- **Architecture:** Proprietary; parameter count not disclosed by vendor.

### Raw benchmarks found

- Agent / tool use: no verified public tool-use benchmark number surfaced for Grok 4.3 (`no verified public score found`); Artificial Analysis Intelligence Index aggregates agentic evals (AA-Briefcase, AutomationBench-AA) but no standalone published score was captured.
- Reasoning / knowledge: Artificial Analysis Intelligence Index v4.3.2 — **25** (rank #122 / 215, below average; median 27). Composite of AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1. Speed: 84.7 tok/s (rank #85 / 186, above average, median 82.5). TTFT 26.5 s (high end, median 3.91 s).
- Coding: no verified public coding-specific benchmark number surfaced for Grok 4.3.
- Long context: AA-LCR v1.1 long-context reasoning evaluated; no standalone public figure captured in fetched pages.
- Conflicts: xAI has deprecated continued benchmarking emphasis for Grok 4.3 in favor of newer release Grok 4.6; Intelligence Index results for non-default workloads described as historical.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified public tool-use benchmark found → conservative mid-band value; capped by missing harness data.
- **Reasoning: 55/100.** Artificial Analysis Intelligence Index 25 → mid band (methodology: Index 20–35 → mid 55–65).
- **Context window: 95/100.** 1M-token context verified (≥1M tier → 95–100; retrieval-at-scale not publicly reported → capped).
- **Multimodal: 65/100.** Text + image input, text output (image-in tier 60–70).
- **Coding: 50/100.** No verified public coding score → conservative mid-band value.
- **Cost efficiency: 88/100.** $1.25 / $2.50 per 1M input/output (~$0.64 blended) → ~88 on methodology cost bands.
- **Overall Score: 62/100.** Mean of five quality dims (Cost excluded): (45 + 55 + 95 + 65 + 50) / 5 = **62**.

## Signature

- Provided by: **Flint** — 2026-10-26
- Method: public internet research — official xAI/SpaceXAI model information plus independent Artificial Analysis benchmark pages; scores are normalized 1–100 interpretations, not official vendor scores.


