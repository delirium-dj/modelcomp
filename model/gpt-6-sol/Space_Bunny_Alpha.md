# GPT-6 Sol — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-6-sol`; max effort)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (max)
- **Short description:** OpenAI's complex-coding and agentic-workflow model, with broad Responses API tool support and configurable reasoning from none through max.
- **Provider / access:** OpenAI API (`gpt-6-sol`); Responses API, Chat Completions, and other listed endpoints. Built-in tools and function calling are available through Responses; Chat Completions function calling requires `reasoning_effort=none`.
- **Release / knowledge:** Artificial Analysis lists release on 2026-09-22. OpenAI documents an April 20, 2026 knowledge cutoff.
- **IDs:** `gpt-6-sol`; max is a reasoning-effort configuration.
- **Context window:** 1,050,000 tokens; 128,000 maximum output tokens (OpenAI API documentation, verified 2026-09-24).
- **Modalities:** Text and image input; text output. Audio and video are not supported. Function calling and structured outputs are supported.
- **Pricing (as of 2026-09-24):** $2.00 per 1M input tokens, $10.00 per 1M output tokens; cached input $0.20 and cache writes $2.50. Prompts over 272K input tokens receive higher long-context rates; batch/Flex are 50% of standard and fast mode is 2x.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **48/100**, rank **#18/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **113.3 tokens/s**; time to first token **136.12s** (Artificial Analysis, accessed 2026-09-24)
- OpenAI documents support for web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP, and tool search; exact model benchmark values for these tools were not shown on the reviewed pages.
- Terminal-Bench 4.0, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, and SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **48** (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**

Coding:

- OpenAI describes GPT-6 Sol as built for complex coding and agentic workflows; exact SWE-bench, DeepSWE, LiveCodeBench, and SciCode values were not shown in the reviewed official pages.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact model was found. OpenAI verifies a 1,050,000-token context window and 128K maximum output, with pricing above 272K input tokens.

Sources consulted: [OpenAI GPT-6 Sol model documentation](https://platform.openai.com/docs/models/gpt-6-sol) and [Artificial Analysis GPT-6 Sol](https://artificialanalysis.ai/models/gpt-6-sol), accessed 2026-09-24. The official OpenAI announcement URL was unavailable, so no official benchmark values are claimed from it.

### Normalized scores (1–100)

- **Tool use: 95/100.** OpenAI documents an unusually broad Responses API tool surface, including computer use, hosted shell, apply patch, MCP, and tool search; AA Index 48 is strong, while exact individual tool benchmarks were not published in the reviewed pages.
- **Reasoning: 94/100.** AA Index 48 is near the frontier and OpenAI positions Sol for complex agentic workflows; missing exact GPQA, HLE, and hallucination values cap the score below the top tier.
- **Context window: 98/100.** OpenAI verifies 1,050,000 input tokens and 128K output; retrieval-at-length evidence was not found.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio and video are not supported.
- **Coding: 93/100.** OpenAI explicitly positions Sol for complex coding and the AA composite includes coding, but exact SWE/DeepSWE/LiveCodeBench/SciCode values were unavailable.
- **Cost efficiency: 80/100.** $2/$10 standard pricing, low cached-input price, and batch/Flex discounts are attractive for a frontier model, though long-context and fast-mode surcharges apply.
- **Overall Score: 89.0/100.** (95 + 94 + 98 + 65 + 93) / 5 = 89.0. Best fit: complex coding, tool-heavy agents, and professional workflows where OpenAI's broad Responses tool ecosystem matters.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of OpenAI model documentation and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
