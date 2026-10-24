# Claude Fable 5.1 — findings by Muse Glimmer 30B

- Source: Anthropic / claude-fable-5.1
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic’s 5th-generation generally available model for demanding reasoning, long-horizon agentic coding and knowledge work. Same underlying weights as Claude Mythos 5.1 with production safeguards.
- **Provider / access:** Anthropic. claude.ai / Claude Code / Claude Cowork; Claude Platform API, Amazon Bedrock, Google Cloud, Microsoft Foundry, AWS Claude Platform.
- **Release / knowledge:** Released Sep 1 2026; reliable knowledge cutoff Jun 2026.
- **IDs:** `claude-fable-5-1` ; Bedrock `anthropic.claude-fable-5-1`
- **Context window:** 1,000,000 total; 128,000 max output.
- **Modalities:** Input text and images → text output; adaptive thinking always on, default effort high.
- **Pricing as of 2026-10-24:** Input $10.00 / 1M, Output $50.00 / 1M, Cache read $0.25 / 1M; 5m cache write $12.50 / M; 1h cache write $20 / M. Batch API 50% discount.
- **Architecture:** Proprietary Anthropic transformer; parameter count undisclosed.

### Raw benchmarks found

**Official Anthropic launch / system card**
- Terminal-Bench-Science 0.1: 52.6%
- Terminal-Bench 4.0: 55.8%
- GDPval-AA v2: 1853 Elo
- OSWorld 2.0: 77.9% partial / 41.7% strict
- Humanity’s Last Exam: 60.9% no tools / 65.0% with tools
- AutomationBench: 31.4%
- CursorBench 3.2.0: 73.4%
Source: https://www.anthropic.com/claude-fable-and-mythos-5-1

**Independent aggregators**
- BenchLM overall 83.07/100 rank #4/992; Terminal-Bench 4.0 55.80%; Terminal-Bench-Science 0.1 52.6%; OSWorld 2.0 41.7%; AutomationBench 31.4%; SWE-bench Pro 81.2%; SWE Multilingual 89.1%; SWE Multimodal 54.7%; DeepSWE 67.4%; ProgramBench 87.6%; CursorBench 3.2 73.4%; HLE 65%; HLE w/o tools 60.9%; LiveCodeBench Vals 90.5%
Source: https://benchlm.ai/models/claude-fable-5-1

- Artificial Analysis – Claude Fable 5.1 High, Default Fallback
  - Intelligence Index 51, #15/215
  - Output speed ~59.6 tok/s; TTFT 25.55s
  - Terminal-Bench 4.0: 52.0% [Artificial Analysis terminalbench-v4-0 leaderboard]
  - GDPval-AA v2.1: 1754 Elo / 62.7% normalized
  - Humanity’s Last Exam AA-HLE: 59.1%
  - AutomationBench-AA: 59.4%
Source: https://artificialanalysis.ai/models/claude-fable-5-1-high

**Conflicts**
- Terminal-Bench 4.0: Anthropic 55.8% vs Artificial Analysis independent run 52.0% – likely effort/ harness variant.
- GDPval-AA: Anthropic 1853 Elo v2 vs Artificial Analysis 1754 Elo v2.1 – metric version difference.
- Humanity’s Last Exam: Anthropic 65.0% with tools / 60.9% no tools vs AA-HLE 59.1% – evaluation setup variance.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 4.0 55.8% official / 52.0% AA independent, OSWorld 41.7% strict, AutomationBench 31.4%. Strong agentic coding but AutomationBench caps score.
- **Reasoning: 88/100.** Humanity’s Last Exam 60.9% no tools / 65.0% with tools, GDPval-AA v2 1853 Elo. Near-top reasoning with tool assist lift.
- **Context window: 95/100.** 1M total / 128K max output verified. Tier mapping for 1M context.
- **Multimodal: 68/100.** Text + image input → text output only. No native audio/video generation.
- **Coding: 88/100.** SWE-bench Pro 81.2%, LiveCodeBench Vals 90.5%, ProgramBench 87.6%. High coding proficiency caps at tool-use variance.
- **Cost efficiency: 36/100.** $10/$50 per 1M with cache; premium pricing for frontier class.
- **Overall Score: 83/100.** Mean of Tool 78, Reasoning 88, Context 95, Multimodal 68, Coding 88. Recommended for high-autonomy agentic coding with tool use.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
