# GPT-5.1-Codex - findings by GPT 5.6 Luna

- Source: OpenAI / GPT-5.1-Codex
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex
- **Short description:** OpenAI's GPT-5.1 variant optimized for agentic coding in Codex-like environments. It is distinct from the general GPT-5.1 model and from the separately identified Codex Mini, Codex-Max, and GPT-5.2-Codex variants.
- **Provider / access:** OpenAI API model ID `gpt-5.1-codex`, Responses API only. OpenRouter also exposes `openai/gpt-5.1-codex` through its compatibility API, but that wrapper does not change the native endpoint contract. [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex) · [OpenRouter model route](https://openrouter.ai/openai/gpt-5.1-codex)
- **Release / knowledge:** Released November 13, 2025; knowledge cutoff September 30, 2024. [BenchmarkList model record](https://benchmarklist.com/models/openai-gpt-5.1-codex) · [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex)
- **IDs:** `openai/gpt-5.1-codex` and native `gpt-5.1-codex`; no OpenCode Zen Free ID was verified.
- **Context window:** 400,000 total tokens; maximum output 128,000. [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex)
- **Modalities:** Text and image input; text output; reasoning tokens; function calling and web search in the Responses API; structured outputs and streaming. [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex)
- **Pricing (as of 2026-10-23):** $1.25 per 1M input tokens, $0.125 cached input, and $10 per 1M output tokens. Paid model; no verified free lane. [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex)
- **Architecture:** Proprietary OpenAI model; parameter count and architecture are undisclosed. [Artificial Analysis model record](https://artificialanalysis.ai/models/gpt-5-1-codex)

### Exact-model versus nearby variants

- **GPT-5.1:** The general model has the same 400K context, modalities, cutoff, and native token prices, but supports both Chat Completions and Responses and exposes a broader tool set. It is not the Codex-tuned model. [GPT-5.1 documentation](https://developers.openai.com/api/docs/models/gpt-5.1)
- **GPT-5.1-Codex-Max:** A distinct long-running Codex model. OpenAI's comparison reports **GPT-5.1-Codex (high)** at SWE-bench Verified 73.7%, SWE-Lancer IC SWE 66.3%, and Terminal-Bench 2.0 52.8%, versus **Codex-Max (xhigh)** at 77.9%, 79.9%, and 58.1%; the Max figures are not used here. [OpenAI Codex-Max release and evaluation appendix](https://openai.com/index/gpt-5-1-codex-max/) · [Codex-Max documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex-max)
- **GPT-5.1-Codex-Mini:** A separate smaller, less-capable, lower-priced model with its own ID, despite sharing the 400K context and image-input capability. [Codex-Mini documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex-mini)
- **GPT-5.2-Codex:** A later upgraded Codex model with a later August 31, 2025 cutoff, $1.75/$14 pricing, and support for hosted shell and skills. Its benchmark and release claims are not substituted for GPT-5.1-Codex results. [GPT-5.2-Codex documentation](https://developers.openai.com/api/docs/models/gpt-5.2-codex) · [GPT-5.2-Codex release](https://openai.com/index/introducing-gpt-5-2-codex/)

### Raw benchmarks found

> Results below are restricted to the exact GPT-5.1-Codex model or its explicitly labeled high-reasoning configuration. Harnesses, dates, and ranks are retained because sources do not all measure the same workload.

Agent / tool use:

- Terminal-Bench 2.0: **52.8%** (OpenAI, GPT-5.1-Codex high, Codex CLI/Harbor harness; exact-model result) ([OpenAI comparison](https://openai.com/index/gpt-5-1-codex-max/))
- Terminal-Bench Hard: **34.8%**, rank 49/326, 85th percentile (Artificial Analysis result reproduced by BenchmarkList; sampled 2026-06-10) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))
- Tau2-Bench Telecom: **83.0%**, rank 81/332, 76th percentile (BenchmarkList/Artificial Analysis; sampled 2026-06-10) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))
- GDPval-AA: **1193 Elo**, rank 74/356, 79th percentile (BenchmarkList/Artificial Analysis; sampled 2026-05-28) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))
- APEX-Agents: **34.9%** mean ReAct score, rank 18/44 (BenchmarkList; sampled 2026-05-29) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))
- Claw-Eval: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **86.0%**, rank 71/469, 85th percentile (BenchmarkList/Artificial Analysis; sampled 2026-10-18) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))
- HLE: **25.7%**, rank 105/485, 79th percentile (BenchmarkList; sampled 2026-10-18) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))
- LCR / MLCR: **AA-LCR 69.3%**, rank 137/414, 67th percentile (BenchmarkList/Artificial Analysis; sampled 2026-10-18) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))
- CritPt: **5.7%** as an Artificial Analysis Intelligence Index component (BenchmarkList/Artificial Analysis; sampled 2026-07-21) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))
- Artificial Analysis Intelligence Index / BenchLM overall: **34.73**, rank 85/433, 81st percentile in BenchmarkList's dated record (Artificial Analysis composite; sampled 2026-07-21) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))
- Artificial Analysis also currently shows **24, estimated**, and marks the model deprecated; this conflicts with the dated 34.73 record because the pages represent different index snapshots/statuses. The 34.73 result is retained as the dated exact-model result, while 24 is recorded as a caution rather than combined with it. ([Artificial Analysis current model page](https://artificialanalysis.ai/models/gpt-5-1-codex))
- Omniscience Accuracy / Hallucination Rate: **AA-Omniscience Index -6.02** (BenchmarkList/Artificial Analysis; sampled 2026-07-21); no separate exact accuracy/rate pair was verified. ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))
- AIME 2025: **95.7%**, rank 8/226, 97th percentile (BenchmarkList; sampled 2026-06-10) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))
- MMLU-Pro: **86.0%**, rank 27/312, 92nd percentile (BenchmarkList/Artificial Analysis; sampled 2026-06-10) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))

