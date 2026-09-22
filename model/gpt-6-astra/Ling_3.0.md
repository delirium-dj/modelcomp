# GPT-6 Astra — findings by Ling 3.0

> Provided by: **Ling 3.0 (openai/gpt-6-astra)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's GPT-6 flagship combining frontier reasoning, computer use, and cybersecurity capability, with a Critical-level preparedness rating.
- **Provider / access:** OpenAI API, ChatGPT Plus/Pro/Business/Enterprise, Microsoft Azure, AWS Bedrock
- **Release / knowledge:** Released September 3-4, 2026; knowledge cutoff April 30, 2026
- **IDs:** openai/gpt-6-astra
- **Context window:** 1,050,000 tokens (1.05M), 128K max output
- **Modalities:** Text, image input; text output (image generation supported as a tool)
- **Pricing (as of 2026-09-23):** $10/1M input, $50/1M output; cached input $1/1M; cache write $12.50/1M; batch 50% discount; fast mode 2x; long-context (>272K) $20/$75
- **Architecture:** Transformer-based, reasoning effort levels (low, medium, high, xhigh, max); computer use, web search, file search, code interpreter, image generation, MCP, tool search.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 4.0: **57.9%** (OpenAI official benchmark table)
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI official, via kie.ai)
- OSWorld 2.0: **72.6%** (OpenAI official, via computingforgeeks)
- Agents' Last Exam: **59.3%** (OpenAI official, via kie.ai)
- DeepSWE v1.1: **74.1%** (OpenAI official benchmark table)
- ScreenSpot-Pro: **92.7%** (computingforgeeks)
- ExploitBench: **100%** (OpenAI official)
- SRE-Bench: **88.0%** (OpenAI official table)
- SEC-Bench Pro: **85.4%** (OpenAI official table)
- BrowseComp: **91.5** (LLM Stats)

Reasoning / knowledge:
- GPQA Diamond: **96.0%** (OpenAI official, #1 on leaderboard)
- ARC-AGI-3: **99.9%** (OpenAI official)
- FrontierMath Tier 4: **98%** (OpenAI official)
- HLE: **0.5** #4 (cloudprice.net)
- Intelligence Index: **61.2** #5 (cloudprice.net)
- Terminal-Bench 2.1: no verified public score found for GPT-6 Astra specifically

Coding:
- DeepSWE v1.1: **74.1%** (OpenAI official)
- Terminal-Bench 4.0: **57.9%**
- Coding Index: **77.1** #4 (cloudprice.net)
- SWE-bench Pro: no verified public score found (OpenAI did not publish SWE-bench Pro for Astra)
- SWE-bench Verified: no verified public score found

Long context:
- 1.05M-token context window; long-context rates apply above 272K input tokens; prompt caching supported

### Normalized scores (1-100)

- **Tool use: 93.0/100.** Terminal-Bench-Science 0.1 at 64.6% leads all models; OSWorld 2.0 at 72.6%; DeepSWE v1.1 at 74.1%; ExploitBench 100%; SRE-Bench 88.0%. Strongest tool-use and cybersecurity profile in the field.
- **Reasoning: 97.0/100.** GPQA Diamond 96.0% (#1); ARC-AGI-3 99.9%; FrontierMath Tier 4 98%. Elite reasoning scores across multiple benchmarks; Intelligence Index 61.2 (#5).
- **Context window: 98.0/100.** 1.05M-token context window; 128K max output; long-context support above 272K; prompt caching with $1/1M cached input.
- **Multimodal: 80.0/100.** Text and image input; text output; image generation, computer use, web search, file search, code interpreter, MCP, and tool search built in. No audio or video output.
- **Coding: 88.0/100.** DeepSWE v1.1 at 74.1%; Terminal-Bench 4.0 at 57.9%; Coding Index 77.1 #4; ScreenSpot-Pro 92.7%. OpenAI did not publish SWE-bench Pro or Verified scores for Astra, leaving a gap in the coding comparison.

- **Cost efficiency: 50/100.** Standard pricing varies by provider.
- - **Overall Score: 91/100.** Mean of five non-cost dimensions: (93.0+97.0+98.0+80.0+88.0)/5 = 91.

---

## Signature

- Provided by: **Ling 3.0 (openai/gpt-6-astra)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All placeholders replaced; no values copied from other model/ files.
2. Filename is model/gpt-6-astra/Ling_3.0.md.
3. Signature block filled in; relative links resolve from model/gpt-6-astra/.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks → save as Ling_3.0.md.excluded.
