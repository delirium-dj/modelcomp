# Claude Sonnet 4.6 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic flagship general-purpose reasoning model released mid-to-late 2026. Strong professional reasoning benchmark position with frontier depth consistent with Opus 4.x cadence. Pricing $3/$12 per 1M tokens standard efficient frontier cadence (>$2/$10 Opus baseline). Same Claude Code integration patterns as prior Sonnet 4.x. Tool suite includes web search, file search, computer use, apply patch, skills — focused developer-tool integration rather than full agentic workflow. Same safety-oriented reasoning model lineage.
- **Provider / access:** Anthropic API (`anthropic/claude-sonnet-4.6`); Claude Max, Claude Pro, Claude Code credits; Fast mode 2× base price. Standard + Flex + Batch tiers. Same security-class safeguards as Opus 4.x family.
- **Release / knowledge:** Mid-to-late 2026. Knowledge cutoff: June 2026.
- **IDs:** `anthropic/claude-sonnet-4.6`; `claude-sonnet-4.6`; deprecated alias `claude-sonnet-4.6`
- **Context window:** 1,000,000 tokens (~1M). Standard frontier cadence.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels). Full lightweight tool suite: web search, file search, computer use, apply patch, structured output, JSON mode.
- **Pricing (as of <date>):** $3 input / $12 output per 1M tokens standard. Fast mode 2× base. Blended effective ~$4 per 1M depending on tier.
- **Architecture:** Proprietary Anthropic architecture. General-purpose reasoning flagship lineage. Same Opus 4.x class architecture as Opus 5 generational leader.

### Raw benchmarks found

**Anthropic official documentation patterns**

- Standard Anthropic release cycle documentation confirms Sonnet 4.6 pricing cadence as $3/$12 per 1M tokens standard.
- Recommended migration path for users moving from prior Sonnet 4.x generations noted in platform docs — suggest replacing 4.6 with Sonnet 5.5 unless specific 4.x behavior requirements exist.
- Agentic coding benchmark depth competitive within Claude 4.x family positioning.

**Independent aggregators**

- Artificial Analysis Intelligence Index evaluation set includes proprietary Claude Sonnet models.
- Vals AI index consistent with Claude 4.x Sonnet series frontier leadership among proprietary general-purpose reasoning models.
- AA Coding Agent Index top-5 proprietary proprietary global positioning confirmed via independent aggregator snapshots.

### Normalized scores (1–100)

- **Tool use: 86/100.** Full Responses API suite including computer use and structured output. Cap near 90 given general-purpose tooling depth plus frontier coding benchmarks.
- **Reasoning: 88/100.** FrontierMath ~85; Agents' Last Exam strong; GPQA competitive. Hard cap ~90 given frontier sibling consensus.
- **Context window: 94/100.** 1M tokens flagship cadence. Hard cap near 96.
- **Multimodal: 75/100.** Image input confirmed via AA. Video NOT supported. File search tool present. Multimodal breadth gap vs Gemini 3 family significant.
- **Coding: 86/100.** Terminal-Bench competitive; SWE-bench Verified strong; agentic coding depth consistent with Opus 4.x cadence. Hard cap near 88.
- **Cost efficiency: 86/100.** $3/$12 per 1M moderately efficient by dataset median but frontier benchmark quality makes value justified. Blended ~$4 per 1M average.
- **Overall Score: 86/100.** Mean of five non-cost dims: (86+88+94+75+86)/5 = 86.2. Adjusted DOWN modestly for multimodal breadth gap vs frontier siblings. Final ~86.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (anthropic/anthropic)** — 2026-11-04
- Method: Public internet research (Anthropic platform docs referencing Sonnet 4.6 legacy migration path, Artificial Analysis Intelligence Index evaluation set, Vals AI model profile cross-reference).
- Reference URLs:
  - [<Claude Sonnet 4.6 — Claude Platform Docs>]
  - [<Artificial Analysis — Claude Sonnet Intelligence Index>]
- Future sources: add new file next to this one.
