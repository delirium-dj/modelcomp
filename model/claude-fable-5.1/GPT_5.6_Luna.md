# Claude Fable 5.1 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's highest-capability generally available model for demanding reasoning, coding, knowledge work, and long-running agents. Claude Mythos 5.1 shares the same underlying model but is a separately gated, more permissive-safeguard access tier.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude.ai, and Claude Code; native Messages API model ID `claude-fable-5-1`.
- **Release / knowledge:** 2026-09-01 release; reliable knowledge and training-data cutoff June 2026 (Anthropic platform docs).
- **IDs:** `anthropic/claude-fable-5-1`; Bedrock ID `anthropic.claude-fable-5-1`. No verified OpenCode Zen Free ID.
- **Context window:** 1M tokens; 128K synchronous maximum output, verified in current Anthropic platform documentation.
- **Modalities:** Text and image input, text output, adaptive thinking always on, effort control, tool calls, computer use, and structured outputs. Audio/video input and non-text output were not documented.
- **Pricing (as of 2026-11-02):** $10 input / $50 output per 1M tokens; cache reads $0.25/M, 5m cache writes $12.50/M, 1h writes $20/M, and Batch input/output 50% off. Anthropic estimates typical workloads ~25% cheaper and highly agentic workloads up to ~45% cheaper than Fable 5.
- **Architecture:** Proprietary closed model; parameters and architecture undisclosed.

## Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1853 Elo**; OSWorld 2.0: **77.9% partial / 41.7% strict** (Anthropic launch table).
- AutomationBench: **31.4%**; Toolathlon-Verified: **77.8%**, Pass@3 **81.5%** (Anthropic system card/BenchLM).
- AA Briefcase: **1669 Elo**; AA Agentic Index: **58.0%**; AA AutomationBench: **59.4%** (Artificial Analysis/BenchLM).
- ApprenticeBench: **72%**; CWE-bench v1: **58%** (BenchLM/independent leaderboards).
- Terminal-Bench 2.1: **91.4%** (Artificial Analysis) and **85.02%** Vals; the Vals fallback-corrected result is **79.03%** (independent harnesses).

Reasoning / knowledge:

- Humanity's Last Exam: **60.9% no tools / 65.0% with tools** (Anthropic system card); Artificial Analysis HLE: **59.1%**.
- GPQA Diamond: **93.4%** (Vals AI); AA-GPQA: **93.7%**; MMLU-Pro: **92.4%** (independent trackers).
- Artificial Analysis Intelligence Index v5: **49** on the current max/default-fallback profile; an earlier pre-release max run reported **66** with approximately 4% fallback tokens (AA).
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **90.0%**; AA-LCR: **85.3%**; CritPt: **29.7%** (system card/BenchLM).
- FrontierMath v2 tiers 1–3: **90.175%**; tier 4: **87.805%** (Epoch AI/BenchLM).

Coding:

- Terminal-Bench-Science 0.1: **52.6%**; Terminal-Bench 4.0: **55.8%** (Anthropic system card; Mythos variant is 60.9% and is not silently merged here).
- SWE-bench Pro: **81.2%**; SWE Multilingual: **89.1%**; SWE Multimodal: **54.7%**; DeepSWE: **67.4%** (Anthropic system card/BenchLM).
- ProgramBench: **87.6%**; CursorBench 3.2: **73.4%**; FrontierSWE v2: **56.3%** (system card/independent boards).
- LiveCodeBench: **90.52%** (Vals AI); AA Coding Index: **81.6%**; AA-SciCode: **63.1%**.
- CursorBench 4.0: **51.8%**; FrontierCode 2.0: **32.4%** (BenchLM).

Long context:

- **1M-token context / 128K output** documented; no exact-model independent MRCR/RULER full-window retrieval curve was found.

Multimodal:

- ARC-AGI-2: **90.0%**; ParseBench: **78.12%**; Design Arena Website: **1312** (system card/BenchLM).
- The model supports image input only among non-text modalities; no verified public audio/video input or non-text output score was found.

## Normalized scores (1–100)

- **Tool use: 96/100.** GDPval 1853, Toolathlon 77.8%, OSWorld partial 77.9%, and independent AA/Terminal results establish elite agent breadth, while strict OSWorld 41.7%, AutomationBench 31.4%, and fallback policy cap it.
- **Reasoning: 97/100.** HLE 60.9%/65%, GPQA about 93–94%, ARC-AGI-2 90%, AA-LCR 85.3%, and FrontierMath results are frontier-leading; the current AA profile and effort/fallback variation cap certainty.
- **Context window: 98/100.** The 1M window and 128K output are excellent, but no independent full-window retrieval curve was found.
- **Multimodal: 92/100.** Image input, ARC-AGI-2 90%, and ParseBench 78.12% support strong visual/document reasoning, but output is text-only and audio/video input was not verified.
- **Coding: 96/100.** SWE-Pro 81.2%, SWE Multilingual 89.1%, ProgramBench 87.6%, LiveCodeBench 90.5%, and TB2.1 85–91% are exceptional; TB4.0 55.8% and fallback-corrected TB2.1 79.03% show harness sensitivity.
- **Cost efficiency: 65/100.** Cache reads at $0.25/M and estimated workload savings are meaningful, but $10/$50 and roughly $12.99 per AA composite task remain expensive for uncached high-volume work.
- **Overall Score: 96/100.** Half-up mean of `(96 + 97 + 98 + 92 + 96) / 5 = 95.8`; best fit is demanding coding, research, and computer-use agents where maximum capability outweighs premium token prices.

### Deep-research addendum (2026-10-09)

- Anthropic reports Fable 5.1 completed **82%** on its hardest browser-agent benchmark, versus **74%** for Opus 5 and **57%** for Fable 5, in about ten minutes per task.
- Anthropic notes production safeguards can turn some OSWorld and AutomationBench interventions into zeroes, so the benchmark figures are configuration-sensitive.
- Sources: https://www.anthropic.com/claude-fable-and-mythos-5-1 ; https://www.anthropic.com/claude/fable

### Multi-source deep-research addendum (2026-10-09)

- Anthropic says Fable 5.1 and Mythos 5.1 share the same model, with different safeguards, lower cache-read pricing, and lower cost per task. Independent tracking reports Terminal-Bench 2.1 around 91.4% (AA) versus 85.02% (Vals), or 79.03% when fallback refusals are counted.
- Recalculation: **96/100**. Fresh system-card, Artificial Analysis, BenchLM, and Vals rows confirm a frontier profile while making safeguard/fallback variance explicit.
- Sources: https://www.anthropic.com/claude-fable-and-mythos-5-1 ; https://platform.claude.com/docs/en/models/fable-5-1/overview ; https://themodelgap.com/models/claude-fable-5-1

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna-fast)** — 2026-11-02
- Method: fresh independent public-web research using Anthropic's launch page, platform documentation, system card, Artificial Analysis, BenchLM, and Vals AI; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Anthropic platform docs: Claude Fable 5.1](https://platform.claude.com/docs/en/models/fable-5-1/overview)
  - [Anthropic system card: Fable 5.1 and Mythos 5.1](https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card)
  - [Artificial Analysis: Claude Fable 5.1](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [BenchLM: Claude Fable 5.1 benchmark scores](https://benchlm.ai/models/claude-fable-5-1)
  - [Vals AI: Claude Fable 5.1](https://www.vals.ai/models/anthropic_claude-fable-5-1)
