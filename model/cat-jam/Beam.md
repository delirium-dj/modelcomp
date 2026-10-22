# Cat Jam — findings by Beam

- Source: OpenCode Zen/Cat Jam, `stealth/cat-jam`
- Date: 2026-10-22 (UTC, re-run; prior 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Cat Jam
- **Short description:** OpenCode Zen stealth model (Oct 12-13, 2026): 1.05M context. Text-only. Free. "Very fast, built for agentic coding." No published standard benchmarks. Identity unknown. Zero data retention. **Deprecated Oct 16, 2026** — replaced by Reflection's Beam (501B open-weight; AA Intelligence 30). Retained here for historical comparison.
- **Provider / access:** OpenCode Zen `stealth/cat-jam:free`; Command Code.
- **Release / knowledge:** Listed 2026-10-12 (defapi) / 2026-10-13 (OpenCode X); knowledge cutoff not stated.
- **IDs:** `stealth/cat-jam`
- **Context window:** 1,050,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes; tool calling yes; structured JSON output yes. Proprietary (stealth).
- **Pricing (as of 2026-10-17):** Free ($0/$0) during stealth.
- **Architecture:** unknown; identity unconfirmed.

### Raw benchmarks found

Agent / tool use:

- Agentic: no verified public benchmarks. OpenCode X: "built for agentic coding." **New (Oct 22):** Artificial League (Grid Blotto game): Cat Jam LP 783, #21, 3W 4L, 43% win rate (non-standard). Deprecated Oct 16 on OpenCode (replaced by Reflection Beam).

Reasoning / knowledge:

- Reasoning: no verified public benchmarks. **New (Oct 22):** StealthMark SVG (visual-generation, non-standard): Selfie 54.6, Newton's Mirror 19.9, Ground Truth 30.9, Mona Lisa 30.3, Beach 48.1. Successor Reflection Beam AA Intelligence 30.

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
- **Overall Score: 54.4/100.** Provisional mean unchanged (no new standard benchmarks; StealthMark SVG + Artificial League Grid Blotto are non-standard). Low-confidence (stealth, deprecated Oct 16). Self-exclusion candidate.

---

---

## Research update — 2026-10-22 (re-run)

≥5 independent web searches performed (OpenCode Zen, Artificial League, StealthMark, Command Code, Reddit/HN discussion, Vercel AI Gateway). Key findings:
- Cat Jam deprecated Oct 16, 2026 on OpenCode; replaced by Reflection's Beam (501B open-weight, AA Intelligence 30). Vercel listing removed Oct 21.
- No standard benchmarks published for Cat Jam (no SWE-bench, Terminal-Bench, HLE, GPQA, etc.).
- Non-standard: StealthMark SVG benchmarks (Selfie 54.6, Newton's Mirror 19.9, Ground Truth 30.9, Mona Lisa 30.3, Beach 48.1); Artificial League Grid Blotto (LP 783, #21, 3W/4L, 43% win rate).
- Context window 1.05M confirmed (Command Code); free; zero data retention.

Score changes: None (no standard benchmark evidence). Overall stays 54.4. Scores remain provisional/low-confidence. Self-exclusion candidate remains.

Sources:
- https://opencode.ai (OpenCode Zen changelog)
- https://artificialleague.ai (Artificial League)
- https://stealthmark.ai (StealthMark)
- https://commandcode.ai (Command Code)
- https://vercel.com/ai-gateway (Vercel AI Gateway)

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22 (re-run)
- Method: public internet research (OpenCode X, Command Code, Defapi, YouTube); no verified public benchmarks found. Identity unconfirmed. Scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (Cat Jam has zero verified benchmarks, candidate for exclusion.) OpenCode Zen stealth model (Oct 12-13, 2026). Zero data retention.<|end|>>2>