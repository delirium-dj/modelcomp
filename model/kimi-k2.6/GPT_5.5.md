# Kimi K2.6 — findings by GPT 5.5

- Source: Moonshot AI/Kimi K2.6
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Kimi K2.6 is a Moonshot AI open-weights multimodal model for long-horizon coding, UI generation, and multi-agent orchestration.
- **Provider / access:** Moonshot API, OpenRouter/third-party providers, and open weights.
- **Release / knowledge:** Released 2026-04-20.
- **IDs:** `moonshotai/Kimi-K2.6`
- **Context window:** 256K-262K depending on route.
- **Modalities:** Visual/text input, thinking and non-thinking modes, dialogue, and agent tasks are reported in public docs discussions.
- **Pricing (as of 2026-10-05):** Public directory reports about $0.73/M input and $3.49/M output; other provider routes vary.
- **Architecture:** Open-weights Moonshot Kimi model.

### Raw benchmarks found

Agent / tool use:

- BenchLeader: reports Kimi K2.6 as a Moonshot AI open-weights model released 2026-04-20, with many configurations statistically tied by quality (`https://www.benchleader.com/models/kimi-k2-6`).
- Toolprism: describes Kimi K2.6 as designed for long-horizon coding, coding-driven UI/UX generation, and multi-agent orchestration (`https://toolprism.io/models/kimi-k2-6/`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Kimi K2 technical lineage report lists Kimi-K2-Instruct at GPQA-Diamond **75.1** and LiveCodeBench v6 **53.7**, useful as lineage context but older than K2.6 (`https://arxiv.org/abs/2507.20534`).
- GPQA Diamond: **no exact K2.6 score found**
- HLE: **no verified public score found**

Coding:

- CodeRouter review claims Kimi K2.6 matches GPT-5.5 on SWE-Bench Pro at much lower cost, but accessible snippet did not expose exact value (`https://www.coderouter.io/blog/kimi-k2-6-review-coding-benchmarks-2026`).
- Lyceum coverage says Kimi-K2.6 benchmark table compares against GPT-5.4 and Claude Opus 4.6, sourced from the Hugging Face model card; exact rows were not visible in snippet.
- SWE-Bench Pro: **match-GPT-5.5 claim, exact value not visible**
- LiveCodeBench: **no exact K2.6 score found**

Long context:

- Public sources report 256K/262K context; no independent MRCR/RULER score found for K2.6.

### Normalized scores (1–100)

- **Tool use: 82/100.** Multi-agent/coding positioning and open-weight availability support strong tool use.
- **Reasoning: 81/100.** Good open-weight reasoning, capped by missing exact K2.6 GPQA/HLE rows.
- **Context window: 84/100.** 256K/262K is strong, below 1M models.
- **Multimodal: 78/100.** Visual/text input support is useful, but not full omnimodal.
- **Coding: 86/100.** SWE-Bench Pro match claims and coding focus support a high score, with exact-score caveat.
- **Cost efficiency: 92/100.** Low API pricing/open weights make it very cost-effective.
- **Overall Score: 82/100.** Mean of the five quality dimensions; best fit is low-cost open coding and agentic workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
