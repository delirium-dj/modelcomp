# Qwen 3.8 Flash Next — findings by Claude Opus 4.8

- Source: Alibaba (`opencode/qwen-3.8-flash-next`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's experimental-preview Qwen3.8-Flash-Next — fast multimodal reasoning MoE with 262K context, strong vision/coding. Top use case: cheap multimodal agentic/coding daily driver.
- **Provider / access:** Alibaba Cloud (`qwen3.8-flash-next`); open weights on HF (`Qwen/Qwen3.8-Flash-Next`); OpenCode Zen `opencode/qwen-3.8-flash-next`.
- **Release / knowledge:** Qwen 3.8 generation (2026, preview); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.8-flash-next` (open weights).
- **Context window:** 262K (per BenchLM; curated stub may list 128K — **verify**).
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** low Flash-tier; free self-host (open weights). Scored provisionally.
- **Architecture:** open-weight Flash MoE (preview).

### Raw benchmarks found

Agent / tool use:

- AndroidWorld **84.5%**; CoWorkBench **73.9%**; Toolathlon-Verified **73.5%**; JobBench **55.7%**; Agents' Last Exam **51.2%**; GDPval-AA **1648 Elo**; OSWorld 2.0 19.4%

Reasoning / knowledge:

- GPQA Diamond **91.7%**; AA-LCR **79.7%**; HLE **35.9%**; AA Intelligence Index **39.8**; CritPt **11.1%**

Coding:

- LiveCodeBench v6 **91.9%**; SWE Multilingual **81%**; SWE-bench Pro **62.5%**; DeepSWE **58.7%**; AA Coding Index **73.0%**

Multimodal:

- MathVision **90.6%**; CharXiv **90.6%**; RealWorldQA **88.5%**; LVBench **76.6%** (video); AA-MMMU-Pro **79.8%**

### Normalized scores (1–100)

- **Tool use: 80/100.** AndroidWorld 84.5%, GDPval 1648, Toolathlon 73.5%, CoWorkBench 73.9%; OSWorld 2.0 19.4% caps it.
- **Reasoning: 81/100.** GPQA-D 91.7%, AA-LCR 79.7%, AA Index 39.8; HLE 35.9% and CritPt 11.1% cap it.
- **Context window: 88/100.** 262K with AA-LCR 79.7% (the 200K–500K tier).
- **Multimodal: 87/100.** Image+video in (MathVision/CharXiv 90.6%, LVBench 76.6%), text out.
- **Coding: 84/100.** LiveCodeBench v6 91.9%, SWE Multilingual 81%, SWE-bench Pro 62.5%, Coding Index 73%.
- **Cost efficiency: 90/100.** Low Flash-tier plus free self-host (open weights). Scored provisionally.
- **Overall Score: 84/100.** Half-up mean of the five quality dims (80/81/88/87/84). A strong cheap multimodal agentic/coding Flash (preview).

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Qwen3.8-Flash-Next HF model card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
