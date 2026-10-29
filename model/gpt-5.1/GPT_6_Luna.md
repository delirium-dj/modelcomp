# GPT-5.1 — findings by GPT-6 Luna

- Source: OpenAI/GPT-5.1 API model
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's general-purpose reasoning model for coding and agentic tasks, with configurable reasoning effort (none, low, medium, high) and adaptive thinking. This is the API model `gpt-5.1`, not GPT-5.1-Codex, GPT-5.1-Codex-Max, Nano, or the separately named ChatGPT Instant/Thinking experiences.
- **Provider / access:** OpenAI API. Supports Responses and Chat Completions; the current OpenAI API model page marks it **Deprecated**. No retirement date was provided. Benchmarks below are historical release results, not a claim that the deprecated API remains callable.
- **Release / knowledge:** API release **November 13, 2025**; ChatGPT GPT-5.1 rollout began November 12. OpenAI's API docs list a **September 30, 2024** knowledge cutoff.
- **IDs:** API alias `gpt-5.1`; default snapshot `gpt-5.1-2025-11-13` ([OpenAI model docs](https://developers.openai.com/api/docs/models/gpt-5.1.md)).
- **Context window:** 400,000 tokens; max output 128,000. OpenAI's launch post reports 90.0% on BrowseComp Long Context at 128K, but this is not a 512K+ retrieval evaluation.
- **Modalities:** Text and image input; text output. Audio and video input are not supported. Function calling, structured outputs, and configurable reasoning are supported.
- **Pricing (as of 2026-10-29):** OpenAI API per 1M tokens: **$1.25 input / $0.125 cached input / $10 output**. GPT-5.1 supports prompt caching for up to 24 hours. No free API tier verified.
- **Architecture:** Proprietary, closed weights; parameter count and internal architecture not disclosed.

### Raw benchmarks found

Three independent public searches were followed by checks of OpenAI's [API release post](https://openai.com/index/gpt-5-1-for-developers/), [exact API model docs](https://developers.openai.com/api/docs/models/gpt-5.1.md), and the source-linked [evals.report GPT-5.1 ledger](https://evals.report/models/openai-gpt-5-1). The official API release post labels its table **GPT-5.1 (high)** and gives methodology notes; the independent ledger sometimes reports different values, which are preserved rather than silently combined. No GPT-5.1-Codex results are used.

Agent / tool use:

- OpenAI's release table: τ²-bench Airline **67.0%**, Telecom **95.6%**, Retail **77.9%**; BrowseComp Long Context (128K): **90.0%**. For Telecom, OpenAI says it used a short, generically helpful prompt to improve GPT-5.1's result.
- evals.report lists GDPval **1,227 Elo** as an official result. Its entry is separate from OpenAI's launch table and no GDPval-AA result was verified.
- No exact-model Terminal-Bench 2.1, OSWorld, Tau3-Banking, or Claw-Eval score verified.

Reasoning / knowledge:

- OpenAI's release table (high): GPQA Diamond, no tools **88.1%**; AIME 2025, no tools **94.0%**; FrontierMath with Python **26.7%**.
- evals.report lists Humanity's Last Exam **27.2%** and GPQA Diamond **87.6%** (both marked “Official” in that ledger). The official release table does not show HLE and gives GPQA 88.1%; these source/configuration differences are not reconciled here.

Coding:

- OpenAI's release table (high): SWE-bench Verified, all 500 problems, **76.3%**. OpenAI states all models used a JSON-based `apply_patch` harness.
- evals.report records LiveCodeBench Pro **2,269 Codeforces Elo**, LiveCodeBench **86.8% Pass@1**, and SciCode **43.3%** (the latter two are marked unverified in that ledger).
- The same ledger lists SWE-bench Verified **68.0%**, unlike OpenAI's 76.3% release-table score. The exact reason for this discrepancy was not established; harness, run, or configuration differences are possible, so both values are retained.

Multimodal and long context:

- OpenAI's release table: MMMU **85.4%**; API docs confirm image input and text-only output.
- BrowseComp Long Context 128K: **90.0%** (OpenAI); no exact-model retrieval score at 512K or above found.

### Normalized scores (1–100)

- **Tool use: 81/100.** τ²-bench results (67.0% Airline, 95.6% Telecom, 77.9% Retail) and 128K BrowseComp 90.0% are strong, but Tau² is not the Tau3 rubric metric and no TB2.1, OSWorld, or Claw-Eval result was verified; GDPval 1,227 Elo is from the independent ledger.
- **Reasoning: 88/100.** GPQA Diamond 88.1%, AIME 94.0%, and FrontierMath 26.7% are strong; no HLE result appears in OpenAI's release table, and the independent ledger's GPQA value differs slightly.
- **Context window: 80/100.** The 400K API context is in the methodology's 200K–500K tier; a 128K BrowseComp result does not establish retrieval quality at 512K+.
- **Multimodal: 65/100.** Image input qualifies for the methodology's image-input band, and MMMU is 85.4%; output remains text-only with no audio/video support.
- **Coding: 85/100.** OpenAI reports SWE-bench Verified 76.3% and the independent ledger lists LiveCodeBench Pro 2,269 Elo; caps include no exact-model Terminal-Bench 2.1 score, SciCode 43.3% marked unverified, and the ledger's conflicting 68.0% SWE-bench result.
- **Cost efficiency: 78/100.** The $1.25/$10 input/output price is reasonable on input but expensive for output-heavy coding compared with the methodology's ~$1.25/$4.25 reference; cached input is substantially cheaper at $0.125.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions (81, 88, 80, 65, 85 = 79.8), excluding cost; a strong historical coding/reasoning model with image input, but its API is now marked deprecated and its output-token price is high.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public search queries, followed by exact-model checks of OpenAI's API launch post and model docs, with evals.report used as a source-linked cross-check. Conflicting benchmark values are explicitly separated. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
