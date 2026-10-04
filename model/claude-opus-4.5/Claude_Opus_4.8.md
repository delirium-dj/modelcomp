# Claude Opus 4.5 — findings by Claude Opus 4.8

- Source: Anthropic (`anthropic/claude-opus-4.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's Nov-2025 Opus flagship that cut Opus-tier pricing 67% ($5/$25) while reaching SOTA real-world SWE at launch; superseded by 4.6–5.5. Top use case: agentic coding (2025-era).
- **Provider / access:** Anthropic Claude API (`claude-opus-4-5`); AWS/GCP/Azure. No Zen Free ID.
- **Release / knowledge:** 2025-11 generation; knowledge cutoff per Anthropic docs.
- **IDs:** `anthropic/claude-opus-4.5` (no Free ID).
- **Context window:** 200K total (per curated `meta.json`; BenchLM 200K).
- **Modalities:** text, image in; text out; tool calls yes.
- **Pricing (as of 2026-10-03):** $5 in / $25 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **86.3%**; OSWorld-Verified **66.3%**; τ³-bench **70.2%**; WideResearch **76.4%**; MCP-Tasks **71.8%**
- Claw-Eval **59.6%**; TB2.0 59.3%; MCP Atlas 42.3%; Gert Labs 64.23%

Reasoning / knowledge:

- GPQA **87%**; MMLU-Pro **89.5%** (AA 88.9%); MMLU-Redux **96.6%**; AIME26 **95.1%**; HMMT 85.3–93.3%
- AA-LCR **70.7%**; HLE **30.8%**; AA Intelligence Index **23.7** (non-reasoning); CritPt 0.3%

Coding:

- SWE-bench Verified **80.9%**; LiveCodeBench v6 **84.8%**; SWE Multilingual **77.5%**; SWE-bench Pro 57.1%

Multimodal:

- VideoMMMU **84.4%**; MMMU-Pro **70.6%**; MathVision **74.3%**; AA-MMMU-Pro **71.2%**

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-bench 86.3%, OSWorld-Verified 66.3%, WideResearch 76.4%; MCP Atlas 42.3% and JobBench 32.3% cap it.
- **Reasoning: 76/100.** GPQA 87%, MMLU-Redux 96.6%, AIME26 95.1%; AA Index 23.7 and CritPt 0.3% cap it.
- **Context window: 72/100.** 200K (the 100K–200K tier); AA-LCR 70.7%.
- **Multimodal: 70/100.** Image+video in (VideoMMMU 84.4%), text out.
- **Coding: 80/100.** SWE-bench Verified 80.9%, LiveCodeBench v6 84.8%, SWE Multilingual 77.5%.
- **Cost efficiency: 55/100.** $5/$25 per 1M; no free tier.
- **Overall Score: 74.8/100.** Half-up mean of the five quality dims (76/76/72/70/80). A landmark 2025 agentic-coding Opus, now superseded.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic Opus 4.5 system card, Artificial Analysis, BenchLM, Qwen comparison tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
