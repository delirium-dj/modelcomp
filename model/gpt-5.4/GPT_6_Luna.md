# GPT-5.4 — findings by GPT-6 Luna

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's proprietary reasoning model for professional knowledge work, coding, tool use, and native computer interaction. GPT-5.4 Pro, mini, and nano are separate models and are not substituted here.
- **Provider / access:** OpenAI API (`gpt-5.4`) on the Responses and Chat Completions endpoints; also available in ChatGPT and Codex. Supports reasoning effort `none`, `low`, `medium`, `high`, and `xhigh`, plus function calling, web search, computer use, file search, and hosted tools. [OpenAI model documentation](https://platform.openai.com/docs/models/gpt-5.4) · [launch announcement](https://openai.com/index/introducing-gpt-5-4/)
- **Release / knowledge:** Released March 5, 2026. The API documentation lists an August 31, 2025 knowledge cutoff. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-4/) · [OpenAI model documentation](https://platform.openai.com/docs/models/gpt-5.4)
- **IDs:** API alias `gpt-5.4`; default dated snapshot `gpt-5.4-2026-03-05`. [OpenAI model documentation](https://platform.openai.com/docs/models/gpt-5.4)
- **Context window:** 1,050,000 tokens; maximum output 128,000 tokens. OpenAI's launch post described the 1M context as experimental in Codex; API documentation lists the full 1.05M context. [OpenAI model documentation](https://platform.openai.com/docs/models/gpt-5.4) · [launch announcement](https://openai.com/index/introducing-gpt-5-4/)
- **Modalities:** Text and image input; text output. Supports file uploads and computer-use tool calls. Video and audio input/output are not listed for this API model. [OpenAI model documentation](https://platform.openai.com/docs/models/gpt-5.4) · [OpenRouter model card](https://openrouter.ai/openai/gpt-5.4/benchmarks)
- **Pricing (as of 2026-10-28):** Standard API: $2.50/MTok input, $0.25/MTok cached input, and $15/MTok output. Prompts exceeding 272K input tokens are billed at 2× input and 1.5× output for the full session (equivalent to $5/$22.50 per MTok for uncached input/output); Batch and Flex are half price, and Priority is 2× standard. [OpenAI model documentation](https://platform.openai.com/docs/models/gpt-5.4) · [OpenAI pricing](https://developers.openai.com/api/docs/pricing)
- **Architecture:** Proprietary; OpenAI has not disclosed model weights, parameter count, or detailed architecture. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-4/)

### Raw benchmarks found

> OpenAI says evaluations used `xhigh` reasoning effort except where specified. Results below retain benchmark editions, reasoning settings, and evaluation sources; GPT-5.4 Pro results are excluded.

Agent / tool use:

- Terminal-Bench 2.0: **75.1%**; OSWorld-Verified: **75.0%**; WebArena-Verified: **67.3%** using DOM and screenshot interaction; Online-Mind2Web: **92.8%** using screenshot observations. OpenAI reports human OSWorld performance at 72.4%. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-4/)
- BrowseComp: **82.7%**; Toolathlon: **54.6%**; MCP Atlas: **67.2%**; τ²-bench Telecom: **98.9%** at the default evaluation setting. At reasoning effort `none`, τ²-bench Telecom is **64.3%**. OpenAI notes that BrowseComp used its ChatGPT search tool and a later test date/blocklist than the GPT-5.2 comparison. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-4/)
- GDPval: **83.0% wins or ties** against professionals across 44 occupations; this is an occupational work-product comparison, not an Elo score or general task-accuracy percentage. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-4/)
- Claw-Eval: **60.3%** in the October 28 BenchLM compilation, sourced to the public Claw-Eval leaderboard. This is a third-party leaderboard result, not an OpenAI launch-post result. [BenchLM](https://benchlm.ai/models/gpt-5-4) · [Claw-Eval leaderboard](https://claw-eval.github.io/)
- ClawProBench: **no verified exact-model result found** in the sources checked.

Reasoning / knowledge:

- GPQA Diamond: **92.8%**; Humanity's Last Exam: **39.8% without tools / 52.1% with tools**; Frontier Science Research: **33.0%**. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-4/)
- ARC-AGI-2 (Verified): **73.3%** in OpenAI's results; the ARC Prize leaderboard/BenchLM compilation lists **74.0%**, a small source/run discrepancy that is kept visible. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-4/) · [ARC Prize leaderboard](https://arcprize.org/leaderboard) · [BenchLM](https://benchlm.ai/models/gpt-5-4)
- FrontierMath: **47.6%** on Tiers 1–3 and **27.1%** on Tier 4. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-4/)
- BenchLM's composite score is **66.41/100**, rank **#24/1,002**, based on 60 of 717 tracked benchmarks. This is a partially covered third-party aggregate, not the project's normalized score. [BenchLM](https://benchlm.ai/models/gpt-5-4)

Coding:

- SWE-Bench Pro (Public): **57.7%**; Terminal-Bench 2.0: **75.1%**. OpenAI reports GPT-5.4 at lower latency than GPT-5.3-Codex across tested reasoning efforts, while matching or exceeding its SWE-Bench Pro result. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-4/)
- Vibe Code Bench v1.1: **48.47% ± 5.07** on Vals AI, using the OpenAI provider with `xhigh` reasoning. [Vals AI](https://www.vals.ai/models/openai_gpt-5.4)
- SWE-bench Verified: **no exact-model public score verified** in the sources checked; the official 57.7% result is for SWE-Bench Pro and should not be relabeled Verified.

Multimodal:

- MMMU-Pro: **81.2% without tools / 82.1% with tools**. OmniDocBench normalized edit distance: **0.109** with reasoning effort `none` (lower is better). [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-4/)
- The API accepts text and images, and can use the computer tool to act on graphical interfaces; it returns text and tool calls rather than audio, video, or image output. [OpenAI model documentation](https://platform.openai.com/docs/models/gpt-5.4)

Long context:

- The maximum API context is **1.05M tokens**. On OpenAI MRCR v2 (8-needle), scores were **97.3%** at 4K–8K, **91.4%** at 8K–16K, **97.2%** at 16K–32K, **90.5%** at 32K–64K, **86.0%** at 64K–128K, **79.3%** at 128K–256K, **57.5%** at 256K–512K, and **36.6%** at 512K–1M. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-4/)
- Graphwalks performance also declines at long lengths: BFS **93.0%** and parent lookup **89.8%** at 0–128K, versus **21.4%** and **32.4%** at 256K–1M. [OpenAI launch announcement](https://openai.com/index/introducing-gpt-5-4/)

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong computer-use, search, and customer-service results (OSWorld 75%, BrowseComp 82.7%, τ²-bench Telecom 98.9%); Toolathlon at 54.6% and the external Claw-Eval result at 60.3% temper the score.
- **Reasoning: 90/100.** GPQA Diamond is 92.8%, HLE reaches 52.1% with tools, and ARC-AGI-2 is 73.3–74.0%; Frontier Science Research at 33% shows meaningful headroom.
- **Context window: 95/100.** The documented 1.05M-token limit meets the project's ≥1M tier, but MRCR falls to 36.6% at 512K–1M and Graphwalks retrieval is weak beyond 256K.
- **Multimodal: 68/100.** Strong image/document results and computer interaction are supported, but the model has image input and text output only, without audio/video input or non-text output.
- **Coding: 89/100.** SWE-Bench Pro is 57.7% and Terminal-Bench 2.0 is 75.1%; the independent Vibe Code Bench v1.1 result is 48.47% ± 5.07.
- **Cost efficiency: 62/100.** Standard $2.50/$15 pricing is slightly below the methodology's ~$3/$15 reference score of 60; cached input and Batch/Flex discounts help, while prompts above 272K cost more.
- **Overall Score: 86/100.** Half-up mean of the five quality dimensions: (89 + 90 + 95 + 68 + 89) / 5 = 86.2. Strong for computer use, professional work, and coding; validate long-context retrieval and your own tool harness, since results degrade substantially at 512K–1M.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent searches (Yahoo, DuckDuckGo, and Bing), followed by direct checks of OpenAI's model documentation and launch announcement, Vals AI, Artificial Analysis, BenchLM, OpenRouter, and the Claw-Eval/ARC Prize leaderboards. Exact GPT-5.4 results are separated from Pro/mini/nano; benchmark editions and reasoning settings are labeled; the ARC-AGI-2 score discrepancy and long-context degradation are disclosed. Scores are normalized 1–100 interpretations under `model-comparison.md`, not official OpenAI scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
