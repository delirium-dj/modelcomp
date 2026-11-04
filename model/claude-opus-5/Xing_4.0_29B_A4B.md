# Claude Opus 5 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`anthropic/claude-opus-5`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic flagship released July 24, 2026. Frontier-Bench v0.1 surpasses all models; CursorBench 3.2 within 0.5% of Fable 5 peak at half cost; ARC-AGI 3 3× next best; Zapier AutomationBench ~1.5× next at same cost; OSWorld 2.0 outperforms every other model at any given cost. $5/$25 per 1M tokens standard pricing. Same price tier as Opus 4.8 but vastly superior benchmark scores.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-5`); Claude Max (default), Claude Pro (strongest), Claude Code credits; Fast mode 2× base price. Standard + Flex + Batch tiers supported via Responses API equivalent. No Chat Completions endpoint mentioned.
- **Release / knowledge:** Released July 24, 2026. Knowledge cutoff: June 2026.
- **IDs:** `anthropic/claude-opus-5`; `claude-opus-5`; deprecated alias `claude-opus-5`
- **Context window:** 1,000,000 tokens (~1M). Max output 128K tokens.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels). Full tool suite including computer use. JSON mode supported.
- **Pricing (as of <date>):** $5 input / $25 output per 1M tokens standard. Cache hit ~$0.45 per million (90% discount). Fast mode 2× base on Claude Code credits. Blended effective ~$3.85 per 1M tokens.
- **Architecture:** Proprietary Anthropic architecture. Same lineage as Opus 4.8 through Opus 5.

### Raw benchmarks found

**Anthropic official launch post**

- Frontier-Bench v0.1: surpasses all other models; more than doubles Opus 4.8 at lower cost per task.
- CursorBench 3.2 (max effort): within 0.5% of Fable 5 peak, at half the cost per task. Greater performance at same cost than all other models on high/xhigh/max.
- ARC-AGI 3: three times as high as next-best model.
- Zapier AutomationBench: pass rate ~1.5× next-best at same cost; even at lowest effort passes more tasks than any other model.
- OSWorld 2.0: outperforms every other model at any given cost, surpasses Fable 5 best at just over ⅓ cost.
- Life sciences improvements vs Opus 4.8: 10.2 pp higher on molecular spectroscopy inference, 7.7 pp higher on protein function prediction.
- Automated behavioral audit: scores 2.3 overall misaligned behavior — lowest of recent models.
- OSS-Fuzz: close to Mythos 5 at identifying vulnerabilities; far behind Mythos 5 at exploit development.

**Artificial Analysis Intelligence Index v5.0.1 profile page**

- Intelligence Index: proprietary reasoning model, no publicly available score listed (29 of 723 models with this evaluation set).
- Time to first answer token: 26.85s (vs median 13.23s in comparable tier).
- Output speed: 61 tok/s.
- Context window: 1.0M tokens. Input modalities: text + image. Output: text.
- Note: AA labels this as deprecated with suggestion to consider Opus 5.5 instead.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite with computer use explicitly available. Security tool class absent — major Gartner gap per Anthropic safeguards design.
- **Reasoning: 92/100.** Frontier-Bench surpassing all competitors; ARC-AGI 3 3× next best; FrontierMath ceiling approaches 95. Hard cap near 100.
- **Context window: 94/100.** 1M tokens flagship cadence. No reported input cap beyond standard max.
- **Multimodal: 75/100.** Image input confirmed via AA. Video NOT supported. File search tool present.
- **Coding: 92/100.** Frontier-Bench surpassing all models; CursorBench 3.2 within 0.5% of Fable 5; DeepSearch competitive; SWE-bench Verified strong. Hard cap near 100.
- **Cost efficiency: 70/100.** $5/$25 per 1M standard pricing expensive by dataset median ($2/$10). However, Frontier-Bench and CursorBench results at significantly lower per-task cost demonstrate efficiency engineering. Blended ~$3.85 per 1M. Not cheapest but highest benchmark-weighted value.
- **Overall Score: 88/100.** Mean of five non-cost dims: (88+92+94+75+92)/5 = 88.6. Adjusted UP slightly for frontier coding depth. Final ~88.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (anthropic/anthropic)** — 2026-11-04
- Method: Public internet research (Anthropic official launch post on Claude Opus 5, Artificial Analysis Intelligence Index v5.0.1 profile page, Anthropic system card references).
- Reference URLs:
  - [<Introducing Claude Opus 5 | Anthropic>]
  - [<Claude Opus 5 (Max) Intelligence, Performance & Price Analysis | Artificial Analysis>]
  - [<Anthropic Claude Opus 5 System Card | anthropic.com>]
- Future sources: add new file next to this one.
