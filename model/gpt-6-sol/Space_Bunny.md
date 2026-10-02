# GPT-6 Sol — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-6-sol`; max effort)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (max)
- **Short description:** OpenAI's complex-coding and agentic-workflow model, with broad Responses API tool support and configurable reasoning from none through max.
- **Provider / access:** OpenAI API (`gpt-6-sol`); Responses API, Chat Completions, and other listed endpoints. Built-in tools and function calling are available through Responses; Chat Completions function calling requires `reasoning_effort=none`. Available through 7 API providers per Artificial Analysis.
- **Release / knowledge:** Artificial Analysis lists release on 2026-09-22. OpenAI documents an April 20, 2026 knowledge cutoff.
- **IDs:** `gpt-6-sol`; max is a reasoning-effort configuration.
- **Context window:** OpenAI API documentation gives 1,050,000 tokens with 128,000 maximum output; Artificial Analysis independently lists a **872k** combined context window (verified 2026-09-29). Both are retained because they measure different things (documented input limit vs. AA's combined input+output figure).
- **Modalities:** Text and image input; text output. Audio and video are not supported. Function calling and structured outputs are supported.
- **Pricing (as of 2026-09-29):** $2.00 per 1M input tokens, $10.00 per 1M output tokens; cached input $0.20 and cache writes $2.50. Prompts over 272K input tokens receive higher long-context rates; batch/Flex are 50% of standard and fast mode is 2x. Artificial Analysis reports a 90% cache discount and a $1.54 blended 7:2:1 rate.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.
- **Lifecycle:** No deprecation, discontinuation, or successor notice found for `gpt-6-sol` on 2026-09-29. It is not flagged on Artificial Analysis.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **48/100**, rank **#20/216** (Artificial Analysis, accessed 2026-09-29; composite benchmark). The index value is unchanged from 2026-09-24; only the rank/field size moved (**#18/210 → #20/216**).
- Output speed: **79.3 tokens/s**; time to first token **179.57s** (Artificial Analysis, accessed 2026-09-29). **Changed**: the 2026-09-24 report recorded 113.3 t/s and 136.12s TTFT. AA now classes the model as "faster than average" but the TTFT as at the higher end versus a 3.89s reasoning-model median.
- OpenAI documents support for web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP, and tool search; exact model benchmark values for these tools were not shown on the reviewed pages.
- Terminal-Bench 4.0, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, and SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **48** (v4.3.2, unchanged)
- Verbosity: **77M** output tokens on the Intelligence Index vs. an 88M median for the price tier
- GPQA Diamond, HLE, LCR/MLCR, CritPt, AA-Omniscience, and hallucination metrics: **no verified public score found**

Coding:

- OpenAI describes GPT-6 Sol as built for complex coding and agentic workflows; exact SWE-bench, DeepSWE, LiveCodeBench, and SciCode values were not shown in the reviewed official pages.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact model was found. OpenAI verifies a 1,050,000-token context window and 128K maximum output, with pricing above 272K input tokens; Artificial Analysis lists 872k combined.

Sources consulted: [OpenAI GPT-6 Sol model documentation](https://platform.openai.com/docs/models/gpt-6-sol) and [Artificial Analysis GPT-6 Sol](https://artificialanalysis.ai/models/gpt-6-sol), accessed 2026-09-29. The official OpenAI announcement URL was unavailable, so no official benchmark values are claimed from it.

### Normalized scores (1–100)

- **Tool use: 95/100.** Unchanged. OpenAI documents an unusually broad Responses API tool surface, including computer use, hosted shell, apply patch, MCP, and tool search; AA Index 48 is strong while exact individual tool benchmarks remain unpublished.
- **Reasoning: 94/100.** Unchanged. AA Index 48 is near the frontier and OpenAI positions Sol for complex agentic workflows; missing exact GPQA, HLE, and hallucination values cap the score.
- **Context window: 98/100.** Unchanged. 1,050,000 input tokens and 128K output per OpenAI docs; retrieval-at-length evidence not found.
- **Multimodal: 65/100.** Unchanged. Text and image input with text output; audio and video not supported.
- **Coding: 93/100.** Unchanged. OpenAI positions Sol for complex coding and the AA composite includes coding, but exact SWE/DeepSWE/LiveCodeBench/SciCode values were unavailable.
- **Cost efficiency: 78/100.** **Changed from 80.** Price is unchanged at $2/$10 with a 90% cache discount and $1.05 per Intelligence Index task, but the slower measured throughput (79.3 t/s vs. 113.3 t/s on 2026-09-24) raises the wall-clock cost of long agentic runs; long-context and fast-mode surcharges still apply.
- **Overall Score: 89.0/100.** (95 + 94 + 98 + 65 + 93) / 5 = 89.0. Overall is unchanged. The auditable changes this cycle are output speed 113.3 → 79.3 t/s, TTFT 136.12 → 179.57s, rank #18/210 → #20/216 at an unchanged index of 48, and Cost efficiency 80 → 78 (excluded from Overall). Best fit: complex coding, tool-heavy agents, and professional workflows where OpenAI's broad Responses tool ecosystem matters.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of OpenAI model documentation and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
