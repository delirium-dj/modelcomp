# Claude Sonnet 3.5 — findings by GPT-6 Luna

- Source: Anthropic / Claude 3.5 Sonnet (October 2024 snapshot)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Sonnet (upgraded October 2024 snapshot; sometimes called Sonnet 3.5 New or v2). This report is specifically about the October snapshot, not the June 2024 snapshot.
- **Short description:** Anthropic's proprietary multimodal model with text and image input, text output, and computer-use/tool capabilities. Its October update notably improved agentic coding and tool-use results over the June snapshot. [1][2]
- **Provider / access:** Anthropic API; was also offered through Amazon Bedrock and Google Cloud Vertex AI. Anthropic-operated API access retired on 2025-10-28; partner-operated platforms can set different lifecycle dates. [1][4]
- **Release / knowledge:** October snapshot announced 2024-10-22. Its documented knowledge cutoff is April 2024. [1][2]
- **IDs:** Anthropic API snapshot `claude-3-5-sonnet-20241022`; the tracked catalog entry is `anthropic/claude-3-5-sonnet-20241022`. Do not conflate it with the June snapshot `claude-3-5-sonnet-20240620`. [2][5]
- **Context window:** 200,000 tokens; maximum output 8,192 tokens. [5]
- **Modalities:** Text and image input; text output. Computer-use interaction was a public-beta API capability, not video or audio input/output. [1][2]
- **Pricing:** $3 per million input tokens and $15 per million output tokens; Anthropic said the October upgrade retained its predecessor's price and speed. This API snapshot is retired on Anthropic-operated platforms. [1][3][4]
- **Architecture:** Proprietary; Anthropic does not publish parameter count or sufficient architecture details for a more specific claim. [2]

### Raw benchmarks found

The primary figures below are for the October 2024 upgrade, from Anthropic's October launch post and model-card addendum. June-only benchmark results are not substituted. [1][2]

Agent / tool use:

- **TAU-bench:** retail 69.2%; airline 46.0%. [1][2]
- **OSWorld:** screenshot-only 14.9%; 22.0% when allowed more steps. Anthropic described computer use as early, experimental, and error-prone. [1]

Reasoning / knowledge:

- **GPQA Diamond:** 65.0% (0-shot chain-of-thought); **MMLU-Pro:** 78.0% (0-shot chain-of-thought); **MMLU:** 90.5% (5-shot CoT); **MATH:** 78.3% (0-shot CoT). [2]
- Independent Vals evaluation for the October API snapshot reports **GPQA Diamond 59.34% ±2.47**, **MMLU-Pro 78.40% ±0.40**, and **MMMU-Pro 68.80% ±1.11**. These are Vals-harness results, separate from Anthropic's. [5]
- Epoch AI's independent October-snapshot profile reports **GPQA Diamond 55%**, **LiveBench 59%**, **Aider Polyglot 52%**, and **Humanity's Last Exam 4%**; the profile's benchmark results are not interchangeable with Anthropic's protocols. [6]

Coding:

- **SWE-bench Verified:** 49%. Anthropic's result is for an agent scaffold using Bash and Edit tools; the model's score is therefore a model-plus-scaffold result, not a bare-model pass rate. [1][3]
- **Anthropic internal agentic coding evaluation:** 78% of problems passed all tests, using its separately defined internal evaluation. [2]
- **HumanEval:** 93.7% (0-shot). [2]
- **LiveCodeBench:** 49.63% ±1.14 in the independent Vals evaluation; **Aider Polyglot:** 52% in Epoch AI's profile. These independent harness results remain separate from the vendor scores. [5][6]

Multimodal / instruction following:

- **MMMU validation:** 70.4%; **MathVista testmini:** 70.7%; **AI2D test:** 95.3%; **ChartQA test:** 90.8%; **DocVQA test:** 94.2%. [2]
- **IFEval:** 90.2% in Anthropic's October model-card evaluation. [2]
- No exact October-snapshot audio or video-input evaluation was verified. The vision results do not establish those modalities. [1][2]

Long context:

- The documented input window is 200K tokens. No exact October-snapshot long-context retrieval result was verified here; June-snapshot needle-in-a-haystack results are deliberately not carried over. [2][5]

### Normalized scores (1–100)

- **Tool use: 72/100.** TAU-bench is strong in retail (69.2%) and moderate in airline (46.0%), while OSWorld is 14.9% screenshot-only (22.0% with more steps); the mixed agent results support a capable but imperfect rating. [1][2]
- **Reasoning: 72/100.** Anthropic reports GPQA Diamond 65.0% and MMLU-Pro 78.0%; Vals' separate GPQA result is lower at 59.34%, so the score reflects solid performance rather than frontier reasoning. [2][5]
- **Context window: 70/100.** The 200K specification maps to 70 under the project's context tiers; no exact-snapshot retrieval result supports an increase. [2][5]
- **Multimodal: 65/100.** Verified image input and substantial vision benchmark coverage fit the project's image-input band; no verified audio/video I/O is claimed. [1][2]
- **Coding: 73/100.** SWE-bench Verified is 49% with an agent scaffold and HumanEval is 93.7%, but independent LiveCodeBench is 49.63%, below the project's mid-band LiveCode reference; the internal 78% evaluation uses a different task and setup. [2][3][5]
- **Cost efficiency: 60/100.** The historical $3/$15 per-million input/output price maps to about 60 under the project scale; Anthropic-operated API access is now retired. [1][3][4]
- **Overall Score: 70/100.** Half-up mean of the five quality dimensions: `(72 + 72 + 70 + 65 + 73) / 5 = 70.4`, rounded to 70. Cost efficiency is excluded.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-31
- Method: Three or more independent searches and direct source checks. Exact snapshot IDs and dates were kept explicit. Anthropic's launch post/model card are the primary source for the October evaluation; Vals and Epoch AI are reported as independent, harness-specific measurements. No June-only benchmark scores were carried over, and scaffolded agent scores are identified as such. Normalized ratings are interpretations, not official vendor scores.
- Reference URLs:
  - [1] [Anthropic: Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku (2024-10-22)](https://www.anthropic.com/news/3-5-models-and-computer-use)
  - [2] [Anthropic: October 2024 Claude 3.5 Sonnet model-card addendum](https://www-cdn.anthropic.com/c7822cdc35ad788ec87e14b3a9d45010f1f86c38.pdf)
  - [3] [Anthropic: Raising the bar on SWE-bench Verified with Claude 3.5 Sonnet](https://www.anthropic.com/news/swe-bench-sonnet)
  - [4] [Anthropic API model deprecations](https://docs.anthropic.com/en/docs/about-claude/model-deprecations)
  - [5] [Vals AI: Claude 3.5 Sonnet `20241022` evaluation](https://www.vals.ai/models/anthropic_claude-3-5-sonnet-20241022)
  - [6] [Epoch AI: Claude 3.5 Sonnet (October 2024)](https://epoch.ai/models/claude-3-5-sonnet-october-2024)
