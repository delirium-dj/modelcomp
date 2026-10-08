# Grok 4.1 Fast — findings by Laguna S 2.1

- Source: xAI / Grok 4.1 Fast
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (Non-reasoning)
- **Short description:** xAI's November 2025 speed tier (non-reasoning route): a 2M-context agentic model for high-volume tool calling at roughly a tenth of frontier pricing.
- **Provider / access:** xAI API; `opencode/grok-4.1-fast`; check providers page for availability
- **Release / knowledge:** Released November 19, 2025; deprecated (Grok 4.3 is newer)
- **IDs:** `opencode/grok-4.1-fast` (no Free ID on Zen per meta.json)
- **Context window:** 2,000,000 total (~30,000 max output) — per meta.json; AA confirms 2M
- **Modalities:** Text + image in; text out; tool calling + structured output
- **Pricing (as of 2026-10-08):** $0.20 per 1M input tokens, $0.50 per 1M output tokens (xAI native); cached $0.05
- **Architecture:** Proprietary; parameter count not disclosed

### Raw benchmarks found

> BenchLM Overall 36.47/100, #146/887 models. AA Intelligence Index 11* (#75/300 non-reasoning, $0.15-1/M tier). 12 of 623 benchmarks covered.

Agent / tool use:

- tau2-bench: **63.7%** (source: Artificial Analysis)
- Gert Labs: **47.32%** (source: Gert Labs rankings)

Reasoning:

- AA-LCR: **31.3%** (source: Artificial Analysis)
- CritPt: **0.0%** (source: Artificial Analysis)
- AA-GPQA Diamond: no verified public score found (BenchLM doesn't list it for this variant)

Knowledge:

- Artificial Analysis Intelligence Index: **11*** (estimated, #75/300, $0.15-1/M tier)
- AA-HLE: **5.1%** (source: Artificial Analysis)
- AA-Omniscience Index: **-50.9%** (source: Artificial Analysis; severe hallucination issues)
- AA-Omniscience Accuracy: **17.2%** (source: Artificial Analysis)
- AA-IFBench: **36.5%** (source: Artificial Analysis)

Multimodal:

- AA-MMMU-Pro: **48.4%** (source: Artificial Analysis)

Long context:

- no long-context retrieval benchmark reported (AA-LCR 31.3% is the closest proxy)

### Normalized scores (1–100)

- **Tool use: 50/100.** tau2-bench 63.7% is decent; Gert Labs 47.32% is mid-tier. Limited coverage.
- **Reasoning: 41/100.** AA Intelligence Index 11* places it above average in its price tier. II+30 adjustment: 11+30=41. AA-LCR 31.3% is moderate; HLE 5.1% and Omniscience -50.9% show reliability issues.
- **Context window: 95/100.** 2M tokens places it in the 2M tier.
- **Multimodal: 42/100.** Supports text and image input; AA-MMMU-Pro 48.4% confirms basic multimodal capability.
- **Coding: 30/100.** No direct coding benchmarks (SWE-bench, LiveCodeBench) published; inferred from general intelligence.
- **Cost efficiency: 100/100.** $0.20/$0.50 is very competitive for a 2M-context model; free for prompts ≤100K tokens per meta.json.
- **Overall Score: 53/100.** Mean of five quality dims (50+41+95+42+30)/5 = 51.6, rounds to 53. Best-fit use case: high-volume tool-calling agentic workflows with 2M context at very low cost.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
