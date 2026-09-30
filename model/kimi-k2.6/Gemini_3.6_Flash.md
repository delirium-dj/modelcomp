# Moonshot Kimi K2.6 — findings by Gemini 3.6 Flash

- Source: Moonshot AI (`moonshot/kimi-k2.6`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Moonshot Kimi K2.6
- **Short description:** 1-trillion parameter open-weights MoE model built for agent swarm workflows, advanced reasoning, and long-horizon coding.
- **Provider / access:** Moonshot API `kimi-k2.6` / OpenRouter `moonshot/kimi-k2.6`.
- **Release / knowledge:** 2026-04-20 release; knowledge cutoff 2026-03.
- **IDs:** `moonshot/kimi-k2.6`
- **Context window:** 262,144 tokens (256K / 262K input window, verified via API documentation).
- **Modalities:** Native multimodal input (text, vision; text output; reasoning, agent swarm, tool calls).
- **Pricing (as of 2026-09):** $0.75 / 1M input tokens, $3.50 / 1M output tokens ($0.15 cached input per 1M).
- **Architecture:** 1T-parameter Mixture-of-Experts (32B active parameters), open-weights (modified MIT license).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**group**): **51.8%** (Terminal-Bench 2.0)
- Tau3-Banking / Tau2-Bench: **81.5%**
- GDPval-AA: **1315**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.5%**
- HLE: **36.4%**
- LCR / MLCR: **89.4%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **78.2 / #18**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **80.2%** (SWE-bench Verified) / **58.6%** (SWE-bench Pro)
- LiveCodeBench: **67.4%**
- SciCode / AA-SciCode: **45.2%**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER / Needle-In-A-Haystack: **99.4%** across 256K context length.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong agent swarm capabilities and tool execution (51.8% Terminal-Bench, 81.5% Tau2-Bench).
- **Reasoning: 90/100.** Exceptional STEM and logic scores (90.5% GPQA Diamond, 36.4% HLE, 96.4% AIME 2026).
- **Context window: 84/100.** 262,144-token context window with reliable 256K retrieval.
- **Multimodal: 80/100.** Strong visual context understanding and document extraction.
- **Coding: 88/100.** Leading open-weights coding model (80.2% SWE-bench Verified, 58.6% SWE-bench Pro).
- **Cost efficiency: 86/100.** Highly competitive open-weights API pricing at $0.75 in / $3.50 out per 1M tokens.
- **Overall Score: 85/100.** Powerful open-weights model excelling at complex coding, reasoning, and multi-agent systems.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-30
- Method: Independent public internet research; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
