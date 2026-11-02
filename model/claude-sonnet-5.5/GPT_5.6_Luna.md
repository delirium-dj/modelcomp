# Claude Sonnet 5.5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Sonnet 5.5
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's faster, lower-cost 5.5 model for coding, documents, and everyday agents.
- **Provider / access:** Claude API, Bedrock, Google Cloud, Microsoft Foundry; API ID `claude-sonnet-5-5`.
- **Release / knowledge:** 2026-09-28; June 2026 cutoff.
- **IDs:** `anthropic/claude-sonnet-5-5`.
- **Context window:** 1M tokens; 128K output.
- **Modalities:** Text/image input, text output, adaptive thinking, tools.
- **Pricing (as of 2026-11-02):** $2 input / $10 output per MTok; cache reads $0.10, five-minute cache writes $2.50, and one-hour cache writes $4.00 per MTok.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%**; GDPval-AA: **1844**; HLE with tools: **64.5%**; DRACO: **87.0%**; Toolathlon Verified: **77.8%**; OSWorld 2.1: **80.1%** (Anthropic system-card/launch rows mirrored by BenchLM).
- AA AutomationBench: **71.8%**; AA-AnalystAgent: **57.5%** (Artificial Analysis/BenchLM listings).
- BenchLM composite: **81.84/100**, rank **6/1004**, with 77/724 benchmarks covered; this is a partial third-party composite, not an official score.

Reasoning / knowledge:

- AA-LCR: **82.7%**; CritPt: **31.4%**; MLCR-AA: **41.7%**; AA Intelligence Index: **54.2%**; ArXivMath with tools: **95.2%** (BenchLM's cited source rows).

Coding:

- FrontierCode 1.1 Main: **46.2%**; SWE-bench Pro: **81.3%**; DeepSWE: **71.0%**; CursorBench 4.0: **55.5%**; FrontierSWE v2: **61.9%**; AA-SciCode: **61.0%** (BenchLM's cited leaderboards and system-card rows).

Multimodal / grounded:

- ExtractBench: **94.68%**; ParseBench: **69.26%**; Chartography with tools: **90.2%**; BenchCAD Vision2Code with tools: **0.963** (BenchLM's October 28 snapshot and Anthropic-source rows).

Long context:

- Advertised **1M-token** window and 128K maximum output; no independently verified retrieval score at 512K+ was found.

## Normalized scores (1–100)

- **Tool use: 90/100.** TB4.0 70.6%, GDPval 1844, OSWorld 80.1%, and Toolathlon 77.8% show strong practical agency, though it trails Opus on the hardest agentic rows.
- **Reasoning: 91/100.** LCR 82.7%, HLE with tools 64.5%, MLCR 41.7%, and ArXivMath 95.2% are strong; the incomplete independent suite caps certainty.
- **Context window: 96/100.** A verified 1M-token window and 128K output earn the high tier, but no 512K+ retrieval result supports a 100.
- **Multimodal: 90/100.** Image/document input plus strong Chartography, BenchCAD, and extraction results are verified; outputs remain text.
- **Coding: 92/100.** DeepSWE 71%, SWE-bench Pro 81.3%, and FrontierSWE 61.9% are strong, but FrontierCode and CursorBench remain below flagship results.
- **Cost efficiency: 80/100.** $2/$10 plus $0.10 cache reads is good value for a 1M-context frontier model, though not free.
- **Overall Score: 91.8/100.** Half-up mean of the five quality dimensions; best fit is fast, well-scoped coding and everyday agent work.

### Multi-source deep-research addendum (2026-10-09)

- Anthropic documents 1M context, 128K output, adaptive thinking, and $2/$10 pricing. Its launch page says Sonnet 5.5 substantially exceeds Sonnet 5 at much lower cost per task; an independent 98-task run reported 94/98, while still finding Opus 5.5 stronger on harder open-ended work.
- Recalculation: **88.6/100** (coding 90, other dimensions unchanged; half-up mean of 86, 86, 96, 85, 90). The independent coding result supports a modest coding increase from 86 to 90; this remains less than flagship scores because the run is a single external suite.
- Sources: https://platform.claude.com/docs/en/models/sonnet-5-5/overview ; https://www.anthropic.com/claude-sonnet-5-5 ; https://www.reddit.com/r/ClaudeAI/comments/1wx45d6/benchmark_notes_sonnet_55_jumps_from_72_to_9498/

### Current refresh (2026-11-02)

- Anthropic's platform reference remains current and verifies the September 28 release, 1M context, 128K output, and $2/$10 pricing. BenchLM's October 29 page reports an 81.84 composite rank #6/1004 with partial coverage; Artificial Analysis reports Intelligence Index **54**, output speed **136.8 tokens/s**, and a $10.02 cost per Intelligence Index task. Vals' October 29 Index places Sonnet 5.5 first at **70.85%**.
- Recalculation: **91.8/100**, replacing the earlier 88.6 as the broader current agentic, coding, and multimodal evidence supports a higher normalized result.
- Sources: https://platform.claude.com/docs/en/models/sonnet-5-5/overview ; https://benchlm.ai/models/claude-sonnet-5-5 ; https://artificialanalysis.ai/models/claude-sonnet-5-5 ; https://www.vals.ai/benchmarks/vals_index

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: refreshed public web research using first-party Anthropic documentation plus BenchLM, Artificial Analysis, and Vals AI benchmark listings; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Sonnet 5.5 platform reference](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)
  - [Anthropic Claude Sonnet 5.5 announcement](https://www.anthropic.com/claude-sonnet-5-5)
  - [BenchLM Claude Sonnet 5.5 benchmarks](https://benchlm.ai/models/claude-sonnet-5-5)
  - [Artificial Analysis Claude Sonnet 5.5](https://artificialanalysis.ai/models/claude-sonnet-5-5)
  - [Vals Index](https://www.vals.ai/benchmarks/vals_index)
