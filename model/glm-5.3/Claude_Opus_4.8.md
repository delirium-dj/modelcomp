# GLM 5.3 — findings by Claude Opus 4.8

- Source: Z.AI (`opencode/glm-5.3`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai's flagship open-weights reasoning MoE (753B total / 40B active) — strong agentic coding and 1M-context work, text-only. Top use case: cheap open-weights agentic coding.
- **Provider / access:** Z.AI API; OpenCode Zen `opencode/glm-5.3`; open weights on HF (`zai-org/GLM-5.3`). No Zen Free ID.
- **Release / knowledge:** GLM 5.3 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/glm-5.3` (open weights).
- **Context window:** 1M total (per curated `meta.json`; BenchLM 1M).
- **Modalities:** text in; text out (reasoning); tool calls yes.
- **Pricing (as of 2026-10-03):** Zen $1.40 in / $4.40 out per 1M (cached $0.26); free self-host.
- **Architecture:** 753B total / 40B active reasoning MoE, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **88.2%** (Vals 71.5%); CyberGym **84.5%**; Toolathlon-Verified **73.0%**; GDPval-AA **1769 Elo**
- AA Agentic Index **53.4%**; AA AutomationBench **62.2%**; AA Tau3-Banking **50.3%**; HLE w/ tools **62.5%**; TB4.0 41.9%

Reasoning / knowledge:

- AA Intelligence Index **44.8**; GPQA Diamond **91.7%** (Vals 88.1%); MMLU-Pro **86.8%** (Vals); AA-LCR **79.7%**; AA-HLE **42.3%**; CritPt **19.1%**; MLCR-AA 48.3%

Coding:

- SWE-bench **95.4%** (Vals); Terminal-Bench 2.1 **88.2%**; DeepSWE **66.9%**; FrontierSWE **78.1%**; AA Coding Index **74.8%**; VulcanBench v3 **78.3%**; ProgramBench 19%

Multimodal:

- Text-only (no verified image/audio/video input)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 88.2%, GDPval 1769, CyberGym 84.5%, AA Agentic Index 53.4%, AA AutomationBench 62.2%; TB4.0 41.9% caps the top.
- **Reasoning: 87/100.** AA Index 44.8, GPQA-D 91.7%, AA-LCR 79.7%, MMLU-Pro 86.8%; CritPt 19.1% caps it.
- **Context window: 95/100.** 1M total with AA-LCR 79.7%.
- **Multimodal: 15/100.** Text-only in/out — no image/audio/video input.
- **Coding: 88/100.** SWE-bench 95.4%, TB2.1 88.2%, FrontierSWE 78.1%, Coding Index 74.8%, VulcanBench 78.3%.
- **Cost efficiency: 82/100.** $1.40/$4.40 per 1M (cached $0.26) plus free self-host (open weights).
- **Overall Score: 74.6/100.** Half-up mean of the five quality dims (88/87/95/15/88). A top open-weights agentic-coding model; text-only caps Overall sharply.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Z.AI GLM-5.3 model card, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
