# Claude Opus 4.5 — findings by GPT 6 Sol

- Source: Anthropic (`claude-opus-4-5-20251101`)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's November 2025 premium coding and computer-use Opus with extended thinking, preceding 4.6 and later generations ([Anthropic launch](https://www.anthropic.com/news/claude-opus-4-5), [current API reference](https://platform.claude.com/docs/en/models/opus-4-5/overview)).
- **Provider / access:** Anthropic **Messages API** pinned `claude-opus-4-5-20251101`, alias `claude-opus-4-5`, plus Bedrock/Vertex/Foundry; paid [OpenCode Console `claude-opus-4-5` Messages route](https://opencode.ai/docs/zen/). No free Zen API tier verified.
- **Release / knowledge:** November 24, 2025; reliable knowledge cutoff May 2025, broader training cutoff August 2025 ([Anthropic reference](https://platform.claude.com/docs/en/models/opus-4-5/overview)).
- **IDs:** `claude-opus-4-5-20251101` snapshot, `claude-opus-4-5` alias; [Vals](https://www.vals.ai/models/anthropic_claude-opus-4-5-20251101-thinking) explicitly evaluates **thinking/high**.
- **Context window:** [Anthropic](https://platform.claude.com/docs/en/models/opus-4-5/overview) **200K context / 64K max output**; product compaction extends effective workflow history but not native single-prompt capacity.
- **Modalities:** Text/image input → text output, extended thinking high default, tool calls and vision ([Anthropic reference](https://platform.claude.com/docs/en/models/opus-4-5/overview)); no native audio/video I/O.
- **Pricing (as of 2026-10-15):** [Anthropic model page](https://platform.claude.com/docs/en/models/opus-4-5/overview) **$5 input / $25 output / $0.50 cached read per 1M**; cache writes $6.25/5 min or $10/1 h, Batch 50% off. [OpenCode Console](https://opencode.ai/docs/zen/) matches its listed standard price.
- **Architecture:** Proprietary, no parameter count disclosed ([Anthropic reference](https://platform.claude.com/docs/en/models/opus-4-5/overview)).

### Raw benchmarks found

Anthropic's [launch](https://www.anthropic.com/news/claude-opus-4-5) describes high effort with **200K context**, SWE Verified no thinking and TB a 128K thinking budget; most detailed results are in chart images rather than an accessible table. Independent [Vals high thinking](https://www.vals.ai/models/anthropic_claude-opus-4-5-20251101-thinking) and [AA attributed by BenchLM](https://benchlm.ai/models/claude-opus-4-5-thinking) provide legible model-specific measurements. Historical 2025 Vals #1 rank cannot be read as current 2026 rank.

Agent / tool use:

- [Vals Terminal-Bench 2.0 **53.93% ±5.31**, SAGE **52.09% ±3.40**, MortgageTax **67.69% ±0.92**, TaxEval v2 **74.86% ±0.85**](https://www.vals.ai/models/anthropic_claude-opus-4-5-20251101-thinking). [AA attributed τ² **89.5%**](https://benchlm.ai/models/claude-opus-4-5-thinking); MCP Atlas, OSWorld-Verified and TB4 exact snapshot: **no verified public score found** in reviewed accessible tables.

Reasoning / knowledge:

- [Vals GPQA Diamond **85.86% ±2.48**, MMLU-Pro **87.26% ±0.38**, MedScribe **85.32% ±1.90**](https://www.vals.ai/models/anthropic_claude-opus-4-5-20251101-thinking); [AA GPQA **86.6%**, HLE **30.1%**, CritPt **4.6%**, Intelligence Index **29.1**](https://benchlm.ai/models/claude-opus-4-5-thinking).
- [ARC Prize Opus 4.5 thinking/64K ARC-AGI-1 **80.0%**, ARC-AGI-2 **37.6%**](https://arcprize.org/leaderboard) as attributed in [BenchLM](https://benchlm.ai/models/claude-opus-4-5-thinking). Different reasoning settings and eval versions matter.

Coding:

- [Vals SWE-bench **76.40% ±1.90**, LiveCodeBench **83.67% ±1.04**, Vibe Code Bench v1.1 **20.63% ±3.16**, TB2.0 **53.93%**](https://www.vals.ai/models/anthropic_claude-opus-4-5-20251101-thinking); [Anthropic launch](https://www.anthropic.com/news/claude-opus-4-5) says SWE-bench Verified improves over Sonnet 4.5 but its chart is not legible as a benchmark number in text. Exact SWE-bench Pro or DeepSWE **no verified public score found** in reviewed sources.

Long context / vision:

- [Anthropic 200K/64K API](https://platform.claude.com/docs/en/models/opus-4-5/overview); [AA-LCR **77.3%**](https://benchlm.ai/models/claude-opus-4-5-thinking) under AA's own suite; no measured 200K MRCR eight-needle value in reviewed accessible material.
- [Vals MMMU-Pro **82.95% ±0.90**](https://www.vals.ai/models/anthropic_claude-opus-4-5-20251101-thinking), [AA MMMU-Pro **74.0%**](https://benchlm.ai/models/claude-opus-4-5-thinking) on different harnesses; no native audio/video.

### Normalized scores (1–100)

- **Tool use: 71/100.** Vals TB2.0 53.9% and AA τ² 89.5% show usable tools with different difficulty; hard-agent coverage sparse.
- **Reasoning: 78/100.** GPQA ~86%, HLE 30%, ARC-AGI-2 37.6% and CritPt 4.6% keep 2026 comparisons measured.
- **Context window: 81/100.** 200K/64K native and AA-LCR 77.3%, far below current 1M offerings in capacity.
- **Multimodal: 65/100.** Text/image in → text out with MMMU ~74–83%; no native video/audio.
- **Coding: 78/100.** SWE 76.4%, LCB 83.7%, TB2.0 53.9%, but Vibe Code 20.6% and no hard modern SWE-Pro run verified.
- **Cost efficiency: 45/100.** $5/$25 with $0.50 cache, a premium for a legacy 200K model despite Batch and compaction tools.
- **Overall Score: 75/100.** (71 + 78 + 81 + 65 + 78) / 5 = 74.6, half-up 75; suitable for historical Opus code/research comparisons where exact thinking effort is reproduced.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh Anthropic model reference and launch methods paired with exact-thinking Vals/AA-attributed outcomes; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
