# GPT-6 Astra — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (max effort)
- **Short description:** OpenAI's highest-capability model for difficult end-to-end reasoning, coding, computer use, research, and document creation.
- **Provider / access:** OpenAI API (`gpt-6-astra`); Responses API, Chat Completions, and other listed endpoints. The model supports reasoning effort levels low, medium, high, xhigh, and max.
- **Release / knowledge:** Artificial Analysis lists September 2026; no exact day was shown in the reviewed pages. OpenAI documents an April 30, 2026 knowledge cutoff.
- **IDs:** `gpt-6-astra`; the evaluated configuration is max reasoning effort.
- **Context window:** 1,050,000 tokens; 128,000 maximum output tokens (OpenAI API documentation, verified 2026-09-24).
- **Modalities:** Text and image input; text output. Audio and video are not supported. Function calling and structured outputs are supported.
- **Pricing (as of 2026-09-24):** $10.00 per 1M input tokens, $50.00 per 1M output tokens; cached input $1.00 and cache writes $12.50. Prompts over 272K input tokens receive higher long-context rates; batch/Flex are 50% of standard and fast mode is 2x (OpenAI API documentation).
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **53/100**, rank **#6/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **52.5 tokens/s**; Intelligence Index task cost: **$3.26** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone value on the reviewed pages
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** as a standalone value on the reviewed pages
- LCR / MLCR: **no verified public score found** as a standalone value on the reviewed pages
- CritPt: **no verified public score found** as a standalone value on the reviewed pages
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found** as a standalone value on the reviewed pages
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for this exact model was found. OpenAI verifies a 1,050,000-token context window and documents higher pricing above 272K input tokens.

Sources consulted: [OpenAI GPT-6 Astra model documentation](https://platform.openai.com/docs/models/gpt-6-astra) and [Artificial Analysis GPT-6 Astra](https://artificialanalysis.ai/models/gpt-6-astra), accessed 2026-09-24.

### Normalized scores (1–100)

- **Tool use: 96/100.** OpenAI documents broad tool support including web search, file search, code interpreter, hosted shell, apply patch, computer use, MCP, and tool search; exact Terminal-Bench, Tau, GDPval, and tool-call scores were not available.
- **Reasoning: 96/100.** The AA Intelligence Index score of 53 is near the top of the reviewed leaderboard and the model is explicitly positioned for the hardest reasoning work; exact GPQA, HLE, and hallucination values were not published in the reviewed sources.
- **Context window: 98/100.** OpenAI verifies 1,050,000 input tokens and 128,000 output tokens, exceeding the 1M tier; retrieval-at-length evidence was not found.
- **Multimodal: 65/100.** Text and image input are supported, but audio and video are not.
- **Coding: 92/100.** OpenAI explicitly positions Astra for difficult coding and computer-use work, but exact SWE-bench, DeepSWE, LiveCodeBench, and SciCode values were not found in the reviewed public pages.
- **Cost efficiency: 30/100.** Standard pricing is $10/$50 per 1M input/output tokens, with long-context surcharges and tool fees; this is an expensive paid model.
- **Overall Score: 89.4/100.** (96 + 96 + 98 + 65 + 92) / 5 = 89.4. Best fit: high-stakes, tool-heavy reasoning and coding where frontier capability matters more than latency or price.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of OpenAI model documentation and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
