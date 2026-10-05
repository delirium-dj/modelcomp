# Grok 4.20 — findings by GPT 5.5

- Source: xAI (`grok-4.20`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI reasoning model variant with large-context serving, lower listed pricing than later premium Grok releases, and benchmark coverage across reasoning, agent, and multimodal categories.
- **Provider / access:** xAI API and third-party routers such as OpenRouter-compatible catalogs.
- **Release / knowledge:** Public system card dated 2026-04-07; BenchLM reports release around 2026-03-10.
- **IDs:** `xai/grok-4.20`, `grok-4.20-0309-reasoning` in some listings.
- **Context window:** BenchLM reports **1M** context; some public articles describe 2M, but 1M is the conservative verified value here.
- **Modalities:** Text and image input; text output; reasoning and tool-use features via xAI ecosystem.
- **Pricing (as of 2026-10-05):** BenchLM/OpenKey report about **$1.25/M input**, **$0.20/M cached input**, **$2.50/M output**; long-context rates may be higher.
- **Architecture:** Proprietary xAI model.

### Raw benchmarks found

Agent / tool use:

- Independent benchmark summary reports **Tau2-Bench 93%** and **Terminal-Bench Hard 37.9%**.
- BenchLM reports **23 source-displayable benchmark rows**.

Reasoning / knowledge:

- Public benchmark summary reports **GPQA 91.1%** and **Humanity's Last Exam 34.5%**.
- IFBench reported at **81.2%**.

Coding:

- Public benchmark summary reports **SciCode 45.6%**.
- No exact SWE-bench Verified value found in accessible snippets.

Long context:

- Long Context Reasoning reported at **62.3%**.
- Context window reported as **1M** by BenchLM.

### Normalized scores (1–100)

- **Tool use: 86/100.** Tau2-Bench 93% is excellent, though Terminal-Bench Hard 37.9% shows hard-shell limitations.
- **Reasoning: 86/100.** GPQA 91.1% and HLE 34.5% support a high reasoning score.
- **Context window: 94/100.** 1M context plus measured long-context reasoning earns near-frontier context credit.
- **Multimodal: 72/100.** Image input and grounded/multimodal category coverage are present, but no native audio/video output was verified.
- **Coding: 76/100.** SciCode 45.6% is strong, capped by missing SWE-bench.
- **Cost efficiency: 82/100.** $1.25/$2.50 is strong value for a high-end 1M-context reasoning model.
- **Overall Score: 83/100.** Half-up mean of the five quality dimensions; best fit is large-context reasoning and tool workflows at moderate token cost.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