Coding:

- SWE-bench Verified: **73.7%** (OpenAI, GPT-5.1-Codex high, n=500; exact-model result) ([OpenAI comparison](https://openai.com/index/gpt-5-1-codex-max/))
- SWE-Lancer IC SWE: **66.3%** (OpenAI, GPT-5.1-Codex high; exact-model result) ([OpenAI comparison](https://openai.com/index/gpt-5-1-codex-max/))
- LiveCodeBench: **85.5%**, rank 23/123, 82nd percentile; high reasoning mode (Vals AI result reproduced by BenchmarkList; sampled 2026-07-28) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex)) ([Vals AI benchmark](https://www.vals.ai/benchmarks/lcb))
- SciCode: **40.2%** as an Artificial Analysis Intelligence Index component (BenchmarkList/Artificial Analysis; sampled 2026-07-21) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))
- Vibe Code Bench v1.1: **13.1%**, rank 57/75, 24th percentile; high reasoning mode (Vals AI result reproduced by BenchmarkList; sampled 2026-07-28) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex)) ([Vals AI benchmark](https://www.vals.ai/benchmarks/vibe-code))
- APEX-SWE: **37.7% Pass@1**, rank 10/14 (BenchmarkList; sampled 2026-06-30) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))

Long context:

- 400K documented context window; AA-LCR **69.3%** at the tracker-reported workload. No verified MRCR/RULER result at 400K was found. ([OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex)) ([BenchmarkList exact-model record](https://benchmarklist.com/models/openai-gpt-5.1-codex))

### Normalized scores (1-100)

- **Tool use: 70/100.** Terminal-Bench 2.0 is 52.8% and Terminal-Bench Hard is 34.8%, while Tau2 Telecom is 83.0% and GDPval-AA is 1193; this is above the middle band for practical tools but lacks a verified Claw-Eval or MCP-Atlas result.
- **Reasoning: 79/100.** GPQA Diamond 86.0%, MMLU-Pro 86.0%, AIME 2025 95.7%, HLE 25.7%, AA-LCR 69.3%, and the dated AA Index 34.73 indicate strong general reasoning with a mixed hard-knowledge and long-context profile; HLE and the conflicting current estimated AA value cap the score.
- **Context window: 82/100.** The verified 400K total context is near the top of the methodology's 200K-500K tier, but there is no exact-model retrieval result showing near-perfect performance at the maximum window and output is capped at 128K.
- **Multimodal: 65/100.** Official documentation verifies image input and text output, which earns the image-input band; no exact-model audio, video, or non-text-output capability was verified.
- **Coding: 77/100.** Exact-model SWE-bench Verified is 73.7%, SWE-Lancer IC SWE 66.3%, Terminal-Bench 2.0 52.8%, and LiveCodeBench 85.5%; SciCode 40.2%, APEX-SWE 37.7%, and Vibe Code Bench 13.1% show meaningful weaknesses in broader or frontend-oriented coding tasks.
- **Cost efficiency: 76/100.** Native pricing is reasonable at $1.25/M input but output is expensive at $10/M, with no verified free tier; the output price and paid-only access cap efficiency.
- **Overall Score: 75/100.** Half-up mean of the five quality dimensions: (70 + 79 + 82 + 65 + 77) / 5 = 74.6, rounded to 75. Best fit is repo-scale agentic coding where strong exact-model coding results matter more than broad multimodal or long-horizon retrieval coverage.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** - 2026-10-23
- Method: Seven independent fresh web-search queries plus direct fetches of official OpenAI documentation/release material and independent benchmark records; exact GPT-5.1-Codex results were separated from GPT-5.1, GPT-5.1-Codex-Max, GPT-5.1-Codex-Mini, and GPT-5.2-Codex. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
