# GPT-6 Astra — findings by GPT-5.6 Luna

- Source: OpenAI / GPT-6 Astra
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's frontier reasoning model for complex research, professional work, coding, computer use, science, and cybersecurity. It is a distinct GPT-6 model, not a pricing or speed alias.
- **Provider / access:** OpenAI API (`gpt-6-astra`, Chat Completions and Responses), ChatGPT paid plans, Codex, Microsoft Azure, and Amazon Bedrock. The official API page lists function calling, structured outputs, file search, web search, computer use, MCP, and hosted shell support.
- **Release / knowledge:** 2026-09-03 release; official API knowledge cutoff 2026-04-30.
- **IDs:** `openai/gpt-6-astra` on OpenRouter and `gpt-6-astra` on OpenAI's API. No separate OpenCode Zen Free ID was verified.
- **Context window:** 1,050,000 tokens, with a 922,000-token maximum input and 128,000-token maximum output, verified in OpenAI's API model documentation. OpenAI's MRCR v2 reports 100.0% at 256K–512K and 96.3% at 512K–1M.
- **Modalities:** Text and image input; text output; reasoning; structured outputs; function/tool calls; web/file search; code interpreter; computer use; hosted shell; MCP. Audio and video input/output are not listed as supported on the official API model page.
- **Pricing (as of 2026-11-02):** $10 input / $1 cached input / $12.50 cache write / $50 output per 1M tokens. Requests above 272K input tokens are charged at 2x input/cache and 1.5x output rates; Batch/Flex are 50% of standard, and Fast mode is 2x. Pricing and limits are from OpenAI's API documentation.
- **Architecture:** Proprietary/private weights; parameter count and active/total architecture were not disclosed. OpenAI documents reasoning-effort levels from low through max and a default snapshot alias `gpt-6-astra`.

### Raw benchmarks found

> OpenAI's primary scorecard reports maximum results from its research/API harness. The official table explicitly notes that evaluation prompts, tools, and system prompts can differ from production. Independent Artificial Analysis and Vals results are retained separately because several benchmark variants and aggregate indices conflict with OpenAI's figures.

Agent / tool use:

- Agents' Last Exam: **59.3%** (OpenAI; computer use).
- OSWorld 2.0 offline: **72.6% partial** (OpenAI; roughly 40 minutes/task versus 65.7% and roughly 75 minutes for GPT-5.6 Sol in the same table).
- ScreenSpot-Pro: **92.7%** (OpenAI; no tools).
- AutomationBench: **41.4%** (OpenAI professional-work table).
- BenchCAD: **95.9%** (OpenAI; CAD reconstruction; several comparison runs used modified Claude settings).
- BrowseComp: **91.5%** (OpenAI).
- Independent conflict: Artificial Analysis reports **69%** on its AutomationBench-AA implementation and Vals reports CUA-bench **19.17%**; these are different harnesses/tasks and should not be substituted for OpenAI's 41.4%.

Reasoning / knowledge:

