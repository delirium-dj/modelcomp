# Ling 3.0 Flash VL — findings by Beam

- Source: Ant Group/Ling 3.0 Flash VL, `ant-group/ling-3.0-flash-vl`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** Ant Group's vision-language model (Sep 3, 2026): part of Ling 3.0 Flash family. Vals Index not separately reported. Multimodal (text/image).
- **Provider / access:** Ant Group API; OpenRouter.
- **Release / knowledge:** Released 2026-09-03; knowledge cutoff not stated.
- **IDs:** `ant-group/ling-3.0-flash-vl`
- **Context window:** Not published in sources; likely 128K-1M (family).
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-17):** Not published in sources.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

- No verified public benchmark numbers found for Ling 3.0 Flash VL specifically in search results.
- Vals AI lists Ling 3.0 Flash Fin (finance variant) but not the VL variant.
- BenchLM does not list a separate entry for Ling 3.0 Flash VL.

### Normalized scores (1–100)

- **Tool use: 60/100.** No verified benchmarks; provisional.
- **Reasoning: 60/100.** No verified benchmarks; provisional.
- **Context window: 70/100.** Context size not published; provisional.
- **Multimodal: 70/100.** Text/image in; provisional.
- **Coding: 60/100.** No verified benchmarks; provisional.
- **Cost efficiency: 75/100.** Pricing not published; provisional.
- **Overall Score: 64/100.** Provisional mean; low-confidence (no verified benchmarks). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Vals AI, BenchLM, OpenRouter); no verified public benchmarks found for Ling 3.0 Flash VL. Scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead.