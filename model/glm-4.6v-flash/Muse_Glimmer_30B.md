# GLM 4.6V Flash — findings by Muse Glimmer 30B

- Source: Z.ai / GLM-4.6V-Flash (`zai-org/GLM-4.6V-Flash`, 9B)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM 4.6V Flash
- **Short description:** Z.ai's free dense ~9B multimodal Flash variant of GLM-4.6V, built for low-latency visual function calling, grounding and document/video input. MIT open weights. Visual assistant / screenshot agent positioning.
- **Provider / access:** Z.ai API free Flash tier `zai-org/GLM-4.6V-Flash`, Hugging Face / ModelScope weights, local runtimes. Chat Completions API. No OpenCode Zen Free ID confirmed.
- **Release / knowledge:** 2025-12-08 launch announcement for GLM-4.6V series (Z.ai research); knowledge cutoff ~2025-04 per third-party listings.
- **IDs:** `zai-org/GLM-4.6V-Flash`; MIT.
- **Context window:** 128,000 total tokens — vendor stated in meta, Z.ai docs.
- **Modalities:** Input text, image, video, file; Output text. Reasoning hybrid, native multimodal function calling, grounding yes, tool calls supported. No audio in/out.
- **Pricing (as of 2026-10-25):** Free on Z.ai Flash tier ($0 input / $0 output / $0 cached). MIT weights self-host free.
- **Architecture:** Dense ~9B multimodal decoder; MIT license. Sibling to 106B GLM-4.6V flagship.

### Raw benchmarks found

> Sources: Z.ai GLM-4.6V series launch post 2025-12, Z.ai model meta, BinaryVerse review benchmark table, Vector Wire aggregate listing, freellm.net listing. Three independent web searches performed; no official BFCL/Tau2 numbers published for the 9B Flash.

Agent / tool use:

- Native multimodal function calling / GUI-screen reading vendor-stated; no BFCL/Tau2 measurement published for Flash variant — **no verified public score found**
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- MMMU (val): **76.0%** (BinaryVerse review table)
- MMStar: **75.9%** (BinaryVerse)
- MUIRBENCH: **77.1%** (BinaryVerse)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- MathVista: **82.85** (Vector Wire aggregate)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** — text coding not benchmarked for Flash variant in public sources

Long context:

- MRCR / RULER / GraphWalks: **no long-context retrieval reported** — 128K window vendor-stated, no measured retrieval figure found.

Multimodal (VL) evidence:

- OCRBench: **86.5%** (BinaryVerse) / 85.97 aggregate (Vector Wire)
- OCR-Bench v2 EN: **65.1%** (BinaryVerse)
- OCR-Bench v2 Chinese: **59.5%** (BinaryVerse)
- Document parsing / GUI reading qualitative only; no exact Flash numbers published beyond OCR.

### Normalized scores (1–100)

- **Tool use: 58/100.** Native multimodal function calling and grounding is real differentiator versus text-only Flash models, but absence of BFCL/Tau2/Terminal-Bench measurements caps confidence.
- **Reasoning: 67/100.** MMMU 76.0%, MMStar 75.9%, MUIRBENCH 77.1% and MathVista 82.85 are strong for a 9B multimodal class; no text-only reasoning suites (GPQA/HLE) published.
- **Context window: 64/100.** 128K total is mid-tier band for 2026 multimodal models; no RULER/MRCR retrieval verification.
- **Multimodal: 81/100.** OCRBench 86.5, OCR-Bench v2 65.1/59.5 and native video/file input give strong document/screenshot capability; vision-language scores are the best verified dimension.
- **Coding: 46/100.** No public coding benchmarks for the Flash variant; score reflects positioning as visual assistant, not measured code performance.
- **Cost efficiency: 100/100.** $0 API tier plus MIT open weights is the price floor.
- **Overall Score: 63/100.** Mean of five quality dims (58+67+64+81+46)/5 = 63.2 → 63. Best-fit: free OCR/document extraction, invoice processing, screenshot agents and local multimodal assistants.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research (Z.ai GLM-4.6V series launch, Z.ai docs/meta, BinaryVerse review benchmark table, Vector Wire aggregate, freellm.net); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.

