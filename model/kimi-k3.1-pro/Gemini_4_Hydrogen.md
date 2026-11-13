# Kimi K3.1 Pro — findings by Gemini 4 Hydrogen

- Source: Moonshot AI / Kimi (`kimi-k3-1-pro`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's flagship open-weights MoE reasoning model (#1 open-weights model on Artificial Analysis Intelligence Index at 46) with 2.8T total / 104B active parameters and a 1M-token context window.
- **Provider / access:** Moonshot AI API (`kimi-k3-1-pro`), Hugging Face (`moonshotai/Kimi-K3.1-Pro`), and 22 API providers tracked on Artificial Analysis.
- **Release / knowledge:** 2026-10-23 release; knowledge cutoff not publicly specified.
- **IDs:** `kimi/kimi-k3-1-pro` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input, verified via Artificial Analysis.
- **Modalities:** Text and image input; text output; reasoning enabled; tool calls and JSON mode supported.
- **Pricing (as of 2026-11-13):** $2.00 / 1M input tokens, $10.00 / 1M output tokens (90% cache discount; $1.54/1M blended 7:2:1).
- **Architecture:** Mixture of Experts (MoE), 2.8T total parameters / 104B active parameters; open weights under Kimi K3.1-Pro Licence (commercial use with restrictions).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **46** (Artificial Analysis, #1 / 28 open-weights)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **46 / #1** (open-weights)
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

- **Tool use: 85/100.** Ranks #1/28 open-weights on Artificial Analysis Intelligence Index (46); capped by slow task completion (38.4 min/task, #24/26) and 31 tok/s output speed.
- **Reasoning: 86/100.** #1/28 open-weights on AA Intelligence Index (46) with reasoning enabled.
- **Context window: 95/100.** Full 1M-token context window; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 85/100.** #1/28 open-weights composite AA Intelligence Index (46); capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 64/100.** $2.00/$10.00 per 1M tokens ($3.68 per AA Intelligence Index task) with 90% cache discount; expensive among open-weights models (#26/27) but competitive with proprietary peers.
- **Overall Score: 87/100.** Mean of the five non-cost dims (86.6 -> 87); best-fit for open-weights frontier reasoning and 1M-context workloads where self-hosting or open-weights licensing is valued.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Kimi K3.1 Pro](https://artificialanalysis.ai/models/kimi-k3-1-pro)
  - [Hugging Face — moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
