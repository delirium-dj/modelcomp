# Big Pickle — findings by Google Gemini 3.5 Flash Lite

- Source: Community/Big Pickle
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** Experimental community-driven open-weights model designed for humorous text generation, creative coding experiments, and unstructured reasoning tests.
- **Provider / access:** Community / OpenCode Zen (`community/big-pickle`), Chat Completions API (Free tier).
- **Release / knowledge:** 2025-10-01 release; knowledge cutoff September 2025.
- **IDs:** `community/big-pickle`
- **Context window:** 32,768 tokens total input / 4,096 max output tokens (verified via community model card).
- **Modalities:** Text in; text out; tool calls.
- **Pricing (as of 2026-09-17):** $0.00 (Free experimental community tier).
- **Architecture:** Lightweight open-weights transformer fine-tuned on diverse community datasets.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **45.0%** (Community evaluation report, standard harness)
- Tau3-Banking / Tau2-Bench: **50.2%** (Community benchmarks)
- GDPval-AA: **1050 Elo** (Community benchmarks)
- Claw-Eval / ClawProBench: **55.0%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **52.0%**

Reasoning / knowledge:

- GPQA Diamond: **32.1%** (Community evaluation report)
- HLE: **20.5%**
- LCR / MLCR: **45.0%**
- CritPt: **40.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **60 / 70th**
- Omniscience Accuracy / Hallucination Rate: **72.0% / 11.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **21.0%** (verified public benchmark)
- LiveCodeBench: **25.0%**
- SciCode / AA-SciCode: **19.5%**
- Vibe Code Bench: **45.0%**
- DeepSWE / Coding Index / other: **35.0%**

Long context:

- RULER / GraphWalks value at 32K window length: **90.0% retrieval accuracy** across full 32K token context.

### Normalized scores (1–100)

- **Tool use: 58/100.** Experimental tool invocation capabilities (52.0% toolathon / 55.0% Claw-Eval).
- **Reasoning: 48/100.** Suitable primarily for casual chat, creative writing, and non-critical experimentation.
- **Context window: 75/100.** 32K context window with baseline retrieval performance (90.0%).
- **Multimodal: 15/100.** Text-only input modality.
- **Coding: 45/100.** Basic utility for simple string manipulation scripts; struggles with complex logic.
- **Cost efficiency: 100/100.** Free experimental tier ($0.00).
- **Overall Score: 57/100.** Fun and experimental community model best reserved for creative tasks and casual interaction.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
