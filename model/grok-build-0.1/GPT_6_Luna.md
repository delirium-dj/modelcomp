# Grok Build 0.1 — findings by GPT-6 Luna

- Source: xAI/Grok Build 0.1 (`grok-build-0.1`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's fast coding model for agentic software engineering and iterative code edits. xAI documents `grok-code-fast-1` as an alias of this model; figures measured under that retired vendor alias are labeled as such.
- **Provider / access:** xAI API model ID `grok-build-0.1`; function calling and structured outputs supported.
- **Release / knowledge:** Current Build ID listed 2026-04-16 by model catalog; original Grok Code Fast launch was 2025-08-28. Knowledge cutoff not stated.
- **IDs:** `grok-build-0.1`; xAI aliases include `grok-code-fast-1`, `grok-code-fast`, and `grok-code-fast-1-0825`.
- **Context window:** 256,000 tokens; xAI charges higher rates when prompts reach 200K.
- **Modalities:** Text and image input; text output; reasoning, tool calling, and structured output supported.
- **Pricing (as of 2026-10-28):** xAI API below 200K prompt tokens: $1 input, $0.20 cached input, $2 output per 1M; at/above 200K: $2/$0.40/$4.
- **Architecture:** Proprietary; parameter count and architecture undisclosed.

### Raw benchmarks found

The public benchmark score below was measured under the alias Grok Code Fast 1; it is retained as alias-labeled lineage evidence, not represented as a new independent Grok Build measurement.

Agent / tool use:

- xAI describes the model as optimized for tool-using coding agents; no exact tool-use benchmark score verified for `grok-build-0.1`.

Reasoning / knowledge:

- No verified GPQA, HLE, or Artificial Analysis Intelligence Index score found for the exact model ID.

Coding:

- SWE-bench Verified: **70.8%**, measured by xAI under `grok-code-fast-1` with xAI's internal harness (alias lineage result).
- No verified exact-ID LiveCodeBench or Terminal-Bench score found.

Long context:

- 256K capacity documented; no MRCR/RULER/GraphWalks retrieval result found.

### Normalized scores (1–100)

- **Tool use: 75/100.** Function calling and coding-agent use are documented, but no exact-ID tool-use score was verified.
- **Reasoning: 70/100.** Reasoning is supported, but no general reasoning benchmark was found.
- **Context window: 70/100.** 256K is useful capacity, but retrieval quality at that size is unmeasured.
- **Multimodal: 65/100.** Image input is listed; no audio/video or non-text output support was verified.
- **Coding: 85/100.** SWE-bench Verified 70.8% under the documented alias is strong evidence, but no same-ID replication and no independent harness confirmation caps the score.
- **Cost efficiency: 85/100.** $1/$2 standard short-context rates are moderate; higher long-context rates apply at 200K prompt tokens.
- **Overall Score: 73/100.** Half-up mean of the five quality dimensions (75+70+70+65+85)/5 = 73; strongest fit is fast, iterative coding-agent work.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public research from xAI model documentation and launch announcement. The only numeric benchmark is explicitly attributed to the alias actually tested; normalized scores are independent and conservative.
- Sources: [xAI Grok Build 0.1 model documentation](https://docs.x.ai/developers/models/grok-build-0.1); [xAI Grok Code Fast 1 launch and benchmark report](https://x.ai/news/grok-code-fast-1).
