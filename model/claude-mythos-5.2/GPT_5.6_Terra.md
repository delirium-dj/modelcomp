# Claude Mythos 5.2 — findings by GPT-5.6 Terra

- Source: Anthropic (`claude-mythos-5-2`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's verification-gated version of Fable 5.2 for cybersecurity engineering and life-sciences use cases whose safeguards are restricted in the public configuration.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, and Microsoft Foundry; requires Cyber or Life Sciences Verification, or Claude Security access.
- **Release / knowledge:** Released 2026-11-09; reliable/training cutoff June 2026.
- **IDs:** `anthropic/claude-mythos-5-2`, `anthropic.claude-mythos-5-2` on Bedrock.
- **Context window:** 1M tokens; maximum output 128K tokens.
- **Modalities:** Text and image input; text output; adaptive thinking always enabled.
- **Pricing (as of 2026-11-11):** $8/M input, $40/M output, $10/M five-minute cache write, $16/M one-hour cache write, and $0.20/M cache read; Batch API $4/M input and $20/M output; verified users can select $16/$80 fast mode.
- **Architecture:** Proprietary; same underlying model, specifications, and base price as Fable 5.2, with fewer cyber/bio safeguards for approved users.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.5%** with safeguards off, versus Fable 5.2 at 67.6% with safeguards on; the 2.9-point difference is reported alongside an approximately ±1.8-point standard error.
- Terminal-Bench-Science 0.1: **75.3%**, versus Fable 5.2 at 74.6%; the 0.7-point gap is inside the cited ±4.3-point standard error.

Reasoning / knowledge:

- It shares Fable 5.2's underlying model. Fable's independently tracked AA Intelligence Index result is **65** at maximum effort; it is evidence of the shared general model, not an independent Mythos-only run.
- Protein domain identification: **91.8%**; medicinal-chemistry ADME: **69.0%**; and de novo binder design: **85.1%** (Anthropic self-reports, safeguards off).

Coding / cybersecurity:

- CVE Rediscovery: **89.6%** across 1,829 October-2026 advisories (Anthropic internal evaluation; possible training-data exposure is a stated caveat).
- CyScenarioBench: **76.3%** (Anthropic self-report; comparator labs used unique tasks, so this is not a clean head-to-head).
- ExploitGym: **341/869** six-hour tasks and Binary Exploitation Benchmark: **148** control-flow hijacks (Anthropic self-reports).

Long context:

- 1M-token context and 128K-token maximum output are vendor-documented. No exact-model public retrieval score was found.

Multimodal:

- Text/image input and text output are documented. No Mythos-5.2-specific independent multimodal benchmark was found; Fable 5.2's 62.29% on Vals SWE-bench Multimodal is an imperfect shared-weights proxy.

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 4.0 at 70.5% and Terminal-Bench-Science at 75.3% indicate elite agent execution; small safeguard deltas and vendor-run evaluation cap the score.
- **Reasoning: 96/100.** The shared Fable 5.2 model's independent AA Index of 65 plus high specialist science results support frontier reasoning, but only the specialist rows are Mythos-specific and all are vendor-reported.
- **Context window: 99/100.** The 1M-token context and 128K output limit are frontier-class; no public exact-model retrieval test supports a perfect score.
- **Multimodal: 85/100.** Text/image input and a shared-model proxy support strong visual task capability, while absent audio/video support and no exact-model independent multimodal result limit the score.
- **Coding: 99/100.** Terminal-Bench 4.0 at 70.5% plus strong cyber-engineering evaluations demonstrate exceptional technical capability; CVE memorization risk and non-comparable proprietary evaluations prevent 100.
- **Cost efficiency: 42/100.** Pricing improves on Mythos 5.1 but $8/$40 is still expensive, and access verification plus 30-day data retention reduce practical accessibility.
- **Overall Score: 95/100.** Half-up mean of the five quality dimensions: (94 + 96 + 99 + 85 + 99) / 5 = 94.6. Best for verified organizations with legitimate advanced cyber or life-sciences work.

---

## Signature

- Provided by: **GPT-5.6 Terra (OpenAI/gpt-5.6-terra)** — 2026-11-11 UTC
- Method: Public web research across Anthropic documentation, a system-card index, and independent analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Mythos 5.2 documentation](https://platform.claude.com/docs/en/models/mythos-5-2/overview)
  - [Independent access and benchmark analysis](https://www.eesel.ai/blog/claude-mythos-5-2)
  - [Independent safeguard-delta analysis](https://llm-stats.com/blog/research/claude-mythos-5-2-launch)
  - [System-card index](https://malob.github.io/ai-system-cards/anthropic/claude-fable-5-2/)
  - [Independent publication caveat summary](https://vandatateam.com/ai-model-benchmarks/claude-mythos-5-2)
