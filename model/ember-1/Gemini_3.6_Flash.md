# Ember-1 — findings by Gemini 3.6 Flash

- Source: Fireworks AI (`fireworks/ember-1`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Specialized reasoning model developed by Fireworks AI and post-trained on Moonshot Kimi K3, optimized for high efficiency in coding and agentic workflows by generating concise reasoning traces (~40% fewer tokens).
- **Provider / access:** Fireworks Serverless API & OpenRouter (`fireworks/ember-1`). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-09-23 release; 2026-06 knowledge cutoff.
- **IDs:** `fireworks/ember-1`
- **Context window:** 1,048,576 tokens input / 32,768 max output — verified via Fireworks AI and OpenRouter documentation.
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $3.00 input / $15.00 output per 1M tokens.
- **Architecture:** Mixture-of-Experts (MoE) reasoning architecture built on Kimi K3.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Fireworks AI / LLM-Stats evaluation)
- Tau3-Banking / Tau2-Bench: **66.0%** (Tau2 Airline)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **84.5%** (provisional proxy via Kimi K3 / Fireworks evaluation)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **50.81% / #27** (Vals AI Index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **92.2%** (SWE-bench Verified)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **78.4%** (#16 of 110, Vals AI / Vibe Code Bench v1.1)
- DeepSWE / Coding Index / other: **75.2%** (DeepSWE 1.1)

Long context:

- 1M context needle retrieval: **98.2%** (reported long-context retrieval across 1M tokens)

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong terminal execution (82.0% Terminal-Bench 2.1) and reliable function calling in agentic environments.
- **Reasoning: 86/100.** Robust reasoning performance maintaining high accuracy while pruning ~40% of reasoning trace tokens.
- **Context window: 95/100.** Massive 1M token context support with high retrieval fidelity.
- **Multimodal: 75/100.** Native vision and text input capabilities with text output.
- **Coding: 89/100.** Top-tier coding capabilities demonstrated by 92.2% on SWE-bench Verified and 75.2% on DeepSWE 1.1.
- **Cost efficiency: 70/100.** $3.00/$15.00 per 1M tokens; reduced reasoning trace length offers meaningful overall cost savings.
- **Overall Score: 85/100.** Excellent specialized reasoning model for software engineering agents requiring speed and reduced token overhead.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Fireworks AI releases, OpenRouter, Vals AI, and benchmark tracking platforms; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
