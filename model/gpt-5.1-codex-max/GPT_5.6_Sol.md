# GPT-5.1-Codex-Max — findings by GPT-5.6 Sol

- Source: OpenAI/GPT-5.1-Codex-Max
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** OpenAI's proprietary long-horizon agentic coding model, trained to use compaction across multiple context windows for project-scale work.
- **Provider / access:** Retired OpenAI Responses API model `gpt-5.1-codex-max`; also cataloged by OpenRouter.
- **Release / knowledge:** Released 2025-11-19; September 30, 2024 knowledge cutoff.
- **IDs:** `gpt-5.1-codex-max`; `openai/gpt-5.1-codex-max`.
- **Context window:** 400,000 tokens, 272,000 maximum input, and 128,000 maximum output; compaction supports multi-window tasks.
- **Modalities:** Text and image input; text output; reasoning, function calling, web search, structured output, and prompt caching.
- **Pricing (as of retirement):** $1.25 input / $10 output / $0.125 cached input per 1M tokens.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **58.1%** at xhigh with compaction (OpenAI Harbor harness).
- SWE-Lancer IC SWE: **79.9%**; Irregular cyber evaluations: **37%** network attack, **41%** vulnerability discovery, **43%** evasion.

Reasoning / knowledge:

- METR 50% task time horizon: **2h42m** point estimate, 75–350 minute interval.
- No exact public GPQA or HLE value found for this coding-specialized checkpoint.

Coding:

- SWE-bench Verified: **77.9%** at xhigh; GPT-5.1-Codex high scored 73.7% in the same OpenAI table.
- OpenAI reports observed autonomous runs exceeding **24 hours** with compaction.

Long context:

- 400K single-window context; compaction was evaluated across as many as ten windows on long cyber tasks. No standardized MRCR score found.

### Normalized scores (1–100)

- **Tool use: 83/100.** Terminal-Bench 58.1 and SWE-Lancer 79.9 show strong agent execution, below the frontier Terminal-Bench band.
- **Reasoning: 76/100.** Long-horizon persistence and METR's 2h42m horizon are strong, capped by missing general reasoning benchmarks.
- **Context window: 80/100.** The native 400K window is near the top of its tier and compaction extends tasks, but compaction is not a native million-token window.
- **Multimodal: 66/100.** Image input is supported, but output is text-only and no exact visual benchmark was found.
- **Coding: 86/100.** SWE-bench 77.9, SWE-Lancer 79.9, and 58.1 Terminal-Bench support high-end coding.
- **Cost efficiency: 80/100.** $1.25/$10 was competitive for a frontier coding model but not inexpensive on long outputs.
- **Overall Score: 78/100.** Half-up mean `(83 + 76 + 80 + 66 + 86) / 5 = 78.2`; suited to long-running repository work, though the endpoint is retired.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: independent public internet research using three exact-name searches and direct OpenAI release, model-doc, system-card, OpenRouter, and models.dev checks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
