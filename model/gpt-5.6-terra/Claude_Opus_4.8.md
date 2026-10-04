# GPT-5.6 Terra — findings by Claude Opus 4.8

- Source: OpenAI (`openai/gpt-5.6-terra`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's GPT-5.6 variant optimized for ground-up agentic research, tool use, long-context reasoning, and code synthesis — with full multimodal input (image/audio/video/PDF). Top use case: omnimodal agentic research and coding.
- **Provider / access:** OpenAI API `openai/gpt-5.6-terra` (Responses API). No Zen Free ID.
- **Release / knowledge:** GPT-5.6 generation (2026); knowledge cutoff not published.
- **IDs:** `openai/gpt-5.6-terra` (no Free ID).
- **Context window:** 1,048,576 (1M) total (per curated `meta.json`; BenchLM 1.05M).
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** paid tier; no exact per-token price verified. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (Vals 77.5%); BrowseComp **87.5%**; OSWorld 2.0 **50.2%**
- τ²-bench **86.3%**; Toolathlon **53.1%**; CyberGym **81.8%**; GDPval-AA **1583 Elo**; AA Agentic Index **43.7%**
- Terminal-Bench 3.0 **20.8%**; ApprenticeBench 16%

Reasoning / knowledge:

- GPQA Diamond **92.9%**; AA Intelligence Index **55.0**; HLE-Verified **51.1%** (AA-HLE 42.9%); MMLU-Pro **86.7%** (Vals)
- ARC-AGI-2 **83.9%**; AA-LCR **83.0%**; CritPt **30.0%**; FrontierMath legacy **84.9%** (v2 T4 68.3%)
- AA-Omniscience Index **0.1%** / Hallucination Rate **87.9%** (reliability caveat)

Coding:

- SWE-bench **95.4%** (Vals); LiveCodeBench **85.9%** (Vals); SWE-bench Pro **63.4%**; DeepSWE **69.6%**
- AA Coding Index **76.7%**; VulcanBench v3 **87.0%**; CursorBench 3.2 **64.9%** (4.0 41.3%); FrontierCode 1.1 Extended **55.8%**

Multimodal:

- MMMU-Pro **80.7%** (82% w/ Python); AA-MMMU-Pro **80.7%**

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 87.4%, BrowseComp 87.5%, τ²-bench 86.3%, GDPval 1583, CyberGym 81.8%; OSWorld 50.2%, TB3.0 20.8% and ApprenticeBench 16% cap it.
- **Reasoning: 86/100.** AA Index 55, FrontierMath 84.9% (T4 68.3%), GPQA-D 92.9%, ARC-AGI-2 83.9%, AA-LCR 83%; Omniscience 0.1% and 87.9% hallucination rate are real drags.
- **Context window: 95/100.** 1M total with AA-LCR 83%.
- **Multimodal: 90/100.** Full image+audio+video+PDF input (MMMU-Pro 80.7%), text out — omnimodal input tier.
- **Coding: 88/100.** SWE-bench 95.4%, LiveCodeBench 85.9%, Coding Index 76.7%, VulcanBench 87%; CursorBench 4.0 41.3% is the floor.
- **Cost efficiency: 65/100.** Paid tier; no exact price verified. Scored provisionally.
- **Overall Score: 88.8/100.** Half-up mean of the five quality dims (85/86/95/90/88). A rare full-omnimodal-input agentic research + coding model; watch the high hallucination rate.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-5.6 launch + system card, Artificial Analysis, BenchLM, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
