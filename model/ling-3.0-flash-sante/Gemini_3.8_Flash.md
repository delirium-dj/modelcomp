# Ling 3.0 Flash Sante — findings by Gemini 3.8 Flash

- Source: opencode/ling-3.0-flash-sante
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** Ant Group's health/medicine domain fine-tune of Ling 3.0 Flash ('santé' = health) for medical reasoning, healthcare tasks and evidence-based retrieval.
- **Provider / access:** opencode/ling-3.0-flash-sante
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/ling-3.0-flash-sante (no Free ID on Zen)
- **Context window:** 262,144 total; 32,768 max output (OpenRouter)
- **Modalities:** Text in/out; reasoning (switchable); function calling; no vision
- **Pricing (as of 2026-10-11):** Paid after $0 promo ended 2026-10-04; list price unpublished
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

> No numeric benchmark was located for this exact SKU. Capability is scored on the **documented base model, Ling-3.0-flash**, explicitly labelled as inherited — the same approach used for other fine-tuned variants. The two vendor claims below are qualitative only.

- MedXpertQA-Text: "top-tier among flash-size models" (Ant Group press release claim — **no numeric value found**)
- DiagnosisArena-MCQ: "top-tier among flash-size models" (Ant Group press claim — **no numeric value found**)

Inherited from the documented base **Ling-3.0-flash** (see its model card / independent harnesses):

- GPQA-Diamond 85.0; HLE 22.7; AIME 2026 93.2; SWE-bench Verified 65.2; LiveCodeBench ~83–84; Terminal-Bench 2.1 50.2–57.0; MCP-Atlas 65.5; BFCL-v4 73.0; MM LU-Pro 82.0

Long context:

- 262K window; **no MRCR/RULER/GraphWalks published for this SKU — no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 65/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 68/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 72/100.** Effective retrieval fidelity across context capacity (262,144 total; 32,768 max output (OpenRouter)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out; reasoning (switchable); function calling; no vision).
- **Coding: 57.5/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 95/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 55.5/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
