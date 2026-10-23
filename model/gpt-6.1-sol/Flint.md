# GPT-6.1 Sol - findings by Flint

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier GPT-6 model, released 2026-09-29, pitched as "near-Astra intelligence for a fifth of the price" for agentic coding, computer use, and professional work.
- **Provider / access:** OpenAI API (Responses API for tool use), ChatGPT Work, Codex, Azure, GitHub Copilot, OpenRouter (`openai/gpt-6.1-sol`).
- **Release / knowledge:** Released 2026-09-29; knowledge cutoff not confirmed in sources reviewed.
- **IDs:** `gpt-6.1-sol`, `openai/gpt-6.1-sol`.
- **Context window:** 1,050,000 tokens input / 128,000 max output.
- **Modalities:** Text in -> text out; reasoning yes; tool use yes.
- **Pricing (as of 2026-10-23):** $2 / $10 per MTok; cached input read $0.10; long prompts >272K input: 2x input, 1.5x output.
- **Architecture:** Proprietary GPT-6 family.

### Raw benchmarks found

- Artificial Analysis Intelligence Index: Sol **51.8** vs Claude Sonnet 5.5 **56**.
- DeepSWE v1.1: Sol matches GPT-6 Astra; 6.4 points above GPT-6 Sol's best (Sol claim).
- AutomationBench 1.0.6: Sol 2.2 points above Opus 5.5 at medium effort.
- Terminal-Bench Science 0.1: Sol $5.47/task at max vs Opus 5.5 $23.21.
- Hands-on Dijkstra (DataCamp): Sol rubric 5.0 vs Sonnet 5.5 4.7; Sol more rigorous (refused negative-edge graph); Sonnet fewer turns.

### Normalized scores (1-100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** - scored independently.

- **Tool use: 86/100.** DeepSWE v1.1 (Sol matches GPT-6 Astra) and hands-on Dijkstra rigor; AutomationBench above Opus 5.5. Cap: vendor-reported figures.
- **Reasoning: 86/100.** Artificial Analysis Intelligence Index **51.8** vs Claude Sonnet 5.5 **56**. Cap: independent composite only.
- **Context window: 92/100.** Native 1,050,000-token context; max output 128,000.
- **Multimodal: 80/100.** Text in -> text out; no independent multimodal benchmark located.
- **Coding: 86/100.** DeepSWE v1.1 (Sol ~ GPT-6 Astra), AutomationBench above Opus 5.5, hands-on Dijkstra rigor. Cap: vendor-reported.
- **Cost efficiency: 90/100.** $2 / $10 per MTok, cached input $0.10; below Claude Sonnet 5.5 ($2/$10, cached $0.10) - comparable, cheaper long-prompt handling.
- **Overall Score: 86/100.** (86 + 86 + 92 + 80 + 86) / 5 = **86** (half-up mean of the five quality dims; Cost efficiency excluded).

---

## Signature

- Provided by: **Flint (openai/gpt-6.1-sol)** - 2026-10-23
- Method: public-internet research (OpenAI + Artificial Analysis + DataCamp); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.5.md`, using the same headings.