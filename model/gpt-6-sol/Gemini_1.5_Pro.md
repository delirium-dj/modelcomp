# GPT-6 Sol — findings by Gemini 1.5 (google/gemini-1.5-pro)

- Source: OpenAI/`gpt-6-sol`
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (included in ChatGPT Plus/Pro/Business/Enterprise)
- **Short description:** A mid-tier model in the GPT-6 family optimized for agentic coding and complex multi-step workflows. It balances flagship-class reasoning with lower latency and cost than GPT-6 Astra.
- **Provider / access:** OpenAI via Chat Completions or Responses API; model ID `gpt-6-sol`. Also available in ChatGPT Work and Codex tiers.
- **Release / knowledge:** 2026-09-22; knowledge cutoff April 30, 2026.
- **IDs:** `openai/gpt-6-sol` (No Free-tier ID exists on Zen; Free tier uses `gpt-6-luna`).
- **Context window:** 1,050,000 tokens (verified by OpenAI API documentation and Artificial Analysis).
- **Modalities:** text and image input; text output; explicit reasoning tiers (none to max); tool calling (Responses API); JSON mode.
- **Pricing (as of 2026-10-10):** $2.00 per 1M input / $10.00 per 1M output / $0.20 per 1M cached input. Standard privacy terms apply to API; ChatGPT Work/Enterprise includes privacy guarantees.
- **Architecture:** Proprietary; parameter count and MoE status undisclosed by vendor.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.15%** (Vals.ai/rank #6)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **50.4%** (OpenRouter)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld 2.0 (Offline): **60.5%** (Eigent.ai)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **47.9%** (OpenRouter)
- LCR / MLCR: **83.7%** (AA-LCR / OpenRouter)
- CritPt: **30.9%** (OpenRouter)
- Artificial Analysis Intelligence Index / BenchLM overall: **48 / #25** (Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **87.82%** (Vals.ai/rank #6)
- DeepSWE / Coding Index / other: **68.8%** (DeepSWE v1.1 / Eigent.ai)

Long context:

- **83.7% retrieval on AA-LCR (Long Context Reasoning) at unspecified length** (OpenRouter); no verified RULER/MRCR value reported.

### Normalized scores (1-100)

- **Tool use: 85/100.** Strong performance on Terminal-Bench 2.1 (83.15%) and OSWorld (60.5%); capped by lack of Tau3-Banking verification.
- **Reasoning: 96/100.** Frontier-class HLE score (47.9%) exceeds the 40% threshold for top-tier reasoning, though the AA Index (48) is mid-frontier.
- **Context window: 95/100.** Tier >=1M window (1.05M verified); high retrieval (83.7% on LCR) supports long-horizon reasoning.
- **Multimodal: 70/100.** Verified support for text and image input; lacking audio/video input or non-text outputs.
- **Coding: 88/100.** Excellent results on Vibe Code Bench (87.8%) and Terminal-Bench 2.1; DeepSWE (68.8%) is just below the 74% frontier threshold.
- **Cost efficiency: 75/100.** Priced at $2/$10; sits between the $1.25/$4.25 (88) and $3/$15 (60) tiers.
- **Overall Score: 86.8/100.** A high-performance agentic model recommended for production coding and complex reasoning where Astra's cost is prohibitive.

---

## Signature

- Provided by: **Gemini 1.5 Pro (google/gemini-pro-1.5)** — 2026-10-10
- Method: Public internet research of verified benchmark databases and vendor documentation; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
