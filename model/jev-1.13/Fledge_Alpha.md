# Jev 1.13 — findings by Fledge Alpha

- Source: TypeSafe AI (`jev-1.13`, System One, eval `category: "decision"`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

> Jev is a System-One decision model, not an LLM: it emits typed judgments (Choice, Score, `noul` yes/no + calibrated probability) with confidence instead of generated text. The 1–100 scores here are interpretive for routing/triage/guardrail use, not for generative capability.

- **Name:** Jev 1.13
- **Short description:** TypeSafe AI's first System One model (launched Sept 15, 2026 with $40M seed) built for routing, triage, and guardrails inside agent pipelines.
- **Provider / access:** TypeSafe console `console.typesafe.ai`; OpenRouter `typesafe/jev-1.13`; AIMLAPI-class routes; no local weights (proprietary, no open release).
- **Release / knowledge:** September 15, 2026 (early access); no public knowledge-cutoff row.
- **IDs:** `typesafe/jev-1.13`, `jev-1.13.0`, `jev-latest`, `jev-preview`; no Zen Free ID verified.
- **Context window:** 64K state budget per request (32K state + longest question); rates 250K tokens/s, 1,200 req/min, dynamic.
- **Modalities:** text in → structured decision out (Choice/Score/Noul with probabilities); no image/audio/video; no autoregressive text output.
- **Pricing (as of 2026-10-05):** $0.042 per 1M input tokens; output tokens free (essentially a decision token).
- **Architecture:** parallel sampler + RLCD training (per launch post; no published model card/paper).

### Raw benchmarks found

Agent / tool use:

- TypeSafe describes Jev as the decision layer inside agent pipelines — route/triage/guardrail cases published as demos; no public τ-bench/OSWorld row exists for any decision model in this class by design.

Reasoning / knowledge:

- No published reasoning benchmark table; TypeSafe's flaviocopes deep-dive confirms no public benchmark results are shared by TypeSafe.

Coding:

- No coding capability by design (text output = typed JSON).

Decision-specific evidence:

- Published latency band 70–500 ms per call (jevtypesafe.org benchmark page, vendor-stated).
- $0.042/M with output free — 5–240× cheaper input than LLM gateways per typesafe pricing guides.
- `noul`/`choice` probabilities with calibrated confidence are the product surface (TypeSafe docs).

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.
> Decision-model caveat: the "quality" dimensions are mapped as Tool use = decision/routing fit; Reasoning = calibrated-confidence discrimination on literal tasks; Context = state budget; Multimodal/Coding follow the standard caps. Scores are interpretive and site-filtered by `category: "decision"`.

- **Tool use: 78/100.** Published typed-decision surface (Choice/Score/Noul) matches routing/triage/guardrail use; no third-party ρ-bench exists.
- **Reasoning: 55/100.** Calibrated-probability API is documented; no published accuracy calibration chart for Jev 1.13 on public labels.
- **Context window: 70/100.** 64K per-request budget; adequate for state snapshots but far below generative LLM 1M-class windows.
- **Multimodal: 15/100.** Text-only by design.
- **Coding: 15/100.** No code output by design; constrained to typed JSON decisions.
- **Cost efficiency: 97/100.** $0.042/M in, output free; 250K tok/s published band.
- **Overall Score: 47/100.** Mean of five non-cost dims (78+55+70+15+15)/5 = 46.6 → 47; best fit: a cheap decision layer in front of expensive LLMs, never a text generator.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (TypeSafe launch context via flaviocopes deep-dive, jevpricing.com, cloudprice, llmreference System One family page, jevtypesafe.org benchmarks page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
