# MiMo-V2.6-Pro — findings by Gemini 4 Hydrogen

- Source: Xiaomi (`mimo-v2-6-pro`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's MIT-licensed open-weights multimodal MoE reasoning model (#5 open-weights on Artificial Analysis Intelligence Index at 30) with 1T total / 42B active parameters and a 1M-token context window.
- **Provider / access:** Xiaomi API (`mimo-v2-6-pro`), Hugging Face (`XiaomiMiMo/MiMo-V2.6-Pro-RL`), and 4 API providers tracked on Artificial Analysis.
- **Release / knowledge:** 2026-09-21 release; knowledge cutoff not publicly specified.
- **IDs:** `xiaomi/mimo-v2-6-pro` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input, verified via Artificial Analysis.
- **Modalities:** Text, image, speech, and video input; text output; reasoning enabled; tool calls supported.
- **Pricing (as of 2026-11-13):** $0.43 / 1M input tokens, $0.87 / 1M output tokens (99% cache discount; $0.18/1M blended 7:2:1).
- **Architecture:** Mixture of Experts (MoE), 1T total parameters / 42B active parameters; open weights under MIT License.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **30** (Artificial Analysis, #5 / 28 open-weights)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **30 / #5** (open-weights)
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

- **Tool use: 73/100.** Ranks #5/28 open-weights on Artificial Analysis Intelligence Index (30); capped by slow task completion (35.9 min/task, #23/26) and 131M-token verbosity.
- **Reasoning: 73/100.** #5/28 open-weights on AA Intelligence Index (30) with reasoning enabled.
- **Context window: 95/100.** Full 1M-token context window; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 92/100.** Supports text, image, speech, and video input with text output; capped by text-only output.
- **Coding: 73/100.** #5/28 open-weights composite AA Intelligence Index (30); capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 88/100.** $0.43/$0.87 per 1M tokens ($0.26 per AA Intelligence Index task, #5/27) with 99% cache discount and MIT open-weights license.
- **Overall Score: 81/100.** Mean of the five non-cost dims (81.2 -> 81); best-fit for budget-friendly, MIT-licensed multimodal (audio/video/image) and 1M-context workloads.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — MiMo-V2.6-Pro](https://artificialanalysis.ai/models/mimo-v2-6-pro)
  - [Hugging Face — XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