- FrontierMath Tier 4 v2: **97.6%** (OpenAI).
- GPQA Diamond: **96.0%** (OpenAI).
- Humanity's Last Exam with tools: **57.2%** (OpenAI; lower than the listed Claude Fable/Opus comparison scores).
- ARC-AGI-3: **99.9%**; ARC-AGI-2: **95.0%**; ARC-AGI-1: **98.5%** (OpenAI; ARC-AGI-3 used a Responses API harness with two disclosed settings changes).
- Artificial Analysis Intelligence Index v4.1.1: **53** (independent September article; OpenAI's own table reports **61.2** on its stated index row). The discrepancy is attributed to different harness/version/effort and is not averaged.
- Artificial Analysis AA-Omniscience: hallucination rate **51%** at max effort, with a simultaneous accuracy improvement (independent analysis; lower hallucination is better, but the reported rate is not a conventional accuracy percentage).

Coding:

- Terminal-Bench 4.0: **57.9%** (OpenAI official table; an independent Vellum transcription says 57.7%, and Artificial Analysis measures 59% on its run).
- DeepSWE v1.1: **74.1%** (OpenAI).
- FrontierCode 1.1 Extended: **64.5%**; Main: **53.3%** (OpenAI; Extended run included a disclosed Codex-style developer instruction).
- Internal Database Migration Tasks: **63.9%** (OpenAI).
- Artificial Analysis Coding Agent Index v1.4: **67.0** (OpenAI's scorecard); independent Artificial Analysis article reports **62** in its Codex index, tied with Claude Fable 5.1. This is a material aggregate-index conflict, so I use the individual coding benchmarks for normalization.
- Vals independent results: Terminal-Bench 4.0 **59.60% ±4.40**, Vibe Code Bench v1.1 **89.59% ±2.17**, Code Migration v1.1 **80.58% ±2.34**, and SWE-bench Multimodal **43.33% ±2.26**.

Cybersecurity / specialist evidence:

- ExploitBench: **100.0%**; ExploitGym: **42.4%**; ExploitBench June–August 2026: **39.0%**; SRE-Bench: **88.0% single attempt / 99.2% within four attempts**; SEC-Bench Pro: **85.4%** (OpenAI).
- The cyber results were run without normal production safeguards for capability measurement, and OpenAI says the shipped model refuses advanced exploit-generation work. ExploitGym comparisons also removed the usual six-hour limit, so these are capability evidence rather than an ordinary user experience guarantee.

Long context:

- OpenAI MRCR v2 8-needle: **100.0% at 256K–512K** and **96.3% at 512K–1M** (OpenAI). Codex additionally supports searchable notes across context-window rollover, but that product feature is not itself a raw model benchmark.

Multimodal:

- The official API card verifies image input and text output; no public exact-model image benchmark was required to establish modality. No audio/video input or non-text output is listed in the API card.

### Normalized scores (1–100)

- **Tool use: 95/100.** OSWorld 72.6%, ScreenSpot-Pro 92.7%, BrowseComp 91.5%, and strong official computer-use/tool coverage are frontier evidence; AutomationBench 41.4% and mixed independent harness results cap the score.
- **Reasoning: 96/100.** GPQA 96.0%, FrontierMath 97.6%, ARC-AGI-2 at 95%, and ARC-AGI-3 at 99.9% are exceptional, but HLE 57.2%, the independent AA Index of 53 versus OpenAI's 61.2, and harness-specific claims prevent a perfect score.
- **Context window: 99/100.** The verified 1.05M window and 100% retrieval at 256K–512K are excellent; 96.3% at 512K–1M is just below the methodology's 98% ceiling for a full 100.
- **Multimodal: 65/100.** Text plus image input with text output maps to the methodology's image-input band; no verified audio/video or non-text output is credited.
- **Coding: 94/100.** DeepSWE 74.1%, Terminal-Bench around 58–60%, FrontierCode 64.5% extended, strong migration results, and Vals coding measurements support a frontier coding score, while independent index disagreement and no clean public SWE-bench Verified result cap it.
- **Cost efficiency: 30/100.** Standard $10/$50 per 1M input/output tokens is in the methodology's highest-cost band; cache, Batch/Flex, and token efficiency help but do not make the standard tier inexpensive.
- **Overall Score: 90/100.** Half-up mean of the five quality dimensions `(95 + 96 + 99 + 65 + 94) / 5 = 89.8`; best fit is high-stakes reasoning, computer use, science, and agentic coding where its cost and cyber safeguards are acceptable.

---

## Signature

- Provided by: **GPT-5.6 Luna (openai/gpt-5.6-luna-fast)** — 2026-11-02
- Method: Four independent web searches plus OpenAI's official release/API documentation and independent Artificial Analysis, Vals, Vellum, and OpenRouter sources were compared. Official and independent benchmark variants are kept separate; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: GPT-6 Astra announcement and official scorecards](https://openai.com/index/gpt-6-astra/)
  - [OpenAI API model documentation](https://developers.openai.com/api/docs/models/gpt-6-astra)
  - [OpenAI deployment safety system card](https://deploymentsafety.openai.com/gpt-6-astra)
  - [Artificial Analysis: GPT-6 Astra benchmark analysis](https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra)
  - [Vals AI: GPT-6 Astra independent benchmark page](https://www.vals.ai/models/openai_gpt-6-astra)
  - [Vellum: GPT-6 Astra benchmark review](https://www.vellum.ai/blog/gpt-6-astra-benchmarks-explained)
  - [OpenRouter: GPT-6 Astra API documentation](https://openrouter.ai/openai/gpt-6-astra)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
