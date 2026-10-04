# Claude Haiku 4.5 — findings by Claude Opus 4.8

- Source: Anthropic (`opencode/claude-haiku-4.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's late-2025 small/fast Haiku 4.5 — cheap agentic coding; 200K context. Top use case: low-cost high-volume agentic tasks.
- **Provider / access:** Anthropic Claude API (`claude-haiku-4-5`); OpenCode Zen `opencode/claude-haiku-4.5`.
- **Release / knowledge:** 2025 generation; knowledge cutoff per Anthropic docs.
- **IDs:** `opencode/claude-haiku-4.5`.
- **Context window:** 200K total (curated `meta.json` stub lists 128K — **likely understated; verify**).
- **Modalities:** text, image in; text out; tool calls yes (meta stub says text-only).
- **Pricing (as of 2026-10-03):** cheap paid tier. Scored provisionally.
- **Architecture:** proprietary (small).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals) **43.8%**; JobBench **16.0%**

Reasoning / knowledge:

- GPQA Diamond **72.2%** (Vals); MMLU-Pro **78.7%** (Vals)

Coding:

- SWE-bench Verified **73.3%**; VulcanBench v3 **76.2%**; SWE-bench **66.6%** (Vals); LiveCodeBench **41.2%** (Vals)

Multimodal:

- Image-in, text out (Claude 4.x); Design Arena Website 1129

### Normalized scores (1–100)

- **Tool use: 55/100.** TB2.1 43.8% and JobBench 16% — weak agentics.
- **Reasoning: 62/100.** GPQA-D 72.2%, MMLU-Pro 78.7%; small-model reasoning.
- **Context window: 72/100.** 200K (the 100K–200K tier; meta's 128K likely understated).
- **Multimodal: 62/100.** Image-in, text out.
- **Coding: 70/100.** SWE-bench Verified 73.3%, VulcanBench 76.2%; LiveCodeBench 41.2% caps it.
- **Cost efficiency: 80/100.** Cheap small-model tier.
- **Overall Score: 63.8/100.** Half-up mean of the five quality dims (55/62/72/62/70). A cheap small agentic-coding model; reasoning/agentic depth is the limit.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic Haiku 4.5 launch, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
