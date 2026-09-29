# GPT-5.4 — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.4`; xhigh reasoning)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (xhigh)
- **Short description:** OpenAI's March 2026 frontier model for professional work, coding, computer use, tool search, and agentic workflows. Now **deprecated by OpenAI in favour of GPT-5.5**.
- **Provider / access:** OpenAI API (`gpt-5.4`, default snapshot `gpt-5.4-2026-03-05`); ChatGPT, API, and Codex. The official model page documents separate long-context rate-limit tiers for the 1.05M window.
- **Release / knowledge:** OpenAI announced GPT-5.4 on 2026-03-05. The official model page documents an **August 31, 2025 knowledge cutoff**.
- **IDs:** `gpt-5.4`; snapshot `gpt-5.4-2026-03-05`; xhigh is a reasoning-effort configuration.
- **Context window:** **1,050,000 tokens** verified on the official OpenAI model page, with a 128,000-token maximum output; 272,000 tokens of that window sits under a separate long-context rate-limit tier. The exact-model value is confirmed rather than inferred from Artificial Analysis rounding.
- **Modalities:** Text and image input; text output; reasoning and computer use supported. Audio/video are not shown.
- **Pricing (as of 2026-09-29):** Official OpenAI rates are **$2.50 per 1M input, $0.25 per 1M cached input, and $15.00 per 1M output** tokens. For models with a 1.05M context window (GPT-5.4 and GPT-5.4 Pro), **prompts with more than 272K input tokens are priced at 2x input and 1.5x output for the full session**, across standard, batch, and flex.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- GDPval: **83.0% wins or ties** across 44 occupations (OpenAI GPT-5.4 announcement)
- SWE-Bench Pro (Public): **57.7%** (OpenAI GPT-5.4 announcement)
- OSWorld-Verified: **75.0%** (OpenAI GPT-5.4 announcement)
- Toolathlon: **54.6%** (OpenAI GPT-5.4 announcement)
- BrowseComp: **82.7%** (OpenAI GPT-5.4 announcement)
- Computer-use portal evaluation: **95% first-attempt success** and **100% within three attempts** on about 30K HOA/property-tax portal sessions (Mainstay partner evaluation quoted by OpenAI)
- Artificial Analysis Intelligence Index: **39**, unchanged in this re-run (Artificial Analysis, accessed 2026-09-29)
- Output speed and latency: **time to first token 150.31s** (Artificial Analysis, accessed 2026-09-29), a very slow first-token latency for a frontier API model
- Terminal-Bench 4.0, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **39** (Artificial Analysis, accessed 2026-09-29)
- Knowledge cutoff: **August 31, 2025** (official OpenAI model page)
- GPQA Diamond, HLE absolute score, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-Bench Pro (Public): **57.7%** (OpenAI)
- LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public exact value found**
- SWE-bench Verified: **no verified public exact value found**

Long context:

- No public retrieval-at-length result for this exact model was found. The official 1,050,000-token context window and 128,000-token output limit are verified on OpenAI's model page, but the >272K prompt tier carries 2x input / 1.5x output pricing and separate rate limits.

Sources consulted: [OpenAI GPT-5.4 model page](https://developers.openai.com/api/docs/models/gpt-5.4), [OpenAI GPT-5.4 announcement](https://openai.com/index/introducing-gpt-5-4/), and [Artificial Analysis GPT-5.4](https://artificialanalysis.ai/models/gpt-5-4), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval 83.0%, OSWorld-Verified 75.0%, Toolathlon 54.6%, BrowseComp 82.7%, and 95% first-attempt portal success provide unusually broad agent evidence.
- **Reasoning: 86/100.** AA Index 39 is above the compared median and OpenAI describes GPT-5.4 as a frontier professional-work model; exact GPQA/HLE values were unavailable.
- **Context window: 95/100.** The 1,050,000-token window is now verified on OpenAI's own model page, but no retrieval-at-length result was found.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not shown.
- **Coding: 87/100.** SWE-Bench Pro 57.7% and OpenAI's coding/tool-search positioning support strong coding; exact SWE-bench Verified, LiveCodeBench, and SciCode values are missing.
- **Cost efficiency: 60/100.** $2.50/$15 pricing is materially cheaper than Opus 5 but still paid and above Flash-tier models, and long prompts above 272K tokens are billed at 2x input / 1.5x output.
- **Overall Score: 85.4/100.** (94 + 86 + 95 + 65 + 87) / 5 = 427 / 5 = 85.4. Best fit: professional computer-use agents and coding workflows where broad tool support matters more than low price; new deployments should prefer GPT-5.5, as GPT-5.4 is deprecated.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of OpenAI's official GPT-5.4 model page and announcement plus Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
