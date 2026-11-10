# Ling 3.0 Flash Fin — findings by Fledge Alpha

- Source: inclusionAI / Ant Group + CICC (`inclusionai/ling-3.0-flash-fin`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin
- **Short description:** Ant Group's first finance-enhanced model (with CICC): the Ling-3.0-flash backbone (124B/5.1B active) plus financial continual pre-training, domain post-training, and tool-use optimization for annual reports, financial workbooks, and multi-document research.
- **Provider / access:** OpenRouter `inclusionai/ling-3.0-flash-fin` (a `:free` route ran for one month post-launch), Vercel AI Gateway (free access ran to 2026-09-25), Ant Ling API. Weights promised but not yet published as of this writing.
- **Release / knowledge:** 2026-08-28 (aimodeling.com, OpenRouter).
- **IDs:** `inclusionai/ling-3.0-flash-fin` (also `opencode/ling-3.0-flash-fin`)
- **Context window:** 262K tokens (inherited from Ling-3.0-flash).
- **Modalities:** text in; text out; hybrid reasoning (thinking default); tool calling (demo chained 23 tool calls tracking disclosures). No vision.
- **Pricing (as of 2026-10-08):** $0.06 input / $0.18 output per 1M (llm-stats, same as base Flash); limited free windows on OpenRouter/Vercel have run.
- **Architecture:** 124B total / 5.1B active MoE (same BailingMoeV3 backbone as Ling-3.0-flash); proprietary until weights drop.

### Raw benchmarks found

Agent / tool use:

- Finance Agent v2: **59.8%** (BenchLM/llm-stats — surpasses some flagship models per launch coverage)
- Finance Agent v1.1: **69.2%** (llm-stats)
- Tau3 Banking: **41.0%** (llm-stats)
- APEX-Agents: **29.2%** (BenchLM)
- SpreadsheetBench 2: **21.8%** — #2 public snapshot behind Kimi K3 34.8% (BenchLM)
- SpreadSheetBench-v1: **86.5%** (llm-stats)

Reasoning / knowledge:

- AA Intelligence Index v4.1.1: **41** (up from base Ling-3.0-flash's 38; aimodeling.com)
- LLM Stats Score: **43.0** (#44, 5 evals); Reasoning 44.2 (#35); Finance index 36.7 (#5); Agents 29.2 (#37)
- FinFIRST (co-built with CICC, 50+ finance professionals) and FinSearchComp Verified: evaluated, exact values not published yet (launch coverage)

Coding:

- No verified public coding score found (finance-specialized; base model's SWE-bench Pro 56.6% does not transfer automatically)

Long context:

- 262K window inherited; demo processed a 7-worksheet, 5,000+ formula financial workbook (launch coverage).

### Normalized scores (1–100)

- **Tool use: 62/100.** Finance Agent v2 59.8% and Tau3 Banking 41.0% with demonstrated long tool chains; APEX-Agents 29.2% caps it.
- **Reasoning: 66/100.** AA Intelligence 41 (above the base model) and LLM Stats reasoning 44.2; no GPQA/HLE rows for the Fin variant.
- **Context window: 60/100.** 262K inherited window, proven on multi-document financial research.
- **Multimodal: 15/100.** Text-only.
- **Coding: 55/100.** SpreadSheetBench-v1 86.5% shows strong structured-data manipulation; no general coding benchmark published.
- **Cost efficiency: 88/100.** $0.06/$0.18 with recurring free windows — flagship-class finance work at flash prices.
- **Overall Score: 52/100.** Mean of (62, 66, 60, 15, 55) = 51.6 → 52. Best fit: financial research agents — retrieval, valuation modeling, spreadsheet automation, research-report drafting.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (aimodeling.com launch coverage, llm-stats, BenchLM, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
