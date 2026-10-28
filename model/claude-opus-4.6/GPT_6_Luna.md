# Claude Opus 4.6 — findings by GPT-6 Luna

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's proprietary Opus model for difficult coding, research, and long-running agentic work. It added adaptive thinking and a 1M-token context option to the Opus line.
- **Provider / access:** Anthropic Claude API, Messages API; also offered through Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. The model is still available but designated legacy. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-6/overview)
- **Release / knowledge:** Released February 5, 2026; reliable knowledge cutoff May 2025, training-data cutoff August 2025. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-6/overview) · [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-6)
- **IDs:** Claude API / Google-managed: `claude-opus-4-6`; Bedrock: `anthropic.claude-opus-4-6-v1`. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-6/overview)
- **Context window:** 1M tokens; 128K maximum synchronous output, with up to 300K output in the Message Batches API beta. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-6/overview)
- **Modalities:** Text and image input, text output; adaptive thinking with default effort `high`, configurable low/medium/high/max. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-6/overview)
- **Pricing (as of 2026-10-28):** $5 input / $25 output per MTok; 5-minute cache writes $6.25, 1-hour cache writes $10, cache reads $0.50; Batch API input/output are 50% off. For prompts over 200K tokens, Anthropic's February launch announcement lists premium 1M-context pricing of $10 input / $37.50 output per MTok. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-6/overview) · [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-6)
- **Architecture:** Proprietary; Anthropic has not published parameter count or architecture details. [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-6)

### Raw benchmarks found

