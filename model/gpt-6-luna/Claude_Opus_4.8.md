# GPT 6 Luna — findings by Claude Opus 4.8

- Source: OpenAI (`openai/gpt-6-luna`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6 Luna
- **Short description:** OpenAI's low-cost Luna volume tier of the GPT-6 family, delivering near-frontier DeepSWE at a fraction of the cost; 1M context, image input. Top use case: cheap high-volume agentic/reasoning.
- **Provider / access:** OpenAI API (`gpt-6-luna`); OpenCode Zen `opencode/gpt-6-luna`. No Zen Free ID.
- **Release / knowledge:** GPT-6 generation (2026); knowledge cutoff not published.
- **IDs:** `openai/gpt-6-luna` (no Free ID).
- **Context window:** 1M tokens (per curated `meta.json`; BenchLM 1.05M).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** paid low-cost Luna tier; no exact price verified. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA **1438 Elo**; AA AutomationBench **53.2%**; AA Briefcase **1336 Elo**; GDP.pdf **22.8%**
- AA Terminal-Bench 4.0 12.6%; ExploitGym 11.6%

Reasoning / knowledge:

- AA Intelligence Index **38.1**; AA-HLE **38.5%**; AA-LCR **83.3%**; ARC-AGI-1 **86.7%** / ARC-AGI-2 **59.3%**; CritPt **19.4%**; MLCR-AA 16.1%

Coding:

- DeepSWE **66.6%**; AA-SciCode **54.6%**

Multimodal:

- AA-MMMU-Pro **79.7%**

### Normalized scores (1–100)

- **Tool use: 74/100.** GDPval 1438, AA AutomationBench 53.2%, Briefcase 1336; TB4.0 12.6% and ExploitGym 11.6% cap it.
- **Reasoning: 78/100.** AA Index 38.1, AA-LCR 83.3%, ARC-AGI-2 59.3%, CritPt 19.4%; AA-HLE 38.5% caps it.
- **Context window: 95/100.** 1M total with AA-LCR 83.3%.
- **Multimodal: 66/100.** Image-in (MMMU-Pro 79.7%), text-only out — image-input tier.
- **Coding: 78/100.** DeepSWE 66.6%, SciCode 54.6% (limited public coding coverage).
- **Cost efficiency: 78/100.** Low-cost Luna volume tier. Scored provisionally.
- **Overall Score: 78.2/100.** Half-up mean of the five quality dims (74/78/95/66/78). A cheap GPT-6 volume tier for high-throughput agentic/reasoning work.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-6 Sol/Luna launch + Astra system card, Artificial Analysis, BenchLM, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
