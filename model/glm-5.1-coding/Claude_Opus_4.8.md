# GLM 5.1 Coding — findings by Claude Opus 4.8

- Source: Z.AI (`opencode/glm-5.1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Z.AI's open-weights GLM-5.1 MoE for agentic engineering and long-horizon coding; text-only, 203K context. Top use case: cheap open-weights agentic coding.
- **Provider / access:** Z.AI API; OpenCode Zen `opencode/glm-5.1`; open weights. No Zen Free ID.
- **Release / knowledge:** GLM 5.1 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/glm-5.1` (open weights).
- **Context window:** 203K / 128K out (per curated `meta.json`; BenchLM 203K).
- **Modalities:** text in/out; tool calls yes.
- **Pricing (as of 2026-10-03):** $1.40 in / $4.40 out per 1M; free self-host (open weights).
- **Architecture:** open-weight MoE.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **97.7%**; MCP Atlas **71.8%**; τ³-bench **70.6%**; CyberGym **68.7%**; BrowseComp **68%**; TB2.0 **63.5%**
- GDPval-AA **1181 Elo**; AA Agentic Index **25.2%**

Reasoning / knowledge:

- GPQA Diamond **86.2%**; MMLU-Pro **86.9%** (Vals); HLE **52.3%**; AA-LCR **73.7%**; AIME26 **95.3%**; AA Intelligence Index **26.1**; CritPt 4.6%

Coding:

- SWE-bench Pro **58.4%**; LiveCodeBench **81.4%** (Vals); SWE-bench **76.4%** (Vals); SWE-Rebench **62.7%**; AA Coding Index **55.8%**

Multimodal:

- Text-only (no verified image/audio/video input)

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-bench 97.7%, MCP Atlas 71.8%, τ³-bench 70.6%, CyberGym 68.7%, GDPval 1181; AA Agentic Index 25.2% caps it.
- **Reasoning: 78/100.** GPQA-D 86.2%, MMLU-Pro 86.9%, HLE 52.3%, AIME26 95.3%; AA Index 26.1 and CritPt 4.6% cap it.
- **Context window: 82/100.** 203K with AA-LCR 73.7% (the 200K–500K tier).
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 80/100.** SWE-bench 76.4%, SWE-bench Pro 58.4%, LiveCodeBench 81.4%, SWE-Rebench 62.7%.
- **Cost efficiency: 78/100.** $1.40/$4.40 per 1M plus free self-host (open weights).
- **Overall Score: 65.8/100.** Half-up mean of the five quality dims (74/78/82/15/80). A strong cheap open-weights agentic-coding model; text-only caps Overall sharply.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Z.AI GLM-5.1 launch, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