> Results are configuration-sensitive: Anthropic distinguishes tool-enabled and no-tool HLE, and the independent sources include high-effort, non-reasoning, and adaptive variants. Scores below retain source and setup labels rather than treating all runs as interchangeable.

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** on Anthropic's system-card evaluation, as indexed by BenchLM. Vals AI separately reports **78.2%** for Terminal-Bench 2.1; these are different benchmark revisions. [Anthropic announcement/system card](https://www.anthropic.com/claude-opus-4-6-system-card) · [BenchLM](https://benchlm.ai/models/claude-opus-4-6) · [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.6/)
- BrowseComp: **83.7%**; GDPval-AA: **1,619 Elo**; Tau²-Bench: **84.8%**; OSWorld-Verified: **72.7%**; Toolathlon: **56.8%**. These are independent benchmark-board records. [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.6/) · [BenchLM](https://benchlm.ai/models/claude-opus-4-6)
- Claw-Eval: **70.4%**; Claw-Eval-Live: **66.7%**. They are separate benchmarks/leaderboards, not a single Claw-Eval score. [BenchLM](https://benchlm.ai/models/claude-opus-4-6) · [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.6/)
- ClawProBench: **no verified public result found**.

Reasoning / knowledge:

- GPQA Diamond: **91.3%** in Anthropic's system-card table, indexed by BenchLM; Artificial Analysis lists **84.0%** for its own GPQA Diamond run. This difference is retained as a configuration/harness discrepancy. [Anthropic system card](https://www.anthropic.com/claude-opus-4-6-system-card) · [BenchLM](https://benchlm.ai/models/claude-opus-4-6) · [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-6)
- Humanity's Last Exam: **53.0% with tools** in Anthropic's February 23, 2026 update (web search, web fetch, code execution, programmatic tool calling, compaction, and max effort); Meta's comparison reports **40% without tools**. BenchmarkList lists **53.3%** with tools and **36.2% ± 2.03** on its HLE text-only record; Artificial Analysis lists **19.1%** on its separate legacy AA-HLE task. These are not matched evaluations. [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-6) · [Meta comparison](https://ai.meta.com/blog/introducing-muse-spark-msl/) · [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.6/) · [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-6)
- ARC-AGI-2: **69.2%**; MMLU-Pro: **89.7%** in BenchmarkList's model record. [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.6/)
- BenchLM aggregate: **62.51/100, rank #50 of 1,001**, with partial coverage (51 of 716 benchmarks); this is not the project's normalized score. Artificial Analysis' current model page is deprecated and does not provide a refreshed v5 Intelligence Index result. [BenchLM](https://benchlm.ai/models/claude-opus-4-6) · [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-6)
- Omniscience accuracy / hallucination rate: **45.8% / 80.1%** on Artificial Analysis' benchmark table. [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-6)

Coding:

- SWE-bench Verified: **80.8%** on Anthropic's system-card run averaged over 25 trials; Anthropic reports **81.42%** with a prompt modification. [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-6) · [Anthropic system card](https://www.anthropic.com/claude-opus-4-6-system-card)
- Terminal-Bench 2.0: **65.4%** (Anthropic system card indexed by BenchLM); Terminal-Bench 2.1: **78.2%** (Vals AI record). [BenchLM](https://benchlm.ai/models/claude-opus-4-6) · [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.6/)
- LiveCodeBench: **88.8%** in BenchmarkList and **84.7%** in Vals AI's separate run; Vibe Code Bench v1.1: **57.6%**; SWE-bench Pro: **57.3%**; SciCode: **51.9%**. [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.6/) · [Vals AI](https://www.vals.ai/models/anthropic_claude-opus-4-6) · [BenchLM](https://benchlm.ai/models/claude-opus-4-6)

Multimodal:

- MMMU-Pro: **77.3%** in Anthropic's system card, indexed by BenchLM; Vals AI reports **83.9%**, and Artificial Analysis lists **72.5%** on its independent AA-MMMU-Pro run. [Anthropic system card](https://www.anthropic.com/claude-opus-4-6-system-card) · [BenchLM](https://benchlm.ai/models/claude-opus-4-6) · [Vals AI](https://www.vals.ai/models/anthropic_claude-opus-4-6) · [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-6)

Long context:

- Anthropic reports **76%** on the 8-needle, 1M-token MRCR v2 test. The 1M context was announced in beta on the Claude Developer Platform. [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-6)

### Normalized scores (1–100)

- **Tool use: 86/100.** BrowseComp 83.7%, GDPval-AA 1,619 Elo, and Tau²-Bench 84.8% are strong, but Terminal-Bench 2.0 is 65.4%, OSWorld-Verified 72.7%, and board runs differ by benchmark revision/configuration.
- **Reasoning: 89/100.** GPQA reaches 91.3% on Anthropic's system-card run and HLE reaches 53.0% with tools, but no-tool HLE is 40% and independent HLE/GPQA runs vary materially.
- **Context window: 95/100.** The 1M-token context reaches the methodology's ≥1M tier; Anthropic's 76% MRCR v2 retrieval is strong but below the 98% threshold for a 100.
- **Multimodal: 65/100.** Official specs confirm image input, with text output; the model has no verified video/audio input or non-text output.
- **Coding: 87/100.** SWE-bench Verified is 80.8%, LiveCodeBench ranges 84.7–88.8%, and Terminal-Bench 2.1 is 78.2%; SWE-bench Pro 57.3% and SciCode 51.9% remain below the methodology's coding-frontier references.
- **Cost efficiency: 50/100.** Base $5/$25 per MTok sits between the methodology's $3/$15 and $10/$50 reference points; prompts above 200K cost $10/$37.50 per MTok, and long-context use is therefore substantially more expensive.
- **Overall Score: 84/100.** Half-up mean of the five quality dimensions: (86 + 89 + 95 + 65 + 87) / 5 = 84.4. A strong fit for coding, research, and tool-assisted professional tasks with large documents when premium pricing and output latency are acceptable; use the high-context retrieval figure with its beta/pricing caveats.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent Bing web searches, then cross-checked Anthropic's exact model documentation and launch announcement/system-card references against Artificial Analysis, BenchmarkList, BenchLM, and Vals AI. Evaluation settings and differences are labeled. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
