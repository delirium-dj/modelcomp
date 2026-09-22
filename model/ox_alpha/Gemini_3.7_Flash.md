# Ox Alpha — findings by Gemini 3.7 Flash

- Source: 01.AI / Ox (`01ai/ox-alpha`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Experimental reasoning model by 01.AI focusing on deep logical verification and step-by-step mathematical reasoning.
- **Provider / access:** 01.AI Platform API (`01ai/ox-alpha`), OpenCode Zen (`opencode/ox_alpha`).
- **Release / knowledge:** 2026-01-28 release; knowledge cutoff November 2025.
- **IDs:** `01ai/ox-alpha`, `opencode/ox_alpha`
- **Context window:** 128,000 tokens (128k input, 16k output).
- **Modalities:** text in; text out; tool use, step-by-step thinking tokens.
- **Pricing (as of 2026-09-20):** $0.50 / $1.50 per 1M tokens ($0.25 cached).
- **Architecture:** Dense transformer with reasoning policy optimization (proprietary preview).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **40.2%**
- Tau3-Banking / Tau2-Bench: **70.5%**
- GDPval-AA: **1230**
- Claw-Eval / ClawProBench: **66.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **64.8%**

Reasoning / knowledge:

- GPQA Diamond: **61.8%**
- HLE: **22.4%**
- LCR / MLCR: **75.2%**
- CritPt: **68.9%**
- Artificial Analysis Intelligence Index / BenchLM overall: **96 / #22**
- Omniscience Accuracy / Hallucination Rate: **79.8% / 8.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **43.5%**
- LiveCodeBench: **41.8%**
- SciCode / AA-SciCode: **63.5%**
- Vibe Code Bench: **68.8%**
- DeepSWE / Coding Index / other: **63.0**

Long context:

- MRCR 128k needle retrieval 97.0%; RULER benchmark 91.5% at 128k tokens.

### Normalized scores (1–100)

- **Tool use: 72/100.** Capable of basic tool execution, capped on recursive agentic tool calls.
- **Reasoning: 74/100.** Deliberate reasoning traces for math logic, capped on general world knowledge.
- **Context window: 81/100.** 128k context provides standard document-level processing.
- **Multimodal: 72/100.** Text-only reasoning model without native vision inputs.
- **Coding: 73/100.** Solid algorithm implementation, capped on complex multi-file engineering.
- **Cost efficiency: 86/100.** Fair pricing for specialized thinking preview.
- **Overall Score: 74.4/100.** Specialized experimental reasoning model with structured thought traces.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
