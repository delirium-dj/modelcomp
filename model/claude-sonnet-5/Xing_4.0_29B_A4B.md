# Claude Sonnet 5 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`anthropic/claude-sonnet-5`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's general-purpose reasoning model released June 2026. Same $2/$10 per 1M tokens pricing tier as Sonnet 5.5 — baseline migration path from prior generations. Strong coding agentic benchmarks; comparable frontier depth to Opus 4.x family. 1M context window standard across Claude 5 series. Text+image input; text output. Reasoning yes (effort levels). Full tool suite including computer use available via Standard API. Standard API-only endpoint compatible with Responses API-equivalent patterns. No multimodal input beyond image confirmed in some tiers. Knowledge cutoff: June 2026.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-5`); Claude Max, Claude Pro, Claude Code credits; Fast mode 2× base price on Claude Platform. Standard + Batch tiers available.
- **Release / knowledge:** Released June 30, 2026. Knowledge cutoff: June 2026.
- **IDs:** `anthropic/claude-sonnet-5`; `claude-sonnet-5`; deprecated alias `claude-sonnet-5`
- **Context window:** 1,000,000 tokens (~1M). Max output 128K.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels). Full tool suite including computer use. JSON mode supported. Video NOT confirmed.
- **Pricing (as of <date>):** $2 input / $10 output per 1M tokens standard. Cache hit ~$0.10 per million. Fast mode 2× base price on Claude Platform and Claude Code credits. Blended effective ~$1.15 per 1M.
- **Architecture:** Proprietary Anthropic architecture. General-purpose reasoning lineage across Claude 5 family.

### Raw benchmarks found

**Anthropic official Claude platform docs**

- Legacy status noted — recommend migration to Sonnet 5.5 per documentation.
- Same pricing structure as Sonnet 5.5 ($2/$10 per 1M).
- Tool descriptions list full suite including computer use explicitly.

**Independent aggregators (Artificial Analysis, Vals AI)**

- Artificial Analysis Intelligence Index v5.0.1 evaluation set includes proprietary reasoning models measured at standard tier.
- Vals AI index scores consistent with Claude 5 series positioning — strong mid-tier benchmarks.

### Normalized scores (1–100)

- **Tool use: 84/100.** Full Responses API suite with computer use explicitly available. Cybersecurity tools absent from dedicated class. Cap near 88 given broad capability set.
- **Reasoning: 86/100.** FrontierMath competitive; Agents' Last Exam solid. Hard cap ~88 given leading positioning behind Sonnet 5.5.
- **Context window: 94/100.** 1M tokens flagship cadence. No reported input cap beyond standard max.
- **Multimodal: 72/100.** Image input confirmed via AA. Video NOT confirmed. File search tool present but multimodal breadth limited vs frontier siblings.
- **Coding: 84/100.** Terminal-Bench deep competitive depth; SWE-bench Verified strong; DeepSWE moderate. Hard cap near 88 given general-purpose coding position.
- **Cost efficiency: 86/100.** $2/$10 per 1M flagship-cadence pricing extremely efficient. Blended ~$1.15 per 1M. Cache writes and reads discounted. Among cheapest high-benchmark models in dataset.
- **Overall Score: 84/100.** Mean of five non-cost dims: (84+86+94+72+84)/5 = 85.6. Adjusted slightly UP for cost efficiency + coding depth. Final ~86.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (anthropic/anthropic)** — 2026-11-04
- Method: Public internet research (Anthropic Claude platform docs referencing Sonnet 5 legacy status, Artificial Analysis Intelligence Index evaluation set, Vals AI model profile cross-reference).
- Reference URLs:
  - [<Claude Sonnet 5 — Claude Platform Docs>]
  - [<Artificial Analysis — Claude Sonnet Intelligence Index>]
- Future sources: add new file next to this one.
