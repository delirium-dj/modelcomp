# MiMo-V2.5-Pro — findings by Space Bunny Alpha

- Source: Xiaomi MiMo (`mimo-v2.5-pro`; open weights)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Xiaomi's open-weight MoE model for demanding agentic work, complex software engineering, and coherent long-horizon execution across more than a thousand tool calls.
- **Provider / access:** Xiaomi MiMo API Platform (`mimo-v2.5-pro`), AI Studio, and Hugging Face `XiaomiMiMo/MiMo-V2.5-Pro`; local SGLang/vLLM deployment is documented. No OpenCode Zen Free ID is verified for this model.
- **Release / knowledge:** Xiaomi announced and open-sourced the model on 2026-04-27. The model card does not state a knowledge cutoff.
- **IDs:** `mimo-v2.5-pro`; Hugging Face `XiaomiMiMo/MiMo-V2.5-Pro`.
- **Context window:** 1,048,576 tokens (1M) for the instruction model; the Base checkpoint is 256K. The model card's SGLang example uses `--context-length 1048576`; maximum output was not shown.
- **Modalities:** Text input/output; reasoning content, function/tool calls, and OpenAI-compatible serving are documented. The Pro model card is tagged text-generation; image/video/audio input is not claimed.
- **Pricing (as of 2026-09-24):** Xiaomi's launch page says pricing was unchanged, but the fetched official pages did not expose a numeric per-token rate. This is a paid model; no free tier is verified.
- **Architecture:** Open-weight MoE, 1.02T total parameters and 42B active; hybrid sliding-window/global attention with 6:1 ratio and three-layer Multi-Token Prediction; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.4%** (BenchLM, provider-exact Xiaomi source)
- Terminal-Bench 2.1 (Vals AI): **57.3%** (BenchLM, Vals AI leaderboard; different harness)
- τ³-bench Tool-Agent-User: **72.9%** (BenchLM, provider-exact Xiaomi source)
- Claw-Eval: **63.8%** (BenchLM, exact benchmark source; Xiaomi reports 64% Pass^3 in its launch article)
- Gert Labs Composite Game Benchmark: **62.70%** (BenchLM, exact benchmark source)
- Toolathon, GDPval-AA, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- MMLU: **89.4%** (official MiMo-V2.5-Pro Base evaluation, 5-shot)
- MMLU-Redux: **92.8%**; MMLU-Pro: **68.5%** (official model card, 5-shot)
- GPQA-Diamond: **66.7%** (official model card, 5-shot)
- AIME 24&25: **37.3%** (official model card, 2-shot)
- HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Pro: **57.2%** (BenchLM, provider-exact Xiaomi source)
- SWE-bench (Vals AI): **74.0%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench v6: **39.6%** for the official Base evaluation; **81.4%** on the Vals AI leaderboard (different harness; kept separate)
- SWE-Bench AgentLess: **35.7%** (official model card Base evaluation, 3-shot)
- HumanEval+: **75.6%**; MBPP+: **74.1%** (official model card Base evaluation)
- SciCode, Vibe Code Bench, and exact SWE-bench Verified: **no verified public exact value found**

Long context:

- GraphWalks: **0.56 BFS / 0.92 Parents at 512K** and **0.37 / 0.62 at 1M** (official Xiaomi model card; the two subtasks are separate)
- Official deployment context: **1,048,576 tokens**.

Sources consulted: [Xiaomi MiMo-V2.5-Pro launch page](https://mimo.xiaomi.com/mimo-v2-5-pro), [official Hugging Face model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro/raw/main/README.md), and [BenchLM MiMo-V2.5-Pro](https://benchlm.ai/models/mimo-v2-5-pro), accessed 2026-09-24. Base-model rows are explicitly labeled as such.

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.0 68.4%, τ³-bench 72.9%, Claw-Eval 63.8%, and Xiaomi's 1,000+ tool-call demonstrations are strong agent evidence; missing GDPval and MCP rows cap certainty.
- **Reasoning: 88/100.** Strong official MMLU/Redux/GPQA/AIME results and the long-context GraphWalks measurements support high reasoning quality, though exact HLE, LCR, and CritPt values are absent.
- **Context window: 95/100.** The native 1M context is verified and directly tested with GraphWalks at 512K and 1M; this is unusually strong long-context evidence.
- **Multimodal: 15/100.** The exact Pro checkpoint is text-only in the reviewed model card and no image/video/audio input is claimed.
- **Coding: 90/100.** SWE-bench Pro 57.2%, Vals SWE 74.0%, and official HumanEval+/MBPP+ results support strong coding; harness and Base/instruction-model differences are material.
- **Cost efficiency: 75/100.** The model is paid, and an exact current numeric rate was not exposed in the reviewed official pages; it is not scored as free merely because weights are open.
- **Overall Score: 75.8/100.** (91 + 88 + 95 + 15 + 90) / 5 = 75.8. Best fit: self-hosted or paid long-horizon text agents and software-engineering workloads with native 1M context.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Xiaomi's official launch page/model card and BenchLM evidence; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
