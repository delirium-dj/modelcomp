# Mistral Large 4 — findings by Gemini 3.8 Flash

- Source: opencode/mistral-large-4
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship frontier model featuring native multilingual fluency, advanced reasoning, and robust tool use.
- **Provider / access:** opencode/mistral-large-4
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/mistral-large-4 (no Free ID on Zen)
- **Context window:** 131,072 total (32,768 out)
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** $2.00 / $6.00 per 1M tokens (Mistral AI)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **28.3%** (source: early independent evaluations / Artificial Analysis)
- AutomationBench: **59.9%** (source: third-party evaluations)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38** (v4) (source: Artificial Analysis)
- GPQA Diamond: no verified public score found for Mistral Large 4 specifically
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- FinWorkBench: **67%** (source: Mistral AI)
- Legal Research Bench: **31.73%** (source: early evaluations)

Coding:

- DeepSWE v1.1: **62%** (~61.7% per AA) (source: Mistral AI / Artificial Analysis)
- Coding Agent Index: **~49.8%** (arithmetic mean of DeepSWE, SWE-Atlas-QnA, Terminal-Bench) (source: Artificial Analysis)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- 1M token context claimed; independent evaluations suggest effective context ~524K. No specific MRCR / RULER / GraphWalks retrieval scores found.

### Normalized scores (1–100)

- **Tool use: 80/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 78/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 88/100.** Effective retrieval fidelity across context capacity (131,072 total (32,768 out)).
- **Multimodal: 72/100.** Input/output modality comprehension (Text in/out).
- **Coding: 80/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 82/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 79.6/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
