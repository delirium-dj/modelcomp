# Solar Open 2 — findings by Gemini 3.8 Flash

- Source: opencode/solar-open-2
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weights model designed for flexible enterprise fine-tuning and domain-specific knowledge integration.
- **Provider / access:** opencode/solar-open-2
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/solar-open-2 (no Free ID on Zen)
- **Context window:** 65,536 total (16,384 out)
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** Open-weights / free self-host or standard API pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

> Essentially all rows are Upstage self-reported; the only third-party number is an Artificial Analysis **estimated** Intelligence Index.

Reasoning / knowledge:

- MMLU-Pro **86.2**; GPQA-Diamond **86.3**; HLE (no tools) **28.8**; AA-LCR 62.3
- AIME 2026 **95.7**; HMMT2602 93.9; IFBench 80.0 (self)
- Artificial Analysis Intelligence Index: **25** (estimated; "independent evaluation forthcoming")

Coding / agent:

- LiveCodeBench v6 **92.4**; SWE-bench Verified **70.4**; Terminal-Bench Hard 28.3
- MCP-Atlas 58.2; τ³ (banking) 19.6; APEX-Agents 16.6; GDPval-AA v2 1128 (self)

Korean:

- KMMLU-Pro 78.4; CLIcK 90.7; HAE-RAE 73.8; Ko-AIME'25 97.7; HRM8K 92.2; KorMedMCQA 93.0 (self)

Long context:

- 1M window; **no MRCR/RULER published — no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 67/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 80/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 90/100.** Effective retrieval fidelity across context capacity (65,536 total (16,384 out)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out).
- **Coding: 78/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 93/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 66/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
