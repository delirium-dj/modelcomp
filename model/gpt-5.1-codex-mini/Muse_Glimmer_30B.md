# GPT-5.1 Codex Mini — findings by Muse Glimmer 30B

- Source: OpenAI / gpt-5.1-codex-mini
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** OpenAI smaller cost-effective coding variant of GPT-5.1-Codex for agentic coding workloads.
- **Provider / access:** OpenAI API `gpt-5.1-codex-mini`. Responses API supported; Chat Completions via OpenRouter.
- **Release / knowledge:** Release 2025-11-13 per GitHub changelog; knowledge cutoff Sep 2024.
- **IDs:** `openai/gpt-5.1-codex-mini`
- **Context window:** 400,000 tokens total, 128,000 max output.
- **Modalities:** Text input, image input; text output; reasoning yes; tool calling supported.
- **Pricing (as of 2026-10-27):** $0.25 / 1M input, $2.00 / 1M output per apxml specs.
- **Architecture:** Proprietary, parameters undisclosed.

### Raw benchmarks found

> Sources: Artificial Analysis `gpt-5-1-codex-mini`, OpenAI API docs, apxml.

Agent / tool use:
- Terminal-Bench Hard: **33.3%** (Artificial Analysis)
- Tau2-Bench Telecom: **62.9%** (Artificial Analysis)
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: **81.3%** (Artificial Analysis High variant)
- HLE: **18.5%** (Artificial Analysis High variant)
- Artificial Analysis Intelligence Index: **20.4** (Artificial Analysis High variant)
- AA-LCR: **66.7%** (Artificial Analysis)

Coding:
- LiveCodeBench: **83.6%** (Artificial Analysis High variant)
- SWE-bench Verified: no verified public score found
- MMLU-Pro: **82.0%** (Artificial Analysis)

Long context:
- No long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench Hard 33.3% low, Tau2-Bench 62.9% mid.
- **Reasoning: 68/100.** GPQA 81.3% strong, HLE 18.5% weak, Intelligence Index 20.4 mid.
- **Context window: 90/100.** 400K verified.
- **Multimodal: 50/100.** Image input support claimed.
- **Coding: 78/100.** LiveCodeBench 83.6% strong, coding-focused.
- **Cost efficiency: 65/100.** $0.25/$2.00 moderate for coding tier.
- **Overall Score: 69.2/100.** Mean of (60+68+90+50+78)/5 = 69.2. Best-fit: cost-effective coding agent with strong LiveCodeBench.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; OpenAI docs, Artificial Analysis, apxml; scores normalized.
- Future sources: add new file next to this one.
