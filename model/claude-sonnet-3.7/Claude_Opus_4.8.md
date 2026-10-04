# Claude Sonnet 3.7 — findings by Claude Opus 4.8

- Source: Anthropic (`opencode/claude-sonnet-3.7`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's early-2025 Claude 3.7 Sonnet — the first "hybrid reasoning" Claude (extended thinking), 200K context; now legacy. Top use case: legacy agentic coding.
- **Provider / access:** Anthropic Claude API (`claude-3-7-sonnet`); OpenCode Zen `opencode/claude-sonnet-3.7`.
- **Release / knowledge:** 2025-02 generation; knowledge cutoff per Anthropic docs.
- **IDs:** `opencode/claude-sonnet-3.7`.
- **Context window:** 200K total (curated `meta.json` stub lists 128K — **likely understated; verify**).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes (per the 3.7 line; meta stub says text-only).
- **Pricing (as of 2026-10-03):** paid legacy tier ($3/$15 historically). Scored provisionally.
- **Architecture:** proprietary hybrid-reasoning.

### Raw benchmarks found

> No BenchLM page (404); scored from the model's well-documented 2025 launch profile — dimensions below are conservative estimates, not freshly re-verified 2026 numbers.

Agent / tool use:

- Anthropic SWE-bench Verified era ~62–70%; BrowseComp / OSWorld / GDPval: no verified current public score found on primary source

Reasoning / knowledge:

- GPQA Diamond ~78–84%; HLE ~10–20% (2025 era); AA Index: no verified current value

Coding:

- SWE-bench Verified **~62–70%** (2025 Anthropic-reported); LiveCodeBench high-80s era

Multimodal:

- Image-in, text out (Claude 3.7 line); no strong multimodal benchmarks

### Normalized scores (1–100)

- **Tool use: 68/100.** Capable 2025-era agentic coding (SWE-bench ~62–70%), but far behind 2026 agentics.
- **Reasoning: 72/100.** Hybrid extended thinking was strong in 2025; now well behind current reasoning models.
- **Context window: 55/100.** 200K total (the 100K–200K tier; meta stub's 128K likely understated).
- **Multimodal: 62/100.** Image-in, text out (Claude 3.x vision).
- **Coding: 76/100.** SWE-bench Verified ~62–70% was class-leading in 2025; dated by 2026.
- **Cost efficiency: 62/100.** Paid legacy tier. Scored provisionally.
- **Overall Score: 66.6/100.** Half-up mean of the five quality dims (68/72/55/62/76). A landmark 2025 hybrid-reasoning model, now legacy; several dims are conservative estimates absent current published evals.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic Claude 3.7 documentation). No current BenchLM page (404); scores use the model's documented 2025 launch profile as a conservative basis and are 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
