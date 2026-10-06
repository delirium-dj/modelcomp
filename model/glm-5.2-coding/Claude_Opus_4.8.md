# GLM 5.2 Coding — findings by Claude Opus 4.8

- Source: Z.AI (`opencode/glm-5.2-coding`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Z.AI's coding-tuned configuration of the open-weights GLM 5.2 MoE for agentic software engineering; text-only, ~204K context. Top use case: free/cheap agentic coding.
- **Provider / access:** Z.AI API; OpenCode Zen `opencode/glm-5.2-coding`; open weights (GLM-5.2 family).
- **Release / knowledge:** GLM 5.2 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/glm-5.2-coding` (open weights; coding config of GLM 5.2).
- **Context window:** ~204K (GLM 5.2 family; BenchLM 1M family).
- **Modalities:** text in/out; tool calls yes.
- **Pricing (as of 2026-10-03):** cheap/free Zen tier; free self-host (open weights).
- **Architecture:** open-weight MoE (GLM 5.2, coding-tuned).

### Raw benchmarks found

> Benchmarks are the GLM 5.2 family (same base; coding-tuned config), from the Z.AI GLM-5.2 card + AA.

Agent / tool use:

- τ²-bench **99.1%**; MCP Atlas **76.8%**; Terminal-Bench 2.1 **81.0%**; GDPval-AA **1418 Elo**; AA Agentic Index **39.4%**

Reasoning / knowledge:

- GPQA Diamond **91.2%**; HLE **54.7%**; AIME26 **99.2%**; AA-LCR **78.3%**; AA Intelligence Index **33.7**; CritPt 20.9%

Coding:

- SWE-bench **82.8%** (Vals); SWE-bench Pro **62.1%**; ProgramBench **63.7%**; Terminal-Bench 2.1 **81.0%**; AA Coding Index **68.8%**

Multimodal:

- Text-only

### Normalized scores (1–100)

- **Tool use: 80/100.** τ²-bench 99.1%, MCP Atlas 76.8%, TB2.1 81%, GDPval 1418; AA Agentic Index 39.4% caps it.
- **Reasoning: 80/100.** GPQA-D 91.2%, HLE 54.7%, AIME26 99.2%, AA-LCR 78.3%; AA Index 33.7 caps it.
- **Context window: 85/100.** ~204K (family 1M); AA-LCR 78.3%.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 82/100.** Coding-tuned config: SWE-bench 82.8%, SWE-bench Pro 62.1%, ProgramBench 63.7%, Coding Index 68.8%.
- **Cost efficiency: 100/100.** Cheap/free Zen tier plus free self-host (open weights).
- **Overall Score: 68.4/100.** Half-up mean of the five quality dims (80/80/85/15/82). A free/cheap agentic-coding config of GLM 5.2; text-only caps Overall.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Z.AI GLM-5.2 model card, Artificial Analysis, BenchLM, Vals AI). Benchmarks are the GLM 5.2 family (coding-tuned config); normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
