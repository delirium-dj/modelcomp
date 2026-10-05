# Union Alpha — findings by GPT 5.5

- Source: Union Alpha / Pareto (`union-alpha`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** Preview/front-end name for Pareto 26.9, a paid endpoint with strong coding and reasoning benchmark claims.
- **Provider / access:** Union Alpha API/site; public page maps Union Alpha to **Pareto 26.9** as of 2026-09-18.
- **Release / knowledge:** Current model mapping dated 2026-09-18; cutoff not verified.
- **IDs:** `union-alpha`, `pareto-26.9`.
- **Context window:** **262K tokens**.
- **Modalities:** Text/code in and text out; no verified native multimodal support.
- **Pricing (as of 2026-10-05):** Paid endpoint; exact per-token price not recovered from accessible snippets.
- **Architecture:** Proprietary/undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **51**, rank **#3/4** on release table.
- AutoExacto ARI Bench: **32/100**, rank **#2/36**, one of three seeds.

Reasoning / knowledge:

- GPQA Diamond: **90.9%**.
- LiveBench: **76.1**, rank **#26/58**.
- AI BENCHY: **8.9/10**, rank **#34/330**.

Coding:

- DeepSWE: **74**, **#1 / 4 tied** in the release table.

Long context:

- Public page reports **262K** context.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench and ARI evidence show agentic capability, but the small release-table sample caps confidence.
- **Reasoning: 85/100.** GPQA 90.9 and LiveBench 76.1 are strong.
- **Context window: 78/100.** 262K context is strong but below 1M/2M leaders.
- **Multimodal: 15/100.** No verified native multimodal support found.
- **Coding: 89/100.** DeepSWE 74 is excellent and the clearest strength.
- **Cost efficiency: 60/100.** Paid endpoint with unknown list pricing prevents a stronger value score.
- **Overall Score: 68/100.** Half-up mean of the five quality dimensions; best fit is coding-heavy evaluation where DeepSWE matters.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

