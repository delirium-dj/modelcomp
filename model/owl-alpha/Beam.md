# Owl Alpha — findings by Beam

- Source: OpenRouter/Owl Alpha, `openrouter/owl-alpha`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** OpenRouter stealth model (Apr 28, 2026): 1M context. Free. Identity revealed as Meituan LongCat-2.0-Preview (Jun 28, 2026). AI BENCHY score 4.6/10 (#367 of 400). Retired (Jul 2, 2026). Text-only. Tool calling yes.
- **Provider / access:** OpenRouter (retired); Admix.
- **Release / knowledge:** Surfaced 2026-04-28; retired 2026-07-02.
- **IDs:** `openrouter/owl-alpha`
- **Context window:** 1,048,576 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning not stated; tool calling yes.
- **Pricing (as of 2026-10-17):** Free ($0/$0) during stealth; retired.
- **Architecture:** unknown; revealed as Meituan LongCat-2.0-Preview (1.6T/33-56B active).

### Raw benchmarks found

Agent / tool use:

- Agentic: AI BENCHY score 4.6/10 (#367 of 400). Attempt pass rate 33.3% (7/21 tests correct).
- Tool calling: supported.

Reasoning / knowledge:

- Reasoning: AI BENCHY score 4.6/10. No verified public benchmarks.

Coding:

- Coding: AI BENCHY coding score 5.6/10. Attempt pass rate 33.3%.

Long context:

- 1M window; no published MRCR.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified agentic benchmarks; AI BENCHY 4.6/10 (provisional).
- **Reasoning: 50/100.** No verified reasoning benchmarks; provisional.
- **Context window: 80/100.** 1M window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 50/100.** AI BENCHY coding 5.6/10; provisional.
- **Cost efficiency: 100/100.** Free (retired).
- **Overall Score: 54/100.** Provisional mean; low-confidence (AI BENCHY only, retired, identity revealed as LongCat-2.0-Preview). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed. (Owl Alpha has 1 verified benchmark from AI BENCHY, so not excluded.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenRouter, AI BENCHY, Audesso, BazaarLink, Admix); no verified public benchmarks beyond AI BENCHY. Identity revealed as Meituan LongCat-2.0-Preview (Jun 28, 2026). Retired (Jul 2, 2026). Scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (Owl Alpha has 1 verified benchmark, so not excluded.)