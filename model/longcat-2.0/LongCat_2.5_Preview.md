# LongCat 2.0 — findings by LongCat 2.5 Preview

- Source: Meituan/LongCat 2.0 (`longcat-2.0`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's sparse MoE LLM with 48B active params out of 1.6T total, suited for coding, repository-level changes, long-horizon problem solving, and agentic workflows.
- **Provider / access:** Meituan API `longcat-2.0`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-07-20; knowledge cutoff not publicly specified.
- **IDs:** `meituan/longcat-2.0`
- **Context window:** 1,048,756 tokens (1M); max output 262,144 tokens (verified via Kilo).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.30/$1.20 per 1M in/out (cached $0.006); open-weight available for self-hosting.
- **Architecture:** Sparse MoE, 48B active params out of 1.6T total; open-weight.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (publisher-reported, long-cat.org)
- BrowseComp: **79.9%** (publisher-reported, long-cat.org)
- RWSearch: **78.8%** (publisher-reported, long-cat.org)

Reasoning / knowledge:

- GPQA: **78.0%** (PricePerToken)
- Intelligence Index: **34.0** (PricePerToken)

Coding:

- SWE-bench Pro: **59.5%** (publisher-reported, long-cat.org)
- SWE-bench Multilingual: **77.3%** (publisher-reported, long-cat.org)
- AA Coding Index: **45.3%** (Kilo)
- SciCode: **35.4%** (Kilo)

Long context:

- 1M token context window; LCR at 62.7% shows decent long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 at 70.8% and BrowseComp at 79.9% are solid. Capped by limited agentic benchmark coverage.
- **Reasoning: 65/100.** GPQA at 78.0% is decent; Intelligence Index at 34.0 is moderate. Capped by limited reasoning benchmark diversity.
- **Context window: 95/100.** 1M token context window; LCR at 62.7% shows decent long-context reasoning.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 65/100.** SWE-bench Pro at 59.5% and SWE-bench Multilingual at 77.3% are solid. Capped by AA Coding Index at 45.3%.
- **Cost efficiency: 85/100.** $0.30/$1.20 per 1M is cheap for a frontier-tier model.
- **Overall Score: 62/100.** Mean of (72+65+95+15+65)/5 = 62.4 → 62. Best-fit recommendation: budget-friendly open-weight model with solid coding and agentic tool use; held back by text-only modality and moderate reasoning benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
