# GPT-6 Astra — findings by GPT-6.1 Sol

- Source: OpenAI / `gpt-6-astra`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** Proprietary frontier reasoning and computer-use model for difficult engineering, research and professional workflows. Cybersecurity evaluation results without production safeguards are not guarantees of generally available API behavior.
- **Provider / access:** OpenAI Responses and Chat Completions APIs; ChatGPT and Codex; Azure and Bedrock announced. Responses supports hosted shell, computer use, MCP, tool search, code interpreter, search and apply_patch.
- **Release / knowledge:** September 3, 2026; April 30, 2026 knowledge cutoff per API model page.
- **IDs:** Native `gpt-6-astra`; publisher-qualified `openai/gpt-6-astra`. Astra Pro is not silently substituted for this ID. No verified Zen Free ID found.
- **Context window:** Official 1,050,000 total, maximum input 922,000, maximum output 128,000. The total window must not be presented as an independently usable 1.05M input allowance.
- **Modalities:** Text/image input, text output; structured outputs, function calling and reasoning efforts low/medium/high/xhigh/max. Image-generation tool support is orchestration, not native image output from this checkpoint. Audio, realtime and video generation endpoints unsupported.
- **Pricing (as of 2026-11-03):** $10 input / $50 output / $1 cached input / $12.50 cache write per million. Above 272K input, the full request is charged 2x input/cache and 1.5x output. Batch/Flex 50% of Standard; Fast 2x applicable rates. Tools can add charges; eligible customers can use zero data retention.
- **Architecture:** Proprietary; parameter counts and architecture not publicly disclosed in retrieved sources.

### Raw benchmarks found

Agent / tool use:

- OpenAI launch: Agents' Last Exam **59.3%**, OSWorld 2.0 offline partial **72.6%**, ScreenSpot-Pro no tools **92.7%**, BrowseComp **91.5%**, AutomationBench **41.4%**. Scores are maxima over efforts, not a single default configuration.
- AA September 9 independent article: Terminal-Bench 4.0 **59%** in its Intelligence evaluation; AutomationBench-AA **69%**; GDP.pdf all-criteria pass **31%**. AutomationBench-AA is AA's implementation, not the vendor's 41.4% harness.
- Vals current: CUA-bench **19.17%**, rank **1/9**; SRE Bench **56.87% ±3.07**, rank **1/35**; Finance Agent v2.1 **60.43% ±2.12**; HLAB-Vals-1.1 **7.08% ±1.90**. First in a difficult cohort still leaves most CUA tasks unsolved.
- Tau3, Claw and MCP-Atlas: no verified public score found in retrieved sources.

Reasoning / knowledge:

- OpenAI: GPQA Diamond **96.0%**, HLE with tools **57.2%**, FrontierMath Tier 4 v2 **97.6%**, Terminal-Bench Science 0.1 **64.6%**.
- AA September 9: Intelligence Index **53**, tied with Fable 5.1 in that dated index; **27K** output tokens and **$3.26** per weighted task at max. AA-Omniscience hallucination rate **51%**, down from 92% for GPT-5.6 Sol, under that benchmark's definition. It is not a 51% error rate across all answers.
- Vals: Index **65.02% ±1.10**, rank **6/32**; Science Index **65.09% ±2.26**, rank **1/23**; MysteryMechanism **53.15% ±3.36**, ProofBench v1.1 **99.00% ±1.00**, Terminal-Bench-Science **62.86% ±5.82**.
- OpenAI ARC-AGI-3 **99.9%** uses its Responses harness with retained reasoning and compaction. DeepLearning.AI reports ARC's Standard-harness max score **62.7%**, versus Provider Adapter high **99.9%**; this is a harness distinction, not two interchangeable generic reasoning scores.

Coding:

