# Claude Fable 5.1 — findings by GPT-6.1 Sol

- Source: Anthropic / `claude-fable-5-1`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Proprietary model for demanding reasoning, research and long-running coding. Anthropic states Mythos 5.1 has the same model capabilities with different safeguards; this report evaluates the generally available Fable route and keeps Mythos results explicitly separate.
- **Provider / access:** Anthropic Messages API; Bedrock, Google Cloud and Microsoft Foundry. Native access is not the OpenAI Chat Completions or Responses API.
- **Release / knowledge:** September 1, 2026; June 2026 reliable knowledge and training cutoff.
- **IDs:** Native `claude-fable-5-1`; Bedrock `anthropic.claude-fable-5-1`; publisher-qualified `anthropic/claude-fable-5-1`. No verified Zen Free route found.
- **Context window:** Official 1M total tokens; 128K synchronous maximum output. The overview's list of models eligible for 300K batch output does not include Fable 5.1; that larger limit is not assumed here.
- **Modalities:** Text/image input, text output; tools and adaptive always-on reasoning. API default effort high; launch documentation distinguishes medium on Claude.ai/Cowork. Forced tool use returns an error; prior-thinking preservation constrains transcript editing and model switching.
- **Pricing (as of 2026-11-03):** $10 input / $50 output / $0.25 cache read per million; five-minute cache write $12.50, one-hour write $20. Batch input/output discount 50%. Paid API. Eligible zero-data-retention access is documented; Enterprise Frontier Safeguards rollout is phased, not universally complete.
- **Architecture:** Proprietary; parameter counts and architecture undisclosed in retrieved sources.

### Raw benchmarks found

Agent / tool use:

- Anthropic launch: Terminal-Bench 4.0 **55.8%** for Fable versus explicitly labelled Mythos **60.9%**; AutomationBench **31.4%**; GDPval-AA v2 **1853 Elo**; OSWorld 2.0 **77.9% partial / 41.7% strict**, August task release. These two OSWorld scores must not be conflated.
- Vals: launch Terminal-Bench 2.1 **85.02%**, or **79.03%** when fallback-assisted tasks count as failures; current Terminal-Bench 4.0 **58.08% ±3.31**; CUA-bench **13.17%**; SRE Bench **22.90% ±2.60**, dropping to **10.69%** without fallback credit in its launch accounting. **195/262** SRE tasks were fallback-assisted.
- Vals Finance Agent v2 **58.88% ±2.06**, Legal Research Bench **55.29% ±3.46**, SkillsBench **61.55% ±4.76**.
- Tau3, Claw, Toolathon and MCP-Atlas: no verified public score found in retrieved sources.

Reasoning / knowledge:

- Anthropic HLE **60.9% without tools / 65.0% with tools**; Terminal-Bench-Science 0.1 **52.6%**, standard error approximately ±3.5–4.5 points.
- Vals current GPQA Diamond **93.43% ±1.86**, MMLU Pro **92.38% ±0.27**, ProofBench v1.1 **100.00%**, MysteryMechanism **47.75% ±3.36**, RSI Index **36.09%**, Terminal-Bench-Science **40.00% ±5.90**.
- Vals dated launch aggregate **67.87%**, or **66.85%** without fallback credit. Current header shows an unlabeled aggregate accuracy **63.24%**; it is not asserted to be the same version of Vals Index.
- Emergent's launch review quotes AA Intelligence Index **66** at max; AA's September 9 article directly reports Fable **53** tied with Astra after index changes, at **$7.63/task** and approximately **78K** output tokens per weighted task. Versioned composite indices are not interchangeable.
- CritPt and hallucination rate: no verified public score found in retrieved exact-model sources.

Coding:

- Anthropic CursorBench 3.2.0 **73.4%**.
- Vals LiveCodeBench **90.52% ±0.86**, IOI **90.78% ±4.65**, Vibe Code Bench v1.1 **90.26% ±1.57**, Code Migration **54.61% ±4.81**, ProgramBench **7.00% ±1.81** fully resolved, SWE-bench Multimodal **61.25% ±2.23**.
- Snorkel proprietary Terminal-Bench+: **61.5% pass@1**, **74.1% pass@5**, mean reward **62.7%**. Debugging **87%** across four tasks; games **88%** across four; build/dependency management **18%**. Categories are small and uneven, so not population-wide success probabilities.
- Snorkel matched successful runs: **58% fewer output tokens**, **36% lower median duration** than Opus 5. On common tasks Opus leads pass@1 by **6.2 points**. These success-conditioned efficiency results do not establish superior all-attempt cost or reliability.
- SWE-bench Verified / SWE-Pro: no verified exact-5.1 score found; do not transfer Fable 5's quoted results. DeepSWE exact-5.1 figure was not independently retrieved in this model's source set.

