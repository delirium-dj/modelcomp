# Grok 4 — findings by Claude Opus 4.8

- Source: xAI (`xai/grok-4`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's 2025 Grok 4 — reasoning model with tool calling and image/PDF understanding; predecessor of the 4.5+ line. Top use case: general reasoning (now dated).
- **Provider / access:** xAI API (`grok-4`). No Zen Free ID.
- **Release / knowledge:** 2025 generation; knowledge cutoff per xAI docs.
- **IDs:** `xai/grok-4` (no Free ID).
- **Context window:** 256,000 (256K) (per curated `meta.json`; BenchLM 128K for the base listing).
- **Modalities:** text, image, PDF in; text out; tool calls yes.
- **Pricing (as of 2026-10-03):** $3 in / $15 out per 1M ($0.75 cached); higher above 128K tokens.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **74.9%**; Gert Labs **42.34%**

Reasoning / knowledge:

- GPQA Diamond **87.7%**; AA-LCR **68.0%**; AA Intelligence Index **22.5** (non-reasoning); AA-HLE **26.7%**; CritPt **2.0%**

Coding:

- React Native Evals **72.6%**; no current SWE-bench/LiveCodeBench verified on primary source

Multimodal:

- AA-MMMU-Pro **68.8%**

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-bench 74.9%; Gert Labs 42.34% — dated agentics.
- **Reasoning: 68/100.** GPQA-D 87.7% holds, but AA Index 22.5, HLE 26.7%, AA-LCR 68% and CritPt 2% are far behind current models.
- **Context window: 82/100.** 256K (200K–500K tier).
- **Multimodal: 68/100.** Image+PDF in (MMMU-Pro 68.8%), text out.
- **Coding: 65/100.** React Native Evals 72.6%; no current public SWE-bench.
- **Cost efficiency: 60/100.** $3/$15 per 1M ($0.75 cached); no free tier.
- **Overall Score: 69/100.** Half-up mean of the five quality dims (62/68/82/68/65). A 2025-era frontier model now well behind the 4.5+ line.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Artificial Analysis, BenchLM, openrouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
