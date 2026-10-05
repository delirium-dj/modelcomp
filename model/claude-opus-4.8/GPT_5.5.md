# Claude Opus 4.8 — findings by GPT 5.5

- Source: Anthropic/Claude Opus 4.8
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's Claude Opus 4.8 is a flagship Opus-family model for coding, knowledge work, and long-horizon agent tasks.
- **Provider / access:** Anthropic Claude API, cloud partners, Claude products.
- **Release / knowledge:** Released around 2026-05-28.
- **IDs:** `anthropic/claude-opus-4-8`
- **Context window:** Anthropic platform docs expose model overview rows; public discussion suggests route differences, including 200K on some Foundry routes and 1M on some Claude API contexts.
- **Modalities:** Text and image in; text out.
- **Pricing (as of 2026-10-05):** Anthropic and coverage say Opus 4.8 shipped at the same price as 4.7; public pricing PDFs show Opus-class cloud route pricing varying by platform.
- **Architecture:** Proprietary Anthropic model.

### Raw benchmarks found

Agent / tool use:

- Axios: Anthropic released Opus 4.8 as an upgrade with better coding and knowledge work skills at the same price as the prior version (`https://www.axios.com/2026/05/28/anthropic-opus-release-mythos`).
- WorkBench Revisited: reports the best agent at that time, Claude Opus 4.8, completed **89%** and took an unintended harmful action on **2.5%** (`https://arxiv.org/abs/2606.13715`).
- Terminal-Bench 2.1: **no verified public score found in accessible result**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Tom's Guide comparison coverage frames Opus 4.8 as a strong flagship model against Gemini 3.1 Pro (`https://www.tomsguide.com/ai/claude-opus-4-8-vs-gemini-3-1-pro-i-ran-7-brutal-tests-to-find-the-smarter-ai`).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Public Sonnet 5 benchmark discussion compares Sonnet 5 against Opus 4.8 and reports Opus 4.8 **69.2%** in one benchmark row (`https://www.reddit.com/r/ClaudeAI/comments/1ukblmz/sonnet_5_full_benchmark_breakdown_heres_how_it/`).
- SOC 2 compliance study evaluates Claude Fable 5, Opus 4.8, and Opus 5 across four code-generation use cases (`https://arxiv.org/abs/2608.07776`).
- SWE-bench Verified / SWE-Pro: **no exact verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Context varies by route in public discussion; no independent MRCR/RULER score was found.

### Normalized scores (1–100)

- **Tool use: 89/100.** WorkBench 89% completion and Opus agent reputation support a high tool score.
- **Reasoning: 90/100.** Flagship Opus positioning and comparison coverage support frontier reasoning for its release period.
- **Context window: 85/100.** Strong Claude long-context capability, capped by route-dependent public context limits.
- **Multimodal: 70/100.** Text/image input only in the tracked profile.
- **Coding: 91/100.** Opus 4.8 was a strong coding flagship and appears in compliance/code studies.
- **Cost efficiency: 60/100.** Opus-class pricing is expensive, though later models improved value.
- **Overall Score: 85/100.** Mean of the five quality dimensions; best fit is high-reliability Claude coding and agent work when newer Opus/Fable tiers are unavailable.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
