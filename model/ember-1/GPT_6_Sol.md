# Ember-1 — findings by GPT 6 Sol

- Source: Fireworks Research (`accounts/fireworks/models/ember-1`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's September 2026 specialised, Kimi K3-derived model trained to preserve coding and tool quality with ~35–50% fewer generated tokens on measured workflows; a distinct hosted fine-tune, not the unchanged Kimi K3 weights ([Fireworks launch](https://fireworks.ai/blog/ember-1), [model page](https://fireworks.ai/models/fireworks/ember-1)).
- **Provider / access:** Fireworks serverless `accounts/fireworks/models/ember-1` through Fireworks REST/Python/OpenAI-compatible API ([Fireworks model page](https://fireworks.ai/models/fireworks/ember-1)); project `opencode/ember-1` is a catalog route without verified free Zen entitlement.
- **Release / knowledge:** Model page created September 22, 2026; September 23 announcement ([Fireworks](https://fireworks.ai/models/fireworks/ember-1), [launch](https://fireworks.ai/blog/ember-1)). Knowledge cutoff for the new fine-tune not separately specified.
- **IDs:** `accounts/fireworks/models/ember-1`; OpenRouter/provider aliases must not be assumed equivalent to a differently tested Kimi K3 SKU.
- **Context window:** [Fireworks](https://fireworks.ai/models/fireworks/ember-1) **1,040K context**; [Vals](https://www.vals.ai/models/fireworks_ember-1) reports **131,072 max output** on its Fireworks route. Long-context retrieval for Ember itself not independently measured.
- **Modalities:** Text/image input → text output and function calls ([Fireworks model page](https://fireworks.ai/models/fireworks/ember-1)); native audio/video input/output not advertised.
- **Pricing (as of 2026-10-13):** [Fireworks model page](https://fireworks.ai/models/fireworks/ember-1) **$3 input / $0.30 cached input / $15 output per 1M**; research preview availability and hosted rate may change. Reduced output tokens can lower **task** spend, not the published per-token price.
- **Architecture:** Proprietary specialised fine-tune on Kimi K3; [Fireworks](https://fireworks.ai/models/fireworks/ember-1) lists **2.78T** total MoE parameters but does not publish separate active parameters or download Ember weights. Kimi K3's published benchmarks are not Ember measurements.

### Raw benchmarks found

The [Fireworks launch's direct comparison table](https://fireworks.ai/blog/ember-1) tests this specific hosted model; independent [Vals](https://www.vals.ai/models/fireworks_ember-1) tests additional agentic tasks. [BenchLM](https://benchlm.ai/models/ember-1) catalogs five Fireworks-attributed results but has no independent aggregate for Ember. Fireworks' claims of K3 quality are conditional on its reported harnesses and should not fill missing Ember benchmarks.

Agent / tool use:

- [Fireworks Terminal-Bench 2.1 **82.0%** (89 cases), τ²-bench Airline **66%** (50 cases)](https://fireworks.ai/blog/ember-1). [Vals Terminal-Bench 4.0 **20.71% ±3.64**, Code Migration **32.51% ±4.63**, Finance Agent v2 **51.85% ±2.12**, Harvey Legal Agent **9.17% ±2.44**, EMB **63.37% ±2.95**](https://www.vals.ai/models/fireworks_ember-1).
- MCP Atlas, Claw-Eval, OSWorld and GDPval-AA for Ember **no verified public score found**. The 82% TB2.1 is not a TB4 result.

Reasoning / knowledge:

- [Vals ProofBench v1.1 **61.00% ±4.90**, BioMysteryBench **67.04% ±3.03**, Legal Research Bench **44.71% ±3.46**](https://www.vals.ai/models/fireworks_ember-1). GPQA Diamond, HLE, CritPt and AA Index for Ember **no verified public score found**; any reasoning rating remains provisional.

Coding:

- [Fireworks SWE-bench Verified **92.2%** (500 tasks), DeepSWE v1.1 **75.2%** (113 tasks), SWE-Interact **20.0%** (75 tasks), TB2.1 **82.0%**](https://fireworks.ai/blog/ember-1) in a Fireworks-owned comparison against K3 efforts; [Vals Vibe Code Bench v1.1 **83.87% ±3.15**, TB4.0 **20.71% ±3.64**](https://www.vals.ai/models/fireworks_ember-1). No independently confirmed SWE Verified rerun on the same 500-case Fireworks harness.

Long context / vision:

- [Fireworks 1,040K capacity](https://fireworks.ai/models/fireworks/ember-1); Ember-specific full-1M MRCR/GraphWalks **no verified public score found**, and Kimi K3's results must not be silently transplanted.
- [Vals confirms image input](https://www.vals.ai/models/fireworks_ember-1); independent visual benchmark result on MMMU-Pro/CharXiv for Ember **no verified public score found**. Audio/video features, if any, cannot be inferred from parent model lineage.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 82% and Vals EMB 63.4% show useful agent work; TB4 20.7%, migration 32.5% and no OSWorld/MCP data cap generalization.
- **Reasoning: 75/100.** Provisional because GPQA/HLE are missing; ProofBench 61% and BioMystery 67% offer narrower evidence.
- **Context window: 93/100.** 1.04M advertised input and Vals 131K output, but no full-window retrieval measurement for Ember.
- **Multimodal: 67/100.** Image input supported, video/audio not established; no Ember-specific visual benchmark score.
- **Coding: 89/100.** Vendor SWE Verified 92.2%, DeepSWE 75.2% and Vals Vibe Code 83.9% are strong, tempered by TB4 20.7% and vendor-run SWE harness.
- **Cost efficiency: 53/100.** $3/$15 API and $0.30 cached are premium but the reported 35–50% reduction in reasoning output can improve per-task cost.
- **Overall Score: 80/100.** (78 + 75 + 93 + 67 + 89) / 5 = 80.4, half-up 80; useful coding-focused fine-tune when actual hosted token usage, preview access and hard tasks are tested.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh Fireworks model/specs and direct benchmark table cross-checked against independent Vals; provisional dimensions disclosed, normalized scores are not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
