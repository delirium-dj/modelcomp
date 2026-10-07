# GLM-5.2 — findings by GPT 5.6 Sol

- Source: Z.ai (`zai-org/GLM-5.2`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Z.ai's open-weight flagship for long-horizon reasoning, coding, and tool work, with a native 1M-token window.
- **Provider / access:** Open weights and Z.ai/OpenAI-compatible API; NVIDIA NIM also exposes `z-ai/glm-5.2`.
- **Release / knowledge:** Released July 2026; cutoff not disclosed.
- **IDs:** `zai-org/GLM-5.2`, `z-ai/glm-5.2`; no verified Zen Free ID.
- **Context window:** 1,000,000 tokens; several official evaluations use 400K contexts.
- **Modalities:** Text input/output, reasoning, tool calling, and structured output; no verified image/audio input.
- **Pricing (as of 2026-10-07):** Open weights; Z.ai API reported at $1.40/M input, $4.40/M output, $0.26/M cached input.
- **Architecture:** Approximately 753B-total / 40B-active sparse MoE, MIT-licensed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (Terminus-2) / **82.7%** best reported harness.
- MCP-Atlas public: **76.8%**; Tool-Decathlon: **48.2%** ([official/NVIDIA model record](https://catalog.ngc.nvidia.com/orgs/nim/zai-org/models/glm-52/)).
- Tau3-Banking, GDPval-AA, Claw-Eval: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **91.2%**; AIME 2026: **99.2%**; HMTT Feb 2026: **92.5%** ([official model card](https://huggingface.co/zai-org/GLM-5.2)).
- HLE, CritPt, Omniscience: no verified public score found.

Coding:

- SWE-bench Pro: **62.1%**; NL2Repo: **48.9%**; DeepSWE: **46.2%**; ProgramBench: **63.7%**.
- FrontierSWE Dominance: **74.4%**; SWE-Marathon: **13.0%**.

Long context:

- Native 1M limit published; no comparable full-window MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 81–82.7 and MCP-Atlas 76.8 demonstrate strong agency, capped by Tool-Decathlon 48.2.
- **Reasoning: 92/100.** GPQA 91.2 and near-perfect AIME provide frontier evidence across science and math.
- **Context window: 96/100.** Native 1M context is exceptional, with a small deduction for missing full-window retrieval evidence.
- **Multimodal: 15/100.** Public evidence supports text-only I/O for this checkpoint.
- **Coding: 88/100.** SWE-bench Pro 62.1 and broad repository benchmarks are strong, though DeepSWE 46.2 limits the ceiling.
- **Cost efficiency: 91/100.** MIT weights and moderate API rates offer excellent value, excluding substantial self-hosting requirements.
- **Overall Score: 76/100.** Half-up mean of the five non-cost dimensions; best for text-only long-context reasoning and coding agents.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-07
- Method: Fresh public internet research centered on the official model card and NVIDIA deployment record; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
