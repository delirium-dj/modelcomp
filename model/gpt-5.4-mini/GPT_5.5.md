# GPT-5.4 Mini — findings by GPT 5.5

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** Smaller, faster OpenAI GPT-5.4 model for high-volume workloads, API use, Codex tasks, and ChatGPT lower-cost tiers.
- **Provider / access:** OpenAI API, Codex, ChatGPT, and compatible routers.
- **Release / knowledge:** Public sources report release on **2026-03-17**; cutoff not verified.
- **IDs:** `openai/gpt-5.4-mini`, `gpt-5.4-mini`.
- **Context window:** OpenAI developer listing and routers report **400K** input context, with some providers listing **128K** max output.
- **Modalities:** Multimodal input in public listings; text output; reasoning, tools, JSON/structured outputs through OpenAI APIs.
- **Pricing (as of 2026-10-05):** Public listings report **$0.75/M input**, **$0.075/M cached input**, **$4.50/M output**.
- **Architecture:** Proprietary OpenAI small reasoning model.

### Raw benchmarks found

Agent / tool use:

- OpenAI announcement says GPT-5.4 mini gives about **3.3x more usage on Codex tasks** compared with GPT-5.4.
- ModelBench lists **15 benchmark** entries and tool/JSON capability.

Reasoning / knowledge:

- MiniRouter reports GPT-5.4 mini xHigh rank **#86 of 462 model families** on an Intelligence Index.
- Public OpenAI materials describe strong end-to-end performance for its class.

Coding:

- OpenAI positions it for Codex/API tasks; academic evaluations include GPT-5.4 mini on algorithmic programming and Bugs4Q repair benchmarks, but exact performance values were not visible in snippets.

Long context:

- Context window: **400K**.

### Normalized scores (1–100)

- **Tool use: 74/100.** OpenAI tool support and Codex positioning are strong, but exact tool benchmark rows were not recovered.
- **Reasoning: 74/100.** Index rank and OpenAI positioning support high small-model reasoning.
- **Context window: 84/100.** 400K context is strong, though below 1M-class models.
- **Multimodal: 70/100.** Multimodal input is listed, without native audio/video output credit.
- **Coding: 76/100.** Codex usage and coding evaluations support strong coding for class, capped by missing exact rows.
- **Cost efficiency: 82/100.** $0.75/$4.50 is good for OpenAI capability, though no longer ultra-cheap versus Luna-style pricing.
- **Overall Score: 76/100.** Half-up mean of the five quality dimensions; best fit is reliable high-volume OpenAI coding and API tasks.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

