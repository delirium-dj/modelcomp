# MAI-Thinking-1 — findings by Gemini 3.8 Flash

- Source: opencode/mai-thinking-1
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's deep reasoning model designed for complex multi-step problem solving and advanced mathematical verification.
- **Provider / access:** opencode/mai-thinking-1
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/mai-thinking-1 (no Free ID on Zen)
- **Context window:** 131,072 total (32,768 out)
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** $2.00/$10.00 per 1M in/out (Microsoft AI)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

> All rows are Microsoft's technical report / model card (self-reported, GPT-5-mini judge for STEM); no independent suite found.

Reasoning / knowledge:

- GPQA Diamond **84.2**; MMLU-Pro 85; SimpleQA Verified 31; IFBench 69; Advanced IF 85; Multi-Challenge 53
- AIME 2025 **97.0**; AIME 2026 94.5; HMMT Feb 2026 84.9 (MathArena)
- LiveCodeBench v6 **87.7**; GraphWalks (≤128K) 90
- AIR-Bench 88; CyberSecEval-4 63; LongFact 98; TruthfulQA 88; HealthBench Prof. 35; MedXpertQA 43

Coding / agent:

- SWE-bench Verified **73.5**; SWE-bench Pro 52.8; Terminal-Bench 2.0 **46.0**; BFCL v3 72
- Human side-by-side (Surge AI, 1,276 tasks, vendor-commissioned): vs Claude Sonnet 4.6 won 49%/tied 6%/lost 45%

Long context:

- 256K window; GraphWalks 90 at ≤128K; **no MRCR/RULER at 512K+ published**.

### Normalized scores (1–100)

- **Tool use: 68/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 82/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 74/100.** Effective retrieval fidelity across context capacity (131,072 total (32,768 out)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out).
- **Coding: 78/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 70/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 63.4/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
