# Claude Opus 4.6 — findings by GPT 6 Sol

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's February 2026 Opus reasoning and agentic-coding release, with adaptive thinking and large-context research support; a pinned, distinct model from Opus 4.5/4.7/4.8 ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-6), [model reference](https://platform.claude.com/docs/en/models/opus-4-6/overview)).
- **Provider / access:** Anthropic **Messages API** `claude-opus-4-6` plus cloud hosts; Bedrock InvokeModel `anthropic.claude-opus-4-6-v1` ([Anthropic model reference](https://platform.claude.com/docs/en/models/opus-4-6/overview)). No verified free Zen ID; cloud API routing differs from OpenAI Chat Completions.
- **Release / knowledge:** February 5, 2026; reliable cutoff May 2025, wider training cutoff August 2025 ([Anthropic docs](https://platform.claude.com/docs/en/models/opus-4-6/overview)).
- **IDs:** `anthropic/claude-opus-4.6` (project's route) and Claude API `claude-opus-4-6` (dateless ID is a pinned snapshot, not a moving alias).
- **Context window:** **1M input context, 128K synchronous output**, available on Claude Platform; beta 300K Batch output needs a header. The launch described 1M as beta and >200K prompts as premium-priced, so check provider eligibility ([Anthropic model reference](https://platform.claude.com/docs/en/models/opus-4-6/overview), [launch](https://www.anthropic.com/news/claude-opus-4-6)).
- **Modalities:** Text/image input → text output, vision, tool use, adaptive thinking with low/medium/high/max effort; no native audio/video I/O ([Anthropic docs](https://platform.claude.com/docs/en/models/opus-4-6/overview)).
- **Pricing (as of 2026-10-13):** Anthropic **$5 input / $25 output / $0.50 cache read** per million under standard context; >200K prompt prices **$10/$37.50** as [launch details](https://www.anthropic.com/news/claude-opus-4-6) specify. Cache writes $6.25/5 min or $10/1 h; Batch discount 50% ([reference](https://platform.claude.com/docs/en/models/opus-4-6/overview)).
- **Architecture:** Proprietary; undisclosed parameter count ([Anthropic docs](https://platform.claude.com/docs/en/models/opus-4-6/overview)).

### Raw benchmarks found

The model **supports both adaptive and no-thinking operation**: independent [Vals thinking/max](https://www.vals.ai/models/anthropic_claude-opus-4-6-thinking) and [Vals nonthinking](https://www.vals.ai/models/anthropic_claude-opus-4-6) should not be collapsed into the same measurement; [BenchLM adaptive](https://benchlm.ai/models/claude-opus-4-6-thinking) and [BenchLM plain](https://benchlm.ai/models/claude-opus-4-6) likewise split variants. Anthropic's [launch](https://www.anthropic.com/news/claude-opus-4-6) cites max/compaction/tool harnesses for several results.

Agent / tool use:

- [Anthropic system-card figures indexed by BenchLM](https://benchlm.ai/models/claude-opus-4-6): Terminal-Bench **2.0 65.4%** (Terminus-2), OSWorld-Verified **72.7%**, independent [Claw-Eval **70.4%**](https://claw-eval.github.io/), [CyberGym **66.6%**](https://cybergym.io/). Anthropic's launch warns harness, effort and sample counts vary.
- [Vals adaptive/max TB2.0 **58.43% ±5.25**, SAGE **51.58% ±3.34**, MortgageTax **68.52% ±0.91**](https://www.vals.ai/models/anthropic_claude-opus-4-6-thinking). [AA-attributed adaptive τ² **92.1%**, APEX-Agents-AA **33.0%**](https://benchlm.ai/models/claude-opus-4-6-thinking). These are different tasks and environments from the vendor's TB score.

Reasoning / knowledge:

- [Anthropic HLE with tools **53.0%** (corrected Feb 23 from 53.1), GPQA **91.3%** (system card attribution)](https://www.anthropic.com/news/claude-opus-4-6); [ARC Prize adaptive/max ARC-AGI-1 **93.0%**, ARC-AGI-2 **68.8%**](https://arcprize.org/leaderboard), as cataloged by [BenchLM adaptive](https://benchlm.ai/models/claude-opus-4-6-thinking).
- [Vals thinking/max GPQA **89.65% ±1.19**, MMLU Pro **89.11% ±0.46**](https://www.vals.ai/models/anthropic_claude-opus-4-6-thinking); [AA adaptive Intelligence Index **31.9** and CritPt **12.6%**](https://benchlm.ai/models/claude-opus-4-6-thinking). AA's plain/nonthinking index is not comparable to adaptive effort.

Coding:

- [Anthropic SWE-bench Verified **80.8%** (25 trials) and TB2.0 **65.4%**, system card attribution](https://benchlm.ai/models/claude-opus-4-6). Independent [Vals thinking SWE-bench **78.20% ±1.85**, LiveCodeBench **84.68% ±1.02**, Vibe Code Bench v1.1 **53.50% ±4.68**](https://www.vals.ai/models/anthropic_claude-opus-4-6-thinking); Vals nonthinking Vibe Code **57.57% ±4.37** comes from a different setting and is not an improvement claim.
- [Cognition FrontierCode 1.1 Main **26.9%**](https://cognition.com/blog/frontier-code-1.1) as attributed by [BenchLM](https://benchlm.ai/models/claude-opus-4-6); no identical-harness SWE-bench Pro estimate inferred from Verified.

Long context / vision:

- [Anthropic MRCR v2 eight-needle **76% at 1M**](https://www.anthropic.com/news/claude-opus-4-6), a retrieval test under the cited vendor conditions; the context window is available subject to provider support.
- [Vals thinking MMMU-Pro **83.87% ±0.88**](https://www.vals.ai/models/anthropic_claude-opus-4-6-thinking); [AA adaptive MMMU-Pro **75.4%**](https://benchlm.ai/models/claude-opus-4-6-thinking) on a separate test configuration. Text/image I/O is not native video or voice support.

### Normalized scores (1–100)

- **Tool use: 83/100.** Claw-Eval 70.4%, OSWorld-Verified 72.7% and TB2.0 58–65% are capable; APEX 33% and task/effort variance limit autonomous reliability.
- **Reasoning: 88/100.** GPQA ~90%, HLE with tools 53% and ARC-AGI-2 68.8% support complex analysis; CritPt 12.6% and cohort/version differences cap inference.
- **Context window: 95/100.** 1M/128K with 76% eight-needle MRCR at 1M, tempered by long-prompt provider restrictions and price uplift.
- **Multimodal: 66/100.** Good image understanding, but only text/image input and text output.
- **Coding: 88/100.** SWE Verified ~78–81%, LiveCodeBench 84.7% and solid TB2.0; FrontierCode 26.9% and Vibe Code 53.5% show harder-codebase limits.
- **Cost efficiency: 48/100.** $5/$25 and >200K uplift are premium, mitigated by prompt caching and Batch.
- **Overall Score: 84/100.** (83 + 88 + 95 + 66 + 88) / 5 = 84.0; suitable for large-context code review and careful agentic research with effort/harness specified.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh Anthropic model reference/announcement cross-checked with Vals thinking/nonthinking and externally attributed evaluations; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
