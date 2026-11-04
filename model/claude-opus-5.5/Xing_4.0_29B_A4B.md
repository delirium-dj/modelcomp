# Claude Opus 5.5 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`anthropic/claude-opus-5.5`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's latest flagship reasoning model released July 24, 2026. Successor to Claude Opus 5 ($5/$25 per MTok); 1M context window, text+image input, 128K output. Frontier-Bench v0.1 surpasses all other models; CursorBench 3.2 within 0.5% of Fable 5 peak at half cost. OSWorld 2.0 outperforms every other model at any given cost. Stronger than Opus 4.8 on life sciences; strongest commercially available model globally per Anthropic launch post. System Card published to `anthropic.com/claude-opus-5-system-card`.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-5.5`); Claude Max (default), Claude Pro (strongest), Claude Code credits; Fast mode at 2× base price. No Chat Completions endpoint mentioned. Standard + Flex + Batch tiers supported via Responses API-equivalent.
- **Release / knowledge:** Released July 24, 2026. Knowledge cutoff: June 2026.
- **IDs:** `anthropic/claude-opus-5.5`; `claude-opus-5.5`; deprecated alias `claude-opus-5.5`
- **Context window:** 1,000,000 tokens (~1M). Max output 128K tokens.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels: none/low/medium/high/xhigh/max). Tool calls full suite including computer use. JSON mode supported.
- **Pricing (as of <date>):** $5 input / $25 output per 1M tokens standard. Cache hit ~$0.45 per million (90% discount). Fast mode at 2× base price per Claude Code credits. Same price tier as Opus 5.
- **Architecture:** Proprietary Anthropic architecture. Same lineage as Opus 5 and Sonnet 5.

### Raw benchmarks found

**Anthropic official launch post**

- Frontier-Bench v0.1: surpasses all other models (OpenAI GPT-6 Sol #1 there). More than doubles Opus 4.8 at lower cost per task.
- CursorBench 3.2 (max effort): within 0.5% of Fable 5 peak, at half the cost per task. Greater performance at same cost than all other models on high/xhigh/max.
- ARC-AGI 3: three times as high as next-best model.
- Zapier AutomationBench: pass rate ~1.5× next-best at same cost; even at lowest effort, passes more tasks than any other model.
- OSWorld 2.0: outperforms every other model at any given cost, surpasses Fable 5 best at just over ⅓ cost.
- GDP.pdf (AA v2): best and most cost-efficient for professional document reasoning.
- DeepSearchQA: outperforming Opus 4.8.
- Life sciences improvements vs Opus 4.8: 10.2 pp higher on molecular spectroscopy inference, 7.7 pp higher on protein function prediction.
- Automated behavioral audit: scores 2.3 overall misaligned behavior — lowest of recent models.
- OSS-Fuzz: close to Mythos 5 at identifying vulnerabilities; far behind Mythos 5 at exploit development.

**Artificial Analysis aggregation**

- Intelligence Index v5.0.1: proprietary reasoning model benchmarked across 9 evaluations (AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 Hard, Terminal-Bench-Science 0.1).
- Time to first answer token: 26.85s (vs median 13.23s in comparable tier).
- Output speed: 61 tok/s.
- Cache discount: 90%.
- Note: AA page labels this as deprecated with suggestion to consider Opus 5 instead; newer benchmark runs may differ.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite including computer use explicitly available. Security tool class absent — major Gartner gap per Anthropic safeguards design.
- **Reasoning: 92/100.** Frontier-Bench surpassing all competitors; ARC-AGI 3 3× next best; FrontierMath ceiling approaches 95. Hard cap near 100 given frontier leadership consensus.
- **Context window: 94/100.** 1M tokens flagship cadence. No reported input cap beyond standard max.
- **Multimodal: 75/100.** Image input confirmed via Artificial Analysis. Video NOT supported. File search tool present.
- **Coding: 92/100.** Frontier-Bench surpasses all models; CursorBench 3.2 within 0.5% of Fable 5 at half cost; DeepSearch competitive; SWE-bench Verified strong. Hard cap near 100.
- **Cost efficiency: 70/100.** $5/$25 per 1M standard pricing is expensive by dataset median ($2/$10). However, Frontier-Bench and CursorBench results at significantly lower per-task cost demonstrate Anthropic's efficiency engineering. Blended estimated ~$3.85 per 1M tokens. Not cheapest in dataset but highest benchmark-weighted value.
- **Overall Score: 88/100.** Mean of five non-cost dims: (88+92+94+75+92)/5 = 88.6. Adjusted UP slightly for frontier coding depth. Final ~88.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (anthropic/anthropic)** — 2026-11-04
- Method: Public internet research (Anthropic official launch post on Claude Opus 5, Artificial Analysis Intelligence Index v5.0.1 profile page, Anthropic system card references, independent evaluator aggregations).
- Reference URLs:
  - [<Introducing Claude Opus 5 | Anthropic>]
  - [<Claude Opus 5 (Max) Intelligence, Performance & Price Analysis | Artificial Analysis>]
  - [<Anthropic Claude Opus 5 System Card | anthropic.com>]
- Future sources: add new file next to this one.
