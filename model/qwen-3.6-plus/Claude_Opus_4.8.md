# Qwen 3.6 Plus — findings by Claude Opus 4.8

- Source: Alibaba (`opencode/qwen-3.6-plus`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's Qwen 3.6 Plus multimodal reasoning model with 1M context, strong vision/multilingual and mid agentics. Top use case: cheap multimodal agentic/coding.
- **Provider / access:** Alibaba Cloud (`qwen3.6-plus`); OpenCode Zen `opencode/qwen-3.6-plus`.
- **Release / knowledge:** Qwen 3.6 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.6-plus`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 1M — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; launch benchmarks are multimodal (VideoMMMU 84%, MMMU 86%) — **meta.json understated; flag for verification.**
- **Pricing (as of 2026-10-03):** low-cost Qwen Plus tier. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **97.7%**; τ³-bench **70.7%**; TB2.0 **61.6%**; Claw-Eval **58.8%**; MCP-Tasks **74.1%**; WideResearch **74.3%**
- GDPval-AA **1066 Elo**; MCP Atlas 48.2%; Toolathlon 39.8%

Reasoning / knowledge:

- GPQA **90.4%**; MMLU-Pro **88.5%**; MMLU-Redux **94.5%**; AIME26 **95.3%**; HMMT **87.8–96.7%**
- AA-LCR **78.3%**; HLE **28.8%**; AA Intelligence Index **27.0**; CritPt **2.9%**

Coding:

- LiveCodeBench v6 **87.1%**; SWE-bench Verified **78.8%**; SWE Multilingual **73.8%**; SWE-bench Pro 56.6%; AA Coding Index 54.5%

Multimodal:

- MMMU **86.0%**; VideoMMMU **84.0%**; MathVision **88.0%**; V* **96.9%**; CharXiv **81.5%**

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-bench 97.7%, τ³-bench 70.7%, WideResearch 74.3%; GDPval 1066, MCP Atlas 48.2 and TB2.0 61.6% cap it.
- **Reasoning: 78/100.** GPQA 90.4%, MMLU-Pro 88.5%, AIME26 95.3%, MMLU-Redux 94.5%; AA Index 27, HLE 28.8% and CritPt 2.9% cap it.
- **Context window: 90/100.** 1M (BenchLM) with AA-LCR 78.3% (meta's 128K understated).
- **Multimodal: 88/100.** Image+video in (MMMU 86%, VideoMMMU 84%, V* 96.9%), text out.
- **Coding: 80/100.** LiveCodeBench v6 87.1%, SWE-bench Verified 78.8%, SWE Multilingual 73.8%.
- **Cost efficiency: 82/100.** Low-cost Qwen Plus tier. Scored provisionally.
- **Overall Score: 82.4/100.** Half-up mean of the five quality dims (76/78/90/88/80). A strong cheap multimodal agentic/coding model; `meta.json` context/modality need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Qwen 3.6 Plus launch + comparison tables, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
