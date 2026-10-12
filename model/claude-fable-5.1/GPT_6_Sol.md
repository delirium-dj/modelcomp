# Claude Fable 5.1 — findings by GPT 6 Sol

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's high-effort reasoning and long-horizon agentic coding model. [Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-1) says Mythos 5.1 shares the underlying model but has different safeguards and restricted access: benchmarks run under Mythos safeguards are not automatically Fable results.
- **Provider / access:** First-party `https://api.anthropic.com` Messages API `claude-fable-5-1` ([official model reference](https://platform.claude.com/docs/en/models/fable-5-1/overview)); [OpenCode Zen `opencode/claude-fable-5-1`](https://pi.dev/models/opencode/claude-fable-5-1) via Anthropic Messages, not an asserted Chat Completions route.
- **Release / knowledge:** September 1, 2026; reliable and training-data cutoff June 2026 ([Anthropic model page](https://platform.claude.com/docs/en/models/fable-5-1/overview)).
- **IDs:** `claude-fable-5-1` (Anthropic API), `opencode/claude-fable-5-1` (Zen); no separate Zen Free ID established by the paid [provider listing](https://pi.dev/models/opencode/claude-fable-5-1).
- **Context window:** 1,000,000 total / 128,000 max output ([Anthropic reference](https://platform.claude.com/docs/en/models/fable-5-1/overview), [Zen listing](https://pi.dev/models/opencode/claude-fable-5-1)).
- **Modalities:** Text/image input, text output; PDFs are processable as documents/images, but native audio/video or non-text output is unverified. Adaptive reasoning is always on; tool calls supported. Anthropic notes forced tool use is unsupported on this release ([model reference](https://platform.claude.com/docs/en/models/fable-5-1/overview)).
- **Pricing (as of 2026-10-12):** $10 input / $50 output / $0.25 cache read / $12.50 five-minute cache write per 1M, batch input/output at half rate ([Anthropic pricing](https://platform.claude.com/docs/en/models/fable-5-1/overview), [Zen listing](https://pi.dev/models/opencode/claude-fable-5-1)); the 75% cache-read cut does not reduce the uncached $10/$50 rates.
- **Architecture:** Proprietary, no disclosed parameter count ([Artificial Analysis](https://artificialanalysis.ai/models/claude-fable-5-1)).

### Raw benchmarks found

Cross-checked [Anthropic's release](https://www.anthropic.com/claude-fable-and-mythos-5-1) with independent [Vals](https://www.vals.ai/models/anthropic_claude-fable-5-1), [Cursor](https://cursor.com/cursorbench), [Artificial Analysis](https://artificialanalysis.ai/models/claude-fable-5-1) and [Collinear](https://cwe-bench.com/?v=v1). [BenchLM](https://benchlm.ai/models/claude-fable-5-1) indexes source-specific rows; it is not an independent evaluator. Anthropic/AA/most Vals evaluations can use Opus fallbacks on safeguard interventions; distinguish assisted outcomes from Fable-only outcomes.

Agent / tool use:

- [Vals Terminal-Bench 2.1 **85.02%** with fallback versus **79.03%** when fallback-assisted tasks count as failures](https://www.vals.ai/models/anthropic_claude-fable-5-1) (23/267 tasks fallback-assisted); independent [AA harness **91.4%**](https://benchlm.ai/models/claude-fable-5-1), not the same run. [Anthropic Terminal-Bench 4.0 **55.8% Fable** / **60.9% Mythos**](https://www.anthropic.com/claude-fable-and-mythos-5-1); [Vals TB4 **58.08% ±3.31**](https://www.vals.ai/models/anthropic_claude-fable-5-1).
- [Anthropic GDPval-AA v2 **1853 Elo**, AutomationBench **31.4%**, OSWorld 2.0 **77.9% partial** or **41.7% strict**](https://www.anthropic.com/claude-fable-and-mythos-5-1) (two grading methods, not two independent runs). [AA GDPval **1756 Elo**, Tau3 Banking **47.2%**](https://benchlm.ai/models/claude-fable-5-1) from an independent harness; don't silently blend Elo results.
- [Vals Index **65.83% ±1.11**](https://www.vals.ai/models/anthropic_claude-fable-5-1) (#4/47 currently displayed), Finance Agent v2 **58.88%**, Legal Research **55.29%**, SRE Bench **22.90% with fallback** or **10.69% without assisted tasks** (per Vals dated note).
- [Collinear CWE-bench v1 **58% deterministic pass@1**, **60% judge-panel pass@1**](https://cwe-bench.com/?v=v1), 120 held-out audit-and-patch tasks in Claude Code. [Anthropic card Toolathlon-Verified **77.8%**](https://benchlm.ai/models/claude-fable-5-1). Claw-Eval: no verified public score found.

Reasoning / knowledge:

- [Anthropic HLE **60.9% without tools / 65.0% with tools**](https://www.anthropic.com/claude-fable-and-mythos-5-1); [AA Index v4.3.2 **53**](https://artificialanalysis.ai/models/claude-fable-5-1), [AA GPQA **93.7%**, HLE **59.1%**, CritPt **29.7%**](https://benchlm.ai/models/claude-fable-5-1).
- [Anthropic system-card-linked ARC-AGI-2 **90%**](https://benchlm.ai/models/claude-fable-5-1); [Vals GPQA Diamond **93.43%**, MMLU Pro **92.38%**, ProofBench v1.1 **100.00%**](https://www.vals.ai/models/anthropic_claude-fable-5-1). Harness-specific results should stay labeled.

Coding:

- [Anthropic card SWE-bench Pro **81.2%**, DeepSWE **67.4%**, SWE Multilingual **89.1%**](https://benchlm.ai/models/claude-fable-5-1); no exact-model SWE-bench Verified score found in the consulted primary results.
- [Vals LiveCodeBench **90.52%** (#1/143), Vibe Code Bench v1.1 **90.26%**](https://www.vals.ai/models/anthropic_claude-fable-5-1); [CursorBench 4.0 **51.8% at max** ($17.28/task)](https://cursor.com/cursorbench), versus older [CursorBench 3.2 **73.4%**](https://www.anthropic.com/claude-fable-and-mythos-5-1) on a different task set.
- [AA-SciCode **63.1%**](https://benchlm.ai/models/claude-fable-5-1); [Collinear security patches **58%**](https://cwe-bench.com/?v=v1) independently corroborate coding but demonstrate room for improvement.

Long context / multimodal:

- [AA-LCR **85.3%**](https://benchlm.ai/models/claude-fable-5-1) on long-context reasoning; [Google's comparative GraphWalks BFS **65.0% at 256K–1M**](https://benchlm.ai/models/claude-fable-5-1), a different benchmark. No verified ≥98% near-1M MRCR retrieval result.
- [Vals MMMU Pro **90.64%**](https://www.vals.ai/models/anthropic_claude-fable-5-1) (#1/93 on displayed cohort), showing strong image understanding despite text-only model output.

### Normalized scores (1–100)

- **Tool use: 92/100.** Independent TB4 ~58%, AA Tau3 47.2% and GDPval 1756 favor frontier agency, but Vals no-fallback TB2.1 79.03% and SRE 10.69% temper reliability.
- **Reasoning: 94/100.** HLE 60.9% without tools, GPQA ~93.5% and strong ProofBench are impressive; CritPt 29.7% and effort/fallback differences cap the score.
- **Context window: 95/100.** Documented 1M context and 128K output reach the top capacity tier; GraphWalks 65% at 256K–1M and no near-window 98% retrieval keep the top mark unearned.
- **Multimodal: 67/100.** Strong MMMU-Pro image reasoning and document workflows, but no native audio/video input or non-text output on this ID.
- **Coding: 96/100.** SWE-Pro 81.2%, LiveCodeBench 90.52% and SciCode 63.1% support excellent engineering; DeepSWE 67.4% and CWE-bench 58% restrain a perfect grade.
- **Cost efficiency: 30/100.** $10/$50 uncached pricing is premium despite $0.25 cached reads and batch discounts; Vals estimates $28.71 per Index test.
- **Overall Score: 89/100.** (92 + 94 + 95 + 67 + 96) / 5 = 88.8, half-up 89; best for difficult text/image research and long-horizon coding where cost and fallbacks are tracked.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh Anthropic release/reference plus independent Vals, AA, Cursor and CWE-bench comparison; normalized scores are interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
