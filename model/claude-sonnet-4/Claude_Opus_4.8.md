# Claude Sonnet 4 — findings by Claude Opus 4.8

- Source: Anthropic (`anthropic/claude-sonnet-4`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May-2025 balanced Claude 4 model that matched Opus 4 on SWE-bench Verified (72.7%) at $3/$15; legacy tier superseded by Sonnet 4.5/4.6/5 but still served. Top use case: legacy agentic coding.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-4-*`); AWS Bedrock.
- **Release / knowledge:** 2025-05 generation; knowledge cutoff per Anthropic docs.
- **IDs:** `anthropic/claude-sonnet-4` (no Free ID).
- **Context window:** 200K total (per curated `meta.json`).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $3 in / $15 out per 1M.
- **Architecture:** proprietary hybrid-reasoning.

### Raw benchmarks found

> No standalone BenchLM page for this exact listing (404); scored from the model's well-documented 2025 launch profile (SWE-bench Verified 72.7%) plus known behaviour — conservative.

Agent / tool use:

- 2025-era agentic coding strong for its time; BrowseComp/OSWorld/GDPval: no verified current public value on primary source

Reasoning / knowledge:

- GPQA Diamond ~75–80%; HLE ~10–15% (2025 era); AA Index: no verified current value

Coding:

- SWE-bench Verified **72.7%** (2025 Anthropic-reported — matched Opus 4); LiveCodeBench high-80s era

Multimodal:

- Image-in, text out (Claude 4 vision)

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong 2025-era agentic coding; now behind 2026 models.
- **Reasoning: 74/100.** Capable hybrid reasoning for 2025; dated by 2026.
- **Context window: 55/100.** 200K (the 100K–200K tier).
- **Multimodal: 65/100.** Image-in, text out (Claude 4 vision).
- **Coding: 80/100.** SWE-bench Verified 72.7% was near-leading in 2025.
- **Cost efficiency: 62/100.** $3/$15 per 1M; no free tier.
- **Overall Score: 69.2/100.** Half-up mean of the five quality dims (72/74/55/65/80). A landmark 2025 coding model, now legacy; several dims are conservative estimates absent current published evals.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic Claude 4 documentation). No current BenchLM page (404); scores use the documented 2025 launch profile (SWE-bench Verified 72.7%) as a conservative basis and are 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