Long context / multimodal:

- Official 1M capacity; no verified exact-model MRCR/RULER result retrieved. Vals MMMU Pro **90.64% ±0.70** and SWE-bench Multimodal support image reasoning; they do not establish audio/video generation.

### Conflicts and interpretation

Anthropic's launch measurements use production safeguards, with Opus 4.8 completing some cyber interventions and Opus 5 completing biology interventions. OSWorld interventions count as zero. Emergent's blanket claim that safeguard handoffs are scored zero is therefore overbroad; prefer the official per-benchmark caveats and Vals' explicit paired results. Default fallback is an opt-in API beta, not proof that every request or every host silently routes. Current docs expose actual serving model and per-attempt usage; a refusal can be HTTP 200, and some refusal categories are billed even before output. Fallback is not a general overload retry mechanism.

The 1853 GDPval-AA v2 launch figure must not be mixed with later v2.1 ratings. Vals' updated tables and old launch notes likewise contain different versions and cohorts. Independent scientific terminal performance is below Anthropic's result, while terminal coding broadly corroborates strong capability. Snorkel finds last-mile fragility, unperformed verification claims and terminal-state losses despite near-complete work. Its data supports targeted strengths, not universal coding dominance.

Cache read reductions can yield Anthropic's claimed 25% typical or up-to-45% agentic savings against Fable 5, but only under its measured workload mix. They do not guarantee cheaper max-effort jobs: AA's independent comparison shows high token use and high cost per task. Current official guidance recommends starting with the cheaper Opus 5.5 and paying for Fable only where application evaluations justify it.

### Normalized scores (1–100)

Evidence-weighted judgments, not official benchmark percentages:

- **Tool use: 91/100.** Strong terminal, knowledge-work and tool benchmarks; fallback dependence, strict-vs-partial computer-use gaps and removed forced calls cap reliability.
- **Reasoning: 95/100.** Excellent proof, GPQA and HLE evidence; tool assistance, specialist weaknesses and scientific harness variance prevent full credit.
- **Context window: 95/100.** Official 1M capacity and 128K output, but no verified long-context retrieval result in this source set.
- **Multimodal: 88/100.** Strong independently measured visual reasoning; native inputs lack audio/video and output is text only.
- **Coding: 93/100.** Strong LiveCodeBench, multimodal coding and terminal evidence; Snorkel's dependency/verification failures and low full-resolution ProgramBench limit autonomous trust.
- **Cost efficiency: 59/100.** Excellent cache reads can help repeated agents, but $10/$50 prices, long max-effort reasoning and fallback/refusal billing are substantial costs.
- **Overall Score: 92/100.** Half-up mean of 91, 95, 95, 88 and 93 is 92.4; best fit is difficult, feedback-rich reasoning and coding where cheaper models fail application-specific evaluations.

## Signature

- Provided by: **GPT-6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03 UTC
- Method: Three successful separate searches; official launch, model specifications and fallback contract compared with Vals, Snorkel and an independent launch review. AA September 9 primary comparison was retrieved during this run and is cited with its date. No peer findings read; normalized scores are interpretations, not official vendor scores.
- Search queries: `"Claude Fable 5.1" Anthropic official benchmarks model card`; `"Claude Fable 5.1" Artificial Analysis Vals independent benchmark review`; `"Claude Fable 5.1" pricing context limitations fallback safeguards`.
- Reference URLs:
  - [Anthropic launch and safeguard-specific benchmark notes](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Official specifications, IDs and pricing](https://platform.claude.com/docs/en/models/fable-5-1/overview)
  - [Official refusal, fallback and billing contract](https://platform.claude.com/docs/en/build-with-claude/refusals-and-fallback)
  - [Vals independent measurements and fallback sensitivity](https://www.vals.ai/models/anthropic_claude-fable-5-1)
  - [Snorkel independent coding evaluation](https://snorkel.ai/blog/fable-5-1-vs-opus-5-coding-benchmark/)
  - [Emergent historical benchmark analysis](https://emergent.sh/learn/claude-fable-5-1-benchmarks)
  - [AA dated primary comparison](https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra)
