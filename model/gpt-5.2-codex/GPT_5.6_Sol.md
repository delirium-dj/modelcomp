# GPT-5.2-Codex — findings by GPT-5.6 Sol

- Source: OpenAI/GPT-5.2-Codex
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2-Codex
- **Short description:** OpenAI's proprietary GPT-5.2 variant optimized for long-horizon agentic software engineering, repository-scale changes, terminal work, Windows development, and defensive cybersecurity. It is now retired from the first-party API.
- **Provider / access:** OpenAI Responses API historically used `gpt-5.2-codex`, but the official model page marks it shut down. OpenRouter still documents `openai/gpt-5.2-codex` through a Chat Completions-compatible gateway; current upstream availability should be verified before deployment.
- **Release / knowledge:** Catalogs date the release to 2025-12-11; OpenAI's launch announcement was published 2025-12-18. Knowledge cutoff August 31, 2025.
- **IDs:** OpenAI `gpt-5.2-codex`; OpenRouter `openai/gpt-5.2-codex`. No active OpenCode Zen Free ID found.
- **Context window:** 400,000 total tokens, with 272,000 maximum input and 128,000 maximum output according to OpenAI.
- **Modalities:** Text and image input; text output; reasoning effort low, medium, high, and xhigh; streaming, structured outputs, function calling, web search, hosted shell, skills, and prompt caching.
- **Pricing (as of 2026-10-24):** Historical list price $1.75 input / $0.175 cached input / $14 output per 1M tokens. The first-party endpoint is shut down, so these prices do not establish current purchasability.
- **Architecture:** Proprietary; parameter count and weights are undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2-bench: **92.1%** (BenchLM aggregation attributed to Artificial Analysis).
- Gert Labs: **51.79%**; JobBench: **26.0%** (BenchLM aggregation with source links).
- OpenAI reports state-of-the-art SWE-Bench Pro and Terminal-Bench 2.0 performance but exposes no numeric values in the text version of the launch report.
- Claw-Eval / ClawProBench / GDPval-AA: no separately verifiable exact-model score found.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **29 estimated**, rank **#100/215**; the page explicitly says independent evaluation is forthcoming.
- GPQA Diamond: **89.9%**; HLE: **35.7%**; AA-LCR: **82.3%**; CritPt: **8.7%** (BenchLM aggregation attributed to Artificial Analysis).
- AA-Omniscience Accuracy: **41.1%**, Hallucination Rate: **73.4%**, resulting Index **-2.2%** (BenchLM aggregation attributed to Artificial Analysis).

Coding:

- SWE-bench: **72.40% ±2.00**, rank **55/88** (Vals AI, high reasoning effort).
- LiveCodeBench: **87.99% ±0.94**, rank **9/143** (Vals AI).
- Vibe Code Bench v1.1: **37.91% ±4.58**, rank **71/118** (Vals AI).
- OpenAI qualitatively reports state-of-the-art SWE-Bench Pro and Terminal-Bench 2.0 results and improvements in refactors, migrations, native Windows work, and cybersecurity, but the fetched report did not expose chart values.

Multimodal:

- AA-MMMU-Pro: **76.3%** (BenchLM aggregation attributed to Artificial Analysis).
- Native image input is confirmed by OpenAI, Artificial Analysis, and Vals; no audio/video input or non-text output is supported.

Long context:

- Native context: **400,000 tokens**, with 272,000 maximum input and 128,000 maximum output (OpenAI).
- AA-LCR: **82.3%** through BenchLM's Artificial Analysis attribution; OpenAI also describes native compaction for longer-running Codex sessions.

### Cross-source comparison

- The official [OpenAI model page](https://platform.openai.com/docs/models/gpt-5.2-codex) establishes specifications, tools, historical pricing, and the decisive current status: the model is shut down.
- OpenAI's [launch report](https://openai.com/index/introducing-gpt-5-2-codex/) establishes the coding, Windows, vision, long-horizon, and cybersecurity positioning and claims state-of-the-art SWE-Bench Pro and Terminal-Bench 2.0 performance, but does not expose numeric chart values in fetched text.
- [Vals AI](https://www.vals.ai/models/openai_gpt-5.2-codex) independently reports 72.40% SWE-bench, 87.99% LiveCodeBench, and 37.91% Vibe Code Bench at high reasoning effort, with 400K/128K limits and the same token price.
- [Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-2-codex) labels its Intelligence Index 29 as estimated rather than independently measured, but confirms the 400K window, image input, pricing, and deprecated status.
- [BenchLM](https://benchlm.ai/models/gpt-5-2-codex) aggregates 16 benchmark records and reports 55.27/100 overall. Its detailed AA-attributed component rows are useful secondary evidence, but the live AA page's estimate warning means they are not treated as equivalent to a current full independent run.
- [OpenRouter](https://openrouter.ai/openai/gpt-5.2-codex) documents a gateway Chat Completions route and tool controls. This does not override OpenAI's first-party shutdown notice and may reflect gateway compatibility metadata rather than guaranteed upstream capacity.

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau2-bench 92.1%, Gert Labs 51.79%, native shell/tool support, and official terminal leadership claims show strong agents; secondary attribution and absent numeric Terminal-Bench results cap the score.
- **Reasoning: 84/100.** GPQA 89.9%, HLE 35.7%, and LCR 82.3% are strong, but the estimated AA Index 29, CritPt 8.7%, and 73.4% hallucination rate materially limit reliability.
- **Context window: 82/100.** The 400K window sits at the upper end of the methodology's 200K–500K tier; LCR 82.3% is useful but below the measured-retrieval threshold for a higher tier.
- **Multimodal: 70/100.** Image input and MMMU-Pro 76.3% reach the top of the image-only band; there is no native audio/video input or non-text output.
- **Coding: 91/100.** SWE-bench 72.40% and LiveCodeBench 87.99%, plus official SWE-Bench Pro and Terminal-Bench leadership claims, support frontier coding; weak Vibe Code results and unavailable chart numbers prevent a higher score.
- **Cost efficiency: 70/100.** Historical $1.75/$14 pricing is better than the rubric's $3/$15 reference on input and comparable on output, but the retired endpoint sharply reduces practical value.
- **Overall Score: 83/100.** Half-up mean of the five non-cost dimensions; a strong historical agentic-coding model whose retirement now makes newer Codex releases the practical choice.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-24
- Method: independent public internet research with three exact-name searches; compared OpenAI documentation and launch claims against Vals measurements, Artificial Analysis's explicitly estimated index, BenchLM aggregation, and OpenRouter route metadata. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
