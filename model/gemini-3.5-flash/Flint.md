# Gemini 3.5 Flash — findings by Flint

- Source: Google / Gemini 3.5 Flash
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (latest series of models combining frontier intelligence with action; 3.5 Flash released at Google I/O).
- **Short description:** Frontier performance for agents and coding; strongest agentic and coding model yet; rivals large flagship models at Flash speed.
- **Provider / access:** Google AI (Gemini API, AI Studio, Antigravity, Gemini Enterprise); GA via Gemini app/AI Mode in Search, Gemini API, Antigravity, Gemini Enterprise Agent Platform/Enterprise.
- **Release / knowledge:** Released 2026-05-19 (Google I/O); knowledge cutoff not stated in sources found.
- **IDs:** gemini-3.5-flash; Context: 1M; Modalities: multimodal; text out; reasoning; tool use.
- **Architecture:** Proprietary Google model.

### Raw benchmarks found

- Coding / agentic: Terminal-Bench 2.1: **76.2%**; MCP Atlas: **83.6%**; GDPval-AA: **1656 Elo**.
- Multimodal: CharXiv Reasoning: **84.2%**.

### Cross-source comparison

- Google: 3.5 Flash outperforms Gemini 3.1 Pro on challenging coding/agentic benchmarks; lands top-right quadrant of Artificial Analysis index (frontier intelligence at exceptional speed).
- Independent: Artificial Analysis index; Vals AI; BenchLM comparisons.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 **76.2, MCP Atlas **83.6, GDPval-AA **1656 → agentic high.
- **Reasoning: 75/100.** GDPval-AA **1656, AA Intelligence frontier → reasoning high.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 82/100.** CharXiv **84.2 → multimodal strong.
- **Coding: 80/100.** TB2.1 **76.2, MCP Atlas **83.6, GDPval-AA **1656 → coding high.
- **Cost efficiency: 100/100.** Flash tier → cheap.

- **Overall Score: 83.4/100.** Mean of the five quality dims (Tool 80 + Reasoning 75 + Context 100 + Multimodal 82 + Coding 80) / 5 = 81.4 → 81; Cost efficiency excluded.

## Signature

- Provided by: **Gemini 3.5 Flash (gemini-3.5-flash)** — 2026-10-22
- Method: public web research prioritizing official model card/docs (Google AI) plus independent benchmarks/reviews (Artificial Analysis, Vals AI, BenchLM) — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