- OpenAI: Terminal-Bench 4.0 **57.9%**, DeepSWE v1.1 **74.1%**, FrontierCode 1.1 Extended **64.5**, Main **53.3**, internal database migration **63.9%**.
- AA agent evaluation in Codex: Coding Agent Index **62**, DeepSWE **68%**, Terminal-Bench 4.0 **56%**, SWE-Atlas-QnA **62%**, **$7.09/task** at max effort. Distinct from its raw-model terminal result and OpenAI's research harness.
- Vals: Code Migration v1.1 **80.58% ±2.34**, Vibe Code Bench v1.1 **89.59% ±2.17**, IOI **100.00%**, ProgramBench **5.50% ±1.62** fully resolved, SWE-bench Multimodal **43.33% ±2.26**, Terminal-Bench 4.0 **59.60% ±4.40**.
- SWE-bench Verified / SWE-Pro and LiveCodeBench: no verified public score found in retrieved sources.

Long context:

- OpenAI MRCR v2 eight-needle **100.0%** at 256K–512K and **96.3%** at 512K–1M. Vendor retrieval test, not independent verification that all million-token engineering jobs retain full accuracy.

### Conflicts and practical limitations

OpenAI's launch table quotes AA Intelligence Index v4.1.1 at 61.2 and Coding Agent Index v1.4 at 67.0; AA's September 9 article gives 53 and 62 after benchmark changes. DeepLearning.AI explicitly distinguishes Intelligence v4.2 (55) from v4.3 (53). Preserve versions rather than infer a model regression or rescale all figures onto one metric. The current Vals aggregate and migration v1.1 figures likewise differ from its older launch snapshot quoted in reporting.

DeepSWE 74.1% vendor versus 68% AA Codex is substantive evidence of harness sensitivity. Strong cyber benchmarks without safeguards coexist with Vals CyberBench 41.07%; refusal policy, task mix and harness differ, so unfiltered research scores should not be sold as deployable cyber utility. OpenAI's reverse-engineering **SRE-Bench 88.0%** refers to a binary reverse-engineering paper; Vals' **SRE Bench 56.87%** is a separately linked operational benchmark. Name similarity is not score agreement.

Token efficiency offsets the high list price in AA's launch comparisons, but long-input surcharges apply to the entire request and can dominate budgets. Safety classifiers can pause or stop legitimate tool work; OpenAI also reports reduced written-reasoning monitorability. Neither alignment claims nor benchmark leadership remove the need for least-privilege tools and human review.

### Normalized scores (1–100)

Evidence-weighted interpretations, not direct rescalings of composite indices:

- **Tool use: 95/100.** Broad native tools and strong independent CUA/SRE evidence; low absolute CUA completion and safety stops prevent full credit.
- **Reasoning: 95/100.** Strong GPQA, advanced mathematics and independent scientific tests; specialist legal weaknesses, hallucination and harness-sensitive ARC results cap the score.
- **Context window: 97/100.** Large documented window and strong MRCR retrieval; 922K input ceiling, vendor-only retrieval verification and expensive long requests limit practical breadth.
- **Multimodal: 87/100.** Strong image perception and computer use, but no native audio/video input or generated audiovisual output verified for this API ID.
- **Coding: 94/100.** Independent migration, terminal and science leadership support complex engineering; agent harness variance and low full ProgramBench completion remain.
- **Cost efficiency: 65/100.** Launch token efficiency is meaningful, but $10/$50 pricing, tool fees and full-request long-context surcharges are expensive.
- **Overall Score: 94/100.** Half-up mean of 95, 95, 97, 87 and 94 is 93.6; best fit is high-value scientific and engineering agents where completion quality justifies cost.

## Signature

- Provided by: **GPT-6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03 UTC
- Method: Three successful separate searches followed by official launch/API documentation, independent AA and Vals measurements and DeepLearning.AI reporting. No peer reports read. Scores are normalized interpretations, not official scores.
- Search queries: `"GPT-6 Astra" site:openai.com benchmarks model`; `"GPT-6 Astra" independent Artificial Analysis Vals benchmark review`; `"GPT-6 Astra" pricing context limitations tools reasoning`.
- Reference URLs:
  - [Official launch, tables and evaluation footnotes](https://openai.com/index/gpt-6-astra/)
  - [Official API specifications and surcharge rules](https://developers.openai.com/api/docs/models/gpt-6-astra)
  - [AA independent evaluation](https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra)
  - [Vals current independent evaluation](https://www.vals.ai/models/openai_gpt-6-astra)
  - [DeepLearning.AI benchmark-version and ARC-harness analysis](https://www.deeplearning.ai/the-batch/gpt-6-astra-is-a-star)
