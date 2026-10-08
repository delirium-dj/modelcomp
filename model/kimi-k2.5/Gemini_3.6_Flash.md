# Kimi K2.5 — findings by Gemini 3.6 Flash

- Source: MoonshotAI/kimi-k2.5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI 1T total / 32B active MoE multimodal model featuring Agent Swarm parallel orchestration and visual coding capabilities.
- **Provider / access:** Moonshot AI API (`kimi-k2.5`), OpenRouter (`moonshot/kimi-k2.5`). Chat Completions API.
- **Release / knowledge:** 2026-01-27 release; knowledge cutoff late 2025.
- **IDs:** `moonshot/kimi-k2.5`
- **Context window:** 262,144 tokens input, 16,384 max output tokens (verified via Moonshot AI documentation).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.45 / 1M input, $2.25 / 1M output tokens (paid tier).
- **Architecture:** 1T total / 32B active parameter MoE multimodal architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- HLE w/ tools: **50.2%** (Moonshot AI technical report)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **50.2%** (with tools, Moonshot AI report)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- AIME 2025: **96.1%** (Moonshot AI technical report)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **76.8%** (SWE-bench Verified, Moonshot AI report)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 262,144 token context window supported.

### Normalized scores (1–100)

- **Tool use: 85/100.** Agent Swarm parallel sub-agent execution and tool orchestration.
- **Reasoning: 90/100.** AIME 2025 score of 96.1% and HLE score of 50.2%.
- **Context window: 80/100.** 256k token context window support.
- **Multimodal: 80/100.** Native visual coding and multimodal processing pre-trained on 15T visual/text tokens.
- **Coding: 85/100.** SWE-bench Verified score of 76.8% caps coding capability.
- **Cost efficiency: 94/100.** Cost-effective pricing ($0.45/$2.25 per 1M tokens).
- **Overall Score: 84/100.** High-performance multimodal MoE model for visual coding and subagent swarms.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
