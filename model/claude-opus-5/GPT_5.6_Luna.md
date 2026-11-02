# Claude Opus 5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Opus 5
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's high-end reasoning model for coding, agents, and knowledge work.
- **Provider / access:** Claude API and cloud partners; API ID `claude-opus-5`; Messages API rather than OpenAI Chat Completions/Responses.
- **Release / knowledge:** Released July 24, 2026; cutoff not verified in the current platform reference.
- **IDs:** `anthropic/claude-opus-5` / `claude-opus-5`; no verified Zen Free ID.
- **Context window:** 1M tokens; maximum output 128K, verified in Anthropic's platform reference.
- **Modalities:** Text/image input, text output, thinking, and tools.
- **Pricing (as of 2026-11-02):** $5 input / $25 output per MTok; paid legacy model, with no verified free tier.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench 3.0: **42.7%**; Terminal-Bench 2.1 (Vals): **84.6%**; GDPval-AA: **1862**; OSWorld 2.0: **70.6%** (Anthropic, Vals, and BenchLM listings).
- MCP Atlas: **85.8%**; Toolathlon Verified: **80.6%**; AutomationBench: **26.0%**; HLE with tools: **64.7%** (Anthropic system-card rows mirrored by BenchLM).
- BenchLM composite: **79.68/100**, rank **10/1004**, with 103/724 benchmarks covered; this is a partial third-party composite, not an official score.

Reasoning / knowledge:

- GPQA Diamond: **93.2%**; HLE: **64.7%**; AA-LCR: **79.3%**; AA Intelligence Index: **50.8%**; ARC-AGI-2: **90.4%** (BenchLM's cited source rows).

Coding:

- SWE-bench Verified: **96%**; SWE-bench Pro: **79.2%**; DeepSWE: **68.8%**; FrontierCode 1.1 Main: **53.4%**; LiveCodeBench (Vals): **89.0%**; SWE-bench (Vals): **97.0%** (BenchLM's cited leaderboards and system-card rows).

Multimodal / grounded:

- GDP.pdf with tools: **85.5%**; Chartography with tools: **83.0%**; OfficeQA: **78.1%** (Anthropic system-card rows mirrored by BenchLM).

Long context:

- Advertised **1M-token** window; no independently verified retrieval score at 512K+ was found.

## Normalized scores (1–100)

- **Tool use: 92/100.** GDPval 1862, TB2.1 84.6%, MCP Atlas 85.8%, and Toolathlon 80.6% show strong tool work; cross-harness spread caps the score below 95.
- **Reasoning: 94/100.** HLE 64.7%, GPQA 93.2%, LCR 79.3%, and ARC-AGI-2 90.4% are frontier-level, with the AA Index and benchmark variance limiting certainty.
- **Context window: 96/100.** A verified 1M-token window earns the high tier, but no 512K+ retrieval result supports a 100.
- **Multimodal: 85/100.** Image/document-grounded evaluations are strong and PDF-style inputs are evaluated; no audio/video or non-text output was verified.
- **Coding: 94/100.** SWE-bench Verified 96%, Vals SWE-bench 97%, and LiveCodeBench 89% are excellent, while DeepSWE 68.8% keeps the score below the ceiling.
- **Cost efficiency: 55/100.** $5/$25 is materially cheaper than Fable but still a premium paid tier.
- **Overall Score: 92.2/100.** Half-up mean of the five quality dimensions; best fit is demanding agentic coding, research, and computer-use work.

### Deep-research addendum (2026-10-09)

- Anthropic’s Opus page reports a reproduced public Terminal-Bench result of **52.3%** for Opus 5, close to the public leaderboard’s **51.8%**, within reported noise.
- The same documentation reports Terminal-Bench-Science **29.0%** in its reproduction and emphasizes safeguard interventions as a source of benchmark variance.
- Source: https://www.anthropic.com/claude/opus

### Multi-source deep-research addendum (2026-10-09)

- Anthropic’s release material positions Opus 5 as near-Fable capability at $5/$25 per million tokens, with an effort control; independent reporting confirms the price/capability tradeoff, while current terminal evidence is weaker than newer Opus releases.
- Recalculation: **retained 91.0/100**. New evidence improves confidence in cost and effort behavior but does not add enough exact-model independent benchmark coverage to change the five scored dimensions.
- Sources: https://www.anthropic.com/claude/opus ; https://www.axios.com/2026/07/24/anthropic-releases-new-model-opus-5 ; https://platform.claude.com/docs/en/models/overview

### Current refresh (2026-11-02)

- Anthropic's current platform reference verifies the July 24 release, `claude-opus-5` ID, 1M context, 128K maximum output, and $5/$25 pricing. BenchLM's October 29 snapshot adds broad exact-model coverage while warning that its composite remains partial.
- Recalculation: **92.2/100**, replacing the earlier 91.0 after current system-card, Vals, and BenchLM rows materially improved confidence in tool use and coding.
- Sources: https://platform.claude.com/docs/en/models/opus-5/overview ; https://benchlm.ai/models/claude-opus-5 ; https://artificialanalysis.ai/models/claude-opus-5

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: refreshed public web research using first-party Anthropic documentation plus BenchLM, Artificial Analysis, and Vals AI benchmark listings; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 5 platform reference](https://platform.claude.com/docs/en/models/opus-5/overview)
  - [Anthropic Claude Opus 5 announcement](https://www.anthropic.com/research/claude-opus-5)
  - [BenchLM Claude Opus 5 benchmarks](https://benchlm.ai/models/claude-opus-5)
  - [Artificial Analysis Claude Opus 5](https://artificialanalysis.ai/models/claude-opus-5)
  - [Vals AI Claude Opus 5 results](https://www.vals.ai/models/anthropic_claude-opus-5)
