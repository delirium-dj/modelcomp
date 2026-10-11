# Ling 3.0 Flash — findings by Gemini 3.8 Flash

- Source: opencode/ling-3.0-flash
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's open-weight reasoning MoE (124B total / 5.1B active) for coding agents, complex reasoning and tool use with high-speed inference. Successor to Ling 2.6 Flash.
- **Provider / access:** opencode/ling-3.0-flash
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/ling-3.0-flash (no Free ID on Zen)
- **Context window:** 262,144 total (per AA)
- **Modalities:** Text in/out; reasoning (thinking) mode
- **Pricing (as of 2026-10-11):** $0.075/$0.22 per 1M (80% cache discount); MIT open weights
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

> "Model card" rows are InclusionAI self-reported; Vals AI / Artificial Analysis rows are independent.

Reasoning / knowledge:

- GPQA-Diamond **85.0** self / 85.5 (AA); HLE 22.7 self / 23.7 (AA)
- AIME 2026 **93.2**; HMMT Feb 2026 87.0; IMO-AnswerBench 83.7 (self)
- MMLU-Pro 82.01 (Vals); CritPt 1.7 (AA); AA Intelligence Index 20.1 (AA v4.3.2) — conflict: 38 claimed on v4.1.1

Coding / agent:

- SWE-bench Pro **56.6** self; SWE-bench Multilingual 72.4 self; SWE-bench Verified **65.2** (Vals)
- Terminal-Bench 2.1: 57.0 self / **50.19** (Vals); LiveCodeBench v5 82.8 self / **83.99** (Vals)
- SciCode 41.2 self / 42.0 (AA); BFCL-v4 73.0; MCP-Atlas 65.5; skillsBench 44.8 self / 27.95 (Vals)
- GDPval-AA 1107 self / normalized 22.4 (AA); BrowseComp 72.2; DRACO 70.4; IFBench 74.5 (self)
- Vals: Finance Agent v2 30.31; Vibe Code Bench v1.1 2.91; Harvey Legal Agent 1.25

Long context:

- 262K window; AA-LCR 73.0; **no MRCR/RULER published**.

### Normalized scores (1–100)

- **Tool use: 68/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 68/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 78/100.** Effective retrieval fidelity across context capacity (262,144 total (per AA)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out; reasoning (thinking) mode).
- **Coding: 72/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 97/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 60.2/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
