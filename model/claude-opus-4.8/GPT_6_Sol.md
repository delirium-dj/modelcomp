# Claude Opus 4.8 — findings by GPT 6 Sol

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's May 2026 Opus release improving long-running coding and agentic professional work over 4.7. It remains an active legacy API model after the Opus 5 line, not a new version of Opus 5 ([Anthropic release](https://www.anthropic.com/news/claude-opus-4-8), [model reference](https://platform.claude.com/docs/en/models/opus-4-8/overview)).
- **Provider / access:** Anthropic Messages `claude-opus-4-8` at `https://api.anthropic.com`; [OpenCode Zen](https://pi.dev/models/opencode/claude-opus-4-8) `opencode/claude-opus-4-8` uses Anthropic Messages at `https://opencode.ai/zen`. An alternate display slug with `4.8` is a vendor/provider alias, not a new model folder.
- **Release / knowledge:** May 28, 2026; reliable/training knowledge cutoff January 2026 ([Anthropic model reference](https://platform.claude.com/docs/en/models/opus-4-8/overview)).
- **IDs:** `claude-opus-4-8` (first-party); `opencode/claude-opus-4-8` (Zen). No documented Zen Free ID.
- **Context window:** **1,000,000 total, 128,000 output** ([Anthropic reference](https://platform.claude.com/docs/en/models/opus-4-8/overview), [Zen provider listing](https://pi.dev/models/opencode/claude-opus-4-8)). The existing dataset's 200K display field conflicts with these verified primary/provider specifications; this report uses the published 1M model limit.
- **Modalities:** Native text/image in, text out, adaptive reasoning and tools; PDF attachments render through document/vision workflows. No native audio/video input or media output ([Anthropic reference](https://platform.claude.com/docs/en/models/opus-4-8/overview)).
- **Pricing (as of 2026-10-12):** $5 input / $25 output / $0.50 cached read / $6.25 five-minute cache write per 1M; Fast mode $10/$50, batch half-price ([Anthropic](https://platform.claude.com/docs/en/models/opus-4-8/overview), [launch](https://www.anthropic.com/news/claude-opus-4-8)).
- **Architecture:** Proprietary, parameter count undisclosed ([Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-8)).

### Raw benchmarks found

Compared [Anthropic's release/model specifications](https://www.anthropic.com/news/claude-opus-4-8) with independent [Vals](https://www.vals.ai/models/anthropic_claude-opus-4-8), [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-8), [ARC Prize](https://arcprize.org/leaderboard) and [BenchLM's source-linked system-card index](https://benchlm.ai/models/claude-opus-4-8). BenchLM republishes sourced numbers, not a separate experiment. Versioned OSWorld and Terminal-Bench results can differ even for the same model.

Agent / tool use:

- [Anthropic system card TB2.1 **74.6%** with public Terminus-2, GDPval-AA **1593 Elo**, MCP Atlas **82.2%**, Toolathlon **59.9%**, OSWorld-Verified **83.4%**](https://benchlm.ai/models/claude-opus-4-8); [Vals independent TB2.1 **71.9%**, harder TB4 **23.23% ±1.34**](https://www.vals.ai/models/anthropic_claude-opus-4-8). OSWorld-Verified is not the same task set as OSWorld 2.0.
- [Anthropic BrowseComp **84.3%**, DeepSearchQA **93.1%**](https://benchlm.ai/models/claude-opus-4-8); [Vals Index **55.10% ±1.01**](https://www.vals.ai/models/anthropic_claude-opus-4-8) (#15/47 displayed), Finance Agent v2 **53.92%**, SRE Bench **not found in consulted card**, Harvey LAB **9.58%**. Exact Tau3-Banking/Claw-Eval: no verified public result found.
- [AA τ² **94.4%**, GDPval normalized **47.7%**](https://benchlm.ai/models/claude-opus-4-8). These are different units from GDPval Elo and distinct from τ³.

Reasoning / knowledge:

- [Anthropic card GPQA Diamond **93.6%**, HLE **49.8% without tools / 57.9% with tools**](https://benchlm.ai/models/claude-opus-4-8); [AA independently GPQA **92.0%**, HLE **48.7%**, CritPt **20.9%**, Index **42**](https://benchlm.ai/models/claude-opus-4-8).
- [ARC Prize ARC-AGI-2 **72.1%** and ARC-AGI-3 **1.5%**](https://benchlm.ai/models/claude-opus-4-8) (leaderboard-linked); [Vals MMLU-Pro **89.58%**, GPQA **92.42%**](https://www.vals.ai/models/anthropic_claude-opus-4-8).

Coding:

- [Anthropic system card SWE-bench Verified **88.6%**, SWE-Pro **69.2%**, SWE Multilingual **84.4%**](https://benchlm.ai/models/claude-opus-4-8); [Vals SWE-bench **88.60%**, LiveCodeBench **87.82%**, Vibe Code **82.72%**](https://www.vals.ai/models/anthropic_claude-opus-4-8).
- [Cognition FrontierCode 1.1 Main **46.5%**](https://benchlm.ai/models/claude-opus-4-8); [AA SciCode **54.4%**](https://benchlm.ai/models/claude-opus-4-8). [Vals TB4 **23.23%**, ProgramBench **1.00%**](https://www.vals.ai/models/anthropic_claude-opus-4-8) reveal hard long-form limitations despite strong SWE-bench Verified.

Long context / multimodal:

- [AA-LCR **77.7%**](https://benchlm.ai/models/claude-opus-4-8) long-context reasoning; no exact-model ≥98% 512K+ MRCR retrieval score found. A 1M advertised window is capacity, not verified full-window recall.
- [Vals MMMU Pro **86.59%**](https://www.vals.ai/models/anthropic_claude-opus-4-8); [Anthropic card ScreenSpot Pro **87.9%**, CharXiv **80.5% without / 89.9% with tools**, OfficeQA Pro **66.2%**](https://benchlm.ai/models/claude-opus-4-8).

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 ~72–75%, MCP Atlas 82.2% and OSWorld-Verified 83.4% are strong, but TB4 23.23% and domain task variance limit broad autonomy.
- **Reasoning: 90/100.** GPQA ~93%, HLE 49.8% no-tools and ARC-AGI-2 72.1% support serious reasoning; CritPt 20.9% and AA Index 42 cap the ceiling.
- **Context window: 95/100.** Anthropic and Zen independently list 1M/128K; no near-1M retrieval result justifies 100, notwithstanding older 200K local metadata.
- **Multimodal: 68/100.** Good image/PDF understanding on MMMU/CharXiv, but no native audio/video input or non-text output.
- **Coding: 89/100.** SWE Verified 88.6%, SWE-Pro 69.2% and LiveCodeBench 87.82% support strong coding; hard TB4 and ProgramBench limit longer project confidence.
- **Cost efficiency: 42/100.** Premium $5/$25 per 1M with $0.50 cache hits; Fast doubles base rates.
- **Overall Score: 86/100.** (86 + 90 + 95 + 68 + 89) / 5 = 85.6, half-up 86; capable long-context coding/analysis when premium budget and hard-task variance are acceptable.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh Anthropic release/spec, independent Vals and AA, plus directly attributed system-card and ARC results; normalized scores are interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
