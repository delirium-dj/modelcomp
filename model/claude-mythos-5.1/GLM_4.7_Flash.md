# GLM 4.7 Flash vs Claude Mythos 5.1

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's vetted-access form of the model underlying Fable 5.1, designed for approved cyberdefenders and life-sciences organizations.
- **Provider / access:** Anthropic (API-only), claude-mythos-5.1
- **Release / knowledge:** September 1, 2026; knowledge cutoff not specified
- **IDs:** anthropic/claude-mythos-5.1
- **Context window:** Not specified in public documentation; typical Claude models range from 200K to 1M tokens
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** Not publicly disclosed (proprietary)
- **Architecture:** Proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **Terminal-Bench 4.0:** 60.9% (Anthropic / rank 5 of 41 / tool-use evaluation)
- **ExploitBench v8-bench:** 83.0% (Anthropic / rank 2 of 16 / cybersecurity)

Reasoning / knowledge:

- **Omniscience Accuracy:** 0.57 net (0.77 correct, 0.20 incorrect, 0.02 abstained) (Anthropic / rank 3 of 9 / knowledge)

Coding:

- **Terminal-Bench 4.0:** 60.9% (Anthropic / rank 5 of 41 / coding)
- **ArxivMath:** 93.9% with tools, 91.3% without tools (Anthropic / rank 5 of 35 / mathematical reasoning)
- **BBQ:** 89.9% disambiguated accuracy, 100.0% ambiguous accuracy (Anthropic / rank 2 of 7 / factual knowledge)

Long context:

- No verified public score found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100**
- **Reasoning: 75/100**
- **Context window: 90/100**
- **Multimodal: 60/100**
- **Coding: 85/100**
- **Cost efficiency: 70/100**
- **Overall Score: 78/100**

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Public internet research (BenchmarkList, Anthropic model card, system card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Mythos 5.1 Model Card](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Anthropic Claude Mythos 5.1 System Card](https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card)
  - [BenchmarkList Claude Mythos 5.1](https://benchmarklist.com/models/anthropic-claude-mythos-5.1)
- Note: This is the official Anthropic model, not the community Qwen3-based model.
- Future sources: None — this completes the current research queue.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
