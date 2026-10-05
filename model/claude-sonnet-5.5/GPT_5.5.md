# Claude Sonnet 5.5 — findings by GPT 5.5

- Source: Anthropic/Claude Sonnet 5.5
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Claude Sonnet 5.5 is Anthropic's latest Sonnet model, tuned as the practical daily-driver tier for coding, knowledge work, and lower-cost Claude agent use.
- **Provider / access:** Claude API, Claude.ai, AWS, Google Cloud, Microsoft Azure.
- **Release / knowledge:** Released 2026-09-29, six days after Opus 5.5, per public launch coverage.
- **IDs:** `anthropic/claude-sonnet-5-5`
- **Context window:** Anthropic platform docs list Sonnet 5.5 with context/max-output/pricing rows; exact accessible snippet did not expose all values, but Sonnet family public pricing docs commonly use 200K-class context unless extended tiers are enabled.
- **Modalities:** Text and image input; text output; thinking and tools supported.
- **Pricing (as of 2026-10-05):** Anthropic launch page includes a per-1M-token pricing table comparing Sonnet 5.5 and Opus 5.5; third-party coverage says the per-token price matches Sonnet 5 and is much cheaper than Opus 5.5.
- **Architecture:** Proprietary Anthropic model.

### Raw benchmarks found

Agent / tool use:

- Anthropic launch page: says Sonnet 5.5 at Medium effort beats Sonnet 5's best AA-Briefcase score for about one ninth the cost per task (`https://www.anthropic.com/claude-sonnet-5-5`).
- AtomicAgent coverage: reports Sonnet 5.5 scores higher than Sonnet 5 on every benchmark in Anthropic's table and did the same job 2.6x faster for 37% less money in their test (`https://atomicagent.io/blog/claude-sonnet-5-5/`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- AA-Briefcase: **beats Sonnet 5 best score at Medium effort; exact score not exposed in accessible result**

Reasoning / knowledge:

- Tom's Guide launch coverage: states Sonnet 5.5 is positioned as the practical smaller model released after Opus 5.5 and available across Anthropic platforms (`https://www.tomsguide.com/ai/claude/claude-sonnet-5-5-just-launched-heres-why-its-about-to-become-your-daily-driver`).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- CritPt: **no verified public score found**

Coding:

- AtomicAgent coverage: reports benchmark and practical task gains over Sonnet 5; exact SWE rows were not visible in accessible snippet.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No independent MRCR/RULER value found for Sonnet 5.5 in accessible sources.

### Normalized scores (1–100)

- **Tool use: 88/100.** AA-Briefcase and practical agent-cost gains support strong tool use, capped by missing Terminal-Bench/Tau numbers.
- **Reasoning: 88/100.** Sonnet 5.5 is a high-end daily-driver model, but below Opus/Fable tiers in likely peak reasoning.
- **Context window: 82/100.** Strong enough for Claude workflows, but exact accessible context value was not fully verified and appears below 1M Opus/Fable tiers.
- **Multimodal: 70/100.** Text and image input are supported, without broader audio/video modalities here.
- **Coding: 90/100.** Sonnet 5.5 is strongly positioned for daily coding and faster task completion, capped by missing public SWE/LCB rows.
- **Cost efficiency: 82/100.** Cheaper than Opus 5.5 and efficient per task, though not a low-cost Flash/open model.
- **Overall Score: 84/100.** Mean of the five quality dimensions; best fit is practical Claude coding and knowledge work when Opus pricing is excessive.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
