# Claude Opus 5 — findings by GPT 6 Sol

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's proprietary, reasoning-enabled Opus release for complex coding and multi-step knowledge work; it remains available as a legacy model after Opus 5.5. Fast mode and reasoning-effort settings affect latency/cost or compute, not model identity.
- **Provider / access:** Claude API `https://api.anthropic.com` via Messages; [OpenCode Zen](https://pi.dev/models/opencode/claude-opus-5) at `https://opencode.ai/zen` via Anthropic Messages. No Zen Free ID in the priced listing; do not assume a Chat Completions route.
- **Release / knowledge:** July 24, 2026; reliable knowledge/training cutoff May 2026 ([Anthropic model reference](https://platform.claude.com/docs/en/models/opus-5/overview)).
- **IDs:** Anthropic `claude-opus-5`, Zen `opencode/claude-opus-5`; [Anthropic model reference](https://platform.claude.com/docs/en/models/opus-5/overview) also lists cloud-provider IDs.
- **Context window:** 1,000,000 total / 128,000 synchronous output ([Anthropic](https://platform.claude.com/docs/en/models/opus-5/overview), [Pi Zen listing](https://pi.dev/models/opencode/claude-opus-5)); batch-only beta offers 300K output with an extra header.
- **Modalities:** Text and image input, text output ([Anthropic reference](https://platform.claude.com/docs/en/models/opus-5/overview)); PDF documents can be handled as documents/images through the product API, not a separate native video/audio modality. Adaptive thinking, tool calling; Pi advertises strict tools. No native audio/video input or media output verified.
- **Pricing (as of 2026-10-12):** $5 input / $25 output / $0.50 cache read / $6.25 five-minute cache write per 1M (Anthropic and Zen; [official pricing](https://platform.claude.com/docs/en/models/opus-5/overview)); Anthropic Fast mode is roughly 2.5x speed for twice base price ([launch](https://www.anthropic.com/news/claude-opus-5)). No Free route verified.
- **Architecture:** Proprietary; no published parameter count ([Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-5)).

### Raw benchmarks found

Compared Anthropic's [announcement](https://www.anthropic.com/news/claude-opus-5) and [model reference](https://platform.claude.com/docs/en/models/opus-5/overview) to independent [Vals](https://www.vals.ai/models/anthropic_claude-opus-5), [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-5) and [Cursor](https://cursor.com/cursorbench). [BenchLM's linked evidence table](https://benchlm.ai/models/claude-opus-5) provides citation-backed system-card/AA rows, not an independent re-run. Some Vals runs used an Opus 4.8 fallback on refusals; the independent evaluator explicitly supplies a no-fallback comparison.

Agent / tool use:

- [Vals Terminal-Bench 2.1 **84.64%**](https://www.vals.ai/models/anthropic_claude-opus-5) with server-side fallbacks, **81.27%** if fallback-assisted runs count as failures; Vals [Terminal-Bench 4.0 **53.53%**](https://www.vals.ai/models/anthropic_claude-opus-5) on a different, harder version.
- [Vals Index **63.67% ±0.96**](https://www.vals.ai/models/anthropic_claude-opus-5) on its currently displayed cohort (#6/47), Finance Agent v2 **58.63%**, Legal Research **55.29%**, SRE Bench **12.21%**, CUA-bench **9.00%**. The dated Vals launch note quotes an older Index snapshot; use page-date/cohort when comparing ranks.
- [Anthropic system-card evidence](https://benchlm.ai/models/claude-opus-5): Toolathlon-Verified **80.6%**, MCP Atlas **85.8%**, OSWorld 2.0 **70.6%**, GDPval-AA **1862 Elo**, DeepSearchQA **95.0%** ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-5)); independently [AA GDPval normalized **61.1%**](https://benchlm.ai/models/claude-opus-5), a different scale.
- Tau3-Banking / Claw-Eval for this exact ID: no verified public score found.

Reasoning / knowledge:

- [Anthropic card evidence](https://benchlm.ai/models/claude-opus-5): ARC-AGI-2 **90.4%**, ARC-AGI-3 **30.2%**, HLE without tools **56.3%** / with tools **64.7%** (do not compare tool-enabled and tool-free scores as one run).
- [Vals GPQA Diamond **93.43%**](https://www.vals.ai/models/anthropic_claude-opus-5), MMLU Pro **91.59%**, ProofBench v1.1 **99.00%**; [AA Index v4.3.2 **51**](https://artificialanalysis.ai/models/claude-opus-5), [AA HLE **54.9%** and CritPt **29.1%**](https://benchlm.ai/models/claude-opus-5).

Coding:

- [Vals SWE-bench **97.00%**](https://www.vals.ai/models/anthropic_claude-opus-5) on its listed harness; [Anthropic card **96% SWE-bench Verified** and **79.2% SWE-bench Pro**](https://benchlm.ai/models/claude-opus-5): different runs/datasets. Vals LiveCodeBench **89.03%** and Vibe Code Bench v1.1 **88.40%**.
- [CursorBench 4.0 **46.6% at max effort** ($11.95/task) and **43.3% medium**](https://cursor.com/cursorbench); do not confuse with the older CursorBench 3.2. [Anthropic card DeepSWE **68.8%**, FrontierCode 1.1 Main **53.4%**](https://benchlm.ai/models/claude-opus-5).
- [AA SciCode **56.4%**](https://benchlm.ai/models/claude-opus-5): harder scientific coding is less saturated than SWE-bench Verified.

Long context / multimodal:

- 1M advertised window but no verified MRCR or RULER percentage near the full window found in the consulted direct sources; [AA-LCR **79.3%**](https://benchlm.ai/models/claude-opus-5) is long-context *reasoning*, not proof of near-perfect 1M retrieval.
- [Vals MMMU Pro **89.88%**](https://www.vals.ai/models/anthropic_claude-opus-5) (#2/93); [AA MMMU-Pro **84.7%**](https://benchlm.ai/models/claude-opus-5); separate harnesses corroborate strong vision. Anthropic's card gives Chartography **29.6% without tools / 83.0% with tools** ([evidence index](https://benchlm.ai/models/claude-opus-5)).

### Normalized scores (1–100)

- **Tool use: 93/100.** TB2.1 81.27% without fallback, MCP Atlas 85.8% and GDPval 1862 are strong; SRE Bench 12.21% and CUA 9% show task dependence.
- **Reasoning: 94/100.** ARC-AGI-2 90.4%, GPQA 93.43% and HLE 56.3% lead; CritPt 29.1% and the AA Index 51 cap general reasoning confidence.
- **Context window: 96/100.** Verified 1M input and 128K output are excellent; no near-window MRCR result and AA-LCR 79.3% keep the retrieval-conditioned maximum unearned.
- **Multimodal: 68/100.** Image and PDF/document workflows plus MMMU Pro 89.88% are powerful, but no native audio/video input or non-text output is established.
- **Coding: 96/100.** SWE-bench Verified 96–97%, LiveCodeBench 89% and high agent coding quality justify frontier status; CursorBench 46.6% and DeepSWE 68.8% limit the ceiling.
- **Cost efficiency: 40/100.** $5/$25 is premium, caching helps repeated prompts, and fast mode doubles token prices; the [AA evaluation page](https://artificialanalysis.ai/models/claude-opus-5) reports $5.86 per Index task.
- **Overall Score: 89/100.** (93 + 94 + 96 + 68 + 96) / 5 = 89.4, half-up 89; strong for high-stakes text/image coding and professional reasoning if premium spend is acceptable.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh Anthropic docs/announcement, Vals and AA evaluation comparisons, Cursor's primary benchmark, and BenchLM's system-card-linked evidence; scores are normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
