# Kimi K2.6 — findings by Claude Opus 4.8

- Source: Moonshot AI (`opencode/kimi-k2.6`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight reasoning MoE, multimodal input, strong vision/coding; 256K context. Top use case: cheap open-weights multimodal coding.
- **Provider / access:** Moonshot `moonshotai/Kimi-K2.6`; open weights. No Zen Free ID.
- **Release / knowledge:** Kimi K2.6 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/kimi-k2.6` (open weights).
- **Context window:** 256K (per BenchLM; curated stub lists 128K — **understated; verify**).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** cheap paid / free self-host (open weights). Scored provisionally.
- **Architecture:** open-weight reasoning MoE.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **95.9%**; BrowseComp **83.2%**; OSWorld-Verified **73.1%**; DeepSearchQA **92.5%**; WideResearch **80.8%**
- MCP Atlas **55.9%**; Claw-Eval **62.3%**; TB2.0 66.7%; GDPval-AA 1115 Elo; AA Agentic Index 22.1%

Reasoning / knowledge:

- GPQA **90.5%**; MMLU-Pro **87.6%** (Vals); AIME26 **96.4%**; AA-LCR **81.0%**; HLE **34.7%**; AA Intelligence Index **27.0**; CritPt 8%

Coding:

- LiveCodeBench v6 **89.6%**; SWE-bench Verified **80.2%**; SWE Multilingual **76.7%**; LiveCodeBench **86.8%** (Vals); AA Coding Index **61.8%**

Multimodal:

- MMMU-Pro **79.4%**; MathVision **87.4%**; V* **96.9%**; CharXiv **80.4%**

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-bench 95.9%, DeepSearchQA 92.5%, OSWorld-Verified 73.1%; MCP Atlas 55.9%, GDPval 1115 and AA Agentic Index 22.1% cap it.
- **Reasoning: 76/100.** GPQA 90.5%, AIME26 96.4%, AA-LCR 81%; AA Index 27 and CritPt 8% cap it.
- **Context window: 82/100.** 256K (200K–500K tier) with AA-LCR 81% (stub's 128K understated).
- **Multimodal: 82/100.** Image-in (MMMU-Pro 79.4%, MathVision 87.4%, V* 96.9%), text-only out.
- **Coding: 82/100.** LiveCodeBench v6 89.6%, SWE-bench Verified 80.2%, SWE Multilingual 76.7%, Coding Index 61.8%.
- **Cost efficiency: 82/100.** Cheap paid / free self-host (open weights). Scored provisionally.
- **Overall Score: 79.6/100.** Half-up mean of the five quality dims (76/76/82/82/82). A strong open-weights multimodal coding model; mid agentic-index and reasoning caps.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Moonshot Kimi K2.6 tech blog + model card, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
