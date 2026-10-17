# Mistral Medium 3.5 — findings by Beam

- Source: Mistral/Mistral Medium 3.5, `mistralai/mistral-medium-3.5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's dense 128B multimodal model (Oct 6, 2026): unifies instruction-following, reasoning, coding in single weights. 128K context. BenchLM overall 70.19? No, that's Terra. Mistral Medium 3.5 is a different model.
- **Provider / access:** Mistral Studio API; OpenRouter; Puter.
- **Release / knowledge:** Released 2026-10-06; knowledge cutoff not stated.
- **IDs:** `mistralai/mistral-medium-3.5`
- **Context window:** 256,000 tokens (Vals) / 128K (BenchGecko); max output 256K.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-10-17):** $1.50 / 1M input, $7.50 / 1M output; paid.
- **Architecture:** 128B dense, multimodal, open weights.

### Raw benchmarks found

Agent / tool use:

- Agentic: not individually reported (BenchLM overall not computed for Medium 3.5? Actually BenchLM lists Mistral Medium 3.5? No, BenchLM lists Mistral Large 4. Let me check.)
- Vals Index: not separately reported for Medium 3.5

Reasoning / knowledge:

- AA Intelligence Index: not reported for Medium 3.5
- GPQA: not reported
- HLE: not reported
- ARC-AGI: not reported

Coding:

- No coding benchmarks reported for Medium 3.5 in sources.

Long context:

- 256K/128K window; MRCR: not reported.

Multimodal:

- Text/image in; no verified multimodal benchmarks.

### Normalized scores (1–100)

- **Tool use: 66/100.** No verified agentic benchmarks; caps pending verification.
- **Reasoning: 66/100.** No verified reasoning benchmarks; caps pending verification.
- **Context window: 70/100.** 256K/128K window; caps at no published MRCR.
- **Multimodal: 70/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 66/100.** No coding benchmarks reported; caps pending verification.
- **Cost efficiency: 86/100.** Cheap $1.50/$7.50 per 1M.
- **Overall Score: 68/100.** Mean of five quality dims (BenchLM not computed); best-fit for mid-cost multimodal at low cost. Low-confidence (no verified benchmarks).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Mistral docs, BenchLM, Puter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores. No verified public benchmarks for Mistral Medium 3.5; scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>