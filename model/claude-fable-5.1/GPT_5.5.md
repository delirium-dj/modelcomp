# Claude Fable 5.1 — findings by GPT 5.5

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Claude Fable 5.1 is Anthropic's high-end Claude model tuned for complex coding, knowledge work, long-running problem solving, and cached-context workflows.
- **Provider / access:** Anthropic Claude API, Claude Code, Claude.ai, and related Anthropic products.
- **Release / knowledge:** Anthropic launched Fable 5.1 and Mythos 5.1 in September 2026; platform docs list a June 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-fable-5-1`
- **Context window:** 1M input / 128K output per Anthropic platform docs.
- **Modalities:** Text and image input; text output; adaptive thinking always on; tool use supported.
- **Pricing (as of 2026-10-09):** Anthropic platform docs list $10/M input and $50/M output, with cache reads at 0.025x base input price versus 0.1 on many other Claude models.
- **Architecture:** Proprietary Anthropic model.

### Raw benchmarks found

Agent / tool use:

- Anthropic launch page (**official**): says Fable 5.1 improves agentic and research benchmark results and defaults to High effort in Claude Code (`https://www.anthropic.com/claude-fable-and-mythos-5-1`).
- Anthropic/DataCamp launch coverage: Terminal-Bench-Science 0.1 **52.6%** for Fable 5.1 versus **24.7%** for Fable 5 (`https://www.datacamp.com/blog/claude-fable-5-1`).
- BenchLM: **30 source-displayable benchmark rows**; strongest eligible category **Agentic at #2** (`https://benchlm.ai/models/claude-fable-5-1`).
- The Model Gap: tracks seven independently run Fable 5.1 benchmark scores; reports Terminal-Bench 2.1 values ranging from **91.4%** (Artificial Analysis) to **85.02%** (vals.ai), with a possible fallback-adjusted **79.03%** (`https://themodelgap.com/models/claude-fable-5-1`).
- Terminal-Bench 2.1: **91.4% / 85.02% / 79.03% adjusted** depending on source and fallback treatment.
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- Anthropic launch page: Fable 5.1 improves multidisciplinary reasoning and agentic scientific research metrics over Fable 5 (`https://www.anthropic.com/claude-fable-and-mythos-5-1`).
- DataCamp coverage: reports Fable 5.1 leads Claude Opus 5 on every Anthropic-published benchmark and keeps list pricing while reducing cache reads (`https://www.datacamp.com/blog/claude-fable-5-1`).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**

Coding:

- Anthropic launch and ITPro coverage: report higher performance across agentic terminal coding and agentic coding metrics, though exact numbers were not visible in accessible snippets (`https://www.itpro.com/technology/artificial-intelligence/anthropic-says-claude-fable-5-1-sets-a-new-standard-for-coding-knowledge-work-and-long-running-problem-solving-tasks`).
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- Anthropic platform docs list 1M context and 128K max output for Claude Fable 5.1; no MRCR/RULER retrieval number was found.

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 2.1 scores around the mid-80s to low-90s, Terminal-Bench-Science 52.6, and BenchLM Agentic #2 support a top tool score, capped by disagreement across harnesses.
- **Reasoning: 93/100.** Official improvements in multidisciplinary reasoning and scientific research place it near frontier level, capped by missing public GPQA/HLE rows.
- **Context window: 96/100.** 1M / 128K context-output capacity is excellent, with cheaper cache reads improving practical long-context reuse.
- **Multimodal: 70/100.** Text and image input are supported, but no broad audio/video input or multimodal output was found.
- **Coding: 94/100.** Official and third-party coverage emphasize agentic coding and terminal-coding gains; capped by missing exact SWE/LCB numbers.
- **Cost efficiency: 70/100.** $10/M input and $50/M output is expensive, but cheaper cache reads materially improve long-context reuse economics.
- **Overall Score: 89/100.** Mean of the five quality dimensions; best fit is Claude Code and long-running coding/research tasks with substantial cached context.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-09
- Method: refreshed public internet research and comparison against the 2026-10-05 file; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
