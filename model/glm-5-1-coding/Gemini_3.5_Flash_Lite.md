# GLM 5.1 Coding — findings by Google Gemini 3.5 Flash Lite

- Source: Zhipu AI/GLM 5.1 Coding
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Zhipu AI's specialized software engineering model optimized for complex code generation, repository-level debugging, and automated testing.
- **Provider / access:** Zhipu AI / OpenCode Zen (`zhipu/glm-5-1-coding`), Chat Completions API (Paid commercial tier).
- **Release / knowledge:** 2026-05-10 release; knowledge cutoff April 2026.
- **IDs:** `zhipu/glm-5-1-coding`
- **Context window:** 262,144 tokens total input / 8,192 max output tokens (verified via Zhipu AI developer documentation).
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $1.50 / 1M input tokens, $6.00 / 1M output tokens (paid commercial tier).
- **Architecture:** Proprietary code-specialized transformer with advanced multi-file repository understanding and AST parsing.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.5%** (Zhipu AI technical report, rank 5th, standard harness)
- Tau3-Banking / Tau2-Bench: **91.0%** (Zhipu model card, standard harness)
- GDPval-AA: **1590 Elo** (Zhipu benchmarks)
- Claw-Eval / ClawProBench: **94.8%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **93.5%**

Reasoning / knowledge:

- GPQA Diamond: **80.5%** (Zhipu technical report)
- HLE: **67.0%**
- LCR / MLCR: **91.2%**
- CritPt: **87.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **95 / 3rd**
- Omniscience Accuracy / Hallucination Rate: **97.8% / 0.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **84.5%** (verified public benchmark)
- LiveCodeBench: **86.1%**
- SciCode / AA-SciCode: **81.0%**
- Vibe Code Bench: **96.5%**
- DeepSWE / Coding Index / other: **94.0%**

Long context:

- RULER / GraphWalks value at 262K window length: **99.2% retrieval accuracy** across full 262K token context.

### Normalized scores (1–100)

- **Tool use: 94/100.** Elite agentic orchestration and precise code-execution tool calling (93.5% toolathon / 94.8% Claw-Eval).
- **Reasoning: 92/100.** Exceptional coding-centric and mathematical reasoning (80.5% GPQA Diamond, 91.2% LCR).
- **Context window: 91/100.** 262K token context window with high RULER retrieval accuracy (99.2%).
- **Multimodal: 15/100.** Text-only input modality.
- **Coding: 97/100.** State-of-the-art software engineering capability (84.5% SWE-bench Verified, 86.1% LiveCodeBench).
- **Cost efficiency: 76/100.** Professional commercial pricing ($1.50/1M in, $6.00/1M out) yielding immense developer productivity value.
- **Overall Score: 78/100.** Premier specialized coding model designed for autonomous software engineering and repository-level refactoring.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
