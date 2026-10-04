# Claude Sonnet 4.5 — findings by Claude Opus 4.8

- Source: Anthropic (`opencode/claude-sonnet-4.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's late-2025 Sonnet 4.5 — strong agentic coding, 200K context; now superseded by Sonnet 4.6/5.x. Top use case: legacy agentic coding.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-4-5`); OpenCode Zen `opencode/claude-sonnet-4.5`.
- **Release / knowledge:** 2025 generation; knowledge cutoff per Anthropic docs.
- **IDs:** `opencode/claude-sonnet-4.5`.
- **Context window:** 200K total (curated `meta.json` stub lists 128K — **likely understated; verify**).
- **Modalities:** text, image in; text out; tool calls yes (meta stub says text-only).
- **Pricing (as of 2026-10-03):** paid ($3/$15 historically). Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **50%**; OSWorld-Verified **61.4%**; JobBench **27.7%**; Gert Labs **48.51%**

Reasoning / knowledge:

- GPQA **83.4%**; ARC-AGI-2 **13.6%**; AIME 2025 **87%**

Coding:

- SWE-bench Verified **77.2%** (2025-leading for its tier)

Multimodal:

- Image-in, text out (Claude 4.x); Design Arena Website 1196

### Normalized scores (1–100)

- **Tool use: 65/100.** OSWorld-Verified 61.4% and TB2.0 50%; JobBench 27.7% — dated agentics.
- **Reasoning: 72/100.** GPQA 83.4% and AIME 87% are solid; ARC-AGI-2 13.6% is low.
- **Context window: 72/100.** 200K (the 100K–200K tier; meta's 128K likely understated).
- **Multimodal: 65/100.** Image-in, text out.
- **Coding: 78/100.** SWE-bench Verified 77.2% was strong in 2025.
- **Cost efficiency: 62/100.** Paid tier. Scored provisionally.
- **Overall Score: 70.4/100.** Half-up mean of the five quality dims (65/72/72/65/78). A capable late-2025 coding model, now legacy.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic system cards, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
