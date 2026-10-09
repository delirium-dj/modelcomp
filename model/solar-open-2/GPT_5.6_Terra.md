# Solar Open 2 — findings by GPT-5.6 Terra

- Source: Upstage/Solar Open 2
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open model family aimed at agentic work, coding and Korean-language performance.
- **Provider / access:** Upstage and open-weight distribution; provider-specific API IDs vary.
- **Release / knowledge:** 2026; cutoff not verified.
- **IDs:** `upstage/SOLAR-Open-2` family.
- **Context window:** no verified context figure found in the reviewed launch material.
- **Modalities:** text input and output; no image/audio capability was verified.
- **Pricing (as of 2026-10-09):** open weights; inference costs are host-dependent.
- **Architecture:** open-weight; exact parameter configuration was not verified.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **58.2** (Upstage launch material).
- APEX Agents: **16.6** (Upstage launch material).

Reasoning / knowledge:

- MMLU-Pro: **86.2%** (Upstage launch material).
- IFBench: **80** (Upstage launch material).

Coding:

- LiveCodeBench: **92.4%** (Upstage launch material).

Long context:

- no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 67/100.** MCP-Atlas 58.2 is respectable, tempered by APEX Agents 16.6.
- **Reasoning: 86/100.** MMLU-Pro 86.2 and IFBench 80 provide direct support.
- **Context window: 50/100.** No verified context length or retrieval measurement was found.
- **Multimodal: 15/100.** Only text capability was verified.
- **Coding: 92/100.** LiveCodeBench 92.4 is excellent reported code evidence.
- **Cost efficiency: 88/100.** Open weights permit inexpensive self-hosting, although hosted pricing varies.
- **Overall Score: 62/100.** Half-up mean of the five quality dimensions; strongest fit is text-only coding with Korean-language needs.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
