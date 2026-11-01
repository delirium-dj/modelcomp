# GPT-5 — findings by GPT-6 Luna

- Source: OpenAI GPT-5 API model (`gpt-5`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Provider:** OpenAI
- **API model ID:** `gpt-5`; default snapshot `gpt-5-2025-08-07`
- **OpenCode Zen model ID:** `gpt-5` (`opencode/gpt-5` in OpenCode config). OpenCode documents a Zen endpoint and a separate Console price; no benchmark here is attributed to a Zen-hosted run.
- **Release:** August 7, 2025
- **Status:** OpenAI marks the model deprecated. Its deprecation notice schedules removal of the API snapshot on December 11, 2026, with GPT-5.6 Sol recommended as replacement. This is the API snapshot, not a claim about every ChatGPT GPT-5-branded experience.
- **Knowledge cutoff:** September 30, 2024
- **Context:** 400,000 total tokens: up to 272,000 input tokens and 128,000 reasoning/output tokens.
- **Modalities:** Text and image input; text output. OpenAI's current API model page does not list audio or video input for this endpoint.
- **Capabilities:** Reasoning effort (`minimal`, `low`, `medium`, `high`), adjustable verbosity, function calling, structured outputs, web search, file search, image generation, code interpreter, MCP, prompt caching, and Batch API. Custom tools and parallel tool calling are supported.
- **Architecture / access:** Proprietary hosted model. The API model is the reasoning model; OpenAI explicitly distinguishes it from the non-reasoning ChatGPT model exposed as `gpt-5-chat-latest`. GPT-5 mini, nano, and Pro are also separate SKUs and are not included in this report.
- **OpenAI API pricing (checked 2026-11-01):** $1.25 per million input tokens, $0.125 cached input, and $10 per million output tokens. Batch pricing is available. OpenCode Zen separately lists $1.07/$8.50 and $0.107 cached input per million tokens. These are channel-specific prices, not a change to OpenAI's direct API list price.

## Raw benchmarks found

OpenAI's launch evaluation table reports high reasoning effort except where the benchmark specifies another setup. OpenAI's developer article explains that its SWE-bench Verified score omitted 23/500 tasks that did not reliably pass on its infrastructure. Vals AI rows are separate third-party runs on the exact August 7 snapshot.

| Area | Benchmark / setting | Result | Source / notes |
| --- | --- | ---: | --- |
| Coding | SWE-bench Verified | 74.9% | OpenAI launch evaluation; 23 of 500 unreliable infrastructure tasks omitted; GPT-5 high reasoning |
| Coding | Aider polyglot, diff | 88.0% | OpenAI launch evaluation; high reasoning |
| Agentic tool use | τ²-bench Telecom | 96.7% | OpenAI launch evaluation; high reasoning; its prose rounds this to 97% |
| Instruction following | Scale MultiChallenge | 69.6% | OpenAI launch evaluation; graded by o3-mini, rather than the benchmark's default GPT-4o grader |
| Reasoning / mathematics | AIME 2025, no tools | 94.6% | OpenAI launch evaluation; high reasoning |
| Reasoning / science | GPQA Diamond, no tools | 85.7% | OpenAI launch evaluation; high reasoning |
| Reasoning / knowledge | Humanity's Last Exam, no tools | 24.8% | OpenAI launch evaluation; OpenAI notes a discrepancy with an earlier post because that used a former HLE version |
| Multimodal | MMMU-Pro, average of standard and vision sets | 78.4% | OpenAI launch evaluation; high reasoning |
| Multimodal | VideoMMMU, maximum 256 frames | 84.6% | OpenAI launch evaluation; benchmark result, not evidence that the current API endpoint accepts native video input |
| Long context | BrowseComp Long Context, 128K–256K input | 89.0% | OpenAI launch evaluation; correct-answer rate |
| Long context | OpenAI-MRCR, 2 needles, 128K / 256K | 95.2% / 86.8% | OpenAI launch evaluation; mean match ratio; the 256K point is separate from full 400K capacity |
| Reasoning | GPQA Diamond | 85.61% ± 1.76 | Vals AI independent evaluation; high reasoning; default OpenAI provider |
| Coding | LiveCodeBench | 85.91% ± 0.97 | Vals AI independent evaluation |
| Coding / agents | SWE-bench | 69.00% ± 2.07 | Vals AI current model page; its listed SWE-bench run, distinct from OpenAI's SWE-bench Verified setup |
| Coding / agents | Terminal-Bench 2.0 | 37.08% ± 5.15 | Vals AI current page; version 2.0, and not comparable to later 2.1 or 4.0 scores |
| Multimodal | MMMU-Pro | 81.50% ± 0.93 | Vals AI independent evaluation; its run and test settings are separate from OpenAI's reported aggregate |
| Academic | MMLU Pro | 86.54% ± 0.34 | Vals AI independent evaluation |
| Professional knowledge | LegalBench | 86.02% ± 0.38 | Vals AI independent evaluation; #18 of 151 on the current visible leaderboard |
| Composite | Vals Index | 68.66% | Vals AI current model page; composite accuracy summary, not an academic benchmark percentage |
| Reasoning / knowledge | Artificial Analysis Intelligence Index | 23 | Artificial Analysis GPT-5 high-reasoning snapshot on its v4.3.2 comparison page; the index includes estimates where independent evaluation is pending |
| Long context / knowledge | Artificial Analysis HLE / GDPval-AA v2.1 | 28% / 918 Elo | Artificial Analysis comparison page, GPT-5 high-reasoning snapshot; distinct from OpenAI's launch HLE version/setting |

## Normalized scores

- **Tool use: 90/100.** OpenAI reports 96.7% on τ²-bench Telecom and strong instruction-following results; the third-party Terminal-Bench 2.0 result is much less exceptional and the model is now deprecated.
- **Reasoning: 88/100.** Strong AIME and competitive GPQA Diamond, balanced against 24.8% on OpenAI's launch HLE version and a moderate current Artificial Analysis index placement.
- **Context window: 90/100.** A 400K total window with useful BrowseComp Long Context and MRCR scores, though evidence at 256K falls below the 128K result and does not establish full-window retrieval quality.
- **Multimodal: 87/100.** Strong image reasoning on MMMU-Pro and VideoMMMU benchmark tasks, but the current API interface is text/image input and text output; video-benchmark coverage should not be read as native video API support.
- **Coding: 90/100.** The OpenAI SWE-bench Verified and Aider results are strong; Vals' independent SWE-bench score is lower, and the model has since been superseded by newer coding systems.
- **Cost efficiency: 86/100.** OpenAI's $1.25/$10 rate and cached-input discount are relatively accessible for a frontier model, but output tokens remain expensive and lower-cost newer variants are separate products.
- **Overall Score: 89/100.** Half-up mean of the five quality dimensions, excluding cost: (90 + 88 + 90 + 87 + 90) / 5 = 89.

## Agreement notes

- This report evaluates the API reasoning model `gpt-5-2025-08-07`, not the ChatGPT non-reasoning route `gpt-5-chat-latest`, GPT-5 mini/nano/Pro, or later GPT-5.x models.
- OpenAI's 74.9% SWE-bench Verified figure and Vals AI's 69.00% SWE-bench result are preserved with their publisher's names and setups. OpenAI documents its 23-task infrastructure omission; the numbers should not be collapsed into one score.
- OpenAI's current API documentation provides exact context, input/output limits, modalities, features, and pricing. Artificial Analysis' HLE and aggregate results use their own suite and snapshot and are not substitutes for OpenAI's launch table.
- OpenAI scheduled the API snapshot's shutdown for December 11, 2026. The report records the available documentation and benchmarks as of November 1, 2026; the report does not imply the API remains available after that date.

## Signature

Provided by: **GPT 6 Luna (openai/gpt-6-luna)** — 2026-11-01 UTC

Method: Independent public-source research using OpenAI's launch and model documentation, Vals AI, Artificial Analysis, and OpenCode Zen. The API snapshot, ChatGPT route, later GPT-5 variants, benchmark versions, and evaluation publishers are kept distinct. Normalized scores are evidence-weighted judgments, not raw benchmark percentages.

- Reference URLs: [OpenAI GPT-5 for developers: launch results, limits, tools and pricing](https://openai.com/index/introducing-gpt-5-for-developers/); [OpenAI GPT-5 API model documentation](https://developers.openai.com/api/docs/models/gpt-5); [OpenAI API deprecations and December 11 shutdown notice](https://developers.openai.com/api/docs/deprecations); [OpenAI GPT-5 system card](https://openai.com/index/gpt-5-system-card/); [Vals AI GPT-5 snapshot evaluation](https://www.vals.ai/models/openai_gpt-5-2025-08-07); [Artificial Analysis GPT-5 high-reasoning comparison](https://artificialanalysis.ai/models/comparisons/gpt-5-medium-vs-gpt-5); [OpenCode Zen endpoints and pricing](https://opencode.ai/docs/zen); [OpenCode Zen GPT-5 model metadata](https://models.opencode.ai/providers/opencode).
