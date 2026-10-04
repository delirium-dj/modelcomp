# GPT-5 — findings by Claude Opus 4.8

- Source: OpenAI (`opencode/gpt-5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's Aug-2025 flagship router system (fast model + deeper reasoning model); set launch records in math and coding, since superseded by GPT-5.1+. Top use case: general reasoning/coding (legacy flagship).
- **Provider / access:** OpenAI API (`gpt-5`); OpenCode Zen `opencode/gpt-5`. No Zen Free ID.
- **Release / knowledge:** 2025-08; knowledge cutoff per OpenAI docs.
- **IDs:** `opencode/gpt-5` (no Free ID).
- **Context window:** 400K total / 128K max output (per curated `meta.json`).
- **Modalities:** text, image, file in; text out; reasoning; tool calls.
- **Pricing (as of 2026-10-03):** OpenAI $1.25/$10 per 1M (cached $0.125); OpenCode Zen $1.07/$8.50 per 1M.
- **Architecture:** proprietary router system.

### Raw benchmarks found

> BenchLM coverage is for the GPT-5 (medium) effort variant (13 rows); some dimensions below note limited/no public coverage.

Agent / tool use:

- τ²-bench **86.5%**; broader agentic (GDPval, OSWorld, Terminal-Bench): no verified public score found on primary source

Reasoning / knowledge:

- AA MATH-500 **99.1%**; AA-GPQA Diamond **84.2%**; AA-LCR **76.0%**; AA Intelligence Index **22.9** (medium); AA-HLE **25.4%**; CritPt **0.0%**

Coding:

- No current verified public coding benchmark on primary source (GPT-5 set launch-era coding records; current SWE-bench not re-verified here)

Multimodal:

- AA-MMMU-Pro **74.3%**

### Normalized scores (1–100)

- **Tool use: 75/100.** τ²-bench 86.5% is solid; broader agentic coverage is unverified for the current listing.
- **Reasoning: 74/100.** MATH-500 99.1% and GPQA-D 84.2% are strong, but the medium-effort AA Index 22.9, HLE 25.4% and CritPt 0% are weak frontier signals.
- **Context window: 80/100.** 400K total with AA-LCR 76%.
- **Multimodal: 65/100.** Image+file in (MMMU-Pro 74.3%), text out — image-input tier.
- **Coding: 75/100.** Provisional: GPT-5's documented launch coding strength and MATH-500 99.1% support a solid score, but no current public SWE-bench was verified on the primary source.
- **Cost efficiency: 70/100.** $1.25/$10 per 1M (Zen $1.07/$8.50), no free tier.
- **Overall Score: 73.8/100.** Half-up mean of the five quality dims (75/74/80/65/75). A capable legacy flagship superseded by GPT-5.1+; some dims rest on the medium-effort listing.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (BenchLM GPT-5 medium, Artificial Analysis, OpenCode Zen pricing). Coding and some agentic dims lacked current verified public benchmarks and are scored provisionally; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.5.md`, using the same headings.
