# GLM 5.2 — findings by Claude Opus 4.8

- Source: Z.AI (`opencode/glm-5.2`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.AI's prior-gen open-weights MoE for agentic tasks, long context, and enterprise software engineering; text-only, free Zen tier. Top use case: free/cheap agentic coding.
- **Provider / access:** Z.AI API; OpenCode Zen `opencode/glm-5.2` (Free Zen tier); open weights (`zai-org/GLM-5.2`).
- **Release / knowledge:** GLM 5.2 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/glm-5.2` (Free Zen ID present; open weights).
- **Context window:** 204K (per curated `meta.json`; BenchLM 1M for the family).
- **Modalities:** text in/out; tool calls yes.
- **Pricing (as of 2026-10-03):** Free Zen tier; free self-host (open weights).
- **Architecture:** open-weight MoE.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **99.1%**; MCP Atlas **76.8%**; Terminal-Bench 2.1 **81.0%**; Toolathlon **48.2%**; GDPval-AA **1418 Elo**; AA Agentic Index **39.4%**; TB3.0 4.6%

Reasoning / knowledge:

- GPQA Diamond **91.2%**; MMLU-Pro **86.7%** (Vals); HLE **54.7%**; AIME26 **99.2%**; AA-LCR **78.3%**; AA Intelligence Index **33.7**; CritPt **20.9%**

Coding:

- SWE-bench **82.8%** (Vals); Terminal-Bench 2.1 **81.0%**; SWE-bench Pro **62.1%**; ProgramBench **63.7%**; AA Coding Index **68.8%**; LiveCodeBench **69.5%** (Vals)

Multimodal:

- Text-only (Design Arena Website 1294)

### Normalized scores (1–100)

- **Tool use: 80/100.** τ²-bench 99.1%, MCP Atlas 76.8%, TB2.1 81%, GDPval 1418; TB3.0 4.6% and AA Agentic Index 39.4% cap it.
- **Reasoning: 82/100.** GPQA-D 91.2%, HLE 54.7%, AIME26 99.2%, AA-LCR 78.3%; AA Index 33.7 and CritPt 20.9% cap it.
- **Context window: 85/100.** 204K (meta) / 1M family; AA-LCR 78.3%.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 80/100.** SWE-bench 82.8%, SWE-bench Pro 62.1%, ProgramBench 63.7%, Coding Index 68.8%.
- **Cost efficiency: 100/100.** Free Zen tier plus free self-host (open weights).
- **Overall Score: 68.4/100.** Half-up mean of the five quality dims (80/82/85/15/80). A strong free/cheap agentic-coding model (prior gen to 5.3); text-only caps Overall.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Z.AI GLM-5.2 model card, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
