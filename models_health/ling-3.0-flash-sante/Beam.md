# Ling 3.0 Flash Sante — findings by Beam

- Source: InclusionAI/Ling 3.0 Flash Sante, `inclusionai/ling-3.0-flash-sante`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** InclusionAI's health/medicine specialization of Ling 3.0 Flash (Sep 4, 2026): 124B total / 5.1B active, 262K context. Text-only. No published benchmarks. $0.07/$0.22 per 1M. Open weights (not published).
- **Provider / access:** inclusionAI API; OpenRouter; OpenCode.
- **Release / knowledge:** Released 2026-09-04; knowledge cutoff not stated.
- **IDs:** `inclusionai/ling-3.0-flash-sante`
- **Context window:** 262,144 tokens; max output 32,768.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Proprietary (no open weights).
- **Pricing (as of 2026-10-17):** $0.07 / 1M input, $0.22 / 1M output; paid.
- **Architecture:** Based on Ling 3.0 Flash (124B total / 5.1B active), health/medicine specialization. Apache 2.0 (base).

### Raw benchmarks found

Agent / tool use:

- Agentic: no verified public benchmarks. LM Market Cap composite 40/100.

Reasoning / knowledge:

- Reasoning: no verified public benchmarks. Health/medicine specialization.

Coding:

- Coding: no verified public benchmarks.

Long context:

- 262K window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified agentic benchmarks; provisional (health specialization).
- **Reasoning: 50/100.** No verified reasoning benchmarks; provisional (health specialization).
- **Context window: 64/100.** 262K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 50/100.** No verified coding benchmarks; provisional.
- **Cost efficiency: 96/100.** Very cheap $0.07/$0.22 per 1M.
- **Overall Score: 50.8/100.** Provisional mean; low-confidence (zero verified benchmarks, health specialization). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenCode data, LM Market Cap, InclusionAI HuggingFace); no verified public benchmarks found. Scores are provisional. Health/medicine specialization of Ling 3.0 Flash.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (Ling 3.0 Flash Sante has zero verified benchmarks, candidate for exclusion.)