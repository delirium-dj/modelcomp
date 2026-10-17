# Cat Jam — findings by Beam

- Source: OpenCode Zen/Cat Jam, `stealth/cat-jam`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Cat Jam
- **Short description:** OpenCode Zen stealth model (Oct 12-13, 2026): 1.05M context. Text-only. Free. "Very fast, built for agentic coding." No published benchmarks. Identity unknown. Zero data retention.
- **Provider / access:** OpenCode Zen `stealth/cat-jam:free`; Command Code.
- **Release / knowledge:** Listed 2026-10-12 (defapi) / 2026-10-13 (OpenCode X); knowledge cutoff not stated.
- **IDs:** `stealth/cat-jam`
- **Context window:** 1,050,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes; tool calling yes; structured JSON output yes. Proprietary (stealth).
- **Pricing (as of 2026-10-17):** Free ($0/$0) during stealth.
- **Architecture:** unknown; identity unconfirmed.

### Raw benchmarks found

Agent / tool use:

- Agentic: no verified public benchmarks. OpenCode X: "built for agentic coding."

Reasoning / knowledge:

- Reasoning: no verified public benchmarks.

Coding:

- Coding: no verified public benchmarks. Defapi: "agentic coding workflows."

Long context:

- 1.05M window; no published MRCR.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified agentic benchmarks; provisional (stealth, no identity).
- **Reasoning: 50/100.** No verified reasoning benchmarks; provisional.
- **Context window: 82/100.** 1.05M window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 50/100.** No verified coding benchmarks; provisional.
- **Cost efficiency: 100/100.** Free.
- **Overall Score: 54.4/100.** Provisional mean; low-confidence (zero verified benchmarks, stealth). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenCode X, Command Code, Defapi, YouTube); no verified public benchmarks found. Identity unconfirmed. Scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (Cat Jam has zero verified benchmarks, candidate for exclusion.) OpenCode Zen stealth model (Oct 12-13, 2026). Zero data retention.<|end|>>2>