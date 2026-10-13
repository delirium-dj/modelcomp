# Claude Sonnet 4.6 — findings by GPT 6 Sol

- Source: Anthropic (`claude-sonnet-4-6`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's February 2026 coding and computer-use Sonnet with adaptive thinking and long-context support, distinct from Sonnet 5/5.5 ([Anthropic launch](https://www.anthropic.com/news/claude-sonnet-4-6)).
- **Provider / access:** Anthropic **Messages API** `claude-sonnet-4-6`, Bedrock `anthropic.claude-sonnet-4-6` and other clouds ([model reference](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)); also paid [OpenCode Console messages route](https://opencode.ai/docs/zen/) `claude-sonnet-4-6`. Claude consumer app's free access does not mean a free API route.
- **Release / knowledge:** February 17, 2026; reliable cutoff August 2025 and training cutoff January 2026 ([Anthropic reference](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)).
- **IDs:** `claude-sonnet-4-6` pinned Claude API ID; project `anthropic/claude-sonnet-4.6` human-readable ID.
- **Context window:** **1M context / 128K synchronous output** on current Claude reference; announced in beta at launch, with provider availability to verify. Batch beta supports 300K output with a header ([Anthropic reference](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)). Existing project metadata's 200K is smaller than current official Claude limit.
- **Modalities:** Text/image input → text output, adaptive thinking and tool use; no native audio/video I/O ([Anthropic reference](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)).
- **Pricing (as of 2026-10-13):** Anthropic **$3 input / $15 output / $0.30 cached read per 1M**; cache writes $3.75/5 min, $6/1 h, Batch 50% off ([model reference](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)). Paid OpenCode Console [lists the same base rate](https://opencode.ai/docs/zen/); check long-context/provider surcharges separately.
- **Architecture:** Proprietary, parameter count unpublished ([Anthropic reference](https://platform.claude.com/docs/en/models/sonnet-4-6/overview)).

### Raw benchmarks found

Anthropic's [launch](https://www.anthropic.com/news/claude-sonnet-4-6) gives evaluation caveats; [BenchLM](https://benchlm.ai/models/claude-sonnet-4-6) indexes system-card and independent results, and [Vals](https://www.vals.ai/models/anthropic_claude-sonnet-4-6) evaluates **max effort** with different harnesses. BenchLM's plain/nonthinking AA index should not be equated to the max-effort ARC/Vals measurements.

Agent / tool use:

- [Anthropic system-card attributed TB2.0 **59.1%** (launch notes thinking **off**)](https://benchlm.ai/models/claude-sonnet-4-6); independently attributed [OSWorld-Verified **72.1%**](https://os-world.github.io/) and [Claw-Eval **67.8%**](https://claw-eval.github.io/) in [BenchLM](https://benchlm.ai/models/claude-sonnet-4-6). [Vals TB2.1 **57.30% ±0.65**, Finance Agent v2 **51.03% ±0.33**, Code Migration **39.89% ±4.14**, Harvey Legal Agent **5.00%**](https://www.vals.ai/models/anthropic_claude-sonnet-4-6).
- [AA τ² **79.5%**](https://benchlm.ai/models/claude-sonnet-4-6) attributed to AA, not an OSWorld score; Vals TB2.1 and Anthropic TB2.0 are different versions.

Reasoning / knowledge:

- [Anthropic system-card GPQA **89.9%**, HLE with tools **49%**](https://benchlm.ai/models/claude-sonnet-4-6); [ARC Prize max ARC-AGI-2 **58.3%**](https://arcprize.org/leaderboard) as indexed by [BenchLM](https://benchlm.ai/models/claude-sonnet-4-6); launch footnote says high effort scored 60.4% on its different setup.
- [Vals GPQA Diamond **85.61% ±2.41**, MMLU Pro **87.34% ±0.43**, SAGE **46.58% ±3.43**](https://www.vals.ai/models/anthropic_claude-sonnet-4-6). [AA-attributed CritPt **0.9%** and Intelligence Index **24.7**](https://benchlm.ai/models/claude-sonnet-4-6) are for AA's tested configuration.

Coding:

- [Anthropic SWE-bench Verified **79.6%** over 10 trials](https://benchlm.ai/models/claude-sonnet-4-6); [Vals SWE-bench **77.40% ±1.87**, LiveCodeBench **82.09% ±1.06**, Vibe Code Bench v1.1 **51.48% ±4.64**, ProgramBench **0.50%**](https://www.vals.ai/models/anthropic_claude-sonnet-4-6). [Cognition FrontierCode 1.1 Main **24.3%**](https://cognition.com/blog/frontier-code-1.1) as attributed by [BenchLM](https://benchlm.ai/models/claude-sonnet-4-6).

Long context / multimodal:

- [Anthropic 1M/128K API specification](https://platform.claude.com/docs/en/models/sonnet-4-6/overview); [AA-LCR **68.3%**](https://benchlm.ai/models/claude-sonnet-4-6) is not a confirmed full-1M needle-retrieval percentage; vendor launch 1M was beta.
- [Vals MMMU Pro **83.58% ±0.89**](https://www.vals.ai/models/anthropic_claude-sonnet-4-6) with image input; no verified audio/video comprehension for this text/image model.

### Normalized scores (1–100)

- **Tool use: 75/100.** OSWorld-Verified 72.1%, Claw-Eval 67.8%, TB2.1 57.3%; Harvey 5% and version/harness gaps cap broad autonomy.
- **Reasoning: 82/100.** GPQA ~86–90%, HLE tools 49% and ARC-AGI-2 58.3%; AA CritPt 0.9% limits hardest abstract work.
- **Context window: 91/100.** Current official 1M/128K, but launch beta status, no full-1M retrieval result and AA-LCR 68.3% cap usable confidence.
- **Multimodal: 65/100.** Text/image input with MMMU-Pro 83.6%, no native speech/video or multimodal output.
- **Coding: 80/100.** SWE Verified ~77–80%, LiveCodeBench 82.1%; Vibe Code 51.5%, FrontierCode 24.3% and ProgramBench 0.5% constrain harder work.
- **Cost efficiency: 59/100.** $3/$15 and $0.30 cache read are premium relative to newer Sonnet 5's $2/$10; no free API ID.
- **Overall Score: 79/100.** (75 + 82 + 91 + 65 + 80) / 5 = 78.6, half-up 79; useful for text/image code review where provider context and extra effort are explicitly tested.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh Anthropic model page/launch checked against Vals, AA-attributed and independent benchmark listings; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
