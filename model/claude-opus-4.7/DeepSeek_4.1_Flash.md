# Claude Opus 4.7 — findings by DeepSeek 4.1 Flash

- Source: Anthropic (`claude-opus-4-7`, hosted as `opencode/claude-opus-4.7`)
- Date: 2026-10-18 (UTC); re-verified 2026-10-18; re-researched 2026-11-06
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-06** (second pass, user-requested). Fresh sources this pass: BenchLM (`claude-opus-4-7`, **29 rows**, **65.23/100, #32 of 1015** — was 17 rows, 65.3, #36 of 228), Anthropic system card, Artificial Analysis, Vals AI, Epoch AI, LlamaIndex.
> **Newly captured rows:** Gert Labs **65.59%**; OSWorld 2.0 **13.9%** (weak); terminalBenchHard **54.5%**; PostTrainBench v1.1 28.6%; ParseBench 63.34% (Nov 5); AA-MMMU-Pro 76.4%; **AA-IFBench 43.6%** (low); ARC-AGI-3 0.2%.
> **Re-verified unchanged:** τ²-bench 74%; TB2.1-Vals 68.5%; ApprenticeBench 7%; Vibe Code 71.00%; SWE-bench (Vals) 82.0%; LiveCodeBench 85.1%; FrontierCode 38.5%; React Native 82.8%; AA-LCR 75.7%; CritPt 5.1%; AA Index 30.9; GPQA 88.5% (AA) / 90.2% (Vals); HLE 33.3% (AA); Omniscience 14.8/44.7/54.1; MMLU-Pro 89.9%; FrontierMath v2 70.175/31.707; pricing $5/$25.
> **No score change:** strong tool-use/coding, middling reasoning profile unchanged; scores held at 88.
> Sources this pass: https://benchlm.ai/models/claude-opus-4-7 · https://artificialanalysis.ai/models/claude-opus-4-7-non-reasoning · https://www.vals.ai/models/anthropic_claude-opus-4-7

> **Re-verified 2026-10-18.** BenchLM (`claude-opus-4-7`, 17 rows) computed an overall **65.3/100 (#36 of 228)**. **No score change.**

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's generally-available Opus-class frontier model (April 2026), a direct upgrade to Opus 4.6 aimed at long-horizon agentic software engineering, tool use, and high-resolution vision. Sits below the restricted Claude Mythos Preview in raw capability but is the strongest broadly released Claude model of its generation.
- **Provider / access:** Anthropic API (`claude-opus-4-7`); Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry; OpenCode route `opencode/claude-opus-4.7`. Messages API with vision input; tool calls and JSON mode supported.
- **Release / knowledge:** 2026-04-16; knowledge cutoff not published.
- **IDs:** `anthropic/claude-opus-4-7`, `opencode/claude-opus-4.7` (no Free tier ID).
- **Context window:** 1,000,000 input tokens / 128,000 max output tokens (the scaffold `meta.json` 128K placeholder understates the real 1M input window).
- **Modalities:** text + image in (up to 2,576 px ≈ 3.75 MP), PDF/document input; text out; extended thinking (`low/medium/high/xhigh/max`); tool calls; JSON mode.
- **Pricing (as of 2026-11-06):** $5.00 / 1M input, $25.00 / 1M output (≤200K prompts); >200K prompts $10 / $37.50. No cached-input discount on tracked providers. Tokenizer maps to ~1.0–1.35× more tokens than Opus 4.6.
- **Architecture:** proprietary (weights undisclosed).

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **77.3%** (best-in-class at release); τ²-bench **74%** (AA); Terminal-Bench 2.0 **69.4%** (Anthropic) / TB2.1 **68.5%** (Vals); terminalBenchHard **54.5%**
- OSWorld-Verified **78.0%** (Anthropic) / OSWorld 2.0 **13.9%** (newer harness); ApprenticeBench (GUI) 7%; Gert Labs **65.59%**; ResearchClawBench 20.7%
- GDPval-AA: **state-of-the-art** per Anthropic (exact Elo undisclosed)

Reasoning / knowledge:

- GPQA Diamond **94.2%** (Anthropic) / 88.5% (AA) / 90.2% (Vals); HLE 46.9% no-tools / **54.7%** with tools (Anthropic) / AA-HLE 33.3%
- AA-LCR **75.7%**; CritPt 5.1%; MMLU-Pro 89.9% (Vals); MMMLU 91.5%
- Artificial Analysis Intelligence Index **30.9**; AA-Omniscience 14.8 / 44.7% / 54.1%; AA-IFBench 43.6%
- FrontierMath v2 T1–3 **70.175%** / Tier-4 **31.707%** (Epoch AI); ARC-AGI-3 0.2%

Coding:

- SWE-bench Verified **87.6%** (Anthropic) / **82.0%** (Vals); SWE-bench Pro 64.3%; LiveCodeBench 85.1% (Vals); CursorBench 70%
- Vibe Code Bench v1.1 71.0%; FrontierCode 1.1 Main 38.5%; React Native Evals 82.8%; PostTrainBench 28.6%

Long context / multimodal:

- No MRCR/RULER; AA-LCR 75.7% is the closest independent long-context signal at 1M input
- CharXiv 82.1% no-tools / 91.0% with tools; AA-MMMU-Pro 76.4%; ParseBench 63.34%

### Normalized scores (1–100)

- **Tool use: 90/100.** Best-in-class MCP-Atlas (77.3%), τ²-bench 74%, OSWorld-Verified 78% and strong partner rows; capped by TB2.0 ~69%, OSWorld 2.0 13.9% and ApprenticeBench 7%.
- **Reasoning: 88/100.** GPQA 94.2% (vendor) and HLE 54.7% with tools are frontier-grade, but AA-LCR 75.7%, AA Index 30.9 and CritPt 5.1% keep it below the top tier.
- **Context window: 95/100.** 1M input / 128K output; lacks a verified ≥98% retrieval-at-512K figure.
- **Multimodal: 76/100.** Text + image (3.75 MP) plus PDF input with strong chart reading (CharXiv 91.0% tools); no audio/video.
- **Coding: 92/100.** SWE-bench Verified 87.6%, Pro 64.3% and LiveCodeBench 85.1% are top-tier; Vals SWE-bench 82.0% caps the top of the range.
- **Cost efficiency: 48/100.** $5/$25 per 1M with a heavier tokenizer is premium frontier pricing.
- **Overall Score: 88/100.** (90 + 88 + 95 + 76 + 92) / 5 = 88.2 → 88. Best fit: production coding agents, multi-tool orchestration, and computer-use workflows where tool reliability outranks price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-06
- Method: re-research pass (user-requested second pass) over public internet research (Anthropic launch/system card, BenchLM re-read 2026-11-05, Artificial Analysis, Vals AI, Epoch AI, LlamaIndex). Captured the Gert-Labs/OSWorld-2.0/TB-Hard/IFBench rows; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Claude Opus 4.7 benchmark scores](https://benchlm.ai/models/claude-opus-4-7)
  - [Artificial Analysis — Claude Opus 4.7 (non-reasoning)](https://artificialanalysis.ai/models/claude-opus-4-7-non-reasoning)
  - [Vals AI — Claude Opus 4.7](https://www.vals.ai/models/anthropic_claude-opus-4-7)
  - [Epoch AI — FrontierMath v2 Tier-4](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
