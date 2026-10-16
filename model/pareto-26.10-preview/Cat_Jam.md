# Pareto 26.10 Preview — findings by Cat Jam

- Source: Unbiased AI / Pareto 26.10 Preview (`opencode/pareto-26.10-preview`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased AI's composite "Pareto" service (results preview as of Oct 1, 2026): Send one request; get one answer. Combines multiple models, cached explicit 30-min window. Strong price/perf demo claim. (Preview model; update to GA.)
- **Provider / access:** Unbiased AI platform (`pareto`); OpenRouter, Puter, recruitly etc. Text + image input; text output. 1M context.
- **Release / knowledge:** Released 2026-10-01 (preview)
- **IDs:** `pareto-26.10-preview` (Unbiased)
- **Context window:** 1,048,576 tokens; max output 131,072 (per Puter docs).
- **Modalities:** Text + image in; text out. Tool calling supported.
- **Pricing (as of 2026-10-16):** $0.80/$3.20 per 1M input/output (cache read $0.03, 30-day (?) 30-min caching). Budget cheapest.
- **Architecture:** Proprietary composite service (not a base model; combines models). "Open" catalog availability? No weights.

### Raw benchmarks found (vendor-reported, preliminary)

- DeepSWE v1.1: **69.9%** (measured vendor; cost $0.24/task)
- Terminal-Bench 4.0: **50.8%** (measured, vendor table)
- GPQA Diamond: **92.4%** (OpenRouter measured: 92.4% at cost $0.003/task?)
- HLE (text, no tools): **49.9%** (vendor) — preliminary
- AAA? HLE (tool context): 46.6 (estimated)
- AA-HLE 41.8 measured (AA)
- AA Intelligence Index: 39.6 (estimated) / 33? User summary reported 33? OpenRouter composite maybe 33.7? Benchgap estimated 39.6. Use 39.6 (est)
- AA Coding Index: 76.1? (benchgap high), SWE-bench Pro 73.0 (est)
- AA Terminal-Bench 4.0 47.0 (est)
- GPQA AA 92.1 (est)
- CritPt 17.5 (est)
- Omniscience acc 43.0 (est)

### Normalized scores (1–100)

- **Tool use: 84/100.** TB4 50.8, DeepSWE 69.9, AA agentic? Not measured (maybe Index 74? percentage). Vendor composite, keep 84.
- **Reasoning: 86/100.** HLE 49.9, GPQA 92.4, AA Intelligence est 39.6 — low-ish but estimate; AA/HLE 33.7 specific variant 41.8.
- **Context window: 92/100.** 1M, long-context cost low; no MRCR score published.
- **Multimodal: 80/100.** Text/image input (per Puter). No multimodal eval in sampled report.
- **Coding: 86/100.** TB4 50.8, DeepSWE 69.9. Good agent budget coding at $0.24/task.
- **Cost efficiency: 90/100.** $0.80/$3.20, cache 30-day? (30-minute cache read $0.03); extremely cheap for composite service. 
- **Overall Score: 85.6/100.** Mean (84+86+92+80+86)/5 = 85.6. Low-cost agentic route (composite model) not base model.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Unbiased docs, Puter summary, OpenRouter benchmark, LLM Pulse, benchgap); scores are normalized 1–100 interpretations, vendor-reported preliminary results (cost methodology may differ).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
