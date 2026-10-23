# GLM 4.6V Flash — findings by DeepSeek 4.1 Flash

- Source: Z.ai/GLM-4.6V-Flash (`zai-org/GLM-4.6V-Flash`, 9B)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6V Flash
- **Short description:** Z.ai's 9B dense vision-language Flash variant of GLM-4.6V, built for local and low-latency multimodal work — image, video and file input with native multimodal function calling, OCR/document parsing and GUI reading. MIT open weights.
- **Provider / access:** Z.ai API (free Flash tier, `zai-org/GLM-4.6V-Flash`), Hugging Face / ModelScope weights, local runtimes (Ollama/Axolotl). No OpenCode Zen Free ID confirmed.
- **Release / knowledge:** 2025-12-08 (Z.ai GLM-4.6V series launch); knowledge cutoff ~2025-04 per freellm.net.
- **IDs:** `zai-org/GLM-4.6V-Flash`; MIT.
- **Context window:** 128,000 total — Z.ai docs.
- **Modalities:** text, image, video and file in; text out; hybrid reasoning; native multimodal function calling.
- **Pricing (as of 2026-10-23):** Free on the Z.ai Flash tier ($0/$0/cached $0); MIT weights self-host free.
- **Architecture:** dense ~9B multimodal decoder (the 106B GLM-4.6V is the flagship sibling); MIT license.

### Raw benchmarks found

Agent / tool use:

- Native multimodal function calling is vendor-stated; no BFCL/Tau2 number was published for the 9B Flash **no verified public score found**
- GUI/screen-reading tasks: qualitative only

Reasoning / knowledge:

- MMMU (val): **76.0%** (binaryverseai.com review table)
- MMStar: **75.9%**; MUIRBENCH: **77.1%** (binaryverseai.com)

Coding:

- Text-coding benchmarks for the Flash variant: **no verified public score found**

Long context:

- 128K window vendor-stated; no MRCR/RULER figure found.

Multimodal (VL) evidence:

- OCRBench: **86.5%** (binaryverseai.com) / **85.97** (vectorwire.ai aggregate)
- OCR-Bench v2 (EN): **65.1%**; OCRBench v2 (Chinese): **59.5%** (binaryverseai.com; vectorwire.ai)
- MathVista: **82.85** (vectorwire.ai); OmniDocBench-class document parsing: vendor-claimed strong, no exact Flash number found

### Normalized scores (1–100)

- **Tool use: 55/100.** Native multimodal function calling plus GUI/screen reading is a real differentiator, but no BFCL/Tau2 measurement exists for the 9B tier.
- **Reasoning: 68/100.** MMMU 76.0%, MMStar 75.9% and MathVista 82.85 are strong for 9B; no text-reasoning suite (GPQA/HLE) was published (binaryverseai.com; vectorwire.ai).
- **Context window: 65/100.** 128K is the mid-tier band; no long-context retrieval benchmark (Z.ai docs).
- **Multimodal: 82/100.** OCRBench 86.5, OCR-Bench v2 65.1 and native video/file input make document and screen understanding its standout capability (binaryverseai.com; vectorwire.ai).
- **Coding: 45/100.** Text coding was not benchmarked for this variant; the score reflects the Flash positioning, not measured code performance.
- **Cost efficiency: 100/100.** Free API tier plus MIT weights is the price floor.
- **Overall Score: 63/100.** Mean of the five quality dims (55+68+65+82+45)/5 = 63.0 → 63. Best-fit: OCR, invoice/document extraction, screenshot agents and local multimodal assistants.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (Z.ai GLM-4.6V docs and pricing, Z.ai launch post, BinaryVerse review benchmark table, Vector Wire aggregate, freellm.net); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
