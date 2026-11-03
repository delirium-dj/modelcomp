# Claude Opus 5.5 — findings by GPT-6.1 Sol

- Source: Anthropic / `claude-opus-5-5`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Proprietary frontier model for long-running coding, computer use and professional knowledge work. Production safeguards can transparently substitute earlier Claude models, so some reported results measure a routed service rather than the checkpoint alone.
- **Provider / access:** Anthropic Messages API; also Bedrock, Google Cloud and Microsoft Foundry. Native API is neither OpenAI Chat Completions nor Responses.
- **Release / knowledge:** September 22, 2026; June 2026 reliable knowledge and training cutoff, per platform overview.
- **IDs:** `anthropic/claude-opus-5-5`; native `claude-opus-5-5`; Bedrock `anthropic.claude-opus-5-5`. No Zen Free ID verified in this research.
- **Context window:** 1M tokens; 128K synchronous output. Platform docs also describe 300K batch output under a beta header; this is not the ordinary synchronous limit.
- **Modalities:** Text and image input, text output; tool use and schema-constrained arguments; adaptive thinking cannot be disabled. No native audio/video generation established.
- **Pricing (as of 2026-11-03):** $4 input / $20 output / $0.20 cache read per million tokens; five-minute cache write $5. Fast mode $8/$40. Paid API; zero-data-retention availability is documented, not a blanket promise for every host.
- **Architecture:** Proprietary; parameter counts and active-parameter structure undisclosed.

### Raw benchmarks found

Agent / tool use:

- Anthropic launch evaluation: Terminal-Bench 4.0 **66.4%**, xhigh, standard error ±2.6 points; GDPval-AA v2.1 **1846 Elo**; AutomationBench **40.0%**, Zapier early-access evaluation; OSWorld 2.1 **81.8%**, partial evaluation.
- Artificial Analysis launch article: Terminal-Bench 4.0 **59.6%**; AA-Briefcase v1.1 **1822 Elo**. Its runs use default fallbacks.
- Vals launch snapshot: Terminal-Bench 2.1 **87.64%**, dropping to **79.77%** when fallback-assisted tasks count as failures. Terminal-Bench 4.0 **61.62%**, or **53.54%** without fallback credit. Current page instead lists **65.15%** on 4.0: a different snapshot, not a reason to average the figures.
- Tau3, Claw, Toolathon and MCP-Atlas: no verified public score found in retrieved sources.

Reasoning / knowledge:

- Anthropic HLE **67.7% with tools**, mostly max effort; Artificial Analysis HLE **61.4%**, Intelligence Index **58** in its September 22 index version, and SciCode **66.9%**. This index predates the October v5 revision.
- Vals current Index **70.18% ±1.00**, rank **3/32**; launch update **69.69%**, rank **1/63**. Dataset/cohort updates make the ranks and aggregates non-interchangeable.
- GPQA, CritPt and long-context retrieval: no verified public score found in retrieved pages. AA explicitly identifies AA-LCR as a relative weakness.

Coding:

- Anthropic FrontierCode v1.1 Main **54.4%**, CursorBench 4.0 **57.8%**.
- Vals Code Migration v1.1 **81.01% ±3.21**; ProgramBench **18.50% ±2.75** fully resolved; SWE-bench Multimodal **70.21% ±2.09**; Vibe Code Bench v1.1 **90.29% ±1.53**. Do not substitute these for SWE-bench Verified or SWE-Pro.
- CodeRabbit independent pipeline: OSS Standard recall **63.8%**, precision **38.6%** across 80 patterns; Max recall **62.5%**, precision **35.7%**. On 13 harder Signal cases Max recall rises to **76.9%**, but precision is **52.0%**. Configurations combine effort settings across a pipeline, not single API effort values.

Long context / multimodal:

- 1M capacity is corroborated by Anthropic, AA and Vals; no verified MRCR/RULER score found. Anthropic Chartography **89.0% with tools** supports chart interpretation, not audiovisual generation.

### Comparison and limitations

The three Terminal-Bench 4.0 results above differ in effort, harness, timing and fallback accounting. They establish strong capability, not a single universal success rate. Anthropic's 40% typical-workload saving is not contradicted directly by AA's roughly unchanged max-effort cost per task: AA reports approximately 119K output tokens versus 73K for Opus 5, a different operating point. CodeRabbit similarly reports 49.2–60.1% higher token usage against its production model mix, with mixed precision; lower token prices do not guarantee cheaper reviews. Vals' launch SRE score falls from 33.59% to 5.34% when fallback credit is removed, an especially important checkpoint/service distinction.

### Normalized scores (1–100)

These are evidence-weighted judgments, not benchmark percentages or a mechanical rescaling of the AA index.

- **Tool use: 95/100.** Strong independent terminal and knowledge-work results; fallbacks, removed forced tool choice and incomplete OSWorld coverage prevent a perfect score.
- **Reasoning: 95/100.** Strong HLE, SciCode and professional evaluations; tool assistance, index-version changes and weaker specialist results limit generalization.
- **Context window: 95/100.** Corroborated 1M capacity and 128K output; capacity is not verified million-token retrieval accuracy.
- **Multimodal: 86/100.** Strong chart and multimodal coding evidence with image input; no verified native audio/video output.
- **Coding: 96/100.** Multiple independent agentic and migration tests support frontier utility; low full-resolution ProgramBench and CodeRabbit precision expose remaining errors.
- **Cost efficiency: 75/100.** Improved $4/$20 pricing and cache economics, but max-effort token use and fallbacks can offset the savings.
- **Overall Score: 93/100.** Half-up mean of 95, 95, 95, 86 and 96 is 93.4; best fit is demanding supervised coding and professional agents.

## Signature

- Provided by: **GPT-6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03 UTC
- Method: Three successful distinct web searches, then direct comparison of official documentation, Artificial Analysis, Vals and CodeRabbit; no peer findings read. Scores are normalized interpretations, not official vendor scores.
- Search queries: `"Claude Opus 5.5" Anthropic model benchmarks`; `"Claude Opus 5.5" independent benchmark Artificial Analysis SWE Terminal`; `"Claude Opus 5.5" context pricing GPQA review limitations`.
- Reference URLs:
  - [Anthropic launch and evaluation caveats](https://www.anthropic.com/claude-opus-5-5)
  - [Official model specifications](https://platform.claude.com/docs/en/models/overview)
  - [Artificial Analysis launch evaluation](https://artificialanalysis.ai/articles/claude-opus-5-5)
  - [Vals measurements and fallback accounting](https://www.vals.ai/models/anthropic_claude-opus-5-5)
  - [CodeRabbit independent review evaluation](https://www.coderabbit.ai/blog/opus-5-5-model-review)
