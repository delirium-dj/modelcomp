# Codestral 25.08 — findings by Claude Opus 4.6

- Source: Mistral AI (`codestral-2508`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral AI's specialized low-latency code model for IDE autocomplete, Fill-in-the-Middle (FIM), and multi-language development across 80+ programming languages. Released July 30, 2025.
- **Provider / access:** Mistral AI La Plateforme (`codestral-2508`), OpenRouter (`opencode/codestral-25.08`), self-hosted on-prem. Chat Completions and dedicated FIM endpoint (`/v1/fim/completions`).
- **Release / knowledge:** 2025-07-30 release; knowledge cutoff not publicly specified.
- **IDs:** `opencode/codestral-25.08` (no Free ID exists)
- **Context window:** 256,000 tokens input / 8,192 tokens max output — per meta.json. Some providers may support up to 128K or 256K context.
- **Modalities:** Text + code + PDF in; text + code out. FIM (fill-in-the-middle) via dedicated endpoint. Function/tool calling, structured outputs, predicted outputs.
- **Pricing (as of 2026-11-10):** $0.30/1M input, $0.90/1M output, $0.03/1M cached input. Batch pricing ~$0.15/$0.45. Paid only but very affordable.
- **Architecture:** Proprietary. No open weights. Specialized code-completion architecture optimized for low-latency inline completions rather than heavy reasoning chains.

### Raw benchmarks found

Agent / tool use:

- Function/tool calling supported but model is tuned for completions rather than autonomous multi-turn tool loops
- Terminal-Bench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (not a general-purpose reasoning model)
- HLE: no verified public score found
- MMLU: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- CritPt: no verified public score found

Coding:

- MultiPL-E (average): **+5% improvement** over Codestral 25.01 (Mistral AI release notes)
- HumanEval-equivalent (Python generation): **~86%** (independent evaluations, datallmlab.com)
- FIM completion: qualitative and empirical improvements on short/long-context FIM academic benchmarks (Mistral AI)
- +30% accepted completions, +10% retained code, -50% runaway generations vs. predecessor (Mistral AI operational metrics)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no specific score published

Long context:

- 256K context window for code ingestion confirmed. Max output is limited to 8K tokens. No MRCR/RULER/GraphWalks retrieval benchmarks found.

### Normalized scores (1–100)

- **Tool use: 35/100.** Supports function calling and structured outputs, but the model is explicitly tuned for IDE completions rather than autonomous agentic tool loops. No tool-use benchmark scores found. The very limited output window (8K) restricts multi-step tool orchestration.
- **Reasoning: 25/100.** No GPQA, HLE, MMLU, or general reasoning benchmark scores published. This is a vertical code specialist, not a general-purpose reasoning model. Reasoning capability is limited to code-related logical inference within IDE contexts.
- **Context window: 55/100.** 256K input is large and useful for ingesting entire codebases. However, max output is severely limited to 8K tokens, which dramatically constrains usability for generation-heavy tasks. The asymmetry between large input and tiny output caps the score.
- **Multimodal: 18/100.** Text + code + PDF input; text + code output. Slightly above text-only due to PDF support, but no image/audio/video capabilities.
- **Coding: 60/100.** HumanEval-equivalent ~86% is solid for Python generation. Strong FIM capabilities across 80+ languages. +30% accepted completions in IDE workflows demonstrates real-world coding value. However, no SWE-bench or LiveCodeBench scores, and the 8K output limit prevents complex multi-file code generation. Specialist rather than general coder.
- **Cost efficiency: 88/100.** $0.30/$0.90 per 1M tokens is very affordable for a capable code model. Not free but well below frontier pricing.
- **Overall Score: 39/100.** Mean of (35 + 25 + 55 + 18 + 60) / 5 = 38.6 → 39. A strong IDE code-completion specialist with excellent FIM capabilities and low latency, but severely limited by its 8K output window, lack of general reasoning, and text+code-only modality. Best suited for inline autocomplete rather than autonomous software engineering.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-10
- Method: Public internet research (Mistral AI docs, OpenRouter, reviewramble.com, datallmlab.com, layer3labs.io); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Codestral 25.08](https://mistral.ai)
  - [Mistral AI — Pricing](https://mistral.ai/pricing)
  - [OpenRouter — Codestral 25.08](https://openrouter.ai)
  - [datallmlab.com — Codestral evaluation](https://datallmlab.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
