# GPT-5.4 — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.4`; xhigh reasoning)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (xhigh)
- **Short description:** OpenAI's March 2026 frontier model for professional work, coding, computer use, tool search, and agentic workflows.
- **Provider / access:** OpenAI API (`gpt-5.4`); ChatGPT, API, and Codex. The reviewed official model URL was unavailable, so access details rely on the official announcement and Artificial Analysis.
- **Release / knowledge:** OpenAI announced GPT-5.4 on 2026-03-05. Artificial Analysis reports an August 31, 2025 knowledge cutoff.
- **IDs:** `gpt-5.4`; xhigh is a reasoning-effort configuration.
- **Context window:** Artificial Analysis reports 1M tokens (its FAQ renders this as 1.1M); exact official output limit was not found in the reviewed pages.
- **Modalities:** Text and image input; text output; reasoning and computer use supported. Audio/video are not shown.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $2.50 per 1M input and $15.00 per 1M output tokens, with a 90% cache discount.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- GDPval: **83.0% wins or ties** across 44 occupations (OpenAI GPT-5.4 announcement)
- SWE-Bench Pro (Public): **57.7%** (OpenAI GPT-5.4 announcement)
- OSWorld-Verified: **75.0%** (OpenAI GPT-5.4 announcement)
- Toolathlon: **54.6%** (OpenAI GPT-5.4 announcement)
- BrowseComp: **82.7%** (OpenAI GPT-5.4 announcement)
- Computer-use portal evaluation: **95% first-attempt success** and **100% within three attempts** on about 30K HOA/property-tax portal sessions (Mainstay partner evaluation quoted by OpenAI)
- Artificial Analysis Intelligence Index: **39 estimated**, rank **#51/210** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 4.0, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **39 estimated** (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond, HLE absolute score, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-Bench Pro (Public): **57.7%** (OpenAI)
- LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public exact value found**
- SWE-bench Verified: **no verified public exact value found**

Long context:

- No public retrieval-at-length result for this exact model was found. Artificial Analysis verifies a 1M-token context-window claim.

Sources consulted: [OpenAI GPT-5.4 announcement](https://openai.com/index/introducing-gpt-5-4/) (content obtained from the fetched official page) and [Artificial Analysis GPT-5.4](https://artificialanalysis.ai/models/gpt-5-4), accessed 2026-09-24. The official model documentation URL was unavailable.

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval 83.0%, OSWorld-Verified 75.0%, Toolathlon 54.6%, BrowseComp 82.7%, and 95% first-attempt portal success provide unusually broad agent evidence.
- **Reasoning: 86/100.** AA Index 39 is above the compared median of 25 and OpenAI describes GPT-5.4 as a frontier professional-work model; exact GPQA/HLE values were unavailable.
- **Context window: 95/100.** A 1M context is verified by Artificial Analysis, but no retrieval-at-length result was found.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not shown.
- **Coding: 87/100.** SWE-Bench Pro 57.7% and OpenAI's coding/tool-search positioning support strong coding; exact SWE-bench Verified, LiveCodeBench, and SciCode values are missing.
- **Cost efficiency: 60/100.** $2.50/$15 pricing is materially cheaper than Opus 5 but still paid and above Flash-tier models.
- **Overall Score: 85.4/100.** (94 + 86 + 95 + 65 + 87) / 5 = 85.4. Best fit: professional computer-use agents and coding workflows where broad tool support matters more than low price.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of OpenAI's official GPT-5.4 announcement and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
