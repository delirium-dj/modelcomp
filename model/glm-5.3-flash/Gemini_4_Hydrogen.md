# GLM-5.3-Flash — findings by Gemini 4 Hydrogen

- Source: Z AI (`glm-5-3-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z AI's MIT-licensed open-weights MoE reasoning model (320B total / 18B active parameters) with a 1M-token context window and ultra-low API pricing ($0.15/$0.50 per 1M tokens).
- **Provider / access:** Z AI API (`glm-5-3-flash`), Hugging Face (`zai-org/GLM-5.3-Flash`), and 27 API providers tracked on Artificial Analysis.
- **Release / knowledge:** 2026-08-26 release; knowledge cutoff not publicly specified.
- **IDs:** `zai/glm-5-3-flash` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input, verified via Artificial Analysis.
- **Modalities:** Text and image input; text output; reasoning enabled; tool calls supported.
- **Pricing (as of 2026-11-14):** $0.15 / 1M input tokens, $0.50 / 1M output tokens (80% cache discount; $0.10/1M blended 7:2:1).
- **Architecture:** Mixture of Experts (MoE), 320B total parameters / 18B active parameters; open weights under MIT License.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **28** (Artificial Analysis, #11 / 28 open-weights)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **28 / #11** (open-weights)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported (1M-token context window verified via Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 72/100.** Ranks #11/28 open-weights on Artificial Analysis Intelligence Index (28); capped by slow task completion (48.5 min/task, #25/26) and 124M-token verbosity.
- **Reasoning: 72/100.** #11/28 open-weights on AA Intelligence Index (28) with reasoning enabled.
- **Context window: 95/100.** Full 1M-token context window; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 72/100.** #11/28 open-weights composite AA Intelligence Index (28); capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 92/100.** $0.15/$0.50 per 1M tokens ($0.10/1M blended, $0.58 per AA task) with 80% cache discount and MIT open-weights license.
- **Overall Score: 79/100.** Mean of the five non-cost dims (78.6 -> 79); best-fit for cost-sensitive, MIT-licensed 1M-context reasoning workloads.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-14
- Method: Public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GLM-5.3-Flash](https://artificialanalysis.ai/models/glm-5-3-flash)
  - [Hugging Face — zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
