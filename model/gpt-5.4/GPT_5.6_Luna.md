# GPT-5.4 — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.4
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI reasoning model for professional work, coding, multimodal analysis, and tool-using agents.
- **Provider / access:** OpenAI API and ChatGPT; API model ID `gpt-5.4`.
- **Release / knowledge:** 2026 release; the current public documentation used here does not establish one universal cutoff across all product surfaces.
- **IDs:** `gpt-5.4` / `openai/gpt-5.4`.
- **Context window:** 1,050,000 tokens; maximum input is approximately 922,000 and maximum output 128,000. Prompts above 272K receive long-context surcharges.
- **Modalities:** Text and image input, text output, reasoning, function calls, structured outputs, web/file search, code execution, computer use, and other Responses tools.
- **Pricing (as of 2026-11-02):** Approximately $2.50 input / $15 output per 1M tokens, with cached input around $0.25/M; Batch/Flex and long-context rates differ.
- **Architecture:** Proprietary; parameter count and internal architecture are undisclosed.

## Raw benchmarks found

- BenchLM current profile: **66.4/100, #25 of 1,004**, with 60 benchmark rows covered.
- Terminal-Bench 2.0: **75.1%**; BrowseComp: **82.7%**; CyberGym: **79.0%**; OSWorld-Verified: **75%**.
- Vibe Code Bench: **67.42%**; AA Coding Index: **71.0%**; LiveCodeBench and other coding rows remain harness-dependent.
- MMMU-Pro: **81.2%**; MMMU-Pro with Python: **82.1%**; ParseBench: **62.23%**.
- ARC-AGI-2: **74.0%**; ARC-AGI-3: **0.2%**; AA-LCR: **82.0%**; CritPt: **23.4%**.
- GPQA: **92.8%**; HLE: **52.1%**; HLE without tools: **39.8%**; AA-IFBench: **73.9%**; FrontierMath v2 tiers 1–3: **78.596%**.

## Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench, BrowseComp, CyberGym, and OSWorld support a strong tool profile, though agentic harnesses disagree on task completion.
- **Reasoning: 89/100.** GPQA 92.8%, HLE 52.1%, ARC-AGI-2 74%, and FrontierMath 78.596% support high reasoning capability with a meaningful no-tools gap.
- **Context window: 97/100.** The 1.05M window and 922K maximum input are unusually large; no full-window retrieval curve was found.
- **Multimodal: 88/100.** Image input and MMMU-Pro 81.2%/82.1% with Python provide direct evidence; output remains text.
- **Coding: 88/100.** Terminal-Bench 75.1%, Vibe Code Bench 67.42%, and AA Coding Index 71% indicate strong engineering utility with provider variance.
- **Cost efficiency: 78/100.** $2.50/$15 is premium relative to Terra and Flash tiers, while long-context surcharges reduce value.
- **Overall Score: 89.4/100.** Mean of the five quality dimensions `(85 + 89 + 97 + 88 + 88) / 5 = 89.4`; best fit is complex professional, coding, and agent workflows requiring long context.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current OpenAI model/pricing documentation, OpenAI evaluation material, BenchLM's October 29 profile, ARC Prize, Vals, and Artificial Analysis; vendor and independent harnesses were kept distinct, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5.4 model documentation](https://developers.openai.com/api/docs/models/gpt-5.4)
  - [OpenAI GPT-5.4 announcement](https://openai.com/index/introducing-gpt-5-4/)
  - [OpenAI API pricing](https://developers.openai.com/api/docs/pricing)
  - [BenchLM GPT-5.4 profile](https://benchlm.ai/models/gpt-5-4)
