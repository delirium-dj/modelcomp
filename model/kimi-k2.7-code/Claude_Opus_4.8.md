# Kimi K2.7 Code — findings by Claude Opus 4.8

- Source: Moonshot AI (`opencode/kimi-k2.7-code`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's open-weight code-specialist reasoning MoE (256K context), tuned for terminal/repo coding and MCP tool use. Top use case: cheap open-weights agentic coding.
- **Provider / access:** Moonshot `moonshotai/Kimi-K2.7-Code`; open weights. No Zen Free ID.
- **Release / knowledge:** Kimi K2.7 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/kimi-k2.7-code` (open weights).
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 256K — **meta.json understated; orchestrator should verify.**
- **Modalities:** text in; text out (code-specialist); tool calls yes.
- **Pricing (as of 2026-10-03):** cheap paid / free self-host (open weights). Scored provisionally.
- **Architecture:** open-weight code-specialist reasoning MoE.

### Raw benchmarks found

Agent / tool use:

- MCP Mark Verified **81.1%**; MCP Atlas **76%**; τ²-bench **90.1%**; Terminal-Bench 2.1 (Vals) **67.0%**
- GDPval-AA **1114 Elo**; AA Agentic Index **22.5%**; Kimi Claw 24/7 46.9%

Reasoning / knowledge:

- GPQA Diamond **89.6%**; AA-LCR **79.3%**; AA-HLE **35.0%**; AA Intelligence Index **25.8**; CritPt **10.0%**; AA-Omniscience Index -10.2%

Coding:

- LiveCodeBench **82.1%** (Vals); SWE-bench **78.2%** (Vals); Kimi Code Bench v2 **62.0%**; ProgramBench **53.6%**; AA Coding Index **60.8%**

Multimodal:

- Text-only (code-specialist; no verified image/audio/video input)

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Mark 81.1%, MCP Atlas 76%, τ²-bench 90.1%, TB2.1 67%; GDPval 1114 and AA Agentic Index 22.5% cap it.
- **Reasoning: 76/100.** GPQA-D 89.6%, AA-LCR 79.3%, AA-HLE 35%; AA Index 25.8 and CritPt 10% cap it.
- **Context window: 82/100.** 256K (the 200K–500K tier) with AA-LCR 79.3% (stub's 128K understated).
- **Multimodal: 15/100.** Text-only in/out — no image/audio/video input.
- **Coding: 78/100.** LiveCodeBench 82.1%, SWE-bench 78.2%, Kimi Code Bench v2 62%, ProgramBench 53.6%.
- **Cost efficiency: 85/100.** Cheap paid / free self-host (open weights). Scored provisionally.
- **Overall Score: 64.6/100.** Half-up mean of the five quality dims (72/76/82/15/78). A cheap open-weights code specialist; text-only caps Overall sharply.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Moonshot Kimi K2.7 Code model card, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
