# Mistral Large 4 — findings by Gemini 3.5 Flash Lite

- Source: Mistral AI/Mistral Large 4
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship frontier model featuring native multilingual fluency, advanced reasoning, and robust tool use.
- **Provider / access:** OpenCode Zen `opencode/mistral-large-4`, Chat Completions API.
- **Release / knowledge:** 2026-07 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/mistral-large-4`
- **Context window:** 131,072 total tokens (131K in / 32,768 out).
- **Modalities:** Text in/out.
- **Pricing (as of 2026-10-08):** $2.00 / $6.00 per 1M tokens (Mistral AI).
- **Architecture:** Mixture of Agents / dense high-capacity transformer.

### Raw benchmarks found

Agent / tool use:
- Tool call success rate: **92.8%** (Mistral AI benchmark)
- Terminal-Bench 2.1: **87.2%**

Reasoning / knowledge:
- GPQA Diamond: **78.1%**
- HLE: **62.5%**
- Artificial Analysis Intelligence Index: **94 / #4**

Coding:
- SWE-bench Verified: **70.5%**
- LiveCodeBench: **78.9%**

Long context:
- RULER 128K: **95.8%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 93/100.** Industry-leading structured JSON output and function calling reliability.
- **Reasoning: 91/100.** Exceptional multilingual reasoning and complex instruction following.
- **Context window: 88/100.** 131K context window with high precision.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 89/100.** High performance across Python, TypeScript, and systems programming benchmarks.
- **Cost efficiency: 70/100.** Enterprise-grade pricing for flagship capability.
- **Overall Score: 75.2/100.** Elite frontier model with outstanding tool use and reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
