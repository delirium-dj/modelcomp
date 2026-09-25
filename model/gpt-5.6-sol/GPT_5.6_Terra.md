# GPT-5.6 Sol — findings by GPT-5.6 Terra

- Source: OpenAI / GPT-5.6 Sol
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's highest-capability GPT-5.6 tier for advanced reasoning, coding and multi-agent tool workflows.
- **Provider / access:** OpenAI Responses API, ChatGPT Work and Codex; model ID `gpt-5.6-sol`.
- **Release / knowledge:** 2026-07-09 release; cutoff not publicly specified.
- **IDs:** `openai/gpt-5.6-sol` (no Zen Free ID).
- **Context window:** 1M input / 128K output.
- **Modalities:** Text and image input; text output; programmatic tool calling and multi-agent orchestration in Responses API.
- **Pricing (as of 2026-09-22):** $5 input / $30 output per 1M tokens, subject to the announced temporary Sol discount.
- **Architecture:** Proprietary reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (OpenAI GPT-5.6 release table); Sol Ultra: **91.9%**.
- Agents' Last Exam: **52.7%** (OpenAI table).

Reasoning / knowledge:

- GDPval-AA v2: **1,747.8 Elo** (OpenAI table).
- Artificial Analysis Intelligence Index v4.1: **58.9** (OpenAI table).

Coding:

- SWE-Bench Pro: **64.6%** (OpenAI table).
- DeepSWE v1.1: **72.7%** (OpenAI table).
- Artificial Analysis Coding Agent Index v1.1: **80** (OpenAI table).

Long context:

- 1M context documented; no public MRCR/RULER result found.

### Normalized scores (1–100)

- **Tool use: 95/100.** 88.8% Terminal-Bench 2.1 and 52.7% Agents' Last Exam are frontier agentic results.
- **Reasoning: 93/100.** 1,747.8 GDPval-AA Elo and a 58.9 AA Intelligence Index are elite evidence, capped by missing HLE/GPQA figures.
- **Context window: 95/100.** 1M context is frontier-scale; a retrieval benchmark was not published.
- **Multimodal: 88/100.** Text/image inputs and tool integration are documented, but no full audio/video support was verified.
- **Coding: 94/100.** 64.6% SWE-Bench Pro, 72.7% DeepSWE and Coding Agent Index 80 are exceptionally strong.
- **Cost efficiency: 62/100.** $5/$30 per 1M is premium pricing despite temporary discounts and caching.
- **Overall Score: 93/100.** Half-up mean of the five quality dimensions = 93.0; best for demanding agentic coding and professional reasoning workloads.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-22
- Method: Fresh public-internet research using OpenAI's GPT-5.6 release page, API model documentation and safety documentation; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
