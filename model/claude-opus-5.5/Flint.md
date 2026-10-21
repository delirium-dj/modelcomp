# Claude Opus 5.5 — findings by Flint

- Source: Anthropic / Claude Opus 5.5
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (first model of the Claude 5.5 family; successor to Claude Opus 5)
- **Short description:** Anthropic's flagship reasoning model, positioned for agentic coding, computer use and knowledge work; first release since Anthropic's pacing-the-frontier call.
- **Provider / access:** Anthropic API (`claude-opus-5-5`, `anthropic/claude-opus-5-5`); Claude Max / Fast mode; third-party hosts (Puter, Kiro, AWS GovCloud, …).
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff Jun 2026.
- **IDs:** `claude-opus-5-5` (Anthropic API); `anthropic/claude-opus-5-5` (Puter).
- **Context window:** 1,048,576 tokens (1M); max output 128K; pricing $4/M input / $20/M output; Fast mode ~2.5x default speed; ~30% faster than Opus 5.
- **Modalities:** Text, image, PDF input; text output; tool use; reasoning; multimodal (vision).
- **Pricing (as of 2026-10-22):** $4/M input / $20/M output (1M ctx); ~40% less to run than Opus 5.

- **Architecture:** Proprietary Anthropic model; tested pre-release by external evaluators (Frontier Design, METR); behavioral audit strongest to date.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic; Claude Opus 5.5 at xhigh effort)

Coding:

- Terminal-Bench 4.0: **66.4%** (Anthropic; Opus 5.5 xhigh)
- FrontierCode v1.1: **54.4%** (Anthropic)
- AutomationBench: **40%** (Anthropic / via Puter)
- Humanity's Last Exam (with tools): **67.7%** (Anthropic)

Long context:

- Context documented **1,048,576** tokens (1M); long-context eval not separated in sources found.

### Cross-source comparison

- Claude Opus 5.5 (Anthropic) reports state of the art on Terminal-Bench 4.0 (66.4%) and several independent benchmarks (CursorBench, GDPval-AA, AA-Briefcase); external evaluators (METR, Frontier Design) tested pre-release.
- Vals AI places Opus 5.5 at #2 on its Index (70.18%; #1 of 63 at 69.69%) — comparable to Claude Fable 5.1, Opus 5, GPT-6 Astra.
- Anthropic notes benchmark margins are less reliable at this capability level; Opus 5.5 vs Fable 5.1 gap narrower than scores suggest.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 4.0 **66.4%** → mid-high; agentic coding.
- **Reasoning: 70/100.** Vals Index 70.18% / HLE with tools **67.7%** → mid-high.
- **Context window: 100/100.** Documented **1,048,576** tokens (1M).
- **Multimodal: 85/100.** Text, image, PDF input; text output.
- **Coding: 92/100.** Terminal-Bench 4.0 **66.4%**, Code Migration **81%**, Vals Index ~70 → coding lead.
- **Cost efficiency: 60/100.** $4/$20 per 1M (1M ctx); 40% cheaper than Opus 5, still paid flagship.

- **Overall Score: 83/100.** Mean of the five quality dims (Tool 70 + Reasoning 70 + Context 100 + Multimodal 85 + Coding 92) / 5 = 83.4 → 83; Cost efficiency excluded.

## Signature

- Provided by: **Flint (claude-opus-5-5)** — 2026-10-22
- Method: public web research prioritizing official model card/docs (Anthropic news + system card, Puter specs) plus independent benchmarks/reviews (Vals AI, Puter) — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
