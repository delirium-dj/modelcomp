# Mercury 3 — findings by Inkling 2 Small

- Source: Inception Labs (`mercury-3`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception Labs' third-generation diffusion LLM — generates tokens in parallel via discrete diffusion instead of left-to-right decoding; "reasoning" medium mode measured. Very low latency, very low price; 1M-token context.
- **Provider / access:** Inception Labs API (`api.inceptionlabs.ai`); models.dev pricing records `$0.10/$0.35` (in/out per 1M).
- **Release / knowledge:** Released 2026-10-16 (updated 2026-10-20); knowledge cutoff not publicly stated.
- **IDs:** `mercury-3`
- **Context window:** 1,000,000 tokens; max output 131,072 tokens (models.dev).
- **Modalities:** text in → text out (diffusion LM); reasoning yes (medium-reasoning mode); tool calls yes (τ³ measured).
- **Pricing (as of 2026-11-10):** $0.10 / 1M input, $0.35 / 1M output (models.dev) — exceptionally cheap for a 1M-context reasoning model.
- **Architecture:** diffusion language model (parallel token generation); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ³-bench: **30.2%** (Inception, Mercury 3 medium-reasoning launch chart)
- BrowseComp+: **55.18%** (launch chart)
- DeepSearchQA: **71.3%** (launch chart)

Reasoning / knowledge:

- GPQA-D: **89.2%** (launch chart)
- MRCRv2: **75.5%** (launch chart)
- IFBench: **76.8%** (launch chart); MultiChallenge (provider-reported): **60.35%**

Coding:

- DeepSWE: **46.3%** (launch chart)

Long context:

- MRCRv2: **75.5%** at 1M tokens (launch chart).

Multimodal:

- Text-only — no verified public multimodal evidence exists.

### Normalized scores (1–100)

- **Tool use: 52/100.** DeepSearchQA 71.3% and BrowseComp+ 55.18% verify agentic retrieval; τ³-bench 30.2% keeps this mid-tier.
- **Reasoning: 78/100.** GPQA-D 89.2% is frontier-class for a $0.35-output model; MRCRv2 75.5% and IFBench 76.8% round it out.
- **Context window: 92/100.** 1M tokens with measured MRCRv2 75.5% — verified, not just claimed.
- **Multimodal: 15/100.** Text-only — no verified public multimodal evidence.
- **Coding: 56/100.** DeepSWE 46.3% only launch-chart row; live SWE-bench rows not found — scored conservatively.
- **Cost efficiency: 94/100.** $0.10/$0.35 — near-floor pricing with 1M context and reasoning.
- **Overall Score: 59/100.** (52 + 78 + 92 + 15 + 56) / 5 = 58.6 → 59. Best fit: ultra-low-cost 1M-context reasoning/chat and agentic retrieval; text-only, validate coding needs first.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Inception launch post, models.dev, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores. All rows from the vendor's launch chart — no independent reproduction yet.
- Reference URLs:
  - [Introducing Mercury 3 — Inception Labs](https://www.inceptionlabs.ai/blog/introducing-mercury-3)
  - [Mercury 3 — BenchLM](https://benchlm.ai/models/mercury-3)
  - [Mercury 3 — models.dev](https://models.dev/models/inception/mercury-3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
