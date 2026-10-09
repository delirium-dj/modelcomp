# Ling 3.0 Flash Santé — findings by DeepSeek 4.1 Flash

- Source: Ant Group / InclusionAI / Ling-3.0-flash-sante (`ling-3.0-flash-sante`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Santé
- **Short description:** Ant Group's healthcare/life-sciences variant of Ling-3.0-flash (released ~2026-09-04) — "Santé" = French for health. A 124B/5.1B-active MoE built on the Ling-3.0-flash base, tuned for health and medicine tasks. No public weights or numeric evals located.
- **Provider / access:** OpenRouter / Novita (model id `ling-3.0-flash-sante-20260904`); OpenAI-compatible. API-only (no HF model card or weights found).
- **Release / knowledge:** ~2026-09-04 (OpenRouter endpoint id; Ant Group press group 2026-09-09); knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.0-flash-sante`.
- **Context window:** 262,144 tokens (OpenRouter/Novita metadata). Max output not separately published.
- **Modalities:** text in; text out. Reasoning + tool/function calling. No image/video.
- **Pricing (as of 2026-10-09):** **$0.042 in / $0.1232 out per 1M**, cache-read **$0.0084** (OpenRouter/Novita).
- **Architecture:** MoE built on Ling-3.0-flash, **124B total / 5.1B active** (OpenRouter + Ant Group press). Weights/license not located; appears API-only.

### Raw benchmarks found

> No numeric benchmark was located for this exact SKU. Capability is scored on the **documented base model, Ling-3.0-flash**, explicitly labelled as inherited — the same approach used for other fine-tuned variants. The two vendor claims below are qualitative only.

- MedXpertQA-Text: "top-tier among flash-size models" (Ant Group press release claim — **no numeric value found**)
- DiagnosisArena-MCQ: "top-tier among flash-size models" (Ant Group press claim — **no numeric value found**)

Inherited from the documented base **Ling-3.0-flash** (see its model card / independent harnesses):

- GPQA-Diamond 85.0; HLE 22.7; AIME 2026 93.2; SWE-bench Verified 65.2; LiveCodeBench ~83–84; Terminal-Bench 2.1 50.2–57.0; MCP-Atlas 65.5; BFCL-v4 73.0; MM LU-Pro 82.0

Long context:

- 262K window; **no MRCR/RULER/GraphWalks published for this SKU — no verified public score found**.

### Normalized scores (1–100)

> All capability dims are inherited from the Ling-3.0-flash base and scored down slightly for a narrow-domain fine-tune; flagged as inherited, not measured on `ling-3.0-flash-sante`.

- **Tool use: 68/100 (inherited from Ling-3.0-flash).** Base MCP-Atlas 65.5 / BFCL 73; narrow health tuning reduces general agent breadth.
- **Reasoning: 74/100 (inherited).** Base GPQA 85.0 / AIME 93.2 / HLE 22.7; held near the base level.
- **Context window: 72/100.** 262K-token window (200K–500K band); no retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 66/100 (inherited, discounted).** Base SWE-bench 65.2%; coding is not the focus of a health fine-tune.
- **Cost efficiency: 99/100.** $0.042/$0.1232 per 1M is near the cheapest tier observed.
- **Overall Score: 59/100.** (68 + 74 + 72 + 15 + 66) / 5 = 59.0 → 59. Best fit: high-volume health/medical text tasks (med QA, clinical summarization) at very low cost; capability dims inherited from the base must be re-checked if Ant publishes its own evals.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research via the OpenRouter endpoint/model metadata and Ant Group press coverage. This SKU publishes no numeric evals; Tool/Reasoning/Coding are inherited from the documented Ling-3.0-flash base and explicitly labelled, following the established fine-tuned-variant precedent. No number was invented. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
